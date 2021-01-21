<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "./serializers";

  export let usePadding = true;
  export let text;
</script>

<h4 class="text-xl {usePadding ? 'p-6' : ''}">
  <BlockContent
    blocks={text}
    {serializers}
    renderContainerOnSingleChild={true}
  />
</h4>
