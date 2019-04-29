<template>
  <div class="eo-toolbar">
    <div class="eo-toolbar__inner">
      <div class="eo-toolbar__group">
        <div class="eo-toolbar__button">
          <el-button class="eo-button" icon="el-icon-plus" @click="handleCreateBtnClick"></el-button>
          <span>新建</span>
        </div>
        <div class="eo-toolbar__button">
          <el-button class="eo-button eo-toolbar__button">aaa</el-button>
          <span>数据</span>
        </div>
      </div>
      <div class="eo-toolbar__group">
        <div class="eo-toolbar__button">
          <el-button class="eo-button" icon="el-icon-refresh"></el-button>
          <span>刷新</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'EoToolBar',
    components: {
    },
    methods: {
      handleCreateBtnClick () {
        this.$emit('create');
      }
    }
  };
</script>
