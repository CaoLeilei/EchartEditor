import mutationTypes from './mutationTypes';

export default {
  [mutationTypes.UPDATE_CHART_TITLE] (state, value) {
    state.chartTitle = value;
  },
  [mutationTypes.UPDATE_SCALE] (state, value) {
    state.scale = value;
  },
  [mutationTypes.UPDATE_CANVAS_WIDTH] (state, value) {
    state.canvasWidth = value;
  },
  [mutationTypes.UPDATE_CANVAS_HEIGHT] (state, value) {
    state.canvasHeight = value;
  },
  [mutationTypes.UPDATE_BACKGROUND_COLOR] (state, value) {
    state.backgroundColor = value;
  }
};