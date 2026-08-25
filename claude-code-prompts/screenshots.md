# Prompt: capture Tutor Flow screenshots for the landing page

Paste the block below into Claude Code, in the Tutor Flow extension repo.

---

You have access to this repository and a Chromium instance you can drive (Playwright or
Puppeteer — use whichever is already available, otherwise install Playwright). I need seven
screenshots for the Tutor Flow landing page. Work through them in order and stop to tell me
if a step can't be reached without a real Ringle session.

**Ground rules**

- **Never use real student data.** Before capturing anything from the Student Tracker or a
  feedback doc, seed the extension's local storage with invented students, lesson IDs, and
  notes. Plausible but fictional: names, IDs, and note text you made up. If a real Ringle
  session is required to reach a page, redact any real name, email, or lesson ID in the
  captured PNG before handing it back.
- Capture at **2× device pixel ratio**, PNG, no OS window chrome, no browser toolbar unless
  the shot is specifically of the extension popup.
- Light mode, default zoom, and a clean profile: no unrelated extensions, no bookmarks bar.
- Crop tight to the UI that matters. Leave a few pixels of surrounding page so the shot
  reads as being inside Ringle, but don't include large empty regions.
- Where a Ringle page can't be reached, build a local fixture page that renders the same
  injected component over a mock Ringle surface, and say clearly in your summary which shots
  are fixtures rather than live captures.
- Save each file to `screenshots/` with the exact filename given below, and write a short
  `screenshots/README.md` listing what each one shows and whether it was live or a fixture.

**The seven shots**

| File | Aspect | What it must show |
|---|---|---|
| `01-calendar-grid.png` | 16:9 | Ringle's booking grid with Google Calendar overlays drawn on it — both a Regular and a Holiday overlay visible in their different colours — and a recurring private-slot offer with a flagged conflict. The flag is the point of the shot; make sure it's legible. |
| `02-calendar-popup.png` | 3:4 (portrait, 380px popup width) | The extension popup showing Google Calendar connected, with the Regular and Holiday overlay lists populated by at least two calendars each. |
| `03-tracker-roster.png` | 16:10 | Student Tracker roster with a search term entered and several fabricated students in the results. Show the search field with its query visible. |
| `04-tracker-profile.png` | 16:10 | One fabricated student's profile: level, notes carried across lessons, and some lesson history. Notes should read like real tutor notes, invented. |
| `05-exporter-doc.png` | 16:10 | A lesson doc with a paraphrase written out and **one phrase bolded** — the phrase the tutor wants exported. The bolding must be clearly visible at a glance. |
| `06-exporter-report.png` | 16:10 | The Feedback Report after export, with the bolded phrase from shot 05 sitting as its own separate key expression — ideally two or three phrases split out as individual entries, not one long blob. Shots 05 and 06 are a before/after pair: use the same lesson content in both. |
| `07-shortcuts-doc.png` | 4:3 | A feedback doc marked up using the formatting shortcuts — asterisk bold, bracket/hyphen insertions and corrections, an auto-paired quotation, and a highlighted phrase. This is the shot that shows the shortcuts' output, so include several of them in one passage. |

Shots 05 and 06 must match each other. Shots 03 and 04 must use the same fabricated roster.

When you're done, report: which shots are live vs fixture, anything you couldn't capture and
why, and the final pixel dimensions of each file.
