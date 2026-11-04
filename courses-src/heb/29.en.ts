import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('The particle as a system'),
  subtitle: T('בְּ כְּ לְ מִן שׁ עַל אֶל — the seven letters that open a preposition'),
  section: T('Particle'),
  body: C(`## Seven letters that are not words

Old Hebrew has a group of seven particles: {בְּ} «in, with, by» · {כְּ} «as, according to» · {לְ} «to, for, of» · {מִן} «from, since» · {שׁ} «of, according to» · {עַל} «on, upon» · {אֶל} «to (a person)».

They are called particles because they do not behave like words. They have no case, no free position, and they do not stand alone in the clause: all of them come before the noun and stay glued to it. Two of them make exceptions and are the ones that mislead most, {עַל} and {אֶל}, because they take the maqaf: {עַל־הָאָרֶץ} «upon the land» and {אֶל־מֹשֶׁה} «to Moses» (ch. 17).

The division that settles almost everything after it is a different one: three are **glued** and four are **separate**.

The three glued are {בְּ}, {כְּ} and {לְ}. They are a single letter, and the proof that they are there is the strong dagesh in the consonant that follows: {בְּתּוֹרָה} «in the law» has a strong {ת}, {כְּהָאָדָם} «according to the man» a strong {ה}, {לַיהוָה} «to the LORD» a strong {י}.

The four separate are {מִן}, {שׁ}, {עַל} and {אֶל}. They have two letters, or one letter with a vowel, and none of them causes a dagesh in the following word: {מִן־בְּרִית} «of the covenant» leaves the {ב} as it is.

The practical consequence fits in one question: does the following word have a strong dagesh? If it does, you have a glued particle. If it does not, it is separate or it is a noun. In {מִן־בְּרִית} the dagesh is somewhere else, and that alone is enough to know that the {מִן} is separate.

## The order of the seven

Particles can be stacked, and when they are the order is fixed. The only common case of two in one word is {בְּלִי} «without», which is {ב} + {לִי} «of me»: {ב} comes first and {ל} after.

The order of the seven, for anyone who wants it in one go, is {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}. The three glued come before the four separate.

It is worth saying honestly what that order is and what it is not. It does not follow from any deducible rule: no reasoning about the letters takes {מִן} out of fourth place. It is a convention, which is why it is memorised rather than worked out. What keeps the order from being arbitrary is something else: the first three are the ones that really do glue themselves on, and historical frequency of use is usually what organises a conventional list of this kind.

What the order does in practice is useful. In {בְּלִי} «without», the mark that saves you is the dagesh: if the following word has a strong dagesh, everything before it is one glued particle and nothing more. If it does not, there are two particles or there is a separate one, and context decides.

## Negation and emphasis particles

The same group has children of another family, and these carry meaning of their own.

Negation has two: {לֹא} «not», which negates the indicative and the future, and {אַל} «not», which negates the jussive (ch. 16). The choice between them is obligatory, and swapping them produces a clause no translator knows how to repair.

Framing the clause has more: {אַךְ} «but, however» links two clauses that oppose each other, {הִנֵּה} «behold» introduces a scene in view, and {אוֹלָם} «perhaps» puts a hypothesis on the table without denying anything.

What separates negation from framing is the target. {לֹא} and {אַל} attack the verb. {אַךְ}, {הִנֵּה} and {אוֹלָם} attack nothing: they change the framing. And {אוֹךְ} is not of the same family as {אַךְ}: it has an extra letter, and it means «in some way, in a sense».

## When two particles fuse

The most elegant case of the system is fusion, and {בְּלִי} «without» has already shown it: {ב} + {לִי} «of me», with the {ל} dissolved and the {ב} left in its place.

Separate particles also absorb what follows. {מֵהָרָשַׁת} «hastily» (ch. 17) is {מִן} + {הָרָשַׁת} «the haste», with the {ה} swallowed into the {מ}; {מֵאַת} «from with, against» is {מִן} + {את}. A literal rendering writes «of the haste» and loses the sense of haste, because the particle {מִן} was what was there.

None of this is irregularity. It is the normal behaviour of particles in a language that treats them as prefixes, and it is the reason the list is so short: there are seven, they are fixed, and no rule produces an eighth.

Ps 34.18 offers a complete stack in a single line: {קָרוֹב יְהוָה לְנִשְׁבְּרֵי־לֵב וְאֶת־דַּכְּאֵי־רוּחַ יוֹשִׁיעַ}. Four particles in three words: the glued {לְ}, the separate {מִן}, the coordination {וְ} and the direct-object marker {אֶת}. Three of them are in the first word. One line of a psalm is a complete summary of the system.`),
  vocab: [
    V('בְּ', 'בְּ', 'in, with, by (glued)'),
    V('כְּ', 'כְּ', 'as, according to (glued)'),
    V('לְ', 'לְ', 'to, for, of (glued)'),
    V('מִן', 'מִן', 'from, since (separate)'),
    V('שׁ', 'שׁ', 'of, according to (separate)'),
    V('עַל', 'עַל', 'on, upon (separate)'),
    V('אֶל', 'אֶל', 'to (a person, separate)'),
    V('בְּתּוֹרָה', 'תּוֹרָה', 'in the law'),
    V('מִן־בְּרִית', 'בְּרִית', 'of the covenant'),
    V('עַל־הָאָרֶץ', 'אֶרֶץ', 'upon the land'),
    V('בְּלִי', 'בְּלִי', 'without ({ב} + {לִי})'),
    V('מֵהָרָשַׁת', 'מִן', 'hastily'),
    V('מֵאַת', 'מִן', 'from with, against'),
    V('לֹא', 'לֹא', 'not'),
    V('אַל', 'אַל', 'not (with the jussive)'),
    V('אַךְ', 'אַךְ', 'but, however'),
    V('הִנֵּה', 'הִנֵּה', 'behold'),
    V('אוֹלָם', 'אוֹלָם', 'perhaps'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Which of these is a glued particle that causes a strong dagesh in the following word?',
    ),
    options: [T('{בְּ}'), T('{מִן}'), T('{עַל}'), T('{אֶל}')],
    answer: 0,
    hint: T('The glued ones are {בְּ}, {כְּ} and {לְ}. The other four are separate.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the particle to its category.'),
      pairs: [
        { a: '{בְּ}', b: T('glued (1 letter)') },
        { a: '{כְּ}', b: T('glued (1 letter)') },
        { a: '{מִן}', b: T('separate') },
        { a: '{אֶל}', b: T('separate') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('In {בְּתּוֹרָה} «in the law», which particle has entered, and why?'),
      answer: 'בְּ',
      hint: T('It is {בְּ} + {תּוֹרָה}, and the {ת} ends up with a strong dagesh.'),
    },
    {
      kind: 'choose',
      prompt: T('In {מִן־בְּרִית} «of the covenant», what shows that {מִן} is a separate particle?'),
      options: [
        T('The following word has no strong dagesh'),
        T('The particle has two letters'),
        T('The noun is in the construct'),
        T('The word begins with {מ}'),
      ],
      answer: 0,
      hint: T('Rule §1: a strong dagesh in the following word marks a glued particle.'),
    },
    {
      kind: 'choose',
      prompt: T('Which particle negates a jussive?'),
      options: [T('{אַל}'), T('{לֹא}'), T('{אַךְ}'), T('{הִנֵּה}')],
      answer: 0,
      hint: T('Rule §3: {אַל} negates the jussive; {לֹא} negates the indicative and the future.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The seven particles are {בְּ}, {כְּ}, {לְ}, {מִן}, {שׁ}, {עַל}, {אֶל}. The first three are glued; the last four are separate.',
      ),
    },
    {
      n: '2',
      text: T(
        'A strong dagesh in the following word = a glued particle. No dagesh = a separate particle or a noun.',
      ),
    },
    {
      n: '3',
      text: T(
        'The order of the seven is {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}, and it is a memorised convention, not a deducible rule.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} negates the indicative and the future; {אַל} negates the jussive. Swapping them produces a clause nobody knows how to repair.',
      ),
    },
    {
      n: '5',
      text: T('{אַךְ}, {הִנֵּה} and {אוֹלָם} reframe the clause; {לֹא} and {אַל} attack the verb.'),
    },
  ],
  notes: [
    {
      label: T('Reading:'),
      text: T(
        'A Hebrew particle looks more like a Portuguese prefix than like the word «not». It does not stand alone in the clause, it has no shape for a subject, and it disappears if you take it out. That is why the list is short and fixed: it is the one part of the language you learn in a single pass, with no paradigm.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Five of the seven letters are weak or guttural: {ל}, {מ}, {נ}, {שׁ} and {ע}. That explains one of the strangest behaviours in the language, a particle that loses its own letter when it meets another one ahead of it. From {ב} + {לִי} «without» comes {בְּלִי}, with the {ל} dissolved. The commonest words in Hebrew are the ones born of a fusion like this.',
      ),
    },
  ],
  examples: [
    { text: '{בְּ}', gloss: T('in, with, by — glued, with dagesh') },
    { text: '{כְּ}', gloss: T('as, according to — glued') },
    { text: '{לְ}', gloss: T('to, for, of — glued') },
    { text: '{מִן}', gloss: T('from, since — separate') },
    { text: '{שׁ}', gloss: T('of, according to — separate') },
    { text: '{עַל}', gloss: T('on, upon — separate') },
    { text: '{אֶל}', gloss: T('to (a person) — separate') },
    { text: '{בְּתּוֹרָה}', gloss: T('in the law — {בְּ} + {תּוֹרָה} (dagesh in the {ת})') },
    { text: '{מִן־בְּרִית}', gloss: T('of the covenant — separate {מִן}, no dagesh') },
    { text: '{בְּלִי}', gloss: T('without — {ב} + {לִי} «of me»') },
    { text: '{מֵהָרָשַׁת}', gloss: T('hastily — separate {מִן}') },
    { text: '{מֵאַת}', gloss: T('from with, against — {מִן} + {את}') },
    { text: '{לֹא}', gloss: T('not — negates the verb') },
    { text: '{אַל}', gloss: T('not — negates the jussive') },
    { text: '{אַךְ}', gloss: T('but, however') },
    { text: '{הִנֵּה}', gloss: T('behold') },
    { text: '{אוֹלָם}', gloss: T('perhaps') },
  ],
  tables: [
    {
      caption: T('Table 1 — The seven particles: glued and separate'),
      head: [T('Particle'), T('Type'), T('Main gloss'), T('Example')],
      rows: [
        ['{בְּ}', T('glued (1 letter)'), T('in, with, by'), '{בְּרֵאשִׁית}'],
        ['{כְּ}', T('glued (1 letter)'), T('as, according to'), '{כְּצֵל}'],
        ['{לְ}', T('glued (1 letter)'), T('to, for, of'), '{לַיהוָה}'],
        ['{מִן}', T('separate'), T('from, since'), '{מִן־בְּרִית}'],
        ['{שׁ}', T('separate'), T('of, according to'), '{שֶׁ} «que é de»'],
        ['{עַל}', T('separate'), T('on, upon'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('separate'), T('to (a person)'), '{אֶל־מֹשֶׁה}'],
      ],
    },
    {
      caption: T('Table 2 — Deciding in practice'),
      head: [T('Word'), T('The particle is'), T('Sign'), T('Gloss')],
      rows: [
        ['{בְּתּוֹרָה}', T('glued'), T('strong dagesh in {ת}'), T('in the law')],
        ['{מִן־בְּרִית}', T('separate'), T('no dagesh in {ב}'), T('of the covenant')],
        ['{כְּהָאָדָם}', T('glued'), T('strong dagesh in {ה}'), T('according to the man')],
        ['{עַל־פָּנַי}', T('separate'), T('no dagesh in {פ}'), T('upon the face')],
        ['{בְּלִי}', T('two: {ב} + {לִי}'), T('{ב} before {ל}'), T('without')],
        ['{מֵאַת}', T('fusion: {מִן} + {את}'), T('a separate {מִן} fused'), T('from with, against')],
      ],
    },
  ],
};
