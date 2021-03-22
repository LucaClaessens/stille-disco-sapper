<script>
  import Block from "./Block.svelte";
  import BlockTitle from "./BlockTitle.svelte";
  import FadeInBottom from "./FadeInBottom.svelte";
  import Image from "./Image.svelte";
  import Link from "./Link.svelte";

  export let location = {
    city: "City",
    country: "Country",
    postalCode: "postalCode",
    streetAddress: "streetAddress",
    email: "email",
    phone: "+0031 PhoneNo",
    socials: [],
    image: {},
  };
  export let title = "Contact us";
  export let addressTitle = "Address";
  export let socialsTitle = "Socials";
</script>

<div class="md:h-5/6 bg-gray-100 flex flex-col md:flex-row">
  <div class="relative flex-1 md:flex-3 md:p-24 h-2/3 md:h-auto">
    <h2
      class="hidden font-semibold font-heading md:block absolute top-12 left-12 text-6xl text-gray-700 z-50"
    >
      <FadeInBottom>{title}</FadeInBottom>
    </h2>
    <Image {...location.image} classes="w-full h-full z-0" />
  </div>
  <div class="flex flex-col px-6 py-6 justify-start align-start md:flex-2">
    <Block>
      <span slot="title">
        <BlockTitle usePadding uppercase={false} text={addressTitle} />
      </span>
      <div slot="content" id="location-details" class="p-6">
        <p>{location.streetAddress}</p>
        <p>{location.city}, {location.postalCode}</p>
        <p>{location.country}</p>
        <p><a href="tel:{location.phoneNo}">{location.phoneNo}</a></p>
      </div>
    </Block>
    <Block>
      <span slot="title">
        <BlockTitle usePadding uppercase={false} text={socialsTitle} />
      </span>
      <div slot="content" id="socials-details" class="p-6">
        {#each location.socials || [] as social}
          <div>
            <Link {...social}>{social.text}</Link>
          </div>
        {/each}
      </div>
    </Block>
  </div>
</div>

<!-- <TwoColumnLayout>
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
</TwoColumnLayout> -->
