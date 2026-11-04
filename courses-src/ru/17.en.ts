import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('The verb: present and aspect'),
  title: T('Aspect: the question tense does not ask'),
  subtitle: T('писать and написать: same present, same past, different meaning'),
  body: C(`
## Two questions, and only one of them has a verb in English

An English sentence asks the verb two questions: **when** and **how**. Russian asks a third, and it has nothing to do with time: **what happened to the action, did it end up whole or did it stay under way.**

The answer is aspect. And it is grammatical, which means it is in the shape of the verb and not in the choice of a tense or an adverb. Он писал письмо and Он написал письмо have the same tense, the same subject and the same object. What changes is what the verb did with the letter.

The imperfective presents the action as a process: it is going on, or it went on, or it will go on, and the result is not part of what is being said. The perfective presents the action as a bounded event: it happened once, it reached an end, and the result is part of what is being said.

In English, to write and to write out are the same verb with or without a complement. In Russian they are two verbs, and neither is more correct than the other: they say different things.

## It is not tense, and that is why the confusion is so common

A perfective has a present shape. Я напишу письмо is a perfective present: I am writing the whole letter, and it is going to happen once. An imperfective has a future shape. Я буду писать письмо is an imperfective future: I will be writing, and the result is not in view.

Both turn up in every tense:

- present: Я пишу and Я напишу
- past: Я писал and Я написал
- future: Я буду писать and Я напишу

The distinction that is usually drawn, and that is false, is that the imperfective is past and the perfective is future. Both verbs appear in every tense, and what separates them is what is done with the action.

The imperfective present also has a use of its own: habit. Он ходит в церковь is not past, it is what he always does. Он ходил в церковь is the past of the whole series. And Он пришёл is a single coming, with an arrival time.

## The pair is lexical, and it is learned as one word

The aspect pair does not come by rule. Писать pairs with написать by prefix, and делать pairs with сделать, and читать with прочитать. But брать pairs with взять, and the two stems have nothing in common with each other. Дать pairs with давать, and the imperfective is longer than the perfective.

Practical consequence: **the pair is learned as a single word.** No rule lets you guess it, and a dictionary that only translates without giving the pair leaves the job half done. A reader needs the whole pair, not the verb by itself.

And there is a third path, besides the prefix and the suffix: suppletion. Взять and брать are not derivations of one another, and neither are лечь and лежать. They are pairs that exist by convention of the language, and they are learned as if they were one verb with two modes.

## The hook: a verse with both

**И свет во тьме светит, и тьма не объяла его.** The two verbs of the verse are in the same semantic field, and neither of them is a simple prefix of the other.

Светит is imperfective, and it is the word the narrative expects: the light shines, goes on shining, and the shining is the state the light is in while it lasts. There is no count of times and no boundary. The same verb in the past, светил, would be the light having shone for a while, and the prefixed perfective would be a light that switched on.

Объяла is perfective, with a prefix. It describes an act that reached an end: the darkness tried and did not succeed. The whole sentence is a contrast between two actions seen from two points of view: one is what lasts, and the other is what came to its end.

That is the summary of what aspect does: **it chooses what about the action is the subject of the sentence.** In светит, the subject is the light shining. In объяла, the subject is the result of the darkness. One scene, two verbs, and the choice belongs to the translator as much as to the original.
`),
  vocab: [
    V('писать', 'писать', 'to write; imperfective'),
    V('написать', 'написать', 'to write out; perfective'),
    V('делать', 'делать', 'to do; imperfective'),
    V('сделать', 'сделать', 'to finish doing; perfective'),
    V('читать', 'читать', 'to read; imperfective'),
    V('прочитать', 'прочитать', 'to read to the end; perfective'),
    V('брать', 'брать', 'to take; imperfective'),
    V('взять', 'взять', 'to take; perfective, suppletive'),
    V('светит', 'светить', 'shines; imperfective present'),
    V('объяла', 'объясть', 'enveloped; perfective past'),
    V('ходить', 'ходить', 'to go habitually; imperfective'),
    V('пришёл', 'прийти', 'came; perfective'),
    V('аспект', 'аспект', 'aspecto, ou el sustantivo que lo nombra'),
    V('имперфект', 'имперфект', 'imperfectivo, ou o substantivo que o nomeia'),
    V('перфект', 'перфект', 'perfective'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Он написал письмо, what does the perfective show?'),
    options: [
      T('That the writing is under way'),
      T('That the letter ended up written'),
      T('That he always writes'),
    ],
    answer: 1,
    hint: T(
      'The perfective shows the action as a bounded event, with the result in view. The imperfective would show the process.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the perfective of писать'), answer: 'написать' },
    {
      kind: 'choose',
      prompt: T('In Он ходит в церковь, the imperfective present shows...'),
      options: [T('a single coming'), T('habit'), T('the future')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete the imperfective of взять'), answer: 'брать' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The imperfective presents the action as a process, the perfective as a bounded event with a result.',
      ),
    },
    {
      n: '2',
      text: T('Aspect is not tense: both appear in the present, the past and the future.'),
    },
    {
      n: '3',
      text: T(
        'The perfective has a present shape ({напишу}) and the imperfective has a future shape ({буду писать}).',
      ),
    },
    {
      n: '4',
      text: T('The imperfective present also expresses habit: {ходит} is what is always done.'),
    },
    {
      n: '5',
      text: T(
        'The aspect pair is learned as a single word, because there is no derivation in every case: {брать} and {взять}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why both verbs appear in every tense'),
      text: T(
        'Tense says when the action happens: before, now, later. Aspect says what was done with the action: whether it left a trace or stayed under way. They are two independent questions, and that is why every verb has a pair for every tense. Я писал and Я написал are both past; the difference between them is not temporal, it is aspectual.',
      ),
    },
    {
      label: T('When a translation loses the result'),
      text: T(
        'Писать письмо can be rendered as writing a letter, and nothing is lost when the context is an ordinary letter. But in a sentence like Он писал письмо весь день, what is at stake is the duration. Rendering it into a language that has no aspect forces a choice: either mark the process or mark the result, and the two choices give different translations of the same verse.',
      ),
    },
  ],
  examples: [
    { text: 'Я пишу письмо', gloss: T('I am writing a letter; imperfective present') },
    { text: 'Я напишу письмо', gloss: T('I will write the whole letter; perfective present') },
    { text: 'Я писал письмо', gloss: T('I was writing a letter; imperfective past') },
    { text: 'Я написал письмо', gloss: T('I wrote the letter; perfective past') },
    { text: 'Я буду писать письмо', gloss: T('I will be writing a letter; imperfective future') },
    { text: 'Он ходит в церковь', gloss: T('he goes to church; habit in the present') },
    { text: 'Он ходил в церковь', gloss: T('he went to church; a series in the past') },
    { text: 'Он пришёл', gloss: T('he came; a single coming, perfective') },
    {
      text: 'беру деньги, а он взял книгу',
      gloss: T('I take money and he took a book; one field, two aspects'),
    },
    {
      text: 'И свет во тьме светит, и тьма не объяла его',
      gloss: T(
        'and the light shines in the darkness, and the darkness has not overcome it (John 1:5)',
      ),
    },
  ],
  tables: [
    {
      caption: T('The two members of the pair in the three tenses'),
      head: [T('Tense'), T('Imperfective'), T('Perfective'), T('What changes')],
      rows: [
        [T('present'), T('Я пишу'), T('Я напишу'), T('process, or once')],
        [T('past'), T('Я писал'), T('Я написал'), T('duration, or result')],
        [
          T('future'),
          T('Я буду писать'),
          T('Я напишу'),
          T('I am going to do, or I am going to do it once'),
        ],
      ],
    },
    {
      caption: T('Aspect pairs, with the way each one is formed'),
      head: [T('Imperfective'), T('Perfective'), T('How it is formed'), T('Idea')],
      rows: [
        [T('писать'), T('написать'), T('prefix'), T('to finish writing')],
        [T('делать'), T('сделать'), T('prefix'), T('to do to the end')],
        [T('читать'), T('прочитать'), T('prefix'), T('to read to the end')],
        [T('говорить'), T('сказать'), T('suppletive'), T('to say once')],
        [T('брать'), T('взять'), T('suppletive'), T('to take, with unrelated stems')],
        [T('давать'), T('дать'), T('suppletive'), T('to give, with unrelated stems')],
      ],
    },
    {
      caption: T('Perfective and imperfective in the same field'),
      head: [T('Field'), T('Imperfective'), T('Perfective'), T('The question they answer')],
      rows: [
        [T('write'), T('пишет, писал'), T('напишет, написал'), T('still going, or already done')],
        [T('shine'), T('светит, светил'), T('засветит, засиял'), T('it lasts, or it switched on')],
        [T('go'), T('ходит, ходил'), T('придёт, пришёл'), T('many times, or once')],
        [T('take'), T('берёт, брал'), T('возьмёт, взял'), T('custom, or cleanly')],
        [T('say'), T('говорит, говорил'), T('скажет, сказал'), T('converse, or say once')],
      ],
    },
  ],
};
