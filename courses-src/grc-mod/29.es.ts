import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Conectivo'),
  title: T('Las conjunciones: lo que ata la frase'),
  subtitle: T('και — αλλά — ή — ότι — γιατί — αφού — ενώ'),
  body: C(`## Las que no tienen sitio fijo

**{και} es "y", y es la conjunción más común del griego.** {αλλά} es "pero", y {όμως} es el mismo sentido en registro elevado: {Αλλά ήρθε}, {Όμως ήρθε}. {Ή} es "o", y {ούτε} es "ni", que solo aparece en serie negativa.

Después de {ή} y {αλλά}, el verbo puede cambiar de forma. {Ήρθε ή φύγε} es "viene o se va", y las dos mitades quedan en el mismo tiempo y en la misma persona. Es herencia del griego antiguo, y en el griego moderno se puede hacer o no; haciéndolo, la frase suena antigua.

## Ότι no se vuelve που

Este es el punto que más atasca al traductor. {ότι} introduce una oración declarativa entera, y su verbo es un verbo normal: {Πιστεύω ότι έρχεται}, "creo que viene". {που} es relativo y necesita un sustantivo delante: {ο φίλος που έρχεται}, "el amigo que viene".

La confusión viene del español, que usa el mismo "que" para las dos cosas. En griego, cambiar uno por otro produce un sin sentido o una frase ambigua. {Ξέρω ότι έρχεται} es gramatical y significa "sé que viene". {Ξέρω που έρχεται} no tiene nada que modificar.

La diferencia es también de tiempo: {ότι} trae lo que el hablante afirma, y el verbo queda en indicativo; {που} trae lo que el texto quiere decir, y puede estar en cualquier tiempo.

## Por qué: cuatro palabras, cuatro sentidos

{Γιατί} es "porque", y responde a una pregunta de causa. {Αφού} es "ya que", y subordina el hecho a una condición que se cumplió. {Ενώ} es "mientras" o "en cambio", y pone dos cosas en paralelo en el mismo intervalo. {Επειδή} es la versión escrita de {γιατί}.

{Γιατί} tiene dos formas. Con el verbo en indicativo es causa: {Δεν ήρθε γιατί ήταν άρρωστος}. Con el subjuntivo es finalidad: {Μένω εδώ γιατί να σε δω}. La construcción es la misma palabra con el modo cambiado, y el modo es lo que decide entre "porque" y "para que".

## Conjunción y tiempo: el par que importa

{Πριν} es "antes de que" y {αφού} es "después de que". Los dos piden el verbo en lo que el lector reconoce como futuro: {Πριν φύγει}, {Αφού έρθει}. La misma forma {έρθει} aparece en los dos casos, y quien no sabe cuál de los dos introduce está leyendo no sabe si es pasado o futuro.

{Ενώ} hace lo mismo con el presente: {Ενώ μιλούσε, ο φίλος έφυγε}. El verbo de {ενώ} queda en el imperfecto, y eso es lo que marca la duración.

## Dónde están las conjunciones en la Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{Καὶ} ata las oraciones, {δέ} introduce la objeción, {καὶ} ata las tres órdenes. El texto tiene cuatro conjunciones en seis versículos, y ninguna es decorativa: cada una marca una relación entre lo que viene antes y lo que viene después.

Lo que hace el griego antiguo y repite el moderno es la segunda posición del verbo. En {λέγει αὐτῷ}, el verbo es lo segundo de la oración después de {καί}, y quien busca el verbo al final no lo encuentra.`),
  vocab: [
    V('και', 'και', 'y'),
    V('αλλά', 'αλλά', 'pero'),
    V('όμως', 'όμως', 'sin embargo'),
    V('ή', 'ή', 'o'),
    V('ούτε', 'ούτε', 'ni'),
    V('ότι', 'ότι', 'que (oración)'),
    V('που', 'που', 'que (relativo)'),
    V('γιατί', 'γιατί', 'porque'),
    V('αφού', 'αφού', 'después de que'),
    V('ενώ', 'ενώ', 'mientras'),
    V('πριν', 'πριν', 'antes de que'),
    V('δέ', 'δέ', 'pero (griego antiguo)'),
    V('επειδή', 'επειδή', 'pues (escrito)'),
    V('μένω', 'μένω', 'me quedo'),
  ],
  rules: [
    { n: '§1', text: T('και ata, αλλά y όμως oponen, ή y ούτε separan.') },
    {
      n: '§2',
      text: T(
        'ότι introduce una oración declarativa con verbo normal; που es relativo y exige un sustantivo delante.',
      ),
    },
    { n: '§3', text: T('γιατί con indicativo es causa; γιατί con subjuntivo es finalidad.') },
    { n: '§4', text: T('πριν y αφού piden la forma de futuro: πριν φύγει, αφού έρθει.') },
  ],
  notes: [
    {
      label: T('Tiempo'),
      text: T(
        'Después de πριν, αφού, όταν y ενώ el verbo griego sale siempre en la misma forma, que es el aoristo. El tiempo de la oración subordinada no lo da el verbo: lo da la conjunción que la introduce.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'δέ es la conjunción del griego antiguo y significa "pero", no "y". Quien traduce la secuencia καί… καί… δέ como una enumeración pierde la objeción que δέ marca.',
      ),
    },
  ],
  examples: [
    { text: 'ήρθε και έφυγε', gloss: T('viene y se va') },
    { text: 'ήρθα αλλά έφυγε', gloss: T('vine, pero me fui') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('creo que viene') },
    { text: 'ο φίλος που έρχεται', gloss: T('el amigo que viene') },
    { text: 'δεν ήρθε γιατί ήταν άρρωστος', gloss: T('no vino porque estaba enfermo') },
    { text: 'μένω εδώ γιατί να σε δω', gloss: T('me quedo aquí para verte') },
    { text: 'αφού ήρθε, έφυγε', gloss: T('después de que vino, se fue') },
    { text: 'ενώ μιλούσε, ο φίλος έφυγε', gloss: T('mientras hablaba, el amigo se fue') },
  ],
  tables: [
    {
      caption: T('Las conjunciones principales'),
      head: ['Σύνδεσμος', 'Παράδειγμα'],
      rows: [
        ['και', 'ήρθε και έφυγε'],
        ['αλλά', 'ήρθα αλλά έφυγε'],
        ['ή', 'ήρθε ή έφυγε'],
        ['γιατί', 'δεν ήρθε γιατί ήταν άρρωστος'],
      ],
    },
    {
      caption: T('ότι y που'),
      head: ['Λέξη', 'Τι εισάγει', 'Παράδειγμα'],
      rows: [
        ['ότι', 'δηλωτική πρόταση', 'πιστεύω ότι έρχεται'],
        ['που', 'αναφορική πρόταση', 'ο φίλος που έρχεται'],
        ['ποιος', 'ερώτηση', 'ποιος έρχεται'],
      ],
    },
    {
      caption: T('Conjunción y tiempo del verbo'),
      head: ['Σύνδεσμος', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
        ['αφού', 'έρθει', 'αφού έρθει'],
        ['ενώ', 'μιλούσε', 'ενώ μιλούσε'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra introduce una oración declarativa?'),
    options: [T('που'), T('ότι'), T('γιατί'), T('αλλά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ξέρω ___ έρχεται (introduce una oración declarativa)'),
      answer: 'ότι',
      hint: T('Con acento'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es gramatical?'),
      options: [
        T('Ξέρω που έρχεται'),
        T('Ξέρω ότι έρχεται'),
        T('Ξέρω οτι έρχεται'),
        T('Ξέρω τι έρχεται'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Conjunción y sentido'),
      pairs: [
        { a: 'και', b: T('y') },
        { a: 'αλλά', b: T('pero') },
        { a: 'ή', b: T('o') },
        { a: 'ενώ', b: T('mientras') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ ήρθε, έφυγε (conjunción de consecuencia)'),
      answer: 'Αφού',
      hint: T('Con mayúscula'),
    },
  ],
};
