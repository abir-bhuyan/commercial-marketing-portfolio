# 02 — Conference Activation Plan

A 5-slide marketing & commercial plan plus a 1-page supporting brief, prepared for a fictional offshore services company attending the Australasian Oil & Gas Exhibition (AOG) 2026 in Perth.

## What this is

Exhibitions are one of the most expensive marketing activities a B2B services company runs — typical AOG-scale activations cost AUD 50,000–100,000+ once booth, build, collateral, staff time, and hosting are added up. To get sign-off and run them well, marketing teams produce:

1. **An activation plan deck** — used to get internal alignment and sign-off
2. **A supporting brief** — the one-page reference document that travels with the deck

This project produces both, for "Meridian Offshore" attending AOG 2026.

## Files

| File | Purpose |
|------|---------|
| `Meridian_AOG_ActivationPlan.pptx` | 5-slide activation plan deck |
| `Meridian_AOG_Brief.pdf` | 1-page supporting brief |
| `Meridian_AOG_Brief.html` | Editable HTML source for the brief |
| `build_pptx.js` | Source code that generates the deck |

## Deck structure

| # | Slide | What it does |
|---|-------|--------------|
| 1 | Cover | Project title, event metadata, document reference |
| 2 | Objectives & target audience | Three concrete objectives + four audience segments |
| 3 | Booth concept & key messages | Visual booth mock + three positioning statements |
| 4 | Collateral, lead capture & budget | Checklist, capture workflow, line-item budget |
| 5 | Timeline & success metrics | T-minus timeline + 4 KPI cards |

## Design choices

- **Palette**: deep ocean navy (`#0E2A47`) with teal (`#2A8E9A`) and coral (`#FF6B4A`) accents. Marine/industrial without defaulting to corporate blue.
- **Typography**: Calibri throughout, with strong size contrast between titles (28pt) and body (9–10pt).
- **Consistent footer** on every content slide with brand mark, project reference, and page number — mirrors how real tender and marketing documents are tracked.
- **One visual motif** per slide (numbered cards on slide 2, booth mock on slide 3, table + checklist on slide 4, timeline + KPI cards on slide 5) — avoids "deck of bullet-point lists" feel.

## How to regenerate

```bash
# Install once
npm install -g pptxgenjs

# Generate the deck
node build_pptx.js

# Generate the brief (requires wkhtmltopdf)
wkhtmltopdf --enable-local-file-access --page-size A4 \
  --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 \
  Meridian_AOG_Brief.html Meridian_AOG_Brief.pdf
```

## Disclaimer

Meridian Offshore is fictional. Stand number, accounts, budget figures, and event-specific details are illustrative only. The Australasian Oil & Gas Exhibition is a real Perth event; the activation plan was built around it for realism.
