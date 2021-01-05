<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch("api/settings");
      const settings = await res.json();
      return { settings };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  export let settings;
</script>

<!-- index.svelte -->
<style lang="postcss">
</style>

<svelte:head>
  <title>Stille disco</title>
</svelte:head>

<div class="space-y-10 text-center">
  <h1 class="text-7xl uppercase font-bold">{settings.title}</h1>
  <p>{settings.description}</p>
</div>
