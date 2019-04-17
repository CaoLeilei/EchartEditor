<template>
  <el-container class="eo-app">
    <el-header class="eo-header" height="80px">
      <eo-title-bar></eo-title-bar>
      <eo-tool-bar @create="handleToolbarCreate"></eo-tool-bar>
    </el-header>
    <el-container>
<!--      <el-aside class="eo-left-aside" :width="leftWidth"></el-aside>-->
      <el-main class="eo-app-main">
        <eo-content></eo-content>
      </el-main>
      <el-aside class="eo-right-aside" :width="rightWidth"></el-aside>
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
  import EoTitleBar from './components/TitleBar';
  import EoToolBar from './components/ToolBar';
  import EoContent from './components/Content';
  import EoColorPicker from './components/ColorPicker';
  import EoCreatLayer from './modals/CreateLayer';

  export default {
    name: 'app',
    components: {
      EoTitleBar,
      EoToolBar,
      EoContent,
      EoColorPicker,
      EoCreatLayer
    },
    data() {
      return {
        leftWidth: '240px',
        rightWidth: '400px',
        createModelVisible: false,
        colorPickerModalVisible: false
      }
    },
    methods: {
      handleToolbarCreate () {
        this.createModelVisible = true;
      }
    }
  };
</script>
