import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerales y cantidad'),
  subtitle: T('один, два, пять + casos'),
  section: T('Los pronombres y los numerales'),
  body: C(
    'Los numerales cardinales concuerdan con el sustantivo contado: один день, две книги, пять дней. El numeral один se parece a un adjetivo y se declina: одного дня, одному дню, одном дне. Los numerales два y две no se declinan por género. Cuando el numeral sí se declina, el sustantivo permanece en singular solo en construcciones especiales, sobre todo collectivas: suele preferirse два часа a двух часов. Para 2–4, el patrón normal es numeral nominativo más sustantivo genitivo singular: два дня, три месяца, четыре книги. Desde 5 en adelante, se usa el genitivo plural: пять дней, двадцать учеников, сто лет. Los numerales compuestos siguen el patrón singular solo si el último componente es 2–4; en los demás casos, se usa el sustantivo plural. Los ordinales se declinan: третьего дня. Las expresiones de cantidad rigen genitivo: много воды, мало света, несколько человек.',
  ),
  vocab: [
    V('один', 'один', 'uno'),
    V('две', 'два', 'dos'),
    V('дня', 'день', 'días (gen. sg.)'),
    V('дней', 'день', 'días (gen. pl.)'),
    V('третьего', 'третий', 'tercero (gen.)'),
    V('много воды', 'вода', 'mucha agua'),
    V('пять дней', 'день', 'cinco días'),
    V('два часа', 'час', 'dos horas'),
  ],
  exercise: { kind: 'fill', prompt: T('Completa: два ___ (dos días)'), answer: 'дня' },
  exercises: [
    { kind: 'fill', prompt: T('Completa: пять ___'), answer: 'дней' },
    { kind: 'fill', prompt: T('Completa: ___ книги (dos)'), answer: 'две' },
    {
      kind: 'choose',
      prompt: T('¿Qué caso lleva много воды?'),
      options: [T('Nominativo'), T('Genitivo'), T('Dativo')],
      answer: 1,
    },
  ],
  rules: [{ n: '1', text: T('Después de 2–4, genitivo singular; desde 5, genitivo plural.') }],
  notes: [
    {
      label: T('Del tres al diez es femenino'),
      text: T(
        'Del 3 al 10 el numeral es femenino; desde el 11 la unidad concuerda con normalidad. El cambio de género en {трёх} es un resto de una regla antigua, no un error del escriba.',
      ),
    },
  ],
  examples: [
    { text: 'в третий день', gloss: T('al tercer día') },
    { text: 'семь дней', gloss: T('siete días') },
  ],
  tables: [
    {
      caption: T('Contar del 1 al 5'),
      head: ['Número', 'Exemplo', 'Explicação'],
      rows: [
        ['1', 'один день', 'nominativo singular'],
        ['2', 'два дня', 'genitivo singular'],
        ['3', 'три дня', 'genitivo singular'],
        ['4', 'четыре дня', 'genitivo singular'],
        ['5', 'пять дней', 'genitivo plural'],
      ],
    },
  ],
};
