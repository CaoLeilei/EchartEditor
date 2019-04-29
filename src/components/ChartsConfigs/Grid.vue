<template>
  <el-form label-position="top">
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="Show（是否显示标题组件）">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="Id">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="eo-padding">
      <div class="eo-padding_header">
        边距
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
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form-item label="Width">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Height">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="ContainLabel:">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="BackgroundColor:">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="BorderColor:">
          <el-input class="eo-input"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: 'EoChartGrid'
  };
</script>
