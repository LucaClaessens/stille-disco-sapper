<script>
  import Button from "../../components/Button.svelte";
  import { receive, send } from "../../core/directives/crossfade";

  export let date;
  export let location;
  export let venue;
  export let index;
  export let ticketButtonText;
</script>

<div
  in:receive={{ key: `event-list-item-${index}` }}
  out:send={{ key: `event-list-item-${index}` }}
  class="py-6 w-100 flex justify-between items-center"
>
  <span class="text-gray-100">{date}</span>
  <span class="text-gray-50 text-xl"
    >{venue},
    {location}</span
  >
</div>
<div class="py-6">
  <div
    class="bg-gradient-to-br from-red-pure via-green-pure to-blue-pure w-full h-64"
  />
  <p class="py-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error officia
    dicta harum ex veritatis voluptates commodi at repudiandae dolorum?
    Exercitationem, odit quis? Doloremque, voluptates dolor et at numquam
    mollitia?
  </p>
  <Button invert={true}>{ticketButtonText}</Button>
</div>
