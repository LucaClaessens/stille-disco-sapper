<script>
  import serializers from "./serializers";
  import BlockContent from "@movingbrands/svelte-portable-text";

  export let blocks;
</script>

<BlockContent {blocks} {serializers} />
