<script>
	export let by;
	export let id;
	export let time;
	export let text;
</script>

<div class="author_info">
	<span>by: {by}</span>
	<span>id: {id}</span>
	<span>time: {new Date(time * 1000)}</span><br />
</div>
<div class="comment_text">{@html text}</div>
<button>reply</button>

<style>
	.author_info {
		font-size: small;
		margin-bottom: 5px;
	}
	/* button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        border: 0;
        border-radius: 4px;
        vertical-align: middle;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        background-color: #8a2be2;
        box-shadow: 1px 1px 0px 2px #6821aa;
        padding: 0.6em;
        transition: border-color 0s;
    }
    button:active {
        transform: translate(2px, 2px);
        box-shadow: 0px 0px 0px 0px #6821aa;
        outline: none;
        border-color: #6821aa;
    }
    button:hover {        
        background-color: #973eea;
    } */
	.comment_text {
		margin-bottom: 10px;
	}
</style>
