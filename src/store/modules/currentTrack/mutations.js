import * as types from './mutation-types';

export default {
  [types.SET_TRACK](state, payload) {
    state.currentTrack = payload;
  },
  [types.REMOVE_TRACK](state) {
    state.currentTrack = null;
  }
};
