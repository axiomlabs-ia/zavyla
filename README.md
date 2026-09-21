# Zavyla — Oltre la pelle

Concept navigabile con una scena 3D WebGL reale e una direzione editoriale avorio. I flaconi sono mesh esportate dalle scene Blender del progetto, visualizzate con Three.js. La home e i visualizzatori prodotto non usano sequenze di immagini.

## Avvio

```sh
npm ci
npm run build      # assets/app.bundle.js + assets/forgive-lab.js
npm run serve      # http://localhost:4173
```

È necessario HTTP per moduli ES e file GLB. La pagina carica il bundle
`assets/app.bundle.js`: dopo ogni modifica ai moduli sorgente va rilanciato
`npm run build`, altrimenti il browser continua a servire il bundle precedente.

## Pubblicazione

Il sito è statico: GitHub Pages serve la radice del repository sul branch `main`.
`node_modules/` non viene pubblicato — al suo posto c'è il bundle.

## Disegno (R50)

Il foglio di stile e' stato riscritto da zero: i blocchi `R##` sovrapposti si
contraddicevano fra loro. Idea centrale: tavole stampate di un taccuino da
profumiere. La tipografia porta il peso, le filature sono struttura, l'unica
cosa che si muove davvero e' il flacone.

- **Due caratteri, nessun Arial.** Cormorant Garamond per i display (era gia'
  del marchio), Geist per interfaccia e testo corrente: 29 KB di sottoinsieme
  latino, ospitato in locale, licenza OFL.
- **Il fondo resta avorio `#f0eee7` per vincolo, non per gusto:** e' il colore
  con cui la scena WebGL pulisce il buffer, ed e' il fondo dei render di
  catalogo e delle foto prodotto. Un altro colore metterebbe un alone attorno a
  ogni flacone. Accento unico: l'ametista della pietra del tappo di Forgive.
- **Via la mobilia del browser:** triangolini di `<details>`, `<select>` di
  sistema, anello azzurro sul contenitore di rotta a ogni navigazione.
- **Occhielli razionati** (uno ogni tre sezioni), niente numerazione decorativa
  delle sezioni, niente coordinate geografiche, niente invito a scorrere.
- **Cofanetti:** quattro fotografie girate in studi diversi ora condividono
  almeno la stessa inquadratura 4:3 e la stessa struttura di scheda.
- In home barra e intestazione galleggiano sopra la scena, che parte da zero:
  prima la hero era alta un viewport ma cominciava 114 px piu' in basso e il suo
  piede finiva sotto la piega.

## Mobile (R47)

- Il titolo della home ha un velo di carta sopra la scena, che esce insieme al
  titolo mentre il flacone sale in ritratto: il pulviscolo non attraversa mai le
  lettere e il flacone resta nitido.
- Pixel ratio, risoluzione di trasmissione e shadow map ridotti sui dispositivi
  touch; al massimo due scene di catalogo vive contemporaneamente invece di sei.
- HDRI dello studio a 1k sui telefoni e 2k sul desktop, al posto dell'unico 4k
  da 23 MB. Le mappe colore della pietra nei GLB sono JPEG: 73 MB → 41 MB.

## Esperienza

- Home: Forgive, Give e Sylind nello stesso spazio tridimensionale, transizioni con rotazioni su più assi, profondità, avvicinamento della camera e parallax del puntatore.
- Trascinamento libero e frecce della tastiera per ruotare i modelli.
- Tutte le 13 schede prodotto hanno il proprio modello GLB. Caricamento su richiesta, un solo contesto WebGL attivo, risorse rilasciate durante la navigazione.
- Pietra con colore 2048 px, normal map e rugosità 1024 px calcolati dai materiali Blender. Etichette alla risoluzione originale. HDRI fotografico Poly Haven Studio Small 09 condiviso con la prova Forgive, rifrazione a risoluzione piena, pixel ratio fino a 2,25 su desktop e 2 su mobile.
- Scorrimento nativo senza intercettare rotella o touch. Riduzione del movimento secondo le impostazioni del sistema, pausa quando la scena non è visibile.
- Catalogo, filtri, ricerca, regali, quantità e carrello locale persistente. Checkout sul sito ufficiale mediante permalink Shopify.

Il rendering WebGL rimane un adattamento dei materiali di Cycles. Il liquido originale del GLB è ora visibile e usa un materiale trasmissivo distinto (IOR 1,36, assorbimento paglierino/ambrato). Un render target HDR cattura prima l’interno; il vetro (IOR 1,47) rifrange questo risultato con pareti sottili e base più spessa. Le etichette restano escluse dalla cattura interna per evitare duplicazioni. Il livello e il menisco provengono dalla geometria Blender: non viene simulata la dinamica fisica del liquido durante il movimento.

Ogni fragranza ha un’atmosfera 3D specifica basata sulle note in `data.js`: petali e fiori, foglie, scorze, zafferano, semi o resine, con pulviscolo leggero. Gli elementi sono evocazioni procedurali, non scansioni botaniche. Seguono il flacone mantenendo un movimento proprio; con movimento ridotto rimangono fermi. In home le atmosfere si concentrano sul flacone protagonista. Sono presenti anche nelle 13 schede prodotto.

Le etichette e il marchio rimangono prototipi. I render statici del catalogo sono immagini; i visualizzatori interattivi usano geometria reale.

## File

- `assets/fonts`: Cormorant Garamond normale e corsivo, subset WOFF2 ospitati localmente; licenza OFL inclusa.
- `fragrance-worlds.js`: associazioni tra fragranze e note, geometrie degli elementi e animazioni.
- `bottle-materials.js`: HDRI fotografico, vetro a due passaggi, essenze e finiture condivisi fra tutti i flaconi e la prova Forgive.
- `scene.js`: scena Three.js, materiali, interazione, animazione, caricamento e smaltimento risorse.
- `app.js`, `style.css`, `index.html`: interfaccia, routing, catalogo e carrello.
- `data.js`: copia dei dati del catalogo ufficiale e ID varianti, non sincronizzata in tempo reale.
- `assets/models/*.glb`: 13 modelli esportati con geometrie, UV e texture incorporate.
- `scripts/export_webgl.py`: esportazione Blender e baking delle texture della pietra, senza cambiare i .blend originali.
- `scripts/check.cjs`: test Playwright con l’installazione locale di Chromium. `--visual` cattura solo la home.
- `assets/products`: render statici per catalogo e sezioni editoriali. Le vecchie sequenze in `assets/turntable` e `assets/spin-*` sono conservate come sorgenti, ma non sono utilizzate dall’app.

## Verifica e limiti

Verifiche Chromium desktop/mobile: caricamento GLB, canvas con geometria, rotazione da tastiera, scorrimento tra capitoli, navigazione e rilascio dei contesti, catalogo, filtri, carrello, assenza di overflow e movimento ridotto. I test headless non certificano le prestazioni GPU su tutti i telefoni.

Il negozio pubblico non è stato modificato. Prezzi e disponibilità si confermano sul sito ufficiale. Nessun pagamento viene raccolto da questa anteprima. Per pubblicare occorrono integrazione Shopify, contenuti e asset finali del marchio e verifica sui dispositivi di destinazione.

## Forgive — studio della materia (prova su un solo flacone)

Aprire **http://localhost:4173/forgive.html**, raggiungibile anche dal collegamento Studio Forgive nel footer.

- Renderer separato con `three-gpu-pathtracer`, 16 rimbalzi, HDRI fotografico Poly Haven `studio_small_09`, fondale continuo e volumi distinti per vetro/liquido. Nessuna sequenza di immagini.
- Avvio in 3D interattivo stabile, con due passaggi per vetro e liquido. Nessun accumulo a riposo. “Confronto statico” inizializza il path tracer solo su richiesta e accumula fino a 512 campioni; un movimento della camera, un ridimensionamento o il reset torna al 3D interattivo, senza ripartenza automatica. Il filtro spaziale del confronto attenua il rumore con possibile perdita di microdettaglio. Le due modalità non hanno una resa identica: il liquido della modalità immediata richiede ancora affinamento.
- Cardamomo: capsule geometriche con texture derivata dalla macro di Didier Descouens, CC BY-SA 4.0. È una ricostruzione fotografica, non una scansione. Texture e geometria della capsula (`podGeometry` in `src/forgive-lab.js`) sono CC BY-SA 4.0. Fonte e licenza in `assets/forgive-study/credits.html`. Non sono ancora presenti asset fotografici per tutte le note.
- `assets/forgive-study/forgive-study.blend` e `cycles-reference.png`: scena e render Cycles separati per valutare la materia. Non sono una corrispondenza pixel-per-pixel: trasformazioni degli elementi, color management e assorbimento differiscono.
- Tutte le 13 fragranze, la home e la maison usano ora gli stessi materiali interattivi e l’HDRI fotografico della prova. Il confronto progressivo resta soltanto nello studio Forgive, su richiesta. Etichetta e geometria restano ricostruzioni provvisorie.

Build: `npm run build:study --prefix web/zavyla`.
Test: `node web/zavyla/scripts/check.cjs --lab`; aggiungere `--full` per attendere 512 campioni a risoluzione piena. Verifica accumulo reale, passaggio alla rasterizzazione, rotazione da tastiera, ripartenza dell'accumulo e layout mobile. Il parametro `?test=1` dimezza la risoluzione interna per la GPU software di Chromium; la pagina normale rende alla risoluzione del canvas (DPR massimo 1,5). I test non misurano le prestazioni di una GPU fisica o di un telefono reale.

Verifica completata il 17 settembre 2026: Chromium headless, viewport 900×850, rendering a risoluzione piena fino a 512 campioni, controllo visivo del risultato; passaggio Anteprima/Luce fisica, rotazione da tastiera, ripartenza dell’accumulo e layout 390×844 superati, senza errori JavaScript. Rimane rumore fine nel liquido; il filtro rende alcuni dettagli più morbidi rispetto al riferimento Cycles. Prestazioni su GPU fisiche e telefoni non misurate.

Aggiornamento interazione: il test breve controlla avvio senza istanziare il path tracer, rotazione senza accumulo, confronto esplicito, annullamento al movimento e assenza di ripartenza a riposo. Il test `--full` mantiene la verifica a 512 campioni.

Estensione catalogo: nessun path tracer viene importato dal visualizzatore del sito. Home, schede prodotto e maison rendono subito a ogni fotogramma. Gli elementi botanici delle altre fragranze restano evocazioni procedurali; questa estensione riguarda i flaconi, i loro materiali e l’illuminazione, non nuove scansioni degli ingredienti.

Verifica estensione superata: home e transizioni scroll, tutte le 13 schede GLB con HDRI fotografico e modalità interattiva, rotazione da tastiera, catalogo/filtri, carrello, layout mobile, movimento ridotto e maison. Controllo visivo di Forgive, Promise, Occhio di Tigre e Sylind.

### Revisione della materia e delle atmosfere

Il visualizzatore interattivo usa ora Brown Photostudio 05 (Poly Haven, CC0, risorsa locale). La rifrazione del vetro combina la cattura dell’interno con un campionamento dello studio, più marcato nella base: è un’approssimazione in tempo reale, non un calcolo completo dei rimbalzi. Il liquido varia l’assorbimento con una stima dello spessore attraversato. Le etichette hanno un micro-bump derivato dalla mappa Roughness di Painted Plaster Wall (Poly Haven, CC0), adattato per suggerire la carta.

Le atmosfere conservano i precedenti elementi flottanti e aggiungono 430–720 particelle di polvere su più dimensioni; sei composizioni includono anche 58 piccoli granuli istanziati. Polveri e granuli sono evocazioni procedurali, non nuove scansioni di ingredienti. Nessun acquisto effettuato.

R04: riflessi attenuati sul corpo del flacone e contributo dello studio confinato alla base; ripristinata una lettura più evidente del livello e del colore dell’essenza. Numero di revisione visibile e URL delle risorse aggiornati per distinguere le anteprime e forzare il recupero delle modifiche.

### R05 — carta, lamina e liquido mobile

Le maschere `lamina_oro.png` originali dei 13 prototipi pilotano separatamente metallicità e rugosità: carta opaca e microgranulosa, scritte/cornice lucide. Una piccola geometria aggiunge lo spessore del bordo di carta. Mappe in `assets/materials/labels`; nessuna nuova grafica inventata.

`liquid-motion.js` ricava la cavità dalle pareti interne del GLB. Una superficie libera taglia il volume, segue la gravità e risponde al movimento con un oscillatore smorzato; una piccola ondulazione resta dopo la rotazione. Il volume è stimato con campioni deterministici della cavità e mantenuto al variare dell’orientamento. È una simulazione visiva, non CFD: niente schizzi, bolle o vortici. Il vecchio livello solidale al flacone è sostituito nella home, nelle 13 schede prodotto e nella maison. Lo studio separato Forgive resta un confronto statico dei materiali.

Test numerico: `node web/zavyla/scripts/check-fluid.mjs` verifica orientamenti 0–360°, allineamento alla gravità dopo assestamento, superficie confinata, volume entro il 2,5% nel recipiente cilindrico di prova e smorzamento. Movimento ridotto: niente oscillazioni residue.

### R06 — ambientazioni olfattive

`fragrance-settings.js` costruisce una scenografia 3D per ogni fragranza: fondale continuo, terreno, vegetazione radicata, elementi di primo piano e dettagli atmosferici. I vecchi elementi sospesi restano come livello intermedio. Le scene cambiano con il profumo nella home e sono presenti in tutte le schede. La composizione desktop della home libera il lato del testo; su mobile la scenografia si restringe lateralmente. I materiali, le geometrie, il liquido e le etichette dei flaconi R05 non vengono modificati.

| Profumo | Ambientazione |
| --- | --- |
| Forgive | Giardino delle spezie, gelsomino e affioramenti minerali |
| Promise | Serra del tabacco, lavanda e legno |
| Listen | Giardino rosa e letto di petali |
| Enjoy | Bosco di cedro e lavanda |
| Give | Agrumeto dorato, mandarini e zafferano sospeso |
| Trust | Giardino dell’incenso, rose e veli atmosferici |
| Speak | Iris, polveri e materia minerale |
| Share | Serra del mattino, fiori chiari e violetti |
| Irish Whiskey | Radura di vetiver e radici |
| Silky | Riva chiara, acqua increspata e vegetazione palmata |
| Occhio di Tigre | Sentiero del sandalo e fiori gialli |
| Amund | Terra del cacao, foglie di tabacco e legni |
| Sylind | Giardino verde di tiglio e fiori bianchi |

Sono interpretazioni scenografiche delle note in `data.js`, non ricostruzioni botaniche scientifiche. Nessun render progressivo e nessuna immagine statica sostituiscono il flacone. Le texture ambientali derivano da risorse Poly Haven CC0 già locali; crediti in `assets/environments/README.txt`. Movimento ridotto mantiene ferme anche vegetazione e velature.

Verifica R06: test completo superato su tutte le 13 schede, transizioni home, interazione del liquido, catalogo, carrello, mobile e movimento ridotto. Controllo aggiuntivo `node web/zavyla/scripts/check.cjs --settings` sulle scene Forgive, Silky e Amund con movimento ridotto: texture ambientali attese prima dello stato ready, nessun errore shader. Le vegetazioni sono volutamente ricostruzioni scenografiche procedurali; non si rivendica fotorealismo botanico.

R07 — Dettagli ambientali e continuità della hero

Le finestre di transizione .26–.42 e .56–.72 governano insieme movimento dei
flaconi, testi e ambienti. I due ambienti vengono renderizzati separatamente e
miscelati in spazio lineare; la correzione tonale avviene una sola volta alla fine.
Il doppio rendering è attivo soltanto durante il passaggio. I nomi escono ed
entrano nella stessa finestra, senza sovrapporsi e senza timer CSS. Lo scroll
inverso segue lo stesso percorso. I capitoli non attivi sono inert.

Ambienti: geometrie più fitte per petali, frutti e foglie; venature e variazione
cromatica procedurali, rilievo fine, stami, sepali, rami assottigliati, coste dei
baccelli, legno con normal map e terreno con distribuzione irregolare dei grani.
Gli elementi sospesi condividono i materiali della scenografia. Questi elementi
restano modelli procedurali, non scansioni botaniche. Flaconi, ottica, etichette
e simulazione del liquido R05 invariati.

Verifica specifica: `node web/zavyla/scripts/check.cjs --transitions` controlla
sincronizzazione, inversione dello scroll, salti di capitolo ed errori shader.
Il costo del compositing va misurato sui dispositivi reali: il browser di test
usa una GPU software e non certifica la fluidità su hardware mobile.

R08 — Cambio di approccio, prova concentrata su Forgive

L'ambiente Forgive sostituisce la vegetazione e le rocce procedurali R07 con
asset Poly Haven e texture fotografiche 2K. Il terreno usa Brown Mud Leaves 01;
le rocce Rock Moss Set 01; il verde Periwinkle Plant. La pervinca è vegetazione
scenografica, non una rappresentazione botanica del gelsomino. Le foglie hanno
maschera di opacità, depth e ombre; i petali sospesi artificiali di Forgive sono
rimossi. Una luce dedicata alla scenografia, sul layer 1, aggiunge ombre locali
senza modificare l'illuminazione approvata del flacone. Le altre dodici
ambientazioni rimangono R07: questa è una prova di qualità prima dell'estensione.
Fonti e licenze: assets/environments/scans/README.md.

R09 — Scena essenziale: fumo, polvere, granelli in movimento

Rimossi dal runtime tutti i paesaggi R06–R08 su tutti i profumi. I file sorgente
rimangono disponibili, ma nessun modello o texture del paesaggio viene caricato.
Sfondo avorio uniforme, senza terreno o vegetazione. I flaconi mantengono ottica,
etichetta e liquido approvati. Le traiettorie restano nello spazio della scena,
non sono oggetti rigidamente agganciati alla rotazione/traslazione del flacone.

particle-motion.js campiona traiettorie analitiche con emissione, velocità,
resistenza e gravità per la materia pesante; risalita e dispersione per il fumo.
Due emissioni sfalsate mantengono continuità senza orbite perpetue. Ogni particella
svanisce prima del riciclo. Sono traiettorie artistiche con leggi cinematiche,
non una simulazione CFD o collisioni complete con il flacone. Il fumo usa strati
trasparenti con rumore multiscala. Reduced motion congela una posa deterministica.

Riferimenti studiati (nessun contenuto visivo copiato):
- Studio River, concept profumo e continuità del movimento:
  https://insydium.ltd/news/case-studies/behind-the-scenes-at-studio-river/
- SideFX Dancing Smoke, emissione di particelle e smoke:
  https://www.sidefx.com/contentlibrary/dancing-smoke/

Verifiche: scripts/check-particle-motion.mjs; check.cjs --particles;
check.cjs --transitions. Eliminato il doppio compositing degli ambienti: ora
restano solo i due passaggi necessari all'ottica approvata del vetro/liquido.

R10 — Prova concentrata su Forgive, effetti solidali al flacone

La hero parte con Forgive soltanto: rimosse le pose iniziali dei due flaconi
satellite e il loro salto a .14. Ogni gruppo di effetti è ora figlio del pivot
del proprio flacone. Traslazione, rotazione, scala e visibilità coincidono:
non resta più una nube ferma quando il flacone esce. Restano i movimenti interni
delle particelle, relativi al flacone. La dissolvenza prematura degli effetti
tramite peso del capitolo è rimossa; escono dalla scena insieme al prodotto.

Solo Forgive usa il nuovo volume: forgive-volume.js integra un campo di densità
3D con ray marching (32 campioni), rumore periodico e advezione. È un modello
volumetrico artistico, non una simulazione fluidodinamica completa; l'illuminazione
interna è approssimata. La forma mantiene libera la silhouette del flacone.
Polvere fine: 4500 particelle; grani piccoli: 240; baccelli: 24 con rilievi e
texture cardamom-surface.jpg già documentata nei crediti CC BY-SA del laboratorio.
Gli altri profumi conservano gli effetti R09, ma seguono già il rispettivo pivot.
Materiali e geometria dei flaconi, etichette e liquido non modificati.

Controlli R10: check.cjs --particles, --transitions, --prototype. Il controllo
prototype confronta Forgive fermo e inclinato; transitions verifica una sola
boccetta iniziale e visibilità comune del prodotto e degli effetti lungo lo
scroll e al ritorno. Screenshot /tmp/zavyla-R10-prototype*.png.

R11 — Mezzo giro e coreografia guidata dallo scroll

La hero passa da 550svh desktop / 490svh mobile a 300svh. Forgive termina il
suo capitolo a .34 del percorso: circa .68 altezze dello schermo. La rotazione
è monotona e limitata a 180° per ogni flacone; rimosse oscillazioni, giri
aggiuntivi e zoom. Nomi e passaggi usano le stesse finestre .23–.34 / .56–.67.
I pulsanti dei capitoli portano alle nuove posizioni.

Gli ingredienti sono ora fratelli del flacone, condividono traslazione, scala
e visibilità ma NON la sua rotazione. Hanno curve e orientamenti distinti.
Il progresso locale del capitolo governa sia la bottiglia sia i materiali:
nessun lancio ciclico, emissione continua o clock indipendente. Fermando lo
scroll si ferma la coreografia; tornando indietro si ripercorre la stessa scena.
Il vetro e il liquido mantengono il loro comportamento approvato.

Prova ingredienti Forgive: 32 baccelli di cardamomo con texture fotografica,
84 grani di pepe nero con superficie irregolare, 10 baccelli di vaniglia curvi,
240 granelli e 4500 particelle fini. Sono tre note presenti in data.js;
non rappresentano tutta la piramide olfattiva. Solo Forgive riceve questi
nuovi ingredienti; la durata e la sincronizzazione valgono per tutta la hero.

Verifica corrente: `node web/zavyla/scripts/check.cjs --choreography`.
Il test controlla i 180°, la lunghezza dello scroll, ingresso/uscita comuni,
assenza di moto autonomo, ritorno sui capitoli, console e immagini intermedie.

R12 — Etichetta sempre sul lato frontale e scie sui tre capitoli

La rotazione automatica ora attraversa -60°, 0°, +60°: etichetta a sinistra,
centrata a metà gesto e a destra in uscita. La durata R11 resta invariata
(300svh complessivi, primo cambio dopo circa .68 altezze dello schermo).
Il trascinamento manuale rimane libero. Nessuna modifica ai materiali approvati
di flaconi, etichette o liquido.

Il volume è più sottile e meno denso, con colori chiari invece dell'ombreggiatura
scura precedente. Il medesimo trattamento volumetrico è presente nei tre capitoli:
Forgive caldo, Give dorato, Sylind salvia. Tutti restano sullo stesso fondo avorio.
Gli ingredienti dettagliati di Forgive restano quelli R11; questa revisione non
aggiunge nuovi ingredienti agli altri due profumi.

Verifica: check.cjs --choreography controlla limiti dell'arco frontale, durata,
scorrimento inverso e presenza del volume per tutti i capitoli. Schermate:
/tmp/zavyla-R12-{0,0.17,0.3,0.505,0.835}.png.

R13 — Ingredienti riconoscibili e filamenti volumetrici

La coreografia R12 e i materiali approvati dei flaconi sono invariati.
Give sostituisce i grani generici con 22 scorze di mandarino (buccia, albedo e
bordi con spessore), 28 petali di rosa e 34 gruppi di stimmi di zafferano.
Sylind usa 22 foglie di tiglio, 24 fiori di gelsomino e 28 fiori di tiglio;
le foglie hanno base incavata, margine dentellato e rilievo delle venature;
i fiori hanno petali, stami e antere. Le forme sono modellate proceduralmente,
non scansioni botaniche. Le note sono verificate rispetto a data.js.
Forgive mantiene cardamomo, pepe nero e vaniglia della revisione precedente.
Le altre dieci fragranze non ricevono in questa revisione i nuovi modelli.

Le scie dei tre capitoli usano tre filamenti intrecciati per lato con densità
modulata, campo 3D a 64³ e 64 campioni di integrazione; rimossa la base diffusa
della foschia. Lo spazio vuoto del volume viene saltato prima del campionamento.
Colori e movimento restano quelli approvati: caldi, dorati, salvia; dipendenti
dallo scroll e con la stessa presenza scenica del rispettivo flacone.
È un volume artistico con advezione, non una simulazione CFD.

Verifiche R13: check.cjs --choreography (note e conteggi, grani generici nascosti
su Give/Sylind, scorrimento, ingresso/uscita, rotazione e console);
check.cjs --settings (le tre schede prodotto e le relative schermate).

R14 — Studio Forgive e tre scie distinte

Forgive riceve un modulo dedicato (forgive-ingredients.js): 30 capsule di
cardamomo trilobate con solchi longitudinali e picciolo, 72 grani di pepe con
silhouette irregolare e rilievo cellulare, 12 baccelli di vaniglia rastremati,
appiattiti e incurvati. Tre varianti geometriche per ogni ingrediente; colori
individuali e superfici a rugosità differenziata. Il cardamomo mantiene la
fotografia già attribuita in assets/forgive-study/credits.html; le altre
superfici sono procedurali, non scansioni. La fotografia viene campionata
su una porzione interna per evitare il fondo nero. Le matrici degli ingredienti
si aggiornano solo al cambiamento del capitolo, senza animazione autonoma.

Le tre scie volumetriche ora hanno topologie e posizioni diverse:
- Forgive: riccioli asimmetrici, dominanti sul lato sinistro.
- Give: percorso diagonale dal basso a sinistra verso un ricciolo alto a destra.
- Sylind: filamenti ascendenti che si separano sopra le spalle del flacone.
Campo 3D con deformazione a più scale, integrazione a 80 campioni, palette
calda/oro/salvia. È ancora un volume artistico, non una simulazione fluidodinamica.
La coreografia approvata, i materiali dei flaconi e il liquido non cambiano.
Il lavoro di dettaglio sugli ingredienti in R14 riguarda Forgive; Give e Sylind
mantengono i modelli botanici R13. Le altre dieci fragranze sono invariate.

Verifiche dedicate: check.cjs --settings (tre prodotti), --refinement (macro dei
modelli effettivi con bump compensato per l'ingrandimento), --choreography
(anche identità delle tre scie) e --prototype (interazione e mobile).
Schermate in /tmp/zavyla-R14-*.png. Il browser di verifica usa SwiftShader:
queste verifiche non certificano le prestazioni su GPU o telefoni reali.

R15 — Più materia e trasmissione delle scie attraverso il flacone

Ingredienti dei tre capitoli aumentati di circa un terzo: Forgive 42 capsule,
96 grani di pepe e 15 baccelli; Give 28 scorze, 36 petali e 44 gruppi di stimmi;
Sylind 28 foglie, 32 fiori di gelsomino e 36 fiori di tiglio. Circa un quinto
degli elementi segue un percorso arretrato che attraversa la sagoma del vetro,
anziché disporsi esclusivamente ai lati. Aumento moderato della polvere fine.
Le tre topologie R14 restano distinte, con estinzione del volume aumentata da
17 a 21 e una scia sottile aggiuntiva dietro il corpo del flacone.

Il buffer di trasmissione standard di Three esclude i materiali trasparenti:
per questo il fumo non attraversava il liquido. bottle-render.js ora cattura
prima l'ambiente completo senza flaconi (inclusi i volumi trasparenti), poi il
liquido che rifrange quell'ambiente, infine il vetro che rifrange il liquido.
Ogni livello campiona un target già completato, senza lettura/scrittura sulla
stessa texture. Il target supplementare segue resize e dispose della scena.
L'assorbimento del liquido è stato alleggerito mantenendo tinta, IOR e superficie
libera. Carta, lamina, tappo e coreografia dei flaconi restano invariati.
La correzione ottica è condivisa dai 13 prodotti, con approssimazione di
rifrazione nello spazio dello schermo; non introduce path tracing progressivo.

check.cjs --transparency usa il GLB effettivo di Forgive e cambia il colore di
un fondale trasparente: differenza media nel liquido >12 livelli RGB, sotto
l'etichetta <2. Risultato misurato: 40.47 e 0. Verifiche aggiuntive: --settings,
check-fluid.mjs e check.cjs --catalog-optics per i 13 flaconi e mobile.
Schermate /tmp/zavyla-R15-*.png e quelle standard del controllo completo.

Nota verifica R15: il vecchio controllo generale è stato interrotto perché
rimaneva bloccato su locator.focus del main durante la hero animata in
SwiftShader. Non viene dichiarato superato. Il controllo mirato del catalogo
usa reduced motion e verifica ogni prodotto dopo il primo stato del liquido
valido. Il dato diagnostico della hero ora segue un flacone visibile invece
dell’ordine asincrono di caricamento dei modelli.

R16 — Ingredienti dettagliati per tutto il catalogo

La libreria botanical-library.js sostituisce i grani generici delle altre dieci
fragranze e aggiorna i modelli di Give/Sylind. Ogni ricetta contiene tre motivi
selezionati dalle note presenti in data.js. Bucce con albedo e bordi di taglio,
petali incurvati con margine irregolare, foglie con picciolo e nervature in
geometria, fiori con sepali/stami/antere, lavanda a spiga, cannella arrotolata,
schegge di legno, radichette di vetiver, cocco a guscio e polpa, lampone a drupeole,
mandorle e frammenti gourmand/resinosi. Sono interpretazioni procedurali delle
note, non scansioni fotografiche né simulazioni botaniche.

Due varianti geometriche per ingrediente, colori individuali, mappe di colore e
rilievo a 512² per pori, fibre, nervature e tessuti. Le geometrie sono istanziate;
i dettagli piccoli usano meno segmenti dei profili principali. Le trasformazioni
si aggiornano solo quando cambia il capitolo. I modelli di Forgive restano quelli
rifiniti, con quantità ulteriormente aumentata: 51 capsule, 111 grani, 18 baccelli.
Give passa a 34 scorze/44 petali/52 gruppi di stimmi; Sylind a 34 foglie/38 fiori di
gelsomino/44 fiori di tiglio. Nessun cambiamento alle scie, alla trasmissione R15,
ai materiali dei flaconi o alla durata dello swipe.

Verifiche: check.cjs --catalog-optics apre i 13 prodotti, controlla ingredienti
nominati, conteggi non nulli, assenza dei grani generici, trasmissione, caricamento
del liquido e mobile; salva /tmp/zavyla-R16-final-<slug>.png.
check.cjs --botanicals mostra i modelli effettivi da vicino per Give, Sylind,
Promise, Silky e Occhio di Tigre, con bump compensato per l'ingrandimento.
Schermate /tmp/zavyla-R16-macro-<slug>.png. Nessuna misura FPS su GPU reale.

R17 — Apertura composta e fila delle tredici fragranze

La hero ha un'introduzione autonoma: Forgive, Give e Sylind compongono un gruppo
con scale, inclinazioni e posizioni diverse. Il gruppo esce, quindi il primo
flacone entra da destra con il proprio copy e i propri ingredienti. Seguono Give
e Sylind. Il tempo dei singoli capitoli resta breve (circa 0,78 viewport), con
rotazione dell'etichetta da sinistra a destra. La sezione passa a 400svh per
aggiungere il prologo; con reduced motion resta una composizione statica di 100svh.

Le tre righe delle collezioni nella home sono sostituite da una fila orizzontale
di tutti i 13 flaconi. Usa i render WebP esistenti, scorrimento nativo con snap,
trascinamento mouse, touch, frecce e tastiera. Il flacone centrale è più grande;
la scheda sincronizzata mostra famiglia, nome, tagline, note di apertura, prezzo,
formato e link specifico. Resize, prima/ultima selezione e cleanup di route sono
gestiti in fragrance-rail.js. Nessuna riproduzione automatica.

Verifica dedicata: check.cjs --layout, composizione iniziale, carousel da 13,
selezione/copy/link, navigazione da tastiera e limiti, mobile senza overflow,
ingresso dei tre singoli capitoli e ritorno alla composizione. Immagini in
/tmp/zavyla-R17-*.png. --prototype controlla l'inquadratura finale desktop/mobile.

R18 — Movimento della composizione e ritratto 3D nel carosello

Il prologo della hero ora cambia orientamento, inclinazione, scala e profondità
in funzione dello scroll: i tre flaconi si ricompongono lungo percorsi diversi,
poi lasciano spazio ai capitoli esistenti. Non è un'animazione automatica: tornando
indietro si percorre la stessa sequenza inversa.

La fila Affinità usa elementi da 340–520 px (310 px mobile), immagini più grandi
e meno vicini contemporaneamente visibili. Solo il flacone selezionato attiva
una scena 3D completa, con gli ingredienti della propria fragranza. All'ingresso
ruota verso il fronte e gli ingredienti si aprono intorno per 1,1 secondi, poi
la scena si ferma. Reduced motion mostra direttamente la posa finale. I vicini
mantengono i render statici. Il ritratto ha un renderer indipendente dalla hero,
creato quando la sezione è vicina al viewport, sostituito alla selezione e
rilasciato all'uscita dalla sezione o dalla route. Durante il caricamento resta
visibile l'immagine. Nessun controllo di rotazione intercetta lo swipe della fila.

Corretto anche il ridisegno dopo resize delle scene ferme: cambiare dimensione
al canvas ora richiede un nuovo frame, anche con reduced motion.
Verifica: check.cjs --live-rail, ingredienti di Give/Trust, una sola scena nella
fila, ingresso di Speak fino alla posa finale, dimensioni desktop/mobile,
rotazioni indipendenti nel prologo, capitolo Forgive e cleanup della route.
Schermate /tmp/zavyla-R18-{live-rail,live-mobile,intro-motion}.png.

R19 — Hero compatta e carosello manipolabile senza riavvio

La home mantiene soltanto “Oltre la pelle”: tre flaconi, ingredienti e scie
condividono la composizione animata. Movimento lento nel tempo e una risposta
contenuta allo scorrimento; reduced motion congela la composizione. Rimossi i
capitoli individuali, i relativi copy e i controlli a punti. La hero non è più
sticky né alta 400svh: occupa circa uno schermo e scorre via normalmente.
“Trova la tua affinità” segue subito; l'introduzione editoriale è spostata dopo
il carosello. Il pulsante nella hero porta direttamente alla fila dei profumi.

Il carosello non riproduce più l'ingresso da zero ad ogni selezione. Conserva
fino a tre scene visitate; per le altre mantiene l'orientamento scelto e lo
ripristina al caricamento. L'immagine rimane fino al primo frame pronto, senza
rimuovere e ricreare il ritratto tornando al vicino precedente. Le scene fuori
dal viewport vengono sospese; tutte le risorse vengono rilasciate alla route.
Solo la scena selezionata mostra gli ingredienti ed è interattiva. Mouse e
touch sul flacone ruotano il modello, senza trascinare contemporaneamente la
fila. Frecce della sezione e trascinamento laterale navigano fra i profumi.

Verifica: check.cjs --short-home. Altezza hero, ordine delle sezioni, assenza di
capitoli, tre mondi visibili, CTA verso i profumi, rotazione mouse, identità del
canvas e orientamento conservati tornando indietro, rotazione con eventi touch
Chromium reali, resize mobile e cleanup alla route: superati. Schermate
/tmp/zavyla-R19-hero.png e /tmp/zavyla-R19-mobile-rotation.png.
I controlli storici dei capitoli R12–R18 sono superati dalla nuova struttura;
per questa home usare --short-home.

R20 — Composizione aperta e carosello interamente 3D

La hero distribuisce i tre flaconi su una composizione più larga, con ritagli
ai bordi dello schermo. Le posizioni si adattano al rapporto del viewport;
gli ingredienti restano più vicini alla propria fragranza, riducendo gli
incroci al centro.

Il carosello non contiene più immagini dei prodotti. Monta in anticipo il
modello selezionato e i due vicini, mantenendo lo stesso canvas quando un
vicino passa al centro. Solo il centro mostra gli ingredienti ed è ruotabile.
Un indicatore discreto copre il caricamento iniziale: nessuna foto viene
sostituita dal modello. Massimo tre scene; orientamenti conservati anche
quando una scena esce dalla finestra e viene poi ricreata.

Verifica: --hero-spacing superato a 1440x900 e 390x844, senza overflow;
--short-home superato: assenza di immagini nel carosello, tre modelli pronti,
identità del vicino preservata entrando al centro, rotazione mouse e touch,
orientamento al ritorno, resize mobile e navigazione al catalogo senza errori.
Schermate: /tmp/zavyla-R20-desktop.png, /tmp/zavyla-R20-mobile.png,
/tmp/zavyla-R20-mobile-rotation.png.

R21 — Hero contenuta e gesto di selezione

Riposizionati e ridimensionati i tre flaconi per riportarli nel viewport,
mantenendo una disposizione triangolare e spazio per il copy su desktop e
mobile. Nel carosello il cambio di selezione avvia un gesto di 1,1 secondi:
piccola rotazione, sollevamento e ritorno alla posizione scelta dall'utente.
Il flacone resta sempre visibile, con lo stesso canvas. Gli ingredienti si
aprono dal centro e il fumo acquista visibilità durante il gesto. Trascinare
il flacone prende il controllo della rotazione; reduced motion mostra subito
la composizione completa senza animazione.

Verifiche R21: --hero-spacing e --short-home superati. Controllati layout
desktop/mobile, rotazione mouse/touch, continuità del canvas, fase intermedia
e completamento dell'animazione di selezione con ingredienti visibili.

R22 — Carosello: separare il gesto dalla preparazione delle scene

Le scene laterali non proseguono il loop per assestare il liquido quando non
sono selezionate. La preparazione del nuovo vicino viene rinviata fino al
termine del gesto centrale; il vicino già pronto rimane lo stesso modello.
La compilazione asincrona include gli ingredienti anche nei modelli laterali,
prima di dichiarare pronta la scena. Il progresso del gesto usa intervalli
limitati a 50 ms: un frame lento non salta direttamente una parte del movimento.
Nessuna riduzione della risoluzione o modifica ai materiali.

Test mirato: --rail-motion verifica che il vicino inattivo non produca frame,
che il nuovo modello non venga montato durante il gesto e che sia pronto dopo.
Le prove automatiche usano SwiftShader: non misurano gli FPS della GPU utente.

Esito: --rail-motion superato con rendering software. Nel controllo
--short-home sono passati continuità dei canvas, rotazione mouse/touch e
resize; il gesto mobile a piena risoluzione ha superato il timeout software
di 90 secondi. La prova di animazione usa ora canvas ridotti solo nel test;
il sito mantiene la risoluzione originale. Nessuna promessa di FPS ricavata
da questi controlli.

R23 — Giro completo del profumo selezionato

Il gesto centrale diventa una rotazione di 360° sul proprio asse in 1,6 s,
con accelerazione e rallentamento morbidi. Nessun sollevamento o pulsazione
della scala. Tutti gli ingredienti della fragranza si aprono intorno al
flacone durante il giro, con ingresso progressivo del fumo. Il giro torna
all'orientamento di partenza; trascinare interrompe l'automatismo mantenendo
l'angolo corrente. Restano compilazione anticipata, vicini inattivi e
preparazione differita del nuovo vicino introdotti in R22.

R24 — Hero ad arco e rotazione rapida

Variante editoriale centrata: titolo su una riga, Forgive grande al centro,
Give e Sylind più bassi ai lati. Ingredienti e fumo accompagnano il trittico;
allo scroll la composizione si apre e i flaconi ruotano in modo coordinato.
Il carosello resta subito dopo una sola schermata di hero. Su mobile il
trittico viene ridimensionato sotto il titolo. Il giro del carosello passa
da 1,6 a 0,85 secondi, con la stessa apertura degli ingredienti.

--hero-spacing superato su desktop e mobile, schermate ispezionate:
/tmp/zavyla-R24-desktop.png e /tmp/zavyla-R24-mobile.png.

R25 — Atmosfere intrecciate e movimento contenuto

La composizione R24 dei flaconi e del titolo resta invariata. Le scie delle
due fragranze laterali convergono verso il centro, con una lieve oscillazione,
una maggiore ampiezza e inclinazioni opposte: ingredienti e fumo si incontrano
negli spazi tra i tre flaconi, anziché formare tre colonne separate.
Nel carosello il movimento percorre complessivamente mezzo giro: 90° verso
il lato e 90° di ritorno, in 0,85 secondi, terminando con l'etichetta frontale.
Il trascinamento può sempre interrompere il movimento all'angolo corrente.

R26 — Etichetta dal lato al centro, senza ritorno

Correzione del gesto R25: un solo movimento monotono dalla posa laterale
(circa -76°) alla posa frontale (0°), sempre in 0,85 secondi. Anche i vicini
sono già orientati lateralmente, evitando un cambio di posa all'ingresso
al centro. Gli ingredienti compaiono insieme al movimento. Reduced motion
mostra direttamente il fronte. Nessuna modifica alla hero.
Il controllo --rail-motion verifica partenza laterale, avanzamento senza
inversione, finale frontale e conservazione delle ottimizzazioni R22.

Nella stessa revisione la hero conserva l'arco R24 ma allarga le distanze
orizzontali e riduce leggermente le scale dei tre flaconi. Ingredienti e
fumo occupano uno strato arretrato (z -0,85 desktop, -0,65 mobile) per evitare
intersezioni con il vetro. Ridotta la densità visiva tramite scala e convergenza
dei gruppi: le scie si incontrano negli spazi, senza addossarsi ai flaconi.
--rail-motion R26 superato, incluso avanzamento dal lato al centro senza ritorno.

R27 — Hero essenziale, carosello protagonista

Nella sola hero resta circa il 22% degli elementi botanici e delle spezie,
il 12% dei punti di polvere, con intensità del fumo al 32%. I tre flaconi,
il titolo e la disposizione restano quelli approvati. La riduzione avviene
sul numero di istanze disegnate, preservando geometrie e materiali dettagliati.

Il carosello cresce a 680 px di altezza desktop e 540 px mobile, con moduli
più larghi e una camera leggermente più vicina (2,95 anziché 3,12). La maggiore
scala dà rilievo al profumo selezionato; rimangono gli ingredienti completi,
la rotazione dal lato al centro e il trascinamento diretto.

R28 — Movimento continuo degli ingredienti nel carosello

L'ingresso dal lato al centro resta R26. Dopo l'ingresso il flacone si ferma,
ma gli ingredienti seguono traiettorie cicliche morbide, con oscillazioni
indipendenti di posizione e orientamento e fumo in evoluzione. Il tempo locale
avanza solo per la scena selezionata; fuori viewport e con reduced motion il
movimento si ferma. I vicini restano inattivi. Nessuna nuova emissione o reset.

Reference per ripensare la hero:
- https://we-rad.com/en/work/vranjes-firenze-in-translation
- https://studiomirage.io/works/margiela
- https://www.pixelismo.it/avau.html

R29 — Prima opzione: copertina editoriale

Nuova hero con Forgive grande in primo piano, Give e Sylind in diagonale su
piani arretrati. Titolo asimmetrico a sinistra e tipografia editoriale; sul
mobile il titolo precede la composizione. Un fondale 3D avorio con luce
sfumata partecipa alle rifrazioni del vetro. La hero non presenta ingredienti:
la narrazione olfattiva resta nel carosello R28, con movimento continuo.
Il trittico reagisce lentamente al tempo, al trascinamento e allo scroll,
restando in una singola schermata prima della sezione vendita.

Verifica --hero-spacing adattata alla hero senza ingredienti: tre flaconi
visibili, effetti nascosti, nessun overflow o errore desktop/mobile.

R30 — Seconda opzione: macro della materia

La hero apre su un dettaglio molto ravvicinato del tappo in pietra e della
spalla in vetro. Scorrendo per 0,55 viewport, la posa si allarga e si raddrizza
fino al ritratto completo con etichetta leggibile. Caricato solo Forgive nella
hero; il carosello completo R28 resta invariato. La sezione è alta 155svh e
il palco resta fermo solo durante il breve reveal: poi si arriva ai prodotti.
Reduced motion salta il macro e mostra direttamente il flacone intero in
100svh. La composizione mobile riserva la parte alta al titolo.

Test --macro-hero: apertura macro, finale ritratto, reveal in 0,55 viewport,
layout senza overflow, modalità movimento ridotto e assenza di errori pagina.
Screenshot /tmp/zavyla-R30-{desktop,mobile}-{macro,portrait}.png.

R31 — Dettaglio macro e ingredienti posteriori

La hero usa una densità di rendering minima 2× (massimo 2,5×), con filtro
anisotropico sulle mappe del materiale. Il tappo riceve un dettaglio minerale
procedurale nello spazio dell'oggetto: venature fini, variazioni di colore e
rugosità, rilievo normale meno marcato. Questa finitura è limitata alla hero;
i materiali approvati del catalogo non cambiano. Non è una nuova scansione.

Reintrodotti gli ingredienti di Forgive (cardamomo, pepe nero e vaniglia) al
40% del numero completo, su un piano posteriore z=-1,10. La scala del contorno
è indipendente dallo zoom macro, evitando spezie giganti e intersezioni con
la boccetta ingrandita. Fumo leggero e movimento continuo già esistenti.

Per contenere il costo della macro 2×, nella sola hero il velo usa le particelle
morbide già disponibili al posto del volume raymarched. Il volume del carosello
rimane invariato. Dopo ispezione visiva, ridotti contrasto e spessore delle
venature aggiunte per evitare un aspetto dipinto. I test screenshot sospendono
temporaneamente il loop per acquisire il frame con SwiftShader; l'app non cambia.

R32 — Superficie libera curva del liquido

Sostituito il ventaglio piatto con dieci fasce radiali tessellate: la superficie
scende lievemente al centro e risale vicino alla parete interna del vetro.
Il bordo coincide con il piano di taglio del volume, evitando fessure. Normali
analitiche continue seguono curvatura e onde; due onde deboli si combinano e
crescono con l'energia di oscillazione già calcolata. Reduced motion conserva
il menisco ma ferma le onde. Superficie ottica più sottile, con riflessi propri.
La distribuzione di volume e la risposta alla gravità restano quelle esistenti;
si tratta di un modello visivo, non di una simulazione fluidodinamica completa.

R33 — Contorno più ricco nella macro

Nella hero le istanze delle spezie passano dal 40% all'85% del gruppo completo,
con una distribuzione leggermente più ampia e più polvere fine. Le scie a
particelle ricevono un controllo di densità dedicato (3× nella hero, 1× altrove)
e una visibilità maggiore, mantenendo il piano arretrato z=-1,10. Il carosello
mantiene la propria quantità e intensità di fumo. Onde del liquido leggermente
più leggibili a riposo e durante il movimento, con menisco di profondità .0032.

R34 — Ingredienti già presenti nei flaconi laterali

Nel carosello tutti e tre i modelli visibili mostrano il proprio contorno
completo fin dal primo frame pronto. Eliminati riduzione di scala e fade
legati all'ingresso al centro; restano la rotazione del flacone e il movimento
continuo degli ingredienti centrali. I laterali conservano il contorno visibile
in un frame statico, senza tre loop di animazione concorrenti. La scena vicina
rimane la stessa quando diventa protagonista.

Nella hero ripristinato il 100% delle istanze di spezie (prima 85%) e aumentata
leggermente la polvere fine, mantenendo posizione arretrata e fumo R33.

R35–R36 — Ingredienti, fumo e carico del carosello

Mappe di colore/rilievo botaniche e rilievi delle spezie portati da 512 a 1024
pixel, con dati CPU riutilizzati per tipo e filtro anisotropico sui materiali.
Tutte le tredici fragranze del carosello usano ora fumo a particelle visibile:
rimosso il volume raymarched dal carosello, mantenuto dove già previsto altrove.
Le onde del liquido sono deformate nello shader sulla GPU: il CPU non ricrea
più la superficie ad ogni aggiornamento delle onde. La geometria del menisco
si ricostruisce quando cambiano piano/oscillazione del liquido. Disattivate le
mappe d'ombra nel carosello, che non ha superfici riceventi.

Dodici piccoli frammenti per fragranza riprendono il materiale reale del tappo
caricato (incluse le mappe), con geometria sfaccettata e traiettorie arretrate.
Presenti anche nei ritratti laterali; il movimento segue quello degli ingredienti.
Il materiale è condiviso nelle texture, non duplicato per frammento.

--ingredient-quality superato per tutti i 13 profumi (rilievi 1024px, fumo
visibile leggero). --rail-motion R35 superato: shader senza errori, passaggio
lato/centro, contorni persistenti, movimento continuo solo al centro e mobile.
Sono verifiche funzionali con SwiftShader, non misure degli FPS della GPU utente.

R37 — Composizioni specifiche e dettaglio delle forme

Tredici profili deterministici definiscono traiettorie, semi, rotazione e
proporzioni delle composizioni. Archi, diagonali, curve laterali e scie hanno
parametri diversi per ogni fragranza: ingredienti, polvere, fumo a particelle
e frammenti condividono la direzione della fragranza, con posizioni distinte.
I semi rimangono stabili quando si torna a un profumo; nessun rimescolamento
casuale alla selezione. Le traiettorie restano dietro il flacone.

Tre varianti botaniche per ingrediente anziché due, senza aumentare il numero
di elementi; tessellazione più fine di petali/fiori, rilievo dei margini e
variazioni cromatiche ai bordi. Frammenti con maggiore dettaglio geometrico,
tagli di frattura e forma specifica per fragranza, conservando i materiali
del tappo e dodici istanze. Le mappe 1K e le ottimizzazioni GPU restano attive.

R38 — Dispersione casuale senza forme geometriche

Rimossi archi, anelli, diagonali e scie a colonne. Ogni fragranza usa un seme
stabile e parametri propri di ampiezza, asimmetria e addensamento. Le posizioni
sono campionate in un volume irregolare, con densità morbide e nessun bordo
geometrico visibile. Il centro è alleggerito in modo probabilistico, senza
un foro netto attorno al flacone. Le piccole oscillazioni hanno fasi e velocità
diverse per elemento. Le posizioni di base sono memorizzate per non rifare il
campionamento a ogni frame; tornando a un profumo si ritrova la stessa scena.

R39 — Ingredienti solo sul profumo centrale

Nel carosello le due boccette laterali sono prive di atmosfera. Il profumo
selezionato mantiene la scena precaricata e fa comparire ingredienti, fumo e
frammenti durante gli stessi 0,85 secondi della rotazione, senza sostituire
il flacone. Opacità progressiva e leggero assestamento della composizione;
con movimento ridotto la comparsa è immediata. Le scene laterali restano ferme.
Ingredienti caratteristici ingranditi, rilievi botanici più leggibili e tre
geometrie di frattura più grandi per i dodici frammenti, con le mappe originali
del tappo. Conservate le distribuzioni casuali specifiche di ogni fragranza.

R40 — Atmosfera legata alla posizione nel carosello

La visibilità degli ingredienti segue continuamente la distanza del flacone
dal centro, con una curva morbida fra i centri di due elementi consecutivi.
La scena uscente conserva il proprio contorno durante lo spostamento; quella
entrante lo rivela progressivamente. Il cambio di selezione non tronca più
l'atmosfera. La rotazione del flacone resta indipendente. Ogni contorno rimane
nel canvas del proprio flacone e ne condivide spostamento e scala; a riposo
solo quello centrale è visibile. I vicini ricevono un frame quando cambia
la distanza, senza avviare un ciclo continuo a riposo.

R41 — Contorno ancorato allo schermo e pietre scheggiate

Correzione R40: compensazione della traslazione del carosello e della scala
CSS nel gruppo degli ingredienti, con centro comune nella fascia. Il contorno
sfuma in base alla distanza dal centro senza accompagnare lo spostamento del
flacone. Conservati movimento locale e dissolvenza fra le fragranze.
Sei sagome di pietra per dodici frammenti, cinque piani di frattura obliqui e
sette scheggiature per sagoma; grana geometrica, variazioni di colore delle
fratture, microrilievo e rugosità minerale nello shader. Le mappe e il colore
provengono dal tappo. Nessuna modifica al materiale del tappo stesso.

R42 — Anatomia degli ingredienti e superfici minerali

Petali e foglie con dorso e bordo chiuso sottile, curvature asimmetriche,
variazioni cromatiche e arricciature proporzionate alla dimensione del fiore.
Lavanda con calici e corolle individuali; cocco con fibre aderenti al guscio;
legni con fibre e schegge terminali; resine e frammenti gourmand con superfici
di rottura; scorze con pori geometrici. Solchi e rughe più articolati per le
spezie di Forgive. Pietre con scheggiature angolari, reticolo irregolare di
microfratture e variazioni locali di rugosità. Sono modelli procedurali,
non scansioni fotografiche. Distribuzioni, scale di presentazione e animazioni
rimangono quelle approvate. Verifica aggiuntiva --material-macro per ispezione
ravvicinata, oltre ai controlli dei 13 profumi e del carosello.

R43 — Riduzione del lavoro grafico nel carosello

Riutilizzato lo sfondo già catturato nel passaggio interno del liquido. Il
passaggio finale mantiene lo sfondo originale per conservare il colore e
la gestione tonale. Nel confronto a parità di scena Give: 92 → 49 draw call,
5.349.836 → 3.279.956 triangoli processati nei passaggi; differenza RMS
immagine 0,079 su 255 nel test a 240×320. Queste sono misure di lavoro grafico,
non FPS del dispositivo dell'utente. Geometrie e texture restano invariate.
Materiali botanici trasparenti in singolo passaggio (dorso già modellato),
nessun aggiornamento degli oggetti generici nascosti, nessun ricalcolo delle
particelle a fase invariata. Tolleranza agli arrotondamenti dello scroll per
spegnere completamente i contorni laterali a riposo. Verifica --render-budget.

R44 — Descrizione visibile, storia del brand e catalogo coerente

Carosello dimensionato sull'altezza della finestra: su desktop la fascia
informazioni affianca nome, racconto e prezzo/link; su mobile si impila.
Verificato che descrizione e link entrino a 1785×1025, 1000×800 e 390×844.
La griglia di quattro prodotti in home e il successivo racconto duplicato
sono sostituiti da una sezione Chi siamo: origini, incontro a Roma nel 2011,
nome e visione. Fonte dei fatti: https://zavyla.com/pages/about-us .
Catalogo a tre colonne desktop, due tablet e una mobile, con famiglia,
tagline, collezione e link esplicito. Tredici nuovi JPEG 930×1035 generati
con scripts/render-catalog.cjs dalle scene correnti: materiali, ingredienti,
fumo e pietre. Rendering statico nelle schede per evitare nuovi contesti
WebGL durante la navigazione; il dettaglio del prodotto resta interattivo.

R45 — Catalogo con flaconi realmente interattivi

Sostituite le immagini delle schede del catalogo con scene WebGL, usando gli
stessi modelli, materiali, ingredienti, pietre e passaggi ottici del carosello.
Rotazione diretta tramite trascinamento, tocco e frecce della tastiera. Link
alla scheda separato dal canvas. Nessun cambio immagine → 3D.
Il gestore catalog-viewers.js monta solo le schede visibili (massimo sei),
compila una scena alla volta e rilascia contesto e risorse quando esce dalla
vista. Conserva la rotazione durante le visite nella stessa griglia. Una sola
scena anima continuamente durante hover/focus/interazione; le altre restano
render 3D a riposo. Filtri, ordinamento e cambio pagina smontano il gestore.

R46 — Rimozione manifesto e frame iniziali completi

Rimossa la sezione “Non tutto si spiega. Qualcosa si sente.”; Chi siamo diventa
la sezione 02. Rendering sospeso finché ambiente HDR, modelli e preparazione
della scena non sono completati. Canvas mostrato e ready impostato soltanto
dopo il primo rendering completo dei passaggi ottici. ResizeObserver ora
richiede un ridimensionamento: canvas e render target vengono ridimensionati
insieme al disegno del frame, senza intervallo fra cancellazione e rendering.
Dimensioni invariate non azzerano più il drawing buffer. Correzione preventiva
di due cause di frame vuoti/scuri; i lampi intermittenti sul dispositivo
utente non sono stati riprodotti direttamente.
