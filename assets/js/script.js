document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
  const text = "Data & AI Engineer";
  let index = 0;
  const typing = document.getElementById("typed-text");

  function type() {
    if (index < text.length) {
      typing.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();

  // Scroll Button
  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loader Animation
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000);
});
