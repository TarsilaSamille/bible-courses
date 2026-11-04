import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('El adverbio: posición y auxiliares'),
  subtitle: T('I have always wanted it — la regla más examinada'),
  section: T('Adverbios'),
  body: C(`## Cada adverbio tiene su sitio

El adverbio de **modo** va después del verbo: {He speaks slowly}, {She sings beautifully}, {They work hard}. Cuando hay objeto, el adverbio suele quedar entre el verbo y el objeto, o después del objeto, y las dos posiciones valen: {He read the book quickly} y {He quickly read the book}.

El adverbio de **lugar** y el de **tiempo** van antes del verbo: {He lives here}, {She left yesterday}, {They arrive tomorrow}. El portugués hace lo mismo, y por eso esa parte no da trabajo.

La diferencia que separa al hablante de portugués es el adverbio de **frecuencia**: {always}, {never}, {often}, {usually}, {sometimes}, {rarely}, {seldom}. No va ni antes ni después del verbo principal: va **después del verbo auxiliar**.

## Después del auxiliar, no antes

{I have always wanted it} está bien. {I always have wanted it} suena a habla extranjera, y {I always wanted it} es otra frase, con otro sentido: en la segunda el {always} queda atado al momento de querer, y en la primera abarca el momento de querer **y el querer que sigue**.

Lo mismo vale para {never}: {He has never seen the sea} y {He never saw the sea} no son la misma frase. La primera dice que todavía no lo ha visto; la segunda dice que no lo vio en un momento del pasado, y nada impide que lo vea después.

Juan 6:35 en la KJV usa la regla con {shall}: {he that believeth on me shall never thirst}. El {never} viene después del auxiliar y antes del verbo principal, que es exactamente la posición que el hablante de portugués suele fallar.

## Cuando hay dos verbos

Cuando la cláusula tiene dos verbos coordinados, el adverbio queda entre ellos: {He quietly closed the door and left}. El adverbio describe al primer verbo, y la posición lo dice.

El caso más común de todos es la negación en medio: {I do not think so}, {I do not believe he is right}, {He did not come}. El auxiliar abre el paso a {not}, y el orden es **auxiliar, {not}, verbo principal**. Escribir {I don't think} está bien; escribir {I not think} rompe la frase.

## Foco e inversión

A veces el adverbio se coloca al principio para dar énfasis, y el verbo pasa detrás del auxiliar: {Only then did he understand}, {Never have I seen such a thing}. Es un recurso de registro, más común en la escritura formal y en la KJV que en el habla, y al aprendiz le basta con reconocerlo.`),
  vocab: [
    V('slowly', 'slowly', 'despacio'),
    V('beautifully', 'beautifully', 'bellamente'),
    V('quietly', 'quietly', 'calladamente'),
    V('lives here', 'live', 'vive aquí'),
    V('left yesterday', 'leave', 'se fue ayer'),
    V('always', 'always', 'siempre'),
    V('never', 'never', 'nunca'),
    V('often', 'often', 'a menudo'),
    V('usually', 'usually', 'normalmente'),
    V('sometimes', 'sometimes', 'a veces'),
    V('rarely', 'rarely', 'raramente'),
    V('seldom', 'seldom', 'rara vez'),
    V('have wanted', 'want', 'ha querido'),
    V('have seen', 'see', 'ha visto'),
    V('shall never thirst', 'thirst', 'nunca tendrá sed'),
    V('do not think', 'think', 'no creo'),
  ],
  rules: [
    {
      n: '1',
      text: T('El adverbio de modo va detrás del verbo; los de lugar y de tiempo, delante.'),
    },
    {
      n: '2',
      text: T('El adverbio de frecuencia va detrás del verbo auxiliar: I have always wanted it.'),
    },
    {
      n: '3',
      text: T(
        'Con dos verbos coordinados el adverbio queda entre ellos: he quietly closed the door and left.',
      ),
    },
    {
      n: '4',
      text: T('En la negación el orden es auxiliar, not, verbo principal: I do not think so.'),
    },
    {
      n: '5',
      text: T(
        'Un adverbio al principio de la frase invierte el auxiliar: Only then did he understand.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 6:35 tiene shall never thirst: el never detrás del auxiliar y delante del verbo principal. Es la posición que separa a quien entendió la regla de quien solo memorizó.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe I always have wanted it, el problema es de orden y no de tiempo verbal: entendió el presente perfecto y no entendió dónde entra el adverbio.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('habla despacio') },
    { text: '{He lives here}', gloss: T('vive aquí') },
    { text: '{I have always wanted it}', gloss: T('siempre lo he querido — posición correcta') },
    { text: '{I always wanted it}', gloss: T('siempre lo quise — solo pasado, otro sentido') },
    { text: '{He has never seen the sea}', gloss: T('nunca ha visto el mar') },
    { text: '{He never saw the sea}', gloss: T('no vio el mar aquel día') },
    {
      text: '{he that believeth on me shall never thirst}',
      gloss: T('el que cree en mí nunca tendrá sed'),
    },
    {
      text: '{He quietly closed the door and left}',
      gloss: T('cerró la puerta en silencio y salió'),
    },
    { text: '{I do not think so}', gloss: T('no creo que sí') },
    { text: '{Only then did he understand}', gloss: T('solo entonces entendió') },
  ],
  tables: [
    {
      caption: T('Posición por tipo de adverbio'),
      head: [T('Tipo'), T('Dónde entra'), T('Ejemplo')],
      rows: [
        [T('modo'), T('después del verbo'), '{He speaks slowly}'],
        [T('lugar'), T('antes del verbo'), '{He lives here}'],
        [T('tiempo'), T('antes del verbo'), '{She left yesterday}'],
        [T('frecuencia'), T('después del auxiliar'), '{I have always wanted it}'],
        [T('grado'), T('antes del adjetivo'), '{a very good book}'],
      ],
    },
    {
      caption: T('Frecuencia: el orden que pide el examen'),
      head: [T('Correcto'), T('Incorrecto'), T('Por qué')],
      rows: [
        [
          '{I have always wanted it}',
          '{I always have wanted it}',
          T('el adverbio sigue al auxiliar'),
        ],
        ['{He has never seen it}', '{He never has seen it}', T('el adverbio sigue al auxiliar')],
        ['{She has often tried}', '{She often has tried}', T('el adverbio sigue al auxiliar')],
        ['{They had already left}', '{They already had left}', T('vale para todos los auxiliares')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('I always have wanted it'),
      T('I have always wanted it'),
      T('I have wanted always it'),
      T('Always I have wanted it'),
    ],
    answer: 1,
    hint: T('El adverbio de frecuencia va después del verbo auxiliar.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Colócalo en su sitio: 'He has ___ seen the sea.'"),
      answer: 'never',
    },
    { kind: 'fill', prompt: T("Negación: 'I ___ think so.'"), answer: 'do not' },
    {
      kind: 'match',
      prompt: T('Relaciona el tipo de adverbio con su posición.'),
      pairs: [
        { a: T('modo'), b: T('después del verbo') },
        { a: T('lugar'), b: T('antes del verbo') },
        { a: T('frecuencia'), b: T('después del auxiliar') },
        { a: T('grado'), b: T('antes del adjetivo') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué frase está el adverbio en posición de foco?'),
      options: [
        T('He quietly closed the door and left'),
        T('Only then did he understand'),
        T('She left yesterday'),
        T('He speaks slowly'),
      ],
      answer: 1,
    },
  ],
};
