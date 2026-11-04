import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Prepositions and particles'),
  subtitle: T('בְּ, כְּ, לְ — the three letters that glue themselves to the word'),
  section: T('Prepositions, comparison, questions and time'),
  body: C(`## Inseparable prepositions (Gesenius §102)

Three Hebrew prepositions are written as a single letter glued to the word: {ב} «in, with, by», {כ} «as, according to», {ל} «to, for, of».

{בְּרֵאשִׁית} «in the beginning» · {בְּךָ} «in you» · {בְּיוֹם} «on the day» · {בְּתוֹרָה} «in the law»

{כְּצֵל} «like a shadow» (Ps 144:4: {יָמָיו כְּצֵל עוֹבֵר} «his days are like a passing shadow») · {כְּהָאָדָם} «after the manner of man» · {כִּנְסָת} «according to the assembly»

{לַיהוָה} «to the LORD» · {לִי} «to me» · {לְעוֹלָם} «forever» · {לַאֲבֹתֵינוּ} «to our fathers»

The sign that a {ב} or {ל} is a preposition is the **strong dagesh** in the following word: {ב} + {רֵאשִׁית} → {בְּרֵאשִׁית}, with a strong {ר}. If the next word begins with a guttural, the dagesh becomes {ָ}: {ב} + {אָרֶץ} → {בָּאָרֶץ}.

## Separate prepositions

The rest work as independent words: {מִן} «from, since» · {עַל} «upon, against» · {אֶל} «to (people)» · {עִם} «with» · {תַּחַת} «under» · {בֵּין} «between» · {לִפְנֵי} «before, in the face of» · {אַחֲרֵי} «after, behind» · {עַד} «until» · {כְּדֵי} «according to» · {בְּלִי} «without» · {סָבִיב} «around».

Note a few contrasts at once: {מִמִּצְרַיִם} «from Egypt» (from + place) · {עַל־הָאָרֶץ} «upon the land» · {אֶל־מֹשֶׁה} «to Moses» (to + person) · {עִמָּנוּ אֵל} «with us is God» (Isa 8:10, what theologians call «Immanuel») · {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} «between the light and the darkness» (Gen 1:4).

## Padded prepositions

When a preposition joins with {ה}, it forms a new word: {מֵהָרָשַׁת} «in haste» (from {מִן} + {הָרָשַׁת}) · {בַּהֲלָכָה} «onward» · {כַּהֲלָכָה} «according as» · {לַהֲלָכָה} «along». They are few cases, but they explain very common words.

## The range of {ב}

The preposition {ב} covers three functions that Portuguese and English spread across several words:

**Place**: {בַּבַּיִת} «in the house», {בַּבָּקֶר} «in the morning»
**Instrument**: {בְּחָרֶב} «with the sword» (1 Cor 11:25) · {בְּאַמָּה} «with faith»
**Means or cause**: {בְּדֶרֶךְ חַיִּים} «by the way of life»

That is why one Hebrew word appears where English needs three. If you translate mechanically, pick the sense the verb and the context require.

## Connectives: {כִּי} and {וְ}

{כִּי} is the most versatile connective: it means «that», «for», «when», «if» and «yes». In Genesis 1 it appears in {כִּי־טוֹב} «for it was good» and in {כִּי־רָאָה} «and he saw». Note that {כִּי} with {ְ} is a conjunction, while {כ} with {ַ} is a preposition: one letter of difference, one function of difference.

{וְ} (with sheva) is the coordinating «and». {וַ} with {ַ} and dagesh is the wayyiqtol of chapter 10. The difference is an accent.

## The range of {ל}

{ל} introduces purpose, direction, possession and duration: {לִשְׁמֹר} «to keep» (infinitive), {לַיהוָה} «to the LORD» (direction), {לְרוּחַ} «to the spirit» (destination), {לְעוֹלָם} «forever» (duration), {לִמְנוֹת} «to count».

In {חַסְדּוֹ לְעוֹלָם} «his love [endures] forever» (Ps 136, 26 times), {ל} marks duration; in {לִי} «for me» it marks a possessor; in {לָבוֹא} «to come» it marks purpose. Context decides.

## A map so you do not get lost

If you hesitate between {ב} and {כ}, ask: «in» or «like»? Between {ב} and {ל}: «inside» or «to»? Between {ב} and {מִן}: «in» or «from»?

{בְּרֵאשִׁית} is «in» the beginning, not «from» the beginning: that is why {בְּרֵאשִׁית} renders «in the beginning» and {מִרֵאשִׁית} «from the beginning».

If {ל} is glued and the following noun is in the construct, you probably have possession; if it is separate and the noun carries the article, you probably have direction.`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'in the beginning'),
    V('בְּךָ', 'בְּ', 'in you'),
    V('כְּצֵל', 'צֵל', 'like a shadow'),
    V('לְעוֹלָם', 'עוֹלָם', 'forever'),
    V('מִמִּצְרַיִם', 'מִצְרַיִם', 'from Egypt'),
    V('כִּי', 'כִּי', 'that, for, when'),
    V('בֵּין', 'בֵּין', 'between'),
    V('עִמָּנוּ', 'עִם', 'with us'),
    V('עַל', 'עַל', 'upon'),
    V('אֶל', 'אֶל', 'to (person)'),
    V('תַּחַת', 'תַּחַת', 'under'),
    V('עַד', 'עַד', 'until'),
    V('מֵהָרָשַׁת', 'מִן', 'in haste'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does «לְעוֹלָם» mean in Ps 136?'),
    options: [T('Forever (26 times!)'), T('Never'), T('Yesterday'), T('Tomorrow')],
    answer: 0,
    hint: T('{ל} marks duration, and {עוֹלָם} is the noun «world».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the preposition to its sense.'),
      pairs: [
        { a: '{בְּרֵאשִׁית}', b: T('in, inside') },
        { a: '{כְּצֵל}', b: T('like, according to') },
        { a: '{לְעוֹלָם}', b: T('for, during') },
        { a: '{עַל}', b: T('upon') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How do you know the {ב} of {בְּתוֹרָה} is a preposition?'),
      options: [
        T('By the strong dagesh in the following {ת}'),
        T('Because the word has the article'),
        T('Because it appears at the start of the clause'),
        T('Because it has sheva'),
      ],
      answer: 0,
      hint: T('Rule §1: one-letter preposition + strong dagesh in the following word.'),
    },
    {
      kind: 'choose',
      prompt: T('In {כִּי־טוֹב} and {כְּצֵל}, the difference is:'),
      options: [
        T('{כִּי} is a conjunction; {כ} is a preposition'),
        T('{כִּי} is a preposition; {כ} is a conjunction'),
        T('Both are identical'),
        T('{כִּי} is a particle; {כ} is a root'),
      ],
      answer: 0,
      hint: T('Rule §4: with sheva it is a conjunction, with patah a preposition.'),
    },
    {
      kind: 'fill',
      prompt: T('Fill in the correct preposition: «___ מֵהָרָשַׁת» (in haste).'),
      answer: 'מֵהָרָשַׁת',
      hint: T('The word is already complete: the preposition {מִן} is padded with {ה} inside it.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ב} {כ} {ל} are one-letter prepositions, glued to the word and accompanied by a strong dagesh in the following consonant.',
      ),
    },
    {
      n: '2',
      text: T('Before a guttural the dagesh becomes {ָ}: {בְּרֵאשִׁית} → {בָּאָרֶץ} «in the land».'),
    },
    {
      n: '3',
      text: T(
        '{ב} means «in», «with» and «by»: context picks the three ({בְּחָרֶב} «with the sword», {בְּדֶרֶךְ} «by the way»).',
      ),
    },
    {
      n: '4',
      text: T(
        '{כִּי} (with sheva) is a conjunction; {כ} (with patah) is a preposition. One letter of difference changes the function.',
      ),
    },
    {
      n: '5',
      text: T(
        'Glued {ל} + a construct noun suggests possession; separate {ל} + the article suggests direction: {לִי} «for me» and {לַיהוָה} «to the LORD».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'In Gen 1:4, {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} repeats {בֵּין} and the article on both sides: the Hebrew construction of «between X and Y» is symmetrical, while Portuguese and English use one preposition. That is why careless translations write «between the light and between the darkness». The repetition is not an error but the Hebrew way of marking both ends.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Each separate preposition has its own padded case, and those cases survived into Modern Hebrew: {כַּהֲלָכָה} «thus» (from {כ} + {ה} + {הֲלָךְ}) is today one of the commonest words in modern Israeli Hebrew. A preposition from the Tanakh became the «as» of a schoolchild.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('in the beginning — {ב} + {רֵאשִׁית}') },
    { text: '{בְּתוֹרָה}', gloss: T('in the law — {ב} + {תּוֹרָה} (with dagesh in {ת})') },
    { text: '{בָּאָרֶץ}', gloss: T('in the land — {ב} + {א} (guttural → {ָ})') },
    { text: '{בְּךָ}', gloss: T('in you — preposition + suffix (ch. 8)') },
    { text: '{כְּצֵל}', gloss: T('like a shadow (Ps 144:4)') },
    { text: '{כְּהָאָדָם}', gloss: T('after the manner of man, like a man') },
    { text: '{לַיהוָה}', gloss: T('to the LORD — {ל} + the divine name') },
    { text: '{לְעוֹלָם}', gloss: T('forever — {ל} + {עוֹלָם} (Ps 136, 26x)') },
    { text: '{מִמִּצְרַיִם}', gloss: T('from Egypt — separate {מִן}') },
    { text: '{עַל־הָאָרֶץ}', gloss: T('upon the land — separate {עַל}') },
    { text: '{אֶל־מֹשֶׁה}', gloss: T('to Moses — {אֶל} for people') },
    { text: '{עִמָּנוּ אֵל}', gloss: T('with us is God (Isa 8:10)') },
    { text: '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}', gloss: T('between the light and the darkness (Gen 1:4)') },
    { text: '{כִּי}', gloss: T('that, for, when — conjunction (with sheva)') },
    { text: '{מֵהָרָשַׁת}', gloss: T('in haste — padded {מִן} + {ה}') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three inseparables and their senses'),
      head: [T('Preposition'), T('Sense 1'), T('Sense 2'), T('Sense 3')],
      rows: [
        ['{בְּ}', T('in, inside'), T('with (instrument)'), T('by (means)')],
        ['{כְּ}', T('like'), T('according to'), T('as')],
        ['{לְ}', T('to (purpose)'), T('to, of (direction, possession)'), T('during')],
      ],
    },
    {
      caption: T('Table 2 — Separate prepositions, with examples'),
      head: [T('Word'), T('Gloss'), T('Example')],
      rows: [
        ['{מִן}', T('from, since'), '{מִמִּצְרַיִם}'],
        ['{עַל}', T('upon, against'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('to (people)'), '{אֶל־מֹשֶׁה}'],
        ['{עִם}', T('with'), '{עִמָּנוּ אֵל}'],
        ['{תַּחַת}', T('under'), '{תַּחַת שָׁמַיִם}'],
        ['{בֵּין}', T('between'), '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}'],
        ['{עַד}', T('until'), '{עַד־הַיּוֹם}'],
        ['{בְּלִי}', T('without'), '{בְּלִי־דָבָר}'],
        ['{סָבִיב}', T('around'), '{סָבִיב הַשָּׂדֶה}'],
      ],
    },
  ],
};
