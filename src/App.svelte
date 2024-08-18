<script lang="ts">
	import gmFetch from "@sec-ant/gm-fetch";
	import Counter from "./lib/Counter.svelte";
	let url = "";

	async function doStuff() {
		const followButton = document.querySelectorAll("a[role=tab]")[1] as HTMLAnchorElement;
		// console.log(followButton);
		followButton.click();
		// const response = await gmFetch(link.href);
		// const html = await response.text();
		// const parser = new DOMParser();
		// const doc = parser.parseFromString(html, "text/html");
	}

	setTimeout(() => {
		doStuff();
	}, 2000);
</script>

<!-- <main class="flex flex-col items-center w-full">
	<div class="size-48 w-96 h-60 left-0 border-orange-400 border-solid rounded-xl border-2">
		<h6 class="text-xl p-2">Hello!</h6>
		<p class="p-2">If you can see this the userscript is working properly.</p>
    <Counter/>
	</div>
</main> -->

<style>
</style>
