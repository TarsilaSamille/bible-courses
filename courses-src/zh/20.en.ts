import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Numbers'),
  title: T('Time: years, months, days and hours'),
  subtitle: T(
    'Time in Chinese is always a number plus a word — and the date comes in reverse order',
  ),
  body: C(`
## Number plus word, no article

English needs an article and a plural: "the three days". Chinese needs neither: time is always a number glued to the word, {sān tiān} is "three days", {liǎng nián} is "two years", {yī gè yuè} is "one month". What follows the number does the work English does with article and plural ending: {tiān} alone is "day", and {sān tiān} is "three days" with the word itself unchanged.

And what matters more is what comes after the expression. "Three days" and "three days ago" are not the same construction in either language, but in Chinese what follows is a whole word, {yǐqián} or {yǐhòu}, with its own weight, not a preposition fragment stuck onto the noun.

## The ordinal is a **prefix**, not an adjective

Here is the contrast that trips people up most. English and Portuguese **inflect** the ordinal: "the third day", "the tenth section", "the first year", and the word changes shape to agree with the noun. Chinese has nothing that inflects. The ordinal is a prefix attached to the number: {dì} + number + noun.

{dì sān tiān} is "the third day". {dì shí jié} is "the tenth section". {dì yī nián} is "the first year". {dì} is always the same, whether the number is one or a thousand; what changes is the noun, and the noun never changes. And {dì sān} alone is not "third": it is the ordinal as a bare numeral, and the name of what is being counted is required after it.

The {和合本} uses this on every chapter and verse: "{第}{十}{二}{節}" is literally "the twelfth section", and the dates of kings in the running text come as bare ordinals, Daniel 9:2, {dì yī nián Belsazar wáng}, "in the first year of King Belshazzar".

## The date is year-month-day, never day-month-year

This is the classic mistake of anyone reading a Chinese calendar for the first time. The order runs from **largest to smallest**: year, then month, then day. {èr líng líng jiǔ nián shí yuè èr rì} is 2 October 2009, {nián} year, {shí yuè} October, {èr rì} the second day. A reader who writes 2009{年}2{月}10{日} for "October 2, 2009" has written February 10 without noticing.

The year takes {nián}, the month takes {yuè}, the day takes {rì}. And the English "of" never appears: in 2009{年}10{月}2{日} nothing links the year to the month. Each pair is self-sufficient.

## Hours and minutes: {點} and {分}, not a colon

The hour of the day is not a number with a colon either. They are **two words**: {diǎn} for the hours and {fēn} for the minutes. {sān diǎn} is "three o'clock". {sān diǎn sān shí fēn} is "three thirty", and {sān shí fēn} is "thirty minutes", while "half" is {bàn}: {sān diǎn bàn} is "three thirty".

"Half" is always {bàn}, placed after the hour. There is no "3:30" said aloud in Chinese: nobody says {sān diǎn sān shí fēn} when {sān diǎn bàn} says the same in four characters instead of eight.

The week completes the picture: {xīngqī} means "week" but is used for the day of the week, counted from Monday, and {xīngqī yī} is Monday, not Sunday. The counting is Western too: Monday is day one, Sunday is day seven. {xīngqī rì}, with no number, means Sunday, and that already gives away that the number is the information.

## Before, after, and the month that has gone

Relative time works much the same: {yǐqián} is "before", {yǐhòu} is "after", and both are whole words that close the phrase after the name of the time. Genesis 7:4 has {qī rì yǐhòu}, "after seven days", with {qī rì} and {yǐhòu} side by side and no preposition between them.

What changes is the recent past, which needs a classifier, and here it takes on real meaning instead of being mere grammar. {shàng gè yuè} is "last month", and {gè} is the same generic classifier as {个}, now welded to {yuè}. {shàng} is "the upper one", "the earlier one". Last year is {shàng gè nián}, and the analogy is direct: {gè} is what holds the time word and turns it into "that month".

And Chinese does not have a single word for "last month": it says "the month" and puts {shàng} in front. It is the same mechanism as {bù} and {méi}: relative time lives in the particle, not in the noun.`),
  vocab: [
    V('nián', '年', 'year (nián)'),
    V('yuè', '月', 'month (yuè)'),
    V('rì', '日', 'day (rì)'),
    V('dì', '第', 'ordinal prefix (dì): the third day'),
    V('xīngqī', '星期', 'week; used for the day of the week (xīngqī)'),
    V('diǎn', '点', "o'clock, hour of the day (diǎn)"),
    V('fēn', '分', 'minute (fēn)'),
    V('bàn', '半', 'half (bàn)'),
  ],
  rules: [
    {
      n: '1',
      text: T('Time is always number + word, with no article: {sān tiān} = "three days".'),
    },
    {
      n: '2',
      text: T(
        'The ordinal is {dì} + number + noun: {dì sān tiān} = "the third day". The noun does not inflect.',
      ),
    },
    {
      n: '3',
      text: T(
        'The date is year-month-day: {2009 nián 10 yuè 2 rì} is October 2, 2009, never day-month-year.',
      ),
    },
    {
      n: '4',
      text: T(
        'The hour is {diǎn} and the minute is {fēn} — never a colon: {sān diǎn bàn} = "half past three".',
      ),
    },
    {
      n: '5',
      text: T(
        '{yǐqián} and {yǐhòu} are whole words after the time expression: {qī rì yǐhòu} = "after seven days".',
      ),
    },
  ],
  notes: [
    {
      label: T('"Half" comes after, and it is {bàn}'),
      text: T(
        '{bàn} means "half" and attaches to the hour: {bàn} {gè} {xiǎoshí} is "half an hour", {bàn} {nián} is "half a year". Never before, the way English puts it.',
      ),
    },
    {
      label: T('{星}{期}{一} is Monday, not Sunday'),
      text: T(
        'The week is counted from Monday, as in the Western calendar: {xīngqī yī} is Monday and {xīngqī liù} is Saturday. {xīngqī rì} with no number is Sunday.',
      ),
    },
  ],
  examples: [
    { text: '三天', gloss: T('sān tiān — three days') },
    { text: '第三天', gloss: T('dì sān tiān — the third day') },
    { text: '三點半', gloss: T('sān diǎn bàn — half past three') },
    { text: '上個月', gloss: T('shàng gè yuè — last month') },
  ],
  tables: [
    {
      caption: T('Dates: the reversed order'),
      head: [T('Format'), T('Chinese'), T('English')],
      rows: [
        [T('year-month-day'), T('2009年10月2日'), T('October 2, 2009')],
        [T('year only'), T('2009年'), T('in 2009')],
        [T('month only'), T('10月'), T('in October')],
        [T('month and year'), T('2009年10月'), T('in October 2009')],
        [T('day and month'), T('10月2日'), T('October 2')],
      ],
    },
    {
      caption: T('Hours: two words, not a colon'),
      head: [T('Chinese'), T('Reading'), T('English')],
      rows: [
        [T('三點'), T('sān diǎn'), T("3 o'clock")],
        [T('三點十五分'), T('sān diǎn shíwǔ fēn'), T('3:15')],
        [T('三點半'), T('sān diǎn bàn'), T('3:30 — "half past"')],
        [T('上午八點'), T('shàngwǔ bā diǎn'), T('8 a.m.')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you write "the third day"?'),
    options: [T('第三天'), T('三第天'), T('第三天日'), T('三三天')],
    answer: 0,
    hint: T('{dì} comes before the number, and the time word comes after it.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "October 2, 2009" (year-month-day): 2009____10月2日'),
      answer: '年',
    },
    {
      kind: 'match',
      prompt: T('Match the word to what it names'),
      pairs: [
        { a: T('{nián} 年'), b: T('year') },
        { a: T('{yuè} 月'), b: T('month') },
        { a: T('{diǎn} 点'), b: T('hour of the day') },
        { a: T('{fēn} 分'), b: T('minute') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form is "half past three"?'),
      options: [T('{三點半}'), T('{三點三分}'), T('{半三點}'), T('{三點之半}')],
      answer: 0,
    },
  ],
};
