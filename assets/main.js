document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu-toggle").forEach(function (toggle) {
    var nav = toggle.parentElement.querySelector(".main-nav");
    if (!nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  });
});
