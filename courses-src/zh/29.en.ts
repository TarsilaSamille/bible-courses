import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Numbers'),
  title: T('{百}, {千}, {萬} and the fraction: counting by places'),
  subtitle: T(
    'A Mandarin number is read by position, and the fourth place restarts the count from zero',
  ),
  body: C(`
## Each place is worth ten times the one before

The Mandarin numeral is not a sum of addends: it is a list of positions. One place of units, one of tens, one of hundreds, one of thousands, and the name of the place is at once the number and the position. {yì bǎi èr shí sān} is 123 because what stands before {bǎi} is worth a hundred, what stands before {shí} is worth ten, and what stands before nothing at all is worth one.

**The places of Mandarin are {gè}, {shí}, {bǎi}, {qiān}, {wàn} and {yì}, and each is worth ten times the one before.**

The practical consequence is that the number is not read from the right — it is read left to right, from the largest to the smallest, and that order is the opposite of Portuguese in "one hundred and twenty-three". Someone translating from Portuguese looks for the "and" that is not there: in Mandarin it is {yì bǎi èr shí sān}, and the addition is the silence between the places.

The limit of written Mandarin is {yì}, a hundred million, and it is also the end of what a person reads without effort by heart. Past {yì} the count carries on as {wàn} {yì}, but hardly anyone does it in their head. And the number is not read digit by digit: it is read in groups of four, and the group that changes gets the name of the group in front of it.

## The zero that exists only when a place is empty

The {líng} is the zero character, and it does not go where one expects. It does not go into {shí wǔ}, because {shí} already fills the place of the tens. It goes where a place in the middle is left without a number: {yì bǎi líng wǔ} is 105, {yì qiān líng wǔ} is 1005, {wǔ qiān líng bǎi líng shí} is 5010.

**The {líng} goes in the middle of the number, and never at the end.**

The {shí} is the most confusing case, and it matters because it is the common one. {shí} is at once the number ten and the name of the place of the tens. That produces an asymmetry Portuguese does not have: fifteen is {shí wǔ}, with no {yī} in front; a hundred and fifteen is {yì bǎi yī shí wǔ}, with the {yī}. And twenty is {èr shí}, not {èr èr shí}, and a hundred and twenty is {yì bǎi èr shí}.

Why does the {yī} come back in the hundreds and not in the tens? Because {shí} as a place name cannot stand alone: it needs a number in front of it. In the hundreds and above, {shí} is already inside the larger number and needs no coefficient of its own. The rule fits in one test: if {shí} is the first word of the number it takes no {yī}; if it comes after another place name it takes one.

## {-分}: the fraction, and what the Bible uses instead

The Mandarin fraction is a single word made of three pieces: the total, {fēn} and the preposition {zhī}. The rule is about order, not about sense.

**The total comes before and the part comes after: {sān} {fēn} {zhī} {èr} is two thirds.** The order is the one of the English phrase "three parts, two of them", and the opposite of the Portuguese. The noun for the part is {fèn}, and {bàn} is the half. What Mandarin often does instead is repeat the total rather than use a fraction: "half" is {yī bàn}, not {èr fēn zhī yī}.

And here is the practical finding for reading: the Bible in Mandarin hardly needs a fraction, because its numbers are measures and not portions. 1 Kings 4:22 writes {sān shí shēng} {miàn}, {liù shí shēng} {yóu}: "thirty measures of flour, sixty of oil". {shēng} is a dry measure of volume, and {dǒu} is ten {shēng}. A number followed by a measure is exact, and written Mandarin has no "about" or "more or less" that Portuguese borrows from other languages. Where the Bible says "thirty", it means thirty.

## A number with no comma and no separator

The last problem is one of reading, not of grammar. {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} is 1,234,567, written whole, with no comma, no point and no space. The reader has to insert the groups, and the insertion is made four at a time from the right: {yì bǎi èr shí sān} {wàn} {sì qiān wǔ bǎi liù shí qī}.

The hook is in two verses everybody has already misread. Revelation 11:3 writes {yī qiān èr bǎi liù shí}, 1260, and Revelation 13:18 writes {liù bǎi liù shí liù}, 666. In both cases the number has at most four places and not one comma: in {liù bǎi liù shí liù} there is no {líng} between the {bǎi} and the {shí}, because the place of the tens is occupied. Anyone looking for a {líng} where there is no empty place gets the wrong number.

And the logic runs the other way: the numbers the Union Version writes out in full are always places, never addends. There is no "six hundred and sixty-six" in Mandarin: there is {liù bǎi liù shí liù}, and the right reading comes out of the position, not out of a conjunction.`),
  vocab: [
    V('bǎi', '百', 'hundred (bǎi)'),
    V('qiān', '千', 'thousand (qiān)'),
    V('wàn', '万', 'ten thousand; the place that opens a new group (wàn)'),
    V('yì (número)', '亿', 'a hundred million; ten thousand times ten thousand (yì)'),
    V('líng', '零', 'zero; the empty place in the middle of the number (líng)'),
    V('shí (casa)', '十', 'ten; at the same time the name of the place of the tens (shí)'),
    V('fēn (fração)', '分', 'part; after the numeral, a fraction (fēn)'),
    V('fēnzhī', '分之', 'over: links the total to the part (fēnzhī)'),
    V('sān fēn zhī èr', '三分之二', 'two thirds (sān fēn zhī èr)'),
    V('fèn', '份', 'the part, the portion (fèn)'),
    V('shēng', '升', 'dry measure of volume; an exact unit (shēng)'),
    V('dǒu', '斗', 'dry measure; ten {shēng} (dǒu)'),
    V('shí wǔ', '十五', 'fifteen (shí wǔ)'),
    V('liù bǎi liù shí liù', '六百六十六', 'six hundred and sixty-six (liù bǎi liù shí liù)'),
    V(
      'yī qiān èr bǎi liù shí',
      '一千二百六十',
      'one thousand two hundred and sixty (yī qiān èr bǎi liù shí)',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The places are {gè}, {shí}, {bǎi}, {qiān}, {wàn} and {yì}, and each is worth ten times the one before.',
      ),
    },
    {
      n: '2',
      text: T(
        'The {líng} goes in the middle of the number, and never at the end: {yì bǎi líng wǔ} is 105.',
      ),
    },
    {
      n: '3',
      text: T(
        '{shí} is at once ten and the name of the place: {shí wǔ} is fifteen, {yì bǎi yī shí wǔ} is a hundred and fifteen.',
      ),
    },
    {
      n: '4',
      text: T(
        'In {fēnzhī}, the total comes before and the part after: {sān fēn zhī èr} is two thirds.',
      ),
    },
    {
      n: '5',
      text: T(
        'Past {wàn}, Mandarin counts in groups of four: {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} is 1,234,567.',
      ),
    },
  ],
  notes: [
    {
      label: T('The biblical number is exact'),
      text: T(
        'A number followed by a measure in Mandarin admits neither "about" nor "more or less". 1 Kings 4:22 writes {sān shí shēng} and {liù shí shēng}, and the translator had nowhere to put an approximation. Where Portuguese renders "some thirty", Mandarin would need an extra word, and the Union Version prefers to write thirty.',
      ),
    },
    {
      label: T('Why there is no "and" in the number'),
      text: T(
        'Each place name already carries its value. {yì bǎi èr shí sān} needs no {yī} before the {shí} because {shí} is a place and not an addend; and it needs no conjunction because the sum is implicit in the position. Translating place by place rather than word by word is what resolves the whole number.',
      ),
    },
  ],
  examples: [
    {
      text: '六百六十六',
      gloss: T('liù bǎi liù shí liù — 666; no {líng}, because no place is empty (Rev 13:18)'),
    },
    {
      text: '一千二百六十',
      gloss: T('yī qiān èr bǎi liù shí — 1260; four places, four names (Rev 11:3)'),
    },
    {
      text: '三十升麵，六十升油',
      gloss: T(
        'sān shí shēng miàn, liù shí shēng yóu — thirty measures of flour, sixty of oil (1 Kings 4:22): an exact measure',
      ),
    },
    {
      text: '一分為二',
      gloss: T('yī fēn wéi èr — to divide one into two: the operation, not the fraction'),
    },
    { text: '三分之二', gloss: T('sān fēn zhī èr — two thirds: the total comes first') },
    { text: '一萬', gloss: T('yī wàn — ten thousand: a single place, and the {yī} is obligatory') },
    { text: '零', gloss: T('líng — zero; inside a number it always sits between two places') },
  ],
  tables: [
    {
      caption: T('The six places'),
      head: [T('Place'), T('Value'), T('Written'), T('Reading')],
      rows: [
        [T('{gè}'), T('1'), T('{sān} {gè}'), T('three')],
        [T('{shí}'), T('10'), T('{shí} {wǔ}'), T('fifteen')],
        [T('{bǎi}'), T('100'), T('{liǎng} {bǎi}'), T('two hundred')],
        [T('{qiān}'), T('1,000'), T('{sān} {qiān}'), T('three thousand')],
        [T('{wàn}'), T('10,000'), T('{wǔ} {wàn}'), T('fifty thousand')],
        [T('{yì}'), T('100,000,000'), T('{yī} {yì}'), T('a hundred million')],
      ],
    },
    {
      caption: T('Where the {líng} goes'),
      head: [T('Number'), T('Written'), T('Why')],
      rows: [
        [T('105'), T('{yì} {bǎi} {líng} {wǔ}'), T('the place of the tens is empty')],
        [T('1005'), T('{yì} {qiān} {líng} {wǔ}'), T('the place of the hundreds is empty')],
        [T('15'), T('{shí} {wǔ}'), T('{shí} is already the place, and takes no {yī}')],
        [
          T('115'),
          T('{yì} {bǎi} {yī} {shí} {wǔ}'),
          T('the place of the tens is {shí}, and the {yī} comes back'),
        ],
        [T('10,000'), T('{yī} {wàn}'), T('the next place is already {wàn}')],
      ],
    },
    {
      caption: T('Fraction, half and measure'),
      head: [T('Form'), T('Is read'), T('What it is')],
      rows: [
        [T('{sān} {fēn} {zhī} {èr}'), T('two over three'), T('a fraction: the total comes first')],
        [T('{bàn}'), T('half'), T('the half, with the {yī} written out: {yī} {bàn}')],
        [T('{sān shí} {shēng}'), T('thirty measures'), T('an exact quantity, never approximate')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is 105 written in Mandarin?'),
    options: [
      T('{yì} {bǎi} {líng} {wǔ}'),
      T('{yì} {líng} {bǎi} {wǔ}'),
      T('{yī} {bǎi} {líng} {wǔ}'),
      T('{yì} {bǎi} {wǔ}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete 666 the way the Union Version writes it: 六百____六十六'),
      answer: '六',
    },
    {
      kind: 'match',
      prompt: T('Match the name of the place to its value'),
      pairs: [
        { a: T('{shí}'), b: T('ten') },
        { a: T('{bǎi}'), b: T('a hundred') },
        { a: T('{wàn}'), b: T('ten thousand') },
        { a: T('{yì}'), b: T('a hundred million') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {三分之二}, what is the two?'),
      options: [
        T('the part: it is two thirds'),
        T('the total: it is one third'),
        T('the number of parts, and the fraction is one third'),
        T('the measure, and {fēn} is the unit'),
      ],
      answer: 0,
    },
  ],
};
