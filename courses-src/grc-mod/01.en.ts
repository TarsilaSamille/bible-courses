import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The definite article'),
  subtitle: T('ο, η, το — nominative'),
  section: T('The noun'),
  body: C(`Modern Greek keeps the definite article, but its inflection has been greatly simplified. Nominative and accusative have only two morphological series. The neuter preserves the oldest feature: τ- in the singular (το) and τ- in the plural (τα), while ο- serves for masculine and feminine.

Agreement is obligatory: ο άνθρωπος, η γυναίκα, το παιδί. The article makes reference specific or necessary; without it, άνθρωπος may refer to humanity or to “a person”.

The plural combines in οι for masculine and feminine. This fusion reduces the old four-case endings and marks an important difference from Koine, where οἱ, αἱ, τά and τοῖς, ταῖς, τοῖς still existed.

In Spanish the article is often omitted with abstract, generic or plural nouns. Greek does not: Θεός can mean “god” or “God”, but η ζωή κάθεται εδώ normally needs an article. A useful frame is “a definite adjective plus a noun”: «the true man» is ο πραγματικός άνθρωπος. Compare the Spanish forms for help, not for automatic word-for-word transfer.`),
  vocab: [
    V('ο', 'ο', 'the (masculine singular)'),
    V('η', 'ο', 'the (feminine singular)'),
    V('το', 'ο', 'the (neuter singular)'),
    V('οι', 'ο', 'the (masculine plural)'),
    V('τα', 'ο', 'the (neuter plural)'),
    V('άνθρωπος', 'άνθρωπος', 'man, person'),
    V('γυναίκα', 'γυναίκα', 'woman'),
    V('παιδί', 'παιδί', 'child'),
    V('τας', 'ο', 'the (feminine plural)'),
    V('Θεός', 'Θεός', 'God'),
    V('ζωή', 'ζωή', 'life'),
    V('καλός', 'καλός', 'good'),
    V('καλή', 'καλός', 'good (feminine)'),
    V('πραγματικός', 'πραγματικός', 'true, real'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the feminine singular article?'),
    options: [T('ο'), T('η'), T('το'), T('οι')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: ___ παιδί'), answer: 'το', hint: T('Neuter singular.') },
    {
      kind: 'choose',
      prompt: T('Which article goes with γυναίκα?'),
      options: [T('ο'), T('η'), T('το'), T('οι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match article and gender'),
      pairs: [
        { a: 'ο', b: T('masculine') },
        { a: 'η', b: T('feminine') },
        { a: 'το', b: T('neuter') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('The article agrees in gender and number.') },
    { n: '§2', text: T('οι marks both masculine and feminine plural.') },
  ],
  notes: [
    {
      label: T('Demotic × Koine'),
      text: T(
        'Masculine and feminine plural could already be οι in late Koine, but the eight-form article pattern does not survive in Demotic Greek.',
      ),
    },
  ],
  examples: [
    { text: 'ο καλός άνθρωπος', gloss: T('the good man') },
    { text: 'η καλή γυναίκα', gloss: T('the good woman') },
  ],
  tables: [
    {
      caption: T('Article paradigms'),
      head: ['Número', 'Masculino', 'Feminino', 'Neutro'],
      rows: [
        ['Singular', 'ο', 'η', 'το'],
        ['Plural', 'οι', 'οι', 'τα'],
      ],
    },
  ],
};
