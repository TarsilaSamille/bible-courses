import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('The third declension'),
  subtitle: T('{rex, regis} — the nominative lies, the genitive does not'),
  section: T('Declensions and the verb sum'),
  body: C(`## How to recognise it

The third declension is the most populous in Latin: it holds the most abstract vocabulary, agent nouns, and the -ium neuters. It is recognised by a pair of properties that suffice to classify any word:

1. The **nominative** ends in a consonant, or in {-as}, {-os}, {-er}, {-or}, {-es} — {rex}, {civitas}, {canis}, {miles}, {lumen};
2. The **genitive singular** ends in {-is} or {-os} — {regis}, {civitatis}, {canis}, {militis}, {luminis}.

If you see an {-is} in the genitive singular, it is a third declension almost always. That is why the third-declension paradigm is the one learned first.

## The theme: two vowels at stake

The real difficulty of the third declension is the **imperfect stem**, and the problem is visible already in {rex, regis}. The theme is {reg-}, and the nominative has {e} + {x}; in the genitive {e} + {i} appears. What is happening is that {x} stands for a {ks} that Latin writes now as {x}, now as {c} — so the same theme has two guises.

Simplified: the genitive singular shows the theme plus {is}. Compare:

- {rex, regis} — theme {reg-}, but the nominative has {x};
- {miles, militis} — theme {mīlit-} (long vowel);
- {lumen, luminis} — theme {lūmin-} (long vowel).

In the last two the theme vowel is long, so the {i} of the genitive is short and the form is heavier.

## The plural

The plural replaces the end of the theme with {ēs} and lengthens the final vowel. The problem shows up in the **nominative and genitive plural**, which follow different themes:

| Singular | Gen. sg. | Nom. pl. | Gen. pl. |
|---|---|---|---|
| rēx | rēgis | rēgēs | rēgum |
| mīles | mīlitis | mīlitēs | mīlitum |
| lūmen | lūminis | lūmina | lūminum |
| pars | partis | partēs | partium |
| canis | canis | canēs | canum |

Look at {pars} → {partium} and {canis} → {canum}: some themes take {i} before the suffix {um}, others do not. The historical reason is that some themes had an {i} in their ancestry and others did not. There is no rule — only the form.

## The -ius nouns

A group of neuters has {i} in the genitive singular and {ium} in the plural: {bellum, belli} but {bellōrum}, {verbum, verbī} but {verbōrum}, {civis, civis} but {cīvium}, {hostis, hostis} but {hostium}. These are the **i-stems**, and their forms are perfectly regular once you know the rule: genitive and dative plural take {i} + {um}.

The most famous member of the group is {civitas} «city» — and it is precisely the word the Vulgate uses when it speaks of the city of {Hierusalem}: {Ierusalem, quae est civitas Iudaeae}.

## What the Vulgate does with the third declension

The nouns that dominate the New Testament in Latin are nearly all third declension: {lux} and {lumen}, {caro} «flesh», {salvator} «saviour», {pax} «peace», {fides} «faith», {spes} «hope», {mors} «death». Learn the third declension and you learn the central vocabulary of Christian belief.`),
  vocab: [
    V('rex', 'rex', 'king (x = ks)'),
    V('regnum', 'regnum', 'kingdom'),
    V('corpus', 'corpus', 'body'),
    V('lumen', 'lumen', 'light'),
    V('miles', 'miles', 'soldier'),
    V('canis', 'canis', 'dog'),
    V('gens', 'gens', 'nation, people'),
    V('urbs', 'urbs', 'city'),
    V('pars', 'pars', 'part (i-stem)'),
    V('mors', 'mors', 'death'),
    V('amor', 'amor', 'love'),
    V('pastor', 'pastor', 'shepherd'),
    V('flos', 'flos', 'flower'),
    V('nomen', 'nomen', 'name'),
    V('hostis', 'hostis', 'enemy (i-stem)'),
    V('civitas', 'civitas', 'city, state'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does the genitive {regis} reveal about the form {rex}?'),
    options: [
      T('That the theme is {reg-} and the {x} of the nominative hides a {ks}'),
      T('That {rex} is second declension'),
      T('That {rex} is a verb'),
      T('That the genitive never matches the theme'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which of these i-stems has a genitive plural in {ium}?'),
      options: [T('{canum}'), T('{mīlitum}'), T('{cīvium}'), T('{rēgum}')],
      answer: 2,
      hint: T('Rule §4: i-stems take {i} before the suffix {um}.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitive singular of {corpus}: corp_ _'),
      answer: 'corporis',
      hint: T('Theme {corpor-} + {is}, with short {u}: «corpŏris».'),
    },
    {
      kind: 'match',
      prompt: T('Match the nominative to the genitive singular'),
      pairs: [
        { a: T('lumen'), b: T('lūminis — long-vowel theme') },
        { a: T('civitas'), b: T('civitatis — simple theme') },
        { a: T('miles'), b: T('mīlitis — as in mīles mīlitum') },
        { a: T('flos'), b: T('flōris — x for the sake of Greek z') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('A consonant nominative plus a genitive singular in {-is} = third declension.'),
    },
    {
      n: '2',
      text: T(
        'The genitive singular is theme + {is}: it is the surest way to find the real theme.',
      ),
    },
    {
      n: '3',
      text: T(
        'The nominative {x} can hide a {c} or a {g}: {rex} = {regs}, {flos} = {flōs} (Greek φλόξ).',
      ),
    },
    {
      n: '4',
      text: T('In i-stems, genitive and dative plural take {i} before {um}: {cīvium}, {hostium}.'),
    },
    {
      n: '5',
      text: T('In the plural, dative and ablative are identical in {ibus}: {rēgibus}, {civibus}.'),
    },
  ],
  notes: [
    {
      label: T('Merging the themes:'),
      text: T(
        'Latin has, in almost every noun, three themes: the **nominal** (from the nominative), the **genital** (from the genitive) and the **vocative** (from the singular). Latin is a **three-theme language**, and that is why the dative singular never leaves the nominative theme: {rēgī} comes from {rēx} + {ī}, not from {reg-}.',
      ),
    },
    {
      label: T('Beware of:'),
      text: T(
        'Some i-stems only reveal their nature in the plural. Latin has them in {pars}, {mīles}, {cīvis} and {equus} — they all behave differently. The only way is to learn them: {partium} and {mīlitum} go their own ways, and the text gives no warning.',
      ),
    },
  ],
  examples: [
    { text: 'rex', gloss: T('king (nominative singular)') },
    { text: 'regis', gloss: T('of the king (gen. sg.) — it shows the theme') },
    { text: 'regem', gloss: T('the king (accusative singular)') },
    { text: 'rege', gloss: T('by the king (abl. sg.), short {e}') },
    { text: 'regum', gloss: T('of the kings (genitive plural)') },
    { text: 'regibus', gloss: T('to the kings, with the kings (dat./abl. pl.)') },
    { text: 'lumen', gloss: T('light — pure neuter, nom. = acc.') },
    { text: 'corpus', gloss: T('body — theme {corpor-}, short {u}') },
    { text: 'civitas', gloss: T('city — «the city of Judaea»') },
    { text: 'pars', gloss: T('part — genitive plural {partium}') },
  ],
  tables: [
    {
      caption: T('Table 1 — Third declension: {rex, regis} (consonant theme)'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        ['Nom.', 'rēx', 'rēgēs'],
        ['Voc.', 'rēx', 'rēgēs'],
        ['Gen.', 'rēgis', 'rēgum'],
        ['Dat.', 'rēgī', 'rēgibus'],
        ['Acu.', 'rēgem', 'rēgēs'],
        ['Abl.', 'rēge', 'rēgibus'],
      ],
    },
    {
      caption: T(
        'Table 2 — Third declension: i-stem ({civis, civis}) and neuter ({lumen, luminis})',
      ),
      head: [T('Case'), T('i-stem'), T('Neuter'), T('Note')],
      rows: [
        ['Nom.', 'civis', 'lūmen', T('pure neuter')],
        ['Gen.', 'civis', 'lūminis', T('short {i} or long here?')],
        ['Dat.', 'civi', 'lūminī', T('= ablative')],
        ['Acu.', 'civem', 'lūmen', T('= nominative')],
        ['Abl.', 'cive', 'lūmine', T('short {e}')],
        ['Gen. pl.', 'cīvium', 'lūminum', T('the i-stem {i}')],
        ['Nom. pl.', 'civēs', 'lūmina', T('neuter: short {a}')],
      ],
    },
  ],
};
