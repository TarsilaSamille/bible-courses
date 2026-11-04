import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Classifiers and quantity'),
  subtitle: T('seorang, seekor, sebiji, sebuah'),
  section: T('The noun'),
  body: C(`When counting entities, Indonesian may insert a classifier: {tiga orang murid} = “three persons [who are] disciples” = “three disciples.” It indicates category and does not mark gender.

CLASSIFIERS
• {orang} people: {seorang murid}, {dua orang guru}.
• {ekor} small/domestic animals: {seekor domba}, {dua ekor ayam}.
• {biji} grains and small fruits: {sebiji sesawi}, {dua biji batu}.
• {buah} outlined or general objects: {sebuah roti}, {dua buah bola}. For instruments, prefer {bilah} for a stretch of scenery, {gelas} for a cup, {lembar} for a sheet/page, and a more specific classifier when possible.

{se-} + classifier = “one”: {seorang} “a person,” {seekor} “an animal,” {sebiji} “a grain,” {sebuah} “an object.” In ordinary plural counting, use the natural numeral: {tiga orang}, {dua ekor}, {tiga biji}; {tiga orang} does not require a count noun.

{para} + noun can form a definite plural: {para murid} “the disciples,” {para rasul} “the apostles.” In context, {murid} alone may mean “student” or “disciple,” according to the story.

{Semua} = “all”; {semua orang} = “everyone.” {Banyak} = “many,” placed before the noun: {banyak ikan} “many fish.” Numeral {-an} can express “one of,” but is restricted; use established forms such as {seorang} and {satu}. In John 6:9, use the established counted noun {roti} “loaf.”`),
  vocab: [
    V('orang', 'orang', 'person; person classifier'),
    V('ekor', 'ekor', 'animal classifier'),
    V('biji', 'biji', 'grain classifier'),
    V('buah', 'buah', 'general classifier; fruit'),
    V('seorang', 'orang', 'a person'),
    V('seekor', 'ekor', 'an animal'),
    V('sebiji', 'biji', 'a grain'),
    V('sebuah', 'buah', 'an object, a piece'),
    V('guru', 'guru', 'teacher'),
    V('domba', 'domba', 'sheep'),
    V('sesawi', 'sesawi', 'mustard'),
    V('semua', 'semua', 'all'),
    V('banyak', 'banyak', 'many'),
    V('para murid', 'murid', 'the disciples'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: “seekor ___” = “one sheep.”'),
    options: [T('domba'), T('orang'), T('biji'), T('banyak')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “tiga ___ murid” = “three disciples.”'),
      answer: 'orang',
      hint: T('Person classifier.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is most natural for “many fish”?'),
      options: [
        T('banyak ikan'),
        T('banyak ikan-ikan'),
        T('semua ikan seekor'),
        T('banyak seekor ikan'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The classifier can be omitted: {tiga murid} = “three disciples” is more common than the long form.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Seekor} contains {se-} + {ekor}, but {se-} does not appear separately in {tiga ekor}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The plural noun {ikan} does not change; {banyak ikan} means “many fish,” even without reduplication.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precision'),
      text: T('{Ekor} can also be used jokingly for people; context is then indispensable.'),
    },
  ],
  examples: [
    { text: 'Tiga orang murid membaca.', gloss: T('Three disciples read.') },
    { text: 'Yesus melihat seekor domba.', gloss: T('Jesus sees one sheep.') },
    { text: 'Iman sebesar biji sesawi.', gloss: T('Faith as small as a mustard seed.') },
  ],
  tables: [
    {
      caption: T('Common classifiers'),
      head: ['Classificador', 'Categoria', 'ES'],
      rows: [
        ['seorang', T('person'), '{seorang murid}'],
        ['seekor', T('animal'), '{seekor domba}'],
        ['sebiji', T('grain/small fruit'), '{sebiji sesawi}'],
        ['sebuah', T('object/piece'), '{sebuah roti}'],
      ],
    },
  ],
};
