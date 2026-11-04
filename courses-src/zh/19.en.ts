import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verb'),
  title: T('Future, obligation and possibility'),
  subtitle: T(
    'Chinese does not inflect the verb: tense comes from particles you place in front of it',
  ),
  body: C(`
## Chinese does not inflect the verb

In English the future lives inside the verb. "I will eat" is "will" plus "eat": a form distinct from the present and from the past, and the same holds across the whole conjugation. Anyone learning English learns inflection first, which is why the future feels easy before it turns out to be hard.

In Mandarin there is no inflection at all. "I eat", "I ate" and what English would call "I will eat" all have the **same verb**, {chī}, identical in all three. What changes is not the verb: it is what stands before it.

{Le} ({了}) is aspect: it says the action is complete, not when it happened. The future is a different thing. It has no single particle and no verbal tense; it is a set of words you place in front of the verb, each carrying a different degree of commitment. One is prediction, one is plan, one is obligation, one is possibility. Choosing among them is the task, and choosing wrong does not produce broken grammar: it produces a wrong nuance. In Mandarin tense is a stylistic decision taken sentence by sentence, not a fact of the verb's shape.

## {會} and {要}: what I know and what I plan

**{huì} ({會})** in front of the verb has two senses, and they are indistinguishable in form:

- {wǒ huì chī} — "I know how to eat", that is, I have the ability.
- {wǒ huì chī} — "I will eat", that is, it is what I predict.

The ambiguity is real and useful: the structure is identical in both, and the context, what came before, who is speaking, about what, decides. In colloquial Mandarin that overlap is exploited on purpose, and in a biblical text it shows up exactly where the Greek is ambiguous too.

**{yào} ({要})** in front of the verb is plan or desire: {wǒ yào qù} is "I will go / I want to go", with the difference that English "will" here is my decision, not a prediction. Compare the two: {wǒ huì qù} is "I will go", prediction; {wǒ yào qù} is "I will go", plan. The same sentence in English, two different sentences in Mandarin.

{jiāng yào} ({將}{要}) is the more formal, more written future. Nobody says {jiāng} in conversation; it appears constantly in the {和合本} and in literary prose, and it is the form a translator reaches for when the original carries literary weight, narration, prophecy, solemn report. It adds no new meaning: it adds register.

And there is negation of the future: {bù} in front of the verb negates present and future, and {wǒ bù qù} is "I will not go". The {bù} negates what {huì} or {yào} would affirm.

## {必}{須} and {得}: three verbs, one character

Obligation is said in two ways. **{bìxū} ({必}{須})** is a full modal verb, "it is necessary, it is required": {wǒ bìxū qù}, "I must go", in the same position as {huì} and {yào}, in front of the verb. In written text it is stronger and more formal than {děi}.

**{děi} ({得})** in the same position says the same thing more briefly and more conversationally: {wǒ děi qù}, "I have to go".

The character {得} is three verbs in Mandarin, told apart only by tone:

- {děi}, 3rd tone, "to need, to have to": {wǒ děi qù}, I have to go.
- {de}, neutral tone, "manner": {nǐ màn màn de chī}, eat slowly.
- {dé}, 2nd tone, "to obtain, to receive": {wǒ dé dào yī fēn}, I scored a point.

One character, three verbs, three tones. None of them resembles the others, and no grammatical context forces the tone: it is the meaning that brings the tone along. That is why a Mandarin dictionary is organised by pronunciation and not by character, and why {wǒ děi qù} and {wǒ dé dào yī fēn} can be one line on paper and two unrelated sentences in speech.

## {可}{能} and the scale of certainty

**{kěnéng} ({可}{能})** means "can, it is possible". It goes in front of a verb like {huì} and {yào}, and also in front of an adjective: {tā kěnéng lèi}, "he may be tired", {zhè kěnéng shì hǎo de}, "this may be good".

The five words line up on a scale of how committed the speaker is to the truth of the sentence, and the order matters more than any translation:

**{yídìng} ({一}{定})** > {bìxū} ({必}{須}) > {yào} ({要}) > {huì} ({會}) > {kěnéng} ({可}{能})

The strongest is the one that rules out possibility; the weakest is possibility. {tā yídìng lái} is "he will come for certain" and, by implication, "there is no way he will not". In between, {tā yào lái} is what he intends, {tā huì lái} is what is expected, {tā kěnéng lái} is what is admitted. Rendering all of them as "will" erases exactly the information the sentence carried.

This is where biblical reading gets rich. In John 3:16 the {和合本} has {shàngdì ài shìrén, shènzhì jiāng tā de dúshēnzǐ cìgěi tāmen}, "God loved the world, to the point of giving his only Son". The {jiāng} ({將}) is the formal future particle, and it stands right next to {cì} ({賜}), "to give, to grant". Together they say something English translation often flattens: the verb of giving is in the **prospective**, not in the completed past. It is not "gave"; it is "to the point of giving", a future opened by someone's decision.

It is the difference between a sentence that asserts and a sentence that commits. And Mandarin has no inflected future to hide that choice behind: it is written into the particle, in plain sight of the reader.`),
  vocab: [
    V('huì', '会', 'will (future predicted) / to know how, to be able'),
    V('yào', '要', 'will (plan, intention); to want'),
    V('jiāng', '将', 'will (formal written future; first half of 將要)'),
    V('děi', '得', 'to have to, to need (3rd tone)'),
    V('bìxū', '必须', 'to be necessary, to be required'),
    V('kěnéng', '可能', 'can, may, it is possible'),
    V('yídìng', '一定', 'certainly, without fail'),
    V('cì', '赐', 'to give, to grant (divine giving)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No future particle inflects the verb: in {wǒ yào chī} and {wǒ chī} the verb is the same {chī}.',
      ),
    },
    { n: '2', text: T('{huì} before the verb is prediction **or** ability; context decides.') },
    {
      n: '3',
      text: T(
        '{yào} before the verb is plan or desire; {jiāng yào} is the formal written form of the same idea.',
      ),
    },
    {
      n: '4',
      text: T(
        'Obligation is {bìxū} (a verb) or {děi} (3rd tone) — never {dé}, which means to obtain.',
      ),
    },
    {
      n: '5',
      text: T(
        '{kěnéng} precedes a verb or an adjective, and the scale is {yídìng} > {bìxū} > {yào} > {huì} > {kěnéng}.',
      ),
    },
  ],
  notes: [
    {
      label: T('One character, three verbs'),
      text: T(
        '{děi} (3rd tone) "to need", {de} (neutral) "manner" and {dé} (2nd tone) "to obtain" are all the character {得}. Grammar does not pick the tone: meaning does. A Mandarin dictionary is indexed by pronunciation, not by character.',
      ),
    },
    {
      label: T('Where the translator reaches for {将}'),
      text: T(
        '{jiāng} does not occur in speech — it is written, formal register. Finding a {将} in the {和合本} is finding a stylistic decision by the translator, not a datum from the Greek: not every solemn passage gets one, and none gets one where the context is colloquial.',
      ),
    },
  ],
  examples: [
    { text: '我会说话', gloss: T('wǒ huì shuōhuà — I know how to speak (and also: I will speak)') },
    { text: '我要去', gloss: T('wǒ yào qù — I will go (it is my plan)') },
    { text: '我得走了', gloss: T('wǒ děi zǒu le — I have to go (it is necessary)') },
    { text: '他可能会来', gloss: T('tā kěnéng huì lái — he may come') },
  ],
  tables: [
    {
      caption: T("The scale of the speaker's commitment"),
      head: [T('Phrase'), T('Strength'), T('{wǒ} + {qù} reads as')],
      rows: [
        [T('{wǒ} {yídìng} {qù}'), T('certainty'), T('I will go, for sure')],
        [T('{wǒ} {bìxū} {qù}'), T('obligation'), T('I must go')],
        [T('{wǒ} {yào} {qù}'), T('plan'), T('I will go (I intend to)')],
        [T('{wǒ} {huì} {qù}'), T('prediction'), T('I will go (I expect to)')],
        [T('{wǒ} {kěnéng} {qù}'), T('possibility'), T('it is possible that I go')],
      ],
    },
    {
      caption: T('The character 得: three verbs, three tones'),
      head: [T('Pronunciation'), T('Meaning'), T('Example')],
      rows: [
        [T('{děi} (3rd tone)'), T('to need, to have to'), T('{wǒ} {děi} {qù} — I have to go')],
        [T('{de} (neutral tone)'), T('manner, way'), T('{màn màn} {de} {chī} — eat slowly')],
        [
          T('{dé} (2nd tone)'),
          T('to obtain, to receive'),
          T('{wǒ} {dé} {dào} yī fēn — I scored a point'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我得走了}, which reading of {得} is right?'),
    options: [T('to need'), T('manner'), T('to obtain'), T('to give')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I have to go" with the particle of obligation: 我____走了'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its value'),
      pairs: [
        { a: T('{會}'), b: T('prediction or ability') },
        { a: T('{要}'), b: T('plan or desire') },
        { a: T('{必須}'), b: T('obligation') },
        { a: T('{可能}'), b: T('possibility') },
        { a: T('{一定}'), b: T('certainty') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In {他可能会来}, which word carries the possibility?'),
      options: [T('{會}'), T('{可能}'), T('{將}'), T('{一定}')],
      answer: 1,
    },
  ],
};
