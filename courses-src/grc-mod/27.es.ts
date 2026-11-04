import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Verbo'),
  title: T('Dónde queda la negación en cada tiempo'),
  subtitle: T('δεν έγραψα — δεν έχω γράψει — δεν θα γράψω'),
  body: C(`## La negación entra en el tiempo, no antes de él

En español la negación es una palabra fija que va antes del verbo: "no escribo", "no escribí", "no escribiré". En griego también, y por eso parece igual. La diferencia está en lo que le pasa al verbo.

En el presente y en el aoristo, {δεν} va justo antes del verbo: {δεν γράφω}, {δεν έγραψα}. En el futuro, {δεν} va antes de {θα}, y {θα} se queda con el verbo: {δεν θα γράψω}. En el perfecto, {δεν} entra en el sitio del auxiliar.

**El patrón es el mismo en los tres**, y es este: la negación ocupa la posición más a la izquierda que la construcción verbal deja libre. En {δεν θα γράψω}, el {δεν} no está antes de {γράψω}, está antes de {θα}. Y en {δεν έχω γράψει}, el {δεν} se metió en medio de la locución.

## En el futuro, δεν manda sobre θα

El futuro no es un verbo, es una partícula, y la partícula es lo primero que la frase encuentra. Por eso {δεν} va antes que ella: {δεν θα γράψω}.

Un aprendiz que viene del español escribe {θα δεν γράψω}, el orden que sugiere el español y que nadie dice. La regla es que lo que va primero en la locución recibe la negación, y en el futuro la locución empieza en {θα}.

Quien escribe {δέν θα γράψω} con acento no se equivoca: {δέν} es la forma enfática y la más común en el habla. El acento cambia el tono, no la gramática.

## En el perfecto, δεν ocupa el lugar del auxiliar

Esta es la construcción que parece imposible y no lo es. {έχω γράψει} es el perfecto, y la forma negativa es {δεν έχω γράψει}. El {δεν} no sustituye al {έχω}: se queda delante de él.

Pero hay otro sitio, y es el que usa el español: {δεν έχω} es la forma común, y la locución entera va detrás. {Δεν έχω γράψει} es lo mismo que {οὐκ ἔχω γεγραμένον}, y el griego antiguo también ponía la negativa antes del auxiliar.

Lo que hizo el griego moderno fue fusionar las dos cosas: como el {έχω} es el auxiliar del presente, {δεν έχω} es también la negación del presente común. {Δεν έχω χρήματα}, "no tengo dinero". El mismo par sirve para dos sentidos.

## Μην es lo que queda en el subjuntivo

La negación del indicativo es {δεν}. La del subjuntivo es {μην}, y va después de {να}: {να μην έρθει}, "que no venga". Ningún intercambio entre las dos es posible: {δεν να} y {μην θα} son frases que nadie dice.

En el registro escrito, {δεν} tiene dos grafías, {μην} y {μη}, según el sonido del verbo que viene después. La elección es de pronunciación, no de sentido, y en un texto es previsible por el contexto.

## Dónde está la negación en la Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

Hay tres negativas distintas en seis versículos. {μή} con {λέγεις}, que es el filo de la pregunta incrédula. {Τί} con el verbo sobreentendido, que es la pregunta de "por qué". Y dos negativas que no son, en realidad, negativas.

Lo que hace el griego es poner la negativa en el verbo que niega, y no en la oración. En {Ἄν τις θέλει}, el {ἂν} es la marca del subjuntivo y {οὐδείς} sería la negativa del sustantivo. Una frase puede llevar dos negativas de especies distintas, y por eso la posición importa más que la palabra.`),
  vocab: [
    V('δεν γράφω', 'γράφω', 'no escribo'),
    V('δεν έγραψα', 'γράφω', 'no escribí'),
    V('δεν έχω γράψει', 'γράφω', 'no he escrito'),
    V('δεν θα γράψω', 'γράφω', 'no escribiré'),
    V('θα δεν γράψω', 'γράφω', 'orden incorrecto'),
    V('δέν', 'δεν', 'no (enfático)'),
    V('δεν έχω', 'έχω', 'no tengo'),
    V('να μην', 'να μην', 'que no'),
    V('μην', 'μην', 'no (escrito)'),
    V('μη', 'μη', 'no (antes de vocal)'),
    V('θα', 'θα', 'va a (futuro)'),
    V('γράφω', 'γράφω', 'escribo'),
    V('έρθει', 'έρχομαι', 'venga'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La negación va antes del verbo en todos los tiempos, y lo que va primero en la locución recibe el δεν.',
      ),
    },
    { n: '§2', text: T('En el futuro δεν manda sobre θα: δεν θα γράψω, nunca θα δεν γράψω.') },
    { n: '§3', text: T('En el perfecto δεν se queda antes del auxiliar: δεν έχω γράψει.') },
    {
      n: '§4',
      text: T('La negación del indicativo es δεν y la del subjuntivo es μην, después de να.'),
    },
  ],
  notes: [
    {
      label: T('Posición'),
      text: T(
        'El griego antiguo permitía la negación detrás del verbo en dos posiciones distintas. El moderno no: la posición es fija y anterior. Quien traduce del antiguo al moderno tiene que mover la palabra.',
      ),
    },
    {
      label: T('Orden'),
      text: T(
        'El sustantivo de una oración negativa puede estar o no, según el sentido: δεν έρχεται κανείς y κανείς δεν έρχεται quieren decir cosas distintas. La posición del sujeto es la que informa.',
      ),
    },
  ],
  examples: [
    { text: 'δεν γράφω', gloss: T('no escribo') },
    { text: 'δεν έγραψα', gloss: T('no escribí') },
    { text: 'δεν έχω γράψει', gloss: T('no he escrito') },
    { text: 'δεν θα γράψω', gloss: T('no escribiré') },
    { text: 'θα δεν γράψω', gloss: T('un orden que nadie usa') },
    { text: 'δεν έχω χρήματα', gloss: T('no tengo dinero') },
    { text: 'να μην έρθει', gloss: T('que no venga') },
    { text: 'δεν έρχεται κανείς', gloss: T('no viene nadie') },
  ],
  tables: [
    {
      caption: T('La negación en cada tiempo'),
      head: ['Χρόνος', 'Παράδειγμα'],
      rows: [
        ['ενεστώτας', 'δεν γράφω'],
        ['αόριστος', 'δεν έγραψα'],
        ['μέλλοντας', 'δεν θα γράψω'],
        ['πεπρωμένο', 'δεν έχω γράψει'],
      ],
    },
    {
      caption: T('Qué negativa'),
      head: ['Πλαίσιο', 'Άρνηση'],
      rows: [
        ['οριστική', 'δεν'],
        ['μέλλοντας', 'δεν θα'],
        ['υποτακτική', 'να μην'],
        ['απαγόρευση', 'μη'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el orden correcto de "no escribiré"?'),
    options: [T('θα δεν γράψω'), T('δεν θα γράψω'), T('γράψω δεν θα'), T('δεν γράψω θα')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ θα γράψω (negativa antes del futuro)'),
      answer: 'Δεν',
      hint: T('Con mayúscula'),
    },
    {
      kind: 'choose',
      prompt: T('En "δεν έχω γράψει", ¿dónde está la negativa?'),
      options: [
        T('antes del participio'),
        T('antes del auxiliar'),
        T('después del verbo'),
        T('al final de la frase'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negativa y tiempo'),
      pairs: [
        { a: 'δεν γράφω', b: T('presente') },
        { a: 'δεν έγραψα', b: T('pasado') },
        { a: 'δεν θα γράψω', b: T('futuro') },
        { a: 'δεν έχω γράψει', b: T('perfecto') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('να ___ έρθει (negación del subjuntivo)'),
      answer: 'μην',
      hint: T('Tres letras'),
    },
  ],
};
