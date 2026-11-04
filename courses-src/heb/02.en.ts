import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('The alphabet and the signs'),
  subtitle: T('22 consonants, read from right to left'),
  section: T('Alphabet and the definite article'),
  body: C(`## Right to left

Hebrew is written from right to left, and the text advances to the left — exactly as in {אוֹר} (light): the {א} comes first, even though it sits at the end of the printed line. Two practical consequences: numbers and poetic abbreviations appear reversed when read western-style, and when you transcribe into English or Portuguese you must keep the Hebrew letter order.

## The 22 consonants

There are only 22 letters, all of them consonants: Hebrew has no alphabetic vowels. Memorize each letter's **name** first (it is how dictionaries and concordances refer to it) and its sound second.

Two letters change sound depending on the dot (dagesh) they carry: {ב} is {b} without the dot and {v} with dagesh (and {k}/{kh} for {כ} after {ר}); {פ} is {p} without the dot and {f} with dagesh. Two letters share a graph: {שׂ} and {שׁ} are one letter, sin and shin, told apart only by the dot on the right or the left.

## Final forms

Five letters change shape at the end of a word, as if closing a door: {ך} (of {כ}), {ם} (of {מ}), {ן} (of {נ}), {ף} (of {פ}), {ץ} (of {צ}). In {מֶלֶךְ} «king» the last letter is {ך}; in {שָׁמַיִם} «heavens» it ends in {ם}. Those final forms are the surest sign that you have reached the end of a word.

## Niqqud: the vowels

Vowels are small dots and strokes around the letter (niqqud, «pointing»). The three main signs are {ַ} patah (short a), {ֵ} ṣere (e), {ִ} hiriq (i); there are also {ָ} qamats (long a), {ֶ} ṣere (e), {וֹ} holam and {וּ} shureq (o and u). A sign with sheva {ְ} marks a zero vowel — almost always a fleeting «e».

The ancient texts you will find in manuscripts carry few or no niqqud: without them reading is still possible, because lexicon and grammar carry the load, but context becomes indispensable. The Masoretes of the ninth century added these signs (and others, like the maqaf {־} and the cantillation signs) to make public reading safe.

## Signs that are not vowels

Besides the vowels there is {ּ} dagesh (a doubled consonant), {ֿ} rafe (an undoubled consonant), {־} maqaf (binding words together), {׃} sof pasuq (verse end), and the meteg. The verse punctuation {׃} is what allows precise citation — and it is why Psalm 23 has exactly six of them in the chapter.

## Train the eye today

Three words from Genesis 1 make a good test: {יוֹם} «day», {אוֹר} «light», {אֶרֶץ} «earth». If you can read all three right to left and name their letters, the alphabet is already yours.`),
  vocab: [
    V('א', 'א', 'aleph (silent)'),
    V('ב', 'ב', 'bet (b/v)'),
    V('ש', 'ש', 'shin/sin (sh/s)'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'king'),
    V('יוֹם', 'יוֹם', 'day'),
    V('אוֹר', 'אוֹר', 'light'),
    V('אֶרֶץ', 'אֶרֶץ', 'earth, land'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'heavens'),
    V('בַּיִת', 'בַּיִת', 'house'),
    V('דָּבָר', 'דָּבָר', 'word, matter'),
    V('תּוֹרָה', 'תּוֹרָה', 'instruction, law'),
    V('רוּחַ', 'רוּחַ', 'spirit, wind'),
    V('חֶסֶד', 'חֶסֶד', 'steadfast love'),
    V('טוֹב', 'טוֹב', 'good'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In which direction is Hebrew read?'),
    options: [T('Left to right'), T('Right to left'), T('Top to bottom'), T('In a spiral')],
    answer: 1,
    hint: T("Think of {אוֹר}: the {א} comes first, even though it sits at the line's end."),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match each final letter to the letter it comes from.'),
      pairs: [
        { a: '{ך}', b: T('{כ}') },
        { a: '{ם}', b: T('{מ}') },
        { a: '{ן}', b: T('{נ}') },
        { a: '{ץ}', b: T('{צ}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many vowels does the Hebrew alphabet have as independent letters?'),
      options: [T('Five'), T('None: vowels are signs'), T('Two ({ו} and {י})'), T('Eleven')],
      answer: 1,
      hint: T('Vowels came later, as dots: that is the niqqud system.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the Hebrew word for «light» (Genesis 1:3).'),
      answer: 'אוֹר',
      hint: T('It starts with {א} (silent) and ends with {ר} + holam {וֹ}.'),
    },
    {
      kind: 'choose',
      prompt: T('In {שֹׁמֵר}, the {ש} sounds like:'),
      options: [T('sh (dot on the left)'), T('s (dot on the right)'), T('k'), T('t')],
      answer: 1,
      hint: T('The dot on the opposite side of the line marks the second pronunciation of {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Hebrew has 22 consonants and no alphabetic vowel; {י} serves as a consonant ({יְהוָה}) and as a vowel letter ({יוֹם}).',
      ),
    },
    {
      n: '2',
      text: T(
        '{ב} and {פ} change sound with the dagesh ({b}/{v}, {p}/{f}); {כ} and {ע} are gutturals and never take a strong dagesh after {ר}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Five letters have a final form — {ך} {ם} {ן} {ף} {ץ} — and the maqaf {־} glues words into a single stress unit.',
      ),
    },
    {
      n: '4',
      text: T(
        'Without niqqud reading remains possible, but context becomes mandatory: in medieval manuscripts the same text can be read two ways.',
      ),
    },
    {
      n: '5',
      text: T(
        '{א} has no sound of its own: it either glottalizes ({אֱלֹהִים}) or is simply silent ({מֶלֶךְ}). Spotting it is the first test of fluent reading.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ordering:'),
      text: T(
        'The order of the 22 letters is not alphabetical: it follows a system of acrostics of three «lines» that medieval teachers used as a mnemonic (from {א} to {ט}, from {י} to {ף}, from {צ} to {ת}). That is why chapter 1 already showed you all of them — the {ה} of the article is precisely the fifth letter of the first line.',
      ),
    },
    {
      label: T('Reading tip:'),
      text: T(
        'If direction is hard for you, read the whole line backwards with a mirror in hand: that is the trick medieval scribes used to check their work. The custom does not decide the meaning; context does.',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם}', gloss: T('day — {יוֹ} carries {וֹ} (holam)') },
    { text: '{אוֹר}', gloss: T('light — the initial {א} is silent') },
    { text: '{אֶרֶץ}', gloss: T('earth — ends in {ץ}, a final form') },
    { text: '{בַּיִת}', gloss: T('house — {ב} with strong dagesh = {b}') },
    { text: '{מֶלֶךְ}', gloss: T('king — {ך} is the final form of {כ}') },
    { text: '{שָׁמַיִם}', gloss: T('heavens — double: {שׁ} is {ש} with the dot on the left') },
    { text: '{שֹׁמֵר}', gloss: T('keeping (part.) — {שׁ} with the dot on the right, sound {s}') },
    { text: '{יְהוָה}', gloss: T('LORD — initial {י} with sheva: consonant {y}') },
    { text: '{תּוֹרָה}', gloss: T('instruction/law — initial strong {ת} + {ֹ}') },
    { text: '{־}', gloss: T('maqaf: binds words into one stress') },
  ],
  tables: [
    {
      caption: T('Table 1 — The 22 consonants in three blocks'),
      head: [T('Letter'), T('Name'), T('Sound'), T('Example')],
      rows: [
        ['{א}', 'ʾālef', T('silent (or glottal)'), '{אוֹר}'],
        ['{ב}', 'bēt', T('b / v (with dagesh)'), '{בַּיִת}'],
        ['{ג}', 'gimel', 'g', '{גֹּל}'],
        ['{ד}', 'dālet', 'd', '{דָּבָר}'],
        ['{ה}', 'hē', 'h', '{הַבַּיִת}'],
        ['{ו}', 'wāw', T('v, o or u'), '{וַיֹּאמֶר}'],
        ['{ז}', 'zāyin', 'z', '{זוֹל}'],
        ['{ח}', 'ḥēt', T('guttural (pharyngeal)'), '{חֶסֶד}'],
        ['{ט}', 'ṭēt', T('emphatic t'), '{טוֹב}'],
        ['{י}', 'yōd', T('y or i'), '{יוֹם}'],
        ['{כ}', 'kāf', T('k / kh (guttural after ר)'), '{כָּל}'],
        ['{ל}', 'lāmed', 'l', '{לֵב}'],
        ['{מ}', 'mēm', 'm', '{מֶלֶךְ}'],
        ['{נ}', 'nūn', 'n', '{נֹחַ}'],
        ['{ס}', 'sāmekh', 's', '{שָׁמַיִם}'],
        ['{ע}', 'ʿayin', T('guttural (pharyngeal)'), '{עַם}'],
        ['{פ}', 'pē', T('p / f (with dagesh)'), '{פֶּסַח}'],
        ['{צ}', 'ṣādē', 'ts', '{צִיּוֹן}'],
        ['{ק}', 'qōf', 'q', '{קוֹל}'],
        ['{ר}', 'rēš', 'r', '{רוּחַ}'],
        ['{ש}', 'šīn / sīn', T('sh (dot left) / s (dot right)'), '{שָׁמַיִם}'],
        ['{ת}', 'tāw', 't', '{תּוֹרָה}'],
      ],
    },
    {
      caption: T('Table 2 — Final forms: the same letter in two contexts'),
      head: [T('Medial form (inside)'), T('Final form (word end)'), T('Example')],
      rows: [
        ['{כ}', '{ך}', '{מֶלֶךְ}'],
        ['{מ}', '{ם}', '{שָׁם}'],
        ['{נ}', '{ן}', '{חָן}'],
        ['{פ}', '{ף}', '{קַלָּה}?'],
        ['{צ}', '{ץ}', '{קֶצֶת}'],
      ],
    },
    {
      caption: T('Table 3 — The niqqud signs'),
      head: [T('Sign'), T('Name'), T('Value / function')],
      rows: [
        ['{ַ}', 'pataj', T('short a')],
        ['{ָ}', 'qamats', T('long a (or closed o)')],
        ['{ֵ}', 'ṣere', T('e')],
        ['{ֶ}', 'ṣegol', T('short/medium e')],
        ['{ִ}', 'hireq', T('i')],
        ['{ֹ}', 'holam', T('o')],
        ['{וּ}', 'šureq', T('u')],
        ['{ְ}', 'šewa', T('zero vowel (fugitive)')],
        ['{ֲ} {ֱ} {ֳ}', 'ḥatef pataj/ṣegol/qamats', T('reduced vowel under a guttural')],
        ['{ּ}', 'dageš', T('doubled consonant')],
        ['{ֿ}', 'rafe', T('simple consonant')],
        ['{־}', 'maqaf', T('binds words (one stress)')],
        ['{׃}', 'sof pasuq', T('verse end')],
      ],
    },
  ],
};
