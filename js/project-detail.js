(() => {
  const { projects, ui } = Portfolio;
  const { element, icon, tags, safeUrl } = ui;
  const container = document.getElementById('project-detail');
  const id = Number(new URLSearchParams(location.search).get('id'));
  const project = projects.find(item => item.id === id);
  container.replaceChildren();
  container.setAttribute('aria-busy', 'false');
  if (!project) {
    document.title = 'Proyecto no encontrado — Renato Rodríguez';
    const empty = element('section', 'not-found');
    const back = element('a', 'button button-primary', 'Explorar los proyectos');
    back.href = 'index.html#proyectos';
    empty.append(element('p', 'error-number', '404'), element('h1', '', 'Este proyecto no está aquí.'), element('p', '', 'El enlace puede haber cambiado. Descubre los proyectos disponibles en el portafolio.'), back);
    container.append(empty);
    return;
  }
  document.title = `${project.title} — Renato Rodríguez`;
  document.querySelector('meta[name="description"]').content = project.shortDescription;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = project.shortDescription;
  document.querySelector('meta[name="twitter:title"]').content = document.title;
  document.querySelector('meta[name="twitter:description"]').content = project.shortDescription;
  const header = element('header', 'detail-header');
  const meta = element('div', 'detail-meta');
  meta.append(element('span', 'tag', project.category), element('span', project.status.includes('Producción') ? 'tag tag-green' : 'tag', project.status), element('span', '', `Año: ${project.year || 'por confirmar'}`));
  header.append(element('p', 'eyebrow', `PROYECTO ${String(project.id).padStart(2, '0')} / ${project.context || 'SERPOST'}`), element('h1', '', project.title), element('p', 'detail-subtitle', project.subtitle), meta, element('p', '', project.description));
  const cover = element('figure', 'detail-cover');
  const image = element('img');
  image.src = safeUrl(project.mainImage, true) || 'assets/icons/favicon.svg';
  image.alt = `Vista conceptual de ${project.title}`;
  image.width = 600;
  image.height = 330;
  image.addEventListener('error', () => { image.src = 'assets/icons/favicon.svg'; }, { once: true });
  cover.append(image, element('figcaption', '', project.imageCaption));
  const layout = element('div', 'detail-layout');
  const body = element('article', 'detail-body');
  const addSection = (heading, content) => {
    if (!content || (Array.isArray(content) && !content.length)) return;
    const section = element('section');
    section.append(element('h2', '', heading));
    if (Array.isArray(content)) {
      const list = element('ul');
      content.forEach(text => list.append(element('li', '', text)));
      section.append(list);
    } else section.append(element('p', '', content));
    body.append(section);
  };
  addSection('El problema', project.problem);
  addSection('La solución', project.solution);
  addSection('Mi participación', project.role);
  addSection('Funciones implementadas', project.features);
  addSection('Desafíos técnicos', project.challenges);
  addSection('Resultados', project.results);
  const learned = element('section', 'learning-card');
  learned.append(icon('bulb'), element('h2', '', '¿Qué aprendí en este proyecto?'), element('p', '', project.learned));
  body.append(learned);
  const gallerySection = element('section');
  gallerySection.append(element('h2', '', 'Capturas del sistema'));
  if (project.images.length) {
    const gallery = element('div', 'detail-gallery');
    project.images.forEach(item => {
      const src = safeUrl(item.src, true);
      if (!src) return;
      const figure = element('figure');
      const img = element('img');
      img.src = src;
      img.alt = item.alt || project.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      figure.append(img, element('figcaption', '', item.caption || item.alt || ''));
      gallery.append(figure);
    });
    gallerySection.append(gallery);
  } else gallerySection.append(element('p', '', project.context === 'Proyecto personal' ? 'Las capturas de este proyecto aún no están disponibles. La imagen de presentación es una ilustración conceptual.' : 'Por confidencialidad, no se publican capturas internas. La imagen de presentación es una ilustración conceptual del proyecto.'));
  body.append(gallerySection);
  const sidebar = element('aside', 'detail-sidebar');
  sidebar.setAttribute('aria-label', 'Ficha técnica del proyecto');
  sidebar.append(element('h2', '', 'Stack del proyecto'), tags(project.technologies));
  if (project.architecture?.length) {
    sidebar.append(element('h2', '', 'Arquitectura'), element('p', '', 'Vista simplificada del flujo de componentes.'));
    const diagram = element('ol', 'architecture');
    project.architecture.forEach(layer => diagram.append(element('li', '', layer)));
    sidebar.append(diagram);
  }
  sidebar.append(element('h2', '', 'Contexto del proyecto'), element('p', '', project.context || 'SERPOST · Sistemas de Información'), element('p', '', project.context === 'Proyecto personal' ? 'Desarrollo personal para aplicar seguridad, persistencia y arquitectura MVC.' : 'Descripción funcional sin datos, código ni configuraciones internas.'));
  const contact = element('a', 'button button-secondary', 'Hablemos del proyecto');
  contact.href = 'index.html#contacto';
  contact.append(icon('arrow-up-right'));
  sidebar.append(contact);
  layout.append(body, sidebar);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const nextSection = element('div', 'next-project');
  const nextLink = element('a', '', next.title);
  nextLink.href = `project.html?id=${next.id}`;
  nextLink.append(icon('arrow-up-right'));
  nextSection.append(element('p', '', 'Sigue explorando'), nextLink);
  container.append(header, cover, layout, nextSection);
})();
