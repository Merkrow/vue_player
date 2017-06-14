export default {
  getNextTrack(state) {
    let index;
    if (state.tracklist.data) {
      state.tracklist.data.forEach((item, i) => {
        if (item.id === state.currentTrack.currentTrack.id) {
          index = i + 1;
        }
        return item;
      });
    }
    return state.tracklist.data[index];
  }
};
