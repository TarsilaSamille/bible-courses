import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Los pronombres y los numerales'),
  title: T('Numeral: el sustantivo que cuenta'),
  subtitle: T('пять, пяти, пятью: el mismo número en seis posiciones'),
  body: C(`
## El numeral ruso es un sustantivo

Un numeral portugués no se flexiona: cinco libros, cinco casas, cinco días. El numeral ruso sí se flexiona, y se flexiona como un sustantivo, no como un adjetivo. Eso significa que tiene seis formas, que esas formas tienen valores de caso, y que la flexión es una propiedad de la palabra y no un accidente de la frase.

La consecuencia es que el numeral puede ocupar posiciones que en portugués sólo ocupan los nombres. Пяти es genitivo, y puede ser tanto genitivo de un numeral como de un sustantivo: пяти столов son cinco mesas. Пятью es instrumental, y aparece después de un verbo: благодарю пятью. Quien trate el numeral como un cuantificador fijo yerra la flexión antes de yerra el sentido.

El paralelo que lo resuelve es el latín. Quinque, quinque, quinque tiene seis formas en latín, exactamente como en ruso, y quien haya leído latín reconocerá el mecanismo de inmediato. La diferencia es que en latín la flexión es opcional en el habla y obligatoria en la escritura, y en ruso es obligatoria en las dos.

## El paradigma de пять y el de два

Пять es el patrón: cinco formas para seis posiciones, con una repetida. El instrumental tiene dos formas, пятью, la más común, y пяти, que aparece cuando la palabra siguiente lo exige. El resto coincide.

Два es el más irregular del grupo, y es el que se usa todo el tiempo. No tiene forma femenina separada: две книги usa две, y la flexión es la misma. En plural, два pasa a двое cuando cuenta personas, como en двое детей.

Один es el más adjetival de todos. Se flexiona como un adjetivo, con género: один, одна, одно, одни, y cada uno se flexiona como el sustantivo que acompaña. одного дня es genitivo, одному дню es dativo, одном дне es prepositivo. Es el numeral que parece un adjetivo, y por eso es la excepción que confirma la regla.

Сто y двести son una declinación de una sola forma: ста, стам, стами. El sustantivo que va detrás es el que se flexiona, y por eso сто лет tiene лет en genitivo plural, y no столётов.

## Lo que el numeral rige

Después de dos, tres y cuatro el sustantivo va al genitivo singular: два дня, три книги, четыре часа. A partir de cinco, el sustantivo va al genitivo plural: пять дней, двадцать книг, сто человек. La regla ya apareció con los sustantivos, y aquí vuelve porque el numeral es el que cuenta.

Lo que cambia es la dirección: con dos, tres y cuatro es el sustantivo el que se flexiona; con cinco o más es el numeral el que se flexiona. двух дней tiene el numeral en genitivo, y пяти дней también. La diferencia es que el primero tiene sustantivo singular y el segundo plural, y eso es lo que se ve.

Y hay un detalle que sólo aparece en la escritura: en двадцати пяти el numeral es un sustantivo en genitivo, porque lo que sigue es un sustantivo en plural. двадцати два concuerda con la unidad. Una misma frase puede tener dos numerales en dos casos distintos.

## El gancho: el día que se contó

**И был вечер, и было утро: день один.** La fórmula final de cada día de la creación en Génesis tiene la misma forma: un sustantivo en genitivo plural para la parte del día, dos verbos en pasado para lo que pasó, y un numeral adjetival para la cuenta.

Один aquí es adjetivo, no sustantivo. Concurda con день, y día es masculino, y por eso no se ve forma femenina ni neutra. Pero el numeral se flexiona: в первый день, на первый день, о первом дне, con el genitivo, el dativo y el prepositivo del adjetivo.

La cuenta de Génesis llega al séptimo día, y el séptimo es седьмой. También se flexiona como adjetivo, y es lo que la liturgia usa cuando habla del día que viene: Благословен грядущий, bendito el que viene, con грядущий como participio y no como numeral. El sustantivo день es el mismo en toda la narración, y lo que cambia es el numeral que lo cualifica.
`),
  vocab: [
    V('пять', 'пять', 'cinco; nominativo'),
    V('пяти', 'пять', 'de cinco; genitivo, dativo y prepositivo'),
    V('пятью', 'пять', 'cinco; instrumental'),
    V('два', 'два', 'dos'),
    V('двух', 'два', 'de dos; genitivo'),
    V('двум', 'два', 'a dos; dativo'),
    V('двумя', 'два', 'con dos; instrumental'),
    V('одной', 'один', 'de una; genitivo femenino'),
    V('одного дня', 'день', 'de un día; numeral adjetival'),
    V('двое', 'два', 'dos personas; plural de dos'),
    V('сто', 'сто', 'cien'),
    V('ста', 'сто', 'de cien; genitivo, dativo e instrumental'),
    V('пять дней', 'день', 'cinco días; sustantivo en genitivo plural'),
    V('два дня', 'день', 'dos días; sustantivo en genitivo singular'),
    V('день один', 'день', 'el día uno; numeral adjetivo'),
    V('первый', 'первый', 'primero; ordinal que se flexiona como adjetivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En благодарю пятью, ¿qué caso es пятью?'),
    options: [T('Genitivo'), T('Instrumental'), T('Dativo')],
    answer: 1,
    hint: T(
      'Después de un verbo de movimiento o de acción el instrumental es el caso del medio, del camino y de la compañía.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: пять ___ (cinco días)'), answer: 'дней' },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el genitivo de два?'),
      options: [T('два'), T('двух'), T('двум')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ книги (dos libros)'), answer: 'две' },
  ],
  rules: [
    {
      n: '1',
      text: T('El numeral ruso se flexiona como sustantivo y tiene seis formas, una por caso.'),
    },
    {
      n: '2',
      text: T(
        '{Пять} tiene cinco formas distintas: {пяти} cubre el genitivo, el dativo y el prepositivo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Два} no tiene forma femenina separada: dos libros usa {две}, y la flexión es la misma.',
      ),
    },
    {
      n: '4',
      text: T('{Один} se flexiona como adjetivo, con género: {один}, {одна}, {одно}, {одни}.'),
    },
    {
      n: '5',
      text: T(
        'Después de 2 a 4 el sustantivo va al genitivo singular; de 5 en adelante, al genitivo plural.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cinco formas o seis'),
      text: T(
        'Пять tiene cinco formas para seis posiciones: nominativo пять, genitivo пяти, dativo пяти, acusativo пять, instrumental пятью, prepositivo пяти. El genitivo, el dativo y el prepositivo son la misma palabra. Para quien haya leído latín, el patrón es idéntico al de quinque, y lo que hay que aprender es la lista, no el mecanismo.',
      ),
    },
    {
      label: T('Dónde el numeral es adjetivo'),
      text: T(
        'Один, два, три, cuatro y los ordinales funcionan como adjetivos: concuerdan en género y número con el sustantivo. De cinco en adelante el sustantivo va al plural y el numeral deja de concordar. Una frase como двадцать два días tiene dos concordancias en el mismo sintagma: el compuesto concuerda con la unidad, y la unidad concuerda con día. Lo que se flexiona y lo que no cambia en medio de la frase.',
      ),
    },
  ],
  examples: [
    { text: 'пять дней', gloss: T('cinco días; sustantivo en genitivo plural') },
    { text: 'два дня', gloss: T('dos días; sustantivo en genitivo singular') },
    { text: 'пяти дней', gloss: T('de cinco días; el numeral en genitivo') },
    { text: 'благодарю пятью', gloss: T('agradezco con cinco; numeral en instrumental') },
    { text: 'одного дня', gloss: T('de un día; numeral adjetival en genitivo') },
    { text: 'одной книги', gloss: T('de un libro; numeral adjetival femenino en genitivo') },
    { text: 'двое детей', gloss: T('dos niños; plural de dos para personas') },
    { text: 'двух дней', gloss: T('de dos días; sustantivo plural, numeral genitivo') },
    { text: 'сто лет', gloss: T('cien años; sustantivo en genitivo plural') },
    {
      text: 'И был вечер, и было утро: день один',
      gloss: T('y fue tarde, y fue mañana: el día uno (Gn 1:5)'),
    },
  ],
  tables: [
    {
      caption: T('Los cinco numerales que aparecen en toda frase'),
      head: [T('Caso'), T('один'), T('два'), T('три'), T('пять')],
      rows: [
        [T('nominativo'), T('один'), T('два'), T('три'), T('пять')],
        [T('genitivo'), T('одного'), T('двух'), T('трёх'), T('пяти')],
        [T('dativo'), T('одному'), T('двум'), T('трём'), T('пяти')],
        [T('acusativo'), T('один'), T('два'), T('три'), T('пять')],
        [T('instrumental'), T('одним'), T('двумя'), T('тремя'), T('пятью')],
        [T('prepositivo'), T('об одном'), T('о двух'), T('о трёх'), T('о пяти')],
      ],
    },
    {
      caption: T('Un numeral en seis posiciones'),
      head: [T('Caso'), T('пять'), T('два'), T('сто'), T('двадцать')],
      rows: [
        [T('nominativo'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('genitivo'), T('пяти'), T('двух'), T('ста'), T('двадцати')],
        [T('dativo'), T('пяти'), T('двум'), T('стам'), T('двадцати')],
        [T('acusativo'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('instrumental'), T('пятью'), T('двумя'), T('стами'), T('двадцатью')],
        [T('prepositivo'), T('о пяти'), T('о двух'), T('о ста'), T('о двадцати')],
      ],
    },
    {
      caption: T('La regla de la cuenta'),
      head: [T('Numeral'), T('El sustantivo va'), T('Ejemplo'), T('Qué se flexiona')],
      rows: [
        [
          T('1, 21, 31'),
          T('nominativo singular'),
          T('двадцать один день'),
          T('el numeral, como adjetivo'),
        ],
        [T('2, 3, 4'), T('genitivo singular'), T('два дня, три месяца'), T('el sustantivo')],
        [T('5 a 20, 0'), T('genitivo plural'), T('пять дней, двадцать книг'), T('el numeral')],
        [
          T('un compuesto terminado en 2 a 4'),
          T('genitivo singular'),
          T('двадцать dos años'),
          T('el numeral, como sustantivo'),
        ],
      ],
    },
  ],
};
