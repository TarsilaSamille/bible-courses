import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('El artículo definido'),
  subtitle: T('ο, η, το — nominativo'),
  section: T('El nombre'),
  body: C(`El griego moderno conserva el artículo definido, pero su flexión se ha simplificado mucho. En nominativo y acusativo quedan dos series morfológicas. El neutro conserva el rasgo más antiguo: usa τ- en singular (το) y τ- en plural (τα), mientras ο- sirve para masculino y femenino.

La concordancia es obligatoria: ο άνθρωπος, η γυναίκα, το παιδί. El artículo hace específica o necesaria la referencia; sin él, άνθρωπος puede designar a la humanidad o a «una persona».

El plural sefusiona en οι para masculino y femenino. Esta reducción de los antiguos casos marca una diferencia importante respecto del koiné, donde todavía existían οἱ, αἱ, τά y τοῖς, ταῖς, τοῖς.

En español se omite a menudo el artículo ante nombres abstractos, genéricos o plurales. El griego no lo hace: Θεός puede significar «dios» o «Dios», pero η ζωή κάθεται εδώ suele necesitar artículo. Un modelo útil es «adjetivo definido + sustantivo»: «el hombre verdadero» se expresa ο πραγματικός άνθρωπος. La comparación con el español sirve como apoyo, no como transferencia automática.`),
  vocab: [
    V('ο', 'ο', 'el (masculino singular)'),
    V('η', 'ο', 'la (femenino singular)'),
    V('το', 'ο', 'el (neutro singular)'),
    V('οι', 'ο', 'los (masculino plural)'),
    V('τα', 'ο', 'los (neutro plural)'),
    V('άνθρωπος', 'άνθρωπος', 'hombre, persona'),
    V('γυναίκα', 'γυναίκα', 'mujer'),
    V('παιδί', 'παιδί', 'niño, niña'),
    V('τας', 'ο', 'las (femenino plural)'),
    V('Θεός', 'Θεός', 'Dios'),
    V('ζωή', 'ζωή', 'vida'),
    V('καλός', 'καλός', 'bueno'),
    V('καλή', 'καλός', 'buena (femenino)'),
    V('πραγματικός', 'πραγματικός', 'verdadero, real'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el artículo femenino singular?'),
    options: [T('ο'), T('η'), T('το'), T('οι')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: ___ παιδί'), answer: 'το', hint: T('Neutro singular.') },
    {
      kind: 'choose',
      prompt: T('¿Qué artículo acompaña a γυναίκα?'),
      options: [T('ο'), T('η'), T('το'), T('οι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona artículo y género'),
      pairs: [
        { a: 'ο', b: T('masculino') },
        { a: 'η', b: T('femenino') },
        { a: 'το', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('El artículo concuerda en género y número.') },
    { n: '§2', text: T('οι marca tanto el masculino plural como el femenino plural.') },
  ],
  notes: [
    {
      label: T('Demótico × koiné'),
      text: T(
        'El plural masculino y femenino ya podía ser οι en koiné tardío, pero el patrón de ocho formas no sobrevive en el demótico.',
      ),
    },
  ],
  examples: [
    { text: 'ο καλός άνθρωπος', gloss: T('el buen hombre') },
    { text: 'η καλή γυναίκα', gloss: T('la buena mujer') },
  ],
  tables: [
    {
      caption: T('Paradigmas del artículo'),
      head: ['Número', 'Masculino', 'Feminino', 'Neutro'],
      rows: [
        ['Singular', 'ο', 'η', 'το'],
        ['Plural', 'οι', 'οι', 'τα'],
      ],
    },
  ],
};
