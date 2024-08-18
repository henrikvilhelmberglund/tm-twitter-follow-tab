// @ts-nocheck
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";
import UnoCSS from "unocss/vite";
import { metadata } from "./metadata.ts";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	return {
		plugins: [
			svelte(),
			UnoCSS(),

			command === "build" &&
				monkey({
					entry: "src/main.ts",
					server: {
						prefix: false
					},
					userscript: {
						...metadata
					}
				})
		]
	};
});
