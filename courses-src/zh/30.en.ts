import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Reading'),
  title: T('Reading Proverbs: pairs of verses and the book of few words'),
  subtitle: T(
    'A verse of Proverbs is half a sentence, and the whole book is rebuilt out of a few dozen nouns',
  ),
  body: C(`
## A book where nobody speaks

In Genesis someone speaks and someone answers. In Proverbs there is nobody. There is no narrator, no dialogue, and not one line carries the "and he said" that opens every scene of the Old Testament. Each verse is a statement about two things, and each thing has two faces.

**The first verse of the book is the model.** The Union Version writes {zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu}: "the wise son makes the father glad, the foolish son fills the mother with grief". The semicolon separates two complete sentences, not one sentence in two parts. The second comes back in the following verse, almost word for word, with the same message and almost the same words. Anyone who reads one verse has read half, and anyone who translates verse by verse produces a Portuguese that looks like a repeated text — because it is.

## The repetition the translator did not correct

A translator with more fluency would render the Hebrew better. He would trade the second "the foolish son fills the mother with grief" for a paraphrase, so that Portuguese would not repeat itself, and the book would gain in fluency and lose the whole argument. The repetition is the proof that the book is talking about a rule and not about two concrete cases.

And the pattern repeats all through Proverbs: one verse states the rule, the next applies the rule to another case, and the pair is what carries the meaning. This holds for almost every chapter, and it holds in particular for chapters ten to thirteen, where the book alternates without pause between {zhìhuì zhī zǐ} and {yúmào zhī zǐ}, between {zhìhuì rén} and {yúmào rén}, and the difference between the two names is the whole argument of each pair.

**A verse of Proverbs is not a sentence: it is half a sentence, and the pair of verses is the unit of reading.**

## The noun comes back, the verb changes

Here is the rule of construction of the book, and it is simple to state and hard to apply. The pair of verses in Mandarin almost always brings the same two nouns, one in each half, and the verb is what changes from one side to the other.

**Read Proverbs 10:1 again and look only at the verbs.** In the first half the verb is {shǐ}, "to make", and in the second it is {jiào}, "to fill, to cause". The construction is exactly the same on both sides: son, verb, father or mother. The noun {zhī zǐ}, "the son", comes back in both halves; the pair {fùqīn} and {mǔqīn} swaps places; and the two verbs are two verbs. The grammar of the sentence is identical on both sides and the sense is opposite, and Mandarin has nothing that says so.

The same design appears in Proverbs 11:14, with counsel on one side and ruin on the other, and in every chapter of the book with a different pair of nouns. Anyone who does not know the book reads the two sides as a repetition, and that is why reading by construction is compulsory: the two sentences are equal in grammar and opposite in sense.

Someone translating from Portuguese writes "and where there is much counsel there is safety", and the whole construction loses what the two verbs were doing. Reading by construction, the second half turns into a question to the reader: and in your case, which of the two verbs?

The extreme case is the verb leaving one half and entering the other. Where Greek and Hebrew distribute two symmetric verbs, Mandarin sometimes leaves one half with the noun alone and takes the whole verb into the other. The pair keeps working, and the asymmetry is a choice of the translator, not a failure.

## The word bank and the word that is worth two

The whole book is rebuilt out of a few dozen nouns: {xīn}, the heart, {kǒu}, the mouth, {shǒu}, the hand, {yǎn}, the eye, {jiā}, the house, {xiōng}, the brother, {fù}, the father, {zǐ}, the son, {qī}, the wife, {jīn}, the gold, {huǒ}, the fire, {shuǐ}, the water, {lù}, the way. The verbs are even fewer: {shī}, to lose, {dé}, to gain, {zhī}, to rule, {shǒu}, to guard, {zǒu}, to walk, {jiàn}, to see.

And there is a side effect the reader has to know. Because the bank is small, the same Mandarin word comes back in proverbs whose Hebrew original has nothing to do with each other. {shēngmìng} and {xìngmìng} are the two Chinese words for "life": the first is life as duration, the second is life as destiny. They are the same {mìng} with two prefixes, and Hebrew also has two distinct words. Translating from Mandarin into Hebrew word by word, without looking at the original, produces false equivalences.

The same goes for {lù}: in one verse it is the way that is walked, in the next it is the manner of life. {xīn} is the heart in one verse and the mind in the next. The test is the other noun of the half: if the other noun is concrete, the value is concrete; if it is another abstract term, the value is abstract.

The reading procedure fits in four steps, and it holds for the Psalms too. Read four verses at a time. Find the two nouns that oppose each other. See which verb stayed in each half. Then ask what the second half does to the first, and that question, not the translation of each word, is what produces the sense of a chapter.`),
  vocab: [
    V('zhìhuì', '智慧', 'wisdom (zhìhuì)'),
    V('yúmào', '愚昧', 'foolishness (yúmào)'),
    V('fù', '父', 'father (fù)'),
    V('mǔ', '母', 'mother (mǔ)'),
    V('kuàilè', '快樂', 'gladness (kuàilè)'),
    V('yōuchóu', '忧愁', 'grief, distress (yōuchóu)'),
    V('shǐ', '使', 'to make, to cause (shǐ)'),
    V('jiào', '叫', 'to fill, to cause; and to shout (jiào)'),
    V('xīn', '心', 'the heart; the noun that appears most in the book (xīn)'),
    V('kǒu', '口', 'the mouth; and what the mouth does (kǒu)'),
    V('lù', '路', 'the way; and manner of life, in the Proverbs (lù)'),
    V('bì', '必', 'surely; adverb of necessity (bì)'),
    V('shēngmìng', '生命', 'life, as duration (shēngmìng)'),
    V('xìngmìng', '性命', 'life, as destiny (xìngmìng)'),
    V('dé', '得', 'to gain, to obtain (dé)'),
    V('shī', '失', 'to lose (shī)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A verse of Proverbs is half a sentence: read two at a time, and the semicolon marks the passage from one half to the other.',
      ),
    },
    {
      n: '2',
      text: T(
        'Proverbs has no narrator and no dialogue: not one line carries the "and he said" that opens the scenes of the Old Testament.',
      ),
    },
    {
      n: '3',
      text: T(
        'The literal repetition between consecutive verses comes from the Hebrew wording, and Mandarin preserves it instead of paraphrasing.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the pair of verses the noun repeats and the verb changes; the verb is what carries the contrast.',
      ),
    },
    {
      n: '5',
      text: T(
        'One Mandarin word can be worth two Hebrew words: {shēngmìng} and {xìngmìng} are the two versions of "life".',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the translation repeats'),
      text: T(
        'Repeating is not a weakness of the translator: it is the argument. One verse states the rule, the next applies the rule to another case, and a reader who gets both in paraphrased Portuguese loses the proof that it is the same rule. A faithful translation of Proverbs looks badly written in Portuguese, and that appearance matches the original.',
      ),
    },
    {
      label: T('The verb that leaves one half'),
      text: T(
        'In some pairs Mandarin leaves one half with the noun alone and takes the whole verb into the other. The pair keeps working and nothing is missing. The asymmetry shows up in the Psalms too, and it is a choice of rhythm on the translator part, not an omission: what changes is the cadence of speech, not the sense.',
      ),
    },
  ],
  examples: [
    {
      text: '智慧之子使父親快樂；愚昧之子叫母親憂愁',
      gloss: T(
        'zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu — the wise son makes the father glad; the foolish fills the mother with grief (Prov 10:1)',
      ),
    },
    {
      text: '使',
      gloss: T('shǐ — to make, to cause: the verb of the first half of Proverbs 10:1'),
    },
    {
      text: '叫',
      gloss: T('jiào — to fill, to cause: the verb of the second half, with the same construction'),
    },
    { text: '生命', gloss: T('shēngmìng — life as duration: what runs and ends') },
    { text: '性命', gloss: T('xìngmìng — life as destiny: what can be lost all at once') },
    {
      text: '口',
      gloss: T('kǒu — the mouth; and what is said through it, and what is eaten through it'),
    },
    { text: '路', gloss: T('lù — way; and manner of life, and what one does with one life') },
    {
      text: '當',
      gloss: T('dāng — in the case of, when; and what one ought to do with what one has'),
    },
  ],
  tables: [
    {
      caption: T('The anatomy of a pair of verses'),
      head: [T('Part'), T('What it brings'), T('Example'), T('Role')],
      rows: [
        [
          T('first half'),
          T('noun, verb, noun'),
          T('{zhìhuì zhī zǐ shǐ fùqīn kuàilè}'),
          T('the rule'),
        ],
        [
          T('second half'),
          T('opposite noun, verb, noun'),
          T('{yúmào zhī zǐ jiào mǔqīn yōuchóu}'),
          T('the application'),
        ],
        [T('the whole pair'), T('both halves together'), T('{zhìhuì … yúmào}'), T('the contrast')],
      ],
    },
    {
      caption: T('One word, two values'),
      head: [T('Word'), T('One value'), T('Another value'), T('Test')],
      rows: [
        [
          T('{xīn}'),
          T('the heart, the inside'),
          T('the mind, the understanding'),
          T('the other noun decides the value'),
        ],
        [
          T('{lù}'),
          T('the way that is walked'),
          T('the manner of life'),
          T('the other noun is concrete or abstract'),
        ],
        [
          T('{shēngmìng}'),
          T('life as duration'),
          T('life as destiny: {xìngmìng}'),
          T('the same {mìng} with two prefixes'),
        ],
        [
          T('{kǒu}'),
          T('the mouth, the organ'),
          T('what is said through it'),
          T('the neighbouring verb says which'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {智慧之子使父親快樂；愚昧之子叫母親憂愁}, what changes between the two halves?'),
    options: [
      T('the noun {zhī zǐ} comes back, and the verb and the object change'),
      T('the noun changes and the verb comes back'),
      T('the subject changes, because the second half brings another'),
      T('the degree adverb changes value'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the verb of the first half of Proverbs 10:1: 智慧之子____父親快樂'),
      answer: '使',
    },
    {
      kind: 'match',
      prompt: T('Match the Mandarin word to the pair of values it covers'),
      pairs: [
        { a: T('{shēngmìng}'), b: T('life as duration') },
        { a: T('{xìngmìng}'), b: T('life as destiny') },
        { a: T('{lù}'), b: T('way and manner of life') },
        { a: T('{xīn}'), b: T('heart and mind') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Why does the second half of a verse of Proverbs usually invert the noun and the verb of the first?',
      ),
      options: [
        T('because the noun repeats and the verb is what changes'),
        T('because the second half is a question to the reader'),
        T('because the semicolon inverts the sentence'),
        T('because the translator wanted variety of style'),
      ],
      answer: 0,
    },
  ],
};
