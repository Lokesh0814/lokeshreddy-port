// ========== LOADER ==========
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => loader.style.display = "none", 1200);
  }
});

// ========== NAVIGATION SCROLL ==========
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ========== RELOAD (Logo Click) ==========
document.getElementById("reloadLogo")?.addEventListener("click", e => {
  e.preventDefault();
  location.reload();
});

// ========== TYPING EFFECT ==========
const text = "Data & AI Engineer";
let i = 0;
function typeEffect() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  el.textContent = text.slice(0, i++);
  if (i <= text.length) {
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(() => {
      i = 0;
      el.textContent = "";
      typeEffect();
    }, 1500);
  }
}
window.addEventListener("load", typeEffect);

// === PLANE ANIMATION WITH ROTATION ===
document.addEventListener("DOMContentLoaded", function () {
  const plane = document.getElementById("plane");
  const path = document.getElementById("journeyPath");
  let progress = 0;

  function animatePlane() {
    const totalLength = path.getTotalLength();
    const point = path.getPointAtLength(progress);

    plane.style.left = `${point.x - 20}px`;
    plane.style.top = `${point.y - 20}px`;

    // Rotation calculation
    const nextPoint = path.getPointAtLength(progress + 2);
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
    plane.style.transform = `rotate(${angle}deg)`;

    progress += 1.2;
    if (progress > totalLength) progress = 0;

    requestAnimationFrame(animatePlane);
  }

  animatePlane();
});
