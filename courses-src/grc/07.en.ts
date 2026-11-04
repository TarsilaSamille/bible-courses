import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Contract verbs'),
  subtitle: T('ἀγαπάω, ποιέω, δηλόω: when two vowels become one'),
  section: T('The verb'),
  body: C(`## Why some verbs "shrink"

Many of the most-used New Testament verbs end their stem in a vowel — {ἀγαπα-} "to love", {ποιε-} "to do", {δηλο-} "to show". Receiving the present endings, that vowel collides with the thematic vowel and the two fuse into one: {ἀγαπάω} becomes {ἀγαπῶ}, {ποιέω} becomes {ποιῶ}, {δηλόω} becomes {δηλῶ}. The circumflex betrays the fusion: where a verb form carries a circumflex, contraction happened.

The dictionary lists these verbs uncontracted ({ἀγαπάω}, {ζητέω}), but the New Testament nearly always uses the contracted form ({ἀγαπῶ}, {ζητῶ}). Learn to recognize both — and to derive one from the other.

## Verbs in -άω

The vowel {α} dominates the fusion: α + ε yields long {α}, α + ο yields {ω}. In present practice: {-ω} becomes {-ῶ}, {-εις} becomes {-ᾷς}, {-ει} becomes {-ᾷ}, {-ομεν} becomes {-ῶμεν}, {-ετε} becomes {-ᾶτε}, {-ουσι} becomes {-ῶσι}. So {ἀγαπάω} conjugates {ἀγαπῶ, ἀγαπᾷς, ἀγαπᾷ, ἀγαπῶμεν, ἀγαπᾶτε, ἀγαπῶσι(ν)}.

The infinitive contracts too: {ἀγαπᾶν} (from {ἀγαπάειν}). And store away the lengthening from now: in future and aorist, short {α} lengthens to {η} — {ἀγαπήσω} "I shall love", {ἠγάπησα} "I loved". That lengthening returns in chapters 7 and 17.

## Verbs in -έω

The largest group: {ποιέω} "to do", {ζητέω} "to seek", {καλέω} "to call", {τηρέω} "to keep", {μαρτυρέω} "to witness". Here fusion yields iota diphthongs or closed {ου}: {-ω} becomes {-ῶ}, {-εις} and {-ει} become {-εῖς, -εῖ}, {-ομεν} becomes {-οῦμεν}, {-ετε} becomes {-εῖτε}, {-ουσι} becomes {-οῦσι}. Hence {ποιῶ, ποιεῖς, ποιεῖ, ποιοῦμεν, ποιεῖτε, ποιοῦσι(ν)}.

The matching lengthening is ε → η: {ποιήσω}, {ἐποίησα}. Note that {ἐποίησεν} (aorist of {ποιέω}) is among the most frequent verb forms in the Gospels.

## Verbs in -όω

The smallest group — {δηλόω} "to manifest", {πληρόω} "to fulfill, fill" — fuses into {οι} and {ου}: {-εις} becomes {-οῖς}, {-ει} becomes {-οῖ}, {-ομεν} becomes {-οῦμεν}. Paradigm: {δηλῶ, δηλοῖς, δηλοῖ, δηλοῦμεν, δηλοῦτε, δηλοῦσι(ν)}.

The lengthening is ο → ω: {πληρώσω}, {ἐπλήρωσα}. {πεπλήρωται} "it stands fulfilled" (passive perfect of {πληρόω}) is a keyword of John's and Paul's theology.`),
  vocab: [
    V('ἀγαπάω', 'ἀγαπάω', 'to love'),
    V('ἀγαπῶ', 'ἀγαπάω', 'I love'),
    V('ἀγαπᾷ', 'ἀγαπάω', 'he loves'),
    V('ποιέω', 'ποιέω', 'to do, make'),
    V('ποιῶ', 'ποιέω', 'I do'),
    V('ποιεῖ', 'ποιέω', 'he does'),
    V('ζητέω', 'ζητέω', 'to seek'),
    V('ζητῶ', 'ζητέω', 'I seek'),
    V('καλέω', 'καλέω', 'to call'),
    V('τηρέω', 'τηρέω', 'to keep'),
    V('μαρτυρέω', 'μαρτυρέω', 'to witness'),
    V('δηλόω', 'δηλόω', 'to manifest'),
    V('πληρόω', 'πληρόω', 'to fulfill, fill'),
    V('δοξάζω', 'δοξάζω', 'to glorify'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ποιεῖ" (he does) comes from which infinitive?'),
    options: [T('ποιέω (-έω)'), T('ποιάω (-άω)'), T('ποιόω (-όω)'), T('ποιμω (regular -ω)')],
    answer: 0,
    hint: T('The -εῖ- diphthong betrays the -έω group.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 2nd plural: ___ ("you love", from ἀγαπάω).'),
      answer: 'ἀγαπᾶτε',
      hint: T('-άω: -ετε becomes -ᾶτε.'),
    },
    {
      kind: 'choose',
      prompt: T('The future of "ἀγαπάω" is "ἀγαπήσω" because…'),
      options: [
        T('Short α lengthens to η'),
        T('α becomes perispomenon ο'),
        T('α drops and double σ enters'),
        T('It is an irregular verb'),
      ],
      answer: 0,
      hint: T('Lengthening α→η — rule §5.'),
    },
    {
      kind: 'match',
      prompt: T('Match each contracted form to its group.'),
      pairs: [
        { a: 'ἀγαπᾷς', b: '-άω' },
        { a: 'ποιεῖτε', b: '-έω' },
        { a: 'δηλοῖ', b: '-όω' },
        { a: 'ζητοῦμεν', b: '-έω' },
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
        'Circumflex on a verb form = contraction. Faced with it, rebuild the two original vowels to find the stem.',
      ),
    },
    {
      n: '2',
      text: T('-άω: α dominates (α+ε→long α, α+ο→ω). Result: -ῶ, -ᾷς, -ᾷ, -ῶμεν, -ᾶτε, -ῶσι.'),
    },
    {
      n: '3',
      text: T('-έω: fusion into diphthong or ου. Result: -ῶ, -εῖς, -εῖ, -οῦμεν, -εῖτε, -οῦσι.'),
    },
    { n: '4', text: T('-όω: fusion into οι/ου. Result: -ῶ, -οῖς, -οῖ, -οῦμεν, -οῦτε, -οῦσι.') },
    {
      n: '5',
      text: T('Lengthening for future/aorist: α→η ({ἀγαπήσω}), ε→η ({ποιήσω}), ο→ω ({πληρώσω}).'),
    },
  ],
  notes: [
    {
      label: T('How to recognize:'),
      text: T(
        'Every verb with a circumflex on its present ending ({ποιεῖτε}, {ἀγαπῶμεν}) is contract. With no circumflex and no odd diphthong, it is a regular -ω verb — back to ch. 5.',
      ),
    },
    {
      label: T('False friend:'),
      text: T(
        '{δοξάζω} "to glorify" looks contract but is a regular -ω verb: its stem ends in a consonant ({δοξαδ-}), not a vowel. Criterion: only verbs whose stem ends in a pure α, ε or ο vowel contract.',
      ),
    },
  ],
  examples: [
    {
      text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}',
      gloss: T('God loves the world (John 3:16; contracted 3rd sg.)'),
    },
    { text: '{ἀγαπᾶτε ἀλλήλους}', gloss: T('love one another (2nd pl.; John 13:34)') },
    { text: '{τί ποιεῖτε}', gloss: T('what are you doing? (2nd pl. of ποιέω)') },
    { text: '{ἐποίησεν σημεῖα}', gloss: T('he did signs (lengthened aorist; John 20:30)') },
    { text: '{ζητεῖτε πρῶτον}', gloss: T('seek first (Matt 6:33)') },
    { text: '{καλεῖ τοὺς μαθητάς}', gloss: T('he calls the disciples (3rd sg.)') },
    { text: '{τηρεῖ τὸν λόγον}', gloss: T('he keeps the word (John 8:51)') },
    { text: '{πληροῦται ἡ γραφή}', gloss: T('the Scripture is fulfilled (passive; John 19:24)') },
    { text: '{μαρτυρεῖ περὶ αὐτοῦ}', gloss: T('he witnesses concerning him') },
    { text: '{δηλοῖ τὴν ἀλήθειαν}', gloss: T('he manifests the truth (3rd sg. -όω verb)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present of ἀγαπάω'),
      head: [T('Person'), T('Uncontracted'), T('Contracted')],
      rows: [
        ['1ª sg.', 'ἀγαπάω', '{ἀγαπῶ}'],
        ['2ª sg.', 'ἀγαπάεις', '{ἀγαπᾷς}'],
        ['3ª sg.', 'ἀγαπάει', '{ἀγαπᾷ}'],
        ['1ª pl.', 'ἀγαπάομεν', '{ἀγαπῶμεν}'],
        ['2ª pl.', 'ἀγαπάετε', '{ἀγαπᾶτε}'],
        ['3ª pl.', 'ἀγαπάουσι', '{ἀγαπῶσι(ν)}'],
      ],
    },
    {
      caption: T('Table 2 — Present of ποιέω'),
      head: [T('Person'), T('Uncontracted'), T('Contracted')],
      rows: [
        ['1ª sg.', 'ποιέω', '{ποιῶ}'],
        ['2ª sg.', 'ποιέεις', '{ποιεῖς}'],
        ['3ª sg.', 'ποιέει', '{ποιεῖ}'],
        ['1ª pl.', 'ποιέομεν', '{ποιοῦμεν}'],
        ['2ª pl.', 'ποιέετε', '{ποιεῖτε}'],
        ['3ª pl.', 'ποιέουσι', '{ποιοῦσι(ν)}'],
      ],
    },
    {
      caption: T('Table 3 — Present of δηλόω'),
      head: [T('Person'), T('Uncontracted'), T('Contracted')],
      rows: [
        ['1ª sg.', 'δηλόω', '{δηλῶ}'],
        ['2ª sg.', 'δηλόεις', '{δηλοῖς}'],
        ['3ª sg.', 'δηλόει', '{δηλοῖ}'],
        ['1ª pl.', 'δηλόομεν', '{δηλοῦμεν}'],
        ['2ª pl.', 'δηλόετε', '{δηλοῦτε}'],
        ['3ª pl.', 'δηλόουσι', '{δηλοῦσι(ν)}'],
      ],
    },
  ],
};
