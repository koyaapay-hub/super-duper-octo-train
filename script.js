(function () {
  var nodes = document.querySelectorAll(".anime-scroll");
  if (!nodes.length) return;

  function show(el) {
    el.classList.add("visible");
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(show);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        show(en.target);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });

  nodes.forEach(function (n) { io.observe(n); });

  // Sécurité
  setTimeout(function () {
    nodes.forEach(function (n) {
      if (!n.classList.contains("visible")) show(n);
    });
  }, 1500);
})();

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
