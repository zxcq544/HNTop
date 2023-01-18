<script>
	import { onMount } from 'svelte';
	import Comments from './Comments.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: comments = data.item;
	// console.log('data is');
	// console.log(data);
	// $: items = data.items;
	// $: sorted = data.sort;
	// async function load_items(sort) {
	// 	console.log(sort);
	// 	let res;
	// 	if (sort == 'best') {
	// 		res = await fetch('/top?sort=best');
	// 	} else {
	// 		res = await fetch('/top');
	// 	}
	// 	items = await res.json();
	// 	console.log(items);
	// 	// return items;
	// }
	// onMount(async () => {
	// 	for (const [index, value] of Object.entries(comments)) {
	// 		if (index != -1) {
	// 			if (comments[index].kids) {
	// 				comments[index].show_kids = true;
	// 				let stack = [];
	// 				let num_kids = 0;
	// 				let current_top_index = comments[index].id;
	// 				stack.push(comments[index].id);
	// 				while (stack.length > 0) {
	// 					let current_element_index = stack.shift();
	// 					if (comments[current_element_index].deleted || comments[current_element_index].dead) {
	// 						num_kids -= 1;
	// 					}
	// 					if (comments[current_element_index].kids) {
	// 						num_kids += comments[current_element_index].kids.length;
	// 						stack.push(...comments[current_element_index].kids);
	// 					}
	// 				}
	// 				if (num_kids > 0) {
	// 					comments[current_top_index].num_kids = num_kids;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	// console.log(comments);
	// });
</script>

<svelte:head>
	<title>{data.item[-1].title}</title>
	<meta name="description" content={data.item[-1].title} />
</svelte:head>
<div class="text-column">
	<!-- page_id={data.page_id} -->
	<!-- {JSON.stringify(data.item)} -->
	<h1><a href={data.item[-1].url}>{data.item[-1].title}</a></h1>

	<Comments bind:comments comment_id={-1} />
</div>

<style>
</style>
