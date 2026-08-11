document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  });
});
