<script>
  import { focusable } from "../core/directives/focusable";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";

  export let name = "message";
  export let label = "Label text";
  export let placeholder = "Textarea placeholder";
  export let buttonText = "Button Text";
  export let privacyStatementRequired = true;

  let checked = false;
</script>

<div class="mt-12 max-w-md">
  <label for={name} class="block text-sm font-medium text-blue-pure">
    {label}
  </label>
  <div class="mt-3">
    <textarea
      use:focusable
      {name}
      id={name}
      rows="5"
      class="shadow-sm focus:ring-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
      {placeholder}
    />
  </div>
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
          I agree to the <Link href="/en/privacy-policy" textColor="blue-pure"
            >privacy statement</Link
          >
        </label>
      </div>
    </div>
  </div>
  <div class="text-right mt-12">
    <Button
      type="submit"
      cta={true}
      disabled={privacyStatementRequired && !checked}
    >{buttonText}</Button
    >
  </div>
</div>
