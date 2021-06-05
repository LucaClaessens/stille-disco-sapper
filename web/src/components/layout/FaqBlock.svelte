<script>
  import BlockContentWrapper from "../BlockContentWrapper.svelte";
  import BlockSubtitle from "../BlockSubtitle.svelte";
  import BlockTitle from "../BlockTitle.svelte";
  export let backgroundColor = "bg-white";
  export let content;
  export let title;
  export let subtitle;
</script>

<section class="w-full {backgroundColor}">
  <div class="container md:p-6 mx-auto">
    {#if title}
      <BlockTitle text={title} usePadding={true} />
    {/if}

    {#if subtitle}
      <BlockSubtitle text={subtitle} usePadding={true} />
    {/if}

    <BlockContentWrapper blocks={content} />
  </div>
</section>
