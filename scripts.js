// scripts.js — Smooth scroll and fade-in effects

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".overlay");

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
