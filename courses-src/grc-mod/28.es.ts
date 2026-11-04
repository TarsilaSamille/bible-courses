import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Sintaxis'),
  title: T('El orden de las palabras es libre'),
  subtitle: T('Το σπίτι είναι μικρό — Μικρό είναι το σπίτι'),
  body: C(`## Casi todo puede moverse

Una frase griega no tiene orden fijo. {Το σπίτι είναι μικρό}, {Μικρό είναι το σπίτι}, {Είναι το σπίτι μικρό} son la misma frase y tres frases verdaderas, porque el orden le dice al oyente cuál es el tema.

El español tiene dos órdenes y media. El griego tiene todas las que se quieran, y la información está en qué pieza se puso delante. Quien traduce y pone el sujeto primero, como el español obliga, hace que el griego diga lo contrario de lo que decía.

La regla es de lectura, no de escritura: **el primer elemento de la frase griega es el foco**. {Μικρό είναι το σπίτι} no informa que la casa es pequeña; informa que la casa es el tema y el tamaño es el dato nuevo.

## Lo que no se mueve

Dos cosas se quedan en su sitio. La negación va antes del verbo, siempre: {δεν έρχεται} y no {έρχεται δεν}. Y el artículo va pegado al sustantivo que determina: {το σπίτι}, nunca {σπίτι το}.

El verbo también tiene una posición estable en el medio. En griego el verbo conjugado va después del sujeto, pero no el primero como en español. {Εγώ γράφω} y no {Γράφω εγώ}. Lo que puede ocupar el primer lugar es el adverbio, el objeto o la negación.

La regla práctica es: deja el verbo donde está y mueve todo lo demás.

## Donde el orden cambia el sentido

Los dos casos en que la traducción cambia de verdad son el tiempo y la negación. {Δεν έγραψα το βιβλίο} y {Το βιβλίο δεν έγραψα} quieren decir lo mismo en español. En griego la segunda pone el libro como tema y dice que el problema es el libro, no la escritura.

Con un adverbio es lo mismo: {Σήμερα έρχομαι}, "hoy vengo", y {Έρχομαι σήμερα}, que es neutro. Si el adverbio abre la frase, es el foco: {Σήμερα πάμε}, "hoy es cuando vamos".

Y {δέ} hace el mismo trabajo que el "pero": {Έγραψα, δεν έφαγα}, "escribí, no comí". El segundo elemento de la lista destaca porque viene justo después de la conjunción.

## El griego antiguo tiene una posición fija

Hay que decirlo, porque quien traduce el Nuevo Testamento se topa con eso. El griego antiguo organiza la oración en dos posiciones: el verbo ocupa la segunda, y todo lo que viene antes es el tema.

{Καὶ ἐποίησεν ἄρτον καὶ ἐπέδωκεν αὐτῷ} significa que el verbo {ἐποίησεν} está en segunda posición. Quien entiende el griego moderno y lee el antiguo va a buscar el verbo antes del objeto, y el texto parece estar fuera de orden.

La diferencia es real y tiene consecuencia: en el griego antiguo el orden es información sobre el tema, y en el griego moderno es información sobre el foco. La pregunta cambia de pregunta.

## Dónde está el orden en la Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{λέγει αὐτῷ} tiene el verbo en segundo lugar y {αὐτῷ} en tercero: la oración entera se divide en dos bloques, y el segundo es lo que el verbo recibe. En el griego moderno la misma frase sería {ο Ιησούς του λέει}, y la diferencia no es de forma, es de orden.

Los imperativos que siguen, {ἀνάστηθι}, {ἆρον}, {περιπάτει}, son la respuesta: tres verbos, cero sujeto, tres acciones. El sujeto desaparece en el griego antiguo igual que en el moderno, y la frase queda una secuencia de órdenes.`),
  vocab: [
    V('το σπίτι', 'το σπίτι', 'la casa'),
    V('είναι', 'είμαι', 'es'),
    V('μικρό', 'μικρός', 'pequeño'),
    V('γράφω', 'γράφω', 'escribo'),
    V('έγω', 'εγώ', 'yo'),
    V('δεν', 'δεν', 'no'),
    V('έρχεται', 'έρχομαι', 'viene'),
    V('σήμερα', 'σήμερα', 'hoy'),
    V('έρχομαι', 'έρχομαι', 'vengo'),
    V('πάμε', 'πηγαίνω', 'vamos'),
    V('τὸ βιβλίο', 'τὸ βιβλίο', 'el libro'),
    V('λέγει', 'λέγω', 'dice'),
    V('ἀνάστηθι', 'ἀνίσταμαι', 'levántate'),
    V('περιπάτει', 'περιπατέω', 'camina'),
  ],
  rules: [
    {
      n: '§1',
      text: T('El orden del griego moderno es libre: lo que se mueve es el foco, no el sentido.'),
    },
    { n: '§2', text: T('El primer elemento de la frase es el foco.') },
    {
      n: '§3',
      text: T('La negación nunca pasa del verbo, y el artículo nunca se separa del sustantivo.'),
    },
    {
      n: '§4',
      text: T(
        'El griego antiguo pone el verbo en segunda posición; el moderno lo deja en el medio.',
      ),
    },
  ],
  notes: [
    {
      label: T('Difícil de ver'),
      text: T(
        'El orden libre solo se ve cuando la frase tiene dos piezas del mismo peso. Con sujeto, verbo y objeto la diferencia es mínima, y por eso el fenómeno pasa desapercibido en las primeras frases que se leen.',
      ),
    },
    {
      label: T('Traducción'),
      text: T(
        'Cuando el griego antiguo pone el verbo en segundo lugar, la traducción al español casi siempre pone el sujeto primero, y el resultado es una frase sobre la persona en vez de una frase sobre el hecho. Cambiar el orden es cambiar el tema.',
      ),
    },
  ],
  examples: [
    { text: 'το σπίτι είναι μικρό', gloss: T('la casa es pequeña') },
    { text: 'μικρό είναι το σπίτι', gloss: T('pequeña es la casa') },
    { text: 'είναι το σπίτι μικρό', gloss: T('es la casa pequeña') },
    { text: 'δεν έρχεται σήμερα', gloss: T('no viene hoy') },
    { text: 'σήμερα δεν έρχεται', gloss: T('hoy es cuando no viene') },
    { text: 'το βιβλίο δεν έγραψα', gloss: T('el libro es lo que no escribí') },
    { text: 'εγώ γράφω το βιβλίο', gloss: T('yo escribo el libro') },
    { text: 'γράφω το βιβλίο', gloss: T('escribo el libro') },
  ],
  tables: [
    {
      caption: T('Una frase, tres focos'),
      head: ['Τάξη', 'Έμφαση', 'Παράδειγμα'],
      rows: [
        ['σπίτι', 'το σπίτι', 'το σπίτι είναι μικρό'],
        ['μικρό', 'το μέγεθος', 'μικρό είναι το σπίτι'],
        ['είναι', 'η κατάφαση', 'είναι το σπίτι μικρό'],
      ],
    },
    {
      caption: T('Lo que no se mueve'),
      head: ['Στοιχείο', 'Περιορισμός'],
      rows: [
        ['η άρνηση', 'πριν το ρήμα'],
        ['το άρθρο', 'κολλημένο στο ουσιαστικό'],
        ['ρήμα', 'μετά το υποκείμενο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "μικρό είναι το σπίτι", ¿qué está en foco?'),
    options: [T('la casa'), T('el tamaño'), T('el verbo'), T('el posesivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negación, posición fija)'),
      answer: 'Δεν',
      hint: T('Con mayúscula'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde pone el griego antiguo el verbo conjugado?'),
      options: [
        T('en la primera posición'),
        T('en la segunda posición'),
        T('al final'),
        T('antes del sujeto'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Posición y función'),
      pairs: [
        { a: 'primeiro elemento', b: T('foco') },
        { a: 'negação', b: T('antes del verbo') },
        { a: 'artigo', b: T('pegado al sustantivo') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('το βιβλίο ___ έγραψα (negación, el libro es el tema)'),
      answer: 'δεν',
      hint: T('La negativa va después del foco'),
    },
  ],
};
