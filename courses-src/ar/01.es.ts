import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('El alfabeto árabe'),
  subtitle: T('28 letras, de derecha a izquierda'),
  section: T('Alfabeto y escritura'),
  body: C(`## La dirección de la escritura

El árabe se lee y se escribe de DERECHA a IZQUIERDA, y las letras cambian de forma según la posición: inicial, media, final o aislada. En {الْكَلِمَةُ} la letra {ك} tiene una forma distinta de cuando está sola, y lo mismo vale para las demás. La puntuación es opcional en la escritura tradicional: la lectura se orienta por el contexto.

## Las 28 letras

Son 28 letras, más {ة} y {ء} — que la recuento tradicional trata como formas aparte. Compara los sonidos con el latín: {ب} [b] y {ت} [t] coinciden; {ج} tiene [ʒ] y {غ} tiene [ɣ], ambos ausentes en el portugués; {ح} y {ه} son fuertes, y también {خ} y {ه}. La letra {ع} no tiene equivalente en portugués: es una faringal.

## Formas de unión

Una letra cambia de forma cuando se une a la siguiente. Esto vale para {بـ-ب-ب} y para las demás; solo seis letras — {ا د ذ ر ز و} — no se unen a lo que sigue, porque solo aparecen al principio o al final de la palabra. Por eso {الله} se lee alif-lam-lam-hā, con las dos lams unidas.

## Notación vocálica

El texto bíblico trae vocales breves encima y debajo de las consonantes: {كَتَبَ} es ka-ta-ba. No son acentos, sino información de pronunciación, y siempre están presentes. {سْ} marca la ausencia de vocal. Por eso el mismo esqueleto consonántico puede leerse de forma distinta según las vocales.

## Criterio de lectura

Lee primero el esqueleto consonántico de la palabra y después las vocales. Al encontrar {قُلْ}, identifica {ق} como raíz verbal y las vocales como marca de tiempo y persona — el primer paso hacia la lección 3.`),
  vocab: [
    V('ا', 'ا', 'alif'),
    V('ب', 'ب', 'bāʾ'),
    V('ت', 'ت', 'tāʾ'),
    V('ث', 'ث', 'ṯāʾ'),
    V('ج', 'ج', 'jīm'),
    V('ح', 'ح', 'ḥāʾ'),
    V('خ', 'خ', 'khāʾ'),
    V('د', 'د', 'dāl'),
    V('ذ', 'ذ', 'ḏāl'),
    V('ر', 'ر', 'rāʾ'),
    V('س', 'س', 'sīn'),
    V('ص', 'ص', 'ṣād'),
    V('ط', 'ط', 'ṭāʾ enfática'),
    V('ع', 'ع', 'ʿayn'),
    V('ف', 'ف', 'fāʾ'),
    V('ق', 'ق', 'qāf'),
    V('ك', 'ك', 'kāf'),
    V('ل', 'ل', 'lām'),
    V('م', 'م', 'mīm'),
    V('ن', 'ن', 'nūn'),
    V('ه', 'ه', 'hāʾ'),
    V('و', 'و', 'wāw'),
    V('ي', 'ي', 'yāʾ'),
    V('الله', 'الله', 'Dios'),
    V('نُور', 'نور', 'luz'),
    V('كَلِمَة', 'كلمة', 'palabra'),
    V('حَيَاة', 'حياة', 'vida'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿En qué dirección se lee el árabe?'),
    options: [
      T('De izquierda a derecha'),
      T('De derecha a izquierda'),
      T('De arriba abajo'),
      T('En columnas'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe las 28 letras básicas en el orden estándar.'),
      answer: 'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي',
      hint: T('Empieza por ا y termina en ي.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona sonidos y grafemas.'),
      pairs: [
        { a: T('ba'), b: T('ب') },
        { a: T('jā'), b: T('خ') },
        { a: T('ayn'), b: T('ع') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué signo indica la vocal i?'),
      options: [T('fatha'), T('kasra'), T('ḍamma'), T('sukun')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('La lectura va de derecha a izquierda.') },
    { n: '2', text: T('Seis letras — ا د ذ ر ز و — solo se enlazan con la letra anterior.') },
    { n: '3', text: T('Las vocales breves se escriben con fatha َ, kasra ِ y ḍamma ُ.') },
  ],
  notes: [
    {
      label: T('Pronunciación'),
      text: T('Las vocales son claras; la articulación de las consonantes es implícita.'),
    },
  ],
  examples: [
    { text: 'نُور', gloss: T('nūr — luz') },
    { text: 'كَلِمَة', gloss: T('kalima — palabra') },
    { text: 'بَيْت', gloss: T('bayt — casa; la unión facilita la lectura') },
  ],
  tables: [
    {
      caption: T('Letras e sons'),
      head: [T('Grupo'), T('Letras'), T('Notas')],
      rows: [
        ['alif, wāw, yāʾ', 'ا و ي', 'Não formam por si só sílaba aberta'],
        [
          'consonantes aspiradas',
          'ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه',
          'Permitem sílabas fechadas',
        ],
        ['hamza', 'ء أ إ ؤ ئ', 'Indica som de vogal ou consoante glotal'],
      ],
    },
  ],
};
