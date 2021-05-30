<script>
  import { focusable } from "../../core/directives/focusable";

  export let name = "message";
  export let label = "";
  export let placeholder = "Textarea placeholder";
  export let required = false;
</script>

<div class="mt-6">
  {#if label}
    <label for={name} class="block text-sm font-medium text-blue-pure">
      {label}
    </label>
  {/if}
  <div class="mt-3">
    <textarea
      {required}
      use:focusable
      {name}
      id={name}
      rows="5"
      class="shadow-sm focus:ring-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
      {placeholder}
    />
  </div>
</div>
