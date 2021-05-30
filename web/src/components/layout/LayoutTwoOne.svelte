<script>
  import BlockContentWrapper from "./../BlockContentWrapper.svelte";

  export let contentLeft;
  export let contentRight;
</script>

<div class="flex flex-col md:flex-row container mx-auto">
  <div class="flex-2">
    <BlockContentWrapper blocks={contentLeft} />
  </div>
  <div class="flex-1">
    <BlockContentWrapper blocks={contentRight} />
  </div>
</div>
