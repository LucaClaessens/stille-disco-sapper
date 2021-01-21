<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "./serializers";

  export let question = "Question text";
  export let answer;
</script>

<article class="p-6">
  <h3 class="text-2xl mb-6">
    {question}
  </h3>
  <p class="text-lg">
    <BlockContent
      blocks={answer}
      {serializers}
      renderContainerOnSingleChild={true}
    />
  </p>
</article>
