import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Preposiciones: la lista que el alumno va a fallar'),
  subtitle: T('depend on, consist of, believe in — lo que no se traduce'),
  section: T('Preposiciones'),
  body: C(`## Pares que no se traducen

El primer par es {to}, {into} y {onto}. {To} marca solo dirección ({go to school}); {into} marca el paso al interior ({go into the room}); {onto} marca la llegada a una superficie ({jump onto the table}). El portugués dice "ir a" en los tres, y por eso {into} y {onto} suman a la lista de errores.

El segundo par es {from}, {of} y {off}. {From} marca origen y también final ({from Monday to Friday}, {ten miles from here}); {of} es la preposición de relación, la que liga un sustantivo con lo que lo califica ({the word of God}); {off} marca separación ({take the book off the table}, {fall off the horse}).

El tercero, que solo aparece en {into} y {out of}, es el más sutil: {out of} significa origen ({out of the room}) y también proporción ({three out of ten}).

## Verbo más preposición

La parte más cara del inglés para quien traduce desde el portugués es el grupo en que **el verbo viene con una preposición que no se traduce**. {Depend on}, {consist of}, {believe in}, {listen to}, {wait for}, {agree with}, {apologize for}, {object to}, {insist on}.

Juan 11:26 en la KJV dice {he that believeth in me, though he were dead, shall live}. El {in} que sigue a {believeth} no traduce nada: {believe} es el mismo verbo en las dos lenguas, y la preposición es un añadido del lado inglés.

La lista no se deduce, y por eso pertenece al vocabulario y no a las reglas. Lo que sí se puede es aprender el **verbo entero**: {insist on}, {insiste en}; {object to}, {objeta a}. Aprendida la pareja, la preposición viene sin costo.

La misma partícula puede cambiar de sentido según el verbo: {look at} es mirar, {look for} es buscar y {look after} es cuidar. Es el caso raro en que un mismo verbo cambia de sentido con la preposición en vez de ganar uno nuevo.

## Tres verbos que el português acerca

{Borrow} es tomar prestado, {lend} es prestar y {rent} es alquilar por un período. El portugués usa un solo verbo para las dos primeras direcciones, y la distinción es exactamente la que el alumno necesita: quien recibe prestado {borrows}, quien da {lends}. Con {rent} no hay discusión: alquilar por un período es {rent}, y alquilar una habitación de hotel por una noche también es {rent}; lo que cambia es el objeto.

{Bring} es traer algo que viene conmigo, {take} es llevar algo que yo mismo voy a buscar, y {carry} es cargar, con el peso de la cosa en primer plano. {Bring me the book} trae el libro que está aquí; {take me the book} va a buscar el libro y lo trae; {carry the box} dice lo que hace la mano.

La KJV usa {gave} sin preposición en Mateo 25:35, con {I was hungry, and ye gave me meat}. Pedir prestado y prestar aparecen en prosa y no en el texto bíblico, y por eso son la parte del vocabulario que el alumno tiene que montar por su cuenta.

## Dónde queda la preposición

La preposición puede ir al final de la cláusula, y esa es la práctica más común después de un pronombre relativo: {the man I spoke to}, {the book she looked at}. El aprendiz duda aquí y suele devolverlo todo al medio, produciendo {the man to who I spoke}, que es posible y más formal.

Con verbo en {ing} la preposición va antes: {by looking at}, {for waiting for}, {thank you for coming}. Con infinitivo la preposición va dentro del {to}: {I agree to it}, {I insist on it}, {he objects to it}.`),
  vocab: [
    V('depend on', 'depend', 'depender de'),
    V('consist of', 'consist', 'consistir en'),
    V('believe in', 'believe', 'creer en'),
    V('listen to', 'listen', 'escuchar'),
    V('wait for', 'wait', 'esperar a'),
    V('agree with', 'agree', 'estar de acuerdo con'),
    V('apologize for', 'apologize', 'pedir perdón por'),
    V('object to', 'object', 'oponerse a'),
    V('insist on', 'insist', 'insistir en'),
    V('look at', 'look', 'mirar'),
    V('look for', 'look', 'buscar'),
    V('look after', 'look', 'cuidar'),
    V('borrow', 'borrow', 'tomar prestado'),
    V('lend', 'lend', 'prestar'),
    V('rent', 'rent', 'alquilar'),
    V('carry', 'carry', 'cargar'),
    V('bring', 'bring', 'traer'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'To marca dirección; into marca entrada en un espacio; onto marca llegada a una superficie.',
      ),
    },
    {
      n: '2',
      text: T(
        'From marca origen y final; of liga el sustantivo con lo que lo califica; off marca separación.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbo más preposición se aprende como unidad: depend on, consist of, believe in, listen to.',
      ),
    },
    {
      n: '4',
      text: T('Borrow es tomar prestado, lending es prestar y rent es alquilar por un período.'),
    },
    {
      n: '5',
      text: T('Después de un pronombre relativo la preposición va al final: the man I spoke to.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 11:26 trae believeth in me, con una preposición que no corresponde a nada en portugués. Mateo 25:35 trae gave me meat, con verbo y sin preposición. Los dos casos son el mismo fenómeno visto desde los dos lados.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe "I depend of" o "she listens him", el problema es que tradujo el verbo solo. La preposición del inglés no traduce nada: es parte del verbo.',
      ),
    },
  ],
  examples: [
    { text: '{he that believeth in me}', gloss: T('el que cree en mí') },
    { text: '{It all depends on the weather}', gloss: T('todo depende del tiempo') },
    {
      text: '{The team consists of twelve players}',
      gloss: T('el equipo consta de doce jugadores'),
    },
    { text: '{go into the room}', gloss: T('entrar en la sala') },
    { text: '{jump onto the table}', gloss: T('saltar sobre la mesa') },
    { text: '{take the book off the table}', gloss: T('quitar el libro de la mesa') },
    { text: '{three out of ten}', gloss: T('tres de diez') },
    { text: '{the man I spoke to}', gloss: T('el hombre con quien hablé') },
    { text: '{Can I borrow your pen}', gloss: T('¿puedo tomar prestado tu bolígrafo?') },
    { text: '{Can you lend me your pen}', gloss: T('¿me puedes prestar tu bolígrafo?') },
    { text: '{Bring me the book}', gloss: T('tráeme el libro') },
  ],
  tables: [
    {
      caption: T('Pares que no se traducen'),
      head: [T('Par'), T('Diferencia'), T('Ejemplo')],
      rows: [
        ['{to}', T('dirección, sin llegada interior'), '{go to school}'],
        ['{into}', T('movimiento hacia dentro'), '{go into the room}'],
        ['{onto}', T('movimiento hacia una superficie'), '{jump onto the table}'],
        ['{from}', T('origen y final'), '{from nine to five}'],
        ['{of}', T('relación, posesión'), '{the word of God}'],
        ['{off}', T('separación'), '{take it off the table}'],
      ],
    },
    {
      caption: T('Verbo más preposición'),
      head: [T('Verbo'), T('Preposición'), T('Frase')],
      rows: [
        ['{depend}', '{on}', '{It depends on you}'],
        ['{consist}', '{of}', '{It consists of four parts}'],
        ['{believe}', '{in}', '{believe in him}'],
        ['{listen}', '{to}', '{listen to me}'],
        ['{wait}', '{for}', '{wait for the answer}'],
        ['{agree}', '{with}', '{agree with you}'],
      ],
    },
    {
      caption: T('Los verbos que el português acerca'),
      head: [T('Inglés'), T('Portugués'), T('Dirección')],
      rows: [
        ['{borrow}', T('tomar prestado'), T('yo recibo prestado')],
        ['{lend}', T('prestar'), T('yo doy prestado')],
        ['{rent}', T('alquilar por un período'), T('yo pago y uso')],
        ['{bring}', T('traer'), T('viene conmigo')],
        ['{take}', T('llevar'), T('voy a buscarlo y lo llevo')],
        ['{carry}', T('cargar'), T('el peso va primero')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('It depends of the weather'),
      T('It depends on the weather'),
      T('It depends in the weather'),
      T('It depends at the weather'),
    ],
    answer: 1,
    hint: T('Depend siempre lleva on.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'The team consists ___ twelve players.'"), answer: 'of' },
    { kind: 'fill', prompt: T("Completa: '___ I borrow your pen?'"), answer: 'Can' },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con la preposición.'),
      pairs: [
        { a: 'depend', b: 'on' },
        { a: 'consist', b: 'of' },
        { a: 'believe', b: 'in' },
        { a: 'listen', b: 'to' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('She listens him'),
        T('She listens to him'),
        T('She listens for him'),
        T('She listens him to'),
      ],
      answer: 1,
    },
  ],
};
