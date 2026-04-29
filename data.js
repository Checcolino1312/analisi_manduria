/* ============================================================
   DATA — Elezioni Comunali Manduria 2020 / 2026
   ============================================================ */

const CHIPS = {
  2020: [
    { label: 'Data',                  val: '20–21 set 2020' },
    { label: 'Ballottaggio',          val: '4–5 ott 2020' },
    { label: 'Sezioni',               val: '30/30' },
    { label: 'Sindaci candidati',     val: '6' },
    { label: 'Liste',                 val: '24' },
    { label: 'Candidati consigliere', val: '555' },
    { label: 'Sindaco eletto',        val: 'Pecoraro (ballottaggio)' },
  ],
  2026: [
    { label: 'Data',                  val: '24–25 mag 2026' },
    { label: 'Sindaci candidati',     val: '6' },
    { label: 'Liste',                 val: '15' },
    { label: 'Candidati consigliere', val: '345' },
    { label: 'Fonte',                 val: 'Comune di Manduria 26/04/2026' },
  ],
};

const CANDIDATI_2020 = [
  { name: 'Gregorio Pecoraro',  voti: 4833, pct: 26.93, coal: 'Pecoraro', area: 'csx' },
  { name: 'Domenico Sammarco', voti: 4511, pct: 25.14, coal: 'Sammarco', area: 'csx' },
  { name: 'Lorenzo Bullo',     voti: 4206, pct: 23.44, coal: 'Bullo',    area: 'cdx' },
  { name: 'Cosimo Breccia',    voti: 2370, pct: 13.21, coal: 'Breccia',  area: 'ind' },
  { name: 'Dario Duggento',    voti: 1682, pct: 9.37,  coal: 'Duggento', area: 'ind' },
  { name: 'Leonardo Moccia',   voti: 344,  pct: 1.92,  coal: 'Moccia',   area: 'ind' },
];

const LISTE_2020 = [
  { coal: 'Pecoraro', coalArea: 'csx', totalVoti: 4429, totalPct: 26.39, lists: [
    { name: 'Pecoraro Sindaco',                    voti: 1959, pct: 11.60, color: '#1D9E75' },
    { name: 'Città Più',                           voti: 1246, pct: 7.42,  color: '#2D6A4F' },
    { name: 'Movimento 5 Stelle',                  voti: 789,  pct: 4.70,  color: '#D08C1A' },
    { name: 'Movimento Democratico con Manduria',  voti: 435,  pct: 2.59,  color: '#4A7C2F' },
  ]},
  { coal: 'Sammarco', coalArea: 'csx', totalVoti: 4412, totalPct: 26.29, lists: [
    { name: 'Scelta Comune',                                    voti: 1086, pct: 6.47, color: '#2A7AB8' },
    { name: 'Manduria Migliore',                                voti: 949,  pct: 5.65, color: '#1B4F82' },
    { name: 'Federcivica',                                      voti: 909,  pct: 5.42, color: '#0C3D6B' },
    { name: 'Partito Democratico',                              voti: 790,  pct: 4.71, color: '#C0392B' },
    { name: 'Senso Civico – Un Nuovo Ulivo per la Puglia',      voti: 678,  pct: 4.04, color: '#4A3A8A' },
  ]},
  { coal: 'Bullo', coalArea: 'cdx', totalVoti: 4475, totalPct: 26.66, lists: [
    { name: "Fratelli d'Italia",          voti: 1104, pct: 6.58, color: '#8B1A1A' },
    { name: 'Progetto Manduria',          voti: 1010, pct: 6.02, color: '#A0522D' },
    { name: 'Lega Salvini Puglia',        voti: 832,  pct: 4.96, color: '#2C5F8A' },
    { name: 'Forza Italia',              voti: 704,  pct: 4.19, color: '#4169E1' },
    { name: 'Puglia Popolare',           voti: 496,  pct: 2.96, color: '#6B8E23' },
    { name: 'Tutti Insieme per Manduria', voti: 329,  pct: 1.96, color: '#708090' },
  ]},
  { coal: 'Breccia', coalArea: 'ind', totalVoti: 1588, totalPct: null, lists: [
    { name: 'Movimento Manduria Noscia', voti: 1408, pct: 8.39, color: '#8B4513' },
    { name: 'Lista Rinascita',           voti: 180,  pct: 1.07, color: '#CD853F' },
  ]},
  { coal: 'Duggento', coalArea: 'ind', totalVoti: 1613, totalPct: null, lists: [
    { name: 'Forza Manduria',    voti: 411, pct: 2.4, color: '#556B2F' },
    { name: 'Manduria nel Cuore', voti: 411, pct: 2.4, color: '#6B8E23' },
    { name: 'Azione Messapica',  voti: 385, pct: 2.3, color: '#8FBC8F' },
    { name: 'Manduria Civica',   voti: 311, pct: 1.8, color: '#2E8B57' },
    { name: 'Manduria Libera',   voti: 95,  pct: 0.6, color: '#90EE90' },
  ]},
  { coal: 'Moccia', coalArea: 'ind', totalVoti: 268, totalPct: null, lists: [
    { name: 'Nuovo CDU Cristiani Democratici Uniti', voti: 143, pct: 0.8, color: '#9370DB' },
    { name: 'Lista Moccia Centristi Cattolici',      voti: 125, pct: 0.7, color: '#8A2BE2' },
  ]},
];

const CONSIGLIERI_PECORARO = [
  { listName: 'Pecoraro Sindaco', color: '#1D9E75', members: [
    { name: 'Gregorio Dinoi',        pref: 267 }, { name: 'Fabrizio Mastrovito',  pref: 225 },
    { name: 'Luigia Lamusta',        pref: 183 }, { name: 'Serena Sammarco',      pref: 160 },
    { name: 'Flavio Massari',        pref: 152 }, { name: 'Piero Raimondo',       pref: 135 },
    { name: 'Antonella Parisi',      pref: 112 }, { name: 'Giovanni De Pasquale', pref: 112 },
    { name: 'Alessia Orsini',        pref: 94  }, { name: 'Fernando Buccoliero',  pref: 74  },
    { name: 'Antonio Di Lorenzo',    pref: 68  }, { name: 'Antonio Perrucci',     pref: 67  },
    { name: 'Luana Chimienti',       pref: 65  }, { name: 'Gianni Brunetti',      pref: 65  },
    { name: 'Adelia Filangieri',     pref: 64  }, { name: 'Roberto Di Cursi',     pref: 47  },
    { name: 'Maria Pichierri',       pref: 41  }, { name: 'Irene Occhilupo',      pref: 38  },
    { name: 'Omar Dimonopoli',       pref: 13  }, { name: 'Rossella Amato',       pref: 12  },
    { name: 'Gianni Malorgio',       pref: 11  }, { name: 'Andrea Ferrara',       pref: 8   },
    { name: 'Daniele Andrisano',     pref: 5   }, { name: 'Lea Risi',             pref: 3   },
  ]},
  { listName: 'Città Più', color: '#2D6A4F', members: [
    { name: 'Gregorio Perrucci',   pref: 273 }, { name: 'Andrea Mariggiò',    pref: 217 },
    { name: 'Michele Matino',      pref: 152 }, { name: 'Agostino Capogrosso', pref: 110 },
    { name: 'Filippo Scialpi',     pref: 89  }, { name: 'Annalisa Pizzi',     pref: 72  },
    { name: 'Alessandra Mancuso', pref: 66  }, { name: 'Anna Rita Brunetti',  pref: 65  },
    { name: 'Massimo Modeo',       pref: 62  }, { name: 'Salvatore Piccinni', pref: 55  },
    { name: 'Carlo Pennetta',      pref: 51  }, { name: 'Sonia Perchio',      pref: 47  },
    { name: 'Enzo Palummieri',     pref: 46  }, { name: 'Pompeo Stano',       pref: 33  },
    { name: 'Asha F. Tarantino',   pref: 30  },
  ]},
  { listName: 'Movimento Democratico con Manduria', color: '#4A7C2F', members: [
    { name: 'Pasquale Pesare',   pref: 160 }, { name: 'Vito Perrucci',    pref: 92 },
    { name: 'Luigi Cascarano',   pref: 65  }, { name: 'Fabiana Rossetti', pref: 61 },
    { name: 'Semmy Polimeno',    pref: 44  }, { name: 'Monica Musiello',  pref: 33 },
    { name: 'Giovanni Biasco',   pref: 32  }, { name: 'Elena Calò',       pref: 29 },
    { name: 'Francesco Fontana', pref: 24  }, { name: 'Mariella Tripaldi', pref: 24 },
  ]},
  { listName: 'Movimento 5 Stelle', color: '#D08C1A', members: [
    { name: 'Mauro Baldari',        pref: 126 }, { name: 'Pier Paolo Lamusta', pref: 67 },
    { name: 'Arianna Forleo',       pref: 53  }, { name: 'Gianni Dimitri',     pref: 48 },
    { name: 'Valentina Degirolano', pref: 36  }, { name: 'Michele Fai',        pref: 24 },
    { name: 'Sara Gennari',         pref: 23  }, { name: 'Stefania Morleo',    pref: 14 },
    { name: 'Chiara A. Doria',      pref: 14  }, { name: 'Domenico Scialpi',   pref: 12 },
  ]},
];

const CONSIGLIERI_SAMMARCO = [
  { listName: 'Scelta Comune', color: '#2A7AB8', members: [
    { name: 'Loredana Ingrosso',        pref: 204 }, { name: 'Fabiano Comes',          pref: 193 },
    { name: 'Emiliano Pacifico',        pref: 187 }, { name: 'Maria Teresa Coppola',   pref: 142 },
    { name: 'Alessia C. Scarafile',     pref: 126 }, { name: 'Luigi Stano',            pref: 67  },
    { name: 'Antonio Capogrosso',       pref: 56  }, { name: 'Gloria A. Saracino',     pref: 53  },
    { name: 'Cecilia De Bartholomaeis', pref: 50  }, { name: 'Pasquale Lonoce',        pref: 50  },
    { name: 'Cosimo Dinoi',             pref: 41  }, { name: 'Tiziana Perrucci',       pref: 40  },
    { name: 'Maria Pasanisi',           pref: 39  }, { name: 'Francesca Stranieri',    pref: 35  },
    { name: 'Francesco Pastorelli',     pref: 26  }, { name: 'Giuseppe Quaranta',      pref: 25  },
  ]},
  { listName: 'Manduria Migliore', color: '#1B4F82', members: [
    { name: 'Gregorio Gentile',     pref: 198 }, { name: 'Gregorio Dinoi',       pref: 152 },
    { name: 'Francesca Caroppa',    pref: 150 }, { name: 'Erika Basciò',         pref: 113 },
    { name: 'Antonio Perchio',      pref: 93  }, { name: 'Sergio Sportelli',     pref: 78  },
    { name: 'Caterina Cappelli',    pref: 59  }, { name: 'Barbara Stefanì',      pref: 43  },
    { name: 'Martina Perrucci',     pref: 40  }, { name: 'Leonardo Polignano',   pref: 36  },
    { name: 'Giovanni My',          pref: 35  }, { name: 'Massimiliano Pichierri', pref: 33 },
    { name: 'Federico Bentivoglio', pref: 32  },
  ]},
  { listName: 'Federcivica', color: '#0C3D6B', members: [
    { name: "Mario D'Oria",         pref: 306 }, { name: 'Vincenzo Dimitri',     pref: 254 },
    { name: 'Annamaria De Valerio', pref: 103 }, { name: 'Mimmo Fontana',        pref: 76  },
    { name: 'Cosimo Sammarco',      pref: 47  }, { name: 'Gianpiero Mero',       pref: 42  },
    { name: 'Bruno Dimagli',        pref: 31  }, { name: 'Leonardo Moscogiuri',  pref: 22  },
    { name: 'Leo Stranieri',        pref: 16  }, { name: 'Addolorata Pinto',     pref: 16  },
  ]},
  { listName: 'Partito Democratico', color: '#C0392B', members: [
    { name: 'Maria Grazia Cascarano', pref: 361 }, { name: 'Teo De Cillis',       pref: 139 },
    { name: 'Leonardo Notarnicola',   pref: 105 }, { name: 'Asia Filograno',      pref: 46  },
    { name: 'Vittorio Perrucci',      pref: 42  }, { name: 'Pietro Calora',       pref: 15  },
    { name: 'Gianpiero Bianco',       pref: 13  }, { name: 'Angelo Distratis',    pref: 12  },
  ]},
  { listName: 'Senso Civico – Un Nuovo Ulivo per la Puglia', color: '#4A3A8A', members: [
    { name: 'Nicola Becci',        pref: 319 }, { name: 'Daniela Caprino',     pref: 247 },
    { name: 'Telemaco Farina',     pref: 120 }, { name: 'Maria Calò',          pref: 81  },
    { name: 'Rossella De Cataldo', pref: 51  }, { name: 'Emanuela Buccoliero', pref: 46  },
    { name: 'Giovanni Dimitri',    pref: 42  }, { name: 'Leonardo Pisello',    pref: 35  },
    { name: 'Addolorata Raho',     pref: 30  }, { name: 'Stefania Parco',      pref: 11  },
  ]},
];

const LISTE_2026 = [
  { coal: 'Domenico Sammarco', coalBadge: 'b-cdx', coalLabel: 'Centrodestra', lists: [
    { name: "Fratelli d'Italia", members: [
      'Andrisano Gregorio','Azzone Stefano Pio','Bellocchi Emanuele','Brunetti Eleonora','Chimienti Cosimo',
      'Cotugno Stefania','Dicursi Leonida Sandra','Dinoi Angelo Cosimo',"D'Ostuni Salvatore Francesco",
      'Gioia Maria Antonietta','Giuliano Antonio','Mandurino Silvia','Mariggiò Antonio','Mazza Giuseppe',
      'Mitrangolo Pietro Carmelo','Pastorelli Lucia','Perrucchi Chiara','Perrucci Maria Rosaria',
      'Pesare Carmen','Pezzarossa Giovanni','Pichierri Paolo Giovanni','Pisconti Vincenzo',
      'Puglia Roberto Leonzio Michele','Zizzari Anna Rita',
    ]},
    { name: 'Forza Italia', members: [
      'Brunetti Emanuele','Calò Maria Immacolata',"D'Auria Domenico","D'Auria Giovanni",'Digiacomo Michele',
      'Dilengite Clelia','Dimitri Claudio','Duggento Dario','Duggento Giuseppe','Erario Piergiorgio (Pj)',
      'Giannotta Maria Virginia Antonia','Kaia Mexhid','Leone Antonella','Lomastro Francesco',
      'Maggi Armando Leonardo','Moscogiuri Carolina','Perrone Giuseppe Francesco','Pignataro Renato',
      'Ponno Alessandro Maria','Saracino Paola','Stano Maria Grazia','Stano Roberto Antonio',
      'Tripaldi Antonella','Versi Cosmanna',
    ]},
    { name: 'Lega Salvini', members: [
      'Baldari Anna Carmela','Calò Fausta','Caniglia Simone','Capogrosso Marco','Carbone Anna Chiara',
      'Chimienti Cosimo Antonio','Dinoi Giuseppe','Dimonopoli Salvatore','Distratis Laura',"D'Abramo Stefano",
      'Felice Marco Antonio','Ferretti De Virgilis Francesco','Gici Florenc','Lalla Parco Gianluca',
      'Mangione Mirko','Modeo Denise','Perrucci Angela','Pichierri Amerigo','Prudenzano Maria Silvana',
      'Sammarco Cristina','Sgarra Valentina','Stranieri Serena','Terzaroli Paola','Zito Leonardo',
    ]},
    { name: 'Democrazia Cristiana', members: [
      'Barrano Luigi','Bevilacqua Bellisario','Borgia Michelle','Calò Giovanni (Gianni)','Campeggio Andrea',
      'Cito Vincenzo','Damicis Dario','Daversa Francesco','De Pace Esmeralda','Di Leo Antonietta (Antonella)',
      'Dinoi Cosimo','Distratis Maria Grazia','Erario Domenico','Filomena Maria','Gennari Cosimo Antonio',
      'Gennari Francesca','Martella Luigi','Moccia Leonardo','Modeo Franco','Pesare Debora','Pinto Mariangela',
      'Rochira Francesco Pio','Rodio Cosimo','Sabba Egidio',
    ]},
    { name: 'Noi Moderati', members: [
      'Barbieri Marco','Brunetti Francesca','Brunetti Paola','Buccolieri Luca','Calò Lucia','Damicis Vittorio',
      'Daversa Giovanni','Defazio Daniele','Dimaggio Antonella','Dimitri Anna Olimpia','Dinoi Antonella',
      'Fontana Salvatore Domenico','Gioia Simone','Leone Francesco','Libardi Debora','Libardi Maurizio',
      'Mandurino Paola','Mero Annarita','Mola Patrizia','Perretti Giuseppe Italo Francesco','Piccinni Giovanni',
      'Pisello Flavio','Scredo Daniele','Tripaldi Cristian',
    ]},
    { name: 'Azione Civica', members: [
      'Andrisano Gregorio Fabio','Andrioli Simona','Ariano Tiziana','Baldari Simona','Calò Teodora Doriana',
      'Caroppa Francesca','Ciccarese Leila Arianna',"D'Ostuni Mino Cosimo","D'Uggento Giorgio",
      'Dragan Ionela (Nela)','Durante Rossella','Erario Mattia','Filotico Cinzia','Fistetto Maria Sabina',
      'Gennari Alessio','Gennari Pierpaolo','Lamusta Cosimo (Mimmo)','Latino Livio','Massafra Giuseppe',
      'Musiello Armando','Pernorio Maria Grazia','Scialpi Francesca','Scialpi Ramona','Sportelli Sergio',
    ]},
    { name: 'Partito Liberal Democratico (PLD)', members: [
      'Andrisano Leonardo','Andrisano Paola Silvia','Bianco Gianpiero','Calò Leonardo','Chimienti Denise',
      'De Valerio Annamaria','Di Masi Cosima','Dimagli Pierina Antonia','Dimagli Piermichele',
      'Dinoi Fabio','Dinoi Francesca','Fanizzi Giovanni','Fornaro Danilo','Granata Vincenzo','Lamusta Cosimo',
      'Mangiulli Stefano Ivan','Occhilupo Elsa','Perrucci Tiziana','Pesare Pasquale','Pichierri Fabio',
      'Resta Anna Leonarda (Dina)','Russo Arcangela (Angela)','Sansonetti Giacomo','Stefani Barbara',
    ]},
  ]},
  { coal: 'Vito Andrea Mariggiò', coalBadge: 'b-csx', coalLabel: 'CSX civico', lists: [
    { name: 'Città Più', members: [
      'Buccoliero Giuseppe Fernando','Capogrosso Angelo','Cerza Amedeo',"D'Amuri Sabrina",'Dino Nunzia Anna',
      'Erario Francesca','Filangieri Adele','Fusco Nellina Katia','Lamusta Pier Paolo','Marsala Silvia',
      'Mastrovito Fabrizio','Moscogiuri Giovanni','Orsini Alessia','Paludi Sara','Parisi Antonella',
      'Pecoraro Gregorio','Perrucci Valeria','Pichierri Maria','Raimondo Pietro','Rossetti Andrea',
    ]},
    { name: 'Mariggiò Sindaco', members: [
      'Barbieri Pasquale','Brunetti Anna Maria','Dinoi Gianluca','Di Lorenzo Piera Carmen','Fasano Ferdinando',
      'Filoni Bernardino Mario (Dino)','Fusco Daniela','Hysa Arber','Lamusta Luigia','Lenti Marco',
      'Marasco Massimiliano','Mariggiò Antonella','Mariggiò Giuseppe','Matino Michele','Paludi Valeria',
      'Pizzi Annalisa','Pompigna Giuseppina','Ricchiuti Maria','Sammarco Serena','Zingariello Pietro',
    ]},
    { name: 'Laboratorio Democratico', members: [
      'Andrisano Luana','Baldari Isidoro Mauro','Broccardo Maria Chiara','Brunetti Stefania','Cioccioli Claudio',
      'Dinoi Mirko','Dilauro Dario','Dimonopoli Pamela','Gallù Luana','Greco Fabio','Guerriero Morgana Matilda',
      'Gningue Adja Fatima','Ingrosso Loredana','Magliola Luana','Maiorano Andrea','Massari Sara',
      'Morleo Stefania','Perchio Antonio','Pichierri Massimiliano','Pizzaleo Andrea','Raddi Leonardo',
      'Rollo Vincenzo','Scialpi Filippo','Scorrano Chiara',
    ]},
  ]},
  { coal: 'Cosimo Lariccia', coalBadge: 'b-ind', coalLabel: 'Civico Noscia', lists: [
    { name: 'Manduria Noscia', members: [
      'Antermite Fabio','Breccia Paolo Antonio','Calò Daniele','Calò Fiorella','Colucci Fabio',
      'De Stradis Maria','Desantis Massimo Antonio',"D'Ostuni Angelo",'Jankanicova Silvia','Magli Angela',
      'Mascolo Fabio','Mero Stefania','Messore Irene','Montesardo Antonio','Montesardo Danilo',
      'Nardelli Alessandro','Olivieri Antonio','Patrono Enrica','Ribezzo Alessandro','Santo Dario',
      'Sozzi Costanza','Tatullo Gianluca','Tavares Akim','Venga Marcello',
    ]},
    { name: 'Lista Lariccia', members: [
      'Attanasio Simone','Benegiamo Lorenzo','Brandelli Gianna','Buccolieri Francesco','De Luca Luigi (Gigi)',
      'Di Lauro Simone','Dinoi Leonardo','Erario Elvira','Giannini Nadia','Greco Giuseppe',
      'Lionetti Antonio','Lionetti Loredana','Modeo Giulia','Montanelli Ismaele','Notarnicola Giuseppe',
      'Occhilupo Gianluca','Perrucci Angela','Perrucci Giuseppe','Roberto Armando','Rubino Flavia',
      'Rubino Franco','Sammarco Lorenzo','Saponaro Isa','Tornese Ilaria',
    ]},
  ]},
  { coal: 'Fabiana Rossetti', coalBadge: 'b-m5s', coalLabel: 'M5S', lists: [
    { name: 'M5S', members: [
      'Biasco Giovanni','Buccoliero Renato','De Santis Omar Romeo','Dimitri Claudia','Dimitri Nicola (Nico)',
      'Dinoi Valeria','Giordano Piter Cosimo','Greco Antonio','Greco Gregorio','Iunco Simone',
      'Mero Umberto','Mocavero Martina','Notarnicola Alessio','Palummieri Carola','Perrucci Vito',
      'Piccinni Gregorio (Gregory)','Polimeno Sebastiano (Semmi)','Sammaro Gregorio Salvatore',
      'Spada Federica','Stano Loredana','Tedesco Ileana','Tripaldi Maria (Mariella)',
    ]},
  ]},
  { coal: 'Stefania Ruggieri', coalBadge: 'b-csx', coalLabel: 'A Sinistra! (AVS+SI+RC+PD+Demos+civici)', lists: [
    { name: 'A Sinistra!', members: [
      'Buccolieri Antonio','Caforio Alessia','Calò Salvatore (Sasà)','Cavaliere Emilia','Cifaldi Roberto',
      'Consoli Enrico','Daggiano Giuseppina (Giusy)','Damicis Antonio','Di Noi Fiorenzo','Dinoi Daniele',
      'Fais Francesca','Fais Luigi','Filomeno Cosimo (Mimmo)','Fistetto Gabriella','Fontana Vincenzo',
      'Gennari Marianna','Ginestra Maria','Mariggiò Anna','Migliaresi Luca','Pacifico Emiliano',
      'Pasanisi Paola','Schiavoni Giovanni Leonardo (Vanni)','Stano Pompeo','Tedesco Luigina',
    ]},
  ]},
  { coal: 'Ferdinando Arnò', coalBadge: 'b-ind', coalLabel: 'Civico', lists: [
    { name: 'MANDURIAmò', members: [
      'Arcaldini Alessandra','Attanasio Luca','Bay Marco Simone Pietro','Ciliberti Roberto',
      'Daversa Simona','Di Lauro Francesco','Durante Arcangelo','Gennari Sonia','Giuda Giuseppe',
      'Marangella Annalisa','Pinto Raffaele Ildebrando','Prudenzano Giuseppe','Quaranta Agostino',
      'Rizzo Floriana','Rodia Rita','Suma Luciana','Trisolini Carlo','Trotta Claudio Giovanni Umberto',
    ]},
  ]},
];

const TRACKING = [
  { name: 'Maria Grazia Cascarano', list20: 'PD',                         pref: 361, coal20: 'Sammarco', status: 'Non trovata',       pos26: '—' },
  { name: 'Nicola Becci',           list20: 'Senso Civico',                pref: 319, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: "Mario D'Oria",           list20: 'Federcivica',                 pref: 306, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Gregorio Perrucci',      list20: 'Città Più',                  pref: 273, coal20: 'Pecoraro', status: 'Non trovato',       pos26: '—' },
  { name: 'Gregorio Dinoi',         list20: 'Pecoraro Sindaco',            pref: 267, coal20: 'Pecoraro', status: 'Non trovato',       pos26: '—' },
  { name: 'Vincenzo Dimitri',       list20: 'Federcivica',                 pref: 254, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Daniela Caprino',        list20: 'Senso Civico',                pref: 247, coal20: 'Sammarco', status: 'Non trovata',       pos26: '—' },
  { name: 'Fabrizio Mastrovito',    list20: 'Pecoraro Sindaco',            pref: 225, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Andrea Mariggiò',        list20: 'Città Più',                  pref: 217, coal20: 'Pecoraro', status: 'Candidato sindaco', pos26: 'Candidato sindaco CSX civico' },
  { name: 'Loredana Ingrosso',      list20: 'Scelta Comune',               pref: 204, coal20: 'Sammarco', status: 'Cambia candidato', pos26: 'Lista Lab. Democratico — coal. Mariggiò' },
  { name: 'Gregorio Gentile',       list20: 'Manduria Migliore',           pref: 198, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Fabiano Comes',          list20: 'Scelta Comune',               pref: 193, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Emiliano Pacifico',      list20: 'Scelta Comune',               pref: 187, coal20: 'Sammarco', status: 'Cambia candidato', pos26: 'Lista A Sinistra! — coal. Ruggieri' },
  { name: 'Luigia Lamusta',         list20: 'Pecoraro Sindaco',            pref: 183, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Mariggiò Sindaco — coal. Mariggiò' },
  { name: 'Serena Sammarco',        list20: 'Pecoraro Sindaco',            pref: 160, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Mariggiò Sindaco — coal. Mariggiò' },
  { name: 'Pasquale Pesare',        list20: 'Mov. Dem. con Manduria',      pref: 160, coal20: 'Pecoraro', status: 'Non trovato',       pos26: '—' },
  { name: 'Michele Matino',         list20: 'Città Più',                  pref: 152, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Mariggiò Sindaco — coal. Mariggiò' },
  { name: 'Gregorio Dinoi (MM)',    list20: 'Manduria Migliore',           pref: 152, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Francesca Caroppa',      list20: 'Manduria Migliore',           pref: 150, coal20: 'Sammarco', status: 'Cambia coalizione', pos26: 'Lista Azione Civica — coal. Sammarco CDX' },
  { name: 'Maria Teresa Coppola',   list20: 'Scelta Comune',               pref: 142, coal20: 'Sammarco', status: 'Non trovata',       pos26: '—' },
  { name: 'Teo De Cillis',          list20: 'PD',                         pref: 139, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Piero Raimondo',         list20: 'Pecoraro Sindaco',            pref: 135, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Mauro Baldari',          list20: 'M5S',                        pref: 126, coal20: 'Pecoraro', status: 'Cambia candidato', pos26: 'Lista Lab. Democratico — coal. Mariggiò' },
  { name: 'Telemaco Farina',        list20: 'Senso Civico',                pref: 120, coal20: 'Sammarco', status: 'Non trovato',       pos26: '—' },
  { name: 'Antonella Parisi',       list20: 'Pecoraro Sindaco',            pref: 112, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Agostino Capogrosso',    list20: 'Città Più',                  pref: 110, coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Annamaria De Valerio',   list20: 'Federcivica',                 pref: 103, coal20: 'Sammarco', status: 'Stesso candidato',  pos26: 'Lista PLD — coal. Sammarco CDX' },
  { name: 'Alessia Orsini',         list20: 'Pecoraro Sindaco',            pref: 94,  coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Vito Perrucci',          list20: 'Mov. Dem. con Manduria',      pref: 92,  coal20: 'Pecoraro', status: 'Non trovato',       pos26: '—' },
  { name: 'Filippo Scialpi',        list20: 'Città Più',                  pref: 89,  coal20: 'Pecoraro', status: 'Stessa area',       pos26: 'Lista Lab. Democratico — coal. Mariggiò' },
  { name: 'Sergio Sportelli',       list20: 'Manduria Migliore',           pref: 78,  coal20: 'Sammarco', status: 'Stesso candidato',  pos26: 'Lista Azione Civica — coal. Sammarco CDX' },
  { name: 'Pier Paolo Lamusta',     list20: 'M5S',                        pref: 67,  coal20: 'Pecoraro', status: 'Cambia candidato', pos26: 'Lista Città Più — coal. Mariggiò' },
  { name: 'Fabiana Rossetti',       list20: 'Mov. Dem. con Manduria',      pref: 61,  coal20: 'Pecoraro', status: 'Candidata sindaca', pos26: 'Candidata sindaca M5S 2026' },
  { name: 'Pompeo Stano',           list20: 'Città Più',                  pref: 33,  coal20: 'Pecoraro', status: 'Cambia candidato', pos26: 'Lista A Sinistra! — coal. Ruggieri' },
  { name: 'Massimiliano Pichierri', list20: 'Manduria Migliore',           pref: 33,  coal20: 'Sammarco', status: 'Cambia candidato', pos26: 'Lista Lab. Democratico — coal. Mariggiò' },
  { name: 'Stefania Morleo',        list20: 'M5S',                        pref: 14,  coal20: 'Pecoraro', status: 'Cambia candidato', pos26: 'Lista Lab. Democratico — coal. Mariggiò' },
  { name: 'Gianpiero Bianco',       list20: 'PD',                         pref: 13,  coal20: 'Sammarco', status: 'Cambia coalizione', pos26: 'Lista PLD — coal. Sammarco CDX' },
];

const PROIEZIONE = [
  { name: 'Domenico Sammarco',   area: 'Centrodestra',  badge: 'b-cdx', stima: 7900, min: 7200, max: 8500, color: '#C0392B' },
  { name: 'Vito Andrea Mariggiò', area: 'CSX civico',   badge: 'b-csx', stima: 3200, min: 2800, max: 3700, color: '#2D6A4F' },
  { name: 'Stefania Ruggieri',   area: 'Sinistra / PD', badge: 'b-csx', stima: 1700, min: 1400, max: 2100, color: '#4A3A8A' },
  { name: 'Fabiana Rossetti',    area: 'M5S',           badge: 'b-m5s', stima: 1100, min: 900,  max: 1400, color: '#D08C1A' },
  { name: 'Cosimo Lariccia',     area: 'Civico Noscia', badge: 'b-ind', stima: 950,  min: 700,  max: 1300, color: '#888' },
  { name: 'Ferdinando Arnò',     area: 'Civico',        badge: 'b-ind', stima: 350,  min: 200,  max: 500,  color: '#AAA' },
];
