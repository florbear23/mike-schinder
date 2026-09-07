/* ============================================================
   ASSESSMENT URL — SINGLE CONFIGURATION POINT
   The real Decision Clarity Assessment is being built in GoHighLevel. The
   client's preferred branded URL is assessment.michaelschindler.com, but
   that URL is NOT live/published yet, so it is deliberately not set below —
   inventing it would silently send real visitors to a domain that may not
   resolve or may not point at the finished assessment.

   EVERY assessment CTA on the site (22 of them, across index/about/connect/
   programs/resources/what-i-do.html) carries data-cta="assessment" and a
   safe existing href of index.html#assessment (or #assessment, on the
   homepage itself) as a no-JS fallback. Once GHL publishes the real URL:

     1. set ASSESSMENT_URL below to that exact URL
     2. every one of those 22 links updates automatically on page load

   No other file needs to change. Until that URL exists, this script is a
   deliberate no-op (ASSESSMENT_URL is null) and every CTA keeps working via
   its existing fallback href. */
var ASSESSMENT_URL = null; // e.g. 'https://assessment.michaelschindler.com'

document.addEventListener('DOMContentLoaded', function () {
  if (ASSESSMENT_URL) {
    // Same tab by default (typical for a funnel that's meant to bring the
    // visitor back to the site afterward). Add target="_blank" here too if
    // the GHL assessment is meant to open in a new tab instead.
    document.querySelectorAll('[data-cta="assessment"]').forEach(function (a) {
      a.href = ASSESSMENT_URL;
    });
  }
});

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
