import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Futuro y perfecto'),
  subtitle: T('θα μιλήσω — έχω μιλήσει'),
  section: T('El verbo'),
  body: C(`## θa es una partícula, no una forma

θα + verbo en presente: θα μιλήσω. El griego moderno no tiene forma verbal de futuro — el koiné construía el futuro con σ- en el aoristo (λύσω), y el moderno conservó la partícula θα y tiró la flexión. Por eso θα μιλήσω y μιλάω se parecen: la misma información con distinto coste.

El mismo θα da también sentido de posibilidad: «puede hablar», «tal vez venga». Aquí es donde aparece la ambigüedad al traducir: θα έρθει puede ser «vendrá» o «puede venir», y quien traduce tiene que elegir por el contexto.

## El perfect es analítico

El perfect es έχω + participio: έχω μιλήσει. Toda la conjugación viene del auxiliar, y eso lo hace fácil — έχω, είχα, είχε, είχαμε, είχατε, είχαν. Compara:

**Το είπα** — «lo dije» (aoristo, un resultado)
**Το έχω ειπεί** — «lo he dicho» (perfect, un estado resultante)

La negación de estilo cuidado es **δεν έχω** (δέν έχω), y no μην έχω — μην es la clítica de negación del subjuntivo y del imperativo, no del indicativo. Escribir έχω con μην suena mal aunque el habla lo produzca.

## Criterio de lectura

θα delante de un verbo marca futuro o posibilidad. έχω + participio marca un estado resultante, no un tiempo: quien habla dice «he hablado» pensando en el efecto, no en el momento.`),
  vocab: [
    V('θα μιλήσω', 'μιλώ', 'hablaré'),
    V('θα έρθει', 'έρχομαι', 'vendrá'),
    V('έχω μιλήσει', 'μιλώ', 'he hablado'),
    V('έχεις δει', 'βλέπω', 'has visto'),
    V('είχα φύγει', 'φεύγω', 'había salido'),
    V('θα έχω τελειώσει', 'τελειώνω', 'habré terminado'),
    V('θα έχει', 'έχω', 'tendrá'),
    V('δεν έχω', 'έχω', 'no tengo'),
    V('μιλήσει', 'μιλώ', 'haber hablado (participio)'),
    V('έχει', 'έχω', 'tiene (tendrá)'),
    V('είχα', 'έχω', 'tenía'),
    V('τέλος', 'τέλος', 'fin, final'),
    V('τελειώσει', 'τελειώνω', 'haber terminado (participio)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('He hablado'),
    answer: 'έχω',
    hint: T('No escribas una palabra aquí'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«He visto»'),
      options: [T('έχω δει'), T('είδα'), T('θα δω'), T('είχα δει')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('no ha venido'), answer: 'έχει', hint: T('μην έχει es muy formal') },
    {
      kind: 'match',
      prompt: T('Relacionar estructura'),
      pairs: [
        { a: 'θα πω', b: T('futuro') },
        { a: 'είχα πει', b: T('pluscuamperfecto') },
        { a: 'έχω πει', b: T('perfecto') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('θα no se combina con να.') }],
  notes: [
    {
      label: T('Cuidado'),
      text: T('No confundas έχω «tener» con el tiempo perfecto; falta el resultado.'),
    },
  ],
  examples: [{ text: 'έχω ήδη τελειώσει', gloss: T('ya he terminado') }],
  tables: [
    {
      caption: T('Perfecto'),
      head: ['Tiempo', 'Estructura'],
      rows: [
        ['presente', 'έχω μιλήσει'],
        ['pasado', 'είχα μιλήσει'],
        ['futuro', 'θα έχω μιλήσει'],
      ],
    },
  ],
};
