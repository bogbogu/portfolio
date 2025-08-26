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
