# SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
# SPDX-License-Identifier: AGPL-3.0-only
# animated-text-profile-header: no npm dependencies. Needs node >= 20; ImageMagick only for `make metrics`; npx wrangler for dev/deploy.
COMPAT ?= 2026-10-01

.PHONY: help build metrics test dev deploy

help:
	@echo "make build                     site.config.json -> src/text/site.generated.js"
	@echo "make metrics                   re-measure font widths (ImageMagick, Liberation fonts)"
	@echo "make test                      build, then run the unit tests"
	@echo "make dev                       local preview at http://localhost:8788/text/help"
	@echo "make deploy PROJECT=<name>     deploy to your Cloudflare Pages project"

build:
	node scripts/build.mjs

metrics:
	node scripts/build-metrics.mjs

test: build
	node --test test/*.test.mjs

dev: build
	npx wrangler pages dev ./public-empty --compatibility-date=$(COMPAT)

deploy: test
	@test -n "$(PROJECT)" || { echo "usage: make deploy PROJECT=<your-pages-project>"; exit 1; }
	npx wrangler pages deploy ./public-empty --project-name=$(PROJECT) --branch production
