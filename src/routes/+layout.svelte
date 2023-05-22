<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	// Most of your app wide CSS should be put in this file
	import '../app.css';


	import Icon from '@iconify/svelte';
	import { pb } from '$lib/pocketbase'
	import Header from './header.svelte';
	$: auth = pb.authStore
</script>


<div class="bg-neutral w-full h-full">
	<Header />
	<slot/>
</div>
