import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as types from './mutation-types';
import util from '../../../util/util';

Vue.use(VueAxios, axios);

export default {
  getTracks({ commit }, params) {
    commit(types.FETCH_SONGS_REQUEST);
    const URL = util.getSongsUrl(params);
    axios.get(URL)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          const error = response.message;
          throw new Error(error);
        }
      })
      .then((data) => {
        commit(types.FETCH_SONGS_SUCCESS, data);
      })
      .catch((error) => {
        commit(types.FETCH_SONGS_ERROR, error);
      });
  }
};
