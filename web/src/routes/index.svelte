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
  import Scrollanimation from "../components/Scrollanimation.svelte";

  export let settings;
</script>

<!-- index.svelte -->
<style lang="postcss">
  .spacer {
    height: 100vh;
    background-color: red;
    width: 100vw;
  }
</style>

<svelte:head>
  <title>Stille disco</title>
</svelte:head>

<div class="space-y-10 text-center">
  <h1 class="text-7xl uppercase font-bold">{settings.title}</h1>
  <p>{settings.description}</p>
</div>

<div class="spacer" />

<Scrollanimation images={settings.sequence} />

<div class="spacer" />
