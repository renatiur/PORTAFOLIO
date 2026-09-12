(() => {
  const { ui, projects } = Portfolio;
  const { element, icon, tags, safeUrl } = ui;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const filters = document.getElementById('project-filters');
  const search = document.getElementById('project-search');
  const count = document.getElementById('project-count');
  const empty = document.getElementById('project-empty');
  const categories = ['Todos', 'Backend', 'Web', 'API', 'Oracle', 'SAP', 'Integraciones', 'Automatización', 'Académicos'];
  const state = { category: 'Todos', query: '' };
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filterProjects = (items, category, query) => {
    const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
    return items.filter(project => {
      const inCategory = category === 'Todos' || (project.categories || [project.category]).includes(category);
      const content = normalize([project.title, project.subtitle, project.shortDescription, project.category, ...project.technologies].join(' '));
      return inCategory && terms.every(term => content.includes(term));
    });
  };
  const createCard = project => {
    const card = element('article', 'project-card');
    const cover = element('div', 'project-image');
    const image = element('img');
    image.src = safeUrl(project.mainImage, true) || 'assets/icons/favicon.svg';
    image.alt = `Vista conceptual de ${project.title}`;
    image.width = 600;
    image.height = 330;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => { image.src = 'assets/icons/favicon.svg'; }, { once: true });
    cover.append(image, element('span', 'image-number', String(project.id).padStart(2, '0')));
    const content = element('div', 'project-card-content');
    const meta = element('div', 'project-meta');
    meta.append(element('span', 'project-category', project.category), element('span', '', project.year || 'Año por confirmar'));
    content.append(meta, element('h3', '', project.title), element('p', 'project-subtitle', project.subtitle), element('p', 'project-card-description', project.shortDescription));
    const tech = tags(project.technologies.slice(0, 4));
    if (project.technologies.length > 4) {
      const more = element('span', '', `+${project.technologies.length - 4}`);
      more.title = project.technologies.slice(4).join(', ');
      more.setAttribute('aria-label', `Otras tecnologías: ${more.title}`);
      tech.append(more);
    }
    const footer = element('div', 'project-card-footer');
    const production = project.status.includes('Producción');
    const status = element('span', `project-status${production ? ' production' : ''}`);
    if (production) status.append(element('span', 'status-dot'));
    status.append(document.createTextNode(production ? 'En producción' : project.status));
    const link = element('a', 'project-link', 'Ver proyecto');
    link.href = `project.html?id=${project.id}`;
    link.setAttribute('aria-label', `Ver proyecto: ${project.title}`);
    link.append(icon('arrow-up-right'));
    footer.append(status, link);
    content.append(tech, footer);
    card.append(cover, content);
    return card;
  };
  const render = () => {
    const results = filterProjects(projects, state.category, state.query);
    grid.replaceChildren(...results.map(createCard));
    grid.setAttribute('aria-busy', 'false');
    empty.hidden = results.length !== 0;
    count.textContent = `${results.length} de ${projects.length} proyectos`;
    filters.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.category === state.category));
    });
  };
  categories.forEach(category => {
    const button = element('button', 'filter-button', category);
    button.type = 'button';
    button.dataset.category = category;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => { state.category = category; render(); });
    filters.append(button);
  });
  search.addEventListener('input', () => { state.query = search.value; render(); });
  document.getElementById('reset-filters').addEventListener('click', () => {
    state.category = 'Todos';
    state.query = '';
    search.value = '';
    render();
    search.focus();
  });
  document.addEventListener('keydown', event => {
    const editing = event.target.closest('input, textarea, select, [contenteditable="true"]');
    if (event.key === '/' && !editing && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      search.focus();
    }
  });
  document.getElementById('total-projects').textContent = String(projects.length).padStart(2, '0');
  Portfolio.filterProjects = filterProjects;
  render();
})();
