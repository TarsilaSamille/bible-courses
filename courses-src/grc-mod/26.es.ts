import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Verbo'),
  title: T('Los modos: lo que el griego todavía elige'),
  subtitle: T('θέλω να — να μην — είθε'),
  body: C(`## Cuatro modos, dos vivos

El griego moderno conserva cuatro modos: indicativo, subjuntivo, imperativo y un resto del optativo. El indicativo es el modo de lo afirmado, y es el patrón por defecto. El imperativo es el modo de la orden. El subjuntivo es el modo de lo que no es un hecho.

El optativo no tiene forma propia. Lo que queda de él son tres expresiones fijas, y es el único modo que el aprendiz puede ignorar: {είθε}, "es costumbre", {χρειάζεται}, "es necesario", {ἔδει}, "era necesario". Las tres vienen del griego antiguo y suenan arcaicas.

## El indicativo es el patrón y no necesita marca

El indicativo no tiene partícula. Es lo que aparece cuando el verbo está hablando de un hecho: {Γράφω}, {Έγραψα}, {Έρχεται}. Cuando el griego pone una partícula, {να} o {θα}, está dejando el indicativo fuera.

Eso significa que la presencia de {να} es la señal, y la ausencia es el patrón. Un texto griego es una secuencia de indicativos con {να} esparcido en medio, y por eso el modo se reconoce por la marca y no por la terminación.

## να es lo único que el aprendiz necesita

{να} introduce la oración que no es un hecho: {θέλω να μιλήσω}, "quiero hablar", {πρέπει να φύγω}, "tengo que salir". El verbo que sigue es el subjuntivo, y la forma es la misma que la del futuro sin {θα}: {μιλήσω}, {φύγω}.

Dos reglas resuelven casi todo, y la segunda resuelve más que la primera. La primera: {να} aparece después de verbo de voluntad, de necesidad y de posibilidad, y la lista es corta. La segunda: el verbo después de {να} es el aoristo, aunque el verbo principal esté en pasado: {θέλω να έρθει}, "quiero que venga".

La combinación {να} más {θα} no existe. {Θα να έρθει} está mal, y {να έρθει} está bien. Son dos marcadores para la misma idea, y el griego elige uno.

## να μην es la negación del subjuntivo

La negación de {να} es {να μην}, y el orden es fijo: {να} primero, {μην} después. {Δεν θέλω να μην έρθει}, "no quiero que venga". La clave es ver que {μην} aquí no es la prohibitiva: es la negación del propio {να}, y por eso aparece después de {να} y no antes del verbo.

Es la construcción que más confunde a quien está aprendiendo. El griego tiene dos negativas con nombres parecidos: la del indicativo, que es {δεν} y va antes del verbo, y la del subjuntivo, que es {μην} y va después de {να}. Quien escribe {δεν θέλω μην να έρθει} ha juntado las dos y ha producido una frase que nadie dice.

## Conjunción y tiempo, y cuándo el subjuntivo es solo el futuro

Después de {όταν}, {αν}, {πριν}, {αφού} y {ενώ}, el verbo griego sale en lo que el lector reconoce como futuro, pero que es el aoristo: {Όταν έρθει}, "cuando venga", {Πριν φύγει}, "antes de que vaya". El griego antiguo tenía futuro subjuntivo y el moderno perdió la diferencia: los dos se volvieron {μιλήσω}.

El resultado es que {να} y {όταν} producen la misma forma verbal, y quien no está atento no sabe si lee una oración de voluntad o de tiempo. La palabra que viene antes es la que lo dice.

## Dónde está el subjuntivo en la Escritura

> Ἄν τις θέλει πρὸς ἐμὲν ἐλθεῖν, ἀπαρνήσαται ἑαυτόν καὶ ἄραται τὸν σταυρόν αὐτοῦ καὶ ἀκολουθεῖ μοι.

{ἐλθεῖν} es infinitivo aoristo, y el {ἄν} de delante es la partícula del subjuntivo. No hay {να}, porque el griego de la Escritura tiene la partícula {ἄν} en su lugar. La oración entera es un condicional, y el verbo que está en subjuntivo es justamente lo que depende de la condición.

Quien traduce traduce las formas ({θέλει}, {ἄν}) y pierde el modo. Lo que está en juego es el valor: en griego la frase dice "si alguien quiere venir a mí, tiene que dejar algo atrás". El subjuntivo es lo que convierte un deseo en condición.`),
  vocab: [
    V('θέλω να', 'θέλω', 'quiero que'),
    V('να', 'να', 'que (subjuntivo)'),
    V('να μην', 'να μην', 'que no'),
    V('δεν', 'δεν', 'no'),
    V('μιλήσω', 'μιλάω', 'hablar'),
    V('φύγω', 'φεύγω', 'irse'),
    V('πρέπει να', 'πρέπει', 'es preciso que'),
    V('έρθει', 'έρχομαι', 'venga (subjuntivo)'),
    V('όταν', 'όταν', 'cuando'),
    V('πριν', 'πριν', 'antes de que'),
    V('αφού', 'αφού', 'después de que'),
    V('είθε', 'είθε', 'es costumbre'),
    V('χρειάζεται', 'χρειάζεται', 'es necesario'),
    V('γράφω', 'γράφω', 'escribo'),
  ],
  rules: [
    { n: '§1', text: T('El indicativo es el modo sin marca; να es la marca del subjuntivo.') },
    {
      n: '§2',
      text: T('Después de να el verbo va en aoristo, aunque el principal esté en pasado.'),
    },
    { n: '§3', text: T('να y θα no se combinan: θα να έρθει está mal.') },
    {
      n: '§4',
      text: T('La negación del subjuntivo es να μην, en ese orden, y μην va después de να.'),
    },
    { n: '§5', text: T('El optativo solo sobrevive en είθε, χρειάζεται y έδει.') },
  ],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'En la Escritura la partícula del subjuntivo es ἄν, y no να. La construcción es la misma; lo que cambia es la marca. Por eso el texto bíblico tiene subjuntivos que no traen ninguna palabra griega moderna visible.',
      ),
    },
    {
      label: T('Calco'),
      text: T(
        'El griego antiguo usaba el participio futuro como verbo principal después de ὅτι, y el español heredó eso como "he oído decir que". En el griego moderno la locución desapareció y se dice ακούω ότι.',
      ),
    },
  ],
  examples: [
    { text: 'θέλω να φύγω', gloss: T('quiero irme') },
    { text: 'πρέπει να φύγεις', gloss: T('tienes que irte') },
    { text: 'δεν θέλω να έρθει', gloss: T('no quiero que venga') },
    { text: 'δεν θέλω να μην έρθει', gloss: T('no quiero que no venga') },
    { text: 'θα φύγει', gloss: T('se irá') },
    { text: 'θα να φύγει', gloss: T('forma incorrecta') },
    { text: 'όταν έρθει', gloss: T('cuando venga') },
    { text: 'πριν φύγει', gloss: T('antes de que se vaya') },
  ],
  tables: [
    {
      caption: T('Los modos del griego moderno'),
      head: ['Τρόπος', 'Σήμα', 'Παράδειγμα'],
      rows: [
        ['οριστική', '—', 'γράφω'],
        ['υποτακτική', 'να', 'θέλω να γράψω'],
        ['προστακτική', '—', 'γράψε'],
        ['ευκτική', 'έδει, είθε', 'έδει να φύγει'],
      ],
    },
    {
      caption: T('Las dos negativas'),
      head: ['Άρνηση', 'Πού', 'Παράδειγμα'],
      rows: [
        ['δεν', 'πριν το ρήμα', 'δεν θέλω να έρθει'],
        ['μην', 'μετά το να', 'να μην έρθει'],
      ],
    },
    {
      caption: T('Después de να u όταν'),
      head: ['Εισαγωγή', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['να', 'έρθει', 'που έρχεται'],
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta?'),
    options: [T('θα να έρθει'), T('να έρθει'), T('να θα έρθει'), T('όταν να έρθει')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('θέλω ___ φύγει (partícula del subjuntivo)'),
      answer: 'να',
      hint: T('Dos letras'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice "no quiero que venga"?'),
      options: [
        T('δεν θέλω να έρθει'),
        T('δεν θέλω να μην έρθει'),
        T('μην θέλω να έρθει'),
        T('θέλω να μην δεν'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Palabra y función'),
      pairs: [
        { a: 'να', b: T('subjuntivo') },
        { a: 'μην', b: T('negación del subjuntivo') },
        { a: 'θα', b: T('futuro') },
        { a: 'όταν', b: T('cuando') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('πρέπει ___ φύγεις (partícula del subjuntivo)'),
      answer: 'να',
      hint: T('La misma partícula'),
    },
  ],
};
