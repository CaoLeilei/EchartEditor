<template>
  <div class="eo-property-groups">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="title" name="1">
        <eo-chart-title></eo-chart-title>
      </el-collapse-item>
      <el-collapse-item title="legend" name="2">
        <eo-legend></eo-legend>
      </el-collapse-item>
      <el-collapse-item title="grid" name="3">
        <eo-chart-grid></eo-chart-grid>
      </el-collapse-item>
      <el-collapse-item title="xAxis" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
      <el-collapse-item title="yAxis" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import EoChartTitle from '../ChartsConfigs/Title';
  import EoLegend from '../ChartsConfigs/Legend';
  import EoChartGrid from '../ChartsConfigs/Grid';

  export default {
    name: 'EoPropertyGroups',
    components: {
      EoChartTitle,
      EoLegend,
      EoChartGrid
    },
    data () {
      return {
        activeNames: ['grid']
      };
    },
    methods: {
      handleChange () {}
    }
  };
</script>
