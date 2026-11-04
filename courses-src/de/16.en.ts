import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Adverbs'),
  subtitle: T('gern, heute, manchmal — the word that never declines'),
  section: T('Adjectives and adverbs'),
  body: C(`## The adverb is the easiest of all

An adverb modifies a verb, an adjective or another adverb, and it is **invariable**: {gut} gives {sehr gut}, {schön} gives {sehr schön}, {oft} gives {sehr oft}. Nothing declines, nothing has gender, and the form is the same in the singular and in the plural. That even holds for the superlative: {am besten} and {am schönsten} are quality forms used exactly like adverbs.

The formation is almost mechanical. Most quality adverbs are born from an adjective: delete the ending. {schön} gives {schön}, {groß} gives {groß}, {leicht} gives {leicht}, {früh} gives {früh}. The beginner's shortcut is exactly that: if the word does not decline, it is an adverb; if it does decline, it is not one yet.

Two families escape the rule:

**1. Quality adverbs with no rule.** {gern} «gladly» stays {gern}; {oft} gives {öfter}; {viel} gives {mehr}; {teuer} gives {teurer}. There are few of them, but they have to be learned.

**2. Adverbs with no adjective at all.** {heute}, {morgen}, {gestern}, {hier}, {dort}, {ja}, {nein}, {sehr}, {nicht}, {immer}, {nie}, {manchmal}. No rule produces them.

## Position: the adverb lives between verb and object

The golden rule is short: a manner, time or place adverb that is **not** a negation stands between the conjugated verb and the object.

- {Ich fahre morgen nach Berlin.} «I am going to Berlin tomorrow.»
- {Ich sehe den Film heute Abend.} «I am watching the film this evening.»
- {Er spricht gut Deutsch.} «He speaks good German.»

With the verb last, the inverted order stays correct: {Morgen fahre ich nach Berlin.} It is literary and rare in everyday speech.

What does **not** go in that slot are negating and degree adverbs: {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug}, {ziemlich}. Those come **after** the element they negate or intensify: {Er ist sehr müde}, {Ich habe nur wenig Zeit}, {Das ist nicht mein Buch}.

## {nicht} and {kein}

The division of labour is strict. {nicht} negates verbs, adjectives and adverbs, and it is invariable. {kein} negates **only** the noun, and it declines like an article: {kein Mann}, {keine Frau}, {kein Kind}, {mit keinem Freunde}, {keine Bücher}.

From that follows the commonest mistake of Portuguese speakers: in {Ich habe keine Zeit} «I have no time» the negation is {kein} because the target is {Zeit}. Never {Ich habe nicht Zeit}.

Note what {nicht} marks: it clings to the negated element. {Ich sehe den Film nicht} denies the verb {sehen}; {Ich sehe nicht den Film} denies the object {den Film}. The difference is real and a native ear catches it.

To say "not only", German stacks the two: {Das ist nicht nur ein Satz} «that is not merely a sentence» — {nicht} negates the adverb {nur} and {kein} reinforces the noun.

## Double negation

What Portuguese does with a single "not", German sometimes does with two: {Ich habe nichts gesehen} and {Ich habe nicht etwas gesehen} mean practically the same. In both cases the noun takes {n} plus a negative item ({nichts}, {niemand}, {kein}). The pair {nicht nichts} «not at all» is rare, but {kein einziger} «not a single» is common: {Er hat kein einziges Wort gesagt} «He did not say a single word».

## What to take away

An adverb is the non-declining form; you make one by deleting the ending of the adjective; {nicht} negates verbs and adjectives, {kein} negates nouns and declines; and the position of {nicht}, {sehr}, {nur} and {immer} is always after the element they modify.`),
  vocab: [
    V('sehr', 'sehr', 'very (before an adjective, an adverb or after -er)'),
    V('gern', 'gern', 'gladly, with pleasure (comp.: lieber)'),
    V('oft', 'oft', 'often, frequently (comp.: öfter)'),
    V('manchmal', 'manchmal', 'sometimes, now and then'),
    V('leise', 'leise', 'quietly, softly [ˈlaɪ̯zə]'),
    V('hoch', 'hoch', 'loudly; early (adv.)'),
    V('früh', 'früh', 'early (adv.); early-rising (adj.)'),
    V('teuer', 'teuer', 'expensive (adv., in expressions)'),
    V('nicht', 'nicht', 'not; never (negates a verb, an adjective or an adverb)'),
    V('kein', 'kein', 'no, not a (negates a noun; declines)'),
    V('nichts', 'nichts', 'nothing'),
    V('immer', 'immer', 'always'),
    V('nie', 'nie', 'never'),
    V('nur', 'nur', 'only, just'),
    V('ziemlich', 'ziemlich', 'rather, fairly'),
    V('bald', 'bald', 'soon'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the correct negation of {Ich habe Zeit}?'),
    options: [
      T('{Ich habe keine Zeit} — {kein} negates the noun {Zeit}'),
      T('{Ich habe nicht Zeit} — {nicht} applied to a noun'),
      T('{Ich habe kein Zeit} — {kein} without gender inflection'),
      T('{Ich bin keine Zeit} — the verb is wrong'),
    ],
    answer: 0,
    hint: T('Rule §4: {nicht} negates verbs and adjectives; {kein} negates nouns and declines.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Turn the adjective into an adverb: {Die Tür ist ___ (offen).'),
      answer: 'offen',
      hint: T('The adverb drops the ending: {offen} stays {offen}, without the final {e}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the function to its adverb.'),
      pairs: [
        { a: T('negate a noun'), b: T('kein') },
        { a: T('negate a verb'), b: T('nicht') },
        { a: T('intensify an adjective'), b: T('sehr') },
        { a: T('restrict to a single one'), b: T('nur') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In which sentence is {nicht} in the right position?'),
      options: [
        T('{Ich sehe den Film nicht} — {nicht} denies the verb {sehen}'),
        T('{Ich sehe nicht den Film} — {nicht} denies the verb {sehen}'),
        T('{Ich nicht sehe den Film} — {nicht} after the pronoun {ich}'),
        T('{Den Film nicht sehe ich} — {nicht} at the start of the sentence'),
      ],
      answer: 0,
      hint: T('Rule §5: {nicht} goes at the end of the group it negates.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb is invariable: it does not decline in gender, number or case. {Er spricht gut} and {Sie sprechen gut} use exactly the same word.',
      ),
    },
    {
      n: '2',
      text: T(
        'The formation rule: a quality adverb is the adjective without its ending. {schön} gives {schön}, {groß} gives {groß}, {leicht} gives {leicht}. If it takes an ending, it is not an adverb yet.',
      ),
    },
    {
      n: '3',
      text: T(
        'Manner, time and place adverbs that are not negations stand between the conjugated verb and the object: {Er spricht gut Deutsch}, {Ich fahre morgen nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{nicht} negates verbs, adjectives and adverbs and is invariable. {kein} negates the noun alone and declines like an article: {kein}, {keine}, {keinem}, {keine}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negating and degree adverbs — {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug} — come **after** the element they modify: {Er ist sehr müde}, {Ich habe nur wenig Zeit}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Delete the ending, and nothing else'),
      text: T(
        "The learner's trick is always the same: write the adjective and delete the ending. {schön} gives {schön}; {hoch} gives {hoch}; {teuer} gives {teuer}. The difference lies in that ending, which is exactly why the rule works. Few words escape: {gern} gives {lieber}, not {gerner}; {oft} gives {öfter}, not {ofter}; {viel} gives {mehr}, not {vieler}. That is five or six items, and they settle later chapters in one go.",
      ),
    },
    {
      label: T('Bible reading'),
      text: T(
        "After the articles, {nicht} is the most frequent word in Luther's Bible. In John 3:16, {so hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab} — notice that {dass} introduces the consequence and that the conjugated verb {hat} already sits in the middle. In Romans 3:23, {Es sind aber alle gesündigt und ermangeln des Ruhmens, der vor Gott sein sollte} «all have sinned and fall short of the glory that they should have before God»: there a {nicht} would be redundant, because it is {ermangeln} «to fall short» that carries the negation. The pattern repeats: in biblical German, negation is rarely a single isolated word.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('I am going to Berlin tomorrow (time adverb between verb and object).'),
    },
    {
      text: 'Er spricht sehr gut Deutsch.',
      gloss: T('He speaks very good German ({sehr} intensifies the adverb {gut}).'),
    },
    {
      text: 'Sie kommt nicht mit.',
      gloss: T('She is not coming along ({nicht} after the verb, negating {mit}).'),
    },
    {
      text: 'Das ist nicht mein Buch.',
      gloss: T('That is not my book ({nicht} immediately before what it negates).'),
    },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('I have no time ({kein} negates the noun and declines).'),
    },
    {
      text: 'Er trinkt nur Kaffee.',
      gloss: T('He only drinks coffee ({nur} goes after the verb, outside the manner slot).'),
    },
    {
      text: 'Wir kommen immer pünktlich.',
      gloss: T('We always arrive on time ({immer} after the conjugated verb).'),
    },
    {
      text: 'Er ist nicht oft hier.',
      gloss: T('He is not often here ({nicht} negates the adverb {oft}).'),
    },
    {
      text: 'Morgen fahre ich nach Berlin.',
      gloss: T('Tomorrow I am going to Berlin (inverted order, the verb goes last).'),
    },
    {
      text: 'Er hat kein einziges Wort gesagt.',
      gloss: T('He did not say a single word ({kein} plus {n} on the noun).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — From adjective to adverb'),
      head: [T('Adjective'), T('Adverb'), T('Note')],
      rows: [
        ['gut', 'gut', 'forma igual'],
        ['schön', 'schön', 'forma igual'],
        ['schnell', 'schnell', 'forma igual'],
        ['leise', 'leise', 'forma igual'],
        ['groß', 'groß', 'forma igual'],
        ['früh', 'früh', 'forma igual'],
        ['hoch', 'hoch', 'forma igual'],
        ['teuer', 'teuer', 'forma igual'],
        ['gern', 'gern', 'forma especial: comp. lieber'],
        ['oft', 'öfter', 'forma especial: comp. öfter'],
        ['viel', 'mehr', 'forma especial: comp. mehr'],
        ['teuer', 'teurer', 'forma especial: comp. teurer'],
      ],
    },
    {
      caption: T('Table 2 — Where the adverb stands'),
      head: [T('Type'), T('Position'), T('Example')],
      rows: [
        ['modo, tempo, lugar', 'entre o verbo e o objeto', 'Ich fahre morgen nach Berlin.'],
        [
          'modo, tempo, lugar (verbo no fim)',
          'antes do verbo, raro',
          'Morgen fahre ich nach Berlin.',
        ],
        ['negação (nicht)', 'no fim do grupo negado', 'Ich sehe den Film nicht.'],
        ['intensificador (sehr)', 'depois do elemento ampliado', 'Er ist sehr müde.'],
        ['restritor (nur)', 'depois do elemento limitado', 'Ich trinke nur Wasser.'],
        ['frequência (immer, oft)', 'depois do verbo conjugado', 'Wir kommen immer pünktlich.'],
      ],
    },
  ],
};
