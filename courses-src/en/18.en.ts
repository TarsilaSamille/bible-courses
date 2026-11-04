import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Pronouns: the whole system'),
  subtitle: T('me, my, myself, this, whom, some — every series'),
  section: T('Pronouns'),
  body: C(`## Personal: one form for the subject, another for the object

Portuguese has one form. English has two, and the choice is purely positional: the pronoun that **replaces the subject** goes before the verb, and the one that **receives the action** goes after.

{I write} and {they wrote me} show the mechanism: {I} and {they} are subject, {me} is object. {Him} and {her} have the same shape in both positions, which is the source of a good part of the confusion.

{Her} is ambiguous between {her} as object and {her} as possessive, and context decides: {I saw her} received the action; {her book is mine} is possession.

The KJV plays a different game, the archaic one: {thou} and {thee} where English would have {you}, {thy} where it would have {your}. John 17:21 reads {as thou art with me, and I with thee}, the same sentence Portuguese says as "como tu estás comigo, e eu contigo". Anyone reading the KJV needs to know that the second person was swapped.

## Possessives and the word with no apostrophe

Possessives come in two series: the **adjective** goes before the noun ({my book}) and the **pronoun alone** replaces the noun ({the book is mine}). The only one that changes shape in both roles is {her}: {her book} and {the book is hers}. All the others repeat the same base.

{Its} is the only possessive form without an apostrophe, because it is not a contracted form. {It's} is {it is}, {it has} or {it was}: {it's a good book} next to {the dog wagged its tail}. Writing {it's} where {its} belongs produces a sentence that means nothing, and the mistake is common because the two sound the same.

Apart from {its}, {her} and {their}, there is no trick: {his} means of him and also his. The only one that makes you think is {her}.

## Reflexives and demonstratives

The reflexive points back at the subject: {I saw myself}, {she hurt herself}, {they can only count on themselves}. {Themselves} is the only form with an {s} in the plural.

The demonstratives are {this}, {that}, {these}, {those}, and singular and plural do not derive from each other by any rule the learner can deduce: {this} has no plural of its own, and {these} has no singular.

The asymmetry that costs most is the one of distance: {these days} is "these days", {in those days} is "in those days", and {that} serves both {that book} and {that}, depending on what follows.

## Interrogatives, relatives and indefinites

{Who} asks about a person and {which} about a thing; {what} asks about a thing when there is no antecedent. {Whom} is the object form of {who}, and {whose} asks about possession: {To whom did you write}?

The indefinites turn on negation. {Some} appears in statements and offers, {any} in negation and questions, {no} works as {not a}, {every} takes the singular and has the sense of all of them, and {each} takes the singular and has the sense of one by one. The practical consequence is the one tested most often: {I have some} answers an offer, and {I don't have any} answers a question.`),
  vocab: [
    V('I', 'I', 'I (subject)'),
    V('me', 'me', 'me (object)'),
    V('myself', 'myself', 'myself'),
    V('your', 'your', 'your'),
    V('yours', 'yours', 'yours'),
    V('his', 'his', 'his, of him'),
    V('hers', 'hers', 'hers'),
    V('its', 'its', 'its'),
    V("it's", 'be', 'it is'),
    V('themselves', 'themselves', 'themselves'),
    V('this', 'this', 'this'),
    V('that', 'that', 'that'),
    V('these', 'these', 'these'),
    V('those', 'those', 'those'),
    V('whom', 'whom', 'whom (object)'),
    V('whose', 'whose', 'whose'),
    V('some', 'some', 'some'),
    V('any', 'any', 'any'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The shape of a personal pronoun is decided by position: subject before the verb, object after it.',
      ),
    },
    {
      n: '2',
      text: T(
        'Possessives have two series: the adjective form before the noun and the pronoun form standing alone.',
      ),
    },
    {
      n: '3',
      text: T(
        'Its is the only possessive without an apostrophe; its contracted form is it is, it has or it was.',
      ),
    },
    {
      n: '4',
      text: T(
        'A reflexive agrees with the subject and appears as the object of the verb or after a preposition.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some goes in statements and offers, any in negation and questions, and every and each always take the singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        "John 17:21 uses thou and thee, and the Lord's Prayer in Matthew 6:9 uses thy. They are archaic second-person forms, not a reading mistake: a translator has to decide what to do with them.",
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'The three commonest errors are its for it is, her for hers, and these for this. All three come from the parallelism of the forms, not from lack of study.',
      ),
    },
  ],
  examples: [
    { text: '{they wrote me}', gloss: T('they wrote to me') },
    { text: '{I saw her}', gloss: T('I saw her') },
    { text: '{her book is mine}', gloss: T('her book is mine') },
    { text: '{the dog wagged its tail}', gloss: T('the dog wagged its tail') },
    { text: '{it is a good book}', gloss: T('it is a good book — contracted form') },
    { text: '{they can only count on themselves}', gloss: T('they can only count on themselves') },
    { text: '{in those days}', gloss: T('in those days') },
    { text: '{To whom did you write}', gloss: T('To whom did you write?') },
    { text: '{Every good gift is from above}', gloss: T('every good gift is from above') },
    { text: "{I don't have any bread}", gloss: T("I don't have any bread") },
    {
      text: '{as thou art with me, and I with thee}',
      gloss: T('as thou art with me, and I with thee — KJV'),
    },
  ],
  tables: [
    {
      caption: T('Personal and reflexives'),
      head: [T('Person'), T('Subject'), T('Object'), T('Reflexive')],
      rows: [
        [T('1st'), '{I}', '{me}', '{myself}'],
        [T('2nd'), '{you}', '{you}', '{yourself} / {yourselves}'],
        [T('3rd masc.'), '{he}', '{him}', '{himself}'],
        [T('3rd fem.'), '{she}', '{her}', '{herself}'],
        [T('neuter'), '{it}', '{it}', '{itself}'],
        [T('1st plural'), '{we}', '{us}', '{ourselves}'],
        [T('3rd plural'), '{they}', '{them}', '{themselves}'],
      ],
    },
    {
      caption: T('Possessives'),
      head: [T('Pronoun'), T('Adjective'), T('Pronoun alone'), T('Watch out')],
      rows: [
        ['{I}', '{my}', '{mine}', T('—')],
        ['{you}', '{your}', '{yours}', T('—')],
        ['{he}', '{his}', '{his}', T('same in both series')],
        ['{she}', '{her}', '{hers}', T('the only one that changes')],
        ['{it}', '{its}', '{its}', T('no apostrophe')],
        ['{we}', '{our}', '{ours}', T('—')],
        ['{they}', '{their}', '{theirs}', T('—')],
      ],
    },
    {
      caption: T('Indefinites'),
      head: [T('Word'), T('Where it goes'), T('Number'), T('Example')],
      rows: [
        ['{some}', T('statement, offer'), T('plural'), '{I have some bread}'],
        ['{any}', T('negation, question'), T('plural'), "{I don't have any bread}"],
        ['{no}', T('direct negation'), T('plural'), '{No man is perfect}'],
        ['{every}', T('all of them, a set'), T('singular'), '{Every man dies}'],
        ['{each}', T('one by one'), T('singular'), '{Each man dies}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('The dog wagged it is tail'),
      T('The dog wagged its tail'),
      T("The dog wagged it's tail"),
      T('The dog wagged his tail'),
    ],
    answer: 1,
    hint: T('Its is possessive and takes no apostrophe; it is is what contracts.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the possessive: 'The book is ___. ' (hers)"),
      answer: 'hers',
    },
    {
      kind: 'fill',
      prompt: T("Complete with an object pronoun: 'They called ___.'"),
      answer: 'me',
    },
    {
      kind: 'match',
      prompt: T('Match the series to the example.'),
      pairs: [
        { a: T('near plural demonstrative'), b: '{these}' },
        { a: T('far plural demonstrative'), b: '{those}' },
        { a: T('possessive relative'), b: '{whose}' },
        { a: T('object relative'), b: '{whom}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Every students are ready'),
        T('Every student is ready'),
        T('Each students is ready'),
        T('Every students is ready'),
      ],
      answer: 1,
    },
  ],
};
