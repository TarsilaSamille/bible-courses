import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('The construct state'),
  subtitle: T('בֶּן־אָדָם — a preposition for «of» that does not exist'),
  section: T('First texts and particles'),
  body: C(`## The problem: there is no «of»

Hebrew has no word for the Portuguese/Spanish preposition «of». What it has is a trick of two nouns: the first stands in the **construct state** (מִצְבָּה, mishkat) and the second in the **absolute state** (מֶמְשָׁה, memshut). The first is glued to the second by a maqaf and is rendered by «of» — or by nothing at all, as in an epithet.

{בֵּן} «son» + {אָדָם} «Adam» → {בֶּן־אָדָם} «son of Adam / son of man»
{דָּבָר} «word» + {יְהוָה} «LORD» → {דְּבַר־יְהוָה} «the word of the LORD»
{מֶלֶךְ} «king» + {יִשְׂרָאֵל} «Israel» → {מֶלֶךְ־יִשְׂרָאֵל} «the king of Israel»

Notice that the **second** noun stays intact (with its article, if it had one), and it is the one that gives definiteness to the whole phrase: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} = {מֶלֶךְ־יִשְׂרָאֵל} «the king of Israel», not «a king of Israel».

## What happens to the article

In the construct state the noun **loses the article**. That is the most reliable signal: {הַבַּיִת} «the house» → {בֵּית־לֶחֶם} «house of bread». If you spot a {הַ} in front of a noun that is itself followed by another noun, something is wrong.

The reverse also holds: the article can be placed over the pair as a whole, {הַבֵּית־לֶחֶם} «the house of bread» — the house is still determinate, but the {הַ} now sits on the first element.

## What happens to the vowel

The construct also shortens the final vowel in many nouns. Compare:

{מֶלֶךְ} «king» → {מֶלֶךְ} «(of) king» (the vowel does not change)
{סוּס} «horse» → {סֻס} «(of) horse» ({וּ} → {ֻ})
{הַפְּלָאִים} «wonders» → {פְּלָאִי} «wonders (of)»
{שֵׁם} «name» + {יְהוָה} → {שְׁמוֹ־יְהוָה} «the name of the LORD» (the sheva of {שֵׁם} becomes {ו} holam)

A pocket rule: the plural often reveals the old shape of the singular — {מְלָכִים} shows that the construct of {מֶלֶךְ} rests on a base {מְלָךְ} with {ָ}.

## The alarm signal: dagesh

A {ל} or {ב} inside a noun is almost always a preposition, not part of the root. When {בְּ} precedes a word, that word takes a strong dagesh: {בֵּית־לֶחֶם} has {ל} with sheva ({לֶ}), and the initial {ל} is the preposition. The same holds in {בְּרֵאשִׁית} (ch. 6) and {בְּיוֹם}.

## Chains of three or more

The construct chains link after link, and the rendering piles up «of»:

{הַר־צִיּוֹן} «Mount Zion» · {עִיר־דָּוִד} «the city of David» · {בֵּית־יְהוָה} «the house of the LORD» (the Temple) · {חֵילוֹת יְהוָה} «the armies of the LORD» (1 Sam 17:45) · {אֶבֶן הַעֵזֶר} «the stone of help» (Exod 17:6) · {קֹדֶשׁ הַקָּדָשִׁים} «the holy of holies».

When the second element is a geographic name, the preposition disappears in translation: {בֵּית־לֶחֶם} is «Bethlehem», not «the house of bread», and {הַר־צִיּוֹן} is «Zion», not «the mountain of Zion».

## For the next chapter

Now you can say «of». In chapter 8 you will meet the other half of possessive grammar: the preposition {שֶׁל} is rare in the Bible, but the **pronominal suffix** does that job in almost every clause — {סוּסִי} «my horse».`),
  vocab: [
    V('בֶּן־אָדָם', 'בֵּן', 'son of man'),
    V('בֵּית־לֶחֶם', 'בַּיִת', 'Bethlehem (house of bread)'),
    V('דְּבַר־יְהוָה', 'דָּבָר', 'word of the LORD'),
    V('מֶלֶךְ־יִשְׂרָאֵל', 'מֶלֶךְ', 'king of Israel'),
    V('הַר־צִיּוֹן', 'הַר', 'Mount Zion'),
    V('עִיר־דָּוִד', 'עִיר', 'city of David'),
    V('בֵּית־יְהוָה', 'בַּיִת', 'Temple (house of the LORD)'),
    V('שְׁמוֹ־יְהוָה', 'שֵׁם', 'name of the LORD'),
    V('אֶרֶץ־כְּנַעַן', 'אֶרֶץ', 'land of Canaan'),
    V('קֹדֶשׁ הַקָּדָשִׁים', 'קֹדֶשׁ', 'holy of holies'),
    V('סוּס', 'סוּס', 'horse'),
    V('שֵׁם', 'שֵׁם', 'name'),
    V('פֶּלֶא', 'פֶּלֶא', 'wonder'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does «בֵּית־לֶחֶם» literally mean?'),
    options: [T('House of bread'), T('Son of man'), T('City of David'), T('Mount Zion')],
    answer: 0,
    hint: T('{בַּיִת} is «house» and {לֶחֶם} is «bread»: the maqaf is the construct signal.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which of these forms is in the construct state?'),
      options: [T('הַמֶּלֶךְ'), T('מֶלֶךְ־יִשְׂרָאֵל'), T('הַבַּיִת'), T('הַיּוֹם')],
      answer: 1,
      hint: T('In the construct the article {הַ} drops and the word takes a strong dagesh.'),
    },
    {
      kind: 'match',
      prompt: T('Match the construct noun to its absolute base.'),
      pairs: [
        { a: '{בֵּית־}', b: T('{בַּיִת}') },
        { a: '{מֶלֶךְ־}', b: T('{מֶלֶךְ}') },
        { a: '{שְׁמוֹ־}', b: T('{שֵׁם}') },
        { a: '{דְּבַר־}', b: T('{דָּבָר}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Write «the name of the LORD» as construct + maqaf.'),
      answer: 'שְׁמוֹ־יְהוָה',
      hint: T('{שֵׁם} in the construct becomes {שְׁמוֹ} (the sheva becomes {ו} holam).'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {בֵּית־לֶחֶם} rendered «Bethlehem» and not «house of bread»?'),
      options: [
        T('Because the second noun is a place name'),
        T('Because {בַּיִת} is a verb'),
        T('Because the article {הַ} is missing'),
        T('Because the preposition {בְּ} appears'),
      ],
      answer: 0,
      hint: T('Rule §5: with a place name the pair becomes a proper name.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The construct state renders the preposition «of»: two nouns bound by a maqaf, the first without the article.',
      ),
    },
    {
      n: '2',
      text: T(
        'The second noun stays intact and gives the definiteness of the whole phrase: {מֶלֶךְ־יִשְׂרָאֵל} is «the king of Israel».',
      ),
    },
    {
      n: '3',
      text: T(
        'The construct noun loses the article: {הַבַּיִת} → {בֵּית־לֶחֶם}. The article may be placed over the pair: {הַבֵּית־לֶחֶם}.',
      ),
    },
    {
      n: '4',
      text: T(
        "Many constructs shorten the vowel: {סוּס} → {סֻס}, {הַשֵּׁם} → {שְׁמוֹ}. The noun's plural reveals the old base.",
      ),
    },
    {
      n: '5',
      text: T(
        'With a place name the construct becomes a proper name and the preposition disappears: {בֵּית־לֶחֶם} = «Bethlehem».',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'Not every noun followed by another noun is construct. In {אֶרֶץ מִצְרַיִם} «the land of Egypt» the preposition {מִן} does the work; in {שֵׁם הָאֱלֹהִים} the second noun is appositional. The test is still the dagesh: a word with a strong dagesh after {בְּ} or {לְ} is in the construct.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'A true preposition for «of» does exist — {שֶׁל} — and you will meet it in Modern Hebrew and in a few verses. In {כָּל־שֶׁל} the {ש} even takes an unusual dagesh, because the noun imposes itself on the preposition. The Bible preferred the construct: it is shorter and stricter, ideal for a text made to be memorized.',
      ),
    },
  ],
  examples: [
    { text: '{בֶּן־אָדָם}', gloss: T('son of Adam / son of man') },
    { text: '{דְּבַר־יְהוָה}', gloss: T('the word of the LORD') },
    { text: '{מֶלֶךְ־יִשְׂרָאֵל}', gloss: T('the king of Israel — the article went to the second noun') },
    { text: '{בֵּית־לֶחֶם}', gloss: T('house of bread → Bethlehem') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('the house of bread — article over the pair') },
    { text: '{שְׁמוֹ־יְהוָה}', gloss: T('the name of the LORD — {שֵׁם} → {שְׁמוֹ}') },
    { text: '{הַר־צִיּוֹן}', gloss: T('Mount Zion (place name: no «of»)') },
    { text: '{חֵילוֹת יְהוָה}', gloss: T('the armies of the LORD (1 Sam 17:45)') },
    { text: '{קֹדֶשׁ הַקָּדָשִׁים}', gloss: T('the holy of holies — superlative as a chain') },
    { text: '{סֻס}', gloss: T('horse (construct of {סוּס})') },
    { text: '{פְּלָאִי}', gloss: T('(wonders) of — construct of {פֶּלֶא}') },
  ],
  tables: [
    {
      caption: T('Table 1 — The two states side by side'),
      head: [T('Name'), T('Absolute (standalone)'), T('Construct (linked)')],
      rows: [
        [T('king'), '{הַמֶּלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}'],
        [T('house'), '{הַבַּיִת}', '{בֵּית־לֶחֶם}'],
        [T('horse'), '{הַסּוּס}', '{סֻס} (em {סֻס־הַבַּעַל})'],
        [T('name'), '{הַשֵּׁם}', '{שְׁמוֹ־יְהוָה}'],
        [T('wonder'), '{הַפְּלָאִים}', '{פְּלָאִי}'],
      ],
    },
    {
      caption: T('Table 2 — What the dagesh reveals'),
      head: [T('Word'), T('With {הַ}'), T('Reading')],
      rows: [
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('the king')],
        ['{מֶלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}', T('the king of Israel')],
        ['{שֵׁם}', '{הַשֵּׁם}', T('the name')],
        ['{שֵׁם}', '{שְׁמוֹ־יְהוָה}', T('the name of the LORD')],
        ['{בַּיִת}', '{הַבַּיִת}', T('the house')],
        ['{בַּיִת}', '{בֵּית־לֶחֶם}', T('the house of bread')],
      ],
    },
    {
      caption: T('Table 3 — Chains of construct'),
      head: [T('Chain'), T('Literal translation'), T('Where it appears')],
      rows: [
        ['{בֶּן־אָדָם}', T('son of Adam'), T('Genesis, Ezekiel')],
        ['{בֵּית־לֶחֶם}', T('house of bread'), T('Bethlehem (Luke 2:4)')],
        ['{הַר־צִיּוֹן}', T('mountain of Zion'), T('Psalms and prophets')],
        ['{חֵילוֹת יְהוָה}', T('armies of the LORD'), T('1 Sam 17:45')],
        ['{קֹדֶשׁ הַקָּדָשִׁים}', T('holy of holies'), T('Lev 16, 1 Kgs 8')],
        ['{אֶבֶן הַעֵזֶר}', T('stone of help'), T('Exodus 17:6')],
        ['{בֵּית־בָּתִּים}', T('house of houses'), T('Jeremiah 7:11')],
      ],
    },
  ],
};
