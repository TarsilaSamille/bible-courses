import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Preposiciones y adverbios'),
  subtitle: T('Relación, tiempo y lugar'),
  section: T('El nombre'),
  body: C(`## La preposición rige el caso

Una partícula preposicional no es solo «a»: determina el caso del sustantivo que viene después. {فِي الْبَدْءِ} pone el sustantivo en genitivo, y la terminación {ـِ} es la prueba. También {إِلَى النُّورِ}. También {عَلَى السَّمَاءِ}. La terminación del sustantivo regido es el marcador más fiable que existe: lee la palabra, no la preposición.

## La marca de la regencia

El sustantivo pierde la forma indefinida y toma el genitivo, visible tanto en un sustantivo común ({الْبَدْءِ}) como en los pronombres: {مِنْهُ}, {إِلَيْهِ}, {عَلَيْهِ}. Cuando la terminación es ambigua, la preposición que sigue desempata — por eso el texto bíblico repite preposiciones y nombres.

## {مَعَ} y los pronombres

{mَعَ} significa «con», pero con pronombres admite dos formas: {مَعَنَا}, {مَعَهُ} (acusativo) y {مَعِى}, {مَعَهُ} (genitivo) según la posición. Trata {مَعَ} como dos preposiciones distintas y el análisis queda seguro. Lo mismo vale para {حَاشَا} y {خِلَافَ}, que exigen genitivo.

## Criterio de lectura

Empieza por el sustantivo, identifica el caso por la terminación y solo entonces asocia la preposición. Si la terminación indica genitivo, traduce la relación y no repitas la preposición como si fuera un «de» genérico — en {مِنَ اللهِ} la preposición ya está en la palabra.`),
  vocab: [
    V('فِي', 'في', 'en; dentro de'),
    V('مِنْ', 'من', 'de; desde'),
    V('إِلَى', 'إلى', 'a; hasta'),
    V('عَلَى', 'على', 'sobre; sobre'),
    V('مِنْ', 'من', 'a partir de'),
    V('بِاسْمِ', 'اسم', 'en nombre de'),
    V('مَعَ', 'مع', 'con'),
    V('عِنْدَ', 'عند', 'junto a'),
    V('بَيْنَ', 'بين', 'entre'),
    V('كَانَ', 'كان', 'ser; estar'),
    V('أَيْضًا', 'أيضا', 'también'),
    V('الآنَ', 'الآن', 'ahora'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué caso rigen {فِي}, {مِنْ}, {إِلَى} y {عَلَى}?'),
    options: [T('genitivo'), T('nominativo'), T('acusativo'), T('vocal')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('En {مِنَ ___} (de Dios), completa el sustantivo.'),
      answer: 'اللهِ',
      hint: T('El sustantivo va en genitivo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa «también»?'),
      options: [T('también'), T('aquí'), T('a'), T('con')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona preposición y significado.'),
      pairs: [
        { a: T('en'), b: T('en') },
        { a: T('desde'), b: T('de') },
        { a: T('sobre'), b: T('sobre') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Las preposiciones rigen normalmente el genitivo del sustantivo siguiente.'),
    },
    { n: '2', text: T('La terminación -i es una pista de caso: {بَيْتِ} tras {فِي}.') },
    {
      n: '3',
      text: T(
        'Los adverbios no son sustantivos regidos: {هُنَا} significa «aquí» y ocupa una posición más libre.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caso'),
      text: T('La misma partícula puede cambiar según el complemento: {مَعَ اللهِ} frente a {مَعَنَا}.'),
    },
  ],
  examples: [
    { text: 'فِي السَّمَاوَاتِ', gloss: T('en los cielos') },
    { text: 'عِنْدَ اللهِ', gloss: T('junto a Dios') },
    { text: 'اللهُ مَعَنَا', gloss: T('Dios con nosotros') },
  ],
  tables: [
    {
      caption: T('Preposiciones principales'),
      head: [T('Preposición'), T('Español'), T('Caso')],
      rows: [
        ['فِي', 'em; dentro', 'genitivo'],
        ['مِنْ', 'de; desde', 'genitivo'],
        ['إِلَى', 'a; até', 'genitivo'],
        ['عَلَى', 'sobre', 'genitivo'],
        ['مَعَ', 'com', 'genitivo; acusativo pronominal'],
      ],
    },
  ],
};
