<template>
  <div class="color-bar">
    <div class="color-bar-inner"></div>
    <div class="color-bar-pointer"
         :style="pointerStyle"
         @mousedown="onMouseDown"></div>
  </div>
</template>

<script>
  export default {
    name: 'ColorPickerBar',
    data() {
      return {
        orgY: 0,
        dragging: false,
        pointerPos: 0
      };
    },
    computed: {
      pointerStyle () {
        return {
          top: this.pointerPos + 'px'
        };
      }
    },
    methods: {
      onMouseDown(event) {
        const {
          onDragging,
          onDragEnd
        } = this;
        this.dragging = true;
        this.orgY = event.clientY;
        window.addEventListener('mousemove', onDragging);
        window.addEventListener('mouseup', onDragEnd);
      },
      onDragEnd() {
        this.dragging = false;
        const {
          onDragging,
          onDragEnd
        } = this;
        window.removeEventListener('mousemove', onDragging);
        window.removeEventListener('mouseup', onDragEnd);
      },
      onDragging(event) {
        let destY = event.clientY;
        let moverDesc = destY - this.orgY;
        this.pointerPos += moverDesc;
        this.pointerPos = this.pointerPos < 0 ? 0: (this.pointerPos > 255 ? 255 : this.pointerPos);
        this.orgY = destY;
      }
    }
  };
</script>
