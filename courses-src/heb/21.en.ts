import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Calendar and time'),
  subtitle: T("שַׁבָּת, חֹדֶשׁ, מוֹעֵד — Israel's time"),
  section: T('Prepositions, comparison, questions and time'),
  body: C(`## The week ends on the Sabbath

The Hebrews numbered their days differently: {יוֹם רִאשׁוֹן} «first day» (Sunday) · {יוֹם שֵׁנִי} «second» · {יוֹם שְׁלִישִׁי} «third» · {יוֹם רְבִיעִי} «fourth» · {יוֹם חֲמִישִׁי} «fifth» · {יוֹם שִׁשִּׁי} «sixth» (Friday, the day of preparation) · {שַׁבָּת} «Sabbath», the seventh day.

The word {שַׁבָּת} comes from {שָׁבַת} «to cease» — the day when work stops. That is why the biblical week **ends** on the day of rest and **begins** with the preparation day, unlike ours.

## The day is divided into parts

{בֹּקֶר} «morning» · {צָהֳרַיִם} «noon» · {עֶרֶב} «evening» · {לַיְלָה} «night».

The refrain of Genesis 1 is the key: {וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר} «and there was evening and there was morning» (Gen 1:5). Notice the order: the Hebrew day **begins at sunset**. In 1:5, God called the first stretch {יוֹם} «day» and the second {לַיְלָה} «night» — the light came before the night in the verse, because for the Hebrew calendar the day is evening plus morning. That is why the Jewish festivals begin on the eve.

## The twelve months

The names are Babylonian — Israel adopted the calendar in exile:

1 {נִיסָן} (Passover) · 2 {אִיָּר} · 3 {סִיוָן} · 4 {תַּמּוּז} · 5 {אָב} · 6 {אֱלוּל}

7 {תִּשְׁרִי} (new year) · 8 {מַרְחֶשְׁוָן} · 9 {כִּסְלֵו} · 10 {טֵבֵת} · 11 {שְׁבָט} · 12 {אֲדָר} (Purim)

The Bible names only the first six; the other six were reconstructed from the calendar that took shape after the exile. {אֲדָר} appears in Esther 13:7; {כִּסְלֵו} is the ninth month, and {שְׁבָט} is the month in which the families were registered.

## Year, new moon and festivals

{חֹדֶשׁ} means both «month» and «new moon»: {בְּרֹאשׁ חֹדֶשׁ} «at the new moon» (Ps 81:4). {שָׁנָה} is «year», and {רֹאשׁ הַשָּׁנָה} «the beginning of the year» can be either the civil new year or the day of the trumpet blast (Lev 25:13).

{מוֹעֵד} is the word for «appointed time»: {מוֹעֲדֵי יְהוָה} «the appointed feasts of the LORD» (Lev 23:11) heads the section of Leviticus listing Passover, {חֲגִיג} and the autumn {חֲלוֹנִים}.

## The seasons

There is no single word for «season»: Hebrew prefers nouns. {גַּשֶּם} «rain» · {חָרֶב} «heat» (summer) · {חֹרֶף} «harvest» (autumn) · {צֵר} «cold» (winter). And time measured by itself: {עֵת} «moment» · {פָּעַל} «occasion» · {אֶפֶל} «darkness».

The commonest word for «today» is {הַיּוֹם} «the day» (literally «the day»); and {מֵאָחֹר} is «afterwards», just as {לִפְנֵי} is «before» (itself a noun: «front»).

## How time enters the clause

Hebrew builds time adverbs from nouns: {עַתָּה} «now» · {הָאִתָּה} «today» · {מֵחָר} «tomorrow» · {תְּמוֹל} «yesterday» · {עֶרֶב} «later on».

And for past time: {לִפְנֵי} can be both «before» (in time) and «before» (in space) — a polysemy translators settle by looking at the verb that follows.

## A map of the time words

{יוֹם} day · {לַיְלָה} night · {בֹּקֶר} morning · {עֶרֶב} evening · {צָהֳרַיִם} noon · {שָׁנָה} year · {חֹדֶשׁ} month and new moon · {עֵת} time, occasion · {מוֹעֵד} appointed time, feast.

If you learn these ten, you can read the chronology of any page in the Bible: dates, durations, anniversaries and festivals.`),
  vocab: [
    V('שַׁבָּת', 'שַׁבָּת', 'Sabbath, rest'),
    V('יוֹם רִאשׁוֹן', 'רִאשׁוֹן', 'the first day (Sunday)'),
    V('יוֹם שִׁשִּׁי', 'שִׁשִּׁי', 'the sixth day (Friday)'),
    V('בֹּקֶר', 'בֹּקֶר', 'morning'),
    V('עֶרֶב', 'עֶרֶב', 'evening'),
    V('לַיְלָה', 'לַיְלָה', 'night'),
    V('צָהֳרַיִם', 'צָהֳרַיִם', 'noon'),
    V('נִיסָן', 'נִיסָן', 'Nisan (month of Passover)'),
    V('תִּשְׁרִי', 'תִּשְׁרִי', 'Tishri (new year)'),
    V('אֲדָר', 'אֲדָר', 'Adar (Purim)'),
    V('חֹדֶשׁ', 'חֹדֶשׁ', 'month, new moon'),
    V('מוֹעֵד', 'מוֹעֵד', 'feast, appointed time'),
    V('שָׁנָה', 'שָׁנָה', 'year'),
    V('עֵת', 'עֵת', 'time, occasion'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does the Hebrew week end at the «Sabbath»?'),
    options: [
      T('Because Sabbath comes from «to cease» (Gen 2:2)'),
      T('Because it is the full-moon day'),
      T('By chance'),
      T('Because it has eight letters'),
    ],
    answer: 0,
    hint: T('{שַׁבָּת} comes from the root {שׁבת} «to rest, to cease».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the time word to its gloss.'),
      pairs: [
        { a: '{בֹּקֶר}', b: T('morning') },
        { a: '{עֶרֶב}', b: T('evening') },
        { a: '{צָהֳרַיִם}', b: T('noon') },
        { a: '{לַיְלָה}', b: T('night') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Genesis 1:5, what reveals that the Hebrew day begins at sunset?'),
      options: [
        T('The order «and there was evening and there was morning»'),
        T('The word {יוֹם} appears before {לַיְלָה}'),
        T('The absence of the article {הַ}'),
        T('The singular use of {עֶרֶב}'),
      ],
      answer: 0,
      hint: T('Rule §1: {עֶרֶב} + {בֹּקֶר} = one whole day.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the seventh month of the Hebrew calendar, the month of the new year.'),
      answer: 'תִּשְׁרִי',
      hint: T('It starts with {ת}, has {ִ} at the start and ends in {רִי}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word means «feast» or «appointed time»?'),
      options: [T('מוֹעֵד'), T('עֵת'), T('חֹדֶשׁ'), T('שָׁנָה')],
      answer: 0,
      hint: T('{מוֹעֲדֵי יְהוָה} «the appointed feasts of the LORD» is the phrase of Leviticus 23.'),
    },
  ],
  rules: [
    { n: '1', text: T('The Hebrew day begins at sunset: {עֶרֶב} + {בֹּקֶר} make one day (Gen 1:5).') },
    {
      n: '2',
      text: T(
        'The Sabbath is the seventh day and the day of rest: {שַׁבָּת} comes from {שָׁבַת} «to cease».',
      ),
    },
    { n: '3', text: T('{חֹדֶשׁ} means «month» and «new moon»: {בְּרֹאשׁ חֹדֶשׁ} «at the new moon».') },
    {
      n: '4',
      text: T(
        '{מוֹעֵד} is «appointed time»: {מוֹעֲדֵי יְהוָה} «the appointed feasts of the LORD» (Lev 23:11).',
      ),
    },
    {
      n: '5',
      text: T(
        '{לִפְנֵי} means «before» (time) and «in front of» (space): the following verb decides the reading.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "Counting the day from sunset changes how dates are read. When Leviticus 23:17 says «on the fifteenth day of the seventh month», the day began on the eve: the festivals of 15-22 Av start at sunset on the 14th. All biblical chronology follows that clock, and it is why Jesus' Passover — «the fourteenth day of Nisan» — is counted in nights and days rather than in clock hours.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The month names are a history lesson from the exile. Israel took Babylonian names because it was in Babylon that it learned to count years — the Babylonian calendar was far more precise, with {בֶּת שַׁנִים} «years of Nabu» for unbroken counting. Modern Hebrew keeps both: {יולי} alongside {תמוז}, as inheritance and as conquest.',
      ),
    },
  ],
  examples: [
    { text: '{שַׁבָּת}', gloss: T('Sabbath — seventh day, from {שָׁבַת} «to cease»') },
    { text: '{יוֹם רִאשׁוֹן}', gloss: T('first day (Sunday)') },
    { text: '{יוֹם שִׁשִּׁי}', gloss: T('sixth day (Friday, preparation of the Sabbath)') },
    {
      text: '{וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}',
      gloss: T('and there was evening and there was morning (Gen 1:5)'),
    },
    { text: '{בֹּקֶר}', gloss: T('morning — {בֹּקֶר יוֹם} «morning of the day»') },
    { text: '{עֶרֶב}', gloss: T('evening — also «the next day»') },
    { text: '{צָהֳרַיִם}', gloss: T('noon (dual)') },
    { text: '{נִיסָן}', gloss: T('first month, the month of Passover') },
    { text: '{אֲדָר}', gloss: T('twelfth month, month of Purim (Esther 13:7)') },
    { text: '{חֹדֶשׁ}', gloss: T('month and new moon — {בְּרֹאשׁ חֹדֶשׁ} «at the new moon» (Ps 81:4)') },
    { text: '{שָׁנָה}', gloss: T('year — {שְׁנַת} «year of» in construct') },
    { text: '{מוֹעֵד}', gloss: T('appointed time, feast — {מוֹעֲדֵי יְהוָה} (Lev 23:11)') },
    { text: '{עֵת}', gloss: T('time, occasion — root of {עַתָּה} «now»') },
    { text: '{מֵחָר}', gloss: T('tomorrow — {הָאִתָּה} «today» comes from {יוֹם} «day»') },
  ],
  tables: [
    {
      caption: T('Table 1 — The days of the week'),
      head: [T('Order'), T('Hebrew name'), T('Equivalent')],
      rows: [
        ['1', '{יוֹם רִאשׁוֹן}', T('Sunday')],
        ['2', '{יוֹם שֵׁנִי}', T('Monday')],
        ['3', '{יוֹם שְׁלִישִׁי}', T('Tuesday')],
        ['4', '{יוֹם רְבִיעִי}', T('Wednesday')],
        ['5', '{יוֹם חֲמִישִׁי}', T('Thursday')],
        ['6', '{יוֹם שִׁשִּׁי}', T('Friday (preparation)')],
        ['7', '{שַׁבָּת}', T('Sabbath (rest)')],
      ],
    },
    {
      caption: T('Table 2 — The twelve months'),
      head: [T('No.'), T('Month'), T('Name in Scripture')],
      rows: [
        ['1', '{נִיסָן}', T('Passover, first month (Exod 12:2)')],
        ['2', '{אִיָּר}', T('mentioned in Ezra 7:9')],
        ['3', '{סִיוָן}', T('third month (Ezra 9:7)')],
        ['4', '{תַּמּוּז}', T('fourth month (2 Sam 24:15)')],
        ['5', '{אָב}', T('fifth month (Esther 7:2)')],
        ['6', '{אֱלוּל}', T('sixth month (Hag 1:1)')],
        ['7', '{תִּשְׁרִי}', T('new year, seventh month')],
        ['8', '{מַרְחֶשְׁוָן}', T('eighth month')],
        ['9', '{כִּסְלֵו}', T('ninth month (Jer 36:22)')],
        ['10', '{טֵבֵת}', T('tenth month')],
        ['11', '{שְׁבָט}', T('family register (1 Chr 26:1)')],
        ['12', '{אֲדָר}', T('Purim (Esther 13:7)')],
      ],
    },
    {
      caption: T('Table 3 — Parts of the day and of the year'),
      head: [T('Concept'), T('Word'), T('Gloss')],
      rows: [
        [T('Morning'), '{בֹּקֶר}', T('morning; also «a new day»')],
        [T('Noon'), '{צָהֳרַיִם}', T('noon (dual)')],
        [T('Evening'), '{עֶרֶב}', T('evening; also «the next day»')],
        [T('Night'), '{לַיְלָה}', T('night')],
        [T('Month / new moon'), '{חֹדֶשׁ}', T('month and new moon')],
        [T('Year'), '{שָׁנָה}', T('year')],
        [T('Feast'), '{מוֹעֵד}', T('appointed time, feast')],
      ],
    },
  ],
};
