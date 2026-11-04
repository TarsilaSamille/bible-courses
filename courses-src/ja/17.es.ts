import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Verbo'),
  title: T('La razón de la condensación: cómo desaparece el verbo dentro de la frase'),
  subtitle: T(
    'En una cláusula subordinada el verbo japonés suele desaparecer, y lo que sostiene la frase es el contexto y la partícula',
  ),
  body: C(`
## La lengua que economiza verbo

El japonés es una lengua muy económica, y su economía aparece justamente en el verbo. En una cláusula subordinada el verbo muchas veces **desaparece**, y lo que sostiene la frase es el contexto más la partícula. Quien viene del mandarín o del coreano siente eso como una carencia: las dos lenguas hermanas casi nunca sueltan el verbo, y el japonés lo suelta todo el tiempo. Son tres lenguas del mismo grupo con tres economías de verbo, y solo una de ellas borra el verbo.

El caso más visible es la cláusula de tiempo. "Cuando llego a casa, como" no es "cuando" más un verbo flexionado y después otro verbo flexionado: es llegar a casa, **comer**. El primer verbo entra en la forma que no flexiona, y a veces el segundo también desaparece y solo queda {食べる}. Lo que sostiene todo eso es {時}, "cuando", que viene después de la forma verbal como toda partícula de este idioma.

## {時}: cuando desaparece el verbo de la cláusula temporal

{時} es partícula temporal, y la flexión del verbo es la prueba. En {家に着いた時、食べる} el primer verbo está en la forma plana, {着いた}, y el {時} dice "cuando". El mismo {時} unido a un verbo flexionado se lee de otra manera: {着いていた時} es "en el momento en que estaba llegando", porque entró el progresivo y la frase pasó a ser descripción y no condición.

El camino para leer cualquier {時} es mirar el verbo que tiene delante: forma plana, y es una cláusula de tiempo, o sea "cuando"; verbo flexionado o partícula de posesión en su lugar, y el {時} es solo el sustantivo "tiempo", como en {時の流れ}, "el curso del tiempo". Una partícula pequeña hace las dos cosas porque el japonés no tiene dos palabras para eso: tiene una, y quien llega de fuera tiene que aprender a leer la flexión para saber cuál de las dos está leyendo.

## La cláusula relativa que se vuelve una partícula

Una cláusula relativa entera puede reducirse a una sola partícula. "El libro que está sobre la mesa" es {机の上にある本}: el sustantivo {本}, el lugar dicho por {上}, "encima", y el verbo no está. Sobrevivió como {に}, la partícula que ocupa el lugar del verbo y dice que el libro está ahí. Una relativa que en portugués lleva cuatro palabras llega al japonés como una partícula y nada más.

Es esta la construcción que más separa al japonés de las dos lenguas hermanas. En mandarín y en coreano la relativa conserva su verbo; aquí puede ser solo {上} o solo {に}. Y por eso {ある}, el "estar" japonés sin sujeto vivo, aparece tantas veces: no desaparece por ser débil, desaparece porque el contexto sostiene la frase.

La Biblia muestra esto ya en la primera página de Juan. En 1:3, {万物は言によって成った。成ったもので、言によらず成ったものは何一つなかった。}, en la segunda cláusula el verbo de "fue hecho" no aparece ni una vez, porque la primera ya lo dijo. Donde el verbo desapareció, el griego también tenía un verbo muy simple y muy repetido: la economía japonesa no inventa nada, ahorra lo que el griego ya estaba repitiendo.

## El verbo que cambia de ropa y el verbo que sobra

El camino opuesto al de la desaparición: en vez de desaparecer, el verbo cambia de ropa y se vuelve sustantivo. {取る} es "tomar, coger, comprar"; en la forma de sustantivo, {取り}, ya no flexiona como verbo, y recibe partícula de objeto y partícula de genitivo como cualquier nombre. Por eso funcionan {駅で切符を取る}, "compro un billete en la estación", y {取るものを集める}, "junto lo que se coge": en la segunda, el {の} enlaza el sustantivo {取り} con el sustantivo {もの}, y después de {集める} no viene ningún verbo. Lo que flexiona cambia de sitio: el verbo flexiona con {ます} y {た}, el sustantivo flexiona con {を}, {の} y {に}, y así es como un diccionario japonés encuentra {取り}, como nombre.

Al otro lado de la misma economía está el verbo que **sobra**. Sujeto y objeto pueden desaparecer los dos a la vez, con tal de que el contexto los resuelva: {食べる} solo, sin "yo" y sin "qué", es una frase completa, porque es la respuesta natural a "¿qué vas a hacer ahora?". Por eso el verbo sostiene la frase: es la última pieza que queda cuando todo lo demás se ha omitido, y es la que da la respuesta. Sin verbo no hay respuesta, aunque haya sujeto y objeto.

Y la máquina de acortar es la misma: la partícula de origen prescinde del verbo de ir y venir, y el medio de locomoción prescinde del resto. {東京から} quiere decir "de Tokio", y {歩いて} quiere decir "a pies", y las dos responden a "¿cómo vas?" sin verbo alguno.

El ejemplo que ata todo es Juan 3:30, {あの方は栄え、わたしは衰えねばならない。}, "él tiene que crecer, y yo tengo que menguar". Fíjate en que aquí los dos verbos están, y ninguno podía faltar: crecer y menguar son el punto entero de la frase, y cada cláusula necesita el suyo. La regla no es "verbo opcional"; es "verbo solo cuando carga algo". Por eso el evangelio de Juan, que en griego tiene un verbo por cláusula, se vuelve en japonés una secuencia en la que el verbo aparece donde importa y desaparece donde el griego solo repetía.
`),
  vocab: [
    V('toki', '時', 'cuando; tiempo; partícula temporal (toki)'),
    V('tsuku', '着く', 'llegar (tsuku)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('aru', 'ある', 'estar; existir: el "estar" que queda cuando el verbo desaparece (aru)'),
    V('tsukue', '机', 'mesa (tsukue)'),
    V('ue', '上', 'encima; superficie (ue)'),
    V('no', 'の', 'de; enlaza dos sustantivos (no)'),
    V('toru', '取る', 'tomar; coger; comprar (toru)'),
    V('atsumeru', '集める', 'juntar; reunir (atsumeru)'),
    V('hataraku', '働く', 'trabajar (hataraku)'),
    V('aruite', '歩いて', 'a pie; caminando (aruite)'),
    V('kara', 'から', 'de (origen); desde; prescinde del verbo de ir y venir (kara)'),
    V('kuru', '来る', 'venir (kuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En una cláusula subordinada el verbo puede desaparecer: lo que sostiene la frase es el contexto y la partícula.',
      ),
    },
    {
      n: '2',
      text: T(
        '{時} con verbo en forma plana es cláusula temporal y vale "cuando"; con verbo flexionado o con {の} es solo el sustantivo "tiempo".',
      ),
    },
    {
      n: '3',
      text: T(
        'Una cláusula relativa puede reducirse a una partícula: en {机の上にある本}, el {に} ocupa el lugar del verbo.',
      ),
    },
    {
      n: '4',
      text: T(
        'El verbo nominalizado ({取る} pasando a {取り}) es sustantivo: recibe {を}, {の} y {に} en vez de flexionar como verbo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Sujeto y objeto desaparecen juntos cuando el contexto los resuelve, y el verbo que sobra es el que da la respuesta — como decía la lección 8.',
      ),
    },
  ],
  notes: [
    {
      label: T('Donde el verbo desapareció, el griego era sencillo'),
      text: T(
        'Vale la pena poner Juan 1:3 junto al griego original. La segunda cláusula repite el verbo "fue hecho" dos veces, y el japonés escribe el primero y omite el segundo; lo mismo pasa en 1:5, donde la cláusula de la luz y la de las tinieblas conservan verbos distintos porque dicen cosas distintas. La regla de lectura es sencilla: un verbo que falta en japonés es un verbo repetido en griego.',
      ),
    },
    {
      label: T('La partícula guarda lo que el verbo perdió'),
      text: T(
        'Cuando falta un verbo en un versículo japonés, no busques un verbo escondido: busca la partícula. {から} guarda el origen, {上} guarda el lugar, {に} guarda el estado. También por eso {から} prescinde del verbo de ir y venir: la partícula ya dijo que hubo desplazamiento, y repetirlo sería gastar un verbo en balde.',
      ),
    },
  ],
  examples: [
    {
      text: '家に着いた時、食べる',
      gloss: T('ie ni tsuitaku natta toki, taberu — cuando llego a casa, como'),
    },
    {
      text: '机の上にある本',
      gloss: T('tsukue no ue ni aru hon — el libro que está sobre la mesa'),
    },
    { text: '取るものを集める', gloss: T('toru mono o atsumeru — junto lo que se coge') },
    { text: '食べる', gloss: T('taberu — como, sin sujeto y sin objeto') },
    {
      text: 'あの方は栄え、わたしは衰えねばならない',
      gloss: T(
        'ano kata wa sakaeru, watashi wa otoroeneba naranai — él tiene que crecer y yo tengo que menguar (Juan 3:30)',
      ),
    },
  ],
  tables: [
    {
      caption: T('El verbo que desaparece, y lo que queda en su lugar'),
      head: [
        T('Dónde desaparece el verbo'),
        T('Lo que escribe el japonés'),
        T('El verbo que falta'),
        T('La frase completa'),
      ],
      rows: [
        [
          T('cláusula de tiempo'),
          T('{家に着いた時、食べる}'),
          T('{着く}, "llegar"'),
          T('{家に着いてから、食べる}'),
        ],
        [
          T('cláusula relativa'),
          T('{机の上にある本}'),
          T('{ある}, "estar"'),
          T('{机の上に本がある}'),
        ],
        [
          T('verbo nominalizado'),
          T('{取るものを集める}'),
          T('la flexión del verbo'),
          T('{取るものを集める}'),
        ],
        [T('sujeto'), T('{食べる}'), T('el pronombre del sujeto'), T('{わたしが食べる}')],
        [
          T('medio de locomoción'),
          T('{歩いて}'),
          T('los verbos de ir y de caminar'),
          T('{歩いて行きます}'),
        ],
        [T('origen'), T('{東京から}'), T('{来る}, "venir"'), T('{東京から来ます}')],
      ],
    },
    {
      caption: T('Tres lenguas del mismo grupo, tres economías de verbo'),
      head: [T('Lengua'), T('El verbo en una cláusula'), T('Lo que sostiene la frase')],
      rows: [
        [T('mandarín'), T('casi siempre presente'), T('la partícula y el orden de las palabras')],
        [T('coreano'), T('casi siempre presente'), T('la flexión del verbo y la partícula')],
        [T('japonés'), T('a veces ausente'), T('el contexto y la partícula')],
      ],
    },
    {
      caption: T('El verbo que cambia de ropa'),
      head: [T('El verbo'), T('El sustantivo'), T('La frase que monta')],
      rows: [
        [
          T('{取る}, "tomar"'),
          T('{取り}, el acto de tomar'),
          T('{駅で切符を取る} — compro un billete en la estación'),
        ],
        [T('{働く}, "trabajar"'), T('{働き}, el trabajo'), T('{働く人} — quien trabaja')],
        [T('{歩く}, "caminar"'), T('{道}, el camino'), T('{歩く道} — el camino por donde se anda')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {家に着いた時、食べる}, ¿qué está haciendo {時}?'),
    options: [
      T(
        'abrir una cláusula de tiempo: por eso el primer verbo aparece en la forma que no flexiona',
      ),
      T('sustituir al verbo "comer", que puede quedar fuera'),
      T('marcar el sujeto de {食べる}'),
      T('convertir la frase en pregunta retórica'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa "el libro que está sobre la mesa" con la partícula que sobró de la relativa: 机の上____ある本',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que sostiene'),
      pairs: [
        { a: T('{時}'), b: T('abre la cláusula de tiempo y prescinde de la flexión del verbo') },
        { a: T('{上}'), b: T('dice "encima", y con ella la relativa puede volverse partícula') },
        { a: T('{の}'), b: T('enlaza el sustantivo con lo que viene después') },
        { a: T('{から}'), b: T('prescinde del verbo de ir y venir') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿En cuál de estas frases el verbo es de verdad obligatorio?'),
      options: [
        T('{あの方は栄え、わたしは衰えねばならない} — crecer y menguar son el punto de la frase'),
        T('{机の上にある本}'),
        T('{食べる}'),
        T('{東京から}'),
      ],
      answer: 0,
    },
  ],
};
