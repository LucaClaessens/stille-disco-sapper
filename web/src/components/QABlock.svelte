<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import { language } from "../stores/language";
  import serializers from "./serializers";

  export let bg = "white";
  export let title = "Title for the QA Block";
  export let content = {};
  export let hasForm = false;
  export let formId = "";
  export let referral = {};

  $: lang = $language;

  $: action = referral.slug
    ? `/${lang}/${referral.parent}/${referral.slug.current}`
    : null;
</script>

<section
  class="snap-center px-6 py-24 bg-gray-300 md:bg-{bg} md:min-h-1/2 md:flex md:items-center md:justify-center"
>
  <div class="bg-gray-300 md:rounded-md md:p-12 md:max-w-xl md:w-full">
    <div class="w-full md:w-max-lg">
      <h4 class="text-2xl mb-6">{title}</h4>
      {#if hasForm}
        <form name={formId} {action} method="POST" netlify>
          <input type="hidden" name="form-name" value={formId} />
          <BlockContent blocks={content} {serializers} />
        </form>
      {:else}
        <BlockContent blocks={content} {serializers} />
      {/if}
    </div>
  </div>
</section>
