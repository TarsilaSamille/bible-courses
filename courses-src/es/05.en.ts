import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Nouns'),
  subtitle: T('always with the gender memorized'),
  section: T('Nouns'),
  body: C(`## The Spanish noun

Every Spanish noun is **masculine or feminine** — there is no neuter, unlike Latin. Gender is grammatical, not natural: {la mesa} is feminine, but {el mesa} means "the gaming table" ("board game"!). That is why Hill's advice stands: always learn the noun **with its article** — {la leche}, not just {leche}.

Nouns are also **countable or uncountable**, so they do or do not take a plural: {casa}/{casas}, but {agua}/{aguas} ("water" is countable in Spanish: two waters).

## Gender distribution

**Masculine**: days of the week ({el lunes}, {el domingo}), months ({el enero}, {el julio}), seasons ({el verano}), compass points ({el norte}), nouns in {-o}, {-or} ({el amor}, {el señor}), {-aje} ({el viaje}), {-ambre} ({el hombre}), {-ete} ({el poeta}), {-ista} ({el profeta} — masculine despite -a!).

**Feminine**: letters of the alphabet ({la a}, {la e}), hours ({la una}, {las tres} "three o'clock"), nouns in {-a}, {-ción/-sión} ({la nación}, {la canción}), {-dad/-tad} ({la verdad}, {la ciudad}), {-umbre} ({la costumbre}), {-ie} ({la serie}), {-esa} ({la princesa}), {-ista} ({la artista} — feminine here!).

## The traps

• {el día} "day" — masculine in -a!
• {el mapa}, {el clima}, {el problema}, {el tema} — Greek {-ma} nouns, nearly all masculine.
• {la mano} "hand", {la foto} "photo", {la moto} — feminines in -o.
• {el radio} "the radio set" vs {la radio} "broadcasting" (America) — one noun, two genders, two meanings.
• {la tía} — feminine in -t.

## Person nouns

A person may be {el} or {la} according to the referent: {el padre} / {la madre} · {el rey} / {la reina}. Mary takes {la} because she is female by nature, not by rule.`),
  vocab: [
    V('el día', 'día', 'day (masc. in -a!)'),
    V('la mano', 'mano', 'hand (fem. in -o!)'),
    V('el problema', 'problema', 'problem (Greek!)'),
    V('la verdad', 'verdad', 'truth (-dad!)'),
    V('las tres', 'tres', "three o'clock"),
    V('la palabra', 'palabra', 'the word (John 1:1)'),
    V('el santo', 'santo', 'the saint'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Gender of "día" and "mano"?'),
    options: [
      T('Feminine and masculine (by ending)'),
      T('Masculine and feminine (exceptions!)'),
      T('Both masculine'),
      T('Both feminine'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the article: ___ verdad (truth)'),
      answer: 'la',
      hint: T('The -dad ending is feminine.'),
    },
    {
      kind: 'choose',
      prompt: T('Which noun is MASCULINE despite ending in -a?'),
      options: [T('la mesa'), T('el día'), T('la canción'), T('la ventana')],
      answer: 1,
      hint: T('Trap rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match the gender to the noun'),
      pairs: [
        { a: T('masculine (-o)'), b: T('{el problema}') },
        { a: T('feminine (-a)'), b: T('{la mano}') },
        { a: T('masculine (-e)'), b: T('{el hombre} (-ambre)') },
        { a: T('feminine (-dad)'), b: T('{la verdad} (-dad)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Learn nouns WITH gender and article: la leche, not just leche.') },
    { n: '2', text: T('Days, months, seasons, compass points, hours and letters are safe rules.') },
    { n: '3', text: T('Greek -ma nouns are masculine: el problema, el clima, el mapa.') },
    { n: '4', text: T('-ista works for both genders: el profeta / la artista.') },
  ],
  notes: [
    {
      label: T('The noun nearly always comes with an article'),
      text: T(
        'The rule holds even where it looks like an exception: {Dios} takes an article, {cielo} takes one. Absence marks either the abstract ({universo}, {amor}) or a predicate ({Dios es amor}).',
      ),
    },
  ],
  examples: [
    { text: '{el día}', gloss: T('Day (masc. in -a!).') },
    { text: '{la mano}', gloss: T('Hand (fem. in -o!).') },
    { text: '{las tres}', gloss: T("Three o'clock (hours are feminine!).") },
    { text: '{la palabra}', gloss: T('The word (John 1:1).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Endings that decide gender'),
      head: [T('Ending'), T('Gender'), T('Examples')],
      rows: [
        ['-o', 'masc.', '{el libro}, {el amor}'],
        ['-a', 'fem.', '{la casa}, {la nación}'],
        ['-ción / -sión', 'fem.', '{la nación}, {la canción}'],
        ['-dad / -tad', 'fem.', '{la verdad}, {la ciudad}'],
        ['-umbre', 'fem.', '{la costumbre}, {la costumbre}'],
        ['-aje / -ante / -iente', 'masc.', '{el viaje}, {el estudiante}'],
        ['-or', 'masc.', '{el amor}, {el señor}'],
        ['-ista', 'ambos', '{el profeta} / {la artista}'],
      ],
    },
    {
      caption: T('Table 2 — Gender traps'),
      head: [T('Noun'), T('Real gender'), T('Why it misleads')],
      rows: [
        ['{el día}', 'masc.', T('-a')],
        ['{la mano}', 'fem.', T('-o')],
        ['{el problema}', 'masc.', T('Greek -ma')],
        ['{la ciudad}', 'fem.', T('-ad looks masc.')],
        ['{la mano}', 'fem.', T('initial vowel')],
        ['{el}', 'masc.', T('gender of the word, not the referent')],
      ],
    },
  ],
};
