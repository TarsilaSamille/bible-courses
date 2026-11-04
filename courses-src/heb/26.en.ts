import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('The adverb: what it does'),
  subtitle: T('בְּכָל, הַיּוֹם, לֹא — the fourth class, built out of other pieces'),
  section: T('Adverb'),
  body: C(`## The phrase that does the work of an adverb

Old Hebrew has no adverb derived from an adjective: no word means «quickly» the way {טוֹב} means «good». What it uses instead is a phrase of preposition plus generic noun, with the noun in the construct:

{בְּ + כֹּל → בְּכָל} «entirely, with everything» · {בְּ + יוֹם → בְּיוֹם} «on the day when» · {בְּ + רוּחַ → בְּרוּחַ} «in a single breath, suddenly» · {ל + בַּד → לִבְּדוֹ} «by himself, alone» · {עַל + פִּי → עַל־פִּי} «by the mouth of, through».

Each of them does what an adverb does in English, and each has two anchors where English has one. In {בְּרוּחַ} there is no word for «suddenly»: the sense comes from the noun {רוּחַ} «wind, breath», and it is the breath that produces the idea of the sudden. Hebrew prefers to show the thing rather than name the idea.

## One root, three jobs

The letter {ב} works in three offices inside the same family. {בֵּית} «house» is a noun, the construct form of {בַּיִת}. {בְּ} «in» is the inseparable preposition. And {בְּבֵּית} «in the house» is the phrase that joins the two and works as an adverb of place.

The sign that the first {ב} is a preposition is the strong dagesh in the following consonant, exactly as in {בְּרֵאשִׁית} (ch. 17). The second {ב} is the article {הַ}, and the whole word {בְּבֵּית} is comparable to {הַבַּיִת} «the house». Three words, three functions, one root.

## The few that really are words

There is a short list of adverbs that are not phrases: {אַךְ} «but, however» · {כֵּן} «thus, in this way» · {עַתָּה} «now» · {אָז} «then» · {שָׁם} «there» · {הִנֵּה} «behold» · {אוֹלָם} «perhaps».

Nearly all of them have a noun underneath. {עַתָּה} comes from {עֵת} «time, occasion» (ch. 20) with the noun ending {ָה}, and the same noun turns up in Ezekiel with the plain nominal sense of «occasion». {שָׁם} «there» and {שֵׁם} «name» have exactly the same letters: the vowel is what separates one from the other, and a reader in a hurry confuses them. {אַךְ} is the exception in the list, the only one with no noun behind it, which is why it takes so little room: it is glued to the word it corrects.

## Time and negation

Adverbs of time are the tidiest part: {הַיּוֹם} «the day», which means «today» when the verb is present · {הָאִתָּה} «today» · {עַתָּה} «now» · {אָז} «then» · {מֵחָר} «tomorrow» · {אֲתָמוֹל} «yesterday».

Negation is where Hebrew moves furthest from English. There are two words: {לֹא} and {אֵין}. {לֹא} negates a verb and can only come before one. {אֵין} is the absence of a thing and carries no verb at all. In English the two sentences that follow have the same grammar: «there is a brother» and «the brother exists», each with its own «not». In Hebrew they do not: the first becomes {לֹא־יֵשׁ אֵח} (Gen 4.9), because the verb «to be» exists and takes the negation; the second becomes {אֵין חֵקֶר} (Isa 40.28), because «there is no search» has no verb to negate. Anyone who renders {אֵין} as «is not» or «does not exist» is adding a verb Hebrew does not have.

Where reading breaks down is when a verb turns up after {אֵין}. Greek does not break down, because it has a real existential verb, {εἰμί}, and writes {οὐκ ἔστι} «there is not». Hebrew never had that verb. In 1 Samuel, in Jeremiah and in Ezekiel the construction turns up anyway, and every translator has to decide whether they are reading a plain absence or an emphatic negation of the «in no way» kind. Context decides, and that is why these pages look broken to anyone arriving from Greek or Portuguese: they are not broken, they are missing the piece the other languages inherited from Latin.

One last case to keep: the negation can fall on a participle. In Genesis 3.5 the serpent says {לֹא יֹדֵעַ} and goes on: literally «not, knowing». The {לֹא} does not negate a finite verb, it negates a participle, and the result is a clause English has to render with a whole parenthesis.`),
  vocab: [
    V('בְּכָל', 'בְּכָל', 'entirely, with everything'),
    V('בְּיוֹם', 'בְּיוֹם', 'on the day when'),
    V('בְּרוּחַ', 'רוּחַ', 'in a single breath'),
    V('לִבְּדוֹ', 'לִבְּדוֹ', 'by himself, alone'),
    V('עַל־פִּי', 'פִּי', 'by the mouth of, through'),
    V('בֵּית', 'בַּיִת', 'house (construct)'),
    V('בְּ', 'בְּ', 'in, with, by (preposition)'),
    V('בְּבֵּית', 'בַּיִת', 'in the house'),
    V('אַךְ', 'אַךְ', 'but, however'),
    V('כֵּן', 'כֵּן', 'thus, in this way'),
    V('עַתָּה', 'עַתָּה', 'now'),
    V('אָז', 'אָז', 'then'),
    V('שָׁם', 'שָׁם', 'there'),
    V('הִנֵּה', 'הִנֵּה', 'behold'),
    V('הַיּוֹם', 'יוֹם', 'the day; today'),
    V('הָאִתָּה', 'הָאִתָּה', 'today'),
    V('לֹא', 'לֹא', 'not (with a verb)'),
    V('אֵין', 'אֵין', 'there is not, does not exist'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is {בְּכָל} grammatically?'),
    options: [
      T('A phrase of preposition plus noun in the construct'),
      T('An adverb derived from {כֹּל}'),
      T('A noun with the article'),
      T('A negative particle'),
    ],
    answer: 0,
    hint: T('It is {בְּ} + {כֹּל}: the preposition {בְּ} plus the generic noun {כֹּל} «all».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the adverb to its origin.'),
      pairs: [
        { a: '{עַתָּה}', b: T('from the noun {עֵת} «time»') },
        { a: '{שָׁם}', b: T('the same letters as {שֵׁם} «name»') },
        { a: '{בְּכָל}', b: T('{בְּ} + {כֹּל} «all»') },
        { a: '{אַךְ}', b: T('a particle with no noun behind it') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'In «there is no search of his understanding» (Isa 40.28), why does Hebrew have no verb?',
      ),
      options: [
        T('Because {אֵין} already is the absence: the clause has no verb'),
        T('Because the clause is a noun with an article'),
        T('Because the scribe dropped the verb «to be»'),
        T('Because {אֵין} is a verb'),
      ],
      answer: 0,
      hint: T('Rule §4: {אֵין} has no verb; it is {לֹא} that requires one.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Genesis 4:9: «לֹא־יֵשׁ ___» (there is no brother).'),
      answer: 'אֵח',
      hint: T('It is the noun {אָח} «brother», with no article.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word explains the difficulty of reading {אֵין} in 1 Samuel and Ezekiel?'),
      options: [
        T('Greek has a real existential verb, {οὐκ ἔστι}, and Hebrew never had one'),
        T('The translation of {אֵין} is always the same everywhere'),
        T('The Tanakh forbids a verb after a particle'),
        T('It is a scribal error in the late books'),
      ],
      answer: 0,
      hint: T('Hebrew expresses absence with {אֵין} and has no verb to negate.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Hebrew adverb is almost always preposition plus generic noun in the construct: {בְּכָל}, {בְּיוֹם}, {בְּרוּחַ}, {לִבְּדוֹ}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The same root serves three functions: {בֵּית} (noun), {בְּ} (preposition) and {בְּבֵּית} (phrase). The strong dagesh in the following consonant marks the preposition.',
      ),
    },
    {
      n: '3',
      text: T(
        'The short adverbs ({אַךְ}, {כֵּן}, {עַתָּה}, {אָז}, {שָׁם}) also have a noun underneath, except {אַךְ}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} negates a verb; {אֵין} asserts absence and has no verb. A clause with {אֵין} cannot be rendered with a verb without the translator choosing one.',
      ),
    },
    {
      n: '5',
      text: T(
        '{הַיּוֹם} means «the day» and means «today» when the verb is present: the adverb of time comes out of the noun {יוֹם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'The phrase {בְּיוֹם אֲכָלְכֶם} in Genesis 3.5 is the best example of the adverb-as-phrase, and at the same time a translation problem. The phrase means «on the day when you eat», but the verb {אֲכָלְכֶם} is in the construct and means literally «when you eat». The noun {יוֹם} does the work English gives to the conjunction, and a translator who writes only «on the day» loses the temporal condition.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Archaic Greek had adverbs in {־ως}, like {πιστῶς} «faithfully» from {πιστός}. The loss of that suffixation is one of the oldest changes in Greek and it is what separates Homeric Greek from New Testament Greek. Hebrew never had a suffix here at all: its adverb was always a word from outside, a preposition glued to a noun.',
      ),
    },
  ],
  examples: [
    { text: '{בְּכָל}', gloss: T('entirely, with everything — {בְּ} + {כֹּל}') },
    { text: '{בְּיוֹם}', gloss: T('on the day when — {בְּ} + {יוֹם}') },
    { text: '{בְּרוּחַ}', gloss: T('in a single breath — the breath as the cause') },
    { text: '{לִבְּדוֹ}', gloss: T('by himself — {ל} + {בַּד}') },
    { text: '{עַל־פִּי}', gloss: T('by the mouth of — {עַל} + {פִּי}') },
    { text: '{בְּבֵּית}', gloss: T('in the house — {בְּ} + {הַ} + {בֵּית}') },
    { text: '{אַךְ}', gloss: T('but, however — a particle with no noun') },
    { text: '{שָׁם}', gloss: T('there — not to be confused with {שֵׁם} «name»') },
    { text: '{הַיּוֹם}', gloss: T('the day, today — from {יוֹם}') },
    { text: '{הָאִתָּה}', gloss: T('today (Gen 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('there is no search (Isa 40.28) — a clause with no verb') },
    { text: '{לֹא־יֵשׁ אֵח}', gloss: T('there is no brother (Gen 4.9) — {לֹא} + the verb «to be»') },
  ],
  tables: [
    {
      caption: T('Table 1 — Adverbs that are phrases'),
      head: [T('Pieces'), T('Result'), T('Gloss'), T('What it gives')],
      rows: [
        ['{בְּ} + {כֹּל}', '{בְּכָל}', T('entirely'), T('the whole as measure')],
        ['{בְּ} + {יוֹם}', '{בְּיוֹם}', T('on the day when'), T('fixed time')],
        ['{בְּ} + {רוּחַ}', '{בְּרוּחַ}', T('with a rush'), T('breath, haste')],
        ['{ל} + {בַּד}', '{לִבְּדוֹ}', T('by himself'), T('isolation')],
        ['{עַל} + {פִּי}', '{עַל־פִּי}', T('by the mouth of'), T('means, instrument')],
        ['{בְּ} + {דֶּרֶךְ}', '{בְּדֶרֶךְ}', T('through the way of'), T('means, cause')],
        ['{בְּ} + {כֹּחַ}', '{בְּכֹּחַ}', T('with strength'), T('instrument')],
      ],
    },
    {
      caption: T('Table 2 — The short adverbs and the noun underneath'),
      head: [T('Adverb'), T('Gloss'), T('Noun of origin')],
      rows: [
        ['{אַךְ}', T('but, however'), T('— (a bare particle)')],
        ['{כֵּן}', T('thus, in this way'), T('{כֵּן} «manner» (rare as a noun)')],
        ['{עַתָּה}', T('now'), T('{עֵת} «time, occasion»')],
        ['{אָז}', T('then'), T('{אָז} «then» (the word itself)')],
        ['{שָׁם}', T('there'), T('{שֵׁם} «name» (same letters)')],
        ['{הִנֵּה}', T('behold'), T('{הִנֵּה} «look, behold»')],
        ['{אוֹלָם}', T('perhaps'), T('— (occasional)')],
        ['{הָאִתָּה}', T('today'), T('{יוֹם} «day»')],
      ],
    },
  ],
};
