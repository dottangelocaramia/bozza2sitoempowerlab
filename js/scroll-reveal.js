// scroll-reveal.js — aggiunto da Claude (29/08/2026) su richiesta di Angelo.
// Applica un effetto di comparsa dal basso verso l'alto agli elementi con
// classe "reveal-up" quando entrano nell'area visibile durante lo scroll.
// Riutilizzabile su qualunque pagina: basta includere questo script e dare
// la classe "reveal-up" agli elementi che devono comparire allo scroll.
(function () {
  function initReveal() {
    var items = document.querySelectorAll('.reveal-up');
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
