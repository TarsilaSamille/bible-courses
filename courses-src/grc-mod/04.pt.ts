import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('είμαι e έχω'),
  subtitle: T('ser/estar e ter'),
  section: T('O verbo'),
  body: C(`είμαι e έχω são irregulares e muito frequentes. είμαι expressa identidade, estado ou localização: είμαι Έλληνας «sou grego», είμαι καλά «estou bem», είμαι στο σπίτι «estou em casa». έχω expressa posse ou experiência: έχω αυτοκίνητο «tenho carro», έχω δει «tenho visto».

Os pronomes normalmente ficam implícitos na terminação. εγώ ο άνθρωπος «eu sou o homem» acrescenta informação que o verbo já não expressa.

El presente expresa hechos, hábitos y estados. είμαι tiene una forma enfática y otra enclítica; esta última puede ir detrás del verbo o aparecer después de εδώ.

No confundas έχω con εἰμί del koiné: ambos proceden de verbos distintos, aunque a veces se traducen igual en frases existenciales. En moderno έχω ένα πρόβλημα significa «tengo un problema», no «existo».`),
  vocab: [
    V('είμαι', 'είμαι', 'sou; estou'),
    V('είσαι', 'είμαι', 'és; estás'),
    V('είναι', 'είμαι', 'é; está'),
    V('είμαστε', 'είμαι', 'somos; estamos'),
    V('είστε', 'είμαι', 'sois; estais'),
    V('είναι', 'είμαι', 'são; estão'),
    V('έχω', 'έχω', 'tenho'),
    V('έχει', 'έχω', 'tem'),
    V('έχουν', 'έχω', 'têm'),
    V('καλά', 'καλός', 'bem (advérbio)'),
    V('εγώ', 'εγώ', 'eu'),
    V('αυτός', 'αυτός', 'ele'),
    V('σπίτι', 'σπίτι', 'casa'),
    V('πρόβλημα', 'πρόβλημα', 'problema'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('εγώ ___ καλά'),
    answer: 'είμαι',
    hint: T('Primeira pessoa de είμαι'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual forma completa: εμείς ___'),
      options: [T('είμαι'), T('είσαι'), T('είμαστε'), T('είναι')],
      answer: 2,
    },
    {
      kind: 'fill',
      prompt: T('Traduza: έχουμε χρόνο'),
      answer: 'temos tempo',
      hint: T('έχουμε = tenemos'),
    },
    {
      kind: 'match',
      prompt: T('Associe sujeito e verbo'),
      pairs: [
        { a: 'αυτός', b: 'έχει' },
        { a: 'εσείς', b: 'είστε' },
        { a: 'αυτοί', b: 'έχουν' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('είμαι + substantivo nomeia identidade ou profissão.') },
    { n: '§2', text: T('έχω indica posse; não é o verbo da existência.') },
  ],
  notes: [
    {
      label: T('Locução'),
      text: T('Έχει δίκιο significa «tem razão»; se prefere έχεις δίκιο, «tens razão».'),
    },
  ],
  examples: [
    { text: 'εγώ είμαι Έλληνας', gloss: T('eu sou grego') },
    { text: 'έχω δύο αδελφούς', gloss: T('tenho dois irmãos') },
  ],
  tables: [
    {
      caption: T('Presente'),
      head: ['Pronome', 'είμαι', 'έχω'],
      rows: [
        ['εγώ', 'είμαι', 'έχω'],
        ['εσύ', 'είσαι', 'έχεις'],
        ['αυτός/αυτή', 'είναι', 'έχει'],
        ['εμείς', 'είμαστε', 'έχουμε'],
        ['εσείς', 'είστε', 'έχετε'],
        ['αυτοί', 'είναι', 'έχουν'],
      ],
    },
  ],
};
