import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Colours and comparison'),
  subtitle: T('טוֹב מִן — better THAN, and the red of Adam'),
  section: T('Prepositions, comparison, questions and time'),
  body: C(`## Comparing with {מִן}

Hebrew has no degree suffixes: the comparative is built with the preposition {מִן} «from/than». {טוֹב} «good» → {טוֹב מִן} «better than» · {רָע} «bad» → {רָע מִן} «worse than» · {גָּדוֹל} «great» → {גָּדוֹל מִן} «greater than».

Canonical example: {כִּי־טוֹבָה חָכְמָה מִפְּנִינִים} «for wisdom is better than pearls» (Prov 8:11). And {גָּבוֹר מֵהַמָּקוֹם} «stronger than the place».

A register variation: the noun after {מִן} often enters the **construct** state when the noun it is compared with does so; the commonest shape is the maqaf: {טוֹב־מִן}. In Proverbs the superlative construction sometimes appears as {טוֹב־מִן} without a visible {מִן} — context decides.

## Equality and superiority

{nָכוֹן} «equal to» + {ל} (or {נָכוֹן־לְ}): {כָּל־בְּשָׂר־אֵתֶם כְּעֵצֶם אֶחָד} «all flesh as one bone» (Gen 2:23).

{גָּדוֹל־מִן} «greater than» is the analytic superlative; {הַגָּדוֹל} «the great» is the superlative with the article.

## Superlative: three roads

Hebrew has three ways of saying «the most»:

**Construct**: {מֶלֶךְ מְלָכִים} «king of kings» — but careful: it can mean «a king among kings».
**Repetition**: {קָדוֹשׁ קָדָשִׁים} «most holy» (the Holy of Holies), {שִׁיר הַשִּׁירִים} «song of songs», {שַׁדַּי שַׁדַּי} «Lord of lords».
**Article + adjective**: {הַיּוֹם הַגָּדוֹל} «the great day», {הָרָאשִׁית} «the beginning».

In {שִׁיר הַשִּׁירִים} there is also the other sense: «a singing of songs». Hebrew loves duplication, and context decides.

## Colours

Colours are ordinary adjectives, and several colour words are also plant and animal names:

{לָבָן} «white» → {לְבָנָה} (f.) · {שָׁחֹר} «black» · {יָרֹק} «green» · {אָדֹם} «red»

{שָׁנִי} «scarlet» — the thread of {חוּט הַשָּׁנִי} «the scarlet cord» (Josh 2:18, Rahab's house) · {תְּכֵלֶת} «blue-purple» · {אַרְגָּמָן} «purple».

The pair {תְּכֵלֶת} {אַרְגָּמָן} describes the tabernacle curtains (Exod 26) and the high priest's robe: it was the most expensive fabric in the ancient world.

## The colour of Adam

It is worth stopping at {אָדֹם}. The adjective «red» comes from the root of {אָדָם} «man» and of {אֲדָמָה} «ground». Jewish tradition therefore reads it this way: Adam was made from red clay, and his name is the colour he came from.

The same holds for other words: the language links words by their origin, and colour words are no exception.

## Colour and the potter

One of the most beautiful uses of colour in the Tanakh is in Jeremiah 18, where the potter's clay «returns to the clay». Colours and clay belong to the same family of images in the prophets.

Most famously of all: the law of testimony (Deut 17:6) requires two witnesses — not a colour, but a number. Go back to chapter 11 for that; the lesson here is another one: **Hebrew names colours with the same precision with which it names utensils**, and translating everything as «colour» hides half of the text.`),
  vocab: [
    V('טוֹב מִן', 'טוֹב', 'better than'),
    V('חָכְמָה', 'חָכְמָה', 'wisdom'),
    V('מִפְּנִינִים', 'פֶּנִי', 'pearls'),
    V('קֹדֶשׁ קָדָשִׁים', 'קֹדֶשׁ', 'the most holy'),
    V('לָבָן', 'לָבָן', 'white'),
    V('שָׁחֹר', 'שָׁחֹר', 'black'),
    V('אָדֹם', 'אָדֹם', 'red'),
    V('יָרֹק', 'יָרֹק', 'green'),
    V('חוּט הַשָּׁנִי', 'שָׁנִי', 'scarlet cord'),
    V('תְּכֵלֶת', 'תְּכֵלֶת', 'blue-purple'),
    V('אַרְגָּמָן', 'אַרְגָּמָן', 'purple'),
    V('מֶלֶךְ מְלָכִים', 'מֶלֶךְ', 'king of kings'),
    V('רָע', 'רָע', 'bad'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the comparative formed in Hebrew?'),
    options: [
      T('With an -er suffix'),
      T('With מִן: «טוֹב מִן» (good FROM = better than)'),
      T('By doubling the word'),
      T('With the הַ prefix'),
    ],
    answer: 1,
    hint: T('Hebrew has no degree suffixes: it uses a separate preposition.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the colour to its adjective.'),
      pairs: [
        { a: T('white'), b: '{לָבָן}' },
        { a: T('black'), b: '{שָׁחֹר}' },
        { a: T('red'), b: '{אָדֹם}' },
        { a: T('scarlet'), b: '{שָׁנִי}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form marks a superlative by repetition?'),
      options: [T('מֶלֶךְ מְלָכִים'), T('קָדוֹשׁ קָדָשִׁים'), T('הַגָּדוֹל'), T('גָּבוֹר מֵהַמָּקוֹם')],
      answer: 1,
      hint: T('Rule §3: repeating the same word is an emphatic superlative.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the comparative: «חָכְמָה טוֹבָה ___ פְּנִינִים» (better than).'),
      answer: 'מִפְּנִינִים',
      hint: T('The preposition is {מִן} and the noun {פֶּנִי} enters the construct.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {אָדֹם} «red» etymologically interesting?'),
      options: [
        T('It shares a root with {אָדָם} «man» and {אֲדָמָה} «ground»'),
        T('It means «blood» in Greek'),
        T('It is the only adjective that does not inflect'),
        T('It appears only in the Pentateuch'),
      ],
      answer: 0,
      hint: T('Rule §5: colour words come from the concrete world.'),
    },
  ],
  rules: [
    { n: '1', text: T('The Hebrew comparative uses {מִן} «from/than»: {טוֹב מִן} «better than».') },
    { n: '2', text: T('{נָכוֹן} + {ל} means «equal to»: {כְּעֵצֶם אֶחָד} «as one bone».') },
    {
      n: '3',
      text: T(
        'The superlative appears in construct ({מֶלֶךְ מְלָכִים}), by repetition ({קָדוֹשׁ קָדָשִׁים}) or with the article ({הַגָּדוֹל}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Colours are ordinary adjectives and agree in gender and number like any other (ch. 4).',
      ),
    },
    {
      n: '5',
      text: T(
        'Some colours have concrete etymology: {אָדֹם} «red» comes from {אָדָם} «man» and {אֲדָמָה} «ground».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'Careful with {שִׁיר הַשִּׁירִים}: it can be «song of songs» (superlative) or «a singing of songs» (literal). In Ezekiel 43:27 the verb {הֵרִיד} «let be heard» accompanies the singing, and context prefers the literal sense of «a song of songs». Ancient Hebrew loved ambiguity, and translations have hugged it instead of resolving it.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Hebrew purple came from a Mediterranean snail, and the word {אַרְגָּמָן} reached Portuguese and Spanish through «argema». Romans and Phoenicians paid a fortune for it, which is why the tabernacle, with {תְּכֵלֶת} and {אַרְגָּמָן}, was the most luxurious object in ancient Israel.',
      ),
    },
  ],
  examples: [
    { text: '{טוֹב מִן}', gloss: T('better than — comparative') },
    { text: '{רָע מִן}', gloss: T('worse than — negative comparative') },
    { text: '{חָכְמָה טוֹבָה מִפְּנִינִים}', gloss: T('wisdom is better than pearls (Prov 8:11)') },
    { text: '{גָּבוֹר מֵהַמָּקוֹם}', gloss: T('stronger than the place') },
    { text: '{נָכוֹן}', gloss: T('equal to, prepared for') },
    { text: '{מֶלֶךְ מְלָכִים}', gloss: T('king of kings — or «a king among kings»') },
    { text: '{קֹדֶשׁ קָדָשִׁים}', gloss: T('the most holy (the Holy of Holies)') },
    { text: '{שִׁיר הַשִּׁירִים}', gloss: T('song of songs — or «a singing of songs»') },
    { text: '{לָבָן}', gloss: T('white (fem. {לְבָנָה})') },
    { text: '{שָׁחֹר}', gloss: T('black — {שַׁעַר הַשָּׁחֹר} «black hair» (Song 5:11)') },
    { text: '{אָדֹם}', gloss: T('red — from {אָדָם} and {אֲדָמָה}') },
    { text: '{חוּט הַשָּׁנִי}', gloss: T("the scarlet cord (Josh 2:18, Rahab's house)") },
    { text: '{אַרְגָּמָן}', gloss: T('purple — the most expensive fabric of the ancient world') },
    { text: '{יָרֹק}', gloss: T('green — «the man shall be like a green tree» (Ps 92:15)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Three roads to the superlative'),
      head: [T('Type'), T('Example'), T('Gloss'), T('Caveat')],
      rows: [
        [T('Construct'), '{מֶלֶךְ מְלָכִים}', T('king of kings'), T('may mean «a king among kings»')],
        [T('Repetition'), '{קָדוֹשׁ קָדָשִׁים}', T('the most holy'), T('emphatic superlative')],
        [T('Repetition'), '{שִׁיר הַשִּׁירִים}', T('song of songs'), T('may mean «a singing of songs»')],
        [T('Article + adjective'), '{הַיּוֹם הַגָּדוֹל}', T('the great day'), T('definite superlative')],
        [T('Analytic'), '{גָּבוֹר מֵהַמָּקוֹם}', T('stronger than the place'), T('uses {מִן} with maqaf')],
      ],
    },
    {
      caption: T('Table 2 — The colours of Scripture'),
      head: [T('Colour'), T('Masc.'), T('Fem.'), T('Where it appears')],
      rows: [
        [T('white'), '{לָבָן}', '{לְבָנָה}', T('{חוּט לָבָן} «white linen» (Mic 3:3)')],
        [T('black'), '{שָׁחֹר}', '{שָׁחוֹרָה}', T('{שַׁעַר הַשָּׁחֹר} «black hair» (Song 5:11)')],
        [T('red'), '{אָדֹם}', '{אֲדוֹמָה}', T('root of {אָדָם} «man»')],
        [T('scarlet'), '{שָׁנִי}', '{שָׁנִית}', T('{חוּט הַשָּׁנִי} (Josh 2:18)')],
        [T('purple'), '{אַרְגָּמָן}', '{אַרְגָּמָנִית}', T('tabernacle and high priest')],
        [T('blue'), '{תְּכֵלֶת}', '{תְּכֵלֶת}', T('with {אַרְגָּמָן} in the curtains (Exod 26)')],
        [T('green'), '{יָרֹק}', '{יָרְקָה}', T('the tree of Ps 92:15')],
      ],
    },
  ],
};
