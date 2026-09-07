THE NEXT CHAPTER™ MINI-BOOK — INTEGRATION NOTES
=================================================
Added: mini-book.html, assets/the-next-chapter-mini-book.pdf
Source: "The Next Chapter.docx" (client-supplied manuscript, 2,820 words,
7 chapters + cover + closing). All copy on mini-book.html and in the PDF
is transcribed directly from that document — nothing was added, rewritten,
or invented.

WHAT'S REAL RIGHT NOW
----------------------
- mini-book.html reads correctly on desktop, tablet and mobile.
- The PDF (assets/the-next-chapter-mini-book.pdf) is a real, complete,
  text-searchable 20-page download generated from the same content —
  verified with pdftotext, all 7 chapters + closing CTA present, word
  count matches the source manuscript.
- "DOWNLOAD THE FREE MINI-BOOK" is a direct, ungated download (no email
  capture — see EMAIL AUTOMATION below for why).
- Both closing CTAs ("BEGIN THE NEXT CHAPTER™" and "TALK WITH MIKE") are
  live links to connect.html, pre-filled with a different topic + starting
  message so the two intents stay distinguishable even though they land on
  the same real page today.
- connect.html's contact form is a front-end prototype with no backend
  (pre-existing condition, not introduced by this work — same limitation
  applies to every other "start a conversation" link on the site, e.g.
  Programs' "START THE CONVERSATION").

THREE PLACEHOLDERS THAT NEED REAL URLS
----------------------------------------
1. ENROLLMENT / PAYMENT LINK
   File: mini-book.html, search for "BEGIN THE NEXT CHAPTER"
   Currently: connect.html?topic=Working%20together&note=...#form
   Replace the href with the real checkout/enrollment URL once one exists.
   The manuscript itself says "Payment/enrollment link will be added here" —
   this was expected, not something we're missing.

2. CALENDAR LINK (optional upgrade)
   File: mini-book.html, search for "TALK WITH MIKE"
   Currently: connect.html?topic=General%20question&note=...#form
   This already works as a real conversation-starter. Swap to a calendar
   URL only if a live scheduling link is preferred over the contact form.

3. ASSESSMENT → MINI-BOOK RESULTS BRIDGE
   File: mini-book.html, the <script> at the bottom
   There is no real Decision Clarity Assessment tool anywhere on this site.
   The homepage's #assessment section (index.html) is a static visual
   mockup — hardcoded "68 / Moderate" score, and its own "TAKE THE
   3-MINUTE ASSESSMENT" button links to #assessment (itself). No quiz, no
   scoring, no results state, no redirect exists. This is a pre-existing
   condition, not something this pass was asked to build.
   mini-book.html is ready to receive that flow once it exists: point the
   real results screen's "next step" link to
       mini-book.html?from=assessment
   and the approved "YOUR RESULTS ARE JUST THE BEGINNING" framing swaps in
   automatically (real, working JS — not a mockup). Nothing fabricates a
   score or a completed assessment for visitors who didn't take one.

EMAIL AUTOMATION
------------------
No email capture or marketing-automation integration exists anywhere in
this project. Per the brief, one was not built for this pass. The download
is a direct link so nothing is faked. When an ESP is chosen, the natural
gate point is right before the "DOWNLOAD THE FREE MINI-BOOK" buttons in
mini-book.html (there are two — top hero and none currently at the bottom;
add a form there if gating is wanted).

WHERE THE MINI-BOOK IS LINKED FROM
-------------------------------------
- resources.html — a slim secondary line below the Tools & Resources grid
  (.mb-bridge). Does not compete with the assessment tile above it.
- programs.html — a slim secondary line below the Next Chapter panel's
  "START THE CONVERSATION" button (.mb-bridge). Clearly subordinate.
- It is NOT linked from index.html (homepage). The homepage's only CTA
  hierarchy is the assessment — untouched, unmodified, no mini-book
  mention anywhere on that page, by design.
- It is NOT in the main site navigation (kept out deliberately, consistent
  with how the site already avoids nav clutter).

PDF REGENERATION
-------------------
If mini-book.html's content changes, the PDF must be regenerated — it is a
static print of that page (Chrome headless --print-to-pdf), not linked
live. Command used:

  chrome --headless=new --print-to-pdf=assets/the-next-chapter-mini-book.pdf \
    --print-to-pdf-no-header --no-pdf-header-footer \
    http://localhost:PORT/mini-book.html

The page's @media print block hides the header/footer/hero buttons and
paginates one chapter per page. Currently no cover art or custom diagrams
exist for the "8s" or the Blueprint — this PDF is typography/layout only,
built entirely from the real manuscript text. Treat it as a working v1,
not a designer-finished asset.
