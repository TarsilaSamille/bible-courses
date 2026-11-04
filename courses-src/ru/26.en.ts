import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Prepositions and cases'),
  subtitle: T('в, на, с, к, о, у, от, до, про'),
  section: T('Syntax and translation'),
  body: C(
    'A preposition selects a case, but may select different cases. в + prepositional marks location: в начале; в + accusative marks direction inward: в храм. на + prepositional marks location: на небе; на + accusative direction: на стену. с + instrumental marks accompaniment: с Богом; с + genitive marks origin: с неба. к + dative means to: к Богу. от + genitive means from: от Бога. до + genitive means until: до конца. у + genitive means near: у Бога. о + prepositional means about: о Боге. про + prepositional means concerning: говорить про. The prepositional case has no zero ending: о Боге but о слове. Before consonant clusters в and на take о or и: во храм, на небе. The traditional Creed says Верую, not Верую во: the short form верю has zero ending.',
  ),
  vocab: [
    V('в храм', 'храм', 'into the temple'),
    V('на небо', 'небо', 'to heaven'),
    V('с неба', 'небо', 'from heaven'),
    V('к Богу', 'бог', 'to God'),
    V('от Бога', 'бог', 'from God'),
    V('до конца', 'конец', 'to the end'),
    V('о Боге', 'бог', 'about God'),
    V('о слове', 'слово', 'about the word'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which case occurs in в храм?'),
    options: [T('Prepositional'), T('Accusative'), T('Genitive')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: к Бог…'), answer: 'у' },
    { kind: 'fill', prompt: T('Complete: с неб… (from heaven)'), answer: 'а' },
    {
      kind: 'choose',
      prompt: T('Which preposition governs the instrumental for “with”?'),
      options: [T('от'), T('с'), T('у')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('First identify location or direction; then choose the governed case.') },
  ],
  notes: [
    {
      label: T('The preposition does not fix the case'),
      text: T(
        'One preposition can govern more than one case, and sense makes the choice. {в} with place is prepositional, {в} with motion into is accusative: one word, opposite cases.',
      ),
    },
  ],
  examples: [
    { text: 'в начале', gloss: T('in the beginning') },
    { text: 'в храм', gloss: T('into the temple') },
  ],
  tables: [
    {
      caption: T('Prepositions and government'),
      head: ['Preposição', 'Caso', 'Exemplo'],
      rows: [
        ['в', 'prepositivo / acusativo', 'в начале / в храм'],
        ['на', 'prepositivo / acusativo', 'на небе / на небо'],
        ['с', 'instrumental / genitivo', 'с Богом / с неба'],
        ['к', 'dativo', 'к Богу'],
        ['о, про', 'preposicional', 'о Боге / про Бога'],
        ['у, от, до', 'genitivo', 'у Бога / от Бога / до конца'],
      ],
    },
  ],
};
