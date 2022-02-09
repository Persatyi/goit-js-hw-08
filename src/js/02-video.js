import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

let videoPlayerCurrentTime = 0;

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(e) {
  videoPlayerCurrentTime = e.seconds;
  localStorage.setItem('current-time', videoPlayerCurrentTime);
}

const time = localStorage.getItem('current-time') || 0;

player.setCurrentTime(time);
