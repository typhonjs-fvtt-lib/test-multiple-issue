<script>
   import { fade } from 'svelte/transition';
   let introDone = '';
</script>

<p
  in:fade={{duration: 2000}}
  on:introend={() => introDone = ' - intro transition ended'}>
    App1 paragraph fade (2000ms){introDone}
</p>

<style>
    p {
        color: lightgray
    }
</style>
