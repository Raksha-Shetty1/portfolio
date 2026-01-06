function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

function highlightNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  highlightNav();
});

window.addEventListener("load", () => {
  revealOnScroll();
  highlightNav();
});
