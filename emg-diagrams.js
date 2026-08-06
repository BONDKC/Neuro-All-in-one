// Redrawn EMG/NCS diagrams — plain schematics, not reproductions of any
// textbook figure. Injected as raw SVG strings so they use the site's
// real CSS variables (--paper, --muted, --line, --pager-green, etc.)
// rather than a chat-preview theme.

document.addEventListener("DOMContentLoaded", function () {

  var triphasic = '<svg width="100%" viewBox="0 0 680 440" role="img">' +
    '<title>Triphasic near-field potential, unipolar vs bipolar recording</title>' +
    '<desc>Two panels showing an action potential traveling under a fixed recording electrode: unipolar recording produces a small positive deflection then a large negative deflection then a return; bipolar recording produces a more symmetric triphasic waveform.</desc>' +
    '<defs><marker id="arrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
    '<text x="20" y="26" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Unipolar recording</text>' +
    '<line x1="200" y1="50" x2="200" y2="65" stroke="var(--paper)" stroke-width="1.5"/>' +
    '<rect x="180" y="40" width="40" height="10" fill="var(--paper)" opacity="0.6"/>' +
    '<text x="200" y="37" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--faint)">active electrode</text>' +
    '<line x1="40" y1="70" x2="360" y2="70" stroke="var(--paper)" stroke-width="1" opacity="0.4"/>' +
    '<circle cx="80" cy="70" r="6" fill="var(--stat-red)" opacity="0.9"/>' +
    '<circle cx="200" cy="70" r="6" fill="var(--stat-red)" opacity="0.5"/>' +
    '<circle cx="320" cy="70" r="6" fill="var(--stat-red)" opacity="0.25"/>' +
    '<line x1="70" y1="70" x2="90" y2="70" stroke="var(--stat-red)" stroke-width="1" marker-end="url(#arrow1)"/>' +
    '<rect x="400" y="15" width="240" height="150" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="415" y1="90" x2="625" y2="90" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M415 90 L455 90 C 463 90, 467 73, 475 73 C 485 73, 485 145, 505 145 C 520 145, 525 85, 540 85 C 550 85, 555 90, 625 90" fill="none" stroke="var(--pager-green)" stroke-width="2"/>' +
    '<text x="580" y="30" font-family="IBM Plex Mono" font-size="12" text-anchor="end" fill="var(--faint)">&#8722;</text>' +
    '<text x="580" y="55" font-family="IBM Plex Mono" font-size="12" text-anchor="end" fill="var(--faint)">+</text>' +
    '<text x="520" y="182" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">small (+), large (&#8722;), return</text>' +
    '<text x="20" y="248" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Bipolar recording</text>' +
    '<line x1="200" y1="272" x2="200" y2="287" stroke="var(--paper)" stroke-width="1.5"/>' +
    '<rect x="180" y="262" width="40" height="10" fill="var(--paper)" opacity="0.6"/>' +
    '<text x="200" y="259" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--faint)">active electrode</text>' +
    '<line x1="40" y1="292" x2="360" y2="292" stroke="var(--paper)" stroke-width="1" opacity="0.4"/>' +
    '<circle cx="200" cy="292" r="6" fill="var(--stat-red)" opacity="0.9"/>' +
    '<line x1="180" y1="292" x2="160" y2="292" stroke="var(--stat-red)" stroke-width="1" marker-end="url(#arrow1)"/>' +
    '<line x1="220" y1="292" x2="240" y2="292" stroke="var(--stat-red)" stroke-width="1" marker-end="url(#arrow1)"/>' +
    '<text x="200" y="312" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">propagates both directions</text>' +
    '<rect x="400" y="237" width="240" height="150" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="415" y1="312" x2="625" y2="312" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M415 312 L455 312 C 465 312, 470 262, 485 262 C 500 262, 505 312, 520 312 C 530 312, 533 347, 550 347 C 565 347, 570 312, 625 312" fill="none" stroke="var(--pager-green)" stroke-width="2"/>' +
    '<text x="520" y="402" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">large (&#8722;), smaller (+), more symmetric</text>' +
    "</svg>";

  var cmap = '<svg width="100%" viewBox="0 0 680 300" role="img">' +
    '<title>CMAP measurement landmarks</title>' +
    '<desc>A compound muscle action potential waveform with stimulus, distal latency, amplitude, and duration labeled.</desc>' +
    '<defs><marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
    '<rect x="40" y="20" width="600" height="200" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="60" y1="170" x2="620" y2="170" stroke="#1f4430" stroke-width="1"/>' +
    '<line x1="120" y1="140" x2="120" y2="200" stroke="var(--stat-red)" stroke-width="1.5"/>' +
    '<text x="120" y="215" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">stimulus</text>' +
    '<path d="M60 170 L120 170 L130 170 C 150 170, 165 50, 200 50 C 230 50, 245 185, 280 185 C 310 185, 325 170, 360 170 L620 170" fill="none" stroke="var(--pager-green)" stroke-width="2"/>' +
    '<line x1="120" y1="80" x2="130" y2="80" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<line x1="120" y1="230" x2="130" y2="230" stroke="var(--paper)" stroke-width="1"/>' +
    '<line x1="125" y1="80" x2="125" y2="230" stroke="var(--paper)" stroke-width="1" marker-end="url(#arrow2)"/>' +
    '<text x="85" y="168" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">distal</text>' +
    '<text x="85" y="181" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">latency</text>' +
    '<line x1="200" y1="50" x2="240" y2="50" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<line x1="200" y1="170" x2="240" y2="170" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<line x1="230" y1="50" x2="230" y2="170" stroke="var(--paper)" stroke-width="1" marker-end="url(#arrow2)"/>' +
    '<text x="248" y="112" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">amplitude</text>' +
    '<line x1="130" y1="238" x2="360" y2="238" stroke="var(--paper)" stroke-width="1" marker-end="url(#arrow2)"/>' +
    '<text x="245" y="254" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">duration</text>' +
    "</svg>";

  var montage = '<svg width="100%" viewBox="0 0 680 300" role="img">' +
    '<title>Belly-tendon montage for a motor conduction study</title>' +
    '<desc>Forearm and hand outline showing the stimulator with cathode and anode on the forearm, active electrode G1 over the muscle belly, reference electrode G2 over the tendon, and a ground electrode.</desc>' +
    '<path d="M60 130 C 100 110, 200 108, 300 120 C 340 124, 370 118, 400 110 C 420 105, 440 108, 455 120 C 465 128, 470 140, 468 155 C 480 158, 495 162, 505 175 C 495 180, 480 178, 468 172 C 472 185, 485 190, 495 205 C 483 208, 470 202, 462 190 C 462 202, 468 212, 462 225 C 452 222, 448 210, 446 198 C 442 210, 440 222, 428 226 C 424 214, 428 200, 432 188 C 420 185, 415 165, 415 150 C 380 165, 330 168, 290 162 C 220 185, 130 185, 60 165 Z" fill="none" stroke="var(--paper)" stroke-width="1.2" opacity="0.6"/>' +
    '<rect x="120" y="140" width="70" height="26" rx="5" fill="var(--stat-red-dim)" stroke="var(--stat-red)" stroke-width="0.5"/>' +
    '<text x="155" y="157" font-family="IBM Plex Mono" font-size="12" text-anchor="middle" fill="var(--stat-red)">Stim.</text>' +
    '<line x1="150" y1="140" x2="175" y2="105" stroke="var(--paper)" stroke-width="1"/>' +
    '<line x1="170" y1="140" x2="205" y2="95" stroke="var(--paper)" stroke-width="1"/>' +
    '<text x="175" y="90" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">cathode (near G1)</text>' +
    '<text x="215" y="78" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">anode</text>' +
    '<rect x="390" y="140" width="55" height="26" rx="5" fill="var(--pager-green-dim)" stroke="var(--pager-green)" stroke-width="0.5"/>' +
    '<text x="417" y="157" font-family="IBM Plex Mono" font-size="12" text-anchor="middle" fill="var(--pager-green)">A / G1</text>' +
    '<text x="417" y="185" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">thenar belly</text>' +
    '<circle cx="450" cy="108" r="4" fill="var(--pager-green)"/>' +
    '<text x="450" y="95" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">G1</text>' +
    '<circle cx="480" cy="102" r="4" fill="var(--pearl-amber)"/>' +
    '<text x="490" y="88" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">G2 (tendon)</text>' +
    '<line x1="450" y1="108" x2="480" y2="102" stroke="var(--paper)" stroke-width="0.75" stroke-dasharray="2 2"/>' +
    '<circle cx="440" cy="195" r="4" fill="var(--muted)"/>' +
    '<text x="470" y="205" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">ground</text>' +
    '<text x="340" y="255" font-family="IBM Plex Sans" font-size="12" text-anchor="middle" fill="var(--muted)">stimulate proximally, record distally over the muscle</text>' +
    "</svg>";

  var snap = '<svg width="100%" viewBox="0 0 680 300" role="img">' +
    '<title>SNAP measurement landmarks</title>' +
    '<desc>A sensory nerve action potential waveform with onset latency, peak latency, amplitude, and duration labeled.</desc>' +
    '<defs><marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
    '<rect x="40" y="20" width="600" height="200" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="60" y1="130" x2="620" y2="130" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M60 130 L140 130 C 155 130, 160 100, 175 108 C 190 116, 195 130, 205 130 L215 130 C 235 130, 245 190, 270 190 C 295 190, 305 130, 330 130 L620 130" fill="none" stroke="var(--pager-green)" stroke-width="2"/>' +
    '<line x1="205" y1="90" x2="205" y2="205" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<text x="205" y="220" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">onset latency</text>' +
    '<line x1="270" y1="90" x2="270" y2="205" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<text x="270" y="235" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">peak latency</text>' +
    '<line x1="385" y1="130" x2="395" y2="130" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<line x1="385" y1="190" x2="395" y2="190" stroke="var(--paper)" stroke-width="1" stroke-dasharray="2 2"/>' +
    '<line x1="390" y1="130" x2="390" y2="190" stroke="var(--paper)" stroke-width="1" marker-end="url(#arrow3)"/>' +
    '<text x="410" y="164" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">amplitude</text>' +
    '<line x1="205" y1="245" x2="330" y2="245" stroke="var(--paper)" stroke-width="1" marker-end="url(#arrow3)"/>' +
    '<text x="267" y="262" font-family="IBM Plex Sans" font-size="11" text-anchor="middle" fill="var(--muted)">duration</text>' +
    "</svg>";

  var abnormal = '<svg width="100%" viewBox="0 0 680 340" role="img">' +
    '<title>Abnormal spontaneous activity morphology comparison, calibrated</title>' +
    '<desc>Four waveform panels with real timing and frequency values: fibrillation potentials at 1 to 5 milliseconds, positive sharp waves firing at 0.5 to 10 Hz, complex repetitive discharges at 5 to 100 Hz with abrupt termination, and myotonic discharges at 20 to 150 Hz with waxing and waning amplitude.</desc>' +
    '<rect x="20" y="30" width="300" height="110" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="35" y1="85" x2="305" y2="85" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M35 85 L140 85 L143 85 C 145 85, 146 68, 148 78 C 150 88, 151 92, 155 90 C 158 88, 160 85, 165 85 L305 85" fill="none" stroke="var(--pager-green)" stroke-width="1.5"/>' +
    '<line x1="140" y1="50" x2="165" y2="50" stroke="var(--paper)" stroke-width="1"/>' +
    '<text x="152" y="42" font-family="IBM Plex Sans" font-size="10" text-anchor="middle" fill="var(--muted)">1&#8211;5 ms</text>' +
    '<text x="20" y="20" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Fibrillation potential</text>' +
    '<text x="20" y="160" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">Brief spike, low amplitude, fires regularly</text>' +
    '<rect x="360" y="30" width="300" height="110" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="375" y1="85" x2="645" y2="85" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M375 85 L450 85 C 453 85, 454 55, 458 70 C 462 88, 470 120, 490 115 C 510 110, 530 95, 555 85 L645 85" fill="none" stroke="var(--pager-green)" stroke-width="1.5"/>' +
    '<text x="360" y="20" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Positive sharp wave</text>' +
    '<text x="360" y="160" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">Fires regularly, 0.5&#8211;10 Hz</text>' +
    '<rect x="20" y="200" width="300" height="110" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="35" y1="255" x2="305" y2="255" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M35 255 L60 255 L65 230 L70 255 L78 255 L83 225 L88 255 L96 255 L101 235 L106 255 L114 255 L119 228 L124 255 L135 255 L140 232 L145 255 L156 255 L161 226 L166 255 L177 255 L182 234 L187 255 L198 255 L203 230 L208 255 L219 255 L224 236 L229 255 L240 255 L245 230 L250 255 L262 255 L267 234 L272 255 L284 255 L289 228 L294 255 L305 255" fill="none" stroke="var(--pager-green)" stroke-width="1.5"/>' +
    '<text x="20" y="190" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Complex repetitive discharge</text>' +
    '<text x="20" y="330" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">5&#8211;100 Hz, ends abruptly</text>' +
    '<rect x="360" y="200" width="300" height="110" rx="6" fill="#050a0d" stroke="var(--line)" stroke-width="0.5"/>' +
    '<line x1="375" y1="255" x2="645" y2="255" stroke="#1f4430" stroke-width="1"/>' +
    '<path d="M375 255 C 378 240, 381 270, 384 255 C 387 235, 390 275, 394 255 C 398 230, 402 280, 407 255 C 413 223, 419 287, 426 255 C 434 230, 442 280, 452 255 C 462 245, 472 265, 484 255 C 496 245, 508 265, 522 255 C 536 250, 550 260, 566 255 C 582 252, 598 258, 615 255 C 625 254, 635 256, 645 255" fill="none" stroke="var(--pager-green)" stroke-width="1.5"/>' +
    '<text x="360" y="190" font-family="IBM Plex Mono" font-size="13" fill="var(--paper)">Myotonic discharge</text>' +
    '<text x="360" y="330" font-family="IBM Plex Sans" font-size="11" fill="var(--muted)">Waxes and wanes, 20&#8211;150 Hz</text>' +
    "</svg>";

  document.getElementById("svg-triphasic").innerHTML = triphasic;
  document.getElementById("svg-cmap").innerHTML = cmap;
  document.getElementById("svg-montage").innerHTML = montage;
  document.getElementById("svg-snap").innerHTML = snap;
  document.getElementById("svg-abnormal").innerHTML = abnormal;
});
