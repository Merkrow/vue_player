export default {
  secondsToHms(d) {
    d = Number(d);

    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s);
  },
  getSongsUrl(params) {
    const link = 'https://api.soundcloud.com/tracks?&client_id=f4323c6f7c0cd73d2d786a2b1cdae80c';
    if (!params) {
      return link;
    }
    const query = Object.keys(params).map(key => `&${key.toString()}=${params[key].toString()}`).join('');
    return link.concat(query);
  }
};
