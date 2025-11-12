// ===== Loader (2s with dots) =====
const loader = document.getElementById('loader');
const loadingText = document.getElementById('loadingText');
let dotTimer;
function startDots(){
  // CSS handles dots via ::after; just ensure 2s timeout hides loader
  setTimeout(()=>{ if(loader) loader.style.display='none'; }, 2000);
}
startDots();

// ===== Logo reload triggers loader for ~2s then reload =====
const reloadLogo = document.getElementById('reloadLogo');
if (reloadLogo){
  reloadLogo.addEventListener('click', (e)=>{
    e.preventDefault();
    if(loader){ loader.style.display='grid'; }
    setTimeout(()=>location.reload(), 2000);
  });
}

// ===== Typing effect for role =====
document.addEventListener('DOMContentLoaded', ()=>{
  const el = document.getElementById('typedRole');
  const text = "Data & AI Engineer";
  if (!el) return;
  let i = 0;
  (function type(){
    if (i <= text.length){
      el.textContent = text.slice(0, i++);
      setTimeout(type, 90);
    }
  })();
});

// ===== Scroll helpers =====
window.scrollToSection = function(id){
  const t = document.getElementById(id);
  if (t) t.scrollIntoView({behavior:'smooth'});
};

// ===== Active link highlight on click =====
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(a=>{
  a.addEventListener('click', ()=>{
    navLinks.forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});

// ===== Reveal on scroll =====
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('in'); observer.unobserve(en.target); }
  });
},{threshold:.12});

document.querySelectorAll('.section .inner, .card, .skill, .proj, .tl-item').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== Contact form (mailto) =====
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value || '';
    const email = (document.getElementById('email')||{}).value || '';
    const msg = (document.getElementById('message')||{}).value || '';
    const to = 'your.email@example.com'; // <-- replace with your real email
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${to}?subject=Portfolio%20Contact&body=${body}`;
  });
}
/* Sections */
.section{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;
padding:120px 80px;background:var(--bg);}
.inner{max-width:1100px;width:100%;text-align:center;}
h2{font-family:'Orbitron',sans-serif;color:var(--neon);margin-bottom:30px;}

/* Home */
.home-content h1{font-size:2rem;margin-bottom:10px;}
.highlight{color:var(--neon);}
.typewriter{font-size:1.5rem;font-family:'Orbitron',sans-serif;color:var(--neon);
animation:float 2.5s infinite ease-in-out;}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}

.buttons{margin-top:20px;}
.btn,.btn-outline{padding:10px 20px;margin:5px 10px;text-decoration:none;border-radius:5px;
font-weight:600;transition:all .3s ease;}
.btn{background:var(--neon);color:#000;}
.btn-outline{border:1px solid var(--neon);color:var(--neon);}
.btn-outline:hover{background:var(--neon);color:#000;}
