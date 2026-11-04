import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Verb persons and the two negations'),
  subtitle: T('كَتَبْتُ، أَكْتُبُ، لَمْ يَكُنْ'),
  section: T('Verbs'),
  body: C(`## Two series, two ways of marking the person

Arabic marks the person of the verb in two ways, and the choice between them depends on the voice. **The perfect inflects by suffixes, welded to the end of the word; the imperfect inflects by prefixes, welded to the front.**

In the perfect the first person is {كَتَبْتُ}, the second {كَتَبْتَ} or {كَتَبْتِ}, the third {كَتَبَ} and {كَتَبَتْ}, and the plural {كَتَبْنَا}, {كَتَبْتُمْ}, {كَتَبُوا}. In the imperfect the same places are taken by prefixes: {أَكْتُبُ}, {تَكْتُبُ}, {تَكْتُبُ}, {نَكْتُبُ}, {تَكْتُبُونَ}, {يَكْتُبُونَ}.

The third person of the perfect is the point that matters. There is no suffix at all, which is why {كَتَبَ} and {كَتَبَتْ} are almost written the same: the difference sits in the final {تْ} and in the gender of the noun. One rule is enough to read almost every perfect shape without memorising anything.

## The negative past has a shape that does not inflect

Here is the exception, and it is the prettiest and the most awkward thing about the Arabic verb.

The negative past is {لَمْ} plus the verb in the **jussive**, not the indicative. {لَمْ يَكُنْ} is "he was not", and not {لَمْ يَكُونُ} nor {لَمْ يَكُونَ}. What the jussive does is drop the final vowel, and that is why the negative past sounds different from the positive in almost every shape.

Two verbs break the series, and that is what makes the group worth teaching. **{لَمْ يَكُنْ} and {لَمْ يَأْتِ} lose letters after {لَمْ}.** {كَانَ} loses the {و}, {جَاءَ} loses the {أ} and swaps the final {ت} for {تْ}. Anyone inflecting by rule writes {لَمْ يَكُونْ}, and that shape turns up in no text.

The inflections of the negation are also fewer than those of the positive, and that is a single rule: the person of the negative past shows up in the **pronoun**, not the verb. {لَمْ أَكُنْ} is the first person, {لَمْ نَكُنْ} the first person plural, {لَمْ يَكُنْ} the third. Three shapes for six places, and the reduction is real.

## The two negations

Gathering what came from {لا} together with what came from {لَمْ}, the picture closes and is small enough to memorise whole.

The past is {لَمْ} plus jussive. The present is {لا} plus indicative. The future is {لَنْ} plus subjunctive. And {مَا} plus indicative is negation with no reference to time, the oldest of the four and the one that turns up in the oldest texts.

Each negation brings its own verbal mood, and that is the part worth memorising: **jussive with {لَمْ}, indicative with {لا} and {مَا}, subjunctive with {لَنْ}.** The rest of the inflection is the same as the positive. Anyone who knows the negation and the voice reads any negative verb shape.

## Reading criterion

In {لَا تَأْتِ فِيَنَا تَجْرِيَةً} the negation brings one of the two shapes nobody inflects by rule. {لا} sends the verb into the jussive, and the jussive of {أَتى} is {يَأْتِ}, with the {أ} dropped and the {ت} swapped. Someone still learning writes {لَا يَأْتِي}, which is a shape that exists and means something else: "it is not he who comes".

That is why the jussive of the weak roots deserves attention: the two shapes sit close enough to be confused, and the confusion turns a prohibition into a denied assertion.`),
  vocab: [
    V('كَتَبْتُ', 'كتب', 'I wrote'),
    V('كَتَبْتَ', 'كتب', 'you wrote'),
    V('كَتَبْتِ', 'كتب', 'you wrote'),
    V('كَتَبَتْ', 'كتب', 'she wrote'),
    V('كَتَبْنَا', 'كتب', 'we wrote'),
    V('كَتَبْتُمْ', 'كتب', 'you all wrote'),
    V('كَتَبُوا', 'كتب', 'they wrote'),
    V('أَكْتُبُ', 'كتب', 'I write'),
    V('تَكْتُبُ', 'كتب', 'you write'),
    V('يَكْتُبُ', 'كتب', 'he writes'),
    V('تَكْتُبِينَ', 'كتب', 'you write'),
    V('نَكْتُبُ', 'كتب', 'we write'),
    V('يَكْتُبُونَ', 'كتب', 'they write'),
    V('لَمْ أَكُنْ', 'كان', 'I was not'),
    V('لَمْ يَكُنْ', 'كان', 'he was not'),
    V('لَمْ يَأْتِ', 'أتى', 'he did not come'),
    V('كَانَ', 'كان', 'he was'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How does the perfect mark the person?'),
    options: [T('By prefixes'), T('By suffixes'), T('By particles'), T('It does not inflect')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the negative past: "he was not" is {لَمْ ___}.'),
      answer: 'يَكُنْ',
      hint: T('The {و} of {يَكُون} drops after {لَمْ}.'),
    },
    {
      kind: 'match',
      prompt: T('Match person and perfect shape.'),
      pairs: [
        { a: T('كَتَبْتُ'), b: T('first person') },
        { a: T('كَتَبْتَ'), b: T('second person') },
        { a: T('كَتَبَتْ'), b: T('third person feminine') },
        { a: T('كَتَبُوا'), b: T('plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the jussive of {يَكُون} after {لَمْ}?'),
      options: [T('يَكُونُ'), T('يَكُونَ'), T('يَكُنْ'), T('يَكُونُوا')],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('How does the imperfect mark the person?'),
      options: [T('By prefixes'), T('By suffixes'), T('By particles'), T('It does not inflect')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('**The perfect inflects by suffixes and the imperfect by prefixes.**') },
    {
      n: '2',
      text: T(
        'The third person of the perfect has no suffix: {كَتَبَ} and {كَتَبَتْ} differ only in the final {تْ} and in the gender of the noun.',
      ),
    },
    { n: '3', text: T('The dual and the jussive break the pattern: {كَتَبْتُمَا} and {لَمْ يَكْتُبْ}.') },
    { n: '4', text: T('The negative past is {لَمْ} plus the jussive, not plus the indicative.') },
    { n: '5', text: T('{يَكُون} and {يَأْتِي} lose letters after {لَمْ}: {لَمْ يَكُنْ}, {لَمْ يَأْتِ}.') },
  ],
  notes: [
    {
      label: T('The two verbs that break the series'),
      text: T(
        '{كَانَ} and {جَاءَ} are the only ones that lose letters in the negative shape. The loss is visible and irregular: {لَمْ يَكُنْ} loses the {و}, and {لَمْ يَأْتِ} loses the {أ} and swaps the {ت}. Anyone inflecting by rule writes {لَمْ يَكُونْ}, and nobody pronounces that.',
      ),
    },
    {
      label: T('Why the negative inflects less'),
      text: T(
        'The person of the negative past appears in the pronoun, not the verb: {لَمْ أَكُنْ} is the first person and {لَمْ نَكُنْ} the first person plural. Three shapes for six places, and the reduction is real.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبْتُ', gloss: T('I wrote; suffix {ـتُ}') },
    { text: 'كَتَبْتَ', gloss: T('you wrote; suffix {ـتَ}') },
    { text: 'كَتَبَتْ', gloss: T('she wrote; suffix {ـتْ}') },
    { text: 'كَتَبُوا', gloss: T('they wrote; suffix {ـوا}') },
    { text: 'أَكْتُبُ', gloss: T('I write; prefix {أَ}') },
    { text: 'يَكْتُبُونَ', gloss: T('they write; prefix {يَ}') },
    { text: 'لَمْ أَكُنْ', gloss: T('I was not') },
    { text: 'لَمْ يَكُنْ', gloss: T('he was not; the {و} dropped') },
    { text: 'لَمْ يَأْتِ', gloss: T('he did not come; the {أ} dropped') },
  ],
  tables: [
    {
      caption: T('The perfect by suffixes'),
      head: [T('Person'), T('Suffix'), T('Form'), T('Gloss')],
      rows: [
        [T('1st'), 'ـتُ', 'كَتَبْتُ', T('I wrote')],
        [T('2nd masc.'), 'ـتَ', 'كَتَبْتَ', T('you wrote')],
        [T('2nd fem.'), 'ـتِ', 'كَتَبْتِ', T('you wrote')],
        [T('3rd masc.'), T('none'), 'كَتَبَ', T('he wrote')],
        [T('3rd fem.'), 'ـتْ', 'كَتَبَتْ', T('she wrote')],
        [T('1st plural'), 'ـنَا', 'كَتَبْنَا', T('we wrote')],
        [T('2nd plural'), 'ـتُمْ', 'كَتَبْتُمْ', T('you all wrote')],
        [T('3rd plural'), 'ـوا', 'كَتَبُوا', T('they wrote')],
      ],
    },
    {
      caption: T('The imperfect by prefixes'),
      head: [T('Person'), T('Prefix'), T('Form'), T('Gloss')],
      rows: [
        [T('1st'), 'أَ', 'أَكْتُبُ', T('I write')],
        [T('2nd masc.'), 'تَ', 'تَكْتُبُ', T('you write')],
        [T('2nd fem.'), 'تَ', 'تَكْتُبِينَ', T('you write')],
        [T('3rd masc.'), 'يَ', 'يَكْتُبُ', T('he writes')],
        [T('3rd fem.'), 'تَ', 'تَكْتُبُ', T('she writes')],
        [T('1st plural'), 'نَ', 'نَكْتُبُ', T('we write')],
        [T('3rd plural'), 'يَ', 'يَكْتُبُونَ', T('they write')],
      ],
    },
    {
      caption: T('The four negations'),
      head: [T('Time'), T('Particle'), T('Verb mood'), T('Example')],
      rows: [
        [T('past'), 'لَمْ', T('jussive'), 'لَمْ يَكُنْ'],
        [T('present'), 'لا', T('indicative'), 'لا يَكْتُبُ'],
        [T('future'), 'لَنْ', T('subjunctive'), 'لَنْ يَكْتُبَ'],
        [T('no time'), 'مَا', T('indicative'), 'مَا كَانَ'],
      ],
    },
  ],
};
