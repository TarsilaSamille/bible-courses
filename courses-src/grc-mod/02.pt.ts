import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Substantivos e plural'),
  subtitle: T('ο άνθρωπος — οι άνθρωποι'),
  section: T('O nome'),
  body: C(`O substantivo grego conserva gênero, mas perdeu a declinação antigua: nominativo e acusativo terminam igual. O plural depende sobretudo da-terminal.

Masculinos em -ος formam normalmente -οι: άνθρωπος → άνθρωποι. Femininos terminados em -α, -η ou -η/-ια formam -ες: γυναίκα → γυναίκες, ώρα → ώρες. Neutros em -ί, -ος, -ός, -υς e algunsemas consonant hace -ια: παιδί → παιδιά, βιβλίο → βιβλία.

Há exceções: το δίχτυ → τα δίχτυα, το χρώμα → τα χρώματα, το μέρος → τα μέρη. El artículo siempre acompaña.

El vocativo es formal y aparece sobre todo en textos literarios o religiosos: Κύριε, Πατέρ. En el uso cotidiano se usa el nominativo: Θεός μου. La oposición con el vocativo antiguo es clara: Κύριος, el nomina; κύριος, el vocativo antiguo; Κύριε, el vocativo moderno y también una forma litúrgica conservada.`),
  vocab: [
    V('άνθρωπος', 'άνθρωπος', 'homem; pessoa'),
    V('άνθρωποι', 'άνθρωπος', 'homens; pessoas'),
    V('γυναίκα', 'γυναίκα', 'mulher'),
    V('γυναίκες', 'γυναίκα', 'mulheres'),
    V('παιδί', 'παιδί', 'criança'),
    V('παιδιά', 'παιδί', 'crianças'),
    V('βιβλίο', 'βιβλίο', 'livro'),
    V('βιβλία', 'βιβλίο', 'livros'),
    V('ζωή', 'ζωή', 'vida'),
    V('θάνατος', 'θάνατος', 'morte'),
    V('μητέρα', 'μητέρα', 'mãe'),
    V('ώρα', 'ώρα', 'hora'),
    V('Κύριε', 'Κύριος', 'Senhor (vocativo)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Plural de το βιβλίο'),
    answer: 'τα βιβλία',
    hint: T('Artigo neutro plural + -ια'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o plural de η γυναίκα?'),
      options: [T('οι γυναίκα'), T('οι γυναίκες'), T('τα γυναίκες'), T('οι γυναίκια')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: ο άνθρωπος — ___ άνθρωποι'),
      answer: 'οι',
      hint: T('Artículo masculino plural'),
    },
    {
      kind: 'choose',
      prompt: T('Como aparece normalmente ο Κύριος ao dirigir-se a alguém?'),
      options: [T('κύριος'), T('Κύριε'), T('Κύριον'), T('Κυρίων')],
      answer: 1,
    },
  ],
  rules: [
    { n: '§1', text: T('Nominativo e acusativo são idênticos no substantivo.') },
    { n: '§2', text: T('O plural deve ser aprendido com o artigo correspondente.') },
  ],
  notes: [
    {
      label: T('Atenção'),
      text: T('A terminação não basta para decidir o gênero: τα λεφτά, τα παντελόνια e τα παγωτά.'),
    },
  ],
  examples: [
    { text: 'η μητέρα μου', gloss: T('minha mãe') },
    { text: 'τα παιδιά παίζουν', gloss: T('as crianças brincam') },
  ],
  tables: [
    {
      caption: T('Plurais usuais'),
      head: ['Tipo', 'Singular', 'Plural'],
      rows: [
        ['masc. -ος', 'ο άνθρωπος', 'οι άνθρωποι'],
        ['fem. -α', 'η γυναίκα', 'οι γυναίκες'],
        ['neut. -ί', 'το παιδί', 'τα παιδιά'],
        ['neut. -ο', 'το βιβλίο', 'τα βιβλία'],
      ],
    },
  ],
};
