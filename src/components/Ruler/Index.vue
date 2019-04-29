<template>
  <div class="eo-ruler" :class="`is-${direction}`">
  </div>
</template>

<script>
  export default {
    name: 'EoRuler',
    props: {
      direction: {
        type: String,
        default: 'horizontal' // vertical
      }
    }
  };
</script>
