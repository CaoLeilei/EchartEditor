<template>
  <div class="eo-padding">
    <div class="eo-padding__header">
      {{title}}
    </div>
    <div class="eo-padding__inner">
      <el-row :gutter="10">
        <el-col :span="12" :offset="6">
          <el-form-item label-width="0px">
            <el-input class="eo-input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label-width="0px">
            <el-input class="eo-input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label-width="0px">
            <el-input class="eo-input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label-width="0px">
            <el-input class="eo-input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EoPadding',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
