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
   text-gray-700 sticky top-0 bg-gray-100 dark:bg-black md:text-2xl font-heading"
>
  {text}
</h4>
