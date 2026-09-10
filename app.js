document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const st = document.getElementById('stats');
  [['projects','PROYECTOS'],['repos','REPOS GITHUB'],['ready','LISTOS >=80%']]
    .forEach(([k,lbl]) => {
      const d = document.createElement('div'); d.className = 'stat';
      const b = document.createElement('b'); b.textContent = DATA.stats[k] || 0;
      const s = document.createElement('span'); s.textContent = lbl;
      d.append(b, s); st.append(d);
    });
  const grid = document.getElementById('ecoGrid');
  DATA.categories.forEach(c => {
    const d = document.createElement('div'); d.className = 'card rv';
    const b = document.createElement('b'); b.textContent = c.count;
    const sm = document.createElement('small'); sm.textContent = c.name;
    d.append(b, sm); grid.append(d);
  });
  document.querySelectorAll('section > *, .hero > *').forEach(el => el.classList.add('rv'));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold: .12});
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
});
