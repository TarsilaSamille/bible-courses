import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T("The Lord's Prayer in Latin (Mt 6:9-13)"),
  subtitle: T('The prayer that crosses eighteen centuries unchanged'),
  section: T('Reading the Vulgate and capstone'),
  body: C(`## The text

> Pater noster, qui es in caelis,
> sanctificetur nomen tuum.
> Veniat regnum tuum.
> Fiat voluntas tua, sicut in caelo et in terra.
> Panem nostrum quotidianum da nobis hodie.
> Et dimitte nobis debita nostra,
> sicut et nos dimittimus debitoribus nostris.
> Et ne nos inducas in tentationem,
> sed libera nos a malo.

## The two halves

Matthew 6:9-10 gives the **Lord's Prayer**; 6:11-13 gives **Give us this day our daily bread**. Tradition split the two into separate prayers, but the Greek text and the Vulgate present them in sequence, as one prayer. Notice that the second half is entirely imperative — the request for bread becomes a command: «give us».

The oldest and most faithful form stands at Luke 11:2-4, and it is practically identical:

> Pater noster, qui es in caelis, sanctificetur nomen tuum.
> Fiat voluntas tua sicut in caelo et in terra.
> Da nobis panem nostrum hodie.
> Et dimitte nobis peccata nostra.

## The oldest imperative in the West

The whole prayer consists of forms that survived intact. Compare Jerome's Latin with what you said at school:

- **Pater noster** — identical;
- **qui es in caelis** — identical;
- **sanctificetur nomen tuum** — identical;
- **Fiat voluntas tua** — identical;
- **panem nostrum quotidianum** — identical;
- **Et ne nos inducas in tentationem** — identical.

The forms that did *not* survive are the regular imperatives: {da} «give» was {dā}; nobody says that any more. Medieval liturgical Latin froze the text into one or two main dialects, which is why the prayer still sounds Latin to someone who knows no Latin at all.

## What each construction teaches

**Pater noster, qui es in caelis.** The relative {qui} goes back to {Pater} in the ablative: a relative pronoun agrees with its antecedent in gender and number but changes case according to its function. Here {in caelis} is place without {in}.

**Sanctificetur nomen tuum.** Present subjunctive with {est} of {sum}: the third singular of the subjunctive of {sum} is {sit}, but with a verb of {facere} the Vulgate prefers the **passive periphrastic**, {sanctificētur}. It is the mood of the wish: «let it be hallowed».

**Fiat voluntas tua.** {Fiat} is the present subjunctive of {fio}, now lost. The phrase is literally «let your will be done» — the verb in second position, the oldest order there is.

**Panem nostrum quotidianum da nobis hodie.** {Panem} accusative, {da} imperative, {nobis} dative, {hodie} adverb. {Quotidianum} is a Latinised Greek adjective (καθ᾽ ἡμέραν), used as a noun: «the one of each day».

**Dimitte nobis debita nostra.** {Debita} is the neuter plural of {debitus} «debtor», substantivised: «our debts». Notice that {nobis} here is dative, whereas in {sed libera nos a malo} the {nos} is accusative, from {libero}. Same pronoun, two cases, because of two different verbs.

**Ne nos inducas in tentationem.** {Ne} plus a negative subjunctive: «lead us not». {Tentatio} comes from Greek πειρασμός, «trial, testing». The Vulgate writes what Luke does not: there is no {et ne nos inducas} in Luke, and {inducere} is harder than the Greek εἰσενέγκῃ.

**Sed libera nos a malo.** {Sed} «but», {libera} imperative, {a} plus ablative {malo}. The original Greek says «deliver us from evil»; Latin shifts the preposition from genitive to ablative, which gives the nuance of «from the power of evil».`),
  vocab: [
    V('Pater', 'pater', 'Father'),
    V('noster', 'noster', 'our'),
    V('caelum', 'caelum', 'heaven (pl. {caeli})'),
    V('es', 'sum', 'you are (2nd sg.)'),
    V('sanctificetur', 'sanctifico', 'let it be hallowed (subj. pass.)'),
    V('nomen', 'nomen', 'name'),
    V('veniat', 'venio', 'let it come (subj.)'),
    V('fiat', 'fio', 'let it be done (from {fio})'),
    V('voluntas', 'voluntas', 'will'),
    V('panis', 'panis', 'bread'),
    V('quotidianum', 'quotidianus', 'daily'),
    V('da', 'do', 'give! (imperative)'),
    V('dimitte', 'dimitto', 'forgive! (imperative)'),
    V('debita', 'debitus', 'debts (neuter plural)'),
    V('inducas', 'induco', 'that you lead (subj.)'),
    V('malo', 'malum', 'evil (abl. of {malum})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Dimitte nobis debita nostra}, what case is {nobis} and why?'),
    options: [
      T('Dative: {dimittere} governs two things — object and recipient'),
      T('Accusative: {nobis} is the pronoun, and pronouns are always accusative'),
      T('Ablative: {in} was omitted'),
      T('Genitive: it is the possession of {debita}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why {sanctificetur} and not {sanctificet}?'),
      options: [
        T(
          'Because it is a transitive verb: it uses the passive periphrastic in -r in the subjunctive',
        ),
        T('Because {et} changes the verb to the subjunctive'),
        T('Because Latin has no active form for that verb'),
        T('Because {nomen} is neuter and requires the passive'),
      ],
      answer: 0,
      hint: T('Rule §4.'),
    },
    {
      kind: 'fill',
      prompt: T('The verb that means «let it be done» in the prayer: fi_ _'),
      answer: 'fiat',
      hint: T('It is the present subjunctive of {fio}, now lost from Latin.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to what it means in the prayer'),
      pairs: [
        { a: T('Pater'), b: T('«Father» — vocative, the form that survived') },
        { a: T('es'), b: T('«you are» — 2nd sg. of {sum}, without {ei}') },
        { a: T('da'), b: T('«give!» — imperative of {do}, now frozen') },
        { a: T('sed'), b: T('«but» — adversative conjunction') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{qui} agrees with its antecedent in gender and number but takes the case of its own function.',
      ),
    },
    {
      n: '2',
      text: T(
        'The prayer is all imperative or subjunctive — there is not one indicative except the {est} of {sum}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ne} plus subjunctive means «not (let it be)»: it is the negative subjunctive, not a negated indicative.',
      ),
    },
    {
      n: '4',
      text: T(
        'Transitive verbs form the «ought to be» in the subjunctive with the passive periphrastic: {sanctificētur}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The same pronoun changes case with the verb: {nobis} dative of {dimittere}, {nos} accusative of {libero}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin?'),
      text: T(
        'Latin was not a Western literary choice but a happy accident of geography: the church of Rome, alone among the patriarchates to speak the language of Rome, needed only one translation to speak to the people of Rome — and the liturgical prayers are the few sentences any believer can pray in Latin, because everybody learned them. Greek, Aramaic and Hebrew did not have that luck.',
      ),
    },
    {
      label: T('Literal translation:'),
      text: T(
        'In Latin, bread is {panis} (masculine), not {pāne}; and «daily» is {quotidianum}, a Greek adjective. Liturgical Latin therefore sounds harder than Portuguese precisely because it does not translate: it repeats the words. A Portuguese reader recognises the sense; a Latin reader recognises the grammar.',
      ),
    },
  ],
  examples: [
    { text: 'Pater noster', gloss: T('«Our Father» — {Pater} in the vocative') },
    { text: 'qui es in caelis', gloss: T('«who art in heaven» — relative in the ablative') },
    { text: 'sanctificetur nomen tuum', gloss: T('«hallowed be thy name»') },
    { text: 'Veniat regnum tuum', gloss: T('«thy kingdom come» — {regnum} neuter') },
    { text: 'Fiat voluntas tua', gloss: T('«thy will be done»') },
    { text: 'Panem nostrum quotidianum', gloss: T('«our daily bread»') },
    { text: 'da nobis hodie', gloss: T('«give us today» — {nobis} dative') },
    { text: 'dimitte nobis debita', gloss: T('«forgive us our debts»') },
    { text: 'ne nos inducas in tentationem', gloss: T('«lead us not into temptation»') },
    { text: 'sed libera nos a malo', gloss: T('«but deliver us from evil»') },
  ],
  tables: [
    {
      caption: T("Table 1 — The Lord's Prayer: Matthew 6:9-13 and Luke 11:2-4"),
      head: [T('Mt 6:9-13'), T('Lk 11:2-4'), T('Portuguese')],
      rows: [
        ['{Pater noster, qui es in caelis}', T('same'), 'Pai nosso, que estás nos céus'],
        ['{sanctificetur nomen tuum}', T('same'), 'seja santificado o teu nome'],
        ['{Veniat regnum tuum}', T('absent in Luke'), 'venha o teu reino'],
        [
          '{Fiat voluntas tua, sicut in caelo et in terra}',
          T('without «et in terra»'),
          'seja feita a tua vontade',
        ],
        [
          '{Panem nostrum quotidianum da nobis hodie}',
          T('{Da nobis panem nostrum hodie}'),
          'o nosso pão de cada dia',
        ],
        [
          '{Et dimitte nobis debita nostra}',
          T('{Et dimitte nobis peccata nostra}'),
          'e perdoa as nossas dívidas',
        ],
        [
          '{Et ne nos inducas in tentationem}',
          T('absent in Luke'),
          'e não nos induzas em tentação',
        ],
      ],
    },
    {
      caption: T('Table 2 — Forms in the prayer: what changed and what stayed'),
      head: [T('Form in the Vulgate'), T('Liturgical Latin'), T('Portuguese'), T('Spanish')],
      rows: [
        ['{Pater noster}', 'Pater noster', 'Pai nosso', 'Padre nuestro'],
        ['{qui es in caelis}', 'qui es in caelis', 'que estás nos céus', 'que estás en el cielo'],
        [
          '{sanctificetur nomen tuum}',
          'sanctificetur nomen tuum',
          'seja santificado o teu nome',
          'sea santificado tu nombre',
        ],
        [
          '{fiat voluntas tua}',
          'fiat voluntas tua',
          'seja feita a tua vontade',
          'hágase tu voluntad',
        ],
        ['{da nobis hodie}', 'da nobis hodie', 'dá-nos hoje', 'danos hoy'],
        [
          '{dimitte nobis debita}',
          'dimitte nobis debita',
          'perdoa as nossas dívidas',
          'perdona nuestras deudas',
        ],
        ['{a malo}', 'a malo', 'do mal', 'del mal'],
      ],
    },
  ],
};
