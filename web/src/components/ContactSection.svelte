<script>
  import Block from "./Block.svelte";
  import BlockTitle from "./BlockTitle.svelte";
  import Image from "./Image.svelte";
  import TwoColumnLayout from "./layout/TwoColumnLayout.svelte";
  import Link from "./Link.svelte";

  export let phone = "+0031 PhoneNo";
  export let title = "Title";
  export let addressTitle = "Address";
  export let socialsTitle = "Socials";
  export let address = {
    city: "City",
    country: "Country",
    postalCode: "postalCode",
    streetAddress: "streetAddress",
  };
  export let socials = [];
  export let image = {};
</script>

<TwoColumnLayout>
  <span slot="left">
    <Block>
      <span slot="title">
        <BlockTitle usePadding text={title} />
      </span>
      <div slot="content" class="md:px-6 md:max-w-lg">
        <Image {...image} classes="w-full h-96" />
      </div>
    </Block>
  </span>
  <span slot="right">
    <Block>
      <span slot="title">
        <BlockTitle usePadding uppercase={false} text={addressTitle} />
      </span>
      <div slot="content" id="location-details" class="p-6">
        <p>{address.streetAddress}</p>
        <p>{address.city}, {address.postalCode}</p>
        <p>{address.country}</p>
        <p><a href="tel:{phone}">{phone}</a></p>
      </div>
    </Block>
    <Block>
      <span slot="title">
        <BlockTitle usePadding uppercase={false} text={socialsTitle} />
      </span>
      <div slot="content" id="socials-details" class="p-6">
        {#each socials as social}
          <div>
            <Link {...social}>{social.text}</Link>
          </div>
        {/each}
      </div>
    </Block>
  </span>
</TwoColumnLayout>
