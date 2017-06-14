<template>
  <div class='player-container'>
    <div class='player-nav-container'>
      <audio
      @timeupdate='onTimeUpdate($event)'
      @loadedmetadata='onLoadedMetaData($event)'
      @loadstart='onLoadStart()'
      ref='player' autoplay>
        <source v-bind:src='getStreamUrl(currentTrack.id)'>
      </audio>
      <button
      v-bind:class="[isPlaying ? classes.pauseButton : classes.playButton, classes.togglePlayButton]"
      @click='togglePlay'>
      </button>
      <button class='next-track' @click='nextTrack'></button>
      <span class='player-track-title'>{{ currentTrack.title.slice(0, 20) }}</span>
      <span class='player-track-progress'>{{ `${getTime(currentTime)} / ${getTime(duration)}` }}</span>
      <button v-bind:class='[muted ? classes.playerMuted : classes.playerNotMuted, classes.playerMute]' @click='toggleMute'></button>
      <div @click='setPosition($event)' class='player-seek-bar'>
        <div class='progress-bar' v-bind:style='style.progressStyle'></div>
      </div>
    </div>
  </div>
</template>

<script src="./player.js"></script>
<style src="./player.css" scoped></style>
