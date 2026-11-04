import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verbo'),
  title: T('Negación: {an}, {mot} y {ji an-da} — tres negativas que no son sinónimos'),
  subtitle: T(
    'El portugués tiene un "no" para todo; el coreano tiene tres, y elegir el equivocado cambia lo que la frase afirma',
  ),
  body: C(`## Tres negativas, y el portugués tiene una sola

El portugués resuelve la negación con una palabra y deja que el contexto decida qué sentido quisiste decir. "No comí", "no puedo comer", "no es así": tres frases distintas, el mismo "no" en las tres, y nada en el texto que diga cuál escribiste. El coreano no funciona así. Tiene tres negadores, y ninguno sustituye a otro: {an} niega el hecho, {mot} niega la capacidad, {ji an-da} niega la validez de lo que se afirma. La elección entre ellos es semántica, no de estilo. Elegir el equivocado no produce una frase extraña; produce otra afirmación, y en un texto bíblico eso es otra teología.

- **{an}** niega la acción. {sarang-i an meokneunda}, "la persona no come". Es la negación simple, la más común, y la única de las tres que no dice nada sobre el motivo.
- **{mot}** niega la capacidad. {sarang-i mot meokneunda}, "la persona no puede comer". No es "no quiero" ni "no voy": es "no puedo". Y el coreano no dice por qué, porque el motivo puede ser el cuerpo, el dinero, la circunstancia o la voluntad, y {mot} es lo mismo en los cuatro casos.
- **{ji an-da}** niega el hecho. {geuneun jeokda jeokji an-da}, "eso no es así". Es la más cuidada y la más difícil, porque no niega la acción: rechaza el contenido de lo que se dijo.

El mismo verbo con las tres muestra por qué la elección importa teológicamente. En "no creo", el portugués deja abierto si no creo, si no puedo creer o si no es para creer. El coreano obliga a decidir: {naneun an mitneunda} es "no creo"; {naneun mot mitneunda} es "no puedo creer"; {naneun mitji an-da} es "no es que yo crea". Son tres afirmaciones distintas escritas con un mismo "no" en portugués.

## La posición: antes en la forma plana, dentro en la educada

El coreano niega **antes** del verbo, como el mandarín. En la forma plana es una palabra pegada al principio del verbo: {sarang-i an meokda}, {naneun mot mitda}. En la forma educada la negación entra dentro del verbo, pegada a la raíz y antes de las terminaciones: {sarang-i meokneunda}, {naneun motneunda}. Es el mismo mecanismo de las partículas: la forma cambia con la cortesía. Quien traduce literalmente del portugués acaba pegando {an} al verbo en la frase educada y escribe una forma que nadie usa.

{mot} hace exactamente lo mismo que {an}, posición por posición. Y {ji an-da} es la excepción que confirma la regla: como termina en -da, es una palabra entera y queda **después** del verbo en las dos formas, {mitji an-da} y {mitji an-neunda}. La regla práctica: si la negación es {-da}, va después; si no lo es, va antes en la forma plana y se mete dentro en la educada.

El amarre con los otros dos idiomas del proyecto aparece aquí. En mandarín la negación es una partícula pegada antes del verbo y no cambia de lugar: {wǒ bù chī}, con {méi} para el pasado y para la existencia. En japonés la negación viene **después** del verbo y el verbo toma la forma negativa. En coreano la negación viene antes, como en mandarín, pero gana una segunda vida: dentro del verbo en la forma educada. Son tres posiciones distintas para el mismo concepto.

## El enlace: {do}, tampoco, y la negativa doble

{d o} es una partícula como las demás: se pega a la palabra que modifica. Y en una frase negativa, {do} va **antes** de {an}, no después: {naneun-do an meokneunda}, "yo tampoco como". Quien escribe al modo portugués, dejando el "también" para el final, produce una frase que el oyente coreano entiende al revés: en coreano el orden es fijo, y {do} antes de la negativa es construcción, no opción.

El segundo par es {an} seguido de {mot}, y es la prueba de que el enlace es obligatorio: "no solo ... sino que tampoco". En coreano son dos negativas juntas, {an} ... {mot}, y el oyente entiende las dos como un solo bloque. Ninguna de las dos significa nada sola en esa frase, y ninguna se puede traducir por separado. Traducir {an} por "no" y {mot} por "no" otra vez produce en portugués una negación doble que no existe.

## Negar un sustantivo exige verbo

En portugués se niega un sustantivo con un adjetivo: "no es libro", "no son verdad". En coreano eso no existe, porque la negación es siempre verbal: no hay un "no" que caiga sobre la cosa. Se niega el verbo que está por debajo del sustantivo, y hay dos puertas. La primera es el verbo de identidad, {ida}: {chaeg-eun anida}, "no es libro". Fíjate en que la frase tiene sujeto: el "no" es un verbo y, como verbo, recibe partícula de sujeto como {i} o {gwa}. La segunda es {eun mu}, la forma de "no haber": {chaegi eun mu itda}, "no hay libro", literalmente "el libro no tiene lugar".

{eun mu} es el contrapunto del {méi} del mandarín. En mandarín {méi} niega la existencia; en coreano {eun mu} niega la existencia, y la construcción se hace con el sustantivo seguido del verbo de haber. Mismo campo semántico, mismo tipo de versículo, palabras distintas porque cada idioma arma la frase por dentro.

Y el versículo que cierra la lección es la prueba. En Juan 1:5, "la luz brilla en las tinieblas, y las tinieblas no le han vencido", la negación viene al final del versículo y recae sobre "vencer": {bichida}, brillar, contra {ikida}, vencer. La palabra de las tinieblas es {eodum}. Si el traductor escribe {an} donde el texto era rechazo de un hecho, o {mot} donde era solo ausencia de victoria, ha fortalecido un versículo de luz débil en un versículo de luz victoriosa. Elegir la negativa no es, por tanto, un detalle de estilo: es elegir lo que el versículo afirma.
`),
  vocab: [
    V('an', '안', 'no; negación simple de la acción, antes del verbo'),
    V('mot', '못', 'no poder; negación de capacidad, antes del verbo'),
    V('ji an-da', '지 않다', 'no hacer; no ser; rechazo de un hecho, después del verbo'),
    V('an mot', '안 ... 못', 'no solo ... sino que tampoco (negativa doble)'),
    V('do', '도', 'también; partícula que va antes de la negativa'),
    V('eun mu', '없음', 'no haber; no existir'),
    V('mol da', '못하다', 'no poder; no ser posible'),
    V('ji mot ha da', '지 못하다', 'no poder ser; no ser posible'),
    V('ida', '이다', 'ser; estar (verbo de identidad)'),
    V('naneun', '나는', 'yo (sujeto, forma educada)'),
    V('mitda', '믿다', 'creer'),
    V('bichida', '비치다', 'brillar; resplandecer'),
    V('ikida', '이기다', 'vencer; prevalecer sobre'),
    V('eodum', '어둠', 'tinieblas; oscuridad'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las tres negativas no son sinónimos: {an} niega el hecho, {mot} niega la capacidad, {ji an-da} niega la validez de lo que se afirma. Cambiar una por otra cambia la afirmación.',
      ),
    },
    {
      n: '2',
      text: T(
        '{an} y {mot} van antes del verbo en la forma plana y entran dentro del verbo en la educada: {an meokda} se vuelve {meokneunda}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ji an-da} termina en -da y por eso queda después del verbo en las dos formas: {mitji an-da}, {mitji an-neunda}.',
      ),
    },
    {
      n: '4',
      text: T(
        'En una frase negativa, {do} va antes de {an}: {naneun-do an meokneunda}, "yo tampoco como". El orden es fijo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negar un sustantivo exige verbo: {anida} para la identidad, {eun mu itda} para la existencia. No existe un "no" que caiga sobre la cosa.',
      ),
    },
  ],
  notes: [
    {
      label: T('El motivo no lo eliges tú'),
      text: T(
        '{mot} dice que la acción no ocurre, y nada más. No distingue "no quiero" de "no puedo" de "no voy" — el coreano deja esa distinción al contexto y a la frase siguiente. Por eso {mot} es la palabra equivocada cuando lo que se quiere negar es la elección.',
      ),
    },
    {
      label: T('El "no" coreano es siempre verbo'),
      text: T(
        'En coreano la negación es un verbo y, como tal, recibe partícula de sujeto: {chaeg-eun anida} tiene sujeto, porque {anida} es una forma verbal. En portugués "no es libro" es un adjetivo y no tiene sujeto gramatical. Esa es la diferencia entre negar y calificar.',
      ),
    },
  ],
  examples: [
    { text: '안 먹습니다', gloss: T('an meokneunda — no como; negación simple, dentro del verbo') },
    { text: '못 먹습니다', gloss: T('mot meokneunda — no puedo comer; incapacidad, no rechazo') },
    {
      text: '먹지 않습니다',
      gloss: T('meokji an-neunda — no es que yo coma; rechazo del hecho, después del verbo'),
    },
    {
      text: '나도 안 먹습니다',
      gloss: T('naneun-do an meokneunda — yo tampoco como; {do} antes de la negativa'),
    },
    {
      text: '책이 아닙니다',
      gloss: T('chaegi an-i-neunda — no es un libro; la negación como verbo'),
    },
  ],
  tables: [
    {
      caption: T('Las tres negativas lado a lado'),
      head: [T('Negador'), T('Lo que niega'), T('Frase'), T('Lo que no es')],
      rows: [
        [
          T('{an}'),
          T('el hecho de la acción'),
          T('{naneun an mitneunda}'),
          T('ni rechazo ni incapacidad'),
        ],
        [
          T('{mot}'),
          T('la capacidad'),
          T('{naneun mot mitneunda}'),
          T('no es "no quiero" ni "no voy"'),
        ],
        [
          T('{ji an-da}'),
          T('la validez de lo que se dice'),
          T('{naneun mitji an-da}'),
          T('no niega la acción, niega el hecho'),
        ],
      ],
    },
    {
      caption: T('La posición de la negativa en cada forma'),
      head: [T('Negador'), T('Forma plana'), T('Forma educada'), T('Dónde está')],
      rows: [
        [
          T('{an}'),
          T('{an meokda}'),
          T('{meokneunda}'),
          T('antes del verbo plano, dentro educado'),
        ],
        [
          T('{mot}'),
          T('{mot mitda}'),
          T('{motneunda}'),
          T('antes del verbo plano, dentro educado'),
        ],
        [
          T('{ji an-da}'),
          T('{mitji an-da}'),
          T('{mitji an-neunda}'),
          T('después del verbo en las dos formas'),
        ],
      ],
    },
    {
      caption: T('Dónde se coloca la negativa en cada idioma del proyecto'),
      head: [T('Idioma'), T('Dónde entra la negativa'), T('Cambia de lugar'), T('Lección')],
      rows: [
        [
          T('mandarín'),
          T('antes del verbo, como partícula'),
          T('no'),
          T('lección 9, con {méi} para el pasado'),
        ],
        [T('japonés'), T('después del verbo, en la forma negativa'), T('no'), T('lección 7')],
        [
          T('coreano'),
          T('antes del verbo plano, dentro educado'),
          T('sí, con la cortesía'),
          T('esta lección'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En coreano, "no puedo comer" — ¿qué negador usas?'),
    options: [T('{an}'), T('{mot}'), T('{ji an-da}'), T('{eun mu}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el rechazo de hecho "no es así": geun-neun jeok-da jeok-ji ____'),
      answer: '않다',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el negador con lo que niega'),
      pairs: [
        { a: T('{an}'), b: T('el hecho de la acción') },
        { a: T('{mot}'), b: T('la capacidad') },
        { a: T('{ji an-da}'), b: T('la validez de lo que se dice') },
        { a: T('{eun mu}'), b: T('la existencia') },
        { a: T('{do}'), b: T('también; va antes de la negativa') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('En una frase negativa en coreano, ¿dónde queda la partícula {do}?'),
      options: [
        T('después de {an}'),
        T('antes de {an}'),
        T('pegada al sustantivo, lejos de la negativa'),
        T('siempre al final de la frase'),
      ],
      answer: 1,
    },
  ],
};
