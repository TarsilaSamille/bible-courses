import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verb'),
  title: T('Aspect: the particle {了}'),
  subtitle: T('It does not mark tense — it marks that the situation is over'),
  body: C(`
## {le} comes after the verb

{bù} and {méi} sit before the verb, glued to it. {le} does the opposite: {le} goes after the verb, and {wǒ chī le} is "I ate".

The pair binds what negates to what closes: **what negates goes in before the verb, what closes the situation goes in after it**. {wǒ méi chī le}, "I did not eat", carries both marks in their own places, and swapping either one destroys the phrase. Once negation takes the front and aspect takes the back, the middle of the phrase is free, and that is where time and place go.

## {le} is not tense

The mistake a Portuguese speaker brings along is hunting for a conjugation. In Portuguese the past is inside the verb: "comi", "falou", "parti". In Mandarin the verb {chī} is the same in every situation: {wǒ chī} and {wǒ chī le} use exactly the same word. What changes is the particle, and what it says is not "past": it is that the situation, taken whole, is **complete**.

So the honest contrast is between the two forms without {le}:

- {wǒ chī} — "I eat", and nothing more. It may be what I do every day, or what I would do in some scenario. The action is under way, with no beginning and no end marked.
- {wǒ chī le} — "I ate", and with it: the situation is over. The meal is finished, the topic closes.

A Portuguese speaker translates {wǒ chī} as "I ate" almost by reflex, and loses the information. The same Mandarin serves for "I eat" and for "I ate", and the context chooses between them, not the verb. And the opposite mistake is just as common: writing {le} everywhere, which is what produces the Mandarin of someone still learning, one complete sentence after another.

## When {le} does not appear

Not every closed situation carries the particle. In {wǒ chīfàn shuìjiào}, "I eat, I sleep", there is no {le}, and the phrase is just as complete to the listener.

The rule is **chaining**: when two verbs come in sequence and the second describes the action that follows, clearly ordered after the first, the marking of the second is dispensed with. {wǒ chīfàn} and then {shuìjiào}: the second action already says it comes next, and {le} would only waste ink. The same holds in {tā lái wǒ qù}.

The criterion, in practice, is the linking particle's: when the actions form an ordered chain, Mandarin makes the ordering visible through word position and drops the closing marks. Filling in {le} on every verb of a narrative produces something nobody says.

## {le} after an adjective

After an adjective, {le} changes subject: it does not mark action, it marks **transition**. {wǒ hěn gāoxìng} is "I am glad", a neutral state, nothing new, the same today and tomorrow. {tā gāoxìng le} is "he became glad": there was a before in which he was not, and now he is. The {le} is the proof that something happened, which is why the comparison is worth making: the same word and the same four syllables around it already say everything, and one of them carries the event.

## {le} in the Bible

In the Bible this appears on a verb, in one of the best known verses of the book. John 19:30, in the {和合本}, ends with {chéng le}, "it is accomplished", "it has been fulfilled". {chéng} is "to become, to come to be", and the {le} closes a process: the work is done. The Greek original has no particle at all, {τετέλεσται}, and the {和合本} did not invent a tense that was not there; it marked in Mandarin what the Greek already marked in the verb, which was perfective.

And the same chapter uses a verb, not a noun: in John 4:24, {jìngbài}, "to worship", is a verb, with the noun {zhǔ}, "Lord", as its object. {zhǔ zhī} is literally "the one who is Worshipper". Rendering {jìngbài} as "cult" or "worship" without a verb erases the action. Mark 1:15 has {shíjiān dào le}, "the time has come", where the {le} closes the verb {dào} after a subject who is not the speaker.`),
  vocab: [
    V('le', '了', 'aspect particle: the situation is complete (after a verb or adjective)'),
    V('chī', '吃', 'to eat (chī)'),
    V('shuì', '睡', 'to sleep (shuì)'),
    V('gāoxìng', '高兴', 'glad, delighted (gāoxìng)'),
    V('hěn', '很', 'very (hěn)'),
    V('chéng', '成', 'to become, to be fulfilled (chéng)'),
    V('jìngbài', '敬拜', 'to worship (jìngbài)'),
    V('dào', '到', 'to arrive (dào)'),
  ],
  rules: [
    { n: '1', text: T('Negation goes in before the verb and aspect after it: {wǒ bù} {chī le}.') },
    { n: '2', text: T('{le} after a verb marks the situation as complete, not a tense.') },
    {
      n: '3',
      text: T(
        'Between two chained and ordered actions, {le} does not appear: {wǒ chīfàn shuìjiào}.',
      ),
    },
    { n: '4', text: T('{le} after an adjective is change of state: {tā gāoxìng le}.') },
    {
      n: '5',
      text: T('Without {le}, the verb does not say whether the situation ended: {wǒ chī} is open.'),
    },
  ],
  notes: [
    {
      label: T('Why "comi" and "como" are the same two syllables'),
      text: T(
        'In Portuguese the past is in the form of the verb. In Mandarin the verb {chī} does not change, and the particle is what says the situation is over. Look for the conjugation in Mandarin and you will not find it: Mandarin does not conjugate for the past.',
      ),
    },
    {
      label: T('The trap of the sequence'),
      text: T(
        'Filling in {le} on every verb of a narrative produces Mandarin nobody speaks. In {wǒ chīfàn shuìjiào} the second action is already ordered after the first, and {le} would only get in the way.',
      ),
    },
  ],
  examples: [
    { text: '我吃了', gloss: T('wǒ chī le — I ate; the situation is over') },
    {
      text: '我吃饭 睡觉',
      gloss: T('wǒ chīfàn shuìjiào — I eat and I sleep (a sequence, without {le})'),
    },
    { text: '他高兴了', gloss: T('tā gāoxìng le — he became glad') },
    { text: '成了', gloss: T('chéng le — it is accomplished') },
  ],
  tables: [
    {
      caption: T('The same verb, with and without the particle'),
      head: [T('Phrase'), T('Reading'), T('Nature of the situation')],
      rows: [
        [T('{wǒ} {chī}'), T('I eat'), T('open: habit, action with no marked beginning or end')],
        [T('{wǒ} {chī le}'), T('I ate'), T('closed: the situation reached its end')],
        [T('{tā} {gāoxìng}'), T('he is glad'), T('neutral state, nothing new')],
        [T('{tā} {gāoxìng le}'), T('he became glad'), T('change of state: there was a before')],
      ],
    },
    {
      caption: T('Where the particle goes in, and where it does not'),
      head: [T('Phrase'), T('Does {le} appear?'), T('Why')],
      rows: [
        [
          T('{wǒ bù} {chī le}'),
          T('yes'),
          T('negation at the front, the particle closes the phrase'),
        ],
        [
          T('{wǒ} {méi} {qù le}'),
          T('yes'),
          T('{méi} negates, {le} closes — each mark in its own place'),
        ],
        [T('{wǒ} {chīfàn} {shuìjiào}'), T('no'), T('two chained and ordered actions')],
        [T('{shíjiān} {dào le}'), T('yes'), T('{le} closes the verb after a different subject')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我吃了}, what does the particle {了} mark?'),
    options: [
      T('that the action is past'),
      T('that the situation is complete'),
      T('that it is a habit'),
      T('that it is a negation'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "he became glad" with the particle: 他高兴____'),
      answer: '了',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it does'),
      pairs: [
        { a: T('{了}'), b: T('closes the situation, after the verb') },
        { a: T('{不}'), b: T('negates, before the verb') },
        { a: T('{没}'), b: T('negates the past, before the verb') },
        { a: T('{很}'), b: T('marks degree, before the adjective') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which phrase is correct?'),
      options: [
        T('{我吃饭了 睡觉了}'),
        T('{我吃了饭 睡觉了}'),
        T('{我吃饭 睡觉}'),
        T('{我吃饭 睡觉了}'),
      ],
      answer: 2,
    },
  ],
};
