const fs=require('fs'),vm=require('vm'),assert=require('assert');
class Classes{constructor(){this.s=new Set()}add(x){this.s.add(x)}remove(x){this.s.delete(x)}contains(x){return this.s.has(x)}toggle(x,force){const on=force===undefined?!this.s.has(x):force;on?this.s.add(x):this.s.delete(x);return on}}
class Element{constructor(tag='div'){this.tag=tag;this.value='';this.checked=false;this.disabled=false;this.files=[];this.children=[];this.events={};this.style={};this.classList=new Classes();this.textContent='';this.attributes={}}set className(v){this.classList=new Classes();v.split(/\s+/).filter(Boolean).forEach(x=>this.classList.add(x))}get className(){return [...this.classList.s].join(' ')}addEventListener(t,f){this.events[t]=f}append(...n){this.children.push(...n)}replaceChildren(...n){this.children=n}setAttribute(k,v){this.attributes[k]=v}focus(){}async click(){if(this.events.click)return await this.events.click()}async dispatch(t){if(this.events[t])return await this.events[t]()}}
const nodes=new Map(),get=id=>{if(!nodes.has(id))nodes.set(id,new Element());return nodes.get(id)};
['resultsView','confirmArea','progressArea'].forEach(id=>get(id).classList.add('hidden'));get('statusFilter').value='all';
const exportedBlobs=[];
const c=vm.createContext({document:{getElementById:get,createElement:tag=>new Element(tag)},setTimeout:fn=>{fn();return 1},Blob,URL:{createObjectURL:blob=>{exportedBlobs.push(blob);return 'blob:test'},revokeObjectURL:()=>{}},console});
const source=fs.readFileSync(require('path').join(__dirname,'../prototype/index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];vm.runInContext(source,c);
(async()=>{
 await get('runDemo').click();assert.match(get('error').textContent,/Select a manuscript/);
 await get('loadDemo').click();assert.match(get('criteriaInput').value,/abstract/);
 await get('runDemo').click();assert.match(get('error').textContent,/Review and confirm/);
 await get('reviewCriteria').click();assert.equal(get('criteriaList').children.length,5);
 get('confirmed').checked=true;const pending=get('runDemo').click();
 ['runDemo','paperFile','loadDemo','criteriaInput','reviewCriteria','confirmed'].forEach(id=>assert(get(id).disabled));
 await pending;assert(!get('resultsView').classList.contains('hidden'));
 ['runDemo','paperFile','loadDemo','criteriaInput','reviewCriteria','confirmed'].forEach(id=>assert(!get(id).disabled));
 assert.equal(get('findings').children.length,5);assert.equal(vm.runInContext('results.filter(r=>r.status==="fail").length',c),2);
 assert.equal(vm.runInContext('results.filter(r=>r.status==="not_applicable").length',c),1);
 get('statusFilter').value='not_applicable';await get('statusFilter').dispatch('change');assert.equal(get('findings').children.length,1);
 get('statusFilter').value='all';await get('statusFilter').dispatch('change');
 await get('exportJson').click();
 const firstExport=JSON.parse(await exportedBlobs.at(-1).text());
 assert.equal(firstExport.manuscript_name,vm.runInContext('resultName',c));
 assert.equal(firstExport.findings.length,5);
 const completedName=firstExport.manuscript_name;
 get('paperFile').files=[{name:'replacement-B.pdf',size:1024}];await get('paperFile').dispatch('change');
 assert.equal(vm.runInContext('selectedName',c),'replacement-B.pdf');
 await get('exportJson').click();
 const afterReplacement=JSON.parse(await exportedBlobs.at(-1).text());
 assert.equal(afterReplacement.manuscript_name,completedName,'Export must retain the completed run filename after a new selection');
 assert.deepEqual(afterReplacement.findings,firstExport.findings);
 const evButton=get('findings').children[0].children[2].children[0];await evButton.click();assert.equal(evButton.attributes['aria-expanded'],'true');
 get('statusFilter').value='fail';await get('statusFilter').dispatch('change');assert.equal(get('findings').children.length,2);
 await get('recheck').click();assert(!get('inputView').classList.contains('hidden'));
 get('criteriaInput').value='Custom safety criterion';await get('criteriaInput').dispatch('input');await get('reviewCriteria').click();get('confirmed').checked=true;await get('runDemo').click();assert.equal(vm.runInContext('results[0].status',c),'insufficient_evidence');
 await get('newCheck').click();get('paperFile').files=[{name:'bad.exe',size:10}];await get('paperFile').dispatch('change');assert.match(get('error').textContent,/PDF or DOCX/);
 get('paperFile').files=[{name:'large.pdf',size:21*1024*1024}];await get('paperFile').dispatch('change');assert.match(get('error').textContent,/20 MiB/);
 get('paperFile').files=[{name:'valid.docx',size:1024}];await get('paperFile').dispatch('change');assert.equal(vm.runInContext('selectedName',c),'valid.docx');
 await get('loadDemo').click();
 get('paperFile').files=[{name:'bad.exe',size:10}];await get('paperFile').dispatch('change');
 assert.equal(vm.runInContext('selectedName',c),'','Invalid replacement must clear old manuscript');
 await get('runDemo').click();assert.match(get('error').textContent,/Select a manuscript/);
 await get('loadDemo').click();get('paperFile').files=[{name:'empty.pdf',size:0}];await get('paperFile').dispatch('change');assert.equal(vm.runInContext('selectedName',c),'');assert.match(get('error').textContent,/non-empty/);
 get('paperFile').files=[{name:'boundary.pdf',size:20*1024*1024}];await get('paperFile').dispatch('change');assert.equal(vm.runInContext('selectedName',c),'boundary.pdf');
 get('paperFile').files=[{name:'too-big.pdf',size:20*1024*1024+1}];await get('paperFile').dispatch('change');assert.equal(vm.runInContext('selectedName',c),'');assert.match(get('error').textContent,/20 MiB/);
 await get('loadDemo').click();get('paperFile').files=[];await get('paperFile').dispatch('change');assert.equal(vm.runInContext('selectedName',c),'');
 console.log('PASS: empty input, confirmation, 5-result demo with all four statuses, export filename preservation after replacement, evidence toggle, status filter, recheck, custom-criterion abstention and file validation including stale replacements, empty files and exact byte boundaries.');
 console.log('Scope: JavaScript handlers in a minimal simulated DOM; not a visual browser test or AI evaluation.');
})().catch(e=>{console.error(e);process.exit(1)});


