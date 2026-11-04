import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Verb'),
  title: T('The passive: {被} and {把}'),
  subtitle: T('The passive Chinese almost avoids, and the construction it uses instead'),
  body: C(`
## {被} marks the passive, and the agent comes after

English forms the passive with *be*: "he was beaten". Chinese has no such form. It uses the particle **{bèi}** ({被}) welded to the verb: {tā bèi dǎ le}, "he was beaten". The position is fixed, **subject + {bèi} + verb**, and {bèi} is not a governing preposition: it is a label.

The point almost everyone misses is at the end of the sentence. English puts the agent before the participle, "he was beaten by John". Chinese puts it after the whole verb phrase, or not at all: {tā bèi dǎ le}, full stop, "he was beaten", and nobody knows by whom. When the agent does appear, it appears last: {shū bèi tā dǎ le}, "the book was beaten by him".

So the same information fits in both languages, in opposite positions. English front-loads the agent; Chinese postpones it. Anyone translating from English into Chinese who keeps the agent at the front produces a sentence that sounds like a translation.

## {把}: the pair with {被}

And that is why {bèi} is rare in speech: Chinese almost always says the same thing another way. Where English would reach for the passive, Chinese uses **{bǎ}** ({把}), which pulls the object forward and makes the thing being acted upon the point of the sentence.

{wǒ bǎ shū kàn le}, "I read the book". Subject + {bǎ} + object + verb. The object is what is being dealt with, and Chinese prefers to show the thing rather than the suffering of the subject.

Compare the equivalent passive: {shū bèi wǒ kàn le}, "the book was read by me". The two sentences say the same thing. The second marks that the book underwent the action; the first marks that the book is the object in **focus**. Chinese prefers the first almost always, which is why {bèi} shows up so much in written and expository text, in theological commentary, and so little in everyday speech.

They are two members of a pair, and the choice between them is a choice of focus, not of meaning:

- {bǎ} highlights the object: {wǒ bǎ shū kàn le}, "I read the book".
- {bèi} highlights the subject undergoing the action: {shū bèi wǒ kàn le}, "the book was read by me".

Use {bǎ} when the object is known and already in focus, which in practice is almost always. Use {bèi} when the subject undergoes the action, or when the agent is the important information and needs naming. Both constructions can coexist in one sentence with different subjects: {wǒ bǎ shū kàn le, tā bèi wǒ qù le háng}, "I read the book; he went to the bank for me". One clause with {bǎ}, one with {bèi}: the sentence is not lopsided, because each half highlights what it needs to.

## {被} that makes: the causative use

The most delicate point is that {bèi} also means "to make something happen", and the two readings look almost identical on the surface.

{bèi} + noun = "to be something done by someone": {bèi tā kànjiàn}, "to be seen by him". {wǒ bèi tā pīpíng le}, "I was praised by him". Same word, same position, and nothing in the written form tells you whether the sentence is passive or causative. What decides it is the **nature of the verb**: in {bèi tā kànjiàn}, {tā} is the agent and {kànjiàn}, "see", is the action, and the subject of the sentence is the target. With a noun instead of a verb, the {bèi} construction is almost always causative: {bèi nà lóu} is literally "to be the result of knocking someone down", that is, "to be knocked down by someone"; {bèi shā rén}, "to be killed a murderer", means "to be murdered by someone", and the agent may be left out.

And that is the use the {和合本} prefers when it translates the biblical passive. In Isaiah 53:3, {tā bèi wǒmen de zuì suǒ kǔ}, "he was afflicted by our sins". The {bèi} is passive; the agent, {wǒmen de zuì}, sits in the middle, inside a noun phrase, not at the end where English would put it. The {suǒ} turns the verb {kǔ}, "suffer", into an agent noun, and it is that construction, {bèi} plus nominalised agent plus {suǒ} plus verb, that biblical Chinese uses to mean "was afflicted by". Compare Matthew 27:46, {bèi dīng le}, "he was nailed": the same {bèi}, with no agent at all, because the cross is the implicit agent and naming it would be a scandal.

## Negation with {被} and {把}

Negation comes before the verb, and the position is fixed: {wǒ bù chī}, the particle glued to the verb. With {bèi} and {bǎ} the situation is different, because these two words displace the verb. In {tā bèi dǎ le}, {dǎ} is no longer glued to the subject: a particle stands between them. In {wǒ bǎ shū kàn le}, {kàn} has been pushed past the object. And the negation adjusts: it is still {méi} ({没}), not {bù}, and it enters before the {bèi} or the {bǎ}, {tā méi bèi dǎ}, "he was not beaten", {wǒ méi bǎ shū kàn wán}, "I did not read the whole book". Someone who writes {bù} out of habit where Chinese wants {méi} produces a sentence that sounds odd without anyone being able to say why.`),
  vocab: [
    V('被', '被', 'passive particle; with a noun, "to be done by" (bèi)'),
    V('把', '把', 'particle that highlights the object and comes before the verb (bǎ)'),
    V('打', '打', 'to beat; to do (dǎ)'),
    V('书', '书', 'book (shū)'),
    V('看', '看', 'to see; to read (kàn)'),
    V('罪', '罪', 'sin (zuì)'),
    V('所', '所', 'nominalizer "that which"; agent form of a verb (suǒ)'),
    V('苦', '苦', 'to suffer; to be afflicted (kǔ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The passive is subject + {bèi} + verb: {tā bèi dǎ le}. {bèi} is a label, not a preposition.',
      ),
    },
    {
      n: '2',
      text: T('The agent comes AFTER the verb phrase, or not at all: {shū bèi tā dǎ le}.'),
    },
    {
      n: '3',
      text: T(
        'The {bǎ} construction is subject + {bǎ} + object + verb, and replaces the passive in speech: {wǒ bǎ shū kàn le}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{bǎ} highlights the object; {bèi} highlights the subject undergoing the action. The choice is about focus, not meaning.',
      ),
    },
    {
      n: '5',
      text: T(
        '{bèi} + noun is causative, "to be done by": {bèi tā kànjiàn} is "to be seen by him".',
      ),
    },
  ],
  notes: [
    {
      label: T('The agent never comes first'),
      text: T(
        'English writes "he was beaten by John" and puts the agent up front. Chinese writes {shū bèi tā dǎ le} and puts the agent last. What is new information in English is anticipated; in Chinese it is postponed.',
      ),
    },
    {
      label: T('With {bèi} the negation is {méi}'),
      text: T(
        '{tā méi bèi dǎ} — "he was not beaten". {méi} enters before the {bèi}, not glued to the verb as in lesson 9, and {bù} sounds wrong there: {bèi} and {bǎ} displace the verb, and Chinese settles on the past negation.',
      ),
    },
  ],
  examples: [
    { text: '他被打了', gloss: T('tā bèi dǎ le — he was beaten') },
    { text: '書被他看了', gloss: T('shū bèi tā kàn le — the book was read by him') },
    { text: '我把書看了', gloss: T('wǒ bǎ shū kàn le — I read the book') },
    {
      text: '他被我們的罪所苦',
      gloss: T('tā bèi wǒmen de zuì suǒ kǔ — he was afflicted by our sins (Isaiah 53:3)'),
    },
  ],
  tables: [
    {
      caption: T('The same action in three constructions'),
      head: [T('Sentence'), T('Construction'), T('What is highlighted'), T('English')],
      rows: [
        [
          T('{wǒ kàn le shū}'),
          T('subject — verb — object, the neutral form'),
          T('the action'),
          T('I read the book'),
        ],
        [
          T('{wǒ bǎ shū kàn le}'),
          T('{bǎ}: the object moves up before the verb'),
          T('the object'),
          T('I read the book, book in focus'),
        ],
        [
          T('{shū bèi wǒ kàn le}'),
          T('{bèi}: passive with explicit agent'),
          T('the subject undergoing'),
          T('the book was read by me'),
        ],
      ],
    },
    {
      caption: T('{bèi} and {bǎ} side by side'),
      head: [T('Particle'), T('Position'), T('Highlight'), T('When used')],
      rows: [
        [
          T('{bèi}'),
          T('subject + {bèi} + verb'),
          T('the subject undergoes the action'),
          T('when the agent must be named, or comes after'),
        ],
        [
          T('{bǎ}'),
          T('subject + {bǎ} + object + verb'),
          T('the object is dealt with'),
          T('when the object is already in focus — almost always'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {書被我看了}, what does {bèi} mark?'),
    options: [
      T('The object, pulled forward'),
      T('The subject undergoing the action'),
      T('The negation of the action'),
      T('The tense of the action'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "he was beaten" with the passive particle: 他____打了'),
      answer: '被',
    },
    {
      kind: 'match',
      prompt: T('Match the construction to what it highlights'),
      pairs: [
        { a: T('{bèi}'), b: T('the subject undergoing the action') },
        { a: T('{bǎ}'), b: T('the object in focus') },
        { a: T('agent at the end of the phrase'), b: T('only possible with {bèi}') },
        { a: T('{méi} before {bèi}'), b: T('the negation of the passive') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('To say "I read the book" in the most natural Chinese, which form?'),
      options: [T('{書被我看了}'), T('{我把書看了}'), T('{被書我看了}'), T('{我書看了}')],
      answer: 1,
    },
  ],
};
