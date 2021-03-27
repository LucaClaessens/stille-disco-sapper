<script>
  import DatePicker from "praecox-datepicker";
  import { onMount } from "svelte";
  import { dateSelectionController } from "../stores/checkout/date-selection";
  import serializeImage from "../utils/image/serializeImage";
  import Image from "./Image.svelte";
  import ShrinkIn from "./ShrinkIn.svelte";

  let pickerDone = false;
  let showDatePicker = false;
  let datePicker;
  let disabled = [];
  let clickOutsideComponent;

  export let image = {};
  export let from = "From";
  export let until = "Until";
  export let selected = [];
  export let active;
  export let tagline = "When do you want to rent equipment?";
  export let inputInfo = "We chare a fixed fee per day you rent equipment";
  export let inputPlaceholder = "Select what days you want to rent equipment";

  $: datePickerState = $dateSelectionController;
  $: datePickerState.setFrom(selected[0]);
  $: datePickerState.setTo(selected[1]);

  function handleClick() {
    showDatePicker = !showDatePicker;
  }
  function getResult() {
    if (selected.length == 0) {
      return;
    }
    if (pickerDone) {
      showDatePicker = false;
    }
  }

  onMount(async () => {
    const module = await import("svelte-click-outside");
    clickOutsideComponent = module.default;

    let someDay = new Date();
    someDay.setTime(someDay.getTime() - 24 * 60 * 60 * 1000);
    let yesterday =
      someDay.getFullYear() +
      "-" +
      (someDay.getMonth() + 1) +
      "-" +
      someDay.getDate();

    disabled[0] = "1930-1-1";
    disabled[1] = yesterday;
  });
</script>

<div
  class="{active
    ? ''
    : 'hidden'} flex-1 flex flex-col md:flex-row w-full h-full"
>
  <div class="flex-1 bg-gray-500 relative">
    <ShrinkIn wrap="true">
      <Image
        alt={image.alt}
        url={serializeImage(image, 1200)}
        classes={"w-full h-full"}
      />
    </ShrinkIn>
  </div>
  <div id="dateControl" class="md:flex-1">
    <div class="p-6 md:p-12 max-w-lg">
      <div class="mb-6 md:mb-12">
        <legend class=" font-medium text-2xl text-gray-900">{tagline}</legend>
      </div>
      <div class="col-span-6 sm:col-span-3 relative mb-12">
        <label
          for="date_from"
          class="block text-sm font-medium text-gray-700 mb-2"
          >{from} / {until}</label
        >
        <p class="text-sm text-gray-500 mb-4">
          {inputInfo}
        </p>
        <svelte:component
          this={clickOutsideComponent}
          on:clickoutside={() => (showDatePicker = false)}
        >
          <div class="relative">
            <input
              on:click={handleClick}
              type="text"
              name="date_from"
              id="date_from"
              value={datePickerState.rangeFormatted}
              placeholder={inputPlaceholder}
              autocomplete="off"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {#if showDatePicker}
              <div
                bind:this={datePicker}
                id="date_picker"
                class="absolute bottom-14 md:top-14 left-0 z-50"
                on:click={getResult}
              >
                <DatePicker
                  theme="light"
                  pickerRule="range"
                  reSelected
                  bind:selected
                  bind:pickerDone
                  {disabled}
                />
              </div>
            {/if}
          </div>
        </svelte:component>
      </div>
    </div>
  </div>
</div>

<style>
  #date_picker {
    --praecox-calendar-custom-width: 330px;
    --praecox-calendar-custom-height: 340px;
    --praecox-calendar-custom-inner-width: 310px;
    --praecox-calendar-custom-inner-height: 220px;
    --praecox-calendar-custom-head-height: 48px;
    --praecox-calendar-custom-icon-size: 20px;
    --praecox-calendar-custom-border-radius: 5px;
    --praecox-calendar-custom-font-family: "IBM Plex Sans", sans-serif;
    --praecox-calendar-custom-number-font-family: "IBM Plex Sans", sans-serif;
    --praecox-calendar-custom-main-color: #00f;
    --praecox-calendar-custom-main-color-hover: rgb(123, 123, 255);
    --praecox-calendar-custom-main-color-active: rgb(123, 123, 255);
    --praecox-calendar-custom-focused-color: #00f;
  }
</style>
