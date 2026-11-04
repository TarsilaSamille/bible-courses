import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Indefinite and partitive articles'),
  subtitle: T(
    '{un, une, des} — the article that introduces, and the one that marks a portion nobody counted',
  ),
  section: T('Articles'),
  body: C(`## Three articles, three jobs

The indefinite article has two gender forms: {un} masculine and {une} feminine, and a single plural for both, {des}. It elides exactly like {le} and {la}: {un ami}, {une amie}, {un homme}, {une école}, {un œil}, {une histoire}.

The crucial difference with Portuguese is in the plural. Portuguese {um} exists only in the singular: one book, two books. French {des} is a real plural, and here it splits into two completely different uses.

**Indefinite plural**: {des} = «some, certain». {Il a des frères} «he has brothers» says neither how many nor which, only that more than one exists. Note that {des frères} and {les frères} can be near-synonyms in context; the difference is one of focus.

**Partitive**: {du, de la, de l’, des} = «a bit of, a certain quantity of». It goes with mass nouns — food, materials, abstract nouns — and is the French equivalent of **no article** in Portuguese: {du pain} «bread», {de l’eau} «water», {du vin} «wine», {des légumes} «vegetables», {du courage} «courage», {de la patience} «patience».

## When the partitive turns definite: the key to the whole grammar

The partitive stops existing when the noun becomes **counted**. That happens in three situations you will recognise instantly:

1. When the unit is named: {une pomme} «one apple», {deux pommes} «two apples» — from two upwards, the definite plural {les pommes} is compulsory.
2. When the noun is measured: {un mètre de tissu} «a metre of cloth», {deux kilos de farine} «two kilos of flour».
3. When negated or restricted: {Je ne veux pas de sucre} «I do not want sugar», {Il n’y a pas de vie ici} «there is no life here».

Practical rule: if you can ask «how many?», use the definite. {J’ai {du} pain} is «I have bread»; {J’ai {le} pain} is «I have the bread, that specific piece»; {J’ai {des} pains} is «I have some breads».

## Negation swallows the partitive

Here is one of the most productive and most characteristically French rules in the course: **the negation {ne … pas} deletes the whole partitive article**.

- {Il a du pain} «he has bread» → {Il n’a pas de pain} «he has no bread»
- {Elle boit du vin} «she drinks wine» → {Elle ne boit pas de vin} «she does not drink wine»
- {Je veux du sucre} «I want sugar» → {Je ne veux pas de sucre} «I do not want sugar»

In other words: {pas de}, never {pas du}, {pas de la}, {pas des}. But note that the **definite** survives the rule: {Je ne veux pas le pain} keeps its {le}, because that specific bread still exists — it is simply not what I want. Negation deletes what is an indefinite portion, not what is an already identified thing.

The same rule holds with {sans} «without», {avant} «before» and {jusqu’à} «until», which behave like pseudo-negations: {sans du courage} «without courage», {avant la lettre} «before the letter», {jusqu’à la fin} «until the end».

## {du} has two origins, which explains its two uses

Historically, {du} is the contraction of {de + le} and {des} of {de + les}. The rule from the previous lesson ({de + le = du}) and the partitive in this one ({du} = a bit of) are **the same grammatical fact seen from two sides**.

And there is one practical consequence: because {du} comes from {de}, it **never follows another preposition**. You say {avec du pain} «with bread», {sans du vin} «without wine», {par la lettre} «by the letter» — but never {à du} nor {de du}. The plural follows the same logic: {avec des légumes} «with vegetables».

On the other hand, the partitive is used freely as if it were an ordinary indefinite: {J’ai {du} temps} «I have time», {Elle a {de} la patience} «she has patience», {Il reste {des} doutes} «some doubts remain». And when the noun is abstract and countable, the definite can appear: {l’optimisme} «optimism», {le courage} «courage».

## Applied reading

The **Louis Segond** text of {John 1:6} is an article laboratory: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}.

{un homme} — singular indefinite, the article **introduces** a man we do not yet know. {envoyé de Dieu} — the {de} here is a preposition of origin, not a partitive, because {Dieu} is a proper name and cannot be measured. And {le nom} goes back to the definite: what he **has**, something already determined. One sentence, three jobs.

In {John 1:3}: {Toutes les choses ont été faites par lui, et sans lui rien n’a été fait qui ait été fait}. {Toutes les choses} — {toutes} is a quantifier and {les} is the definite plural: **all** things, not some. Notice also {rien n’a été fait}, with an explicit {ne} and a postposed subject, where {rien} is already negative and {ne} is pleonastic.

And {John 1:14}: {Et la parole est devenue chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}. {sa gloire} twice — possessive pronoun, but notice the structure: in {celle du Père}, the partitive disappears and gives way to {du} = «de + le», that is, «the glory **of** the Father». Translating that sentence means choosing {la} and {du} correctly.

## The takeaway

{un, une} introduce and count one. {des} introduces some. {du, de la, des} partitivise — «a bit of» — and disappear as soon as the noun becomes counted, measured or negated. And the most useful rule in the chapter: after {ne … pas}, {sans} or {avant}, the partitive becomes {de} and only {de}.`),
  vocab: [
    V('un', 'un', 'a, one (indefinite masculine singular); elided as {l’}'),
    V('une', 'une', 'a, one (indefinite feminine singular)'),
    V('des', 'des', 'some, certain (indefinite plural) or «a bit of» (partitive)'),
    V('du', 'du', 'of the, some; contracted {de + le}'),
    V('de la', 'de la', 'some (feminine); never contracts'),
    V('de l’eau', 'eau', 'some water; partitive before a vowel'),
    V('pas de', 'pas', 'no, not; what negation does to the partitive'),
    V('sans du courage', 'courage', 'without courage; {sans} acts as a negation'),
    V('le pain', 'pain', 'the bread (the whole loaf)'),
    V('de la patience', 'patience', 'some patience; partitive with an abstract noun'),
    V('le courage', 'courage', 'courage; definite with a countable abstract'),
    V('l’optimisme', 'optimisme', 'optimism; stressed {i} becomes {y} with no hyphen'),
    V('une pomme', 'pomme', 'one apple; naming the unit kills the partitive'),
    V('toutes les choses', 'chose', 'all things; quantifier with the definite plural'),
    V('rien', 'rien', 'nothing; already negative, so {ne} is pleonastic'),
    V('un homme envoyé', 'homme', 'a man sent; {un} introduces a new referent'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Je ne veux pas de sucre}, what happened to the partitive {du}?'),
    options: [
      T('The negation deleted the whole article and left only {de}'),
      T('The {du} became {dus}, a non-existent feminine plural'),
      T('The noun became plural and the article turned into {des}'),
      T('The negation moved to the noun, with no effect on the article'),
    ],
    answer: 0,
    hint: T('Rule §3: {ne … pas} deletes the partitive, but the definite survives.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Elle boit ___ vin. (she drinks wine)'),
      answer: 'du',
      hint: T('Masculine partitive, no negation: fused {de + le}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence keeps the definite article despite the negation?'),
      options: [
        T('{Je ne veux pas le pain que tu as acheté}'),
        T('{Je ne veux pas du pain}'),
        T('{Je ne veux pas de la viande}'),
        T('{Il n’y a pas des enfants ici}'),
      ],
      answer: 0,
      hint: T('Rule §3: the rule hits the portion, not the already identified thing.'),
    },
    {
      kind: 'match',
      prompt: T('Match each construction to its function'),
      pairs: [
        { a: T('{un homme}'), b: T('introduces a new, singular referent') },
        { a: T('{des frères}'), b: T('introduces some, without counting') },
        { a: T('{du courage}'), b: T('partitivises an uncountable abstract') },
        { a: T('{le courage}'), b: T('treats the abstract as a determined thing') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete the negation: Elle n’a pas ___monde. (she has no world)'),
      answer: 'de',
      hint: T('The partitive vanishes and only the preposition {de} is left.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('{un} and {une} count exactly one; {des} introduces some without counting.'),
    },
    {
      n: '2',
      text: T(
        'The partitive {du, de la, de l’, des} means «a bit of» and replaces the article-less Portuguese: {du pain}, {de l’eau}, {des légumes}.',
      ),
    },
    {
      n: '3',
      text: T(
        'After {ne … pas}, {sans}, {avant} or {jusqu’à}, the partitive becomes {de}: {pas de}, never {pas du}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The partitive disappears as soon as the noun is counted or measured: {une pomme}, {deux kilos de farine}, {le courage}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Since {du} comes from {de}, it never follows another preposition: {avec du pain} is correct, {à du} is wrong.',
      ),
    },
  ],
  notes: [
    {
      label: T('The partitive marks the uncountable'),
      text: T(
        'In Portuguese the countable / uncountable distinction is carried by context with no formal mark: {como} works with {one} and with {none}, and nobody notices. French settles it with {du}. That is why {Il y a de la lumière dans cette pièce} is impossible in honest Portuguese, yet it is the only French way to say «there is light in this room». You cannot say {Il y a la lumière}, because that means «the light we already know».',
      ),
    },
    {
      label: T('Fake negations'),
      text: T(
        'With {ne … pas} the rule is compulsory and nobody breaks it. With {sans} it is a consequence, not an obligation: you *may* say {sans pain} if you are talking about a specific loaf. And note the asymmetry: {pas de pain} is compulsory, but {pas le pain} is just as correct — the difference is that the definite names a thing that exists independently of your will.',
      ),
    },
  ],
  examples: [
    {
      text: 'Il y eut un homme envoyé de Dieu',
      gloss: T('there was a man sent by God (Jn 1:6) — {un} introduces'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('whose name was John — possessive {de}, determined {le}'),
    },
    {
      text: 'Toutes les choses ont été faites par lui',
      gloss: T('all things were made through him (Jn 1:3) — quantifier + definite'),
    },
    {
      text: 'et sans lui rien n’a été fait',
      gloss: T('and without him nothing was made — {sans} acts as negation'),
    },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('his glory as the Father’s only glory (Jn 1:14) — {du} = «de + le»'),
    },
    {
      text: 'Je ne veux pas de sucre',
      gloss: T('I do not want sugar — partitive erased by negation'),
    },
    { text: 'avec du courage', gloss: T('with courage — partitive after a preposition, allowed') },
    {
      text: 'deux kilos de farine',
      gloss: T('two kilos of flour — counting removes the partitive'),
    },
    {
      text: 'la lumière du monde',
      gloss: T('the light of the world (Jn 8:12) — definite + genitive via {du}'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Indefinite and partitive side by side'),
      head: [T('Use'), T('Masc. sg.'), T('Fem. sg.'), T('Plural'), T('Example')],
      rows: [
        ['Indefinido', 'un', 'une', 'des', '{un homme}'],
        ['Partitivo', 'du', 'de la', 'des', '{du pain}'],
        ['Partitivo + vogal', "de l'", 'de la', 'des', "{de l'eau}"],
        ['Após negação', 'pas de', 'pas de', 'pas de', '{pas de sucre}'],
      ],
    },
    {
      caption: T('Table 2 — The partitive inside and outside sentences'),
      head: [T('Context'), T('Form'), T('Gloss'), T('Note')],
      rows: [
        ['positiva', 'du pain', 'pão', 'sem negação'],
        ['negativa', 'pas de pain', 'nada de pão', 'partitivo apagado'],
        ['com {sans}', 'sans du courage', 'sem coragem', '{sans} = negação'],
        ['contagem', 'deux pains', 'dois pães', 'partitivo sai'],
        ['medição', 'un kilo de farine', 'um quilo de farinha', '{de} = unidade'],
      ],
    },
  ],
};
