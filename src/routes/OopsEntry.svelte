
<style lang="postcss">
    :global(.sv-dropdown) {
       @apply  !bg-base-300;
       position: relative !important;
    }
    :global(.svelecte input::placeholder) {
        @apply !text-primary-content;
    }
    :global(.svelecte .sv-input-row .sv-item) {
        @apply bg-base-300  mr-2 px-2 flex rounded-lg;
    }
    :global(.svelecte.input) {
        @apply !pl-0;
    }
    :global(.oops-entry textarea[disabled], .oops-entry input[disabled]) {
        cursor: text;
    }
    :global(.svelecte.is-disabled) {
        background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";
    import DateInput from "./DateInput.svelte";
    import Svelecte from 'svelecte';
	import { pb, uaccount } from "$lib/pocketbase";
	import NewModel from "./submit/NewModel.svelte";
    import {toast} from '@zerodevx/svelte-toast'
    import {goto} from "$app/navigation"

    import AutoTextArea from "./AutoTextArea.svelte";

    export let entryid: string | undefined;
    export let editable = false;

    let form = {
        prompt: "",
        ai_resp: "",
        user_resp: "",
        user_reason: "",
        user: $uaccount?.id,
        event_date: Date.now(),
        model: undefined,
        tags: [],
    }
    
    let new_model_modal = false;

    let ai_opts = []
    let tag_opts = []
    onMount(async () => {
        ai_opts = (await pb.collection("aimodels").getList(1,20)).items
        tag_opts = (await pb.collection("oops_tags").getList(1, 500)).items

        if (entryid != undefined) {
          form = await pb.collection("oops").getOne(entryid)
        }
    })
    
    async function submit_oops(){
        console.log("submitting: ", form);
        pb.collection("oops").create(form)
            .then((res) => {
                console.log("RES", res)
                goto(`/entry/${res.id}`);
            })
            .catch((err) => {
                toast.push(`Error: ${err}`, {duration: 2500, classes: ["error"] })
            });
    }
    async function new_tag(tag_opt:any) {
        console.log("NEW TAG", tag_opt.name)
        pb.collection("oops_tags").create({name: tag_opt.detail.name})
    }

    async function new_ai_model(new_opt: any) {
        let new_name = new_opt.detail.id;
        console.log("New Opt:", new_name)
        new_model_modal = true;
    }
</script>
<form on:submit|preventDefault={submit_oops} class="oops-entry form-control w-[80%] flex flex-col justify-center align-middle m-auto">
    <b class="mb-2">Prompt:</b>
    <AutoTextArea placeholder="What did you say to the AI..." bind:value={form.prompt} required disabled={!editable}/>
    <br>
    <b class="mb-2">AI Response:</b>
    <AutoTextArea placeholder="What did the AI respond..." class="textarea" bind:value={form.ai_resp} required disabled={!editable}/>
    <br>
    <b class="mb-2">Your Ideal Response (Optional):</b>
    <AutoTextArea placeholder="Optional: Give a response which you think best fits the prompt..." class="textarea" bind:value={form.user_resp} disabled={!editable}/>
    <br>
    <b class="mb-2">Your Reasoning (Optional):</b>
    <AutoTextArea placeholder="Optional: Explain why you think the AI is wrong and your answer is better..." class="textarea" bind:value={form.user_reason} disabled={!editable}/>
    <br>
    <b class="mb-2">Date of Interaction:</b>
    <DateInput bind:date={form.event_date} disabled={!editable}/>
    <br>
    <b class="mb-2">AI Model:</b>
    <Svelecte bind:value={form.model} options={ai_opts} placeholder="AI Model Name" class="input h-auto" creatable on:createoption="{new_ai_model}" required disabled={!editable}/>
    <br>
    <b class="mb-2">Tags:</b>
    <Svelecte bind:value={form.tags} bind:options={tag_opts} placeholder="Tags" class="input h-auto p-0" creatable creatablePrefix="" on:createoption="{new_tag}" multiple disabled={!editable}/>
    {#if editable}
        <hr class="my-5">
        <button type="submit" class="btn btn-accent rounded w-40 m-auto">Submit Oops!</button>
    {/if}
</form>

<input type="checkbox" id="new-model-modal" class="modal-toggle" bind:checked={new_model_modal} />
<div class="modal">
  <div class="modal-box relative">
    <label for="new-model-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <NewModel/>
  </div>
</div>
