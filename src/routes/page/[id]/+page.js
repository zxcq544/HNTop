import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const ssr = true;

// /** @type {import('./$types').PageLoad} */
// export async function load({ fetch, url }) {
// 	var need_sorted = url.searchParams.get('sorted');
// 	var server_response = await fetch('http://localhost:8085').json();

// 	return {
// 		post: {
// 			title: `sorted = ${need_sorted}`,
// 			content: `server response is ${server_response}`
// 		}
// 	};
// }
