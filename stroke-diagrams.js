// Redrawn stroke localization summary diagram, using the site's own
// color tokens (not a reproduction of any sourced infographic).

document.addEventListener("DOMContentLoaded", function () {
  var mount = document.getElementById("svg-localization");
  if (!mount) return;

  mount.innerHTML =
    '<svg width="100%" viewBox="0 0 680 400" role="img">' +
    '<title>Stroke localization quick reference</title>' +
    '<desc>Territory summaries for MCA, ACA, PCA, and lacunar strokes, plus the brainstem crossed-signs master rule.</desc>' +
    '<rect x="30" y="20" width="300" height="80" rx="8" fill="var(--stat-red-dim)" stroke="var(--stat-red)" stroke-width="0.5"/>' +
    '<text x="180" y="45" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="var(--stat-red)">MCA territory</text>' +
    '<text x="180" y="70" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Face+arm &gt; leg weakness</text>' +
    '<text x="180" y="88" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Aphasia (dominant) / neglect (non-dominant)</text>' +
    '<rect x="350" y="20" width="300" height="80" rx="8" fill="var(--pager-green-dim)" stroke="var(--pager-green)" stroke-width="0.5"/>' +
    '<text x="500" y="45" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="var(--pager-green)">ACA territory</text>' +
    '<text x="500" y="70" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Leg &gt; arm weakness</text>' +
    '<text x="500" y="88" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Urinary incontinence, abulia</text>' +
    '<rect x="30" y="120" width="300" height="80" rx="8" fill="var(--pearl-amber-dim)" stroke="var(--pearl-amber)" stroke-width="0.5"/>' +
    '<text x="180" y="145" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="var(--pearl-amber)">PCA territory</text>' +
    '<text x="180" y="170" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Homonymous hemianopia</text>' +
    '<text x="180" y="188" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Macular sparing, alexia w/o agraphia</text>' +
    '<rect x="350" y="120" width="300" height="80" rx="8" fill="var(--panel-raised)" stroke="var(--line)" stroke-width="0.5"/>' +
    '<text x="500" y="145" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="var(--muted)">Lacunar / subcortical</text>' +
    '<text x="500" y="170" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">Pure motor or pure sensory</text>' +
    '<text x="500" y="188" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--paper)">No cortical signs (no aphasia/neglect/vision loss)</text>' +
    '<rect x="30" y="220" width="620" height="110" rx="8" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<text x="50" y="245" font-family="IBM Plex Mono" font-size="14" fill="var(--paper)">Brainstem master rule</text>' +
    '<text x="50" y="270" font-family="IBM Plex Sans" font-size="12.5" fill="var(--paper)">Crossed signs (ipsilateral cranial nerve + contralateral body) &#8594; think brainstem</text>' +
    '<text x="50" y="292" font-family="IBM Plex Sans" font-size="12.5" fill="var(--paper)">Wallenberg (PICA): dysphagia, hoarseness, ipsilateral ataxia/Horner, crossed pain/temp loss</text>' +
    '<text x="50" y="312" font-family="IBM Plex Sans" font-size="11.5" fill="var(--faint)">Not every brainstem stroke shows a classic crossed pattern</text>' +
    '<text x="340" y="355" text-anchor="middle" font-family="IBM Plex Sans" font-size="12" fill="var(--muted)">Localize fast, confirm with urgent neuroimaging</text>' +
    "</svg>";
});
