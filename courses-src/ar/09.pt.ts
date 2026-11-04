import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Verbos fracos'),
  subtitle: T('Raízes com و، ي o ا'),
  section: T('O verbo'),
  body: C(`## O que faz uma raiz ser fraca

Uma raiz forte tem três consoantes. Uma raiz fraca tem {و} ou {ي} como consoante medial ou final, e isso muda o desenho do paradigma: uma das consoantes desaparece em certos tempos e reaparece em outros. Reconhecer a classe pelo paradigma é mais seguro que tentar adivinhar pela raiz.

## Raiz oca

{ق-و-ل} é oca porque o {و} medial desaparece: no passado vira {قَالَ}, no futuro {سَيَقُولُ}. O {و} reaparece justamente onde a raiz precisa de apoio, e some onde a terminação já traz a vogal. Compare {يَقُولُ} e {قَالَ} e o padrão fica claro.

## Raiz defectiva

{د-ع-و} termina em {و} e, por isso, as formas aparecem como {دَعَا} ou {يَدْعُو} — a última letra desloca a carga. Em {نَسِيَ} e {يَنْسَى} o mesmo acontece com {ي}. A terminação {ا} do passado substitui a consoante fraca.

## Raiz assimilada

{و-ج-د} é assimilada: o {و} inicial aparece no passado, como em {وَجَدَ} "achou", mas não no imperfeito, {يَجِدُ}. A raiz perde uma letra nos dois extremos, o que a torna um caso intermediário entre forte e fraca.

## Critério de leitura

Ao ver um verbo com menos de três consoantes, não o considere defectuoso. Liste as formas que você conhece e procure qual consoante reaparece em cada tempo — o padrão revela a raiz subjacente e o significado.`),
  vocab: [
    V('قَالَ', 'قال', 'disse'),
    V('يَقُولُ', 'قال', 'diz'),
    V('قِيلَ', 'قال', 'foi dito'),
    V('بَاعَ', 'باع', 'vendeu'),
    V('يَبِيعُ', 'باع', 'vende'),
    V('دَعَا', 'دعا', 'chamou'),
    V('يَدْعُو', 'دعا', 'chama'),
    V('وَجَدَ', 'وجد', 'achou'),
    V('يَجِدُ', 'وجد', 'acha'),
    V('نَسِيَ', 'نسي', 'esqueceu'),
    V('يَنْسَى', 'نسي', 'esquece'),
    V('خَافَ', 'خاف', 'temeu'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual raiz produz {قَالَ} e {يَقُولُ}?'),
    options: [T('ق-و-ل'), T('د-ع-و'), T('و-ج-د'), T('ن-س-ي')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o imperfeito de {بَاعَ}: ___ (ele vende).'),
      answer: 'يَبِيعُ',
      hint: T('É uma raiz oca.'),
    },
    {
      kind: 'match',
      prompt: T('Associe raiz e classe.'),
      pairs: [
        { a: T('ق-و-ل'), b: T('oca') },
        { a: T('د-ع-و'), b: T('defectiva') },
        { a: T('و-ج-د'), b: T('assimilada') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('O que falta em {يَجِدُ} é…'),
      options: [T('a {و} inicial da raiz'), T('a {ا} medial'), T('o artigo'), T('o plural')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('Nas ocas, o {ا} do passado corresponde a {و} ou {ي} do imperfecto.') },
    {
      n: '2',
      text: T('Nas defectivas, a última raiz é {و} ou {ي}; compare o contexto de {دَعَا} e {يَدْعُو}.'),
    },
    {
      n: '3',
      text: T(
        'A forma só é segura quando se conhece o suficiente paradigma; não se force a raiz a partir de uma palavra.',
      ),
    },
  ],
  notes: [
    {
      label: T('Raiz'),
      text: T(
        'A mesma raiz pode produzir substantivo verbal, particípio e passivo: {قَالَ} → {قَوْل} → {قَائِل} → {مَقُول}.',
      ),
    },
  ],
  examples: [
    { text: 'قَالَ الرَّبُّ', gloss: T('disse o Senhor') },
    { text: 'وَتَدْعُو اسْمَهُ يَسُوعَ', gloss: T('e chamarás seu nome Jesus') },
    { text: 'لَا تَخَفْ', gloss: T('não temas') },
  ],
  tables: [
    {
      caption: T('Paradigmas selected'),
      head: [T('Tipo'), T('Raiz'), T('Perfeito'), T('Imperfecto')],
      rows: [
        ['oca', 'ق-و-ل', 'قَالَ', 'يَقُولُ'],
        ['oca', 'ب-ا-ع', 'بَاعَ', 'يَبِيعُ'],
        ['defectiva', 'د-ع-و', 'دَعَا', 'يَدْعُو'],
        ['assimilada', 'و-ج-د', 'وَجَدَ', 'يَجِدُ'],
      ],
    },
  ],
};
