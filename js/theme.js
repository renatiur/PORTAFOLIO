(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  let theme = 'dark';

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch { /* El cambio de tema también funciona sin almacenamiento disponible. */ }

  const applyTheme = value => {
    theme = value;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f9fc' : '#090c12');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const label = theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
      button.setAttribute('aria-label', label);
      button.title = label;
    });
  };

  applyTheme(theme);
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
        try { localStorage.setItem(storageKey, theme); } catch { /* Preferencia válida durante esta visita. */ }
      });
    });
  });
  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue === 'light' ? 'light' : 'dark');
    }
  });
})();
