import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verbo'),
  title: T(
    'Tiempo y aspecto: cómo dice el coreano "ayer" y "va a hacer" con partículas después del verbo',
  ),
  subtitle: T(
    'El verbo no se flexiona por tiempo; una partícula después de la forma verbal dice si el acto es ahora, fue o va a ocurrir',
  ),
  body: C(`## El tiempo vive después del verbo

El verbo coreano se flexiona por persona y por estilo, y el tiempo es otra cuenta. En coreano el verbo no se flexiona por tiempo: la forma verbal queda exactamente igual, y lo que dice si el acto es ahora, ya ocurrió o va a ocurrir es una partícula, o un adverbio, pegada después. Eso también es cierto en mandarín y en japonés, pero en coreano se ve de otra manera: la partícula temporal es una pieza suelta, escrita como un cuadrado propio, y no una terminación pegada al verbo. Se puede contar.

El ejemplo más corto muestra la consecuencia. La misma forma ga, "ir", sirve para el presente y para el futuro sin que nada cambie dentro de ella. En "yo voy ahora" el verbo va desnudo y el contexto dice que es ahora. En "yo voy a ir" el verbo recibe la partícula {geul}, el mismo -l que hace el "va a hacer": el "ir" que era verbo se vuelve sustantivo de futuro, y el "ir" que queda al lado es el infinitivo español. Y para el "voy, pero voy" está {jiman}. Todas esas piezas viven a la derecha del verbo, y el orden es verbo, partícula, verbo, lo contrario del "ir" que abre la frase en español.

Una excepción que hay que saber de entrada: el adverbio de tiempo marcado va antes. Así dice el coreano "ayer": {eoje}, un adverbio, delante del verbo. Las partículas temporales que dicen "después", "antes", "hasta" y "desde" son piezas pegadas al verbo, y van después de él. Son dos lugares distintos, y no es lo mismo.

## El pasado: dos series y un registro

El pasado coreano se moldea en {asseoss} o {eoseoss}, dos bloques, no uno. La elección entre ellos es mecánica y no admite gusto: después de la vocal a u o entra {asseoss}; después de las demás vocales entra {eoseoss}. El verbo "ir" da gas-seos-seo y el verbo "comer" da meok-eo-seos-seo. Las dos series son el mismo tiempo con el otro par de vocales, y quien elija mal le entrega al oyente un verbo que no conoce.

El registro funciona exactamente como en la lección anterior. El mismo molde lleva un final de registro: {asseoss} más el final plano es la forma desnuda, {asseoss} más el final polido la forma polida. Aquí no hay nada nuevo: es la misma diferencia de estilo que el verbo ya tenía, aplicada a un molde nuevo. Pasado y polido, pasado y plano: el pasado coreano tiene dos series de vocales y dos registros, y nada más.

## El futuro y el "va a hacer"

El "va a hacer" del español pasa a ser partícula más verbo en coreano: {geul} y {eul}, un único -l, con la forma dura después de palabra terminada en consonante y la blanda después de palabra terminada en vocal, exactamente como en los pares de partículas. El verbo "ir" da gal geo-ye-yo y el verbo "comer" da meogeul geo-ye-yo. Quien viene del español reconoce toda la construcción, porque "ir" más infinitivo es partícula más verbo: la misma pila, con el mismo verbo en los dos lados. Quien viene del japonés ve lo contrario, porque en japonés el tiempo vive en la terminación del verbo y no en una pieza suelta.

El futuro probable es la misma pieza con {jogeum}: -l jeok. No es "va a hacer", es "va a haber hecho", "pasa seguro". Y la misma partícula {jogeum} con {itda} dice "ya haber hecho", la experiencia: "yo ya he estado, yo ya he probado". Con la experiencia el tiempo queda resuelto: el pasado perfecto y el pasado continuo, que el español distingue y el coreano casi no distingue, quedan expulsados del verbo y solo se guarda lo que el oyente necesita.

## Partículas de tiempo, progresivo y condicional

El progresivo es la construcción más visible del capítulo: verbo, {go}, {itda}. "Estoy haciendo" es literalmente "hacer y estar". El verbo viene desnudo, {go} liga y {itda} trae el "estar". Y hay un segundo modo, la forma corta {go} en cadena, que el lector de Juan encuentra en secuencia: "oyó y dijo" puede convertirse en dos {go}. Junto a ellas hay una construcción con jikjeon que significa "estar a punto de hacer", con el verbo más la nominalización en -gi: "a punto de decir".

El condicional tampoco es flexión. {myeon} después del verbo dice "si", y el resultado viene en la secuencia: verbo más {myeon}, verbo más resultado. Para el tono hipotético, "si fuera", la forma es {neunmyeon}, que junta la partícula de tema al propio verbo. Y para el "si... entonces... pero" están las dos: {myeon} en la primera proposición, {jiman} en la segunda. Fíjate en el camino de las tres piezas: la condicional después del primer verbo, la adversativa después del segundo. Nada de eso entra dentro de la forma verbal.

El gancho bíblico está en Juan 19:30, "está consumado". La frase coreana es da i-ru-eos-da, y vale la pena desmontarla. El primer elemento es el adverbio, "todo, por entero". El segundo es el verbo, "realizar, cumplir". Y el tiempo está al final, en un molde {asseoss} seguido del final plano: la forma plana, la del propio verbo. Nada de eso es flexión; es partícula y es registro. La traducción coreana de 1961 añade en ese punto la exclamativa, y el tono ritual de la liturgia aparece precisamente porque la elección de registro no es decorativa: la forma polida suena como el rito del sacrificio, la plana como la narrativa.
`),
  vocab: [
    V('eoje', '어제', 'ayer (adverbio de tiempo, antes del verbo)'),
    V('geul', 'ㄹ', 'va a; tiempo futuro (tras palabra terminada en vocal)'),
    V('eul', '을', 'va a; tiempo futuro (tras palabra con consonante final)'),
    V('asseoss', '았', 'pasado: serie de la vocal a u o (plana y polida)'),
    V('eoseoss', '었', 'pasado: serie de las demás vocales (plana y polida)'),
    V('go', '고', 'y; y entonces (con {itda}: estar haciendo)'),
    V('itda', '있다', 'estar; quedarse; existir'),
    V('jogeum', '적', 'probablemente va a; con {itda}: ya haber hecho'),
    V('jiman', '지만', 'pero; sin embargo'),
    V('myeon', '면', 'si; en caso de que'),
    V('neunmyeon', '는면', 'si fuera; en caso de que'),
    V('hu', '후', 'después de'),
    V('jeon', '전', 'antes de'),
    V('kkaji', '까지', 'hasta'),
    V('buteo', '부터', 'desde; a partir de'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El tiempo no flexiona el verbo: la forma verbal queda igual y el tiempo es una partícula después de ella. La partícula es una pieza que se cuenta, no una terminación.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pasado tiene dos series, {asseoss} después de la vocal a u o y {eoseoss} después de las demás vocales. Son el mismo tiempo con el otro par de vocales.',
      ),
    },
    {
      n: '3',
      text: T(
        'El registro sigue funcionando como en la lección anterior: el mismo molde lleva el final plano o el polido. El pasado no añade ningún registro nuevo.',
      ),
    },
    {
      n: '4',
      text: T(
        'El futuro es -l, con {geul} tras vocal y {eul} tras consonante; el probable es -l {jogeum}. El "ir" más infinitivo del español es partícula más verbo, lo contrario del japonés.',
      ),
    },
    {
      n: '5',
      text: T(
        'Las partículas de "después", "antes", "hasta" y "desde", y el condicional {myeon} y {jiman}, vienen todas después del verbo. Un adverbio marcado, como {eoje}, viene antes: son dos lugares.',
      ),
    },
  ],
  notes: [
    {
      label: T('El pasado continuo y el perfecto salen de escena'),
      text: T(
        'El coreano casi no distingue el pasado continuo del pasado perfecto: en los dos casos la forma es el pasado más la partícula, y el contexto desambigua. Lo que sí guarda es la experiencia, con {jogeum} más {itda}: "ya haber hecho". Traducir desde el español obliga a decidir a mano lo que el original distinguía.',
      ),
    },
    {
      label: T('Juan 19:30 y la elección de registro'),
      text: T(
        'En "está consumado" el tiempo está en un molde de pasado seguido del final plano. La traducción de 1961 usa ahí la exclamativa, y el tono litúrgico viene de la elección de registro, no del léxico: la forma polida suena como el rito del sacrificio y la plana como la narrativa.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 갔어요',
      gloss: T('eoje gas-seos-seo-yo — ayer fui (adverbio antes, pasado polido después)'),
    },
    { text: '갈 거예요', gloss: T('gal geo-ye-yo — yo voy a ir ("voy a" más infinitivo)') },
    {
      text: '밥을 먹고 있어요',
      gloss: T('ba-beul meok-go is-seo-yo — estoy comiendo (verbo, go, itda)'),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — si llueve, yo no voy') },
    {
      text: '다 이루었다',
      gloss: T('da i-ru-eos-da — está consumado (adverbio, verbo, molde de pasado, final plano)'),
    },
  ],
  tables: [
    {
      caption: T('Dónde vive cada tiempo: nada de esto flexiona el verbo'),
      head: [T('Momento'), T('Lo que se dice'), T('Dónde queda'), T('Ejemplo de estructura')],
      rows: [
        [T('presente'), T('el verbo desnudo, sin partícula'), T('—'), T('ga-yo')],
        [T('pasado'), T('{asseoss} o {eoseoss}'), T('después del verbo'), T('gas-seos-seo-yo')],
        [T('futuro'), T('{geul} o {eul}'), T('después del verbo'), T('gal geo-ye-yo')],
        [
          T('futuro probable'),
          T('{jogeum} con {geul} o {eul}'),
          T('después del verbo'),
          T('gal jeok'),
        ],
        [T('progresivo'), T('{go} más {itda}'), T('después del verbo'), T('meok-go is-seo-yo')],
        [T('condicional'), T('{myeon}, o {neunmyeon}'), T('después del verbo'), T('o-myeon')],
        [T('adversativa'), T('{jiman}'), T('después del verbo'), T('ga-ji-man')],
        [
          T('experiencia'),
          T('{jogeum} más {itda}'),
          T('después del verbo'),
          T('gan jeok-i is-seo-yo'),
        ],
      ],
    },
    {
      caption: T('Las dos series del pasado, elegidas por la vocal del verbo'),
      head: [T('Vocal anterior'), T('Molde'), T('Registro plano'), T('Registro polido')],
      rows: [
        [T('a, o'), T('{asseoss}'), T('gass-da'), T('gas-seos-seo-yo')],
        [T('las demás vocales'), T('{eoseoss}'), T('meogeos-da'), T('meok-eo-seos-seo-yo')],
      ],
    },
    {
      caption: T('Las partículas de tiempo: todas después del verbo'),
      head: [T('Partícula'), T('Glosa'), T('Se liga a'), T('Lo que dice')],
      rows: [
        [T('{hu}'), T('después'), T('{asseoss} o {eoseoss}'), T('después de haber hecho')],
        [T('{jeon}'), T('antes'), T('la nominalización en -gi'), T('antes de hacer')],
        [T('{kkaji}'), T('hasta'), T('cualquier tiempo'), T('hasta cierto punto')],
        [T('{buteo}'), T('desde'), T('cualquier tiempo'), T('desde cierto punto')],
        [T('{myeon}'), T('si'), T('la forma del verbo'), T('en caso de que')],
        [T('{neunmyeon}'), T('si fuera'), T('la forma del verbo'), T('con hipótesis')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "ayer fui", ¿dónde está la información de tiempo?'),
    options: [
      T('en una partícula después de la forma verbal'),
      T('en una terminación del verbo'),
      T('en la vocal del último bloque'),
      T('en la partícula de sujeto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el pasado polido de "ir", tras la vocal a: 갔____'),
      answer: '어요',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la partícula con su función'),
      pairs: [
        { a: T('{asseoss}'), b: T('pasado, serie de la vocal a u o') },
        { a: T('{geul}'), b: T('va a, tras palabra terminada en vocal') },
        { a: T('{go}'), b: T('y, y entonces; con {itda}, estar haciendo') },
        { a: T('{jiman}'), b: T('pero, sin embargo') },
        { a: T('{kkaji}'), b: T('hasta cierto punto') },
        { a: T('{buteo}'), b: T('desde cierto punto') },
      ],
      answer: [0, 1, 2, 3, 4, 5],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál construcción es "estar haciendo" en coreano?'),
      options: [
        T('verbo, {go} y {itda}'),
        T('verbo, {geul} y {jogeum}'),
        T('{myeon} y verbo'),
        T('verbo, {asseoss} y {itda}'),
      ],
      answer: 0,
    },
  ],
};
