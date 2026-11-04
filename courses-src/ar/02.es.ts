import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('El artículo y el género'),
  subtitle: T('ال: el sol y la luna'),
  section: T('El nombre'),
  body: C(`## El artículo definido

El artículo {ال} — el equivalente de «o» en portugués — marca definitud: {الكِتَاب} es «el libro», el libro ya conocido. Se une al sustantivo y puede asimilar la consonante inicial: tras {ال} una {د} se vuelve {ذ}, una {ت} se vuelve {ط}, y {ر} o {ز} toman {ش}. Compara {الْمَلِك} y {الْمَلِكَة}: el cambio de tema más {ة} es el otro mecanismo, el género.

## El género

El género no es libre: {الْمَلِك} es masculino y {الْمَلِكَة} femenino, {ابْن} y {ابْنَة} igual. El femenino suele formarse con {ة}, el plural masculino con {ونَ} ({مُؤْمِنُونَ}) frente al femenino {ات} ({كَلِمَات}). El género gobierna la concordancia de todos los adjetivos y participios, así que equivocarse de género rompe la cláusula entera, no solo una palabra.

## Singular, plural y recuento

El sustantivo aparece siempre en forma definida. El plural {كَلِمَات} es más común que el dual, que el árabe trata como categoría propia: {كَلِمَتَانِ} significa «dos palabras» y es el plural más alejado del singular.

## Criterio de lectura

Siempre que veas {ال} en un versículo, pregunta si es el artículo o parte de la raíz. En {الله} y en {الْحَيَاة} va pegado a la palabra; separar el artículo de la raíz cambia el sentido.`),
  vocab: [
    V('الكِتَاب', 'كتاب', 'el libro'),
    V('النُّور', 'نور', 'la luz'),
    V('الشَّمْس', 'شمس', 'el sol'),
    V('القَمَر', 'قمر', 'la luna'),
    V('الْمَلِك', 'ملك', 'el rey'),
    V('الْمَلِكَة', 'ملكة', 'la reina'),
    V('ابْن', 'ابن', 'hijo'),
    V('ابْنَة', 'ابنة', 'hija'),
    V('كَلِمَة', 'كلمة', 'palabra'),
    V('كَلِمَات', 'كلمة', 'palabras'),
    V('مُؤْمِن', 'مؤمن', 'creyente'),
    V('مُؤْمِنُونَ', 'مؤمن', 'creyentes'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se pronuncia {الشَّمْس}?'),
    options: [T('al-šams'), T('aš-šams'), T('šams-al'), T('a-šams sin artículo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona sustantivo y género.'),
      pairs: [
        { a: T('rey'), b: T('masc.') },
        { a: T('reina'), b: T('fem.') },
        { a: T('hija'), b: T('fem.') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Plural de {كَلِمَة}.'),
      answer: 'كَلِمَات',
      hint: T('Usa el plural -{ات}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra empieza por letra solar?'),
      options: [T('la luna'), T('el sol'), T('el libro'), T('la vida')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('El artículo definido es {ال}: {كِتَاب} → {الكِتَاب}.') },
    { n: '2', text: T('Tras una letra solar, pronuncia {ال} como a- y omite {ل}.') },
    {
      n: '3',
      text: T(
        'El femenino léxico suele terminar en {ـة}; el plural regular {-ات} es una pista forte.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atención'),
      text: T(
        'La asimilación es fonética, no ortográfica: la lām inicial sigue escrita, pero no suena.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('aš-šams — el sol') },
    { text: 'القَمَر', gloss: T('al-qamar — la luna') },
    { text: 'كَلِمَات', gloss: T('kalimāt — palabras') },
  ],
  tables: [
    {
      caption: T('Letras solares y lunares'),
      head: [T('Tipo'), T('Letras'), T('Pronunciación inicial')],
      rows: [
        ['solares', 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن', 'aš-šams: no se oye l'],
        ['lunares', 'remaining connected letters', 'al-qamar: se oye l'],
      ],
    },
    {
      caption: T('Género y plural'),
      head: [T('Categoría'), T('Singular'), T('Plural')],
      rows: [
        ['masculino', 'مَلِك m.', 'مُلُوك'],
        ['feminino -ة', 'مَلِكَة', 'مَلِكَات'],
        ['masculino humano regular', 'مُؤْمِن', 'مُؤْمِنُونَ'],
        ['feminino -ة', 'سَمَاء', 'سَمَاوَات'],
      ],
    },
  ],
};
