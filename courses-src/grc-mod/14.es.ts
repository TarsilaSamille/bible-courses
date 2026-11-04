import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Comparativos y superlativos'),
  subtitle: T('πιο καλός — ο πιο καλός'),
  section: T('El verbo'),
  body: C(`## Comparativo: πιο + adjetivo, sin flexión

El griego moderno forma el comparativo de un solo modo: πιο más el adjetivo, sin flexionar. πιο καλός «mejor», πιο ακριβός «más caro». Compárese con el español, que flexiona: bueno, mejor, el mejor: el griego se ahorra ese trabajo.

La comparación con otra persona o cosa usa από, no que: πιο καλός από εσένα «mejor que tú». Y cuando el segundo término es una persona, el pronombre lleva artículo: από εσένα, από εμένα, no από εγώ.

## Superlativo: entra el artículo

El superlativo es πιο más el adjetivo, pero con artículo definido: ο πιο καλός «el mejor», η πιο καλή «la mejor», το πιο μικρό «el menor». El artículo es lo que marca el superlativo; sin él, πιο καλός es solo comparativo.

Y ο πιο καλός «el mejor» se diferencia de ο καλύτερος (el mejor de un grupo). Si la frase no dice de quién, el griego usa el artículo igual: la comparación viene del contexto, no del sustantivo.

## Igualdad y diferencia

τόσο… όσο es la construcción de igualdad: τόσο μεγάλο όσο το σπίτι «tan grande como la casa». La misma forma a los dos lados, y el verbo suele copiarse del segundo: είναι τόσο… όσο.

Para menos: λιγότερο, μικρότερος, πιο μικρό. Para cantidad: λιγότερο από εμένα «menos que yo». Para el superlativo absoluto, sin término de comparación, el griego usa πιο más el adjetivo o el sufijo -τατος: ο πιο καλύτερος, ο καλύτερος.

## Las formas antiguas siguen, pero no son el patrón

καλύτερος, μεγαλύτερος, χειρότερος sobreviven en registros elevados y en expresiones fijas. El patrón productivo del griego moderno es πιο más el adjetivo, y el aoristo antiguo murió como regla. Quien traduzca el Nuevo Testamento con καλύτερος acierta la forma y yerra el oído: suena a español, no a griego hablado.

## Criterio de lectura

Cada vez que veas πιο, decide primero si hay artículo: con artículo es superlativo, sin él es comparativo. Y si aparece el griego antiguo (μεγαλύτερος), entiéndelo, pero no lo reproduzcas en una traducción actual.`),
  vocab: [
    V('πιο', 'πιο', 'más'),
    V('πιο καλός', 'καλός', 'mejor'),
    V('ο πιο καλός', 'καλός', 'el mejor'),
    V('από', 'από', 'que'),
    V('τόσο', 'τόσο', 'tan'),
    V('όσο', 'όσο', 'como; cuanto'),
    V('λιγότερο', 'λίγο', 'menos'),
    V('καλύτερος', 'καλός', 'mejor (elevado)'),
    V('μεγαλύτερος', 'μεγάλος', 'mayor (elevado)'),
    V('ακριβός', 'ακριβός', 'caro'),
    V('μικρός', 'μικρός', 'pequeño'),
    V('μικρότερος', 'μικρός', 'menor'),
    V('σπίτι', 'σπίτι', 'casa'),
    V('εσένα', 'εσύ', 'a ti'),
  ],
  exercise: { kind: 'fill', prompt: T('mejor que yo'), answer: 'πιο', hint: T('La palabra «más»') },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el superlativo?'),
      options: [T('πιο καλός'), T('ο πιο καλός'), T('από μένα'), T('τόσο καλός')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('tan bueno como mi amigo'),
      answer: 'όσο',
      hint: T('Segunda parte de la igualdad'),
    },
    {
      kind: 'match',
      prompt: T('Relacionar estructura'),
      pairs: [
        { a: 'πιο', b: T('más') },
        { a: 'τόσο', b: T('grado') },
        { a: 'όσο', b: T('comparación') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('πιο no varía por género ni número.') }],
  notes: [
    {
      label: T('Precaución'),
      text: T(
        'από εμένα puede significar «de mí» como origen o agente; en comparación de cantidad también significa «que yo».',
      ),
    },
  ],
  examples: [
    {
      text: 'η Αθήνα είναι πιο μεγάλη από την Τρίβα',
      gloss: T('Atenas es más grande que Trípoli'),
    },
  ],
  tables: [
    {
      caption: T('Grados'),
      head: ['Grado', 'Estructura'],
      rows: [
        ['comparativo', 'πιο + adjetivo'],
        ['superlativo', 'artículo + πιο + adjetivo'],
        ['igualdad', 'τόσο + adj. + όσο'],
      ],
    },
  ],
};
