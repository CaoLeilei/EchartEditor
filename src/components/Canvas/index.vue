<template>
  <div class="eo-canvas" :style="style">
    <div class="eo-canvas__inner" ref="chartBox">
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'EoCanvas',
    computed: {
      ...mapGetters([
        // 'scale',
        // 'canvasWidth',
        // 'canvasHeight',
        // 'backgroundColor'
      ]),
      style () {
        return {
          width: this.canvasWidth + 'px',
          height: this.canvasHeight + 'px',
          backgroundColor: this.backgroundColor
        }
      }
    }
  };
</script>
