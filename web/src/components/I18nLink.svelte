<script>
  import { focusable } from "../core/directives/focusable";
  import { language } from "../stores/language";

  export let href;
  export let target = "_self";
</script>

<a
  use:focusable
  href="{$language}{href}"
  {target}
  rel="noreferrer noopener"
  class="dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors"
>
  <slot />
</a>
