import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Adverbio'),
  title: T('El adverbio que sale del adjetivo'),
  subtitle: T('νοερός — νοερώς — γλυκύς — γλυκέως'),
  body: C(`## El griego fabrica adverbios por regla

El latín no flexiona el adverbio: {bene} de {bonus}, {male} de {malus}, y la relación es por convención. El griego moderno es lo contrario: el adverbio es el adjetivo con la terminación cambiada, y el cambio es mecánico después de la primera declinación.

La regla principal cabe en una línea: **un adjetivo en {-ος} da un adverbio en {-ώς}**. {νοερός} da {νοερώς}, {σοφός} da {σοφώς}, {χαρίσιος} da {χαρισίως}, {ωραίος} da {ωραία}, {γλυκύς} da {γλυκέως}. No hay excepción en la serie; lo que cambia es la terminación del adjetivo de origen, no la del adverbio.

El adverbio es una sola palabra, y no flexiona: {νοερώς} es igual para el masculino, el femenino y el plural. El español tiene tres, "rápido", "rápida", "rápidos"; el griego tiene uno, y sirve para los cuatro usos.

## Cuatro terminaciones, cuatro adverbios

La {-ώς} no es la única. Cada familia de adjetivos tiene la suya, y el patrón se estabiliza después de la primera declinación:

- un adjetivo en {-ικός} da {-ικά}: {πραγματικός} da {πραγματικά}
- un adjetivo en {-ύς} da {-έως}: {γλυκύς} da {γλυκέως}, {πικρύς} da {πικρέως}
- un adjetivo en {-ος} da {-ώς}: {καλός} da {καλά}, {ωραίος} da {ωραία}
- un adjetivo corto da {-α}: {πολύς} da {πολύ}, {λίγος} da {λίγο}

Quien descubra cuál es la terminación de un adjetivo ya sabe el adverbio, sin haberlo visto nunca. Esa es la diferencia entre memorizar y deducir.

## El adverbio no tiene sitio fijo

Mientras el sustantivo casi siempre va detrás del verbo, el adverbio puede ir antes, en medio o después. {Μιλάει σοφώς}, {σοφώς μιλάει}, {μιλάει σοφώς}. Las tres son la misma frase, y la traducción solo cambia cuando el adverbio cae en posición inicial, porque ahí pasa a ser el foco.

El adverbio de lugar es todavía más suelto: {εδώ}, {εκεί}, {αλλού}, {πάνω}, {κάτω}, {μέσα}, {έξω}. Ninguno tiene sintaxis propia, y por eso su posición es lo único que aporta la frase.

## Adjetivo y adverbio en la misma frase

La distinción que el griego antiguo trataba como algo menor es lo que separa {ο σοφός λέει} de {σοφώς λέει}. El primero dice que el hombre es sabio, y el contenido es sobre él. El segundo dice que habla bien, y el contenido es sobre el acto de hablar. Son afirmaciones distintas sobre cosas distintas, y elegir el adverbio es elegir lo que se quiere afirmar.

En {μιλούσε σοφώς} el adverbio tiene una {-ώς} que viene del adjetivo {σοφός}, y el verbo está en el imperfecto. Quien traduce lee "hablaba sabiamente" y acierta las dos cosas de una vez.

## El adverbio en la Escritura

> Ὁ δὲ πιστεύων εἰς ἐμὲ καθὼς εἶπεν ἡ γραφή, ποταμοὶ ἐκπορεύσονται ἐκ τῆς κοιλίας αὐτοῦ ὕδατος ζῶντος.

{Τῆς} es un sustantivo que no flexiona, {ζῶντος} es un genitivo que concuerda con {ὕδατος}, y {ποταμοὶ} es un nominativo plural sin artículo. Todo eso es sintaxis de sustantivo. El adverbio está en {ἐκπορεύσονται}, que es la tercera persona del plural del futuro de {ἐκπορεύομαι}, y la oración entera dice "saldrán". Quien busca adverbios en el versículo encuentra sustantivos, porque el griego antiguo tenía pocos y la Escritura casi no los usa.`),
  vocab: [
    V('νοερός', 'νοερός', 'mental'),
    V('νοερώς', 'νοερώς', 'mentalmente'),
    V('σοφός', 'σοφός', 'sabio'),
    V('σοφώς', 'σοφώς', 'sabiamente'),
    V('γλυκύς', 'γλυκύς', 'dulce'),
    V('γλυκέως', 'γλυκέως', 'dulcemente'),
    V('καλός', 'καλός', 'bueno'),
    V('καλά', 'καλά', 'bien'),
    V('χαρίσιος', 'χαρίσιος', 'agradable'),
    V('χαρισίως', 'χαρισίως', 'agradablemente'),
    V('πραγματικός', 'πραγματικός', 'práctico'),
    V('πραγματικά', 'πραγματικά', 'prácticamente'),
    V('πολύ', 'πολύ', 'mucho'),
    V('λίγο', 'λίγο', 'poco'),
    V('εδώ', 'εδώ', 'aquí'),
    V('πάνω', 'πάνω', 'encima'),
    V('μιλάει', 'μιλάω', 'habla'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Un adjetivo en -ος da un adverbio en -ώς: νοερός → νοερώς, σοφός → σοφώς.'),
    },
    { n: '§2', text: T('Un adjetivo en -ικός da -ικά, en -ύς da -έως, y el corto da -α.') },
    {
      n: '§3',
      text: T('El adverbio no flexiona: es el mismo para todos los géneros y todos los números.'),
    },
    {
      n: '§4',
      text: T(
        'El adverbio puede ir antes, en medio o después del verbo; solo en posición inicial pasa a ser el foco.',
      ),
    },
  ],
  notes: [
    {
      label: T('Latín'),
      text: T(
        'bene, male y male volo son formas fijas por convención, no por regla. El griego hace lo mismo por morfología, y por eso la lista de adverbios es infinita en vez de memorizada.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'En la Escritura el adverbio aparece casi siempre en -ως, y casi siempre en posición inicial: καθὼς, ὡσαύτως, ὁμοίως. Es la posición que marca la comparación, y por eso el griego antiguo ponía el adverbio de comparación donde el moderno no lo pone.',
      ),
    },
  ],
  examples: [
    { text: 'μιλάει σοφώς', gloss: T('habla sabiamente') },
    { text: 'μιλάει καλά', gloss: T('habla bien') },
    { text: 'ζει ασφαλώς', gloss: T('vive con seguridad') },
    { text: 'περπατάει άσχημα', gloss: T('anda mal') },
    { text: 'πίνει λίγο', gloss: T('bebe poco') },
    { text: 'δουλεύει πολύ', gloss: T('trabaja mucho') },
    { text: 'εδώ μιλάει ήσυχα', gloss: T('aquí habla bajito') },
    { text: 'ο σοφός λέει σοφώς', gloss: T('el sabio habla sabiamente') },
  ],
  tables: [
    {
      caption: T('Adjetivo y adverbio'),
      head: ['Επίθετο', 'Επίρρημα'],
      rows: [
        ['νοερός', 'νοερώς'],
        ['σοφός', 'σοφώς'],
        ['χαρίσιος', 'χαρισίως'],
        ['γλυκύς', 'γλυκέως'],
        ['πικρύς', 'πικρέως'],
      ],
    },
    {
      caption: T('La terminación que decide'),
      head: ['Τελευταίο επιθέτου', 'Τελευταίο επιρρήματος', 'Ζεύγος'],
      rows: [
        ['-ος', '-ώς', 'σοφός → σοφώς'],
        ['-ικός', '-ικά', 'πραγματικός → πραγματικά'],
        ['-ύς', '-έως', 'γλυκύς → γλυκέως'],
        ['βραχύ', '-α', 'πολύς → πολύ'],
      ],
    },
    {
      caption: T('Adverbios de lugar'),
      head: ['Είδος', 'Επίρρημα'],
      rows: [
        ['σταθερός τόπος', 'εδώ, εκεί, αλλού'],
        ['θέση', 'πάνω, κάτω'],
        ['χώρος', 'μέσα, έξω'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el adverbio de "σοφός"?'),
    options: [T('σοφία'), T('σοφώς'), T('σοφά'), T('σοφικά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο άνθρωπος είναι ___ (mental)'),
      answer: 'νοερός',
      hint: T('Un adjetivo, no un adverbio'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se forma el adverbio de "γλυκύς"?'),
      options: [T('γλυκέως'), T('γλυκά'), T('γλυκώς'), T('γλυκιά')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Par adjetivo-adverbio'),
      pairs: [
        { a: 'σοφός', b: T('σοφώς') },
        { a: 'καλός', b: T('καλά') },
        { a: 'πραγματικός', b: T('πραγματικά') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('μιλάει ___ (bien, adverbio)'),
      answer: 'καλά',
      hint: T('El adverbio de καλός'),
    },
  ],
};
