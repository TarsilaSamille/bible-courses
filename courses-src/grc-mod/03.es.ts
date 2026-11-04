import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('El verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('είμαι, έχω, κάνω, πάω: los verbos que sostienen casi toda oración'),
  body: C(`## Diez verbos, y dos sin regla

Un verbo griego moderno regular quita la terminación y devuelve una nueva: en {κάνω}, {κάνεις}, {κάνει}, el tema {κάν-} no se mueve. Los esenciales no tienen tema fijo: {είμαι}, {έχω}, {πάω}, {έρχομαι}, {τρώω}, {πίνω}, {κοιμάμαι}, {βλέπω}, {ακούω}, {μιλάω} son formas que ninguna regla produce, y son lo que se lee en cada página.

Son pocos y pesan mucho. {είμαι} ser, {έχω} tener, {κάνω} hacer, {λέω} decir, {πάω} ir, {έρχομαι} venir, {τρώω} comer, {πίνω} beber, {κοιμάμαι} dormir, {βλέπω} ver, {ακούω} oír, {μιλάω} hablar, {δίνω} dar, {παίρνω} tomar, {ξέρω} saber, {θέλω} querer, {μπορώ} poder cubren casi todo lo que se dice en un capítulo de Evangelio.

## είμαι y έχω: ser y tener

{είμαι} es el verbo más irregular del griego moderno: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. No tiene pasado ni futuro propios — usa {ήμουν} en el pasado y {θα είμαι} en el futuro. Es el verbo que cierra la identidad de las cosas, y el portugués lo traduce por «ser» o «estar» según el contexto.

{έχω} es el verbo «tener», y es casi tan irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. El pasado es {είχα} y el futuro {θα έχω}. Donde el portugués dice «tenho», el griego moderno usa {έχω} con el mismo sentido de posesión y estado.

## πάω y έρχομαι: ir y venir

{πάω} «ir» y {έρχομαι} «venir» son la pareja más fácil de confundir. {πάω} es irregular en presente ({πάω}, {πάς}, {πάει}, {πάμε}, {πάτε}, {πάνε}) y regular en pasado ({πήγα}). {έρχομαι} es regular en presente ({έρχομαι}, {έρχεσαι}, {...}) pero el pasado es {ήρθα}.

La diferencia de sentido es la del portugués: {πάω} indica movimiento hacia fuera, {έρχομαι} hacia dentro. Quien traduce los dos por «ir» pierde la dirección.

## En la Biblia

Juan 1:1 comienza con {ήτον}: {Εν αρχή ήτον ο Λόγος}, en el principio era el Verbo. {ήτον} es el pasado de {είμαι}, 3.ª persona del singular. Y Juan 1:3 cierra con {έγινε}, el pasado de {γίνομαι}: todas las cosas llegaron a ser. El griego que comienza con {ήτον} termina con {έγινε}: el Verbo ya era, y todo lo demás aconteció.

Marcos 4:39 trae {σίγασε}, «callate»: es el imperativo aoristo de {σιγάω}, «callar». El versículo entero muestra el método: el griego coloca la orden de Jesús en imperativo para decir que el mar no responde a la orden, sino a Cristo.`),
  vocab: [
    V('είμαι', 'είμαι', 'ser'),
    V('ήμουν', 'είμαι', 'era'),
    V('έχω', 'έχω', 'tener'),
    V('είχα', 'έχω', 'tenía'),
    V('κάνω', 'κάνω', 'hacer'),
    V('έκανα', 'κάνω', 'hice'),
    V('πάω', 'πάω', 'ir'),
    V('πήγα', 'πάω', 'fui'),
    V('έρχομαι', 'έρχομαι', 'venir'),
    V('ήρθα', 'έρχομαι', 'vine'),
    V('τρώω', 'τρώω', 'comer'),
    V('έφαγα', 'τρώω', 'comí'),
    V('πίνω', 'πίνω', 'beber'),
    V('ήπια', 'πίνω', 'bebí'),
    V('κοιμάμαι', 'κοιμάμαι', 'dormir'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('είδα', 'βλέπω', 'vi'),
    V('ακούω', 'ακούω', 'oír'),
    V('άκουσα', 'ακούω', 'oí'),
    V('μιλάω', 'μιλάω', 'hablar'),
    V('μίλησα', 'μιλάω', 'hablé'),
    V('δίνω', 'δίνω', 'dar'),
    V('παίρνω', 'παίρνω', 'tomar'),
    V('ξέρω', 'ξέρω', 'saber'),
    V('θέλω', 'θέλω', 'querer'),
    V('μπορώ', 'μπορώ', 'poder'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{είμαι} es el verbo más irregular: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. No tiene pasado ni futuro propios.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{έχω} es casi tan irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. Pasado {είχα}, futuro {θα έχω}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{πάω} indica movimiento hacia fuera, {έρχομαι} hacia dentro. Quien traduce los dos por «ir» pierde la dirección.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El pasado de {πάω} es {πήγα}, el de {έρχομαι} es {ήρθα}: dos verbos, dos pasados, ninguna letra común.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 usa {ήτον} (pasado de {είμαι}) y Juan 1:3 usa {έγινε} (pasado de {γίνομαι}): el Verbo ya era, y todo lo demás aconteció.',
      ),
    },
  ],
  notes: [
    {
      label: T('El έχω que no es «tener»'),
      text: T(
        'El griego moderno usa {έχω} para «tener», «poseer» y «estar con». En Juan 15:4 {έχω} dice al pámpano que no da fruto, no una propiedad.',
      ),
    },
    {
      label: T('El ήτον que no es «era»'),
      text: T(
        '{ήτον} es el pasado de {είμαι}, pero el portugués lo traduce por «era» o «estaba» según el contexto. La forma es la misma en ambos casos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Εν αρχή ήτον ο Λόγος',
      gloss: T('Jn 1:1 — {ήτον} es pasado de {είμαι}: el Verbo ya era.'),
    },
    {
      text: 'και Θεός ήτον ο Λόγος',
      gloss: T('Jn 1:1 — {ήτον} sin artículo defiende predicado nominal: el Verbo era Dios.'),
    },
    {
      text: 'πάντα δι᾽ αὐτοῦ έγινε',
      gloss: T('Jn 1:3 — {έγινε} de {γίνομαι}: todas las cosas llegaron a ser.'),
    },
    {
      text: 'έφαγεν ο λαός',
      gloss: T('Ex 16:35 — {έφαγεν} es pasado de {τρώω}: el maná fue comido.'),
    },
    { text: 'ήρθαν οι μαθηταί', gloss: T('Jn 4:8 — {ήρθαν} es pasado de {έρχομαι}: vinieron.') },
    { text: 'έχω ένα βιβλίο', gloss: T('{έχω} con objeto directo: tengo un libro.') },
    { text: 'ήμουν στο σπίτι', gloss: T('{ήμουν} es pasado de {είμαι}: estaba en casa.') },
    { text: 'θα πάω στην πόλη', gloss: T('futuro con {θα} + presente: iré a la ciudad.') },
    { text: 'σίγασε', gloss: T('Mc 4:39 — imperativo aoristo de {σιγάω}: callate.') },
  ],
  tables: [
    {
      caption: 'O presente dos essenciais',
      head: ['Pessoa', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
      rows: [
        ['εγώ', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
        ['εσύ', 'είσαι', 'έχεις', 'πάς', 'έρχεσαι', 'τρως'],
        ['αυτός/αυτή/αυτό', 'είναι', 'έχει', 'πάει', 'έρχεται', 'τρώει'],
        ['εμείς', 'είμαστε', 'έχουμε', 'πάμε', 'έρχομαστε', 'τρώμε'],
        ['εσείς', 'είστε', 'έχετε', 'πάτε', 'έρχεστε', 'τρώτε'],
        ['αυτοί/αυτές/αυτά', 'είναι', 'έχουν', 'πάνε', 'έρχονται', 'τρώνε'],
      ],
    },
    {
      caption: 'O passado dos essenciais',
      head: ['Verbo', 'Passado', 'Futuro'],
      rows: [
        ['είμαι', 'ήμουν', 'θα είμαι'],
        ['έχω', 'είχα', 'θα έχω'],
        ['πάω', 'πήγα', 'θα πάω'],
        ['έρχομαι', 'ήρθα', 'θα έρχομαι'],
        ['τρώω', 'έφαγα', 'θα τρώω'],
        ['πίνω', 'ήπια', 'θα πίνω'],
        ['κοιμάμαι', 'κοιμήθηκα', 'θα κοιμάμαι'],
        ['βλέπω', 'είδα', 'θα βλέπω'],
        ['ακούω', 'άκουσα', 'θα ακούω'],
        ['μιλάω', 'μίλησα', 'θα μιλάω'],
        ['δίνω', 'έδωσα', 'θα δίνω'],
        ['παίρνω', 'πήρα', 'θα παίρνω'],
        ['ξέρω', 'ήξερα', 'θα ξέρω'],
        ['θέλω', 'ήθελα', 'θα θέλω'],
        ['μπορώ', 'μπορούσα', 'θα μπορώ'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Εν αρχή ήτον ο Λόγος}, ¿cuál es el tiempo de {ήτον}?'),
    options: [T('Presente'), T('Pasado'), T('Futuro'), T('Aoristo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "πάντα δι᾽ αὐτοῦ ___" con el pasado de {γίνομαι} para "aconteció".'),
      answer: 'έγινε',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su pasado.'),
      pairs: [
        { a: T('{πάω}'), b: T('{πήγα}') },
        { a: T('{έρχομαι}'), b: T('{ήρθα}') },
        { a: T('{τρώω}'), b: T('{έφαγα}') },
        { a: T('{είμαι}'), b: T('{ήμουν}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el pasado de {λέγω}?'),
      options: [T('{είπα}'), T('{λέγω}'), T('{λέξω}'), T('{λέγομαι}')],
      answer: 0,
    },
  ],
};
