import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfect and (1st) Aorist'),
  subtitle: T('ἔλυον vs ἔλυσα: the past in two aspects'),
  section: T('The verb'),
  body: C(`## The augment: the mark of the past

The imperfect and aorist (like every past indicative) take the augment — a prefix pointing backward in time. Before a consonant the augment is syllabic: {ἐ-} is added at the front ({λύω} → {ἔλυον}, {ἔλυσα}). Before a vowel the augment is temporal: the initial vowel lengthens — {ἀ} becomes {ἠ} ({ἀκούω} → {ἤκουον}), {ἐ} becomes {ἠ} ({ἐλπίζω} → {ἤλπιζον}), {ο} becomes {ὠ}.

Only the indicative takes the augment. Subjunctive, optative, imperative, infinitive and participle never use it — so seeing {ἐ-} at a verb's start already tells you: past indicative.

## The imperfect: the past that lasted

The imperfect uses the present stem + augment + secondary endings ({-ον, -ες, -ε, -ομεν, -ετε, -ον}). Paradigm: {ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον}. Note that 1st sg. and 3rd pl. share the form ({ἔλυον}) — only context distinguishes them.

The sense is the present's transported to the past: ongoing action ({ἐδίδασκεν} "he was teaching"), habit ({ἐβάπτιζεν} "he customarily baptized"), attempt, scene-setting. Mark paints scenery in the imperfect and fires the action in the aorist — alternating the two correctly is reading Mark at the right tempo.

## The 1st aorist: the punctual past

The first (sigmatic) aorist uses the verb stem + {σα} + augment + the same secondary endings: {ἔλυσα, ἔλυσας, ἔλυσε(ν), ἐλύσαμεν, ἐλύσατε, ἔλυσαν}. The {σ} of {σα} is the tense's signature — seeing sigma between stem and ending, think aorist.

The sense is perfective: action seen as a completed whole, no interest in duration. {ἐβάπτισεν} "he baptized" (the act) versus {ἐβάπτιζεν} "he was baptizing" (the habit). In narrative the aorist carries the backbone of events: {ἦλθεν, εἶδεν, ἐνίκησεν} — he came, he saw, he conquered.

## Imperfect vs aorist in practice

The contrast appears in minimal pairs from the New Testament itself: {ἔλεγεν} "he was saying" (process) vs {εἶπεν} "he said" (act); {ἐζήτουν} "they were seeking" vs {εὗρον} "they found"; {ἔτυπτον} "they kept knocking" vs {ἤνοιξεν} "he opened". The imperfect prepares, the aorist executes.

Beware a false contrast: the aorist does NOT necessarily mean quick or instantaneous action — it means action seen as complete. {ἐβασίλευσεν} "he reigned" may cover forty years; the point is the author presents them as one finished block.`),
  vocab: [
    V('ἔλυον', 'λύω', 'I/they was/were loosing (impf.)'),
    V('ἔλυες', 'λύω', 'you were loosing (impf.)'),
    V('ἔλυε', 'λύω', 'he was loosing (impf.)'),
    V('ἔλυσα', 'λύω', 'I loosed (aor.)'),
    V('ἔλυσας', 'λύω', 'you loosed (aor.)'),
    V('ἔλυσε', 'λύω', 'he loosed (aor.)'),
    V('ἐλύσαμεν', 'λύω', 'we loosed (aor.)'),
    V('ἔλυσαν', 'λύω', 'they loosed (aor.)'),
    V('ἐδίδασκεν', 'διδάσκω', 'he was teaching (impf.)'),
    V('ἔλεγεν', 'λέγω', 'he was saying (impf.)'),
    V('εἶπεν', 'λέγω', 'he said (aor.)'),
    V('ἐβάπτιζεν', 'βαπτίζω', 'he was baptizing (impf.)'),
    V('ἐβάπτισεν', 'βαπτίζω', 'he baptized (aor.)'),
    V('ἤκουσεν', 'ἀκούω', 'he heard (aor.)'),
    V('ἐπίστευσαν', 'πιστεύω', 'they believed (aor.)'),
    V('ἦλθεν', 'ἔρχομαι', 'he came (aor.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἔλυσαν" is imperfect or aorist, and why?'),
    options: [
      T('Imperfect (present stem)'),
      T('Aorist (sigma between stem and ending)'),
      T('Historical present'),
      T('Perfect without reduplication'),
    ],
    answer: 1,
    hint: T('Look for the σ: ἔ-λυ-σ-αν.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd singular imperfect: ἔλυ___ ("he was loosing").'),
      answer: 'ε',
      hint: T('Secondary endings: -ον, -ες, -ε…'),
    },
    {
      kind: 'choose',
      prompt: T(
        'In Mark 1:4-9, "ἐβάπτιζεν" (v.4) vs "ἐβάπτισεν" (v.9): the aspectual contrast is…',
      ),
      options: [
        T('Lasting habit vs punctual act'),
        T('Future vs past'),
        T('Active vs passive'),
        T('Command vs description'),
      ],
      answer: 0,
      hint: T('John kept baptizing (habit); Jesus got baptized (event).'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its tense.'),
      pairs: [
        { a: 'ἐλύομεν', b: 'imperfeito' },
        { a: 'ἐλύσαμεν', b: 'aoristo' },
        { a: 'ἤκουσαν', b: 'aoristo (aumento temporal)' },
        { a: 'λέγουσιν', b: 'presente (sem aumento!)' },
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
        'Only the indicative takes the augment. A verb with initial {ἐ-} or lengthened vowel = past indicative.',
      ),
    },
    {
      n: '2',
      text: T(
        'Imperfect = present stem + augment + secondary endings. Sense: past action ongoing or habitual.',
      ),
    },
    {
      n: '3',
      text: T(
        '1st aorist = stem + σα + augment + secondary endings. The σ between stem and ending is the signature.',
      ),
    },
    {
      n: '4',
      text: T(
        'Active secondary endings: -ον, -ες, -ε, -ομεν, -ετε, -ον. They serve imperfect, aorist and pluperfect.',
      ),
    },
    {
      n: '5',
      text: T(
        'Aorist = complete action (not necessarily quick). Imperfect = action in process. The pair {ἔλεγεν}/{εἶπεν} sums it up.',
      ),
    },
  ],
  notes: [
    {
      label: T('Advanced nuance:'),
      text: T(
        'The aorist has uses beyond the punctual past: ingressive ({ἐπίστευσαν} "came to believe"), gnomic (general truths), even dramatic. This chapter fixes the narrative use; the rest emerge in reading.',
      ),
    },
    {
      label: T('Trap:'),
      text: T(
        '{ἔλυον} may be 1st sg. ("I was loosing") or 3rd pl. ("they were loosing"). Facing ambiguity, the explicit subject or context decides — never guess from isolation.',
      ),
    },
  ],
  examples: [
    {
      text: '{ἐδίδασκεν ἐν τῇ συναγωγῇ}',
      gloss: T('he was teaching in the synagogue (Mark 1:21; scenery)'),
    },
    { text: '{ἐξῆλθεν τὸ πνεῦμα}', gloss: T('the spirit came out (aorist: event; Mark 1:26)') },
    { text: '{ἔλεγεν αὐτοῖς}', gloss: T('he kept saying to them (process)') },
    { text: '{εἶπεν αὐτοῖς}', gloss: T('he said to them (completed act)') },
    {
      text: '{ἐβάπτιζεν ἐν τῇ ἐρήμῳ}',
      gloss: T('he was baptizing in the wilderness (habit; Mark 1:4)'),
    },
    { text: '{ἐβάπτισεν αὐτόν}', gloss: T('he baptized him (act; Mark 1:9)') },
    { text: '{ἤκουσαν τὴν φωνήν}', gloss: T('they heard the voice (temporal augment; Acts 9:7)') },
    { text: '{ἐζήτουν αὐτὸν}', gloss: T('they were seeking him (ongoing attempt)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('they found the child (result; Matt 2:11)') },
    {
      text: '{ἐπίστευσαν εἰς αὐτόν}',
      gloss: T('they believed in him (ingressive aorist: "came to believe"; John 2:11)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Active imperfect of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{ἔλυον}', 'eu libertava'],
        ['2ª sg.', '{ἔλυες}', 'tu libertavas'],
        ['3ª sg.', '{ἔλυε(ν)}', 'ele libertava'],
        ['1ª pl.', '{ἐλύομεν}', 'nós libertávamos'],
        ['2ª pl.', '{ἐλύετε}', 'vós libertáveis'],
        ['3ª pl.', '{ἔλυον}', 'eles libertavam'],
      ],
    },
    {
      caption: T('Table 2 — 1st active aorist of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{ἔλυσα}', 'eu libertei'],
        ['2ª sg.', '{ἔλυσας}', 'tu libertaste'],
        ['3ª sg.', '{ἔλυσε(ν)}', 'ele libertou'],
        ['1ª pl.', '{ἐλύσαμεν}', 'nós libertamos'],
        ['2ª pl.', '{ἐλύσατε}', 'vós libertastes'],
        ['3ª pl.', '{ἔλυσαν}', 'eles libertaram'],
      ],
    },
    {
      caption: T('Table 3 — Temporal augment (vowel-initial verb)'),
      head: [T('Present'), T('Augment'), T('Past example')],
      rows: [
        ['ἀκούω', 'ἀ → ἠ', '{ἤκουον} / {ἤκουσα}'],
        ['ἐλπίζω', 'ἐ → ἠ', '{ἤλπιζον} / {ἤλπισα}'],
        ['ὁράω', 'ὁ → ὡ', '{ἑώρων} / {εἶδον}'],
      ],
    },
  ],
};
