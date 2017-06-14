<template>
  <div id="app">
    <img class='menu' src='../pictures/menu.png' />
    <navigation></navigation>
    <player
    v-if='currentTrack'
    :currentTrack='currentTrack'>
    </player>
    <tracklist
    v-if='tracklist.data'
    :data='tracklist.data'
    :currentTrack='currentTrack'>
    </tracklist>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navigation from './components/Navigation/navigation.vue';
import Player from './components/Player/player.vue';
import TrackList from './components/TrackList/tracklist.vue';

const initialState = {
	limit: 20,
	linked_partioning: 1,
	offset: 0
}

export default {
  name: 'app',
  components: {
    'navigation': Navigation,
    'player': Player,
    'tracklist': TrackList
  },
  computed: {
    ...mapState({
      tracklist: state => state.tracklist,
      currentTrack: state => state.currentTrack.currentTrack,
    })
  },
  created () {
    this.$store.dispatch('getTracks', initialState);
  }
}
</script>

<style>
#app {
  width: 450px;
  height: 850px;
  position: relative;
  overflow-y: auto;
  border: 2px solid white;
  background-color: white;
  font-family: 'Ropa Sans', sans-serif;

}

.menu {
  position: absolute;
  height: 80px;
  top: 10px;
  cursor: pointer;
}

html {
  background-color: black;
}
</style>

<link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet">
