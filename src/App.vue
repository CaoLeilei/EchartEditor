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
      <el-aside class="eo-right-aside" :width="rightWidth + 'px'">
        <eo-property-groups></eo-property-groups>
      </el-aside>
      <eo-split position="right" :splitSize="rightWidth" @dragend="handleSpliteDragEnd"></eo-split>
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
  import EoSplit from './components/Split/Index';
  import EoTitleBar from './components/TitleBar/Index';
  import EoToolBar from './components/ToolBar/Index';
  import EoTabs from './components/Tabs/Index';
  import EoContent from './components/Content/Index';
  import EoPropertyGroups from './components/PropertyGroups/Index';
  import EoColorPicker from './components/ColorPicker/Index';
  import EoCreatLayer from './modals/CreateLayer/Index';

  export default {
    name: 'app',
    components: {
      EoSplit,
      EoTitleBar,
      EoToolBar,
      EoTabs,
      EoContent,
      EoPropertyGroups,
      EoColorPicker,
      EoCreatLayer
    },
    data() {
      return {
        leftWidth: '240px',
        rightWidth: 400,
        createModelVisible: false,
        colorPickerModalVisible: true,
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
      handleSpliteDragEnd (size) {
        this.rightWidth = size;
      }
    }
  };
</script>
