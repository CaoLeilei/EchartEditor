<template>
  <el-container class="eo-create-layer">
    <el-header height="48px" class="eo-create-layer__header">
      <div class="header-inner">
        <ul class="header-tabs">
          <li>
            <div class="header-button is-active">
              <i></i>
              <div class="header-button-text">最近使用</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">已保存</div>
            </div>
          </li>
        </ul>
        <ul class="header-tabs">
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">折线图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">柱状图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">散点图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">K线图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">饼图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">地图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">雷达图</div>
            </div>
          </li>
          <li>
            <div class="header-button">
              <i></i>
              <div class="header-button-text">仪表盘</div>
            </div>
          </li>
        </ul>
      </div>
    </el-header>
    <el-container class="eo-create-layer__container">
      <el-main></el-main>
      <el-aside width="310px" class="eo-create-layer__aside">
        <div class="aside-inner">
          <div class="aside-title">基本信息</div>
          <el-form>
            <el-form-item>
              <el-input class="eo-input title-input" size="large"></el-input>
            </el-form-item>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="宽度（像素）">
                  <el-input class="eo-input title-input" v-model="width"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="高度（像素）">
                  <el-input class="eo-input title-input" v-model="height"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="背景色">
              <el-select v-model="background" style="width: 100%" class="eo-select" popper-class="eo-select-dropdown">
                <el-option value="#ffffff">白色</el-option>
                <el-option value="#000000">黑色</el-option>
              </el-select>
<!--              <el-button>-->
<!--              </el-button>-->
            </el-form-item>
          </el-form>
          <div class="aside-bottom">
            <el-button type="primary" class="aside-button">创建</el-button>
            <el-button class="aside-button">取消</el-button>
          </div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        width: 0,
        height: 0,
        background: ''
      };
    }
  };
</script>
