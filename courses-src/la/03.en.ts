import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('The second declension'),
  subtitle: T('{dominus, domini} — the masculine that rules the Vulgate'),
  section: T('Declensions and the verb sum'),
  body: C(`## The -us and -um theme

The second declension gathers the -us masculines and the -um neuters. The nominative keeps the vowel: {dominus} «lord», {servus} «slave», {puer} «boy» in the masculine; {bellum} «war», {verbum} «word», {templum} «temple» in the neuter.

The theme is the stem minus the nominative vowel: {domino-}, {servo-}, {puer-}, {bello-}, {verbo-}. Every form follows from it:

| Case | Masculine -us | Neuter -um |
|---|---|---|
| Nom. | dominus | bellum |
| Gen. | domini | belli |
| Dat. | domino | bello |
| Acc. | dominum | bellum |
| Abl. | domino | bello |

Two pairs of cases share one form: **nominative and vocative** in -us/-um, and **dative and ablative** in -o. Compare with the first declension, where it was genitive and dative that coincided.

## The plural: -i and -a

The masculine and neuter plural replaces the ending with {ī}: {domini} «lords», {belli} «wars», {verba} «words». Note that genitive plural and nominative plural are identical — exactly as in English with *men / of men*.

| Case | Masculine | Neuter |
|---|---|---|
| Nom. | dominī | bella |
| Voc. | dominī | bella |
| Gen. | dominōrum | bellōrum |
| Dat. | dominīs | bellīs |
| Acc. | dominōs | bella |
| Abl. | dominīs | bellīs |

The neuter is simpler than the masculine: in the accusative and nominative plural, {bella} is one and the same, as in {verba} «words».

## How to spot a second declension

Four signals are enough:

1. A nominative in {us} (masculine) or {um} (neuter) — {servus}, {templum};
2. A genitive singular in {ī} — {servī}, {templī};
3. A genitive plural in {ōrum} — {servōrum}, {templōrum};
4. Most of them take {ium} or {ius} in the dative, proper to this declension — {scītōrium}, {hortīus}.

Signal 3 is the most reliable in running text: if you see {-ōrum}, it is a second declension almost always.

## Everyday Latin to Vulgate Latin

The Latin of Rome was not literary Latin: it was the speech of the street. A farmer's ledger, a soldier's discharge, a shopkeeper's sign — that is what most people actually spoke. In exchange, Vulgate Latin is literary and regular, which is exactly why it serves as a norm.

The commonest noun in the whole Vulgate is {verbum}: «word». It occurs 1,385 times, and the texts of {Ioannes} use it with a sense of revelation — and in that verse the Greek λόγος becomes the Latin {Verbum}, the word the Gospel applies to Christ himself.`),
  vocab: [
    V('dominus', 'dominus', 'lord, master'),
    V('servus', 'servus', 'slave, servant'),
    V('puer', 'puer', 'boy, slave'),
    V('bellum', 'bellum', 'war'),
    V('verbum', 'verbum', 'word'),
    V('templum', 'templum', 'temple'),
    V('deus', 'deus', 'god'),
    V('populus', 'populus', 'people'),
    V('filius', 'filius', 'son'),
    V('frater', 'frater', 'brother'),
    V('liber', 'liber', 'book'),
    V('agricola', 'agricola', 'farmer'),
    V('magister', 'magister', 'master, teacher'),
    V('hortus', 'hortus', 'garden'),
    V('nummus', 'nummus', 'coin'),
    V('Ioannes', 'Ioannes', 'John'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {servus servum amat}, what governs the second {servum}?'),
    options: [
      T('The nominative, by agreement'),
      T('The verb {amat} «loves»'),
      T('Nothing: it is an ablative of means'),
      T('The implied preposition {in}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the most reliable sign of a second declension in running text?'),
      options: [
        T('The nominative in {us}'),
        T('The genitive plural in {ōrum}'),
        T('The {i} of the genitive singular'),
        T('The dative in {ius}'),
      ],
      answer: 1,
      hint: T('Rule §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitive plural of {verbum} (words): verb_ _ _'),
      answer: 'verborum',
      hint: T('-ōrum is the masculine and neuter genitive plural of the second declension.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to what you know about it'),
      pairs: [
        { a: T('domino'), b: T('dative or ablative — one and the same') },
        { a: T('domini'), b: T('genitive singular (also nominative plural)') },
        { a: T('verba'), b: T('neuter: nominative and accusative plural') },
        { a: T('dominos'), b: T('masculine accusative plural') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The second declension has nominative equal to vocative ({us}/{um}) and dative equal to ablative ({o}).',
      ),
    },
    {
      n: '2',
      text: T(
        'The neuter is simpler than the masculine: the accusative plural matches the nominative plural, as in {verba}.',
      ),
    },
    {
      n: '3',
      text: T('The genitive plural in {-ōrum} identifies the second declension in any text.'),
    },
    {
      n: '4',
      text: T(
        'Watch the {ius} items: {templum} gives dative {templō}, and {fīlius} gives {fīliō} — the {i} never lengthens.',
      ),
    },
    {
      n: '5',
      text: T(
        'A transitive verb governs the accusative; if the noun is in -o, it is not the object.',
      ),
    },
  ],
  notes: [
    {
      label: T('The commonest:'),
      text: T(
        '{Verbum} is the commonest noun in the whole Vulgate: 1,385 occurrences. In {In principio erat Verbum} (John 1:1) the Greek has λόγος, which the Vulgate renders {Verbum} — and it is that very word the Gospel of John applies to Christ.',
      ),
    },
    {
      label: T('Caution:'),
      text: T(
        'Greek genitives such as {deī} «of God» and {Christī} «of Christ» do not follow the regular declension: they are survivals from Greek. Do not derive them from the paradigm; learn them as shapes you recognise on sight.',
      ),
    },
  ],
  examples: [
    { text: 'dominus', gloss: T('the lord (nominative singular)') },
    { text: 'domini', gloss: T('of the lord (gen. sg.) or the lords (nom. pl.)') },
    { text: 'domino', gloss: T('to the lord, with the lord (dat./abl. sg.)') },
    { text: 'dominum', gloss: T('the lord (accusative singular)') },
    { text: 'dominos', gloss: T('the lords (accusative plural)') },
    { text: 'verbum', gloss: T('word (neuter, nominative and accusative)') },
    { text: 'verba', gloss: T('words (nom./acc. plural)') },
    { text: 'puer', gloss: T('boy, and also servant') },
    { text: 'servus', gloss: T('slave, servant') },
    { text: 'In principio erat Verbum', gloss: T('«In the beginning was the Word» (John 1:1)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Second declension: {dominus, -i} and {bellum, -i}'),
      head: [T('Case'), T('Sing. -us'), T('Plur. -us'), T('Sing. -um'), T('Plur. -um')],
      rows: [
        ['Nom.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Voc.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Gen.', 'dominī', 'dominōrum', 'bellī', 'bellōrum'],
        ['Dat.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
        ['Acu.', 'dominum', 'dominōs', 'bellum', 'bellă'],
        ['Abl.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
      ],
    },
    {
      caption: T('Table 2 — Irregular second-declension genitives you will meet in the Vulgate'),
      head: [T('Form'), T('Meaning'), T('Example')],
      rows: [
        ['deī', T('of God'), '{Deī} Filius «o Filho de Deus»'],
        ['Christī', T('of Christ'), '{Christī} fīlius'],
        ['Iesū', T('of Jesus (Latinised)'), '{Iesū} Christus «Jesus Cristo»'],
        ['sanctī', T('of the holy'), '{sanctī} spiritus'],
        ['caelī', T('of heaven'), '{caelī} regnum'],
      ],
    },
  ],
};
