import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verbo'),
  title: T('El verbo y la terminación que ya es el pronombre'),
  subtitle: T(
    'El verbo coreano flexiona por estilo y por persona, nunca por género, y lleva pegada la información que en português vendría en un pronombre aparte',
  ),
  body: C(`## La terminación es el pronombre

El verbo coreano flexiona por **estilo**, hablado o escrito, y por **persona**. Nunca flexiona por género: el género del sujeto no llega al verbo, y el plural tampoco, porque un sujeto en plural recibe la marca en el sustantivo y no en el verbo. Y el verbo es **aglutinante**, que es el detalle que más importa: lleva pegada la información que en portugués vendría en un pronombre separado. El pronombre puede desaparecer porque la terminación ya está en el verbo, y ahora la terminación se puede ver funcionando.

Toma el verbo ir. Hablado y plano, "yo voy", "tú vas" y "él va" son la misma forma: {ga}. La terminación -a es el "yo", pero hace el mismo trabajo para "tú" y para "él", y lo que los distingue es el contexto. Hablado y educado, los tres se vuelven {gayo}, con la terminación -yo; escrito y educado, los tres se vuelven {gamnida}, con -bnida. Fíjate en lo que hizo la cortesía: sumó **registro**, no persona. El coreano marca el tono en la terminación y deja la persona al contexto; cuando la persona hay que decirla de verdad, el pronombre aparece, y es por **contraste**, en "yo voy, tú no", nunca por regla.

Por eso la frase más corta de la lengua es "voy", dos sílabas y nada más: {ga} es al mismo tiempo el verbo y el pronombre. Quien traduce palabra por palabra del portugués escribe "yo voy"; el coreano escribe "voy". En el camino no se perdió nada, porque la terminación hacía el trabajo de los dos.

## Conjugar o no conjugar: la lista corta y la lista larga

En coreano hay dos especies de verbo, y la diferencia no es de estilo ni de sentido: es de flexión. Los verbos cuya **raíz termina en vocal o en -l** conjucan, es decir, cambian de forma según la persona y el registro: es el caso de ita (ir), hada (hacer), oda (venir), boda (ver), sseuda (escribir). Los verbos cuya raíz termina en **otra consonante** nunca cambian: meokda (comer), deolda (oír), geolda (andar), gonhada (terminar), chada (sentarse) son exactamente la misma palabra en cualquier frase.

La lista corta es corta de verdad: hay pocos verbos, y media docena responde por casi todo lo que se habla en coreano. Todo el resto del idioma es lista larga. Y aquí es donde se atasca el principiante, porque un verbo de la lista larga parece estar mal dentro de una frase: nunca cambia, y el alumno espera que cambie.

Combínalo con la partícula de tema y la frase cierra. {neun} con {meokneumnida} es "yo como", en la forma escrita y educada: {neun} dice de quién es la frase, {meokneumnida} dice qué hace la frase. El mismo {neun} con un verbo de la lista larga da una entrada de diccionario, no una frase. Lo que está en curso, el estado y no el acto, se hace con el mismo {ida}: meokgo itda, "estoy comiendo".

## Negar: dos posiciones, y por qué importa

En coreano la negación pertenece al **verbo** y nunca al sustantivo: no existe un "no" pegado al sujeto. Dos posiciones resuelven casi todo. La corta es {an}, siempre **antes** del verbo: an {gayo}, "yo no voy"; an meokseumnida, "yo no como". Es la más usada al hablar y la que el oído espera. La larga es la terminación -ji anida, que viene pegada al final del verbo, gaji anida, "no voy", y es la forma de la escritura formal, donde {an} ya no aparece. Y hay una tercera, que no es negación sino imposibilidad: {mot} después del verbo, mot gala, "no puedo ir".

La elección es de registro: {an} al hablar y con tono plano, porque suena corto; la forma larga en texto escrito, con tono educado y cuando la frase es demasiado larga para una sola partícula. Cuidado con una asimetría que pilla al principiante: {eopda}, la negación de {ida}, viene **después** de lo que niega, y es el verbo más frecuente de la lengua escrita. Quien aplica {an} al verbo del ser construye una frase que el oyente entiende de otra manera.

## El registro decide, y el verbo que viene después del tema

Tres verbos que en portugués se confunden en un solo "hablar": {malhada} es el neutro, el que sirve para todo; {iyagihada} es el de la conversación, contar, tratar de algo; {hwahada} es el formal, el que aparece en el discurso y en la oración. Tres matices que el portugués resuelve con preposición y el coreano resuelve con verbo.

El registro, sin embargo, es la decisión que le importa al traductor. El padrão del coreano es el **plano**; la cortesía es **opcional** en el texto, y va marcada en la terminación, no en el léxico. Por eso un traductor coreano no "adorna" la frase: elige una terminación, y esa elección ya le dice al lector cuánto respeto merece el texto. La traducción bíblica coreana tiene un registro propio y reconocible, y es en él que el verbo {ida} entra siempre **después** de la partícula de tema, el mismo lugar que ocupan el {aru} del japonés y el {zai} del mandarín en sus frases. Los tres idiomas de este proyecto se apoyan en un verbo de existir o exhibir para decir que algo está ahí.

Y es ahí donde el texto bíblico dice algo. En Juan 1:1, "era el Verbo", el sustantivo recibe la partícula de sujeto y el verbo viene en la forma educada: {ireot}, el pasado de {ida}. En Juan 3:30, "él debe crecer, pero yo debo menguar", los dos verbos aparecen en la misma forma, la más directa, y la obligación es la misma pieza pegada a los dos. Compara las dos frases y el registro se vuelve visible: un texto que abre el Evangelio habla en registro alto, y un texto de exigencia del mismo mundo habla en registro directo. El mismo traductor, la misma lengua, dos decisiones distintas, y la terminación del verbo es donde aparecen.
`),
  vocab: [
    V('ita', '가다', 'ir: verbo conjugado, el modelo de esta lección'),
    V('ga', '가', 'yo voy: forma plana hablada, la terminación -a es el pronombre yo'),
    V('gayo', '가요', 'voy, vas: forma hablada educada, terminación -yo'),
    V('gamnida', '갑니다', 'voy, vas: forma escrita educada, terminación -bnida'),
    V(
      'ida',
      '이다',
      'ser, estar: el verbo que viene siempre justo después de la partícula de tema',
    ),
    V('ireot', '이렀다', 'era: el pasado de {ida} en la forma educada'),
    V('meokda', '먹다', 'comer: verbo de la lista larga, nunca cambia de forma'),
    V('meokneumnida', '먹습니다', 'como: comer en la forma escrita educada'),
    V('hada', '하다', 'hacer: verbo conjugado de la lista corta'),
    V('an', '안', 'no: negador corto, siempre antes del verbo'),
    V('anida', '않다', 'no hacer: la terminación -ji anida, que niega después del verbo'),
    V('eopda', '없다', 'no haber, no estar: la negación de {ida}'),
    V('mot', '못하다', 'no poder: también después del verbo'),
    V('malhada', '말하다', 'decir: el verbo neutro de hablar'),
    V('iyagihada', '이야기하다', 'hablar, contar, tratar de: el de la conversación'),
    V('hwahada', '화하다', 'hablar: el formal, el del discurso y de la oración'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo flexiona por estilo y por persona, nunca por género, y es aglutinante: la terminación lleva lo que en portugués vendría en un pronombre separado.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pronombre solo aparece por contraste. Hablado y plano, "yo voy" es una sola palabra, y es verbo y pronombre a la vez.',
      ),
    },
    {
      n: '3',
      text: T(
        'Conjugan los verbos de raíz en vocal o en -l, como {ita} y {hada}; los de raíz en otra consonante, como {meokda}, nunca cambian de forma.',
      ),
    },
    {
      n: '4',
      text: T(
        'La negación es del verbo y no del sustantivo: {an} antes, la terminación -ji anida después, y {mot} para lo que no se puede hacer.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ida} viene siempre después de la partícula de tema, y la elección entre plano, hablado educado y escrito educado es una decisión de registro y no de léxico.',
      ),
    },
  ],
  notes: [
    {
      label: T('La cortesía cambia de eje'),
      text: T(
        'En las formas educadas las tres personas del verbo ir se funden en una: {gayo} y {gamnida} dicen "yo", "tú" y "él" al mismo tiempo. No es pérdida de información, es cambio de eje: el coreano marca el tono y deja la persona al contexto.',
      ),
    },
    {
      label: T('El verbo de existir es el mismo en las tres lenguas'),
      text: T(
        '{ida} ocupa, justo después de la partícula de tema, la misma función que el {aru} del japonés y el {zai} del mandarín: los tres idiomas de este proyecto se apoyan en un verbo de existir o exhibir para decir que algo está ahí.',
      ),
    },
  ],
  examples: [
    {
      text: '제가 가요',
      gloss: T(
        'je-ga ga-yo — yo voy: el "yo" vive en la terminación, y el pronombre solo sale por contexto',
      ),
    },
    { text: '갑니다', gloss: T('gam-ni-da — yo voy: la misma información en forma escrita') },
    {
      text: '먹습니다',
      gloss: T(
        'meok-seum-ni-da — yo como: verbo de la lista larga con la terminación escrita y educada',
      ),
    },
    { text: '안 가요', gloss: T('an ga-yo — yo no voy: negación corta, antes del verbo') },
    {
      text: '말씀이 계시니라',
      gloss: T(
        'mal-sseu-mi gye-si-ni-ra — "era el Verbo": sustantivo con partícula y verbo en la forma educada',
      ),
    },
  ],
  tables: [
    {
      caption: T('La terminación hace el trabajo del pronombre'),
      head: [
        T('Persona'),
        T('Lo que escribe el portugués'),
        T('Hablado, plano'),
        T('Hablado, educado'),
        T('Escrito, educado'),
      ],
      rows: [
        [T('yo'), T('yo voy'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('tú'), T('tú vas'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('él, ella'), T('él va'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('tú, con respeto'), T('usted va'), T('gasini'), T('gasini'), T('gasipnida')],
        [
          T('tú y él, en plural'),
          T('ustedes van'),
          T('gayo-deul'),
          T('gayo-deul'),
          T('gam-ni-da-deul'),
        ],
      ],
    },
    {
      caption: T('Conjugar o no conjugar: la lista corta es corta de verdad'),
      head: [T('Verbo (romanización)'), T('Glosa'), T('Termina en'), T('Conjuga?')],
      rows: [
        [T('ita'), T('ir'), T('vocal (a)'), T('sí, cambia de forma')],
        [T('hada'), T('hacer'), T('vocal (a)'), T('sí, cambia de forma')],
        [T('oda'), T('venir'), T('vocal (a)'), T('sí, cambia de forma')],
        [T('boda'), T('ver'), T('vocal (o)'), T('sí, cambia de forma')],
        [T('meokda'), T('comer'), T('consonante final (da)'), T('no, es siempre igual')],
        [T('deolda'), T('oír'), T('consonante final (da)'), T('no, es siempre igual')],
        [T('gonhada'), T('terminar'), T('consonante final (da)'), T('no, es siempre igual')],
      ],
    },
    {
      caption: T('El mismo verbo en tres registros'),
      head: [
        T('Dónde aparece'),
        T('Forma (romanización)'),
        T('Terminación'),
        T('Lo que le dice al lector'),
      ],
      rows: [
        [
          T('conversación entre amigos'),
          T('{ga}'),
          T('-a'),
          T('tono plano, y la persona al contexto'),
        ],
        [T('habla educada'), T('{gayo}'), T('-yo'), T('tono educado, y la persona al contexto')],
        [
          T('escrito, carta, reunión'),
          T('{gamnida}'),
          T('-bnida'),
          T('tono educado en forma escrita'),
        ],
        [
          T('discurso u oración'),
          T('mal-sseum-han-dan-mal'),
          T('-da'),
          T('texto solemne, un registro más alto'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En coreano hablado y plano, "yo voy" es una sola palabra. ¿Dónde está el pronombre yo?',
    ),
    options: [
      T('en la terminación del verbo'),
      T('en una partícula aparte, antes del verbo'),
      T('en la partícula de tema'),
      T('al final de la frase, después del verbo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la forma hablada y educada de "yo voy": ____ 가요'),
      answer: '가',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con su función'),
      pairs: [
        { a: T('{ita}'), b: T('verbo que conjuga') },
        { a: T('{meokda}'), b: T('verbo que nunca cambia de forma') },
        { a: T('{an}'), b: T('negación corta, antes del verbo') },
        { a: T('{eopda}'), b: T('la negación de {ida}, después del verbo') },
        { a: T('{ida}'), b: T('ser, estar: siempre después de la partícula de tema') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'En Juan 1:1 el verbo "era" aparece en la forma educada. ¿Qué está diciendo esa elección?',
      ),
      options: [
        T('que el traductor eligió un registro elevado para el texto'),
        T('que el verbo cambia según el sustantivo que lo precede'),
        T('que el texto de origen estaba escrito en coreano'),
        T('que "era" es un verbo conjugado y los otros no lo son'),
      ],
      answer: 0,
    },
  ],
};
