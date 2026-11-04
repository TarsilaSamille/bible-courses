import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('The whole sentence, in order'),
  subtitle: T('subject, verb, object — the structure the rest rests on'),
  section: T('Syntax'),
  body: C(`## Three positions, and no options

The order of the English sentence is **subject, verb, object**, and it does not vary. {The Lord is my shepherd}, {Jesus went to the city}, {They took the boat}.

Portuguese allows the order to be inverted for purpose ({I brought the book I asked for}) and for topicalization ({The book, they brought yesterday}). English allows both, but only when the inversion is marked: by a preposition, by {it}, or by a time expression. Without a mark the order goes back to the default.

Genesis 1:3 in the KJV shows the marked inversion: {And God said, Let there be light}. After a verb of saying the order inverts and the pronoun {there} takes the subject position. That is why the verse sounds strange to anyone who has not met the construction.

## Negation opens the way for the auxiliary

Every negation in English runs through an auxiliary. Present and past use {do}: {I do not go}, {I did not go}. The perfect uses {have}: {I have not gone}. The future uses {will}: {I will not go}. The modals use the modal itself: {I cannot go}, {She must not go}.

In every case the order is the same: **auxiliary, {not}, main verb**. There is no alternative position, and Portuguese offers none either: negation there follows the verb, which is why a learner writes {I not go}.

When the main verb is a whole clause, the {not} stays between the auxiliary and the verb and the rest of the clause goes to the end: {I do not know what he wants}, never {I do not know what he wants not}.

## The question inverts the auxiliary

A yes-or-no question puts the auxiliary **before** the subject: {Do you believe}, {Did he come}, {Have they finished}, {Will she go}. The auxiliary moves up and the rest of the order stays as it was.

A wh-question puts the question word in the object slot and keeps the auxiliary in front: {Where do you live}, {What did he say}, {When will they arrive}. Translating "Onde você mora?" and writing {Where you live} leaves the sentence with no auxiliary at all.

A tag question repeats the inverted auxiliary at the end of the sentence: {You believe, do you?}, {He is not here, is he?}. The tag is not a new question; it is the same inversion, moved to the end.

1 John 1:5 inverts the order for a different reason: {If we love one another, God dwelleth in us}. The conditional clause opens the sentence and the main verb {dwelleth} returns to its place in the second half.

## The test of the three columns

To analyze a sentence the procedure is a single one: write the positions on one line and fill them in. {Jesus | went | to the city} is subject, verb, indirect object. {Jesus | went | the city} is subject, verb, direct object. {It | was | Jesus who went} is subject, verb, subject complement, because {It} occupies the subject position and {Jesus} comes after the verb.

The procedure only fails when there is an auxiliary, and then the rule is to count the auxiliary as the verb: {Jesus | has | gone | to the city} has four positions, not three.`),
  vocab: [
    V('subject', 'subject', 'subject'),
    V('verb', 'verb', 'verb'),
    V('object', 'object', 'object'),
    V('do you believe', 'do', 'do you believe'),
    V('did he come', 'do', 'did he come'),
    V('where do you live', 'where', 'where do you live'),
    V('what did he say', 'what', 'what did he say'),
    V('God said', 'say', 'God said'),
    V('let there be light', 'be', 'let there be light'),
    V('If we love one another', 'love', 'If we love one another'),
    V('God dwelleth in us', 'dwell', 'God dwelleth in us'),
    V('has gone', 'go', 'has gone'),
    V('do not know', 'know', 'do not know'),
    V('predicate', 'predicate', 'complement'),
    V('inversion', 'inversion', 'inversion'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Sentence order is subject, verb, object, and it inverts only when the inversion is marked.',
      ),
    },
    {
      n: '2',
      text: T(
        'Every negation runs through an auxiliary, and the order is auxiliary, not, main verb.',
      ),
    },
    {
      n: '3',
      text: T(
        'A yes-or-no question puts the auxiliary before the subject; a wh-question puts the question word in the object slot.',
      ),
    },
    {
      n: '4',
      text: T('A tag question repeats the inverted auxiliary at the end of the sentence.'),
    },
    {
      n: '5',
      text: T(
        'When analyzing a sentence with an auxiliary, the auxiliary counts as the verb and the sentence gains a position.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Genesis 1:3 inverts the order after a verb of saying, and 1 John 1:5 opens with a conditional clause. Both inversions are marks, not exceptions.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        "If a learner's sentence has no auxiliary, neither to negate nor to ask, the missing piece is the one that does the work. It is the same symptom in two contexts.",
      ),
    },
  ],
  examples: [
    { text: '{The Lord is my shepherd}', gloss: T('The Lord is my shepherd') },
    { text: '{And God said, Let there be light}', gloss: T('And God said, Let there be light') },
    { text: '{I do not go}', gloss: T('I do not go') },
    { text: '{I did not go}', gloss: T('I did not go') },
    { text: '{Do you believe}', gloss: T('Do you believe?') },
    { text: '{Where do you live}', gloss: T('Where do you live?') },
    { text: '{What did he say}', gloss: T('What did he say?') },
    { text: '{You believe, do you}', gloss: T('You believe, do you?') },
    {
      text: '{If we love one another, God dwelleth in us}',
      gloss: T('If we love one another, God dwelleth in us'),
    },
    { text: '{Jesus has gone to the city}', gloss: T('Jesus has gone to the city') },
  ],
  tables: [
    {
      caption: T('The canonical order'),
      head: [T('Position'), T('What goes there'), T('Example')],
      rows: [
        [T('1'), T('subject'), '{Jesus}'],
        [T('2'), T('verb'), '{went}'],
        [T('3'), T('indirect object'), '{to the city}'],
        [T('1'), T('subject'), '{The Lord}'],
        [T('2'), T('verb (copula)'), '{is}'],
        [T('3'), T('complement'), '{my shepherd}'],
      ],
    },
    {
      caption: T('The three kinds of question'),
      head: [T('Type'), T('Order'), T('Example')],
      rows: [
        [T('yes or no'), T('auxiliary + subject + verb'), '{Do you believe}'],
        [T('wh-question'), T('question word + auxiliary + subject + verb'), '{Where do you live}'],
        [T('tag'), T('sentence + inverted auxiliary + pronoun'), '{You believe, do you}'],
      ],
    },
    {
      caption: T('When the inversion is legitimate'),
      head: [T('Mark'), T('Resulting order'), T('Example')],
      rows: [
        [T('verb of saying'), T('inverted subject'), '{And God said, Let there be light}'],
        [T('conditional clause'), T('conditional first'), '{If we love, God dwells in us}'],
        [T('there'), T('{there} takes the subject slot'), '{There is no fear}'],
        [T('it as subject'), T('verb after {it}'), '{It was Jesus who went}'],
        [T('negative at the front'), T('inverted auxiliary'), '{Never have I seen such a thing}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which question is correct?'),
    options: [
      T('Where you live?'),
      T('Where do you live?'),
      T('Where you do live?'),
      T('Where live you?'),
    ],
    answer: 1,
    hint: T('The do rises in front of the subject.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete the question: '___ he come?'"), answer: 'Did' },
    {
      kind: 'fill',
      prompt: T("Complete the negation: 'I ___ know the answer.'"),
      answer: 'do not',
    },
    {
      kind: 'match',
      prompt: T('Match the sentence type to the example.'),
      pairs: [
        { a: T('affirmative'), b: '{He came early}' },
        { a: T('negative'), b: '{He did not come early}' },
        { a: T('yes or no'), b: '{Did he come early}' },
        { a: T('wh-question'), b: '{When did he come}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('I not know him'),
        T("I don't know him"),
        T('I know not him'),
        T('I do not know him'),
      ],
      answer: 1,
    },
  ],
};
