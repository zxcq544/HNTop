/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch, url }) {
	var need_sorted = url.searchParams.get('sort');
	console.log('+server ' + need_sorted);
	var res;

	if (need_sorted === 'best') {
		res = await fetch(`http://localhost:8085/api/items?sort=best`);
	} else {
		res = await fetch(`http://localhost:8085/api/items`);
	}
	var server_response = await res.text();
	// console.log(server_response);
	return new Response(server_response);
}
