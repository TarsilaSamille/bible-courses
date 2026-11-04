import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Aumentativos y diminutivos'),
  subtitle: T('أُفْعِلَ، فَعَّلَ، فُعَيْل، خَبَرَ، أَخْبَرَ'),
  section: T('Verbos'),
  body: C(`## El molde que aumenta

Dos formas del verbo añaden intensidad, y añaden cosas distintas. La segunda, {فَعَّلَ}, dice que la acción es mayor o más intensa: {كَتَبَ} es escribir, {كَتَّبَ} es dictar, escribir en voz alta para otro.

La cuarta, {أُفْعِلَ}, dice que la acción adquiere destinatario. **{خَبَرَ} es saber, y {أَخْبَرَ} es informar.** La diferencia entre las dos es lo que el verbo hace con lo que sabe, y es una diferencia que ninguna terminación de tiempo o persona expresaría. Lo mismo vale en {نَصَرَ} y {أَنْصَرَ}, y en {أَكَلَ} y {أَخَذَ} para sí mismo.

La cuarta forma es rara en número de raíces, y por eso la lista cabe en la cabeza. {أَخْبَرَ}, {أَنْزَلَ}, {أَشْرَكَ}, {أَسْأَلَ}, {أَقْسَمَ}, {أَمَرَ}, {أَكَلَ}, {أَخَذَ}, {أَصْلَحَ}, {أَفْتَى}, {أَعْلَى}. Son verbos de un grupo fijo, y quien los conoce reconoce la forma en la página.

## Los que aumentan y los que disminuyen

El aumentativo tiene dos moldes, el diminutivo tiene uno, y los tres son previsibles.

El diminutivo masculino es {فُعَيْل}: {رَجُل} da {رُجَيْلٌ}, {كِتَاب} da {كُتَيْبٌ}, {جَبَل} da {جُبَيْلٌ}. El femenino es {فُعِيلَة}: {شَجَرَة} da {شُجَيْرَةٌ}. **La regla es corta y mecánica: la vocal del molde toma la calidad de la vocal de la base, y las consonantes se quedan donde estaban.**

El aumentativo, en cambio, no es previsible por un molde único, y es la forma más antigua de la lengua. Sus ocho subdivisiones dependen de si la raíz radical es fuerte, débil o doble, y por eso {فَعَّلَ} aparece en la mayoría de los verbos de intensidad sin que la vocal siga regla alguna.

## Las cinco letras que desaparecen al principio

Y aquí está la excepción, y es lo más bonito que la lengua le hace a la ortografía.

Cinco letras pueden desaparecer del principio de una palabra, y lo que se lee es menor que lo que se oye. La {و} inicial de un verbo cae: {وَصَلَ} se escribe {اُصِلَ} y se pronuncia sin la {و}. La {ي} inicial de los derivados de la décima forma cae: {يَسْتَعِينُ} se escribe igual y se pronuncia {يُسْتَعِينُ}.

El caso más famoso es {اسْم}. Ninguna palabra portuguesa ayuda, porque la palabra árabe ya perdió una {و} antigua, y lo que quedó es {اسْم} con tres consonantes donde deberían ser cuatro. **El manuscrito esconde la letra; la boca no.**

La consecuencia para la lectura es directa. Un texto antiguo escribe {اسْم} y el diccionario busca una raíz de dos letras; un lector moderno escribe {إِسْم} y el manuscrito parece tener una letra de más. Ninguno de los dos está mal, y la elisión es la huella de una {و} que nadie ve.

## Criterio de lectura

En {أَقْسَمَ اللَّهُ بِالْحَقِّ} hay una cuarta forma, una preposición y una partícula, y toda la frase cabe en tres palabras. {أَقْسَمَ} es {قَسَمَ} con la {أ} de la cuarta forma, y el verbo base significa "dividir": un juramento es una división, lo que se divide es la verdad, y {بِالْحَقِّ} dice por qué.

Quien traduce {أَقْسَمَ} por "dividió" se equivocó en el verbo y acertó la etimología por casualidad. Quien reconoce la {أ} inicial de la cuarta forma sabe que la acción tiene destinatario antes de leer el resto de la frase, y eso es lo que busca quien lee texto bíblico.`),
  vocab: [
    V('أُفْعِلَ', 'فعل', 'el patrón de la cuarta forma'),
    V('فَعَّلَ', 'فعل', 'el patrón de la segunda forma'),
    V('تَفَعَّلَ', 'فعل', 'el patrón de la quinta forma'),
    V('اِسْتَفْعَلَ', 'فعل', 'el patrón de la décima forma'),
    V('أَخْبَرَ', 'خبر', 'informó'),
    V('خَبَرَ', 'خبر', 'supo'),
    V('كَتَّبَ', 'كتب', 'dictó'),
    V('أَقْسَمَ', 'قسم', 'juró'),
    V('قَسَمَ', 'قسم', 'dividió'),
    V('رُجَيْلٌ', 'رجل', 'un hombre pequeño'),
    V('كُتَيْبٌ', 'كتاب', 'un libro pequeño'),
    V('أَسْمٌ', 'اسم', 'nombre'),
    V('وَصَلَ', 'وصل', 'unió; llegó'),
    V('يَسْتَعِينُ', 'عون', 'pide ayuda'),
    V('اسْتَغْفَرَ', 'غفر', 'pidió perdón'),
    V('تَدَرَّبَ', 'درب', 'se entrenó'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué añade {أَخْبَرَ} a {خَبَرَ}?'),
    options: [T('Intensidad'), T('Destinatario'), T('Tiempo'), T('Negación')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el diminutivo de {رَجُل}: ___جَيْلٌ'),
      answer: 'رُ',
      hint: T('Es el patrón {فُعَيْل}, con la vocal de la base.'),
    },
    {
      kind: 'match',
      prompt: T('Associe forma e sentido.'),
      pairs: [
        { a: T('أَخْبَرَ'), b: T('informó') },
        { a: T('خَبَرَ'), b: T('supo') },
        { a: T('كَتَّبَ'), b: T('dictó') },
        { a: T('أَقْسَمَ'), b: T('juró') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el diminutivo regular de {كِتَاب}?'),
      options: [T('كُتَيْبٌ'), T('مَكْتُوبٌ'), T('كِتَابَاتٌ'), T('كَتَبَ')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('En {اسْم}, ¿qué pasó con la raíz?'),
      options: [
        T('Perdió una letra al principio'),
        T('Ganó una letra'),
        T('Perdió la vocal'),
        T('No cambió'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**La cuarta forma {أُفْعِلَ} añade la idea de hacer algo a otro: {خَبَرَ} es saber, {أَخْبَرَ} es informar.**',
      ),
    },
    {
      n: '2',
      text: T('La segunda forma {فَعَّلَ} añade intensidad: {كَتَبَ} es escribir, {كَتَّبَ} es dictar.'),
    },
    { n: '3', text: T('La cuarta forma existe en pocas raíces, y la lista cabe en la cabeza.') },
    {
      n: '4',
      text: T('El diminutivo regular es {فُعَيْل} en lo masculino y {فُعِيلَة} en lo femenino.'),
    },
    {
      n: '5',
      text: T(
        'Cinco letras pueden elidirse al principio de una palabra, y lo que se lee es menor que lo que se oye.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué desaparece la {أ} de la cuarta forma'),
      text: T(
        '{أُفْعِلَ} se escribe sin la alif en la mayoría de los textos, y la alif aparece solo en las formas donde hace falta. La palabra sigue sonando con ella, y es el manuscrito el que economiza, no la pronunciación.',
      ),
    },
    {
      label: T('La letra que el texto esconde'),
      text: T(
        'En {اسْم} el manuscrito esconde una {و} que existió, y en {يَسْتَعِينُ} esconde una {و} que nadie pronuncia. Son formas que pasaron por composiciones antiguas, y la elisión es la huella de una letra que estuvo ahí.',
      ),
    },
  ],
  examples: [
    { text: 'خَبَرَ', gloss: T('supo') },
    { text: 'أَخْبَرَ', gloss: T('informó; la cuarta forma da destinatario') },
    { text: 'كَتَبَ', gloss: T('escribió') },
    { text: 'كَتَّبَ', gloss: T('dictó; la segunda forma aumenta') },
    { text: 'قَسَمَ', gloss: T('dividió') },
    { text: 'أَقْسَمَ', gloss: T('juró; la cuarta forma con {بِـ}') },
    { text: 'رُجَيْلٌ', gloss: T('un hombre pequeño; diminutivo') },
    { text: 'كُتَيْبٌ', gloss: T('un libro pequeño; diminutivo') },
    { text: 'اسْمٌ', gloss: T('nombre; con la inicial elidida') },
  ],
  tables: [
    {
      caption: T('Las formas que aumentan'),
      head: [T('Forma'), T('Patrón'), T('Lo que añade'), T('Ejemplo')],
      rows: [
        [T('II'), 'فَعَّلَ', T('intensidad; hacer a otro'), 'كَتَّبَ'],
        [T('IV'), 'أُفْعِلَ', T('hacer; dar destinatario'), 'أَخْبَرَ'],
        [T('V'), 'تَفَعَّلَ', T('hacer por etapas'), 'تَدَرَّبَ'],
        [T('X'), 'اِسْتَفْعَلَ', T('tratar algo como'), 'اسْتَغْفَرَ'],
      ],
    },
    {
      caption: T('Aumentativo y diminutivo'),
      head: [T('Tipo'), T('Patrón'), T('Base'), T('Resultado')],
      rows: [
        [T('aumentativo de la II'), 'فَعَّلَ', 'كَتَبَ', 'كَتَّبَ'],
        [T('aumentativo de la IV'), 'أُفْعِلَ', 'خَبَرَ', 'أَخْبَرَ'],
        [T('diminutivo masc.'), 'فُعَيْل', 'كِتَاب', 'كُتَيْبٌ'],
        [T('diminutivo fem.'), 'فُعِيلَة', 'شَجَرَة', 'شُجَيْرَةٌ'],
      ],
    },
    {
      caption: T('La elisión y sus efectos'),
      head: [T('Causa'), T('Escrito'), T('Lo que se oye'), T('Glosa')],
      rows: [
        [T('{و} inicial de verbo'), 'وَصَلَ', 'اُصِلَ', T('llegó')],
        [T('sustantivo derivado'), 'اسْمٌ', 'اِسْمٌ', T('nombre')],
        [T('derivado de la X'), 'يَسْتَعِينُ', 'يُسْتَعِينُ', T('pide ayuda')],
        [T('derivado de la V'), 'تَتَابَعَ', 'تَتَابَعُ', T('uno tras otro')],
      ],
    },
  ],
};
