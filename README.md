# tm-template

This is a userscript creation template that uses Svelte, UnoCSS and vite-plugin-monkey.

It creates a require script that loads the script locally so you don't have to update the script in the userscript manager.

## Usage

0. Fork and create a template. (or just clone)

1. Name the script in package.json and add match/grants in metadata.ts.

2. Run `npm run dev` to create the require script and install it in your browser of choice (change the browser in package.json if necessary). **Note:** remember to do this again when you change `metadata.ts`.

3. Run `npm run build` to run the Vite build in watch mode.

4. Make changes and the script will rebuild, then just F5 in the browser to see the changes.

## Why no HMR for the userscript?

HMR is technically possible using `vite-plugin-monkey` however it will only work on sites without CSP directives. Meaning, not too many sites.

The recommended workaround is to disable CSP which is imo not acceptable.

## I want to style with HMR

If styling is needed use `npm run style` to start a dev server without `vite-plugin-monkey`, this will allow for styling with HMR enabled.
