import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verb'),
  title: T('The essential verbs'),
  subtitle: T(
    '{chī}, {shuō}, {lái}, {qù}, {yǒu}, {shì}: the verbs that hold almost every sentence up',
  ),
  body: C(`## The verb that does not change

The Mandarin verb does not change to say who speaks or when. {chī} is "eat" in the first person and the third, yesterday and tomorrow: {wǒ chī}, {tā chī}, {zuótiān wǒ chī}. What changes the meaning is not in the verb, it is in the particle that comes after it.

That changes what "essential verb" means. In Portuguese, the essential verb is the one that conjugates in every sentence. In Mandarin, it is the one that carries the meaning and takes the particles: {shì} to be, {yǒu} to have and there to be, {shuō} to say, {tīng} to hear, {kàn} to see, {lái} to come, {qù} to go, {chī} to eat, {hē} to drink, {zuò} to do, {gěi} to give, {zhīdào} to know, {xiǎng} to think, {shuì} to sleep, {dú} to read, {xiě} to write, {zǒu} to walk cover almost everything said in a chapter of a Gospel.

## {shì} and {yǒu}: the two Portuguese splits badly

{shì} links two nouns: {wǒ shì xuésheng}, "I am a student". It does not state existence. Existence belongs to {yǒu}: {yǒu yī běn shū}, "there is a book", and {wǒ yǒu shū}, "I have a book".

Portuguese divides the field into four verbs, "ser", "estar", "haver" and "ter", and Mandarin into two. Where Portuguese says "there is", Mandarin says {yǒu}; where it says "is", it says {shì}. Whoever translates "God is" as {yǒu} writes "there is a God", and the sentence stops being an identification.

The negative separates the two again: {shì} negates with {bù}, and {yǒu} negates with {méi}, never with {bù}: {bù shì}, {méi yǒu}.

## What comes after the verb

Since the verb does not inflect, the aspect comes from three particles that stand behind it. {le} closes the situation: {wǒ chī le}, "I ate". {guo} marks the experience: {wǒ chī guo}, "I have eaten before". {zhe} marks what continues: {tā kàn zhe shū}, "he is reading".

The three take the same place and do not mix. The verb {chī} is the same in all three cases, and it is the particle that says whether the action is over, has ever happened, or is still running.

## In the Bible

John 1:1 opens with {yǒu}: {tàichū yǒu dào}, "in the beginning there was the Word". Greek says {ἦν ὁ λόγος}, and {ἦν} is existence, not identification. Mandarin chooses {yǒu} and not {shì}, and the choice is the same one that separates "there is" from "is".

Mark 4:39 has two commands with the particle of the finished: {zhù le ba! jìng le ba!}, "be silent! be still!". The {le} in a command does not say it happened: it says that what is commanded is that the thing be over. The same verse closes with {píngjìng le}, "it became calm", and it is the same {le} saying the situation is complete.`),
  vocab: [
    V('chī', '吃', 'to eat'),
    V('hē', '喝', 'to drink'),
    V('shuō', '说', 'to say'),
    V('tīng', '听', 'to hear'),
    V('kàn', '看', 'to see'),
    V('lái', '来', 'to come'),
    V('qù', '去', 'to go'),
    V('shì', '是', 'to be'),
    V('yǒu', '有', 'to have, there to be'),
    V('zuò', '做', 'to do'),
    V('gěi', '给', 'to give'),
    V('zhīdào', '知道', 'to know'),
    V('xiǎng', '想', 'to think, to want'),
    V('shuì', '睡', 'to sleep'),
    V('dú', '读', 'to read'),
    V('xiě', '写', 'to write'),
    V('zǒu', '走', 'to walk'),
    V('ài', '爱', 'to love'),
    V('le', '了', 'particle of the finished'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The verb does not inflect: {wǒ chī}, {tā chī} and {zuótiān wǒ chī} have the same shape.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{shì} links two nouns; existence belongs to {yǒu}. {wǒ shì xuésheng} "I am a student", {yǒu shū} "there is a book".',
      ),
    },
    {
      n: '§3',
      text: T(
        '{yǒu} negates with {méi}, never with {bù}: {méi yǒu}, not {bù yǒu}. {shì} negates with {bù}: {bù shì}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The aspect comes after the verb: {le} closes, {guo} marks experience, {zhe} marks what continues.',
      ),
    },
    {
      n: '§5',
      text: T('In a command, {le} says the order is to be finished: {zhù le ba}, "be silent".'),
    },
  ],
  notes: [
    {
      label: T('The yǒu that is not "have"'),
      text: T(
        '{yǒu} covers possession and existence at once: {wǒ yǒu shū} "I have a book" and {yǒu shū} "there is a book" use the same verb. Portuguese separates "ter" from "haver" and forces a choice of subject; Mandarin does not.',
      ),
    },
    {
      label: T('The shì that is not the adjective copula'),
      text: T(
        '{shì} does not come before an adjective: "he is tall" is {tā gāo}, with no {shì}. With {shì} the sentence becomes an identification: {tā shì gāo} only reads if {gāo} is a name, as in the surname Gao.',
      ),
    },
  ],
  examples: [
    {
      text: '起初有道',
      gloss: T('Jo 1:1 — {有} is existence: in the beginning there was the Word.'),
    },
    { text: '神愛世人', gloss: T('Jo 3:16 — {愛} with no time marker: "God loved the world".') },
    { text: '住口吧! 靜了吧!', gloss: T('Mc 4:39 — {了} in the order: let it be finished.') },
    { text: '我吃了', gloss: T('{了} closes the situation: I ate.') },
    { text: '我吃過', gloss: T('{過} marks experience: I have eaten before.') },
    { text: '他看著這本書', gloss: T('{著} marks what continues: he is reading.') },
    { text: '我是學生', gloss: T('{是} links two names.') },
    { text: '有一本書', gloss: T('{有} says existence: there is a book.') },
    { text: '沒有', gloss: T('{有} negates with {沒有}, not with {不}.') },
  ],
  tables: [
    {
      caption: T('The essentials and what they take'),
      head: [T('Verb'), T('Meaning'), T('Negative'), T('Example')],
      rows: [
        [T('{chī}'), T('to eat'), '{bù chī}', '{wǒ chī le}'],
        [T('{shuō}'), T('to say'), '{bù shuō}', '{tā shuō le}'],
        [T('{kàn}'), T('to see'), '{bù kàn}', '{kàn zhe}'],
        [T('{lái}'), T('to come'), '{bù lái}', '{lái le}'],
        [T('{shì}'), T('to be'), '{bù shì}', '{wǒ shì}'],
        [T('{yǒu}'), T('to have, there to be'), '{méi yǒu}', '{yǒu shū}'],
        [T('{qù}'), T('to go'), '{bù qù}', '{qù guo}'],
      ],
    },
    {
      caption: T('The three aspect particles'),
      head: [T('Particle'), T('Meaning'), T('Example')],
      rows: [
        [T('{le}'), T('situation closed'), '{wǒ chī le}'],
        [T('{guo}'), T('experience'), '{wǒ chī guo}'],
        [T('{zhe}'), T('under way'), '{tā kàn zhe shū}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {tàichū yǒu dào}, which verb does Mandarin choose for {ἦν}?'),
    options: [T('{shì}'), T('{yǒu}'), T('{lái}'), T('{zuò}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "{zhù ___ ba}" with the particle that closes the command in Mark 4:39.'),
      answer: 'le',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its negative.'),
      pairs: [
        { a: T('{shì}'), b: T('{bù shì}') },
        { a: T('{yǒu}'), b: T('{méi yǒu}') },
        { a: T('{chī}'), b: T('{bù chī}') },
        { a: T('{lái}'), b: T('{bù lái}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which particle marks "has ever happened"?'),
      options: [T('{le}'), T('{guo}'), T('{zhe}'), T('{ba}')],
      answer: 1,
    },
  ],
};
