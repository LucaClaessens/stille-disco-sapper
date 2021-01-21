<script>
  export let uppercase = false;
  export let usePadding = false;
  export let sticky = false;
  export let text = "Block title";
</script>

<h4
  class="
  {uppercase ? 'uppercase' : 'capitalize'} 
  {sticky
    ? 'sticky'
    : ''}
  {usePadding
    ? 'p-6'
    : ''} 
   text-gray-500 sticky top-0 bg-white dark:bg-black"
>
  {text}
</h4>
