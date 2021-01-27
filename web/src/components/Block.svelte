<script>
  import BlockSubtitle from "./BlockSubtitle.svelte";
  import BlockTitle from "./BlockTitle.svelte";

  export let title;
  export let subtitle;
</script>

<div class="relative flex-1">
  <slot name="title">
    {#if title}
      <BlockTitle>{title}</BlockTitle>
    {/if}
  </slot>
  <slot name="subtitle">
    {#if subtitle}
      <BlockSubtitle>{title}</BlockSubtitle>
    {/if}
  </slot>
  <slot name="content" />
</div>
