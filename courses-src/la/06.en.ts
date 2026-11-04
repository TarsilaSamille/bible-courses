import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('First conjugation verbs and the periphrastics'),
  subtitle: T('{amo, amas, amat} — and {amaturus sum} for the future'),
  section: T('Declensions and the verb sum'),
  body: C(`## The skeleton of the first conjugation

The commonest Latin verbs end in {āre}: {amāre} «to love», {cantāre} «to sing», {habitāre} «to dwell», {vocāre} «to call», {putāre} «to think». Strip off {āre} and the **verb theme** remains: {amā-}, {cantā-}, {habitā-}, {vocā-}. You slot the personal endings onto that theme:

| Person | Ending | {amāre} |
|---|---|---|
| 1st sg. | -o | amō |
| 2nd sg. | -as | amās |
| 3rd sg. | -at | amat |
| 1st pl. | -mus | amāmus |
| 2nd pl. | -tis | amātis |
| 3rd pl. | -nt | amant |

The only genuinely irregular form is the 1st singular, {amō}, which is {amā-} plus {o} and, in writing, drops its macron: am-o. Hence the term «first conjugation» — the rule holds nearly every time.

The thematic vowel {a} alternates with {ē} when the theme ends in {ā}: {amā-} → {amē-, amāre, amātem, amāmus}. Compare {cantā-}: the thematic vowel is {a}, the theme's own {a} is {ā}, and so nothing changes.

## The periphrastics

The Vulgate avoids the Latin simple future — {amābit} «he will love» — and builds the future with a participial adjective plus the verb {sum}. The result is the **future periphrastic**:

{Amā-tū-r-us sum} → {amātūrus sum} «I am about to love»;
{Puerī cantātūrī erant} «the boys were about to sing» (Luke 9:6).

The same process with the **gerundive** gives the passive, and it produces the famous «ought» of the Greek New Testament:

{Mundus amā-tus est} «the world must be loved»;
{Verbum caro factum est} «the dear Word has been made».

Notice the economy: a single construction, {amandus est}, serves for «is loved», «ought to be loved» and «is being loved». A translation that gives only «is loved» loses half of the Greek text.

## The imperative, the one tense the New Testament keeps

The Latin imperative does not use {-re}, and it is the only verbal form that survives whole in prayer: {Amā} «love!», {Amāte} «love!». In the Lord's Prayer it is exactly that form that has lasted eighteen hundred years:

{Pater noster, qui es in caelīs, sanctificētur nomen tuum} «Our Father, who art in heaven, hallowed be thy name».

The present subjunctive, by contrast, dies out of Latin and survives only in fossilised forms like {sīt} «let it be».`),
  vocab: [
    V('amo', 'amo', 'I love'),
    V('amas', 'amo', 'you love'),
    V('amat', 'amo', 'he/she loves'),
    V('amamus', 'amo', 'we love'),
    V('amatis', 'amo', 'you love (pl.)'),
    V('amant', 'amo', 'they love'),
    V('amare', 'amo', 'to love (infinitive)'),
    V('ama', 'amo', 'love! (imperative)'),
    V('amaturus', 'amaturus', 'about to love (fut. part.)'),
    V('amandus', 'amandus', 'to be loved (gerundive)'),
    V('amicus', 'amicus', 'friend'),
    V('inimicus', 'inimicus', 'enemy'),
    V('oculus', 'oculus', 'eye'),
    V('lingua', 'lingua', 'tongue'),
    V('clamor', 'clamor', 'cry, shout'),
    V('pax', 'pax', 'peace'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {amātūrus sum}, what is the function of the {amātūrus}?'),
    options: [
      T('It is the future participle, and with {sum} it forms the future periphrastic'),
      T('It is an adjective, and with {sum} it forms the present'),
      T('It is the gerundive, and with {sum} it forms the imperfect'),
      T('It is an adverb, and with {sum} it forms the optative'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why does {amō} lose its macron while {amās} keeps it?'),
      options: [
        T('By writing convention: the form {amō} is three syllables'),
        T('Because final {o} closes the syllable and makes it short'),
        T('Because the thematic vowel {a} disappears before {o}'),
        T('Because {amō} is the oldest form of the verb'),
      ],
      answer: 2,
      hint: T('Rule §1: what drops is the thematic vowel, not the macron.'),
    },
    {
      kind: 'fill',
      prompt: T('Third person plural of {amare} in the present: ama_'),
      answer: 'amant',
      hint: T('-nt is the third plural ending throughout the first conjugation.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function'),
      pairs: [
        { a: T('ama'), b: T('present imperative, 2nd singular') },
        { a: T('amare'), b: T('present infinitive') },
        { a: T('amandus'), b: T('gerundive: «ought to be loved»') },
        { a: T('amātūrus'), b: T('future participle: «is about to love»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Strip {āre} and you have the theme; the personal endings go on the theme: {-o, -as, -at, -mus, -tis, -nt}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The thematic vowel alternates {a}/{ē} when the theme ends in {ā}: {amā-} but {cantā-}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The first singular loses the thematic vowel: {amā-} + {o} = {amō}, written without a macron.',
      ),
    },
    {
      n: '4',
      text: T(
        'The Vulgate avoids the Latin simple future: use the periphrastic {future participle} + {sum}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The gerundive with {est} counts three times: «is loved», «ought to be loved», «is being loved».',
      ),
    },
  ],
  notes: [
    {
      label: T('Irregular perfect:'),
      text: T(
        'Several first-conjugation verbs have a perfect in {vī} or {uī}: {amāvī}, {monuī}, {petīvī}, {audīvī}. Without macrons {amāvī} and {amāui} look alike; with them there is no doubt. The long {i} is what distinguishes the root {audī-} «to hear» from {au-} «to grow».',
      ),
    },
    {
      label: T('Word order:'),
      text: T(
        'Neutral Latin puts the verb second: {Pueri rosam amant} «the boys love the rose». Good Latin prose puts the verb last — {Pueri amant rosam} — and sounds more literary. Neither is wrong; context decides.',
      ),
    },
  ],
  examples: [
    { text: 'amo', gloss: T('I love') },
    { text: 'amas', gloss: T('you love') },
    { text: 'amat', gloss: T('he/she loves') },
    { text: 'amant', gloss: T('they love') },
    { text: 'amare', gloss: T('to love — also the supine') },
    { text: 'ama', gloss: T('love! (imperative)') },
    { text: 'amavistis', gloss: T('you loved (perfect)') },
    { text: 'amabam', gloss: T('I was loving (imperfect)') },
    { text: 'amandus', gloss: T('to be loved — «ought to be loved»') },
    { text: 'amaturus sum', gloss: T('I am about to love (future periphrastic)') },
  ],
  tables: [
    {
      caption: T('Table 1 — First conjugation, active: {amāre, -ō}'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Future')],
      rows: [
        [T('1st sg.'), 'amō', 'amābam', 'amābō'],
        [T('2nd sg.'), 'amās', 'amābās', 'amābis'],
        [T('3rd sg.'), 'amat', 'amābat', 'amabit'],
        [T('1st pl.'), 'amāmus', 'amābāmus', 'amābimus'],
        [T('2nd pl.'), 'amātis', 'amābātis', 'amābitis'],
        [T('3rd pl.'), 'amant', 'amābant', 'amabunt'],
      ],
    },
    {
      caption: T('Table 2 — Non-finite forms of {amāre}'),
      head: [T('Form'), T('Name'), T('Example')],
      rows: [
        ['amō, amās, amat', T('present indicative'), 'Amat Deus nos'],
        ['amābam', T('imperfect'), 'Anebant'],
        ['amāvī', T('perfect'), 'Amāvit eum'],
        ['amāre', T('infinitive'), '{amāre} Deum'],
        ['amāns', T('present participle'), 'amāns Dominum'],
        ['amātūrus', T('future participle'), '{amātūrus} sum'],
        ['amandus', T('gerundive'), '{amandus} est'],
        ['amāre', T('supine (same as infinitive)'), 'iussit {amāre}'],
      ],
    },
  ],
};
