import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Verb'),
  title: T('Three "if"s, and not one of them inflects the verb'),
  subtitle: T(
    'The construction with {ba}, {to} and {nara} does what Portuguese does by conjugating — which is why a beginner conjugates the wrong verb',
  ),
  body: C(`
## Three constructions, three values

The conditional has already shown up as a particle, and that was true and it was incomplete: what exists is not one Japanese "if", it is **three constructions** with three different values, and picking the wrong one changes what the sentence is claiming.

The most common construction and the most neutral one is {ba}: it says "if" and nothing beyond that, carrying no weight of hypothesis or cause. Beside it, {to} in generic time says "when" and "as", always with a flavour of cause built in. And {nara} is the most causal of the three, "if it is the case, and because of that", and it is the one that appears most in speech, even though it is rare in biblical writing.

What the three share matters more than what separates them.

## The construction with {ba}: the commonest one, and the inflection that does not exist

The full construction is the "if" verb, plus {ba}, plus the result: *ame ga fureba, iku*, "if it rains, I go".

The detail that breaks a beginner is precisely the "if" verb. It **does not get a conditional form of its own**. What it does is enter the linking form, and it is in that form that {ba} glues itself on: the verb for rain goes from *furu* to *furi*, and *furi* plus {ba} gives *fureba*. There is no verb form in Japanese that means "in case of", and there is no Japanese "have" conditional. Whoever looks for that form is looking for something the language never built.

Whoever inflects is applying a rule brought in from another language. Portuguese says "se eu tiver tempo", and "tiver" is a separate form, learned in the conjugation list of the verb "ter". Japanese solves the same problem without touching the verb: a particle in front of it.

The verse that proves this best is John 12:24: 「a grain of wheat, when it falls to the ground and does not die, remains one grain; but if it dies, it bears much fruit.」 The same verb appears twice, negated once and not the other, and what changes is only the particle. The verb did not change form in either case, not because it inflects for the conditional, but because it never inflects for anything of the sort.

## {to}, {nara}, and the "if" that is a date

The construction with {to} in generic time is this: *haru ni naru to, hana ga saku*, "when spring comes, the flowers open". The {to} takes the place of an "if", and the verb stays in the base form. What sets it apart from {ba} is what it carries along: time and cause at the same time, without asking the reader to imagine a hypothesis.

{nara} is the most causal: *jikan ga aru nara, iku*, "if there is time, I go". The {nara} presupposes a state of the world and derives a conclusion from it, and that is why it is the preferred construction of speakers.

And there is a fourth path, the {toki}. In *ie ni tsuite toki, taberu*, "when I get home, I eat", the {toki} is also read as an "if", but it is a **temporal** condition, not a hypothetical one. What separates one family from the other is the verb: before the {toki}, the verb comes in the non-inflected form, and that is what says the clause is a date and not a hypothesis.

## The doubt and the "not"

The doubt particle {kashira} means "if by any chance". The construction is {toki} plus {wa}, plus the verb, plus {kashira}: *shinjitai nara toki wa, shokai ga aru kashira*, "if by any chance the market will be open". With {nara} the same idea comes out more directly, without the layer of doubt.

And the "not" of the conditional is the point where the construction changes most. It is not the ordinary {nai}. That one negates a state: *gakusei* plus *aru* is "to be a student", and the negative is *arunai*, "not to be a student". In the conditional you do not negate a state: you negate the "if" clause itself, and to do that the construction gets rewritten from end to end.

There are two doors. The first is the negative itself plus {ba}: *toki ga nakereba iku*, "if there is no time, I go". The second names the clause with {toki} plus {wa} and puts the negative in front of it: *toki ga nai nara ikenai*, "if there is no time, I will not go". Both accept the same whole clause with the verb in the linking form, and that is why the {toki} appears: it gives a name to the clause, and the negative leans on that name.

The side effect is the nicest thing here. In *jikan ga aru nara ikimasu*, the inflection *ikimasu* sits on the **result** verb, and the {nara} is a particle of futurity. Japanese says "I will go, in case there is time" the way one puts the hypothesis in the "if" and the inflection on everything else. The inflection Portuguese puts inside the verb has moved to the outside of it, and that is what the lesson on time already pointed out: time is made of particles, and the conditional is just one more.
`),
  vocab: [
    V('ba', 'ば', 'the most common and most neutral "if": hypothesis without weight of cause (ba)'),
    V('nara', 'なら', 'the most causal "if": "if it is the case, and because of that" (nara)'),
    V('to', 'と', 'generic time: "when", "as", with cause built in (to)'),
    V(
      'toki',
      '時',
      'time; with the verb in the non-inflected form, it is a temporal clause (toki)',
    ),
    V(
      'toki wa',
      '時',
      'opens the "if" clause, naming it so the negative can attach to it (toki wa)',
    ),
    V('wa', 'は', 'topic; here it marks the "if" clause in front of the verb (wa)'),
    V('kashira', 'かしら', 'doubt particle: "if by any chance", "perhaps" (kashira)'),
    V(
      'nakereba',
      'なければ',
      '"if there is not": the negative in the linking form, plus {ba} (nakereba)',
    ),
    V(
      'nai',
      'ない',
      'negative in the base form; in the conditional it negates the clause, not a state (nai)',
    ),
    V('ga', 'が', 'subject particle, and here the foothold of the negative (ga)'),
    V('aru', 'ある', 'to be, to exist: the verb whose negative in lesson 7 is *arunai* (aru)'),
    V('tsunagaru', 'つながる', 'to be connected, to remain attached (tsunagaru)'),
    V('shinuru', '死ぬ', 'to die: the verb John 12:24 repeats across both conditions (shinuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'There is no conditional form of the verb: the "if" is a particle that comes before it, and the "if" verb does not inflect at all.',
      ),
    },
    {
      n: '2',
      text: T(
        'There are three constructions with three values: {ba} is the most neutral, {to} in generic time is time and cause at once, {nara} is the most causal and the most spoken.',
      ),
    },
    {
      n: '3',
      text: T(
        'With {ba}, the "if" verb enters the linking form and the particle glues itself to it: *furi* plus {ba} gives *fureba*.',
      ),
    },
    {
      n: '4',
      text: T(
        'The "not" of the conditional is not the {nai} that negates a state in lesson 7: it negates the whole clause, and the construction is rewritten — negative plus {ba}, or {toki} plus {wa} plus the negative.',
      ),
    },
    {
      n: '5',
      text: T(
        'What separates the temporal condition from the hypothetical "if" is the verb: before {toki} it comes in the non-inflected form, as in lesson 16.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why a beginner inflects'),
      text: T(
        'Portuguese says "se eu **tiver** tempo", and "tiver" is a separate form, learned in the conjugation list of the verb "ter". Japanese has neither that form nor any other with that value. The sign that the rule does not apply is that the verb of the following clause is free: it can stay in the base form or rise to the polite one, and the "if" is unchanged either way.',
      ),
    },
    {
      label: T('The clause gets a name before it is negated'),
      text: T(
        'In the negative conditional the {toki} is not marking time: it is what gives a name to the "if" clause, and it is on that name that the negative rests. It is the same economy as lesson 16, with a particle doing the work of a whole phrase. That is why "if there is no time" comes out in two ways — *toki ga nakereba* or *toki ga nai nara* — and both put the same name in the same place.',
      ),
    },
  ],
  examples: [
    {
      text: '一粒の麦は、地に落ちて死ななければ、一粒のままである。だが、死ねば、多くの実を結ぶ。',
      gloss: T(
        'hitotsubu no mugi wa, chi ni ochite shinakereba, hitotsubu no mama de aru. daga, shinereba, ōku no minori o musubu — the grain, if it does not die, stays one grain; but if it dies, it bears much fruit (John 12:24)',
      ),
    },
    {
      text: 'ぶどうの枝が、木につながっていなければ、自分では実を結ぶことができない',
      gloss: T(
        'budō no eda ga, ki ni tsunagatte inakereba, jibun de wa minori o musubu koto ga dekinai — if the branch is not connected to the vine, it cannot bear fruit by itself (John 15:4)',
      ),
    },
    {
      text: '自分に罪がないと言うなら、自らを欺いており、真理はわたしたちの内にありません。',
      gloss: T(
        'jibun ni tsumi ga nai to iu nara, jibun o azayuite ori, shinri wa watashitachi no uchi ni arimasen — if we say we have no sin, we deceive ourselves (1 John 1:8)',
      ),
    },
    {
      text: '天から与えられなければ、人は何も受けることができない。',
      gloss: T(
        'ten kara aware rareba, hito wa nanimo ukeru koto ga dekinai — if it is not given from heaven, a person receives nothing (John 3:27)',
      ),
    },
    {
      text: '春になると、花が咲く',
      gloss: T('haru ni naru to, hana ga saku — when spring comes, the flowers open'),
    },
  ],
  tables: [
    {
      caption: T('The three "if" constructions, side by side'),
      head: [
        T('Construction'),
        T('What the "if" verb does'),
        T('The value it carries'),
        T('Example'),
      ],
      rows: [
        [
          T('{ba}'),
          T('enters the linking form, and {ba} glues itself to it'),
          T('neutral hypothesis, no cause: the most common'),
          T('{雨が降れば} — "if it rains"'),
        ],
        [
          T('{to}'),
          T('stays in the base form'),
          T('generic time: "when", with cause built in'),
          T('{春になると} — "when spring comes"'),
        ],
        [
          T('{nara}'),
          T('stays in the base form'),
          T('the most causal: "if it is the case, and because of that"'),
          T('{時間があるなら} — "if there is time"'),
        ],
      ],
    },
    {
      caption: T('Negating the conditional: the "not" rewrites the construction'),
      head: [T('What you want to say'), T('What is written'), T('Where the "not" is')],
      rows: [
        [
          T('if there is no time'),
          T('{toki} {ga} {nakereba}'),
          T('in the negative of the linking form, plus {ba}'),
        ],
        [
          T('if there is no time, I will not go'),
          T('{toki} {ga} {nai} {nara}'),
          T('in the negative of the base form, and {nara} opens the condition'),
        ],
        [
          T('if by any chance the market is open'),
          T('{toki} {wa}, verb, {kashira}'),
          T('the doubt comes after, and negates nothing'),
        ],
      ],
    },
    {
      caption: T('Temporal condition or hypothesis? The verb before {toki} decides'),
      head: [T('What comes before the {toki}'), T('How it is read'), T('Example')],
      rows: [
        [
          T('verb in the non-inflected form'),
          T('temporal clause: "when"'),
          T('{家に着いた時} — when I got home'),
        ],
        [
          T('inflected verb'),
          T('descriptive: "at the moment when I was"'),
          T('{着いていた時} — at the moment when I was arriving'),
        ],
        [
          T('possessive particle in place of the verb'),
          T('noun: only "time"'),
          T('{時の流れ} — the course of time'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {天から与えられなければ} (John 3:27), what marks the conditional?'),
    options: [
      T('a particle glued to the linking form of the verb'),
      T('a conditional form of the verb, like the Portuguese "tiver"'),
      T('the verb inflected for the past'),
      T('the question particle that closes the sentence, of the *ka* kind'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the "if" of the neutral construction: 雨が降____、行く'),
      answer: 'れば',
    },
    {
      kind: 'match',
      prompt: T('Match the construction to the value it carries'),
      pairs: [
        { a: T('{ba}'), b: T('neutral hypothesis: the most common of the three') },
        { a: T('{to}'), b: T('generic time: "when", with cause built in') },
        { a: T('{nara}'), b: T('the most causal, and the most common in speech') },
        { a: T('{kashira}'), b: T('doubt: "if by any chance"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Portuguese says "se eu tiver tempo". Why does a beginner inflect the verb in Japanese?',
      ),
      options: [
        T(
          'because they are looking for a conditional form of the verb that Japanese does not have: here the "if" is a particle',
        ),
        T(
          'because in Japanese the "if" verb inflects into a form of its own, different from the result',
        ),
        T('because the particle {ba} comes after the verb and forces it to inflect'),
        T('because the "if" verb is always the same as the result verb'),
      ],
      answer: 0,
    },
  ],
};
