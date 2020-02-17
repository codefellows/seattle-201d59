'use strict';

var video = document.getElementById('video');

video.width = window.innerWidth / 2;
video.height = window.innerHeight / 2;

window.addEventListener('resize', function () {
  video.width = window.innerWidth / 2;
  video.height = window.innerHeight / 2;
});

