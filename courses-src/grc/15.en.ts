import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Personal pronouns'),
  subtitle: T("ἐγώ, σύ, αὐτός: emphasis and αὐτός's three roles"),
  section: T('Pronouns'),
  body: C(`## Why a pronoun, if the verb already says it?

In Greek, {λέγω} already means "I say" and {λέγεις} already means "you say" — the explicit pronoun is grammatically redundant. So whenever {ἐγώ} or {σύ} appear as subject, there is emphasis or contrast: {σὺ εἶ ὁ υἱός μου} "YOU are my Son" (Mark 1:11, at the baptism), {ἐγὼ οὐκ εἰμὶ ἄξιος} "I am not worthy" (Matt 3:11). The pronoun is a spotlight: where it falls lies the focus.

The same logic governs {ἐγώ εἰμι} "I AM" (John 8:58) — with or without predicate, the formula evokes the divine Name of Exodus 3:14 in the Septuagint ({ἐγώ εἰμι ὁ ὤν}). Recognizing the emphasis is half the exegesis of these verses.

## ἐγώ and σύ: stressed and enclitic

1st- and 2nd-person pronouns have stressed forms (own accent, emphatic) and short enclitic forms (accentless, leaning on the previous word). {ἐμοῦ} vs {μου}, {ἐμοί} vs {μοι}, {ἐμέ} vs {με}; {σοῦ} vs {σου}, {σοί} vs {σοι}, {σέ} vs {σε}.

In New Testament practice, enclitics dominate as possessives and objects: {ὁ υἱός μου} "my son", {λέγω σοι} "I tell you", {μετὰ σοῦ} "with you". Stressed forms appear in contrast ({σὺ λέγεις} "it is YOU who say", John 18:37), after emphatic prepositions and in parallelisms. Rule of thumb: enclitic = neutral use; stressed = attention.

The plural ({ἡμεῖς}, {ὑμεῖς}) follows the same logic, with full forms in every case: {ἡμῶν} "our", {ὑμῖν} "to you", {ἡμᾶς} "us". Emphatic {ὑμεῖς} opens contrasts like Matt 5:13 ({ὑμεῖς ἐστε τὸ ἅλας} "YOU are the salt").

## αὐτός in three roles

{αὐτός} is the pronominal wild card, with three distinct employments revealed by position. First, intensive adjective beside an articulated noun: {αὐτὸς ὁ κύριος} "the Lord HIMSELF" (1 Thess 4:16), {αὐτὸς ἐγώ} "I MYSELF".

Second, 3rd-person pronoun in oblique cases (Greek has no nominative "he" — it uses {ἐκεῖνος} or the article): {αὐτόν} "him", {αὐτῇ} "her", {αὐτῶν} "their". {εἶδεν αὐτόν} "he saw him"; {μετ᾽ αὐτῶν} "with them".

Third, with the article it means "the same": {ὁ αὐτὸς} "the same" (1 Cor 1:10, {τὸ αὐτὸ λέγητε} "say the same thing"), {ἐπὶ τὸ αὐτό} "together, in the same place" (Acts 2:1). Three positions, three senses — and confusing them is this chapter's classic trap.`),
  vocab: [
    V('ἐγώ', 'ἐγώ', 'I (emphatic)'),
    V('ἐμοῦ', 'ἐγώ', 'of me (stressed)'),
    V('μου', 'ἐγώ', 'my, me'),
    V('μοι', 'ἐγώ', 'to me'),
    V('ἡμεῖς', 'ἐγώ', 'we'),
    V('ἡμῶν', 'ἐγώ', 'our, of us'),
    V('σύ', 'σύ', 'you (emphatic)'),
    V('σοῦ', 'σύ', 'of you (stressed)'),
    V('σου', 'σύ', 'your, you'),
    V('σοι', 'σύ', 'to you'),
    V('αὐτός', 'αὐτός', 'himself, same'),
    V('αὐτόν', 'αὐτός', 'him'),
    V('αὐτῶν', 'αὐτός', 'their, of them'),
    V('ἑαυτόν', 'ἑαυτοῦ', 'himself'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "σὺ εἶ ὁ υἱός μου" (Mark 1:11), the explicit "σύ" signals…'),
    options: [
      T('Solemn emphasis ("YOU are")'),
      T('Agreement error'),
      T('Majestic plural'),
      T('Indefinite subject'),
    ],
    answer: 0,
    hint: T('Verb + explicit pronoun = spotlight — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the possessive enclitic: ὁ υἱός ___ ("my son").'),
      answer: 'μου',
      hint: T('Enclitic genitive of ἐγώ: Table 1.'),
    },
    {
      kind: 'choose',
      prompt: T('"ὁ αὐτὸς λόγος" means…'),
      options: [
        T('The same word'),
        T('The word itself (intensive)'),
        T('He said the word'),
        T('His word'),
      ],
      answer: 0,
      hint: T('With article before: "the same" — rule §5.'),
    },
    {
      kind: 'match',
      prompt: T('Match each αὐτός form to its role.'),
      pairs: [
        { a: 'αὐτὸς ὁ κύριος', b: 'intensivo' },
        { a: 'εἶδεν αὐτόν', b: 'pronome' },
        { a: 'τὸ αὐτό', b: '«o mesmo»' },
        { a: 'μετ᾽ αὐτῶν', b: 'pronome' },
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
        'Explicit pronoun as subject = emphasis or contrast. Without emphasis, the verb alone suffices.',
      ),
    },
    {
      n: '2',
      text: T(
        'Enclitics ({μου}, {σου}, {με}, {σε}) = neutral use (possession, object). Stressed ({ἐμοῦ}, {σοί}) = attention and contrast.',
      ),
    },
    { n: '3', text: T('αὐτός without article + articulated noun = "himself" ({αὐτὸς ὁ κύριος}).') },
    {
      n: '4',
      text: T(
        'αὐτός in oblique cases with no article nearby = pronoun "he/she" ({αὐτόν}, {αὐτῶν}).',
      ),
    },
    {
      n: '5',
      text: T(
        'ὁ αὐτός (with article) = "the same" ({ἐπὶ τὸ αὐτό} "together"). Position decides everything.',
      ),
    },
  ],
  notes: [
    {
      label: T('Phonetics:'),
      text: T(
        'Enclitics gain an accent when the previous word is oxytone or when two enclitics stack ({ἄκουσόν μου} "hear me"). Editors mark these accents — do not mistake them for stressed forms.',
      ),
    },
    {
      label: T('Reflexive:'),
      text: T(
        'For "himself", Greek compounds {ἑαυτόν} (αὐτός + reflexive prefix): {ἑαυτὸν ἐταπείνωσεν} "he humbled himself" (Phil 2:8). Ch. 26 (demonstratives) completes the pronominal picture.',
      ),
    },
  ],
  examples: [
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('you are my Son (emphasis; Mark 1:11)') },
    { text: '{ἐγώ εἰμι}', gloss: T('I AM (John 8:58; divine formula)') },
    { text: '{ὑμεῖς ἐστε τὸ ἅλας}', gloss: T('you are the salt (contrast; Matt 5:13)') },
    { text: '{ὁ υἱός μου}', gloss: T('my son (possessive enclitic)') },
    { text: '{λέγω σοι}', gloss: T('I tell you (enclitic object)') },
    { text: '{αὐτὸς ὁ κύριος}', gloss: T('the Lord himself (intensive; 1 Thess 4:16)') },
    { text: '{εἶδεν αὐτόν}', gloss: T('he saw him (oblique pronoun)') },
    { text: '{μετ᾽ αὐτῶν}', gloss: T('with them (genitive plural)') },
    { text: '{τὸ αὐτὸ λέγητε}', gloss: T('say the same thing (1 Cor 1:10)') },
    { text: '{ἐπὶ τὸ αὐτό}', gloss: T('together, in the same place (Acts 2:1)') },
  ],
  tables: [
    {
      caption: T('Table 1 — ἐγώ (1st person)'),
      head: [
        T('Case'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominative'), '{ἐγώ}', '—', '{ἡμεῖς}'],
        [T('Genitive'), '{ἐμοῦ}', '{μου}', '{ἡμῶν}'],
        [T('Dative'), '{ἐμοί}', '{μοι}', '{ἡμῖν}'],
        [T('Accusative'), '{ἐμέ}', '{με}', '{ἡμᾶς}'],
      ],
    },
    {
      caption: T('Table 2 — σύ (2nd person)'),
      head: [
        T('Case'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominative'), '{σύ}', '—', '{ὑμεῖς}'],
        [T('Genitive'), '{σοῦ}', '{σου}', '{ὑμῶν}'],
        [T('Dative'), '{σοί}', '{σοι}', '{ὑμῖν}'],
        [T('Accusative'), '{σέ}', '{σε}', '{ὑμᾶς}'],
      ],
    },
    {
      caption: T('Table 3 — αὐτός (declines like a 2-1-2 adjective)'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{αὐτός}', '{αὐτή}', '{αὐτό}'],
        [T('Genitive'), '{αὐτοῦ}', '{αὐτῆς}', '{αὐτοῦ}'],
        [T('Dative'), '{αὐτῷ}', '{αὐτῇ}', '{αὐτῷ}'],
        [T('Accusative'), '{αὐτόν}', 'αὐτήν', '{αὐτό}'],
      ],
    },
  ],
};
