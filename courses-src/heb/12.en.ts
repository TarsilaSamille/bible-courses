import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Numerals'),
  subtitle: T('שִׁבְעָה — the number of fullness and of the week'),
  section: T('Verb and numeral'),
  body: C(`## The polarity rule

The cardinals 1 to 10 have two shapes per number: absolute and construct. And there is a gender rule that startles beginners but is purely mechanical:

Numbers **1 and 2** are ordinary: {אֶחָד} «one» (masc.) and {אַחַת} «one» (fem.); {שְׁנַיִם} «two» (masc.) and {שְׁתֵּי} «two» (fem.).

Numbers **3 to 10** invert: the masculine shape is {שְׁלֹשָׁה}, {אַרְבָּעָה}, {חֲמִשָּׁה}…, and the feminine is {שְׁלֹשׁ}, {אַרְבָּע}… That is: to count masculine nouns, use the **feminine** shape; to count feminine nouns, use the masculine one. Almost every numeral in the Bible agrees with a masculine noun — which means the Bible almost always uses feminine shapes. That is why {שִׁבְעָה} «seven», a «feminine» word, is the one the whole world associates with fullness.

## Absolute and construct

When the numeral stands **alone**, it appears in the absolute state and keeps its final vowel: {שִׁבְעָ֖ה} «seven».

When it comes **before** a noun, it enters the construct and the final vowel drops: {שֶׁ֥בַע} + {שָׁבָ֖עַ} = {שֶׁ֥בַע שָׁבָעַ} «seven Sabbaths». Compare with the abstract noun: {יוֹם אֶחָד} «one day» (ch. 3).

A poetic detail: the order is frequently inverted and the words take a maqaf — {שֵׁשֶׁת־יָמִים} «six days» (Exod 20:11), {שְׁנֵי־הַלְוִיִּם} «the two Levites».

## Ordinals

The ordinals are built with {י} and end in {ִי}: {רִאשׁוֹן} «first», {שֵׁנִי} «second», {שְׁלִישִׁי} «third», {רְבִיעִי} «fourth», {חֲמִישִׁי} «fifth», {שִׁשִּׁי} «sixth», {שְׁבִיעִי} «seventh», {שְׁמִינִי} «eighth», {תְּשִׁיעִי} «ninth», {עֲשִׂירִי} «tenth». The feminine adds {ת}: {שְׁנִית}, {שְׁלִישִׁית}.

The ordinal takes the article when it marks position: {בַּיּוֹם הַשְּׁבִיעִי} «on the seventh day» (Gen 2:2). And there is the curious use of the cardinal as ordinal: {יוֹם אֶחָד} «day one» in Gen 1:5 literally means «the first day».

## Tens, hundreds, thousands

Tens are regular: {עֶשְׂרִים} 20, {שְׁלֹשִׁים} 30, {אַרְבָּעִים} 40, {חֲמִשִּׁים} 50, {שִׁשִּׁים} 60, {שִׁבְעִים} 70, {שְׁמֹנִים} 80, {תִּשְׁעִים} 90.

From 11 on, however, the unit comes **after**: {אַחַד־עֶשֶׂר} 11, {שְׁנֵים־עֶשֶׂר} 12, {שְׁלֹשָׁה־עֶשֶׂר} 13, {אַרְבָּעָה־עֶשֶׂר} 14, {חֲמִשָּׁה־עֶשֶׂר} 15, {שִׁשָּׁה־עֶשֶׂר} 16, {שִׁבְעָה־עֶשֶׂר} 17, {שְׁמֹנָה־עֶשֶׂר} 18, {תִּשְׁעָה־עֶשֶׂר} 19.

And there is an old trick: from 21 to 39, from 41 to 59 and so on, the ten ends in {י} and the unit takes {ה} — {אֶחָד וּשְׁלֹשִׁים} «thirty-one». From 41 on, the unit usually ends in {ים}: {אַרְבָּעִים וְאֶחָד} «forty-one».

Hundreds and thousands: {מֵאָה} 100, {מֵאַת} «two hundred», {אֶלֶף} 1000, {אַלְפֵי יִשְׂרָאֵל} «the thousands of Israel», {רִבְּבוֹת} «ten thousands» and {רְאוֹת} «hundred thousands».

## Numbers as verb roots

A curiosity that explains a lot: the numerals 1 to 10 are also **verb roots** in the piel, and the verb means «to do such and such a number of times». {הִקְטִירוּ} «they offered» comes from {קטר} «smoke» plus the number 2: {שְׁנַיִם} + {קטר}. {עֲשָׂרֶת} «ten» + {יד} is literally «ten hands» = «he killed» ({הָעָשָׂרָה}). It is the euphonic mechanism: a number plus a noun produces a verb.

## Seven in the Tanakh

{שִׁבְעָה} «seven» appears more than 240 times in religious context: seven days of creation, seven thrones in Daniel 7, seven trumpets in Revelation, the {שְׁבִיעִי} on the Sabbath. The root {שׁבע} means «to be complete» and also «to swear» — and the Sabbath, the seventh day, is the day of fullness. Keep the seven in mind: it is the most symbolically loaded number in Scripture.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'one'),
    V('אַחַת', 'אַחַת', 'one (fem.)'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'two'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'two (fem.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'seven'),
    V('שֵׁשֶׁת־יָמִים', 'שֵׁשׁ', 'six days'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'the seventh'),
    V('עֲשָׂרָה', 'עֲשָׂרָה', 'ten'),
    V('שְׁלֹשָׁה', 'שְׁלֹשָׁה', 'three'),
    V('שַׁבָּת', 'שַׁבָּת', 'Sabbath'),
    V('מֵאָה', 'מֵאָה', 'hundred'),
    V('אֶלֶף', 'אֶלֶף', 'thousand'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'first'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('How do you say «seven» in Hebrew (absolute form)?'),
    answer: 'שִׁבְעָה',
    hint: T('It starts with shin and ends with he; it is the shape used to count men.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the number to its masculine absolute shape.'),
      pairs: [
        { a: T('three'), b: '{שְׁלֹשָׁה}' },
        { a: T('seven'), b: '{שִׁבְעָה}' },
        { a: T('ten'), b: '{עֲשָׂרָה}' },
        { a: T('two'), b: '{שְׁנַיִם}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How do you say «three women»?'),
      options: [T('{שְׁלֹשׁ נָשִׁים}'), T('{שְׁלֹשָׁה אִשָּׁה}'), T('{שְׁלֹשָׁה נָשִׁים}'), T('{שֶׁלֹשׁ נָשִׁים}')],
      answer: 2,
      hint: T('Rule §1: {נָשִׁים} is feminine, so the numeral takes the masculine shape {שְׁלֹשָׁה}.'),
    },
    {
      kind: 'choose',
      prompt: T('In «שֶׁבַע שָׁבָעַ» («seven Sabbaths»), {שֶׁבַע} is:'),
      options: [
        T('in the absolute state'),
        T('in the construct state (it lost the {ָ})'),
        T('in the plural'),
        T('in the feminine'),
      ],
      answer: 1,
      hint: T('Rule §2: a numeral before a noun enters the construct.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the ordinal «seventh» with the article.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('Base {שְׁבִיעִי} + the article {הַ} with a strong dagesh in the {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'From 3 to 10 the numeral takes the gender opposite to the noun: to count males, use the feminine shape ({שִׁבְעָה} counts men).',
      ),
    },
    {
      n: '2',
      text: T(
        'A numeral before a noun enters the construct and loses its final vowel: {שֶׁבַע שָׁבָעַ} «seven Sabbaths».',
      ),
    },
    {
      n: '3',
      text: T(
        'The dual is the numeral two: {שְׁנַיִם} (masc.) and {שְׁתֵּי} (fem.); the absolute forms of 1 and 2 are irregular.',
      ),
    },
    {
      n: '4',
      text: T('From 11 to 20 the unit comes after, joined by a maqaf: {חֲמִשָּׁה־עֶשֶׂר} «fifteen».'),
    },
    {
      n: '5',
      text: T(
        'Ordinals end in {ִי} (masc.) or {ִית} (fem.) and take the article when marking position: {הַשְּׁבִיעִי}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Trap:'),
      text: T(
        'Many translators put the numeral before the noun for linguistic reasons, producing wrong constructions. The Hebrew order is noun + numeral, or numeral + noun with maqaf when poetic. And mind the polarity: if the noun is feminine, the numeral 3-10 takes the **masculine** shape — {שְׁלֹשָׁה נָשִׁים} «three women», not {שְׁלֹשׁ}.',
      ),
    },
    {
      label: T('Seven and rest:'),
      text: T(
        'The root {שׁבע} means «to be complete» and gives {שַׁבָּת} «Sabbath», {שָׁבוּעַ} «week» and {שְׁבוּעָה} «oath». The Hebrew week does not end on Sunday: it ends on the Sabbath, the day God «rested». That is why seven is also the number of rest and of oath — counting by weeks is counting by fullnesses.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('one (masc. abs.)') },
    { text: '{אַחַת}', gloss: T('one (fem. abs.)') },
    { text: '{שְׁנַיִם}', gloss: T('two (masc.) — dual shape') },
    { text: '{שְׁתֵּי}', gloss: T('two (fem.) — {שְׁ־תֵּי}') },
    { text: '{שִׁבְעָה}', gloss: T('seven (abs. masc.) — the shape used to count men') },
    { text: '{שֶׁבַע}', gloss: T('seven (construct) — same word without the final vowel') },
    { text: '{שֵׁשֶׁת־יָמִים}', gloss: T('six days (Exod 20:11) — construct numeral + maqaf') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('the seventh (with article) — Gen 2:2') },
    { text: '{יוֹם אֶחָד}', gloss: T('day one = the first day (Gen 1:5)') },
    { text: '{חֲמִשָּׁה־עֶשֶׂר}', gloss: T('fifteen — unit + ten with maqaf') },
    { text: '{אַרְבָּעִים וְאֶחָד}', gloss: T('forty-one — {י} on the ten') },
    { text: '{מֵאַת}', gloss: T('two hundred — dual of {מֵאָה}') },
    { text: '{שַׁבָּת}', gloss: T('Sabbath — of the seventh day, the day of rest (Exod 20:11)') },
    { text: '{הָעָשָׂרָה}', gloss: T('he killed — {עֲשָׂרֶת} «ten» + {יד} «hand»') },
  ],
  tables: [
    {
      caption: T('Table 1 — One to ten: absolute, construct and the gender trick'),
      head: [
        T('N'),
        T('Absolute (masc.)'),
        T('Absolute (fem.)'),
        T('Construct (masc.)'),
        T('Construct (fem.)'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{אֶחָד}', '{אַחַת}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שְׁנֵי}', '{שְׁתֵּי}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}'],
        ['4', '{אַרְבָּעָה}', '{אַרְבָּע}', '{אַרְבָּע}', '{אַרְבָּע}'],
        ['5', '{חֲמִשָּׁה}', '{חֲמֵשׁ}', '{חֲמֵשׁ}', '{חֲמֵשׁ}'],
        ['6', '{שִׁשָּׁה}', '{שֵׁשׁ}', '{שֵׁשׁ}', '{שֵׁשׁ}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שֶׁבַע}', '{שֶׁבַע}'],
        ['8', '{שְׁמֹנָה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}'],
        ['9', '{תִּשְׁעָה}', '{תֵּשַׁע}', '{תֵּשַׁע}', '{תֵּשַׁע}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשֶׂר}', '{עֲשֶׂרֶת}'],
      ],
    },
    {
      caption: T('Table 2 — Ordinals, with and without the article'),
      head: [T('N'), T('Ordinal masc.'), T('Ordinal fem.'), T('With article')],
      rows: [
        ['1', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}', '{הָרִאשׁוֹן}'],
        ['2', '{שֵׁנִי}', '{שְׁנִית}', '{הַשֵׁנִי}'],
        ['3', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}', '{הַשְּׁלִישִׁי}'],
        ['6', '{שִׁשִּׁי}', '{שִׁשִּׁית}', '{הַשִּׁשִּׁי}'],
        ['7', '{שְׁבִיעִי}', '{שְׁבִיעִית}', '{הַשְּׁבִיעִי}'],
        ['10', '{עֲשִׂירִי}', '{עֲשִׂירִית}', '{הָעֲשִׂירִי}'],
      ],
    },
    {
      caption: T('Table 3 — Tens, hundreds and thousands'),
      head: [T('Value'), T('Form'), T('Gloss')],
      rows: [
        ['11', '{אַחַד־עֶשֶׂר}', T('eleven')],
        ['12', '{שְׁנֵים־עֶשֶׂר}', T('twelve')],
        ['17', '{שִׁבְעָה־עֶשֶׂר}', T('seventeen')],
        ['20', '{עֶשְׂרִים}', T('twenty')],
        ['30', '{שְׁלֹשִׁים}', T('thirty')],
        ['31', '{אֶחָד וּשְׁלֹשִׁים}', T('thirty-one')],
        ['41', '{אַרְבָּעִים וְאֶחָד}', T('forty-one')],
        ['100', '{מֵאָה}', T('hundred')],
        ['200', '{מֵאַת}', T('two hundred')],
        ['1000', '{אֶלֶף}', T('thousand')],
        ['10.000', '{רִבְּבוֹת}', T('ten thousands')],
      ],
    },
  ],
};
