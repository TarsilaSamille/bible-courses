import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('El adjetivo y el adverbio'),
  title: T('El adverbio: negación'),
  subtitle: T('não pode, pode não, y la proclisis que no niega'),
  body: C(`## Qué niega cada uno

{Não} niega el verbo, y por eso aparece siempre antes de él. Los otros niegan otras cosas: {nunca} y {jamais} niegan el tiempo, {nada} niega la cosa, {ninguém} niega la persona, {nenhum} niega el indefinido, {nem} suma una segunda negación, y {tampouco} dice que la cosa es menos de lo que se pensaba.

Cada uno niega un elemento, y por eso pueden acumularse: {Não vi ninguém}, {Nunca vi ninguém}, {Não vi nada nunca}. Eso no es redundancia, es énfasis: cada adverbio niega un elemento distinto de la frase.

## La proclisis del não

{Não} tiene dos posiciones, y la diferencia es real. En {Ele não pode vir}, {não} niega el hecho: es incapaz. En {Ele pode não vir}, {não} niega el venir: es capaz, y lo que no hace es venir. El mismo par existe con el condicional: {não deveria} dice que no debe; {deveria não} dice que debe abstenerse.

La regla es que {não} va antes del verbo cuando lo que se niega es la primera información de la frase. Va después del verbo cuando la información principal ya está dada y {não} modifica el infinitivo o lo que viene después.

## De dónde cuelga la negación

{Não} también puede entrar dentro de una subordinada. {Não sei se ele vem} tiene el {não} en el verbo principal y la subordinada después; {Não acredito que ele venha} tiene el {não} en el verbo principal y el subjuntivo en la subordinada. Y está el caso inverso, en que la negación está en la subordinada: {Os que não creram}.

Es donde la traducción bíblica engaña con más frecuencia, porque el griego y el hebreo ponen la negación en un punto fijo de la frase y el portugués tiene que reorganizar. Lo que no puede es sacar la negación de lo que niega.

## Criterio de lectura

En cualquier frase con {não}, pregúntate: ¿qué se está negando, el verbo, el tiempo, la cosa, la persona o el indefinido? ¿Y el {não} está antes o después del verbo?

Jn 15.25 dice que se cumplen las palabras de la ley «las cuales {não creram}»: la negación está dentro del relativo y no en el verbo principal de la frase. Es el caso en que la negación bíblica queda pegada al pronombre relativo, y en portugués aparece exactamente en el mismo sitio.`),
  vocab: [
    V('não', 'não', 'no'),
    V('nunca', 'nunca', 'nunca'),
    V('jamais', 'jamais', 'jamás'),
    V('nada', 'nada', 'nada'),
    V('ninguém', 'ninguém', 'nadie'),
    V('nenhum', 'nenhum', 'ninguno'),
    V('nem', 'nem', 'ni'),
    V('tampouco', 'tampouco', 'tampoco'),
    V('não pode', 'poder', 'no puede'),
    V('pode não', 'poder', 'puede no'),
    V('não sabia', 'saber', 'no sabía'),
    V('não creram', 'crer', 'no creyeron'),
    V('a lei', 'lei', 'la ley'),
    V('o verbo', 'verbo', 'el verbo'),
    V('a negação', 'negação', 'la negación'),
  ],
  rules: [
    { n: '§1', text: T('{Não} niega el verbo y por eso va antes de él.') },
    {
      n: '§2',
      text: T(
        '{Nunca} y {jamais} niegan el tiempo, {nada} niega la cosa, {ninguém} niega la persona, {nenhum} niega el indefinido.',
      ),
    },
    { n: '§3', text: T('{Não pode} niega el hecho y {pode não} niega el venir.') },
    { n: '§4', text: T('La negación puede quedar dentro de la subordinada: {os que não creram}.') },
    {
      n: '§5',
      text: T('La negación nunca sale de lo que niega, ni en portugués ni en la traducción.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El hebreo bíblico tiene partícula de negación ({lo}, {al}), y el griego usa {μή} y {οὐκ}. Los tres marcan la negación una sola vez, y el portugués a veces necesita dos palabras para decir lo mismo.',
      ),
    },
    {
      label: T('Negación doble'),
      text: T(
        'En {não é possível}, la segunda negación no niega nada: refuerza. Por eso {não é possível} es más enfático que {é impossível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ele não pode vir.', gloss: T('{não} niega el hecho: es incapaz.') },
    { text: 'Ele pode não vir.', gloss: T('{não} niega el venir, no la capacidad.') },
    { text: 'Não deveria falar.', gloss: T('Negación del verbo principal.') },
    { text: 'Deveria não falar.', gloss: T('Debe abstenerse de hablar.') },
    { text: 'Não sei se ele vem.', gloss: T('La subordinada queda entera, después.') },
    { text: 'Nunca vi ninguém.', gloss: T('Dos negaciones, dos elementos negados.') },
    { text: 'Nem ele, tampouco eu.', gloss: T('La segunda negación es más débil que la primera.') },
    { text: 'Os que não creram.', gloss: T('La negación pegada al pronombre relativo.') },
  ],
  tables: [
    {
      caption: T('Cada adverbio niega un elemento'),
      head: ['Advérbio', 'O que nega', 'Exemplo'],
      rows: [
        ['não', 'o verbo', 'não viu'],
        ['nunca, jamais', 'o tempo', 'nunca viu'],
        ['nada', 'a coisa', 'não viu nada'],
        ['ninguém', 'a pessoa', 'não viu ninguém'],
        ['nenhum', 'o indefinido', 'não viu nenhum livro'],
      ],
    },
    {
      caption: T('Las dos posiciones do não'),
      head: ['Posição', 'Frase', 'O que se nega'],
      rows: [
        ['antes do verbo', 'Ele não pode vir.', 'o fato: ele é incapaz'],
        ['depois do verbo', 'Ele pode não vir.', 'o vir: ele é capaz, mas não vem'],
      ],
    },
    {
      caption: T('Negación por elemento'),
      head: ['Grau', 'Frase', 'Explicação'],
      rows: [
        ['fraca', 'Não vi.', 'nega o verbo'],
        ['média', 'Não vi nada.', 'nega também a coisa'],
        ['forte', 'Não vi nunca nada.', 'nega verbo, tempo e coisa'],
        ['máxima', 'Não vi jamais nada de ninguém.', 'nega tudo, um elemento por vez'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «ele pode não vir», ¿qué se niega?'),
    options: [T('el venir'), T('la capacidad'), T('el tiempo'), T('la persona')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('En «{não pode}», {não} niega el ______.'),
      answer: 'fato',
      hint: T('Es incapaz.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué adverbio niega a la persona?'),
      options: [T('ninguém'), T('nada'), T('nunca'), T('nenhum')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el adverbio con lo que niega.'),
      pairs: [
        { a: T('não'), b: T('o verbo') },
        { a: T('nada'), b: T('a coisa') },
        { a: T('ninguém'), b: T('a pessoa') },
        { a: T('nunca'), b: T('o tempo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
