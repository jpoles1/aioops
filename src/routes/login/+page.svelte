<script lang="ts">
  import { browser } from '$app/environment';
  import type { PageData } from './$types';
  import { pb } from '$lib/pocketbase'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

  if (pb.authStore.isValid) {
    console.log(pb.authStore);
    redirect(303, "/");
  }

  export let data: PageData;
  let authData = {}
  async function gotoAuthProvider(method: any) {
    authData = await pb.collection('users').authWithOAuth2({ provider: method.name });
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
    goto("/");
  }
  
</script>
<div class="card w-[80%] m-auto mt-20 p-5">
  <h1 class="h1">Login Providers:</h1>
  <div class="flex flex-row align-middle justify-center w-full">
    {#each data.authMethods.authProviders as method}
      <div class="mx-5">
        <button type="button" class="btn btn-xl variant-filled-primary rounded-lg shadow-md font-bold capitalize" on:click={() => gotoAuthProvider(method)}>{method.name}</button>
      </div>
    {/each}
  </div>
</div>