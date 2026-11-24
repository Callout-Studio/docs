# Callout Studio Docs

The user guide of [Callout Studio](https://github.com/Callout-Studio/obsidian), the Obsidian plugin, as a website:

**https://callout-studio.github.io/docs/**

The pages are not kept here. They are written in the plugin's repository, in [`docs/user-guide`](https://github.com/Callout-Studio/obsidian/tree/master/docs/user-guide), and this repository only builds them with [Quartz](https://quartz.jzhao.xyz) 5. To fix or add a page, change it there.

The plugin's internal docs have a site of their own: [Callout Studio Internal Docs](https://github.com/Callout-Studio/internal-docs).

## How the site updates

1. A push to the plugin's `master` that changes `docs/user-guide/` or `assets/user-guide/` runs its [Docs site](https://github.com/Callout-Studio/obsidian/blob/master/.github/workflows/docs-site.yml) workflow.
2. That workflow writes the new commit into [`source-commit.txt`](source-commit.txt) here. It pushes with a deploy key of this repository, which never expires.
3. That push runs [Build and deploy](.github/workflows/deploy.yml). It checks out the pages at that commit, prepares them with [`prepare-content.mjs`](prepare-content.mjs), builds the site with Quartz and publishes it on GitHub Pages.

To rebuild by hand, open **Actions → Build and deploy → Run workflow**. Leave the commit empty to build the one in `source-commit.txt`, or write `master` for the newest.

## What is here

| File | What it does |
| --- | --- |
| [`quartz.config.yaml`](quartz.config.yaml) | Quartz's settings: the site's name, address, colors and plugins. |
| [`quartz.ts`](quartz.ts) | Keeps the pages in the order of their file names. |
| [`site.json`](site.json) | Which folder to publish, which pictures to copy, and where each docs site lives. |
| [`prepare-content.mjs`](prepare-content.mjs) | Turns the folder into Quartz pages: titles, links and alerts. The text itself is not changed. |
| [`source-commit.txt`](source-commit.txt) | The plugin commit the site is built from. |

## Preview on your computer

```bash
git clone --depth 1 --branch v5.2.2 https://github.com/jackyzha0/quartz.git quartz
git clone --filter=blob:none --sparse https://github.com/Callout-Studio/obsidian.git source
git -C source sparse-checkout set docs/user-guide assets/user-guide
cp quartz.config.yaml quartz.ts quartz/
(cd quartz && npm ci && npm run install-plugins)
node prepare-content.mjs site.json source quartz/content
(cd quartz && npx quartz build --serve)
```

Then open http://localhost:8080. The `quartz` and `source` folders are ignored by Git.

## Upgrading Quartz

Change `QUARTZ_VERSION` in [`deploy.yml`](.github/workflows/deploy.yml), preview with the same version, and push.
