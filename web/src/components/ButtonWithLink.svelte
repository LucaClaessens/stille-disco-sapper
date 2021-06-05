<script>
  import { focusable } from "./../core/directives/focusable";
  import { language } from "./../stores/language";
  import Button from "./Button.svelte";

  export let invert = false;
  export let px = 6;
  export let py = 2;
  export let type = "button";
  export let text = "";
  export let role = "none";
  export let layout = "inline-flex";
  export let target;
  export let href = "#";
  export let localHref = false;

  $: lang = $language;
</script>

<a use:focusable {role} href="{localHref ? lang : ''}{href}" {target}>
  <Button {text} {invert} {px} {py} {type} {layout} />
</a>
