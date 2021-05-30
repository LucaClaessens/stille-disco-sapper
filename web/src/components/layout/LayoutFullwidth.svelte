<script>
  import BlockContentWrapper from "./../BlockContentWrapper.svelte";

  export let backgroundColor = "bg-white";
  export let content;
</script>

<div class="w-full {backgroundColor}">
  <div class="flex flex-col md:flex-row container mx-auto">
    <div class="flex p-6">
      <BlockContentWrapper blocks={content} />
    </div>
  </div>
</div>
