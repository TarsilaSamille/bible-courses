import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Reading: Psalm 21 in the Vulgate'),
  subtitle: T('{Deus, Deus meus, respice in me} — dative, accusative and the enclitic'),
  section: T('Reading'),
  body: C(`## The text

> **Deus, Deus meus, respice in me: quare me derelīquisti?**
> **Dīvīsērunt sibi vestimenta mea, et super tunicam meam miserunt sortem.**
> **Fodērunt manūs meas et pedēs meos.**
> **Dīnumerāvērunt omnia ossa mea.**
> **Tu autem, Dōmine, nē elongāveris auxilium tuum ā me.**

## Vocabulary in use

The psalm gathers nouns from three declensions and a verb in each mood. It is excellent material because it keeps doing one thing: letting you **master** nouns, with a vocabulary that indexes the whole Vulgate.

## Line 1, dissected

**{Deus, Deus meus}** repeats the same noun twice: the first is **vocative**, the direct address, «God»; the second is **nominative**, with the possessive {meus} in the masculine genitive: «my God».

**{Respice in me}** is the present imperative of {respiciō}. The verb is transitive, but its object is a pronoun: {in me} uses {in} + **ablative** for *place where* — «look upon me».

**{Quare me derelīquisti}** has the question word {quare} «why», the pronoun {me} in the **ablative** (interrogatives have no case of their own) and the perfect {derelīquisti} of {dērelinquō}: «why have you forsaken me?»

## The verbs of the psalm

| Verb | Mood | What it shows |
|---|---|---|
| {respice} | present imperative | the psalm’s command |
| {derelīquisti} | perfect, 2nd sg. | completed past action |
| {dīvīsērunt} | perfect, 3rd pl. | narrative past |
| {miserunt} | perfect, 3rd pl. | the course of {mitto} |
| {fodērunt} | perfect, 3rd pl. | the course of {fodiō} |
| {dīnumerāvērunt} | perfect, 3rd pl. | the course of {dīnumerō} |
| {elongāveris} | perfect, 2nd sg. subj. | {nē} negating a subjunctive |

## What the psalm teaches

The six verbs trace a path: one **imperative** ({respice}), four **narrative perfects** ({dīvīsērunt}, {miserunt}, {fodērunt}, {dīnumerāvērunt}) that report what has already happened, one **perfect question** ({derelīquisti}) that addresses God directly, and one **perfect subjunctive** ({elongāveris}) that petitions. The perfect dominates the psalm, and that is why the Vulgate serves the Good Friday liturgy so well: everything the psalm recounts is already complete.`),
  vocab: [
    V('deus', 'deus', 'God (voc./nom.)'),
    V('respice', 'respicio', 'look! (present imperative)'),
    V('quare', 'quare', 'why (interrogative)'),
    V('derelīquisti', 'derelinquo', 'you forsook (perf. 2nd sg.)'),
    V('dīvīsērunt', 'divido', 'they divided (perf. 3rd pl.)'),
    V('vestimenta', 'vestimentum', 'garments (n. pl.)'),
    V('tunicam', 'tunica', 'tunic (acc. sg.)'),
    V('miserunt', 'mitto', 'they cast (perf. 3rd pl.)'),
    V('sortem', 'sors', 'lot (acc. sg.)'),
    V('fodērunt', 'fodio', 'they pierced (perf. 3rd pl.)'),
    V('manūs', 'manus', 'hands (nom. pl.)'),
    V('ossa', 'os', 'bones (n. pl.)'),
    V('dīnumerāvērunt', 'dinumero', 'they numbered (perf. 3rd pl.)'),
    V('auxilium', 'auxilium', 'help (n.)'),
    V('elongāveris', 'elongo', 'you will withdraw (perf. 2nd sg. subj.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus, Deus meus}, what is the case of each occurrence?'),
    options: [
      T('The first is vocative (address), the second nominative with genitive {meus}'),
      T('Both are vocative'),
      T('The first is nominative, the second ablative'),
      T('The first is genitive, the second dative'),
    ],
    answer: 0,
    hint: T('Rule §1: vocative matches nominative; only context tells them apart.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the perfect: {Deus, Deus meus, quare me ___?}'),
      answer: 'derelīquisti',
      hint: T('{dērelinquō}, second person singular perfect.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {in me} ablative in {respice in me}?'),
      options: [
        T('Because it marks the place where the gaze rests'),
        T('Because {in} governs the accusative here'),
        T('Because {me} is accusative'),
        T('Because {respice} is intransitive'),
      ],
      answer: 0,
      hint: T('Rule §2: {in} + ablative = place where; {in} + accusative = direction.'),
    },
    {
      kind: 'fill',
      prompt: T('What is the accusative plural of {os, ossis}?'),
      answer: 'ossa',
      hint: T('The third declension makes {ossa} in every plural case.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function'),
      pairs: [
        { a: T('respice'), b: T('present imperative') },
        { a: T('quare'), b: T('interrogative') },
        { a: T('dīvīsērunt'), b: T('perfect, 3rd plural') },
        { a: T('miserunt'), b: T('from {mitto}: they cast') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The vocative has the same form as the nominative; you spot it standing alone at the start, without article or possessive.',
      ),
    },
    {
      n: '2',
      text: T(
        '{in} + ablative marks place where, {in} + accusative marks direction: {in cāsā} «at home», {in cāsam} «into the house».',
      ),
    },
    {
      n: '3',
      text: T(
        'Interrogatives have no case of their own: {me} in {quare me derelīquisti} is ablative because the question is the object of {quare}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The perfect renders a past action as a whole; it is the default tense of Vulgate narrative.',
      ),
    },
    {
      n: '5',
      text: T(
        '{nē} + subjunctive verb negates the present: {nē timeāte} «do not fear», {nē elongāveris} «do not withdraw».',
      ),
    },
  ],
  notes: [
    {
      label: T('Greek or Hebrew numbering?'),
      text: T(
        'This psalm is 21 in the Greek numbering (which the Vulgate follows) and 22 in the Hebrew numbering used by most modern Bibles. The difference comes from the alphabet: Hebrew counts {waw} as a letter-number, Greek does not.',
      ),
    },
    {
      label: T('Why this psalm appears on Good Friday'),
      text: T(
        'Liturgical tradition ties the psalm to the crucifixion and sets its imperatives ({respice}) against the executioners. Grammatically it is a dense reading: narrative perfect, dative of interest ({sibi}), {super} + accusative, and a numeral ({omnia}). Master those four and you master the psalm.',
      ),
    },
  ],
  examples: [
    { text: 'Deus, Deus meus', gloss: T('God, my God (vocative + nominative)') },
    { text: 'quāre me derelīquisti', gloss: T('why have you forsaken me') },
    {
      text: 'dīvīsērunt sibi vestimenta mea',
      gloss: T('they divided my garments among themselves (dative of interest)'),
    },
    { text: 'super tunicam meam', gloss: T('over my tunic ({super} + accusative)') },
    { text: 'fodērunt manūs meas', gloss: T('they pierced my hands') },
    { text: 'dīnumerāvērunt omnia ossa mea', gloss: T('they numbered all my bones') },
    { text: 'nē elongāveris auxilium tuum ā me', gloss: T('do not withdraw your help from me') },
    { text: 'in cāsam', gloss: T('into the house (direction)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Nouns of the psalm and their declensions'),
      head: [T('Latin'), T('Declension'), T('Portuguese')],
      rows: [
        ['Deus', '4.ª (comum)', 'Deus'],
        ['vestimenta', '2.ª (neutro pl.)', 'vestes'],
        ['tunica', '1.ª', 'túnica'],
        ['manus', '4.ª', 'mão'],
        ['os', '3.ª (neutro)', 'osso'],
        ['sors', '3.ª (i-after-a)', 'sorte'],
        ['auxilium', '2.ª (neutro)', 'auxílio'],
      ],
    },
    {
      caption: T('Table 2 — Verbs: tense, mood, person'),
      head: [T('Form'), T('Person and number'), T('Portuguese')],
      rows: [
        ['{respice}', '2.ª sg., imperativo', 'olha'],
        ['{derelīquisti}', '2.ª sg., perfeito indicativo', 'abandonaste'],
        ['{miserunt}', '3.ª pl., perfeito indicativo', 'lançaram'],
        ['{elongāveris}', '2.ª sg., perfeito subjuntivo', 'afastares'],
      ],
    },
  ],
};
