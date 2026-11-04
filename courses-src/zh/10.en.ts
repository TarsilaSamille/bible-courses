import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Verb'),
  title: T('Negation: {不} and {没}'),
  subtitle: T('Two words for "not", and the choice between them shows what is being negated'),
  body: C(`
## Chinese negates outside the verb

Portuguese puts "not" before the verb: "I **did not** eat". Chinese puts a character **before** the verb: {wǒ méi chī} is "I did not eat", and {wǒ bù chī} is "I do not eat" — the negation of habit, not of the past.

The position is the same in both: before the verb, glued to it. {bù} and {méi} are particles, not words with meaning of their own. {wǒ bù} alone means nothing; {bù} alone means nothing either.

## Two words, one difference

The difference is time, and nothing else.

- **{bù}** negates present and future. {wǒ bù chī} — "I do not eat". {tā bù shì péngyou} — "he is not my friend".
- **{méi}** negates past and existence. {wǒ méi qù} — "I did not go". {zhèlǐ méi rén} — "there is nobody here".

Using {bù} for a past event is not wrong in a way the listener catches at once — it sounds like someone still learning. The reverse also misfires: {wǒ méi chī} meaning "I am not eating" is acceptable, but "I am not a son" has no shape at all.

## The rule that avoids the mistake

**Verb or noun: {bù}. Adjective, almost always: {bù}. Verb or noun in the past: {méi}.**

In Portuguese the "not" is the same word; in Chinese it changes according to what follows. So {tā bù hǎo} ("he is not good") and {tā méi lái} ("he did not come") are not one construction with words swapped.

## What this changes when reading

Negation is where the translator slips, because Greek is negative constantly — and the {和合本} uses {bù} and {méi} with a consistency that shows when it is translating and when it is adapting. In 1 John 1:9, {rúguǒ wǒmen zì chēng wǒmen méi zuò zuì} — "if we confess that we have not sinned". The construction {méi zuò} is {méi} on a verb, and {zuò} is "to commit": {méi} standing where the Greek has the aorist.

The opposite error is the common one in biblical reading: treating {bù} as if it negated the past, and concluding the event happened. In Chinese present and past are different words, and negation follows the tense of the verb, not the mood of the context.`),
  vocab: [
    V('bù', '不', 'not (before a verb or adjective; present and future)'),
    V('méi', '没', 'not (before a verb or noun; past and existence)'),
    V('shì', '是', 'to be (shì)'),
    V('yǒu', '有', 'to have, there is (yǒu)'),
    V('qù', '去', 'to go (qù)'),
    V('lái', '来', 'to come (lái)'),
    V('hǎo', '好', 'good (hǎo)'),
    V('rén', '人', 'person (rén)'),
  ],
  rules: [
    { n: '1', text: T('Negation comes before the verb: {wǒ bù chī}, never "wǒ chī bù".') },
    { n: '2', text: T('{bù} negates present and future; {méi} negates past and existence.') },
    { n: '3', text: T('A verb or noun in the past takes {méi}: {wǒ méi qù}.') },
    { n: '4', text: T('{bù} before an adjective is the rule: {tā bù hǎo}.') },
    { n: '5', text: T('{bù} and {méi} never stand alone: they are particles.') },
  ],
  notes: [
    {
      label: T('Chinese "to be" has no negative of its own'),
      text: T(
        '{shì} negates with {bù} and keeps its place: {tā bù shì}, never {shì bù}. The position of {bù} is always before the verb.',
      ),
    },
    {
      label: T('The mistake everyone makes once'),
      text: T(
        '{wǒ méi} is "I do not have" — {méi} negating {yǒu}, the verb. {wǒ bù yǒu} means the same but sounds rare: {yǒu} there is not the verb, it is the noun "possession".',
      ),
    },
  ],
  examples: [
    { text: '我不吃', gloss: T('wǒ bù chī — I do not eat (present)') },
    { text: '我沒去', gloss: T('wǒ méi qù — I did not go (past)') },
    { text: '這裡沒人', gloss: T('zhèlǐ méi rén — there is nobody here') },
    { text: '他不是我朋友', gloss: T('tā bù shì péngyou — he is not my friend') },
  ],
  tables: [
    {
      caption: T('The same negation in four tenses'),
      head: [T('Phrase'), T('Particle'), T('Tense negated'), T('English')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('{bù}'), T('present'), T('I do not eat')],
        [T('{wǒ} {méi} {qù}'), T('{méi}'), T('past'), T('I did not go')],
        [T('{wǒ} {bù} {qù}'), T('{bù}'), T('future'), T('I will not go')],
        [T('{zhèlǐ} {méi} {rén}'), T('{méi}'), T('existence'), T('there is nobody here')],
      ],
    },
    {
      caption: T('The same verb with both particles'),
      head: [T('Phrase'), T('Meaning'), T('Tense')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('I do not eat, I am not going to eat'), T('present/future')],
        [T('{wǒ} {méi} {chī}'), T('I did not eat'), T('past')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我沒去}, which particle negates the past?'),
    options: [T('{不}'), T('{沒}'), T('{是}'), T('{去}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "he is not my friend" with the particle: 他____我朋友'),
      answer: '不',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it negates'),
      pairs: [
        { a: T('{不}'), b: T('present and future') },
        { a: T('{沒}'), b: T('past and existence') },
        { a: T('{是}'), b: T('the verb "to be"; does not negate') },
        { a: T('{有}'), b: T('the verb "to have"; falls under {沒}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('To say "there is nobody here", which form?'),
      options: [T('{這裡不人}'), T('{這裡沒人}'), T('{這裡人沒}'), T('{沒這裡人}')],
      answer: 1,
    },
  ],
};
