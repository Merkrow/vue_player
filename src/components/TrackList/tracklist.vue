<template>
  <div class='tracklist-container'>
    <h2 class='track-title'>{{ currentTrack ? currentTrack.title.slice(0, 20) : data[0].title.slice(0, 20) }}</h2>
    <p class='track-counter'>{{ trackCounter }}</p>
    <img class='track-image' :src="[currentTrack && currentTrack.artwork_url ? currentTrack.artwork_url : 'https://i1.sndcdn.com/artworks-000212180041-nxnyhe-large.jpg']" />
    <ul class='tracklist-list'>
      <li v-for='(item, index) in data' @click='playTrack(index)' class='song-item'>
        <span class='song-index'>{{ index + 1 }}</span><span class='song-title'>{{ item.title.slice(0, 20) }}</span><span class='song-duration'>{{ getTime(item.duration/1000) }}</span>
      </li>
    </ul>
  </div>
</template>

<script src="./tracklist.js"></script>
<style src="./tracklist.css" scoped></style>
