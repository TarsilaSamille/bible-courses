import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('The numeral: cardinal and ordinal'),
  subtitle: T('אֶחָד שְׁנַיִם · רִאשׁוֹן שֵׁנִי — two series that do not mix'),
  section: T('Numeral'),
  body: C(`## Two series built in opposite ways

Hebrew has two number systems, and they are made in opposite ways. The cardinal answers «how many?» and the ordinal answers «which?»:

{אֶחָד} «one» · {שְׁנַיִם} «two» · {שִׁבְעָה} «seven» · {מֵאָה} «a hundred»

{רִאשׁוֹן} «first» · {שֵׁנִי} «second» · {שְׁלִישִׁי} «third» · {עֲשִׂירִי} «tenth»

Cardinals are nouns: they count. Ordinals are adjectives: they characterise. That is why the ordinal needs a noun to attach to, and the noun comes **after** it: {הַשְּׁבִיעִי} «the seventh» is {הַ} + {שְׁבִיעִי}, which means something only next to {יוֹם}, {לֵילָה} or {מוֹעֵד}.

The ending is the shortcut. Every ordinal above ten ends in {ִי} in the masculine and {ִית} in the feminine, and the regularity is so tight that the suffix alone identifies the series. No cardinal has that ending.

## The cardinal when it is not counting

The name of the series suggests that {שִׁבְעָה} «seven» is only for seven things. It is not: the cardinal has three uses that are not counting, and they turn up more often than plain counting does.

First, it becomes an **adjective of uniqueness**. {אֶחָד} «one» applied to a noun means «unique, only»: {אֶחָד מִכֹּל} «unique among all». And {אֶחָד} on its own, with no noun, already means «only, alone». A literal rendering writes «one» and the sense is gone.

Second, it **replaces the name**. When the number stands for a whole group, the noun can drop out and the numeral says the group: {הָאֶחָד} «the unique one» names a people without repeating its name. The number does the work the definite article does in Greek.

Third, it marks **position in a series**, not quantity. {יוֹם אֶחָד} «day one», in Gen 1.5, means «the first day»: the cardinal is saying where in the queue the day sits, and the literal count «only one day» would be a wrong reading of the same text.

## {שְׁנַיִם} is not the dual

This is the point that misleads anyone arriving from Latin most often, and it is worth slowing down for, because the shape is misleading.

The Hebrew dual has a marker of its own, the suffix {־יִם}: {רַגְלַיִם} «two feet», {יָדַיִם} «two hands», {מַיִם} «water». The dual {ים} is the end of the word.

{שְׁנַיִם} «two» also ends in {ים}. That coincidence of form is what produces the error. But {שְׁנַיִם} is a numeral, and the noun that follows it is in the **plural that the counted thing has anyway**: {שְׁתֵּי נָשִׁים} «two women» has {נָשִׁים} in the plural because two women is plural. If you find {שְׁנַיִם} or {שְׁתֵּי} before a noun that is plural in any case, it is a numeral. If the noun is singular, what you are looking at is not a numeral.

Note that {אֶחָד} and {שְׁנַיִם} follow the noun in number: {יוֹם אֶחָד} «one day» and {שְׁתֵּי נָשִׁים} «two women». From {שְׁלֹשָׁה} upward the numeral has forms of its own, as {שְׁלֹשׁ} {נָשִׁים} «three women» shows.

## Where the two series meet

The most elegant meeting of the system is the ordinal as a noun. {רִאשׁוֹן} and {שֵׁנִי} stop being adjectives and start naming the position by themselves: {הַשֵּׁנִי} «the second», {הָרִאשׁוֹן} «the first». Hebrew does it without effort, because {הַ} already does the work of the definite article and the noun is the same one the cardinal uses.

And there is the reverse case, where the shape is an ordinal but the sense is cardinal. {בִּשְׁלֹשִׁי} means literally «in the third», and the context can force «in the three days». Neither is settled without the noun in view.

One detail of order that settles half of all translation errors: the numeral comes **before** the noun, and the noun keeps the number it has. {שְׁנֵי־הַלְוִיִּם} «the two Levites» is neither «the Levites two» nor «the two Levite»: the plural of {לְוִיִּם} is {לְוִיִּם}, and it does not change because of the numeral in front of it.

Ps 33 shows both series in one verse: the psalmist counts what God does and then names the order, and the text moves from one series to the other without warning. Follow the series rather than the apparent sense of each word and the verse goes without effort.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'one; unique'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'two (numeral, m.)'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'two (numeral, f.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'seven (cardinal m.)'),
    V('מֵאָה', 'מֵאָה', 'a hundred'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'first (ordinal m.)'),
    V('שֵׁנִי', 'שֵׁנִי', 'second (ordinal m.)'),
    V('שְׁלִישִׁי', 'שְׁלִישִׁי', 'third (ordinal m.)'),
    V('עֲשִׂירִי', 'עֲשִׂירִי', 'tenth (ordinal m.)'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'the seventh'),
    V('הָעֲשִׂירִי', 'עֲשִׂירִי', 'the tenth'),
    V('אֶחָד מִכֹּל', 'אֶחָד', 'unique among all'),
    V('הָאֶחָד', 'אֶחָד', 'the unique one (a group)'),
    V('יוֹם אֶחָד', 'אֶחָד', 'day one (= the first day)'),
    V('שְׁנֵי־הַלְוִיִּם', 'שְׁנַיִם', 'the two Levites'),
    V('שְׁתֵּי נָשִׁים', 'שְׁתֵּי', 'two women'),
    V('רַגְלַיִם', 'רֶגֶל', 'two feet (dual)'),
    V('יָדַיִם', 'יָד', 'two hands (dual)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {שְׁתֵּי נָשִׁים} «two women», what confirms that {שְׁתֵּי} is a numeral and not a noun?'),
    options: [
      T('The noun {נָשִׁים} is in the plural it would have anyway'),
      T('The word ends in {ים}'),
      T('There is no article'),
      T('The noun comes before the number'),
    ],
    answer: 0,
    hint: T(
      'Rule §3: the numeral does not change the number of the noun. Two women is already plural.',
    ),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the number to the series it belongs to.'),
      pairs: [
        { a: '{שִׁבְעָה}', b: T('cardinal') },
        { a: '{רִאשׁוֹן}', b: T('ordinal') },
        { a: '{מֵאָה}', b: T('cardinal') },
        { a: '{שְׁלִישִׁי}', b: T('ordinal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Write the ordinal «seventh» with the article.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('{שְׁבִיעִי} with the article {הַ} and a strong dagesh in the {ש}.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {שְׁנַיִם} «two» not a dual?'),
      options: [
        T('Because the dual {־יִם} shows up in {רַגְלַיִם} and {יָדַיִם}, not in {שְׁנַיִם}'),
        T('Because {שְׁנַיִם} has ten letters'),
        T('Because Hebrew has no dual'),
        T('Because {שְׁנַיִם} is a plural'),
      ],
      answer: 0,
      hint: T(
        'Rule §3: numeral and dual end alike, but the noun that follows tells you which one it is.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('In Gen 1.5, what does {יוֹם אֶחָד} mean?'),
      options: [
        T('«the first day» — the cardinal marks position in a series'),
        T('«only one day» — the cardinal means «unique»'),
        T('«the whole day»'),
        T('«the day of one man»'),
      ],
      answer: 0,
      hint: T('Rule §2: the cardinal {אֶחָד} can also mark position.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cardinal ({אֶחָד}, {שִׁבְעָה}, {מֵאָה}) counts; ordinal ({רִאשׁוֹן}, {שְׁלִישִׁי}, {עֲשִׂירִי}) characterises and needs a noun after it.',
      ),
    },
    {
      n: '2',
      text: T(
        'The cardinal is not only counting: it means «unique» ({אֶחָד מִכֹּל}) and it can mark position in a series: {יוֹם אֶחָד} «day one» = «the first day».',
      ),
    },
    {
      n: '3',
      text: T(
        '{שְׁנַיִם} and {שְׁתֵּי} are numerals: the noun that follows keeps its own number. The dual has its own {־יִם} ({רַגְלַיִם}, {יָדַיִם}, {מַיִם}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Every ordinal above ten ends in {ִי} (masc.) or {ִית} (fem.): that is the shortcut for recognising the series.',
      ),
    },
    {
      n: '5',
      text: T(
        'The numeral comes before the noun and does not change its number: {שְׁנֵי־הַלְוִיִּם} «the two Levites».',
      ),
    },
  ],
  notes: [
    {
      label: T('Trap:'),
      text: T(
        'The {ים} of {שְׁנַיִם} is the source of almost every confusion. A reader arriving from Latin knows both endings: {bini} «two» and {manus} «hand» share one ending, and English does the same with «two» and «hands». Anyone who notices that the ending is shared in both cases looks at the noun that follows and knows at once which of the two they have found.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The two irregular cardinals, {אֶחָד} and {שְׁנַיִם}, are the only ones that also work as personal pronouns. «One» and «two» in Hebrew are third-person pronouns, which Latin {singuli} is not, and that is why {אֶחָד} can name a whole group by itself. The Romance languages went the other way: they kept the numeral and lost the pronoun.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('one; also «unique» and «only»') },
    { text: '{שְׁנַיִם}', gloss: T('two (masc.) — a numeral, not a dual') },
    { text: '{שְׁתֵּי}', gloss: T('two (fem.) — a numeral') },
    { text: '{שִׁבְעָה}', gloss: T('seven (cardinal masc.)') },
    { text: '{מֵאָה}', gloss: T('a hundred (cardinal)') },
    { text: '{רִאשׁוֹן}', gloss: T('first (ordinal masc.)') },
    { text: '{שְׁלִישִׁי}', gloss: T('third (ordinal masc.)') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('the seventh — the day of rest') },
    { text: '{אֶחָד מִכֹּל}', gloss: T('unique among all') },
    { text: '{הָאֶחָד}', gloss: T('the unique one — the numeral names the group') },
    { text: '{יוֹם אֶחָד}', gloss: T('day one = the first day (Gen 1.5)') },
    { text: '{שְׁנֵי־הַלְוִיִּם}', gloss: T('the two Levites — numeral + plural') },
    { text: '{שְׁתֵּי נָשִׁים}', gloss: T('two women — the plural belongs to the noun') },
    { text: '{רַגְלַיִם}', gloss: T('two feet — here it really is a dual with {־יִם}') },
    { text: '{בַּיּוֹם הַשְּׁבִיעִי}', gloss: T('on the seventh day — ordinal with {יוֹם}') },
  ],
  tables: [
    {
      caption: T('Table 1 — The two series'),
      head: [
        T('Value'),
        T('Cardinal masc.'),
        T('Cardinal fem.'),
        T('Ordinal masc.'),
        T('Ordinal fem.'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שֵׁנִי}', '{שְׁנִית}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שְׁבִיעִי}', '{שְׁבִיעִית}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשִׂירִי}', '{עֲשִׂירִית}'],
      ],
    },
    {
      caption: T('Table 2 — Final {ים}: numeral or dual?'),
      head: [T('Word'), T('Category'), T('What follows'), T('How to decide')],
      rows: [
        ['{שְׁנַיִם}', T('numeral'), T('{נָשִׁים} — plural'), T('the noun is plural anyway: numeral')],
        ['{שְׁתֵּי}', T('numeral'), T('{נָשִׁים} — plural'), T('same')],
        ['{רַגְלַיִם}', T('dual'), T('{לְךָ} — suffix'), T('{ים} + a pronominal suffix: dual')],
        ['{יָדַיִם}', T('dual'), T('{לִי} — suffix'), T('same')],
        ['{מַיִם}', T('dual'), T('preposition'), T('{ים} with no suffix after')],
      ],
    },
  ],
};
