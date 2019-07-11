<template>
  <el-container class="eo-dialog eo-color-picker">
    <el-container>
      <el-main class="eo-color-picker__main">
        <div class="color-main">
          <div class="color-panel" :style="{backgroundColor: hexColor}">
            <div class="color-panel-inner white"></div>
            <div class="color-panel-inner black"></div>
          </div>
          <div class="color-bar">
            <div class="color-bar-inner"></div>
          </div>
          <div class="color-bar opacity">
            <div class="color-bar-opacity" :style="opacityBarStyle"></div>
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
              <div class="color-value-title">R</div>
              <el-input class="eo-input" v-model="r"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">G</div>
              <el-input class="eo-input" v-model="g"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">B</div>
              <el-input class="eo-input" v-model="b"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">A</div>
              <el-input class="eo-input" v-model="a"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="color-value">
            <el-col :span="6">
              <div class="color-value-title">H</div>
              <el-input class="eo-input" v-model="h"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">S</div>
              <el-input class="eo-input" v-model="s"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">L</div>
              <el-input class="eo-input" v-model="l"></el-input>
            </el-col>
            <el-col :span="6">
              <div class="color-value-title">A</div>
              <el-input class="eo-input" v-model="a"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="color-value">
            <el-col :span="24">
              <div class="color-value-title">HEX</div>
              <el-input class="eo-input" v-model="hex"></el-input>
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
  import { Color} from '../../common/color';

  export default {
    name: 'index',
    data () {
      return {
        hexColor: '#ff0000',
        a: 1,
        color: new Color('#ff0000'),
        hex: '',
        r: 0,
        g: 0,
        b: 0,
        h: 0,
        s: 0,
        l: 0
      };
    },
    created() {
      this.buildColorInfo();
    },
    watch: {
      hexColor(value) {
        this.color = new Color(value);
        this.color.setA(this.a);
      },
      a (value) {
        this.color = new Color(this.hexColor);
        this.color.setA(value);
      },
      color (value) {
        if (value) {
          this.buildColorInfo();
        }
      }
    },
    computed: {
      opacityBarStyle () {
        let startColor = `RGBA(${this.r},${this.g},${this.b}, 0)`;
        let endColor = `RGBA(${this.r},${this.g},${this.b}, 1)`;

        return {
          background: `linear-gradient(to bottom, ${startColor}, ${endColor})`
        };
      }
    },
    methods: {
      buildColorInfo () {
        let rgba = this.color.toRgba();
        let hsla = this.color.toHsla();
        this.hex = this.color.toHex();
        this.r = rgba.r;
        this.g = rgba.g;
        this.b = rgba.b;
        this.h = hsla.h;
        this.s = hsla.s;
        this.l = hsla.l;
      }
    }
  };
</script>
