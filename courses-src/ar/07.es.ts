import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Iḍāfa y oración del Padre nuestro'),
  subtitle: T('Construcción nominal: de casa a reino'),
  section: T('Lecturas'),
  body: C(`## Qué es la iḍāfa

La iḍāfa une dos sustantivos como una frase sin verbo. El primero es el **constructo**: pierde el artículo y la nunación y recibe la terminación del caso que pide la cláusula. El segundo es el **regido**: conserva el artículo y el caso. En {بَيْتُ اللهِ}, {بَيْتُ} es constructo y {اللهِ} regido; la terminación {ـِ} muestra que toda la iḍāfa está regida por algo exterior.

## La lectura correcta

La iḍāfa es ambigua cuando la última palabra también puede leerse suelta. {كَلِمَةُ اللهِ} puede ser «la palabra de Dios» o «la palabra que es Dios» — decide el contexto. Compara {مَلَكُوتُ السَّمَاوَاتِ} con {مَلَكُوتُ}: en el primero, {السَّمَاوَاتِ} es regido y está en genitivo; en el segundo, {مَلَكُوتُ} está solo y en nominativo.

## En el Padrenuestro

La oración del Padrenuestro está llena de iḍāfas: {أَبَانَا} (que es constructo de {الَّذِي}), {مَلَكُوت} y {مَشِيئَة}. Cuando el segundo elemento es un pronombre relativo, es el pronombre quien recibe el artículo y el caso: en {أَبَانَا الَّذِي} es {الَّذِي} quien carga la definitud.

## Criterio de lectura

Al ver dos sustantivos seguidos en un versículo, supone iḍāfa hasta que se demuestre lo contrario: quita el artículo del primero y comprueba si el segundo está en genitivo. Si lo está, hay iḍāfa — y la traducción debe mantener el genitivo.`),
  vocab: [
    V('أَبَانَا', 'أب', 'nuestro Padre'),
    V('الَّذِي', 'الذي', 'que; el cual'),
    V('السَّمَاوَات', 'سماء', 'los cielos'),
    V('اسْم', 'اسم', 'nombre'),
    V('مَلَكُوت', 'ملكوت', 'reino'),
    V('مَشِيئَة', 'مشية', 'voluntad'),
    V('خُبْز', 'خبز', 'pan'),
    V('كَفَّافًا', 'كف', 'sustento'),
    V('بَيْت', 'بيت', 'casa'),
    V('الله', 'الله', 'Dios'),
    V('إِلَهِي', 'إله', 'mi Dios'),
    V('تَرَكْتَنِي', 'ترك', 'me abandonaste'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué caracteriza el primer miembro de una iḍāfa?'),
    options: [
      T('Pierde {ال} y la nunación'),
      T('Siempre lleva {ال}'),
      T('Exige preposición escrita'),
      T('Siempre es femenino'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ اللهِ (casa de Dios).'),
      answer: 'بَيْتُ',
      hint: T('Sin artículo y con el caso regido por la preposición.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona forma y función.'),
      pairs: [
        { a: T('nuestro Padre'), b: T('padre + nuestro') },
        { a: T('mi Dios'), b: T('Dios + mío') },
        { a: T('me abandonaste'), b: T('verbo + me') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('En {مَلَكُوتُ السَّمَاوَاتِ}, ¿qué palabra es construida?'),
      options: [T('السماوات'), T('مَلَكُوتُ'), T('الذي'), T('اسم')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El primer miembro no puede conservar {ال} ni nunación: {بَيْتُ اللهِ}, no {البيتُ}.'),
    },
    {
      n: '2',
      text: T(
        'El segundo miembro puede ser definido: {بَيْتُ اللهِ}; la ausencia de {ال} puede indicar indefinidad.',
      ),
    },
    {
      n: '3',
      text: T(
        'La traducción «de» explica la relación, pero no implica una preposición escrita entre las palabras.',
      ),
    },
  ],
  notes: [
    {
      label: T('Iḍāfa profunda'),
      text: T('Una cadena puede vincular más de dos sustantivos: {كَلِمَةُ رَبِّ الْعَالَمِينَ}.'),
    },
  ],
  examples: [
    { text: 'أَبَانَا الَّذِي فِي السَّمَاوَاتِ', gloss: T('Padre nuestro, que estás en los cielos') },
    { text: 'كَلِمَةُ اللهِ', gloss: T('la Palabra de Dios') },
    {
      text: 'إِلَهِي، إِلَهِي، لِمَاذَا تَرَكْتَنِي؟',
      gloss: T('Dios mío, Dios mío, ¿por qué me has abandonado?'),
    },
  ],
  tables: [
    {
      caption: T('Iḍāfa'),
      head: [T('Palabra'), T('Papel'), T('Español')],
      rows: [
        ['بَيْتُ', 'modificador construído', 'casa de'],
        ['اللهِ', 'regido', 'Deus'],
        ['كَلِمَةُ', 'modificador construído', 'Palavra de'],
        ['مَلَكُوتُ السَّمَاوَاتِ', 'construto + regido', 'reino dos céus'],
      ],
    },
  ],
};
