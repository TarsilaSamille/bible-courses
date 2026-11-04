import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('La estructura del período'),
  title: T('Sintaxis del período'),
  subtitle: T('Oración, período e independencia sintáctica'),
  body: C(`**Visión general.** Se cuenta un verbo por oración: en {Dijo Jesús: «Venid a mí»} hay dos verbos, {dijo} y {venid}, y por tanto dos oraciones.

**Regla 1.** El {período simple} tiene una sola oración; el {compuesto} tiene dos o más: en {Venid y seguidme}, {venid} y {seguidme} son dos.

**Regla 2.** La oración {coordinada} tiene autonomía sintáctica y la {subordinada} depende de un término de la principal: en {Venid, porque yo voy}, la segunda no se sostiene sola.

**Regla 3.** La {oración reducida} no tiene verbo conjugado propio: en {Caminando hacia Él}, {caminando} es un gerundio que depende del verbo principal.

**Regla 4.** El {período} es la secuencia completa de una o más oraciones, y el punto final es lo que cierra el recuento: en {Y dijo Jesús, y salieron}, son dos oraciones.

**Aplicación.** En {E Jesus, chorando, saiu}, el período tiene **una** oración, con tres adjuntos. En {E disse Jesus: «Venid a mí»}, el período tiene **tres** oraciones: {Disse Jesus} es la principal, {e} liga y {Venid a mí} es el objeto del verbo {disse}. Y en {Creio, porque tu eres el Hijo del Dios vivo}, hay dos: la principal {Creio} y la subordinada causal {porque tú eres...}.

**Verificación.** Cuenta las oraciones: ¿cuántas hay? Si hay una, el período es simple. Si hay más de una, pregunta a cada una: ¿tiene **sujeto propio** y es **independiente**? Si es así, es coordinada; si depende de la otra, es subordinada. Y identifica la **principal**, que es la que no rige por ningún término. Dos preguntas, y el período se abre entero.`),
  vocab: [
    V('oração', 'oração', 'unidad sintáctica con verbo'),
    V('período', 'período', 'secuencia completa de oraciones'),
    V('coordenação', 'coordenação', 'unión de oraciones independientes'),
    V('subordinação', 'subordinação', 'unión con dependencia'),
    V('independente', 'independente', 'oración que se sostiene sola'),
    V('sindética', 'sindética', 'coordinación con conectivo'),
    V('assindética', 'assindética', 'coordinación sin conectivo'),
    V('oração reduzida', 'oração reduzida', 'oración sin verbo conjugado'),
    V('disse', 'disse', 'verbo de la principal en {Dijo Jesús}'),
    V('chorando', 'chorando', 'gerundio que abre oración reducida'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Se cuenta un verbo por oración: en {Dijo Jesús: «Venid a mí»} hay dos verbos, {dijo} y {venid}, y por tanto dos oraciones.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {período simple} tiene una sola oración; el {compuesto} tiene dos o más: en {Venid y seguidme}, {venid} y {seguidme} son dos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La oración {coordinada} tiene autonomía sintáctica y la {subordinada} depende de un término de la principal: en {Venid, porque yo voy}, la segunda no se sostiene sola.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La {oración reducida} no tiene verbo conjugado propio: en {Caminando hacia Él}, {caminando} es un gerundio que depende del verbo principal.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El {período} es la secuencia completa de una o más oraciones, y el punto final es lo que cierra el recuento: en {Y dijo Jesús, y salieron}, son dos oraciones.',
      ),
    },
  ],
  notes: [
    {
      label: T('La oración que el griego reduce más'),
      text: T(
        'El griego antiguo tiene oraciones participiales hoy poco usadas en portugués: {προσευχόμενος} y {ἐλθών} valen por {estando orando} y {habiendo ido}. Quien traduce del griego encuentra esas formas a cada paso, y la elección entre mantener el participio o expandarlo en oración es la decisión más difícil de la traducción.',
      ),
    },
    {
      label: T('El punto final cuenta'),
      text: T(
        'Un período tiene un verbo más que otro cuando llega al punto final. En {Y dijo Jesús, y salieron}, hay dos verbos y dos oraciones; en {Y dijo Jesús; y, salido, se fue}, la segunda oración trae {salió} y {fue}, y son tres. El recuento es siempre verificable, y por eso es el punto de partida de cualquier análisis.',
      ),
    },
  ],
  examples: [
    {
      text: 'E Jesus, chorando, saiu.',
      gloss: T('Período simple: una sola oración, con {chorando} como oración reducida.'),
    },
    {
      text: 'E disse Jesus: «Vinde a mim».',
      gloss: T(
        'Período compuesto: {Dijo Jesús} y el habla {Venid a mí}, que es el objeto del verbo.',
      ),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('Dos coordinadas unidas por {e}: cada una tiene sujeto propio.'),
    },
    {
      text: 'Creio, porque tu és o Filho.',
      gloss: T('Principal {Creo} y subordinada causal {porque tú eres}, que trae la causa.'),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polisíndeton: cuatro oraciones coordinadas, con el verbo {es} repetido.'),
    },
    {
      text: 'Caminhando para Ele, Jesus saiu.',
      gloss: T('El gerundio abre una oración reducida; el sujeto {Jesús} sirve a los dos verbos.'),
    },
    {
      text: 'Não é a casa que quero.',
      gloss: T(
        'Negación adelantada al sintagma, no al verbo: destaca un término en vez de negar la oración.',
      ),
    },
    {
      text: 'Deus amou o mundo e deu o seu Filho.',
      gloss: T(
        'Dos coordinadas: la segunda completa a la primera por {dio}, con {le} como objeto indirecto.',
      ),
    },
    {
      text: 'O Filho do Homem veio à própria morte.',
      gloss: T(
        'Sujeto pospuesto {El Hijo del Hombre}, verbo {vino}, adjunto {a la propia muerte}.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Período simple y compuesto'),
      head: [T('Tipo'), T('Orações'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('uma'), T('um só verbo conjugado'), T('{Jesus saiu}')],
        [
          T('{composto por coordenação}'),
          T('duas ou mais independentes'),
          T('cada uma com sujeito próprio'),
          T('{Vinde e segui-me}'),
        ],
        [
          T('{composto por subordinação}'),
          T('principal e subordinada'),
          T('a subordinada depende da principal'),
          T('{Creio porque tu és}'),
        ],
        [
          T('{composto por ambas}'),
          T('três ou mais'),
          T('coordenadas e subordinadas juntas'),
          T('{E disse Jesus: vinde}'),
        ],
      ],
    },
    {
      caption: T('Oraciones coordinadas y subordinadas'),
      head: [T('Tipo'), T('Autonomia'), T('Conectivo'), T('Exemplo')],
      rows: [
        [T('coordenada {aditiva}'), T('independente'), T('{e}'), T('{veio e viu}')],
        [T('coordenada {adversativa}'), T('independente'), T('{mas}'), T('{veio, mas não viu}')],
        [
          T('coordenada {explicativa}'),
          T('independente'),
          T('{porque}'),
          T('{ficou, porque era tarde}'),
        ],
        [
          T('subordinada {substantiva}'),
          T('dependente'),
          T('{que}'),
          T('{Creio que isto é verdade}'),
        ],
        [T('subordinada {adjetiva}'), T('dependente'), T('{que}'), T('{o barco que vias}')],
        [T('subordinada {adverbial}'), T('dependente'), T('{porque}, {se}'), T('{Se vier, saio}')],
      ],
    },
    {
      caption: T('La oración reducida y lo que la abre'),
      head: [T('Forma'), T('Que abre a reduzida'), T('Frase'), T('Verbo que falta')],
      rows: [
        [T('gerúndio'), T('{Caminhando}'), T('{Caminhando para Ele, saiu}'), T('{saiu}')],
        [T('infinitivo'), T('{Ao ver}'), T('{Ao ver Ele, chorou}'), T('{chorou}')],
        [T('particípio'), T('{Sentado}'), T('{Sentado à sombra, leu}'), T('{leu}')],
        [T(' substantivo'), T('{Isso dito}'), T('{Isso dito, partiu}'), T('{partiu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuántas oraciones hay en {Y dijo Jesús: «Venid a mí»}?'),
    options: [
      T('dos: {Dijo Jesús} y el habla {Venid a mí}'),
      T('una, porque solo hay un sujeto'),
      T('tres, contando el conectivo {y}'),
      T('cuatro, contando {Jesús} y {mí}'),
    ],
    answer: 0,
    hint: T('Cuenta los verbos conjugados: {dijo} y {venid}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Caminando hacia Él, saiu}, {caminando} es:'),
      options: [
        T('oración reducida, porque no tiene verbo conjugado propio'),
        T('verbo principal, porque va primero'),
        T('sujeto, porque dice quién camina'),
        T('objeto directo de {salió}'),
      ],
      answer: 0,
      hint: T('El gerundio y el infinitivo no tienen persona ni número.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada oración con su especie.'),
      pairs: [
        { a: T('{Venid y seguidme}'), b: T('dos coordinadas') },
        { a: T('{porque tú eres el Hijo}'), b: T('subordinada causal') },
        { a: T('{Venid a mí}'), b: T('sustantiva directa') },
        { a: T('{el barco que veías}'), b: T('adjetiva restrictiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Se cuenta un verbo por ______, y así se descubre cuántas oraciones hay.'),
      answer: 'oração',
      hint: T('Dos verbos, dos oraciones.'),
    },
  ],
};
