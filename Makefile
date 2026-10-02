.PHONY: site clean serve

# src/html/ -> docs/. docs/ is committed: GitHub Pages serves it from main.
site: clean
	cp -R src/html/. docs/

clean:
	rm -rf docs

serve: site
	python3 -m http.server -d docs 8000
