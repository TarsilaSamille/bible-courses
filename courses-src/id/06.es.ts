import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Sufijos -kan, -i y reduplicación'),
  subtitle: T('membacakan, mendengarkan, anak-anak'),
  section: T('El nombre'),
  body: C(`Los verbos formados con prefijo pueden recibir sufijos que cambian el participante, la dirección o la intensidad.

{-kan} suele hacer que el objeto de la acción sea el beneficiario: {membaca} «leer» → {membacakan} «leer a alguien». {Memberikan} significa «dar»; {menjadikan} «convertir algo en algo» o «considerar algo como»; {melepaskan} «liberar». El sentido exacto depende de la raíz, por lo que conviene memorizar la forma léxica completa.

{-i} aparece sobre todo con meN- y suele indicar acción deliberada, repetida o intensificada: {mendengar} «oír» → {mendengarkan} «escuchar atentamente»; {membaca} → {membaci} «leer de cierta manera»; {menaiki} «subir a»; {memakai} «usar»; {memenuhi} «cumplir/llenar».

La reduplicación de la raíz indica plural o distribución: {buku-buku} «libros», {anak-anak} «niños». En {berjalan-jalan} «pasear» y {berbicara-bicara} «conversar», produce un valor distributivo. Para variedad existen formas completas: {berbagai-bagi} «variados» y {mana-mana} «de toda clase».

Comparación: {lebih + adjetivo + daripada} = «más … que»; {paling + adjetivo} = «el más»; {terbaik} es léxico o un superlativo elidido.`),
  vocab: [
    V('membacakan', 'baca', 'leer a alguien'),
    V('memberikan', 'beri', 'dar'),
    V('menjadikan', 'jadi', 'convertir, considerar como'),
    V('mendengarkan', 'dengar', 'escuchar atentamente'),
    V('melepaskan', 'lepas', 'liberar, soltar'),
    V('menaiki', 'naik', 'subir a, montar'),
    V('memakai', 'pakai', 'usar, llevar puesto'),
    V('memenuhi', 'penuh', 'cumplir, llenar'),
    V('buku-buku', 'buku', 'libros'),
    V('anak-anak', 'anak', 'niños'),
    V('berjalan-jalan', 'jalan', 'pasear'),
    V('berbagai-bagi', 'berbagai', 'variados'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué diferencia es más precisa?'),
    options: [
      T('{mendengar} = oír; {mendengarkan} = escuchar atentamente a propósito'),
      T('La primera es pasada y la segunda futura'),
      T('La primera es formal y la segunda informal'),
      T('Son sinónimos exactos en este contexto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «tiga anak-___» = «tres niños».'),
      answer: 'anak',
      hint: T('Repite la raíz entera.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la estructura natural de «más amoroso que»?'),
      options: [T('mejor que'), T('pada kasih lebih'), T('kasih daripada lebih')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No toda raíz acepta libremente -kan ni -i. El diccionario y el uso SINCRÓNICO muestran la estructura; no inventes combinaciones.',
      ),
    },
    {
      n: '2',
      text: T(
        'La reduplicación parcial repite la sílaba inicial; la total repite toda la raíz: {buku-buku} y {anak-anak}.',
      ),
    },
    {
      n: '3',
      text: T(
        'En {berjalan-jalan} y {berbicara-bicara}, también se reduplica {ber-}, reforzando el valor distributivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Consejo'),
      text: T(
        'Aprende cada verbo completo con un ejemplo: {memberikan}, no solo {beri}; los afijos cambian el significado.',
      ),
    },
  ],
  examples: [
    { text: 'Ibu membacakan cerita kepada anak.', gloss: T('La madre lee un cuento al niño.') },
    {
      text: 'Saudara mendengarkan Firman.',
      gloss: T('El hermano escucha atentamente la Palabra.'),
    },
    { text: 'Allah memberi kasih karunia kepada kita.', gloss: T('Dios nos da gracia.') },
  ],
  tables: [
    {
      caption: T('Pares con cambio de valor'),
      head: ['Base', 'Derivado', 'ES'],
      rows: [
        ['mendengar', 'mendengarkan', T('oír × escuchar atentamente')],
        ['memberi', 'memberikan', T('dar algo a alguien')],
        ['naik', 'menaiki', T('subir × subir a algo')],
      ],
    },
  ],
};
