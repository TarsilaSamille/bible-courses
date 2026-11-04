import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('The perfect and its irregularities'),
  subtitle: T('{amāvit, fēcit, dīxit} — the tense that counts from the end backwards'),
  section: T('Verbs, tenses and first texts'),
  body: C(`## What the perfect means

Portuguese uses the perfect for two things: the past ({amei}) and the present ({já amei}). Latin, having more tenses, separates the two ideas:

- The **imperfect** shows the action from within, under way: {amābat} «loved»;
- The **perfect** shows the whole action, seen from its end: {amāvit} «loved».

The picture is of a line travelled to its end: from {amāvit} you know that {amāre} happened. The Vulgate uses the perfect throughout to narrate facts, which is why Genesis in Latin sounds dry and vigorous: {In principio creavit Deus caelum et terram}.

## The perfect stem

The perfect has a stem of its own (the supine), which appears in no other form. For {amāre} the stem is {amātum}; for {facere} it is {factum}; for {dīcere} it is {dīctum}. The present never shows this stem — only the third singular and the third plural, and the participle.

The perfect endings are peculiar and blend with nothing else:

| Person | Ending | {amāre} | {facere} |
|---|---|---|---|
| 1st sg. | -ī | amāvī | fēcī |
| 2nd sg. | -istī | amāvistī | fēcistī |
| 3rd sg. | -it | amāvit | fēcit |
| 1st pl. | -imus | amāvimus | fēcimus |
| 2nd pl. | -istis | amāvistis | fēcistis |
| 3rd pl. | -ērunt | amāvērunt | fēcērunt |

The third plural is {ērunt} or {-ēre}: the Vulgate almost always prefers {ērunt}, easier to say and to write.

## The verbs that break the pattern

Many verbs, high frequent, do not form the perfect from the supine stem. These are the **irregular perfects**, and they are worth more than the pattern:

| Infinitive | Perfect | Note |
|---|---|---|
| facere | fēcī | long {i}; the commonest verb in Latin |
| dīcere | dīxī | {x} in place of {ct} |
| scrībere | scrīpsī | {ps} in place of {pt} |
| legere | lēgī | long {i}, no {c} |
| capere | cēpī | long {i}, no {c} |
| dare | dedī | doubled {d} |

Notice that almost all the irregulars have a long {ī} in the first singular — {fēcī}, {dīxī}, {lēgī}, {cēpī}, {dedī}. That is what lets you recognise them from a distance. The only exception is {bibī} «I drank», where the vowel is already long.

## The pluperfect

If the perfect already looks towards the end, the **pluperfect** ({fuerat}) looks at a moment before that end: «had been done» before something else took place. It is formed with the **perfect participle** plus {erat}:

{Mundus ante omnia factus {erat}} «The world had been created before all things»;
{Quod {erat} ab initio, quod {audimus} a vobis} «that which was from the beginning, which we have heard from you» (1 John 1:1).

Note the pair in {1 John 1:1}: Latin renders the Greek περὶ οὗ ἀκηκόαμεν with {quod erat} plus the verb {audire} in the perfect, and the result is a phrase that sounds odd in Portuguese and is impeccable in Latin.`),
  vocab: [
    V('amavit', 'amo', 'he/she loved'),
    V('fecit', 'facio', 'he/she did, made'),
    V('dixit', 'dico', 'he/she said'),
    V('scripsit', 'scribo', 'he/she wrote'),
    V('legit', 'lego', 'he read; also chose'),
    V('vixit', 'vivo', 'he/she lived'),
    V('cepit', 'capio', 'he/she took'),
    V('bibit', 'bibo', 'he/she drank'),
    V('fuit', 'sum', 'he was (irregular perfect of sum)'),
    V('erat', 'sum', 'he/she was (imperfect)'),
    V('fuerat', 'sum', 'he/she had been (pluperfect)'),
    V('factus', 'facio', 'made (participle of facio)'),
    V('creavit', 'creo', 'he/she created'),
    V('missus', 'mitto', 'sent (participle of mitto)'),
    V('vidit', 'video', 'he/she saw'),
    V('audivit', 'audio', 'he/she heard'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {In principio creavit Deus caelum et terram}, what does the perfect {creavit} suggest it is NOT?',
    ),
    options: [
      T('That the creation is still going on now'),
      T('That the creation was an event with a defined beginning and end'),
      T('That the creation has not happened yet'),
      T('That the creation was done for a purpose'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why are {fēcī}, {dīxī}, {lēgī} and {cēpī} easy to recognise?'),
      options: [
        T('They all have a long {i} in the first singular'),
        T('They all end in {ct}'),
        T('They all have {s} in the supine'),
        T('They all belong to the second conjugation'),
      ],
      answer: 0,
      hint: T('Rule §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Third person plural of the perfect of {facere}: feci_ _'),
      answer: 'fecerunt',
      hint: T('The Vulgate prefers the ending {-ērunt} to {-ēre}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its tense'),
      pairs: [
        { a: T('amābat'), b: T('imperfect: action under way') },
        { a: T('amāvit'), b: T('perfect: whole action') },
        { a: T('factus erat'), b: T('pluperfect passive: «had been made»') },
        { a: T('fuit'), b: T('irregular perfect of {sum}: «he was»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The perfect shows the whole action seen from its end; the imperfect, the action seen from within.',
      ),
    },
    {
      n: '2',
      text: T(
        'The supine is the theme exclusive to the perfect: it appears only in the 3rd sg./pl. and the participle.',
      ),
    },
    {
      n: '3',
      text: T(
        'Irregular perfects almost always have a long {ī} in the first singular: {fēcī}, {lēgī}, {cēpī}.',
      ),
    },
    {
      n: '4',
      text: T('The pluperfect is {perfect participle} + {erat}, never a suffix of its own.'),
    },
    {
      n: '5',
      text: T(
        'The Vulgate prefers {-ērunt} to {-ēre} in the third plural: easier to write and to pronounce.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin has so many tenses:'),
      text: T(
        'Latin does not distinguish tense (when) from aspect (how). It encodes the **relation of the narrated period to the point of view**. A Greek speaker stumbles in translating, and Jerome improvises: sometimes he writes {ērunt} for {ēre}, sometimes he lets the Greek speak. The result is a Latin richer than Greek and a little more irregular.',
      ),
    },
    {
      label: T('The supine in Portugal:'),
      text: T(
        'The supine is alive in Portuguese ({vi, viu, vista}) and practically dead in Spanish. In Latin it is the central piece of the perfect: without it, {amāre} and {amātum} would have no visible link, and the perfect {amāvit} would look arbitrary.',
      ),
    },
  ],
  examples: [
    { text: 'amavit', gloss: T('he/she loved (perfect)') },
    { text: 'fecit', gloss: T('he/she did — irregular long {i}') },
    { text: 'dixit', gloss: T('he/she said — {x} for {ct}') },
    { text: 'legit', gloss: T('he/she read; also «chose»') },
    { text: 'vixit', gloss: T('he/she lived') },
    { text: 'fuit', gloss: T('he was — {fuit} from {sum}') },
    { text: 'fuerat', gloss: T('he had been (pluperfect)') },
    { text: 'factus', gloss: T('made — {fact-} + suffix {-us}') },
    { text: 'creavit', gloss: T('he created — Genesis 1:1') },
    {
      text: 'In principio creavit Deus caelum et terram',
      gloss: T('«In the beginning God created heaven and earth»'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The perfect system: indicative, future and supine perfect'),
      head: [T('Person'), T('Perfect'), T('Perf. fut. (or old future)'), T('Supine')],
      rows: [
        [T('1st sg.'), 'amāvī', 'amāverō', 'amātum'],
        [T('2nd sg.'), 'amāvistī', 'amāveris', 'amātūrum'],
        [T('3rd sg.'), 'amāvit', 'amāverit', '—'],
        [T('1st pl.'), 'amāvimus', 'amāverimus', '—'],
        [T('2nd pl.'), 'amāvistis', 'amāveritis', '—'],
        [T('3rd pl.'), 'amāvērunt', 'amāverint', '—'],
      ],
    },
    {
      caption: T('Table 2 — Verbs with irregular perfects'),
      head: [T('Infinitive'), T('1st sg.'), T('3rd sg.'), T('Participle')],
      rows: [
        ['facere', 'fēcī', 'fēcit', 'factus'],
        ['dīcere', 'dīxī', 'dīxit', 'dīctus'],
        ['scrībere', 'scrīpsī', 'scrīpsit', 'scrīptus'],
        ['legere', 'lēgī', 'lēgit', 'lēctus'],
        ['capere', 'cēpī', 'cēpit', 'captus'],
        ['dare', 'dedī', 'dedit', 'datus'],
        ['bibere', 'bibī', 'bibit', 'bībitus'],
        ['vīvere', 'vīxī', 'vīxit', 'vīctus'],
      ],
    },
  ],
};
