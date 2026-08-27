# Progetto Sito Empower Lab — guida di orientamento

*Questo file vive dentro il repository e va aggiornato quando cambia qualcosa di rilevante. Serve per ritrovare velocemente il filo del progetto anche dopo giorni o settimane di pausa.*

*Ultimo aggiornamento: 27 agosto 2026*

## Dove siamo

Questo repository (**Bozza2 Sito Empower Lab**) è l'ambiente di lavoro del sito. È una copia della repository originale (`empowerlab-caramia-amodio.github.io`, di Angelo), che resta intoccata come riferimento. Tutte le modifiche si fanno qui.

Stato: Fase 1 e roadmap tecnica (SEO on-page/tecnica + dati strutturati) concluse. Aggiunte foto profilo, nuove immagini reali negli articoli, e due nuove pagine servizio (Test psicologici, Workbook). Nessuna migrazione, dominio o pubblicazione definitiva è stata fatta o richiesta.

## Come è fatto il sito (architettura)

Il sito è statico: niente framework, niente build. Ogni pagina è un file `.html` indipendente in radice. Header e footer **non** sono scritti dentro ogni pagina: ogni pagina ha un `<div id="header"></div>` e un `<div id="footer"></div>` vuoti, riempiti a runtime dal browser tramite JavaScript che scarica `template/header.html` e `template/footer.html` e li inserisce nella pagina. Questo evita di duplicare header/footer in ogni file, ma significa anche che quel contenuto non è visibile leggendo il semplice codice sorgente HTML — è normale, succede via `js/menu.js` e uno script inline in ogni pagina.

```
index.html, chi-siamo.html, servizi.html, ecc.   → pagine del sito, una per file
test.html, workbook.html                          → nuove pagine servizio (test psicologici, workbook digitali)
css/style.css                                     → unico foglio di stile per tutto il sito
js/menu.js                                        → carica l'header, gestisce menu mobile e dropdown "Servizi"
images/                                           → asset immagine (logo, foto profilo, immagini articoli)
template/header.html, template/footer.html        → header e footer condivisi, iniettati via JS
template/template-articolo-seo.html               → scheletro pronto per scrivere un nuovo articolo
template/template-servizio.html                   → scheletro pronto per scrivere una nuova pagina servizio
Backup e prova/                                   → versioni precedenti/di prova (non in uso, da valutare se tenere)
```

## Mappa della navigazione (cosa punta a cosa)

Il menu principale (in `template/header.html`) collega: Home, Chi siamo, EmpowerLab, Servizi (dropdown: Supporto psicologico, Formazione, Percorsi, **Test**, **Workbook**), Articoli, FAQ, Contatti.

La home (`index.html`) rimanda inoltre a: Supporto psicologico, Formazione, Percorsi, Chi siamo, Contatti, FAQ.

`corsi.html` e `percorsi.html` contengono già link verso pagine di dettaglio non ancora scritte (es. `time-management.html`, `statistica.html`, `work-life.html`, `orientamento-carriera.html`, ecc.) — sono contenuti futuri già previsti nel menu, non errori.

`angelo-caramia.html` e `amodio.html` ora mostrano anche una foto profilo (componente `.profilo-intestazione`/`.foto-profilo` in `css/style.css`) e rimandano a pagine di approfondimento non ancora scritte.

`test.html` contiene un'area segnaposto in attesa dei singoli test autosomministrabili futuri. `workbook.html` presenta i 3 workbook reali forniti da Angelo (descrizioni generiche, da rifinire), non ancora acquistabili.

## Cosa è stato fatto finora

1. **Copia e verifica** — Bozza2 creata da una copia esatta dell'originale (storico commit incluso), verificata identica.
2. **Audit completo** — analisi di struttura, SEO, contenuti, problemi e opportunità.
3. **Correzioni tecniche rapide**: pagina di prova rimossa, link rotto corretto, `lang="it"` aggiunto.
4. **CSS ripulito**: duplicazioni eliminate senza cambiare l'aspetto visivo.
5. **SEO on-page**: meta description, keywords, robots, Open Graph e canonical su tutte le pagine principali.
6. **SEO tecnica**: `sitemap.xml`, `robots.txt`, immagine hero inesistente rimossa dal CSS, logo ottimizzato.
7. **Dati strutturati (schema.org)**: JSON-LD su index (ProfessionalService), profili (Person), FAQ (FAQPage), articoli Autostima/Ansia universitaria (Article).
8. **Foto profilo**: componente riutilizzabile aggiunto a `angelo-caramia.html` e `amodio.html`, con foto reali ottimizzate (600×600).
9. **4 nuove immagini reali negli articoli**: `autostima1.html` (immagine di apertura sostituita, immagine intermedia mai fornita rimossa) e `universita_ansia.html` (immagine di apertura sostituita — puntava a file inesistente — e 2 nuove immagini intermedie aggiunte).
10. **Nuove pagine servizio**: `test.html` (Test psicologici) e `workbook.html` (Workbook), con relativo aggiornamento del menu Servizi, delle card in `servizi.html` e della `sitemap.xml`.

Per il dettaglio esatto di ogni modifica, consulta la cronologia dei commit (`git log`) — ogni commit descrive cosa è cambiato e perché.

## Decisioni prese

- Repository di lavoro: `bozza2sitoempowerlab` (senza spazi, privata).
- Il codice sorgente del sito pubblico definitivo non resterà esposto su GitHub — da gestire in fase di migrazione futura, non ora.
- Gli URL placeholder in `og:url`/`canonical` (`https://tuosito.github.io/...`) andranno sostituiti quando sarà scelto il dominio definitivo.
- Meta description e dati strutturati SEO restano congelati (non si toccano) fino a quando Angelo non dichiarerà il sito sostanzialmente completo — li rifinirà lui manualmente.
- Prima di ogni sessione di lavoro si risincronizza sempre con il repository remoto (`git fetch` + eventuale `git merge`), perché Angelo modifica spesso le pagine direttamente da GitHub.

## Problemi noti / cose da tenere d'occhio

- Il pulsante `.faq-cta-button`, al passaggio del mouse, cambia colore del testo in arancione — confermato voluto da Angelo, non un bug.
- Form contatti con iframe segnaposto (`INCOLLA_QUI_LINK_GOOGLE_FORM`) non ancora compilato.
- Email nel footer e in `contatti.html` è provvisoria (`emailtemporanea@gmail.com`).
- `autostima1.html`: il sottotitolo dell'articolo è ancora testo segnaposto del template, pubblicato così sulla pagina live.
- `universita_ansia.html`: la citazione finale ha ancora testo segnaposto (`« CITAZIONE»` / `AUTORE, LIBRO (1994)`).
- `immagine-autostima-1.jpeg` è di risoluzione piuttosto bassa (216×233px) rispetto al banner a piena larghezza — può apparire leggermente sfocata.

## Contenuti ancora da scrivere (lavoro di Angelo)

Bio completa in `chi-siamo.html`, `empowerlab.html`; sottotitolo di `autostima1.html`; citazione finale di `universita_ansia.html`; le pagine di dettaglio corsi/percorsi/profili non ancora scritte; link reale del Google Form in `contatti.html`; email definitiva; descrizioni definitive dei 3 workbook (attualmente generiche); eventuali test autosomministrabili da collegare a `test.html`.

## Prossimi passi possibili (roadmap, da approvare uno alla volta)

Da valutare con Angelo, in ordine: contenuti ancora mancanti (vedi sopra); primo test psicologico da collegare a `test.html`; sistema di acquisto per i workbook; più avanti, eventuale sistema di build leggero (Jekyll) e predisposizione per la futura area commerciale/e-commerce.
