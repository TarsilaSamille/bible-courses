import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronouns'),
  title: T('Two series of pronouns, and the art of saying this and that'),
  subtitle: T(
    'The choice between "I" and "you", and between "this" and "that", is not style: it is grammar, and it is where biblical speech shows what it is doing',
  ),
  body: C(`
## Two series: who speaks and who listens

Portuguese has one series of pronouns. Japanese has two, and the choice between them is not preference: the speaker places himself in a defined relation to the listener.

The **humble** series is the speaker talking about himself and about his own work: {watashi} is the standard form, and waga ("my", placed in front, for one's own work) is the most lowered of all. The **polite** series is the speaker in relation to the listener: {anata} is the respectful standard form.

One cultural detail the reader needs: omae is today irony or contempt, the "you" said from above. It was the ordinary word in the Middle Ages and became a comic gag. And {kimi} is "you" in two directions: warm between friends, and distantly respectful about things that already belong to someone. In none of these cases does a speaker have to belittle himself; Japanese draws the distinction because the language is built that way.

## This and that: the demonstrative places

Portuguese sorts "este/esse/aquele" by time of conversation. Japanese sorts by **distance from the speaker**, and that distinction is what makes "this" and "that" in the Bible sound located in space.

{kore} is this: near me, in my field. {sore} is that: near you, in the listener's field. {are} is that: far from both of us. {kono} is this one and {sono} is that one, but neither measures distance: both point at something **already mentioned**, which is why they mean "this one, the one belonging to you" and "that one, the one we spoke of".

The same verb of being produces three different "here"s. {koko} is the fixed place, where I am. kochira is direction: "this way", "over here". {kore} is the thing, not the place: "this". Rendering all three as "here" loses the information.

## The pronoun that can vanish

Possession is marked by the particle {no}: "my book" is {watashi} no hon. And the pronoun can be dropped when the particle already carries it: {no} hon is "his book" or "her book".

That dropping is routine, not ornament. In almost every Japanese verb the subject can disappear, because the verb is what holds the sentence up: it is what says what happens, and the context completes the rest. {kare} can go just as easily. A reader hunting for a pronoun on every line will lose the sentence: what is there is the particle.

There is also no gender and no number. "He" and "she" are the same word, {kare}; {kanojo} serves both as well. Mandarin, which also does not mark gender, still requires a third person pronoun even when the subject is obvious; in Japanese {kare} simply need not appear.

## John 1:1 and John 15:5

John 1:1 says "in the beginning WAS the Word". Translated into Japanese, the verb stays in kana and the pronoun disappears: the verb is what sustains the sentence, and the translator trusted it. That is the rule of the first lesson applied to a verse: what changes script is what changes function.

John 15:5 is the other extreme: "I AM the Vine", with an emphatic pronoun in the Greek. Japanese renders it with watashi, or with {boku}, which is more intimate, warmer, closer. The choice of pronoun in the 1987 Japanese translation is a real and moving detail: the translator decided how near Jesus speaks of himself. A first person pronoun is not just a word about God; it is a decision about his voice.
`),
  vocab: [
    V('watashi', '私', 'I (neutral, polite, standard)'),
    V('ore', '俺', 'I (masculine, colloquial, not very polite)'),
    V('boku', '僕', 'I (masculine, intimate)'),
    V('anata', 'あなた', 'you (polite, respectful)'),
    V('kimi', '君', 'you (intimate between friends, or respectful)'),
    V('kare', '彼', 'he and she — the same word'),
    V('kanojo', '彼女', 'she; also genderless, with a more distant tone'),
    V('kore', 'これ', 'this: near me'),
    V('sore', 'それ', 'that: near you'),
    V('are', 'あれ', 'that: far from both of us'),
    V('kono', 'この', 'this one: already mentioned'),
    V('sono', 'その', 'that one: already mentioned'),
    V('koko', 'ここ', 'here: the place where I am'),
    V('no', 'の', 'of; possessive particle (no)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'There are two series: humble, the speaker talking about himself, and polite, the speaker in relation to the listener. Switching series changes the social meaning of the sentence.',
      ),
    },
    {
      n: '2',
      text: T(
        '{watashi} is the standard "I"; {ore} and {boku} are colloquial and not very formal, and {boku} is the most intimate of the three.',
      ),
    },
    {
      n: '3',
      text: T(
        '{kore}, {sore} and {are} measure distance from the speaker; {kono} and {sono} measure nothing — they point at what has already been mentioned.',
      ),
    },
    {
      n: '4',
      text: T(
        'Possession is {no}: "my book" is {watashi} no hon. With the particle, the pronoun can vanish: {no} hon is "his book".',
      ),
    },
    {
      n: '5',
      text: T(
        'There is no gender and no number, and the subject can be dropped: the verb is what holds the sentence up.',
      ),
    },
  ],
  notes: [
    {
      label: T('Belittling yourself is not courtesy, it is grammar'),
      text: T(
        'A speaker of Portuguese says "I am going" without diminishing himself. Japanese makes that distinction all the time, and in formal contexts the speaker places himself below the listener. That is why waga — "my", for the work of one\'s own — is humbler than {watashi}.',
      ),
    },
    {
      label: T('The weight of omae'),
      text: T(
        'omAe, which is written with the same characters as {ore}, is today irony or contempt — the opposite of {anata}. It was the ordinary form in the Middle Ages and became a joke in comedy and manga.',
      ),
    },
  ],
  examples: [
    { text: '私の本', gloss: T('watashi no hon — my book') },
    {
      text: '本を読みます',
      gloss: T('hon o yomimasu — I will read the book; the subject pronoun was dropped'),
    },
    { text: 'これは私のです', gloss: T('kore wa watashi no desu — this is mine') },
    {
      text: '初めにおいてことばがあった',
      gloss: T('hajime ni oite kotoba ga atta — in the beginning was the Word'),
    },
    {
      text: '僕は真の樹である',
      gloss: T('boku wa mak no ki de aru — I am the true vine; the "I" of Jesus in {boku}'),
    },
  ],
  tables: [
    {
      caption: T('The pronouns, by register'),
      head: [T('Pronoun'), T('Gender'), T('Register'), T('Nuance')],
      rows: [
        [T('{watashi}'), T('neutral'), T('polite, standard'), T('works in any situation')],
        [
          T('{ore}'),
          T('masculine'),
          T('colloquial, direct'),
          T('the "I" of someone without ceremony'),
        ],
        [
          T('{boku}'),
          T('masculine'),
          T('intimate'),
          T('warmer; it is the "I" of Jesus in the translation'),
        ],
        [
          T('{anata}'),
          T('neutral'),
          T('polite, respectful'),
          T('the distance of someone not close'),
        ],
        [
          T('{kimi}'),
          T('neutral'),
          T('intimate or distant'),
          T('among friends, or respectful about what is already yours'),
        ],
        [T('{kare}'), T('none'), T('neutral'), T('"he" and "she" are the same word')],
      ],
    },
    {
      caption: T('The demonstratives by distance'),
      head: [T('Word'), T('Where the thing is'), T('When it is used')],
      rows: [
        [T('{kore}'), T('near me'), T('what I point at or touch')],
        [T('{sore}'), T('near you'), T('what stands in front of the listener')],
        [T('{are}'), T('far from both'), T('what is far away, or left behind')],
        [T('{kono}'), T('no position'), T('already mentioned: "this one"')],
        [T('{sono}'), T('no position'), T('already mentioned: "that one"')],
      ],
    },
    {
      caption: T('Three words for "here"'),
      head: [T('Word'), T('Sense'), T('Example')],
      rows: [
        [T('{koko}'), T('place'), T('"it is here"')],
        [T('kochira'), T('direction'), T('"this way", "over here"')],
        [T('{kore}'), T('thing, not place'), T('"this"')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {これは私のです}, "this" points at what near whom?'),
    options: [
      T('{kore} — near me'),
      T('{sore} — near you'),
      T('{are} — far from both'),
      T('{kono} — already mentioned'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "my book": 私____本'),
      answer: 'の',
    },
    {
      kind: 'match',
      prompt: T('Match the demonstrative to the position of its referent'),
      pairs: [
        { a: T('{kore}'), b: T('near me') },
        { a: T('{sore}'), b: T('near you') },
        { a: T('{are}'), b: T('far from both') },
        { a: T('{sono}'), b: T('already mentioned') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Japanese "he" and "she" are the same word. Which is it?'),
      options: [T('{kare}'), T('{kanojo}'), T('{watashi}'), T('{kimi}')],
      answer: 0,
    },
  ],
};
