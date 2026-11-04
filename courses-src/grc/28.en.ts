import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Numerals and time'),
  subtitle: T('εἷς, δύο, τρεῖς — and how Greek tells time'),
  section: T('Syntax'),
  body: C(`## Counting to four (which decline)

Only cardinals 1–4 decline; from 5 on they are invariable. {εἷς, μία, ἕν} "one" declines as a pronominal adjective (genitive {ἑνός, μιᾶς, ἑνός}); {δύο} "two" is indeclinable in Koine (ancient-dual relic); {τρεῖς, τρία} "three" and {τέσσαρες, τέσσαρα} "four" follow the 3rd declension (genitive {τριῶν}, {τεσσάρων} — with familiar {-ῶν}).

The invariable sequence memorizes as a rhythmic block: {πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα} (5–10), {ἕνδεκα, δώδεκα} (11–12, the latter with its own declinable form in Acts), {εἴκοσι} (20), {ἑκατόν} (100), {χίλιοι} (1000, declinable as adjective: neuter plural {χίλια} in Rev 20:2).

## Ordinals and fractions of time

Ordinals take the article and decline 2-1-2: {πρῶτος} "first", {δεύτερος}, {τρίτος} — {τῇ ἡμέρᾳ τῇ τρίτῃ} "on the third day" (John 2:1, Cana; note the repeated article: attributive position, ch. 4). {ἔσχατος} "last" and {μέσος} "middle" complete the scale ({ἔσονται οἱ ἔσχατοι πρῶτοι} "the last shall be first", Matt 19:30).

{πρῶτος} with partitive genitive counts rank: {πρῶτός μου} "first [before] me" (John 1:15, {πρῶτός μου ἦν} "he was before me" — precedence, not chronology). And {μία} + genitive plural dates the week: {μιᾷ τῶν σαββάτων} "on the first [day] of the week" (John 20:1, the resurrection; {σάββατον} = "sabbath/week").

## Hours and days

The Jewish day begins at sunset; hours count from sunrise: {ὥρα ἦν ὡς δεκάτη} "it was about the tenth hour" (John 1:39 — tenth hour ≈ 4 p.m.). {νύξ} "night" vs {ἡμέρα} "day"; {ὀψία} "late" ({ὀψίας γενομένης}, ch. 23); {πρωῒ} "early" ({λίαν πρωῒ} "very early", Mark 16:2).

Two famous measures: {τεσσεράκοντα ἡμέρας} "forty days" (the fast, Matt 4:2; flood, temptation — trial's number) and {ἑβδομήκοντα} "seventy" (Luke 10:1, the seventy sent). Numbers in the biblical text are rarely just numbers: forty tests, seven completes, twelve governs, a thousand amplifies.`),
  vocab: [
    V('εἷς', 'εἷς', 'one'),
    V('μία', 'εἷς', 'one (fem.)'),
    V('δύο', 'δύο', 'two'),
    V('τρεῖς', 'τρεῖς', 'three'),
    V('τέσσαρες', 'τέσσαρες', 'four'),
    V('ἑπτά', 'ἑπτά', 'seven'),
    V('δέκα', 'δέκα', 'ten'),
    V('δώδεκα', 'δώδεκα', 'twelve'),
    V('ἑκατόν', 'ἑκατόν', 'hundred'),
    V('χίλιοι', 'χίλιοι', 'thousand'),
    V('πρῶτος', 'πρῶτος', 'first'),
    V('τρίτος', 'τρίτος', 'third'),
    V('ὥρα', 'ὥρα', 'hour'),
    V('σάββατον', 'σάββατον', 'sabbath, week'),
    V('νύξ', 'νύξ', 'night'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ὥρα ἦν ὡς δεκάτη" (John 1:39) equals…'),
    options: [
      T('About 4 p.m. (10th hour from sunrise)'),
      T('10 a.m. sharp'),
      T('Midnight'),
      T('Indefinite hour'),
    ],
    answer: 0,
    hint: T('Add 6 to given hours — rule §3.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the genitive: τρι___ ("of three").'),
      answer: 'ῶν',
      hint: T('τρεῖς follows the 3rd: genitive in -ῶν.'),
    },
    {
      kind: 'choose',
      prompt: T('"μιᾷ τῶν σαββάτων" (John 20:1) means…'),
      options: [
        T('On the first day of the week'),
        T("On one of the year's sabbaths"),
        T('During the sabbath'),
        T('A thousand sabbaths'),
      ],
      answer: 0,
      hint: T('σάββατον = sabbath and week — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each numeral to its value.'),
      pairs: [
        { a: 'ἑπτά', b: '7' },
        { a: 'τεσσεράκοντα', b: '40' },
        { a: 'ἑκατόν', b: '100' },
        { a: 'δώδεκα', b: '12' },
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
        'Only 1–4 decline ({εἷς}, {δύο} invariable in Koine, {τρεῖς}, {τέσσαρες}). From 5 on, one form.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ordinals with article, 2-1-2 ({πρῶτος}, {τρίτος}). Repeated article = attributive, as with adjectives.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hours count from sunrise: 1st ≈ 6 a.m., 6th ≈ noon, 10th ≈ 4 p.m. Add 6 to given hours.',
      ),
    },
    {
      n: '4',
      text: T('{σάββατον} = sabbath and week: {μιᾷ τῶν σαββάτων} "on the first day of the week".'),
    },
  ],
  notes: [
    {
      label: T('Sixth hour:'),
      text: T(
        '{ὥρα ἦν ὡς ἕκτη} "it was about the sixth hour" (John 4:6; 19:14) = noon, peak heat — narrative detail, not punch-clock. John timestamps decisive encounters (Nicodemus at night, the Samaritan at noon).',
      ),
    },
    {
      label: T('Vigesimal relics:'),
      text: T(
        'Revelation counts multitudes in myriads ({δὶς μυριάδες μυριάδων} "twice ten thousand times ten thousand", Rev 9:16). {μυριάς} "ten thousand" declines as a noun — Greek counts large numbers in ten-thousand packets.',
      ),
    },
  ],
  examples: [
    { text: '{εἷς κύριος}', gloss: T('one Lord (Eph 4:5)') },
    { text: '{δύο ψάρια}', gloss: T('two fish (Mark 6:38)') },
    { text: '{τρεῖς ἡμέρας}', gloss: T('three days (accusative of duration)') },
    { text: '{τῇ ἡμέρᾳ τῇ τρίτῃ}', gloss: T('on the third day (John 2:1)') },
    { text: '{ὥρα ἦν ὡς δεκάτη}', gloss: T('it was about the tenth hour (John 1:39)') },
    { text: '{μιᾷ τῶν σαββάτων}', gloss: T('on the first day of the week (John 20:1)') },
    { text: '{τεσσεράκοντα ἡμέρας}', gloss: T('forty days (Matt 4:2)') },
    { text: '{ἑβδομήκοντα}', gloss: T('seventy (Luke 10:1)') },
    { text: '{πρῶτός μου ἦν}', gloss: T('he was before me (John 1:15)') },
    { text: '{χίλια ἔτη}', gloss: T('a thousand years (Rev 20:2)') },
  ],
  tables: [
    {
      caption: T('Table 1 — εἷς, τρεῖς, τέσσαρες'),
      head: [
        T('Case'),
        {
          0: 'ε',
          1: 'ἷ',
          2: 'ς',
          3: ' ',
          4: '(',
          5: 'm',
          6: '.',
          7: '/',
          8: 'f',
          9: '.',
          10: '/',
          11: 'n',
          12: '.',
          13: ')',
        },
        { 0: 'τ', 1: 'ρ', 2: 'ε', 3: 'ῖ', 4: 'ς' },
        { 0: 'τ', 1: 'έ', 2: 'σ', 3: 'σ', 4: 'α', 5: 'ρ', 6: 'ε', 7: 'ς' },
      ],
      rows: [
        [T('Nominative'), '{εἷς} / {μία} / {ἕν}', '{τρεῖς} / {τρία}', 'τέσσαρες / τέσσαρα'],
        [T('Genitive'), 'ἑνός / μιᾶς / ἑνός', '{τριῶν}', 'τεσσάρων'],
        [T('Dative'), 'ἑνί / μιᾷ / ἑνί', 'τρισί', 'τέσσαρσι'],
        [T('Accusative'), 'ἕνα / μίαν / ἕν', 'τρεῖς / τρία', 'τέσσαρας / τέσσαρα'],
      ],
    },
    {
      caption: T('Table 2 — Invariables 5–12 and large'),
      head: [
        T('Number'),
        T('Form'),
        {
          0: 'E',
          1: 'x',
          2: 'e',
          3: 'm',
          4: 'p',
          5: 'l',
          6: 'o',
          7: ' ',
          8: 'n',
          9: 'o',
          10: ' ',
          11: 't',
          12: 'e',
          13: 'x',
          14: 't',
          15: 'o',
        },
      ],
      rows: [
        ['5–10', '{πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα}', '{δέκα παρθένοι} (Mt 25.1)'],
        ['11–12', '{ἕνδεκα, δώδεκα}', '{δώδεκα μαθηταί}'],
        ['20 / 100', '{εἴκοσι / ἑκατόν}', '{ἑκατὸν πρόβατα} (Mt 18.12)'],
        ['40 / 70', '{τεσσεράκοντα / ἑβδομήκοντα}', '{τεσσεράκοντα ἡμέρας}'],
        ['1000', '{χίλιοι} (declinável!)', '{χίλια ἔτη} (Ap 20.2)'],
      ],
    },
  ],
};
