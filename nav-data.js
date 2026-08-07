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
    name: "Who's On Call",
    icon: "\uD83D\uDCDF",
    status: "active",
    topics: [
      { name: "Today's Schedule", url: "whos-on-call.html", tag: "Live" }
    ]
  },
  {
    name: "Didactics",
    icon: "\uD83D\uDCDA",
    status: "active",
    topics: [
      { name: "Today's Lecture", url: "chalk-talk.html", tag: "" }
    ]
  },
  {
    name: "On Call Essentials",
    icon: "\u26A1",
    status: "active",
    topics: [
      { name: "Status Epilepticus", url: "protocols/status-epilepticus.html", tag: "STAT" },
      { name: "Code stroke", url: "protocols/acute-ischemic-stroke.html", tag: "STAT" },
      { name: "Elevated ICP / Herniation", url: "protocols/elevated-icp.html", tag: "STAT" },
      { name: "Status Migrainosus", url: "protocols/status-migrainosus.html", tag: "Urgent" }
    ]
  },
  {
    name: "Tips & Tricks",
    icon: "\uD83D\uDCA1",
    status: "active",
    topics: [
      { name: "Jewish Hospital", url: "tips-and-tricks.html#jewish-hospital", tag: "" },
      { name: "Patient Lists", url: "tips-and-tricks.html#patient-lists", tag: "" },
      { name: "Cerner Documentation", url: "tips-and-tricks.html#cerner-documentation", tag: "" },
      { name: "Orders", url: "tips-and-tricks.html#orders", tag: "" },
      { name: "Imaging & Outside Records", url: "tips-and-tricks.html#imaging-records", tag: "" },
      { name: "Transfers", url: "tips-and-tricks.html#transfers", tag: "" },
      { name: "Epic Outpatient Workflow", url: "tips-and-tricks.html#epic-outpatient", tag: "" },
      { name: "IT Access & Apps", url: "tips-and-tricks.html#it-access", tag: "" },
      { name: "ED Systems", url: "tips-and-tricks.html#ed-systems", tag: "" }
    ]
  },
  {
    name: "EMG Workbook",
    icon: "\uD83E\uDDE0",
    status: "active",
    topics: [
      { name: "NCS Fundamentals", url: "emg-workbook.html#ncs-fundamentals", tag: "" },
      { name: "EMG Fundamentals", url: "emg-workbook.html#emg-fundamentals", tag: "" },
      { name: "Podcast", url: "emg-workbook.html#podcast", tag: "" },
      { name: "Practical Cases", url: "emg-workbook.html#practical-cases", tag: "" },
      { name: "Qbank", url: "emg-workbook.html#qbank", tag: "" }
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
