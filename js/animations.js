(() => {
  const header = document.getElementById('header');
  const progress = document.querySelector('.scroll-progress');
  const backToTop = document.querySelector('.back-to-top');
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...document.querySelectorAll('[data-section]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let framePending = false;
  const updateScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - innerHeight;
    const fraction = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
    progress.style.transform = `scaleX(${fraction})`;
    header.classList.toggle('scrolled', scrollY > 16);
    backToTop.hidden = scrollY < 500;
    if (sections.length) {
      let current = sections[0].id;
      sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) current = section.id; });
      if (maxScroll > 0 && scrollY >= maxScroll - 4) current = sections[sections.length - 1].id;
      links.forEach(link => {
        const active = link.dataset.section === current;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    framePending = false;
  };
  const scheduleScroll = () => {
    if (!framePending) { framePending = true; requestAnimationFrame(updateScroll); }
  };
  addEventListener('scroll', scheduleScroll, { passive: true });
  addEventListener('resize', scheduleScroll);
  addEventListener('load', scheduleScroll);
  backToTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));
  updateScroll();
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(node => { node.classList.add('is-pending'); observer.observe(node); });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        document.querySelectorAll('.is-pending').forEach(node => node.classList.remove('is-pending'));
      }
    });
  }
})();
