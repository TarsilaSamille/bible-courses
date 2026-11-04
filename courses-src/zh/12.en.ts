import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Syntax'),
  title: T('Place and location: {在} (zài)'),
  subtitle: T(
    'One word that comes before the place, and Chinese splits what English joins into a single verb',
  ),
  body: C(`
## The preposition that opens the phrase

{bù} and {méi} sit before the verb; {le} sits after it and closes the sentence. **{zài}** goes in before the place, and it belongs to the same family as the two: a word that sticks to whatever comes right after it and opens its own phrase. A preposition in one case, a particle in the other; only the name differs.

{zài} is the preposition of place, and its rule is a single one: **it comes before the word that locates**. {wǒ zài Jiěsù}, "I am in Jerusalem". Subject, preposition, place. The order is the same as in English. The bad news is that in Chinese {zài} never shows up at the end: {wǒ zài le Jiěsù} is wrong, because {le} closes a clause and does not open a phrase of place. And {wǒ Jiěsù zài} is not a Chinese sentence at all. "Jerusalem is" exists neither as a question nor as an answer.

The {le} was a **suffix**: it came in through the back door and stayed at the end. {zài} is a **prefix** that opens the phrase of place right after the subject. Two opposite positions, two different jobs.

## Being in a place asserts that the thing is there

{zài} followed by a word of place says that something is located there, and in saying so it asserts that the thing exists. It is not a neutral adverb like "here" in English; it is an assertion with content.

{Táng zài nàlǐ, shì wǒ de jiā}, "the hall is there, it is my house". The **{shì}** in the second half does not replace the {zài}: both are there, each answering a different question, and the sentence only works because the hall is there and because it is mine. Swap them and it stops working: {Táng shì wǒ de jiā} is "the hall is my house", and {Táng zài wǒ de jiā} means nothing at all.

So negation does not swap either. {Táng bù zài nàlǐ} is "the hall is not there": it denies that it is there, denies its existence in that place. Denying identity takes a different word: {Táng bù shì wǒ de jiā}, "the hall is not my house". The {和合本} uses both, and never confuses one for the other.

{zài} may be **omitted** when the place is obvious or has already been said. {wǒ zài Jiěsù}, then {wǒ zài}, then {wǒ}: each step drops the {zài} and moves nothing else. What cannot happen is omitting it when the place is precisely the information being given; there the {zài} is the sentence.

To ask, Chinese uses one word: {哪里} {nǎlǐ}, "where", and the spoken form {哪儿} {nǎr}, with the same meaning. {nǐ zài nǎlǐ?}, "where are you?", and the question does not disturb the order: {zài} still comes before {nǎlǐ}. Just as with {bù} and {méi}, Chinese here has one word and English has several, "where" and "in what place", and the choice is register, not meaning.

## The same {zài}, now before the verb

The second job of {zài} is the most everyday one, and it uses the same word in the same position: before whatever it governs. What changes is what comes after.

{zài} + word of place = location. {zài} + verb = action in progress: {wǒ zài chī fàn}, "I am eating". One word, two jobs, identical position in both: {zài} opens, and what follows is the content.

The contrast with {le} is worth making. {wǒ chī fàn le} is "I ate", a closed event. {wǒ zài chī fàn} is the same verb without the {le}, with {zài} in front: the same action, now open and under way. And {wǒ zài chī fàn le} joins the two, "I was eating", with the {le} finally saying that it ended. Without {zài}, Chinese has no plain way to say "I am eating": either you say {wǒ chī fàn}, "I eat", habit or future, or you add {zài}.

## Being a thing and being in a place

Here is the hook, and it comes out of a translation. In English, "he is a teacher" and "he is at home" use the same verb, separated only by a preposition. An English speaker does not feel these as two different questions; it is one question, answered two ways.

Chinese feels it, and therefore separates. There are two words, and choosing between them is the work:

- {shì} answers *what is he?*: identity, category, role. {tā shì lǎoshī}, "he is a teacher".
- {zài} answers *where is he?*: location. {tā zài jiā}, "he is at home".

The pocket rule: if the question is "what", it is {shì}; if it is "where", it is {zài}; and if the noun is a place, it is {zài} without hesitation. The English speaker's error is to swap the two, {tā shì nǎlǐ?} and {tā zài lǎoshī}, sentences nobody says, which sound right precisely because English uses one verb for both.

The same contrast shows up in the pair of fixed questions: {nǐ shì shénme rén?}, "what are you?", and {nǐ zài shénme dìfang?}, "what place are you at?". Same word {shénme}, and the entire difference sits in {shì} versus {zài}.

The {和合本} shows its hand in both verses. In Psalm 139:2, {nǐ zhīdào wǒ zuò zài nǎlǐ}, "you know where I sit": the verb {zuò} comes first, and {zài} enters immediately before the word of place, {nǎlǐ}. In Genesis 1:2, {dì zài shuǐmiàn shàng}, "the earth was over the waters": the same {zài}, this time carrying "over the waters", a phrase of place that is not even a proper name. Two translations, the same preposition, the same house.`),
  vocab: [
    V('zài', '在', 'to be in; to be in the middle of doing (zài)'),
    V('shì', '是', 'to be (shì)'),
    V('nǎlǐ', '哪里', 'where (nǎlǐ)'),
    V('nǎr', '哪儿', 'where (nǎr) — spoken form'),
    V('dìfang', '地方', 'place (dìfang)'),
    V('jiā', '家', 'home (jiā)'),
    V('zhīdào', '知道', 'to know (zhīdào)'),
    V('zuò', '坐', 'to sit (zuò)'),
    V('chī', '吃', 'to eat (chī)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{zài} comes BEFORE the word of place: {wǒ zài Jiěsù}. Never at the end of the sentence.',
      ),
    },
    {
      n: '2',
      text: T(
        '{zài} + place asserts that the thing is there — which is why it negates with {bù}: {Táng bù zài nàlǐ}.',
      ),
    },
    { n: '3', text: T('{zài} + verb marks action in progress: {wǒ zài chī fàn}, "I am eating".') },
    {
      n: '4',
      text: T('The question "what is he?" takes {shì}; "where is he?" takes {zài}. Never swapped.'),
    },
    {
      n: '5',
      text: T(
        '{zài} may be left out when the place is obvious or already stated; nothing else in the sentence moves.',
      ),
    },
  ],
  notes: [
    {
      label: T('Chinese does not have your single verb'),
      text: T(
        'English handles "be a teacher" and "be at home" with one verb plus a preposition. Chinese has two words, and {shì} never accepts a word of place: {tā shì jiā} does not exist. If the sentence asks where, {zài} is not optional.',
      ),
    },
    {
      label: T('Where {zài} goes when it is dropped'),
      text: T(
        '{zài} is the only preposition of place in the language, which makes it the most omitted word in Chinese. The omission never changes the construction: only {zài} goes, and the place stays in the same spot in the sentence. And {zài} + verb is almost never omitted — "I am eating" without {zài} does not exist.',
      ),
    },
  ],
  examples: [
    { text: '我在耶路撒冷', gloss: T('wǒ zài Yēlùsālěng — I am in Jerusalem') },
    { text: '他在家', gloss: T('tā zài jiā — he is at home') },
    { text: '我在吃饭', gloss: T('wǒ zài chī fàn — I am eating') },
    { text: '你知道我坐在哪里', gloss: T('nǐ zhīdào wǒ zuò zài nǎlǐ — you know where I sit') },
  ],
  tables: [
    {
      caption: T('Three questions, three constructions'),
      head: [T('Question'), T('Construction'), T('Example')],
      rows: [
        [T('What is he?'), T('{shì}'), T('{tā shì lǎoshī} — he is a teacher')],
        [T('Where is he?'), T('{zài} + place'), T('{tā zài jiā} — he is at home')],
        [T('What is he doing?'), T('{zài} + verb'), T('{tā zài chī fàn} — he is eating')],
        [T('Where am I?'), T('{zài} + {nǎlǐ}'), T('{wǒ zài nǎlǐ} — where am I')],
      ],
    },
    {
      caption: T('Where {zài} may be left out'),
      head: [T('Sentence'), T('What was dropped')],
      rows: [
        [T('{wǒ zài Jiěsù}'), T('nothing: the place is the information')],
        [T('{wǒ zài}'), T('the word of place, already stated')],
        [T('{wǒ}'), T('{zài} too, if the place is obvious')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {你知道我坐在哪里}, what does the construction {在哪里} do?'),
    options: [
      T('marks the place, immediately before the word of place'),
      T('identifies what I am'),
      T('marks past time'),
      T('links possession to me'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "I am in Jerusalem" — the preposition comes before the place: 我____耶路撒冷',
      ),
      answer: '在',
    },
    {
      kind: 'match',
      prompt: T('Match the sentence to the question it answers'),
      pairs: [
        { a: T('{tā shì lǎoshī}'), b: T('What is he?') },
        { a: T('{tā zài jiā}'), b: T('Where is he?') },
        { a: T('{tā zài chī fàn}'), b: T('What is he doing?') },
        { a: T('{tā bù shì lǎoshī}'), b: T('What is he not?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence says "he is at home"?'),
      options: [T('{tā shì jiā}'), T('{tā zài jiā}'), T('{tā zài shì jiā}'), T('{tā zài nǎlǐ}')],
      answer: 1,
    },
  ],
};
