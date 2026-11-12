// @ts-check
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const site = 'https://thespottedape.com';

// The archive carried over from the previous thespottedape.com site lives in public/ as static HTML.
// List its pages in the sitemap so search engines keep finding them (pitch decks stay out of search).
const archiveDirs = ['Courses', 'research', 'posts', 'portfolio'];
/** @param {string} dir @returns {string[]} */
const htmlFiles = (dir) =>
	readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) return name === '_site' ? [] : htmlFiles(path);
		return name.endsWith('.html') ? [path] : [];
	});
const archivePages = archiveDirs.flatMap((dir) =>
	htmlFiles(join('public', dir)).map((file) =>
		new URL(relative('public', file).replace(/(^|\/)index\.html$/, '$1'), `${site}/`).href,
	),
);

// https://astro.build/config
export default defineConfig({
	site,
	// Retired pages from the previous site point to their current equivalents.
	redirects: {
		'/appointment': '/contact/',
		'/challenges': '/services/',
		'/methodology': '/services/',
		'/khairos': '/services/',
	},
	integrations: [sitemap({
		// Working pages stay out of search: the style guide and the lab prototype are noindex.
		filter: (page) => !page.includes('/style-guide/') && !page.includes('/lab/'),
		customPages: archivePages,
	}), mdx()],
});
