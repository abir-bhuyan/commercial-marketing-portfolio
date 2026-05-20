# 01 — Capability One-Pager

A single-page client-facing capability statement for a fictional Perth-based subsea integrity company.

## What this is

In the offshore services industry, a **capability statement** is the standard first piece of marketing collateral handed to a prospective client. It needs to do three things in one page:

1. Position the company quickly (who, where, what)
2. Demonstrate credibility (stats, services, sectors served)
3. Make follow-up easy (clear contact information)

This one-pager is built for "Subsea Solutions Pty Ltd" — a fictional company specialising in subsea Inspection, Repair and Maintenance (IRM) for the Australian offshore market.

## Files

| File | Purpose |
|------|---------|
| `SubseaSolutions_Capability.pdf` | Print-ready A4 deliverable |
| `SubseaSolutions_Capability.html` | Editable HTML source |

## Design choices

- **Palette**: deep navy (`#0B3D5C`) with a coral accent (`#FF7A1A`). The combination signals industrial seriousness without being grey or cold.
- **Structure**: header → positioning hero → 4-stat strip → two-column body (services, sectors, case study, engagement model) → contact footer.
- **Typography**: Helvetica Neue throughout, with size hierarchy doing the work rather than colour.
- **A4, print-ready**: 14mm margins, designed to be handed over physically at a meeting or exhibition.

## How to regenerate the PDF

The HTML source is self-contained — no external assets or fonts.

```bash
wkhtmltopdf --enable-local-file-access \
  --page-size A4 \
  --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 \
  SubseaSolutions_Capability.html SubseaSolutions_Capability.pdf
```

## Disclaimer

Subsea Solutions Pty Ltd is fictional. The company name, contact details, ABN, address, statistics, and case study are illustrative only.
