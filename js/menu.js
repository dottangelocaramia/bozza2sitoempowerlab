document.addEventListener('DOMContentLoaded', function () {

  fetch("template/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // --- HAMBURGER ---
      document.addEventListener('click', function (e) {
        if (e.target.closest('#hamburger')) {
          const hamburger = document.getElementById('hamburger');
          const nav = document.querySelector('nav');
          hamburger.classList.toggle('active');
          nav.classList.toggle('open');
        }
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.classList.remove('open-dropdown');
          });
        }
      });

// --- DROPDOWN MOBILE + DESKTOP CLICK ---
// Gestisce TUTTE le tendine del menu (Chi siamo, Servizi, ...): ciascun
// bottone .dropbtn indica la propria pagina di destinazione con l'attributo
// data-href in template/header.html, cosi' funziona correttamente anche con
// più di un dropdown nella pagina.
document.querySelectorAll('.dropbtn').forEach(function (dropbtn) {
  const dropdown = dropbtn.closest('.dropdown');
  const targetUrl = dropbtn.getAttribute('data-href');
  if (!dropdown || !targetUrl) return;
  dropbtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      // MOBILE: primo click apre, secondo click va alla pagina
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open-dropdown');
      if (isOpen) {
        window.location = targetUrl;
      } else {
        dropdown.classList.add('open-dropdown');
      }
    } else {
      // DESKTOP: click va direttamente alla pagina
      window.location = targetUrl;
    }
  });
});

    });

});
