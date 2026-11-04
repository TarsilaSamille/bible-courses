import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('El verbo: presente y aspecto'),
  title: T('Aspecto: la pregunta que el tiempo no hace'),
  subtitle: T('писать y написать: mismo presente, mismo pasado, distinto sentido'),
  body: C(`
## Dos preguntas, y sólo una tiene verbo en portugués

Una frase en portugués hace dos preguntas al verbo: **cuándo** y **cómo**. En ruso hay una tercera, y no tiene nada que ver con el tiempo: **qué pasó con la acción, quedó entera o quedó en curso.**

Esa respuesta es el aspecto. Y es gramatical, es decir que está en la forma del verbo y no en la elección de un tiempo o de un adverbio. Он писал письмо y Он написал письмо tienen el mismo tiempo, el mismo sujeto y el mismo objeto. Lo que cambia es lo que el verbo hizo con la carta.

El imperfectivo presenta la acción como proceso: está ocurriendo, o ocurrió, o va a ocurrir, y el resultado no forma parte de lo que se dice. El perfectivo presenta la acción como evento delimitado: ocurrió una vez, llegó a un fin, y el resultado forma parte de lo que se dice.

En portugués, escrever e escrever por completo son el mismo verbo con o sin complemento. En ruso son dos verbos, y ninguno es más correcto que el otro: dicen cosas distintas.

## No es tiempo, y por eso la confusión es tan común

Un perfectivo tiene forma de presente. Я напишу письмо es un presente perfectivo: escribo la carta entera, y va a ocurrir una vez. Un imperfectivo tiene forma de futuro. Я буду писать письмо es un futuro imperfectivo: voy a estar escribiendo, y el resultado no está a la vista.

Los dos aparecen en todos los tiempos:

- presente: Я пишу y Я напишу
- pasado: Я писал y Я написал
- futuro: Я буду писать y Я напишу

La distinción que suele hacerse, y que es falsa, es que el imperfectivo es pasado y el perfectivo es futuro. Los dos verbos aparecen en todos los tiempos, y lo que los separa es lo que se hace con la acción.

El presente imperfectivo tiene además un uso propio: el hábito. Он ходит в церковь no es pasado, es lo que hace siempre. Он ходил в церковь es el pasado de la serie entera. Y Он пришёл es una ida sola, con hora de llegada.

## El par es léxico, y se aprende como una palabra

El par de aspecto no se deriva por regla. Писать hace par con написать por prefijo, y делать con сделать, y читать con прочитать. Pero брать hace par con взять, y los dos temas no tienen nada en común. Дать hace par con давать, y el imperfectivo es más largo que el perfectivo.

Consecuencia práctica: **el par se aprende como una sola palabra.** Ninguna regla permite adivinarlo, y un diccionario que sólo traduce y no da el par deja el trabajo a medias. Quien lee necesita el par entero, no el verbo suelto.

Y hay un tercer camino, además del prefijo y del sufijo: la supletividad. Взять y брать no son derivaciones uno del otro, y tampoco лечь y лежать. Son pares que existen por convención de la lengua, y se aprenden como si fueran un solo verbo con dos modos.

## El gancho: un versículo con los dos

**И свет во тьме светит, и тьма не объяла его.** Los dos verbos del versículo están en el mismo campo semántico, y ninguno es un simple prefijo del otro.

Светит es imperfectivo, y es la palabra que la narrativa esperaba: la luz brilla, sigue brillando, y el brillo es el estado en que la luz está mientras dura. No hay cuenta de veces ni frontera. El mismo verbo en pasado, светил, sería la luz haber brillado durante un tiempo, y el perfectivo con prefijo sería una luz que se encendió.

Объяла es perfectivo, con prefijo. Describe un acto que tuvo un final: la oscuridad lo intentó y no pudo. Toda la frase es un contraste entre dos acciones vistas desde dos puntos de vista: una es lo que dura, y la otra es lo que llegó a su fin.

Ése es el resumen de lo que hace el aspecto: **elige qué de la acción es el asunto de la frase.** En светит, el asunto es la luz brillando. En объяла, el asunto es el resultado de la oscuridad. Una misma escena, dos verbos, y la elección es del traductor tanto como del original.
`),
  vocab: [
    V('писать', 'писать', 'escribir; imperfectivo'),
    V('написать', 'написать', 'escribir entero; perfectivo'),
    V('делать', 'делать', 'hacer; imperfectivo'),
    V('сделать', 'сделать', 'hacer y terminar; perfectivo'),
    V('читать', 'читать', 'leer; imperfectivo'),
    V('прочитать', 'прочитать', 'leer hasta el fin; perfectivo'),
    V('брать', 'брать', 'coger; imperfectivo'),
    V('взять', 'взять', 'coger; perfectivo, supletivo'),
    V('светит', 'светить', 'brilla; imperfectivo presente'),
    V('объяла', 'объясть', 'envolvió; perfectivo pasado'),
    V('ходить', 'ходить', 'ir habitualmente; imperfectivo'),
    V('пришёл', 'прийти', 'vino; perfectivo'),
    V('аспект', 'аспект', 'aspecto, ou o substantivo que o nomeia'),
    V('имперфект', 'имперфект', 'imperfectivo, ou el sustantivo que lo nombra'),
    V('перфект', 'перфект', 'perfectivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Он написал письмо, ¿qué muestra el perfectivo?'),
    options: [
      T('Que la escritura está en curso'),
      T('Que la carta quedó escrita'),
      T('Que él escribe siempre'),
    ],
    answer: 1,
    hint: T(
      'El perfectivo muestra la acción como evento delimitado, con el resultado a la vista. El imperfectivo mostraría el proceso.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete el perfectivo de писать'), answer: 'написать' },
    {
      kind: 'choose',
      prompt: T('En Он ходит в церковь, el presente imperfectivo muestra...'),
      options: [T('una ida sola'), T('el hábito'), T('el futuro')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete el imperfectivo de взять'), answer: 'брать' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El imperfectivo presenta la acción como proceso, y el perfectivo como evento delimitado con resultado.',
      ),
    },
    {
      n: '2',
      text: T(
        'El aspecto no es tiempo: los dos aparecen en el presente, en el pasado y en el futuro.',
      ),
    },
    {
      n: '3',
      text: T(
        'El perfectivo tiene forma de presente ({напишу}) y el imperfectivo tiene forma de futuro ({буду писать}).',
      ),
    },
    {
      n: '4',
      text: T(
        'El presente imperfectivo también expresa hábito: {ходит} es lo que se hace siempre.',
      ),
    },
    {
      n: '5',
      text: T(
        'El par de aspecto se aprende como palabra única, porque no siempre hay derivación: {брать} y {взять}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué los dos verbos aparecen en todos los tiempos'),
      text: T(
        'El tiempo dice cuándo ocurre la acción: antes, ahora, después. El aspecto dice qué se hizo con la acción: si dejó rastro o quedó en curso. Son dos preguntas independientes, y por eso cada verbo tiene un par para cada tiempo. Я писал y Я написал son ambos pasado; la diferencia entre ellos no es temporal, es de aspecto.',
      ),
    },
    {
      label: T('Cuándo la traducción pierde el resultado'),
      text: T(
        'Писать письмо puede traducirse como escribir una carta, y no se pierde nada cuando el contexto es una carta cualquiera. Pero en una frase como Он писал письмо todo el día, lo que está en juego es la duración. Traducir a una lengua que no tiene aspecto obliga a elegir: o se marca el proceso, o se marca el resultado, y las dos elecciones dan traducciones distintas del mismo versículo.',
      ),
    },
  ],
  examples: [
    { text: 'Я пишу письмо', gloss: T('estoy escribiendo una carta; presente imperfectivo') },
    { text: 'Я напишу письмо', gloss: T('escribo la carta entera; presente perfectivo') },
    { text: 'Я писал письмо', gloss: T('estaba escribiendo una carta; pasado imperfectivo') },
    { text: 'Я написал письмо', gloss: T('escribí la carta; pasado perfectivo') },
    {
      text: 'Я буду писать письмо',
      gloss: T('voy a estar escribiendo una carta; futuro imperfectivo'),
    },
    { text: 'Он ходит в церковь', gloss: T('va a la iglesia; hábito en el presente') },
    { text: 'Он ходил в церковь', gloss: T('iba a la iglesia; serie en el pasado') },
    { text: 'Он пришёл', gloss: T('vino; una ida sola, perfectivo') },
    {
      text: 'беру деньги, а он взял книгу',
      gloss: T('tomo dinero y él tomó un libro; un campo, dos aspectos'),
    },
    {
      text: 'И свет во тьме светит, и тьма не объяла его',
      gloss: T('y la luz brilla en las tinieblas, y las tinieblas no la vencieron (Jn 1:5)'),
    },
  ],
  tables: [
    {
      caption: T('Los dos miembros del par en los tres tiempos'),
      head: [T('Tiempo'), T('Imperfectivo'), T('Perfectivo'), T('Qué cambia')],
      rows: [
        [T('presente'), T('Я пишу'), T('Я напишу'), T('proceso, o una vez')],
        [T('pasado'), T('Я писал'), T('Я написал'), T('duración, o resultado')],
        [T('futuro'), T('Я буду писать'), T('Я напишу'), T('voy a hacer, o voy a hacerlo una vez')],
      ],
    },
    {
      caption: T('Pares de aspecto, con el camino de formación'),
      head: [T('Imperfectivo'), T('Perfectivo'), T('Cómo se formó'), T('Idea')],
      rows: [
        [T('писать'), T('написать'), T('prefijo'), T('terminar de escribir')],
        [T('делать'), T('сделать'), T('prefijo'), T('hacer hasta el fin')],
        [T('читать'), T('прочитать'), T('prefijo'), T('leer hasta el fin')],
        [T('говорить'), T('сказать'), T('supletivo'), T('decir una vez')],
        [T('брать'), T('взять'), T('supletivo'), T('coger, con temas sueltos')],
        [T('давать'), T('дать'), T('supletivo'), T('dar, con temas sueltos')],
      ],
    },
    {
      caption: T('Perfectivo e imperfectivo en el mismo campo'),
      head: [T('Campo'), T('Imperfectivo'), T('Perfectivo'), T('La pregunta que responden')],
      rows: [
        [T('escribir'), T('пишет, писал'), T('напишет, написал'), T('sigue o ya quedó')],
        [T('brillar'), T('светит, светил'), T('засветит, засиял'), T('dura o se encendió')],
        [T('ir'), T('ходит, ходил'), T('придёт, пришёл'), T('varias veces o una')],
        [T('coger'), T('берёт, брал'), T('возьмёт, взял'), T('por costumbre, o de una vez')],
        [T('decir'), T('говорит, говорил'), T('скажет, сказал'), T('conversa o dice una vez')],
      ],
    },
  ],
};
