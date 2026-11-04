import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('per- and ke- prefixes; -an suffix'),
  subtitle: T('pergi, kehendak, makanan'),
  section: T('The noun'),
  body: C(`These three patterns expand nouns and verbs, but their values are not interchangeable.

per- + verb, often with -kan, expresses separation or completion of a process: {pergi} “to go,” {perjalanan} “journey,” {berpisah} “to separate.” {per-…-kan} may express prolonged action and causation: {menjalankan} “to make run”; {memperlihatkan} “to show”; {mempersembahkan} “to offer/present.” The element {kan} does not mean past.

ke- + noun + -an indicates a result, domain, totality, or collection: {ke- + behem → keberadaan}, {ke- + hendak + -an → kehendak}, {ke- + raja + -an → kerajaan}. The {ea} sequence in these nouns reflects a historical process and is not a rule that every ke-an follows.

Historically, {kebenaran} can be analyzed as {ke- + benar + -an}, but it means “truth, righteousness, faithfulness” according to context. {Kerajaan} means “kingdom” and can work metaphorically: {Kerajaan Allah} “Kingdom of God.”

Nominal -an forms a tool, product, action/instance, or domain: {-an + makan → makanan} “food” (literally “that which is eaten”); {-an + tulis → tulisan} “writing”; {-an + baca → bacaan} “reading.” Not every -an form contains ke-.`),
  vocab: [
    V('pergi', 'pergi', 'to go, leave'),
    V('perjalanan', 'jalan', 'journey, travel'),
    V('berpisah', 'pisah', 'to separate, part'),
    V('menjalankan', 'jalan', 'to make run; run'),
    V('memperlihatkan', 'lihat', 'to show'),
    V('mempersembahkan', 'sembah', 'to offer, present'),
    V('kehendak', 'hendak', 'will, desire'),
    V('kerajaan', 'raja', 'kingdom'),
    V('kebenaran', 'benar', 'truth, righteousness, faithfulness'),
    V('makanan', 'makan', 'food'),
    V('minuman', 'minum', 'drink'),
    V('tulisan', 'tulis', 'writing'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the best analysis of {kerajaan}?'),
    options: [
      T('ke- + raja + -an, “kingdom”'),
      T('ke- = past + -an = plural'),
      T('ke- = negation + -an = object'),
      T('ke- = place + -an = futuro'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Allah ___ kami” = “God reaches us” .'),
      answer: 'mencapai',
      hint: T('Verb: meN- + capai.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is an abstract noun with -an?'),
      options: [T('kebenaran'), T('buku'), T('kamu'), T('saya')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('{Ke-} commonly changes the root vowel: {raja} → {kerajaan}, {hendak} → {kehendak}.'),
    },
    {
      n: '2',
      text: T(
        'Combination of {per-}, {ke-}, and {-an} is not fully free. Established forms cannot be derived by mechanical rules alone.',
      ),
    },
    {
      n: '3',
      text: T(
        'In {mempersembahkan}, {per-} foregrounds completion of the action and {-kan} highlights the object or result; do not literally translate the affix bundle.',
      ),
    },
  ],
  notes: [
    {
      label: T('Etymology'),
      text: T(
        '{Ke-} is the same prefix seen in {kedua} “two” and {kepada} “to”; {-an} also occurs without ke-.',
      ),
    },
  ],
  examples: [
    { text: 'Yesus pergi ke bukit.', gloss: T('Jesus went to the hill.') },
    { text: 'Jadilah kehendak-Mu.', gloss: T('May your will be done.') },
    { text: 'Matius menerima makanan.', gloss: T('Matthew receives food.') },
  ],
  tables: [
    {
      caption: T('Patterns and values'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['per- + V', T('go, separate, complete'), '{pergi} «irse»'],
        ['per-…-kan', T('make/do fully'), '{menjalankan} «hacer correr»'],
        ['ke-…-an', T('result, domain, collection'), '{kerajaan} «reino»'],
        ['-an', T('product, tool, activity'), '{makanan} «comida»'],
      ],
    },
  ],
};
