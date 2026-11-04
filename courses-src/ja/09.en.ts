import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verb'),
  title: T('Where tense lives, if the verb does not change'),
  subtitle: T(
    'Japanese says "yesterday" and "always" with particles and adverbs after the verb, not by changing the verb',
  ),
  body: C(`
## Tense lives after the verb

The Japanese verb does not inflect: there is no "I ate" standing next to "I eat", no past ending. So where is the tense? Somewhere else, **after** the verb form, in particles and adverbs. The verb stays exactly as it is, and what carries the tense is what comes next.

The polite past is {masu} turned into {mashita}: {パンを食べます} is "I eat" or "I will eat", {パンを食べました} is "I ate". Notice that there is no verb "in the past" standing next to the verb "in the present": there is one verb with {masu} and with {mashita}.

The polite negative is {masen}, and the negative past is that same {masen} plus the {deshita} of "was": {masen deshita}. Watch the step down: the present negative stays at {masen} and the past drops one level, to {masen deshita}. No new ending comes in; what drops is the auxiliary.

On top of that, {mashita} followed by {ka} makes a question: "I ate, did I?" It is the same {ka} construction, but here it does not produce plain doubt, it produces a **rhetorical question**: the polite way of saying "of course I did not eat that".

## One form, three tenses

The scale is this: {masu} covers present, habit and future at once. A table settles it.

In Portuguese the verb changes shape in all three cases: "I eat", "I usually eat", "I am going to eat". Three verbs for one idea. In Japanese there is one: {パンを食べます}. What chooses the sense is the context: a schedule, a habit that repeats, an intention.

And the past has no "recent past" and no "remote past": {パンを食べました} serves for yesterday and for ten years ago. What says "yesterday" is the adverb that comes before; when it is missing, the narrative, with its own timeline, does the work.

## Two "will"s and one "if"

{masu} is the "will" of my own plan: I decided, I am going to do it. {deshou} is the "will" of prediction and of obligation coming from outside, "it will rain", "he will come". One is my decision; the other is the world deciding. The same goes for refusal: {てはいけません} is "must not", an obligation that Portuguese almost always leaves implicit.

Now the surprising use of the day: **the past is the conditional formula**. Japanese has no particle for "if"; "if... then" is built with a tense that is not a tense. The "if" comes first, in {tara} or {nara}, and the result comes after: {雨が降ったら、行く} is "if it rains, I will go". {nara} says "in the case that it rains, if it really does"; {tara} says "if it rains (and I think it will)". In both, the "if" is a past, and that is the Japanese way of pretending the condition is a predicted fact.

## "To be doing" and the past that closed

"To be doing" does not inflect either: it is a particle plus a verb. {te} links one verb to {imasu}, and the result is "it is raining". The same {te} makes "eat and then go out"; it marks no tense at all, it only glues two verbs together. In written text the polite form almost always shows up, and there the same {te} can sit in "it is raining" or "it has been raining, and the result goes on".

Two verses show the other side. At John 19:30, {すべては完了した}, the past there declares something complete instead of showing something under way: the work is done, it is not in progress. It is the most quoted sentence of the 1987 Japanese translation. And at 1 Corinthians 13:4, {愛は忍耐強い}, there is no tense particle at all: it is a timeless present, a statement that holds for good, and that is why the sentence exists without {masu} and without {desu}.

The difference between the two is the difference that opens the Gospel of John. John 1:1 says {初めに言葉があった}, a narrated past, something that happened and that the evangelist tells in order; had the verse said {愛は忍耐強い}, it would be a general law, with no date.

The rule of gold here is simple: the **polite** form carries the tense; the plain form almost never does. In biblical text, in a letter, in a news item, you will see {masu} and {desu} almost always, and that is why someone who does not know the polite series reads the text with no tense in it.
`),
  vocab: [
    V('masu', 'ます', 'polite suffix; present, habit and future at once'),
    V('mashita', 'ました', 'polite past'),
    V('masen', 'ません', 'polite negative'),
    V('masen deshita', 'ませんでした', 'negative past: {masen} stepping down to {deshita}'),
    V('deshita', 'でした', '"was": the piece that makes the negative past'),
    V('deshou', 'でしょう', 'prediction: "it will happen after all"'),
    V('ka', 'か', 'question particle; with {mashita} it gives the rhetorical question'),
    V('nai', 'ない', 'negative in the plain form'),
    V('ta', 'た', 'past in the plain form, without the polite register'),
    V('nakkatta', 'なかった', 'negative past in the plain form'),
    V('desu', 'です', 'to be in the polite form; the "is" that shows up without a verb'),
    V('imasu', 'います', '"to be"; with {te} it forms the progressive'),
    V('te', 'て', 'connective: links two verbs and forms the progressive'),
    V('tara', 'たら', '"if... then", hypothesis'),
    V('nara', 'なら', '"if... then", condition'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tense does not live in the verb: it lives in the particle that follows it, and it is the polite series that counts.',
      ),
    },
    {
      n: '2',
      text: T('{masu} covers present, habit and future at once; the context chooses the sense.'),
    },
    {
      n: '3',
      text: T(
        '{masu} is the "will" of my own plan; {deshou} is the "will" of prediction and external obligation.',
      ),
    },
    {
      n: '4',
      text: T(
        'There is no "if" particle: the Japanese "if... then" is born from a past, with {tara} or {nara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The polite form carries the tense and the plain form almost never does; which is why written text is nearly all {masu}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The question that is not a question'),
      text: T(
        '{mashita} followed by {ka} is the same {ka} construction as in lesson 1, but here it turns into a rhetorical question: the polite way of denying something with all the letters spelled out. Anyone reading a verse with {mashita ka} should read disbelief, not curiosity.',
      ),
    },
    {
      label: T('Every adverb tells a story'),
      text: T(
        'Yesterday, today and tomorrow live in adverbs that come before the verb, and the verb stays the same. Take the adverb away and {masu} is still the same: what counts the tense is the adverb, the timeline of the narrative or the context — never the ending of the verb.',
      ),
    },
  ],
  examples: [
    {
      text: 'きのう映画を見ました',
      gloss: T('kinō eiga o mimashita — I watched a film yesterday'),
    },
    {
      text: 'きのう映画を見ませんでした',
      gloss: T('kinō eiga oimasen deshita — I did not watch a film yesterday'),
    },
    { text: '雨が降っています', gloss: T('ame ga futte imasu — it is raining') },
    { text: 'すべては完了した', gloss: T('subete wa kanryō shita — it is finished (John 19:30)') },
    { text: '愛は忍耐強い', gloss: T('ai wa nintaiyokai — love is patient (1 Corinthians 13:4)') },
  ],
  tables: [
    {
      caption: T('One form, three tenses'),
      head: [T('What you meant'), T('What Japanese writes'), T('The sentence that decides')],
      rows: [
        [T('present, now'), T('{ます}'), T('{映画を見ます} — "I watch the film"')],
        [T('habit'), T('{ます}'), T('{毎日映画を見ます} — "I watch films every day"')],
        [T('future, my own decision'), T('{ます}'), T('{あした見ます} — "I will watch tomorrow"')],
        [
          T('prediction, external obligation'),
          T('{でしょう}'),
          T('{雨が降るでしょう} — "it will rain"'),
        ],
      ],
    },
    {
      caption: T('Where each tense lives'),
      head: [T('Tense'), T('In the polite series'), T('In the plain form')],
      rows: [
        [T('past'), T('{mashita}'), T('{ta}')],
        [T('negative past'), T('{masen deshita}'), T('{nakkatta}')],
        [T('negative'), T('{masen}'), T('{nai}')],
        [
          T('present and habit'),
          T('{masu}'),
          T('nothing: the plain form is the same in every tense'),
        ],
      ],
    },
    {
      caption: T('The two doors of "if... then"'),
      head: [T('Construction'), T('What it means'), T('When it is used')],
      rows: [
        [
          T('{たら}'),
          T('"if... then", as a hypothesis'),
          T('planning: {雨が降ったら、行きません}'),
        ],
        [
          T('{なら}'),
          T('"if... then", as a condition'),
          T('weighing it up: {雨が降るなら、行きません}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {きのう映画を見ませんでした}, what does the ending say?'),
    options: [
      T('negative past: "I did not watch the film yesterday"'),
      T('present negative: "I do not watch the film"'),
      T('future negative: "I will not watch the film"'),
      T('a question: "did I not watch the film?"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I did not eat bread yesterday": きのうパンを食べ____'),
      answer: 'ませんでした',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it does'),
      pairs: [
        { a: T('{ました}'), b: T('marks the past in the polite series') },
        { a: T('{ません}'), b: T('marks the negative in the polite series') },
        { a: T('{でしょう}'), b: T('marks prediction: "it will happen"') },
        { a: T('{たら}'), b: T('opens a hypothetical "if... then"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these sentences is an "if... then" condition?'),
      options: [
        T('{雨が降ったら、会社に行きます}'),
        T('{雨が降っています}'),
        T('{雨は降りました}'),
        T('{雨が降る}'),
      ],
      answer: 0,
    },
  ],
};
