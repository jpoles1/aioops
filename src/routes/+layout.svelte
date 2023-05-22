<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import Icon from '@iconify/svelte';
	import { pb } from '$lib/pocketbase'

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	$: auth = pb.authStore
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"><Icon icon="ph:robot-fill" height=40/></svelte:fragment>
			<h2 class="h2 hover:variant-ghost duration-500 p-2 rounded-md"><a href="/">AI OOPS</a></h2>
			<svelte:fragment slot="trail">

				{#if !auth.isValid}<a href="/login" class="hover:variant-ghost variant-glass duration-500 p-2 rounded-md">Login</a>
				{:else}<a href="/logout" class="hover:variant-ghost variant-glass duration-500 p-2 rounded-md">Logout</a>{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
