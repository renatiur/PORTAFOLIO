(() => {
  const paths = {
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    'arrow-down': '<path d="M12 4v16m-6-6 6 6 6-6"/>',
    'arrow-up': '<path d="M12 20V4m-6 6 6-6 6 6"/>',
    'arrow-left': '<path d="M20 12H4m6-6-6 6 6 6"/>',
    github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .3-2-.5-2.8 3-.4 6-1.5 6-6A5 5 0 0 0 19 5.5 5 5 0 0 0 18.9 2S17.7 1.6 15 3a13 13 0 0 0-6 0C6.3 1.6 5.1 2 5.1 2A5 5 0 0 0 5 5.5 5 5 0 0 0 3.5 9.2c0 4.5 3 5.6 6 6C8.7 16 9 17 9 18v4"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4M7 7h.01"/>',
    code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 9v12"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7 12 2Zm-10 10 10 5 10-5M2 17l10 5 10-5"/>',
    terminal: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 3 3-3 3m6 0h5"/>',
    branch: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10M18 7c0 7-12 3-12 10"/>',
    search: '<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
    shield: '<path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5l8-3Z"/><path d="m8 12 3 3 5-6"/>',
    graduation: '<path d="m2 8 10-5 10 5-10 5L2 8Zm4 3v6c4 3 8 3 12 0v-6m4-3v9"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-2 10 6-3 6 3-2-10"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
    message: '<path d="M21 11a9 9 0 0 1-9 9H3l1.6-4A9 9 0 1 1 21 11Z"/><path d="M8 10h8m-8 4h5"/>',
    bulb: '<path d="M9 18h6m-6 3h6m-6-6c-6-5-3-13 3-13s9 8 3 13v3H9v-3Z"/>'
  };
  const element = (tag, className = '', text = '') => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== '') node.textContent = String(text);
    return node;
  };
  const icon = name => {
    const span = element('span');
    span.dataset.icon = name;
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.code}</svg>`;
    return span;
  };
  const hydrateIcons = (scope = document) => {
    scope.querySelectorAll('[data-icon]:empty').forEach(node => {
      node.innerHTML = icon(node.dataset.icon).innerHTML;
      node.setAttribute('aria-hidden', 'true');
    });
  };
  const tags = items => {
    const list = element('div', 'tech-tags');
    items.forEach(item => list.append(element('span', '', item)));
    return list;
  };
  const safeUrl = (value, local = false) => {
    if (!value || typeof value !== 'string') return '';
    if (local && /^(?:assets\/)[a-z0-9/_.-]+$/i.test(value) && !value.includes('..')) return value;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  };
  let toastTimer;
  const toast = message => {
    const node = document.getElementById('toast');
    if (!node) return;
    clearTimeout(toastTimer);
    node.textContent = message;
    node.hidden = false;
    toastTimer = setTimeout(() => { node.hidden = true; }, 5500);
  };
  Portfolio.ui = { element, icon, hydrateIcons, tags, safeUrl, toast };
})();
