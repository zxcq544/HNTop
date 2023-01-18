/** @type {import('./$types').PageData} */
export async function load({ fetch, url }) {
	var need_sorted = url.searchParams.get('sort');
	console.log(need_sorted);
	var res;

	res = await fetch(`http://localhost:8085/api/items?sort=${need_sorted}`);

	var server_response = await res.json();
	// console.log(server_response);
	return { items: server_response, sort: need_sorted };
}
