<script>
  import BlockContentWrapper from "./BlockContentWrapper.svelte";

  export let usePadding = false;
  export let text;
</script>

<h4 class="text-xl font-heading {usePadding ? 'px-6' : ''}">
  <BlockContentWrapper blocks={text} />
</h4>
