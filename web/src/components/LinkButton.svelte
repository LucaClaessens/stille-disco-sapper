<script>
  import { focusable } from "./../core/directives/focusable";

  export let url;
  export let text;
  export let role = "none";
  export let layout = "inline-flex";
</script>

<a
  use:focusable
  {role}
  href={url}
  class="{layout} bg-white dark:bg-black rounded-md p-2 items-center justify-center text-black dark:text-white hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300">
  <slot>{text}</slot>
</a>
