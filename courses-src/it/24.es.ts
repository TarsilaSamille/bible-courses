import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Negación: non, mai, più, ancora'),
  subtitle: T('non parlo mai; non parlo più'),
  section: T('El adverbio'),
  body: C(`## {non} va antes del verbo

En portugués la negación es una sola palabra y abre la frase: «não fala». En italiano son dos, y ocupan sitios distintos. **{non}** precede al verbo conjugado: «non parlo», «non lo so», «non voglio andare». Cuando hay auxiliar, {non} entra antes del auxiliar y del participio: «non ho mai visto», «non era venuto».

Y {non} se pega al pronombre: «non **{lo}** so» y no «non so **{lo}**». Si el pronombre va pegado al verbo, pasa delante de {non}: «non **{lo}** so», «non **{li}** ho visti», «non **{ci}** vado».

## {mai}, {più} y {ancora} van después

Esta es la parte que el lector de portugués falla siempre, porque en portugués {nunca}, {mais} y {ainda} también van después del verbo, y la tentación es escribir *{mai non parlo}*. El italiano solo acepta un orden:

**non** parlo **{mai}**: nunca hablo.
**non** parlo **{più}**: ya no hablo.
**non** parlo **{ancora}**: todavía no hablo.

Los dos pares que se cambian son {non più} «no más» y {non ancora} «todavía no». La diferencia es de tiempo, no de intensidad: *non parlo più* dice que la acción se acabó para siempre; *non parlo ancora* dice que va a ocurrir. Lo mismo vale con el auxiliar: *non ho parlato più* y *non ho parlato ancora*.

Después del verbo quedan también {affatto} («no hablo de ninguna manera»), {quasi} («casi no hablo») y {pienamente}, {volentieri}. El sitio es el mismo para todos: después.

## {neanche}, {nemmeno} y las respuestas

Hay un segundo grupo que no niega nada dentro de la frase: **abre la respuesta**. A alguien que dice «non parlo», contestas «**neanch’io**» o «**nemmeno io**», queriendo decir «yo tampoco». Las dos palabras son casi sinónimos; {nemmeno} es algo más seco, {neanche} algo más cordial.

Después está {piuttosto}, que es conjunción disfrazada de adverbio: «non dico che è male, {piuttosto} dico che è inutile». Y {troppo} y {assai}, que intensifican sin flexionar.

## En la Biblia

Mt 7:21 pone la negación sobre un indefinido, que es el sitio más delicado: «**{Non ogni uno}** che mi dice: Signore, Signore, entrerà nel regno dei cieli». El {non} va antes de {ogni}, y no antes del verbo {entrà}, porque el blanco es el indefinido. Un traductor que escribe «ogni uno non entrerà» ha acertado la idea y la gramática.

Fíjate también en «non ho bisogno che tu parli», donde el {non} queda lejos del verbo que niega: la negación se pega al sustantivo, y el verbo se queda con lo que viene después.

## Criterio de lectura

Identifica primero el blanco de la negación: verbo, sustantivo o indefinido. Después encaja el {non} justo delante de él, y solo entonces pon {mai}, {più} o {ancora} al final de la misma oración. Si en tu traducción el {mai} quedó delante, el problema no es de léxico: es de orden.`),
  vocab: [
    V('non', 'non', 'no'),
    V('mai', 'mai', 'nunca'),
    V('più', 'più', 'más'),
    V('ancora', 'ancora', 'todavía'),
    V('affatto', 'affatto', 'de ninguna manera'),
    V('neanche', 'neanche', 'tampoco'),
    V('nemmeno', 'nemmeno', 'ni siquiera'),
    V('piuttosto', 'piuttosto', 'más bien'),
    V('quasi', 'quasi', 'casi'),
    V('sempre', 'sempre', 'siempre'),
    V('niente', 'niente', 'nada'),
    V('ogni', 'ogni', 'cada'),
    V('parlare', 'parlare', 'hablar'),
    V('sapere', 'sapere', 'saber'),
    V('volere', 'volere', 'querer'),
    V('bisogno', 'bisogno', 'necesidad'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «todavía no he hablado»?'),
    options: [
      T('non parlo ancora'),
      T('non ancora parlo'),
      T('ancora non parlo'),
      T('non parlo già'),
    ],
    answer: 0,
    hint: T('Ancora va después del verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: non parlo ___ (nunca)'),
      answer: 'mai',
      hint: T('Después del verbo conjugado.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
      options: [
        T('Mai non parlo con lui.'),
        T('Non parlo mai con lui.'),
        T('Non mai parlo con lui.'),
        T('Parlo non mai con lui.'),
      ],
      answer: 1,
      hint: T('Non antes, mai después.'),
    },
    {
      kind: 'choose',
      prompt: T('Respuesta a «non parlo»: yo tampoco'),
      options: [T('Neanch’io.'), T('Anch’io non.'), T('Io non anche.'), T('Nemmeno non io.')],
      answer: 0,
      hint: T('Neanche abre la respuesta y elide la i.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Non va inmediatamente delante de lo que niega: el verbo, el indefinido o el sustantivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Mai, più e ancora van después del verbo: non parlo mai, non parlo più, non parlo ancora.',
      ),
    },
    {
      n: '3',
      text: T(
        'Non più es «no más»; non ancora es «todavía no». Cambiarlos cambia el tiempo de la frase.',
      ),
    },
    { n: '4', text: T('Neanche y nemmeno abren una respuesta: «Non parlo». — «Neanch’io».') },
    {
      n: '5',
      text: T('Con auxiliar, el non entra antes del auxiliar y del participio: non ho mai visto.'),
    },
  ],
  notes: [
    {
      label: T('El clítico delante del non'),
      text: T(
        '{Non lo so} y {Lo non so} hacen la misma negación, y la segunda suena enfática, como si quien habla estuviera mostrando su propia posición. En {Non lo so} el pronombre está pegado al non; en {Lo non so} está pegado al verbo, que viene justo después.',
      ),
    },
    {
      label: T('Negación doble'),
      text: T(
        'El italiano admite apilar: {non vedo nessuno}, {non c’è niente}, {non ho fatto mai nulla}. En todas ellas la regla del sitio sigue valiendo: {non} antes, el resto después. Y {nessuno}, {niente} y {mai} son las tres palabras que pueden hacer ese trabajo.',
      ),
    },
  ],
  examples: [
    { text: 'Non parlo.', gloss: T('No hablo.') },
    { text: 'Non parlo mai con lui.', gloss: T('Nunca hablo con él.') },
    { text: 'Non parlo più.', gloss: T('Ya no hablo.') },
    { text: 'Non ho parlato ancora.', gloss: T('Todavía no he hablado.') },
    { text: 'Non lo so.', gloss: T('No lo sé.') },
    { text: 'Non l’hanno vinto.', gloss: T('No lo vencieron.') },
    { text: 'Neanch’io non voglio.', gloss: T('Yo tampoco quiero.') },
    { text: 'Non affatto.', gloss: T('De ninguna manera.') },
    { text: 'Non ogni uno entrerà nel regno.', gloss: T('No todos entrarán en el reino.') },
  ],
  tables: [
    {
      caption: T('Posizione della negazione'),
      head: ['Parola', 'Dove va', 'Frase'],
      rows: [
        ['non', 'prima del verbo', 'non parlo'],
        ['mai', 'dopo il verbo', 'non parlo mai'],
        ['più', 'dopo il verbo', 'non parlo più'],
        ['ancora', 'dopo il verbo', 'non parlo ancora'],
        ['affatto', 'dopo il verbo', 'non parlo affatto'],
        ['quasi', 'prima del verbo', 'quasi non parlo'],
      ],
    },
    {
      caption: T('Las parejas que se cambian'),
      head: ['Italiano', 'Portoghese', 'Idea'],
      rows: [
        ['non parlo più', 'não falo mais', 'l’azione è finita'],
        ['non parlo ancora', 'ainda não falo', 'l’azione verrà'],
        ['non parlo mai', 'nunca falo', 'in nessun momento'],
        ['non parlo affatto', 'não falo nada', 'in nessun modo'],
        ['non parlo neanche', 'nem falo', 'tampouco'],
      ],
    },
    {
      caption: T('Negación con auxiliar'),
      head: ['Costruzione', 'Frase'],
      rows: [
        ['non + avere + participio', 'non ho visto'],
        ['non + essere + participio', 'non era venuto'],
        ['non + clitico + verbo', 'non lo so'],
        ['clitico + non + verbo', 'lo non so (enfatico)'],
        ['non + ausiliare + mai', 'non ho mai visto'],
      ],
    },
  ],
};
