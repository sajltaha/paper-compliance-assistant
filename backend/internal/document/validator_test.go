package document

import (
	"archive/zip"
	"bytes"
	"errors"
	"testing"
)

func TestValidatePDF(t *testing.T) {
	content := []byte("%PDF-1.7\nsynthetic test document")
	got, err := ValidateAndDescribe("paper.PDF", content, 0)
	if err != nil {
		t.Fatalf("ValidateAndDescribe() error = %v", err)
	}
	if got.Kind != KindPDF || got.SizeBytes != int64(len(content)) || len(got.SHA256) != 64 {
		t.Fatalf("unexpected metadata: %#v", got)
	}
}

func TestRejectsInvalidPDFSignature(t *testing.T) {
	_, err := ValidateAndDescribe("paper.pdf", []byte("not a pdf"), 0)
	if !errors.Is(err, ErrInvalidContent) {
		t.Fatalf("expected ErrInvalidContent, got %v", err)
	}
}

func TestValidateDOCX(t *testing.T) {
	content := makeDOCX(t, "[Content_Types].xml", "word/document.xml")
	got, err := ValidateAndDescribe("paper.docx", content, 0)
	if err != nil {
		t.Fatalf("ValidateAndDescribe() error = %v", err)
	}
	if got.Kind != KindDOCX {
		t.Fatalf("kind = %q, want %q", got.Kind, KindDOCX)
	}
}

func TestRejectsIncompleteDOCX(t *testing.T) {
	content := makeDOCX(t, "[Content_Types].xml")
	_, err := ValidateAndDescribe("paper.docx", content, 0)
	if !errors.Is(err, ErrInvalidContent) {
		t.Fatalf("expected ErrInvalidContent, got %v", err)
	}
}

func TestRejectsUnsafeFilename(t *testing.T) {
	_, err := ValidateAndDescribe("../paper.pdf", []byte("%PDF-1.7"), 0)
	if !errors.Is(err, ErrInvalidFilename) {
		t.Fatalf("expected ErrInvalidFilename, got %v", err)
	}
}

func TestRejectsUnsupportedFormat(t *testing.T) {
	_, err := ValidateAndDescribe("paper.txt", []byte("text"), 0)
	if !errors.Is(err, ErrUnsupportedFormat) {
		t.Fatalf("expected ErrUnsupportedFormat, got %v", err)
	}
}

func TestRejectsOversizedDocument(t *testing.T) {
	_, err := ValidateAndDescribe("paper.pdf", []byte("%PDF-1.7"), 4)
	if !errors.Is(err, ErrDocumentTooLarge) {
		t.Fatalf("expected ErrDocumentTooLarge, got %v", err)
	}
}

func makeDOCX(t *testing.T, names ...string) []byte {
	t.Helper()
	var buffer bytes.Buffer
	writer := zip.NewWriter(&buffer)
	for _, name := range names {
		file, err := writer.Create(name)
		if err != nil {
			t.Fatal(err)
		}
		if _, err := file.Write([]byte("<xml/>")); err != nil {
			t.Fatal(err)
		}
	}
	if err := writer.Close(); err != nil {
		t.Fatal(err)
	}
	return buffer.Bytes()
}
