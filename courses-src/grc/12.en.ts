import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Irregular verbs'),
  subtitle: T('εἰμί, οἶδα, φημί: the three you will meet daily'),
  section: T('The verb'),
  body: C(`## Why the most-used are the strangest

In languages, the most frequent verbs are the most irregular — through sheer use they resist regularization ("to be", "to go" in English; ser/estar/ir in Portuguese). Greek is no different: {εἰμί} "to be", {οἶδα} "to know" and {φημί} "to say" escape the paradigms, and precisely therefore appear on nearly every New Testament page. Memorizing all three is the course's highest-yield investment.

## εἰμί: to be

{εἰμί} is athematic: it joins stem directly to endings, with no thematic vowel. Present: {εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν)}. Note that {ἐστί} loses its accent in certain positions (turning enclitic), a pronunciation detail manuscripts record inconsistently.

The imperfect uses temporal augment on the {ἐσ-} stem: {ἤμην, ἦς, ἦν, ἦμεν, ἦτε, ἦσαν}. {ἦν} ("was") opens John's prologue ({ἐν ἀρχῇ ἦν ὁ λόγος}) and countless narratives. The future is {ἔσομαι} — a middle form with active sense, heralding the middle voice of ch. 17.

For reference: imperative {ἔστω} "let it be!" (3rd sg.; Matt 5:37), infinitive {εἶναι}, participle {ὤν, οὖσα, ὄν} ("being" — crucial in reading, ch. 21).

## οἶδα: the perfect with present sense

{οἶδα} "I know" is, in form, a perfect (root {ἰδ-} lengthened to {οι-}): but it means present, because "to have seen" equals "to know". Paradigm: {οἶδα, οἶδας, οἶδε(ν), οἴδαμεν, οἴδατε, οἴδασι(ν)}. The pluperfect {ᾔδη} "I knew" and future {εἰδήσω} "I shall know" complete the picture.

The logic "perfect = resulting present state" returns in ch. 15 for all verbs. {οἶδα} is the limiting case: so lexicalized as a present that it grew its own future. Keep the formula: to see (aorist {εἶδον}) → to have seen = to know ({οἶδα}).

## φημί: saying in direct discourse

{φημί} "I say, affirm" is athematic in the present: {φημί, φῄς, φησί(ν), φαμέν, φατέ, φασί(ν)}. The imperfect {ἔφην} "he said" introduces speeches in solemn narrative. In the New Testament it is less frequent than {λέγω}, but appears in citation formulas and Acts.

In practice, {φημί} matters less for frequency than for pattern: it teaches recognizing athematic verbs — stem glued to ending, no thematic vowel — preparing the ground for the {-μι} verbs of ch. 12.`),
  vocab: [
    V('εἰμί', 'εἰμί', 'I am'),
    V('εἶ', 'εἰμί', 'you are'),
    V('ἐστίν', 'εἰμί', 'he is'),
    V('ἐσμέν', 'εἰμί', 'we are'),
    V('εἰσίν', 'εἰμί', 'they are'),
    V('ἤμην', 'εἰμί', 'I was'),
    V('ἦν', 'εἰμί', 'he was'),
    V('ἦσαν', 'εἰμί', 'they were'),
    V('ἔσομαι', 'εἰμί', 'I shall be'),
    V('εἶναι', 'εἰμί', 'to be (inf.)'),
    V('ὤν', 'εἰμί', 'being (part.)'),
    V('οἶδα', 'οἶδα', 'I know'),
    V('οἶδε', 'οἶδα', 'he knows'),
    V('ᾔδη', 'οἶδα', 'he knew'),
    V('φημί', 'φημί', 'I say'),
    V('φησίν', 'φημί', 'he says'),
    V('ἔφη', 'φημί', 'he said'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἦν" (John 1:1) is which form of "εἰμί"?'),
    options: [T('3rd sg. imperfect'), T('3rd sg. present'), T('1st sg. future'), T('Infinitive')],
    answer: 0,
    hint: T('Temporal augment (ἐ→ἠ) + contracted ἐσ- stem.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd plural present: εἰ___ ("they are").'),
      answer: 'σίν',
      hint: T('Table 1: the full form is εἰσίν.'),
    },
    {
      kind: 'choose',
      prompt: T('"οἶδα" means present ("I know") though perfect in form, because…'),
      options: [
        T('"To have seen" equals "to know" (resulting state)'),
        T('It is a scribal error'),
        T('The Greek perfect is always present'),
        T('The augment is missing'),
      ],
      answer: 0,
      hint: T('Perfect logic: resulting present state — rule §2.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its verb.'),
      pairs: [
        { a: 'ἦσαν', b: 'εἰμί (impf.)' },
        { a: 'ᾔδη', b: 'οἶδα (mqp.)' },
        { a: 'φησίν', b: 'φημί (pres.)' },
        { a: 'ἔσομαι', b: 'εἰμί (fut.)' },
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
      text: T('Athematic verbs ({εἰμί}, {φημί}) skip the thematic vowel: stem + ending directly.'),
    },
    {
      n: '2',
      text: T(
        '{οἶδα} is perfect in form and present in sense ("to have seen" = "to know"). The pluperfect {ᾔδειν/ᾔδη} means past.',
      ),
    },
    {
      n: '3',
      text: T(
        'The future of {εἰμί} is {ἔσομαι} (middle form, active sense). Keep it: it recurs in promises and prophecies.',
      ),
    },
    {
      n: '4',
      text: T(
        'The participle of {εἰμί} — {ὤν, οὖσα, ὄν} "being" — is a daily reading word, returning in ch. 21.',
      ),
    },
    {
      n: '5',
      text: T(
        'With a nominal predicate, Greek drops {ἐστί} in the present: {μακάριοι οἱ πτωχοί} "blessed [are] the poor".',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronunciation:'),
      text: T(
        '{ἐστί} keeps its accent at sentence end; mid-sentence it usually loses it (editors vary). Never let accentuation decide the parsing: the form is the same.',
      ),
    },
    {
      label: T('Economy:'),
      text: T(
        '{εἰμί} alone accounts for about 7% of all New Testament words. Every form in this chapter you fix will be read hundreds of times.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('in the beginning was the Word (John 1:1)') },
    { text: '{ἐγώ εἰμι ἡ ζωή}', gloss: T('I am the life (John 14:6; emphasis on ἐγώ)') },
    { text: '{ἔσονται δύο}', gloss: T('they shall be two (future; Matt 19:5)') },
    { text: '{οἴδατε τὴν ὥραν}', gloss: T('you know the hour (2nd pl.; Matt 24:42)') },
    {
      text: '{ᾔδει τί ἔμελλεν}',
      gloss: T('he knew what was about to happen (pluperfect; John 6:6)'),
    },
    { text: '{φησὶν αὐτοῖς}', gloss: T('he says to them (historical present of φημί)') },
    { text: '{ἔφη αὐτῷ}', gloss: T('he said to him (imperfect; Mark 1:41)') },
    { text: '{ἔστω ναὶ ναί}', gloss: T('let it be yes, yes (3rd sg. imperative; Matt 5:37)') },
    { text: '{ὢν υἱός}', gloss: T('being Son (participle; Heb 5:8)') },
    {
      text: '{εἰσὶν οἱ λέγοντες}',
      gloss: T('they are those who say (periphrastic with participle)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Present of εἰμί'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{εἰμί}', 'eu sou'],
        ['2ª sg.', '{εἶ}', 'tu és'],
        ['3ª sg.', '{ἐστί(ν)}', 'ele é'],
        ['1ª pl.', '{ἐσμέν}', 'nós somos'],
        ['2ª pl.', '{ἐστέ}', 'vós sois'],
        ['3ª pl.', '{εἰσί(ν)}', 'eles são'],
      ],
    },
    {
      caption: T('Table 2 — Imperfect of εἰμί'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{ἤμην}', 'eu era'],
        ['2ª sg.', '{ἦς}', 'tu eras'],
        ['3ª sg.', '{ἦν}', 'ele era'],
        ['1ª pl.', 'ἦμεν', 'nós éramos'],
        ['2ª pl.', 'ἦτε', 'vós éreis'],
        ['3ª pl.', 'ἦσαν', 'eles eram'],
      ],
    },
    {
      caption: T('Table 3 — οἶδα and φημί (present)'),
      head: [
        T('Person'),
        { 0: 'ο', 1: 'ἶ', 2: 'δ', 3: 'α', 4: ' ', 5: '«', 6: 's', 7: 'e', 8: 'i', 9: '»' },
        { 0: 'φ', 1: 'η', 2: 'μ', 3: 'ί', 4: ' ', 5: '«', 6: 'd', 7: 'i', 8: 'g', 9: 'o', 10: '»' },
      ],
      rows: [
        ['1ª sg.', '{οἶδα}', '{φημί}'],
        ['2ª sg.', '{οἶδας}', '{φῄς}'],
        ['3ª sg.', '{οἶδε(ν)}', '{φησί(ν)}'],
        ['1ª pl.', '{οἴδαμεν}', 'φαμέν'],
        ['2ª pl.', '{οἴδατε}', 'φατέ'],
        ['3ª pl.', '{οἴδασι(ν)}', 'φασί(ν)'],
      ],
    },
  ],
};
