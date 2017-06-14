import * as types from './mutation-types';

export default {
  [types.FETCH_SONGS_REQUEST](state) {
    state.fetching = true;
  },
  [types.FETCH_SONGS_SUCCESS](state, payload) {
    state.fetching = false;
    state.data = payload;
  },
  [types.FETCH_SONGS_ERROR](state, message) {
    state.error = message;
  }
};
