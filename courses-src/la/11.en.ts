import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Deponent verbs and the subjunctive'),
  subtitle: T('{loquor, loquor, locutus} — passive shape, active sense'),
  section: T('Verbs, tenses and first texts'),
  body: C(`## The verb that looks passive and is not

**Deponents** take passive endings but are active in meaning. It is the exact opposite of what the name suggests: {de-pono} is where the noun *deponent* «one who sets down, deposits» comes from. Latin has perhaps twenty of them, all first conjugation, and all in common use:

- {loquor, loquor, locūtus sum} «to speak»;
- {vĕgor, vĕgis, vēnī sum} «to go, to walk» (so with {vēnī}, the perfect of {vĕnio});
- {mŏror, mŏris, mortuus sum} «to die»;
- {nascor, nascis, nātus sum} «to be born»;
- {orior, oris, ortus sum} «to rise»;
- {fruor, fruis, frūctus sum} «to enjoy»;
- {conor, conis, cōnātus sum} «to attempt»;
- {comitor, comitis, comitātus sum} «to accompany».

In context, {loquor} can be a first-person verb, and usually is:

{Pueri in schola {loquuntur}} «the boys speak in the school»;
{Omnes de {Deo} {locuti sunt}} «all spoke about God».

The participle, on the other hand, is **always** active: {locutus} means «speaking» or «who spoke», never «spoken».

## The subjunctive, the mood of will

Latin has four moods, and the subjunctive is the most important after the indicative because it renders everything Portuguese turns into «que», «if», «perhaps», «I hope»:

- {Amat} «loves» — fact, present indicative;
- {Amēt} «let him love» — order, present subjunctive;
- {Amāvit} «loved» — past fact, perfect;
- {Amāverit} «will have loved» — future, future perfect.

Notice the mechanism: the subjunctive is built with a **lengthened** thematic vowel plus {t} in the first three persons:

| Person | Indicative | Subjunctive |
|---|---|---|
| 1st sg. | amō | amēm |
| 2nd sg. | amās | amēs |
| 3rd sg. | amat | amet |
| 1st pl. | amāmus | amēmus |
| 2nd pl. | amātis | amētis |
| 3rd pl. | amant | ament |

## The three subjunctive families

Latin is prodigal with moods. The Vulgate lives off three families:

1. **Present** ({amēt}): the commonest, used for orders and for present conditions.
2. **Imperfect** ({amāret}): the mood of possible actions in the past — «if he loved», «he wanted to love». It appears a lot in {quamquam} «although» clauses and in proverbs: {Amāret quantum vellet}.
3. **Perfect** ({amāverit}): the mood of actions **prior** to another action. It is the easiest to recognise, because it has the {amāv-} stem plus {erit}.

In {Si non venerit, non videbit} (John 15:24), Latin writes {venerit} and {videbit}: both are future perfect, and the first is subjunctive. El griego dice lo mismo; la diferencia es que el latín perdió el aoristo y se quedó solo con el «subjuntivo del perfecto».

## Subjunctive or indicative?

One practical rule covers 90% of the Vulgate: **use the subjunctive whenever there is an idea of order, doubt, condition or purpose**.

| Trigger | Example |
|---|---|
| order | {Veniat} «let him come» |
| purpose | {spectat} «to see» |
| condition | {Si {venerit}...} «if he comes» |
| concession | {cum} {non...} «although not» |

The most productive conjunction is {ut} plus subjunctive, which in Latin means both «that» (object clause) and «so that» (purpose). Context decides, and the translation resolves it: {scient, ut ...} «he knows that», {venit, ut videat} «he came to see».`),
  vocab: [
    V('loquor', 'loquor', 'I speak'),
    V('loquuntur', 'loquor', 'they speak'),
    V('locutus', 'loquor', 'who spoke, orator'),
    V('vĕgor', 'vĕgor', 'I go, I walk'),
    V('vēnit', 'vĕnio', 'he came'),
    V('nascor', 'nascor', 'I am born'),
    V('natus', 'nascor', 'born'),
    V('orior', 'orior', 'I rise'),
    V('mortuus', 'mŏror', 'dead'),
    V('conor', 'conor', 'I attempt'),
    V('fruor', 'fruor', 'to enjoy (+ abl.)'),
    V('ut', 'ut', 'that, so that (+ subj.)'),
    V('ne', 'ne', 'lest, so that not'),
    V('quamquam', 'quamquam', 'although'),
    V('licet', 'licet', 'although, it is allowed'),
    V('sperare', 'spero', 'to hope'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Pueri in schola loquuntur}, what is the value of {loquuntur}?'),
    options: [
      T('Passive form with active sense: «they speak»'),
      T('Passive of {loqui}: «they are spoken about»'),
      T('Present subjunctive: «let them speak»'),
      T('Imperfect of {loqui}: «they were speaking»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('How is the present subjunctive formed from the present indicative?'),
      options: [
        T('By lengthening the thematic vowel and adding {t} in the first three persons'),
        T('By changing {a} to {e} throughout the form'),
        T('By adding {ns} to every form'),
        T('By using the supine stem plus {erim}'),
      ],
      answer: 0,
      hint: T('Rule §2: {amat} → {amet}.'),
    },
    {
      kind: 'fill',
      prompt: T('Perfect of {loquor}: locutus su_'),
      answer: 'sum',
      hint: T('The deponent forms its perfect with the auxiliary {sum}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to what it means in context'),
      pairs: [
        { a: T('Veniat'), b: T('subjunctive: «let him come» — an order') },
        { a: T('amat'), b: T('indicative: «loves» — a fact') },
        { a: T('amāret'), b: T('subj. imperfect: «if he loved» — possibility') },
        { a: T('amāverit'), b: T('subj. perfect: «should have loved» — prior action') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Deponent verbs have passive shape and active sense; their participle is always active.',
      ),
    },
    {
      n: '2',
      text: T(
        'The present subjunctive lengthens the thematic vowel and adds {t}: {amat} → {amet}.',
      ),
    },
    { n: '3', text: T('The perfect subjunctive shows the {amāv-} stem plus {-erit}: {amāverit}.') },
    {
      n: '4',
      text: T(
        'Use the subjunctive for order, purpose, condition and doubt; the indicative, for fact.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ut} + subjunctive means both «that» and «so that»; context and the preposition {ad} decide.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin lost the future:'),
      text: T(
        'Latin has a future ({amābit}) and a future perfect ({amāverit}), but the second is far commoner, and rightly so: Greek prefers it too, and for Greek the future perfect is the optative. Translating into Latin, Jerome turned most Greek optatives into {amāverit}. That is why the Vulgate has so much more future perfect than you might expect.',
      ),
    },
    {
      label: T('Against the optative:'),
      text: T(
        'Latin has **no optative**; Greek has. All the functions of the Greek optative were absorbed by the Latin subjunctive. If a student translates from Greek and writes «optative» in Latin, they are writing Greek in disguise.',
      ),
    },
  ],
  examples: [
    { text: 'loquor', gloss: T('I speak — passive shape, active sense') },
    { text: 'loquuntur', gloss: T('they speak') },
    { text: 'locutus', gloss: T('who spoke — active participle') },
    { text: 'venit', gloss: T('he came — {vēnit} from {vĕnio}') },
    { text: 'natus', gloss: T('born — from the deponent {nascor}') },
    { text: 'mortuus', gloss: T('dead — from the deponent {mŏror}') },
    { text: 'amēt', gloss: T('let him love (present subj.)') },
    { text: 'amāret', gloss: T('if he loved (subj. imperfect)') },
    { text: 'amāverit', gloss: T('should have loved (subj. perfect)') },
    {
      text: 'Si non venerit, non videbit',
      gloss: T('«If he does not come, he will not see» — {venerit} is subjunctive'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Subjunctives of {amāre}: the three families'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Perfect')],
      rows: [
        ['1.ª sing.', 'amēm', 'amārem', 'amāverim'],
        ['2.ª sing.', 'amēs', 'amārēs', 'amāveris'],
        ['3.ª sing.', 'amēt', 'amāret', 'amāverit'],
        ['1.ª pl.', 'amēmus', 'amāremus', 'amāverimus'],
        ['2.ª pl.', 'amētis', 'amārētis', 'amāveritis'],
        ['3.ª pl.', 'ament', 'amārent', 'amāverint'],
      ],
    },
    {
      caption: T('Table 2 — Deponent verbs and their participles'),
      head: [T('Infinitive'), T('1st sg.'), T('Participle'), T('Gloss')],
      rows: [
        ['loquor', 'loquor', 'locūtus', 'falar'],
        ['vĕgor', 'vĕgor', 'vēnitus', 'caminhar'],
        ['mŏror', 'mŏror', 'mortuus', 'morrer'],
        ['nascor', 'nascor', 'nātus', 'nascer'],
        ['orior', 'orior', 'ortus', 'levantar-se'],
        ['fruor', 'fruor', 'frūctus', 'usufruir'],
        ['conor', 'conor', 'cōnātus', 'tentar'],
        ['comitor', 'comitor', 'comitātus', 'acompanhar'],
      ],
    },
  ],
};
