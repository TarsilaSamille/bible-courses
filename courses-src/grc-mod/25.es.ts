import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Verbo'),
  title: T('Tres tiempos y dos pasados'),
  subtitle: T('γράφω — έγραψα — έχω γράψει — θα γράψω'),
  body: C(`## Tres tiempos, tres palabras

El griego moderno tiene tres tiempos y tres construcciones distintas. El presente es {γράφω}, el pasado es {έγραψα} y el futuro es {θα γράψω}. Nada se parece a nada, y por eso el griego aprende los verbos por lista y no por conjugación.

El futuro es el más fácil de los tres, porque no es un tiempo: es una partícula, {θα}, pegada al subjuntivo. El {θα} es lo que marca el tiempo, y {γράψω} es la misma forma que aparece después de {θέλω να}. Un hablante que aprende {γράψω} aprende dos cosas de una vez.

El pasado es lo que confunde. {έγραψα} es el aoristo griego, la forma que sobrevivió del griego antiguo casi sin cambiar. Es el pasado del evento: escribí, y se acabó.

## El aoristo fue jubilado por el perfecto compuesto

El griego antiguo tenía un tiempo que el aoristo desplazó: el perfecto, que decía "hice y el efecto sigue". En el griego moderno ese tiempo se acomodó en una locución: {έχω} más el participio. {έχω γράψει} es "he escrito", y el sentido original del perfecto se conserva palabra por palabra.

La locución es más fácil que cualquier tiempo flexionado, porque la flexión está toda en el {έχω}: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε} y {έχουν}. El resto es el participio, y el participio no flexiona.

## "Escribí" tiene dos formas y dos sentidos

Este es el punto que resuelve la mitad de las dudas de lectura. {έγραψα} dice que hubo una escritura, y dice solo eso. {έχω γράψει} dice que hubo una escritura y que el resultado sigue en pie.

En español los dos son "escribí", y la distinción se pierde. {Έχω γράψει το βιβλίο} quiere decir "el libro está escrito", con el resultado en primer plano. {Έγραψα το βιβλίο} quiere decir "escribí el libro", con el acto en primer plano.

La pregunta que decide es: ¿qué importa ahora, lo que pasó o lo que quedó? Si importa el estado, usa {έχω} más el participio. Si importa el evento, usa el aoristo.

## El futuro también es ambiguo

{θα γράψω} es futuro y posibilidad a la vez, y las dos lecturas son la misma forma. {Θα έρθει} puede ser "vendrá" o "puede que venga". El contexto decide, y el contexto decide en español también.

Hay una tercera lectura, más rara: {θα έχω γράψει}, "habré escrito". Es el futuro del perfecto, y aparece cuando lo que está en juego es el resultado.

## El tiempo verbal en la Escritura

> Ἐγὼ δὲ ἔγραψα ὑμῖν τὸ μυστήριον τοῦ θεοῦ.

{ἔγραψα} es el aoristo: escribí, y al texto no le importa decir que la carta sigue por ahí. Es la elección que hace el griego cuando el evento basta. Una carta que dijera "he escrito" estaría hablando de ti, no de la carta.

Esa es la diferencia que el griego antiguo tiene y el moderno no: en el griego antiguo el aoristo y el perfecto son categorías distintas y el traductor tiene que elegir. En el griego moderno el perfecto es una locución, y la elección es entre {έγραψα} y {έχω γράψει}, que es la misma elección con palabras distintas.`),
  vocab: [
    V('γράφω', 'γράφω', 'escribo'),
    V('έγραψα', 'γράφω', 'escribí'),
    V('έχω γράψει', 'γράφω', 'he escrito'),
    V('θα γράψω', 'γράφω', 'escribiré'),
    V('γράψω', 'γράφω', 'escribir (subjuntivo)'),
    V('έχω', 'έχω', 'tengo'),
    V('έχει', 'έχω', 'tiene'),
    V('θα έρθει', 'έρχομαι', 'vendrá'),
    V('το βιβλίο', 'το βιβλίο', 'el libro'),
    V('γράφτηκε', 'γράφω', 'fue escrito'),
    V('θα έχω γράψει', 'γράφω', 'habré escrito'),
    V('θέλω να', 'θέλω', 'quiero que'),
    V('το μυστήριο', 'το μυστήριο', 'el misterio'),
    V('ο Θεός', 'ο Θεός', 'Dios'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Los tres tiempos son tres construcciones: γράφω (presente), έγραψα (pasado), θα γράψω (futuro).',
      ),
    },
    { n: '§2', text: T('θα γράψω es partícula más subjuntivo, no una forma verbal propia.') },
    { n: '§3', text: T('El perfecto es έχω más participio, y la flexión está toda en el έχω.') },
    {
      n: '§4',
      text: T('έγραψα dice el evento; έχω γράψει dice el evento y el resultado que sigue.'),
    },
    { n: '§5', text: T('θα puede ser futuro o posibilidad, y el contexto elige.') },
  ],
  notes: [
    {
      label: T('Herencia'),
      text: T(
        'El futuro del griego moderno es el futuro del griego antiguo sin la s: λύσω dio γράψω. El griego guardó la forma, perdió la flexión y ganó la partícula θα.',
      ),
    },
    {
      label: T('Lectura'),
      text: T(
        'Al traducir un perfecto, pregúntese si el texto habla del acto o del estado. En Juan 3, "está escrito" y "escribió" son palabras distintas en griego, y la elección del traductor cambia el sentido de la frase.',
      ),
    },
  ],
  examples: [
    { text: 'γράφω το βιβλίο', gloss: T('escribo el libro') },
    { text: 'έγραψα το βιβλίο', gloss: T('escribí el libro') },
    { text: 'έχω γράψει το βιβλίο', gloss: T('he escrito el libro') },
    { text: 'θα γράψω το βιβλίο', gloss: T('escribiré el libro') },
    { text: 'θα έχω γράψει', gloss: T('habré escrito') },
    { text: 'το βιβλίο γράφτηκε', gloss: T('el libro fue escrito') },
    { text: 'θα έρθει αύριο', gloss: T('vendrá mañana') },
    { text: 'θέλω να γράψω', gloss: T('quiero escribir') },
  ],
  tables: [
    {
      caption: T('Los tres tiempos'),
      head: ['Χρόνος', 'Μορφή', 'Κατασκευή'],
      rows: [
        ['ενεστώτας', 'γράφω', 'ρήμα ενεστώτα'],
        ['αόριστος', 'έγραψα', 'αόριστος'],
        ['μέλλοντας', 'θα γράψω', 'θα + υποτακτική'],
        ['μέλλοντας αποτελέσματος', 'θα έχω γράψει', 'θα + έχω + μετοχή'],
      ],
    },
    {
      caption: T('Dos pasados'),
      head: ['Μορφή', 'Ερώτηση', 'Απάντηση'],
      rows: [
        ['έγραψα', 'τι έγινε;', 'η πράξη'],
        ['έχω γράψει', 'τι έμεινε;', 'η κατάσταση'],
      ],
    },
    {
      caption: T('El auxiliar del perfecto'),
      head: ['Πρόσωπο', 'έχω', 'Παράδειγμα'],
      rows: [
        ['εγώ', 'έχω', 'έχω γράψει'],
        ['εσύ', 'έχεις', 'έχεις γράψει'],
        ['αυτός', 'έχει', 'έχει γράψει'],
        ['εμείς', 'έχουμε', 'έχουμε γράψει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma significa "he escrito"?'),
    options: [T('γράφω'), T('έγραψα'), T('έχω γράψει'), T('θα γράψω')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γράφω το βιβλίο (futuro)'),
      answer: 'Θα',
      hint: T('Con mayúscula'),
    },
    {
      kind: 'choose',
      prompt: T('En "θα έρθει", ¿qué puede significar θα?'),
      options: [T('solo futuro'), T('solo posibilidad'), T('futuro o posibilidad'), T('negación')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Tiempo y forma'),
      pairs: [
        { a: 'γράφω', b: T('presente') },
        { a: 'έγραψα', b: T('pasado del evento') },
        { a: 'έχω γράψει', b: T('pasado del estado') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('έχω ___ (participio de γράφω, "escrito")'),
      answer: 'γράψει',
      hint: T('Sin acento: es participio'),
    },
  ],
};
