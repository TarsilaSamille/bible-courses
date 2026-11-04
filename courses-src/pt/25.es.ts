import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('El verbo: forma y tiempo'),
  title: T('El verbo: dar y poder'),
  subtitle: T('dou, dá, dê, dei, y el dar que significa hacer'),
  body: C(`## Las formas que solo estos dos tienen

La mayoría de los verbos conjuga por regla, y {amar} sirve de modelo para todos. {Dar} y {poder} son las dos excepciones que todo el portugués aprendió sin querer, y no siguen regla ninguna: {dou}, {dá}, {dê}, {demos}, {dei}, {de}, {dão}. Al lado, {posso}, {podes}, {pode}, {podemos}, {podeis}, {podem}, y en el subjuntivo {possa}, {possas}, {possa}, {possamos}, {podais}, {possam}.

Lo que hay de verdad es una regla antigua que quedó: en {dar}, la primera persona del presente recibe una {-o} que el resto del verbo no tiene, y {poder} recibe {-ss-} en lugar de la {-d-} que tenía el latín. Los dos verbos son de la misma familia en latín, y la forma portuguesa es la que perdió ese sonido.

Quien traduce del griego se topa con esto, porque el griego también separa dar de poder: {δίδωμι} y {δύναμαι} son palabras distintas, y en portugués también, pero las flexiones son tan irregulares que la mano se bloquea antes que la cabeza.

## El dar que significa hacer

El verbo {dar} tiene en portugués un uso que el griego no tiene: forma perífrasis con otro verbo y significa {hacer}. {Dar de comer} es alimentar, {dar um jeito} es ordenar, {dar a volta} es rodear, {dar com os olhos em} es encontrarse con, {dar-se bem} es salir bien. En ese uso {dar} no entrega nada: hace la acción del otro verbo.

Por eso el Nuevo Testamento traducido al portugués tiene verbos que el griego no tiene como verbo principal. Donde el griego dice {πεῖναι}, el portugués dice {dar de comer}; donde el griego dice {ποιῆσαι}, el portugués dice {dar}, y la perífrasis traduce el sentido sin distorsionarlo.

## El dar en el Nuevo Testamento

Lc 15.22 narra una ropa con cuatro verbos: el padre {trouxe} la mejor túnica, {vestiu-o}, {meteu-lhe} un anillo en la mano y sandalias en los pies. Son cuatro verbos distintos para cuatro actos de vestir, y el griego hace lo mismo con cuatro verbos distintos, lo cual es raro: la narración quiere decir que el padre lo hizo todo con sus propias manos.

En el mismo capítulo, el hijo menor pide los bienes de la herencia, y el padre dice que {dar} dinero a quien no sabe gastar es {dar} para nada. La perífrasis {dar com} aparece ahí con el sentido de {tirar}, y es el único sentido de {dar} que el griego no tiene.

## Criterio de lectura

Con cualquier forma de {dar} o {poder}, pregúntate: ¿qué persona es, y la forma está en la serie principal o en el pretérito? ¿Y el {dar} va solo o es perífrasis?

En Lc 15.22 el texto llega con los verbos juntos, y ahí es donde aparece la perífrasis: el padre no {deu} un anillo, {meteu} un anillo. Quien traduce conservando verbo por verbo conserva la enumeración del original; quien escribe {deu} para todo borra los cuatro verbos y pierde las manos del padre, que es lo que el texto está contando.`),
  vocab: [
    V('dou', 'dar', 'doy'),
    V('dá', 'dar', 'da'),
    V('dê', 'dar', 'dé'),
    V('dei', 'dar', 'di'),
    V('dão', 'dar', 'dan'),
    V('posso', 'poder', 'puedo'),
    V('pode', 'poder', 'puede'),
    V('podemos', 'poder', 'podemos'),
    V('puder', 'poder', 'pude'),
    V('dar de comer', 'dar', 'dar de comer'),
    V('dar um jeito', 'dar', 'dar un jeito'),
    V('dar a volta', 'dar', 'dar la vuelta'),
    V('vestiu-o', 'vestir', 'lo vistió'),
    V('meteu-lhe', 'meter', 'le puso'),
    V('trouxe', 'trazer', 'trajo'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Dar} y {poder} son irregulares en todas las personas: {dou}, {dá}, {dê}, {dei}, {dão}, {posso}, {pode}, {podemos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Dar} forma una perífrasis con otro verbo y significa {hacer}: {dar de comer}, {dar um jeito}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Cuando el texto enumera acciones, {dar} se aparta ante {meteu} y {vestiu}, porque cada acción tiene su verbo.',
      ),
    },
    {
      n: '§4',
      text: T('El griego separa {δίδωμι} de {δύναμαι}; el portugués separa {dar} de {poder}.'),
    },
    {
      n: '§5',
      text: T(
        'En narrativa, el verbo {dar} solo es raro: el texto prefiere el verbo exacto de la acción.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'Las formas {dei}, {deu} y {dão} son las que aparecen a menudo en la Biblia, y las formas del subjuntivo {dê}, {dêmos} aparecen en los textos litúrgicos.',
      ),
    },
    {
      label: T('Por qué incomoda la perífrasis'),
      text: T(
        'La locución {dar} más verbo ocupa en portugués el lugar de un solo verbo griego. Al traducir, hay que decidir entre producir la locución o usar el verbo griego más próximo.',
      ),
    },
  ],
  examples: [
    { text: 'Dou a minha palavra.', gloss: T('Primera persona del presente, forma irregular.') },
    { text: 'Que o Senhor te dê paz.', gloss: T('Imperativo del verbo {dar}, tercera persona.') },
    { text: 'Não posso ir hoje.', gloss: T('{posso} es la primera persona de {poder}.') },
    { text: 'Puder vir, virei.', gloss: T('{puder} es el pretérito perfecto de {poder}.') },
    { text: 'Deu de comer aos famintos.', gloss: T('Perífrasis: {dar de} más infinitivo.') },
    { text: 'Deu um jeito na casa.', gloss: T('{dar um jeito} significa ordenar.') },
    { text: 'Meteu-lhe um anel na mão.', gloss: T('El verbo exacto, y no {deu}.') },
    { text: 'Vestiu-o com a túnica.', gloss: T('Otra acción, otro verbo.') },
  ],
  tables: [
    {
      caption: T('El verbo dar'),
      head: ['Pessoa', 'Presente', 'Pretérito'],
      rows: [
        ['eu', 'dou', 'dei'],
        ['tu', 'dás', 'deste'],
        ['ele/ela', 'dá', 'deu'],
        ['nós', 'damos', 'demos'],
        ['vós', 'dais', 'destes'],
        ['eles/elas', 'dão', 'deram'],
      ],
    },
    {
      caption: T('El verbo poder'),
      head: ['Pessoa', 'Presente', 'Subjuntivo'],
      rows: [
        ['eu', 'posso', 'possa'],
        ['tu', 'podes', 'possas'],
        ['ele/ela', 'pode', 'possa'],
        ['nós', 'podemos', 'possamos'],
        ['vós', 'podeis', 'podais'],
        ['eles/elas', 'podem', 'possam'],
      ],
    },
    {
      caption: T('Dar como perífrasis'),
      head: ['Locução', 'O que significa'],
      rows: [
        ['dar de comer', 'alimentar'],
        ['dar de beber', 'dar para beber'],
        ['dar um jeito', 'arrumar'],
        ['dar a volta', 'contornar'],
        ['dar-se bem', 'sair bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la primera persona del presente de {dar}?'),
    options: [T('dou'), T('dão'), T('dei'), T('dê')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{dar de comer} es una ______, y significa alimentar.'),
      answer: 'perífrase',
      hint: T('Aquí {dar} no entrega nada.'),
    },
    {
      kind: 'choose',
      prompt: T('En Lc 15.22, el padre pone el anillo en la mano del hijo con:'),
      options: [T('meteu-lhe'), T('deu-lhe'), T('lhe deu para'), T('entregou o anel a ele na mão')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la locución con su sentido.'),
      pairs: [
        { a: T('dar de comer'), b: T('alimentar') },
        { a: T('dar um jeito'), b: T('arrumar') },
        { a: T('dar a volta'), b: T('contornar') },
        { a: T('dar-se bem'), b: T('sair bem') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
