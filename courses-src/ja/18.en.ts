import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Numerals'),
  title: T('Time, dates and what the calendar changes'),
  subtitle: T(
    'A date comes out year-month-day, the week is not numbered but named after the five elements, and the hour hides the minute — three systems mixed in the same sentence',
  ),
  body: C(`
## The date: year, month, day, with the era underneath

The numerals and the counters have already been given; what is missing is the meeting of the two, and the meeting has a name: a date. The first thing to know is the order, because it contradicts Mandarin. In Japanese the date is **year-month-day**, exactly as in Korean, and the opposite of Mandarin, which says day-month-year. "1 April 2024" is {2024nen 4gatsu 1nichi}: {nen} is year, {tsuki} is month, {nichi} is day. The numeral for the month is Sino, ichigatsu, nigatsu, sangatsu, yongatsu, and it is the same one used in Korean and in Mandarin, because all three come from Chinese. The day also takes a Sino numeral, with one exception that is its own: the first day of the month has a word of its own, tsuitachi, which Japanese prefers over "1 nichi".

The same {nichi} changes its reading depending on what it is counting. In a date it is read "nichi": {1nichi} is "day 1". In a counter of duration it is read "ka": {2nikan} is "two days", said futsukan. The numeral does not change; what changes is what follows it, and it is that detail which stops a reader from writing "2 days" on one document, "two days" on another, and calling one of the two wrong.

The calendar, though, has two layers. The official one is the Gregorian, and it only arrived in 1873: before that Japan measured the year by the moon and numbered by the years of the emperor. The second layer is still alive in the same sentence, the date by **era**. A 2019 document may carry {平成三十一年}, "Heisei year 31", and it is the same 2019. This is not an archival relic: 1987 is {Shōwa 62nen}, Shōwa year 62, and that is how the signature page of a recent translation dates itself. Reading a Japanese document with a date requires knowing the era; it is not erudition, it is a requirement.

And this is where the Bible comes in, with a historical detail anyone can check. The first complete Bible in modern Japanese appeared in 1873, the same year the Gregorian calendar was adopted and the year of the decree that ended vertical writing. The Japanese book was born at the very moment the language changed axis on the page. That is why prefaces carry the date in both forms at once: {2019nen 4gatsu 1nichi}, in digits, and {平成三十一年}, in kanji and in era. Anyone reading a translation preface is reading both, even when only one of them registers.

## The week is not numbered: it is named

The day of the week abandons the logic of the date. There is no "day 2 of the week": there is {kayōbi}, Tuesday, and the name does not come from the number; it comes from the **element**. The five elements of Chinese tradition, fire, earth, water, wood and metal, name five of the seven days; the sun and the moon name the other two, Sunday and Monday. So the name of a day does not tell you its position: {suiyōbi} does not mean "day 3", it means "water day", and Wednesday is Wednesday because it is the fourth counting from Monday.

A Japanese weekday is an image before it is an address. {kin'yōbi} is Friday and, at the same time, the metal day; {mokuyōbi} is Thursday and the wood day, and the word for wood is literally "grove". An invitation in Japanese picks an element: "Thursday at three" is {mokuyōbi 3ji}, and the listener knows the day from the image before processing the number. Translating only "Thursday" loses the image; translating "grove day" loses the order of the week. Both halves have to survive the translation, and that is why the biblical translations keep the whole pair.

## The hour: {ji}, {fun} and the minute that vanishes

Two words carry the time of day. {ji} is hour, {fun} is minute, and {fun} has two readings, "pun" and "fun", with no difference of meaning, only of register. {3ji 15fun} is three fifteen.

And here is the detail that only shows up when you speak. In a time, the minute is **optional**. In ordinary Japanese nobody says "three fifteen minutes": they say {3ji 15}, and the {fun} is dropped after the number, exactly as in English, where "minutes" is also optional after the number. The written form keeps the minute; speech dispenses with it. The half hour has a word of its own, and that word is {han}, "half": {3ji han} is half past three, and {han} counts hours and hours, only half hours.

Morning and afternoon have names and come before the number. {gozen} is morning, {gogo} is afternoon: {gozen 9ji} is nine in the morning, {gogo 3ji} is three in the afternoon. In a written text the ambiguity disappears; in a conversation it does not. And whoever writes an hour on a note without {gozen} finds out too late that nine at night is a very different piece of information from nine in the morning.

## Before, after and duration: the same {ni} three times

{mae} and {ato} are nouns, as the lesson on degree showed, and that is why they do not work as bare words: they take a particle like any noun. "Before going" is {mae ni iku}, literally "front + go"; "after going" is {ato ni iku}. And "until" is {made}, which closes an interval: {kara made} is the frame of any duration, "from… until", and it turns up everywhere.

The same move works for the past, and this is where English leads you astray. Japanese has no "ago" as a particle. What does the work of it is the noun {mae} plus the year counter: "three years ago" is {3nen mae}, and "three years from now" is {3nen ato}. Rendering {3nen mae} as "three years before" loses the "from now": the {mae} is relative to a point of speech, and that point is always the present. What Japanese does is date something: it gives the number and says on which side of the reference it sits.

And duration is the third job of {ni}, the same particle the first lesson already listed as destination and direction. "For two days" is {2ni watatte}, with {watatte} meaning "throughout", or the compact noun {2nikan}, which folds the two days into a single word. The same {ni} does three services: it says where to, it says when, it says for how long. What changes is not the particle; it is the noun with its counter, which always comes before it. A date in Japanese is effortless to read because of that.
`),
  vocab: [
    V('nen', '年', 'year; counter for years (nen)'),
    V('tsuki', '月', 'month; moon (tsuki)'),
    V('nichi', '日', 'day; counter for days (nichi or ka)'),
    V('yōbi', '曜日', 'day of the week (yōbi)'),
    V('ji', '時', 'hour; counter for hours (ji)'),
    V('fun', '分', 'minute; counter for minutes (fun or pun)'),
    V('han', '半', 'half; half past (han)'),
    V('gozen', '午前', 'morning (gozen)'),
    V('gogo', '午後', 'afternoon (gogo)'),
    V('ni', 'に', 'in; to; destination, time and duration (ni)'),
    V('mae', '前', 'before; in front of; "ago" with a counter (mae)'),
    V('ato', '後', 'after; behind (ato)'),
    V('made', 'まで', 'until; limit (made)'),
    V('kara', 'から', 'from; since (kara)'),
    V('watatte', '渡る', 'throughout; for the duration of (watatte)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A date is year-month-day: the opposite of Mandarin and the same as Korean. The month numeral is Sino.',
      ),
    },
    {
      n: '2',
      text: T(
        'The day of the week uses no numeral at all: it is named after the five elements and after the sun and the moon, and the name does not give its position in the week.',
      ),
    },
    {
      n: '3',
      text: T(
        'In a time, the minute is optional after the number: writing keeps {fun} and speech drops it. The half hour is {han}, and morning and afternoon come before, as {gozen} and {gogo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mae} and {ato} are nouns and therefore take a particle: "before going" is {mae ni iku}. Japanese has no "ago" particle — "three years ago" is {3nen mae}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The same {ni} marks destination, time and duration. What changes is the noun with its counter, which always comes first.',
      ),
    },
  ],
  notes: [
    {
      label: T('A date in Japanese has two readings'),
      text: T(
        'The same calendar day shows up in digits and in era: {2019nen 4gatsu 1nichi} and {平成三十一年} are the same day. The same holds in the hour, where what is written and what is spoken do not match. Stopping at the number and ignoring the rest means reading half the text.',
      ),
    },
    {
      label: T('1873: calendar, script and Bible'),
      text: T(
        'Three things happen in the same year: the Gregorian calendar arrives, vertical writing is ended by decree, and the first complete Bible in modern Japanese comes out. It is the only date in this lesson worth memorising.',
      ),
    },
  ],
  examples: [
    {
      text: '2024年4月1日',
      gloss: T('2024nen 4gatsu 1nichi — 1 April 2024, in the Japanese order'),
    },
    { text: '水曜日', gloss: T('suiyōbi — Wednesday, literally "water day"') },
    { text: '3時15分', gloss: T('sanji jūgo fun — three fifteen; spoken without the minute') },
    { text: '午前9時半', gloss: T('gozen kuji han — half past nine in the morning') },
    { text: '2日にわたって', gloss: T('futsuka ni watatte — for two days') },
  ],
  tables: [
    {
      caption: T('The whole week: not one day is numbered'),
      head: [T('Name'), T('Element'), T('In English')],
      rows: [
        [T('{getsuyōbi 月曜日}'), T('moon'), T('Monday')],
        [T('{kayōbi 火曜日}'), T('fire'), T('Tuesday')],
        [T('{suiyōbi 水曜日}'), T('water'), T('Wednesday')],
        [T('{mokuyōbi 木曜日}'), T('wood'), T('Thursday')],
        [T("{kin'yōbi 金曜日}"), T('metal'), T('Friday')],
        [T('{doyōbi 土曜日}'), T('earth'), T('Saturday')],
        [T('{nichiyōbi 日曜日}'), T('sun'), T('Sunday')],
      ],
    },
    {
      caption: T('The eras: how the same year is written two ways'),
      head: [T('Era'), T('Years'), T('How it is written')],
      rows: [
        [T('{Meiji 明治}'), T('1868 to 1912'), T('{Meiji 6nen} = 1873')],
        [T('{Taishō 大正}'), T('1912 to 1926'), T('{Taishō 3nen} = 1914')],
        [T('{Shōwa 昭和}'), T('1926 to 1989'), T('{Shōwa 62nen} = 1987')],
        [T('{Heisei 平成}'), T('1989 to 2019'), T('{Heisei 31nen} = 2019')],
        [T('{Reiwa 令和}'), T('2019 onwards'), T('{Reiwa 1nen} = 2019')],
      ],
    },
    {
      caption: T('The same {ni}, three jobs'),
      head: [T('Job'), T('Example'), T('What it says')],
      rows: [
        [T('destination'), T('{kyō made}'), T('until tomorrow')],
        [T('when'), T('{mokuyōbi 3ji ni}'), T('on Thursday, at three')],
        [T('duration'), T('{2ni watatte}'), T('for two days')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {2024nen 4gatsu 1nichi}, what is the order of the three terms?'),
    options: [
      T('year, month, day'),
      T('day, month, year'),
      T('month, day, year'),
      T('day, year, month'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What does {suiyōbi} mean, literally?'),
      options: [T('water day'), T('day 3'), T('fire day'), T('Wednesday, with no image')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete the name of Wednesday: 水曜____'),
      answer: '日',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its function'),
      pairs: [
        { a: T('{mae}'), b: T('before; and "ago", with a counter') },
        { a: T('{ato}'), b: T('after') },
        { a: T('{made}'), b: T('until') },
        { a: T('{kara}'), b: T('from') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
