// Example: Smooth scroll with jQuery
$(document).ready(function() {
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 600);
    }
  });
});

const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  trail.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
});

