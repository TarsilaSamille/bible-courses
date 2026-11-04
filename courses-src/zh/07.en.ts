import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Syntax'),
  title: T('{是} and the subject-predicate sentence'),
  subtitle: T('Not every sentence has a verb, and in Chinese that is normal'),
  body: C(`## A sentence with no verb

After {wǒ} and {nǐ}, Mandarin can say {tā shì shīfu}, "he is a teacher". {shì} is the verb "to be", and it usually translates as "is". But it has a second use, more interesting and very frequent: {shì} **introduces a noun as description**, with no verb anywhere else in the sentence.

{wǒ shì shīfu} is "I am a teacher". {wǒ shì Zhāng} is "I am Zhang". In the second, {Zhāng} is neither a verb nor something predicated of: it is what you say of someone without needing the word "to be".

## Psalm 23 and the sentence with no verb

Psalm 23 says, in the {和合本}, {yēhéhuá shì wǒ de yáng}, "Yahweh is my shepherd". Translated literally, the verb "is" looks thin. But in Mandarin the identifying {shì} is dropped all the time, and the phrase {shì wǒ de yáng} is "shepherd of mine", with no verb at all. All the weight sits in the {de}: {wǒ de} is a short genitive, "my", glued on without a space.

Word-for-word translation produces nonsense. Recognising the noun phrase produces "The Lord is my shepherd" without effort.

## Three sentences that differ only in the verb

{shì} adds a noun as description. Compare: {tā shì shīfu}, he is a teacher; {tā zài nàlǐ}, he is there; and {tā lái le}, he came. The first identifies, the second says where, the third narrates what happened. All three have a verb, but only the first uses {shì}.`),
  vocab: [
    V('shì', '是', 'to be; to identify (shì)'),
    V('de', '的', 'short genitive: of (de)'),
    V('羊', '羊', 'sheep; shepherd (yáng)'),
    V('zài', '在', 'to be at (zài)'),
    V('那里', '那里', 'there, that place (nàlǐ)'),
    V('lái', '来', 'to come (lái)'),
    V('耶和华', '耶和华', 'Yahweh (Yēhéhuá)'),
    V('牧者', '牧者', 'shepherd (mùzhě)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{shì} means "to be" in Portuguese, but in Mandarin it is also a describing verb.'),
    },
    { n: '2', text: T('{de} links possession with no verb: {wǒ de shū} = "my book".') },
    { n: '3', text: T('{shì} identifies, {zài} locates, {lái} narrates — they are not synonyms.') },
  ],
  notes: [
    {
      label: T('Why Psalm 23 misleads in literal translation'),
      text: T(
        '{yēhéhuá shì wǒ de yáng} is a four-word sentence. The Portuguese version adds "is my", three words Chinese does not have. The skill here is recognising the noun phrase, not memorising characters.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — he is a teacher') },
    { text: '我在那里', gloss: T('wǒ zài nàlǐ — I am there') },
    { text: '耶和华是我的牧者', gloss: T('Yēhéhuá shì wǒ de mùzhě — the Lord is my shepherd') },
  ],
  tables: [
    {
      caption: T('Three verbs that are not interchangeable'),
      head: [T('Verb'), T('Question it answers'), T('Example')],
      rows: [
        [T('{shì}'), T('What is he?'), T('{tā shì shīfu} he is a teacher')],
        [T('{zài}'), T('Where is he?'), T('{tā zài nàlǐ} he is there')],
        [T('{lái}'), T('What did he do?'), T('{tā lái le} he came')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我在那里}, what does {在} do?'),
    options: [
      T('Identifies what he is'),
      T('Indicates where he is'),
      T('Marks past time'),
      T('Links possession'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "Yahweh is my shepherd" (耶和华____我的牧者): ____'),
      answer: '是',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the question'),
      pairs: [
        { a: T('{shì}'), b: T('What is he?') },
        { a: T('{zài}'), b: T('Where is he?') },
        { a: T('{lái}'), b: T('What did he do?') },
        { a: T('{的}'), b: T('Whose is it?') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
