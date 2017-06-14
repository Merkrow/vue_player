import util from '../../util/util';

export default {
  name: 'Player',
  props: ['currentTrack'],
  data() {
    return {
      isPlaying: true,
      currentTime: 0,
      duration: 0,
      isSeeking: false,
      muted: false,
      classes: {
        togglePlayButton: 'toggle-play-button',
        pauseButton: 'pause-button',
        playButton: 'play-button',
        playerMute: 'player-mute',
        playerMuted: 'player-muted',
        playerNotMuted: 'player-not-muted'
      },
      style: {
        progressStyle: 0,
      }
    };
  },
  mounted() {
    const player = this.$refs.player;
    this.$watch('currentTrack', function () {
      player.load();
    });
  },
  methods: {
    getStreamUrl(id) {
      return `http://api.soundcloud.com/tracks/${id}/stream?consumer_key=f4323c6f7c0cd73d2d786a2b1cdae80c`;
    },
    setPosition(e) {
      if (!this.isPlaying) {
        return;
      }
      const player = this.$refs.player;
      let tag = e.target;
      if (e.target.className !== 'player-seek-bar') {
        tag = e.target.parentElement;
      }
      const seekPos = e.offsetX / tag.clientWidth;
      player.currentTime = parseInt(this.duration * seekPos);
    },
    getTime(seconds) {
      return util.secondsToHms(seconds);
    },
    togglePlay() {
      const player = this.$refs.player;
      this.isPlaying = !this.isPlaying;
      return !this.isPlaying ? player.pause() : player.play();
    },
    onTimeUpdate(e) {
      if (this.isSeeking) {
        return;
      }
      const audio = e.target;
      const currentTime = Math.floor(audio.currentTime);
      if (currentTime === this.currentTime) {
        return;
      }
      if(currentTime === this.duration) {
        this.nextTrack();
      }
      this.currentTime = currentTime;
      let percentage = parseInt((currentTime / this.duration) * 100);
      this.style.progressStyle = `width:${percentage}%`;
    },
    onLoadedMetaData(e) {
      this.duration = Math.floor(e.target.duration);
    },
    onLoadStart() {
      this.duration = 0;
      this.currentTime = 0;
    },
    toggleMute() {
      this.muted = !this.muted;
      this.$refs.player.muted = this.muted;
    },
    nextTrack() {
      const nextTrack = this.$store.getters.getNextTrack;
      this.$store.commit('SET_TRACK', nextTrack);
    }
  },
};
