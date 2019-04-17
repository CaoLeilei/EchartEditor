<template>
  <el-container class="eo-dialog eo-color-picker">
    <el-container>
      <el-main class="eo-color-picker__main">
        <div class="color-main">
          <div class="color-panel"></div>
          <div class="color-bar">
            <div class="color-bar-inner"></div>
          </div>
          <div class="color-bar">
            <div class="color-bar-inner"></div>
            <div class="color-bar-pointer"></div>
          </div>
          <div class="color-opacity"></div>
        </div>
      </el-main>
      <el-aside width="200px" class="eo-color-picker__aside">
        <div class="aside-inner">
          <div class="color-compare">
            <div class="color-compare-item">
              <div class="item-text">新的</div>
              <div class="item-inner"></div>
            </div>
            <div class="color-compare-item">
              <div class="item-inner"></div>
              <div class="item-text">当前</div>
            </div>
          </div>
          <el-row :gutter="10" class="color-value">
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="color-value">
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="color-value">
            <el-col :span="24">
              <div class="color-value-title">H</div>
              <el-input class="eo-input"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-aside>
    </el-container>
    <el-footer height="40px" class="eo-dialog__footer">
      <div class="footer-inner">
        <div class="footer-left"></div>
        <div class="footer-right">
          <el-button type="primary" class="dialog-button">确定</el-button>
          <el-button class="dialog-button">取消</el-button>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'index'
  };
</script>
