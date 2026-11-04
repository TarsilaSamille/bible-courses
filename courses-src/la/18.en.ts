import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('The ablative absolute'),
  subtitle: T('{urbe captā}: the city having been captured, the magistrate arrived'),
  section: T('The ablative absolute'),
  body: C(`## The idea

The ablative absolute is a short clause that works as an adverbial: two or more ablatives, almost always a noun and a participle, describing a circumstance **independent** of the main proposition. It has no subject or object of its own, it is not governed by the main verb, and it can be rendered by a gerund, by a subordinate clause, or by an abstract noun.

| Pieces | Example | Function |
|---|---|---|
| Noun in the ablative | \`{urbe}\` | who undergoes or performs the action |
| Participle in the ablative | \`{captā}\` | the action, with perfective force |
| Noun + apposition | \`{me duce}\` | «under my command» |
| Noun + adjective | \`{cōnsule vivo}\` | «while the consul is alive» |

In {urbe captā} the ablative {urbe} is a **substantivised passive participle**: literally «by the city, having been taken». The sense is «the city having been captured». The ablative here is neither instrument nor means: it is called **absolute** precisely because it stands on its own, without verbal government.

## The ablative participle: tense and aspect

The tense of the participle that serves as predicate of the ablative absolute is past, but the force of the phrase shifts with context:

- **Perfective, prior**: {urbs capta} = «the city having been captured» — the effect is done.
- **Simultaneous or permanent**: {Christō regnante} = «under the reign of Christ», {me adiuvante} = «with my help».
- **Future with the gerundive**: {moritūrō praeside} = «under a president about to die» — much rarer.

When there is no verb, a bare ablative can act as a true absolute: {mē adiūte} «with my help», {tē gubernante} «with you as guide».

## How to render it

Translation is always a decision, not a calculation:

- {urbe captā, magistrātus vēnit} → «Once the city had been captured, the magistrate arrived».
- {Deō volente} → «if God wills» or «with God's permission».
- {me duce} → «under my leadership».
- {ōrtō sōle} → «at sunrise» or «with the sun already up».

## Application in the Vulgate

Mark 16:2 reads: {Et orto iam sole, veniebant ad eum} «And, the sun having already risen, they were already coming to him». The ablative absolute {ōrtō sōle} is rendered here by a gerund. Notice that the main clause {veniebant} «they were coming» carries the main sense; {ōrtō sōle} only marks the time of the action. This inversion — circumstance before verb — is what you will meet again and again in the Gospels.

In Luke 2:44, {quaerentes illum in festo} uses the same device with the noun {festum} and a substantivised participle: «searching for him in the festival».

## A reading exercise

In Acts 1:9, {Et dum diceret, hoc dictum est ei} combines a gerund and an ablative absolute ({hoc dictum est} «this was said»), showing that the two devices fit in the same sentence without colliding.

## A useful paradigm

All you need to build an absolute is the ablative singular of the participle. Memorise the pattern of {captus, -a, -um} and {regnāns}:

| Participle | Nom. | Gen. | Abl. sg. | Gloss |
|---|---|---|---|---|
| captus | captă | captī | captō | «captured» |
| regnāns | regnāns | regnantis | regnante | «reigning» |
| vīvus | vīvŭs | vīvī | vīvō | «alive» |
| missus | missŭs | missī | missō | «sent» |
| dictum | dictum | dictī | dictō | «said» |

Note that the ablative singular ends in {ō} in the third conjugation and in {e} in the first and second — the same alternation you already know from the ablative of nouns.`),
  vocab: [
    V('urbs', 'urbs', 'city'),
    V('capio', 'capio', 'to take, to capture'),
    V('captus', 'capio', 'taken, captured (pass. part.)'),
    V('magistratus', 'magistratus', 'magistrate, praetor'),
    V('venio', 'venio', 'to come'),
    V('Deus', 'Deus', 'God'),
    V('volens', 'volo', 'wishing (pres. part.)'),
    V('sol', 'sol', 'sun'),
    V('orior', 'orior', 'to rise, to be born'),
    V('ortus', 'orior', 'risen, born (part.)'),
    V('dux', 'dux', 'leader, commander'),
    V('adiuvo', 'adiuvo', 'to help'),
    V('guberno', 'guberno', 'to govern, to guide'),
    V('tempus', 'tempus', 'time, season'),
    V('verbum', 'verbum', 'word'),
    V('Dominus', 'Dominus', 'the Lord'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {urbe captā, magistrātus vēnit}, what does {-ā} in {captā} show?'),
    options: [
      T('That it is the grammatical subject of the clause'),
      T('That {captā} is an ablative participle, the predicate of the absolute'),
      T('That {captā} is the direct object of {magistrātus}'),
      T('That {urbe} is an ablative of means'),
    ],
    answer: 1,
    hint: T('Rule §1: the ablative absolute stands on its own.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ablative singular of {captus} (participle of {capio}): capt_'),
      answer: 'captō',
      hint: T('Third conjugation: the ablative singular of the participle ends in -ō.'),
    },
    {
      kind: 'choose',
      prompt: T('How is {Deō volente} best rendered?'),
      options: [
        T('«God wills» (main clause)'),
        T('«if God wills» (conditional concession)'),
        T('«by the willing God» (instrument)'),
        T('«the God wishes that» (purpose)'),
      ],
      answer: 1,
      hint: T('Rule §2: the absolute has no main verb; the sense comes from context.'),
    },
    {
      kind: 'match',
      prompt: T('Match each ablative absolute to its translation'),
      pairs: [
        { a: T('{urbe captā}'), b: T('the city having been captured') },
        { a: T('{me duce}'), b: T('under my leadership') },
        { a: T('{ōrtō sōle}'), b: T('at sunrise') },
        { a: T('{hoc dictum est}'), b: T('this was said') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'In {Et orto iam sole, veniebant ad eum} (Mk 16:2), which clause carries the main sense?',
      ),
      options: [T('{orto iam sole}'), T('{veniebant ad eum}'), T('{iam}'), T('{ad eum}')],
      answer: 1,
      hint: T('The absolute is circumstance; the verbal clause is the main one.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The ablative absolute is a nominal clause: noun (or substantivised adjective) + participle, both in the ablative, with no verbal government.',
      ),
    },
    {
      n: '2',
      text: T(
        'The tense of the participle is past, but its value is circumstantial: prior, simultaneous or permanent, depending on context.',
      ),
    },
    {
      n: '3',
      text: T(
        'The ending of the ablative singular participle is {-e} in the first and second conjugation and {-ō} in the third.',
      ),
    },
    {
      n: '4',
      text: T(
        'Noun + apposition also forms an absolute: {me duce} = «under my leadership», and {mē adiūte} = «with my help», with no participle at all.',
      ),
    },
    {
      n: '5',
      text: T(
        'In clauses with a main verb, the absolute normally precedes it: {urbe captā, magistrātus vēnit} = «the city having been captured, the magistrate arrived».',
      ),
    },
  ],
  notes: [
    {
      label: T('Absolute and oblique ablative'),
      text: T(
        'Not every ablative is absolute. {Rosā puer amat} has an oblique ablative governed by {amat} — it is the means of the action. {Rosā captā, puer vēnit} has an ablative absolute: nothing in the main clause depends on it. The test is syntactic: if the ablative is governed by something in the main clause, it is oblique; if it stands loose, it is absolute.',
      ),
    },
    {
      label: T('Herodotus, Histories III, 32'),
      text: T(
        'In the most famous ablative absolute, {ūrbē expugnātā, ...}: the city being taken by storm. The rest of the sentence hangs without a subject of its own, because the topic has already been spent on the circumstance.',
      ),
    },
  ],
  examples: [
    { text: 'urbe captā', gloss: T('the city having been captured') },
    { text: 'Deō volente', gloss: T("if God wills, with God's permission") },
    { text: 'me duce', gloss: T('under my leadership') },
    { text: 'mē adiūte', gloss: T('with my help') },
    { text: 'Christō regnante', gloss: T('under the reign of Christ') },
    { text: 'ōrtō sōle', gloss: T('at sunrise, with the sun already up') },
    { text: 'cōnsule vivo', gloss: T('while the consul is alive') },
    { text: 'eo tempore', gloss: T('at that time') },
    { text: 'hoc dictum est ei', gloss: T('this was said to him') },
    { text: 'tāē gubernante', gloss: T('with you as guide') },
  ],
  tables: [
    {
      caption: T('Table 1 — The ablative absolute: elements and rendering'),
      head: [T('Structure'), T('Example'), T('Rendering')],
      rows: [
        ['nome + participio passivo', T('the city having been captured'), '{urbe captā}'],
        ['nome + participio presente', T('Christ reigning'), '{Christō regnante}'],
        ['pronombre + substantivo', T('with my help'), '{me adiuvante}'],
        ['ablativo simples', T('at a certain time'), '{eo tempore}'],
        ['particípio + ablativo', T('this was said to him'), '{hoc dictum est ei}'],
      ],
    },
    {
      caption: T('Table 2 — Ablative singular of the participles you use most'),
      head: [T('Participle'), T('1st conj.'), T('2nd conj.'), T('3rd conj.')],
      rows: [
        [T('amans'), T('amante'), T('amante'), T('amante')],
        [T('monens'), T('monente'), T('monente'), T('monente')],
        [T('regnans'), T('regnante'), T('regnante'), T('regnante')],
        [T('videns'), T('vidente'), T('vidente'), T('vidente')],
        [T('dictus'), T('dicente'), T('dicente'), T('dicto')],
      ],
    },
  ],
};
