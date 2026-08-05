// ============================================================
// NAV DATA — the one file that defines the whole handbook's structure.
// To add a new topic: add an entry to a section's `topics` array.
// To add a new section: copy the shape below. `status: "planned"`
// sections show up grayed out with a topic count of 0 until you
// add real topics and flip status to "active".
// Paths are always relative to the SITE ROOT (no leading slash),
// e.g. "protocols/status-epilepticus.html" — sidebar.js rewrites
// them correctly no matter how deep the current page is.
// ============================================================

window.NAV_SECTIONS = [
  {
    name: "Neuro On-Call",
    icon: "\u26A1",
    status: "active",
    topics: [
      { name: "Status Epilepticus", url: "protocols/status-epilepticus.html", tag: "STAT" },
      { name: "Acute Ischemic Stroke", url: "protocols/acute-ischemic-stroke.html", tag: "STAT" },
      { name: "Elevated ICP / Herniation", url: "protocols/elevated-icp.html", tag: "STAT" },
      { name: "Status Migrainosus", url: "protocols/status-migrainosus.html", tag: "Urgent" }
    ]
  },
  { name: "Epilepsy", icon: "\uD83E\uDDE0", status: "planned", topics: [] },
  { name: "Stroke", icon: "\uD83E\uDE78", status: "planned", topics: [] },
  { name: "Neuromuscular", icon: "\uD83D\uDCAA", status: "planned", topics: [] },
  { name: "Headache", icon: "\uD83E\uDD15", status: "planned", topics: [] },
  { name: "Neurocritical Care", icon: "\uD83C\uDFE5", status: "planned", topics: [] },
  { name: "Neuroimmunology", icon: "\uD83E\uDDEC", status: "planned", topics: [] },
  { name: "Neuro Exam", icon: "\uD83D\uDD0D", status: "planned", topics: [] }
];
