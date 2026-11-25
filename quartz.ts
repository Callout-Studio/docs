// The texts and links of this site. Everything else, the look, the components
// and how they are placed, is Callout-Studio/docs-theme's: theme/site.ts there.
// assemble.mjs copies that theme next to this file.

import { createSite } from "./theme/site"

const repository = "Callout-Studio/obsidian"

const site = await createSite({
  repository,
  branch: "master",
  ogImage: {
    heading: "Your callouts. Your style.",
    text: "The user guide of Callout Studio, the Obsidian plugin for creating and styling your own callouts.",
  },
  chapterCards: true,
  notFound: {
    siteName: "the user guide",
    surprise: "https://www.youtube.com/watch?v=xMHJGd3wwZk",
  },
  rail: {
    title: "The plugin",
    links: [
      { text: "Release notes", href: `https://github.com/${repository}/releases`, icon: "tag" },
      { text: "Star on GitHub", href: `https://github.com/${repository}`, icon: "star" },
    ],
  },
  hero: {
    eyebrow: "Callout Studio user guide",
    title: "Your callouts.",
    titleAccent: "Your style.",
    lead: "An Obsidian plugin for creating and styling your own callouts. Use them as blocks, headings, or right inside a sentence.",
    primary: { text: "Get it for Obsidian", href: "https://community.obsidian.md/plugins/callout-studio" },
    secondary: { text: "Star on GitHub", href: "https://github.com/Callout-Studio/obsidian", icon: "star" },
    image: "three-forms.svg",
  },
  footer: {
    name: "Callout Studio",
    year: 2026,
    license: { text: "ISC license", href: `https://github.com/${repository}/blob/master/LICENSE` },
    links: [
      { text: "Privacy", href: "https://callout-studio.github.io/internal-docs/27-privacy-and-permissions" },
      { text: "Contributing", href: `https://github.com/${repository}/blob/master/docs/CONTRIBUTING.md`, hideOnPhone: true },
      { text: "Install", href: "https://community.obsidian.md/plugins/callout-studio", hideOnSmallPhone: true },
      { text: "Internal docs", href: "https://callout-studio.github.io/internal-docs/", hideOnPhone: true },
    ],
  },
})

export default site.config
export const layout = site.layout
