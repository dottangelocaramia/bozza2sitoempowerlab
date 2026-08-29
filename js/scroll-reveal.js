// scroll-reveal.js — aggiunto da Claude (29/08/2026) su richiesta di Angelo.
// Applica un effetto di comparsa (dal basso o dall'alto) agli elementi con
// classe "reveal-up" o "reveal-down" quando entrano nell'area visibile durante lo scroll.
// Riutilizzabile su qualunque pagina: basta includere questo script e dare
// la classe "reveal-up" (dal basso) o "reveal-down" (dall'alto) agli elementi.
(function () {
  function initReveal() {
    var items = document.querySelectorAll('.reveal-up, .reveal-down');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: se il browser non supporta IntersectionObserver, mostra subito tutto.
      items.forEach(function (el) { el.classList.add('reveal-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (el) { observer.observe(el); });

    // Rete di sicurezza (29/08/2026): se per qualsiasi motivo un elemento non dovesse
    // ricevere "reveal-visible" entro pochi secondi (tab aperta in background, quirk del
    // browser, ecc.), lo rende comunque visibile invece di lasciarlo invisibile per sempre.
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add('reveal-visible'); });
    }, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
