<template>
  <div class="eo-content">
<!--    <div class="eo-content__inner">-->
<!--    </div>-->
    <eo-ruler direction="horizontal"></eo-ruler>
    <eo-ruler direction="vertical"></eo-ruler>
    <div class="eo-content__inner">
      <eo-canvas></eo-canvas>
    </div>
  </div>
</template>

<script>
  import EoRuler from '../Ruler';
  import EoCanvas from '../Canvas';

  export default {
    name: 'EoContent',
    components: {
      EoRuler,
      EoCanvas
    }
  };
</script>
