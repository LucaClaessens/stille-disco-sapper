<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
import serializers from "./serializers";


  export let question = "Question text";
  export let answer;
</script>

<article class="p-6 max-w-lg md:ml-6">
  <h3 class="text-2xl mb-6 font-heading">
    {question}
  </h3>
  <p class="text-lg md:ml-6">
    <BlockContent blocks={answer} {serializers} />
  </p>
</article>
