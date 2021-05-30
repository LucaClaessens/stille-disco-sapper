<script>
  import { focusable } from "../../core/directives/focusable";

  export let type = "text";
  export let label = "Label text";
  export let placeholder = "Placeholder value";
  export let name = "input-form";
  export let required = false;
</script>

<div class="mt-6">
  {#if label}
    <label for={name} class="block text-sm font-medium text-blue-pure"
      >{label}</label
    >
  {/if}
  <div class="mt-3 relative rounded-md">
    <input
      {required}
      use:focusable
      {type}
      {name}
      id={name}
      class="bg-white block w-full sm:text-sm border-gray-300 rounded-md"
      {placeholder}
    />
  </div>
</div>
