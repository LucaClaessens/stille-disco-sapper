<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "./serializers";

  export let bg = "white";
  export let title = "Title for the QA Block";
  export let content = {};
</script>

<section class="snap-end px-6 py-24 bg-{bg}">
  <h4 class="text-2xl mb-6">{title}</h4>
  <BlockContent
    blocks={content}
    {serializers}
    renderContainerOnSingleChild={true}
  />
</section>
