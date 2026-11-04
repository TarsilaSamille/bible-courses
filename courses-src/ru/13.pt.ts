import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerais e quantidade'),
  subtitle: T('один, два, пять + casos'),
  section: T('Os pronomes e os numerais'),
  body: C(
    'Os numerais cardinais concordam com o substantivo contado: один день, две книги, пять дней. O numeral один é especialmente adjetival e declina: одного дня, одному дню, одном дне. два e duas não declinam por gênero. Quando o próprio numeral declina, o substantivo só pode permanecer no singular em construções especiais, sobretudo expressões coletivas: dois часа é preferível a двух часов em muitos contextos. De 2 a 4, o padrão é numeral no nominativo mais substantivo no genitivo singular: два дня, три месяца, четыре книги. A partir de 5, usa-se o genitivo plural: пять дней, двадцать учеников, сто лет. Os numerais compostos terminados em 2–4 seguem o padrão singular apenas quando o numeral final é 2–4; nos demais casos, usa-se o substantivo plural. O mesmo numeral, em um composto terminado em 1 (exceto 11), pode concordar como adjetivo singular: двадцать один день. Os ordinais declinam como adjetivos: третьего дня, "no terceiro dia". Quantidades exigem o genitivo: много воды, мало света, несколько человек.',
  ),
  vocab: [
    V('один', 'один', 'um'),
    V('две', 'два', 'duas'),
    V('дня', 'день', 'dias (gen. sg.)'),
    V('дней', 'день', 'dias (gen. pl.)'),
    V('третьего', 'третий', 'terceiro (gen.)'),
    V('много воды', 'вода', 'muita água'),
    V('пять дней', 'день', 'cinco dias'),
    V('два часа', 'час', 'duas horas'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete: два ___ (dois dias)'), answer: 'дня' },
  exercises: [
    { kind: 'fill', prompt: T('Complete: пять ___'), answer: 'дней' },
    { kind: 'fill', prompt: T('Complete: ___ книги (duas)'), answer: 'две' },
    {
      kind: 'choose',
      prompt: T('Que caso exige много воды?'),
      options: [T('Nominativo'), T('Genitivo'), T('Dativo')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Depois de 2–4, substantivo em genitivo singular; de 5 em diante, genitivo plural.'),
    },
  ],
  notes: [
    {
      label: T('Três a dez é feminino'),
      text: T(
        'De 3 a 10 o numeral é feminino; a partir de 11 a unidade volta a concordar normalmente. A troca de gênero em {трёх} é um resíduo de uma regra antiga, não um erro do escriba.',
      ),
    },
  ],
  examples: [
    { text: 'в третий день', gloss: T('no terceiro dia') },
    { text: 'семь дней', gloss: T('sete dias') },
  ],
  tables: [
    {
      caption: T('Contagem de 1 a 5'),
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
