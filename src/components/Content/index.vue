<template>
  <div class="eo-content">
    <eo-ruler direction="horizontal"></eo-ruler>
    <eo-ruler direction="vertical"></eo-ruler>
  </div>
</template>

<script>
  import EoRuler from '../Ruler';

  export default {
    name: 'EoContent',
    components: {
      EoRuler
    }
  };
</script>
