import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('El verbo: qué cambia de forma'),
  subtitle: T('base, pasado, -ing — y la honestidad de los irregulares'),
  section: T('El verbo'),
  body: C(`## Cuatro columnas, y el resto es una lista

Cada verbo inglés vive en cuatro formas: la **base** ({work}), el **pasado** ({worked}), el **participio** ({worked}) y el **-ing** ({working}). Con un verbo regular las cuatro salen por regla, y la regla cabe en una frase: el pasado y el participio reciben {ed}, y el {ing} cambia la {e} final por {ing}.

La irregularidad empieza después, y es grande. {Go → went → gone}, {write → wrote → written}, {stand → stood → stood}: tres verbos, tres caminos, y ninguna regla que los produzca. Esta es una de las peores partes de la lengua, y la honestidad vale más que la promesa de que "solo es memorizar".

El participio es la columna que casi nadie conoce y que aparece en toda frase con auxiliar: {I have worked}, {she has written}, {they have gone}. Es lo que hace que el verbo conjugado cargue con el resto de la frase.

## El verbo conjugado carga la partícula

El inglés flexiona el verbo por persona: {I work}, {you work}, {he works}. Y el verbo conjugado **trae la partícula consigo**: {I have worked}, nunca {I am work}.

Cuando el verbo principal va después de un auxiliar, es el auxiliar el que flexiona y el principal se queda en la base o en {ing} o en el participio. Con {have}: {I have worked}, {she has worked}, {we had worked}. Con {be}: {I am working}, {she is working}, {they were working}. Con {do}: {I do work}, {she does not work}, {they did not work}.

Los tres auxiliares son {be}, {have} y {do}, y ninguno flexiona por el significado del sustantivo: el sustantivo sigue siendo {work}, {write} y {go} en todas las personas.

## Las familias de irregulares

Los irregulares se agrupan, y reconocer el grupo es más rápido que decorar la lista palabra por palabra. La familia más productiva es la de la **vocal cambiada**: {sing → sang}, {drink → drank}, {come → came}, {run → ran}. La segunda convierte **{o} en {ee}**: {write → wrote}, {give → gave}, {take → took}, {break → broke}. La tercera convierte **{d} en {t}**: {lend → lent}, {send → sent}, {spend → spent}, {build → built}.

Juan 3:16 en la KJV muestra un irregular sin disfraz: {for so loved God the world}. El {loved} no es {love} más {ed} ni es una forma regular; llega hecho.

## Qué hace la KJV con el tiempo

La KJV usa la terminación arcaica de tercera persona: {he that heareth}, {God loveth}, {he that speaketh}. La terminación {eth} marca la tercera persona del presente en las formas con tema vocálico, y es solo registro.

La consecuencia práctica es que quien lee KJV encuentra el tiempo verbal al revés de lo que espera: el presente aparece donde el português esperaría un futuro ({he that heareth}), y el pasado aparece en forma irregular con cierta frecuencia ({loved}, {came}, {saw}).

Marcos 4:39 apila las tres cosas en una frase: {And he arose, and rebuked the wind, and said unto the sea, Peace, be still!}. {Arose} es irregular, {said} tiene dos formas en inglés y una en portugués, y {be still} es verbo más adjetivo.`),
  vocab: [
    V('work', 'work', 'trabajar'),
    V('worked', 'work', 'trabajó'),
    V('working', 'work', 'trabajando'),
    V('go', 'go', 'ir'),
    V('went', 'go', 'fue'),
    V('gone', 'go', 'ido'),
    V('write', 'write', 'escribir'),
    V('wrote', 'write', 'escribió'),
    V('written', 'write', 'escrito'),
    V('stand', 'stand', 'estar de pie'),
    V('stood', 'stand', 'estuvo de pie'),
    V('sing', 'sing', 'cantar'),
    V('sang', 'sing', 'cantó'),
    V('drink', 'drink', 'beber'),
    V('gave', 'give', 'dio'),
    V('loved', 'love', 'amó'),
    V('heareth', 'hear', 'oye'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cada verbo tiene cuatro formas: base, pasado, participio y -ing. En los regulares bastan -ed y -ing.',
      ),
    },
    {
      n: '2',
      text: T(
        'Tras un auxiliar el verbo principal queda en la base, en el participio o en el -ing; es el auxiliar el que flexiona por persona.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los auxiliares son be, have y do, y ninguno flexiona por el significado del sustantivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los irregulares caen en tres familias: vocal cambiada, -o que pasa a -ee y -d que pasa a -t.',
      ),
    },
    {
      n: '5',
      text: T(
        'La terminación -eth de la KJV es registro de tercera persona del presente, no tiempo verbal.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 3:16 trae loved, Marcos 4:39 trae arose y la KJV usa heareth donde el inglés tendría he hears. Las tres cosas aparecen en el mismo capítulo de cualquier libro.',
      ),
    },
    {
      label: T('Honestidad:'),
      text: T(
        'Los irregulares son la peor parte de la lengua y no tienen regla. Ser honesto sobre eso vale más que una promesa: la lista es la que es, y lo que funciona es aprender el verbo entero con un ejemplo.',
      ),
    },
  ],
  examples: [
    { text: '{I have worked}', gloss: T('yo he trabajado') },
    { text: '{she has written}', gloss: T('ella ha escrito') },
    { text: '{they have gone}', gloss: T('ellos se han ido') },
    { text: '{I am working}', gloss: T('yo estoy trabajando') },
    { text: '{he works}', gloss: T('él trabaja') },
    { text: '{for so loved God the world}', gloss: T('porque Dios amó el mundo') },
    { text: '{And he arose}', gloss: T('y se levantó') },
    { text: '{he that heareth}', gloss: T('el que oye — KJV') },
    { text: '{he went and did not come}', gloss: T('fue y no vino') },
    { text: '{we had worked}', gloss: T('nosotros habíamos trabajado') },
  ],
  tables: [
    {
      caption: T('Las cuatro columnas'),
      head: [T('Base'), T('Pasado'), T('Participio'), T('-ing')],
      rows: [
        ['{work}', '{worked}', '{worked}', '{working}'],
        ['{play}', '{played}', '{played}', '{playing}'],
        ['{go}', '{went}', '{gone}', '{going}'],
        ['{write}', '{wrote}', '{written}', '{writing}'],
        ['{stand}', '{stood}', '{stood}', '{standing}'],
        ['{eat}', '{ate}', '{eaten}', '{eating}'],
        ['{give}', '{gave}', '{given}', '{giving}'],
      ],
    },
    {
      caption: T('Familias de irregulares'),
      head: [T('Familia'), T('Qué cambia'), T('Ejemplos')],
      rows: [
        [
          T('vocal cambiada'),
          T('la vocal de la raíz'),
          '{sing → sang, drink → drank, come → came}',
        ],
        [T('-o pasa a -ee'), T('la vocal final'), '{write → wrote, give → gave, take → took}'],
        [T('-d pasa a -t'), T('la consonante final'), '{lend → lent, send → sent, build → built}'],
        [T('sin regla'), T('todo'), '{stand → stood, buy → bought}'],
      ],
    },
    {
      caption: T('Los tres auxiliares'),
      head: [T('Auxiliar'), T('Sirve para'), T('Ejemplo')],
      rows: [
        ['{be}', T('continuos presente y pasado'), '{I am working, they were working}'],
        ['{have}', T('tiempos perfectos'), '{I have worked, we had worked}'],
        [
          '{do}',
          T('presente y pasado simples, con negación y pregunta'),
          '{I do work, they did not work}',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [T('I have went'), T('I have gone'), T('I am work'), T('I have go')],
    answer: 1,
    hint: T('Después de have el verbo va en participio: gone.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa el participio: 'She has ___ the letter.' (write)"),
      answer: 'written',
    },
    {
      kind: 'fill',
      prompt: T("Completa el pasado irregular: 'He ___ to church yesterday.' (go)"),
      answer: 'went',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la base con el pasado irregular.'),
      pairs: [
        { a: 'go', b: 'went' },
        { a: 'write', b: 'wrote' },
        { a: 'drink', b: 'drank' },
        { a: 'send', b: 'sent' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('I am work every day'),
        T('I am working every day'),
        T('I am worked every day'),
        T('I work every day am'),
      ],
      answer: 1,
    },
  ],
};
