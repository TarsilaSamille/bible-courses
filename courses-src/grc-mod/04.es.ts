import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('είμαι y έχω'),
  subtitle: T('ser/estar y tener'),
  section: T('El verbo'),
  body: C(`είμαι y έχω son irregulares y muy frecuentes. είμαι expresa identidad, estado o lugar: είμαι Έλληνας «soy griego», είμαι καλά «estoy bien», είμαι στο σπίτι «estoy en casa». έχω expresa posesión o experiencia: έχω αυτοκίνητο «tengo coche», έχω δει «he visto».

Los pronomas suelen quedar implícitos en la terminación. ο άνθρωπος «el hombre» y εγώ ο άνθρωπος «yo soy el hombre» aportan información distinta.

El presente sirve para hechos, hábitos y estados. είμαι tiene dos formas: la tónica se usa ante topónimos y con valor enfático; la enclítica puede ir detrás del verbo y también aparece después de εδώ. Así, είμαι εγώ es posible, pero εδώ είμαι es habitual al anunciar presencia.

No confundas έχω con el koiné εἰμί: proceden de verbos distintos, aunque algunos contextos existenciales reciben la misma traducción. En moderno έχω ένα πρόβλημα significa «tengo un problema», no «existo».`),
  vocab: [
    V('είμαι', 'είμαι', 'soy; estoy'),
    V('είσαι', 'είμαι', 'eres; estás'),
    V('είναι', 'είμαι', 'es; está'),
    V('είμαστε', 'είμαι', 'somos; estamos'),
    V('είστε', 'είμαι', 'sois; estáis'),
    V('είναι', 'είμαι', 'son; están'),
    V('έχω', 'έχω', 'tengo'),
    V('έχει', 'έχω', 'tiene'),
    V('έχουν', 'έχω', 'tienen'),
    V('καλά', 'καλός', 'bien (adverbio)'),
    V('εγώ', 'εγώ', 'yo'),
    V('αυτός', 'αυτός', 'él'),
    V('σπίτι', 'σπίτι', 'casa'),
    V('πρόβλημα', 'πρόβλημα', 'problema'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('εγώ ___ καλά'),
    answer: 'είμαι',
    hint: T('Primera persona de είμαι'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué forma completa: εμείς ___'),
      options: [T('είμαι'), T('είσαι'), T('είμαστε'), T('είναι')],
      answer: 2,
    },
    {
      kind: 'fill',
      prompt: T('Traduce: έχουμε χρόνο'),
      answer: 'temos tempo',
      hint: T('έχουμε = tenemos'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona sujeto y verbo'),
      pairs: [
        { a: 'αυτός', b: 'έχει' },
        { a: 'εσείς', b: 'είστε' },
        { a: 'αυτοί', b: 'έχουν' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('είμαι + sustantivo expresa identidad o profesión.') },
    { n: '§2', text: T('έχω expresa posesión; no es el verbo de la existencia.') },
  ],
  notes: [
    {
      label: T('Locución'),
      text: T('Έχει δίκιο significa «tiene razón»; se prefiere έχεις δίκιο, «tienes razón».'),
    },
  ],
  examples: [
    { text: 'εγώ είμαι Έλληνας', gloss: T('yo soy griego') },
    { text: 'έχω δύο αδελφούς', gloss: T('tengo dos hermanos') },
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
