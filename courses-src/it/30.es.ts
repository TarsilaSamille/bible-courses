import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('La frase entera'),
  subtitle: T('È arrivata; darlo; al posto del quale'),
  section: T('Lectura y sintaxis'),
  body: C(`## El orden normal, y el sujeto que desaparece

El orden italiano es sujeto, verbo, objeto: «{Maria} {leggerebbe} {il libro}». El adjetivo y la expresión más larga van después, y casi nunca antes. La inversión es posible y no es incorrecta, pero está marcada: suena literario, bíblico o arcaico, no neutro.

El italiano **omite el sujeto** con facilidad, y por eso muchas frases no tienen sujeto a la vista. La primera y la segunda persona pueden omitirse porque el verbo ya los identifica: «{Vengo} domani», «{Parliamo} italiano». La tercera persona solo se omite cuando la frase anterior ya la nombró, y eso es la elipsis de sujeto que aparece oitentas veces: «{Maria} è partita. {È arrivata} alle tre». El verbo {è arrivata} es de tercera singular femenino y no hay nadie delante.

## El pronombre que se funde con el verbo

Algunos verbos funden el pronombre objeto al infinitivo: {dare} + {lo} = {darlo}, {fare} + {lo} = {farlo}, {avere} + {lo} = {averlo}, {potere} + {lo} = {poterlo}, {volere} + {lo} = {volerlo}, {andare} + {ci} = {andarci}. Lo mismo con {ne}: {darne}, {farcene}, {averne}.

El punto es que esa fusión es **imposible** en un grupo de verbos, y son ellos los que le importan a quien traduce: {stare}, {restare}, {uscire}, {entrare} no reciben clítico. No se dice *starlo* ni *restarlo*. Si la frase necesita el pronombre, el italiano pasa a otro verbo: «sono {stato} {li} {tre giorni}».

Y la fusión llega más lejos en el imperativo, donde el pronombre se pega **después** del verbo: «{dammi} {lo}» da **{dammelo}**, «{dimmi} {lo}» da {dimelo}, «{date} {ci} {lo}» da {datelo}. En el resto de la frase el clítico va antes del verbo conjugado, y {non} se queda entre los dos: **{non} {lo} {so}**.

## Inversión literaria: el verbo antes del sujeto

La inversión más común no es decorativa: aparece cuando la oración empieza por un complemento de tiempo, lugar o condición. «{Quando dunque nacque} {Gesù} {a} {Betlem}», «{Entrati} {i discepoli}», «{Seduti} {gli ascoltava}». El verbo puede incluso ir al principio de la frase, como en la línea más conocida de la prosa italiana: «{Al posto del quale c’era} {un divano}».

Fíjate en lo que le pasa al pronombre en «{Entrati} {i discepoli}»: el {i} es artículo definido, no pronombre. Y fíjate en que el participante único, que en português se volvería «tendo entrado os discípulos», en italiano es un sustantivo suelto al principio de la frase, y quién entró queda en el aire hasta la segunda oración.

## En la Biblia

Jn 20:19 tiene los tres mecanismos en una frase: «{Entrati} {i discepoli}», «Gesù {disse} {loro}». {Entrati} es un gerundio en el sentido de absoluto, sin sujeto nombrado; «{disse loro}» tiene verbo, pronombre indirecto y ningún sujeto. Un traductor que escribe «Jesús dijo a los discípulos» en portugués añade un sujeto que el italiano no tenía, y el lector pierde la apertura.

Lo mismo vale para el subjuntivo: «Gesù, sapendo che tutte le cose gli erano state affidate dal Padre…». Sin sujeto nombrado, el verbo pasa al primer plano.

## Criterio de lectura

Cuando leas una frase sin sujeto, no busques el sujeto perdido: busca el sujeto de la frase anterior. Cuando veas un verbo con pronombre pegado, deshaz la fusión y descubre si el verbo admite clítico; si no, el italiano eligió otro verbo. Y cuando veas un sustantivo suelto al principio de la frase antes del verbo, trátalo como inversión, no como error de orden.`),
  vocab: [
    V('entrare', 'entrare', 'entrar'),
    V('arrivare', 'arrivare', 'llegar'),
    V('partire', 'partire', 'salir'),
    V('dire', 'dire', 'decir'),
    V('dare', 'dare', 'dar'),
    V('fare', 'fare', 'hacer'),
    V('andare', 'andare', 'ir'),
    V('uscire', 'uscire', 'salir'),
    V('libro', 'libro', 'libro'),
    V('Maria', 'Maria', 'María'),
    V('discepolo', 'discepolo', 'discípulo'),
    V('leggere', 'leggere', 'leer'),
    V('soggetto', 'soggetto', 'sujeto'),
    V('verbo', 'verbo', 'verbo'),
    V('pronome', 'pronome', 'pronombre'),
    V('clitico', 'clitico', '(gram.) clítico'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Maria è partita. È arrivata alle tre.», ¿quién llegó?'),
    options: [
      T('Alguien no identificado'),
      T('María, porque el verbo es singular femenino'),
      T('María, porque está escrito'),
      T('El sujeto se suprimió por error'),
    ],
    answer: 1,
    hint: T('El verbo conserva la marca de género y número del sujeto ausente.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Funde el verbo y el pronombre: dare + lo → ___'),
      answer: 'darlo',
      hint: T('El infinitivo absorbe el pronombre objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa un verbo que no admite pronombre pegado?'),
      options: [T('Glielo diedi.'), T('Starlo a casa.'), T('Farlo subito.'), T('Darne un pezzo.')],
      answer: 1,
      hint: T('Stare y restare no reciben clítico.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el imperativo fundido: dammi lo → ___'),
      answer: 'dammelo',
      hint: T('En el imperativo el clítico va después.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden normal es sujeto, verbo, objeto; la inversión es posible y suena literaria.',
      ),
    },
    {
      n: '2',
      text: T(
        'El sujeto puede omitirse; el verbo conserva la marca de quien actúa: È arrivata alle tre.',
      ),
    },
    {
      n: '3',
      text: T('Algunos verbos funden el pronombre objeto: darlo, farlo, averlo, poterlo, andarci.'),
    },
    { n: '4', text: T('Stare, restare, uscire y entrare no reciben pronombre pegado.') },
    {
      n: '5',
      text: T('En el imperativo afirmativo el clítico se pega después: dammelo, dimelo, datelo.'),
    },
  ],
  notes: [
    {
      label: T('El falso amigo del portugués'),
      text: T(
        'El portugués necesita dos palabras para decir lo que dice {glielo}: «dar-lho isso». El italiano une el indirecto {gli} al directo {lo} y pega el bloque al verbo, y lo que era oración se vuelve palabra. Por eso {glielo} necesita una nota al pie y «dar-lho isso» no.',
      ),
    },
    {
      label: T('Cuándo puede desaparecer el sujeto'),
      text: T(
        'Con {io} y {tu} el sujeto casi nunca aparece, porque el verbo ya lo identifica. Con la tercera persona desaparece cuando el sujeto acaba de ser nombrado, y ahí la frase siguiente no se puede leer sola. Quien escribe «Maria è partita. Lei è arrivata» no está equivocado: solo va más despacio que el italiano.',
      ),
    },
  ],
  examples: [
    { text: 'Maria è partita. È arrivata alle tre.', gloss: T('María se fue. Llegó a las tres.') },
    { text: 'Vengo domani.', gloss: T('Voy mañana.') },
    { text: 'Glielo diedi.', gloss: T('Se lo di a él.') },
    { text: 'Fallo subito.', gloss: T('Hazlo ahora.') },
    { text: 'Dammelo, per favore.', gloss: T('Dámelo, por favor.') },
    { text: 'Non lo so.', gloss: T('No lo sé.') },
    { text: 'Entrati i discepoli, disse loro.', gloss: T('Entrados los discípulos, les dijo.') },
    { text: 'Al posto del quale c’era un divano.', gloss: T('En lugar del cual había un sofá.') },
    { text: 'Seduti, gli ascoltava.', gloss: T('Sentado, los escuchaba.') },
  ],
  tables: [
    {
      caption: T('Orden de la frase'),
      head: ['Ordine', 'Struttura', 'Frase'],
      rows: [
        ['standard', 'soggetto + verbo + oggetto', 'Maria legge il libro'],
        ['con aggettivo', 'soggetto + verbo + oggetto + aggettivo', 'Maria legge il libro nuovo'],
        ['prodropping', 'verbo, con il soggetto omesso', 'Maria è partita. È arrivata.'],
        ['inversione temporale', 'tempo + verbo + soggetto', 'Quando dunque nacque Gesù'],
        [
          'inversione letteraria',
          'avverbio + verbo + soggetto',
          'Al posto del quale c’era un divano',
        ],
      ],
    },
    {
      caption: T('Verbo y pronombre fundidos'),
      head: ['Verbo', 'Pronome', 'Forma'],
      rows: [
        ['dare', 'lo', 'darlo'],
        ['fare', 'lo', 'farlo'],
        ['avere', 'lo', 'averlo'],
        ['potere', 'lo', 'poterlo'],
        ['volere', 'lo', 'volerlo'],
        ['andare', 'ci', 'andarci'],
        ['dare', 'ne', 'darne'],
        ['stare', '—', 'stare (non fonde)'],
      ],
    },
    {
      caption: T('El bloque pronominal'),
      head: ['Forma', 'Significato'],
      rows: [
        ['me lo', 'a me quello'],
        ['glielo', 'a lui quello'],
        ['ce ne', 'a noi di questo'],
        ['te ne', 'a te di questo'],
        ['dammelo', 'dammi questo (imperativo)'],
        ['datelo', 'daci questo (imperativo)'],
      ],
    },
  ],
};
