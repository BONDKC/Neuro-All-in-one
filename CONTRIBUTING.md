# Adding to the handbook

No build tools, no framework — this is plain HTML/CSS/JS. To add something, you're editing/copying files directly.

## Add a new topic to an existing section

1. Copy an existing page in `/protocols/` (e.g. `status-epilepticus.html`) as a starting point.
2. Rename it, e.g. `protocols/myasthenic-crisis.html`.
3. Edit the title, headings, and `.block` sections with the new content. Keep the `<header>`, `<div class="app-shell">`, and closing `<script>` tags exactly as they are — those make the sidebar and search work.
4. Open `nav-data.js` and add a line to the right section's `topics` array:
   ```js
   { name: "Myasthenic Crisis", url: "protocols/myasthenic-crisis.html", tag: "STAT" }
   ```
5. Done — it now shows in the sidebar and is searchable from the pager bar, on every page, automatically.

## Add a whole new section

1. In `nav-data.js`, find the section (e.g. `Epilepsy`) and change `status: "planned"` to `status: "active"`, then add topics to its `topics: []` array the same way as above.
2. Create the topic pages the same way as "Add a new topic" above — just point their `url` at a new folder if you want, e.g. `epilepsy/first-unprovoked-seizure.html`. Copy the folder-depth of `../` in the header links and `SITE_ROOT` to match how deep the file is (one level deep like `/protocols/` uses `../`, root-level `index.html` uses `""`).
3. On `index.html`, replace that section's placeholder card (the `<div class="section-card is-planned">`) with a real link, and update the topic count text.

## Embed an existing PDF pathway

Drop the PDF file anywhere in the project (e.g. a `/files/` folder), then paste this inside a `.block` on the relevant topic page:

```html
<div class="file-card">
  <span class="file-icon">📄</span>
  <div class="file-body">
    <p class="file-title">Refractory Status Epilepticus Pathway</p>
    <p class="file-type">PDF document</p>
  </div>
  <div class="file-actions">
    <a href="../files/refractory-status-pathway.pdf" target="_blank">View</a>
    <a href="../files/refractory-status-pathway.pdf" download>Download</a>
  </div>
</div>
```

## Embed a scanned image (e.g. a whiteboard photo of an algorithm)

```html
<div class="img-card">
  <p class="file-title">NCH Status Epilepticus Pathway</p>
  <img src="../files/status-epilepticus-diagram.png" alt="Status epilepticus pathway diagram">
</div>
```

Click-to-enlarge (lightbox) works automatically — no extra code needed.

## Style reference

- `.pearl` — amber callout box for a teaching point
- `.callattending` — red callout box for "call your attending now" triggers
- `.dose` or `<code>` — inline styled text for drug doses/values
- `.pill` / `.pill.stat` — small tags under the page title (e.g. "Time-critical")

## Publishing changes

If the site is on GitHub Pages: commit and push your changes to the `main` branch — it goes live automatically within a minute or two. If it's on Netlify/Vercel connected to a GitHub repo, same thing. If you're using Netlify Drop (no GitHub), just re-drag the whole updated folder onto app.netlify.com/drop to redeploy.
