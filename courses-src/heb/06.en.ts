import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Reading: Genesis 1:1-3'),
  subtitle: T('בְּרֵאשִׁית — three verses to test everything you already know'),
  section: T('First texts and particles'),
  body: C(`## The text, word by word

{בְּרֵאשִׁית} «in the beginning» · {בָּרָא} «he created» · {אֱלֹהִים} «God» · {אֵת} «(marker)» · {הַשָּׁמַיִם} «the heavens» · {וְאֵת} «and (marker)» · {הָאָרֶץ} «the land»

Continuous gloss: «In the beginning God created the heavens and the land».

Every word embodies an earlier chapter:

## The six pieces of verse 1

{בְּרֵאשִׁית} is {בְּ} «in» (inseparable preposition) + {רֵאשִׁית} «beginning», derived from {רֹאשׁ} «head» — literally «at the head», that is, «at the beginning».

{בָּרָא} is a 3rd m. qatal (ch. 5). In the Bible it is the word reserved for God; {עָשָׂה} «to do, to make» serves for everything ordinary.

{אֱלֹהִים} comes **without the article**. Compare {הָאֱלֹהִים} «the God» elsewhere: the missing article points to the divine nature, not to one god among others. Note also the {hataf} {ֱ} under the {א} (guttural, ch. 13).

{אֵת} is the direct object marker. It is never translated: writing «God created the heavens» already shows what it does.

{הַשָּׁמַיִם} has article + **dual** noun: the two heavens — not a plural.

{הָאָרֶץ} takes the long article {הָ} because of the guttural {א}.

## Verse 2: the world before light

{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}

«And the land was {תֹהוּ וָבֹהוּ} (waste and void) and {חֹשֶׁךְ} (darkness) over the face of the {תְהוֹם} (deep), and the {רוּחַ} (wind/spirit) of God was hovering over the face of the waters.»

{תֹהוּ} and {בֹהוּ} form a nearly fixed pair of synonyms: {תֹהוּ וָבֹהוּ} is a set phrase, «without form and void». {תְהוֹם} is a masculine noun meaning the primordial abyss, and it returns in Ezekiel and Psalm 107.

## Verse 3: the first word

{וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר}

«And God said, Let there be light; and there was light.»

{וַיֹּאמֶר} is the wayyiqtol (ch. 10) — the engine of narrative. {יְהִי} is the jussive of {הָיָה} (ch. 5). {וַיְהִי־אוֹר} has a maqaf: the two words form one unit and take a single stress — which avoids two stresses in the same phrase.

Notice that the verb {הָיָה} serves for the creation of what is visible, of time ({וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}, v. 5) and even of life ({תִּהְיֶה}, v. 6). It is the verb of being.

## What is left for the next chapter

In three verses you have already read: the article (ch. 1), the dual and gender (ch. 3), the qatal and {הָיָה} (ch. 5). The next chapter adds the missing piece needed to read almost everything: the construct state, the Hebrew way of saying «of».`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'in the beginning'),
    V('בָּרָא', 'ברא', 'he created'),
    V('עָשָׂה', 'עשׂה', 'he did (ordinary verb)'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'God'),
    V('אֵת', 'אֵת', 'object marker'),
    V('הַשָּׁמַיִם', 'שָׁמַיִם', 'the heavens'),
    V('הָאָרֶץ', 'אֶרֶץ', 'the land'),
    V('וַיֹּאמֶר', 'אמר', 'and he said'),
    V('יְהִי', 'היה', 'let there be'),
    V('הָיְתָה', 'היה', 'she was'),
    V('חֹשֶׁךְ', 'חֹשֶׁךְ', 'darkness'),
    V('תְהוֹם', 'תְהוֹם', 'the deep'),
    V('רוּחַ', 'רוּחַ', 'wind, spirit'),
    V('תֹהוּ', 'תֹהוּ', 'waste, void'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is «אֵת» in Genesis 1:1?'),
    options: [
      T('A verb: «to create»'),
      T('Direct object marker (untranslated)'),
      T('The name of God'),
      T('An adjective: «first»'),
    ],
    answer: 1,
    hint: T('It appears twice in verse 1, always before a noun with the article.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match each word of Gen 1:1 to its function.'),
      pairs: [
        { a: '{בָּרָא}', b: T('verb') },
        { a: '{אֵת}', b: T('object marker') },
        { a: '{הַשָּׁמַיִם}', b: T('dual') },
        { a: '{בְּרֵאשִׁית}', b: T('time (adverb)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «וַיְהִי־אוֹר», the maqaf {־} tells you that:'),
      options: [
        T('Both words form a single stress unit'),
        T('{אוֹר} is a direct object'),
        T('The verb is plural'),
        T('It is a quotation'),
      ],
      answer: 0,
      hint: T('Rule §3: the maqaf glues words into one prosodic unit.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Genesis 1:3: «וַיֹּאמֶר אֱלֹהִים ___ אוֹר» (let there be light).'),
      answer: 'יְהִי',
      hint: T('It is the jussive of {הָיָה}, and the vowel is {ְ} (sheva), not {ָ}.'),
    },
    {
      kind: 'choose',
      prompt: T('Why does {אֱלֹהִים} appear without the article in Gen 1:1?'),
      options: [
        T('Because the scribe forgot the {הַ}'),
        T('Because it refers to the divine nature, not to one god among others'),
        T('Because {אֱלֹהִים} is feminine'),
        T('Because proper names never take the article'),
      ],
      answer: 1,
      hint: T('Compare {הָאֱלֹהִים} «the God», used when a specific God is meant.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{אֵת} is a direct object marker and is not translated; its presence is enough to signal an object.',
      ),
    },
    {
      n: '2',
      text: T(
        "{בָּרָא} is God's word; {עָשָׂה} is the ordinary word for «doing». Choosing between them is already theology.",
      ),
    },
    {
      n: '3',
      text: T('The maqaf {־} binds words into one stress unit: {וַיְהִי־אוֹר} takes a single stress.'),
    },
    {
      n: '4',
      text: T(
        '{הַשָּׁמַיִם} is a dual: the Hebrew text prefers two heavens to a plural, which is why the noun keeps {־ַיִם}.',
      ),
    },
    {
      n: '5',
      text: T(
        "{יְהִי} (jussive) expresses God's will; {וַיְהִי} (wayyiqtol) narrates the result: in Gen 1:3 both appear in one clause.",
      ),
    },
  ],
  notes: [
    {
      label: T('Word order:'),
      text: T(
        'Hebrew does not mark the direct object by position: {בָּרָא} and {אֵת} can swap places and the clause means the same thing. The default order is verb-subject-object-complement, and it is that order — not the position of {אֵת} — that produces the sense of emphasis in Genesis 1.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The word {אֱלֹהִים} is among the most studied in the language: it is a feminine plural, most probably by resemblance to {אֱלֹהִּים} (people, gods). Jewish tradition reads the name as bimorphemic, and Christian tradition reads the plural as fullness. This course follows usage: with {אֶת} or {אֶל}, {אֱלֹהִים} is the proper name, without the article.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('in the beginning — {בְּ} «in» + {רֵאשִׁית} «beginning»') },
    { text: '{בָּרָא}', gloss: T('created — 3rd m. qatal of root {ברא}') },
    { text: '{אֱלֹהִים}', gloss: T('God — no article; with {הָ} it would be «the God»') },
    { text: '{אֵת}', gloss: T('direct object marker — untranslated') },
    { text: '{הַשָּׁמַיִם}', gloss: T('the heavens — article + dual {שָׁמַיִם}') },
    { text: '{הָיְתָה}', gloss: T('was — 3rd f. of {הָיָה} (ch. 5)') },
    { text: '{תֹהוּ וָבֹהוּ}', gloss: T('waste and void — a fixed, nearly indeclinable pair') },
    { text: '{תְהוֹם}', gloss: T('the deep — the primordial chaos (Ps 107:29)') },
    { text: '{מְרַחֶפֶת}', gloss: T('was hovering — feminine participle with implied {הָיָה}') },
    { text: '{וַיֹּאמֶר}', gloss: T('and he said — wayyiqtol, the narrative engine (ch. 10)') },
    { text: '{יְהִי}', gloss: T('let there be — jussive of {הָיָה}') },
    { text: '{וַיְהִי־אוֹר}', gloss: T('and there was light — maqaf: one stress') },
  ],
  tables: [
    {
      caption: T('Table 1 — Genesis 1:1-3 word by word'),
      head: [T('Word'), T('Gloss'), T('What you recognize')],
      rows: [
        ['{בְּרֵאשִׁית}', T('in the beginning'), T('{בְּ} + {רֵאשִׁית} (preposition)')],
        ['{בָּרָא}', T('created'), T('3rd m. qatal')],
        ['{אֱלֹהִים}', T('God'), T('no article + hataf')],
        ['{אֵת}', T('(direct object)'), T('marker, untranslated')],
        ['{הַשָּׁמַיִם}', T('the heavens'), T('article + dual')],
        ['{וְאֵת}', T('and (direct object)'), T('{ו} + {אֵת}')],
        ['{הָאָרֶץ}', T('the land'), T('long article {הָ}')],
        ['{הָיְתָה}', T('was'), T('3rd f. qatal of {הָיָה}')],
        ['{תֹהוּ וָבֹהוּ}', T('waste and void'), T('set phrase')],
        ['{תְהוֹם}', T('deep'), T('masculine noun')],
        ['{וַיֹּאמֶר}', T('and he said'), T('wayyiqtol')],
        ['{יְהִי}', T('let there be'), T('jussive of {הָיָה}')],
        ['{וַיְהִי־אוֹר}', T('and there was light'), T('maqaf: one stress')],
      ],
    },
    {
      caption: T('Table 2 — Verbs and their function in Genesis 1'),
      head: [T('Form'), T('Gloss'), T('What it does in the clause')],
      rows: [
        ['{בָּרָא}', T('created'), T('main verb, 3rd m.')],
        ['{הָיְתָה}', T('was'), T('verb of state, 3rd f.')],
        ['{מְרַחֶפֶת}', T('was hovering'), T('participle + implied {היה}')],
        ['{וַיֹּאמֶר}', T('and he said'), T('narrative: opens speech')],
        ['{יְהִי}', T('let there be'), T('jussive: divine will')],
        ['{וַיְהִי}', T('and there was'), T('narrative: result')],
      ],
    },
  ],
};
