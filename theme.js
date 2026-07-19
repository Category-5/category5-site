(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var buttons = document.querySelectorAll(".theme-toggle");

  function effectiveTheme() {
    return root.dataset.theme || (media.matches ? "dark" : "light");
  }

  function updateLabels() {
    var dark = effectiveTheme() === "dark";
    buttons.forEach(function (button) {
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  updateLabels();
  media.addEventListener("change", updateLabels);

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      updateLabels();
    });
  });
})();

/* In-page anchors: scroll without writing the #hash into the URL.
   Plain scrollIntoView() defers to the CSS scroll-behavior rules,
   including their reduced-motion override. */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (el) {
    el.addEventListener("click", function (e) {
      var hash = el.getAttribute("href");
      if (hash.length < 2) return;
      var target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView();
    });
  });
})();

/* Pause the radar sweep while it's scrolled off-screen */
(function () {
  if (!("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("radar--paused", !entry.isIntersecting);
    });
  });

  document.querySelectorAll(".radar").forEach(function (radar) {
    observer.observe(radar);
  });
})();

/* Station coordinates: Raleigh, NC ⇄ Rochester, NY */
(function () {
  var STATIONS = ["35.78° N, 78.64° W", "43.16° N, 77.61° W"];
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll(".nav__coords").forEach(function (el) {
    var index = 0;
    var busy = false;

    el.textContent = STATIONS[index];

    el.addEventListener("click", function () {
      if (busy) return;
      index = 1 - index;
      var next = STATIONS[index];

      if (reduceMotion.matches) {
        el.textContent = next;
        return;
      }

      busy = true;
      el.classList.add("nav__coords--typing");
      var current = el.textContent;

      var erase = setInterval(function () {
        current = current.slice(0, -1);
        el.textContent = current;
        if (current.length === 0) {
          clearInterval(erase);
          var i = 0;
          var type = setInterval(function () {
            i += 1;
            el.textContent = next.slice(0, i);
            if (i >= next.length) {
              clearInterval(type);
              el.classList.remove("nav__coords--typing");
              busy = false;
            }
          }, 45);
        }
      }, 30);
    });
  });
})();
