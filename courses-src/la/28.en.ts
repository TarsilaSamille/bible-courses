import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('The verb system, part 2: the subjunctive'),
  subtitle: T('{amēm}, {capiam}, {amārer}: one root across four conjugations'),
  section: T('Verb'),
  body: C(`## The theme and the vowel of the subjunctive

The present subjunctive is built from the **theme** of the verb, which is the first person singular of the present indicative, plus the vowel of the subjunctive. Nothing else. The first conjugation swaps the thematic {o} for {ē}, the second puts {e}, and the third and fourth put {a}. Hence the nicest economy in Latin: a single theme per conjugation produces all six persons.

| | 1st conj. {amō} | 2nd conj. {moneō} | 3rd conj. {regō} | 4th conj. {audiō} |
|---|---|---|---|---|
| 1st sg. | {amēm} | {moneam} | {regam} | {audiam} |
| 2nd sg. | {amēs} | {moneās} | {regās} | {audiās} |
| 3rd sg. | {amet} | {moneat} | {regat} | {audiat} |
| 1st pl. | {amēmus} | {moneāmus} | {regāmus} | {audiāmus} |
| 2nd pl. | {amētis} | {moneātis} | {regātis} | {audiātis} |
| 3rd pl. | {ament} | {moneant} | {regant} | {audiant} |

The {a} of the third and fourth conjugation produces {capiam}, {regam}, {audiam}: the three end in {iam} or {am}, and the old grammarians gave that group the name **camo**, taken from {capiam}, the only one of the three in which the vowel shows clearly. The second conjugation enters with {e} and gives {moneam}, {videat}, {sentiāmus}: the same {e}, with the theme {senti-} plus the {ā} of the long present, because the present of the second conjugation ends in {eō}. A student who learns the formation as a memorised list slips here; a student who learns the theme is never wrong.

The verb {sum} follows none of the four: {sim}, {sīs}, {sit}, {sīmus}, {sītis}, {sint}. That is why {sim} means both "I am" and "may it be": the present subjunctive of {sum} serves as the present of {esse} and as the jussive of any verb.

In Matthew 6:10 the Vulgate writes {fiat voluntas tua, sicut in caelo et in terra}, and the three {fiat} are third-person jussives. Three jussives in one verse: the subjunctive, when it stands alone, is an order.

## The imperfect comes from plerumque

The imperfect subjunctive is the only tense in Latin whose origin is a whole word. It comes from the theme {plērīs}, of {plēnus} ("full"), plus the infinitive ending {re}. The result is a verb that does not exist outside the subjunctive forms, and that is why nobody memorises it wrong: {plērīs} shows up only in {amārer}, {monērer}, {regerem}, {audīrem}, {essem}.

| | 1st conj. | 2nd conj. | 3rd conj. | 4th conj. |
|---|---|---|---|---|
| 1st sg. | {amārer} | {monērer} | {regerem} | {audīrem} |
| 2nd sg. | {amārēris} | {monērēris} | {regerēs} | {audīrēs} |
| 3rd sg. | {amārētur} | {monērētur} | {regeret} | {audīret} |
| 3rd pl. | {amarentur} | {monērentur} | {regerent} | {audīrent} |
| {sum} | {essem} | {essēs} | {esset} | {essēmus} |

The same rule covers the passive voice, and it is the same table with one more letter at the end: {amārēr}, {amārēris}, {amārētur}, {amārēmur}, {amārēminī}, {amarentur}. For the present passive, just swap the vowel of the theme: {amēr}, {amēris}, {amētur}, {amēmur}, {amēminī}, {amentur}.

| Tense | Formation | {amō} | {regō} | {dīcō} |
|---|---|---|---|---|
| present | theme + {a/e/ē} | {amēm} | {regam} | {dīcam} |
| imperfect | {plērīs} + {re} | {amārer} | {regerem} | {dīcerem} |
| perfect | perfect theme + {erim} | {amāverim} | {rēgerim} | {dīxerim} |
| pluperfect | perfect theme + {issem} | {amāvissem} | {rēgissem} | {dīxissem} |
| future | {amātūrus sīm} | {amātūrus sīm} | {rēctūrus sīm} | {dīctūrus sīm} |
| future perfect | {amātūrus fuerim} | {amātūrus fuerim} | {rēctūrus fuerim} | {dīctūrus fuerim} |

## The tenses that stop consulting the theme

From the perfect onwards the subjunctive is **suppletive**: it comes neither from the theme nor from {plērīs}, but from a second form of the verb that only the subjunctive uses. {amāverim} is {amāvisse} plus {im}, and {amāvissem} is {amāvisse} plus {em}. The result is the largest family in the language: {dīcere} has six perfect subjunctive forms, six pluperfect and six future.

The only practical consequence: in the irregular verbs the perfect stem changes, and the perfect subjunctive is born from it. {dīxī} gives {dīxerim} and {dīxissem}; {vēnī} gives {vēnerim} and {vēnissent}; {fīō} gives {fīerim} and {fīssem}. Anyone who knows only the perfect indicative finds the subjunctive in three seconds: change the ending for {erim} and then for {issem}, and the rest of the verb stays.

The future is the only entirely periphrastic family: {amātūrus sīm}, plus {amāre}, is the future subjunctive. Anyone who writes {amābō} in the future subjunctive is translating from English.

## Concessive, optative, and what the Vulgate left out

One mode the Latin economised on: the **concessive**. It uses exactly the endings of the present subjunctive, with {s} in place of the vowel: {sim}, {sīs}, {sit}, {sīmus}, {sītis}, {sint}. It appears with {etiam} ({etiam si ... sit}, "even if"), with {quamquam}, with {tametsi} and, most important for biblical reading, with {si} followed by {tamen}. In that pair the concessive becomes {sit} ({si ... tamen sit}), and that is how the Vulgate holds a strong claim without leaving the subjunctive.

The **optative** is the opposite of the rest. It hardly has rules: {amēm}, {sīm}, {caperem}, {audīrem} in the present, {amātūrus sīm} in the future, and it lives only in Plautus, Terence and a handful of others. The Vulgate does not use the optative once in the whole New Testament; where English reads a fixed wish, Latin wrote imperfect indicative or subjunctive.

The list for the Vulgate has then five moods: indicative, subjunctive, imperative, infinitive and the two participles. The imperative is the only one that formed on its own, with its own endings and neither theme nor {plērīs}: {amā}, {amāte}, {monē}, {monēte}, {rege}, {regite}, {audi}, {audīte}. The rest of the grammar is what the Vulgate uses to say that it is not the case.`),
  vocab: [
    V('amēm', 'amēm', 'that I may love (subj. pres. 1st conj.)'),
    V('capiam', 'capiam', 'that I may take (subj. pres., theme {capi-})'),
    V('regam', 'regam', 'that I may rule (subj. pres. 3rd conj.)'),
    V('audiam', 'audiam', 'that I may hear (subj. pres. 4th conj.)'),
    V('sīm', 'sim', 'may it be, I am (subj. pres. and jussive of {sum})'),
    V('amārer', 'amarer', 'that I may be loved (subj. impf. 1st sg.)'),
    V('regerem', 'regerem', 'that I may rule (subj. impf. 3rd conj.)'),
    V('audīrem', 'audirem', 'that I may hear (subj. impf. 4th conj.)'),
    V('essem', 'essem', 'that I may be (subj. impf. of {sum})'),
    V('amēr', 'amer', 'that I may be loved (subj. pres. passive)'),
    V('amāvērim', 'amaverim', 'that I may have loved (subj. perf. 1st sg.)'),
    V('amāvissem', 'amavissem', 'that I may have loved (subj. pluperf.)'),
    V('dixissem', 'dixissem', 'that I may have said (subj. pluperf. of {dīcō})'),
    V('fīat', 'fiat', 'let it be done (jussive, Mt 6:10)'),
    V('amātūrus sīm', 'amātūrus sīm', 'that I may be about to love (future subjunctive)'),
    V('moneō', 'moneō', 'I admonish (present indicative, the source of the theme)'),
    V('audiō', 'audiō', 'I hear (4th conj.; the theme {audi-} plus {a} gives {audiam})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the present subjunctive of the third conjugation formed from {regō}?'),
    options: [
      T('From the theme {reg-} plus the vowel {a}: {regam}, {regās}, {regat}'),
      T('From the theme {reg-} plus the vowel {ē}: {regēm}, {regēs}, {reget}'),
      T('From {plērīs} plus {re}: {plērīsregam}'),
      T('From the infinitive {regere} with {e} changed for {a}'),
    ],
    answer: 0,
    hint: T('Rule §1: theme plus the vowel of the subjunctive; the third conjugation uses {a}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the origin of the imperfect subjunctive {amārer}?'),
      options: [
        T('From the theme {plērīs}, of {plēnus}, plus the ending {re}'),
        T('From the theme {am-} plus {ē}'),
        T('From the perfect {amāv-} plus {issem}'),
        T('From the infinitive {amāre} with {e} changed for {er}'),
      ],
      answer: 0,
      hint: T('Rule §2: {plērīs} + {re} is the formula of the imperfect subjunctive.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the perfect subjunctive: {dīxī} → ___'),
      answer: 'dīxerim',
      hint: T('Perfect stem plus {erim}.'),
    },
    {
      kind: 'fill',
      prompt: T('The future subjunctive of {amō} is periphrastic: {amātūrus ___}'),
      answer: 'sīm',
      hint: T('The future subjunctive uses the {sim} of the jussive of {sum}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to the tense of the subjunctive'),
      pairs: [
        { a: T('{amēm}'), b: T('present (theme {am-} + {ē})') },
        { a: T('{amārer}'), b: T('imperfect ({plērīs} + {re})') },
        { a: T('{amāvissem}'), b: T('pluperfect') },
        { a: T('{sīt}'), b: T('present of {sum}, jussive and concessive') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rules §1 and §2: the present comes from the theme, the imperfect from {plērīs}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The present subjunctive comes from the theme plus the vowel: {ē} in the first conjugation, {e} in the second, {a} in the third and fourth. The theme is the first person singular of the present indicative.',
      ),
    },
    {
      n: '2',
      text: T(
        'The imperfect subjunctive comes from {plērīs} plus {re}: {amārer}, {monērer}, {regerem}, {audīrem}, {essem}. It is suppletive and does not exist outside the subjunctive.',
      ),
    },
    {
      n: '3',
      text: T(
        'Perfect, pluperfect and future subjunctive do not consult the theme: {amāv-} + {erim} and {amāv-} + {issem}, and future {amātūrus sīm}. In the irregular verbs only the stem changes: {dīxerim}, {vēnerim}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The concessive has the endings of the present subjunctive with {s} in place of the vowel: {sim}, {sīs}, {sit}. It appears with {etiam}, {quamquam} and with {si ... tamen}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The Vulgate does not use the optative. Where English reads a fixed wish, Latin wrote subjunctive or indicative: the mood stayed out of the New Testament.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the grammarians called it {camo}'),
      text: T(
        'The classification by thematic vowel is modern; the name {camo} comes from Antiquity and classifies the third conjugation by its clearest example, {capiō, capiam}. A student who learns Latin from manuals of Greek grammar meets the word {camo} and finds it mysterious; {camo} is not a verb, it is a group name, like "the {a}-subjunctive". The fourth conjugation joined the group later.',
      ),
    },
    {
      label: T('The mood the Vulgate does not use, and why that matters'),
      text: T(
        'A reader who learns Latin from the Vulgate never meets the optative and rarely meets the future imperative. If an exercise asks "what is the future subjunctive of {amō}?", the short answer is {amātūrus sīm}, and the long answer is that this form belongs to a system the Vulgate uses in nine lines out of eighteen thousand. Knowing what is missing is part of knowing the language.',
      ),
    },
  ],
  examples: [
    { text: 'amēm', gloss: T('that I may love (subj. pres. 1st conj., theme + {ē})') },
    { text: 'capiam', gloss: T('that I may take (subj. pres., the example of the {camo} group)') },
    { text: 'audiam', gloss: T('that I may hear (subj. pres. 4th conj., theme + {a})') },
    {
      text: 'sīt',
      gloss: T('let it be (subj. pres. of {sum}); in the concessive, "even if it be"'),
    },
    { text: 'amārer', gloss: T('that I might be loved (subj. impf., {plērīs} + {re})') },
    { text: 'audīrem', gloss: T('that I might hear (subj. impf.)') },
    { text: 'amēr', gloss: T('that I may be loved (present passive: only the vowel changes)') },
    { text: 'amāvērim', gloss: T('that I may have loved (subj. perf.: {amāv-} + {erim})') },
    { text: 'dixissem', gloss: T('that I might have said (subj. pluperf.: {dīx-} + {issem})') },
    { text: 'fiat voluntas tua', gloss: T('your will be done (Mt 6:10: third-person jussive)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present subjunctive in the four conjugations'),
      head: [
        T('Person'),
        T('1.ª conj. {amō}'),
        T('2.ª conj. {moneō}'),
        T('3.ª conj. {regō}'),
        T('4.ª conj. {audiō}'),
      ],
      rows: [
        [T('1.ª sg.'), '{amēm}', '{moneam}', '{regam}', '{audiam}'],
        [T('2.ª sg.'), '{amēs}', '{moneās}', '{regās}', '{audiās}'],
        [T('3.ª sg.'), '{amet}', '{moneat}', '{regat}', '{audiat}'],
        [T('1.ª pl.'), '{amēmus}', '{moneāmus}', '{regāmus}', '{audiāmus}'],
        [T('2.ª pl.'), '{amētis}', '{moneātis}', '{regātis}', '{audiātis}'],
        [T('3.ª pl.'), '{ament}', '{moneant}', '{regant}', '{audiant}'],
      ],
    },
    {
      caption: T('Table 2 — Imperfect subjunctive, from {plērīs} + {re}'),
      head: [T('Person'), T('active'), T('passive ({amō})'), T('{sum}')],
      rows: [
        [T('1.ª sg.'), '{amārer}', '{amārēr}', '{essem}'],
        [T('2.ª sg.'), '{amārēris}', '{amārēris}', '{essēs}'],
        [T('3.ª sg.'), '{amārētur}', '{amārētur}', '{esset}'],
        [T('1.ª pl.'), '{amārēmur}', '{amārēmur}', '{essēmus}'],
        [T('2.ª pl.'), '{amārēminī}', '{amārēminī}', '{essētis}'],
        [T('3.ª pl.'), '{amarentur}', '{amarentur}', '{essent}'],
      ],
    },
    {
      caption: T('Table 3 — All the subjunctives'),
      head: [T('Tense'), T('Formation'), T('{amō}'), T('{dīcō}')],
      rows: [
        [T('presente'), T('tema + vogal'), '{amēm}', '{dīcam}'],
        [T('imperfeito'), T('{plērīs} + {re}'), '{amārer}', '{dīcerem}'],
        [T('perfeito'), T('radical do perf. + {erim}'), '{amāvērim}', '{dīxerim}'],
        [T('plusquamperfeito'), T('radical do perf. + {issem}'), '{amāvissem}', '{dīxissem}'],
        [T('futuro'), T('part. futuro + {sīm}'), '{amātūrus sīm}', '{dīctūrus sīm}'],
        [
          T('futuro do perfeito'),
          T('part. futuro + {fuerim}'),
          '{amātūrus fuerim}',
          '{dīctūrus fuerim}',
        ],
        [T('concessivo'), T('presente com {s} no lugar da vogal'), '{amēs}', '{dīcās}'],
        [T('optativo'), T('arcaísmo: ausente na Vulgata'), '{amēm}', '{dīcam}'],
      ],
    },
  ],
};
