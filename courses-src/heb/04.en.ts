import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjectives and agreement'),
  subtitle: T('טוֹב, טוֹבָה — the adjective follows its noun'),
  section: T('Nouns, adjectives and pronouns'),
  body: C(`## The inverted order

In Portuguese and English the adjective comes before the noun («a good day»); in Hebrew it comes **after** it: {יוֹם טוֹב} «a good day». The noun comes first because it is the center of the clause — the adjective is only added information. And if the noun is determinate, the adjective usually repeats the article: {הַיּוֹם הַטּוֹב} «the good day», {הָאִשָּׁה הַטּוֹבָה} «the good woman».

## What the adjective agrees with

The adjective agrees in **gender and number** with its noun — and nothing else. It does not inflect for case (there is no accusative or dative on the adjective), because the noun's case already carries it. Two signals do the work: the vowel and the ending.

{טוֹב} «good» masc. sing. · {טוֹבָה} fem. sing. · {טוֹבִים} masc. pl. · {טוֹבוֹת} fem. pl.
{גָּדוֹל} «great» masc. sing. · {גְּדוֹלָה} fem. sing. · {גְּדוֹלִים} masc. pl. · {גְּדוֹלוֹת} fem. pl.

Notice how {ָ} (qamats) marks the feminine in most adjectives: {טוֹבָה}, {גְּדוֹלָה}, {נִכְבָּה} «noble», {יָדוֹעַ} «known». In the plural, {ִים} marks the masculine and {וֹת} the feminine.

## Attributive or predicative?

The article decides the function. With a repeated article the adjective is **attributive**: it qualifies the noun as part of it ({הַיּוֹם הַטּוֹב} «the good day»). Without an article, even when the noun has one, the adjective is **predicative**: it states something about the subject, like a dropped verb ({הַכֹּל טוֹב מֵאֹד} in Gen 1:31 = «everything was very good»; {אַשְׁרֵי־הָאִישׁ} in Ps 1:1 = «happy is the man»).

This distinction changes the meaning and is one of the most productive exegetical tools Hebrew has. In Gen 1:31, {הַכֹּל} takes the article and {טוֹב} does not: God is not defining a class of good things, he is evaluating everything he made.

## The substantivized adjective

Hebrew nouns are so scarce that adjectives end up filling in for names: {הַגִּבּוֹרִים} «the mighty», {הַנְּבִיאִים} «the prophets», {הַיָּשָׁרִים} «the righteous», {הַחַיִּים} «the living». That is why {אֱלֹהִים} can work as a noun («God») and as an adjective («divine») with no change in the grammar.

## Adjective with a pronominal suffix

Adjectives take suffixes exactly as nouns do (ch. 8): {בָּרוּךְ} «blessed», {בָּרוּךְ אַתָּה} «blessed are you», {נַעֲשֶׂה} «made», {נְעָשִׂים} «made» (plural). In Isa 53:10, {וְחָפַץ יְהוָה בְּיָדוֹ יַצְלִיחַ} uses the noun {יָד} «hand» in the dual: {בְּיָדוֹ} is «in his hand» with the dual suffix {וֹ}.

## Formulas to keep

{יוֹם טוֹב} «a good day» · {הַיּוֹם הַטּוֹב} «the good day» · {הָאָרֶץ הַטּוֹבָה} «the good land» (Deut 1:35) · {הָאָרֶץ טוֹבָה} «the land is good» · {שֵׁם טוֹב} «a good name» (Prov 22:1).`),
  vocab: [
    V('טוֹב', 'טוֹב', 'good'),
    V('טוֹבָה', 'טוֹב', 'good (fem.)'),
    V('טוֹבִים', 'טוֹב', 'good (m. pl.)'),
    V('גָּדוֹל', 'גָּדוֹל', 'great'),
    V('גְּדוֹלָה', 'גָּדוֹל', 'great (fem.)'),
    V('הַיּוֹם', 'יוֹם', 'the day'),
    V('הָאָרֶץ', 'אֶרֶץ', 'the land'),
    V('שֵׁם', 'שֵׁם', 'name'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'holy'),
    V('חָכֵם', 'חָכֵם', 'wise'),
    V('הַנְּבִיאִים', 'נָבִיא', 'the prophets'),
    V('בָּרוּךְ', 'בָּרוּךְ', 'blessed'),
    V('הַכֹּל', 'כָּל', 'the all, everything'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say «the good land» (article on both)?'),
    options: [T('טוֹבָה אֶרֶץ'), T('הָאָרֶץ הַטּוֹבָה'), T('אֶרֶץ הַטּוֹבָה'), T('הָאָרֶץ טוֹבָה')],
    answer: 1,
    hint: T('The noun comes first, the adjective after, and both take the article (§3).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In «הַכֹּל טוֹב מֵאֹד» (Gen 1:31), {טוֹב} is:'),
      options: [
        T('attributive, because it repeats the article'),
        T('predicative, because it has no article'),
        T('a noun, not an adjective'),
        T('a numeral'),
      ],
      answer: 1,
      hint: T('Rule §3: without the article, the adjective becomes a statement about the subject.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the feminine singular of «גָּדוֹל» (great).'),
      answer: 'גְּדוֹלָה',
      hint: T('The feminine takes {ָ} (qamats) before the ending: {גָּדוֹל} → {גְּדוֹלָה}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each noun to the adjective that agrees with it.'),
      pairs: [
        { a: '{הָאִשָּׁה}', b: '{הַטּוֹבָה}' },
        { a: '{הַמֶּלֶךְ}', b: '{הַטּוֹב}' },
        { a: '{הַשַּׁיִת}', b: '{הַטָּוֹבָה}' },
        { a: '{הַמְּלָכִים}', b: '{הַטּוֹבִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the correct Hebrew order for «a good king»?'),
      options: [T('{טוֹב מֶלֶךְ}'), T('{מֶלֶךְ טוֹב}'), T('{מֶלֶךְ הַטּוֹב}'), T('{הַמֶּלֶךְ טוֹבָה}')],
      answer: 1,
      hint: T('Noun first, adjective after, and no article when indefinite.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The adjective comes after the noun and agrees in gender and number, never in case.'),
    },
    {
      n: '2',
      text: T(
        'The feminine singular almost always has {ָ} (qamats): {טוֹבָה}, {גְּדוֹלָה}. Plurals: {ִים} masculine, {וֹת} feminine.',
      ),
    },
    {
      n: '3',
      text: T(
        'Repeated article = attributive adjective («the good day»); no article = predicative adjective («the day is good»).',
      ),
    },
    {
      n: '4',
      text: T(
        "The noun's article does not «pass over» to the adjective: if the noun has it, the adjective only has it when attributive.",
      ),
    },
    {
      n: '5',
      text: T(
        'Substantivized adjectives with {הַ} work as groups: {הַנְּבִיאִים} «the prophets», {הַיָּשָׁרִים} «the righteous».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'Since {טוֹב} is the same adjective in {הַמֶּלֶךְ הַטּוֹב} and in {הַמֶּלֶךְ טוֹב}, the difference in meaning is real, not stylistic: in the first the king **is** good (quality), in the second the king is **good** (an assessment made by someone). Passages like John 3:16 depend on that precision.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'In {אֱלֹהִים} and {בָּתֵּינוּ} («our fathers», Gen 12:3) the inflection is that of an adjective, not of a noun. Old grammars called this a «indeclinable noun»; the truth is that they are substantivized adjectives, which is why a numeral can agree: {אֱלֹהִים אֶחָד} «one God», {אֱלֹהִים רַבִּים} «many gods» (Ps 82:6).',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם טוֹב}', gloss: T('a good day — noun + adjective, no article') },
    { text: '{הַיּוֹם הַטּוֹב}', gloss: T('the good day — repeated article (attributive)') },
    { text: '{הַיּוֹם טוֹב}', gloss: T('the day is good — adjective without article (predicative)') },
    { text: '{אִשָּׁה טוֹבָה}', gloss: T('a good woman — {ָ} marks the feminine') },
    { text: '{הָאָרֶץ הַטּוֹבָה}', gloss: T('the good land (Deut 1:35) — the common biblical form') },
    {
      text: '{הַכֹּל טוֹב מֵאֹד}',
      gloss: T('everything was very good (Gen 1:31) — evaluation, not definition'),
    },
    {
      text: '{אַשְׁרֵי־הָאִישׁ}',
      gloss: T('blessed is the man (Ps 1:1) — {הָאִישׁ} with article, {אַשְׁרֵי} without'),
    },
    { text: '{הַנְּבִיאִים}', gloss: T('the prophets — substantivized adjective {נָבִיא}') },
    { text: '{בָּרוּךְ אַתָּה}', gloss: T('blessed are you — adjective + pronoun (ch. 5)') },
    { text: '{בְּיָדוֹ}', gloss: T('in his hand — dual noun + dual suffix {וֹ}') },
    { text: '{שֵׁם טוֹב}', gloss: T('a good name (Prov 22:1) — article-less construction') },
  ],
  tables: [
    {
      caption: T('Table 1 — Paradigm of three adjectives'),
      head: [T('Adjective'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        [T('{טוֹב} «good»'), '{טוֹב}', '{טוֹבָה}', '{טוֹבִים}', '{טוֹבוֹת}'],
        [T('{גָּדוֹל} «great»'), '{גָּדוֹל}', '{גְּדוֹלָה}', '{גְּדוֹלִים}', '{גְּדוֹלוֹת}'],
        [T('{רָע} «bad»'), '{רָע}', '{רָעָה}', '{רָעִים}', '{רָעוֹת}'],
        [T('{קָדוֹשׁ} «holy»'), '{קָדוֹשׁ}', '{קָדֹשׁה}', '{קְדֹשִׁים}', '{קְדֹשׁוֹת}'],
        [T('{חָכֵם} «wise»'), '{חָכֵם}', '{חָכְמָה}', '{חֲכָמִים}', '{חֲכָמוֹת}'],
      ],
    },
    {
      caption: T('Table 2 — Attributive or predicative: the article makes the difference'),
      head: [T('Phrase'), T('Article on the adjective?'), T('Reading')],
      rows: [
        ['{הַיּוֹם הַטּוֹב}', T('yes, repeated'), T('the good day (attributive)')],
        ['{הַיּוֹם טוֹב}', T('no'), T('the day is good (predicative)')],
        ['{הָאָרֶץ הַטּוֹבָה}', T('yes'), T('the good land (Deut 1:35)')],
        ['{הַכֹּל טוֹב מֵאֹד}', T('no (Gen 1:31)'), T('everything was very good')],
        ['{אַשְׁרֵי־הָאִישׁ}', T('no (Ps 1:1)'), T('blessed is the man')],
      ],
    },
  ],
};
