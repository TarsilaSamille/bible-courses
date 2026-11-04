import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Possessive pronouns'),
  subtitle: T('mi, tu, su — + stressed "suyo"'),
  section: T('Pronouns'),
  body: C(`## Two series: unstressed and stressed

**Unstressed** (never carry their own accent, come **before** the noun): {mi}, {tu}, {su}, {nuestro}, {vuestro}, {su}.

**Stressed** (carry their own accent, come **after** the noun or alone): {mío}, {tuyo}, {suyo}, {nuestro}, {vuestro}, {suyo}.

Ex.: {mi casa} "my house" vs {casa mía} "my house" (emphasis!) · {nuestra casa} · {Padre nuestro} "our Father".

## Agreement of the stressed forms

{mío} → {mía}, {míos}, {mías} · {tuyo} → {tuya}, {tuyos}, {tuyas} · {suyo} → {sua}, {suyos}, {suyas}. The unstressed forms are **invariable**: {mis}, {tus}, {sus}, {nuestros}, {vuestros}.

## The problem with {su}

Unstressed {su} is terribly ambiguous: "his", "her", "your", "their"… The RAE recommends the **stressed** form to undo the confusion:

{El libro es suyo} "the book is HIS".
{El libro es de él} "the book is his" (popular, unambiguous).

## Formulas of the biblical text

{Sanctificado sea tu nombre} "hallowed be THY name" — unstressed {tu} keeps the parallelism.
{Nuestro Padre} "our Father" — stressed {nuestro}, traditional.
{Dios mío} "my God" (Ps 22:1) — stressed in an exclamation.
{El pan nuestro de cada día} "our daily bread" (Matt 6:11).

{nuestro} has two stressed forms: {nuestro} and {nuestra}.`),
  vocab: [
    V('mi', 'mi', 'my (unstressed!)'),
    V('tu', 'tu', 'your (unstressed!)'),
    V('su', 'su', 'his/her (ambiguous!)'),
    V('nuestro', 'nuestro', 'our'),
    V('mío', 'mío', 'mine (stressed!)'),
    V('Dios mío', 'Dios', 'my God! (Ps 22:1)'),
    V('suyo', 'suyo', 'his (clarity!)'),
    V('tu nombre', 'nombre', 'thy name (Matt 6:9)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How to disambiguate "su libro"?'),
    options: [
      T('No way'),
      T('Stressed: "el libro suyo" (HIS) or "de él"'),
      T('Plural'),
      T('Article'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the stressed possessive: "Dios ___" (my God!)'),
      answer: 'mío',
      hint: T('Rule §1: the stressed form comes after the noun.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form is UNSTRESSED (before the noun)?'),
      options: [T('{mío}'), T('{mi}'), T('{mía}'), T('{míos}')],
      answer: 1,
      hint: T('Only the form without an accent is unstressed.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its type'),
      pairs: [
        { a: T('{tu}'), b: T('unstressed') },
        { a: T('{tuyo}'), b: T('stressed') },
        { a: T('{nuestra}'), b: T('unstressed (feminine)') },
        { a: T('{nuestras}'), b: T('stressed (fem. pl.)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Unstressed before the noun, invariable (mi casa, mis casas); stressed after, with an accent (casa mía, casas mías).',
      ),
    },
    {
      n: '2',
      text: T(
        'The stressed form marks emphasis or exclusive possession: el libro es suyo (it is HIS).',
      ),
    },
    {
      n: '3',
      text: T('Never mix an unstressed form with the noun: mio casa is wrong; mi casa is right.'),
    },
    {
      n: '4',
      text: T(
        'Nuestro/vuestro have the same unstressed and stressed shape; only the accent differs.',
      ),
    },
  ],
  notes: [
    {
      label: T('Suyo avoids the ambiguity'),
      text: T(
        '{su} is ambiguous between possessor and possessed. {suyo} is unambiguous — "his" — which is why biblical text prefers it when the referent is God.',
      ),
    },
  ],
  examples: [
    { text: '{Dios mío}', gloss: T('My God! (Ps 22:1 — stressed in an exclamation).') },
    { text: '{nuestro pan}', gloss: T('Our bread (Matt 6:11).') },
    { text: '{tu nombre}', gloss: T('Thy name (Matt 6:9 — unstressed, for parallelism).') },
    {
      text: '{el libro es suyo}',
      gloss: T('The book is HIS (the stressed form resolves the ambiguity of su).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Possessives'),
      head: [T('Person'), T('Unstressed (before)'), T('Stressed (after)')],
      rows: [
        ['1ª', '{mi}', '{mío}'],
        ['2ª', '{tu}', '{tuyo}'],
        ['3ª', '{su}', '{suyo}'],
        ['1ª pl.', '{nuestro}', '{nuestro}'],
        ['2ª pl.', '{vuestro}', '{vuestro}'],
        ['3ª pl.', '{su}', '{suyo}'],
      ],
    },
    {
      caption: T('Table 2 — Inflection of the stressed forms'),
      head: [T('Stressed'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['{mío}', '{mío}', '{mía}', '{míos}', '{mías}'],
        ['{tuyo}', '{tuyo}', '{tuya}', '{tuyos}', '{tuyas}'],
        ['{suyo}', '{suyo}', '{sua}', '{suyos}', '{suyas}'],
      ],
    },
  ],
};
