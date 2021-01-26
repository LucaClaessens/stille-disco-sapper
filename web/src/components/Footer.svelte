<script>
  import { activeSection } from "./../stores/layout";
  import Link from "./Link.svelte";

  export let lang;
  export let bottomText;
  export let email = "e@mail.com";
  export let links = [];

  const year = new Date().getFullYear();
</script>

<footer class="w-full p-6 bg-gray-900 text-gray-50 dark">
  <div class="xl:container w-full mx-auto">
    <nav class="py-6">
      <ul>
        {#each links as link}
          {#if link.visibility == "all" || link.visibility === $activeSection}
            <li class="text-xl mb-2 font-light">
              <Link
                href={link.href.startsWith("http")
                  ? link.href
                  : `/${lang}${link.href}`}
                target={link.target}
              >{link.text}</Link
              >
            </li>
          {/if}
        {/each}
      </ul>
    </nav>
    <hr class="text-gray-50 bg-gray-50" />
    <div class="py-6">
      <p class="text-xl mb-2 font-light underline">
        <Link href="mailto:{email}">{email}</Link>
      </p>
      <p class="text-xl mb-2 font-light">
        {bottomText}
      </p>
      <div class="text-gray-400"><span>&copy; {year}, Stille Disco</span></div>
    </div>
  </div>
</footer>
