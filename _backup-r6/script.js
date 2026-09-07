document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
});

/* Dan Mullins video: the custom cover hides on play and returns when it ends,
   so the poster (not a black frame) is what people see either side of playback. */
document.addEventListener('DOMContentLoaded', function () {
  var frame = document.getElementById('dan-frame');
  var video = document.getElementById('dan-video');
  var play  = document.getElementById('dan-play');
  if (!frame || !video || !play) return;
  play.addEventListener('click', function () {
    frame.classList.add('is-playing');
    video.controls = true;
    video.play();
  });
  video.addEventListener('pause', function () {
    if (video.currentTime === 0 || video.ended) frame.classList.remove('is-playing');
  });
  video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.controls = false;
    frame.classList.remove('is-playing');
  });
});

/* Timothy Krambs player — same cover behaviour as the homepage player. */
document.addEventListener('DOMContentLoaded', function () {
  var frame = document.getElementById('tim-frame');
  var video = document.getElementById('tim-video');
  var play  = document.getElementById('tim-play');
  if (!frame || !video || !play) return;
  play.addEventListener('click', function () {
    frame.classList.add('is-playing');
    video.controls = true;
    video.play();
  });
  video.addEventListener('pause', function () {
    if (video.currentTime === 0 || video.ended) frame.classList.remove('is-playing');
  });
  video.addEventListener('ended', function () {
    video.currentTime = 0;
    video.controls = false;
    frame.classList.remove('is-playing');
  });
});
