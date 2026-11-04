import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Combined pronouns, ci and ne'),
  subtitle: T('me lo, te ne, ce lo'),
  section: T('The pronouns and the passive'),
  body: C(`## The order of the pronouns is fixed

When an indirect pronoun ({mi}, {ti}, {si}, {ci}, {vi}) and a direct one ({lo}, {la}, {li}, {le}) appear together, Italian **collapses them into a single form**, in an order that cannot be negotiated: {me lo}, {te ne}, {ce lo}, {glielo}. The object always comes in the middle, as in {me lo dai}.

The rule about {ci} is the **one configuration** to know: before {lo}, {la}, {li} or {le}, {ci} becomes {ce}, because {ce} plus {lo} sounds better than {ci} plus {lo}. From {ce lo diamo} ("we give it to him") comes {dammelo}, and the whole group can stick to the verb: {diccelo}, {eccolo}.

## {Ci}, {ce} and {vi}: three that get mixed up

{ci} is place: {Qui ci trova?}, "Who is here?"; {Vivo qui}, where {ci} sticks to {qui} and is almost redundant. {ci} can also stand for a person, the Italian habit of using {ci} for "us": {Dio ci ama}, "God loves us". And with verbs like {dare}, {ci} is the {a} to us: {Dammi il pane}.

{vi} is {voi} as an object, {vi do}, "to you I give". And {si} is the third-person reflexive: {loro parla di sé}, "he speaks of himself".

## {Ne}: the replacement for {di}

{ne} replaces a complement introduced by {di}, and the preposition disappears: {parla di Gesù} becomes {ne parla}. {Ho visto un libro} becomes {ne ho visto uno}. {ne} comes before the verb, as a clitic, and what it replaces can be a person, a place or a quantity: {Vieni da Italia? — Sì, ne vengo}.

Translating {ne} as "of him" is wrong half the time. {Ne ho visto due} is neither "I saw two of them" nor "I am two years old": it is "I saw two, of the ones I saw".

## {Dio} {ce} {lo} {dona}

In {Dio ce lo dona}, {ce} points to us, {lo} identifies what is given, and {donare} is the verb. It is **the shortest construction in Italian and the most informative**: pronoun, person, thing and action in a phrase of five words. A literal rendering of "Dio ce lo dona" misses the point; in natural Italian it is {Dio ce lo dona}, "God gives us this".

## Reading criterion

Whenever you see two pronouns glued together, undo them in order: who receives ({mi}, {ci}, {vi}), what is received ({lo}, {la}, {li}, {le}), and {ne}. And if the sentence has {ne} with no visible {di}, look for the {di} it replaced: it is in the previous clause, or it is implied.`),
  vocab: [
    V('me lo', 'me', 'it to me'),
    V('ce lo', 'ci', 'it to us'),
    V('te ne', 'te', 'it to you'),
    V('pensaci', 'pensare', 'think about it!'),
    V('glielo', 'gli', 'it to him'),
    V('melo', 'me', 'it to me'),
    V('ci', 'ci', 'us / there'),
    V('vi', 'vi', 'to you'),
    V('ne', 'ne', 'of it/of them'),
    V('si', 'si', 'himself'),
    V('donare', 'donare', 'to give'),
    V('vendere', 'vendere', 'to sell'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why ce lo and not ci lo?'),
    options: [
      T('ci becomes ce before lo, la, li or le'),
      T('They are different words'),
      T('It is a typing error'),
      T('Because ci is plural'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transform: ci + lo → ___'),
      answer: 'ce lo',
      hint: T('Ci changes shape before lo.'),
    },
    {
      kind: 'fill',
      prompt: T('Transform: parla di me → ___ parla'),
      answer: 'ne',
      hint: T('Ne replaces di me.'),
    },
    {
      kind: 'choose',
      prompt: T('What does ne ho due mean?'),
      options: [
        T('I am two years old'),
        T('I have two of them'),
        T('I give two to him'),
        T('I am in two places'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The order is indirect, direct, {ne}: {me lo}, {te ne}, {ce lo}, {glielo}.'),
    },
    {
      n: '2',
      text: T('{Ci} becomes {ce} before {lo}, {la}, {li} or {le}: {ce lo diamo}, never {ci lo}.'),
    },
    {
      n: '3',
      text: T(
        '{Vi} is {voi} as an object, {vi do}, and {si} is the third-person reflexive, {loro parla di sé}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ne} replaces an expression with {di}, and {di} disappears: {parla di Gesù} → {ne parla}.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the affirmative imperative the group glues to the verb: {dammelo}, {diccelo}, {eccolo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Ne} and {ci} in the same slot'),
      text: T(
        '{ne} and {ci} occupy the same position: where one goes in, the other goes in. It is a rule of replacement and not of sense, which is why {me ne} and {me ci} live side by side in spoken Italian.',
      ),
    },
    {
      label: T('Five words, three facts'),
      text: T(
        '{Dio ce lo dona} is the shortest construction in Italian and the most informative: the pronoun {ce} says to whom, {lo} says what, and the verb says the action. English needs a whole clause for the three.',
      ),
    },
  ],
  examples: [
    { text: 'Dammi il libro.', gloss: T('Give me the book.') },
    { text: 'Me lo dai?', gloss: T('Will you give it to me?') },
    { text: 'Dio ce lo dona.', gloss: T('God gives us this.') },
    { text: 'Ne parla bene.', gloss: T('He speaks well of it.') },
    { text: 'Ne ho visto due.', gloss: T('I saw two.') },
    { text: 'Pensaci.', gloss: T('Think about it.') },
    { text: 'C’era un uomo.', gloss: T('There was a man.') },
    { text: 'Parlane con lui.', gloss: T('Talk to him about it.') },
  ],
  tables: [
    {
      caption: T('Ordem dos pronomes'),
      head: ['Indiretto', 'Diretto', 'Particella'],
      rows: [
        ['mi, ti, si, ci, vi', 'lo, la, li, le', 'ne'],
        ['me lo', 'ce lo', 'te ne'],
        ['glielo', 'melo', 'dillo'],
      ],
    },
    {
      caption: T('Ce, ci, vi, ne, si'),
      head: ['Pronome', 'Esempio', 'Glossa'],
      rows: [
        ['ci', 'Dio ci ama', 'noi'],
        ['ce', 'Dio ce lo dona', 'noi + lo'],
        ['vi', 'vi do', 'voi'],
        ['ne', 'ne parla', 'di qualcosa'],
        ['si', 'si lava', 'riflessivo'],
      ],
    },
  ],
};
