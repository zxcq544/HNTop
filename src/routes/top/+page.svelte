<script>
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);
	// $: items = data.items;
	// $: sorted = data.sort;

	async function load_items(sort) {
		console.log(sort);
		let res;
		if (sort == 'best') {
			res = await fetch('/top?sort=best');
		} else {
			res = await fetch('/top');
		}
		items = await res.json();
		console.log(items);
		// return items;
	}
</script>

<svelte:head>
	<title>HNTop</title>
	<meta name="description" content="HNTop stories" />
</svelte:head>
<div class="text-column">
	<div class="buttons">
		<!-- <a href="/top?sort=best"> BEST LINK</a> -->
		<!-- <a href="/top"> NORMAL LINK</a> -->
	</div>
	sorted={data.sort}
	<table>
		<tr>
			<th>
				{#if data.sort == null}
					<a href="/top?sort=best">Score</a>
				{:else}
					<a href="/top">Score</a>
				{/if}
			</th>
			<th>Title</th>
			<th>Comments</th>
		</tr>
		{#each data.items as item}
			<tr>
				<td> {item.score}</td>
				<td><a href={item.url}>{item.title}</a></td>
				<td><a href="page/{item.id}">Comments {item.descendants}</a></td>
			</tr>
		{/each}
	</table>
</div>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
	}
	a:active {
		color: blueviolet;
	}
	tr {
		height: 2rem;
	}
</style>
