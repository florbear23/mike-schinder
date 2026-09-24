/* ============================================================
   ASSESSMENT URL — SINGLE CONFIGURATION POINT
   The real Decision Clarity Assessment is live in GoHighLevel at the
   confirmed URL below (set Sep 2026).

   EVERY assessment CTA on the site (22 of them, across index/about/connect/
   programs/resources/what-i-do.html) carries data-cta="assessment" and
   updates to this URL automatically on page load. The static hrefs already
   in each page's HTML (mostly /#assessment, plus a /connect fallback for
   the two CTAs that live inside the assessment panel itself) remain as a
   no-JS fallback only — no other file needs to change.

   If this URL is ever retired, set ASSESSMENT_URL back to null and every
   CTA reverts to its existing fallback href automatically. */
var ASSESSMENT_URL = 'https://assessment.mikeschindler.com/assessment';

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

/* ============================================================
   SKOOL URL — SINGLE CONFIGURATION POINT
   Human 10.0's free Skool community join link — confirmed URL below
   (set Sep 2026).

   Every "join Human 10.0" CTA on the site carries data-cta="skool" and
   updates to this URL automatically on page load (opens in a new tab,
   since Skool is an external destination). The static fallback hrefs
   already in each page's HTML (a pre-filled connect.html message) remain
   as a no-JS fallback only — no other file needs to change.

   If this URL is ever retired, set SKOOL_URL back to null and every CTA
   reverts to its existing fallback href automatically. */
var SKOOL_URL = 'https://www.skool.com/stuck-to-unstuck/about?ref=21743062f3b44a1e9fe764fe8d482a5d';

document.addEventListener('DOMContentLoaded', function () {
  if (SKOOL_URL) {
    document.querySelectorAll('[data-cta="skool"]').forEach(function (a) {
      a.href = SKOOL_URL;
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    function closeMenu() {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    }
    function openMenu() {
      nav.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close menu');
    }
    btn.addEventListener('click', function () {
      if (nav.classList.contains('open')) closeMenu(); else openMenu();
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        btn.focus();
      }
    });
  }
});

/* Homepage Timothy Krambs video player: the custom cover hides on play and
   returns when it ends, so the poster (not a black frame) is what people
   see either side of playback. */
document.addEventListener('DOMContentLoaded', function () {
  var frame = document.getElementById('timothy-frame');
  var video = document.getElementById('timothy-video');
  var play  = document.getElementById('timothy-play');
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
