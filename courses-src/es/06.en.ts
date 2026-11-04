import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Noun gender'),
  subtitle: T('pocket rules + tricky pairs'),
  section: T('Nouns'),
  body: C(`## Pocket rules (about 90%)

**MASCULINE**: {-o} ({el libro}), days and months ({el sábado}, {el mayo}), {-or} ({el amor}), {-aje} ({el viaje} "trip"), {-ante/-iente} ({el estudiante}), {-ambre} ({el hombre}).

**FEMININE**: {-a} ({la casa}), {-ción/-sión} ({la canción}), {-dad/-tad} ({la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-e} ({la noche}).

## Gender that flips meaning

Some pairs change meaning when the article changes:

• {el capital} "money, resources" vs {la capital} "the city".
• {el cura} "the priest" vs {la cura} "the cure".
• {el frente} "the battle line" vs {la frente} "the forehead".
• {el orden} "the military order" vs {la orden} "the request".
• {el coma} "the medical coma" vs {la coma} "the comma".

## The article follows the person

For person nouns the gender comes from the referent, not from the word: {el rey} / {la reina} · {el hermano} / {la hermana} · {el primo} / {la prima}. Profession nouns in {-ista} are common gender: {el artista} / {la artista}.

## Common-gender cases

Also common gender: {el artista}, {el atleta}, {el guía} (but {la guía} "the guidebook"!), {el colega}, {el testigo}. For brand-new professions, double gender is increasingly used.`),
  vocab: [
    V('el capital', 'capital', 'capital (money!)'),
    V('la capital', 'capital', 'capital (city!)'),
    V('el cura', 'cura', 'priest'),
    V('la cura', 'cura', 'cure'),
    V('la reina', 'reina', 'queen'),
    V('el rey', 'rey', 'king'),
    V('el estudiante', 'estudiante', 'the student (common!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"el capital" vs "la capital"?'),
    options: [
      T('Synonyms'),
      T('Money vs city (gender changes meaning!)'),
      T('Singular × plural'),
      T('Right × wrong'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ cura (the priest)'),
      answer: 'el',
      hint: T('Rule §2: the priest is masculine.'),
    },
    {
      kind: 'choose',
      prompt: T('The forehead is "___ frente"; the battle line is "___ frente".'),
      options: [
        T('la frente / el frente'),
        T('el frente / la frente'),
        T('los frente / las frente'),
        T('same gender in both'),
      ],
      answer: 0,
      hint: T('Rule §2: tricky pairs.'),
    },
    {
      kind: 'match',
      prompt: T('Match the word to the right gender'),
      pairs: [
        { a: T('{la canción}'), b: T('feminine') },
        { a: T('{el amor}'), b: T('masculine') },
        { a: T('{la ciudad}'), b: T('feminine') },
        { a: T('{el hombre}'), b: T('masculine') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Masculine: -o, days/months, -or, -aje, -ante/-iente. Feminine: -a, -ción, -dad, -tad, -umbre, -ie.',
      ),
    },
    {
      n: '2',
      text: T(
        'Gender can flip meaning: el capital/la capital, el cura/la cura, el frente/la frente.',
      ),
    },
    { n: '3', text: T('The article follows the referent, not the word: el rey/la reina.') },
  ],
  notes: [
    {
      label: T('Not everything has a regular gender'),
      text: T(
        'Nouns in {-ción}, {-sión}, {-dad} are feminine even where the masculine is irregular: {la canción} beside {el canción}, {la región} beside {el región}. Learn the list rather than deriving from the ending.',
      ),
    },
  ],
  examples: [
    { text: '{el cura}', gloss: T('The priest.') },
    { text: '{la cura}', gloss: T('The cure (the healing).') },
    { text: '{la reina}', gloss: T('The queen.') },
    { text: '{la capital}', gloss: T('The capital (the city!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Gender rules by ending'),
      head: [T('Ending'), T('Gender'), T('Example')],
      rows: [
        ['-o', 'masc.', '{el amor}'],
        ['-or', 'masc.', '{el señor}'],
        ['-aje, -ante, -iente', 'masc.', '{el viaje}, {el estudiante}'],
        ['-ambre', 'ambos', '{el hombre}, {la costumbre}'],
        ['-a', 'fem.', '{la casa}'],
        ['-ción, -sión', 'fem.', '{la canción}'],
        ['-dad, -tad', 'fem.', '{la ciudad}'],
        ['-umbre', 'fem.', '{la costumbre}'],
        ['-ie', 'fem.', '{la serie}'],
        ['-ista', 'ambos', '{el poeta}, {la artista}'],
      ],
    },
    {
      caption: T('Table 2 — Gender flips the meaning'),
      head: [T('Masculine'), T('Meaning A'), T('Feminine'), T('Meaning B')],
      rows: [
        ['{el capital}', 'recursos', '{la capital}', 'cidade'],
        ['{el cura}', 'sacerdote', '{la cura}', 'tratamento'],
        ['{el frente}', 'linha de combate', '{la frente}', 'testa'],
        ['{el orden}', 'ordem militar', '{la orden}', 'pedido'],
        ['{el coma}', 'estado clínico', '{la coma}', 'sinal de pontuação'],
      ],
    },
  ],
};
