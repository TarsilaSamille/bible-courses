import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Demonstrative pronouns'),
  subtitle: T('este/ese/aquel — here/there/yonder'),
  section: T('Pronouns'),
  body: C(`## Three distances, as in Portuguese

{este} "this" (**here**, near the speaker) · {ese} "that" (**there**, near the listener) · {aquel} "that yonder" (**there**, far from both).

But {este} and {ese} can be **spatially neutral** when the speaker includes himself: {Ven aquí conmigo} "come here with me" · {Ven ahí conmigo} "come there with me".

Adjectives: {este libro} · {esos libros} · {aquellos días} "those days".

## The neutrals

**Ideas** take the neuter: {esto} "this" · {eso} "that" · {aquello} "that".

{¿Qué es esto?} · {Por eso} "therefore" · {en esto} "herein" · {Más allá de esto}.

## The accent that vanished

Until 2010, demonstrative pronouns and adjectives carried a diacritic accent: {éste}, {ése}, {aquélla}, {éstos}. The RAE abolished it: today they are always written **without an accent**, and pronoun and adjective look identical.

Older editions of Reina-Valera 1960 keep the old spelling; current printings update it.

## New Testament formulas

{Este es mi Hijo, el amado} "this is my Son, the beloved" (Matt 3:17).
{¿Dónde está?} "where is he?".
{Esto es lo que os digo} "this is what I tell you".
{Aquello que oíréis} "that which you will hear" (John 16:13).
{en esto conoced} "hereby know ye" (1 John 4:2) — {esto} as **means**: "by this".

Ex.: {Salió de Galilea} "he came out of Galilee" — the geographical demonstrative is understood: {aquel} {lugar}.`),
  vocab: [
    V('este', 'este', 'this (here!)'),
    V('ese', 'ese', 'that (there!)'),
    V('aquel', 'aquel', 'that (yonder!)'),
    V('esto', 'esto', 'this (neuter!)'),
    V('por eso', 'eso', 'therefore'),
    V('en esto', 'esto', 'herein (1 John 4:2)'),
    V('aquellos días', 'aquel', 'those days'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"este/ese/aquel" = ?'),
    options: [
      T('Here/there/yonder (three distances!)'),
      T('Past/present/future'),
      T('I/you/he'),
      T('Same'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('How is the accented demonstrative written today: {Éste} or {este}?'),
      answer: 'este',
      hint: T('Rule §3: the RAE abolished the diacritic accent.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Ven conmigo", which demonstrative?'),
      options: [
        T('{aquel}'),
        T('{aquello}'),
        T('{este} or {ese} (the speaker is included!)'),
        T('{esto}'),
      ],
      answer: 2,
      hint: T('Rule §1: the speaker is included.'),
    },
    {
      kind: 'match',
      prompt: T('Match the demonstrative to its function'),
      pairs: [
        { a: T('{este}'), b: T('near the speaker') },
        { a: T('{ese}'), b: T('near the listener') },
        { a: T('{aquel}'), b: T('far from both') },
        { a: T('{esto}'), b: T('neuter (idea, means)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'este = here, ese = there, aquel = yonder. The speaker is included: ven conmigo = come here.',
      ),
    },
    { n: '2', text: T('The neuters (esto, eso, aquello) replace any noun and point at an idea.') },
    {
      n: '3',
      text: T(
        'Since 2010 no accent is written on demonstrative pronouns or adjectives: este, ese, aquel.',
      ),
    },
  ],
  notes: [
    {
      label: T('That one is a demonstrative; that one is a relative'),
      text: T(
        'The same pronoun has three distances: {este} touches, {ese} holds off, {aquel} recalls. {Aquél} with an accent is the demonstrative; {aquel} without one is the relative — one word, two jobs.',
      ),
    },
  ],
  examples: [
    { text: '{Este es mi Hijo, el amado}', gloss: T('This is my Son, the beloved (Matt 3:17).') },
    { text: '{en esto conoced}', gloss: T('Hereby know ye (1 John 4:2 — esto = means).') },
    { text: '{por eso}', gloss: T('Therefore (short neuter).') },
    { text: '¿Qué es esto?}', gloss: T('What is this? (Gen 3:9).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Demonstrative paradigm'),
      head: [T('Distance'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.'), T('Neuter')],
      rows: [
        ['aqui', '{este}', '{esta}', '{estos}', '{estas}', '{esto}'],
        ['aí', '{ese}', '{esa}', '{esos}', '{esas}', '{eso}'],
        ['ali', '{aquel}', '{aquella}', '{aquellos}', '{aquellas}', '{aquello}'],
      ],
    },
    {
      caption: T('Table 2 — Biblical formulas'),
      head: [T('Form'), T('Meaning'), T('Reference')],
      rows: [
        ['{Este es mi Hijo}', T('este (attributive)'), 'Mt 3.17'],
        ['{en esto conoced}', T('esto = means'), '1 Jn 4.2'],
        ['{Aquello que oíréis}', T('aquello = remote thing'), 'Jn 16.13'],
        ['{por eso}', T('eso = that'), '1 Jn 3.24'],
      ],
    },
  ],
};
