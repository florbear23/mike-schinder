/* ============================================================
   ASSESSMENT URL — SINGLE CONFIGURATION POINT
   The real Decision Clarity Assessment is being built in GoHighLevel. The
   client's preferred branded URL is assessment.michaelschindler.com, but
   that URL is NOT live/published yet, so it is deliberately not set below —
   inventing it would silently send real visitors to a domain that may not
   resolve or may not point at the finished assessment.

   EVERY assessment CTA on the site (22 of them, across index/about/connect/
   programs/resources/what-i-do.html) carries data-cta="assessment" and a
   safe existing fallback href as a no-JS fallback: most link to the
   assessment preview panel on the homepage (/#assessment); the two CTAs
   that live inside that panel itself (index.html and programs.html) instead
   fall back to the contact form, since scrolling to the section they're
   already in would be a dead end. Once GHL publishes the real URL:

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

/* ============================================================
   SKOOL URL — SINGLE CONFIGURATION POINT
   Human 10.0 is being held free in the Skool community while the paid
   experience is on hold (client direction, Sep 2026). No Skool group URL has
   been supplied yet, so it is deliberately not set below — inventing one
   would silently send real visitors to a group that may not exist or may not
   be the right one.

   Every "join Human 10.0" CTA on the site carries data-cta="skool" and a
   safe existing fallback href (a pre-filled connect.html message) so the
   link always does something real. Once the client supplies the Skool
   group's join URL:

     1. set SKOOL_URL below to that exact URL
     2. every CTA carrying data-cta="skool" updates automatically on page load
        (opens in a new tab, since Skool is an external destination)

   No other file needs to change. Until that URL exists, this script is a
   deliberate no-op (SKOOL_URL is null) and every CTA keeps working via its
   existing fallback href. */
var SKOOL_URL = null; // e.g. 'https://www.skool.com/human-10-0'

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
