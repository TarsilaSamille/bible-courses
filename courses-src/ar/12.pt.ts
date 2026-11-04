import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Preposições e advérbios'),
  subtitle: T('Relação, tempo e lugar'),
  section: T('O nome'),
  body: C(`## A preposição governa o caso

Uma partícula preposicional não é só "para": ela determina o caso do substantivo que vem depois. {فِي الْبَدْءِ} põe o substantivo no genitivo, e a terminação {ـِ} é a prova. {إِلَى النُّورِ} faz o mesmo. {عَلَى السَّمَاءِ} também. A terminação do substantivo regido é o marcador mais confiável que existe: leia a palavra, não a preposição.

## A marca da regência

O substantivo perde a forma indefinida e recebe o genitivo, visível tanto no substantivo comum ({الْبَدْءِ}) quanto nos pronomes: {مِنْهُ}, {إِلَيْهِ}, {عَلَيْهِ}. Quando a terminação é ambígua, a preposição seguinte desempata — é por isso que o texto bíblico repete preposições e nomes.

## {مَعَ} e os pronomes

{mَعَ} significa "com", mas com pronomes admite duas formas: {مَعَنَا}, {مَعَهُ} (acusativo) e {مَعِى}, {مَعَهُ} (genitivo) conforme a posição. Trate {مَعَ} como duas preposições distintas e a análise fica segura. O mesmo vale para {حَاشَا} e {خِلَافَ}, que pedem o genitivo.

## Critério de leitura

Comece pelo substantivo, identifique o caso pela terminação e só então associe a preposição. Se a terminação indicar genitivo, traduza a relação e não repita a preposição como se fosse um "de" genérico — em {مِنَ اللهِ} a preposição já está na palavra.`),
  vocab: [
    V('فِي', 'في', 'em; dentro de'),
    V('مِنْ', 'من', 'de; desde'),
    V('إِلَى', 'إلى', 'a; até'),
    V('عَلَى', 'على', 'sobre; sobre'),
    V('مِنْ', 'من', 'apartir de'),
    V('بِاسْمِ', 'اسم', 'em nome de'),
    V('مَعَ', 'مع', 'com'),
    V('عِنْدَ', 'عند', 'junto a'),
    V('بَيْنَ', 'بين', 'entre'),
    V('كَانَ', 'كان', 'ser; estar'),
    V('أَيْضًا', 'أيضا', 'também'),
    V('الآنَ', 'الآن', 'agora'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual caso regem {فِي}, {مِنْ}, {إِلَى} e {عَلَى}?'),
    options: [T('genitivo'), T('nominativo'), T('acusativo'), T('vocal')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Em {مِنَ ___} (de Deus), complete o nome.'),
      answer: 'اللهِ',
      hint: T('O nome fica no genitivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa “também”?'),
      options: [T('أَيْضًا'), T('هُنَا'), T('إِلَى'), T('مَعَ')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe preposição e sentido.'),
      pairs: [
        { a: T('فِي'), b: T('em') },
        { a: T('مِنْ'), b: T('de') },
        { a: T('عَلَى'), b: T('sobre') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('As preposições governam normalmente o genitivo do nome seguinte.') },
    { n: '2', text: T('A terminação -i é uma pista de caso: {بَيْتِ} após {فِي}.') },
    {
      n: '3',
      text: T(
        'Advérbios não contam como regidos: {هُنَا} significa “aqui” e pode ocupar posição livre.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caso'),
      text: T(
        'A mesma preposição pode mudar de acordo com o complemento: {مَعَ اللهِ} versus {مَعَنَا}.',
      ),
    },
  ],
  examples: [
    { text: 'فِي السَّمَاوَاتِ', gloss: T('nos céus') },
    { text: 'عِنْدَ اللهِ', gloss: T('junto a Deus') },
    { text: 'اللهُ مَعَنَا', gloss: T('Deus conosco') },
  ],
  tables: [
    {
      caption: T('Preposições principais'),
      head: [T('Preposição'), T('Português'), T('Caso')],
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
