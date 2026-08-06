// Renders the left sidebar from window.NAV_SECTIONS, wires the mobile
// drawer toggle, highlights the current page, and powers the pager-bar
// search across every topic in every section (not just one page's list).

(function () {
  var ROOT = window.SITE_ROOT || "";
  var sections = window.NAV_SECTIONS || [];

  function resolve(url) {
    return ROOT + url;
  }

  function currentPath() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : "index.html";
  }

  function buildSidebar() {
    var mount = document.getElementById("sidebarMount");
    if (!mount) return;

    var cur = currentPath();
    var html = '<a class="side-home' + (cur === "index.html" || cur === "" ? " active" : "") +
      '" href="' + resolve("index.html") + '">Handbook home</a>';

    sections.forEach(function (section) {
      var count = section.topics.length;
      html += '<div class="side-section' + (section.status !== "active" ? " planned" : "") + '">';
      html += '<div class="side-section-head"><span>' + section.icon + '</span>' + section.name +
        '<span class="side-count">' + (section.status === "active" ? count : "soon") + '</span></div>';

      if (section.topics.length) {
        html += '<ul class="side-topics">';
        section.topics.forEach(function (t) {
          var file = t.url.split("/").pop().split("#")[0];
          var isActive = file === cur;
          html += '<li><a href="' + resolve(t.url) + '" class="' + (isActive ? "active" : "") + '">' + t.name + "</a></li>";
        });
        html += "</ul>";
      }
      html += "</div>";
    });

    mount.innerHTML = html;
  }

  function wireDrawer() {
    var toggle = document.getElementById("drawerToggle");
    var sidebar = document.getElementById("sidebarMount");
    var scrim = document.getElementById("drawerScrim");
    if (!toggle || !sidebar) return;

    function close() {
      sidebar.classList.remove("open");
      if (scrim) scrim.classList.remove("show");
    }
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      if (scrim) scrim.classList.toggle("show");
    });
    if (scrim) scrim.addEventListener("click", close);
    sidebar.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });
  }

  function wireSearch() {
    var input = document.getElementById("pagerSearch");
    if (!input) return;

    var all = [];
    sections.forEach(function (s) {
      s.topics.forEach(function (t) {
        all.push({ name: t.name, url: resolve(t.url), section: s.name });
      });
    });

    input.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      var q = input.value.trim().toLowerCase();
      if (!q) return;
      var hit = all.find(function (t) { return t.name.toLowerCase().indexOf(q) !== -1; });
      if (hit) window.location.href = hit.url;
    });
  }

  function wireLightbox() {
    document.querySelectorAll(".img-card img").forEach(function (img) {
      img.addEventListener("click", function () {
        var overlay = document.createElement("div");
        overlay.className = "lightbox";
        var big = document.createElement("img");
        big.src = img.src;
        overlay.appendChild(big);
        overlay.addEventListener("click", function () { overlay.remove(); });
        document.body.appendChild(overlay);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSidebar();
    wireDrawer();
    wireSearch();
    wireLightbox();
  });
})();
