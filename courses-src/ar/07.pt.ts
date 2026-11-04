import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Iḍāfa e oração do Pai-Nosso'),
  subtitle: T('Construção nominal: de casa a reino'),
  section: T('Leituras'),
  body: C(`## O que é iḍāfa

A iḍāfa liga dois substantivos como uma frase sem verbo. O primeiro é o **construtor**: perde o artigo e a nunação, e recebe a terminação do caso pedido pela oração. O segundo é o **governado**: recebe o artigo e o caso. Em {بَيْتُ اللهِ}, {بَيْتُ} é construtor e {اللهِ} é governado; a terminação {ـِ} mostra que a iḍāfa inteira é regida por algo fora dela.

## A leitura correta

A iḍāfa é ambígua quando a última palavra também pode ler-se isolada. {كَلِمَةُ اللهِ} pode ser "a palavra de Deus" ou "a palavra que é Deus" — o contexto decide. Compare {مَلَكُوتُ السَّمَاوَاتِ} e {مَلَكُوتُ}: no primeiro, {السَّمَاوَاتِ} é governado e está em genitivo; no segundo, {مَلَكُوتُ} está sozinho e em nominativo.

## No Pai-Nosso

A oração do Pai-Nosso está cheia de iḍāfas: {أَبَانَا} (que é construtor de {الَّذِي}), {مَلَكُوت} e {مَشِيئَة}. Quando o segundo elemento é um pronome relativo, o pronome é que recebe o artigo e o caso: em {أَبَانَا الَّذِي} é {الَّذِي} que carrega a definitude.

## Critério de leitura

Ao ver dois substantivos seguidos em versículo, assuma iḍāfa até prova em contrário: retire o artigo do primeiro e confira se o segundo está em genitivo. Se estiver, é iḍāfa — e a tradução precisa manter o genitivo.`),
  vocab: [
    V('أَبَانَا', 'أب', 'nosso pai'),
    V('الَّذِي', 'الذي', 'que; o qual'),
    V('السَّمَاوَات', 'سماء', 'os céus'),
    V('اسْم', 'اسم', 'nome'),
    V('مَلَكُوت', 'ملكوت', 'reino'),
    V('مَشِيئَة', 'مشية', 'vontade'),
    V('خُبْز', 'خبز', 'pão'),
    V('كَفَّافًا', 'كف', 'sustento'),
    V('بَيْت', 'بيت', 'casa'),
    V('الله', 'الله', 'Deus'),
    V('إِلَهِي', 'إله', 'meu Deus'),
    V('تَرَكْتَنِي', 'ترك', 'me deixaste'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que caracteriza o primeiro membro de uma iḍāfa?'),
    options: [
      T('Perde {ال} e a nunação'),
      T('Sempre leva {ال}'),
      T('Exige preposição escrita'),
      T('É sempre feminino'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ اللهِ (casa de Deus).'),
      answer: 'بَيْتُ',
      hint: T('Sem artigo e com caso regido pela preposição.'),
    },
    {
      kind: 'match',
      prompt: T('Associe forma e função.'),
      pairs: [
        { a: T('أَبَانَا'), b: T('أب + نا') },
        { a: T('إِلَهِي'), b: T('إله + ي') },
        { a: T('تَرَكْتَنِي'), b: T('فعل + ني') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Em {مَلَكُوتُ السَّمَاوَاتِ}, qual palavra é construída?'),
      options: [T('السَّمَاوَاتِ'), T('مَلَكُوتُ'), T('الَّذِي'), T('اسْمُ')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O primeiro membro não pode manter {ال} nem nunação: {بَيْتُ اللهِ}, não {البيتُ}.'),
    },
    {
      n: '2',
      text: T(
        'O segundo membro pode ser definido: {بَيْتُ اللهِ}; a ausência de {ال} pode indicar-testing indefinição.',
      ),
    },
    {
      n: '3',
      text: T(
        'A tradução de “de” explica a relação, mas não implica uma preposição escrita entre as palavras.',
      ),
    },
  ],
  notes: [
    {
      label: T('Iḍāfa profunda'),
      text: T('Uma cadeia pode vincular mais de dois nomes: {كَلِمَةُ رَبِّ الْعَالَمِينَ}.'),
    },
  ],
  examples: [
    { text: 'أَبَانَا الَّذِي فِي السَّمَاوَاتِ', gloss: T('Pai nosso, que estás nos céus') },
    { text: 'كَلِمَةُ اللهِ', gloss: T('a Palavra de Deus') },
    { text: 'إِلَهِي، إِلَهِي، لِمَاذَا تَرَكْتَنِي؟', gloss: T('Meu Deus, meu Deus, por que me deixaste?') },
  ],
  tables: [
    {
      caption: T('Iḍāfa'),
      head: [T('Palavra'), T('Papel'), T('Português')],
      rows: [
        ['بَيْتُ', 'modificador construído', 'casa de'],
        ['اللهِ', 'regido', 'Deus'],
        ['كَلِمَةُ', 'modificador construído', 'Palavra de'],
        ['مَلَكُوتُ السَّمَاوَاتِ', 'construto + regido', 'reino dos céus'],
      ],
    },
  ],
};
