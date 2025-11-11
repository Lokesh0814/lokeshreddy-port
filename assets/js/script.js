document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 4000);

  // Typing effect
  const text = "Data & AI Engineer";
  let i = 0;
  const target = document.getElementById("typed-text");
  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
      scrollBtn.style.display = "block";
    else scrollBtn.style.display = "none";
  };
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Logo reload with loader animation
  document.getElementById("reloadLogo").addEventListener("click", (e) => {
    e.preventDefault();
    loader.style.display = "flex";
    setTimeout(() => location.reload(), 4500);
  });

  // Smooth scroll and active nav link
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

