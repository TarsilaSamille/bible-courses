import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('El nombre'),
  title: T('Genitivo, posesión y relativo'),
  subtitle: T('los cinco empleos de -nya, el afijo más productivo del indonesio'),
  body: C(`## Cinco empleos, una sílaba

{-nya} es el sufijo más productivo del indonesio, y es lo que sustituye casi todo lo que el portugués hace con preposiciones y artículos. Se une al final de una base y hace cinco cosas: posesión, objeto, lugar, beneficiario y nominalización.

Puede hacer tanto porque el indonesio no tiene caso. Donde el portugués cambiaría la preposición ({de}, {em}, {a}), el indonesio pone {-nya} y el lector deduce la función por el verbo que la rodea. El riesgo del sistema es el contrario de lo que se imagina: la información no falta, se repite.

Quien no conoce {-nya} lee {rumahnya} como si fuera un sustantivo nuevo. Quien lo conoce lee {-nya} como una pregunta: de quién, para quién, dónde, de qué.

## Posesión: el posesivo va antes

El portugués pone al poseedor tras una preposición: «o livro de Maria». El indonesio pone al poseedor **antes** del sustantivo, pegado: {buku Maria}. No hay preposición, no hay artículo, y el orden está invertido respecto al portugués.

Esto funciona con pronombres y con nombres. {rumah saya} «mi casa», {buku Petrus} «el libro de Pedro», {nama Tuhan} «el nombre de Dios».

Y hay una segunda vía, el clítico. En lugar de un poseedor aparte, {-nya} se vuelve {-ku}, {-mu} o {-nya} y se pega directamente al sustantivo: {rumahku} «mi casa», {namamu} «tu nombre», {kitabnya} «su libro». El {-nya} de tercera persona es idéntico al sufijo nominal, y por eso {kitabnya} puede significar «su libro» y «el libro» del que habla la oración.

El clítico plural es raro, y la forma normal es el poseedor por extenso: {rumah kami}, {rumah mereka}. Quien escribe {buku mereka} acierta; quien escribe {bukunya} con sujeto plural ha cambiado el número sin querer.

## Objeto, lugar y beneficiario

Aquí está la parte que parece tres empleos y es un solo mecanismo: {-nya} cerrado con una preposición. El portugués escribe «a ele», «para ele», «dele», «nele», cuatro palabras; el indonesio escribe {padanya}, {untuknya}, {darinya}, {di dalamnya}, cuatro palabras en las que el {-nya} es siempre el mismo pronombre de tercera persona.

{1} Objeto. El {-nya} pegado a un verbo es el objeto directo cliticizado: {melihatnya} «verle», {membacanya} «leerlo», {menulisnya} «escribirlo». En portugués el pronombre «o» o «a» va suelto tras el verbo; en indonesio se vuelve sufijo y desaparece. Es la operación más invisible de la lengua, y es la razón de que {melihat} y {melihatnya} sean palabras distintas para el lector.

{2} Lugar. Con sustantivos de lugar y de tiempo, el {-nya} marca la posesión del lugar, no la dirección: {bulannya} «en su mes», {tahunnya} «en su año», {rumahnya} «en su casa». Compara {di rumah} «en una casa» con {di rumahnya} «en su casa», que es la misma preposición con el pronombre pegado.

{3} Beneficiario. Es la preposición {pada} o {untuk} más el clítico: {kepadamu} «a ti», {untuknya} «para él», {beri padanya} «darle». El patrón más común del Nuevo Testamento es un verbo de transferencia seguido de {pada} más clítico: {memberikan kepadamu}, {mempersembahkan kepadanya}.

Y hay un cuarto uso, la nominalización, y es el más productivo de todos. El {-nya} después de un verbo convierte la oración en sustantivo: {datangnya} «la venida», {keluarannya} «la salida», {perjalanannya} «su viaje», {pemakaiannya} «el uso». El griego hace lo mismo con {-sis}, y por eso un Nuevo Testamento griego lleno de sustantivos abstractos encuentra al indonesio preparado.

Un detalle cierra el sistema: cuando el {-nya} es posesivo sobre un nombre propio, el nombre puede ir después. {Allah-nya} es «su Dios», y es común en vocativos, como en {Allah-ku}.

## Di mana hatimu, di situ juga bendaharaanmu

{Mateo 6:21} repite el mismo par dos veces, y el par es {di} más clítico: {Di mana hatimu, di situ juga bendaharaanmu}. El segundo miembro del par es {Perbendaharaanmu}, con el clítico de segunda persona en {-mu}.

El versículo en portugués necesita una construcción que un sintagma nominal no resuelve bien. El indonesio repite la estructura y deja que el sentido pase de lo abstracto a lo concreto: el tesoro que está donde está el corazón. Lo que el griego distinguía con dos palabras y el portugués con una locución, el indonesio lo hace repitiendo el patrón.

El patrón es este: {X-mu} significa «tu X», y la pregunta que el lector se hace antes de cada {X} es siempre la misma, de quién es. Quien ha olvidado que {hatimu} es «tu corazón» lee {bendaharaanmu} como dos sustantivos sin relación, y pierde el versículo entero.`),
  vocab: [
    V('-nya', 'nya', 'de, en, a (sufijo de posesión y objeto)'),
    V('-ku', 'ku', 'mío, de mí'),
    V('-mu', 'mu', 'tuyo, de ti'),
    V('rumah', 'rumah', 'casa'),
    V('buku', 'buku', 'libro'),
    V('nama', 'nama', 'nombre'),
    V('Tuhan', 'Tuhan', 'Señor, Dios'),
    V('kami', 'kami', 'nosotros'),
    V('mereka', 'mereka', 'ellos, ellas'),
    V('melihat', 'lihat', 'ver'),
    V('melihatnya', 'lihat', 'verle'),
    V('membaca', 'baca', 'leer'),
    V('membacanya', 'baca', 'leerlo'),
    V('kepadamu', 'pada', 'a ti'),
    V('untuknya', 'untuk', 'para él'),
    V('datangnya', 'datang', 'la venida (suya)'),
    V('hatimu', 'hati', 'tu corazón'),
    V('bendaharaan', 'bendaharaan', 'tesoro'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{-nya} hace cinco trabajos: posesión, objeto, lugar, beneficiario y nominalización.',
      ),
    },
    {
      n: '2',
      text: T('El poseedor va antes del sustantivo, sin preposición: {rumah saya}, {buku Petrus}.'),
    },
    {
      n: '3',
      text: T(
        'Como clítico, el poseedor se vuelve {-ku}, {-mu} o {-nya} y se pega: {rumahku}, {namamu}, {kitabnya}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El {-nya} sobre un verbo es el objeto cliticizado: {melihatnya} «verle». Tras una preposición es el pronombre de 3.ª persona: {padanya}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Tras un verbo, el {-nya} nominaliza la oración: {datangnya} «la venida», {keluarannya} «la salida».',
      ),
    },
  ],
  notes: [
    {
      label: T('El clítico y el poseedor'),
      text: T(
        'En general se prefiere el clítico ({namamu}) al poseedor aparte ({nama kamu}), porque el clítico marca la relación como estrecha. El poseedor por extenso aparece cuando el referente necesita relieve: {nama Allah yang baik}.',
      ),
    },
    {
      label: T('Dónde desaparece el -nya'),
      text: T(
        'Tras {akan} la cliticización es opcional con algunos verbos: {akan datang} y {akan datangnya} son ambos posibles, con diferencia de registro. En oraciones con {sudah} y {sedang} el clítico es más raro.',
      ),
    },
  ],
  examples: [
    { text: 'Rumah saya dekat pasar.', gloss: T('Mi casa está cerca del mercado.') },
    { text: 'Buku Petrus hilang.', gloss: T('El libro de Pedro ha desaparecido.') },
    { text: 'Namamu siapa?', gloss: T('¿Cómo te llamas?') },
    { text: 'Melihatnya di sudut itu.', gloss: T('Lo vi en aquella esquina.') },
    { text: 'Dia akan memberikannya kepadamu.', gloss: T('Él te lo dará.') },
    { text: 'Datangnya Nabi sudah dekat.', gloss: T('La venida del profeta está cerca.') },
    { text: 'Untuknya kita berkumpul.', gloss: T('Para él nos reunimos.') },
    { text: 'Rumahnya dekat.', gloss: T('Su casa está cerca.') },
    { text: 'Kita menunggu dia datang.', gloss: T('Esperamos que él venga.') },
  ],
  tables: [
    {
      caption: T('Os cinco empregos de -nya'),
      head: ['Emprego', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['posse', 'X + nya', 'rumahnya', 'a casa dele'],
        ['objeto', 'verbo + nya', 'melihatnya', 'vê-lo'],
        ['lugar', 'di + clítico', 'bulannya', 'no mês dele'],
        ['beneficiário', 'pada + clítico', 'padanya', 'a ele'],
        ['nominalização', 'verbo + nya', 'datangnya', 'a vinda'],
      ],
    },
    {
      caption: T('Posse por extenso e por clítico'),
      head: ['Via', 'Pronome', 'Exemplo', 'Leia como'],
      rows: [
        ['por extenso', 'saya', 'rumah saya', 'a minha casa'],
        ['por extenso', 'kamu', 'rumahmu atau rumah kamu', 'a tua casa'],
        ['por clítico', '-ku', 'rumahku', 'a minha casa'],
        ['por clítico', '-mu', 'namamu', 'o teu nome'],
        ['por clítico', '-nya', 'kitabnya', 'o livro dele'],
        ['plural por extenso', 'mereka', 'rumah mereka', 'a casa deles'],
      ],
    },
    {
      caption: T('Preposição mais clítico'),
      head: ['Preposição', 'Significado', 'Com -nya', 'Português'],
      rows: [
        ['pada', 'a, para', 'padanya', 'a ele'],
        ['untuk', 'para', 'untuknya', 'para ele'],
        ['dari', 'de', 'darinya', 'dele'],
        ['di', 'em, no', 'di dalamnya', 'neles'],
        ['ke', 'a, para', 'kepadanya', 'a eles'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué hace el {-nya} en {melihatnya}?'),
    options: [
      T('objeto cliticizado: «verle»'),
      T('posesión: «su vista»'),
      T('lugar: «en la vista»'),
      T('nominalización: «el ver»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el clítico: tu nombre = ___.'),
      answer: 'namamu',
      hint: T('Base más clítico de segunda persona.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «el libro de Pedro» sin preposición?'),
      options: [
        T('Buku Petrus'),
        T('Buku dari Petrus'),
        T('Buku untuk Petrus'),
        T('Buku di Petrus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el empleo del {-nya} con el ejemplo'),
      pairs: [
        { a: T('{kitabnya}'), b: T('posesión') },
        { a: T('{membacanya}'), b: T('objeto') },
        { a: T('{bulannya}'), b: T('lugar') },
        { a: T('{keluarannya}'), b: T('nominalización') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
