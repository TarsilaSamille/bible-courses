import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('El adverbio: cómo se forma'),
  subtitle: T('lentamente, bene, sempre'),
  section: T('El adverbio'),
  body: C(`## {-mente} se pega al adjetivo femenino

La regla cabe en una línea. El adverbio de modo se forma pegando el sufijo **-mente** al adjetivo en femenino singular: {lenta} + {-mente} = {lentamente}, {veloce} → {velocemente}, {costante} → {costantemente}. No hace falta saber flexionar nada; hace falta saber que el sufijo ya trae el género dentro.

Cuando el adjetivo es de primera clase, termina en {-o} o {-a} y la cuenta es literal. {Dolce} → {dolcemente}, {forte} → {fortemente}, {felice} → {felicemente}, {breve} → {brevemente}, {facile} → {facilmente}.

## La vocal que cae, y las que no caen

El punto delicado viene con los adjetivos en {-e}, que en italiano no tienen género: {facile}, {veloce}, {difficile}, {breve}, {debole}. En ellos la {-e} final se **borra** antes de {-mente}. De ahí {facilmente}, {velocemente}, {difficilmente}, {debolmente}, y no {facilmente} con dos {-e} finales.

Después está el grupo que no sigue ninguna regla, porque viene de un adjetivo que nadie ve: {bene} de {buono}, {male} de {cattivo}, {meglio} y {peggio}. Son cuatro palabras para aprender.

## Los que no derivan de ningún adjetivo

La tercera familia es la más numerosa y la que hay que aprenderse de memoria. No hay adjetivo detrás de {sempre}, ni detrás de {mai}, ni detrás de {già}: {oggi}, {ieri}, {domani}, {adesso}, {allora}, {quando}, {spesso}, {raramente}, {mai}, {sempre}, {già}, {ancora}, {quasi}, {giusto}, {appena}, {forse}. La lista es larga, y la única manera de conocerla es usándola.

Lo que separa las dos familias es la flexión, y aquí es sencillo: el adverbio en {-mente} nunca flexiona, ni por género ni por número. {Maria parla lentamente} y {i ragazzi parlano lentamente} usan la misma palabra.

## En la Biblia

Sal 1:3 compara al justo con un árbol: «Sarà come un albero piantato lungo i corsi d’acqua». El {come} es adverbio de comparación y {lungo} es adverbio de lugar; los dos son invariables y los dos van delante del nombre que modifican. El paralelo griego, {ὡς}, es una sola palabra que significa a la vez «como» y «cuán», y el italiano tuvo que pedir dos adverbios para decir lo mismo.

## Criterio de lectura

Cuando veas un adverbio terminado en {-mente}, busca el adjetivo del que viene y borra la {-e} final del adjetivo antes de pegar el sufijo. Cuando veas {bene} o {male}, no busques adjetivo: son palabras sueltas, y quien pone {più} delante de ellas va por el camino equivocado.`),
  vocab: [
    V('lentamente', 'lentamente', 'lentamente'),
    V('velocemente', 'velocemente', 'rápidamente'),
    V('facilmente', 'facilmente', 'fácilmente'),
    V('brevemente', 'brevemente', 'brevemente'),
    V('fortemente', 'fortemente', 'fuertemente'),
    V('felicemente', 'felicemente', 'felizmente'),
    V('dolcemente', 'dolcemente', 'dulcemente'),
    V('costantemente', 'costantemente', 'constantemente'),
    V('bene', 'bene', 'bien'),
    V('male', 'male', 'mal'),
    V('meglio', 'meglio', 'mejor'),
    V('peggio', 'peggio', 'peor'),
    V('sempre', 'sempre', 'siempre'),
    V('mai', 'mai', 'nunca'),
    V('già', 'già', 'ya'),
    V('ancora', 'ancora', 'todavía'),
    V('oggi', 'oggi', 'hoy'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Forma el adverbio de facile: ___'),
    answer: 'facilmente',
    hint: T('Borra la -e del adjetivo antes de -mente.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué adverbio viene de cattivo?'),
      options: [T('cattivamente'), T('male'), T('malmente'), T('peggiormente')],
      answer: 1,
      hint: T('Este grupo no sigue ninguna regla.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el adverbio de dolce: ___'),
      answer: 'dolcemente',
      hint: T('Adjetivo en -e: borra la -e.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
      options: [
        T('Maria parla lentamente.'),
        T('Maria parla lenta.'),
        T('Maria parlano lentamente.'),
        T('Maria parla lentamentes.'),
      ],
      answer: 0,
      hint: T('El adverbio en -mente no flexiona.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El adverbio de modo se forma pegando -mente al adjetivo en femenino singular.'),
    },
    {
      n: '2',
      text: T('Si el adjetivo termina en -e, se borra la -e antes de -mente: facile → facilmente.'),
    },
    { n: '3', text: T('Bene, male, meglio y peggio no siguen la regla y hay que aprendérselos.') },
    { n: '4', text: T('El adverbio en -mente no flexiona: ni género, ni número, ni persona.') },
    {
      n: '5',
      text: T('La mayoría de los adverbios de tiempo y cantidad no viene de ningún adjetivo.'),
    },
  ],
  notes: [
    {
      label: T('El error de las dos -e'),
      text: T(
        'La duda más común es mantener la {-e} del adjetivo y añadir {-mente} entero, lo que produce {facilmente} con dos {-e} finales. Borra primero, pega después: {facile} queda {facil}, y {facil} más {-mente} da {facilmente}.',
      ),
    },
    {
      label: T('Mejor, y no más bien'),
      text: T(
        'El comparativo de {bene} es {meglio}, y por eso en los evangelios aparece tan a menudo la expresión {Meglio è …}. El português espera {più bene}, que en italiano suena literario y casi nunca se escribe.',
      ),
    },
  ],
  examples: [
    { text: 'Parla lentamente.', gloss: T('Habla despacio.') },
    { text: 'Legge facilmente.', gloss: T('Lee con facilidad.') },
    { text: 'Dorme bene.', gloss: T('Duerme bien.') },
    { text: 'Ha dormito peggio.', gloss: T('Ha dormido peor.') },
    { text: 'Oggi è già tardi.', gloss: T('Hoy ya es tarde.') },
    { text: 'Non parla mai.', gloss: T('Nunca habla.') },
    { text: 'Sara come un albero.', gloss: T('Será como un árbol.') },
    { text: 'Camminano lentamente lungo la strada.', gloss: T('Caminan despacio por el camino.') },
  ],
  tables: [
    {
      caption: T('Aggettivo e avverbio'),
      head: ['Aggettivo', 'Femminile', 'Avverbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['facile', '(invariabile)', 'facilmente'],
        ['veloce', '(invariabile)', 'velocemente'],
        ['breve', '(invariabile)', 'brevemente'],
        ['dolce', '(invariabile)', 'dolcemente'],
        ['forte', 'forte', 'fortemente'],
        ['felice', 'felice', 'felicemente'],
        ['costante', 'costante', 'costantemente'],
      ],
    },
    {
      caption: T('Irregolari e senza origine'),
      head: ['Avverbio', 'Glossa', 'Viene da'],
      rows: [
        ['bene', 'bene', 'buono'],
        ['male', 'male', 'cattivo'],
        ['meglio', 'meglio', 'bene'],
        ['peggio', 'peggio', 'bene'],
        ['sempre', 'siempre', '—'],
        ['mai', 'nunca', '—'],
        ['già', 'ya', '—'],
        ['ancora', 'todavía', '—'],
        ['oggi', 'hoy', '—'],
        ['domani', 'mañana', '—'],
        ['adesso', 'ahora', '—'],
        ['allora', 'entonces', '—'],
      ],
    },
  ],
};
