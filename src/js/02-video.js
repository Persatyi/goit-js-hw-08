let videoplayerCurrentTime = 0;

const player = new Vimeo.Player('vimeo-player');

player.on('timeupdate', function (e) {
  console.log(e);

  videoplayerCurrentTime = e.seconds;
  localStorage.setItem('current-time', videoplayerCurrentTime);
});

player.setCurrentTime(localStorage.getItem('current-time'));
