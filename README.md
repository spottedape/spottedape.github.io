# The Spotted Ape

The website is authored in Quarto and published as a static site. The homepage's interactive matrix and masterclass timeline are bundled locally with React, Tailwind CSS and Framer Motion.

## Build and preview

```sh
npm ci
npm run build
quarto preview
```

The GitHub Pages workflow builds the local homepage assets before running `quarto render`. The site remains static; no client data or backend service is required.

Python analysis and notebook dependencies are managed separately with `uv`.
