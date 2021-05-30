<script>
  import { focusable } from "./../core/directives/focusable";
  import { activePath } from "./../stores/layout";

  export let url;
  export let text;
  export let role = "none";
  export let layout = "inline-flex";

  $: active = $activePath === url;
</script>

<a
  use:focusable
  {role}
  href={url}
  class="{layout} bg-white dark:bg-black rounded-md p-2 items-center justify-center hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300 {active
    ? 'text-gray-500 opacity-75'
    : ' text-black dark:text-white'}"
>
  <slot>{text}</slot>
</a>
