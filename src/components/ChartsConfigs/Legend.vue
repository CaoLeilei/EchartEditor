<template>
  <el-form label-position="top">
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="Show（是否显示标题组件）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <eo-padding title="Position（位置）"></eo-padding>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="Width（宽度）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="Height（高度）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="Orient（列表的布局朝向）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="Align（标记和文本的对齐）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <eo-padding title="Padding（内边距）"></eo-padding>
  </el-form>
</template>

<script>
  import EoPadding from './Padding';

  export default {
    name: 'EoLegend',
    components: {
      EoPadding
    }
  };
</script>
