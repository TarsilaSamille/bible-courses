import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('The adverb: position and auxiliaries'),
  subtitle: T('I have always wanted it — the most tested rule'),
  section: T('Adverbs'),
  body: C(`## Every adverb has its place

The adverb of **manner** comes after the verb: {He speaks slowly}, {She sings beautifully}, {They work hard}. With an object, the adverb usually sits between verb and object, or after the object, and both are acceptable: {He read the book quickly} and {He quickly read the book}.

The adverb of **place** and that of **time** come before the verb: {He lives here}, {She left yesterday}, {They arrive tomorrow}. Portuguese does the same, and that is why this part gives no trouble.

The difference that separates a Portuguese speaker is the adverb of **frequency**: {always}, {never}, {often}, {usually}, {sometimes}, {rarely}, {seldom}. It goes neither before nor after the main verb: it goes **after the auxiliary**.

## After the auxiliary, not before

{I have always wanted it} is correct. {I always have wanted it} sounds like a foreigner's sentence, and {I always wanted it} is a different sentence with a different meaning: in the second one {always} is tied to the moment of wanting, and in the first it covers the moment of wanting **and the wanting that goes on**.

The same holds for {never}: {He has never seen the sea} and {He never saw the sea} are not the same sentence. The first says he still has not seen it; the second says he did not see it at some point in the past, and nothing stops him from seeing it later.

John 6:35 in the KJV uses the rule with {shall}: {he that believeth on me shall never thirst}. The {never} comes after the auxiliary and before the main verb, which is exactly the position a Portuguese speaker usually gets wrong.

## When there are two verbs

When a clause has two coordinated verbs, the adverb sits between them: {He quietly closed the door and left}. The adverb describes the first verb, and the position says so.

The commonest case of all is the negation in the middle: {I do not think so}, {I do not believe he is right}, {He did not come}. The auxiliary opens the way for {not}, and the order is **auxiliary, {not}, main verb**. Writing {I don't think} is right; writing {I not think} breaks the sentence.

## Focus and inversion

Occasionally the adverb is placed at the front for emphasis, and the verb follows the auxiliary: {Only then did he understand}, {Never have I seen such a thing}. It is a register feature, commoner in formal writing and in the KJV than in speech, and a learner only needs to recognize it.`),
  vocab: [
    V('slowly', 'slowly', 'slowly'),
    V('beautifully', 'beautifully', 'beautifully'),
    V('quietly', 'quietly', 'quietly'),
    V('lives here', 'live', 'lives here'),
    V('left yesterday', 'leave', 'left yesterday'),
    V('always', 'always', 'always'),
    V('never', 'never', 'never'),
    V('often', 'often', 'often'),
    V('usually', 'usually', 'usually'),
    V('sometimes', 'sometimes', 'sometimes'),
    V('rarely', 'rarely', 'rarely'),
    V('seldom', 'seldom', 'seldom'),
    V('have wanted', 'want', 'have wanted'),
    V('have seen', 'see', 'have seen'),
    V('shall never thirst', 'thirst', 'shall never thirst'),
    V('do not think', 'think', 'do not think'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb of manner comes after the verb; the adverbs of place and time come before it.',
      ),
    },
    {
      n: '2',
      text: T('The adverb of frequency comes after the auxiliary: I have always wanted it.'),
    },
    {
      n: '3',
      text: T(
        'With two coordinated verbs the adverb sits between them: he quietly closed the door and left.',
      ),
    },
    { n: '4', text: T('In negation the order is auxiliary, not, main verb: I do not think so.') },
    {
      n: '5',
      text: T(
        'An adverb at the front of the sentence inverts the auxiliary: Only then did he understand.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 6:35 has shall never thirst: the never after the auxiliary and before the main verb. It is the position that separates a reader who understood the rule from one who only memorized.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes I always have wanted it, the problem is order and not tense: they understood the present perfect and did not understand where the adverb goes.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('he speaks slowly') },
    { text: '{He lives here}', gloss: T('he lives here') },
    { text: '{I have always wanted it}', gloss: T('I have always wanted it — correct position') },
    { text: '{I always wanted it}', gloss: T('I always wanted it — past only, different meaning') },
    { text: '{He has never seen the sea}', gloss: T('he has never seen the sea') },
    { text: '{He never saw the sea}', gloss: T('he did not see the sea that day') },
    {
      text: '{he that believeth on me shall never thirst}',
      gloss: T('he that believeth on me shall never thirst'),
    },
    {
      text: '{He quietly closed the door and left}',
      gloss: T('he closed the door quietly and left'),
    },
    { text: '{I do not think so}', gloss: T('I do not think so') },
    { text: '{Only then did he understand}', gloss: T('only then did he understand') },
  ],
  tables: [
    {
      caption: T('Position by adverb type'),
      head: [T('Type'), T('Where it goes'), T('Example')],
      rows: [
        [T('manner'), T('after the verb'), '{He speaks slowly}'],
        [T('place'), T('before the verb'), '{He lives here}'],
        [T('time'), T('before the verb'), '{She left yesterday}'],
        [T('frequency'), T('after the auxiliary'), '{I have always wanted it}'],
        [T('degree'), T('before the adjective'), '{a very good book}'],
      ],
    },
    {
      caption: T('Frequency: the order tests ask for'),
      head: [T('Correct'), T('Wrong'), T('Why')],
      rows: [
        [
          '{I have always wanted it}',
          '{I always have wanted it}',
          T('the adverb follows the auxiliary'),
        ],
        ['{He has never seen it}', '{He never has seen it}', T('the adverb follows the auxiliary')],
        ['{She has often tried}', '{She often has tried}', T('the adverb follows the auxiliary')],
        ['{They had already left}', '{They already had left}', T('it holds for every auxiliary')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('I always have wanted it'),
      T('I have always wanted it'),
      T('I have wanted always it'),
      T('Always I have wanted it'),
    ],
    answer: 1,
    hint: T('The adverb of frequency comes after the auxiliary verb.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Put it in the right place: 'He has ___ seen the sea.'"),
      answer: 'never',
    },
    { kind: 'fill', prompt: T("Negation: 'I ___ think so.'"), answer: 'do not' },
    {
      kind: 'match',
      prompt: T('Match the adverb type to its position.'),
      pairs: [
        { a: T('manner'), b: T('after the verb') },
        { a: T('place'), b: T('before the verb') },
        { a: T('frequency'), b: T('after the auxiliary') },
        { a: T('degree'), b: T('before the adjective') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('In which sentence is the adverb in focus position?'),
      options: [
        T('He quietly closed the door and left'),
        T('Only then did he understand'),
        T('She left yesterday'),
        T('He speaks slowly'),
      ],
      answer: 1,
    },
  ],
};
