.PHONY: site clean serve

# docs/ is committed: GitHub Pages serves it from main.
# src/html/ (images) is copied as is; src/build.mjs then writes docs/index.html
# and docs/skills/<slug>/index.html from src/skills.json, src/templates/ and
# plugins/*/examples/*.md.
site: clean node_modules/marked/package.json
	cp -R src/html/. docs/
	node src/build.mjs

node_modules/marked/package.json: package-lock.json
	npm ci --no-fund --no-audit
	touch $@

clean:
	rm -rf docs

serve: site
	python3 -m http.server -d docs 8000
