<template>
  <el-container class="eo-app">
    <el-header class="eo-header" height="80px">
      <eo-title-bar></eo-title-bar>
      <eo-tool-bar></eo-tool-bar>
    </el-header>
    <el-container>
      <el-aside class="eo-left-aside" :width="leftWidth"></el-aside>
      <el-main class="eo-app-main">
        <eo-content></eo-content>
      </el-main>
      <el-aside class="eo-right-aside" :width="rightWidth"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import EoTitleBar from './components/TitleBar';
  import EoToolBar from './components/ToolBar';
  import EoContent from './components/Content';

  export default {
    name: 'app',
    components: {
      EoTitleBar,
      EoToolBar,
      EoContent
    },
    data() {
      return {
        leftWidth: '240px',
        rightWidth: '240px'
      }
    }
  };
</script>
