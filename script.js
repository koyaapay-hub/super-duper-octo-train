(function () {
  var nodes = document.querySelectorAll(".anime-scroll");
  if (!nodes.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  nodes.forEach(function (n) { io.observe(n); });
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
