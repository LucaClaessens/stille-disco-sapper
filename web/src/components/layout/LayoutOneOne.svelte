<script>
  import BlockContentWrapper from "./../BlockContentWrapper.svelte";

  export let backgroundColor = "bg-white";
  export let contentLeft;
  export let contentRight;
</script>

<div class="w-full {backgroundColor}">
  <div class="flex flex-col md:flex-row container mx-auto">
    <div class="flex-1 p-6">
      <BlockContentWrapper blocks={contentLeft} />
    </div>
    <div class="flex-1 p-6">
      <BlockContentWrapper blocks={contentRight} />
    </div>
  </div>
</div>
