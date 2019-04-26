<template>
  <el-container class="eo-app">
    <el-header class="eo-header" height="80px">
      <eo-title-bar></eo-title-bar>
      <eo-tool-bar @create="handleToolbarCreate"></eo-tool-bar>
    </el-header>
    <el-container class="eo-container">
<!--      <el-aside class="eo-left-aside" :width="leftWidth"></el-aside>-->
      <el-main class="eo-app-main">
        <div class="eo-app-main__inner">
          <eo-tabs></eo-tabs>
          <eo-content></eo-content>
        </div>
      </el-main>
      <el-aside class="eo-right-aside" :width="rightWidth + 'px'"></el-aside>
      <eo-split position="right" :splitSize="rightWidth"></eo-split>
<!--      <div class="eo-spliter-mask" v-show="draging">-->
<!--      </div>-->
<!--      &lt;!&ndash; 拖拽条 &ndash;&gt;-->
<!--      <div class="eo-spliter is-vertical is-right" :style="spliterStyle"-->
<!--           :class="{'is-draging': draging}"-->
<!--           @mousedown="handleSpliterMouseDown">-->
<!--        <div class="spliter-inner"></div>-->
<!--      </div>-->
    </el-container>
    <el-dialog title="创建图表"
               class="eo-dialog"
               width="1075px"
               top="10vh"
               :visible.sync="createModelVisible">
      <eo-creat-layer></eo-creat-layer>
    </el-dialog>
    <el-dialog title="取色器"
               class="eo-dialog"
               width="552px"
               top="30vh"
               :visible.sync="colorPickerModalVisible">
      <eo-color-picker></eo-color-picker>
    </el-dialog>
  </el-container>
</template>

<script>
  import EoSplit from './components/Split';
  import EoTitleBar from './components/TitleBar';
  import EoToolBar from './components/ToolBar';
  import EoTabs from './components/Tabs';
  import EoContent from './components/Content';
  import EoColorPicker from './components/ColorPicker';
  import EoCreatLayer from './modals/CreateLayer';

  export default {
    name: 'app',
    components: {
      EoSplit,
      EoTitleBar,
      EoToolBar,
      EoTabs,
      EoContent,
      EoColorPicker,
      EoCreatLayer
    },
    data() {
      return {
        leftWidth: '240px',
        rightWidth: 400,
        createModelVisible: false,
        colorPickerModalVisible: false,
        draging: false
      }
    },
    computed: {
      spliterStyle () {
        return {
          right: this.rightWidth
        }
      }
    },
    mounted () {
      // const {
      //   handleWindowMouseUp
      // } = this;
      // window.addEventListener('mouseup', handleWindowMouseUp);
    },
    beforeDestroy () {
      // const {
      //   handleWindowMouseUp
      // } = this;
      // window.removeEventListener('mouseup', handleWindowMouseUp);
    },
    methods: {
      handleToolbarCreate () {
        this.createModelVisible = true;
      },
      handleSpliterMouseDown (e) {
        this.draging = true;

        window.addEventListener('mousemove', this.handleSpliterDragging);
        window.addEventListener('touchmove', this.handleSpliterDragging);
        window.addEventListener('mouseup', this.handleDragEnd);
        window.addEventListener('touchend', this.handleDragEnd);
        window.addEventListener('contextmenu', this.handleDragEnd);
      },
      handleSpliterDragging () {},
      handleDragEnd (e) {
        console.log('handleDragEnd')
        this.draging = false;
        setTimeout(() => {
          window.removeEventListener('mousemove', this.handleSpliterDragging);
          window.removeEventListener('touchmove', this.handleSpliterDragging);
          window.removeEventListener('mouseup', this.handleDragEnd);
          window.removeEventListener('touchend', this.handleDragEnd);
          window.removeEventListener('contextmenu', this.handleDragEnd);
        });
      }
    }
  };
</script>
