import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Adjectives'),
  subtitle: T('Agreement, position and the shortened forms'),
  section: T('Adjectives and adverbs'),
  body: C(`## The adjective is a noun in disguise

In French the adjective takes the noun's slot and agrees with it in **gender and number**. The masculine is the reference form; the feminine adds *-e*; the plural adds *-s*; the feminine plural adds *-es*. So from {grand} you get four shapes:

| | Masculine | Feminine |
|---|---|---|
| Singular | {grand} | {grande} |
| Plural | {grands} | {grandes} |

The trick is this: **the feminine always adds one letter, and the plural another**. That is why almost every adjective has exactly four forms, and three of them let you derive the fourth.

Two families, however, escape this. Adjectives in *-eux* turn into *-euse*: {heureux → heureuse}, {jaloux → jalouse}, {fâcheux → fâcheuse}. And those ending in *-f* make *-ve* in about a dozen cases: {neuf → neuve}, {serpentin → serpentine}. For the remaining *-f* adjectives the path is simple: {actif → active}, {passif → passive}.

The irregulars are few but must be drilled: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. They are exactly the words that show up every day.

## Position: after by principle, before by habit

The normal slot for the adjective is **after the noun**: {une maison grande}, {un homme heureux}, {une question difficile}. There, after the noun, it can never be mistaken for anything else.

A small and very frequent group of short adjectives comes **before**: {grand}, {petit}, {jeune}, {vieux}, {bon}, {mauvais}, {beau}, {joli}, {nouveau}, {premier}, {dernier}, {long}, {haut}, {large}, {gros}, {vaste}, {faux}, {vrai}. You can learn this list as a single line.

Tradition has compressed the list into five words: **beauté, âge, nombre, bonté, taille** — beauty, age, number, kindness, size. The sentence is a memory device, not a law; real usage disproves half of it.

## When position changes the sense

Here is the richest part of the chapter. Compare:

- {un homme pauvre} — a man without resources
- {un pauvre homme} — a poor fellow (pityfully)
- {un homme grand} — a tall man
- {un grand homme} — a great man (generous, admirable)
- {une femme fiévreuse} ≠ {une fiévreuse femme} — literal description vs. affected tone

When the adjective comes first, it acquires an **affective or evaluative** shade: {le grand Dieu}, {un petit malheur}. When it comes after, it is plain description: a tall God is simply {un Dieu grand}.

There are also near-fixed uses: titles come first ({la Sainte Bible}), colours almost always last ({une robe bleue}, {un ciel clair}), and most past participles do too.

## The shortened forms before a vowel

When an adjective has to stand before a vowel or a silent *h*, a few forms lose their ending:

| Full form | Short form | Example |
|---|---|---|
| {beau} | {bel} | {un bel ami} |
| {nouveau} | {nouvel} | {un nouvel arbre} |
| {vieux} | {vieil} | {un vieil homme} |
| {fou} | {fol} | {un fol amusement} |
| {mou} | {mol} | {un mol oreiller} |

Note that {beau} and {vieux} also change in the plural before a noun: {les beaux enfants}, {les vieux livres}. No other inflection suffers this reduction.

## Reading — Louis Segond

{Dieu a fait de l'homme une âme vivante} uses {vivante}, a postposed adjective: in French Bible style, the slot glued to the noun is the norm. {Il est votre Dieu, et vous êtes son peuple} turns {son} into a substantivised adjective with no word for God. {Voici, je mets devant toi une vie} (Ex. 33:19) uses the absolute construction {devant toi}, and {C'est une bonne nouvelle, et un grand sujet de joie} (Luke 2:10) puts {bonne} and {grand} before their nouns — the affective position we have just described. {L'amour est patient, il est bienfaisant; l'amour n'envie point} (1 Cor. 13:4) piles up invariant adjectives and an already elided verbal construction, beyond what this chapter covers.

## What to take away

Agreement in gender and number solves almost everything; position explains the rest. The base form is the masculine singular, the feminine adds *-e*, the plural adds *-s*, and the only freedom you have is deciding whether the adjective moves up in front of the noun — and there the meaning shifts.`),
  vocab: [
    V('grand', 'grand', 'large; elided: de grandes'),
    V('petit', 'petit', 'small; fem. petite'),
    V('jeune', 'jeune', 'young; also "of age"'),
    V('beau', 'beau', 'beautiful; belle, beaux, bel'),
    V('vieux', 'vieux', 'old; vieille, vieux, vieil'),
    V('nouveau', 'nouveau', 'new; nouvel before a vowel'),
    V('heureux', 'heureux', 'happy; -eux → -euse'),
    V('blanc', 'blanc', 'white; blanche, blancs'),
    V('doux', 'doux', 'gentle; douce (strange -d)'),
    V('faux', 'faux', 'false; fausse; before a vowel: fol'),
    V('pauvre', 'pauvre', 'poor; position changes the sense'),
    V('premier', 'premier', 'first; fixed position'),
    V('même', 'même', 'same; -e only before a noun'),
    V('joli', 'joli', 'pretty; almost always before'),
    V('lourd', 'lourd', 'heavy; of lourds'),
    V('fidèle', 'fidèle', 'faithful; a regular, sober form'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the feminine plural of {vieux}?'),
    options: [T('{vieilles}'), T('{vieux}'), T('{vieuxes}'), T('{vieille}')],
    answer: 0,
    hint: T('It is irregular: the feminine is {vieille}, and only then does the plural -s go on.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Feminine of {heureux} (singular only): heureu_'),
      answer: 'se',
      hint: T('Rule §2: the -eux family makes -euse.'),
    },
    {
      kind: 'choose',
      prompt: T('In «{un homme grand}», what does the phrase mean?'),
      options: [
        T('A generous or admirable man, not a tall man'),
        T('A tall man: {grand} is neutral in front position'),
        T('An old man, by confusion with {vieux}'),
        T('The phrase is ungrammatical'),
      ],
      answer: 0,
      hint: T('Rule §5: an adjective before the noun takes on an affective shade.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its function'),
      pairs: [
        { a: T('bel'), b: T('shortened form of {beau} before a vowel') },
        { a: T('beaux'), b: T('masculine plural of {beau}') },
        { a: T('blanche'), b: T('irregular feminine of {blanc}') },
        { a: T('nouvel'), b: T('shortened form of {nouveau} before a vowel') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many of the adjectives below stand **before** the noun?'),
      options: [T('None'), T('One'), T('Two'), T('Three')],
      answer: 1,
      hint: T(
        'In {une robe bleue}, {une maison grande} and {un petit enfant}, only the third puts the adjective first.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adjective agrees in gender and number: feminine *-e*, plural *-s*, feminine plural *-es* — unless the form already ends in *-e*, *-s* or *-x*, as in {heureux → heureuse → heureux → heureuses}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Two families change in special ways: *-eux* becomes *-euse* ({heureux → heureuse}, {jaloux → jalouse}) and *-f* becomes *-ve* in a few cases ({neuf → neuve}, {serpentin → serpentine}), *-e* in the rest ({actif → active}).',
      ),
    },
    {
      n: '3',
      text: T(
        'The irregulars are few and worth the drilling: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. In the plural before a noun, {beau} and {vieux} change: {beaux}, {vieux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The normal slot is after the noun. In front go the short and frequent ones: {beau, joli, jeune, nouveau, bon, vieux, grand, petit, gros, long, haut, large, premier, dernier, vrai, faux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Position can invert the sense: {un homme pauvre} is «a man without resources», {un pauvre homme} is «a poor fellow»; {un homme grand} is tall, {un grand homme} is remarkable. Titles go first ({la Sainte Bible}), colours almost always last ({une robe bleue}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Shortened forms: a short list'),
      text: T(
        'Before a vowel or a silent *h* there are forms without the final vowel: {beau → bel} ({un bel ami}), {nouveau → nouvel} ({un nouvel homme}), {vieux → vieil} ({un vieil arbre}), {fou → fol} ({un fol amusement}), {mou → mol} ({un mol oreiller}). There are exactly those five; the rest of the language stays intact.',
      ),
    },
    {
      label: T('Colours and some participles'),
      text: T(
        'Colour adjectives nearly always follow the noun — {une robe bleue}, {une maison blanche} — but when {bleu} is used as a noun it goes last: {un garment bleu}. Compound colours take a second word, almost always **before**: {bleu clair}, {bleu foncé}, {vert clair}, {marron clair}. Past participles of transitive verbs, on the other hand, usually follow: {une maison abandonnée}, {une porte fermée}.',
      ),
    },
  ],
  examples: [
    { text: 'une maison grande', gloss: T('a large house — after the noun') },
    { text: 'un homme heureux', gloss: T('a happy man — -eux → -euse') },
    { text: 'des filles heureuses', gloss: T('happy girls — feminine plural in -es') },
    { text: 'une belle maison', gloss: T('a beautiful house — irregular: {belle}') },
    { text: 'un bel ami', gloss: T('a dear friend — shortened form of {beau}') },
    { text: 'un nouvel arbre', gloss: T('a new tree — {nouvel} before a vowel') },
    { text: 'un vieil homme', gloss: T('an old man — {vieil} before a vowel') },
    { text: 'la Sainte Bible', gloss: T('the Holy Bible — a title, always first') },
    { text: 'un homme pauvre', gloss: T('a man without resources — literal sense') },
    { text: 'un grand homme', gloss: T('a great man — laudatory sense') },
  ],
  tables: [
    {
      caption: T('Table 1 — Adjective inflection'),
      head: [T('Pattern'), T('Masc. sg.'), T('Fem. sing.'), T('Masc. pl.'), T('Fem. pl.')],
      rows: [
        ['regra geral', '{grand}', '{grande}', '{grands}', '{grandes}'],
        ['-eux → -euse', '{heureux}', '{heureuse}', '{heureux}', '{heureuses}'],
        ['-f → -ve', '{neuf}', '{neuve}', '{neufs}', '{neuves}'],
        ['-f → -e', '{actif}', '{active}', '{actifs}', '{actives}'],
        ['irregular', '{beau}', '{belle}', '{beaux}', '{belles}'],
        ['irregular', '{vieux}', '{vieille}', '{vieux}', '{vieilles}'],
        ['irregular', '{blanc}', '{blanche}', '{blancs}', '{blanches}'],
        ['irregular', '{doux}', '{douce}', '{doux}', '{douces}'],
      ],
    },
    {
      caption: T('Table 2 — Where the adjective stands'),
      head: [T('Position'), T('Type'), T('Effect'), T('Examples')],
      rows: [
        [
          'depois',
          'after (the rule)',
          'literal, descritivo',
          '{une maison grande}, {un homme heureux}',
        ],
        [
          'antes (lista curta)',
          'before (short list)',
          'ênfase, hábito',
          '{un petit enfant}, {une belle maison}',
        ],
        [
          'antes (sentido)',
          'before (sense)',
          'avaliação, tom afetivo',
          '{un homme pauvre} × {un pauvre homme}',
        ],
        [
          'depois (cores)',
          'after (colours)',
          'uso quase fixo',
          '{une robe bleue}, {un ciel clair}',
        ],
        [
          'antes (títulos)',
          'before (titles)',
          'convenção fixa',
          '{la Sainte Bible}, {le grand Dieu}',
        ],
      ],
    },
  ],
};
