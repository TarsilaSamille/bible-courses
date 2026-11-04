import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Numeral'),
  title: T('Ordinales, tiempo y medida'),
  subtitle: T('πρώτος — τον τρίτο χρόνο — τον πρώτο'),
  body: C(`## El ordinal es un adjetivo

{πρώτος}, {δεύτερος}, {τρίτος}, {τέταρτος}, {πέμπτος} son adjetivos corrientes y flexionan como adjetivos: {ο πρώτος}, {η πρώτη}, {το πρώτο}, {οι πρώτοι}. No tienen nada de especial, y por eso se aprenden como sustantivos comunes.

La flexión del griego antiguo era más rica: en {πρῶτος} el neutro tenía {πρῶτον}, y la forma abreviada sobrevive en {τὸν πρῶτον}, el acusativo de {τὸν πρῶτον χρόνον}. Quien lee la Escritura encuentra esas formas y necesita saber que son el mismo numeral.

## En el griego moderno el tiempo va en acusativo

El griego antiguo marcaba el tiempo con dativo: {τῷ τρίτῳ ἔτει}, "en el tercer año". El griego moderno perdió el dativo y lo puso todo en acusativo, sin preposición: {τον τρίτο χρόνο}, {το τρίτο έτος}, {τις πέντε ώρες}.

Es una de las pocas cosas en que el griego hablado y la Biblia dicen lo mismo con palabras distintas. El sentido es idéntico, el caso no. Al traducir {τῷ τρίτῳ ἔτει} al español no se nota nada, y al traducirlo al griego moderno hay que cambiar el caso.

La hora es todavía más sencilla y se escribe con numeral: {στις τέσσερις}, "a las cuatro". {στις τέσσερις το απόγευμα}, "a las cuatro de la tarde". El numeral viene directo, sin sustantivo, y lo que dice la parte del día es el adverbio {το}.

## El ordinal en acusativo es adverbial

Un numeral en acusativo, sin sustantivo, funciona como adverbio de orden. {Τον πρώτο} significa "primero", y {τον δεύτερο} significa "después". No es sustantivo ni artículo: es el numeral puro, desplazado.

{Τον πρώτο μιλάει, μετά εγώ} quiere decir "él habla primero, después yo". En el griego antiguo el acusativo adverbial era aún más común, y por eso {τὸν πρῶτον} aparece tanto en los evangelios.

## Medida y cantidad

Medida y tiempo siguen el mismo camino. {μία ώρα}, {δύο μέρες}, {τρία χρόνια}. El numeral concuerda con el sustantivo cuando el sustantivo es lo que se cuenta: {δύο μέρες}, {μία ώρα}. Y el genitivo aparece cuando lo que se cuenta es la unidad dentro de algo mayor: {δύο μέρες ταξιδιού}, "dos días de viaje".

La diferencia con el español se ve en {πέντε χρόνια}: el griego escribe en plural lo que el español escribe en singular, porque {χρόνια} es neutro y el plural neutro griego es {-ια}. {Ένα χρόνο} es singular y {δύο χρόνια} es plural, y la forma escrita es la misma en los dos, porque {χρόνια} sirve para los dos. Por eso el griego escribe {δύο χρόνια} y no {δύο χρόνος}.

## Dónde aparecen los ordinales en la Escritura

> Καὶ ἤρξατο Ἰησοῦς κηρύσσειν ἐν τῇ Γαλιλαίᾳ τῷ Ἰωάννῃ τῷ βαπτιστῇ.

{τῷ Ἰωάννῃ} es dativo: un nombre de persona después de verbo o preposición va allí. {βαπτιστῇ} también, y es un participio sustantivado que funciona como sustantivo corriente. El tiempo, en este caso, no aparece.

La construcción que aparece enseguida es toda ordinal: {ἐν ἔτει πεντηκοστῷ καὶ τριακοστῷ}, "en el año treinta y cinco". {πεντηκοστῷ} y {τριακοστῷ} son dos ordinales en dativo, y el {καὶ} entre ellos hace la suma. El español hace la misma suma con una palabra, y por eso la frase griega parece más larga de lo que es.`),
  vocab: [
    V('πρώτος', 'πρώτος', 'primero'),
    V('πρώτη', 'πρώτος', 'primera'),
    V('δεύτερος', 'δεύτερος', 'segundo'),
    V('τρίτος', 'τρίτος', 'tercero'),
    V('τέταρτος', 'τέταρτος', 'cuarto'),
    V('τον τρίτο χρόνο', 'τρίτος', 'en el tercer año'),
    V('το τρίτο έτος', 'τρίτος', 'el tercer año'),
    V('τον πρώτο', 'πρώτος', 'primero (adverbial)'),
    V('τον δεύτερο', 'δεύτερος', 'después'),
    V('μία ώρα', 'ώρα', 'una hora'),
    V('δύο μέρες', 'μέρα', 'dos días'),
    V('πέντε χρόνια', 'χρόνος', 'cinco años'),
    V('στις τέσσερις', 'τέσσερις', 'a las cuatro'),
    V('το απόγευμα', 'απόγευμα', 'por la tarde'),
    V('χρόνια', 'χρόνος', 'años'),
    V('ταξίδι', 'ταξίδι', 'viaje'),
  ],
  rules: [
    { n: '§1', text: T('El ordinal flexiona como un adjetivo: ο πρώτος, η πρώτη, το πρώτο.') },
    {
      n: '§2',
      text: T('En el griego moderno el tiempo va en acusativo, sin preposición: τον τρίτο χρόνο.'),
    },
    {
      n: '§3',
      text: T(
        'El numeral en acusativo, sin sustantivo, es adverbio de orden: τον πρώτο, "primero".',
      ),
    },
    { n: '§4', text: T('La hora se escribe con numeral y adverbio: στις τέσσερις το απόγευμα.') },
  ],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'En la Escritura el tiempo va en dativo, τῷ τρίτῳ ἔτει, porque el dativo todavía existía. El caso cambió, la idea no; quien traduce al griego moderno tiene que cambiar el caso sin cambiar el sentido.',
      ),
    },
    {
      label: T('Plural'),
      text: T(
        'χρόνια es a la vez el singular y el plural de χρόνος. Ningún acento los diferencia, y por eso la frase necesita el numeral para decir si habla de un año o de muchos.',
      ),
    },
  ],
  examples: [
    { text: 'ο πρώτος άνθρωπος', gloss: T('el primer hombre') },
    { text: 'η τρίτη μέρα', gloss: T('el tercer día') },
    { text: 'τον τρίτο χρόνο', gloss: T('en el tercer año') },
    { text: 'το τρίτο έτος', gloss: T('el tercer año') },
    { text: 'τον πρώτο μιλάει', gloss: T('él habla primero') },
    { text: 'στις τέσσερις το απόγευμα', gloss: T('a las cuatro de la tarde') },
    { text: 'δύο μέρες ταξιδιού', gloss: T('dos días de viaje') },
    { text: 'πέντε χρόνια μετά', gloss: T('cinco años después') },
  ],
  tables: [
    {
      caption: T('Los cinco primeros ordinales'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['πρώτος', 'πρώτος', 'πρώτη', 'πρώτο'],
        ['δεύτερος', 'δεύτερος', 'δεύτερη', 'δεύτερο'],
        ['τρίτος', 'τρίτος', 'τρίτη', 'τρίτο'],
        ['τέταρτος', 'τέταρτος', 'τέταρτη', 'τέταρτο'],
        ['πέμπτος', 'πέμπτος', 'πέμπτη', 'πέμπτο'],
      ],
    },
    {
      caption: T('Tiempo y medida'),
      head: ['Τύπος', 'Παράδειγμα'],
      rows: [
        ['έτος', 'το τρίτο έτος'],
        ['μήνας', 'τον δεύτερο μήνα'],
        ['ώρα', 'στις τέσσερις'],
        ['διάρκεια', 'δύο μέρες'],
      ],
    },
    {
      caption: T('Ordinal como adverbio'),
      head: ['Κλίση', 'Σχήμα', 'Παράδειγμα'],
      rows: [
        ['αἰτιατική', 'τον + τακτικό', 'τον πρώτο'],
        ['ουδέτερο', 'τακτικό πληθυντικού', 'πρώτα'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice "en el tercer año" en griego moderno?'),
    options: [
      T('στον τρίτο έτος'),
      T('τον τρίτο χρόνο'),
      T('στον τρίτον χρόνο'),
      T('τον τρίτος χρόνος'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ πρώτη μέρα (femenino de "primero" en nominativo)'),
      answer: 'Η',
      hint: T('Artículo femenino'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa el ordinal como adverbio?'),
      options: [T('ο πρώτος'), T('τον πρώτο'), T('πρώτος'), T('του πρώτου')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ordinal y número'),
      pairs: [
        { a: 'πρώτος', b: T('1.º') },
        { a: 'δεύτερος', b: T('2.º') },
        { a: 'τρίτος', b: T('3.º') },
        { a: 'τέταρτος', b: T('4.º') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ τέσσερις το απόγευμα (preposición de la hora)'),
      answer: 'στις',
      hint: T('La palabra griega para "a las"'),
    },
  ],
};
