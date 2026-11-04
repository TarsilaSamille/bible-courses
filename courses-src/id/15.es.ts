import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Partícula'),
  title: T('La partícula yang'),
  subtitle: T('Relativo, sustantivo y sustituto del artículo: la pieza central del indonesio'),
  body: C(`## Una palabra con tres trabajos

{yang} es la pieza más importante del indonesio, y es una sola palabra. Ninguna otra hace tanto: introduce una oración relativa, sustituye a un sustantivo entero y ocupa el lugar que en portugués ocupa el artículo. Quien entiende {yang} lee oraciones que parecen imposibles.

Tres trabajos en una sola forma.

{1} Relativo, antes de un sustantivo: {orang yang baik} «la persona buena», {buku yang baru} «el libro nuevo». El {yang} liga el sustantivo a una propiedad.

{2} Sustantivo, solo: {yang benar} «lo que es correcto», {yang datang} «quien venga», {yang dua} «el segundo». Detrás no hay sustantivo: el {yang} ocupa la posición de nombre y es toda la oración lo que nombra.

{3} Sustantivo del artículo: {yang ada di sini} «lo que está aquí». El {yang} hace el trabajo de {o}, {a} y {os} a la vez, y por eso se lleva mal con ellos.

## Yang sustituye al artículo

En portugués el artículo es obligatorio ante el sustantivo definido y el relativo va detrás: «o homem que é justo». En indonesio no hay artículo y el relativo ocupa su lugar: {orang yang adil}. La posición es la misma, la palabra es otra.

La consecuencia es una regla con dos caras. **Yang ocupa el lugar del artículo, y por eso no puede venir después de un artículo definido.** No existe {buku yang itu baik}, ni existe {para murid yang ini}; quien escribe eso ha juntado dos cosas que no se juntan. Lo que existe es {buku yang baik} y, para retomar algo ya mencionado, {buku itu} o {yang baik itu}.

Y hay una consecuencia mayor. Como {yang} también es sustantivo, puede aparecer donde el portugués necesita una expresión entera: {orang yang baik} «la persona buena» y {yang baik} «el que es bueno». La segunda es la nominalización del adjetivo, y es justo lo que hace el griego con {ho agathos}, el sustantivo de calidad. El griego tenía una palabra para eso y el portugués también («o bom», «o verdadeiro»); el indonesio usa la misma palabra del relativo.

Quien traduce {yang} por «que» y ahí se detiene pierde media palabra. Hay versículos enteros del texto bíblico en que {yang} no tiene sustantivo detrás, y quien busca un nombre no lo encuentra.

## Yang relativiza cualquier posición

La parte difícil viene cuando el relativo no es un adjetivo sino un verbo o una preposición, porque entonces {yang} tiene que cargar el caso que el portugués pone en el relativo.

Con verbo funciona como en cualquier lengua: {surat yang ditulis Petrus} «la carta que escribió Pedro». El {yang} queda entre el sustantivo y el verbo, y el sujeto del verbo relativo es el sustantivo que lo precede.

Con preposición el mecanismo es el mismo: {bangku yang di atas} «el banco que está arriba», {orang yang kepada siapa saya bicara} «la persona a quien hablé». El {yang} asume el caso que gobierna la preposición, y el sustantivo que viene después lleva la preposición repetida, lo que suena redundante pero es gramatical.

Con pasiva, el {yang} se combina con el verbo pasivo y no con el activo: {surat yang ditulis oleh Petrus} «la carta que fue escrita por Pedro». El griego y el portugués coinciden aquí, y por eso las relativas del Nuevo Testamento griego están llenas de pasivas.

Hay una restricción que el portugués no tiene. Si el sustantivo ya lleva clítico posesivo, el {yang} no se le pega: no {guru saya ⋅ ⋅ ⋅} sino {guru saya yang mengajar}, con el {yang} **después** de todo el sintagma y no pegado al sustantivo. Quien escribe {guru saya yang mengajar, dengan disiplin} rompe la regla y produce una oración que suena a traducción.

Y está la posición que el portugués resuelve con un pronombre: {orang yang dia jumpa} «la persona que él vio». El {dia} es obligatorio en indonesio cuando el antecedente es una tercera persona ya mencionada, y no se puede suprimir como en portugués. Suena redundante, y cada {dia} señala a alguien.

## Orang-orang yang membawa damai

{Mateo 5:9} pone las dos cosas en una línea: {berbahagalah orang-orang yang membawa damai, sebab mereka akan disebut anak-anak Allah}.

En {orang-orang} la reduplicación integral marca el plural que el portugués escribe en el sustantivo. En {yang membawa damai} el {yang} es relativo y liga el sustantivo a un verbo, no a un adjetivo: {membawa} es «llevar» y {damai} es la cosa llevada. Quien traduce por «que trae paz» acierta; quien traduce por «que son pacíficos» cambió el verbo por un adjetivo y cambió la oración.

Y hay un tercer {yang} en el pasaje, en {yang membawa}, que es la nominalización que hacía el griego con {tēn eirēnopoion}. En portugués el versículo entero es una oración con artículo en casi todas las palabras. El indonesio no tiene artículo en ninguna, y lo que el artículo hacía lo hicieron {yang} y la reduplicación, cada uno en su sitio.`),
  vocab: [
    V('yang', 'yang', 'que, lo que, quien (relativo y sustantivo)'),
    V('adil', 'adil', 'justo'),
    V('baik', 'baik', 'bueno'),
    V('baru', 'baru', 'nuevo'),
    V('benar', 'benar', 'correcto, verdadero'),
    V('orang', 'orang', 'persona'),
    V('buku', 'buku', 'libro'),
    V('surat', 'surat', 'carta'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('oleh', 'oleh', 'por (agente)'),
    V('dia', 'dia', 'él, ella'),
    V('jumpa', 'jumpa', 'encontrar'),
    V('datang', 'datang', 'venir'),
    V('dengan', 'dengan', 'con'),
    V('bicara', 'bicara', 'hablar'),
    V('membawa', 'bawa', 'llevar'),
    V('damai', 'damai', 'paz'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} es relativo ante un sustantivo, sustantivo cuando está solo y sustituto del artículo definido.',
      ),
    },
    {
      n: '2',
      text: T(
        '{yang} no puede venir después de un artículo definido: {buku yang baik}, nunca {buku yang itu}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tras un numeral, {yang} indica la posición en la serie: {yang kedua} «el segundo», {yang terakhir} «el último».',
      ),
    },
    {
      n: '4',
      text: T(
        'Con preposición, el relativo repite la preposición: {bangku yang di atas}, {orang yang kepada siapa}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando el sustantivo lleva clítico posesivo, el {yang} va detrás de todo el sintagma: {guru saya yang mengajar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El nominalizador'),
      text: T(
        'El trabajo más difícil de {yang} es sustituir a un sustantivo: {yang benar} es una oración entera con valor de sustantivo. El griego tiene {to agathon}, el portugués «o bom». Una palabra indonesia cubre los tres casos.',
      ),
    },
    {
      label: T('El relativo que repite el pronombre'),
      text: T(
        'En {orang yang dia jumpa} el pronombre {dia} es obligatorio, porque la relativa tiene sujeto propio y el antecedente es una tercera persona ya mencionada. El portugués puede suprimir el pronombre; el indonesio no.',
      ),
    },
  ],
  examples: [
    {
      text: 'Orang yang baik akan masuk sorga.',
      gloss: T('La persona buena entrará en el cielo.'),
    },
    {
      text: 'Yang benar itu sulit gefunden.',
      gloss: T('Lo que es correcto es difícil de encontrar.'),
    },
    { text: 'Buku yang baru itu milikmu.', gloss: T('Ese libro nuevo es tuyo.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('El segundo es más caro.') },
    {
      text: 'Surat yang ditulis Petrus panjang.',
      gloss: T('La carta que escribió Pedro es larga.'),
    },
    { text: 'Bangku yang di atas itu rusak.', gloss: T('El banco que está arriba está roto.') },
    {
      text: 'Orang yang dia jumpa tadi seorang guru.',
      gloss: T('La persona que él vio era un profesor.'),
    },
    { text: 'Guru saya yang mengajar.', gloss: T('Fue mi profesora la que enseñó.') },
    { text: 'Yang aku cari tidak ada.', gloss: T('Lo que busco no existe.') },
  ],
  tables: [
    {
      caption: T('Os três trabalhos de yang'),
      head: ['Uso', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['relativo + nome', 'orang yang baik', 'buku yang baru', 'a pessoa boa'],
        ['relativo + verbo', 'surat yang ditulis', 'rumah yang berdiri', 'a carta que foi escrita'],
        ['substantivo', 'yang + X', 'yang benar', 'o que é certo'],
        ['substantivo + numeral', 'yang + numeral', 'yang kedua', 'o segundo'],
      ],
    },
    {
      caption: T('Onde yang pode e onde não pode'),
      head: ['Contexto', 'Forma', 'Português', 'Valor'],
      rows: [
        ['antes de substantivo', 'buku yang baik', 'o livro bom', 'relativo'],
        ['sozinho, sem nome', 'yang baik', 'o bom', 'nominalização'],
        ['depois de numeral', 'yang kedua', 'o segundo', 'posição'],
        ['com preposição', 'yang di atas', 'que está em cima', 'caso absorvido'],
        ['depois de artigo', 'buku yang itu', '(não existe)', 'erro'],
        ['depois de para + nome', 'para murid yang ini', '(não existe)', 'erro'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa {yang benar}?'),
    options: [
      T('lo que es correcto'),
      T('que es verdadero, con sustantivo detrás'),
      T('el verdadero libro'),
      T('porque es correcto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el relativo: «la persona buena» = orang ___ baik.'),
      answer: 'yang',
      hint: T('La palabra que liga un sustantivo a una propiedad.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas oraciones es correcta?'),
      options: [
        T('Buku yang baru itu mahal.'),
        T('Buku itu yang baru mahal.'),
        T('Buku yang itu baru.'),
        T('Buku yang baru yang itu.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el uso de {yang} con el ejemplo'),
      pairs: [
        { a: T('{yang + sustantivo}'), b: T('relativo') },
        { a: T('{yang solo}'), b: T('nominalización') },
        { a: T('{yang + numeral}'), b: T('posición en la serie') },
        { a: T('{yang + preposición}'), b: T('caso absorbido') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
