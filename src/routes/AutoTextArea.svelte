<script lang="ts">
	export let value = '';
	export let min_rows = 1;
	export let max_rows: number;
    let kargs;
    $: ({ value, min_rows, max_rows, ...kargs } = $$props);

	$: min_height = `${1 + min_rows * 1.2}em`;
	$: max_height = max_rows ? `${1 + max_rows * 1.2}em` : `auto`;
</script>

<div class="container !border-none">
	<pre
		aria-hidden="true"
		style="min-height: {min_height}; max-height: {max_height}; border: none;"
	>{value + '\n'}</pre>
	<textarea bind:value class="input textarea"></textarea>	
</div>

<style>
	.container {
		position: relative;
	}
	
	pre, textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		border: 1px solid #eee;
		line-height: 1.2;
		overflow: auto;
	}
	
	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>