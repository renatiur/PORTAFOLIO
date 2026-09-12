(() => {
  const { config, ui } = Portfolio;
  const form = document.getElementById('contact-form');
  if (!form) return;
  const fields = ['name', 'email', 'subject', 'message'];
  const status = document.getElementById('form-status');
  const openEmail = document.getElementById('open-email');
  const emailLink = document.getElementById('contact-email');
  const copyButton = document.getElementById('copy-email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasEmail = emailPattern.test(config.email) && !/[\r\n]/.test(config.email);
  const validate = (name, value) => {
    const text = value.trim();
    if (!text) return 'Este campo es obligatorio.';
    if (name === 'name' && (text.length < 2 || text.length > 80)) return 'Escribe entre 2 y 80 caracteres.';
    if (name === 'email' && (!emailPattern.test(text) || text.length > 150)) return 'Introduce un correo electrónico válido.';
    if (name === 'subject' && (text.length < 3 || text.length > 120 || /[\r\n]/.test(text))) return 'Escribe un asunto de 3 a 120 caracteres en una línea.';
    if (name === 'message' && (text.length < 20 || text.length > 2000)) return 'Escribe un mensaje de 20 a 2000 caracteres.';
    return '';
  };
  const validateField = name => {
    const field = form.elements.namedItem(name);
    const error = validate(name, field.value);
    document.getElementById(`${name}-error`).textContent = error;
    field.setAttribute('aria-invalid', String(Boolean(error)));
    return !error;
  };
  fields.forEach(name => {
    const field = form.elements.namedItem(name);
    field.addEventListener('blur', () => validateField(name));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(name);
      openEmail.hidden = true;
      openEmail.removeAttribute('href');
      status.hidden = true;
    });
  });
  const message = form.elements.namedItem('message');
  message.addEventListener('input', () => {
    document.getElementById('message-count').textContent = `${message.value.length} / 2000`;
  });
  emailLink.textContent = hasEmail ? config.email : 'Correo por configurar';
  if (hasEmail) emailLink.href = `mailto:${config.email}`;
  else {
    copyButton.disabled = true;
    copyButton.title = 'Correo pendiente de configurar';
    document.getElementById('contact-method').textContent = 'El correo de contacto aún no está configurado. Puedes comunicarte conmigo por LinkedIn.';
  }
  copyButton.addEventListener('click', async () => {
    if (!hasEmail) return;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(config.email);
      ui.toast('Correo copiado al portapapeles.');
    } catch {
      const range = document.createRange();
      range.selectNodeContents(emailLink);
      const selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      ui.toast('El navegador no permitió copiar. El correo quedó seleccionado para copiarlo manualmente.');
    }
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) {
      status.hidden = true;
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    status.hidden = false;
    if (!hasEmail) {
      status.textContent = 'Los campos son válidos, pero no se ha enviado ningún mensaje: el correo de destino está pendiente de configurar. Contacta conmigo mediante LinkedIn.';
      return;
    }
    const values = Object.fromEntries(fields.map(name => [name, form.elements.namedItem(name).value.trim()]));
    const body = `Nombre: ${values.name}\nCorreo: ${values.email}\n\n${values.message}`;
    openEmail.href = `mailto:${config.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    openEmail.hidden = false;
    status.textContent = 'Tu mensaje está preparado, aún no se ha enviado. Pulsa «Abrir correo» y envíalo desde tu aplicación de email. Si no tienes una configurada, usa LinkedIn.';
  });
  Portfolio.validateContact = validate;
})();
