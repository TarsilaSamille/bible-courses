import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Uses of the subjunctive'),
  subtitle: T('{ut, cum, quīn}: final, complementary, oblique and temporal'),
  section: T('The ablative absolute'),
  body: C(`## The subjunctive is a mood of stance

The indicative asserts; the subjunctive **poses a problem**. It appears whenever the speaker does not want — or cannot — treat what he says as fact: because he wants to state a purpose, because he is in doubt, because he is reporting someone else's opinion, or because he means «at the time when».

| Use | Conjunction | Example | Gloss |
|---|---|---|---|
| final | \`{ut}\` | \`{venit ut videat}\` | «he comes to see» |
| final negated | \`{ne}\` | \`{venit ne videat}\` | «he comes not to see» |
| complementary | \`{ut}\` | \`{nesciō quid faciam}\` | «I do not know what to do» |
| oblique (indirect) | none | \`{dīcit eum venīre}\` | «he says that he is coming» |
| oblique (verb) | none | \`{rogō ut vēniās}\` | «I ask you to come» |
| temporal | \`{cum}\` | \`{cum vēnit}\` | «when he came» |
| temporal | \`{ubi}\` | \`{ubi vēnit}\` | «as soon as he came» |
| temporal | \`{dum}\` | \`{dum vēnit}\` | «while he was coming» |

## Hortative and jussive

Before anything else, the subjunctive is the mood of the first verbs of the main clause:

- **Hortative** (first person plural): {amēmus} «let us love», {gaudeāmus} «let us rejoice», {eāmus} «let us go».
- **Jussive** (third person): {sūnt} «let them be», {faciant} «let them do», {vēnat} «let him come».

In Luke 2:14, {gloria in altissimis Deo, et in terra pax hominibus bonae voluntatis} the verb {sūnt} «let there be» is a jussive: the angel does not describe, he decrees.

## Purpose with {ut} and {ne}

{ut} + subjunctive expresses the **end**: so that, in order that. With negation, {ut} disappears and {ne} appears: {venit ne videat} «he comes in order not to see». {Nōn} is forbidden here.

| Form | Gloss |
|---|---|
| \`{ut videat}\` | «so that he may see» |
| \`{ne videat}\` | «so that he may not see» |
| \`{ne... nōn}\` | «so that in no way» |

In the Vulgate: {ut sint omnibus in salvum} (1 Timothy 2:1) «so that intercession be made for all».

## The complementary infinitive

After verbs of declaring ignorance, fear, doubt, supplication or surprise, what used to be a direct object becomes a clause with {ut} + subjunctive:

- {nesciō quid faciam} «I do not know what to do»
- {timeō ut vēniās} «I fear that you will come»
- {rogō ut vēniās} «I ask that you come»
- {miror sī vēnit} «I wonder that he has come»

This is the direct path from the external world into consciousness: the fact stops being a fact and becomes a question.

## Oblique: report and third person

Latin has a very economical use of the oblique: when the content is someone else's opinion, a question or an indirect command, the verb goes to the **infinitive with an accusative subject** or to the **subjunctive**.

| Context | Construction | Gloss |
|---|---|---|
| indirect statement | \`{dīcit sē esse}\` | «he says that he is» |
| indirect question | \`{dīcit ubi sit}\` | «he asks where he is» |
| indirect command | \`{iubet eōs īre}\` | «he orders them to go» |
| indirect wish | \`{optō eum vēnisse}\` | «I wish he had come» |
| indirect purpose | \`{spōrat eum vīctūrum esse}\` | «he hopes that he will win» |

Note: in indirect statements the **indicative is common** when the speaker endorses the content as true. {Dīcit eum esse stultum} «he says that he is a fool» can be a piece of information or a report of an opinion; context decides.

## Temporal {cum}

{cum} + **imperfect indicative** = time ({cum vēnit} «when he came»).

{cum} + **imperfect subjunctive** = time with added proximity ({cum vēnisset} «when he had come / since he had come»).

{cum} + **perfect indicative** = time with immediacy ({cum vēnit} «when he had just come»).

When the sense is causal, {cum} + subjunctive becomes «since»; when concessive, «although»:

- {cum vēnisset, laetātus sum} «since he had come, I am glad»
- {cum sīt stultus, errat tamen} «although he is a fool, he errs all the same»

John 11:50 deliberately plays on the ambiguity: {unum est necessarium, ut moriatur pro populo} «it is necessary that he die for the people» — the sense is final, and that is how the Vulgate reads it.

## {Quīn, quō, cum}: the resumed subjunctive

After a main verb or a main negative clause, Latin sums up the consequence with {quīn} «on the contrary», {quō} «therefore» or {cum} «since». In Cicero, {quō} links two clauses: {pecūniam rogāvit, quō sibi redimeret captīvum} «he asked for money, so that he might ransom the prisoner».

## Application in the Vulgate

In John 14:15, {sī dīligitis mē, mandāta mea servābitis} is an ideal conditional (§19). In John 15:4, {dūrō in mē et ego in vōbīs} the verb {dūrō} «to abide» with {in} + ablative is an echo of the Hebrew.

In Psalm 2:2 the poets say {dēscrīberunt in tabulās: Nos ipsis regnāre super Israel} — a future act written on parchment, which is why the church kept reading it as a prophecy of Christ.

## Summary

| Category | Signal | Mood | Example |
|---|---|---|---|
| hortative/jussive | — | pres. subj. 1st/3rd | \`{amēmus}\`, \`{sūnt}\` |
| final | \`{ut}\` / \`{ne}\` | subjunctive | \`{ut videat}\` |
| complementary | \`{ut}\` | subjunctive | \`{nesciō ut ...}\` |
| oblique | — | inf. + acc. or subj. | \`{dīcit eum vēnisse}\` |
| temporal | \`{cum}\`, \`{ubi}\` | imp. ind. or imp. subj. | \`{cum vēnisset}\` |
| resumptive | \`{quīn}\`, \`{quō}\` | subjunctive | \`{quō sibi ...}\` |`),
  vocab: [
    V('ut', 'ut', 'so that; that (final/complementary)'),
    V('ne', 'ne', 'that not (negated purpose)'),
    V('cum', 'cum', 'when; since; although'),
    V('ubi', 'ubi', 'where; as soon as'),
    V('dum', 'dum', 'while'),
    V('quin', 'quin', 'on the contrary, indeed'),
    V('amo', 'amo', 'to love'),
    V('gaudeo', 'gaudeo', 'to rejoice'),
    V('venio', 'venio', 'to come'),
    V('video', 'video', 'to see'),
    V('nescio', 'nescio', 'not to know'),
    V('rogo', 'rogo', 'to ask, to beg'),
    V('timeo', 'timeo', 'to fear'),
    V('mirus', 'mirus', 'wonderful, astonishing'),
    V('necessarius', 'necessarius', 'necessary'),
    V('populus', 'populus', 'people'),
    V('pax', 'pax', 'peace'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {venit ne videat}, why is there {ne} and not {nōn}?'),
    options: [
      T('Because it is a purpose clause, and negated purpose uses {ne}'),
      T('Because {nōn} never appears in Latin'),
      T('Because {ne} means «and» (= {-que})'),
      T('Because {nē} is the participle of {neō}'),
    ],
    answer: 0,
    hint: T('Rule §2: in negated purpose {ne} appears and {ut} disappears.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Negated purpose: venit ___ videat («he comes not to see»)'),
      answer: 'ne',
      hint: T('Rule §2: {ut} leaves the stage and {ne} takes its place.'),
    },
    {
      kind: 'choose',
      prompt: T('The subjunctive in {cum vēnisset, laetātus sum} mainly indicates...'),
      options: [
        T('strict simultaneity with the present'),
        T('priority in time or cause («since he had come»)'),
        T('purpose («so that he had come»)'),
        T('concession («although he had come»)'),
      ],
      answer: 1,
      hint: T('Rule §3: {cum} + imperfect subjunctive gives near time or cause.'),
    },
    {
      kind: 'match',
      prompt: T('Match each construction to its use of the subjunctive'),
      pairs: [
        { a: T('{venit ut videat}'), b: T('purpose') },
        { a: T('{nesciō quid faciam}'), b: T('complementary (doubt)') },
        { a: T('{dīcit eum vēnisse}'), b: T('oblique (infinitive + accusative)') },
        { a: T('{cum vēnisset}'), b: T('temporal and causal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {gloria in altissimis Deo}, what value does {sūnt} have?'),
      options: [
        T('Indicative: the fact is already accomplished'),
        T('Jussive, 3rd person: «let glory be given to God»'),
        T('Hortative, 1st person: «let us be glorified»'),
        T('Unreal conditional'),
      ],
      answer: 1,
      hint: T('Rule §1: the 3rd-person subjunctive in a main clause is jussive.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subjunctive in the first person plural is hortative («let us love») and in the third person jussive («let them be»).',
      ),
    },
    {
      n: '2',
      text: T(
        'Affirmative purpose uses {ut} + subjunctive; negated purpose uses {ne} + subjunctive, never {nōn}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Cum} + indicative marks time; {cum} + subjunctive marks near time, cause («since») or concession («although»).',
      ),
    },
    {
      n: '4',
      text: T(
        'After verbs of doubt, fear, request or wonder, the direct object becomes {ut} + subjunctive: {rogō ut vēniās} «I ask that you come».',
      ),
    },
    {
      n: '5',
      text: T(
        'The indirect clause may use the subjunctive, but the indicative is still possible when the speaker endorses the content as true.',
      ),
    },
  ],
  notes: [
    {
      label: T('Verbs of fixed sense'),
      text: T(
        'Some verbs demand a fixed mood and do not consult the sense: {cūrō, memini, oblīvīscor, quaerō, rogō, metuō, spērō, verētur} take the subjunctive, while {īnseque, admīror, memorō, nēscīō} take the indicative. That is why {rogō ut vēniās} is obligatorily subjunctive: there is no «if» and no «not» to explain the mood.',
      ),
    },
    {
      label: T('John 11:50 in the Vulgate'),
      text: T(
        'The high priest says {unum est necessarium, ut moriatur pro populo}. The clause {ut moriatur} can be final («so that he may die») or the complement of {necessarium est} («it is necessary that he die»). Both moods are subjunctive, which makes the text deliberately ambiguous — and that ambiguity is what the theological argument of the chapter rests on.',
      ),
    },
  ],
  examples: [
    { text: 'amēmus', gloss: T('let us love (hortative, 1st pl.)') },
    { text: 'sūnt', gloss: T('let there be (jussive, 3rd pl.)') },
    { text: 'venit ut videat', gloss: T('he comes to see (purpose)') },
    { text: 'venit ne videat', gloss: T('he comes not to see (negated purpose)') },
    { text: 'nesciō quid faciam', gloss: T('I do not know what to do (complementary)') },
    { text: 'rogō ut vēniās', gloss: T('I ask you to come (complementary)') },
    {
      text: 'dīcit eum vēnisse',
      gloss: T('he says that he has come (oblique with perfect infinitive)'),
    },
    { text: 'cum vēnisset', gloss: T('when he had come; since') },
    { text: 'ubi vēnit', gloss: T('as soon as he came') },
    { text: 'quō sibi redimeret captīvum', gloss: T('so that he might ransom the prisoner') },
  ],
  tables: [
    {
      caption: T('Table 1 — The main subjunctive: hortative and jussive'),
      head: [T('Person'), T('Form'), T('Value'), T('Gloss')],
      rows: [
        [T('1st sing.'), '{amēm}', T('possibility: «perhaps I love»'), T('wish: «may I love!»')],
        [T('1st pl.'), '{amēmus}', T('hortative'), T('«let us love»')],
        [T('3rd sing.'), '{amet}', T('jussive'), T('«let him love» (order)')],
        [T('3rd pl.'), '{ament}', T('jussive'), T('«let them love»')],
      ],
    },
    {
      caption: T('Table 2 — {Cum} in its four guises'),
      head: [T('Verb'), T('Mood and tense'), T('Gloss'), T('Example')],
      rows: [
        [
          T('{cum vēnit}'),
          T('imperfect indicative'),
          T('«while he was coming»'),
          '{cum ... solēbat}',
        ],
        [
          T('{cum vēnisset}'),
          T('imperfect subjunctive'),
          T('«when he had come»'),
          '{cum pedem, reddidit}',
        ],
        [
          T('{cum vēnit}'),
          T('perfect indicative'),
          T('«as soon as he came»'),
          '{cum audivit, discessit}',
        ],
        [
          T('{cum sīt stultus}'),
          T('present subjunctive'),
          T('«although he is»'),
          '{cum sīt ... tamen}',
        ],
      ],
    },
  ],
};
