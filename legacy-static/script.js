// Example: Smooth scroll with jQuery
$(document).ready(function () {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 600);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const trail = document.querySelector(".cursor-trail");

  document.addEventListener("mousemove", (e) => {
    trail.style.top = `${e.clientY}px`;
    trail.style.left = `${e.clientX}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");
  const otherProjects = document.querySelectorAll(
    "#other-projects .project-card"
  );

  otherProjects.forEach((card) => {
    if (card.dataset.name === currentPage) {
      card.remove();
    }
  });
});

 const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
