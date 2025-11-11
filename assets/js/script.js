// ===== Loader (auto-hide after load or 5s max) =====
const loader = document.getElementById('loader');
let loaderTimeout = setTimeout(() => loader.style.display = 'none', 5000);
window.addEventListener('load', () => {
  clearTimeout(loaderTimeout);
  setTimeout(() => loader.style.display = 'none', 1200);
});

// ===== Mobile nav =====
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));
if (links) links.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>links.classList.remove('open')));

// ===== Typed role text (looping) =====
const roleEl = document.getElementById('typedRole');
const roleText = 'Data & AI Engineer';
let i=0, dir=1;
function typeLoop(){
  if(!roleEl) return;
  roleEl.textContent = roleText.slice(0, i);
  i += dir;
  if (i === roleText.length + 1) { dir = -1; setTimeout(typeLoop, 1600); return; }
  if (i === 0) { dir = 1; }
  setTimeout(typeLoop, 90);
}
typeLoop();

// ===== Reveal on scroll =====
const obs = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target)} })
},{threshold:0.12});
document.querySelectorAll('.section .container, .card, .skill, .tl-card, .form').forEach(el=>{
  el.classList.add('reveal'); obs.observe(el);
});

// ===== Projects carousel (simple slider) =====
const track = document.getElementById('projTrack');
const dots  = document.getElementById('projDots');
const prev  = document.getElementById('projPrev');
const next  = document.getElementById('projNext');
if(track && dots && prev && next){
  const cards = Array.from(track.children);
  const cardW = () => cards[0].getBoundingClientRect().width + 20;
  let idx = 0;
  function render(){
    track.style.transform = `translateX(${-(idx * cardW())}px)`;
    dots.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===idx));
  }
  // dots
  cards.forEach((_,i)=>{
    const b = document.createElement('button');
    b.addEventListener('click',()=>{ idx = i; render(); });
    dots.appendChild(b);
  });
  dots.firstChild.classList.add('active');
  prev.addEventListener('click',()=>{ idx = Math.max(0, idx-1); render(); });
  next.addEventListener('click',()=>{ idx = Math.min(cards.length-1, idx+1); render(); });
  window.addEventListener('resize', render);
  render();
}

// ===== Contact form (mailto:) =====
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email= document.getElementById('email').value.trim();
    const msg  = document.getElementById('message').value.trim();
    const to   = 'YOUR_EMAIL_HERE'; // ← replace with your real email
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${to}?subject=Portfolio%20Contact&body=${body}`;
  });
}
