<script>
   import { fade } from 'svelte/transition';
   let introDone = '';
</script>

<p
  in:fade={{duration: 5000}}
  on:introend={() => introDone = ' - intro transition ended'}>
    App2 paragraph fade (5000ms){introDone}
</p>

<style>
    p {
        color: lightgray
    }
</style>
