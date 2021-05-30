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

<div class="bg-gray-100 w-full">
  <div class="flex flex-col md:flex-row container mx-auto">
    <div class="relative flex-1 md:flex-3 md:p-24 h-2/3 md:h-auto ">
      <h2
        class="hidden font-semibold font-heading md:block absolute top-12 left-12 text-6xl text-gray-700"
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
</div>
