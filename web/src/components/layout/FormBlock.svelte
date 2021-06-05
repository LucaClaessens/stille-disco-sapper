<script>
  import BlockContentWrapper from "../BlockContentWrapper.svelte";
  import Button from "../Button.svelte";
  import Link from "../Link.svelte";
  import { language } from "../../stores/language";
  import { focusable } from "../../core/directives/focusable";

  export let backgroundColor = "bg-white";
  export let title = "_TITLE_";
  export let subtitle = "_SUBTITLE_";
  export let content = {};
  export let formId = "";
  export let referral = {};
  export let privacyStatementRequired = false;
  export let buttonText = "_BUTTON_TEXT_";

  let checked = false;

  $: lang = $language;

  $: action = parseAction(referral);

  const parseAction = (referral) => {
    if (!referral.slug) {
      return null;
    }
    if (!referral.parent) {
      return `/${lang}/${referral.slug}`;
    }
    return `/${lang}/${referral.parent}/${referral.slug}`;
  };
</script>

<section
  class="snap-center px-6 py-24 {backgroundColor} md:min-h-1/2 md:flex md:items-center md:justify-center"
>
  <div class="{backgroundColor} md:rounded-md md:p-12 md:max-w-xl md:w-full">
    <div class="w-full md:w-max-lg">
      <h4 class="text-2xl mb-6 font-heading">{title}</h4>
      <form name={formId} {action} method="POST" netlify>
        <input type="hidden" name="form-name" value={formId} />

        <div class="mb-4">
          <BlockContentWrapper blocks={subtitle} />
        </div>

        <BlockContentWrapper blocks={content} />

        {#if privacyStatementRequired}
          <div class="mt-4">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  use:focusable
                  bind:checked
                  id="statement"
                  name="statement"
                  type="checkbox"
                  class="h-4 w-4 text-blue-pure border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="statement" class="font-medium text-gray-500">
                  I agree to the <Link
                    href="/en/privacy-policy"
                    textColor="blue-pure">privacy statement</Link
                  >
                </label>
              </div>
            </div>
          </div>
        {/if}

        <div class="text-right mt-12">
          <Button
            type="submit"
            cta={true}
            disabled={privacyStatementRequired && !checked}>{buttonText}</Button
          >
        </div>
      </form>
    </div>
  </div>
</section>
