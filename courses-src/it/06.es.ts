import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Lectura guiada: Juan 1:1'),
  subtitle: T('Dal principio era la Parola'),
  section: T('El pasado y la lectura'),
  body: C(`## Cuatro oraciones, una gramática

Lee el versículo en cuatro tiempos, y no palabra por palabra. Primero la estructura: {In principio era la Parola}. Después las tres oraciones que lo amplían: {e la Parola era presso Dio}, {e la Parola era Dio}, {e Dio era la Parola}. **El verbo es el mismo en las cuatro**, {era}, y lo que cambia es el complemento.

{La Parola} lleva artículo en casi todas, y eso no es decoración: es lo que marca {la Parola} como sujeto gramatical. En la segunda oración el sujeto es {la Parola} y {Dio} aparece en {presso Dio}, que vale por «junto a» y por «cerca de». En la tercera, {Dio} pierde el artículo y se vuelve predicativo, y ahí la frase deja de hablar de proximidad y empieza a hablar de identidad.

## {Era} contra {fu}

La distinción que el versículo exige es entre {era} y {fu}. {Era} **es el imperfecto de** {essere} y describe existencia continua: la luz estaba ahí, sin comienzo marcado. {Fu} es el *passato remoto* y marca un resultado que llegó a existir.

El griego de Jn 1:1 usa {ἦν} (ἐν ἀρχῇ ἦν ὁ λόγος), el mismo imperfeto. Donde el italiano escribe {fu}, en Gn 1:3, el griego escribe {γένοιτο} y el efecto es el mismo. Traducir {era} por «existía» y {fu} por «fue» acierta la diferencia; traducir los dos por «era» pierde lo que el texto hace.

## {In} sin artículo, {la} con

{In principio} **no lleva artículo**, y el motivo es mecánico: {in} absorbe la {-o} de {principio}. Lo mismo vale para {con Dio}, {con Gesù}, {fra i giudei}. En cambio, {la Parola} y {il Verbo} llevan artículo, porque nada se absorbió.

{In principio} todavía puede significar «en el principio» o «en principio», según el contexto. El versículo siguiente lo resuelve, {Era nel principio presso Dio}, donde {in} marca lugar y no origen.

## Criterio de lectura

Al traducir {la Parola era Dio}, no lo cambies por «la Palabra estaba junto a Dios»: el italiano usa {era presso} para la segunda oración y {era} a secas para la tercera, y la diferencia es a propósito. El griego marca el mismo contraste (πρὸς τὸν θεόν en la segunda, θεός en la tercera), y la preposición griega πρὸς puede indicar relación y no solo posición. Quien traduce la forma pierde ese segundo sentido.`),
  vocab: [
    V('principio', 'principio', 'principio'),
    V('era', 'essere', 'era (imperfeto)'),
    V('Parola', 'parola', 'Palabra'),
    V('presso', 'presso', 'junto a'),
    V('Dio', 'Dio', 'Dios'),
    V('vita', 'vita', 'vida'),
    V('luce', 'luce', 'luz'),
    V('tenebre', 'tenebra', 'tinieblas'),
    V('Verbo', 'verbo', 'Verbo (Logos)'),
    V('fu', 'essere', 'fue (resultado)'),
    V('cose', 'cosa', 'cosas'),
    V('creazione', 'creazione', 'creación'),
    V('mondo', 'mondo', 'mundo'),
    V('conosciuto', 'conoscere', 'conocido'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la diferencia entre era y fu en Juan 1?'),
    options: [
      T('Son sinónimos intercambiables'),
      T('era es existencia continua; fu es resultado puntual'),
      T('era es futuro; fu es pasado'),
      T('era es plural; fu es singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: la Parola ___ presso Dio'),
      answer: 'era',
      hint: T('Imperfeto de essere.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra significa «junto a»?'),
      options: [T('con'), T('presso'), T('dove'), T('tra')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa el versículo: e la Parola ___ Dio'),
      answer: 'era',
      hint: T('Repite el verbo del versículo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Era} es el imperfetto de {essere} y describe existencia continua; {fu} es el passato remoto y marca un resultado.',
      ),
    },
    {
      n: '2',
      text: T(
        '{In} absorbe la {-o} del nombre, así que no hay artículo: {in principio}, {con Dio}, {fra i giudei}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{La Parola} conserva el artículo porque es sujeto: {la Parola era} y {era la Parola} comparten la estructura.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Dio} sin artículo en {era Dio} es predicativo: la falta de artículo es lo que marca la identidad.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Presso} significa «junto a» y traduce πρὸς, que en griego puede indicar relación y no solo posición.',
      ),
    },
  ],
  notes: [
    {
      label: T('El verbo en primer plano'),
      text: T(
        'El versículo repite el mismo verbo cuatro veces, {era}, y quien traduce con prisa entrega una frase y no un argumento. El paralelismo {X era Y} con {Y era X} al final del versículo es el argumento: lo que estaba con Dios es lo que es Dios.',
      ),
    },
    {
      label: T('Dónde divergen las traducciones'),
      text: T(
        'Las dos traducciones italianas del versículo divergen en la tercera oración: una escribe {la Parola era Dio} y la otra {il Verbo era Dio}. La diferencia está en {Parola} y {Verbo}, y el griego λόγος sostiene las dos elecciones, porque la misma palabra griega cabe en un sustantivo abstracto y en uno concreto.',
      ),
    },
  ],
  examples: [
    { text: 'In principio era la Parola.', gloss: T('En el principio era la Palabra.') },
    { text: 'La Parola era presso Dio.', gloss: T('La Palabra estaba junto a Dios.') },
    { text: 'E la Parola era Dio.', gloss: T('Y la Palabra era Dios.') },
    { text: 'E Dio era la Parola.', gloss: T('Y Dios era la Palabra.') },
    { text: 'In lui era la vita.', gloss: T('En él estaba la vida.') },
    { text: 'Era la luce nel mondo.', gloss: T('La luz estaba en el mundo.') },
    { text: 'La vita era la luce degli uomini.', gloss: T('La vida era la luz de los hombres.') },
    { text: 'Il mondo non lo ha conosciuto.', gloss: T('El mundo no lo conoció.') },
  ],
  tables: [
    {
      caption: T('Mapa de Juan 1:1'),
      head: ['Frase', 'Verbo', 'Funzione'],
      rows: [
        ['In principio', '—', 'tempo'],
        ['era la Parola', 'era', 'esistenza'],
        ['la Parola era presso Dio', 'era', 'relazione'],
        ['la Parola era Dio', 'era', 'identità'],
      ],
    },
    {
      caption: T('Era, fu, è stato'),
      head: ['Forma', 'Tempo', 'Valore'],
      rows: [
        ['era', 'imperfetto', 'esistenza continua'],
        ['fu', 'passato remoto', 'risultato puntuale'],
        ['è stato', 'passato prossimo', 'passato con effetto'],
        ['è', 'presente', 'stato attuale'],
      ],
    },
  ],
};
