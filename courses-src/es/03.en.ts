import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Definite articles'),
  subtitle: T('el/la/los/las (+ neuter lo!)'),
  section: T('Articles'),
  body: C(`## The system

The definite article has three genders and two numbers: {el} (m. sg.), {la} (f. sg.), {los} (m. pl.), {las} (f. pl.), plus **neuter {lo}**, which appears only before adjectives, indefinite pronouns and abstract nouns: {lo bueno} "the good", {lo importante}, {lo mío}, {lo que} "what".

It marks two things: the referent is **known** ("the book I read") and that it is **unique** or **shared knowledge** ("the sun", "the Creation"). That is why John 1:1 uses {el}: {En el principio era el Verbo}.

## Euphony: el before stressed {a}

When a feminine noun begins with stressed {a} or {ha}, the article becomes {el} to avoid two open vowels in a row — but the **noun stays feminine**: {el agua} "water" · {el árbol} "tree" · {el alma} "soul" · {el hambre} "hunger" · {el área} "area". In the plural the {a} is no longer stressed and the article returns: {las aguas}, {los árboles}.

## Contractions

Two fusions are obligatory: {a} + {el} = {al} and {de} + {el} = {del}. Other prepositions never contract: {en} + {el} = {en el}, {para} + {el} = {para el}.

Biblical: {al tercer día} "on the third day" (Gen 1:5) · {la palabra del Señor} "the word of the Lord" (Ps 33:6) · {en el principio} "in the beginning" (John 1:1).

## What takes NO article

Unique gods and persons: {Dios} "God", {Jesús} "Jesus" — though {el Señor} "the Lord" is used for God. Countries without article: {España}, {México}. Languages: {el español}, {el portugués}. Cities without article: {Roma}, {Buenos Aires}.`),
  vocab: [
    V('el', 'el', 'the (masc.)'),
    V('la', 'el', 'the (fem.)'),
    V('lo bueno', 'bueno', 'the good (neuter!)'),
    V('el agua', 'agua', 'water (euphony!)'),
    V('al', 'al', 'to the (= a + el)'),
    V('del', 'del', 'of the (= de + el)'),
    V('las aguas', 'agua', 'the waters (back to las!)'),
    V('en el', 'en', 'in the (no contraction!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does feminine "agua" take "el"?'),
    options: [
      T('Because it became masculine'),
      T('Euphony: avoids "la agua" (stressed a); stays feminine!'),
      T('Error'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contract: a + el = ___ (on the third day)'),
      answer: 'al',
      hint: T('Rule §3 — mandatory contraction.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the plural of "el agua"?'),
      options: [T('los agua'), T('las aguas'), T('el aguas'), T('los aguas')],
      answer: 1,
      hint: T('In the plural the a is unstressed: las returns.'),
    },
    {
      kind: 'fill',
      prompt: T('In "En el principio" (John 1:1), why is "nel" not written?'),
      answer: 'só a contrai com el',
      hint: T('Rule §3: only a + el and de + el contract.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Feminines with stressed initial A take el for euphony but stay feminine: el agua → las aguas.',
      ),
    },
    {
      n: '2',
      text: T('Neuter lo only joins adjectives and abstractions: lo bueno, lo importante.'),
    },
    {
      n: '3',
      text: T('Mandatory contractions: a + el = al; de + el = del. Nothing else contracts.'),
    },
    {
      n: '4',
      text: T('Unique nouns (Dios) and well-known countries and cities drop the article.'),
    },
  ],
  notes: [
    {
      label: T('Contraction in older texts'),
      text: T(
        'In older texts you will see {al} and {del} written together: {dalgo}, {dél}. Modern spelling separates them, and nothing you need to learn changes.',
      ),
    },
  ],
  examples: [
    { text: '{En el principio}', gloss: T('In the beginning (John 1:1).') },
    { text: '{al tercer día}', gloss: T('On the third day (Gen 1:5).') },
    { text: '{la palabra del Señor}', gloss: T('The word of the Lord (Ps 33:6).') },
    { text: '{los árboles}', gloss: T('The trees (los returns!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Definite articles'),
      head: [T('Number'), T('Masculine'), T('Feminine'), T('Neuter')],
      rows: [
        [T('Singular'), '{el}', '{la}', '{lo}'],
        [T('Plural'), '{los}', '{las}', '—'],
      ],
    },
    {
      caption: T('Table 2 — Euphony and contractions'),
      head: [T('Input'), T('Result'), T('Reason')],
      rows: [
        ['{la} + {agua}', '{el agua}', T('euphony (stressed a)')],
        ['{las} + {aguas}', '{las aguas}', T('plural: unstressed a')],
        ['{a} + {el}', '{al}', T('mandatory contraction')],
        ['{de} + {el}', '{del}', T('mandatory contraction')],
        ['{en} + {el}', '{en el}', T('no contraction')],
      ],
    },
  ],
};
