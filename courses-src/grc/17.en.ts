import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Comparatives and reading: Mark 1'),
  subtitle: T('μείζων, πλείων, κρείττων — and the first continuous reading'),
  section: T('The verb'),
  body: C(`## Comparing in Greek

The regular comparative joins {-τερος, -τερα, -ον} to the adjective stem: {μικρός} → {μικρότερος} "smaller", {ἰσχυρός} → {ἰσχυρότερος} "stronger", {σοφός} → {σοφώτερος} "wiser". The superlative joins {-τατος, -τάτη, -ον}: {μικρότατος} "least", {ἁγιώτατος} "most holy" (Jude 20, {τῇ ἁγιωτάτῃ πίστι} "your most holy faith"). Declension follows ch. 4's 2-1-2.

The comparison's second term goes to the genitive ({μείζων μου} "greater than I") or comes with {ἤ} "than" + same case. The genitive of comparison is elegant and frequent: {ὁ πατήρ μου μείζων μού ἐστιν} "my Father is greater than I" (John 14:28).

## The irregulars you already met

The most-used adjectives escape the rule — and you have stumbled on them already: {μέγας} → {μείζων} "greater" (superlative {μέγιστος}), {πολύς} → {πλείων} "more" ({πλεῖστοι} "very many"), {ἀγαθός} → {κρείττων} "better" ({κράτιστος} "most excellent" — Theophilus's title in Luke 1:3, {κράτιστε}), {κακός} → {χείρων} "worse" (2 Tim 3:13, {ἐπὶ τὸ χεῖρον} "from bad to worse"), {μικρός} → {ἐλάττων} "lesser" beside regular {μικρότερος}.

The Greek superlative also has elative use — no comparison, just intensity: {ἐλάχιστος} "very small", {πρῶτος} "first of all". Facing a superlative with no second term, translate with "very" or "-est".

## Guided reading: Mark 1:2-11

Time to read continuous text. Mark 1 opens with Isaiah and closes with the baptism — and nearly all of chs. 1–15's grammar appears in these verses. Read slowly, recognizing each form.

{Ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου} — "Behold, I send my messenger before you": present ({ἀποστέλλω}) with future force, accusative as object, possessive enclitic {μου}.

{φωνὴ βοῶντος ἐν τῇ ἐρήμῳ} — "a voice of one crying in the wilderness": substantivized participle in the genitive ({βοῶντος}, from {βοάω}), dative of place.

{Ἑτοιμάσατε τὴν ὁδὸν κυρίου} — "Prepare the way of the Lord": aorist plural imperative, genitive of possession.

{ἐγένετο Ἰωάννης βαπτίζων} — "John appeared baptizing": middle aorist of {γίνομαι} + present participle (simultaneous action).

{σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός} — "you are my Son, the beloved": emphatic pronoun + predicate with repeated article (ch. 4!).`),
  vocab: [
    V('μείζων', 'μέγας', 'greater'),
    V('μέγιστος', 'μέγας', 'greatest'),
    V('πλείων', 'πολύς', 'more'),
    V('κρείττων', 'ἀγαθός', 'better'),
    V('χείρων', 'κακός', 'worse'),
    V('ἐλάττων', 'μικρός', 'lesser'),
    V('μικρότερος', 'μικρός', 'smaller (reg.)'),
    V('ἤ', 'ἤ', 'than, or'),
    V('Ἰδοὺ', 'ὁράω', 'behold!'),
    V('ἄγγελος', 'ἄγγελος', 'messenger, angel'),
    V('ἔρημος', 'ἔρημος', 'wilderness'),
    V('βοάω', 'βοάω', 'to cry out'),
    V('ἑτοιμάζω', 'ἑτοιμάζω', 'to prepare'),
    V('ἀγαπητός', 'ἀγαπητός', 'beloved'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"μείζων μου" uses the genitive because…'),
    options: [
      T('It is genitive of comparison (second term)'),
      T('Every comparative governs possessive genitive'),
      T('μου is always genitive'),
      T('It is dative of interest'),
    ],
    answer: 0,
    hint: T("Comparison's second term: genitive or ἤ — rule §2."),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('"κράτιστε Θεόφιλε" (Luke 1:3) is…'),
      options: [
        T('Superlative vocative (honorific title)'),
        T('Comparative nominative'),
        T('Genitive of comparison'),
        T('Accusative of duration'),
      ],
      answer: 0,
      hint: T('κράτιστος = superlative of ἀγαθός; final -ε = vocative.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the regular comparative: μικρ___ ("smaller").'),
      answer: 'ότερος',
      hint: T('Regular comparative suffix: -τερος.'),
    },
    {
      kind: 'match',
      prompt: T('Match each comparative to its positive.'),
      pairs: [
        { a: 'μείζων', b: 'μέγας' },
        { a: 'πλείων', b: 'πολύς' },
        { a: 'κρείττων', b: 'ἀγαθός' },
        { a: 'χείρων', b: 'κακός' },
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
        'Regular comparative: -τερος; superlative: -τατος. 2-1-2 declension, like the positive.',
      ),
    },
    {
      n: '2',
      text: T(
        'Second term: genitive ({μείζων μου}) or ἤ + same case. With no second term, superlative = elative ("very").',
      ),
    },
    {
      n: '3',
      text: T(
        'Five irregulars rule the text: {μείζων}, {πλείων}, {κρείττων}, {χείρων}, {ἐλάττων}. Memorize all five.',
      ),
    },
    {
      n: '4',
      text: T(
        'In continuous reading, each form must be recognized — not translated word by word. Flow before precision.',
      ),
    },
  ],
  notes: [
    {
      label: T('Reading method:'),
      text: T(
        'On the first continuous reading, underline only what you recognize (articles, cases, tenses) and guess the rest from context. On the second, check vocabulary. Reading Greek is recognize first, translate second.',
      ),
    },
    {
      label: T('μᾶλλον:'),
      text: T(
        'The adverb {μᾶλλον} "more, rather" makes comparisons with no adjective: {μᾶλλον ἤ} "rather than". Paul uses it in dilemmas (to live or depart, Phil 1:23).',
      ),
    },
  ],
  examples: [
    { text: '{μείζων μου}', gloss: T('greater than I (genitive of comparison)') },
    {
      text: '{ὁ πατήρ μου μείζων μού ἐστιν}',
      gloss: T('my Father is greater than I (John 14:28)'),
    },
    { text: '{κράτιστε Θεόφιλε}', gloss: T('most excellent Theophilus (vocative; Luke 1:3)') },
    { text: '{πλεῖον}', gloss: T('more (substantivized neuter; Matt 5:20)') },
    { text: '{ἐπὶ τὸ χεῖρον}', gloss: T('from bad to worse (2 Tim 3:13)') },
    { text: '{Ἰδοὺ ἀποστέλλω}', gloss: T('behold, I send (futuristic present; Mark 1:2)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voice of one crying (participle; Mark 1:3)') },
    { text: '{Ἑτοιμάσατε}', gloss: T('prepare! (aorist imperative; Mark 1:3)') },
    { text: '{ἐγένετο Ἰωάννης}', gloss: T('John appeared (middle aorist; Mark 1:4)') },
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('you are my Son (Mark 1:11)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Regular comparative and superlative'),
      head: [T('Positive'), T('Comparative'), T('Superlative')],
      rows: [
        ['{μικρός}', '{μικρότερος}', 'μικρότατος'],
        ['{ἰσχυρός}', '{ἰσχυρότερος}', 'ἰσχυρότατος'],
        ['{σοφός}', '{σοφώτερος}', 'σοφώτατος'],
      ],
    },
    {
      caption: T('Table 2 — Essential irregulars'),
      head: [T('Positive'), T('Comparative'), T('Superlative')],
      rows: [
        ['{μέγας}', '{μείζων}', 'μέγιστος'],
        ['{πολύς}', '{πλείων}', 'πλεῖστος'],
        ['{ἀγαθός}', '{κρείττων}', 'κράτιστος'],
        ['{κακός}', '{χείρων}', 'χείριστος'],
        ['{μικρός}', '{ἐλάττων}', 'ἐλάχιστος'],
      ],
    },
  ],
};
