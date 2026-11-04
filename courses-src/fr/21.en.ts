import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('The subjunctive'),
  subtitle: T('{que je parle, que tu parles} — necessity, wish, purpose and contrast'),
  section: T('The verbs'),
  body: C(`## The present is the present minus {-s}

For most verbs, the present of the subjunctive is the cheapest form in the language: you take the **indicative** and delete the {s} of the third plural. Nothing else. {Ils parlent} gives {que je parle}, {que nous parlions}, {qu’ils parlent}.

| Infinitive | je | tu | il / elle | nous | vous | ils / elles |
|---|---|---|---|---|---|---|
| parler | parle | parles | parle | parlions | parliez | parlent |
| finir | finisse | finisses | finisse | finissons | finissent | finissent |
| prendre | prenne | prennes | prenne | prenions | preniez | prennent |
| vendre | vende | vendes | vende | vendions | vendiez | vendent |

Only the ending changes: {-e, -es, -e, -ions, -iez, -ent}. Notice that the third singular equals the first, and that {je} gains nothing in {je parle}, {je vends} or {je prenne}. The most famous form of the regular subjunctive is {parle}, identical to the imperative.

## Irregulars: another fossil

The same verbs that give the irregular conditional show up here, for a shared reason: Latin built the subjunctive with the present of {essere} and {habere} ({sim, sīs, sit, sīmus, sītis, sint}). From there came exactly the forms you have already seen:

| Infinitive | je | tu | il | nous | vous | ils |
|---|---|---|---|---|---|---|
| être | sois | sois | soit | soyons | soyez | soient |
| avoir | aie | aies | ait | ayons | ayez | aient |
| aller | aille | ailles | aille | allions | alliez | aillent |
| faire | fasse | fasses | fasse | fassions | fussiez | fassent |
| pouvoir | puisse | puisses | puisse | puissions | puissiez | puissent |
| savoir | sache | saches | sache | sachions | sachiez | sachent |
| vouloir | veuille | veuilles | veuille | veuillions | veuilliez | veuillent |
| venir | vienne | viennes | vienne | venions | veniez | viennent |

Learn the first three in full ({être}, {avoir}, {pouvoir}) and you can guess the rest from context.

## What triggers the subjunctive

The subjunctive does not appear for taste: it appears after a small number of **triggers**, and the most productive one is {que} tied to a main verb. The map is worth more than any loose rule:

| Trigger | Example | Gloss |
|---|---|---|
| necessity | {Il faut que je prie} | I must pray |
| wish | {Je veux qu’il vienne} | I want him to come |
| purpose | {Parlez pour qu’ils comprennent} | speak so that they understand |
| feeling | {Je sens qu’il a raison} | I feel he is right |
| fear | {J’ai peur qu’il vienne} | I fear he may come |
| concession | {Bien qu’il soit fatigué} | although he may be tired |
| absurdity | {Il est important qu’il soit prêt} | it is important that he be ready |

Two groups deserve special attention. The first is the pair {avant que} / {après que} and {pendant que}: with {avant que} the verb is subjunctive ({avant qu’il vienne}); in the others it is indicative ({après qu’il est venu}, {pendant qu’il parle}). The second is {il ne faut pas que} plus subjunctive, which is precisely the negative of {il faut que}.

## The tenses of the subjunctive

The perfect of the subjunctive is the present auxiliary plus the participle: {qu’il ait prié} «that he should have prayed», {qu’il soit venu} «that he should have come». It serves both as a recent past and as a future from the subject’s point of view — {Je crois qu’il est déjà arrivé} can mean «I believe he has already arrived» or «I believe he will arrive».

The full pluperfect {qu’il eût prié} shows up in older literary writing and is rare outside it.

And one trick will save you in older texts: when the main verb is in the past, what was present of the subjunctive turns **imparfait** and the perfect turns **pluperfect**. A Segond sentence like {Je ne savais pas qu’il eût dit cela} stacks two layers of past on top of each other.

## Negation in two positions

There is a distinction that grammarians argue about and that Bible reading shows clearly: {avant que} can take restrictive negation {ne … point}, rarer and stronger, written as a single block — {avant qu’il ne vienne} — or no {ne} at all, and that has been the standard form since the eighteenth century.

The same holds for {sans que}, {à moins que}, {en sorte que} with a consequence reading. Portuguese renders all of it with the subjunctive; French makes the choice visible on the surface.`),
  vocab: [
    V('que je parle', 'parler', 'that I speak (regular subjunctive)'),
    V('il faut que', 'falloir', 'it is necessary that (necessity trigger)'),
    V('pour que', 'pour', 'so that (purpose)'),
    V('bien que', 'bien', 'although (concession)'),
    V('avant que', 'avant', 'before that (takes the subjunctive)'),
    V('après que', 'après', 'after that (indicative)'),
    V('soit', 'être', 'be (3rd sing., irregular)'),
    V('soyons', 'être', 'let us be (1st pl., irregular)'),
    V('aient', 'avoir', 'have (3rd pl., irregular)'),
    V('puisse', 'pouvoir', 'be able to (irregular)'),
    V('fasse', 'faire', 'do, make (irregular)'),
    V('vienne', 'venir', 'come (irregular)'),
    V('qu’il ait prié', 'prier', 'that he should have prayed (perfect subjunctive)'),
    V('qu’il soit venu', 'venir', 'that he should have come'),
    V('il est important que', 'important', 'it is important that (assessment)'),
    V('j’ai peur qu’il vienne', 'avoir', 'I fear he may come'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «Attendez qu’il vienne» the form {vienne} is subjunctive. Why?'),
    options: [
      T('Because {avant que} is on the list of triggers that require the subjunctive'),
      T('Because the future of {venir} has {vien-} in its stem'),
      T('Because the sentence is negative and negation requires the subjunctive'),
      T('Because the indicative can never follow {que}'),
    ],
    answer: 0,
    hint: T('Rule §3: {avant que} is a trigger; {après que} and {pendant que} are not.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Subjunctive of {être} in «{Il faut qu’il ___ là}» (il / elle), s___t'),
      answer: 'soit',
      hint: T('It is the irregular third singular, with no circumflex.'),
    },
    {
      kind: 'match',
      prompt: T('Match the trigger to the example that confirms it'),
      pairs: [
        { a: T('necessity'), b: T('{Il faut que je prie}') },
        { a: T('wish'), b: T('{Je veux qu’il vienne}') },
        { a: T('purpose'), b: T('{pour qu’ils comprennent}') },
        { a: T('concession'), b: T('{Bien qu’il soit fatigué}') },
        { a: T('fear'), b: T('{J’ai peur qu’il vienne}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'Which sentence uses the indicative where French would otherwise use the subjunctive?',
      ),
      options: [
        T('{Après qu’il est venu}, nous avons parlé'),
        T('{Après qu’il soit venu}, nous avons parlé'),
        T('{Bien qu’il est fatigué}, il continue'),
        T('{Il faut qu’il est prêt}'),
      ],
      answer: 0,
      hint: T('After {après que} and {pendant que} the verb stays in the indicative.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The present of the regular subjunctive is the present indicative minus the {s} of the third plural: {ils parlent} → {qu’ils parlent}, {que je parle}, {que nous parlions}. Only the endings change: {-e, -es, -e, -ions, -iez, -ent}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The irregulars are few and come from the Latin present of {essere} and {habere}: {soit, soyons, soient}, {aie, ayons, aient}, {aille}, {fasse}, {puisse}, {sache}, {veuille}, {vienne}. They are the same verbs as the irregular conditional.',
      ),
    },
    {
      n: '3',
      text: T(
        'The subjunctive is required after {il faut que}, {vouloir que}, {pour que}, {bien que}, {avant que}, {de peur que}, and in {il est important que}, {il vaut mieux que}. After {après que}, {pendant que}, {si}, {quand}, {dès que} the indicative is required.',
      ),
    },
    {
      n: '4',
      text: T(
        'The perfect of the subjunctive is the present-subjunctive auxiliary plus the participle: {qu’il ait prié}, {qu’elle soit venue}. It covers the recent past and the future from the subject’s point of view.',
      ),
    },
    {
      n: '5',
      text: T(
        'If the main verb is in the past, the present of the subjunctive turns **imparfait** and the perfect turns **pluperfect**: {qu’il eût dit}. That is why {Je ne savais pas qu’il eût dit cela} stacks two layers of past.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Latin under the subjunctive'),
      text: T(
        'Latin built the present of the subjunctive with the present of {essere} and {habere}: {sim, sīs, sit, sīmus, sītis, sint} and {habeam, habeās, habeat, habeāmus, habeātis, habeant}. From those twelve conjugations came {sois, sois, soit, soyons, soyez, soient} and {aie, aies, ait, ayons, ayez, aient} — literally the same syllables you learned in the conditional chapter ({serais}, {aurais}). The tidy regularization ({parle}, {finisse}, {prenne}) came only later, and it is a medieval invention. In other words, what looks «irregular» is the leftover of the old system, and what looks «regular» is the newcomer that took over.',
      ),
    },
    {
      label: T('A trigger that became an ending'),
      text: T(
        'In many cases you cannot even say whether the trigger or the verb is what governs. In {Il est important qu’il soit prêt}, both {il est important que} and {soit} are fixed: swap either one and the sentence breaks. That is the mark of a fossilized structure. Compare with Portuguese, which flexes the verb and drops the trigger: «É importante que ele esteja pronto» is the same {soit}, seen from another angle. That is why, reading an older French text, always look for the pair — trigger plus verb — and not for the verb alone.',
      ),
    },
  ],
  examples: [
    { text: 'Il faut que je prie.', gloss: T('I must pray (necessity)') },
    { text: 'Je veux qu’il vienne.', gloss: T('I want him to come (wish)') },
    {
      text: 'Parlez pour qu’ils comprennent.',
      gloss: T('speak so that they understand (purpose)'),
    },
    { text: 'Bien qu’il soit fatigué.', gloss: T('although he may be tired (concession)') },
    {
      text: 'Attendez qu’il vienne.',
      gloss: T('wait until he comes ({avant que} plus subjunctive)'),
    },
    { text: 'Après qu’il est venu.', gloss: T('after he came ({après que} plus indicative)') },
    { text: 'Il ne faut pas qu’il vienne.', gloss: T('he must not come (negative trigger)') },
    {
      text: 'Je crois qu’il est déjà arrivé.',
      gloss: T('I believe he has already arrived (or will arrive)'),
    },
    {
      text: 'Je ne savais pas qu’il eût dit cela.',
      gloss: T('I did not know he had said that (pluperfect)'),
    },
    {
      text: 'C’est une occasion qu’il ne faut pas manquer.',
      gloss: T('it is an opportunity not to be missed ({faut} plus subjunctive plus relative)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — present of the regular subjunctive'),
      head: [T('Infinitive'), T('je'), T('il / elle'), T('nous'), T('ils / elles')],
      rows: [
        ['parler', 'parle', 'parle', 'parlions', 'parlent'],
        ['finir', 'finisse', 'finisse', 'finissions', 'finissent'],
        ['vendre', 'vende', 'vende', 'vendions', 'vendent'],
        ['prendre', 'prenne', 'prenne', 'prenions', 'prennent'],
        ['attendre', 'attende', 'attende', 'attendions', 'attendent'],
        ['partir', 'parte', 'part', 'partions', 'partent'],
      ],
    },
    {
      caption: T('Table 2 — the triggers of the subjunctive'),
      head: [T('Category'), T('Marker'), T('Example'), T('Gloss')],
      rows: [
        [T('necessity'), 'il faut', T('{Il faut que je prie}'), T('I must pray')],
        [T('wish'), 'vouloir que, demander', T('{Je veux qu’il vienne}'), T('I want him to come')],
        [
          T('purpose'),
          'pour que',
          T('{Parlez pour qu’ils comprennent}'),
          T('speak so that they understand'),
        ],
        [T('time'), 'avant que', T('{Attendez qu’il vienne}'), T('wait for him to come')],
        [T('time'), T('après que, pendant que'), T('{Après qu’il est venu}'), T('{indicative}')],
        [
          T('concession'),
          'bien que, quoique',
          T('{Bien qu’il soit fatigué}'),
          T('although he may be tired'),
        ],
      ],
    },
  ],
};
