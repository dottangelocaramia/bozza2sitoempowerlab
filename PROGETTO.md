# Progetto Sito Empower Lab — guida di orientamento

*Questo file vive dentro il repository e va aggiornato quando cambia qualcosa di rilevante. Serve per ritrovare velocemente il filo del progetto anche dopo giorni o settimane di pausa.*

*Ultimo aggiornamento: 27 agosto 2026*

## Dove siamo

Questo repository (**Bozza2 Sito Empower Lab**) è l'ambiente di lavoro del sito. È una copia della repository originale (`empowerlab-caramia-amodio.github.io`, di Angelo), che resta intoccata come riferimento. Tutte le modifiche si fanno qui.

Stato: **Fase 1 conclusa** (analisi + prime correzioni tecniche approvate). Nessuna migrazione, dominio o pubblicazione definitiva è stata fatta o richiesta.

## Come è fatto il sito (architettura)

Il sito è statico: niente framework, niente build. Ogni pagina è un file `.html` indipendente in radice. Header e footer **non** sono scritti dentro ogni pagina: ogni pagina ha un `<div id="header"></div>` e un `<div id="footer"></div>` vuoti, riempiti a runtime dal browser tramite JavaScript che scarica `template/header.html` e `template/footer.html` e li inserisce nella pagina. Questo evita di duplicare header/footer in ogni file, ma significa anche che quel contenuto non è visibile leggendo il semplice codice sorgente HTML — è normale, succede via `js/menu.js` e uno script inline in ogni pagina.

```
index.html, chi-siamo.html, servizi.html, ecc.   → pagine del sito, una per file
css/style.css                                     → unico foglio di stile per tutto il sito
js/menu.js                                        → carica l'header, gestisce menu mobile e dropdown "Servizi"
images/logo.png                                   → unico asset immagine attualmente nel repo
template/header.html, template/footer.html        → header e footer condivisi, iniettati via JS
template/template-articolo-seo.html               → scheletro pronto per scrivere un nuovo articolo
template/template-servizio.html                   → scheletro pronto per scrivere una nuova pagina servizio
Backup e prova/                                   → versioni precedenti/di prova (non in uso, da valutare se tenere)
```

## Mappa della navigazione (cosa punta a cosa)

Il menu principale (in `template/header.html`) collega: Home, Chi siamo, EmpowerLab, Servizi (dropdown: Supporto psicologico, Formazione, Percorsi), Articoli, FAQ, Contatti.

La home (`index.html`) rimanda inoltre a: Supporto psicologico, Formazione, Percorsi, Chi siamo, Contatti, FAQ.

`corsi.html` e `percorsi.html` contengono già link verso pagine di dettaglio non ancora scritte (es. `time-management.html`, `statistica.html`, `work-life.html`, `orientamento-carriera.html`, ecc.) — sono contenuti futuri già previsti nel menu, non errori.

`angelo-caramia.html` rimanda a 4 pagine di approfondimento non ancora scritte (ansia universitaria, metodo di studio, ecc.). `amodio.html` rimanda a 4 "servizio1-4.html" segnaposto, in attesa dei contenuti di Rosa Amodio.

## Cosa è stato fatto finora

1. **Copia e verifica** — Bozza2 creata da una copia esatta dell'originale (storico commit incluso), verificata identica.
2. **Audit completo** — analisi di struttura, SEO, contenuti, problemi e opportunità (vedi cronologia dei commit git per il dettaglio).
3. **Correzioni tecniche rapide**: rimossa la pagina di prova `esempio-con-chat.html` (confermato non utilizzata); corretto il link rotto in home che puntava a `percorsi-studenti.html` invece di `percorsi.html`; aggiunto l'attributo `lang="it"` mancante su 4 pagine.
4. **CSS ripulito**: eliminate due duplicazioni di regole nel foglio di stile (`.corso-card` e la famiglia `.faq-cta`), senza cambiare l'aspetto visivo del sito.
5. **SEO on-page**: aggiunti meta description, keywords, robots, Open Graph e canonical a tutte le pagine principali, sul modello già presente nel template articolo.
6. **SEO tecnica**: creati `sitemap.xml` e `robots.txt`; rimosso dal CSS il riferimento a un'immagine hero (`hero.jpg`) inesistente nel repository; ottimizzato `images/logo.png` (da 306 KB a 180 KB circa).
7. **Dati strutturati (schema.org)**: aggiunti dati JSON-LD su `index.html` (ProfessionalService), `angelo-caramia.html` e `amodio.html` (Person), `faq.html` (FAQPage, generata dalle 17 domande/risposte reali già pubblicate), `autostima1.html` e `universita_ansia.html` (Article) — tutti basati solo su contenuti già presenti nel sito.
8. **Correzioni di contenuto scoperte durante il punto 7**: il blocco meta SEO di `autostima1.html` era ancora il testo segnaposto del template (mai completato) — ora sostituito con contenuti reali; in `universita_ansia.html` l'`og:image` puntava a un file inesistente e il `canonical` aveva uno slug diverso dal nome file reale — entrambi corretti.

Per il dettaglio esatto di ogni modifica, consulta la cronologia dei commit (`git log`) — ogni commit descrive cosa è cambiato e perché.

## Decisioni prese

- Repository di lavoro: `bozza2sitoempowerlab` (senza spazi, privata).
- Il codice sorgente del sito pubblico definitivo non resterà esposto su GitHub — da gestire in fase di migrazione futura, non ora.
- Gli URL placeholder in `og:url`/`canonical` (`https://tuosito.github.io/...`) andranno sostituiti quando sarà scelto il dominio definitivo — è la stessa convenzione già usata da Angelo nel template originale.

## Problemi noti / cose da tenere d'occhio

- Il pulsante `.faq-cta-button`, al passaggio del mouse, cambia colore del testo in arancione (`#f4a261`) — **confermato da Angelo: è voluto, non un bug.** Nessuna correzione necessaria.
- Form contatti con iframe segnaposto (`INCOLLA_QUI_LINK_GOOGLE_FORM`) non ancora compilato.
- Email nel footer e in `contatti.html` è provvisoria (`emailtemporanea@gmail.com`).
- Nessun'immagine reale ancora disponibile per gli articoli (`autostima1.html`, `universita_ansia.html`): nei dati Open Graph/schema.org si usa temporaneamente il logo al posto di una foto specifica dell'articolo.

## Contenuti ancora da scrivere (lavoro di Angelo)

Bio completa in `chi-siamo.html`, `angelo-caramia.html`, `amodio.html`; presentazione del progetto in `empowerlab.html`; le pagine di dettaglio corsi/percorsi/profili elencate sopra; link reale del Google Form in `contatti.html`; email definitiva.

## Prossimi passi possibili (roadmap, da approvare uno alla volta)

Punti 1 (SEO tecnica) e 3 (dati strutturati) della roadmap del report di audit sono completati. Restano da valutare, in ordine: eventuali immagini reali per gli articoli; completamento dei contenuti ancora mancanti (vedi sopra); più avanti, l'eventuale valutazione di un sistema di build leggero (Jekyll) e la predisposizione per la futura area commerciale.
