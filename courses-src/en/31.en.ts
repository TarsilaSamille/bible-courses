import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Reading capstone: Mark 4,35-41 (KJV)'),
  subtitle: T('a great calm — the article, the auxiliary, the adverb and the preposition'),
  section: T('Readings'),
  body: C(`## The passage

Mark 4:35-41 in the KJV is a short text and it is made for this work. In seven verses it carries everything the eighteen lessons have walked through: the obligatory article, the verb with an auxiliary, the position of the adverb and the preposition.

> "And when the even was come, he let them go."
> "And when they were get him into the ship, there was a great calm: but the wind blew, and the waves came into the ship, and the ship began to be filled with water."
> "And Jesus himself was in the ship: and he slept."
> "And they awaked him, and said unto him, Teacher, carest thou not that we perish?"
> "And he arose, and rebuked the wind, and said unto the sea, Peace, be still! and the wind ceased, and there was a great calm."
> "And he said unto them, Why are ye afraid? how is it that ye have no faith?"
> "And when he was come into the ship again, the wind blew: and they were again filled with water."

The right way to read it is phrase by phrase, and each phrase shows one piece. {He let them go} shows the auxiliary {let} with an indirect object. {There was a great calm} shows {there} as the subject and the article in front of a countable noun.

## Where the article is

The article shows up nine times, and all nine are countable singular nouns: {the even}, {the ship}, {a great calm}, {the wind}, {the waves}, {the water}, {the sea}, {the ship again}, {the water}. Not one of them is a plural and not one is a mass in general.

When the noun comes back without an article, it is because it is already settled or because the context is generic: {they awaked him}, {he let them go}. The {the wind} of the first occurrence and the {the wind} of the second are the same noun with the same article, and a reader who writes "the wind" twice is right twice.

## Where the verb with an auxiliary is

There are six auxiliary constructions, and together they show the twelve combinations in use. {Let them go} is {let} plus base. {Were get him into the ship} is {were} plus base, and the {get} is the key to the contour. {Began to be filled} has {began} plus infinitive and {to be} plus participle. {Was in the ship} and {he slept} carry the verb with no auxiliary, and the difference between them is tense.

The contrast the whole course has been building towards sits in {was come into the ship again}. The {was come} is {be} plus participle, and the sense is of a return after an absence. The {has gone} and {has been} pair is the one that shifts meaning.

## The adverb and the preposition

The adverb of the passage is {again}, and it appears twice: {into the ship again} and {were again filled}. In both it comes right after the verb or the auxiliary, which is the position of an adverb of time.

The prepositions of the passage are {into} twice, {with}, {unto} three times and {from}. {Into} marks movement inside, {with} marks instrument or content, and {unto} is the archaic preposition of the KJV, equivalent to contemporary {to}.

{Teacher} in the middle of the sentence in Mark 4:38 is a vocative: it takes no article because it is not a countable noun in the usual sense, and the comma separates it from the speech. **Translating it as "the Master" adds an article the text does not have.**`),
  vocab: [
    V('the even was come', 'come', 'the even was come'),
    V('he let them go', 'let', 'he let them go'),
    V('were get him into the ship', 'get', 'they got him into the ship'),
    V('there was a great calm', 'be', 'there was a great calm'),
    V('the wind blew', 'blow', 'the wind blew'),
    V('began to be filled', 'begin', 'began to be filled'),
    V('was in the ship', 'be', 'was in the ship'),
    V('they awaked him', 'awake', 'they awaked him'),
    V('carest thou not', 'care', 'carest thou not'),
    V('he arose', 'arise', 'he arose'),
    V('rebuked the wind', 'rebuke', 'rebuked the wind'),
    V('Peace, be still', 'be', 'Peace, be still!'),
    V('the wind ceased', 'cease', 'the wind ceased'),
    V('was come into the ship again', 'come', 'was come into the ship again'),
    V('were again filled', 'fill', 'were again filled'),
    V('no faith', 'faith', 'no faith'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In the passage the article appears only before a countable singular noun: the ship, a great calm, the wind, the sea.',
      ),
    },
    {
      n: '2',
      text: T(
        'There is and there was use there as an apparent subject, and the verb agrees with what comes after: there was a great calm.',
      ),
    },
    {
      n: '3',
      text: T(
        'Let, were get, began to be, was come and were filled are auxiliary constructions, and the main verb stays in the base or the participle.',
      ),
    },
    {
      n: '4',
      text: T(
        'Again, an adverb of time, comes after the verb or the auxiliary: into the ship again, were again filled.',
      ),
    },
    {
      n: '5',
      text: T(
        'Unto is the archaic preposition of the KJV and equals contemporary to; {into} and {with} keep their current sense.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Mark 4:39 has a great calm twice, once on entering the storm and once after the rebuke. The noun is the same and the article is the same, and the second occurrence is what proves the first one was settled.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'A reader who translates the passage and writes a different noun each time has swapped the article for the verb "to be". In English the article does not change inside one noun phrase.',
      ),
    },
  ],
  examples: [
    { text: '{he let them go}', gloss: T('he let them go') },
    { text: '{there was a great calm}', gloss: T('there was a great calm') },
    {
      text: '{the wind blew, and the waves came into the ship}',
      gloss: T('the wind blew, and the waves came into the ship'),
    },
    {
      text: '{the ship began to be filled with water}',
      gloss: T('the ship began to be filled with water'),
    },
    {
      text: '{Teacher, carest thou not that we perish}',
      gloss: T('Teacher, carest thou not that we perish?'),
    },
    {
      text: '{And he arose, and rebuked the wind}',
      gloss: T('And he arose, and rebuked the wind'),
    },
    { text: '{Peace, be still}', gloss: T('Peace, be still!') },
    {
      text: '{the wind ceased, and there was a great calm}',
      gloss: T('the wind ceased, and there was a great calm'),
    },
    {
      text: '{Why are ye afraid? how is it that ye have no faith}',
      gloss: T('Why are ye afraid? how is it that ye have no faith?'),
    },
    { text: '{they were again filled with water}', gloss: T('they were again filled with water') },
    { text: '{And when the even was come}', gloss: T('And when the even was come') },
  ],
  tables: [
    {
      caption: T('The passage, verse by verse'),
      head: [T('Verse'), T('Visible structure'), T('What to look at')],
      rows: [
        [
          T('35'),
          T('{And when the even was come, he let them go}'),
          T('temporal clause + auxiliary + base'),
        ],
        [T('36'), T('{there was a great calm}'), T('{there} as subject + article')],
        [T('36'), T('{the ship began to be filled with water}'), T('two auxiliaries chained')],
        [T('37'), T('{Jesus himself was in the ship: and he slept}'), T('verb with no auxiliary')],
        [T('38'), T('{carest thou not that we perish}'), T('negation after the auxiliary')],
        [T('39'), T('{And he arose, and rebuked the wind}'), T('irregular {arose} + {unto}')],
        [T('41'), T('{they were again filled with water}'), T('{again} after the auxiliary')],
      ],
    },
    {
      caption: T('Where each thing is'),
      head: [T('Category'), T('In the passage')],
      rows: [
        [T('article'), '{the ship, a great calm, the wind, the sea}'],
        [T('verb with auxiliary'), '{let them go, were get, began to be, was come, were filled}'],
        [T('adverb'), T('{again}, twice')],
        [T('preposition'), '{into, with, unto, from}'],
        [T('negation'), '{carest thou not, have no faith}'],
      ],
    },
    {
      caption: T('The verbs of the passage'),
      head: [T('Form'), T('Analysis')],
      rows: [
        ['{let them go}', T('auxiliary + indirect object + base')],
        ['{were get him into the ship}', T('{were} + {get} + base + object')],
        ['{began to be filled}', T('two auxiliaries chained')],
        ['{was in the ship}', T('main verb with no auxiliary')],
        ['{he arose}', T('irregular past')],
        ['{was come into the ship again}', T('{be} + participle + preposition + adverb')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T("In 'there was a great calm', what occupies the subject position?"),
    options: [T('a great calm'), T('there'), T('was'), T('calm')],
    answer: 1,
    hint: T('There is an apparent subject: the real subject comes after the verb.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the verb of verse 36: 'the ship began ___ be filled.'"),
      answer: 'to',
    },
    {
      kind: 'fill',
      prompt: T("Identify the preposition of movement: 'the waves came ___ the ship'"),
      answer: 'into',
    },
    {
      kind: 'match',
      prompt: T('Match the construction to the analysis.'),
      pairs: [
        { a: '{he let them go}', b: T('auxiliary + base') },
        { a: '{there was a great calm}', b: T('{there} as subject') },
        { a: '{they were again filled}', b: T('adverb after the auxiliary') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('How many times does the adverb again appear in verse 41?'),
      options: [T('once'), T('twice'), T('three times'), T('not at all')],
      answer: 1,
    },
  ],
};
