<script>
  import { focusable } from "./../core/directives/focusable";

  export let href;
  export let target = "_self";
  export let textColor = "black";
</script>

<a
  use:focusable
  {href}
  {target}
  rel="noreferrer noopener"
  class="text-{textColor} dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors">
  <slot />
</a>
