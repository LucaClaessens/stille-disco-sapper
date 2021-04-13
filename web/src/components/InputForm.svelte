<script>
  import { focusable } from "../core/directives/focusable";
  import Button from "./Button.svelte";

  export let label = "Label text";
  export let placeholder = "Placeholder value";
  export let name = "input-form";
  export let buttonText = "submit";
</script>

<div>
  <label for={name} class="sr-only">{label}</label>
  <div class="mt-1 relative rounded-md">
    <input
      use:focusable
      type="text"
      {name}
      id={name}
      class="bg-white block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
      {placeholder}
    />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <Button type="submit" px={6} cta={true}>{buttonText}</Button>
    </div>
  </div>
</div>
