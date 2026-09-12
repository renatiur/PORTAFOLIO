(() => {
  const { config, ui } = Portfolio;
  const { element, icon, tags, safeUrl, toast } = ui;
  ui.hydrateIcons();
  document.getElementById('current-year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-social]').forEach(link => {
    const network = link.dataset.social;
    const url = safeUrl(config[network]);
    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.dataset.unconfigured = 'true';
      link.setAttribute('role', 'button');
      link.tabIndex = 0;
      link.title = `${network === 'github' ? 'GitHub' : 'LinkedIn'} pendiente de configurar`;
      const explain = () => toast(link.title);
      link.addEventListener('click', explain);
      link.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); explain(); }
      });
    }
  });
  document.querySelectorAll('[data-cv]').forEach(link => {
    const url = safeUrl(config.cv, true);
    if (url) {
      link.href = url;
      link.setAttribute('download', 'CV-Renato-Rodriguez.pdf');
      link.title = 'Descargar CV de Renato Rodríguez';
    } else {
      link.href = 'index.html#contacto';
      link.addEventListener('click', () => toast('El CV aún no está disponible. Puedes contactar por LinkedIn.'));
    }
  });

  const isHome = !location.pathname.endsWith('project.html');
  const navigation = document.getElementById('navigation');
  const toggle = document.querySelector('.menu-toggle');
  const header = document.getElementById('header');
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    navigation.classList.remove('is-open');
    header.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    navigation.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
  });
  navigation.querySelectorAll('a').forEach(link => {
    if (isHome) link.href = `#${link.dataset.section}`;
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  const desktop = matchMedia('(min-width: 1025px)');
  desktop.addEventListener('change', () => { if (desktop.matches) closeMenu(); });

  const metrics = document.getElementById('metrics');
  if (metrics) config.metrics.forEach(({ value, label }) => {
    const card = element('div', 'metric reveal');
    card.append(element('strong', '', value), element('span', '', label));
    metrics.append(card);
  });
  const technologyGrid = document.getElementById('technology-grid');
  if (technologyGrid) config.technologies.forEach(technology => {
    const card = element('article', 'technology-card reveal');
    const heading = element('div', 'technology-heading');
    heading.append(icon(technology.icon), element('h3', '', technology.name));
    card.append(heading, tags(technology.items));
    technologyGrid.append(card);
  });
  const experienceTags = document.getElementById('experience-technologies');
  if (experienceTags) {
    const technologies = ['C#', 'VB.NET', '.NET 5', 'ASP.NET', 'Oracle', 'PL/SQL', 'JavaScript', 'HTML', 'CSS', 'REST API', 'Swagger', 'SAP', 'WCF', 'Crystal Reports', 'IIS'];
    experienceTags.replaceChildren(...tags(technologies).childNodes);
    const projects = document.getElementById('experience-projects');
    [1, 4, 5].forEach(id => {
      const project = Portfolio.projects.find(item => item.id === id);
      if (!project) return;
      const link = element('a', '', project.title);
      link.href = `project.html?id=${project.id}`;
      link.append(icon('arrow-up-right'));
      projects.append(link);
    });
  }
  const siteUrl = safeUrl(config.siteUrl);
  if (siteUrl) {
    const base = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
    const page = isHome ? 'index.html' : `project.html${location.search}`;
    const canonical = element('link');
    canonical.rel = 'canonical';
    canonical.href = new URL(page, base).href;
    document.head.append(canonical);
    const ogUrl = element('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = canonical.href;
    document.head.append(ogUrl);
  }
})();
