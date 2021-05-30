<script>
  import BlockContentWrapper from "./BlockContentWrapper.svelte";

  export let usePadding = true;
  export let text;
</script>

<h4 class="text-xl font-heading {usePadding ? 'p-6' : ''}">
  <BlockContentWrapper blocks={text} />
</h4>
