import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Indefinite articles'),
  subtitle: T('un/una/unos/unas — and when they vanish'),
  section: T('Articles'),
  body: C(`## The system

The indefinite article renders Portuguese "um" and English indefinite "a": {un} (m. sg.), {una} (f. sg.), {unos} and {unas}. The plural is **not** automatically "some": it is the ordinary plural, {un libro}/{unos libros}, {una casa}/{unas casas}.

Like the definite, {un} becomes {un agua} when the feminine begins with stressed {a}.

## When the article DISAPPEARS

1. **After {ser}** with a profession, religion or nationality: {Es médico} "he is a doctor" · {Es española} "she is Spanish" · {Son estudiantes} "they are students". But with an **adjective** the {un} returns: {Es un buen médico} · {Fue una estudiante excelente}.
2. **With {otro}, {cierto}, {algun}, {cada}, {varios}, {todos}, {muchos}**: {otro día} "another day" · {cada uno} "each one" · {algún día} "some day".
3. **With nouns already made countable by context**: {Tengo libros} "I have books" (no need to say how many).
4. In fixed measure and quantity phrases: {un poco de} "a little" · {una taza de} "a cup of".

## {uno} as a pronoun

{uno} (never {un uno}!) is a personal indefinite pronoun: {Uno nunca sabe} "one never knows" · {Uno solo} "only one" · {Uno mismo} "oneself".

Ex.: {a cada uno conforme su capacidad} "each according to his ability" (Matt 25:15) — {a} is a preposition, {cada uno} already means "each one".`),
  vocab: [
    V('un', 'un', 'a (masc.)'),
    V('una', 'un', 'a (fem.)'),
    V('unos', 'un', 'some (plural!)'),
    V('otro día', 'otro', 'another day (no "un"!)'),
    V('cada uno', 'uno', 'each one'),
    V('uno', 'uno', 'one, someone (pronoun!)'),
    V('un agua', 'agua', 'a water (euphony!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Es maestro" vs "Es un buen maestro"?'),
    options: [
      T('Same'),
      T('No adjective, no "un"; WITH adjective, "un" returns'),
      T('The opposite'),
      T('Both wrong'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with no article: "___ buena maestra" (she is a good teacher)'),
      answer: 'una',
      hint: T('With an adjective, un returns.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence follows the rule?'),
      options: [
        T('Tengo un libros'),
        T('Tengo otros libros'),
        T('Tengo unos libros'),
        T('Tengo libros'),
      ],
      answer: 1,
      hint: T('Rule §2: with otro, never un.'),
    },
    {
      kind: 'fill',
      prompt: T('Replace with "uno": "Ningún hombre puede ___ mismo"'),
      answer: 'salvar',
      hint: T('Formula: poder uno mismo + verb.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Professions and nationalities after ser drop un: Es maestro — but Es un buen maestro WITH adjectives.',
      ),
    },
    { n: '2', text: T('With otro/cierto/tal, never un: otro día (another day!).') },
    {
      n: '3',
      text: T('Uno is a pronoun and never takes un: uno nunca sabe, cada uno, uno mismo.'),
    },
  ],
  notes: [
    {
      label: T('Lo = o + lo'),
      text: T(
        '{lo} does not stand alone: it is {a} + {lo} with the {a} absorbed. So {lo vi} can be "the I" or "I saw it" — context decides, not grammar.',
      ),
    },
  ],
  examples: [
    { text: '{un libro}', gloss: T('A book.') },
    { text: '{unos días}', gloss: T('Some days.') },
    { text: '{cada uno}', gloss: T('Each one (Matt 25:15).') },
    { text: '{otro día}', gloss: T('Another day — no un.') },
  ],
  tables: [
    {
      caption: T('Table 1 — Indefinites'),
      head: [T('Number'), T('Masculine'), T('Feminine')],
      rows: [
        [T('Singular'), '{un}', '{una}'],
        [T('Plural'), '{unos}', '{unas}'],
      ],
    },
    {
      caption: T('Table 2 — Where the indefinite shows up and where it vanishes'),
      head: [T('Context'), T('With indefinite'), T('Without indefinite')],
      rows: [
        [T('profession (ser)'), '{Es un médico}', '{Es médico}'],
        [T('profession + adjective'), '{Es un buen médico}', '—'],
        [T('nationality'), '{Es un americano}', '{Es americano}'],
        [T('bare countable'), '—', '{Tengo libros}'],
        [T('quantifiers'), '—', '{otro día}, {algún día}'],
      ],
    },
  ],
};
