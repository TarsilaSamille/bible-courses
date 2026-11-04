import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Preguntas y condicionales'),
  subtitle: T('Interrogación, relación y consecuencia'),
  section: T('El verbo'),
  body: C(`## Preguntas

{هَلْ} abre preguntas de sí o no y no admite una respuesta invertida. Las interrogativas usan {مَنْ} para «¿quién?», {مَا} para «¿qué?», {أَيْنَ} para «¿dónde?», {مَتَى} para «¿cuándo?» y {لِمَاذَا} para «¿por qué?». En {مَنْ ذَا الَّذِي} la estructura está invertida: el pronombre precede al relativo.

## El relativo

{الَّذِي} concuerda con su antecedente en género y número: masculino {الَّذِي}, femenino {الَّتِي}, plural {الَّذِينَ}. Va después del sustantivo y recibe el caso que pide el resto de la cláusula, como cualquier sustantivo.

## El condicional

{إِنْ} introduce la condición y puede ir con presente o con pasado. En {إِنْ تُؤْمِنُ} la condición se presenta como presente y habitual; en {إِنْ آمَنْتَ} aparece como suceso ya realizado. El verbo de la consecuencia va en imperfecto, como en {لَنْ يَهْلِكَ} — la consecuencia es negativa y futura.

## Criterio de lectura

Al encontrar {إِنْ} en un versículo, pregunta primero si la condición se describe como hábito o como hecho, y después quién es el sujeto de la consecuencia — casi siempre el mismo que el de la condición, en forma derivada.`),
  vocab: [
    V('هَلْ', 'هل', 'acaso; pregunta'),
    V('مَنْ', 'من', 'quién'),
    V('مَا', 'ما', 'qué'),
    V('مَاذَا', 'ماذا', 'qué; por qué'),
    V('أَيْنَ', 'أين', 'dónde'),
    V('مَتَى', 'متى', 'cuándo'),
    V('كَيْفَ', 'كيف', 'cómo'),
    V('لِمَاذَا', 'لماذا', 'por qué'),
    V('الَّذِي', 'الذي', 'que; el cual'),
    V('الَّتِي', 'التي', 'que (f.)'),
    V('إِنْ', 'إن', 'si'),
    V('فَ', 'ف', 'entonces; pues'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué puede significar {إِنْ آمَنْتَ}?'),
    options: [T('Si creíste'), T('Si crees'), T('No creo'), T('¡Cree!')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa «___ تُؤْمِنُ؟» (¿Crees?).'),
      answer: 'هَلْ',
      hint: T('Es la partícula de pregunta sí/no.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona pregunta y respuesta esperada.'),
      pairs: [
        { a: T('¿Quién?'), b: T('una persona') },
        { a: T('¿Dónde?'), b: T('un lugar') },
        { a: T('¿Cuándo?'), b: T('un tiempo') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué partícula introduce la consecuencia?'),
      options: [T('si'), T('entonces'), T('acaso'), T('entre')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{هَلْ} + verbo espera respuesta de sí o no.') },
    {
      n: '2',
      text: T('{إِنْ} introduce la condición; {فَ} introduce la consecuencia o un hecho nuevo.'),
    },
    {
      n: '3',
      text: T(
        'El relativo concuerda con el antecedente, aunque su función sintáctica puede variar.',
      ),
    },
  ],
  notes: [
    {
      label: T('Traducción'),
      text: T('La estructura de {لَنْ تَمُوتُوا} expresa futuro negativo: «no moriréis».'),
    },
  ],
  examples: [
    { text: 'هَلْ تُؤْمِنُ؟', gloss: T('¿Crees?') },
    { text: 'مَنْ يَعْمَلْ؟', gloss: T('¿Quién lo hará?') },
    { text: 'إِنْ تُؤْمِنُ فَسَتَخْلُصُ', gloss: T('si crees, serás salvo') },
  ],
  tables: [
    {
      caption: T('Pronombres interrogativos'),
      head: [T('Palabra'), T('Pregunta')],
      rows: [
        ['مَنْ', 'quem?'],
        ['مَا / مَاذَا', 'o quê?'],
        ['أَيْنَ', 'onde?'],
        ['مَتَى', 'quando?'],
        ['كَيْفَ', 'como?'],
        ['لِمَاذَا', 'por quê?'],
      ],
    },
  ],
};
