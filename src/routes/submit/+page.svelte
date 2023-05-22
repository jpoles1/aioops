<script lang="ts">
    let form = {
        prompt: "",
        ai_resp: "",
        user_resp: "",
        event_date: new Date(Date.now()).toUTCString()
    }
</script>

<div class="bg-gray-900 m-4 rounded-xl p-5 h-full">
    <div class="h1 text-center">Submit an Oops:</div>
    <hr class="my-2"/>
    <form class="w-[80%] flex flex-col justify-center align-middle m-auto">
        <label>
            <b>Prompt:</b>
            <textarea class="textarea" bind:value={form.prompt}/>
        </label>
        <label>
            <b>AI Response:</b>
            <textarea class="textarea" bind:value={form.prompt}/>
        </label>
        <label>
            <b>Your Ideal Response (Optional):</b>
            <textarea class="textarea" bind:value={form.prompt}/>
        </label>
        <label>
            <b>Date of Interaction:</b>
            <input class="rounded-lg input" type="datetime-local" bind:value={form.event_date} />
        </label>
    </form>
    {form.event_date}
</div>