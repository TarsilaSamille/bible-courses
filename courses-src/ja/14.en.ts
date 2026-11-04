import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Verb'),
  title: T('With or without an object: the same inflection, two sentences'),
  subtitle: T(
    'The Japanese verb does not inflect for having or not having an object: the particle {wo} says whether there is one, and only it does',
  ),
  body: C(`
## The same inflection on both sides

A **transitive** verb takes an object; an **intransitive** verb does not. In Portuguese that shows up in the form: "I arrive" and "I arrive him" inflect differently, and that is why a beginner says "he arrived him" without noticing that the sentence is impossible. Japanese has no such distinction in the form. **The inflection is the same in both cases.**

Compare {taberu} "to eat" and {nemuru} "to sleep": both are first conjugation verbs, both drop the same ru. {hon o taberu} is "I eat a book", {nemuru} is "I sleep". The ending of the verb is identical; what changes is whether there is a noun after the {wo}. If you translated "he sleeps" as "he sleeps it", it was not the inflection that failed; it was the particle you invented.

This holds for the second conjugation too: {shinu} "to die" and the root of "to hear" drop the same i. There is no Japanese form of "to die it".

## The test: put the {wo} after it

The practical test fits in one sentence: put the {wo} after the verb. If it fits and makes sense, the verb is transitive; if it does not fit, it is intransitive. {hon o taberu} works, "a book, eats". {nemuru} does not work, nobody sleeps a book.

And the test gives an immediate answer for the most common everyday lists. On the object side: {taberu}, {nomu}, {hon o yomu}, {hon o kaku}, {hon o miru}, {mimi o kiku}, {hon o hiraku}, {hon o tojiru}. On the no-object side: {iku}, {kuru}, {nemuru}, {okiru}, {shinu}, {warau}, {naku}. A dozen verbs and you have already solved half the sentences.

The consequence is the part beginners forget: **the verb does not tell you whether there is an object.** The inflection is a single one, and for that reason it cannot carry that information. What tells you is the particle, and if the {wo} is not there, either the sentence is incomplete or the verb is intransitive and wanted no object at all. The work of deciding belongs to the {wo}, not to the verb. That is why the {wo} is the information of the sentence, and the verb is only what remains.

## {hairu}: the pair the context resolves

There is one verb that is both at once, and it is the best proof that the particle is what decides. The verb {hairu} accepts an object or not, and the inflection is the same in both cases.

{ie ni hairu} is "I enter the house": {hairu} is intransitive here, and {ie ni} says where to. {hon o ie ni hairu} is "the book fits in the house": {hairu} is transitive here, "to make fit", and the {wo} is there marking the book as the thing that goes in. Two sentences, one verb, the same ending, and the only signal is the presence of the {wo} after the noun.

It is what blocks the mirror-image mistake: "he entered it" is not a sentence Japanese can form, but "he entered" is not the only form either. What changes is what the verb is looking at. Without the {wo}, it looks at the place; with the {wo}, it looks at the thing that enters the place. The context, who is around and what was said before, chooses between the two readings, and the reader who knows both makes no mistake in either.

One step further, just so you know it exists: the same root reappears in {reru}, the passive ending, and the root "to hear" becomes {saseru}, "to make hear", the causative ending. They are the same verbs from both sides of everything before, with one layer added, which is why the same root shows up in so many forms. The verbs "to be done" and "to make someone do" are not new verbs.

## {aru} has no object, and John 1:1 has two intransitives

The verb of existence, {aru} "there is, to exist", is intransitive, and that is a classic beginner trap. "There is a book" in Japanese is {hon ga aru}: the noun comes marked with the subject particle, the "ga", and the verb is {aru}, which takes nothing after it. Writing {hon o aru} is the mistake, because the {wo} has nothing to mark.

Anyone translating out of Portuguese turns "there is" into a verb and sees an object in it, and from that comes the {wo} that should never exist. In Japanese "there is" is not a verb that grabs anything: it is a verb that says the thing is there. The difference between {hon ga aru} and {hon o aru} is not a matter of style; the second sentence is simply not well formed.

The biblical hook that ties it all together is John 1:1, "in the beginning was the Word". It is {aru}, intransitive, and it is the most important verb in the whole chapter. In the same sentence, "the Word was with God" uses the verb of being together, something like {sou} "to be with, to accompany", which is also intransitive: it does not take the Word as an object, the Word comes as a noun that accompanies, marked as such.

In other words: **John 1:1 has two intransitive verbs in a single sentence.** There is not one single {wo} in "in the beginning was the Word and the Word was with God", and that is exactly what makes the verse look strange to a Portuguese reader used to every verb having something to land on. Anyone who understands that Japanese does not need it understands the verse, and understands why the Japanese translation uses kana precisely for those verbs.
`),
  vocab: [
    V('wo', 'を', 'direct object; the particle that says there is an object (wo)'),
    V('taberu', '食べる', 'to eat (taberu)'),
    V('nomu', '飲む', 'to drink (nomu)'),
    V('nemuru', '寝る', 'to sleep (nemuru)'),
    V('hairu', '入る', 'to enter; to make fit; to receive (hairu)'),
    V('iku', '行く', 'to go (iku)'),
    V('kuru', '来る', 'to come (kuru)'),
    V('okiru', '起きる', 'to get up; to wake up (okiru)'),
    V('shinu', '死ぬ', 'to die (shinu)'),
    V('warau', '笑う', 'to laugh (warau)'),
    V('naku', '泣く', 'to cry (naku)'),
    V('aru', 'ある', 'there is; to exist (aru)'),
    V('sou', '添う', 'to be with; to accompany (sou)'),
    V('yomu', '読む', 'to read (yomu)'),
    V('reru', 'れる', 'passive; also "possible" (reru)'),
    V('saseru', 'させる', 'causative; "to make someone do" (saseru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Transitive and intransitive verbs have the same inflection: {taberu} and {nemuru} drop the same ru.',
      ),
    },
    {
      n: '2',
      text: T(
        'The test is one: put the {wo} after the verb. If it fits and makes sense, it is transitive; if it does not fit, it is intransitive.',
      ),
    },
    {
      n: '3',
      text: T(
        'The verb does not say whether there is an object — the particle says. Without the {wo} after the noun, either the sentence is incomplete or the verb is intransitive.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hairu} can be "to enter" (intransitive) or "to make fit" (transitive): the same inflection, and the {wo} is what separates the two sentences.',
      ),
    },
    {
      n: '5',
      text: T(
        '{aru} from lesson 7 is intransitive: "there is a book" is {hon ga aru}, never {hon o aru}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The verb is the remainder, the particle is the information'),
      text: T(
        'The verb inflection does not vary, and the {wo} either shows up or does not. That is why the inflection cannot be the clue: in Japanese, the information lives in the particle. A beginner translating out of Portuguese looks in the verb for something the verb does not say, and writes "he arrived him" — but the mistake is not one of inflection, it is an invented particle.',
      ),
    },
    {
      label: T('Two intransitive verbs in John 1:1'),
      text: T(
        'In the beginning **was** the Word — {aru}, intransitive. And the Word **was with** God — {sou}, intransitive, with the Word as a noun that accompanies. Not one {wo} in the sentence, and even so the verse is complete. Anyone who expects an object on every verb gets stuck here.',
      ),
    },
  ],
  examples: [
    { text: 'パンを食べる', gloss: T('pan o taberu — I eat bread') },
    { text: 'ベッドで寝る', gloss: T('beddo de nemuru — I sleep in the bed') },
    { text: '家に入る', gloss: T('ie ni hairu — I enter the house') },
    { text: '本を家に入れる', gloss: T('hon o ie ni hairu — the book fits in the house') },
    {
      text: '初めはことばがあった',
      gloss: T('hazime wa kotoba ga atta — in the beginning was the Word (John 1:1)'),
    },
  ],
  tables: [
    {
      caption: T('The most used verbs on each side'),
      head: [T('With an object'), T('Without an object')],
      rows: [
        [T('{taberu} — to eat'), T('{nemuru} — to sleep')],
        [T('{nomu} — to drink'), T('{iku} — to go')],
        [T('{hon o yomu} — to read'), T('{kuru} — to come')],
        [T('{hon o kaku} — to write'), T('{okiru} — to get up')],
        [T('{hon o miru} — to see'), T('{shinu} — to die')],
        [T('{mimi o kiku} — to hear'), T('{warau} — to laugh')],
        [T('{hon o hiraku} — to open'), T('{naku} — to cry')],
      ],
    },
    {
      caption: T('The {wo} test on three verbs'),
      head: [T('{wo} after?'), T('Verb'), T('Gloss')],
      rows: [
        [T('yes'), T('{taberu}'), T('to eat, and there is something to eat')],
        [T('yes'), T('{yomu}'), T('to read, and there is something to read')],
        [T('no'), T('{nemuru}'), T('to sleep, and nobody sleeps something')],
        [T('no'), T('{shinu}'), T('to die, and nobody dies something')],
      ],
    },
    {
      caption: T('The same verb, the two sentences'),
      head: [T('Sentence'), T('Object?'), T('Gloss')],
      rows: [
        [T('{ie ni hairu}'), T('no'), T('enters the house')],
        [T('{hon o ie ni hairu}'), T('yes'), T('the book fits in the house')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {hon ga aru}, why is there no {wo} after the noun?'),
    options: [
      T('because {aru} is intransitive'),
      T('because the subject particle already does that work'),
      T('because a noun never takes a particle in Japanese'),
      T('because the {wo} is optional in Japanese'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I eat bread" with the object particle: パン____食べる'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the side it belongs to'),
      pairs: [
        { a: T('{taberu}'), b: T('with an object') },
        { a: T('{yomu}'), b: T('with an object') },
        { a: T('{nemuru}'), b: T('without an object') },
        { a: T('{aru}'), b: T('without an object') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is well formed?'),
      options: [T('{hon o aru}'), T('{hon ga aru}'), T('{hon ni hairu}'), T('{hon o nomu o aru}')],
      answer: 1,
    },
  ],
};
