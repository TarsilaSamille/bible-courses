import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('{y}, {en} and pronoun order'),
  subtitle: T('{j’y pense}, {j’en parle} and the fixed sequence before the verb'),
  section: T('Pronouns'),
  body: C(`## {y}: to where, where to, in what

{y} replaces a complement introduced by {à}, {chez} or by a noun of place:

- {Je pense à Paris} → {J'y pense} "I think about it / about Paris".
- {Je vais chez Paul} → {J'y vais} "I am going there".
- {Il habite à Lyon} → {Il y habite} "he lives there".

{y} is **a single pronoun**: it marks no person, no number, no gender. It works because the verb already knows who the subject is, and the place is already fixed by the verb or by the preposition it replaces.

And there is one case where {y} is **not** a pronoun: {Il y a} "there is". There {y} is part of the locution, as in {il y a deux livres}. And it shows up in inverted questions too: {y a-t-il}, where the {y} is fixed.

## {en}: about what, of how much

{en} replaces a complement with {de} or a quantity:

- {Je parle du livre} → {J'en parle} "I am talking about it".
- {Je prends du pain} → {J'en prends} "I take some".
- {Elle a deux enfants} → {Elle en a deux} "she has two".
- {Je m'en souviens} "I remember it".
- {Donnez-m'en} "give me some".

The partitive value is essential: **{Je veux du pain ; j'en veux}** "I want bread; I want some". Without the {en} the sentence makes no sense; with it, the quantity disappears and only the idea of "some of that" remains.

## The fixed sequence

Pronouns that accompany a conjugated verb (not an infinitive) have a fixed slot:

**subject + {ne} + reflexive + direct object + indirect object + {y} + {en} + verb + {pas} + adverbs**

In practice, what matters is: **{y} and {en} always go together, at the end of the queue** — after the direct and the indirect object.

- {Je ne te le donne pas} "I do not give it to you" — {te} = direct object, {le} = indirect.
- {Ne lui en parle pas} "Do not speak to him about it" — {lui} = indirect, {en} = {de} + it.
- {Je vous en ai parlé} "I have spoken to you about it".
- {N'y pensez pas} "Do not think about it" — {ne} before {y} becomes {n'y}.

And there is **elision**: {je} + {y} = {j'y}, {je} + {en} = {j'en}, {ne} + {y} = {n'y}, {le} + {en} = {l'en}, {me} + {en} = {m'en}.

## The imperative is different

In the **affirmative** imperative, the pronouns go **after** the verb, joined by a hyphen:

- {Donnez-m'en} "give me some".
- {Va-t'en} "go away".
- {Vas-y} "go there".
- {Donne-le} "give it to him".

In the **negative**, the imperative returns to the normal order: {Ne me donnez pas} "do not give me", {N'y allez pas} "do not go there".

And with the infinitive, everything goes **after** it: {Je veux lui parler} "I want to speak to him" — the pronoun goes behind the infinitive, with its preposition.

## Reading — Louis Segond

The French Bible text uses {y} and {en} all the time, and there are verses made **entirely** of pronoun plus verb:

- The Louis Segond rendering of "forgive us our debtors" is **{Et ne nous laisse pas nos debts}** (Matthew 6:12), where {nous} appears twice and the verb {laisse} carries the {en} inside the preposition {nos}.
- **{Il y a}** is everywhere: **{Il n'y a qu'un seul Dieu}**, **{Il y a de la différence}**. The English "there is" is the same family of words as the French {y}.

The prettiest is **{Là où il y a de l'amour, il y a de la paix}** — a modern echo, but it shows what {y} can do: it acts as an impersonal subject, and that is what lets French say "there is" where English needs "there exists".

And there is the rare but very frequent **{il n'y a pas mieux}** "there is nothing better", with {y} as subject and {pas} in final position, as negation demands.

## What to take away

{y} replaces {à} + place; {en} replaces {de} + complement, and covers quantities too. In the sequence, {y} and {en} are always last before the verb, and elision glues {j'y}, {j'en}, {n'y}, {l'en}. In the affirmative imperative everything changes: the pronouns go **after** the verb, with a hyphen. Once these two are solid, half the trouble with French pronouns is gone.`),
  vocab: [
    V('y', 'y', 'there / about it (replaces {à} + place)'),
    V('en', 'en', 'of it / some (replaces {de} + something)'),
    V('j’y pense', 'penser', 'I think about it ({je} elided)'),
    V('j’en parle', 'parler', 'I am talking about it'),
    V('il y a', 'avoir', 'there is ({y} is part of the locution)'),
    V('n’y pensez pas', 'penser', 'do not think about it ({ne} elides)'),
    V('je vous en ai parlé', 'parler', 'I have spoken to you about it ({en} at the end)'),
    V('donnez-m’en', 'donner', 'give me some (affirmative imperative)'),
    V('va-t’en', 'aller', 'go away! (imperative + {en})'),
    V('vas-y', 'aller', 'go there (imperative + {y})'),
    V('ne me donnez pas', 'donner', 'do not give me (negation: normal order)'),
    V('je veux lui parler', 'parler', 'I want to speak to him (infinitive: pronouns after)'),
    V('elle en a deux', 'avoir', 'she has two ({en} = quantity)'),
    V('il y a deux livres', 'livre', 'there are two books ({y} fixed)'),
    V('ne lui en parle pas', 'parler', 'do not speak to him about it ({lui} + {en})'),
    V('j’en veux', 'vouloir', 'I want some of it — partitive value'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "{Ne lui en parle pas}", what is the order of the pronouns?'),
    options: [
      T('{ne} + {lui} (indirect) + {en} (of + it) + verb + {pas}: {en} is always last'),
      T('{ne} + {en} + {lui} + verb + {pas}: {en} comes before the indirect object'),
      T('{lui} + {ne} + {en} + verb + {pas}: the indirect object opens the sentence'),
      T('{ne} + {lui} + {en} + {pas} + verb: {pas} precedes the verb in the negative'),
    ],
    answer: 0,
    hint: T(
      'The sequence is: {ne}, reflexive, direct object, indirect object, {y}, {en}, verb, {pas}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elision: "Je pense à ce livre" → "___ pense à ce livre".'),
      answer: 'J’y',
      hint: T("{je} + {y} = {j'y}: the -e of {je} drops before {y}."),
    },
    {
      kind: 'choose',
      prompt: T('In "{Donnez-m\'en}", why does the pronoun come after the verb?'),
      options: [
        T('Because it is the affirmative imperative: there pronouns follow, with a hyphen'),
        T('Because {en} can never come before the verb'),
        T('Because the verb {donner} is irregular and displaces the pronoun'),
        T('Because the negation is implicit in the form of the verb'),
      ],
      answer: 0,
      hint: T('Rule §4: only the affirmative imperative moves the pronouns after the verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match the sentence to the pronoun it elides or requires'),
      pairs: [
        { a: T('{Il y a deux livres}'), b: T('{y} fixed: part of {il y a}') },
        { a: T('{Je pense à ce livre}'), b: T("{j'y} — elision of {je} + {y}") },
        { a: T('{Elle a deux enfants}'), b: T('partitive {en}: {elle en a deux}') },
        { a: T("{N'y pensez pas}"), b: T("{n'y} — {ne} elides before {y}") },
        { a: T('{Je veux lui parler}'), b: T('{lui} after the infinitive') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{y} replaces {à} + place or a noun of place ({chez}, {au}, {en}) and marks no person, number or gender: {J'y pense}, {Il y habite}.",
      ),
    },
    {
      n: '2',
      text: T(
        "{en} replaces {de} + complement and has a partitive value: {j'en parle}, {j'en veux}, {elle en a deux}. In {il y a} there is no {en} at all — the {y} is fixed.",
      ),
    },
    {
      n: '3',
      text: T(
        'In the sequence with a conjugated verb the order is fixed: {ne} + reflexive + direct object + indirect object + {y} + {en} + verb + {pas}.',
      ),
    },
    {
      n: '4',
      text: T(
        "In the affirmative imperative the pronouns move **after** the verb, joined by a hyphen: {donnez-m'en}, {va-t'en}, {vas-y}. In the negative they move back in front: {ne me donnez pas}.",
      ),
    },
    {
      n: '5',
      text: T(
        'With the infinitive {me, te, se, lui, leur, y, en} stay **after**: {Je veux lui parler}, {Je vais y aller}. It is the opposite of the affirmative imperative.',
      ),
    },
  ],
  notes: [
    {
      label: T('One {en}, three jobs'),
      text: T(
        '{en} is the most productive pronoun in French, because it does three things at once. First, it replaces the **complement of {de}**: {Je parle du livre} → {J\'en parle}. Second, it has a **partitive value**, rendering the idea of "a little of that": {Je prends du pain} → {J\'en prends}. Third, it works as an **indefinite pronoun**: {Elle en a deux} "she has two" — the word "two" survives and {en} merely says "of that total". One pronoun with three rules of use: in each case the context alone settles it.',
      ),
    },
    {
      label: T('French negation quarrels with {y} and {en}'),
      text: T(`In **{Ne nous laissez pas nos debts}** (Matthew 6:12) the {ne} comes first, {nous} right after it, and {pas} sits **after the verb** — that is the position of {pas} in every French negation. That is why **{ne lui en parle pas}** and not ~~{ne lui parle pas en}~~. And the elision {ne} + {y} is obligatory: **{n'y pensez pas}**, never **{ne y pensez pas}**. The same {ne} + {y} + noun marks a negative statement: **{il n'y a pas de places}** "there are no seats".

What negation does is fence the verb in: {ne} in front, {pas} behind, and everything between them stays untouched. The pronouns {y} and {en} always live inside that fence, and that is why they never escape the negation.`),
    },
  ],
  examples: [
    { text: 'j’y pense', gloss: T('I think about it ({je} elided, {à} + place)') },
    { text: 'j’en parle', gloss: T('I am speaking about it ({de} + the book)') },
    { text: 'j’en veux', gloss: T('I want some of it — partitive value') },
    { text: 'elle en a deux', gloss: T('she has two ({en} with a quantity)') },
    { text: 'il y a deux livres', gloss: T('there are two books ({y} fixed)') },
    { text: 'n’y pensez pas', gloss: T('do not think about it ({ne} elides)') },
    { text: 'ne lui en parle pas', gloss: T('do not speak to him about it ({lui} + {en})') },
    { text: 'donnez-m’en', gloss: T('give me some (affirmative imperative)') },
    { text: 'vas-y', gloss: T('go there (imperative + {y})') },
    {
      text: 'Et ne nous laisse pas nos debts',
      gloss: T('and lead us not into temptation (Matthew 6:12)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Elision of {je} and {ne}'),
      head: [T('Before'), T('Short form'), T('Example')],
      rows: [
        ['{je} + {y}', T("{j'y}"), "{j'y pense}"],
        ['{je} + {en}', T("{j'en}"), "{j'en parle}"],
        ['{ne} + {y}', T("{n'y}"), "{n'y pensez pas}"],
        ['{me/te/le/la} + {en}', T("{m'en}, {t'en}, {l'en}"), "{donnez-m'en}"],
        ['{me/te/se} + {y}', T("{m'y}, {t'y}, {s'y}"), '{vas-y}'],
      ],
    },
    {
      caption: T('Table 2 — The order of the pronouns'),
      head: [T('Position'), T('Who fills it'), T('Example')],
      rows: [
        ['1', T('{ne} (negation)'), '{ne lui en parle pas}'],
        ['2', T('reflexive'), '{il se rend compte}'],
        ['3', T('direct object'), '{je le vois}'],
        ['4', T('indirect object'), '{je lui parle}'],
        ['5', T('{y}'), "{j'y vais}"],
        ['6', T('{en}'), "{j'en parle}"],
        ['7', T('verb and {pas}'), '{je ne le vois pas}'],
        ['Imperativo af.', T('everything goes after the verb'), "{donnez-m'en}"],
      ],
    },
  ],
};
