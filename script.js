(function () {
  function activate(el) { el.classList.add("on"); }

  function setup() {
    var nodes = document.querySelectorAll(".reveal, .v-block");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(activate);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          activate(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

    nodes.forEach(function (n) { io.observe(n); });

    // Sécurité : après 1.5s tout ce qui n'est pas encore visible apparaît
    setTimeout(function () {
      nodes.forEach(function (n) {
        if (!n.classList.contains("on")) activate(n);
      });
    }, 1500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }

  // burger
  var b = document.getElementById("burgerBtn");
  var nav = document.getElementById("mobileNav");
  if (b && nav) {
    b.addEventListener("click", function () { nav.classList.toggle("open"); });
  }
})();
function closeMobile() {
  var n = document.getElementById("mobileNav");
  if (n) n.classList.remove("open");
}
function openModal(e) {
  if (e) e.preventDefault();
  var m = document.getElementById("contactModal");
  if (m) m.classList.add("open");
}
function closeModal() {
  var m = document.getElementById("contactModal");
  if (m) m.classList.remove("open");
}
