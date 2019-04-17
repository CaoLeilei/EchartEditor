import mutationTypes from './mutationTypes';

export default {
  updateCharTitle ({commit}, value) {
    commit(mutationTypes.UPDATE_CHART_TITLE, value);
  },
  updateScale ({commit}, value) {
    commit(mutationTypes.UPDATE_SCALE, value);
  },
  updateCanvasWidth ({commit}, value) {
    commit(mutationTypes.UPDATE_CANVAS_WIDTH, value);
  },
  updateCanvasHeight ({commit}, value) {
    commit(mutationTypes.UPDATE_CANVAS_HEIGHT, value);
  },
  updateBackgroundColor ({commit}, value) {
    commit(mutationTypes.UPDATE_BACKGROUND_COLOR, value);
  }
};
