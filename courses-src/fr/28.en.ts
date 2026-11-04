import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Demonstrative pronouns'),
  subtitle: T('{ce, cet, cette, ces}, the {-ci} and {-là} suffixes and {celui}'),
  section: T('Pronouns'),
  body: C(`## The family that agrees

The French demonstrative has four forms and they agree with the noun in gender and number:

- {ce} — masculine singular: {ce livre} "this book".
- {cet} — masculine singular before a vowel or a silent *h*: {cet homme} "this man", {cet arbre} "this tree".
- {cette} — feminine singular: {cette maison} "this house".
- {ces} — any plural: {ces enfants} "these children".

{cet} is the same euphony as the possessives, with the same exception: {ce héros} "this hero" and {ce hibou} "this owl" keep the -e, because the *h* is aspirated.

## {-ci} and {-là}: distance and scope

The suffixes {-ci} ("here") and {-là} ("there") mark position relative to the speaker:

- {ce livre-ci} "this book here" — near me.
- {ce livre-là} "that book there" — far from me, or in someone else's field of view.

Without a suffix the value is vaguer and leans on {ici} and {là}: {Je vois le livre} "I see the book" is neutral; {Voici le livre} "here is the book" and {Voilà le livre} "there is the book" pin the point.

And there is the pair of **presentative interjections**, which in practice are fossilised demonstratives: {le voilà} "there he is", {la voici} "here she is", {les voilà} "there they are".

## Substitutes: {celui} and company

When the demonstrative replaces the noun, the form changes to the {celui} family:

- {celui} — masculine singular: {celui qui parle} "the one who speaks".
- {celle} — feminine singular: {celle qui habite ici} "the one who lives here".
- {ceux} and {celles} — plural: {ceux que vous voyez} "the ones you see".

With {de}, the pronoun contracts into a single form: {celui de} "the one of", {celle de}, {ceux de}. In {le livre de celui-ci} "the book of that one" the possessive comes before the demonstrative: {celui-ci} is one word.

## The two neutrals: {ceci} and {cela}

With no nominal referent, the demonstrative becomes {ceci} "this" and {cela} "that":

- {Ceci est important.} "This is important." — what I have in front of me, or what I am about to say.
- {Cela ne l'est pas.} "That is not so." — what you already know, at a distance.

And the impersonal verb: {C'est} plus a noun, which becomes {Ce sont} when the noun is plural, even if the antecedent is masculine: **{C'est un livre}** is correct, **{C'est des livres}** is wrong; French switches the demonstrative, not the noun.

## Reading — Louis Segond

The French Bible is generous with {ceci} and {cela}, because the Greek original was too. Fixed expressions like {cela va sans dire} "that goes without saying" and {voilà ce que je voulais dire} "that is what I meant" are alive in modern French, and every one of them is built with {cela} or {ce} plus a verb.

The French Bible also uses {c'est} as a subject very often where Portuguese would use an impersonal verb or a whole clause: **{C'est la foi, ce n'est pas des œuvres}** (Gal 2:16) "it is faith, not works", **{C'est par la foi, non par les œuvres}** — the construction repeats, and it is the most translated one in the New Testament.

And the prettiest part: **{Voici}** and **{Voilà}** are behind half the French titles of series and translations — **{Voici la Nouvelle Bible Louis Segond}** "here is the new Louis Segond Bible". The text uses {voici} to present what is coming and {voilà} to show what is already there.

Prettiest still is **{Ceux qui}** in Gal 4:28, **{ceux qui sont en Christ}** — the Church is called by a third person demonstrative, and the verb agrees with the noun that follows. If {ceux} alone is already odd, there the pronoun has a subject.

## What to take away

{ce, cet, cette, ces} agree with the noun; {-ci} and {-là} say where; {celui, celle, ceux, celles} replace the noun; {ceci} and {cela} work without a referent. And {c'est}/{ce sont} swap the singular for the number of what follows, the one place in the chapter where the demonstrative disagrees with its noun.`),
  vocab: [
    V('ce', 'ce', 'this (masculine singular)'),
    V('cet', 'cet', 'this (masculine + vowel or silent h)'),
    V('cette', 'cette', 'this (feminine singular)'),
    V('ces', 'ces', 'these (plural, any gender)'),
    V('ce héros', 'héros', 'this hero (aspirated h: no {cet})'),
    V('ce livre-ci', 'livre', 'this book here (near me)'),
    V('ce livre-là', 'livre', 'that book there (far from me)'),
    V('celui', 'celui', 'the one (masculine singular)'),
    V('celle', 'celle', 'the one (feminine singular)'),
    V('ceux de', 'ceux', 'the ones of (plural + contracted {de})'),
    V('celui-ci', 'celui', 'that one (joined: one word)'),
    V('ceci', 'ceci', 'this (near me)'),
    V('cela', 'cela', 'that (far, or already known)'),
    V('ce sont', 'être', 'they are (plural, even with a masculine antecedent)'),
    V('voilà', 'voilà', 'there is (fossilised demonstrative)'),
    V('voici', 'voici', 'here is (presents what comes)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is grammatically correct?'),
    options: [
      T("{C'est des livres que j'ai achetés.} — {ce sont} follows the plural"),
      T("{C'est un homme que j'ai vu.} — {c'est} agrees with the plural {hommes}"),
      T("{C'est une heure suffice.} — {c'est} should be {ce sont}"),
      T("{C'est trois petits chats.} — the number does not affect the demonstrative"),
    ],
    answer: 0,
    hint: T(
      'Rule §4: French swaps the demonstrative according to the number of what follows, not according to the antecedent.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Euphony: "___ homme" (this man, masculine noun).'),
      answer: 'cet',
      hint: T('Masculine before a vowel or a silent h: the -e gives way to -t.'),
    },
    {
      kind: 'choose',
      prompt: T('In "{Voici la Nouvelle Bible Louis Segond}", what does {voici} introduce?'),
      options: [
        T('Something coming into being now: {voici} presents, {voilà} points'),
        T('Something already there and visible: {voici} points, {voilà} presents'),
        T('A distant place: {voici} is the equivalent of {là}'),
        T('A cause: {voici} introduces the reason of the sentence'),
      ],
      answer: 0,
      hint: T(
        'The rule is short: {voici} presents what is coming, {voilà} shows what is already there.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its value'),
      pairs: [
        { a: T('{ce livre-ci}'), b: T('near the speaker') },
        { a: T('{ce livre-là}'), b: T('far away or out of sight') },
        { a: T('{celui qui parle}'), b: T('masculine substitute for the noun') },
        { a: T('{ceux de}'), b: T('plural of {celui} with contracted {de}') },
        { a: T('{cela}'), b: T('neuter, with no nominal referent') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ce, cet, cette, ces} agree with the noun in gender and number; {cet} is required before a vowel or silent *h*, and forbidden before an aspirated *h* ({ce héros}).',
      ),
    },
    {
      n: '2',
      text: T(
        'The suffixes {-ci} and {-là} mark distance from the speaker, not time. {Ce livre-là} may have been written an hour ago.',
      ),
    },
    {
      n: '3',
      text: T(
        'When it replaces the noun the demonstrative becomes {celui, celle, ceux, celles} — never {ce livre}, but {celui}. With {de} it contracts into one word: {celui de}, {ceux de}.',
      ),
    },
    {
      n: '4',
      text: T(
        "{C'est}/{Ce sont} disagree with the noun that follows: the number of the verb is that of what comes after, not of the antecedent. {C'est des hommes} is correct even when talking about a known group.",
      ),
    },
    {
      n: '5',
      text: T(
        '{ceci} and {cela} agree with nothing because they do not replace a noun: {Ceci est mon livre} and {Cela est ton livre} swap possession without changing the form.',
      ),
    },
  ],
  notes: [
    {
      label: T('{voici} and {voilà} are cousins of {voir}'),
      text: T(
        'Both words come from the same root as {voir} "to see": {voici} takes the -ci of {ici} "here", {voilà} the -là of {là} "there". And the verb lost its -r because it stopped being a verb — it became the act of pointing something out. French has these fossilisations: words that were once whole sentences and are now gestures. The same happened to {tiens}, from {tenir}, used as {tiens!}, and to {voilà} in {le voilà}, which became a pronoun/apposition rather than a verb.',
      ),
    },
    {
      label: T('The French demonstrative is born of need, not logic'),
      text: T(
        'Greek, Latin and Portuguese have a single demonstrative that changes in number: {este, estes}, {celui, ceux}. French multiplied it because **distance is information**: {ce livre-ci} and {ce livre-là} can sit in the same sentence, which is impossible with a single demonstrative. The price is a family of four forms for the adjective, four more for the substitute, plus two neutrals. In exchange, French settles in two words what Portuguese needs two sentences to say.',
      ),
    },
  ],
  examples: [
    { text: 'ce livre', gloss: T('this book (masculine singular)') },
    { text: 'cet homme', gloss: T('this man (euphony before silent h)') },
    { text: 'ce héros', gloss: T('this hero (aspirated h: no euphony)') },
    { text: 'ce livre-là', gloss: T('that book there') },
    { text: 'celui qui parle', gloss: T('the one who speaks (masculine substitute)') },
    { text: 'ceux de', gloss: T('the ones of (plural + contracted {de})') },
    { text: 'Cela va sans dire', gloss: T('that goes without saying (fixed phrase)') },
    {
      text: 'C’est la foi, ce n’est pas des œuvres',
      gloss: T('it is faith, not works (Gal 2:16)'),
    },
    { text: 'C’est des hommes', gloss: T('they are men (the verb follows the plural)') },
    { text: 'le voilà', gloss: T('there he is ({voilà} fossilised)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Demonstratives and substitutes'),
      head: [T('Gender'), T('Singular'), T('Plural')],
      rows: [
        [T('Masculine'), T('{ce}, {cet} (+ vowel or silent h)'), T('{ces}')],
        [T('Feminine'), T('{cette}'), T('{ces}')],
        [T('Substitute'), T('{celui} / {celle}'), T('{ceux} / {celles}')],
        [T('With {de}'), T('{celui de} / {celle de}'), T('{ceux de} / {celles de}')],
        [T('Neuter'), T('{ceci} (here) / {cela} (there)'), T('{ceci} / {cela}')],
      ],
    },
    {
      caption: T('Table 2 — {-ci} and {-là} on one and the same noun'),
      head: [T('Base'), T('{-ci}: here'), T('{-là}: there')],
      rows: [
        ['{ce livre}', T('{ce livre-ci}'), T('{ce livre-là}')],
        ['{cette maison}', T('{cette maison-ci}'), T('{cette maison-là}')],
        ['{ces livres}', T('{ces livres-ci}'), T('{ces livres-là}')],
        ['{ceci} / {cela}', T('not combinable'), T('not combinable')],
      ],
    },
  ],
};
