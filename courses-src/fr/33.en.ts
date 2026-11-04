import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Interrogative pronouns and question words'),
  subtitle: T('qui, quoi, quel, où, quand, comment, combien — and the inversion they demand'),
  section: T('Consolidation'),
  body: C(`## A French question does three things at once

A question in French is not a sentence with a question mark on it. It (1) picks an **interrogative word**, (2) may require **subject–verb inversion**, and (3) chooses between {est-ce que}, a question word, and direct inversion. So one spoken question has three shapes: {Tu viens ?}, {Est-ce que tu viens ?}, {Viens-tu ?}

Of the three, the most spoken today is **{est-ce que}**, because it leaves word order untouched: {Est-ce que tu as compris ?} works in any context. Direct inversion ({comprends-tu ?}) sounds old or literary, and it is common in the Bible.

## The table of question words

{qui} asks about a **person**, {quoi} about a **thing**, {quel} about an **attribute or quality**, and {lequel} about a **choice between alternatives**: {Lequel veux-tu ?} — "Which one do you want?" Note that {lequel} does not fuse with {le}: it is {le + quel}, and in the feminine {laquelle}, in the plural {lesquels}, {lesquelles}.

{où} is place ({Où habites-tu ?}), {quand} is time, {comment} is manner, {pourquoi} is cause — and {combien} is quantity, with one particularity: it takes *{de}*: {Combien de livres ?}, {Combien de gens sont venus ?}

## Invert carefully

Inversion is only required when there is **no question word**: {Viens-tu ?}, {Parlez-vous français ?}, {A-t-elle raison ?} (with elided {a}). When the question already carries {qui}, {où}, {quand}, normal order is enough: *{Où habites-tu ?}* sounds wrong, and so does {Où tu habites ?}. The safe form is *{Où est-ce que tu habites ?}*

And watch the verb {être}: with {qui}, {où} and friends it **does not** invert — {Qui est là ?}, not *{Qui est-il là ?}* — because {est} is already the strong form. The hiatus spelling ({a-t-elle}, {est-il}) exists only to keep the pronunciation clear.

## What changes in the texts

The {Symbole des Apôtres} has no question at all, but its style is the same: relative clauses with {qui} and {que}, and a {d'où} in v. 10. The Psalm 23 does contain a hidden quantity — {Combien de jours !} is the ordinary French reading of a line like «days of my old age». The Creed, by contrast, has *{combien} nowhere* and a *{tout}* everywhere: {tous les saints}, which is the fixed way of saying «all» in a solemn text.

In short: the French question belongs to one of three families — **with {est-ce que}**, **with a question word plus natural order**, or **direct inversion**. Recognising which one you are reading is half of passive fluency.`),
  vocab: [
    V('qui', 'qui', 'whom, who (person)'),
    V('quoi', 'quoi', 'what (thing)'),
    V('quel', 'quel', 'which (attributive, m. sg.)'),
    V('lequel', 'lequel', 'which one (choosing between alternatives)'),
    V('où', 'où', 'where'),
    V('quand', 'quand', 'when'),
    V('comment', 'comment', 'how (manner)'),
    V('pourquoi', 'pourquoi', 'why, because of what'),
    V('combien', 'combien', 'how much, how many (requires de)'),
    V('est-ce que', 'est-ce que', 'the neutral question particle'),
    V('qui est-ce que', 'qui est-ce que', 'who is it (subject, no inversion)'),
    V('si', 'si', 'whether, if (rhetorical question)'),
    V('quelque chose', 'quelque chose', 'something (answer to quoi)'),
    V('personne', 'personne', 'nobody (answer to qui)'),
    V('quelconque', 'quelconque', 'any, whatever (indefinite)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the most natural question in spoken French today?'),
    options: [
      T('{Est-ce que tu as compris ?}'),
      T('{As-tu compris ?}'),
      T('{Tu as compris ?}'),
      T('{Que tu as compris ?}'),
    ],
    answer: 0,
    hint: T('Rule §1: direct inversion is a minority outside literature.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: {Combien ___ livres as-tu lus ?} — {de} follows {combien}.'),
      answer: 'de',
      hint: T('The same happens with {assez de}, {beaucoup de}, {peu de}.'),
    },
    {
      kind: 'choose',
      prompt: T('In {Lequel veux-tu ?}, what does {lequel} do that {quel} cannot?'),
      options: [
        T('It replaces a noun: {le quel} = "the one which"'),
        T('It replaces a verb'),
        T('It requires the future'),
        T('It marks negation'),
      ],
      answer: 0,
      hint: T('Compare {Quel film ?} with {Lequel film ?}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the question to the answer it expects'),
      pairs: [
        { a: T('Who are you waiting for?'), b: T('someone, because it is a person') },
        { a: T('What are you waiting for?'), b: T('something, because it is a thing') },
        { a: T('How many pages?'), b: T('a number, followed by {de}') },
        { a: T('Where is she?'), b: T('a place expression, never {qui}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'How many different interrogative words appear in the trio {qui, quoi, quel, combien}? Answer with a number: ___',
      ),
      answer: '4',
      hint: T('Count the items in the list, not the letters.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Direct inversion sounds formal or old; in daily speech use {est-ce que}, which preserves natural order.',
      ),
    },
    {
      n: '2',
      text: T(
        'Inversion is only obligatory with no question word: {Viens-tu ?}, {A-t-elle raison ?} (with elided {a}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{qui} asks for a person, {quoi} for a thing; {quel} qualifies and {lequel} chooses: {Lequel ?} is answered with a noun phrase.',
      ),
    },
    {
      n: '4',
      text: T('{combien} requires {de} before the noun: {Combien de gens ?}, {Combien de fois ?}.'),
    },
    {
      n: '5',
      text: T(
        'With {être} inversion is automatic: {Es-tu ici ?}, {Est-il ?}, {Sont-ils ?}. After {qui}, {où}, {quand}, {combien} the verb {être} keeps natural order.',
      ),
    },
  ],
  notes: [
    {
      label: T('The difference nobody translates'),
      text: T(
        'English *Who did you see?* and *Whom did you see?* are variants. In French the distinction is not one of case but of **function**: {qui} can only be a **subject** ({Qui parle ?}), never a direct object. For a direct object referring to a person, French uses {qui**que}** ({Qui que tu sois}, "whoever you may be") or a prepositional construction ({De qui parles-tu ?}, "who are you talking about?"). {Quoi}, by contrast, denotes a thing and can fill any position.',
      ),
    },
    {
      label: T('Questions in the sacred texts'),
      text: T(
        'The {Père Notre-Dame} and the {Symbole des Apôtres} have no questions at all: they are declarations. Psalm 23 does contain an exclamation — {Jusqu’à quand !} — which the Hebrew original ({until when}) makes almost literal, and which modern versions treat as a rhetorical cry of pain. But the real force of {Jusqu’à quand ?} here is not questionhood: it is a **temporal exclamation**, as in {Oh, when !}',
      ),
    },
  ],
  examples: [
    { text: 'Qui est-ce que tu attends ?', gloss: T('Who are you waiting for?') },
    { text: 'Qu’est-ce qu’il cherche ?', gloss: T('What is he looking for?') },
    { text: 'Oð est-ce qu’elle est ?', gloss: T('Where is she?') },
    {
      text: 'Combien de jours !',
      gloss: T(
        'How many days! (the natural rendering of «jusque dans les jours de mes vieux ans»)',
      ),
    },
    { text: 'Est-ce que tu as compris ?', gloss: T('Did you understand?') },
    {
      text: 'As-tu compris ?',
      gloss: T('Did you understand? (direct inversion, formal register)'),
    },
    { text: 'Lequel des deux veux-tu ?', gloss: T('Which of the two do you want?') },
    { text: 'De qui parles-tu ?', gloss: T('Who are you talking about?') },
    {
      text: 'Qui que tu sois, reste aimé',
      gloss: T('Whoever you are, remain loved ({qui que} = "whoever")'),
    },
    { text: 'Jusqu’à quand, Seigneur ?', gloss: T('How long, Lord? (temporal exclamation)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three families of the question'),
      head: [T('Family'), T('Pattern'), T('Example'), T('Portuguese')],
      rows: [
        [
          T('with {est-ce que}'),
          T('verb + {est-ce que} + subject'),
          T('Are you coming?'),
          T('are you coming?'),
        ],
        [
          T('with a question word'),
          T('{word} + subject + verb'),
          T('Where do you live?'),
          T('where do you live?'),
        ],
        [
          T('direct inversion'),
          T('subject + verb + subject'),
          T('Where do you live?'),
          T('where do you live?'),
        ],
      ],
    },
    {
      caption: T('Table 2 — Declension of quel / lequel'),
      head: [T('Number'), T('Masculine'), T('Feminine')],
      rows: [
        [T('singular'), T('quel'), T('quelle')],
        [T('plural'), T('quels'), T('quelles')],
        [T('with {le}'), T('lequel, lesquels'), T('laquelle, lesquelles')],
        [T('with {les}'), T('lequel, lesquels'), T('lesquelles')],
      ],
    },
  ],
};
