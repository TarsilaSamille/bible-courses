import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('O artigo definido'),
  subtitle: T('ο, η, το — nominativo'),
  section: T('O nome'),
  body: C(`O grego moderno conserva o artigo definido, mas a flexão foi drasticamente simplificada. No nominativo e no acusativo há apenas duas séries morfológicas. O neutro conserva o traço mais antiguo: usa τ- no singular (το) e τ- no plural (τα), enquanto ο- serve para masculino y femenino.

A concordância é obrigatória: ο άνθρωπος, η γυναίκα, το παιδί. O artigo torna a referencia específica o necesaria; sin él, άνθρωπος puede designar a la humanidad o a «una persona».

El plural combina en οι para masculino y femenino. La fusión reduce el antiguo sistema de cuatro Terminaciones y marca una diferencia importante respecto del koiné, donde aún era posible οἱ, αἱ, τά y τοῖς, ταῖς, τοῖς.

En español, el artículo suele ometerse cuando el sustantivo es abstracto, genérico o plural. El griego no lo hace: Θεός es «dios» o «Dios», pero η ζωή κάθεται εδώ suele requerir artículo. La proporción segura es la de un sustantivo definido más un nombre: «el hombre verdadero» se expresa ο πραγματικός άνθρωπος. La comparación con el español sirve como aproximación, no como transposición automática.`),
  vocab: [
    V('ο', 'ο', 'o (masculino singular)'),
    V('η', 'ο', 'a (feminino singular)'),
    V('το', 'ο', 'o (neutro singular)'),
    V('οι', 'ο', 'os (masculino plural)'),
    V('τα', 'ο', 'os (neutro plural)'),
    V('άνθρωπος', 'άνθρωπος', 'homem, pessoa'),
    V('γυναίκα', 'γυναίκα', 'mulher'),
    V('παιδί', 'παιδί', 'criança'),
    V('τας', 'ο', 'as (feminino plural)'),
    V('Θεός', 'Θεός', 'Deus'),
    V('ζωή', 'ζωή', 'vida'),
    V('καλός', 'καλός', 'bom'),
    V('καλή', 'καλός', 'boa (feminino)'),
    V('πραγματικός', 'πραγματικός', 'verdadeiro, real'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o artigo feminino singular?'),
    options: [T('ο'), T('η'), T('το'), T('οι')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: ___ παιδί'), answer: 'το', hint: T('Neutro singular.') },
    {
      kind: 'choose',
      prompt: T('Qual artigo acompanha γυναίκα?'),
      options: [T('ο'), T('η'), T('το'), T('οι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe artigo e gênero'),
      pairs: [
        { a: 'ο', b: T('masculino') },
        { a: 'η', b: T('feminino') },
        { a: 'το', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('O artigo concorda em gênero e número.') },
    { n: '§2', text: T('οι marca tanto o masculino plural quanto o feminino plural.') },
  ],
  notes: [
    {
      label: T('Demótico × koiné'),
      text: T(
        'O plural masculino e feminino já podia ser οι no koiné tardio, mas o padrão de oito formas do artigo não sobrevive ao grego demótico.',
      ),
    },
  ],
  examples: [
    { text: 'ο καλός άνθρωπος', gloss: T('o bom homem') },
    { text: 'η καλή γυναίκα', gloss: T('a boa mulher') },
  ],
  tables: [
    {
      caption: T('Paradigmas do artigo'),
      head: ['Número', 'Masculino', 'Feminino', 'Neutro'],
      rows: [
        ['Singular', 'ο', 'η', 'το'],
        ['Plural', 'οι', 'οι', 'τα'],
      ],
    },
  ],
};
