import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Adjetivos y comparación'),
  subtitle: T('Concordancia y patrones'),
  section: T('El nombre'),
  body: C(`## El adjetivo va después

En árabe el adjetivo sigue al sustantivo y concuerda con él en género y número, pero nunca en caso. {الكِتَابُ الكَبِيرُ} es «el libro grande»; {الكِتَابُ الكَبِيرَ} es lo mismo cuando el sustantivo cae en un caso regido. El caso es del sustantivo, y solo del sustantivo.

## Concordancia, o su ausencia

El adjetivo concuerda en género y número, no en definitud. Con nombre y adjetivo definidos, los dos llevan {ال}: {الكِتَابُ الكَبِيرُ}. Con nombre definido y adjetivo indefinido, solo el nombre lleva artículo: {الكِتَابُ كَبِيرٌ}, que deja abierta la cualidad.

## El patrón del superlativo

El comparativo y el superlativo usan el patrón {أَفْعَلَ}: {أَكْبَرُ} es «mayor» y, con {مِنْ}, «mayor que» — {أَكْبَرُ مِنْ}. Como superlativo lleva artículo: {الْأَكْبَرُ}. El mismo patrón aparece en los colores: {أَبْيَضُ}, {أَسْوَدُ}, {أَحْمَرُ}. Fíjate en que el {ال} del superlativo es el de la forma, no el del sustantivo.

## Criterio de lectura

Marca primero el sustantivo e identifica su caso; el adjetivo no interfiere. Si el adjetivo va justo después y la cláusula tiene sentido, casi con seguridad es un adjetivo — la palabra que viene tras él es la que indica si la construcción es nominal.`),
  vocab: [
    V('كَبِير', 'كبير', 'grande'),
    V('كَبِيرَة', 'كبير', 'grande (f.)'),
    V('جَدِيد', 'جديد', 'nuevo'),
    V('مُقَدَّس', 'قدس', 'santo'),
    V('أَبْيَض', 'بيض', 'blanco'),
    V('أَسْوَد', 'سود', 'negro'),
    V('أَحْمَر', 'حمر', 'rojo'),
    V('أَكْبَر', 'كبير', 'mayor'),
    V('أَقْوَى', 'قوي', 'más fuerte'),
    V('الْحُبّ', 'حب', 'el amor'),
    V('الْمَوْت', 'موت', 'la muerte'),
    V('الْعَهْد', 'عهد', 'pacto; testamento'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «el libro grande»?'),
    options: [
      T('libro grande'),
      T('el libro el-grande'),
      T('libro el-grande'),
      T('el-libro grande'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Femenino de {أَبْيَض}: ___'),
      answer: 'بَيْضَاءُ',
      hint: T('El femenino usa {-اء}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué secuencia concuerda bien?'),
      options: [
        T('libro.m grande.m'),
        T('libro.m grande.f'),
        T('libros.m grande.m'),
        T('libro.m grandes.p'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona adjetivo y color.'),
      pairs: [
        { a: T('blanco'), b: T('blanco') },
        { a: T('negro'), b: T('negro') },
        { a: T('rojo'), b: T('rojo') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('Adjetivo y sustantivo concuerdan en género y número.') },
    { n: '2', text: T('El artículo definido puede repetirse ante cada elemento concordante.') },
    { n: '3', text: T('{أَفْعَلَ} es frecuente en colores y en el comparativo {أَفْعَلُ مِنْ}.') },
  ],
  notes: [
    {
      label: T('Comparación'),
      text: T(
        'El superlativo puede usar {أَفْعَلُ} o {أَكْثَرُ}; {أَكْبَرُ} es común en la fórmula {اللهُ أَكْبَرُ}.',
      ),
    },
  ],
  examples: [
    { text: 'الْكِتَابُ الْجَدِيدُ', gloss: T('el nuevo libro') },
    { text: 'أَرْضٌ مُقَدَّسَةٌ', gloss: T('tierra santa') },
    { text: 'الْحُبُّ أَقْوَى مِنَ الْمَوْتِ', gloss: T('el amor es más fuerte que la muerte') },
  ],
  tables: [
    {
      caption: T('Concordancia'),
      head: [T('Sustantivo'), T('Adjetivo')],
      rows: [
        ['كِتَابٌ كَبِيرٌ', 'livro grande'],
        ['كِتَابٌ كَبِيرَةٌ', 'livro grande'],
        ['كُتُبٌ كِبَارٌ', 'livros grandes'],
        ['الكِتَابُ الكَبِيرُ', 'o grande livro'],
      ],
    },
  ],
};
