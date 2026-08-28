# Progetto Sito Empower Lab — guida di orientamento

*Questo file vive dentro il repository e va aggiornato quando cambia qualcosa di rilevante. Serve per ritrovare velocemente il filo del progetto anche dopo giorni o settimane di pausa.*

*Ultimo aggiornamento: 28 agosto 2026 (empowerlab.html personalizzata, 5 pagine corsi, menu Chi siamo, modulo contatto supporto psicologico)*

## Dove siamo

Questo repository (**Bozza2 Sito Empower Lab**) è l'ambiente di lavoro del sito. È una copia della repository originale (`empowerlab-caramia-amodio.github.io`, di Angelo), che resta intoccata come riferimento. Tutte le modifiche si fanno qui. Esiste inoltre un backup completo (file + storico Git) esterno a GitHub, salvato sul Mac di Angelo in `Downloads/Backup-sito-EmpowerLab/`.

**Roadmap commerciale concordata (28/08/2026)**: fase iniziale = sito statico, ogni servizio richiede un contatto diretto prima dell'acquisto (fase attuale); fase intermedia = integrazione di un sistema di pagamento (probabilmente Stripe) sul sito esistente; fase finale = login utenti, area riservata, acquisto diretto senza intervento di Angelo. Si lavora ora solo sulla fase iniziale.

Stato: Fase 1 e roadmap tecnica concluse. Email uniformata ovunque, form contatti collegato al Google Form reale di Angelo, nuova pagina privacy.html, `universita_ansia.html` rinominata in `ansia-universita.html`, `autostima2.html` completato da Angelo con il contenuto reale (autostima da prestazione), create le pagine di dettaglio per i 3 test e i 3 workbook (con invito a contattarci e bottone "Acquista" per ora disattivato). Effettuata un'ottimizzazione SEO estesa a tutto il sito (titoli, meta description, keywords, Open Graph, dati strutturati schema.org — BreadcrumbList e Service — e link interni), con priorità sulle pagine servizi, articoli e profilo, in base ai soli contenuti reali già presenti. `empowerlab.html` completata con il testo reale di Angelo, poi impaginata una seconda volta con uno stile più personalizzato (hero, citazione in evidenza, sezione con sfondo, griglia servizi) su sua richiesta esplicita — in attesa della sua valutazione. Rebranding completo del sito da "Empower Lab" a "Empower Lab Psy" per uniformità con Instagram ed email; icone Instagram cliccabili ingrandite del 50%. Create 5 pagine di dettaglio corsi (bozza, da rifinire da Angelo), menu "Chi siamo" trasformato in tendina con link diretti ai due profili, aggiunto modulo di contatto a supporto-psicologico.html. Nessuna migrazione, dominio o pubblicazione definitiva è stata fatta o richiesta.

## Come è fatto il sito (architettura)

Il sito è statico: niente framework, niente build. Ogni pagina è un file `.html` indipendente in radice. Header e footer **non** sono scritti dentro ogni pagina: ogni pagina ha un `<div id="header"></div>` e un `<div id="footer"></div>` vuoti, riempiti a runtime dal browser tramite JavaScript che scarica `template/header.html` e `template/footer.html` e li inserisce nella pagina.

```
index.html, chi-siamo.html, servizi.html, ecc.   → pagine del sito, una per file
test.html                                         → pagina servizio Test psicologici, con 3 card verso test1/2/3.html
test1.html, test2.html, test3.html                → schede di dettaglio per singoli test (bozza di esempio)
workbook.html                                     → pagina servizio Workbook, con 3 card verso workbook1/2/3.html
workbook1.html, workbook2.html, workbook3.html    → schede di dettaglio per i 3 workbook reali (testo interno bozza)
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

`test.html` mostra 3 card (Autostima/Ansia/Stress, bozze di esempio) che portano a `test1.html`, `test2.html`, `test3.html`. `workbook.html` mostra 3 card che portano a `workbook1.html`, `workbook2.html`, `workbook3.html` (i 3 workbook reali forniti da Angelo). Ogni pagina di dettaglio ha un bottone "Contattaci" (attivo, verso contatti.html) e un bottone "Acquista" volutamente disattivato, con nota che spiega che per ora l'acquisto richiede un contatto diretto — da riattivare quando si passerà alla fase intermedia con i pagamenti.

`articoli.html` è organizzata in una tendina colorata per argomento (Autostima, Ansia, Articoli pubblicati su riviste). Il blocco Autostima ora contiene anche una voce per `autostima2.html` (titolo/descrizione segnaposto, in attesa del contenuto reale). I due articoli reali (`autostima1.html`, `ansia-universita.html`) si linkano a vicenda tramite parole ipertestuali (classe `.link-articolo`).

`contatti.html` presenta i canali WhatsApp ed email, il link a Instagram, e una CTA (`.contatti-form-cta`) che apre il Google Form reale di Angelo, con una nota che rimanda a `privacy.html` prima dell'invio.

## Cosa è stato fatto finora

1. **Copia e verifica** — Bozza2 creata da una copia esatta dell'originale, verificata identica.
2. **Audit completo, correzioni tecniche, SEO on-page/tecnica, dati strutturati (schema.org)**.
3. **Foto profilo**, **4 immagini reali negli articoli** (poi ridimensionate).
4. **Pagine servizio Test/Workbook** + card in home, **FAQ complete** su tutte le sezioni.
5. **articoli.html riorganizzata** in tendina colorata per argomento, con link ipertestuali tra articoli.
6. **Uniformazione email** a `empowerlabpsy@gmail.com` in tutto il sito live.
7. **Sezione form di contatti.html ridisegnata** con CTA verso il Google Form reale di Angelo (link inserito il 28/08/2026) + nota privacy obbligatoria.
8. **Nuova pagina `privacy.html`**: informativa sul trattamento dati, basata sui fatti dichiarati da Angelo — da far rivedere da un legale prima della pubblicazione definitiva.
9. **Rimosso `Backup e prova/contatti back.html`** (email placeholder obsoleta), su richiesta di Angelo.
10. **`universita_ansia.html` rinominata in `ansia-universita.html`**, tutti i link aggiornati.
11. **`autostima2.html` completato**: Angelo ha scritto il contenuto reale (tema: autostima legata alla performance/perfezionismo); Claude ha allineato titolo, meta description, keywords, Open Graph e schema.org al testo reale, e aggiunto link ipertestuali reciproci con autostima1.html.
12. **Pagine di dettaglio test** (`test1/2/3.html`) e **workbook** (`workbook1/2/3.html`): ciascuna con CTA "Contattaci" attiva e bottone "Acquista" disattivato, in attesa della fase intermedia con i pagamenti.
13. **Backup completo esterno a GitHub** (file + storico Git), salvato sul Mac di Angelo. Da rigenerare dopo le modifiche dei punti 14-15.
14. **Ottimizzazione SEO estesa a tutto il sito (28/08/2026)**: su richiesta esplicita di Angelo, titoli, meta description, keywords e Open Graph rivisti su tutte le pagine servizi (servizi.html e le 5 sottopagine, più corsi.html) e profilo (chi-siamo.html, empowerlab.html, angelo-caramia.html, amodio.html); corretto un titolo duplicato in empowerlab.html e rimossi commenti-placeholder obsoleti in 4 pagine servizi; aggiunti dati strutturati BreadcrumbList su tutte le pagine servizi/articoli/profilo (prima assenti) e schema.org Service sulle 5 pagine servizio principali; allineate le immagini reali (al posto del logo generico) in og:image e schema.org di autostima1.html, autostima2.html e ansia-universita.html e nelle pagine di Angelo e Rosa; aggiunto un link ipertestuale reciproco tra autostima1.html e autostima2.html.
15. **`empowerlab.html` completato e rebranding "Empower Lab Psy" (28/08/2026)**: Angelo ha scritto il testo reale della pagina EmpowerLab (missione, chi siamo, cosa facciamo); Claude lo ha impaginato in paragrafi distinti con due titoli di sezione, aggiunto un bottone "Contattaci" finale e riposizionato il link al profilo Instagram già presente in pagina. Su richiesta esplicita di Angelo, il brand "Empower Lab"/"EmpowerLab" è stato rinominato in "Empower Lab Psy" ovunque nel sito (title, meta description, keywords, Open Graph, schema.org e testo), incluso il template header/footer (che si propaga a tutte le pagine) e il testo dei bottoni Instagram ("Empower_Lab" → "Empower_Lab_Psy"), per uniformità con il profilo Instagram e l'email (@empower_lab_psy). Le icone Instagram cliccabili (piccola/media/grande, più quella nei bottoni) sono state ingrandite del 50%. Non toccati i file nella cartella "Backup e prova" (bozze/backup interni di Angelo, non pagine live del sito).
16. **`empowerlab.html` — impaginazione personalizzata (28/08/2026)**: su richiesta esplicita di Angelo ("personalizzala di più, anche discostandoti leggermente dallo stile delle altre pagine"), la pagina ha ricevuto un trattamento grafico dedicato (nuove classi CSS `eplab-*`): una hero scura in apertura, il paragrafo-chiave dell'obiettivo del progetto messo in evidenza come citazione, la sezione "Chi siamo" su sfondo tinta chiara con link diretti ai due profili, e la sezione "Cosa facciamo" arricchita da una griglia di 3 card (Supporto psicologico, Percorsi guidati, Attività formative) che linkano alle rispettive pagine servizio. Il testo reale di Angelo non è stato toccato, solo riorganizzato visivamente. **In attesa della valutazione di Angelo.**
17. **5 pagine di dettaglio corsi create (28/08/2026)**: `comunicazione.html`, `time-management.html`, `apprendimento.html` (Soft Skills) e `statistica.html`, `ai-machine-learning.html` (Hard Skills), collegate dalle card già esistenti in corsi.html. Contenuto in bozza plausibile scritto da Claude a partire dai titoli e dalle brevi descrizioni già presenti nelle card (esplicitamente dichiarato bozza da rifinire da Angelo, come le altre pagine test/workbook). Ogni pagina ha modulo di contatto, bottone Contattaci e link "torna a tutti i corsi". Aggiunte a sitemap.xml.
18. **Menu "Chi siamo" → tendina (28/08/2026)**: nel menu principale (template/header.html), "Chi siamo" è diventato una tendina con due link diretti: "Dott. Angelo Caramia" e "Dott.ssa Rosa Amodio". La pagina chi-siamo.html resta comunque raggiungibile da home e footer.
19. **Modulo di contatto in supporto-psicologico.html (28/08/2026)**: aggiunto il modulo di contatto (Google Form) già usato in contatti.html, mantenendo anche il bottone "Contattaci" verso la pagina contatti.

Per il dettaglio esatto di ogni modifica, consulta la cronologia dei commit (`git log`).

## Decisioni prese

- Repository di lavoro: `bozza2sitoempowerlab` (senza spazi, privata). Backup esterno periodico sul Mac di Angelo.
- **Roadmap commerciale in 3 fasi**: statico con contatto diretto (ora) → pagamenti (Stripe probabile) → login/area riservata/acquisto autonomo.
- Il codice sorgente del sito pubblico definitivo non resterà esposto su GitHub — da gestire in fase di migrazione futura.
- URL placeholder `https://tuosito.github.io/...` mantenuti in attesa del dominio definitivo.
- Meta description e dati strutturati SEO restano congelati fino a quando Angelo non dichiarerà il sito sostanzialmente completo (eccezioni solo su istruzione esplicita puntuale).
- Il modulo di contatto è un Google Form creato e configurato da Angelo (link reale già inserito in contatti.html).
- `privacy.html` è una bozza tecnica, non consulenza legale: da far rivedere da un legale/consulente privacy.
- I bottoni "Acquista" nelle pagine test/workbook sono disattivati di proposito, coerentemente con la fase statica attuale.

## Problemi noti / cose da tenere d'occhio

- Il pulsante `.faq-cta-button`, al passaggio del mouse, cambia colore del testo in arancione — confermato voluto da Angelo, non un bug.
- Tutti i testi-bozza scritti da Claude (FAQ, descrizioni workbook, contenuto di test1-3/workbook1-3, sottotitolo autostima1.html, categorie articoli.html) vanno riletti e rifiniti da Angelo.
- `esempio-con-chat.html`: scopo ancora da chiarire con Angelo.

## Contenuti ancora da scrivere (lavoro di Angelo)

Bio completa in `chi-siamo.html`, `empowerlab.html`; contenuto reale di `autostima2.html`; le pagine di dettaglio corsi/percorsi/profili non ancora scritte; contenuto reale (o scelta dei test/workbook definitivi) per `test1/2/3.html` e `workbook1/2/3.html`; revisione legale di `privacy.html`.

## Prossimi passi possibili (roadmap, da approvare uno alla volta)

Fase statica attuale: contenuti ancora mancanti (vedi sopra). Fase intermedia (su indicazione di Angelo): integrazione di un sistema di pagamento (probabilmente Stripe) per i servizi già pronti. Fase finale: login utenti e area riservata per acquisti autonomi.
