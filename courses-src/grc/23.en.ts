import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Aorist and perfect participles'),
  subtitle: T('λύσας, λυθείς, λελυκώς: the accompanying past'),
  section: T('The verb'),
  body: C(`## The prior aorist

If the present participle is simultaneous (ch. 21), the aorist participle is prior: its action happened before the main one. {λαβὼν ἄρτον εὐλόγησεν} "having taken bread, he blessed" (Matt 26:26) — first he took, then he blessed. {ἀκούσας ἐθαύμασεν} "having heard, he marveled" (Matt 8:10). {ἰδὼν ἐπίστευσεν} "having seen, he believed" (John 20:8).

This priority organizes whole narratives in chains: aorist participles stack the background and the main verb fires the event — {ἐλθὼν προσκύνησεν} "having come, he worshiped" (Matt 8:2), {ἀναστὰς περιεπάτει} "rising, he walked" (Mark 2:12). Reading such chains is reading Mark at real speed.

## Aorist forms

Active (aorist stem + -ντ-): {λύσας} (masc.), {λύσασα} (fem.), {λῦσαν} (neut.); genitive {λύσαντος}. The 2nd aorist follows the same mold with its own stem: {λιπών, λιποῦσα, λιπόν}, genitive {λιπόντος}; {ἰδών, ἰδοῦσα, ἰδόν}; {λαβών, λαβοῦσα, λαβόν}.

Middle: {λυσάμενος, -η, -ον} (tame 2-1-2). Passive: {λυθείς, λυθεῖσα, λυθέν}, genitive {λυθέντος} — 3rd declension like the active. {ἀποκριθείς} "having answered" opens speeches ({ἀποκριθεὶς εἶπεν} "answering, he said", dozens of times).

## The perfect as state

The perfect participle paints resulting states: {λελυκώς, λελυκυῖα, λελυκός}, genitive {λελυκότος} — "having loosed (and it stands)". {ἑστώς} "standing" (Acts 7:55, Stephen sees Jesus {ἑστῶτα}), {γεγραμμένον} "written" (substantivized neuter), {πεπληρωμένη} "full" (middle: {πεπληρωμένη χάριτος} "full of grace", Luke 1:28).

The middle-passive perfect declines 2-1-2: {λελυμένος, -η, -ον}. And the future? The future participle ({λύσων} "in order to loose") is vanishingly rare in the New Testament — recognize the shape ({-σων}) and move on.

## Chains and formulas

Three narrative formulas are gold: {ἀποκριθεὶς εἶπεν} "answering, he said"; {ἰδὼν ἐπίστευσεν} "having seen, he believed"; {λαβὼν εὐχαριστήσας ἔκλασεν} "having taken, having thanked, he broke" (Mark 14:22, triple chain). Aorist stacks, present accompanies, main verb resolves — that is Greek narrative rhythm.`),
  vocab: [
    V('λύσας', 'λύω', 'having loosed'),
    V('λύσαντος', 'λύω', 'of having loosed'),
    V('λιπών', 'λείπω', 'having left'),
    V('ἰδών', 'ὁράω', 'having seen'),
    V('λαβών', 'λαμβάνω', 'having taken'),
    V('ἀκούσας', 'ἀκούω', 'having heard'),
    V('ἐλθών', 'ἔρχομαι', 'having come'),
    V('ἀποκριθείς', 'ἀποκρίνομαι', 'having answered'),
    V('λυθείς', 'λύω', 'having been loosed'),
    V('λυθέντος', 'λύω', 'of having been loosed'),
    V('λελυκώς', 'λύω', 'having loosed (perf.)'),
    V('ἑστώς', 'ἵστημι', 'standing'),
    V('ἀναστάς', 'ἀνίστημι', 'having risen'),
    V('πεπληρωμένη', 'πληρόω', 'full'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λαβὼν ἄρτον εὐλόγησεν" (Matt 26:26): the event order is…'),
    options: [
      T('He took first, blessed after (priority)'),
      T('He blessed while taking (simultaneous)'),
      T('He will take after blessing (later)'),
      T('The actions are identical'),
    ],
    answer: 0,
    hint: T('Aorist participle = prior — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the genitive: λύσαν___ ("of having loosed").'),
      answer: 'τος',
      hint: T('-ντ- stem: λύσαν-τος.'),
    },
    {
      kind: 'choose',
      prompt: T('"λυθείς" is a … participle'),
      options: [
        T('Aorist passive ("having been loosed")'),
        T('Present active'),
        T('Active perfect'),
        T('Middle future'),
      ],
      answer: 0,
      hint: T('-θεντ- stem: passive — rule §2.'),
    },
    {
      kind: 'match',
      prompt: T('Match each participle to its tense.'),
      pairs: [
        { a: 'λύων', b: 'presente' },
        { a: 'λύσας', b: 'aoristo' },
        { a: 'λελυκώς', b: 'perfeito' },
        { a: 'λυθείς', b: 'aoristo passivo' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Aorist participle = action prior to the main one. Aorist chains + main verb = narrative skeleton.',
      ),
    },
    {
      n: '2',
      text: T(
        'Active in -ντ- (λύσας/λύσαντος, λιπών/λιπόντος); middle tame 2-1-2 (λυσάμενος); passive in -ντ- on -θεντ- stem (λυθείς/λυθέντος).',
      ),
    },
    {
      n: '3',
      text: T(
        'Perfect participle = resulting state ({ἑστώς} "standing", {γεγραμμένον} "written").',
      ),
    },
    {
      n: '4',
      text: T(
        'Narrative formulas ({ἀποκριθεὶς εἶπεν}) read as blocks, without parsing each piece.',
      ),
    },
  ],
  notes: [
    {
      label: T('Aorist vs present:'),
      text: T(
        '{ἀκούσας} (prior: he heard, then acted) vs {ἀκούων} (simultaneous: hearing, at the same time). Swapping one for the other changes the chronology — the author chose on purpose.',
      ),
    },
    {
      label: T('Participle genitives:'),
      text: T(
        "{λύσαντος}, {λυθέντος}, {λελυκότος}, {λιπόντος}: the genitive reveals the -ντ- stem and prepares ch. 23's genitive absolute. Memorize one of each.",
      ),
    },
  ],
  examples: [
    { text: '{λαβὼν ἄρτον εὐλόγησεν}', gloss: T('having taken bread, he blessed (Matt 26:26)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('having heard, he marveled (Matt 8:10)') },
    { text: '{ἰδὼν ἐπίστευσεν}', gloss: T('having seen, he believed (John 20:8)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('answering, he said (formula)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('having come, he worshiped (Matt 8:2)') },
    { text: '{ἀναστὰς περιεπάτει}', gloss: T('rising, he walked (Mark 2:12)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('standing at the right (Acts 7:55)') },
    { text: '{πεπληρωμένη χάριτος}', gloss: T('full of grace (Luke 1:28)') },
    {
      text: '{λαβὼν εὐχαριστήσας ἔκλασεν}',
      gloss: T('taking, thanking, he broke (triple chain; Mark 14:22)'),
    },
    { text: '{λυθεὶς ἀπῆλθεν}', gloss: T('having been loosed, he departed (prior passive)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Active aorist participle (λύσας and λιπών)'),
      head: [
        T('Case'),
        { 0: 'λ', 1: 'ύ', 2: 'σ', 3: 'α', 4: 'ς', 5: ' ', 6: '(', 7: '1', 8: 'º', 9: ')' },
        { 0: 'λ', 1: 'ι', 2: 'π', 3: 'ώ', 4: 'ν', 5: ' ', 6: '(', 7: '2', 8: 'º', 9: ')' },
      ],
      rows: [
        ['Nom. masc.', '{λύσας}', '{λιπών}'],
        ['Nom. fem.', '{λύσασα}', 'λιποῦσα'],
        ['Nom. neut.', '{λῦσαν}', 'λιπόν'],
        ['Gen. masc.', '{λύσαντος}', 'λιπόντος'],
        ['Gen. fem.', 'λυσάσης', 'λιπούσης'],
      ],
    },
    {
      caption: T('Table 2 — Aorist passive and perfect participles'),
      head: [
        T('Case'),
        {
          0: 'P',
          1: 'a',
          2: 's',
          3: 's',
          4: 'i',
          5: 'v',
          6: 'o',
          7: ' ',
          8: '(',
          9: 'λ',
          10: 'υ',
          11: 'θ',
          12: 'ε',
          13: 'ί',
          14: 'ς',
          15: ')',
        },
        {
          0: 'P',
          1: 'e',
          2: 'r',
          3: 'f',
          4: 'e',
          5: 'i',
          6: 't',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'λ',
          11: 'ε',
          12: 'λ',
          13: 'υ',
          14: 'κ',
          15: 'ώ',
          16: 'ς',
          17: ')',
        },
      ],
      rows: [
        ['Nom. masc.', '{λυθείς}', '{λελυκώς}'],
        ['Nom. fem.', '{λυθεῖσα}', '{λελυκυῖα}'],
        ['Nom. neut.', '{λυθέν}', '{λελυκός}'],
        ['Gen. masc.', '{λυθέντος}', '{λελυκότος}'],
      ],
    },
  ],
};
