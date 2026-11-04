import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Adverbio'),
  title: T('La negación que vino de la nada'),
  subtitle: T('δεν λέω — μη λέγεις — οὐ λέγω'),
  body: C(`## δεν es la nada

La palabra que niega en el griego moderno no es una palabra negativa: es {οὐδέν}, "nada", con la parte de delante comidas. {δεν} es lo que queda de {οὐδέν} cuando la segunda sílaba se volvió una {ν} de enlace.

La consecuencia es práctica, y es grande: **el griego moderno no tiene adverbio negativo**. Quien dice "no" está diciendo "nada" y tirando el resto de la frase. {Δεν έρχεται} es literalmente "nada viene", y quien traduce palabra por palabra escribe "no viene" porque es lo que la frase quiere decir.

La posición es fija: {δεν} va antes del verbo, siempre. No después, como en inglés. No pegado a él, como en español. Antes.

## δεν, μην, μη

El griego escribe la misma palabra de tres maneras, y la elección es regla de pronunciación, no de sentido. {δεν} es la forma general y la más hablada. {μην} es la forma escrita, que se usa antes de verbo fuerte o de consonante. {μη} es la forma escrita antes de vocal o de verbo débil.

{δεν θα έρθει}, {δεν μπορεί}, {δεν ήρθε}: las tres son la misma frase. Ninguna niega más ni menos que las otras dos. Lo que cambia es el sonido, y el sonido se deduce de la primera letra del verbo que viene después.

## οὐ y μη: el par que usa la Biblia

El griego antiguo, y con él la Biblia, tiene dos negativas con regla. {οὐ} niega el indicativo: {οὐ λέγω}, "no digo". {μη} niega el imperativo y el infinitivo: {μη λέγε}, "no digas". {οὐκ} es {οὐ} cuando el verbo empieza por vocal: {οὐκ ἔρχεται}.

La regla se escribe en la elección de la partícula: **la negativa que viene con verbo conjugado es {οὐ}; la que viene con imperativo o infinitivo es {μη}**. No hay tercera posibilidad en todo el griego antiguo.

## La prohibitiva es una sola

En el griego moderno hay una única construcción prohibitiva: {μη} más el imperativo de segunda persona del singular. {Μη μιλήσεις}, "no hables". {Μη φύγεις}, "no te vayas". No hay {μη} más subjuntivo, no hay {μη} más futuro, y no hay doble prohibitiva.

Lo que reemplaza al imperativo en las otras personas es el imperativo más {να}, que es una construcción mucho más tardía: {Μην πεις}, {Μην πάτε}, {Μην τρέξετε}. Quien escribe {μη μην} está juntando dos lenguas.

## Dónde está la negación en la Escritura

> Ὁ δὲ λέγων αὐτῷ, Μὴ σπεύσῃς, κύριε.

Es la mujer sirofenicia del capítulo 7 de Marcos, y la frase entera cabe en una regla. {λέγων} es un participio presente, el verbo principal está en el indicativo, y aun así la negativa es {μὴ}. La construcción no es la prohibitiva: es un pedido.

Al español pasa "no tengas prisa", y suena a consejo. En griego es {μή} más un verbo en subjuntivo ({σπεύσῃς}), que es la construcción del pedido y del deseo. Quien traduce al pie de la letra escribe "no te apresures" y pierde que la mujer está pidiendo, no prohibiendo.`),
  vocab: [
    V('δεν', 'δεν', 'no'),
    V('δέν', 'δεν', 'no (coloquial, con acento)'),
    V('μην', 'μην', 'no (escrito)'),
    V('μη', 'μη', 'no (antes de vocal)'),
    V('οὐ', 'οὐ', 'no (indicativo, griego antiguo)'),
    V('οὐκ', 'οὐκ', 'no (antes de vocal)'),
    V('οὐδέν', 'οὐδέν', 'nada'),
    V('λέω', 'λέω', 'digo'),
    V('λέγω', 'λέγω', 'digo'),
    V('μη λέγεις', 'λέγω', 'no digas'),
    V('μη φύγεις', 'φεύγω', 'no te vayas'),
    V('μη σπεύσῃς', 'σπεύδω', 'no te apresures'),
    V('έρχεται', 'έρχομαι', 'viene'),
    V('ήρθε', 'έρχομαι', 'vino'),
    V('θα έρθει', 'έρχομαι', 'vendrá'),
    V('λέγων', 'λέγω', 'que dice (participio)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El griego moderno no tiene adverbio negativo: δεν viene de οὐδέν, "nada", y va antes del verbo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'δεν, μην y μη son la misma palabra en tres grafías; la elección sigue la primera letra del verbo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'En el griego antiguo οὐ niega el indicativo y μη niega el imperativo y el infinitivo.',
      ),
    },
    {
      n: '§4',
      text: T('Hay una única prohibitiva: μη más el imperativo de segunda persona del singular.'),
    },
  ],
  notes: [
    {
      label: T('Posición'),
      text: T(
        'La negación en griego es preverbal y fija. En español el "no" también precede al verbo, pero en inglés va detrás, y por eso la traducción automática falla en las dos lenguas.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'μὴ σπεύσῃς no es un imperativo: σπεύσῃς está en el subjuntivo aoristo. La Escritura usa μὴ fuera de la prohibitiva, con el subjuntivo, para pedir y desear, y ese uso es el que el español no distingue de una orden.',
      ),
    },
  ],
  examples: [
    { text: 'δεν λέω', gloss: T('no digo') },
    { text: 'δεν έρχεται', gloss: T('no viene') },
    { text: 'δεν θα έρθει', gloss: T('no vendrá') },
    { text: 'δεν ήρθε', gloss: T('no vino') },
    { text: 'μη λέγεις', gloss: T('no digas') },
    { text: 'μη φύγεις', gloss: T('no te vayas') },
    { text: 'δεν μπορεί', gloss: T('no puede') },
    { text: 'οὐ λέγω', gloss: T('no digo (griego antiguo)') },
  ],
  tables: [
    {
      caption: T('Las tres grafías'),
      head: ['Γραφή', 'Πότε', 'Παράδειγμα'],
      rows: [
        ['δεν', 'γενική μορφή', 'δεν έρχεται'],
        ['μην', 'γραπτή, σύμφωνο', 'δεν μπορεί'],
        ['μη', 'γραπτή, φωνήεν', 'δεν ήρθε'],
      ],
    },
    {
      caption: T('El par del griego antiguo'),
      head: ['Άρνηση', 'Ρήμα', 'Παράδειγμα'],
      rows: [
        ['οὐ', 'οριστική', 'οὐ λέγω'],
        ['οὐκ', 'οριστική, φωνήεν', 'οὐκ ἔρχεται'],
        ['μή', 'προστακτική, άπειρος', 'μή λέγε'],
      ],
    },
    {
      caption: T('Dónde queda la negación'),
      head: ['Χρόνος', 'Μορφή'],
      rows: [
        ['ενεστώτας', 'δεν μιλάει'],
        ['αόριστος', 'δεν μίλησε'],
        ['μέλλοντας', 'δεν θα μιλήσει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma escrita de la negativa antes de vocal?'),
    options: [T('δεν'), T('μην'), T('μη'), T('οὐδέν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negativa antes de vocal)'),
      answer: 'δεν',
      hint: T('La forma general'),
    },
    {
      kind: 'choose',
      prompt: T('En el griego antiguo, ¿qué negativa va con el imperativo?'),
      options: [T('οὐ'), T('μή'), T('οὐκ'), T('οὐδέν')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negativa y función'),
      pairs: [
        { a: 'δεν', b: T('indicativo moderno') },
        { a: 'οὐ', b: T('indicativo antiguo') },
        { a: 'μη', b: T('prohibición') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ μιλήσεις (prohibitiva)'),
      answer: 'Μη',
      hint: T('Con mayúscula'),
    },
  ],
};
