# Progetto Sito Empower Lab — guida di orientamento

*Questo file vive dentro il repository e va aggiornato quando cambia qualcosa di rilevante. Serve per ritrovare velocemente il filo del progetto anche dopo giorni o settimane di pausa.*

*Ultimo aggiornamento: 27 agosto 2026*

## Dove siamo

Questo repository (**Bozza2 Sito Empower Lab**) è l'ambiente di lavoro del sito. È una copia della repository originale (`empowerlab-caramia-amodio.github.io`, di Angelo), che resta intoccata come riferimento. Tutte le modifiche si fanno qui.

Stato: Fase 1 e roadmap tecnica (SEO on-page/tecnica + dati strutturati) concluse. Aggiunte foto profilo, nuove immagini reali negli articoli, due nuove pagine servizio (Test psicologici, Workbook), articoli.html riorganizzata in tendina colorata per argomento con link ipertestuali tra articoli, email uniformata a `empowerlabpsy@gmail.com` in tutto il sito live, sezione form di contatti.html ridisegnata con una CTA verso un futuro Google Form (ancora da creare da Angelo) e nuova pagina `privacy.html` con l'informativa sul trattamento dati. Nessuna migrazione, dominio o pubblicazione definitiva è stata fatta o richiesta.

## Come è fatto il sito (architettura)

Il sito è statico: niente framework, niente build. Ogni pagina è un file `.html` indipendente in radice. Header e footer **non** sono scritti dentro ogni pagina: ogni pagina ha un `<div id="header"></div>` e un `<div id="footer"></div>` vuoti, riempiti a runtime dal browser tramite JavaScript che scarica `template/header.html` e `template/footer.html` e li inserisce nella pagina. Questo evita di duplicare header/footer in ogni file, ma significa anche che quel contenuto non è visibile leggendo il semplice codice sorgente HTML — è normale, succede via `js/menu.js` e uno script inline in ogni pagina.

```
index.html, chi-siamo.html, servizi.html, ecc.   → pagine del sito, una per file
test.html, workbook.html                          → pagine servizio (test psicologici, workbook digitali)
privacy.html                                      → informativa privacy / trattamento dati, collegata da contatti.html
css/style.css                                     → unico foglio di stile per tutto il sito
js/menu.js                                        → carica l'header, gestisce menu mobile e dropdown "Servizi"
images/                                           → asset immagine (logo, foto profilo, immagini articoli)
template/header.html, template/footer.html        → header e footer condivisi, iniettati via JS
template/template-articolo-seo.html               → scheletro pronto per scrivere un nuovo articolo
template/template-servizio.html                   → scheletro pronto per scrivere una nuova pagina servizio
Backup e prova/                                   → versioni precedenti/di prova (non in uso, da valutare se tenere)
```

## Mappa della navigazione (cosa punta a cosa)

Il menu principale (in `template/header.html`) collega: Home, Chi siamo, EmpowerLab, Servizi (dropdown: Supporto psicologico, Formazione, Percorsi, Test, Workbook), Articoli, FAQ, Contatti.

La home (`index.html`) rimanda inoltre a: Supporto psicologico, Formazione, Percorsi, Test, Workbook, Chi siamo, Contatti, FAQ.

`corsi.html` e `percorsi.html` contengono già link verso pagine di dettaglio non ancora scritte (es. `time-management.html`, `statistica.html`, `work-life.html`, `orientamento-carriera.html`, ecc.) — sono contenuti futuri già previsti nel menu, non errori.

`angelo-caramia.html` e `amodio.html` mostrano anche una foto profilo (componente `.profilo-intestazione`/`.foto-profilo` in `css/style.css`) e rimandano a pagine di approfondimento non ancora scritte.

`test.html` contiene un'area segnaposto in attesa dei singoli test autosomministrabili futuri. `workbook.html` presenta i 3 workbook reali forniti da Angelo (descrizioni generiche, da rifinire), non ancora acquistabili.

`articoli.html` è organizzata in una tendina colorata per argomento (Autostima, Ansia, Articoli pubblicati su riviste), ciascuna con una breve descrizione visibile e i link agli articoli dentro; i due articoli reali (`autostima1.html`, `universita_ansia.html`) si linkano a vicenda tramite parole ipertestuali (classe `.link-articolo`).

`contatti.html` presenta i canali WhatsApp ed email, il link a Instagram, e una CTA (`.contatti-form-cta`) verso il futuro Google Form (il link reale va incollato da Angelo al posto del placeholder `INCOLLA_QUI_LINK_GOOGLE_FORM`), con una nota che rimanda a `privacy.html` prima dell'invio.

## Cosa è stato fatto finora

1. **Copia e verifica** — Bozza2 creata da una copia esatta dell'originale (storico commit incluso), verificata identica.
2. **Audit completo** — analisi di struttura, SEO, contenuti, problemi e opportunità.
3. **Correzioni tecniche rapide**: pagina di prova rimossa, link rotto corretto, `lang="it"` aggiunto.
4. **CSS ripulito**: duplicazioni eliminate senza cambiare l'aspetto visivo.
5. **SEO on-page**: meta description, keywords, robots, Open Graph e canonical su tutte le pagine principali.
6. **SEO tecnica**: `sitemap.xml`, `robots.txt`, immagine hero inesistente rimossa dal CSS, logo ottimizzato.
7. **Dati strutturati (schema.org)**: JSON-LD su index (ProfessionalService), profili (Person), FAQ (FAQPage), articoli Autostima/Ansia universitaria (Article).
8. **Foto profilo**: componente riutilizzabile aggiunto a `angelo-caramia.html` e `amodio.html`, con foto reali ottimizzate (600×600).
9. **4 nuove immagini reali negli articoli**, poi ridimensionate per evitare tagli/sgranature.
10. **Nuove pagine servizio**: `test.html` e `workbook.html`, con relativo aggiornamento del menu Servizi, delle card in home/servizi.html e della `sitemap.xml`.
11. **articoli.html riorganizzata** in tendina colorata per argomento, con link ipertestuali tra i due articoli reali.
12. **FAQ complete** su tutte le sezioni (Percorsi, Formazione, Test, Workbook) — nessun segnaposto rimasto.
13. **Email uniformata** a `empowerlabpsy@gmail.com` in tutto il sito live (footer, contatti, schema.org di index.html).
14. **Sezione form di contatti.html ridisegnata**: CTA verso il futuro Google Form + nota privacy obbligatoria.
15. **Nuova pagina `privacy.html`**: informativa sul trattamento dati, basata sui fatti dichiarati da Angelo, collegata da contatti.html e in sitemap.xml.

Per il dettaglio esatto di ogni modifica, consulta la cronologia dei commit (`git log`) — ogni commit descrive cosa è cambiato e perché.

## Decisioni prese

- Repository di lavoro: `bozza2sitoempowerlab` (senza spazi, privata).
- Il codice sorgente del sito pubblico definitivo non resterà esposto su GitHub — da gestire in fase di migrazione futura, non ora.
- Gli URL placeholder in `og:url`/`canonical` (`https://tuosito.github.io/...`) andranno sostituiti quando sarà scelto il dominio definitivo.
- Meta description e dati strutturati SEO restano congelati (non si toccano) fino a quando Angelo non dichiarerà il sito sostanzialmente completo — eccezione già applicata una volta su istruzione esplicita e puntuale (uniformazione email).
- Prima di ogni sessione di lavoro si risincronizza sempre con il repository remoto (`git fetch` + eventuale `git merge`), perché Angelo modifica spesso le pagine direttamente da GitHub.
- Il modulo di contatto sarà un Google Form creato e configurato manualmente da Angelo sulla propria email; il sito predispone solo la CTA con un placeholder per il link.
- `privacy.html` è una bozza tecnica scritta da Claude in base ai soli fatti dichiarati da Angelo: da far rivedere da un legale/consulente privacy prima della pubblicazione definitiva (non costituisce consulenza legale).

## Problemi noti / cose da tenere d'occhio

- Il pulsante `.faq-cta-button`, al passaggio del mouse, cambia colore del testo in arancione — confermato voluto da Angelo, non un bug.
- Form contatti: CTA pronta, ma il link reale al Google Form (placeholder `INCOLLA_QUI_LINK_GOOGLE_FORM` in `contatti.html`) va ancora incollato da Angelo una volta creato il modulo.
- `autostima1.html`: sottotitolo reale già inserito da Claude (da rileggere/rifinire secondo il gusto di Angelo).
- `universita_ansia.html`: la citazione finale ha ancora testo segnaposto (`« CITAZIONE»` / `AUTORE, LIBRO (1994)`).
- `Backup e prova/contatti back.html` contiene ancora la vecchia email placeholder (file non in uso, lasciato invariato).

## Contenuti ancora da scrivere (lavoro di Angelo)

Bio completa in `chi-siamo.html`, `empowerlab.html`; citazione finale di `universita_ansia.html`; le pagine di dettaglio corsi/percorsi/profili non ancora scritte; link reale del Google Form in `contatti.html` (v. lista campi consigliata condivisa in chat); descrizioni definitive dei 3 workbook (attualmente generiche); eventuali test autosomministrabili da collegare a `test.html`; revisione legale di `privacy.html`.

## Prossimi passi possibili (roadmap, da approvare uno alla volta)

Da valutare con Angelo, in ordine: contenuti ancora mancanti (vedi sopra); primo test psicologico da collegare a `test.html`; sistema di acquisto per i workbook; più avanti, eventuale sistema di build leggero (Jekyll) e predisposizione per la futura area commerciale/e-commerce.
