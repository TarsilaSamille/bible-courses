import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Relative pronouns'),
  subtitle: T('{qui, que, dont, où} and the formal relatives {lequel, à qui}'),
  section: T('Pronouns'),
  body: C(`## Joining two clauses

A relative pronoun does two things at once: it turns the second clause into a subordinate one and stands for the noun missing from it. **{L'homme qui parle}** "the man who speaks" — {qui} is the subject of {parle}. Swapping in {que} changes everything: **{L'homme que je vois}** "the man I see" — now {que} is the object.

There are four simple relatives, and each answers one function:

- **{qui}** — subject: {les élèves qui prient} "the pupils who pray".
- **{que}** — direct object: {la parole que j'ai entendue} "the word I heard".
- **{dont}** — "of whom / of which": {l'homme dont je parle} "the man I am speaking of".
- **{où}** — place or time: {la ville où je vis} "the city where I live".

## The rule of the human antecedent

The point that surprises most is the use of {qui} after a preposition when the antecedent is a person: **{la femme à qui je parle}** "the woman I am speaking to". After a preposition, {que} is **forbidden** for people; for things, it is {lequel} that appears: **{le livre avec lequel j'apprends}** "the book I learn with".

The practical rule: **after a preposition + person = {qui}; after a preposition + thing = {lequel}**.

## {dont} is not only "of whom"

{dont} works with any **possessive noun** of Latin origin, not only with people:

- {l'homme dont je parle} "the man I am speaking of".
- {le livre dont je parle} "the book I am speaking of" — swapping {de que} for {dont}.
- {Dieu, dont l'amour est éternel} "God, whose love is everlasting" — {dont} here translates **possession**, as Latin {cuius} did.
- {le jour dont il est venu} "the day he came" — temporal sense.

And there is the pair with {de qui} and {à qui}, which is {dont} turned inside out: {la femme dont je parle} "the woman I am speaking of" and {la femme à qui je parle} "the woman I am speaking to" — the preposition leaves the relative and moves in front of it.

## {lequel} and its agreement

After a preposition, {lequel} agrees in gender and number: {lequel}, {laquelle}, {lesquels}, {lesquelles}.

- {le livre lequel j'ai lu} "the book I read".
- {les livres lesquels je lis} "the books I read".
- {les gens avec lesquels je travaille} "the people I work with".

And the popular use of {lequel} as a noun, the "he who": **{la ville de laquelle il vient}** "the city he comes from".

## {ce qui} and {ce que}

When there is no antecedent, the relative picks up {ce}: **{ce qui}** is subject, **{ce que}** is object.

- {Fais ce qui est juste} "Do what is right" — {ce qui} is the subject of {est}.
- {Dis ce que tu penses} "Say what you think" — {ce que} is the object of {dis}.
- {Je sais ce qui manque} "I know what is missing".

And there are the combinations with prepositions, which keep the referent: **{à ce que, de ce que, pour ce que}** — {C'est à ce que je travaille} "That is what I work for".

## Reading — Louis Segond

The French Bible uses the relative all the time, and its most productive pattern is the pair **{celui qui}** plus a verb, which renders the Greek and Hebrew "the one who":

- **{Celui qui écoute la parole de Dieu et qui la met en pratique}** (Luke 6:47) "the one who hears the word of God and puts it into practice" — {qui} twice, with the subject repeated.
- **{Dieu, dont l'amour est éternel}** (1 John 4:8) — {dont} in the sense of possession.
- **{Les langues qui sont enflammées}** (Mark 16:8) — {qui} with a plural antecedent.

And the finest case of the chapter: in antithesis the French Bible prefers the **demonstrative substitute** to the pronoun: **{Moi, moi, je ne suis pas le juste}** (Luke 18:11) "I, I am not the righteous one", where the antithesis lands better on a noun than on {qui}. Compare Latin {ego iustus} and Greek {ego eimi dikaios}: the French translator swapped pronoun for noun so the sentence could breathe.

Reading aloud reveals one more thing: the French relative has **no gender in {qui} and {que}**, but it does in {lequel}. So {lequel} shows up mostly in translations where the Greek marked {ho}, {hē}, {hoi}.

## What to take away

{qui} is subject, {que} is object, {dont} is "of whom" or possession, {où} is place and time. After a preposition, {qui} for a person and {lequel} for a thing, agreeing in gender and number. With no antecedent, {ce qui} and {ce que} — and that is the one thing you need to carry out of this chapter to read the French Bible.`),
  vocab: [
    V('qui', 'qui', 'who (subject) / to whom (after a preposition)'),
    V('que', 'que', 'that (object); forbidden after a preposition'),
    V('dont', 'dont', 'of whom / of which; also possession'),
    V('où', 'où', 'where; also "on the day when"'),
    V('lequel', 'lequel', 'which (after a preposition + thing)'),
    V('laquelle', 'lequel', 'which (feminine; {de laquelle} = from where)'),
    V('lesquels', 'lequel', 'which (masculine plural)'),
    V('à qui', 'qui', 'to whom (indirect: {la femme à qui})'),
    V('ce qui', 'qui', 'what (subject, no antecedent)'),
    V('ce que', 'que', 'what (object, no antecedent)'),
    V('à ce que', 'ce que', 'for; that is what'),
    V('l’homme qui parle', 'parler', 'the man who speaks ({qui} = subject)'),
    V('la parole que j’ai entendue', 'entendre', 'the word I heard ({que} = object)'),
    V('Dieu, dont l’amour', 'Dieu', 'God, whose love ({dont} = possession)'),
    V('celui qui écoute', 'celui', 'the one who hears (Luke 6:47)'),
    V('la ville de laquelle il vient', 'venir', 'the city he comes from'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "{C\'est à ce que je travaille}", what does {ce que} do in the sentence?'),
    options: [
      T(
        'It stands for the direct object of {travaille}, and {à ce que} supplies the preposition that {dont} could not',
      ),
      T('It is the subject of {travaille}, as in {ce qui est juste}'),
      T('It marks place: {ce que} is equivalent to {où}'),
      T('It is a relative pronoun with no antecedent and no fixed function'),
    ],
    answer: 0,
    hint: T(
      'Rule §5: with no antecedent, {ce qui} is subject and {ce que} is object; the preposition goes on the pair, not inside it.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('"Le livre dont je parle" equals "le livre ___ je parle".'),
      answer: 'de',
      hint: T('{dont} = {de} + relative. After a preposition, {que} cannot appear.'),
    },
    {
      kind: 'choose',
      prompt: T('In "{Les gens avec lesquels je travaille}", the relative is {lequel} because…'),
      options: [
        T('it follows a preposition and the antecedent is plural ({lesquels})'),
        T('because the verb {travailler} is irregular in the present'),
        T('because the antecedent is human and it should be {qui}'),
        T('because {avec} is a compound preposition'),
      ],
      answer: 0,
      hint: T(
        'Rule §2: preposition + person = {qui}; preposition + thing = {lequel}, with agreement.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the function to the matching relative'),
      pairs: [
        { a: T('subject of the subordinate clause'), b: T('{qui}') },
        { a: T('direct object of the subordinate clause'), b: T('{que}') },
        { a: T('"of whom" or possession'), b: T('{dont}') },
        { a: T('place or time'), b: T('{où}') },
        { a: T('subject with no antecedent'), b: T('{ce qui}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{qui} is subject and {que} is object: {l'homme qui parle} against {l'homme que je vois}. Swapping the two destroys the sentence.",
      ),
    },
    {
      n: '2',
      text: T(
        'After a preposition {que} is forbidden for people: use {qui}. For things, use {lequel}, which agrees in gender and number ({lequel}, {laquelle}, {lesquels}, {lesquelles}).',
      ),
    },
    {
      n: '3',
      text: T(
        "{dont} equals {de} + relative and works with people and things; with possessives it renders possession: {Dieu, dont l'amour est éternel}.",
      ),
    },
    {
      n: '4',
      text: T(
        '{où} marks place without a preposition and time when the antecedent is a date or a period noun: {la ville où je vis}, {le jour où il est venu}.',
      ),
    },
    {
      n: '5',
      text: T(
        'With no antecedent the relative takes {ce}: {ce qui} is subject, {ce que} is object. With a preposition the pair is {à ce que}, {de ce que}, {pour ce que} — and the preposition never goes inside the {que}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why {que} is also a conjunction'),
      text: T(
        "The same {que} does three jobs: relative pronoun ({l'homme que je vois}), conjunction ({Je sais qu'il vient}) and comparative ({plus grand que}). What separates them is the function, and the function is given by what comes **before**. After a noun, {que} is relative; after a verb, it is a conjunction; after a noun preceded by {plus}, it is comparative. In **{Dis ce que tu penses}** there is an extra layer: {ce} is the abstract antecedent and {que} is the relative, two pronouns fused into a phrase.",
      ),
    },
    {
      label: T('The relative is the heart of subordination'),
      text: T(
        'A relative clause always has two halves: the **antecedent**, left in the main clause, and the **relative**, which fills the place of the missing noun in the subordinate. That is why **{je vois la femme qui parle}** and **{la femme que je vois est fatiguée}** have the same piece swapped sides, and the referent changes with the position. Greek and Latin were stricter; French gives the antecedent freedom, as long as the relative stays well formed. In Bible reading this shows up constantly: **{le livre dont je parle}**, **{celui qui croit}**, **{ceux qui écoutent}** — three functions, one repeated word.',
      ),
    },
  ],
  examples: [
    { text: 'l’homme qui parle', gloss: T('the man who speaks ({qui} = subject)') },
    { text: 'la parole que j’ai entendue', gloss: T('the word I heard ({que} = object)') },
    { text: 'l’homme dont je parle', gloss: T('the man I speak of ({dont} = {de qui})') },
    {
      text: 'Dieu, dont l’amour est éternel',
      gloss: T('God, whose love is everlasting (1 John 4:8)'),
    },
    { text: 'le jour où il est venu', gloss: T('the day he came (time)') },
    { text: 'la femme à qui je parle', gloss: T('the woman I speak to (preposition + person)') },
    {
      text: 'le livre avec lequel j’apprends',
      gloss: T('the book I learn with (preposition + thing)'),
    },
    { text: 'fais ce qui est juste', gloss: T('do what is right ({ce qui} = subject)') },
    { text: 'dis ce que tu penses', gloss: T('say what you think ({ce que} = object)') },
    {
      text: 'celui qui écoute la parole de Dieu',
      gloss: T('the one who hears the word of God (Luke 6:47)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The four simple relatives'),
      head: [T('Relative'), T('Function'), T('Example')],
      rows: [
        ['{qui}', T('subject'), "{l'homme qui parle}"],
        ['{que}', T('direct object'), "{la parole que j'ai entendue}"],
        ['{dont}', T('{de} + relative; also possession'), "{Dieu, dont l'amour est éternel}"],
        ['{où}', T('place or time'), '{le jour où il est venu}'],
      ],
    },
    {
      caption: T('Table 2 — After a preposition: {qui} or {lequel}'),
      head: [T('Antecedent'), T('Person'), T('Thing')],
      rows: [
        [T('{à}'), T('{à qui} (to whom)'), T('{auquel} (to which)')],
        [T('{de}'), T('{de qui} (of whom)'), T('{duquel} (of which)')],
        [T('{avec} / {pour} / others'), T('{avec qui}'), T('{avec lequel}, {pour lequel}')],
      ],
    },
  ],
};
