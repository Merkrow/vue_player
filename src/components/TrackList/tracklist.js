import util from '../../util/util';

export default {
  name: 'tracklist',
  props: ['data', 'currentTrack'],
  computed: {
    trackCounter() {
      return this.currentTrack ? `TRACKS: ${this.getCurrentNumber(this.currentTrack)} OF ${this.data.length}` :
      `TRACKS: 1 OF ${this.data.length}`;
    }
  },
  methods: {
    getTime(seconds) {
      return util.secondsToHms(seconds);
    },
    playTrack(index) {
      this.$store.commit('SET_TRACK', this.data[index]);
    },
    getCurrentNumber(track) {
      let index;
      this.data.forEach((item, i) => {
        if (item.id === track.id) {
          index = i;
        }
        return item;
      });
      return index + 1;
    },
  }
};
