import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('First and second declension adjectives and the verb sum'),
  subtitle: T('{bonus, -a, -um} agrees with the noun; {sum, es, est}'),
  section: T('Declensions and the verb sum'),
  body: C(`## One adjective, three endings

In Latin a single adjective has **three** reference forms — one per gender — and agreement is what selects which one. {Bonus} is masculine, {bona} feminine, {bonum} neuter. The same noun {verbum} can take all three:

{Verbum bonum} «the good word»;
{Verb bona} «the good (deed)»;
{Pueri boni} «the good boys».

The adjective agrees with the noun in **gender, number and case**. Its endings are identical to the noun's: a first/second declension adjective behaves exactly like {bonus} — {bonā} is feminine ablative, {bonīs} is dative plural for any gender.

One trap: in Vulgate texts adjectives like {sanctus} can be substantivised and turn into nouns — {sancti} «the holy ones», {sanctum} «the holy thing». Context decides.

## Sum: the most irregular verb there is

{sum} «to be» is the verb you will meet most and the most irregular: its root is {es-} (hence {sum}, {es}, {sunt}), which produces a series of forms that look like nothing else:

| Person | Present | Imperfect | Perfect |
|---|---|---|---|
| I | sum | eram | fui |
| you | es | eras | fuisti |
| he/she | est | erat | fuit |
| we | sumus | eramus | fuimus |
| you | estis | eratis | fuistis |
| they | sunt | erant | fuerunt |

Notice: {sum} + {b} = {sub}: {sub-} is the prefix of {suble-} «to survive» and of {sub-} «under». There {sub} is the only clue that the verb has the root {es}.

## Est, erat, erat

The Vulgate uses {sum} more in the **imperfect** than in the present, because Latin prefers to narrate a continuous action over a bare state. The Gospel of John opens with three imperfects followed by a present — and the shift is deliberate:

{In principio erat Verbum} «In the beginning **was** the Word» — duration without a beginning;
{Et Verbum erat apud Deum} «and the Word **was** with God» — coexistence;
{Et Deus erat Verbum} «and God **was** the Word» — identification;
{Hic erat et hic est et hic venturus est} «He **was** here, and **is** here, and is coming here» (Revelation 1:4).

The move from {erat} to {est} marks the passage from eternity into time. If you notice that {sum} is the one verb with no supine stem, you will understand why translators always render it «to be» and never «to exist».`),
  vocab: [
    V('bonus', 'bonus', 'good (masc.)'),
    V('bona', 'bonus', 'good (fem.)'),
    V('malus', 'malus', 'bad (masc.)'),
    V('magnus', 'magnus', 'great'),
    V('parvus', 'parvus', 'small'),
    V('verus', 'verus', 'true'),
    V('primus', 'primus', 'first'),
    V('pulcher', 'pulcher', 'beautiful'),
    V('sanctus', 'sanctus', 'holy'),
    V('sum', 'sum', 'to be'),
    V('es', 'sum', 'you are (2nd sg.)'),
    V('est', 'sum', 'he is (3rd sg.)'),
    V('sunt', 'sum', 'they are'),
    V('erat', 'sum', 'he was (imperfect)'),
    V('fuit', 'sum', 'he was (perfect)'),
    V('Deus', 'Deus', 'God'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {puella bona rosam amat}, what agrees and why?'),
    options: [
      T('{bona} agrees with {puella}: feminine singular nominative'),
      T('{bona} agrees with {rosam}: feminine singular accusative'),
      T('{bona} agrees with {amat}: present verb'),
      T('{bona} agrees with nothing: it is an adverb'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why do {sunt} and {est} not resemble each other, if the verb is the same?'),
      options: [
        T('Because {sum} is irregular: its root is {es-}'),
        T('Because they belong to two different declensions'),
        T('Because {sunt} is a noun'),
        T('Because the Vulgate spells it irregularly'),
      ],
      answer: 0,
      hint: T('Rule §4.'),
    },
    {
      kind: 'fill',
      prompt: T('Imperfect of {sum}, third person singular: e_a_'),
      answer: 'erat',
      hint: T('The form appears in {In principio erat Verbum}.'),
    },
    {
      kind: 'match',
      prompt: T('Match {bonus} to the matching agreement'),
      pairs: [
        { a: T('bonus'), b: T('masc. nom. singular') },
        { a: T('bonum'), b: T('neut. nom./acc. singular') },
        { a: T('bonae'), b: T('fem. gen./dat. singular') },
        { a: T('bonis'), b: T('dat./abl. plural, any gender') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "An adjective agrees with its noun in gender, number and case — and its endings are the noun's endings.",
      ),
    },
    {
      n: '2',
      text: T(
        'A first/second declension adjective has three reference forms: {bonus}, {bona}, {bonum}.',
      ),
    },
    {
      n: '3',
      text: T('Adjective position is free: {puer bonus} and {bonus puer} say the same thing.'),
    },
    {
      n: '4',
      text: T(
        '{sum} has the root {es-} and no regular form: the only way is to memorise the whole paradigm.',
      ),
    },
    {
      n: '5',
      text: T(
        'Latin uses the imperfect of {sum} for duration without a beginning; the present, for a bounded state.',
      ),
    },
  ],
  notes: [
    {
      label: T('Clue to the root:'),
      text: T(
        'If in a word you recognise {es-} followed by something, it is probably a form of {sum}: {praesens} «present» (from *praesum*, I am present), {absens}, {potens}. It is the one word family that keeps the root {es-} alive in Latin.',
      ),
    },
    {
      label: T('Substantivised adjective:'),
      text: T(
        'When an adjective loses its noun, it becomes a noun: {bonum} «the good thing», {sancti} «the holy ones», {electi} «the chosen». In {Tu solus bonus in bonis} (Mark 10:18), {bonus} is substantival: «only you are good».',
      ),
    },
  ],
  examples: [
    { text: 'bonus', gloss: T('good (masc. nom. singular)') },
    { text: 'bona', gloss: T('good (fem. nom. singular)') },
    { text: 'bonum', gloss: T('good (neuter), or «the good thing»') },
    { text: 'sum', gloss: T('I am') },
    { text: 'es', gloss: T('you are (2nd singular)') },
    { text: 'est', gloss: T('he/she is (3rd singular)') },
    { text: 'sunt', gloss: T('they are') },
    { text: 'erat', gloss: T('he/she was (imperfect)') },
    { text: 'fuit', gloss: T('he/she was (perfect)') },
    {
      text: 'In principio erat Verbum',
      gloss: T('«In the beginning was the Word» — {erat}, not {est}'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — First and second declension adjectives: {bonus, -a, -um}'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neut.')],
      rows: [
        ['Nom.', 'bonŭs', 'bonă', 'bonum'],
        ['Voc.', 'bonĭ', 'bonă', 'bonum'],
        ['Gen.', 'bonī', 'bonāe', 'bonī'],
        ['Dat.', 'bonō', 'bonāe', 'bonō'],
        ['Acu.', 'bonum', 'bonam', 'bonum'],
        ['Abl.', 'bonō', 'bonā', 'bonō'],
        ['Nom. pl.', 'bonī', 'bonae', 'bonă'],
        ['Acu. pl.', 'bonōs', 'bonās', 'bonă'],
        ['Dat./Abl. pl.', 'bonīs', 'bonīs', 'bonīs'],
      ],
    },
    {
      caption: T('Table 2 — The verb {sum}: present, imperfect, perfect'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Perfect')],
      rows: [
        [T('1st sg.'), 'sum', 'eram', 'fui'],
        [T('2nd sg.'), 'es', 'eras', 'fuisti'],
        [T('3rd sg.'), 'est', 'erat', 'fuit'],
        [T('1st pl.'), 'sumus', 'eramus', 'fuimus'],
        [T('2nd pl.'), 'estis', 'eratis', 'fuistis'],
        [T('3rd pl.'), 'sunt', 'erant', 'fuerunt'],
      ],
    },
  ],
};
