import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Liquids and aorist passive'),
  subtitle: T('ἤγγειλα, ἔμεινα — and the -θη- turning everything passive'),
  section: T('The verb'),
  body: C(`## Liquids: sigmaless future and aorist

Liquid-stem verbs ({λ, μ, ν, ρ}) refuse the future/aorist {σ}: instead they lengthen the stem vowel. {ἀγγέλλω} → future {ἀγγελῶ}, aorist {ἤγγειλα}; {μένω} → {μενῶ}, {ἔμεινα}; {σπείρω} → {σπερῶ}, {ἔσπειρα}; {κρίνω} → {κρινῶ}, {ἔκρινα}; {ἀποστέλλω} → {ἀποστελῶ}, {ἀπέστειλα}.

Lengthening follows recipe: {ε} becomes {ει} ({στέλλω} → {ἔστειλα}), {α} becomes {η} ({φαίνω} → {ἔφηνα}). The future, with no σ to sustain it, contracts as in ch. 17 ({μενῶ}). In reading, circumflexed future + long-voweled σ-less aorist = liquid verb.

## The -θη- aorist passive

The aorist passive voice uses the {-θη-} suffix + active secondary endings: {ἐλύθην, ἐλύθης, ἐλύθη, ἐλύθημεν, ἐλύθητε, ἐλύθησαν} "I was loosed…". No sigma, no kappa — {θ} is the signature.

The aorist passive carries the central theological events: {ἐγεννήθη} "he was born" (all of Matt 1's genealogy), {ἐγράφη} "it was written" (John 20:31), {ἠγέρθη} "he was raised" (Matt 28:6), {ἐσώθη} "he was saved", {ἐβαπτίσθη} "he was baptized" (Mark 1:9).

The passive's agent comes with {ὑπό} + genitive: {ἐβαπτίσθη ὑπὸ Ἰωάννου} "he was baptized by John". With no expressed agent, Greek prefers the passive where English uses "-self" or intransitive: {ἠγέρθη} = "he rose / was raised".

## The 2nd aorist passive (in -η-)

Some verbs make the aorist passive without {θ}, with {-η-} alone: {γράφω} → {ἐγράφην} "I was written", {στέλλω} → {ἐστάλην} "I was sent", {χαίρω} → {ἐχάρην} "I rejoiced", {σπείρω} → {ἐσπάρην} "I was sown". Endings match the -θη- set.

In practice, memorize forms as they come: {ἐγράφη} (John 20:31), {ἀπεστάλην} "I was sent" (John 5:36), {ἐφάνη} "he appeared" (from {φαίνω}, Mark 16:12). Few forms cover nearly all occurrences.`),
  vocab: [
    V('ἐλύθην', 'λύω', 'I was loosed'),
    V('ἐλύθη', 'λύω', 'he was loosed'),
    V('ἐλύθησαν', 'λύω', 'they were loosed'),
    V('ἤγγειλα', 'ἀγγέλλω', 'I announced'),
    V('ἔμεινα', 'μένω', 'I remained'),
    V('ἔσπειρα', 'σπείρω', 'I sowed'),
    V('ἔκρινα', 'κρίνω', 'I judged'),
    V('ἐγεννήθη', 'γεννάω', 'he was born'),
    V('ἐγράφη', 'γράφω', 'it was written'),
    V('ἠγέρθη', 'ἐγείρω', 'he rose'),
    V('ἐσώθη', 'σῴζω', 'he was saved'),
    V('ἐβαπτίσθη', 'βαπτίζω', 'he was baptized'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'he answered'),
    V('ἐφάνη', 'φαίνω', 'he appeared'),
    V('ὑπό', 'ὑπό', 'by (agent)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἐλύθησαν" is…'),
    options: [
      T('Aorist passive, 3rd pl.'),
      T('Active aorist, 3rd pl.'),
      T('Middle imperfect'),
      T('Active perfect'),
    ],
    answer: 0,
    hint: T('θ + active endings = passive — rule §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd singular: ἐλύ___ ("he was loosed").'),
      answer: 'θη',
      hint: T('Aorist passive suffix: -θη-.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἤγγειλα" lacks σ because…'),
      options: [
        T('It is a liquid verb: it lengthens instead of sigmatizing'),
        T('It is 2nd aorist'),
        T('It is historical present'),
        T('It lost σ by error'),
      ],
      answer: 0,
      hint: T('λ-stem: liquids lengthen — rule §1.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its voice/tense.'),
      pairs: [
        { a: 'ἔλυσα', b: 'aoristo ativo' },
        { a: 'ἐλύθην', b: 'aoristo passivo' },
        { a: 'ἐγράφη', b: 'passivo 2º' },
        { a: 'ἤγγειλα', b: 'aoristo líquido' },
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
        'Liquids (λ, μ, ν, ρ): no σ; they lengthen the vowel (ε→ει, α→η); contracted circumflexed future.',
      ),
    },
    {
      n: '2',
      text: T('Aorist passive = stem + θη + active secondary endings. θ betrays the voice.'),
    },
    {
      n: '3',
      text: T(
        'Passive agent: ὑπό + genitive ({ὑπὸ Ἰωάννου}). Agentless, translate by context (often reflexive in English).',
      ),
    },
    {
      n: '4',
      text: T(
        '2nd aorist passive: bare -η-, no θ ({ἐγράφην}, {ἐστάλην}). Few forms, memorize as a block.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἠγέρθη} covers "he rose" and "he was raised": the ambiguity is theological, not grammatical — keep both.',
      ),
    },
  ],
  notes: [
    {
      label: T('Deponency:'),
      text: T(
        'Deponent verbs use passive forms with active sense: {ἀπεκρίθη} "he answered", {ἐφοβήθη} "he feared", {ἠρνήσατο} "he denied". The aorist passive is deponency\'s gateway — ch. 20 deepens it.',
      ),
    },
    {
      label: T('θ vs σ:'),
      text: T(
        "{ἐλύθην} (passive, with θ) vs {ἔλυσα} (active, with σ): the two consonants divide the aorist's voices. Facing θ + active endings, read passive without hesitation.",
      ),
    },
  ],
  examples: [
    { text: '{ἠγέρθη ἀπὸ τῶν νεκρῶν}', gloss: T('he rose from the dead (Matt 28:6)') },
    { text: '{ἐγεννήθη ἐν Βηθλεέμ}', gloss: T('he was born in Bethlehem (Matt 2:1)') },
    { text: '{ἐγράφη εἰς μαρτυρίαν}', gloss: T('it was written for testimony (John 20:31)') },
    { text: '{ἐβαπτίσθη ὑπὸ Ἰωάννου}', gloss: T('he was baptized by John (Mark 1:9; ὑπό agent)') },
    { text: '{ἐσώθη ἀπὸ τῶν ἐχθρῶν}', gloss: T('he was saved from enemies') },
    { text: '{ἤγγειλαν αὐτοῖς}', gloss: T('they announced to them (liquid aorist)') },
    { text: '{ἔμεινεν μετ᾽ αὐτῶν}', gloss: T('he remained with them (John 1:39)') },
    { text: '{ἀπεστάλην}', gloss: T('I was sent (2nd passive; John 5:36)') },
    { text: '{ἐφάνη αὐτοῖς}', gloss: T('he appeared to them (Mark 16:12)') },
    { text: '{ἐσπάρη εἰς τὰς ἀκάνθας}', gloss: T('it was sown among thorns (Matt 13:7)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Aorist passive of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{ἐλύθην}', 'fui libertado'],
        ['2ª sg.', '{ἐλύθης}', 'foste libertado'],
        ['3ª sg.', '{ἐλύθη}', 'foi libertado'],
        ['1ª pl.', '{ἐλύθημεν}', 'fomos libertados'],
        ['2ª pl.', '{ἐλύθητε}', 'fostes libertados'],
        ['3ª pl.', '{ἐλύθησαν}', 'foram libertados'],
      ],
    },
    {
      caption: T('Table 2 — Liquids: lengthening in future and aorist'),
      head: [T('Present'), T('Future'), T('Aorist')],
      rows: [
        ['{ἀγγέλλω}', '{ἀγγελῶ}', '{ἤγγειλα}'],
        ['{μένω}', '{μενῶ}', '{ἔμεινα}'],
        ['{σπείρω}', '{σπερῶ}', '{ἔσπειρα}'],
        ['{κρίνω}', '{κρινῶ}', '{ἔκρινα}'],
        ['{ἀποστέλλω}', '{ἀποστελῶ}', '{ἀπέστειλα}'],
      ],
    },
    {
      caption: T('Table 3 — 2nd aorist passive (θ-less)'),
      head: [T('Verb'), T('Form'), T('Meaning')],
      rows: [
        ['{γράφω}', '{ἐγράφην}', 'fui escrito'],
        ['{στέλλω}', '{ἐστάλην}', 'fui enviado'],
        ['{φαίνω}', '{ἐφάνη}', 'apareci'],
        ['{σπείρω}', '{ἐσπάρην}', 'fui semeado'],
        ['{χαίρω}', '{ἐχάρην}', 'alegrei-me'],
      ],
    },
  ],
};
