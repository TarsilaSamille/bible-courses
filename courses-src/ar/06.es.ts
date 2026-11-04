import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Formas derivadas II–X'),
  subtitle: T('Raíces que forman acción, intensidad y reflexión'),
  section: T('El verbo'),
  body: C(`## Una raíz, muchos verbos

La misma raíz triconsonantal puede generar verbos de sentidos distintos, y es el patrón vocálico lo que organiza esa familia. Con la raíz {علم}, la forma I es neutra; la II {عَلَّمَ} es intensiva: {عَلَّمَ} es «enseñó» y no «supo». La II suele llevar el prefijo {ف} para el factitivo, como en {فَعَّلَ}.

## Las formas y lo que significan

La III {فَاعَلَ} sugiere oposición o participación: {شَارَكَ} es «participó». Las formas IV {أَفْعَلَ} y X {اِسْتَفْعَلَ} apuntan a resultado o acción dirigida — {أَرْسَلَ} «envió», {أَنْزَلَ} «hizo bajar» — y la X sugiere petición o intento: {اِسْتَغْفَرَ} «pidió perdón». La V {تَفَعَّلَ} sugiere intensidad o resultado: {تَعَلَّمَ} «aprendió», {اِجْتَمَعَ} «se reunieron».

## Lo que no es traducción literal

Ninguna de estas formas se traduce por cálculo. Una raíz puede generar verbos cuyo sentido exacto hay que memorizar, y la vocalización {َ} {ِ} {ُ} {ْ} pertenece al patrón y no es adorno. Por eso el contexto y la lista de formas son más seguros que adivinar por el sentido de la raíz.

## Criterio de lectura

Al reconocer una raíz conocida, pregunta primero qué forma derivada aparece — II, V o X — y solo después busca el sentido. La forma carga información que un diccionario en portugués no transmite.`),
  vocab: [
    V('عَلَّمَ', 'علم', 'enseñó'),
    V('قَدَّسَ', 'قدس', 'santificó'),
    V('قَاتَلَ', 'قاتل', 'luchó'),
    V('شَارَكَ', 'شارك', 'participó'),
    V('أَرْسَلَ', 'أرسل', 'envió'),
    V('أَنْزَلَ', 'أنزل', 'hizo bajar'),
    V('تَعَلَّمَ', 'تعلم', 'aprendió'),
    V('اِجْتَمَعَ', 'اجتمع', 'se reunió'),
    V('اِسْتَغْفَرَ', 'استغفر', 'pidió perdón'),
    V('بَارَكَ', 'بارك', 'bendijo'),
    V('بَرَكَ', 'بارك', 'bendijo'),
    V('كَتَبَ', 'كتب', 'escribió'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿A qué forma pertenece {عَلَّمَ}?'),
    options: [T('I'), T('II'), T('IV'), T('X')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué ejemplo es forma IV?'),
      options: [T('كَتَبَ'), T('بارك'), T('أرسل'), T('استغفر')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona raíz y derivado.'),
      pairs: [
        { a: T('r-s-l'), b: T('envió') },
        { a: T('j-m-ʿ'), b: T('se reunió') },
        { a: T('gh-f-r'), b: T('pidió perdón') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Completa el sustantivo verbal de escribir: ___āba.'),
      answer: 'كِتَابَة',
      hint: T('Empieza por la raíz ك-ت-ب.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Identifica la raíz antes de memorizar el verbo; las raíces débiles pueden alterar el molde.',
      ),
    },
    {
      n: '2',
      text: T('El valor del molde depende del contexto; no traduzcas los afijos mecánicamente.'),
    },
    {
      n: '3',
      text: T(
        'Las formas derivadas siguen siendo verbos: conservan persona, tiempo y transitividad.',
      ),
    },
  ],
  notes: [
    {
      label: T('Raíces de tres letras'),
      text: T(
        'El análisis histórico ayuda, pero la función de la raíz debe aprenderse en varios derivados.',
      ),
    },
  ],
  examples: [
    { text: 'عَلَّمَ', gloss: T('II de علم: «hacer conocer»; «enseñó»') },
    { text: 'تَعَلَّمَ', gloss: T('V de علم: forma reflexiva; «aprendió»') },
    { text: 'بَارَكَ اللهُ إِبْرَاهِيمَ', gloss: T('Dios bendijo a Abraham') },
  ],
  tables: [
    {
      caption: T('Formas verbales esenciales'),
      head: [T('Forma'), T('Molde'), T('Ejemplos')],
      rows: [
        ['I', 'فَعَلَ', 'كَتَبَ: escrever'],
        ['II', 'فَعَّلَ', 'عَلَّمَ: ensinar; قَدَّسَ: santificar'],
        ['III', 'فَاعَلَ', 'بَارَكَ: abençoar; شَارَكَ: participar'],
        ['IV', 'أَفْعَلَ', 'أَرْسَلَ: enviar; أَنْزَلَ: fazer descer'],
        ['V', 'تَفَعَّلَ', 'تَعَلَّمَ: aprender'],
        ['VIII', 'اِفْتَعَلَ', 'اِجْتَمَعَ: reunir-se'],
        ['X', 'اِسْتَفْعَلَ', 'اِسْتَغْفَرَ: pedir perdão'],
      ],
    },
  ],
};
