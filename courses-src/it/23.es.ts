import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Dónde va el adverbio'),
  subtitle: T('parla lentamente; domani arrivo'),
  section: T('El adverbio'),
  body: C(`## El adverbio va después del verbo

El adverbio de modo y de cantidad se pega al verbo conjugado y va antes del objeto: «Maria parla *lentamente*», «gli studenti studiano *bene*», «Dio parla *fortemente*». La regla es tan estable que invertir la posición suena mal aunque la frase siga siendo comprensible: *lentamente parla Maria* es poéticamente posible, pero nadie habla así.

Dos casos quedan fuera de ese sitio. El adverbio que **cuantifica** un adjetivo va delante de él, como en «parla *molto* bene» y «è *troppo* bello». Y el adverbio que modifica la frase entera, no la acción, también puede subir al principio, con tal de que sea conectivo: «*Quindi*, partiremo domani».

## Tiempo determinado y lugar pueden ir delante

La excepción son los adverbios de **tiempo determinado** y de **lugar**, que no tienen sitio fijo: pueden ir delante o detrás, y el italiano prefiere delante cuando el tiempo o el lugar es el foco de la frase. «*Domani* arrivo» y «Arrivo *domani*» son ambos correctos. Lo mismo vale para «*Oggi* è nato», «*Qui* vivo», «*Là* andiamo», «*Sopra tutto*, è importante».

El contraste es el más fino de todos. *Oggi* como tiempo determinado abre la frase: «*Oggi* è il primo giorno». *Oggi* como tiempo indeterminado, cualquier día de este tramo, prefiere el final: «si vive bene *oggi*».

## Con el pronombre pegado al verbo, el adverbio va al final

El italiano tiene pronombres que se pegan al verbo: {lo}, {la}, {li}, {le}, {ci}, {vi}, {mi}, {ti}, {ne}. Una vez que el pronombre está en la frase, el adverbio no puede pasar por encima. El orden es verbo, pronombre, adverbio: **Parlane bene.** *Lo so già.* *Ci andiamo domani.* *Ne ho parlato molto.* En el imperativo afirmativo todo el bloque se junta: *Dammelo subito.*

Lo contrario también existe y es una elección de énfasis, no una regla: «Parlane *davvero*» pone el adverbio en medio y suena más enfático. La posición neutra sigue siendo la de después.

## En la Biblia

Jn 7:38 pone el adverbio antes del verbo y, además, deja el verbo antes del sujeto: «Chi crede in me, {come dice la Scrittura}, dal suo ventre scorreranno fiumi d’acqua viva». El {come} es adverbio de comparación y precede a {dice}; {scorreranno} es una tercera plural sin sujeto a la vista, porque el sujeto está en {chi crede in me}. Un lector acostumbrado al orden directo se para y lee la frase dos veces.

El paralelo griego usa una sola partícula, {ὡς}, que es a la vez «como» y la marca de la subordinada; el italiano tuvo que pedir un adverbio y un verbo.

## Criterio de lectura

Marca el adverbio en un texto y pregúntale qué modifica: si modifica el verbo, va después; si modifica un adjetivo, va antes; si hay pronombre pegado al verbo, va después del pronombre. Fuera de esos tres casos la posición es libre.`),
  vocab: [
    V('lentamente', 'lentamente', 'lentamente'),
    V('bene', 'bene', 'bien'),
    V('molto', 'molto', 'mucho'),
    V('domani', 'domani', 'mañana'),
    V('oggi', 'oggi', 'hoy'),
    V('ieri', 'ieri', 'ayer'),
    V('sempre', 'sempre', 'siempre'),
    V('già', 'già', 'ya'),
    V('adesso', 'adesso', 'ahora'),
    V('quindi', 'quindi', 'por tanto'),
    V('perciò', 'perciò', 'por eso'),
    V('tuttavia', 'tuttavia', 'sin embargo'),
    V('allora', 'allora', 'entonces'),
    V('veramente', 'veramente', 'realmente'),
    V('qui', 'qui', 'aquí'),
    V('là', 'là', 'allá'),
    V('parlare', 'parlare', 'hablar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase pone el adverbio en el sitio neutro?'),
    options: [
      T('Lentamente parla Maria.'),
      T('Maria parla lentamente.'),
      T('Maria lentamente parla.'),
      T('Parlava Maria lentamente.'),
    ],
    answer: 1,
    hint: T('El adverbio de modo va después del verbo conjugado.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En «Parlane bene», ¿dónde está el adverbio?'),
      options: [
        T('Antes del pronombre ne'),
        T('Después del pronombre ne'),
        T('Al principio de la frase'),
        T('En lugar del verbo'),
      ],
      answer: 1,
      hint: T('Verbo, pronombre, adverbio.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué adverbio puede abrir la frase?'),
      options: [T('Quindi'), T('Molto'), T('Subito'), T('Senza')],
      answer: 0,
      hint: T('Es conectivo y modifica la frase entera.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: ___ arrivo (mañana)'),
      answer: 'Domani',
      hint: T('El tiempo determinado puede preceder al verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio de modo y de cantidad va después del verbo conjugado y antes del objeto.',
      ),
    },
    {
      n: '2',
      text: T('El adverbio de tiempo determinado y de lugar puede ir antes o después del verbo.'),
    },
    {
      n: '3',
      text: T(
        'Con pronombre pegado al verbo el orden es verbo, pronombre, adverbio: parla ne bene, lo so già.',
      ),
    },
    {
      n: '4',
      text: T(
        'El adverbio que cuantifica un adjetivo va delante de él: parla molto bene, è troppo bello.',
      ),
    },
    { n: '5', text: T('Conectores como quindi, perciò e tuttavia pueden abrir la frase.') },
  ],
  notes: [
    {
      label: T('El clítico es dueño de la cola'),
      text: T(
        'En {Parlane bene}, {ne} es objeto y {bene} es adverbio. El português dejaría el adverbio más libre; en italiano espera al pronombre, porque el pronombre se ha pegado al verbo y ha formado un bloque con él.',
      ),
    },
    {
      label: T('El mismo adverbio, dos posiciones'),
      text: T(
        '{Oggi} como tiempo determinado abre la frase («oggi è il primo giorno»); como tiempo indeterminado, cualquier día de este tramo, va al final («si vive bene oggi»). La posición es lo que dice cuál de los dos quisiste decir.',
      ),
    },
  ],
  examples: [
    { text: 'Maria parla lentamente.', gloss: T('María habla despacio.') },
    { text: 'Parla molto bene.', gloss: T('Habla muy bien.') },
    { text: 'Domani arrivo a Roma.', gloss: T('Mañana llego a Roma.') },
    { text: 'Oggi è nato un bambino.', gloss: T('Hoy ha nacido un niño.') },
    { text: 'Qui vivo da molti anni.', gloss: T('Vivo aquí desde hace muchos años.') },
    { text: 'Lo so già.', gloss: T('Ya lo sé.') },
    { text: 'Ci andiamo domani.', gloss: T('Vamos allí mañana.') },
    { text: 'Quindi, partiremo.', gloss: T('Por tanto, partiremos.') },
    { text: 'Ne ho parlato molto.', gloss: T('He hablado mucho de ello.') },
  ],
  tables: [
    {
      caption: T('Posizione dell’avverbio'),
      head: ['Tipo', 'Dove va', 'Esempio'],
      rows: [
        ['modo', 'dopo il verbo', 'parla lentamente'],
        ['quantità', 'dopo il verbo', 'studio molto'],
        ['grado sull’aggettivo', 'prima dell’aggettivo', 'molto bello'],
        ['tempo determinato', 'prima o dopo', 'domani arrivo'],
        ['luogo', 'prima o dopo', 'qui vivo'],
        ['conettivo', 'inizio della frase', 'Quindi, partiremo'],
      ],
    },
    {
      caption: T('Verbo, pronombre, avverbio'),
      head: ['Ordine', 'Frase'],
      rows: [
        ['verbo + pronome', 'Parlane.'],
        ['verbo + pronome + avverbio', 'Parlane bene.'],
        ['verbo + pronome + avverbio', 'Lo so già.'],
        ['verbo + pronome + avverbio', 'Ci andiamo domani.'],
        ['verbo + avverbio + pronome', 'Parlane davvero.'],
      ],
    },
  ],
};
