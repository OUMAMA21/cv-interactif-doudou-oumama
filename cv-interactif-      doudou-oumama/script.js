
// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    // collapse navbar on small screens
    const bsCollapse = document.querySelector('.navbar-collapse');
    if(bsCollapse && bsCollapse.classList.contains('show')) {
      new bootstrap.Collapse(bsCollapse).toggle();
    }
  });
});

// simple reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// small shadow effect on nav when scrolling
window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('mainNav');
  if(window.scrollY > 20) nav.style.backdropFilter = 'saturate(120%) blur(6px)';
  else nav.style.backdropFilter = 'none';
});
