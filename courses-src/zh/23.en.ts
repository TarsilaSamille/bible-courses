import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verb'),
  title: T('Verbs in series'),
  subtitle: T(
    'Verbs chained without a conjunction, and the order that says which came first and which is the purpose',
  ),
  body: C(`
## The conjunction that is not there

English needs a word to join two verbs: "I eat and go to sleep". Chinese joins them by juxtaposition: {wǒ chī fàn shuìjiào} means exactly that, with no "and", no comma, and no mark of any kind between the verbs. The absence of a conjunction is not a stylistic economy; it is the mark of the language.

The practical consequence is segmentation. Without spaces, nothing in the writing says where one verb ends and the next begins. {shuìjiào} is a single word: to sleep. But written inside the sentence it can be read as {shuì} + {jiào} exactly as easily as {chī fàn} is read as {chī} + {fàn}, and the boundary is in the ear of the reader, not on the page. It is the same problem as unspaced words, with a new consequence: when two verbs follow each other, you cannot know where the second one starts without understanding the sentence.

## The order of the verbs is the time

In Chinese verb order is not style: it is meaning. The position each verb occupies says when it happens. {chī fàn shuìjiào} is "eat, and then sleep", and the sequence is written into the word order. Reverse it and the meaning changes: {shuìjiào chī fàn} is "sleep, and then eat".

That is not merely a phrase that sounds odd; it is a phrase nobody says. It is the same argument applied to the verb: Chinese order is not free. In English I can say "eat and sleep" or "sleep and eat" and nobody blinks, because the information sits in the verbs. In Chinese the information sits in the order, and for that reason the order does not negotiate.

## When order becomes purpose

There is one case in which the second reading is not absurd, and it is the most useful thing in this section: when the second verb is lighter than the first. {qù mǎi shū} can be read as sequence, "I go, and then I buy a book", but the natural reading is another: to go **for the purpose of** buying a book, exactly like "go buy a book" in English. The second verb is in the service of the first.

Context is what disambiguates, and there is always a clue. {wǒ qù xuéxiào, mǎi shū} puts a place in the middle: I go to school, then I buy the book, two distinct steps. {wǒ qù mǎi shū} has neither place nor duration: going is only the means, and buying is what matters.

The verb of going and coming is the commonest case of this construction, and the easiest to misread: {wǒ qù kàn yīshēng} is "I am going to see the doctor", a single movement, with the doctor as the destination of the movement. It is not "I will go, and then I will see the doctor". Compare {kàn le yīshēng, zài kàn}: here the aspect particle {le} closes the first verb as a complete event, and {zài}, "again", opens the second, and only this arrangement is necessarily a sequence.

And the rule for {le} applies: when the verbs form a chain with a single meaning, the closing mark does not appear. {wǒ qù kàn yīshēng} takes no {le}; {wǒ kàn le yīshēng} does.

## The direction of {lái} and {qù} belongs to the speaker

This is the point that cuts against every intuition of an English speaker. {lái} and {qù} do not describe movement in relation to a fixed place, but in relation to the speaker and the listener.

{wǒ qù kàn nǐ} is "I am going to see you": I move away from you, or from anywhere, in order to reach where you are. {wǒ lái kàn nǐ} is "I have come to see you": I move toward you. If you are the host and I am at the door, {lái} is the right verb even if I have crossed the whole city; if I am already in the same room, {qù} is the verb of departure. What changes is not the distance covered but who is the reference point.

This is also why the two verbs fit so well into a series, and why the direction is settled by the second verb: {qù} {kàn} and {lái} {kàn} mean "go to see" and "come to see", never "go and then see" nor "come and then see".

In Scripture this construction appears where Greek appears as an invitation. John 1:46, in the {和合本}, has {lái kàn}, literally "come and see", two verbs in series with no conjunction. {lái} brings the interlocutor to Jesus; {kàn} is the only thing asked of him. The same gesture appears in Matthew 9:29, {guòlái}, "come here", and in John 4:34, {dào zhèlǐ lái}, "come here".`),
  vocab: [
    V('chī', '吃', 'to eat (chī)'),
    V('shuìjiào', '睡覺', 'to sleep (shuìjiào)'),
    V('mǎi', '買', 'to buy (mǎi)'),
    V('shū', '書', 'book (shū)'),
    V('kàn', '看', 'to see, to look (kàn)'),
    V('yīshēng', '醫生', 'doctor (yīshēng)'),
    V('lái', '来', 'to come (lái) — direction set by the speaker'),
    V('qù', '去', 'to go (qù) — direction set by the speaker'),
    V('le', '了', 'aspect particle for past or occurrence (le)'),
    V('zài', '在', 'again, once more (zài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Two verbs in a row make one sentence: {wǒ chī fàn shuìjiào} has neither conjunction nor comma.',
      ),
    },
    {
      n: '2',
      text: T(
        'Verb order is fixed and meaningful: the first one comes first in time. {shuìjiào chī fàn} is not {chī fàn shuìjiào}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A lighter second verb signals purpose: {qù mǎi shū} is "go and buy", not "go, and then buy".',
      ),
    },
    {
      n: '4',
      text: T(
        '{lái} and {qù} give the direction of the speaker relative to the listener, not relative to a fixed place.',
      ),
    },
    {
      n: '5',
      text: T(
        '{le} closes a complete and distinct verb; verbs chained in a series do not ask for it.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where the word boundary is'),
      text: T(
        'Without spaces, {shuìjiào} is a single word, and so is {chī fàn}: {chī} and {fàn} never stand alone. With chained verbs the problem grows, because every verb in the series can be read in pieces. Segmentation is lesson 4 and it still holds: what separates the words is meaning, not the space.',
      ),
    },
    {
      label: T('A complete sequence takes {le}, a series does not'),
      text: T(
        'If the verbs are separate and complete events, each one takes {le}: {wǒ chī le fàn, shuìjiào le}. If they are a chain with a single meaning — go see, come see, go buy — the series goes without {le}, and it is the absence of the particle that says there was no break between them.',
      ),
    },
  ],
  examples: [
    { text: '我吃飯睡覺', gloss: T('wǒ chī fàn shuìjiào — I eat and go to sleep') },
    { text: '睡覺吃飯', gloss: T('shuìjiào chī fàn — sleep, and then eat (order reversed)') },
    { text: '去買書', gloss: T('qù mǎi shū — go buy a book (for the purpose)') },
    { text: '我來看你', gloss: T('wǒ lái kàn nǐ — I have come to see you') },
  ],
  tables: [
    {
      caption: T('The same order, read two ways'),
      head: [T('Verb order'), T('Sequence reading'), T('Purpose reading')],
      rows: [
        [
          T('{chī fàn} {shuìjiào}'),
          T('I eat, then I sleep'),
          T('I eat, and the second verb is the point'),
        ],
        [T('{shuìjiào} {chī fàn}'), T('I sleep, then I eat'), T('—')],
        [T('{qù mǎi shū}'), T('I go, and then I buy a book'), T('I am going to buy a book')],
        [
          T('{qù xuéxiào mǎi shū}'),
          T('I go to school, then I buy the book'),
          T('I go to school to buy the book'),
        ],
      ],
    },
    {
      caption: T('The direction of {lái} and {qù} belongs to the speaker'),
      head: [T('Where the speaker is'), T('{lái}'), T('{qù}')],
      rows: [
        [
          T('far from the listener, moving toward them'),
          T('{wǒ lái kàn nǐ} — I have come to see you'),
          T('{wǒ qù kàn nǐ} — I am going to see you'),
        ],
        [
          T('in the same room as the listener'),
          T('{wǒ lái kàn nǐ} — I come to see you before leaving'),
          T('{wǒ qù kàn nǐ} — I go to see you, on the way out'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {wǒ qù mǎi shū}, what does the series {qù mǎi shū} mean?'),
    options: [
      T('that I go, and then buy the book'),
      T('that I am going for the purpose of buying the book'),
      T('that I go and buy the book, and then come back'),
      T('that I go, but buy nothing'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I am going to see the doctor": 我____看醫生'),
      answer: '去',
    },
    {
      kind: 'match',
      prompt: T('Match the verb series to what it means'),
      pairs: [
        { a: T('{wǒ chī fàn shuìjiào}'), b: T('I eat, and then I sleep') },
        { a: T('{qù mǎi shū}'), b: T('go buy, for the purpose of buying') },
        { a: T('{wǒ lái kàn nǐ}'), b: T('I have come to see you') },
        { a: T('{wǒ qù kàn yīshēng}'), b: T('I am going to see the doctor') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Chinese, where is the "and" of "I eat and sleep"?'),
      options: [
        T('it is not there: the verbs simply follow one another'),
        T('it comes before the second verb'),
        T('it comes after the first verb'),
        T('it comes once, at the end of the sentence'),
      ],
      answer: 0,
    },
  ],
};
