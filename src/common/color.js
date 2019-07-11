
function roundFloat(number, decimalPoints) {
  const decimal = Math.pow(10, decimalPoints);
  return Math.round(number * decimal) / decimal;
}

export class RGBA {
  constructor(r, g, b, a) {
    if (typeof a === 'undefined') {
      a = 1;
    }
    this.r = Math.min(255, Math.max(0, r)) | 0;
    this.g = Math.min(255, Math.max(0, g)) | 0;
    this.b = Math.min(255, Math.max(0, b)) | 0;
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
}

export class HSLA {
  constructor(h, s, l, a) {
    if (typeof a === 'undefined') {
      a = 1;
    }
    this.h = Math.max(Math.min(360, h), 0) | 0;
    this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
    this.l = roundFloat(Math.max(Math.min(1, l), 0), 3);
    this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
  }
}

export const hslaFromRGBA = function (rgba) {
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const a = rgba.a;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (min + max) / 2;
  const chroma = max - min;

  if (chroma > 0) {
    s = Math.min((l <= 0.5 ? chroma / (2 * l) : chroma / (2 - (2 * l))), 1);

    switch (max) {
      case r: h = (g - b) / chroma + (g < b ? 6 : 0); break;
      case g: h = (b - r) / chroma + 2; break;
      case b: h = (r - g) / chroma + 4; break;
    }

    h *= 60;
    h = Math.round(h);
  }
  return new HSLA(h, s, l, a);
};

export const hue2rgb = function (p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};

export const hslaToRGBA = function (hsla) {
  const h = hsla.h / 360;
  const { s, l, a } = hsla;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return new RGBA(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
};

export class Color {
  constructor (colorStr) {
    if (colorStr.startsWith('#')) {
      colorStr = colorStr.substr(1);
    }
    let _rStr = colorStr.substr(0, 2), _gStr = colorStr.substr(2, 2), _bStr = colorStr.substr(4, 2), _aStr;
    if (colorStr.length === 8) {
      _aStr = colorStr.sub(6, 2);
    } else {
      _aStr = 'ff';
    }
    this.r = parseInt(_rStr, 16);
    this.g = parseInt(_gStr, 16);
    this.b = parseInt(_bStr, 16);
    this.a = parseInt(_aStr, 16);
  }

  toRgba () {
    return new RGBA(this.r, this.g, this.b, this.a);
  }
  toHsla () {
    let _rgba = this.toRgba();
    return hslaFromRGBA(_rgba);
  }
  toHex () {
    let _rStr = this.r.toString(16);
    let _gStr = this.g.toString(16);
    let _bStr = this.b.toString(16);
    let _aStr = this.a.toString(16);
    if (_aStr === 'ff') {
      return `#${_rStr}${_gStr}${_bStr}`;
    } else {
      return  `#${_rStr}${_gStr}${_bStr}${_aStr}`;
    }
  }
  getFlotA () {
    return roundFloat(this.a , 3);
  }

  setA (a) {
    this.a = a;
  }
  setR(r) {
    this.r = r;
  }
  setG(g) {
    this.g = g;
  }
  setB (b) {
    this.b = b;
  }
}

