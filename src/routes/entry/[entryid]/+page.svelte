
<script lang="ts">
	import { onMount } from "svelte";
	import { pb, uaccount } from "$lib/pocketbase";
    import {toast} from '@zerodevx/svelte-toast'
    import {goto} from "$app/navigation"
    
    import OopsEntry from "../../OopsEntry.svelte";
    
    let entry = {};
    export let data;
    $: entryid = data.entryid;
</script>

<div class="card shadow-lg bg-base-100 p-10 m-10 mx-auto max-w-[80%]">
    <OopsEntry bind:entryid={entryid}/>
</div>
