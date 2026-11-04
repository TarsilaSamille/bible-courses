import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Oratio obliqua: the oblique sequence'),
  subtitle: T(
    '{dixit, quia ...}: the verb steps back one degree when it becomes the claim of someone else',
  ),
  section: T('Syntax'),
  body: C(`## Speaking of another is speaking of another time

When Latin reports what someone said, the verb of the report does not repeat the tense or the mood of the original sentence. It steps back one degree: present becomes imperfect subjunctive, and perfect becomes perfect subjunctive. The rule holds for every indirect clause, and it is not a stylistic preference; it is what lets Latin tell "he says he is there" from "he said he was there" without changing the construction.

| What is reported | In the oblique | English |
|---|---|---|
| {dīcit ...} (pres. ind.) | {dīcit ...} (impf. subj.) | he says he [is] there |
| {dīxit ...} (perf. ind.) | {dīxit ...} (perf. subj.) | he said he [was] there |
| {dīcet ...} (fut. ind.) | {dīcet ...} (fut. subj.) | he will say he [will be] there |
| {putābat ...} (imperf.) | {putābat ...} (impf. subj.) | he thought he [was] there |

The common case is the first. {Dīcit sē esse} "he says he is" has an infinitive, not a subjunctive, because the Latin indirect statement has two doors: the **infinitive with an accusative subject** and the **subjunctive**. The first is commoner and the one the Vulgate prefers; the second shows up when the reporting verb is one that demands a subjunctive, or when the speaker does not endorse the content.

## The five doors of the oblique

What decides the mood is not the sense of the clause, it is the connective. If the verb is followed by {quod}, {quia}, {quoniam}, {ut}, {ne}, {sī}, or by {cum} with a concessive sense, the subordinate clause is oblique and the verb goes to the subjunctive. If there is no connective and a noun or a pronoun stands as subject, the construction is AcI and the verb goes to the infinitive.

| Door | Connective | Mood | Example |
|---|---|---|---|
| AcI | none | infinitive | {dīcit sē esse} |
| explicit oblique | {quod}, {quia} | subjunctive | {dīcit quia sīt stultus} |
| final inside an oblique | {ut} | subjunctive | {dīcit ut vēniās} |
| negative inside an oblique | {ne} | subjunctive | {dīcit nē vēnisse} |
| reported conditional | {sī} | subjunctive | {dīcit sī vēnit} |
| reported concessive | {cum} | subjunctive | {dīxit cum stultus esset} |

## Where the rule fails, and that is where you read

The rule belongs to classical Latin, and the Vulgate is a translated literary text, not spontaneous speech. The result is that Paul, when reporting what he knows, keeps the indicative: in Romans 8:28 he writes {scīmus autem quia ... sunt sine lege}, and the verbs {sunt} and {est} are indicatives. Strict Latin would ask for {sint} and {sit}. A translator expecting an oblique gets the tense wrong; a translator who keeps the indicative reads Paul's claim in Paul's own voice, which is what the text wants.

There are two more cases in which the sequence does not happen. {Postquam}, {antequam}, {praesertim} and {quamquam} take the indicative: {postquam mortuus est} is perfect, not {postquam mortuus sit}. And the indirect question never sequences, because the tense of the question is already a future tense for the listener: {nesciō quid faciam} is subjunctive by the nature of the question, not by obliqueness.

## 1 John 5:14

> **Et hoc est fiducia, quod si quid petierimus secundum voluntatem eius, audiet nos: et si peccaverimus, propitiabitur nobis.**

The verb of the report is {petierimus}, perfect subjunctive of {petō}. The original tense was perfect: "we asked". The sequence moved the perfect indicative into the perfect subjunctive, and the effect in English is nil, because the relative past is made with a modal. But Latin is doing something English cannot: it marks that the asking is the content of a saying, not an act taking place now.

Notice {si quid petierimus}: the {sī} is not the conditional of {petierimus}, it is the oblique clause itself turned into a condition. And notice {audiet nos}: future indicative, with no stepping back at all, because the future has no past. In oblique Latin the future indicative becomes future subjunctive ({erit} → {sit}); the Vulgate leaves {audiet} as it is, and that is once more the same mechanism.

And the first verb of the passage, {et hoc est fiducia}, is a simple clause. {Quod si quid petierimus ...} is a compound clause, with {quod} as the marker of cause and {sī} as the marker of condition. One verse, two shapes of period.`),
  vocab: [
    V('dīcit', 'dico', 'he says (pres. ind. 3rd sg.)'),
    V('dixit', 'dico', 'he said (perf. ind. 3rd sg.)'),
    V('putat', 'puto', 'he thinks (pres. ind.)'),
    V('putābat', 'puto', 'he thought (impf. ind.)'),
    V('petierimus', 'peto', 'that we have asked (perf. subj. 1st pl.)'),
    V('petiit', 'peto', 'he asked (perf. ind. 3rd sg.)'),
    V('audiet', 'audio', 'he will hear (fut. ind. 3rd sg.)'),
    V('petō', 'petō', 'to ask (the verb of the oblique in 1 Jn 5:14)'),
    V('quod', 'quod', 'that (oblique connective, causal or completive)'),
    V('quia', 'quia', 'because (causal connective)'),
    V('sint', 'sum', 'let them be (subj. pres. 3rd pl., in the oblique)'),
    V('sīt', 'sīt', 'let it be (subj. pres. 3rd sg.)'),
    V('sit', 'sit', 'is (pres. ind. 3rd sg., kept in the Vulgate)'),
    V('nesciō', 'nescio', 'I do not know (1st sg., indirect question)'),
    V('voluntas', 'voluntas', 'will (nom. sg.)'),
    V('fiducia', 'fiducia', 'confidence (nom. sg.)'),
    V('sine lege', 'sine lege', 'without law (ablative, with {sine})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {dixit quia ...}, what does the oblique sequence do to the tense of the reported verb?',
    ),
    options: [
      T('It steps back one degree: perfect indicative becomes perfect subjunctive'),
      T('Nothing: Latin keeps the original tense'),
      T('It moves forward one degree: it becomes future subjunctive'),
      T('It changes the mood but not the tense'),
    ],
    answer: 0,
    hint: T('Rule §1: present → imperfect subjunctive, perfect → perfect subjunctive.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {nesciō quid faciam}, why is {faciam} subjunctive?'),
      options: [
        T('Because it is an indirect question, not because of an oblique from {dīcere}'),
        T('Because {nesciō} is a verb of fixed sense'),
        T('Because {quid} is an interrogative pronoun and pronouns demand the subjunctive'),
        T('Because the sequence of the present has already happened'),
      ],
      answer: 0,
      hint: T(
        'Rule §2: the indirect question does not sequence; the subjunctive comes from the sense of {nesciō}.',
      ),
    },
    {
      kind: 'fill',
      prompt: T(
        'In the oblique of a perfect, {dīxit quia vēnit}: the present {vēnit} becomes ___ (perf. subj. 3rd sg.)',
      ),
      answer: 'vēnerit',
      hint: T('Present → imperfect, perfect → perfect subjunctive.'),
    },
    {
      kind: 'fill',
      prompt: T('In Romans 8:28, {scīmus autem quia ... sunt}: the verb {sunt} is in the ___'),
      answer: 'indicativo',
      hint: T(
        'The Vulgate keeps the indicative in the oblique; classical Latin would ask for {sint}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the construction to the mood it requires'),
      pairs: [
        { a: T('{dīcit sē esse}'), b: T('infinitive (AcI): no connective') },
        {
          a: T('{dīcit quia sīt stultus}'),
          b: T('subjunctive: {quod} or {quia} force the oblique'),
        },
        { a: T('{nesciō quid faciam}'), b: T('subjunctive: indirect question, no sequence') },
        { a: T('{postquam mortuus est}'), b: T('indicative: {postquam} does not sequence') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rules §2 and §3: the connective decides the mood, and {postquam} is the exception.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In oratio obliqua the tense steps back one degree: present indicative → imperfect subjunctive, perfect → perfect subjunctive, future → future subjunctive.',
      ),
    },
    {
      n: '2',
      text: T(
        'The mood of the indirect statement depends on the connective: without one, AcI with an infinitive; with {quod}, {quia}, {ut}, {ne}, {sī} or concessive {cum}, the subjunctive.',
      ),
    },
    {
      n: '3',
      text: T(
        'The indirect question does not sequence: {nesciō quid faciam} is subjunctive because the question demands it, not because there was an oblique.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Postquam}, {antequam} and {quamquam} never sequence: they keep the indicative ({postquam mortuus est}).',
      ),
    },
    {
      n: '5',
      text: T(
        'The Vulgate keeps the indicative in many obliques ({scīmus quia ... sunt}, {dīxit ut dormiātis}): reading it that way is reading the claim in the voice of the speaker.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin does this'),
      text: T(
        'A verb in the present is tied to the moment of the speaker; once it enters the report of someone else it becomes valid for the other person\'s moment, which is a moment earlier than ours. Latin solves this with a mechanical exchange of tenses and not with a new tense: the same perfect that says "I heard" becomes "that I heard". A translation into English gains for free the information that the action is past with respect to the narrator, because English does it with a modal plus participle and Latin does it with the ending.',
      ),
    },
    {
      label: T('The rule and the text'),
      text: T(
        'The oblique sequence is the most described and the most violated rule in Latin syntax. The grammars present it as automatic; the texts show Paul ignoring it often, and the Church uses it when it wants to mark the distance between the voice of the speaker and the voice of the one quoted. A reader who applies the rule without looking gets all of Romans 8 wrong; a reader who looks at the verb reads the chapter right.',
      ),
    },
  ],
  examples: [
    { text: 'dīcit sē esse', gloss: T('he says he is (AcI, infinitive) — the commoner door') },
    {
      text: 'dīcit quia sīt stultus',
      gloss: T('he says he is a fool ({quia} forces the subjunctive)'),
    },
    { text: 'dixit vēnisse', gloss: T('he said he had come (oblique with AcI and perfect)') },
    {
      text: 'putābat sibi victūrum',
      gloss: T('he thought he would win (future infinitive with dative)'),
    },
    {
      text: 'putābat se victūrum esse',
      gloss: T('he thought he would win (infinitive with accusative)'),
    },
    {
      text: 'dīxit cum stultus esset',
      gloss: T('he said although he was a fool ({cum} concessive → subjunctive)'),
    },
    { text: 'postquam mortuus est', gloss: T('after he died ({postquam} keeps the indicative)') },
    {
      text: 'nesciō quid faciam',
      gloss: T('I do not know what to do (indirect question, no sequence)'),
    },
    {
      text: 'si quid petierimus',
      gloss: T('if we ask something ({petierimus} = perf. subj., stepped back from {petiit})'),
    },
    {
      text: 'scīmus autem quia ... sunt',
      gloss: T('but we know that ... are (Rom 8:28: the Vulgate keeps the indicative)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The oblique sequence, tense by tense'),
      head: [T('Direct tense'), T('Oblique tense'), T('Oblique mood'), T('Sentence')],
      rows: [
        [T('presente do indicativo'), T('imperfeito'), T('subjuntivo'), T('{dīcit quia esset}')],
        [T('perfeito do indicativo'), T('perfeito'), T('subjuntivo'), T('{dīxit quia vēnerit}')],
        [
          T('imperfeito do indicativo'),
          T('mais-que-perfeito'),
          T('subjuntivo'),
          T('{putābat quia vēnisset}'),
        ],
        [T('futuro do indicativo'), T('futuro'), T('subjuntivo'), T('{dīcet ut sīt}')],
        [T('imperativo'), T('presente'), T('subjuntivo'), T('{dīcit ut faciat}')],
        [T('infinitivo'), T('—'), T('AcI'), T('{dīcit sē amāre}')],
      ],
    },
    {
      caption: T('Table 2 — Connective and mood'),
      head: [T('Connective'), T('Degree of the clause'), T('Mood of the verb'), T('Example')],
      rows: [
        ['{quod}', 'causal ou completivo', 'subjuntivo', '{dīcit quia sīt}'],
        ['{quia}', 'causal', 'subjuntivo', '{scīmus quia vēnerit}'],
        ['{ut}', 'final ou completivo', 'subjuntivo', '{dīcit ut vēniās}'],
        ['{ne}', 'final negativa', 'subjuntivo', '{dīcit nē vēnisse}'],
        ['{sī}', 'condicional relatada', 'subjuntivo', '{dīcit sī vēnit}'],
        ['{cum}', 'concessiva relatada', 'subjuntivo', '{dīxit cum stultus esset}'],
        ['{postquam}', 'temporal', 'indicativo', '{postquam mortuus est}'],
        ['nenhum', 'sujeito oblíquo', 'infinitivo (AcI)', '{dīcit sē esse}'],
      ],
    },
  ],
};
