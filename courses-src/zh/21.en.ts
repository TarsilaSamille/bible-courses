import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Numbers'),
  title: T('Numerals: {一}, {兩}, {幾} and the position of the classifier'),
  subtitle: T(
    'The numeral comes before the classifier, and "two" has two forms that are not interchangeable',
  ),
  body: C(`
## Numeral, classifier, noun

In {liǎng} {běn} {shū}, two books, the numeral {liǎng} says *how many*, the classifier {běn} says *what kind*, and {shū} is the noun. Two things stay open: how the numeral changes sound, and where it sits.

The first is how the numeral behaves. One, two and three are not stable words: {yī} changes sound according to what follows, and "two" has two forms that are confused in almost every context and diverge precisely where the context matters.

The second is position. English says "three books", noun then numeral. Chinese says {sān} {běn} {shū}, **numeral, classifier, noun.** The order is fixed, and reversing it is wrong, not informal: {shū} {sān} {běn} is not Chinese.

## One changes sound: {一} and tonal sandhi

{一} is the most frequent numeral in the language and the least predictable. The syllable is read {yī} when it stands alone or in neutral position. Before another syllable the tone changes, so as not to leave two level tones side by side. The rule fits in one line:

**{一} before a 4th tone becomes {yí}, 2nd tone. Before a 1st, 2nd or 3rd tone it becomes {yì}, 4th tone.**

The two commonest examples are mirror images. {yì} {tiān}, one day: {tiān} is 1st tone, so {一} drops to 4th tone. {yí} {gè}, one thing: {gè} is 4th tone, so {一} rises to 2nd tone. It is written {yī}; it is pronounced {yì} or {yí}.

What matters for reading is that the character never changes. No manuscript writes {yí} where another writes {yì}: the sandhi is a phenomenon of speech, not of writing. A reader never has to decide; a speaker decides thirty times on a page.

## "Two" has two forms: {兩} and {二}

Here is the point almost no Mandarin course explains properly, and which every frequency dictionary makes look arbitrary.

**{兩} ({liǎng}) is the noun form: it appears when a classifier follows. {二} ({èr}) is the number form: it appears when the noun already carries its own implicit classifier, or when it is a date, a phone number, or a position in a list.**

- {liǎng} {běn} {shū}, two books. Classifier {běn} present: {兩}.
- {èr} {yuè}, February. {月} is the month and already the classifier: {二}.
- {dì} {èr}, second. Enumeration: {二}.
- {èr} {shí} {sān}, twenty-three. Compound number: {二}.

The practical rule fits in one test: if you can point at the classifier in the phrase, write {兩}. If there is no classifier at all, write {二}. A fluent reader does not think in rules, but they slip in distinct ways in both directions, and both are common in the Bible.

Basic counting is {yī} {èr} {sān} {sì} {wǔ} {liù} {qī} {bā} {jiǔ} {shí}. After that the system closes: {十} is the multiplier, {shí} {yī} eleven, {èr} {shí} twenty, {sān} {shí} {liù} thirty-six.

"And a half" is {半} ({bàn}), and it goes after the noun, like {er}: {shí} {wǔ} {gè} {bàn}, fifteen and a half. Not {bàn} {shí} {wǔ} {gè}.

## {幾}, position, and the dropped classifier

{幾} ({jǐ}) is "how many" in the question and "some" in the answer. {nǐ} {yǒu} {jǐ} {běn} {shū}?, how many books do you have? It is the simplest question in the language and it already carries numeral, classifier and noun, in that order. In the answer, {幾} {běn} means "some books", without the {shū}: the ellipsis is normal because {běn} already says everything.

The order is settled here: numeral, classifier, noun. {sān} {běn} {shū}, three books. And the classifier can disappear when the noun is abstract or when the context is already clear: {sān tiān}, three days, not {sān tiān} {rìzi}, because {天} here is already the noun and carries its own classifier. The omission is natural, and that is why an attentive reader has to be able to count how many classifiers were left out.

The biblical payoff is all about position, and it is immediate. John 6:9, {yǒu} {yí} {gè} {háizi}, there was a little boy: numeral {一}, classifier {個}, noun {孩子}, exactly in this order, with the {一} sandhi-ing to {yí} because {gè} is 4th tone. Matthew 2:1, {yuē} {zài} {nà} {xiē} {rìzi}, around those days: {約} is "approximately", and the noun {日子} takes {些}, a classifier of groups, "those days". Matthew 14:21, {wǔ} {qiān}, five thousand: {qiān} is the thousand multiplier and already the unit. When the {和合本} writes {五千} {人} further on, it is because the noun came back there; the figure on its own does without the {個}.`),
  vocab: [
    V('一', '一', 'one (yī; the tone changes: yí, yì)'),
    V('二', '二', 'two as a number, in dates and series (èr)'),
    V('兩', '两', 'two before a classifier (liǎng)'),
    V('幾', '几', 'how many (question) / some (answer) (jǐ)'),
    V('個', '个', 'generic classifier (gè)'),
    V('半', '半', 'half; goes after the noun (bàn)'),
    V('天', '天', 'day; also the classifier for days (tiān)'),
    V('孩子', '孩子', 'child, little boy (háizi)'),
  ],
  rules: [
    {
      n: '1',
      text: T('The order is fixed: numeral, classifier, noun. {sān běn shū}, never {shū sān běn}.'),
    },
    {
      n: '2',
      text: T(
        '{兩} when a classifier follows; {二} when none does — dates, {第二} and compound numbers.',
      ),
    },
    {
      n: '3',
      text: T(
        '{一} before a 4th tone is read {yí} ({一個}); before a 1st, 2nd or 3rd tone, {yì} ({一天}). The character does not change.',
      ),
    },
    { n: '4', text: T('{幾} asks "how many" and answers "some": {jǐ běn shū}.') },
    { n: '5', text: T('{半} goes after the noun: {shí wǔ gè bàn}, not {bàn shí wǔ}.') },
  ],
  notes: [
    {
      label: T('Where {兩} fails'),
      text: T(
        '{二} is obligatory in {二月}, {二月十日} and {第二}. A {兩} there sounds wrong to a listener: {月} and {第} are already the unit and the position, and they do not want a classifier.',
      ),
    },
    {
      label: T('Not every {兩} is a numeral'),
      text: T(
        '{兩} sometimes means "both": {liǎng} {gè} {rén} "the two people", and {兩} on its own is "the two of them". In {兩} {běn} {shū} there is no doubt — there {兩} is counting. But {兩} {yī} {diǎn} (two o\'clock) counts nothing.',
      ),
    },
  ],
  examples: [
    { text: '一個孩子', gloss: T('yí ge háizi — a little boy (John 6:9)') },
    { text: '幾本書', gloss: T('jǐ běn shū — how many books?') },
    { text: '兩本書', gloss: T('liǎng běn shū — two books') },
    { text: '二月', gloss: T('èr yuè — February') },
  ],
  tables: [
    {
      caption: T('The order is fixed, and the reverse of English'),
      head: [T('English'), T('Chinese'), T('Gloss')],
      rows: [
        [T('books + two'), T('{liǎng} {běn} {shū}'), T('two books')],
        [T('books + three'), T('{sān} {běn} {shū}'), T('three books')],
        [T('boys + five'), T('{wǔ} {gè} {háizi}'), T('five boys')],
        [T('books + how many'), T('{jǐ} {běn} {shū}'), T('how many books?')],
      ],
    },
    {
      caption: T('When to use {兩} and when to use {二}'),
      head: [T('Form'), T('Where it appears'), T('Example')],
      rows: [
        [T('{兩} {liǎng}'), T('with a classifier following'), T('{liǎng běn shū} two books')],
        [T('{兩} {liǎng}'), T('with the classifier {個}'), T('{liǎng gè rén} two people')],
        [T('{二} {èr}'), T('month and date'), T('{èr yuè} February')],
        [T('{二} {èr}'), T('position in a series'), T('{dì èr} second')],
        [T('{二} {èr}'), T('compound number above 10'), T('{èr shí} twenty')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('To say "second", which numeral do you use?'),
    options: [T('{兩}'), T('{二}'), T('{幾}'), T('{一}')],
    answer: 1,
    hint: T(
      'It is a position in a series, not a noun with a classifier: {第} already fills the classifier slot.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "three books" in the right order: ____ 本 书'),
      answer: '三',
    },
    {
      kind: 'match',
      prompt: T('Match the form to its use'),
      pairs: [
        { a: T('{兩 běn shū}'), b: T('two books') },
        { a: T('{èr yuè}'), b: T('February') },
        { a: T('{dì èr}'), b: T('second') },
        { a: T('{jǐ běn}'), b: T('how many books?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many classifiers appear in {兩本書}?'),
      options: [T('none'), T('one'), T('two'), T('three')],
      answer: 1,
    },
  ],
};
