# Progetto Sito Empower Lab — guida di orientamento

*Questo file vive dentro il repository e va aggiornato quando cambia qualcosa di rilevante. Serve per ritrovare velocemente il filo del progetto anche dopo giorni o settimane di pausa.*

*Ultimo aggiornamento: 8 ottobre 2026 (workbook 1-3 completati con i contenuti di Angelo; main `0573894`)*

## Dove siamo

Questo repository (**Bozza2 Sito Empower Lab**) è l'ambiente di lavoro del sito. È una copia della repository originale (`empowerlab-caramia-amodio.github.io`, di Angelo), che resta intoccata come riferimento. Tutte le modifiche si fanno qui. Esiste inoltre un backup completo (file + storico Git) esterno a GitHub, salvato sul Mac di Angelo in `Downloads/Backup-sito-EmpowerLab/`.

**Roadmap commerciale concordata (28/08/2026)**: fase iniziale = sito statico, ogni servizio richiede un contatto diretto prima dell'acquisto (fase attuale); fase intermedia = integrazione di un sistema di pagamento (probabilmente Stripe) sul sito esistente; fase finale = login utenti, area riservata, acquisto diretto senza intervento di Angelo. Si lavora ora solo sulla fase iniziale.

Stato: Fase 1 e roadmap tecnica concluse; sviluppo progressivo del prototipo statico in corso. Fatti: SEO di tutto il sito (servizi, profili, home, articoli), refusi, feedback reali, privacy generica (stand-by). Da fare prima del dominio: rifinire i contenuti bozza (altri workbook in arrivo da Angelo, corsi, tutoraggio, tutoraggio-dsa, training-autogeno, comunicazione, time-management, apprendimento, statistica, ai-machine-learning, work-life, orientamento-carriera). Dominio, migrazione, pagamenti e area riservata sono in attesa (decisione di Angelo).

## Come è fatto il sito (architettura)

Il sito è statico: niente framework, niente build. Ogni pagina è un file `.html` indipendente in radice. Header e footer **non** sono scritti dentro ogni pagina: ogni pagina ha un `<div id="header"></div>` e un `<div id="footer"></div>` vuoti, riempiti a runtime dal browser tramite JavaScript che scarica `template/header.html` e `template/footer.html` e li inserisce nella pagina.

```
index.html, chi-siamo.html, servizi.html, ecc.   → pagine del sito, una per file
test.html                                         → pagina servizio Test psicologici, con 3 card verso autostima-test.html / ansia-stress-depressione-test.html / tratti-personalita-test.html
autostima-test.html, ansia-stress-depressione-test.html, tratti-personalita-test.html → schede di dettaglio per singoli test (ex test1/2/3.html, rinominate il 06/10/2026)
workbook.html                                     → pagina servizio Workbook, con 3 card verso esp1/2/3-workbook.html
esp1-workbook.html, esp2-workbook.html, esp3-workbook.html    → schede di dettaglio per i 3 workbook reali (testo interno bozza)
autostima1.html, autostima2.html                  → articoli Autostima (autostima2.html in attesa di contenuto reale)
ansia-universita.html                             → articolo Ansia (rinominato da universita_ansia.html il 28/08/2026)
privacy.html                                      → informativa privacy / trattamento dati, collegata da contatti.html
css/style.css                                     → unico foglio di stile per tutto il sito
js/menu.js                                        → carica l'header, gestisce menu mobile e dropdown "Servizi"
images/                                           → asset immagine (logo, foto profilo, immagini articoli)
template/header.html, template/footer.html        → header e footer condivisi, iniettati via JS
template/template-articolo-seo.html               → scheletro pronto per scrivere un nuovo articolo
template/template-servizio.html                   → scheletro pronto per scrivere una nuova pagina servizio
Backup e prova/                                   → versioni precedenti/di prova ("contatti back.html" rimosso il 28/08/2026)
```

## Mappa della navigazione (cosa punta a cosa)

Il menu principale (in `template/header.html`) collega: Home, Chi siamo, EmpowerLab, Servizi (dropdown: Supporto psicologico, Formazione, Percorsi, Test, Workbook), Articoli, FAQ, Contatti.

`test.html` mostra 3 card (Autostima / Benessere emotivo / Personalità) che portano a `autostima-test.html`, `ansia-stress-depressione-test.html`, `tratti-personalita-test.html`. `workbook.html` mostra 3 card che portano a `esp1-workbook.html`, `esp2-workbook.html`, `esp3-workbook.html` (i 3 workbook reali forniti da Angelo). Ogni pagina di dettaglio ha un bottone "Contattaci" (attivo, verso contatti.html) e un bottone "Acquista" volutamente disattivato, con nota che spiega che per ora l'acquisto richiede un contatto diretto — da riattivare quando si passerà alla fase intermedia con i pagamenti.

`articoli.html` è organizzata in una tendina colorata per argomento (Autostima, Ansia, Articoli pubblicati su riviste). Il blocco Autostima ora contiene anche una voce per `autostima2.html` (titolo/descrizione segnaposto, in attesa del contenuto reale). I due articoli reali (`autostima1.html`, `ansia-universita.html`) si linkano a vicenda tramite parole ipertestuali (classe `.link-articolo`).

`contatti.html` presenta i canali WhatsApp ed email, il link a Instagram, e una CTA (`.contatti-form-cta`) che apre il Google Form reale di Angelo, con una nota che rimanda a `privacy.html` prima dell'invio.

## Cosa è stato fatto finora (sintesi; il dettaglio è in `git log`)

1. **Base e audit (26–28/08/2026)** — Bozza2 creata come copia verificata dell'originale; audit completo, correzioni tecniche, rebranding "Empower Lab Psy", SEO di base e dati strutturati su tutto il sito.
2. **Struttura e pagine (28–29/08/2026)** — nuove pagine: privacy, tutoraggio, tutoraggio-dsa, training-autogeno, gestione-lutto-death-education, formazione-fomo, confronto-social, metodo-studio, schede test e workbook; profili di Angelo e Rosa rinnovati (regola link: servizi solo nel box "In breve", articoli solo nel testo); pulsante WhatsApp sito-wide; menu "Chi siamo" corretto; servizi/Formazione/articoli/chi-siamo ridisegnati a card; palette colori e icone per argomento (`--tema-colore`).
3. **Correzioni di bug reali** — `js/scroll-reveal.js` mancante in amodio/test; griglia home sovrapposta (classe dedicata `.servizi-principali-grid`); `<strng>` e `<<script` refusi; tag sbilanciati.
4. **Immagini e articoli (02–06/10/2026)** — immagini articoli caricate da Angelo e collegate; ritaglio figure sistemato; articolo sul lutto con bibliografia verificata; schede test rinominate col costrutto misurato; percorsi.html con card grandi.
5. **Feedback e privacy (06/10/2026)** — feedback reali inseriti da Angelo, struttura HTML riparata; `privacy.html` riscritta come informativa generica (in stand-by).
6. **Articoli: link e SEO (08/10/2026)** — link interni tra articoli e verso supporto-psicologico; title, og/twitter, JSON-LD Article arricchito, immagini reali, lastmod.
7. **Giro refusi + SEO sito intero (08/10/2026, commit `b5d1d22`, `3a9dd15`, `fe50f63`)** —
   - *Footer*: rimosso il link "Privacy" (resta in contatti.html e nelle 11 pagine servizio, accanto al modulo). Link "Colloquio clinico" nel profilo di Rosa confermato da Angelo.
   - *Refusi corretti*: home ("missione di offrire", "ti accompagniamo", "tue capacità", "focus sul benessere"), feedback ("infinite", "perché", "preparare", "implementato", "emozioni", "su"), test ("risuona"), autostima2 ("concedersi"), FAQ ("percorsi", "transizioni"), chi-siamo ("sé", "Psicoterapeuta sistemica relazionale"), contatti ("verrà"), profilo Rosa ("relazionale"). Corretti anche in corsi.html.
   - *SEO (modifiche visibili = proposte di Claude, facilmente rimovibili)*: titoli/description "a Bari e online" su 9 pagine servizio (Service con `@id`, provider, `areaServed` Bari, `availableChannel` presenza/online); "supporto esami Bari" puntato su tutoraggio.html (title, description, paragrafo con link ad ansia-universita, metodo-studio, supporto-psicologico); 5 corsi (Course con provider/lingua); profili (Person con Albo 8380/8379, `memberOf` Ordine Psicologi Puglia [dedotto da "Albo Puglia", da confermare], `workLocation` Bari, `knowsAbout`; riga "Bari · colloqui in presenza e online"; frase finale in grigio corsivo); home (ProfessionalService con alternateName Empower Lab / Caramia / Caramia Amodio, contactPoint, catalogo servizi, WebSite; **un solo H1** — i quattro titoli di sezione sono h2 con classe `.titolo-sezione-home`, stesso aspetto; riga introduttiva in corsivo con link ai servizi); contatti (ContactPage + Breadcrumb); chi-siamo (AboutPage); servizi (ItemList); FAQ (risposta "in presenza (a Bari) che online" + Breadcrumb); og:site_name, og:image:alt e twitter:* su tutte le pagine; Breadcrumb su test, workbook, formazione-fomo; description accorciate a ≤160; sitemap con lastmod.
8. **Rifiniture richieste da Angelo (08/10/2026, commit `fe50f63`)** — home: "Psicologo Bari" (title/description/riga introduttiva; non penalizza la SEO, Google ignora la preposizione "a"); riga introduttiva più piccola, corsivo, font serif e grigio-blu; profili: frase "Colloqui a Bari, in presenza, e online…" piccola, corsivo, grigia; supporto-psicologico: paragrafo su sede/esami spostato in fondo a "Cos'è?"; servizi.html: card Percorsi = work-life balance, motivazione, coaching; card Formazione = nomina il metodo di studio; "Empower Lab Psy AC" → "Empower Lab Psy – Amodio & Caramia".

9. **Workbook 1-3 (08/10/2026, commit `0573894`)** — contenuti forniti da Angelo (titolo con "?", sottotitolo "Esperimento #0N", frase in corsivo, Cos'è, Il meccanismo, Cosa troverai, Per chi è, Info pratiche) organizzati con sezioni, parole chiave in grassetto e link interni (supporto-psicologico, autostima1/2, confronto-social). Categorie: "Autostima e Giudizio degli Altri" (corretto il 08/10 da "Autostima e Decisioni"), "Autostima e Confronto Sociale", "Ansia e Ossessioni" (la terza prima era "Ansia / Pensieri Ossessivi"); in ogni pagina workbook l'etichetta sopra il titolo è preceduta da "Workbook – " (regola valida anche per i futuri workbook). Nuove classi CSS `.workbook-frase` e `.workbook-nota`. Card di workbook.html, title/description/keywords e breadcrumb allineati. Refusi sistemati: "non sono a capire"→"non solo a capire", "l' hai"→"l'hai", "pratico e concreto"→"pratiche e concrete" (workbook3). Chi-siamo: testo aggiornato da Angelo (merge `38f4342`). Test: contenuti confermati da Angelo così come sono.

10. **Workbook: rifiniture (08/10/2026)** — file rinominati `workbook1/2/3.html` → `esp1-workbook.html`, `esp2-workbook.html`, `esp3-workbook.html` (link, canonical, og:url, breadcrumb e sitemap allineati; i vecchi URL non esistono più); frase ad effetto in box semitrasparente con doppia linea fine (`.workbook-frase`); "Cosa troverai all'interno" in 6 riquadri con icona e numero (`.workbook-card-grid`/`.workbook-card`); link dagli articoli sull'autostima ai workbook: autostima1 "approvazione esterna" → esp1, autostima1 "dialogo interno" → esp3, autostima2 "asticella" → esp2.

## Decisioni prese

- Repository di lavoro: `bozza2sitoempowerlab` (senza spazi, privata). Backup esterno periodico sul Mac di Angelo.
- **Roadmap commerciale in 3 fasi**: statico con contatto diretto (ora) → pagamenti (Stripe probabile) → login/area riservata/acquisto autonomo.
- Il codice sorgente del sito pubblico definitivo non resterà esposto su GitHub — da gestire in fase di migrazione futura.
- URL placeholder `https://tuosito.github.io/...` mantenuti in attesa del dominio definitivo.
- SEO: il congelamento è superato — il 08/10/2026 Angelo ha chiesto di ottimizzare tutto il sito ("fai il massimo"); da ora le modifiche SEO si possono fare, spiegandole. Le frasi visibili aggiunte da Claude vanno sempre segnalate come tali.
- Colori/icone **non** estesi a workbook e test (decisione di Angelo, 08/10/2026); corsi.html non toccata (da chiedere).
- Il modulo di contatto è un Google Form creato e configurato da Angelo (link reale già inserito in contatti.html).
- `privacy.html` è una bozza tecnica, non consulenza legale: da far rivedere da un legale/consulente privacy.
- I bottoni "Acquista" nelle pagine test/workbook sono disattivati di proposito, coerentemente con la fase statica attuale.

## Problemi noti / cose da tenere d'occhio

- ~~Segnaposto feedback in Formazione/corsi/percorsi/supporto-psicologico/workbook~~ **Risolto (06/10/2026)**: Angelo ha inserito i feedback reali; verificati e HTML riparato.
- **Privacy**: informativa generica completata il 06/10/2026 (stand-by); il link "Privacy" non è più nel footer (08/10/2026). Restano: caselle obbligatorie nel Google Form (Angelo), data di pubblicazione `[[data di pubblicazione]]`, revisione legale, **ricontrollo completo dopo la migrazione**; P.IVA/Albo nel footer non necessari per ora (decisione di Angelo; art. 7 D.Lgs. 70/2003 da verificare con il commercialista se si cambia idea).
- Il pulsante `.faq-cta-button`, al passaggio del mouse, cambia colore del testo in arancione — confermato voluto da Angelo, non un bug.
- Tutti i testi-bozza scritti da Claude (FAQ, descrizioni workbook, contenuto di esp1-3-workbook, sottotitolo autostima1.html, categorie articoli.html) vanno riletti e rifiniti da Angelo.
- ~~`esempio-con-chat.html`: scopo ancora da chiarire con Angelo.~~ **Chiuso (06/10/2026)**: la pagina era già stata eliminata il 26/08/2026 nelle "Correzioni tecniche rapide (Fase 1)" approvate da Angelo (commit `b2ea7d8`); non esiste più nel repository e nulla la richiama.
- Il footer (template/footer.html) mostra la tagline abbreviata "Psicologia e Formazione" (senza "Crescita personale"): **confermato da Angelo (29/08/2026)** che va bene così, non va uniformata.
- training-autogeno.html, tutoraggio.html e le 5 pagine corsi restano contenuti bozza scritti da Claude, da rileggere e rifinire da Angelo.
- ~~Alcuni file (chi-siamo.html, contatti.html, index.html) avevano piccoli sbilanciamenti preesistenti tra tag di apertura/chiusura~~ **Risolto (29/08/2026)**: i 3 sbilanciamenti pre-esistenti sono stati corretti (rimossi due `</div>` orfani/duplicati in chi-siamo.html e index.html, aggiunta una `</a>` mancante nel titolo Instagram di contatti.html), senza alcuna variazione visiva.

## Contenuti ancora da scrivere (lavoro di Angelo)

Bio completa in `empowerlab.html`; pagine corsi e percorsi da rifinire; contenuto reale (o scelta dei workbook definitivi) per `workbook1/2/3.html`; revisione legale di `privacy.html`.

## Prossimi passi possibili (roadmap, da approvare uno alla volta)

Fase statica attuale: contenuti ancora mancanti (vedi sopra). Fase intermedia (su indicazione di Angelo): integrazione di un sistema di pagamento (probabilmente Stripe) per i servizi già pronti. Fase finale: login utenti e area riservata per acquisti autonomi.
