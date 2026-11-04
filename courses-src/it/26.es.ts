import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Las conjunciones'),
  subtitle: T('ma, perché, benché, nonostante, così…che'),
  section: T('Numerales, conjunciones y el gerundio'),
  body: C(`## Coordinación: {e}, {ma}, {eppure}

Las coordinadas juntan dos oraciones del mismo peso y no cambian el modo del verbo. {E} suma: «sono {andato} a Roma {e} ho visto {Marco}». {Ma}, {però} y {eppure} oponen: «sono andato a Roma, ma non ho visto Marco»; {però} es la versión hablada de {ma}, y {eppure} es {ma} con un hilo de sorpresa. {Ossia} sustituye por una explicación: «{Marco}, ossia {il} mio {fratello}». Y {né…né} excluye: «{né} questo {né} quello».

El verbo se queda en indicativo en todas ellas. Escribir «sono andato, ma non abbia visto» falla dos veces.

## Causa, finalidad y consecuencia

Causa y finalidad usan la **misma palabra** en italiano: **{perché}**. Lo que las separa es el modo del verbo. Con indicativo, {perché} es causa: «non uscì, {perché} pioveva». Con subjuntivo, es finalidad: «esci presto, {perché} non ti bagni». Causa tiene además {poiché}, {dato che}, {siccome}, {giacché}; finalidad tiene además {affinché}.

La consecuencia es simétrica y no admite atajo: necesita los dos lados. **{così}… {che}**, **{tanto}… {che}**, **{così tanto}… {che}**: «{così} forte {che} {non} si muove», «{tanto} amò {che} {diede} la {vita}». Un solo lado no es consecuencia: es una frase sin subordinada.

## Concesión y condición, y {nonostante} vuelto sustantivo

La concesión admite tres construcciones y una de ellas es lo contrario del portugués. **{Biché}** y **{sebbene}** piden el verbo en subjuntivo y van **después** de lo que limitan: «{benché} {piova}, {usciamo}», «{sebbene} {fosse} {tardi}, {venne}». **{Nonostante}**, en cambio, precede al **sustantivo**, con artículo: «**nonostante la pioggia**», «**nonostante il pericolo**». Donde el portugués dice «a pesar de la lluvia», el italiano dice literalmente «no-obstante la lluvia». Escribir «nonostante piove» está mal: {nonostante} nunca rige un verbo.

La condición sigue al portugués: **{se}**, **{qualora}**, **{purché}**, **{se anche}**, **{qualora se}**, **{nel caso in cui}** — todos con el verbo en subjuntivo, salvo cuando la condición es real, donde el italiano también acepta el indicativo.

## En la Biblia

Jn 3:16 contiene cuatro relaciones en una frase: «Dio ha {tanto} amato il mondo {che} ha dato il suo Figlio unigenito, {perché} chiunque crede in lui non perisca, {ma} abbia la vita eterna». {Tanto…che} es la consecuencia; {perché} con {abbia} en subjuntivo es la finalidad; {ma} coordena; y {chiunque} es el indefinido que hace de sujeto.

Fíjate en lo que suele hacer la traducción al português: {ma} se vuelve «pero», y la frase sigue con una exigencia. En italiano la fuerza es la misma, y {ma abbia} es una subordinada en subjuntivo.

## Lo que viene después

Clasifica cada palabra por lo que viene detrás: si viene un sustantivo, es {nonostante}; si viene un verbo en subjuntivo, es subordinación; si viene un verbo en indicativo y el sentido es suma u oposición, es coordinación. Lo que viene detrás es lo que dice lo que la palabra es.`),
  vocab: [
    V('e', 'e', 'y'),
    V('ma', 'ma', 'pero'),
    V('però', 'però', 'sin embargo'),
    V('eppure', 'eppure', 'y aun así'),
    V('ossia', 'ossia', 'es decir'),
    V('perché', 'perché', 'porque / para que'),
    V('poiché', 'poiché', 'pues'),
    V('affinché', 'affinché', 'para que'),
    V('così', 'così', 'tan'),
    V('tanto', 'tanto', 'tanto'),
    V('benché', 'benché', 'aunque'),
    V('sebbene', 'sebbene', 'aun cuando'),
    V('nonostante', 'nonostante', 'a pesar de'),
    V('se', 'se', 'si'),
    V('qualora', 'qualora', 'si acaso'),
    V('purché', 'purché', 'con tal que'),
    V('pioggia', 'pioggia', 'lluvia'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué construcción es correcta?'),
    options: [
      T('Nonostante piove, usciamo.'),
      T('Nonostante la pioggia, usciamo.'),
      T('Nonostante dalla pioggia, usciamo.'),
      T('Nonostante che piove, usciamo.'),
    ],
    answer: 1,
    hint: T('Nonostante precede al sustantivo con artículo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa perché como finalidad?'),
      options: [
        T('Non uscì perché pioveva.'),
        T('Esci perché non ti bagni.'),
        T('Poiché pioveva, restammo.'),
        T('È tardi, quindi partiamo.'),
      ],
      answer: 1,
      hint: T('En subjuntivo, perché es finalidad.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la consecuencia: così forte ___ non si muove (que)'),
      answer: 'che',
      hint: T('La consecuencia necesita los dos lados.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa benché correctamente?'),
      options: [
        T('Benché la pioggia, usciamo.'),
        T('Benché piova, usciamo.'),
        T('Benché piove, usciamo.'),
        T('Benché di pioggia, usciamo.'),
      ],
      answer: 1,
      hint: T('Biché va con verbo en subjuntivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('E coordina y el verbo se queda en indicativo: sono andato a Roma e ho visto Marco.'),
    },
    {
      n: '2',
      text: T(
        'Perché es causa en indicativo y finalidad en subjuntivo: perché pioveva / perché non ti bagni.',
      ),
    },
    {
      n: '3',
      text: T(
        'Nonostante precede al sustantivo con artículo y nunca al verbo: nonostante la pioggia.',
      ),
    },
    {
      n: '4',
      text: T('La consecuencia necesita los dos lados: così…che, tanto…che, così tanto…che.'),
    },
    { n: '5', text: T('Condición y finalidad con verbo propio exigen el subjuntivo en italiano.') },
  ],
  notes: [
    {
      label: T('Una palabra, dos sentidos'),
      text: T(
        '{Perché} es causa y finalidad al mismo tiempo, y lo que las separa es el modo del verbo. El português resuelve el problema con palabras distintas ({porque}, {para que}); el italiano lo resolvió con el subjuntivo, que un lector de portugués solo activa cuando la oración es negativa o dubitativa.',
      ),
    },
    {
      label: T('Cuando la subordinada va primero'),
      text: T(
        'En «{benché piovesse}, {andammo}», la subordinada ocupa el lugar del sujeto y el verbo principal va en plural, concordando con el sujeto que viene después. Quien escribe «benché piovesse}, {andò}» ha traducido del português palabra por palabra y ha producido una frase que el italiano no tiene.',
      ),
    },
  ],
  examples: [
    { text: 'Sono andato a Roma e ho visto Marco.', gloss: T('Fui a Roma y vi a Marcos.') },
    {
      text: 'Sono andato a Roma, ma non ho visto Marco.',
      gloss: T('Fui a Roma, pero no vi a Marcos.'),
    },
    { text: 'Non uscì, perché pioveva.', gloss: T('No salió, porque llovía.') },
    { text: 'Esci presto, perché non ti bagni.', gloss: T('Sal pronto, para no mojarte.') },
    { text: 'Così forte che non si muove.', gloss: T('Tan fuerte que no se mueve.') },
    { text: 'Benché piova, usciamo.', gloss: T('Aunque llueva, salimos.') },
    { text: 'Nonostante la pioggia, usciamo.', gloss: T('A pesar de la lluvia, salimos.') },
    { text: 'Se vieni, avvisami.', gloss: T('Si vienes, avísame.') },
    {
      text: 'Dio ha tanto amato il mondo che ha dato il suo Figlio.',
      gloss: T('Dios amó tanto al mundo que dio a su Hijo.'),
    },
  ],
  tables: [
    {
      caption: T('Coordinazione'),
      head: ['Congiunzione', 'Glossa', 'Esempio'],
      rows: [
        ['e', 'e', 'uno e uno'],
        ['ma', 'ma', 'ma non'],
        ['però', 'però', 'però non'],
        ['eppure', 'eppure', 'eppure non'],
        ['ossia', 'ossia', 'Marco, ossia mio fratello'],
        ['né…né', 'né…né', 'né questo né quello'],
      ],
    },
    {
      caption: T('Subordinazione'),
      head: ['Relazione', 'Congiunzioni', 'Modo del verbo'],
      rows: [
        ['causa', 'perché, poiché, dato che, siccome', 'indicativo'],
        ['finalità', 'affinché, perché', 'congiuntivo'],
        ['conseguenza', 'così…che, tanto…che', 'indicativo'],
        ['concessione', 'benché, sebbene, anche se', 'congiuntivo'],
        ['condizione', 'se, qualora, purché, se anche', 'congiuntivo'],
      ],
    },
    {
      caption: T('Lo que viene dopo la conjunción'),
      head: ['Parola', 'Cosa viene dopo', 'Esempio'],
      rows: [
        ['nonostante', 'sostantivo con articolo', 'nonostante la pioggia'],
        ['benché', 'verbo al congiuntivo', 'benché piova'],
        ['sebbene', 'verbo al congiuntivo', 'sebbene fosse tardi'],
        ['se', 'verbo al congiuntivo', 'se vieni'],
        ['affinché', 'verbo al congiuntivo', 'affinché sappia'],
      ],
    },
  ],
};
