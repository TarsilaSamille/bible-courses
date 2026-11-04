import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Phrasal verbs y preposiciones bíblicas'),
  subtitle: T('put on, cast out, come unto — verbos compuestos'),
  section: T('Sintaxis'),
  body: C(`## Verbo y partícula

Un phrasal verb combina verbo y partícula con un valor propio. La partícula puede ser {on/off/up/out/in/away}, como en {put on}, {cast out}, {come in}, o una preposición léxica, como en {come unto} y {look upon}. No aprendas una palabra aislada: memoriza la unidad completa con su objeto típico.

{Put on Christ} significa 'revestirse de Cristo', metáfora de un modo de vida cambiado. {Put off the old man} expresa rechazar una identidad antigua. Ambas son metáforas bíblicas, no instrucciones literales de vestir.

## Partículas y objetos

Con objeto nominal, la partícula suele permanecer: {cast out demons}, {look at the house}. Con pronombre, puede desplazarse en algunos usos ingleses informales: {look him at}; el estándar americano normalmente la mantiene antes del objeto. Con gerundio también hay variación: {put a coat on}.

## Registro

La KJV usa con frecuencia {unto} y {upon}; no son automáticamente phrasal verbs modernos. El inglés contemporáneo puede decir {come to} o {look at}. Registra la forma exacta y su registro para que la traducción no aplane el estilo original.`),
  vocab: [
    V('put on', 'put on', 'revestirse de'),
    V('put off', 'put off', 'despojarse de'),
    V('cast out', 'cast out', 'expulsar'),
    V('come unto', 'come unto', 'venir a'),
    V('fall away', 'fall away', 'apostar/caer'),
    V('hold fast', 'hold fast', 'agarrarse firme de'),
    V('look after', 'look after', 'cuidar de'),
    V('look for', 'look for', 'buscar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("¿Qué significa 'put on Christ'?"),
    options: [
      T('colocar a Cristo'),
      T('revestirse de Cristo'),
      T('quitar a Cristo'),
      T('mirar a Cristo'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'We must look ___ the Lord.'"), answer: 'for' },
    {
      kind: 'match',
      prompt: T('Relaciona unidad y sentido.'),
      pairs: [
        { a: 'cast out', b: T('expulsar') },
        { a: 'look after', b: T('cuidar') },
        { a: 'hold fast', b: T('retener') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma identifica mejor el registro KJV?'),
      options: [T('come unto'), T('come to'), T('come at'), T('come by')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('Aprende la unidad entera, no la partícula aislada: look for ≠ look.') },
    {
      n: '2',
      text: T('Con objeto nominal, la partícula suele ir tras el verbo: look at the house.'),
    },
    {
      n: '3',
      text: T('No modernices la KJV en silencio: {come unto} es una forma arcaica significativa.'),
    },
  ],
  notes: [
    {
      label: T('Traducción:'),
      text: T(
        'Modernizar el registro puede mejorar la claridad, pero debe indicarse expresamente.',
      ),
    },
  ],
  examples: [
    { text: '{put on Christ}', gloss: T('revestirse de Cristo') },
    { text: '{cast out demons}', gloss: T('expulsar demonios') },
    { text: '{come unto me}', gloss: T('venid a mí — KJV') },
    { text: '{look for}', gloss: T('buscar') },
  ],
  tables: [
    {
      caption: T('Unidades y valores'),
      head: [T('Unidad'), T('Valor'), T('Registro')],
      rows: [
        ['{put on}', T('revestirse de'), T('bíblico')],
        ['{cast out}', T('expulsar'), T('bíblico')],
        ['{come unto}', T('venir a'), T('arcaico/KJV')],
      ],
    },
  ],
};
