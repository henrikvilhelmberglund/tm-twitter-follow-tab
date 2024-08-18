import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import "uno.css";

// use to target an element on the website, here targeting a google div
// const customTarget = document.querySelector("div.o3j99.qarstb");
const customTarget = "";

const app = mount(App, {
	target: (() => {
		if (customTarget) {
			return customTarget;
		} else if (!document.querySelector("#app")) {
			const app = document.createElement("div");
			document.body.append(app);
			return app;
		} else {
			return document.querySelector("#app");
		}
	})()
});

export default app;
