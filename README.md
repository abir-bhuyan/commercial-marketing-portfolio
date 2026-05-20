# commercial-marketing-portfolio
**Author** — Mohammed Habibur Rahman Bhuyan Abir ("Abir")
**Studying** — Bachelor of Information Technology (Business Information Systems), Murdoch University · graduating Dec 2026
**Currently** — Operations Manager at a Perth service franchise · IT Help Desk Representative at Murdoch University
**Contact** — habiburrahmanabeer@gmail.com · [linkedin.com/in/abir-bhuyan](https://www.linkedin.com/in/abir-bhuyan)

## Projects

### [01 — Capability One-Pager](./01-capability-one-pager/)

A single-page client-facing capability statement for a fictional Perth-based subsea integrity company ("Subsea Solutions Pty Ltd"). Demonstrates:

- Marketing collateral design (header, hero positioning, stats row, services grid, case study, footer)
- Brand-consistent layout and typography
- Understanding of the subsea IRM service-line vocabulary
- Print-ready A4 PDF, with the HTML source available for editing

Deliverable: `SubseaSolutions_Capability.pdf` · Source: `SubseaSolutions_Capability.html`

### [02 — Conference Activation Plan](./02-conference-activation-plan/)

A 5-slide PowerPoint plus a 1-page supporting brief for a fictional offshore services company ("Meridian Offshore") attending the Australasian Oil & Gas Exhibition (AOG) 2026 in Perth. Demonstrates:

- Conference and exhibition planning workflow
- Objective-setting and audience targeting
- Booth concept and key-message development
- Collateral checklist and lead-capture process design
- Indicative budgeting with line-item structure
- Pre-event timeline and post-event success metrics

Deliverables: `Meridian_AOG_ActivationPlan.pptx` (5 slides) · `Meridian_AOG_Brief.pdf` (1-page brief)

### [03 — Tender Opportunity Scanner](./03-tender-opportunity-scanner/)

A working Python tool that scans tender feeds and ranks opportunities by a weighted relevance score, producing a polished HTML dashboard for a commercial team. This project bridges my technical (Information Technology) background to the commercial role — using code to solve a real business problem. Demonstrates:

- Python package design, type hints, and unit tests
- Configuration-driven scoring algorithm (weighted multi-tier keyword matching with geographic, sector, value, and recency adjustments, plus negative-keyword suppression)
- SQLite persistence with upsert-by-id deduplication
- Self-contained HTML dashboard generation
- Transparent, auditable reasoning — every score has a one-sentence rationale
- Commercial judgement about what makes an offshore-services tender worth pursuing

Run with one command: `pip install -r requirements.txt && python3 scan.py`

### [04 — Marketing Mix Optimiser](./04-marketing-mix-optimiser/)

An offline interactive web app that takes a marketing budget, audience, goal, industry context, timeline, and existing strengths — and outputs a recommended channel mix across twelve B2B channels, projected qualified leads, blended cost-per-lead, projected pipeline ROI, a 90-day execution roadmap, and a sensitivity view. The second piece in this portfolio that deliberately bridges Information Technology to marketing: a problem a marketing operations analyst would normally solve in Excel, rebuilt as a self-explaining tool. Demonstrates:

- Marketing economics literacy (channel CPL, ramp time, minimum viable spend, diminishing returns)
- Constrained optimisation — two-pass cap-then-floor budget allocation across competing channels
- Diminishing-returns lead projection (`leads = √(spend / min_spend) × baseline`)
- Auditable output — every channel allocation comes with a generated rationale
- Frontend craft — single self-contained HTML file, no framework, no build step, runs offline
- Honest treatment of limitations (CPL benchmarks, no interaction effects, B2B-calibrated)

Run with zero commands: open `index.html` in any browser. No install, no internet, no API key.

---

## How these were produced

The HTML one-pager was hand-coded and rendered to PDF for print-ready output. The PowerPoint deck was generated with `pptxgenjs` to give consistent, brand-aligned slides. The tender scanner is a small Python package with unit tests. The marketing mix optimiser is a single hand-coded HTML/JavaScript file with no external dependencies. All four projects ship with editable source so iterations are quick.

---

## Notes

These pieces are portfolio work and reference fictional entities. They are not affiliated with any real company. Industry vocabulary, service descriptions, and document structures are based on publicly available material from the Australian offshore services sector.
