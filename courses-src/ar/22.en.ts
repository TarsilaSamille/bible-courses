import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Singular, dual, plural'),
  subtitle: T('كِتَابَانِ، كِتَابَيْنِ، هُمَا'),
  section: T('Nouns'),
  body: C(`## Three numbers, and the third one gets in the way

Portuguese has two. Arabic has three, and the third is the dual: a form that exists to say "exactly two". {كِتَابٌ} is one book, {كِتَابَانِ} is two books, {كُتُبٌ} is books.

What the dual carries is small and very specific: it is not quantity, it is exactness. Someone who says {كِتَابَانِ} is not saying "some books", is saying two. A rendering that writes "books" for {كِتَابَانِ} erases the most informative word in the clause, and a reading of the Greek goes through that loss without noticing.

The dual is neither decoration nor a poet's inheritance. It is compulsory whenever the count is two, and the noun, the verb and the pronoun each have their own shape for it.

## The dual in the noun

The dual of the noun adds two letters: {ـانِ} in the nominative and {ـين} in the accusative and the genitive. {كِتَابَانِ} and {كِتَابَيْنِ}. The feminine inserts a {ت} first: {كِتَابَتَانِ} and {كِتَابَتَيْنِ}.

The rule holds for broken plurals too, and that is where it misleads. {قَلَمٌ} gives {قَلَمَانِ}, not {قَلَمَان} and not {قَلَمَين}: the {ن} of the plural is still there, with the dual ending welded to it.

And there is an asymmetry: **the dual has no kinship with the plural**. No form exists for "two or more"; {ـانِ} belongs to the dual alone, and the plural is always {كُتُبٌ} or {مُعَلِّمُونَ}. A reader looking for a middle term between {كِتَابَانِ} and {كُتُبٌ} does not find one, and that absence is what makes singular and plural so easy to tell apart in an ancient text.

## The dual in the verb and the pronoun

The verb has a first-person dual, {كَتَبْنَا}, "we wrote", and the ending {ـنا} is the same as the plural. What separates the two is the rest of the person, not the end.

The other persons have a shape of their own. The second-person imperfect is {تَكْتُبَانِ}, and that {بَانِ} is what the eye catches. The dual pronoun is {أَنْتُمَا} for the second person and {هُمَا} for the third, and {هُمَا} serves masculine and feminine alike: someone who says {هُمَا} about two women is right, and context is what says which.

The third-person dual is the one place in the system where the verb and the pronoun share an ending: {هُمَا} and {كَتَبَا}. That is not a coincidence, and a reader who knows it recognises the construction by sound alone.

## Where the dual reappears

And here is what matters for reading, because the dual survives in shapes Portuguese no longer has.

A preposition followed by the dual uses the same suffixes as the pronouns, and the result is a single word: {بَيْنَهُمَا} between the two, {عَنْهُمَا} about the two, {لَهُمَا} for the two, {كِتَابُهُمَا} the book of the two. Each of them carries a dual inside, and the context does not always make clear whether the two are people or things.

Then there is a use that is no longer counting. {كُلَّاهُمَا} and {أَيُّهُمَا} mean "both", and it is one of the few cases where the exact number is not at stake. Rendering {كُلَّاهُمَا} as "the two" is not wrong about number and is wrong about sense: {كُلّ} confirms instead of counting.

Old custom is what carries the rest. The psalms use {هُمَا} often, and a rendering that writes "they" where the original says "the two" loses the emphasis without noticing. The older shape of {كُلَّاهُمَا} shows up in the psalms and in Genesis, and the modern use of "both" comes from it.

## Reading criterion

Look for {ـانِ} and {ـين} before translating any noun. In {أَخَاهُمَا} the doubled ending says at once that the clause is about two people and not about a group: the plural {ـُن} and {ـِن} never appears. When the rendering is done and the number is ambiguous, go back to the ending: {ـا} in the pronoun and in the verb means two, and that information was in the word from the start.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'one book'),
    V('كِتَابَانِ', 'كتاب', 'two books; dual nominative'),
    V('كِتَابَيْنِ', 'كتاب', 'two books; dual accusative and genitive'),
    V('كِتَابَتَانِ', 'كتاب', 'two books; feminine dual'),
    V('قَلَمٌ', 'قلم', 'one pen'),
    V('قَلَمَانِ', 'قلم', 'two pens'),
    V('أَنْتُمَا', 'أنتما', 'you two'),
    V('هُمَا', 'هما', 'the two; the same for both sexes'),
    V('نَحْنُ', 'نحن', 'we'),
    V('كِتَابُهُمَا', 'كتاب', 'the book of the two'),
    V('بَيْنَهُمَا', 'بين', 'between the two'),
    V('كُلَّاهُمَا', 'كل', 'both; only with the dual'),
    V('كَتَبَا', 'كتب', 'the two wrote'),
    V('كَتَبَتَا', 'كتب', 'the two women wrote'),
    V('تَكْتُبَانِ', 'كتب', 'you two write'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How many numbers does the Arabic noun have?'),
    options: [T('Two'), T('Three'), T('Four'), T('Five')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dual in the nominative: "two books" is {كِتَاب___}'),
      answer: 'َانِ',
      hint: T('The dual adds two letters to the noun.'),
    },
    {
      kind: 'match',
      prompt: T('Match person and dual form.'),
      pairs: [
        { a: T('أَنْتُمَا'), b: T('second person') },
        { a: T('هُمَا'), b: T('third person') },
        { a: T('كَتَبَا'), b: T('verb, third person') },
        { a: T('كَتَبَتَا'), b: T('verb, third person feminine') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What does {كُلَّاهُمَا} mean?'),
      options: [T('The two'), T('Both'), T('Neither of the two'), T('The two, negated')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('In {قَلَمَانِ}, where does the final {ن} come from?'),
      options: [
        T('From the broken plural'),
        T('From the dual ending'),
        T('From the article'),
        T('From the feminine'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Arabic noun has three numbers: singular, dual and plural, and the dual is compulsory when the count is exactly two.',
      ),
    },
    {
      n: '2',
      text: T(
        '**The dual of the noun is {ـانِ} in the nominative and {ـين} elsewhere**, with {ت} added in the feminine.',
      ),
    },
    {
      n: '3',
      text: T(
        'The dual of the verb ends in {ا}: {كَتَبَا} and {كَتَبَتَا}; the imperfect shows it as {بَانِ}, as in {تَكْتُبَانِ}.',
      ),
    },
    { n: '4', text: T('The dual pronoun is {أَنْتُمَا} and {هُمَا}, and {هُمَا} serves both sexes.') },
    {
      n: '5',
      text: T(
        'The dual survives in {بَيْنَهُمَا} and {كُلَّاهُمَا}, and there it no longer counts but confirms.',
      ),
    },
  ],
  notes: [
    {
      label: T('The dual Portuguese lost'),
      text: T(
        'No modern European language has a dual, which is why {ـانِ} alarms at first sight. It is no exoticism: it is the same information Portuguese handles with "the two", and Arabic handles with an ending. Anyone who reads {كِتَابَيْنِ} knows something a Portuguese reader cannot see, that there are two and not three.',
      ),
    },
    {
      label: T('When the dual becomes "both"'),
      text: T(
        '{كُلَّاهُمَا} and {أَيُّهُمَا} mean both. It is not a new number: it is the dual with {كُلّ} in front, and rendering it as "the two" is wrong because {كُلّ} confirms instead of counting.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('one book; singular') },
    { text: 'كِتَابَانِ', gloss: T('two books; dual nominative') },
    { text: 'كِتَابَيْنِ', gloss: T('two books; dual accusative and genitive') },
    { text: 'كِتَابَتَانِ', gloss: T('two books; feminine dual') },
    { text: 'قَلَمَانِ', gloss: T('two pens; the {ن} of the plural is still there') },
    { text: 'أَنْتُمَا', gloss: T('you two') },
    { text: 'هُمَا', gloss: T('the two; no distinction of sex') },
    { text: 'بَيْنَهُمَا', gloss: T('between the two; the dual inside the suffix') },
    { text: 'كَتَبَا', gloss: T('the two wrote') },
  ],
  tables: [
    {
      caption: T('The dual in the noun'),
      head: [T('Gender'), T('Singular'), T('Dual nominative'), T('Dual accusative/genitive')],
      rows: [
        [T('masculine'), 'كِتَابٌ', 'كِتَابَانِ', 'كِتَابَيْنِ'],
        [T('feminine'), 'كِتَابَةٌ', 'كِتَابَتَانِ', 'كِتَابَتَيْنِ'],
        [T('broken plural'), 'قَلَمٌ', 'قَلَمَانِ', 'قَلَمَيْنِ'],
      ],
    },
    {
      caption: T('The dual in the verb and the pronoun'),
      head: [T('Person'), T('Pronoun'), T('Verb'), T('Note')],
      rows: [
        [T('1st plural'), 'نَحْنُ', 'كَتَبْنَا', T('same ending as the plural')],
        [T('2nd singular'), 'أَنْتَ', 'كَتَبْتَ', T('no dual')],
        [T('2nd dual'), 'أَنْتُمَا', 'كَتَبْتُمَا', T('dual visible')],
        [T('3rd masc. dual'), 'هُمَا', 'كَتَبَا', T('dual visible')],
        [T('3rd fem. dual'), 'هُمَا', 'كَتَبَتَا', T('same pronoun, verb with {ـَتْ}')],
      ],
    },
    {
      caption: T('Where the dual reappears'),
      head: [T('Construction'), T('Form'), T('Gloss')],
      rows: [
        [T('dual pronoun'), 'هُمَا', T('the two')],
        [T('dual possessive'), 'كِتَابُهُمَا', T('the book of the two')],
        [T('preposition plus dual'), 'بَيْنَهُمَا', T('between the two')],
        [T('preposition plus dual'), 'عَنْهُمَا', T('about the two')],
        [T('both'), 'كُلَّاهُمَا', T('both of them')],
        [T('dual imperfect'), 'تَكْتُبَانِ', T('you two write')],
      ],
    },
  ],
};
