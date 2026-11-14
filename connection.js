(() => {
  for (const panel of document.querySelectorAll('[data-google-form]')) {
    const button = panel.querySelector('[data-load-form]');
    const link = panel.querySelector('[data-open-form]');
    const status = panel.querySelector('[role="status"]');
    const configured = window.PKC_CONNECTION?.[panel.dataset.googleForm];
    let url;
    try { url = new URL(configured); } catch { continue; }
    if (url.origin !== 'https://docs.google.com' || !/^\/forms\/d\/e\/[^/]+\/viewform$/.test(url.pathname)) continue;
    link.href = url.href;
    link.hidden = false;
    button.disabled = false;
    status.textContent = 'Load the form here or open it in a new tab. No form data is collected by this page.';
    button.addEventListener('click', () => {
      if (panel.querySelector('iframe')) return;
      url.searchParams.set('embedded', 'true');
      const frame = document.createElement('iframe');
      frame.title = panel.dataset.googleForm === 'application' ? 'Peach Koi Creative Collective membership application' : 'Peach Koi Creative moderator enquiry';
      frame.src = url.href;
      frame.className = 'google-form-frame';
      panel.querySelector('[data-form-frame]').append(frame);
      button.hidden = true;
      status.textContent = 'Complete and submit inside the Google form below. Only Google’s confirmation confirms submission. If the form does not appear, use “Open in Google Forms”.';
    });
  }
})();
