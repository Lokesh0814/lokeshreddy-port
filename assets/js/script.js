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
