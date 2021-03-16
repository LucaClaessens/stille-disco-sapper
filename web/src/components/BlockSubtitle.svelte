<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "./serializers";

  export let usePadding = true;
  export let text;
</script>

<h4 class="text-xl font-heading {usePadding ? 'p-6' : ''}">
  <BlockContent blocks={text} {serializers} />
</h4>
