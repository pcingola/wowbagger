.PHONY: site clean serve

# src/html/ -> docs/. docs/ is committed: GitHub Pages serves it from main.
# plugins/<id>/examples/*.md -> docs/examples/<id>/, loaded by the Example dialog.
site: clean
	cp -R src/html/. docs/
	for f in plugins/*/examples/*.md; do \
		[ -e "$$f" ] || continue; id=$$(basename $$(dirname $$(dirname $$f))); \
		mkdir -p docs/examples/$$id && cp "$$f" docs/examples/$$id/; \
	done

clean:
	rm -rf docs

serve: site
	python3 -m http.server -d docs 8000
