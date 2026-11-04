import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Future active and middle'),
  subtitle: T("λύσω, λύσομαι: tomorrow's σ and the middle voice"),
  section: T('The verb'),
  body: C(`## The sigmatic future

The active future joins {σ} to the stem + present endings: {λύσω, λύσεις, λύσει, λύσομεν, λύσετε, λύσουσι(ν)}. It is the Greek verb's most transparent tense: seeing σ between stem and ending, with a short vowel, think future (the aorist has augment; the future never does).

Contracts lengthen before σ (ch. 6): {ἀγαπήσω}, {ποιήσω}, {δηλώσω}. Consonant verbs fuse σ + consonant and lengthen the vowel: the future is contracted, with circumflex — {μένω} → {μενῶ}, {ἀγγέλλω} → {ἀγγελῶ}, {κρίνω} → {κρινῶ}. Facing a circumflexed future, rebuild: {μενῶ} = {μενε-σ-ω}.

## The middle voice: acting for oneself

The middle voice marks action directed at the subject: direct ({λούομαι} "I wash myself"), indirect ({πορίζομαι} "I acquire for myself") or causative. Present/future middle endings: {-μαι, -σαι, -ται, -μεθα, -σθε, -νται}. Middle future of {λύω}: {λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται}.

Many New Testament futures are middle with active sense (deponent futures): {ἔρχομαι} → {ἐλεύσομαι} "I shall come", {γίνομαι} → {γενήσομαι}, {λαμβάνω} → {λήμψομαι}, {ἀκούω} → {ἀκούσομαι}. Never translate reflexively where the lexicon demands active: {ἐλεύσομαι} is "I shall come", never "I shall come myself".

## Uses of the future

The future predicts ({σώσει τὸν λαόν} "he shall save the people", Matt 1:21), promises ({δώσω} "I shall give"), threatens, and commands solemnly (future as imperative: {ἀγαπήσεις} "you shall love", Matt 22:37 — the commandments). There is also the gnomic future (general truths) and the deliberative ("what shall I do?").

{ἔσομαι}, future of {εἰμί} (ch. 11), deserves its own attention: {ἔσται} + dative means "there shall be" ({ἔσται σοι χαρά} "there shall be joy to you", Luke 1:14); {ἔσονται οἱ ἔσχατοι πρῶτοι} "the last shall be first" (Matt 19:30) inverts the world's order in solemn future.`),
  vocab: [
    V('λύσω', 'λύω', 'I shall loose'),
    V('λύσει', 'λύω', 'he shall loose'),
    V('λύσομαι', 'λύω', 'I shall loose (mid.)'),
    V('λύσεται', 'λύω', 'he shall loose (mid.)'),
    V('σώσει', 'σῴζω', 'he shall save'),
    V('δώσω', 'δίδωμι', 'I shall give'),
    V('ἐλεύσομαι', 'ἔρχομαι', 'I shall come'),
    V('λήμψομαι', 'λαμβάνω', 'I shall take'),
    V('γενήσεται', 'γίνομαι', 'it shall happen'),
    V('μενῶ', 'μένω', 'I shall remain'),
    V('ἀγγελῶ', 'ἀγγέλλω', 'I shall announce'),
    V('κρινῶ', 'κρίνω', 'I shall judge'),
    V('ἔσται', 'εἰμί', 'he shall be, there shall be'),
    V('ἔσονται', 'εἰμί', 'they shall be'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λύσουσι" is future (not aorist) because…'),
    options: [
      T('It has σ and no augment'),
      T('It ends in -ουσι'),
      T('It follows ἵνα'),
      T('It is a contracted form'),
    ],
    answer: 0,
    hint: T('σ with no augment = future — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd singular middle future: λύσε___ ("he shall loose").'),
      answer: 'ται',
      hint: T('Middle endings: -μαι, -σαι, -ται…'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐλεύσομαι" translates "I shall come" (not "I shall come myself") because…'),
      options: [
        T('It is deponent future: middle form, active sense'),
        T('The subject is plural'),
        T('The augment is missing'),
        T('It is aorist, not future'),
      ],
      answer: 0,
      hint: T('Middle futures of deponent verbs = active sense — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its tense/voice.'),
      pairs: [
        { a: 'λύσει', b: 'futuro ativo' },
        { a: 'λύσεται', b: 'futuro médio' },
        { a: 'ἔλυσε', b: 'aoristo' },
        { a: 'μενῶ', b: 'futuro contraído' },
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
        'Future = stem + σ + present endings. No augment, ever. σ with a short vowel betrays the tense.',
      ),
    },
    {
      n: '2',
      text: T(
        'Liquids fuse the σ away: contracted future with circumflex ({μενῶ}, {ἀγγελῶ}). Contracts lengthen but keep σ ({ἀγαπήσω}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Middle voice = action for the subject. Endings: -μαι, -σαι, -ται, -μεθα, -σθε, -νται.',
      ),
    },
    {
      n: '4',
      text: T(
        'Middle futures with active sense ({ἐλεύσομαι}, {λήμψομαι}) translate as active. The lexicon rules.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἔσται} + dative = "there shall be" ({ἔσται σοι}). The future also commands solemnly ({ἀγαπήσεις}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Fine distinction:'),
      text: T(
        '{λύσει} (future, "he shall loose") vs {λῦσαι} (aorist infinitive, "to have loosed") vs {λύσῃ} (subjunctive/middle future). Diphthong and context decide — read the whole sentence before parsing.',
      ),
    },
    {
      label: T('Full middle voice:'),
      text: T(
        'This chapter opens the middle voice through the future; middle present and imperfect use the same endings ({λύομαι, ἐλυόμην}). The full middle-passive system closes in chs. 19–20.',
      ),
    },
  ],
  examples: [
    { text: '{σώσει τὸν λαὸν}', gloss: T('he shall save the people (Matt 1:21; future of σῴζω)') },
    { text: '{πιστεύσουσιν}', gloss: T('they shall believe (3rd pl.; Mark 16:17)') },
    { text: '{ἀγαπήσεις}', gloss: T('you shall love (future-imperative; Matt 22:37)') },
    { text: '{ἔσονται πρῶτοι ἔσχατοι}', gloss: T('the first shall be last (Matt 19:30)') },
    { text: '{ἐλεύσομαι πρὸς ὑμᾶς}', gloss: T('I shall come to you (deponent future)') },
    { text: '{λήμψεται μισθόν}', gloss: T('he shall receive a reward (Matt 10:41)') },
    { text: '{μενῶ μεθ᾽ ὑμῶν}', gloss: T('I shall remain with you (contracted future)') },
    { text: '{κρινῶ ζῶντας}', gloss: T('I shall judge the living (future of κρίνω)') },
    { text: '{γενήσεται}', gloss: T('it shall happen (middle future of γίνομαι)') },
    { text: '{δώσω σοι}', gloss: T('I shall give you (future; Matt 16:19)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Active future of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λύσω}', 'libertarei'],
        ['2ª sg.', '{λύσεις}', 'libertarás'],
        ['3ª sg.', '{λύσει}', 'libertará'],
        ['1ª pl.', '{λύσομεν}', 'libertaremos'],
        ['2ª pl.', '{λύσετε}', 'libertareis'],
        ['3ª pl.', '{λύσουσι(ν)}', 'libertarão'],
      ],
    },
    {
      caption: T('Table 2 — Middle future of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λύσομαι}', 'libertar-me-ei'],
        ['2ª sg.', '{λύσῃ}', 'libertar-te-ás'],
        ['3ª sg.', '{λύσεται}', 'libertar-se-á'],
        ['1ª pl.', '{λυσόμεθα}', 'libertar-nos-emos'],
        ['2ª pl.', '{λύσεσθε}', 'libertar-vos-eis'],
        ['3ª pl.', '{λύσονται}', 'libertar-se-ão'],
      ],
    },
    {
      caption: T('Table 3 — Contracted futures (liquids)'),
      head: [T('Present'), T('Future'), T('Meaning')],
      rows: [
        ['{μένω}', '{μενῶ}', 'permanecerei'],
        ['{ἀγγέλλω}', '{ἀγγελῶ}', 'anunciarei'],
        ['{κρίνω}', '{κρινῶ}', 'julgarei'],
        ['{σπείρω}', '{σπερῶ}', 'semearei'],
      ],
    },
  ],
};
