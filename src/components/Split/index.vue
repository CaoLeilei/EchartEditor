<template>
  <div class="eo-spliter"
       :class="[`is-${direction}`,{'is-dragging': dragging}]"
       :style="style"
       @mousedown.stop.prevent="handleMouseDown">
    <div class="spliter-inner"></div>
  </div>
</template>

<script>
  export default {
    name: 'EoSplit',
    props: {
      position: {
        type: String,
        default: 'left'
      },
      splitSize: {
        type: Number,
        default: 0
      },
      minSize: {
        type: Number,
        default: 250
      },
      maxSize: {
        type: Number,
        default: 800
      }
    },
    data () {
      return {
        dragging: false,
        size: 0,
        splitMask: null,
        orgPointX: 0,
        orgPointY: 0,
        desPointX: 0,
        desPointY: 0
      };
    },
    created() {
      this.size = this.splitSize;
    },
    watch: {
      splitSize () {
        this.size = this.splitSize;
      }
    },
    computed: {
      style () {
        let _style = {};
        switch (this.position) {
          case 'left':
            _style = {
              left: this.size + 'px',
              right: 'auto',
              top: 0,
              bottom: 0,
              marginLeft: '-5px'
            };
            break;
          case 'top':
            _style = {
              top: this.size + 'px',
              bottom: 'auto',
              left: 0,
              right: 0,
              marginTop: '-5px'
            };
            break;
          case 'right':
            _style = {
              right: this.size + 'px',
              left: 'auto',
              top: 0,
              bottom: 0,
              marginRight: '-5px'
            };
            break;
          case 'bottom':
            _style = {
              bottom: this.size + 'px',
              top: 'auto',
              left: 0,
              right: 0,
              marginBottom: '-5px'
            };
            break;
        }
        return _style;
      },
      direction () {
        return (this.position === 'left' || this.position === 'right') ? 'vertical' : 'horizontal';
      }
    },
    mounted () {
      this.appendSplitMask();
    },
    beforeDestroy () {
      this.removeSplitMask();
    },
    methods: {
      createSplitMask () {
        this.splitMask = document.createElement('div');
        this.splitMask.className = 'eo-spliter-mask';
        this.splitMask.style.display = 'none';
        // this.splitMask.className()
      },
      appendSplitMask () {
        this.createSplitMask();
        let $parent = this.$parent;
        let parentDom = $parent.$el ? $parent.$el : $parent;
        let splitMask = parentDom.querySelectorAll('.eo-spliter-mask');
        if (!splitMask || !splitMask.length) {
          parentDom.appendChild(this.splitMask);
        }
      },
      removeSplitMask () {
        this.splitMask.remove();
      },
      computeSize () {
        let moveXSize = this.desPointX - this.orgPointX;
        let moveYSize = this.desPointY - this.orgPointY;
        switch (this.position) {
          case 'left':
            this.size += moveXSize;
            break;
          case 'right':
            this.size -= moveXSize;
            break;
          case 'top':
            this.size += moveYSize;
            break;
          case 'bottom':
            this.size -= moveYSize;
        }
        if (this.size < this.minSize) {
          this.size = this.minSize;
        }
        if (this.size > this.maxSize) {
          this.size = this.maxSize;
        }
      },
      handleMouseDown (event) {
        this.dragging = true;
        this.splitMask.style.display = 'block';
        this.orgPointX = event.clientX;
        this.orgPointY = event.clientY;
        window.addEventListener('mousemove', this.handleSpliterDragging);
        window.addEventListener('touchmove', this.handleSpliterDragging);
        window.addEventListener('mouseup', this.handleDragEnd);
        window.addEventListener('touchend', this.handleDragEnd);
        window.addEventListener('contextmenu', this.handleDragEnd);
      },
      handleSpliterDragging (event) {
        this.desPointX = event.clientX;
        this.desPointY = event.clientY;
        this.computeSize();
        this.orgPointX = this.desPointX;
        this.orgPointY = this.desPointY;
        this.$emit('dragging', this.size);
      },
      handleDragEnd () {
        this.dragging = false;
        this.splitMask.style.display = 'none';
        setTimeout(() => {
          window.removeEventListener('mousemove', this.handleSpliterDragging);
          window.removeEventListener('touchmove', this.handleSpliterDragging);
          window.removeEventListener('mouseup', this.handleDragEnd);
          window.removeEventListener('touchend', this.handleDragEnd);
          window.removeEventListener('contextmenu', this.handleDragEnd);
        });
        this.$emit('dragend', this.size);
      }
    }
  };
</script>
