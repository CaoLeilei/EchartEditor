<template>
  <el-container class="eo-app">
    <el-header class="eo-header" height="80px">
      <eo-title-bar></eo-title-bar>
      <eo-tool-bar @create="handleToolbarCreate"></eo-tool-bar>
    </el-header>
    <el-container>
      <el-aside class="eo-left-aside" :width="leftWidth"></el-aside>
      <el-main class="eo-app-main">
        <eo-content></eo-content>
      </el-main>
      <el-aside class="eo-right-aside" :width="rightWidth"></el-aside>
    </el-container>
    <el-dialog title="提示"
               class="eo-dialog"
               width="1075px"
               top="10vh"
               :visible.sync="createModelVisible">
      <eo-creat-layer></eo-creat-layer>
    </el-dialog>
  </el-container>
</template>

<script>
  import EoTitleBar from './components/TitleBar';
  import EoToolBar from './components/ToolBar';
  import EoContent from './components/Content';
  import EoCreatLayer from './modals/CreateLayer';

  export default {
    name: 'app',
    components: {
      EoTitleBar,
      EoToolBar,
      EoContent,
      EoCreatLayer
    },
    data() {
      return {
        leftWidth: '240px',
        rightWidth: '240px',
        createModelVisible: false
      }
    },
    methods: {
      handleToolbarCreate () {
        this.createModelVisible = true;
      }
    }
  };
</script>
