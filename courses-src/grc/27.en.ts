import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Relative and demonstratives'),
  subtitle: T('ὅς, οὗτος, ἐκεῖνος: pointing back and near'),
  section: T('Syntax'),
  body: C(`## The relative serves two masters

The relative pronoun ({ὅς} "who/which", {ἥ}, {ὅ}) agrees with its antecedent in gender and number, but takes its case from its OWN clause. {μακάριοί εἰσιν οἳ πενθοῦσιν} "blessed are those who mourn" (Matt 5:4): {οἳ} is masculine plural like the implied antecedent ("those"), but nominative as subject of {πενθοῦσιν}. While in {ὃ ἐὰν αἰτήσητε} "whatever you ask" (John 14:13), {ὃ} is neuter (antecedent: "things") and accusative (object of {αἰτήσητε}).

This double loyalty resolves long sentences: find the antecedent (gender/number) and the subordinate function (case). The relative's genitive marks possession — {οὗ} "whose": {οὗ τὸ ὑπόδημα} "whose sandal [I am unworthy to untie]" (Mark 1:7). And dative with preposition anchors theological places: {ἐν ᾧ} "in whom" (Paul's incorporation formula).

## Demonstratives: near and far

{οὗτος} "this" points near; {ἐκεῖνος} "that" points far — in space, time or discourse. {οὗτός ἐστιν ὁ υἱός μου} "this is my Son" (Matt 3:17, the Father points at Jesus present); {ἐν ἐκείνῃ τῇ ἡμέρᾳ} "on that day" (the eschatological Day, distant and dreaded).

Both decline with the article fused to the stem: {οὗτος, αὕτη, τοῦτο}; {ἐκεῖνος, ἐκείνη, ἐκεῖνο}. Neuter {τοῦτο} "this" opens formulas: {τοῦτο ποιεῖτε} "do this" (Luke 22:19). And {ἐκεῖνος} became late Greek's emphatic "he" — where Classical used a pronoun, Koine uses {ἐκεῖνος}.

## αὐτός, third time

Ch. 14 gave the three roles; here, the commonest contexts. Intensive with proper names: {αὐτὸς Δαυίδ} "David himself" (Mark 12:36). Oblique pronoun in prepositional chains: {δι᾽ αὐτοῦ} "through him" (John 1:3, {πάντα δι᾽ αὐτοῦ ἐγένετο} "all things were made through him"), {ἐν αὐτῷ} "in him", {σὺν αὐτοῖς} "with them".

And the indefinite-relative: {ὃς ἄν} / {ὅστις} + subjunctive = "whoever": {ὃς ἐὰν θέλῃ} "whoever wishes" (Mark 8:34, ch. 24). The relative with {ἄν} generalizes — from "that which" to "whatever".`),
  vocab: [
    V('ὅς', 'ὅς', 'who, which'),
    V('ἥ', 'ὅς', 'who (fem.)'),
    V('ὅ', 'ὅς', 'that which'),
    V('οἵ', 'ὅς', 'those who'),
    V('οὗ', 'ὅς', 'whose'),
    V('οὗτος', 'οὗτος', 'this'),
    V('αὕτη', 'οὗτος', 'this (fem.)'),
    V('τοῦτο', 'οὗτος', 'this (thing)'),
    V('ἐκεῖνος', 'ἐκεῖνος', 'that'),
    V('ἐκείνη', 'ἐκεῖνος', 'that (fem.)'),
    V('ὅστις', 'ὅστις', 'whoever'),
    V('ὑπόδημα', 'ὑπόδημα', 'sandal'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "οἳ πενθοῦσιν", the relative is masculine plural because…'),
    options: [
      T('It agrees with the antecedent ("those")'),
      T('It is subject, and subjects are masculine'),
      T('πενθέω governs masculine'),
      T('Every relative is masculine plural'),
    ],
    answer: 0,
    hint: T('Gender/number from antecedent; case from clause — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the genitive: ___ τὸ ὑπόδημα ("whose sandal", Mark 1:7).'),
      answer: 'οὗ',
      hint: T('Relative genitive = possession — rule §2.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐν ἐκείνῃ τῇ ἡμέρᾳ" uses ἐκεῖνος (not οὗτος) because…'),
      options: [
        T('The eschatological Day is distant and dreaded'),
        T('ἡμέρα is masculine'),
        T('οὗτος lacks feminine'),
        T('It is dative of possession'),
      ],
      answer: 0,
      hint: T('Near vs far: the Day is always ἐκεῖνος — rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its class.'),
      pairs: [
        { a: 'οἵ', b: 'relativo' },
        { a: 'οὗτος', b: 'demonstrativo perto' },
        { a: 'ἐκεῖνος', b: 'demonstrativo longe' },
        { a: 'τίς', b: 'interrogativo' },
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
        'Relative: gender and number from the antecedent; case from its own clause. Two questions, two answers.',
      ),
    },
    {
      n: '2',
      text: T(
        'Relative genitive = possession ("whose"): {οὗ}, {ἧς}. Dative + preposition anchors formulas ({ἐν ᾧ}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{οὗτος} = near (space, time, discourse); {ἐκεῖνος} = far. The Day is always {ἐκείνη ἡ ἡμέρα}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Relative + ἄν generalizes: {ὃς ἄν} "whoever". Without ἄν, the relative is definite.',
      ),
    },
  ],
  notes: [
    {
      label: T('Attraction:'),
      text: T(
        'Sometimes the relative is "attracted" into its antecedent\'s case: a Classical phenomenon, rare in Koine, but found in Acts. If the case looks wrong, suspect attraction before suspecting the text.',
      ),
    },
    {
      label: T('ὅδε:'),
      text: T(
        'A third demonstrative, {ὅδε} "this here", is vanishingly rare in the New Testament. Recognize and move on: {οὗτος} and {ἐκεῖνος} suffice.',
      ),
    },
  ],
  examples: [
    { text: '{οἳ πενθοῦσιν}', gloss: T('those who mourn (Matt 5:4)') },
    { text: '{ὃ ἐὰν αἰτήσητε}', gloss: T('whatever you ask (John 14:13)') },
    { text: '{οὗτός ἐστιν}', gloss: T('this is (Matt 3:17)') },
    { text: '{ἐν ἐκείνῃ τῇ ἡμέρᾳ}', gloss: T('on that day (eschatological)') },
    { text: '{οὗ τὸ ὑπόδημα}', gloss: T('whose sandal (Mark 1:7)') },
    { text: '{πάντα δι᾽ αὐτοῦ}', gloss: T('all things through him (John 1:3)') },
    { text: '{αὐτὸς Δαυίδ}', gloss: T('David himself (Mark 12:36)') },
    { text: '{τοῦτο ποιεῖτε}', gloss: T('do this (Luke 22:19)') },
    { text: '{ἐν ᾧ}', gloss: T('in whom (incorporation formula)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('whoever wishes (Mark 8:34)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Relative ὅς (singular)'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{ὅς}', '{ἥ}', '{ὅ}'],
        [T('Genitive'), '{οὗ}', 'ἧς', '{οὗ}'],
        [T('Dative'), '{ᾧ}', 'ᾗ', '{ᾧ}'],
        [T('Accusative'), '{ὅν}', 'ἥν', '{ὅ}'],
      ],
    },
    {
      caption: T('Table 2 — Relative ὅς (plural)'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{οἵ}', '{αἵ}', '{ἅ}'],
        [T('Genitive'), '{ὧν}', '{ὧν}', '{ὧν}'],
        [T('Dative'), '{οἷς}', '{αἷς}', '{οἷς}'],
        [T('Accusative'), '{οὕς}', '{ἅς}', '{ἅ}'],
      ],
    },
    {
      caption: T('Table 3 — Demonstratives (nominative)'),
      head: [T('Pronoun'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        ['este', '{οὗτος}', '{αὕτη}', '{τοῦτο}'],
        ['aquele', '{ἐκεῖνος}', '{ἐκείνη}', '{ἐκεῖνο}'],
      ],
    },
  ],
};
