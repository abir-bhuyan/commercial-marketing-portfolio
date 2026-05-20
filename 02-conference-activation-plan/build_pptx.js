// Conference Activation Plan — Meridian Offshore at AOG 2026
// Fictional offshore services company, 5-slide marketing plan

const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.author = "Mohammed Habibur Rahman Bhuyan Abir";
pres.title = "AOG 2026 — Exhibition Activation Plan";

// === BRAND PALETTE: Deep Ocean ===
const NAVY    = "0E2A47";     // primary
const TEAL    = "2A8E9A";     // secondary
const CORAL   = "FF6B4A";     // accent
const SAND    = "F3EFE6";     // soft background
const INK     = "1A1A1A";     // body
const MUTED   = "6B7785";     // muted text
const LINE    = "DDE3EA";     // dividers
const WHITE   = "FFFFFF";

// ---------- HELPERS ----------
function addFooter(slide, page, total) {
  // thin divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.30, w: 9.2, h: 0.015,
    fill: { color: LINE }, line: { color: LINE, width: 0 }
  });
  // left: brand mark
  slide.addText("MERIDIAN OFFSHORE", {
    x: 0.4, y: 5.36, w: 4, h: 0.24,
    fontSize: 8, fontFace: "Calibri", color: NAVY, bold: true, charSpacing: 2,
    margin: 0
  });
  // center: project label
  slide.addText("AOG 2026 · Exhibition Activation Plan", {
    x: 3.4, y: 5.36, w: 3.2, h: 0.24,
    fontSize: 8, fontFace: "Calibri", color: MUTED, align: "center", margin: 0
  });
  // right: page number
  slide.addText(`${page} / ${total}`, {
    x: 6.8, y: 5.36, w: 2.8, h: 0.24,
    fontSize: 8, fontFace: "Calibri", color: MUTED, align: "right", margin: 0
  });
}

function eyebrow(slide, x, y, text, color = CORAL) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 6, h: 0.22,
    fontSize: 9, fontFace: "Calibri", bold: true,
    color, charSpacing: 4, margin: 0
  });
}

function slideTitle(slide, x, y, text) {
  slide.addText(text, {
    x, y, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Calibri", bold: true,
    color: NAVY, margin: 0
  });
}

// =====================================================
// SLIDE 1 — COVER
// =====================================================
const s1 = pres.addSlide();
s1.background = { color: NAVY };

// Coral accent block on the left
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.18, h: 5.625,
  fill: { color: CORAL }, line: { color: CORAL, width: 0 }
});

// Eyebrow
s1.addText("MARKETING & COMMERCIAL PLAN", {
  x: 0.7, y: 1.5, w: 8, h: 0.3,
  fontSize: 11, fontFace: "Calibri", bold: true,
  color: CORAL, charSpacing: 6, margin: 0
});

// Main title
s1.addText([
  { text: "AOG 2026", options: { breakLine: true, fontSize: 54, bold: true } },
  { text: "Exhibition Activation Plan", options: { fontSize: 28, bold: false } }
], {
  x: 0.7, y: 1.95, w: 9, h: 1.9,
  fontFace: "Calibri", color: WHITE, margin: 0
});

// Subtitle
s1.addText("Australasian Oil & Gas Exhibition · Perth Convention & Exhibition Centre · 11–13 March 2026", {
  x: 0.7, y: 3.8, w: 8.6, h: 0.35,
  fontSize: 13, fontFace: "Calibri", color: "B5C2D1", italic: true, margin: 0
});

// Bottom strip — prepared by / company
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0.7, y: 4.55, w: 5, h: 0.02,
  fill: { color: CORAL }, line: { color: CORAL, width: 0 }
});

s1.addText("Prepared for", {
  x: 0.7, y: 4.6, w: 4, h: 0.22,
  fontSize: 8.5, fontFace: "Calibri", bold: true,
  color: "B5C2D1", charSpacing: 3, margin: 0
});
s1.addText("Meridian Offshore — Commercial Team", {
  x: 0.7, y: 4.83, w: 4.5, h: 0.3,
  fontSize: 14, fontFace: "Calibri", color: WHITE, bold: true, margin: 0
});

// Right side: meta block
s1.addText("Document Reference", {
  x: 6.2, y: 4.6, w: 3.3, h: 0.22,
  fontSize: 8.5, fontFace: "Calibri", bold: true,
  color: "B5C2D1", charSpacing: 3, margin: 0
});
s1.addText("MO-MKT-2026-001 · Draft for review", {
  x: 6.2, y: 4.83, w: 3.3, h: 0.3,
  fontSize: 11, fontFace: "Calibri", color: WHITE, margin: 0
});

// =====================================================
// SLIDE 2 — OBJECTIVES & TARGET AUDIENCE
// =====================================================
const s2 = pres.addSlide();
s2.background = { color: WHITE };

eyebrow(s2, 0.5, 0.45, "Slide 02 · Why we are exhibiting");
slideTitle(s2, 0.5, 0.7, "Objectives & target audience");

// Left column — Objectives
s2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.55, w: 0.04, h: 3.4,
  fill: { color: CORAL }, line: { color: CORAL, width: 0 }
});
s2.addText("OBJECTIVES", {
  x: 0.7, y: 1.5, w: 4, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

// 3 numbered objective cards stacked
const objectives = [
  { n: "01", t: "Generate qualified leads",     d: "Secure 25 qualified conversations with operators in the WA basin (NWS, Browse, Carnarvon)." },
  { n: "02", t: "Re-engage existing clients",   d: "Host 3 informal client breakfasts during the event to support upcoming framework tender cycle." },
  { n: "03", t: "Position the IRM service line", d: "Launch the refreshed IRM capability statement; achieve 200+ collateral hand-outs over 3 days." }
];

objectives.forEach((o, i) => {
  const y = 1.95 + i * 1.05;
  // small number block
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y, w: 0.55, h: 0.85,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 }
  });
  s2.addText(o.n, {
    x: 0.7, y, w: 0.55, h: 0.85,
    fontSize: 18, fontFace: "Calibri", bold: true,
    color: CORAL, align: "center", valign: "middle", margin: 0
  });
  // text body
  s2.addText(o.t, {
    x: 1.4, y: y + 0.02, w: 3.5, h: 0.32,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: NAVY, margin: 0
  });
  s2.addText(o.d, {
    x: 1.4, y: y + 0.38, w: 3.5, h: 0.5,
    fontSize: 9.5, fontFace: "Calibri", color: INK, margin: 0
  });
});

// Right column — Target audience
s2.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.55, w: 4.2, h: 3.4,
  fill: { color: SAND }, line: { color: LINE, width: 0.5 }
});

s2.addText("PRIMARY AUDIENCE", {
  x: 5.5, y: 1.7, w: 4, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const audience = [
  { t: "Operator integrity managers", d: "WA-based oil & gas operators with offshore assets due for IRM cycles in 2026–27." },
  { t: "Subsea engineering managers", d: "Decision-makers for ROV inspection and pipeline integrity scopes." },
  { t: "Procurement & supply chain",   d: "Framework agreement owners and sourcing leads for offshore services." },
  { t: "Tier-1 prime contractors",     d: "Potential JV and subcontract partners on large IRM campaigns." }
];

audience.forEach((a, i) => {
  const y = 2.1 + i * 0.65;
  // dot
  s2.addShape(pres.shapes.OVAL, {
    x: 5.55, y: y + 0.05, w: 0.12, h: 0.12,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 }
  });
  s2.addText(a.t, {
    x: 5.78, y: y - 0.02, w: 3.6, h: 0.28,
    fontSize: 11, fontFace: "Calibri", bold: true,
    color: NAVY, margin: 0
  });
  s2.addText(a.d, {
    x: 5.78, y: y + 0.22, w: 3.6, h: 0.4,
    fontSize: 8.5, fontFace: "Calibri", color: MUTED, margin: 0
  });
});

addFooter(s2, 2, 5);

// =====================================================
// SLIDE 3 — BOOTH CONCEPT & KEY MESSAGES
// =====================================================
const s3 = pres.addSlide();
s3.background = { color: WHITE };

eyebrow(s3, 0.5, 0.45, "Slide 03 · What visitors will see");
slideTitle(s3, 0.5, 0.7, "Booth concept & key messages");

// Left: booth visual mockup (made of shapes)
// Frame
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.55, w: 4.2, h: 3.4,
  fill: { color: SAND }, line: { color: LINE, width: 0.5 }
});

// Booth back wall (navy)
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 2.0, w: 3.6, h: 1.6,
  fill: { color: NAVY }, line: { color: NAVY, width: 0 }
});

// Brand stripe on back wall
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 2.0, w: 0.12, h: 1.6,
  fill: { color: CORAL }, line: { color: CORAL, width: 0 }
});

// Brand name on back wall
s3.addText("MERIDIAN", {
  x: 1.0, y: 2.45, w: 3.3, h: 0.4,
  fontSize: 22, fontFace: "Calibri", bold: true,
  color: WHITE, charSpacing: 4, margin: 0
});
s3.addText("OFFSHORE", {
  x: 1.0, y: 2.78, w: 3.3, h: 0.3,
  fontSize: 11, fontFace: "Calibri",
  color: "B5C2D1", charSpacing: 8, margin: 0
});

// Tagline strip
s3.addText("INSPECTION · REPAIR · MAINTENANCE", {
  x: 1.0, y: 3.15, w: 3.3, h: 0.25,
  fontSize: 8, fontFace: "Calibri", bold: true,
  color: CORAL, charSpacing: 3, margin: 0
});

// Counter / table strip in front
s3.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 3.75, w: 2.2, h: 0.45,
  fill: { color: TEAL }, line: { color: TEAL, width: 0 }
});
s3.addText("MEET THE TEAM", {
  x: 1.5, y: 3.75, w: 2.2, h: 0.45,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: WHITE, align: "center", valign: "middle",
  charSpacing: 3, margin: 0
});

// Floor band
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.25, w: 3.6, h: 0.35,
  fill: { color: "E0DCD0" }, line: { color: "E0DCD0", width: 0 }
});

// Caption under booth
s3.addText("6m × 3m island booth · Hall 4, Stand 4–B22 (target location)", {
  x: 0.5, y: 4.7, w: 4.2, h: 0.22,
  fontSize: 8.5, fontFace: "Calibri", italic: true,
  color: MUTED, align: "center", margin: 0
});

// Right: 3 key messages
s3.addText("KEY MESSAGES", {
  x: 5.0, y: 1.55, w: 4.5, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const messages = [
  { t: "Local Perth crew, global standards", d: "Mobilise from Perth within 48 hours of call-off — backed by ISO-aligned QHSE systems." },
  { t: "Data-led integrity outcomes",         d: "Every inspection campaign paired with an integrity dashboard, not just a report PDF." },
  { t: "Vessel and spread agnostic",           d: "Right-size the asset to the scope; no pressure to use in-house vessels you don't need." }
];

messages.forEach((m, i) => {
  const y = 1.95 + i * 0.95;
  // teal vertical bar
  s3.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y, w: 0.05, h: 0.75,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 }
  });
  // headline
  s3.addText(`"${m.t}"`, {
    x: 5.2, y: y - 0.04, w: 4.3, h: 0.32,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: NAVY, italic: true, margin: 0
  });
  // body
  s3.addText(m.d, {
    x: 5.2, y: y + 0.3, w: 4.3, h: 0.5,
    fontSize: 9.5, fontFace: "Calibri", color: INK, margin: 0
  });
});

addFooter(s3, 3, 5);

// =====================================================
// SLIDE 4 — COLLATERAL, LEAD CAPTURE & BUDGET
// =====================================================
const s4 = pres.addSlide();
s4.background = { color: WHITE };

eyebrow(s4, 0.5, 0.45, "Slide 04 · What we bring & what it costs");
slideTitle(s4, 0.5, 0.7, "Collateral, lead capture & indicative budget");

// Left: Collateral checklist
s4.addText("COLLATERAL CHECKLIST", {
  x: 0.5, y: 1.5, w: 4, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const collateral = [
  "IRM capability statement (A4, printed × 250)",
  "Service-line one-pagers (4 × A4, printed × 100 each)",
  "Animated services loop video (90 sec, screen)",
  "Branded USB drives with case studies (× 75)",
  "Pull-up banner (×2) + tablecloth + lanyard",
  "Business cards for 4 attending staff",
  "QR-linked digital brochure (mobile-optimised)"
];

collateral.forEach((c, i) => {
  const y = 1.92 + i * 0.32;
  // checkbox square
  s4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y + 0.05, w: 0.15, h: 0.15,
    fill: { color: WHITE }, line: { color: TEAL, width: 1.25 }
  });
  s4.addText(c, {
    x: 0.75, y, w: 4.0, h: 0.28,
    fontSize: 10, fontFace: "Calibri", color: INK, margin: 0
  });
});

// Right top: Lead capture
s4.addShape(pres.shapes.RECTANGLE, {
  x: 5.1, y: 1.45, w: 4.4, h: 1.4,
  fill: { color: SAND }, line: { color: LINE, width: 0.5 }
});
s4.addText("LEAD CAPTURE PROCESS", {
  x: 5.3, y: 1.55, w: 4, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const leadSteps = [
  { n: "1", t: "Scan visitor badge → auto-load to CRM" },
  { n: "2", t: "Tag interest (IRM / pipeline / data)" },
  { n: "3", t: "24-hour follow-up email + collateral" },
  { n: "4", t: "Weekly nurture cadence for 6 weeks" }
];

leadSteps.forEach((s, i) => {
  const y = 1.92 + i * 0.22;
  s4.addShape(pres.shapes.OVAL, {
    x: 5.3, y, w: 0.22, h: 0.22,
    fill: { color: CORAL }, line: { color: CORAL, width: 0 }
  });
  s4.addText(s.n, {
    x: 5.3, y, w: 0.22, h: 0.22,
    fontSize: 9, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", valign: "middle", margin: 0
  });
  s4.addText(s.t, {
    x: 5.6, y: y - 0.02, w: 3.8, h: 0.26,
    fontSize: 9.5, fontFace: "Calibri", color: INK, margin: 0
  });
});

// Right bottom: Budget table
s4.addText("INDICATIVE BUDGET (AUD, ex GST)", {
  x: 5.1, y: 3.0, w: 4.5, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const budgetRows = [
  ["Booth space & shell scheme",   "$18,500"],
  ["Booth design & build",          "$22,000"],
  ["Print & digital collateral",    "$6,800"],
  ["Staff T&E (4 × 3 days)",        "$5,200"],
  ["Client breakfast hosting (×3)", "$4,500"],
  ["Contingency (10%)",             "$5,700"],
];

const budgetData = [
  [
    { text: "Line item",  options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 9, fontFace: "Calibri" } },
    { text: "Cost",        options: { bold: true, color: WHITE, fill: { color: NAVY }, fontSize: 9, fontFace: "Calibri", align: "right" } }
  ],
  ...budgetRows.map(r => [
    { text: r[0], options: { fontSize: 9, fontFace: "Calibri", color: INK } },
    { text: r[1], options: { fontSize: 9, fontFace: "Calibri", color: INK, align: "right" } }
  ]),
  [
    { text: "Total",          options: { bold: true, color: NAVY, fill: { color: SAND }, fontSize: 9.5, fontFace: "Calibri" } },
    { text: "$62\u202F700 AUD", options: { bold: true, color: CORAL, fill: { color: SAND }, fontSize: 10, fontFace: "Calibri", align: "right" } }
  ]
];

s4.addTable(budgetData, {
  x: 5.1, y: 3.30, w: 4.4, colW: [3.1, 1.3],
  border: { pt: 0.5, color: LINE },
  rowH: 0.19
});

addFooter(s4, 4, 5);

// =====================================================
// SLIDE 5 — TIMELINE & SUCCESS METRICS
// =====================================================
const s5 = pres.addSlide();
s5.background = { color: WHITE };

eyebrow(s5, 0.5, 0.45, "Slide 05 · How we will run it & measure it");
slideTitle(s5, 0.5, 0.7, "Timeline & success metrics");

// Timeline section
s5.addText("PRE-EVENT TIMELINE", {
  x: 0.5, y: 1.5, w: 6, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

// Timeline track
s5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 2.15, w: 9, h: 0.04,
  fill: { color: LINE }, line: { color: LINE, width: 0 }
});

const milestones = [
  { x: 0.5,  m: "T-12 wk", t: "Brief approved" },
  { x: 2.3,  m: "T-10 wk", t: "Booth design locked" },
  { x: 4.1,  m: "T-6 wk",  t: "Collateral to print" },
  { x: 5.9,  m: "T-3 wk",  t: "Client invites sent" },
  { x: 7.7,  m: "T-1 wk",  t: "Booth dressed & rehearsed" },
];

milestones.forEach((ms) => {
  // milestone dot
  s5.addShape(pres.shapes.OVAL, {
    x: ms.x, y: 2.07, w: 0.2, h: 0.2,
    fill: { color: CORAL }, line: { color: WHITE, width: 1.5 }
  });
  // milestone label
  s5.addText(ms.m, {
    x: ms.x - 0.4, y: 1.75, w: 1.6, h: 0.25,
    fontSize: 9, fontFace: "Calibri", bold: true,
    color: NAVY, align: "center", margin: 0
  });
  // milestone task
  s5.addText(ms.t, {
    x: ms.x - 0.4, y: 2.35, w: 1.6, h: 0.5,
    fontSize: 8.5, fontFace: "Calibri", color: MUTED, align: "center", margin: 0
  });
});

// Success metrics — 4 KPI cards
s5.addText("SUCCESS METRICS", {
  x: 0.5, y: 3.4, w: 6, h: 0.3,
  fontSize: 10, fontFace: "Calibri", bold: true,
  color: NAVY, charSpacing: 3, margin: 0
});

const kpis = [
  { n: "25",   l: "Qualified conversations",  s: "Operator integrity teams" },
  { n: "200+", l: "Collateral hand-outs",     s: "Printed + digital" },
  { n: "3",    l: "Client breakfasts hosted", s: "Existing framework clients" },
  { n: "5",    l: "Tender invitations",       s: "Target within 90 days post-event" }
];

kpis.forEach((k, i) => {
  const x = 0.5 + i * 2.25;
  // card
  s5.addShape(pres.shapes.RECTANGLE, {
    x, y: 3.8, w: 2.05, h: 1.35,
    fill: { color: WHITE }, line: { color: LINE, width: 0.75 }
  });
  // accent strip
  s5.addShape(pres.shapes.RECTANGLE, {
    x, y: 3.8, w: 2.05, h: 0.06,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 }
  });
  // big number
  s5.addText(k.n, {
    x, y: 3.92, w: 2.05, h: 0.55,
    fontSize: 26, fontFace: "Calibri", bold: true,
    color: NAVY, align: "center", margin: 0
  });
  // label
  s5.addText(k.l, {
    x: x + 0.05, y: 4.50, w: 1.95, h: 0.28,
    fontSize: 9.5, fontFace: "Calibri", bold: true,
    color: NAVY, align: "center", margin: 0
  });
  // sub
  s5.addText(k.s, {
    x: x + 0.05, y: 4.77, w: 1.95, h: 0.28,
    fontSize: 8, fontFace: "Calibri",
    color: MUTED, align: "center", margin: 0, italic: true
  });
});

addFooter(s5, 5, 5);

// ---------- SAVE ----------
pres.writeFile({
  fileName: "/home/claude/portfolio/commercial-marketing-portfolio/02-conference-activation-plan/Meridian_AOG_ActivationPlan.pptx"
}).then(() => console.log("PPTX written"));
