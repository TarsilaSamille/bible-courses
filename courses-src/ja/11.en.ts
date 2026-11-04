import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Adjective'),
  title: T('The adjective is a noun: how to modify it and how to negate it'),
  subtitle: T(
    'Japanese has no adjective: it has a noun that comes before the other noun, and the negation is always a verb',
  ),
  body: C(`
## The Japanese "adjective" is a noun

In Portuguese "red book" is a noun followed by an adjective that agrees with it. That adjective does not exist in Japanese. {赤い本} reads literally "red book": the quality comes before the noun and agrees with nothing, because it is not an adjective; it is a **noun** occupying the slot Portuguese reserves for the quality. The particle that links one noun to another is {の}, and in {赤い本} it is left out, because Japanese drops it once the modifier is clear.

Word order is the first warning, and it is the opposite of Mandarin. In Mandarin the adjective comes after the noun; Japanese does the reverse, and for the same reason Korean does: both languages put the object before the verb and the verb before the subject, and the noun is the subject. The subject is the last piece of the sentence, so the noun comes second and the quality sits right next to it. A reader coming from Mandarin has to move the eye, not the word.

## The two suffixes that build a modifier

Turning a noun into a modifier has two paths, and knowing which one to take is exactly the detail grammar books usually leave out.

The **basic** forms, the ones you learn first and the ones derived from nothing, take the suffix {い}: {美しい} "beautiful", {赤い} "red", {新しい} "new". Here the modifier is the form itself, with nothing added.

The **derived** forms, the ones that came out of a verb or out of another noun, take the suffix {な}: {静かな} "quiet", {元気な} "energetic", {雪の} "snowy". Here the base form shows up as a noun, {静か} on its own is "quietness", "stillness", and the modifier is that base with its final {い} swapped for {な}.

A pocket rule: **if the noun ends in {な} or in {ぶ}, the modifier is usually the form itself with {な}**. {好きな本} is "the book I like", and {上手な人} is "a skilled person": in both cases the bare noun is not enough. The test is practical and needs no rule: swap the end of the noun for {な}; if the sentence still makes sense, the modifier was {な}.

## Negating a noun is negating the verb {ある}

Japanese has no "not beautiful", because there is no adjective to negate. What there is, is the verb {ある}, which does two jobs: it says that a thing exists, and it says that a thing is so. That verb is what gets negated, with the negation of lesson 7.

- {美しいです} — "is beautiful"
- {美しくありません} — "is not beautiful"
- {静かではない} — "is not quiet"
- {本がありません} — "there is no book"

The point that changes how you read the Bible is this: **Japanese does not negate a word; it negates the sentence that says the thing exists**. The "not" belongs to the verb, and the verb is always {ある} when what is being described is a quality. That is why the adverb derived from {美しい} needs a verb in order to turn negative: {美しくありません} means "is not beautiful" because it has a verb, not because {美しい} has a negative form, and that form exists nowhere in Japanese.

The kanji is the proof that this is not grammar theory. {遅い} is "slow" and "late" at the same time, and {遅く} is "slowly": the same character for "late". That is why 1 Corinthians 13:4 reads in Japanese as {愛は寛容である}, "love is patient": {寛容} is a noun standing where Portuguese puts the adjective, and the sentence ends in {ある}, marked by {は} and joined to the noun by {で}.

## Adverb and degree: also a noun

A Japanese adverb is never a word of its own: it is a noun with a particle or a suffix. Noun + {に}: {静かに}, "quietly". Verbal stem + {な}: from {速い} comes the stem {早}, and {早} + {な} is "quickly". Both formulas say the same thing, and that is why {速い} is a noun ("speed"), a verb ("to be fast") and an adverb ("quickly") without changing shape. In Portuguese those are three different words; in Japanese it is one.

Degree is a noun too, and the most useful is {過ぎる}, "to pass beyond": {速すぎます} is "it is too fast", literally "it exceeds in speed". After it come {ぐらい} and {ほど}, which do the same job with a sense of approximation, "to the point of": {泣くほど} is "to the point of crying", and {泣くぐらい} is the same with an exclamation in it.
John 1:5 shows the other side of the same rule, and it shows it better because the verse is short. Light is the subject of a verb of action, "the light shines in the darkness" comes out as {光は暗闇の中に照らす}, and the same word is a predicate in 1 John 1:5, where God is light: {神は光である}. Two verbs for one noun, and Greek draws the same distinction: in John's verse it has a quality and an action, and Japanese needs two different verbs for the two. Reading "the light shines" as "the light is bright" is reading it wrong: to shine is an action, and an action in Japanese always has a verb.
`),
  vocab: [
    V('akai', '赤い', 'red (akai) — a noun that fills the adjective slot'),
    V('utsukushii', '美しい', 'beautiful (utsukushii) — basic form, modifier in い'),
    V('shizuka', '静か', 'quiet, still (shizuka) — derived from a verb'),
    V('no', 'の', 'of; links one noun to another (no)'),
    V('na', 'な', 'suffix that builds a derived modifier (na)'),
    V('aru', 'ある', 'to be, to exist (aru) — the verb of qualities'),
    V('arimasu', 'ない', 'the negative of ある: "is not", "there is no" (arimasu)'),
    V('hayaku', '速い', 'fast (hayaku); with に or な it gives "quickly"'),
    V('sugiru', '過ぎる', 'to pass beyond; with に it gives "so... that", "too" (sugiru)'),
    V('gurai', 'ぐらい', '"so... that", "to the point of" (gurai)'),
    V('hodo', 'ほど', '"so... that", "to the point of" (hodo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'What modifies a noun in Japanese is a noun, and it comes first: {赤い本} is "red book", never "book red".',
      ),
    },
    {
      n: '2',
      text: T(
        'A basic form uses {い} and already is the modifier; a derived form uses {な}: {静かな}, never {静かい}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A noun ending in {な} or {ぶ} usually becomes a modifier with {な}: {好きな本}, {上手な人}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nouns are not negated; the verb {ある} is: "is not beautiful" is {美しくありません}, and "not beautiful" does not exist.',
      ),
    },
    {
      n: '5',
      text: T(
        'Adverbs and degrees are nouns too: noun + {に}, verbal stem + {な}, plus {過ぎる}, {ぐらい}, {ほど}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A noun that is also a quality'),
      text: T(
        'Some nouns describe a quality, and those take {な} as a modifier instead of {い}. Their base is a full noun: {静か} on its own is "quietness", and {好きな本} is "the book I like". The test is a single swap: if replacing the end of the noun with {な} does not break the sentence, it was {な}.',
      ),
    },
    {
      label: T('The structural mistake'),
      text: T(
        'A reader coming from English writes "not beautiful" and feels a verb is missing. Nothing is missing: what Japanese has is the negative of the verb {ある}, from lesson 7. "Not beautiful" does not exist because an adjective does not exist — which is why the negation of a quality in Japanese is always a sentence with a verb in it.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — a red book') },
    { text: '美しい花', gloss: T('utsukushii hana — a beautiful flower') },
    { text: '静かな部屋', gloss: T('shizuka na heya — a quiet room') },
    { text: '静かではありません', gloss: T('shizuka de wa arimasu — it is not quiet') },
    { text: '早く走ります', gloss: T('hayaku hashirimasu — I run fast') },
    { text: '速すぎます', gloss: T('hayaku sugimasu — it is too fast') },
  ],
  tables: [
    {
      caption: T('Negating a noun is negating the verb'),
      head: [T('What you mean'), T('Japanese'), T('What happens')],
      rows: [
        [T('is beautiful'), T('{美しいです}'), T('nothing: {です} is affirmative {ある}')],
        [T('is not beautiful'), T('{美しくありません}'), T('{ある} in the negative, no particle')],
        [T('is not beautiful, plain'), T('{美しくない}'), T('the same {ある}, with a bare {ない}')],
        [T('not beautiful'), T('does not exist'), T('the "not" is a verb, never a particle')],
      ],
    },
    {
      caption: T('The two ways to build a modifier'),
      head: [T('Where the word comes from'), T('Example'), T('How the modifier looks')],
      rows: [
        [T('basic form'), T('{美しい花}'), T('the form itself, in {い}')],
        [T('basic form'), T('{新しい本}'), T('the form itself, in {い}')],
        [T('derived from a verb'), T('{静かな}'), T('the base with {な}: {静か} stays a noun')],
        [
          T('noun that names a quality'),
          T('{上手な人}'),
          T('the base with {な}: {上手} stays a noun'),
        ],
      ],
    },
    {
      caption: T('From noun to adverb and to degree'),
      head: [T('Noun'), T('With {に} or {な}'), T('What comes out')],
      rows: [
        [T('{静か}'), T('{静かに}'), T('quietly')],
        [T('{速い}'), T('{早く}'), T('quickly, noun plus {に}')],
        [T('{速い}'), T('{速すぎます}'), T('too fast, "exceeding in speed"')],
        [T('{泣く}'), T('{泣くほど}'), T('to the point of crying')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "is not beautiful", what is being negated?'),
    options: [
      T('the word beautiful'),
      T('the verb {ある}'),
      T('the particle {の}'),
      T('the suffix {い}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "is not beautiful" with the negative form of the verb {ある}: {美しく}____',
      ),
      answer: 'ありません',
    },
    {
      kind: 'match',
      prompt: T('Match the construction to what it produces'),
      pairs: [
        { a: T('{静かに}'), b: T('noun plus {に}: an adverb') },
        { a: T('{早く}'), b: T('verbal stem plus {な}: an adverb') },
        { a: T('{泣くほど}'), b: T('degree of approximation, "to the point of"') },
        { a: T('{速すぎます}'), b: T('degree with {過ぎる}, "to pass beyond"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Mandarin the adjective comes after the noun. In Japanese, where does it come?'),
      options: [
        T('also after the noun'),
        T('before the noun'),
        T('in place of the noun'),
        T('after the verb'),
      ],
      answer: 1,
    },
  ],
};
