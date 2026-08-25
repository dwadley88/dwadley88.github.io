# Prompt: document the exact formatting-shortcut syntax

Paste the block below into Claude Code, in the Tutor Flow extension repo. The landing page
currently describes the bracket, hyphen, and highlight shortcuts in general terms because I
don't want to publish syntax I haven't confirmed. This closes that gap.

---

Read the content scripts in this repository that implement the editor formatting features —
asterisk bold, bracket correction, quote auto-pair, the highlight toggle, pronunciation
shorthand, and active line centering — and document exactly what they do. Read the code, not
the README; where the two disagree, trust the code and say so.

For **each** shortcut, give me:

1. **Trigger** — the literal characters typed, or the exact key combination, including any
   modifier differences between macOS and Windows.
2. **Input → output** — a concrete example of what the tutor types and precisely what appears
   in the doc afterwards. Show the resulting formatting (bold, highlight colour, inserted or
   struck text), not a description of it.
3. **When it fires** — on closing character, on a delay, on key-up, on blur? Does it need the
   surrounding text to match a pattern?
4. **Where it applies** — which Ringle surfaces the script runs on (lesson doc, feedback
   report, both), and any place it's deliberately suppressed.
5. **Edge cases** — what happens with nested markers, an unclosed marker, a marker inside a
   word, or one spanning a line break. Anything a tutor might hit by accident.
6. **Undo behaviour** — does the transformation survive Ctrl/Cmd+Z as one step, or does undo
   leave the raw markers behind?

Then give me two things I can paste straight into marketing copy:

- A **table** of `trigger → result`, one row per shortcut, using tutor-facing language: no
  selectors, no function names, no mention of how the script hooks into the page.
- A **single worked example**: one short paragraph of lesson feedback as it would actually be
  typed, showing several shortcuts in one passage, plus the same paragraph as it renders
  afterwards. Keep the content generic — no real student.

Finally, flag anything the landing page shouldn't claim: shortcuts that are unreliable,
platform-specific, disabled by default, or currently broken.
