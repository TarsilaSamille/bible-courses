import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Gerund and gerundive'),
  subtitle: T('{amandī, amandus} — the declined infinitive and the participle of obligation'),
  section: T('The ablative absolute'),
  body: C(`## The gerund is a declined infinitive

Latin has no "gerund" in the Romance sense: what grammarians call a gerund is the **declined infinitive**, and so it has four cases and only the singular number. In {amandī} we have a gerund; in {amandum} we have an infinitive.

| Case | Form | Typical value | Example |
|---|---|---|---|
| genitive | \`{amandī}\` | complement of a noun | \`{ars amandī}\` «the art of loving» |
| dative | \`{amandō}\` | old purpose, subject | \`{est mihi amandum}\` «I have to love» |
| accusative | \`{amandum}\` | with a preposition | \`{ad amandum}\` «for loving» |
| ablative | \`{amandō}\` | means or simultaneity | \`{cum docendo}\` «in teaching» |

Compare: {amō} «I love», {amāre} «to love» (infinitive), {amandī} «of loving» (gerund), {amāns, amantis} «loving» (participle). Four different things, and Latin handles all four carefully.

## The gerundive: the future passive participle

The gerundive is the future passive participle in {-ūndus, -a, -um}: {amandus, -a, -um} «which must be loved», {legendus, -a, -um} «which must be read», {faciendus} «which must be done». On its own, without {esse}, it works as an adjective.

With {esse} the construction is the **impersonal gerundive**: the subject stands in the dative and the gerundive agrees with the noun that governs it.

| Person | Form | Gloss |
|---|---|---|
| 3rd sing. | \`{amandum est}\` | «must be loved» |
| 3rd pl. | \`{amanda sunt}\` | «must be loved» (plural) |
| with dative | \`{mihi legenda est}\` | «I have to read» |

Note the agreement: {legendus} with {liber} (masc. sing.) gives {liber legendus est} «the book must be read»; the same gerundive with {lībra} gives {lībra legenda est} «the book (fem.) must be read».

## Impersonal vs personal gerundive

- **Impersonal** (far the commoner in the Vulgate): {portāre est mihi} «I have to carry».
- **Personal**: {puerī portāre discunt} «the boys learn to carry», {nōn est tibi currere in stadiō} «you have no need to run in the stadium».

The difference is the one between «I have to read» and «the book must be read»: the first empties the subject, the second brings it back.

## The gerundive of purpose

The gerundive with purpose expresses finality without {ut}: {flōrida sunt causa legenda esse} = «the flowers are there to be read» — this is literally the Vulgate, Proverbs 1:1: {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} «flowers are the acts of Solomon: not in parables, but in the most learned teachings».

With the noun in the gerund, the sense is even more direct: {nihil tam crassum neque tam contrārium sensūs nostrī, nisi orātōrīs īnventum} «nothing so coarse and so contrary to our senses, unless it was invented by the orator».

## Application in the Vulgate

In Ephesians 2:10, {ipsius enim sumus factura, in Christō Iesū ad bonum opus ēlabōrātos} «we are his workmanship, created in Christ Jesus for good works»: the gerundive {ēlabōrātos} with {ad} marks purpose without the need for {ut}.

In 1 Timothy 2:4, {qui vult omnes hominēs salvōs fieri et ad cognitionem vēritatis venīre} — the verb {fierī} is an infinitive of purpose governed by {vult}.

## Summary

| Form | Category | Synopsis | Example |
|---|---|---|---|
| \`{amāre}\` | infinitive | to love | \`{amāre volō}\` «I want to love» |
| \`{amandī}\` | gerund | of loving | \`{amandī mē miserēre}\` «have pity on me» |
| \`{amāns}\` | present participle | loving | \`{amāns legit}\` «reading» |
| \`{amandus}\` | gerundive | which must be loved | \`{amanda esse}\` «to have to be loved» |

The gerund is the most flexible piece in the system: it replaces an AcI (§16), names a purpose, and in the ablative absolute (§17) it even serves as the predicate of a whole clause.`),
  vocab: [
    V('amare', 'amo', 'to love (infinitive)'),
    V('amandus', 'amo', 'which must be loved (gerundive)'),
    V('amans', 'amo', 'loving (present participle)'),
    V('amatus', 'amo', 'loved (past participle)'),
    V('legendus', 'lego', 'which must be read (gerundive)'),
    V('faciendus', 'facio', 'which must be done (gerundive)'),
    V('docere', 'doceo', 'to teach'),
    V('discere', 'disco', 'to learn'),
    V('portare', 'porto', 'to carry'),
    V('salvus', 'salvus', 'safe, saved'),
    V('veritas', 'veritas', 'truth'),
    V('cognitio', 'cognitio', 'knowledge'),
    V('opus', 'opus', 'work, task'),
    V('parabola', 'parabola', 'parable'),
    V('miserere', 'miseror', 'to pity, to have mercy'),
    V('Iesus', 'Iesus', 'Jesus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {mihi legenda est}, what stands in the dative?'),
    options: [
      T('The direct object of {legere}'),
      T('The subject of the impersonal gerundive'),
      T('The agent of the passive'),
      T('The preposition governed by the verb'),
    ],
    answer: 1,
    hint: T('Rule §2: in the impersonal gerundive the subject is dative.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Gerund of {legere}: legend_ («of reading»)'),
      answer: 'legendī',
      hint: T('The gerund is the infinitive in the genitive: -ī.'),
    },
    {
      kind: 'choose',
      prompt: T('Which of the forms is a gerundive?'),
      options: [
        T('{amandī} «of loving»'),
        T('{amāns} «loving»'),
        T('{amātūrus} «which will love»'),
        T('{amandus} «which must be loved»'),
      ],
      answer: 3,
      hint: T('Rule §1: the gerundive is the future passive participle in -ndus.'),
    },
    {
      kind: 'match',
      prompt: T('Match each Latin form to its category'),
      pairs: [
        { a: T('{amāre}'), b: T('infinitive') },
        { a: T('{amandī}'), b: T('gerund (declined infinitive)') },
        { a: T('{amāns}'), b: T('present participle') },
        { a: T('{amandus}'), b: T('gerundive') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {ad bonum opus ēlabōrātos} (Eph 2:10), what does {-ōs} indicate?'),
      options: [
        T('That it is an agent dative'),
        T('That it is a gerundive of purpose, without {ut}'),
        T('That it is the agent of the passive'),
        T('That it is an ablative absolute'),
      ],
      answer: 1,
      hint: T('Rule §4: the gerundive of purpose dispenses with {ut}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The gerund is the declined infinitive: {amandī}, {amandō}, {amandum}, {amandō}. It exists only in the singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the impersonal gerundive the subject stands in the dative and {esse} is impersonal: {portāre est mihi} «I have to carry».',
      ),
    },
    {
      n: '3',
      text: T(
        'The gerundive agrees with the noun it governs: {liber legendus} «the book which must be read», {lībra legenda} «the book (fem.) which must be read».',
      ),
    },
    {
      n: '4',
      text: T(
        'The gerundive with {ad} for purpose dispenses with {ut}: {ad bonum opus ēlabōrātos} «for good works».',
      ),
    },
    {
      n: '5',
      text: T(
        'The gerund in the genitive replaces the AcI: {spes salūtis vestrae} «hope that you have been saved» instead of {spes vōs salūtōs esse}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why there are four words'),
      text: T(
        'Latin distinguishes what Portuguese and Spanish have merged into a single verb. {amāre} is the infinitive (the whole action), {amandī} names the action as a noun («of loving»), {amāns} describes the subject while it acts, and {amandus} describes what has to be done. Rendering all of it with «to love» erases the information Latin is marking.',
      ),
    },
    {
      label: T('Proverbs 1:1 in the Vulgate'),
      text: T(
        'The Vulgate opens Proverbs with {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} — «flowers are the acts of Solomon: not in parables, but in the most learned teachings». It is the first sentence of the book, and it works as a definition of the method: Latin prefers the technical term to the poetic one.',
      ),
    },
  ],
  examples: [
    { text: 'amāre', gloss: T('to love (infinitive)') },
    { text: 'amandī', gloss: T('of loving (gerund, genitive)') },
    { text: 'amandō', gloss: T('loving; in loving (ablative or dative)') },
    { text: 'amandum', gloss: T('for loving; which must be loved') },
    { text: 'amāns', gloss: T('loving (present participle, with the subject)') },
    { text: 'amandus est', gloss: T('must be loved (impersonal gerundive)') },
    { text: 'mihi legenda est', gloss: T('I have to read (gerundive with dative)') },
    { text: 'liber legendus est', gloss: T('the book must be read (personal gerundive)') },
    { text: 'ad bonum opus ēlabōrātos', gloss: T('for good works (gerundive of purpose)') },
    { text: 'cum docendo', gloss: T('in teaching, while teaching') },
  ],
  tables: [
    {
      caption: T('Table 1 — The gerund (declined infinitive) of {amandus}'),
      head: [T('Case'), T('Form'), T('Use'), T('Example')],
      rows: [
        ['Nominativo', '—', T('does not exist'), '—'],
        ['Genitivo', 'amandī', T('with a noun'), '{ars amandī}'],
        ['Dativo', 'amandō', T('subject of the gerundive'), '{amandum est mihi}'],
        ['Acusativo', 'amandum', T('with a preposition'), '{ad amandum}'],
        ['Ablativo', 'amandō', T('means, circumstance'), '{cum docendo}'],
      ],
    },
    {
      caption: T('Table 2 — Impersonal and personal gerundive'),
      head: [T('Type'), T('Structure'), T('Gloss')],
      rows: [
        [T('impersonal'), '{amandum est} (sem sujeito expresso)', T('«must be loved»')],
        [T('impersonal with dative'), '{mihi legenda est}', T('«I have to read»')],
        [T('personal'), '{liber legendus est}', T('«the book must be read»')],
        [T('personal without esse'), '{nōn est tibi currere}', T('«you have no need to run»')],
      ],
    },
  ],
};
