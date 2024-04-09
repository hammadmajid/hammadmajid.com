<script lang="ts">
  let responseMessage: string;
  let responseStatus: any;
  async function sendForm(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch('/api/form/send', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
    responseStatus = data.status;
  }
</script>

<form on:submit={sendForm} class="w-2/3 md:w-1/2 flex flex-col items-center justify-center space-y-4"
>
  {#if responseStatus}
  <div class="w-full text-center">
    <p class={responseStatus === 200 ? "bg-green-400 py-2 rounded-sm" : "bg-red-400 py-2 rounded-sm"}>{responseMessage}</p>
  </div>
  {/if}

  <label class="w-full" for="name">
    <input type="text" id="name" name="name" required placeholder="John Doe"
           class="w-full py-1 focus:outline-none border-b-2 border-b-light-text-primary"
    />
  </label>
  <label class="w-full" for="email">
    <input type="email" id="email" name="email" required placeholder="johndoe@example.com"
           class="w-full py-1 focus:outline-none border-b-2 border-b-light-text-primary"
    />
  </label>
  <label class="w-full" for="message">
    <textarea id="message" name="message" required placeholder="Hello, there!"
              class="w-full py-1 focus:outline-none border-b-2 border-b-light-text-primary"
    />
  </label>
  <button
    class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm transition-colors flex-row bg-light-text-primary hover:bg-light-text-secondary text-light-body fill-neutral-100">
    <span class="font-semibold">Send</span>
  </button>
</form>