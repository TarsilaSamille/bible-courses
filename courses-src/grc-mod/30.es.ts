import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Preposiciones'),
  title: T('Preposiciones: la palabra que rige el caso'),
  subtitle: T('στο σπίτι — από — για — προς — με'),
  body: C(`## La preposición manda en el caso

En español, "en" vale para lugar y para tiempo, y el contexto dice cuál. En griego no hay esa ambigüedad: cada preposición pide un caso, y el caso aparece en la palabra que viene detrás.

{Στο σπίτι} es lugar y {στις πέντε} es la hora, y en las dos la preposición es la misma, {σε}, y lo que cambia es el sustantivo que viene después. {στον} sirve para las dos.

El caso que rige una preposición no cambia el sentido de la preposición; cambia el de la palabra. El par {τον φίλο} y {του φίλου} muestra lo que hace la preposición: la misma raíz, dos casos, y la preposición es la que elige.

## σε y sus formas fusionadas

{σε} es la preposición de lugar y de dirección, y rige el acusativo: {πηγαίνω στο σπίτι}. Las formas son fusiones: {στο} es {σε} más {το}, {στην} es {σε} más {την}, {στους} es {σε} más {τους}, {στα} es {σε} más {τα}, {στις} es {σε} más {τις}.

Es la fusión lo que las hace parecer distintas. Los dos componentes están siempre ahí, y por eso la preposición ocupa el lugar del artículo: {στο σπίτι} no es {σε το σπίτι} por casualidad, es porque el griego fusiona las dos cosas.

Lo mismo vale para {στον} con tiempo: {στον τρίτο χρόνο}, "en el tercer año". Y vale para {στο νερό}, que es lo que hace que el griego diga "en el agua" con el neutro.

## για es la preposición que el español no tiene

{για} es "para", y en el griego moderno cubre tres sentidos que el español reparte en palabras distintas. Finalidad: {για την υγεία}, "por la salud", {για χάρη}, "por amor de". Destino: {ταξίδι για την Αθήνα}, "viaje a Atenas". Y destino de una persona: {για εσένα}.

Es la preposición que más aparece en una frase de lugar, y menos se entiende la primera vez, porque el español la traduce con tres palabras y el griego usa una. {Για την υγεία} no es "para la salud" ni "a la salud": es "a causa de la salud", y esa lectura de causa es la que el texto bíblico usa todo el tiempo.

## Las otras cinco

{Από} es origen y agente: {από της Αθήνας}, "de Atenas", {αγαπιέμαι από τον Θεό}, "soy amado por Dios". {Προς} es dirección, y es más formal que {για}: {προς τον Θεό}, "a Dios". {Με} es compañía e instrumento: {μιλάω με τον φίλο}, {κόβω με το μαχαίρι}. {Σαν} es comparación: {σαν τον ήλιο}, "como el sol".

{Μακριά από} es distancia, {κοντά σε} es proximidad. Y {γιατί} con genitivo es causa: {γιατί άρρωστου}, que es la misma palabra {γιατί} con otro caso.

## El caso está marcado, y por eso se puede leer sin entender

Cuando {το} desaparece y queda solo {σπίτι}, es porque la preposición ya lleva el artículo. Cuando el sustantivo está solo y el verbo está en segunda persona, es el caso el que dice la función: {γράφω το βιβλίο} y {γράφω του βιβλίου} tienen el mismo sustantivo y verbos distintos.

En la Escritura esto es todavía más cierto, porque el texto antiguo no repite nada. Quien lee deprisa el griego antiguo identifica el caso por la terminación y construye la frase sin entender la palabra. Es la técnica del curso hermano, y funciona porque el griego antiguo marcaba caso en casi todo.

## Dónde están las preposiciones en la Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{ἆρον τὸν κράβαττόν σου} tiene dos preposiciones: una para la acción y otra para la posesión. {τὸν κράβαττόν} es el acusativo directo del imperativo, y {σου} es un genitivo enclítico pegado al sustantivo anterior. Sin la segunda la frase todavía funciona; sin la primera, no.

{Εἰς} y {ἐν} son las preposiciones de la Escritura, y las dos piden casos distintos: {ἐν} pide genitivo en casi todo uso, {εἰς} pide acusativo. {Εἰς τὸν παράδεισον}, "al reino". Son las dos palabras que el griego moderno fusionó en {σε}.`),
  vocab: [
    V('σε', 'σε', 'en, a'),
    V('στο σπίτι', 'στο σπίτι', 'en la casa'),
    V('σε το σπίτι', 'σε το σπίτι', 'a la casa'),
    V('για', 'για', 'para; por causa de'),
    V('για την υγεία', 'για την υγεία', 'por la salud'),
    V('από', 'από', 'de; por'),
    V('από τον Θεό', 'από τον Θεό', 'por Dios'),
    V('προς', 'προς', 'hacia'),
    V('με', 'με', 'con'),
    V('σαν', 'σαν', 'como'),
    V('εἰς', 'εἰς', 'a (griego antiguo)'),
    V('ἐν', 'ἐν', 'en (griego antiguo)'),
    V('στον τρίτο χρόνο', 'στον τρίτο χρόνο', 'en el tercer año'),
    V('το νερό', 'το νερό', 'el agua'),
    V('ο ήλιος', 'ο ήλιος', 'el sol'),
  ],
  rules: [
    { n: '§1', text: T('Cada preposición rige un caso: σε el acusativo, από y του el genitivo.') },
    { n: '§2', text: T('στο, στην, στους, στα y στις son fusiones de σε con el artículo.') },
    { n: '§3', text: T('για cubre finalidad, destino y "a causa de": για την υγεία.') },
    {
      n: '§4',
      text: T(
        'Εἰς y ἐν son las preposiciones del griego antiguo; εἰς toma acusativo y ἐν toma genitivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Herencia'),
      text: T(
        'εἰς más genitivo era la preposición de dirección en el griego antiguo, y de ella viene el του moderno. Es la única palabra griega que se volvió preposición y artículo a la vez.',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'μου, σου, μας, σας y του parecen preposiciones y no lo son: son clíticos que indican posesión. Escribir "con Dios" en lugar de "de Dios" es el error más común de quien traduce la Escritura.',
      ),
    },
  ],
  examples: [
    { text: 'πηγαίνω στο σπίτι', gloss: T('voy a la casa') },
    { text: 'στον τρίτο χρόνο', gloss: T('en el tercer año') },
    { text: 'μένω για την υγεία', gloss: T('me quedo por la salud') },
    { text: 'έρχεται από την Αθήνα', gloss: T('viene de Atenas') },
    { text: 'αγαπιέμαι από τον Θεό', gloss: T('soy amado por Dios') },
    { text: 'μιλάω με τον φίλο', gloss: T('hablo con el amigo') },
    { text: 'προς τον Θεό', gloss: T('a Dios') },
    { text: 'σαν τον ήλιο', gloss: T('como el sol') },
  ],
  tables: [
    {
      caption: T('Preposición y caso'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['σε', 'αἰτιατική', 'στο σπίτι'],
        ['από', 'γενική', 'από της Αθήνας'],
        ['για', 'αἰτιατική', 'για την υγεία'],
        ['με', 'αἰτιατική', 'με τον φίλο'],
        ['σαν', 'αἰτιατική', 'σαν τον ήλιο'],
      ],
    },
    {
      caption: T('Las fusiones de σε'),
      head: ['Μορφή', 'Σύνθεση', 'Παράδειγμα'],
      rows: [
        ['στο', 'σε + το', 'στο σπίτι'],
        ['στην', 'σε + την', 'στην Αθήνα'],
        ['στους', 'σε + τους', 'στους φίλους'],
        ['στις', 'σε + τις', 'στις πέντε'],
      ],
    },
    {
      caption: T('Las preposiciones de la Escritura'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['ἐν', 'γενική', 'ἐν τῇ οἰκίᾳ'],
        ['ἐπί', 'γενική', 'ἐπὶ τῆς νηός'],
        ['εἰς', 'αἰτιατική', 'εἰς τὸν παράδεισον'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué preposición rige el genitivo?'),
    options: [T('σε'), T('από'), T('για'), T('με')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ σπίτι (fusión de σε con το)'),
      answer: 'Στο',
      hint: T('Con mayúscula'),
    },
    {
      kind: 'choose',
      prompt: T('En el griego antiguo, ¿qué preposición pide acusativo?'),
      options: [T('ἐν'), T('ἐπί'), T('εἰς'), T('παρά')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Preposición y sentido'),
      pairs: [
        { a: 'από', b: T('origen') },
        { a: 'για', b: T('finalidad') },
        { a: 'με', b: T('compañía') },
        { a: 'σαν', b: T('comparación') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('μένω ___ την υγεία (preposición de finalidad)'),
      answer: 'για',
      hint: T('Tres letras'),
    },
  ],
};
