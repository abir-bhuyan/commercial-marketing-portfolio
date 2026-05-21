# 05 — Design Portfolio Landing Page

A single-file HTML landing page that serves as the public viewing surface for the four projects in this repository. Built to be hosted free on GitHub Pages.

## What it is — and what it isn't

This is **not listed as one of the four marketing projects** on my CV. The four projects are the work in folders 01–04. This page is just the front door — a clean, mobile-responsive web page where a recruiter can see thumbnails of each project and click through to the underlying files.

Think of it as the equivalent of a Canva portfolio link — it gives the recruiter one URL to share, view, and bookmark, with visible thumbnails of each piece. It happens to be self-hosted HTML instead of Canva because that's more honest about what's behind it (real files in a real repo) and gives me full control over the layout.

## Why a landing page exists at all

A landing page makes the portfolio scannable. Recruiters and reviewers rarely click into a GitHub folder of raw files — a single URL that loads in two seconds and shows the work as designed thumbnails is a better entry point.

The page uses the same editorial visual system as the rest of the portfolio (Deep Navy / Signal Coral / Paper Cream / Georgia + Helvetica Neue) so it feels like one connected body of work.

## How to view it

Two options:

**Live on GitHub Pages** (after enabling Pages in repo Settings):
`https://abir-bhuyan.github.io/commercial-marketing-portfolio/05-design-portfolio/`

**Locally** — just open `index.html` in any browser. No build step, no dependencies.

## Enabling GitHub Pages

To turn this into a working URL after pushing the repo:

1. Open the repository on github.com
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` · folder: `/ (root)`
5. Save
6. Wait ~60 seconds, then visit `https://abir-bhuyan.github.io/commercial-marketing-portfolio/05-design-portfolio/`

The link in the CV points to this URL.

## Technical notes

- Single HTML file. No framework, no build, no dependencies.
- All four project thumbnails are CSS-drawn (no image assets to maintain).
- Mobile-responsive — single column under 760px viewport.
- Fonts use system fallbacks (Georgia + Helvetica Neue) so it loads without external requests.
- No tracking, no analytics, no cookies.

## Author

**Mohammed Habibur Rahman Bhuyan Abir** ("Abir")
Bachelor of Information Technology (Business Information Systems) — Murdoch University, Perth · Graduating November 2026
[linkedin.com/in/abir-bhuyan](https://www.linkedin.com/in/abir-bhuyan) · habiburrahmanabeer@gmail.com
