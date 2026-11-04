import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('-kan, -i suffixes and reduplication'),
  subtitle: T('membacakan, mendengarkan, anak-anak'),
  section: T('The noun'),
  body: C(`Prefix-formed verbs can take suffixes that change the participant, direction, or intensity.

{-kan} often makes the object a beneficiary: {membaca} “to read” → {membacakan} “to read to someone.” {Memberikan} means “to give”; {menjadikan} “to make something something” or “to consider something as”; {melepaskan} “to release.” Exact sense depends on the root, so learn the full lexical form.

{-i} mainly occurs with meN- and often marks deliberate, repeated, or intensified action: {mendengar} “to hear” → {mendengarkan} “to listen attentively”; {membaca} → {membaci} “to read in a certain way”; {menaiki} “to climb onto”; {memakai} “to use”; {memenuhi} “to fulfill/fill.”

Root reduplication marks plurality or distribution: {buku-buku} “books,” {anak-anak} “children.” In {berjalan-jalan} “to stroll” and {berbicara-bicara} “to converse,” the effect is distributive. For variety, use the full forms {berbagai-bagi} “various” and {mana-mana} “all kinds of.”

Comparison: {lebih + adjective + daripada} = “more … than”; {paling + adjective} = “most”; {terbaik} is lexical or elided superlative.`),
  vocab: [
    V('membacakan', 'baca', 'to read to someone'),
    V('memberikan', 'beri', 'to give'),
    V('menjadikan', 'jadi', 'to make, consider as'),
    V('mendengarkan', 'dengar', 'to listen attentively'),
    V('melepaskan', 'lepas', 'to release'),
    V('menaiki', 'naik', 'to climb onto, mount'),
    V('memakai', 'pakai', 'to use, wear'),
    V('memenuhi', 'penuh', 'to fulfill, fill'),
    V('buku-buku', 'buku', 'books'),
    V('anak-anak', 'anak', 'children'),
    V('berjalan-jalan', 'jalan', 'to stroll'),
    V('berbagai-bagi', 'berbagai', 'various'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which difference is most accurate?'),
    options: [
      T('{mendengar} = hear; {mendengarkan} = listen attentively on purpose'),
      T('The first is past and the second future'),
      T('The first is formal and the second informal'),
      T('They are exact synonyms in this context'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “tiga anak-___” = “three children.”'),
      answer: 'anak',
      hint: T('Repeat the whole root.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the natural structure for “more loving than”?'),
      options: [T('better than'), T('pada kasih lebih'), T('kasih daripada lebih')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Not every root freely accepts -kan and -i. The dictionary and attested usage reveal the structure; do not invent combinations.',
      ),
    },
    {
      n: '2',
      text: T(
        'Partial reduplication repeats the initial syllable; full reduplication repeats the whole root: {buku-buku} and {anak-anak}.',
      ),
    },
    {
      n: '3',
      text: T(
        'In {berjalan-jalan} and {berbicara-bicara}, {ber-} also reduplicates, strengthening the distributive value.',
      ),
    },
  ],
  notes: [
    {
      label: T('Learning tip'),
      text: T(
        'Learn each complete verb with an example: {memberikan}, not just {beri}; affixes change meaning.',
      ),
    },
  ],
  examples: [
    { text: 'Ibu membacakan cerita kepada anak.', gloss: T('Mother reads a story to the child.') },
    {
      text: 'Saudara mendengarkan Firman.',
      gloss: T('The brother listens attentively to the Word.'),
    },
    { text: 'Allah memberi kasih karunia kepada kita.', gloss: T('God gives us grace.') },
  ],
  tables: [
    {
      caption: T('Pairs with shifted meaning'),
      head: ['Base', 'Derivado', 'ES'],
      rows: [
        ['mendengar', 'mendengarkan', T('hear × listen attentively')],
        ['memberi', 'memberikan', T('give something to someone')],
        ['naik', 'menaiki', T('go up × climb onto something')],
      ],
    },
  ],
};
