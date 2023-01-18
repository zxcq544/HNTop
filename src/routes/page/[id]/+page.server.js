/** @type {import('./$types').PageData} */
export async function load({ fetch, params }) {
	var page_id = params.id;
	console.log(page_id);
	var res;

	res = await fetch(`http://localhost:8085/api/items/${page_id}`);

	var server_response = await res.json();
	// console.log(server_response);
	return { item: server_response, page_id: page_id };
}
