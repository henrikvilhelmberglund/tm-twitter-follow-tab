import fs from "fs/promises";
import path from "path";
import { metadata } from "./metadata.ts";

const packageJsonPath = path.join(__dirname, "package.json");

// const matchUrl = 'https://x.com/home'; // replace with your match URL
const distDir = path.join(__dirname, "dist");

async function createUserscriptFile() {
	try {
		const files = await fs.readdir(distDir);
		const jsFile = files.find((file) => path.extname(file) === ".js");
		const packageJsonContent = await fs.readFile(packageJsonPath, "utf8");
		const packageJson = JSON.parse(packageJsonContent);
		const repoName = packageJson.name;
		const version = packageJson.version;
		const author = packageJson.author;
		const description = packageJson.description;
		const matchUrl = metadata.match;
		const icon = metadata.icon;

		if (jsFile) {
			const userscriptContent = `// ==UserScript==
// @name       ${repoName}
// @namespace  npm/vite-plugin-monkey
// @version    ${version}
// @author     ${author ?? "monkey"}
// @description ${description ?? "Load script"}
// @icon       ${icon}
// @match      ${matchUrl}
// @require    file:///${path.join(distDir, jsFile)}
// ==/UserScript==`;

			await fs.writeFile("require.user.js", userscriptContent);
			console.log("Userscript file created successfully!");
		} else {
			console.error("No .js files found in /dist");
		}
	} catch (err) {
		console.error(err);
	}
}

createUserscriptFile();
