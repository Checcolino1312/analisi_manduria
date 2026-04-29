# Manduria Elezioni Comunali — Dati & Specifiche Sito

## SPECIFICHE TECNICHE DEL SITO

### Stack consigliato
- HTML + CSS + JavaScript vanilla (nessun framework)
- Chart.js 4.x per grafici
- Google Fonts: `DM Serif Display` (titoli) + `DM Sans` (corpo)
- File singolo `.html` auto-contenuto oppure progetto con `index.html` + `data.js` + `style.css`

### Layout
- Max-width: `900px`, centrato
- Background: `#F5F2EC` (carta invecchiata)
- Font body: DM Sans 300/400/500
- Font titoli: DM Serif Display 400

### Palette colori CSS variables
```css
--bg: #F5F2EC
--surface: #FFFFFF
--surface2: #EFECE5
--border: rgba(0,0,0,.09)
--text: #1A1A18
--muted: #7A7870
--green: #2D6A4F
--green-l: #D8EDE3
--blue: #1B4F82
--blue-l: #D6E8F7
--amber: #7D4A0A
--amber-l: #FAE8C8
--purple: #4A3A8A
--purple-l: #E8E4F7
--red: #C0392B
--red-l: #FCECEA
--gray: #888
--gray-l: #EDEDEA
```

### Componenti UI richiesti

1. **Header**
   - Titolo `h1` serif: "Elezioni Comunali Manduria"
   - Sottotitolo: "Comune di Manduria (TA) · Dati ufficiali"
   - Toggle pill `2020 | 2026` in alto a destra
   - Chip statistiche sotto (cambiano in base all'anno selezionato)

2. **Barra di ricerca** (sempre visibile, sopra le tab)
   - Icona lente a sinistra
   - Placeholder: "Cerca candidato, lista o coalizione…"
   - Bottone ✕ per svuotare
   - Si attiva da 2 caratteri
   - Nasconde i pannelli anno e mostra risultati inline
   - Highlight del termine trovato con `<mark>` (sfondo #FFF3B0)
   - Cerca su: tutti i nomi 2020 + 2026, lista, coalizione
   - Risultato mostra: nome | lista · coalizione · ruolo | voti/preferenze | anno

3. **Pannello 2020** — Tab:
   - Candidati sindaco
   - Voti per lista
   - Consiglieri Pecoraro
   - Consiglieri Sammarco
   - Ballottaggio

4. **Pannello 2026** — Tab:
   - Candidati sindaco
   - Candidati consiglieri (liste complete)
   - Tracciamento 2020→2026
   - Proiezione voti (con grafico Chart.js a barre)

5. **Badge** (pillole colorate):
   - `.b-new` verde: Nuovo / Ballottaggio ✓
   - `.b-ret` blu: Confermato / Stessa area
   - `.b-sw` ambra: Cambio coalizione/candidato
   - `.b-abs` grigio: Non trovato / Eliminato
   - `.b-cand` viola: Ora candidato sindaco
   - `.b-cdx` rosso: Centrodestra
   - `.b-csx` verde: Centrosinistra
   - `.b-m5s` ambra: M5S
   - `.b-ind` grigio: Civico

6. **Barre orizzontali** nei consiglieri: larghezza proporzionale al massimo della lista

7. **Proiezione grafico**: Chart.js `type: 'bar'`, inizializzato lazy (solo al primo click della tab), con tooltip che mostra stima + range

---

## DATI ELEZIONI 2020

### Metadati
- Data: 20–21 settembre 2020
- Ballottaggio: 4–5 ottobre 2020
- Sezioni: 30/30
- Candidati sindaco: 6
- Liste: 24
- Candidati consigliere: 555
- Sindaco eletto: Gregorio Pecoraro (ballottaggio)

### Candidati sindaco — 1° turno

| # | Candidato | Voti | % | Esito |
|---|-----------|------|---|-------|
| 1 | Gregorio Pecoraro | 4.833 | 26,93% | Ballottaggio ✓ |
| 2 | Domenico Sammarco | 4.511 | 25,14% | Ballottaggio ✓ |
| 3 | Lorenzo Bullo | 4.206 | 23,44% | Eliminato |
| 4 | Cosimo Breccia | 2.370 | 13,21% | Eliminato |
| 5 | Dario Duggento | 1.682 | 9,37% | Eliminato |
| 6 | Leonardo Moccia | 344 | 1,92% | Eliminato |

### Ballottaggio (4–5 ottobre 2020)

| Candidato | Voti | % |
|-----------|------|---|
| Gregorio Pecoraro ✓ ELETTO | 6.974 | 51,55% |
| Domenico Sammarco | 6.555 | 48,45% |

> **Curiosità storica:** Manduria fu l'unico comune d'Italia in cui il ballottaggio vide contrapporsi due candidati entrambi espressione di forze della maggioranza di governo nazionale (M5S + centrosinistra civico vs PD). Pecoraro tornava sindaco dopo quasi vent'anni — aveva già guidato la città dal 1994 al 2001.

---

### Voti per lista — 2020

#### Coalizione Gregorio Pecoraro — 4.429 voti · 26,39%

| Lista | Voti | % |
|-------|------|---|
| Pecoraro Sindaco | 1.959 | 11,60% |
| Città Più | 1.246 | 7,42% |
| Movimento 5 Stelle | 789 | 4,70% |
| Movimento Democratico con Manduria | 435 | 2,59% |

#### Coalizione Domenico Sammarco — 4.412 voti · 26,29%

| Lista | Voti | % |
|-------|------|---|
| Scelta Comune | 1.086 | 6,47% |
| Manduria Migliore | 949 | 5,65% |
| Federcivica | 909 | 5,42% |
| Partito Democratico | 790 | 4,71% |
| Senso Civico – Un Nuovo Ulivo per la Puglia | 678 | 4,04% |

#### Coalizione Lorenzo Bullo — 4.475 voti · 26,66%

| Lista | Voti | % |
|-------|------|---|
| Fratelli d'Italia | 1.104 | 6,58% |
| Progetto Manduria | 1.010 | 6,02% |
| Lega Salvini Puglia | 832 | 4,96% |
| Forza Italia | 704 | 4,19% |
| Puglia Popolare | 496 | 2,96% |
| Tutti Insieme per Manduria | 329 | 1,96% |

#### Coalizione Cosimo Breccia — 1.588 voti

| Lista | Voti | % |
|-------|------|---|
| Movimento Manduria Noscia | 1.408 | 8,39% |
| Lista Rinascita | 180 | 1,07% |

#### Coalizione Dario Duggento — 1.613 voti

| Lista | Voti | % |
|-------|------|---|
| Forza Manduria | 411 | 2,4% |
| Manduria nel Cuore | 411 | 2,4% |
| Azione Messapica | 385 | 2,3% |
| Manduria Civica | 311 | 1,8% |
| Manduria Libera | 95 | 0,6% |

#### Coalizione Leonardo Moccia — 268 voti

| Lista | Voti | % |
|-------|------|---|
| Nuovo CDU Cristiani Democratici Uniti | 143 | 0,8% |
| Lista Moccia Centristi Cattolici | 125 | 0,7% |

---

### Consiglieri — Coalizione Pecoraro

#### Lista Pecoraro Sindaco (colore: #1D9E75)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Gregorio Dinoi | 267 |
| 2 | Fabrizio Mastrovito | 225 |
| 3 | Luigia Lamusta | 183 |
| 4 | Serena Sammarco | 160 |
| 5 | Flavio Massari | 152 |
| 6 | Piero Raimondo | 135 |
| 7 | Antonella Parisi | 112 |
| 8 | Giovanni De Pasquale | 112 |
| 9 | Alessia Orsini | 94 |
| 10 | Fernando Buccoliero | 74 |
| 11 | Antonio Di Lorenzo | 68 |
| 12 | Antonio Perrucci | 67 |
| 13 | Luana Chimienti | 65 |
| 14 | Gianni Brunetti | 65 |
| 15 | Adelia Filangieri | 64 |
| 16 | Roberto Di Cursi | 47 |
| 17 | Maria Pichierri | 41 |
| 18 | Irene Occhilupo | 38 |
| 19 | Omar Dimonopoli | 13 |
| 20 | Rossella Amato | 12 |
| 21 | Gianni Malorgio | 11 |
| 22 | Andrea Ferrara | 8 |
| 23 | Daniele Andrisano | 5 |
| 24 | Lea Risi | 3 |

#### Lista Città Più (colore: #2D6A4F)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Gregorio Perrucci | 273 |
| 2 | Andrea Mariggiò | 217 |
| 3 | Michele Matino | 152 |
| 4 | Agostino Capogrosso | 110 |
| 5 | Filippo Scialpi | 89 |
| 6 | Annalisa Pizzi | 72 |
| 7 | Alessandra Mancuso | 66 |
| 8 | Anna Rita Brunetti | 65 |
| 9 | Massimo Modeo | 62 |
| 10 | Salvatore Piccinni | 55 |
| 11 | Carlo Pennetta | 51 |
| 12 | Sonia Perchio | 47 |
| 13 | Enzo Palummieri | 46 |
| 14 | Pompeo Stano | 33 |
| 15 | Asha F. Tarantino | 30 |

#### Lista Movimento Democratico con Manduria (colore: #4A7C2F)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Pasquale Pesare | 160 |
| 2 | Vito Perrucci | 92 |
| 3 | Luigi Cascarano | 65 |
| 4 | Fabiana Rossetti | 61 |
| 5 | Semmy Polimeno | 44 |
| 6 | Monica Musiello | 33 |
| 7 | Giovanni Biasco | 32 |
| 8 | Elena Calò | 29 |
| 9 | Francesco Fontana | 24 |
| 10 | Mariella Tripaldi | 24 |

#### Lista Movimento 5 Stelle (colore: #D08C1A)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Mauro Baldari | 126 |
| 2 | Pier Paolo Lamusta | 67 |
| 3 | Arianna Forleo | 53 |
| 4 | Gianni Dimitri | 48 |
| 5 | Valentina Degirolano | 36 |
| 6 | Michele Fai | 24 |
| 7 | Sara Gennari | 23 |
| 8 | Stefania Morleo | 14 |
| 9 | Chiara A. Doria | 14 |
| 10 | Domenico Scialpi | 12 |

---

### Consiglieri — Coalizione Sammarco

#### Lista Scelta Comune (colore: #2A7AB8)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Loredana Ingrosso | 204 |
| 2 | Fabiano Comes | 193 |
| 3 | Emiliano Pacifico | 187 |
| 4 | Maria Teresa Coppola | 142 |
| 5 | Alessia C. Scarafile | 126 |
| 6 | Luigi Stano | 67 |
| 7 | Antonio Capogrosso | 56 |
| 8 | Gloria A. Saracino | 53 |
| 9 | Cecilia De Bartholomaeis | 50 |
| 10 | Pasquale Lonoce | 50 |
| 11 | Cosimo Dinoi | 41 |
| 12 | Tiziana Perrucci | 40 |
| 13 | Maria Pasanisi | 39 |
| 14 | Francesca Stranieri | 35 |
| 15 | Francesco Pastorelli | 26 |
| 16 | Giuseppe Quaranta | 25 |

#### Lista Manduria Migliore (colore: #1B4F82)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Gregorio Gentile | 198 |
| 2 | Gregorio Dinoi | 152 |
| 3 | Francesca Caroppa | 150 |
| 4 | Erika Basciò | 113 |
| 5 | Antonio Perchio | 93 |
| 6 | Sergio Sportelli | 78 |
| 7 | Caterina Cappelli | 59 |
| 8 | Barbara Stefanì | 43 |
| 9 | Martina Perrucci | 40 |
| 10 | Leonardo Polignano | 36 |
| 11 | Giovanni My | 35 |
| 12 | Massimiliano Pichierri | 33 |
| 13 | Federico Bentivoglio | 32 |

#### Lista Federcivica (colore: #0C3D6B)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Mario D'Oria | 306 |
| 2 | Vincenzo Dimitri | 254 |
| 3 | Annamaria De Valerio | 103 |
| 4 | Mimmo Fontana | 76 |
| 5 | Cosimo Sammarco | 47 |
| 6 | Gianpiero Mero | 42 |
| 7 | Bruno Dimagli | 31 |
| 8 | Leonardo Moscogiuri | 22 |
| 9 | Leo Stranieri | 16 |
| 10 | Addolorata Pinto | 16 |

#### Lista Partito Democratico (colore: #C0392B)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Maria Grazia Cascarano | 361 |
| 2 | Teo De Cillis | 139 |
| 3 | Leonardo Notarnicola | 105 |
| 4 | Asia Filograno | 46 |
| 5 | Vittorio Perrucci | 42 |
| 6 | Pietro Calora | 15 |
| 7 | Gianpiero Bianco | 13 |
| 8 | Angelo Distratis | 12 |

#### Lista Senso Civico – Un Nuovo Ulivo per la Puglia (colore: #4A3A8A)

| # | Nome | Preferenze |
|---|------|-----------|
| 1 | Nicola Becci | 319 |
| 2 | Daniela Caprino | 247 |
| 3 | Telemaco Farina | 120 |
| 4 | Maria Calò | 81 |
| 5 | Rossella De Cataldo | 51 |
| 6 | Emanuela Buccoliero | 46 |
| 7 | Giovanni Dimitri | 42 |
| 8 | Leonardo Pisello | 35 |
| 9 | Addolorata Raho | 30 |
| 10 | Stefania Parco | 11 |

---

## DATI ELEZIONI 2026

### Metadati
- Data: 24–25 maggio 2026
- Candidati sindaco: 6
- Liste: 15
- Candidati consigliere: 345
- Fonte ufficiale: Comune di Manduria, pubblicazione liste 26/04/2026

### Candidati sindaco 2026

| Candidato | Area | N° liste | Status vs 2020 | Ruolo 2020 |
|-----------|------|----------|----------------|------------|
| Domenico Sammarco | Centrodestra | 7 (FdI, FI, Lega, DC, Noi Moderati, Azione Civica, PLD) | Cambio coalizione | Candidato sindaco CSX 2020 (4.511 voti, 25,14%) |
| Vito Andrea Mariggiò | CSX civico | 3 (Città Più, Mariggiò Sindaco, Lab. Democratico) | Consigliere → candidato sindaco | Consigliere Città Più coal. Pecoraro — 217 pref. |
| Fabiana Rossetti | M5S | 1 (M5S) | Consigliere → candidata sindaca | Consigliere Mov. Dem. coal. Pecoraro — 61 pref. |
| Stefania Ruggieri | Sinistra / PD | 1 (A Sinistra! — AVS, SI, RC, PD, Demos, civici) | Nuova candidatura | Non candidata nel 2020. Docente economia aziendale |
| Cosimo Lariccia | Civico Noscia | 2 (Manduria Noscia, Lista Lariccia) | Cambio coalizione | Lista Breccia (Noscia) 2020 |
| Ferdinando Arnò | Civico | 1 (MANDURIAmò) | Nuova candidatura | Non candidato nel 2020 |

> **Nota:** Il PD, dopo settimane di lacerazioni interne, ha ufficializzato il sostegno a Stefania Ruggieri (coordinamento "A Sinistra!"). Mariggiò rappresenta la continuità con l'amministrazione uscente Pecoraro. Sammarco ha cambiato schieramento dal CSX al CDX rispetto al 2020.

---

### Liste e candidati consiglieri 2026

#### Coalizione Domenico Sammarco — Centrodestra (7 liste)

**Lista Fratelli d'Italia**
Andrisano Gregorio · Azzone Stefano Pio · Bellocchi Emanuele · Brunetti Eleonora · Chimienti Cosimo · Cotugno Stefania · Dicursi Leonida Sandra · Dinoi Angelo Cosimo · D'Ostuni Salvatore Francesco · Gioia Maria Antonietta · Giuliano Antonio · Mandurino Silvia · Mariggiò Antonio · Mazza Giuseppe · Mitrangolo Pietro Carmelo · Pastorelli Lucia · Perrucchi Chiara · Perrucci Maria Rosaria · Pesare Carmen · Pezzarossa Giovanni · Pichierri Paolo Giovanni · Pisconti Vincenzo · Puglia Roberto Leonzio Michele · Zizzari Anna Rita

**Lista Forza Italia**
Brunetti Emanuele · Calò Maria Immacolata · D'Auria Domenico · D'Auria Giovanni · Digiacomo Michele · Dilengite Clelia · Dimitri Claudio · Duggento Dario · Duggento Giuseppe · Erario Piergiorgio (Pj) · Giannotta Maria Virginia Antonia · Kaia Mexhid · Leone Antonella · Lomastro Francesco · Maggi Armando Leonardo · Moscogiuri Carolina · Perrone Giuseppe Francesco · Pignataro Renato · Ponno Alessandro Maria · Saracino Paola · Stano Maria Grazia · Stano Roberto Antonio · Tripaldi Antonella · Versi Cosmanna

**Lista Lega Salvini**
Baldari Anna Carmela · Calò Fausta · Caniglia Simone · Capogrosso Marco · Carbone Anna Chiara · Chimienti Cosimo Antonio · Dinoi Giuseppe · Dimonopoli Salvatore · Distratis Laura · D'Abramo Stefano · Felice Marco Antonio · Ferretti De Virgilis Francesco · Gici Florenc · Lalla Parco Gianluca · Mangione Mirko · Modeo Denise · Perrucci Angela · Pichierri Amerigo · Prudenzano Maria Silvana · Sammarco Cristina · Sgarra Valentina · Stranieri Serena · Terzaroli Paola · Zito Leonardo

**Lista Democrazia Cristiana**
Barrano Luigi · Bevilacqua Bellisario · Borgia Michelle · Calò Giovanni (Gianni) · Campeggio Andrea · Cito Vincenzo · Damicis Dario · Daversa Francesco · De Pace Esmeralda · Di Leo Antonietta (Antonella) · Dinoi Cosimo · Distratis Maria Grazia · Erario Domenico · Filomena Maria · Gennari Cosimo Antonio · Gennari Francesca · Martella Luigi · Moccia Leonardo · Modeo Franco · Pesare Debora · Pinto Mariangela · Rochira Francesco Pio · Rodio Cosimo · Sabba Egidio

**Lista Noi Moderati**
Barbieri Marco · Brunetti Francesca · Brunetti Paola · Buccolieri Luca · Calò Lucia · Damicis Vittorio · Daversa Giovanni · Defazio Daniele · Dimaggio Antonella · Dimitri Anna Olimpia · Dinoi Antonella · Fontana Salvatore Domenico · Gioia Simone · Leone Francesco · Libardi Debora · Libardi Maurizio · Mandurino Paola · Mero Annarita · Mola Patrizia · Perretti Giuseppe Italo Francesco · Piccinni Giovanni · Pisello Flavio · Scredo Daniele · Tripaldi Cristian

**Lista Azione Civica**
Andrisano Gregorio Fabio · Andrioli Simona · Ariano Tiziana · Baldari Simona · Calò Teodora Doriana · Caroppa Francesca · Ciccarese Leila Arianna · D'Ostuni Mino Cosimo · D'Uggento Giorgio · Dragan Ionela (Nela) · Durante Rossella · Erario Mattia · Filotico Cinzia · Fistetto Maria Sabina · Gennari Alessio · Gennari Pierpaolo · Lamusta Cosimo (Mimmo) · Latino Livio · Massafra Giuseppe · Musiello Armando · Pernorio Maria Grazia · Scialpi Francesca · Scialpi Ramona · Sportelli Sergio

**Lista Partito Liberal Democratico (PLD)**
Andrisano Leonardo · Andrisano Paola Silvia · Bianco Gianpiero · Calò Leonardo · Chimienti Denise · De Valerio Annamaria · Di Masi Cosima · Dimagli Pierina Antonia · Dimagli Piermichele · Dinoi Fabio · Dinoi Francesca · Fanizzi Giovanni · Fornaro Danilo · Granata Vincenzo · Lamusta Cosimo · Mangiulli Stefano Ivan · Occhilupo Elsa · Perrucci Tiziana · Pesare Pasquale · Pichierri Fabio · Resta Anna Leonarda (Dina) · Russo Arcangela (Angela) · Sansonetti Giacomo · Stefani Barbara

---

#### Coalizione Vito Andrea Mariggiò — CSX civico (3 liste)

**Lista Città Più**
Buccoliero Giuseppe Fernando · Capogrosso Angelo · Cerza Amedeo · D'Amuri Sabrina · Dino Nunzia Anna · Erario Francesca · Filangieri Adele · Fusco Nellina Katia · Lamusta Pier Paolo · Marsala Silvia · Mastrovito Fabrizio · Moscogiuri Giovanni · Orsini Alessia · Paludi Sara · Parisi Antonella · Pecoraro Gregorio · Perrucci Valeria · Pichierri Maria · Raimondo Pietro · Rossetti Andrea

**Lista Mariggiò Sindaco**
Barbieri Pasquale · Brunetti Anna Maria · Dinoi Gianluca · Di Lorenzo Piera Carmen · Fasano Ferdinando · Filoni Bernardino Mario (Dino) · Fusco Daniela · Hysa Arber · Lamusta Luigia · Lenti Marco · Marasco Massimiliano · Mariggiò Antonella · Mariggiò Giuseppe · Matino Michele · Paludi Valeria · Pizzi Annalisa · Pompigna Giuseppina · Ricchiuti Maria · Sammarco Serena · Zingariello Pietro

**Lista Laboratorio Democratico**
Andrisano Luana · Baldari Isidoro Mauro · Broccardo Maria Chiara · Brunetti Stefania · Cioccioli Claudio · Dinoi Mirko · Dilauro Dario · Dimonopoli Pamela · Gallù Luana · Greco Fabio · Guerriero Morgana Matilda · Gningue Adja Fatima · Ingrosso Loredana · Magliola Luana · Maiorano Andrea · Massari Sara · Morleo Stefania · Perchio Antonio · Pichierri Massimiliano · Pizzaleo Andrea · Raddi Leonardo · Rollo Vincenzo · Scialpi Filippo · Scorrano Chiara

---

#### Cosimo Lariccia — Civico Noscia (2 liste)

**Lista Manduria Noscia**
Antermite Fabio · Breccia Paolo Antonio · Calò Daniele · Calò Fiorella · Colucci Fabio · De Stradis Maria · Desantis Massimo Antonio · D'Ostuni Angelo · Jankanicova Silvia · Magli Angela · Mascolo Fabio · Mero Stefania · Messore Irene · Montesardo Antonio · Montesardo Danilo · Nardelli Alessandro · Olivieri Antonio · Patrono Enrica · Ribezzo Alessandro · Santo Dario · Sozzi Costanza · Tatullo Gianluca · Tavares Akim · Venga Marcello

**Lista Lariccia**
Attanasio Simone · Benegiamo Lorenzo · Brandelli Gianna · Buccolieri Francesco · De Luca Luigi (Gigi) · Di Lauro Simone · Dinoi Leonardo · Erario Elvira · Giannini Nadia · Greco Giuseppe · Lionetti Antonio · Lionetti Loredana · Modeo Giulia · Montanelli Ismaele · Notarnicola Giuseppe · Occhilupo Gianluca · Perrucci Angela · Perrucci Giuseppe · Roberto Armando · Rubino Flavia · Rubino Franco · Sammarco Lorenzo · Saponaro Isa · Tornese Ilaria

---

#### Fabiana Rossetti — Movimento 5 Stelle (1 lista)

**Lista M5S**
Biasco Giovanni · Buccoliero Renato · De Santis Omar Romeo · Dimitri Claudia · Dimitri Nicola (Nico) · Dinoi Valeria · Giordano Piter Cosimo · Greco Antonio · Greco Gregorio · Iunco Simone · Mero Umberto · Mocavero Martina · Notarnicola Alessio · Palummieri Carola · Perrucci Vito · Piccinni Gregorio (Gregory) · Polimeno Sebastiano (Semmi) · Sammaro Gregorio Salvatore · Spada Federica · Stano Loredana · Tedesco Ileana · Tripaldi Maria (Mariella)

---

#### Stefania Ruggieri — A Sinistra! (1 lista — AVS + SI + RC + PD + Demos + civici)

**Lista A Sinistra!**
Buccolieri Antonio · Caforio Alessia · Calò Salvatore (Sasà) · Cavaliere Emilia · Cifaldi Roberto · Consoli Enrico · Daggiano Giuseppina (Giusy) · Damicis Antonio · Di Noi Fiorenzo · Dinoi Daniele · Fais Francesca · Fais Luigi · Filomeno Cosimo (Mimmo) · Fistetto Gabriella · Fontana Vincenzo · Gennari Marianna · Ginestra Maria · Mariggiò Anna · Migliaresi Luca · Pacifico Emiliano · Pasanisi Paola · Schiavoni Giovanni Leonardo (Vanni) · Stano Pompeo · Tedesco Luigina

---

#### Ferdinando Arnò — Civico (1 lista)

**Lista MANDURIAmò**
Arcaldini Alessandra · Attanasio Luca · Bay Marco Simone Pietro · Ciliberti Roberto · Daversa Simona · Di Lauro Francesco · Durante Arcangelo · Gennari Sonia · Giuda Giuseppe · Marangella Annalisa · Pinto Raffaele Ildebrando · Prudenzano Giuseppe · Quaranta Agostino · Rizzo Floriana · Rodia Rita · Suma Luciana · Trisolini Carlo · Trotta Claudio Giovanni Umberto

---

## TRACCIAMENTO 2020 → 2026

Stato verificato dei più votati 2020 nelle liste 2026.
Fonte: liste ufficiali Comune di Manduria 26/04/2026 + TarantiniTime 27/04/2026.

| Nome | Lista 2020 | Pref. 2020 | Coal. 2020 | Status 2026 | Posizione 2026 |
|------|------------|-----------|------------|-------------|----------------|
| Maria Grazia Cascarano | PD | 361 | Sammarco | Non trovata | — |
| Nicola Becci | Senso Civico | 319 | Sammarco | Non trovato | — |
| Mario D'Oria | Federcivica | 306 | Sammarco | Non trovato | — |
| Gregorio Perrucci | Città Più | 273 | Pecoraro | Non trovato | — |
| Gregorio Dinoi | Pecoraro Sindaco | 267 | Pecoraro | Non trovato | — |
| Vincenzo Dimitri | Federcivica | 254 | Sammarco | Non trovato | — |
| Daniela Caprino | Senso Civico | 247 | Sammarco | Non trovata | — |
| Fabrizio Mastrovito | Pecoraro Sindaco | 225 | Pecoraro | Stessa area | Lista Città Più — coal. Mariggiò |
| Andrea Mariggiò | Città Più | 217 | Pecoraro | Candidato sindaco | Candidato sindaco CSX civico |
| Loredana Ingrosso | Scelta Comune | 204 | Sammarco | Cambia candidato | Lista Lab. Democratico — coal. Mariggiò |
| Gregorio Gentile | Manduria Migliore | 198 | Sammarco | Non trovato | — |
| Fabiano Comes | Scelta Comune | 193 | Sammarco | Non trovato | — |
| Emiliano Pacifico | Scelta Comune | 187 | Sammarco | Cambia candidato | Lista A Sinistra! — coal. Ruggieri |
| Luigia Lamusta | Pecoraro Sindaco | 183 | Pecoraro | Stessa area | Lista Mariggiò Sindaco — coal. Mariggiò |
| Serena Sammarco | Pecoraro Sindaco | 160 | Pecoraro | Stessa area | Lista Mariggiò Sindaco — coal. Mariggiò |
| Pasquale Pesare | Mov. Dem. con Manduria | 160 | Pecoraro | Non trovato | — |
| Michele Matino | Città Più | 152 | Pecoraro | Stessa area | Lista Mariggiò Sindaco — coal. Mariggiò |
| Gregorio Dinoi (MM) | Manduria Migliore | 152 | Sammarco | Non trovato | — |
| Francesca Caroppa | Manduria Migliore | 150 | Sammarco | Cambia coalizione | Lista Azione Civica — coal. Sammarco CDX |
| Maria Teresa Coppola | Scelta Comune | 142 | Sammarco | Non trovata | — |
| Teo De Cillis | PD | 139 | Sammarco | Non trovato | — |
| Piero Raimondo | Pecoraro Sindaco | 135 | Pecoraro | Stessa area | Lista Città Più — coal. Mariggiò (come Raimondo Pietro) |
| Mauro Baldari | M5S | 126 | Pecoraro | Cambia candidato | Lista Lab. Democratico — coal. Mariggiò (come Baldari Isidoro Mauro) |
| Telemaco Farina | Senso Civico | 120 | Sammarco | Non trovato | — |
| Antonella Parisi | Pecoraro Sindaco | 112 | Pecoraro | Stessa area | Lista Città Più — coal. Mariggiò |
| Agostino Capogrosso | Città Più | 110 | Pecoraro | Stessa area | Lista Città Più — coal. Mariggiò (come Capogrosso Angelo) |
| Annamaria De Valerio | Federcivica | 103 | Sammarco | Stesso candidato | Lista PLD — coal. Sammarco CDX |
| Alessia Orsini | Pecoraro Sindaco | 94 | Pecoraro | Stessa area | Lista Città Più — coal. Mariggiò |
| Vito Perrucci | Mov. Dem. con Manduria | 92 | Pecoraro | Non trovato | — |
| Filippo Scialpi | Città Più | 89 | Pecoraro | Stessa area | Lista Lab. Democratico — coal. Mariggiò |
| Sergio Sportelli | Manduria Migliore | 78 | Sammarco | Stesso candidato | Lista Azione Civica — coal. Sammarco CDX |
| Pier Paolo Lamusta | M5S | 67 | Pecoraro | Cambia candidato | Lista Città Più — coal. Mariggiò |
| Fabiana Rossetti | Mov. Dem. con Manduria | 61 | Pecoraro | Candidata sindaca | Candidata sindaca M5S 2026 |
| Pompeo Stano | Città Più | 33 | Pecoraro | Cambia candidato | Lista A Sinistra! — coal. Ruggieri |
| Massimiliano Pichierri | Manduria Migliore | 33 | Sammarco | Cambia candidato | Lista Lab. Democratico — coal. Mariggiò |
| Stefania Morleo | M5S | 14 | Pecoraro | Cambia candidato | Lista Lab. Democratico — coal. Mariggiò |
| Gianpiero Bianco | PD | 13 | Sammarco | Cambia coalizione | Lista PLD — coal. Sammarco CDX |

---

## PROIEZIONE VOTI 2026

> **Metodologia:** Redistribuzione dei voti 2020 secondo le nuove appartenenze di lista. Si assume ~90–95% di trasferimento della base storica, con dispersione per astensionismo e flussi incrociati. Non è una previsione scientifica.

| Candidato | Area | Stima voti | Range min | Range max |
|-----------|------|-----------|-----------|-----------|
| Domenico Sammarco | Centrodestra | 7.900 | 7.200 | 8.500 |
| Vito Andrea Mariggiò | CSX civico | 3.200 | 2.800 | 3.700 |
| Stefania Ruggieri | Sinistra / PD | 1.700 | 1.400 | 2.100 |
| Fabiana Rossetti | M5S | 1.100 | 900 | 1.400 |
| Cosimo Lariccia | Civico Noscia | 950 | 700 | 1.300 |
| Ferdinando Arnò | Civico | 350 | 200 | 500 |

**Scenario più probabile: ballottaggio Sammarco vs Mariggiò.**

Sammarco CDX assorbe: base propria 2020 (4.511) + eredità Bullo/CDX (4.206) + Duggento (1.682) + Moccia (344) = ~10.743 teorici, stimati 7.200–8.500 dopo dispersioni. 7 liste, organizzazione capillare.

Il CSX è frammentato in tre candidature (Mariggiò + Ruggieri + Rossetti) per ~7.900 voti teorici complessivi. Un'eventuale convergenza al ballottaggio potrebbe riaprire la sfida.

Lariccia (Noscia) è la variabile: più voti prende, più avvantaggia Sammarco sottraendo voti al fronte progressista.

---

## FONTI

- Dati 2020: Ministero dell'Interno · ManduriaOggi.it · Il Sole 24 Ore Elezioni
- Liste 2026: Comune di Manduria, pubblicazione ufficiale 26/04/2026
- Analisi candidature 2026: TarantiniTime (27/04/2026) · TarantoToday · Quotidiano di Puglia
- Analisi al: 29/04/2026
