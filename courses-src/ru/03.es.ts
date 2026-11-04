import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('La escritura'),
  title: T('La sílaba y la reducción vocálica'),
  subtitle: T('через se escribe con dos vocales y se habla sin ninguna de ellas'),
  body: C(`
## Toda sílaba tiene un núcleo

Una sílaba tiene exactamente una vocal, y esa vocal es el núcleo. Las consonantes se agarran a él, antes o después, y no forman núcleo por sí solas. Eso vale para el ruso igual que para el latín, y es lo que permite contar sílabas en un texto sin hablar la lengua.

En через la grafía muestra dos vocales, че y рез, y hay dos sílabas: че-рез. En Слово Твое hay cuatro: Сло-во Тво-е. Las sílabas siempre se cuentan sobre la grafía, y por eso la lectura en voz alta empieza por una cuenta que el texto ya ha hecho.

El detalle que lo cambia todo es que la vocal del núcleo no es siempre la misma. En через la primera vocal es una [e] llena, y eso sólo es posible porque el acento cae en la segunda sílaba.

## La vocal fuera del acento

El ruso reduce las vocales que no reciben acento. No es un accidente de dicción ni un efecto de dialecto: es el sistema, y el sistema es categórico. Una vocal acentuada conserva el sonido que la letra anuncia; una vocal no acentuada pierde su identidad y se convierte en el sonido más genérico que el aparato vocal permite en esa posición.

La consecuencia práctica es grande. Compare слово, donde la o está acentuada y suena [o], con слове, donde esa misma o está sin acento y suena corta y redonda. Es la misma raíz. Lo que cambia es el acento, y lo que el acento hace es elegir entre dos vocales que la grafía distingue y el habla casi no distingue.

## Tres sonidos que valen por cinco vocales

La reducción se describe mejor contando. Las diez vocales escritas se reducen, fuera del acento, a tres sonidos principales: el de а y о es uno, el de и y ы es uno, el de е, я y ю es uno. Fuera del acento, cambiar а por о en una palabra cuya sílaba tónica viene después no cambia lo que se oye.

**La ё es la excepción que confirma la regla.** Nunca reduce, porque está siempre en el acento. Toda palabra con ё tiene por lo menos una sílaba hablada con la vocal llena, y por eso la transcripción fonética del ruso no anota esa letra: es redundante para quien lee e indispensable para quien habla.

Una palabra de una sílaba no reduce nada, porque no hay dónde reducir. Por eso свет se habla con la е llena, y el mismo sonido de vocal llena aparece en пот y en рот, donde la consonante cambia y la vocal no.

El gancho está en Juan 1:3, y el verso sirve justamente por causa de через. **Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** La palabra через está escrita con dos vocales que podrían recibir acento y se habla sin ninguna de ellas. Quien pronuncie che-rez con las dos vocales abiertas está hablando una lengua que nadie habla.

## Qué le hace la reducción a quien lee

Para quien traduce, la reducción importa poco: es sonido, no sentido. Para quien lee en voz alta, o quien dicta, lo es todo. Una palabra escrita con dos vocales puede hablarse con dos vocales mudas, y quien escribe no tiene manera de saberlo.

Salvo que la palabra traiga el acento escrito. Un acento marcado es lo único en la ortografía rusa que dice cuál de las vocales es real. Por eso los diccionarios rusos lo imprimen, y por eso el acento no es un detalle.`),
  vocab: [
    V('слог', 'слог', 'sílaba'),
    V('ударный слог', 'ударный слог', 'sílaba acentuada'),
    V('ударение', 'ударение', 'acento'),
    V('редукция', 'редукция', 'reducción vocálica'),
    V('гласная', 'гласная', 'vocal'),
    V('согласная', 'согласная', 'consonante'),
    V('через', 'через', 'por medio de; dos vocales reducidas'),
    V('начало', 'начало', 'comienzo'),
    V('быть', 'быть', 'ser, estar'),
    V('слово', 'слово', 'palabra'),
    V('Твое', 'твой', 'tuyo'),
    V('свет', 'свет', 'luz'),
    V('слове', 'слово', 'sobre la palabra (prepositivo)'),
    V('ещё', 'ещё', 'todavía; la ё nunca reduce'),
    V('вода', 'вода', 'agua'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda sílaba tiene exactamente un núcleo vocálico. Las consonantes no forman núcleo por sí solas.',
      ),
    },
    {
      n: '2',
      text: T(
        'La reducción sólo ocurre en las vocales átonas. La vocal acentuada conserva el sonido que la letra anuncia.',
      ),
    },
    {
      n: '3',
      text: T(
        'Fuera del acento, {а} y {о} caen en el mismo sonido, {и} y {ы} en el mismo, {е}, {я} y {ю} en el mismo.',
      ),
    },
    {
      n: '4',
      text: T(
        'La {ё} nunca reduce, porque está siempre en el acento. Por eso las transcripciones fonéticas no la anotan.',
      ),
    },
    { n: '5', text: T('Una palabra de una sílaba no reduce nada.') },
  ],
  notes: [
    {
      label: T('La palabra escrita miente'),
      text: T(
        'через está escrita con dos vocales y no tiene ninguna de las dos en el habla. La grafía registra la raíz histórica; el habla registra lo que la boca hizo con ella. Ninguna de las dos piezas es falsa, y ninguna basta por sí sola: quien lee necesita el texto, quien habla necesita el oído.',
      ),
    },
    {
      label: T('Tres sonidos, diez letras'),
      text: T(
        'А е ё и о у ю я ы э son diez vocales escritas. Fuera del acento quedan tres sonidos principales: el redondeado de а y о, el central de и и ы, el anterior de е, я y ю. Cambiar а por о en una palabra acentuada en la segunda sílaba no cambia nada para quien oye, y lo cambia todo para quien lee.',
      ),
    },
  ],
  examples: [
    { text: 'через', gloss: T('por medio de; che-rez escrito, dos vocales reducidas') },
    { text: 'Все чрез Него начало быть', gloss: T('Todo llegó a ser por medio de él (Jn 1:3)') },
    { text: 'слово', gloss: T('palabra, con la o acentuada') },
    { text: 'о слове', gloss: T('sobre la palabra, con la misma o reducida') },
    { text: 'свет', gloss: T('luz; una sílaba, ninguna reducción') },
    { text: 'пот', gloss: T('savia; una sílaba, ninguna reducción') },
    { text: 'ещё', gloss: T('todavía; la ё está en el acento') },
    { text: 'Твое', gloss: T('tuyo; la й hace el trabajo de la vocal y la ё marca el acento') },
    { text: 'вода', gloss: T('agua; la a final está acentuada') },
  ],
  tables: [
    {
      caption: T('La vocal escrita y lo que vale'),
      head: [T('Vocal escrita'), T('En el acento'), T('Fuera del acento')],
      rows: [
        [T('а'), T('[a]'), T('[ɐ]')],
        [T('о'), T('[o]'), T('[ɐ]')],
        [T('и'), T('[ʲi]'), T('[ɨ]')],
        [T('ы'), T('[ɨ]'), T('[ɨ]')],
        [T('е'), T('[ʲe]'), T('[ʲɪ]')],
        [T('я'), T('[ja]'), T('[ʲɪ]')],
        [T('ю'), T('[ju]'), T('[u]')],
        [T('у'), T('[u]'), T('[u]')],
        [T('ё'), T('[o]'), T('nunca, está siempre acentuada')],
        [T('э'), T('[e]'), T('[ɛ]')],
      ],
    },
    {
      caption: T('Sílabas en la página, sonidos en la boca'),
      head: [T('Palabra'), T('Escrita'), T('Dónde está el acento'), T('Qué hace el habla')],
      rows: [
        [T('через'), T('че-рез'), T('segunda sílaba'), T('las dos vocales caen')],
        [T('слово'), T('сло-во'), T('primera sílaba'), T('la о final pasa a [ɐ]')],
        [
          T('о слове'),
          T('о сло-ве'),
          T('la palabra no tiene acento propio'),
          T('la о sigue corta'),
        ],
        [T('свет'), T('una sílaba'), T('ninguno'), T('nada reduce')],
        [T('ещё'), T('е-щё'), T('segunda sílaba'), T('la е inicial desaparece en la ё')],
        [T('Твое'), T('Тво-е'), T('segunda sílaba'), T('[tvojə], la е final es schwa')],
      ],
    },
    {
      caption: T('Dónde aparece la reducción'),
      head: [T('Situación'), T('Lo que se oye'), T('Ejemplos')],
      rows: [
        [T('palabra de una sílaba'), T('ninguna reducción'), T('свет, пот, рот')],
        [
          T('acento en la primera sílaba'),
          T('las vocales siguientes caen a [ɐ] o [ɪ]'),
          T('слово, окно'),
        ],
        [
          T('acento en la segunda sílaba'),
          T('la primera vocal cae a [ɐ] o [ɪ]'),
          T('через, светильник'),
        ],
        [T('presencia de ё'), T('esa vocal nunca cae'), T('Твое, ещё, всё')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En через, ¿qué vocal conserva el sonido pleno?'),
    options: [T('La primera'), T('La segunda'), T('Ninguna: las dos están fuera del acento')],
    answer: 1,
    hint: T(
      'El acento de через cae en la segunda sílaba. La primera vocal queda átona y se reduce.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: в ___ было Слово (Jn 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('¿Qué vocal nunca reduce?'),
      options: [T('о'), T('е'), T('ё')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Complete: ещё — la letra acentuada es ___'), answer: 'ё' },
  ],
};
