import Vue from 'vue';
import Vuex from 'vuex';
import tracklist from './modules/TrackList';
import currentTrack from './modules/currentTrack';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tracklist,
    currentTrack,
  },
  getters
});
