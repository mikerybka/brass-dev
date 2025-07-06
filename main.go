package main

import (
	"crypto/sha1"
	_ "embed"
	"fmt"
	"log"
	"net/http"

	"github.com/mikerybka/util"
)

//go:embed main.js
var mainJS []byte

//go:embed main.css
var mainCSS []byte

func main() {
	jsETag := fmt.Sprintf(`"%x"`, sha1.Sum(mainJS))
	cssETag := fmt.Sprintf(`"%x"`, sha1.Sum(mainCSS))
	http.HandleFunc("/main.js", func(w http.ResponseWriter, r *http.Request) {
		// Check If-None-Match
		if match := r.Header.Get("If-None-Match"); match == jsETag {
			w.WriteHeader(http.StatusNotModified)
			return
		}

		// Set headers
		w.Header().Set("ETag", jsETag)
		w.Header().Set("Content-Type", "application/javascript")
		// w.Header().Set("Cache-Control", "public, max-age=300")

		// Write content
		w.Write(mainJS)
	})
	http.HandleFunc("/main.css", func(w http.ResponseWriter, r *http.Request) {
		// Check If-None-Match
		if match := r.Header.Get("If-None-Match"); match == cssETag {
			w.WriteHeader(http.StatusNotModified)
			return
		}

		// Set headers
		w.Header().Set("ETag", cssETag)
		w.Header().Set("Content-Type", "text/css")
		// w.Header().Set("Cache-Control", "public, max-age=300")

		// Write content
		w.Write(mainCSS)
	})
	log.Fatal(http.ListenAndServe(":"+util.RequireEnvVar("PORT"), nil))
}
