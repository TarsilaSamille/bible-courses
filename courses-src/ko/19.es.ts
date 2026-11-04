import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Sintaxis'),
  title: T('Adjetivos, numerales y dónde queda cada pieza en la pila'),
  subtitle: T(
    'El modificador va después del sustantivo que modifica, la partícula {ui} queda en medio de la pila y entre dos posesivos se repite',
  ),
  body: C(`## El sintagma nominal es una pila

El orden básico de la frase es objeto, verbo, sujeto. Ese orden resuelve el problema de la frase. Pero el sintagma nominal coreano tiene un segundo problema encima del primero, y el segundo es un problema de lugar: un grupo de palabras alrededor de un sustantivo es una PILA, y cada capa de esa pila tiene su sitio fijo. La pila tiene esta forma: numeral, contador, sustantivo, {ui} (eui, "de"), sustantivo.

El detalle que hace tropezar al principiante está en medio de esa fórmula, no al final. El modificador va DESPUÉS del sustantivo que modifica, y la partícula {ui} no está ni al principio ni al final de la pila: está entre el sustantivo y el modificador. Por eso "mi libro rojo grande" no es una fila de tres palabras: es libro, {ui}, rojo, {ui}, grande, leído desde el sustantivo hacia fuera. Son dos {ui} en la misma frase, y ninguno en la posición donde el portugués los habría puesto.

Fíjate además en que el sustantivo es el centro, no el final. Quien traduce del portugués palabra por palabra coloca el sustantivo al final, porque en portugués es la última palabra de un sintagma simple; en coreano es la pieza de la que cuelga todo lo demás, y lo demás se apila a su derecha. Un sintagma nominal coreano no es una fila: es un árbol tumbado de lado con el tronco en medio.

## El adjetivo va después del sustantivo

El adjetivo coreano es la pieza que se pega detrás del sustantivo. Y su posición es lo que ata este curso con los otros dos, porque los tres idiomas de este proyecto colocan el adjetivo en tres sitios distintos y la comparación fija la posición de una vez. En portugués el adjetivo va antes, en "libro rojo". En japonés también va antes, y allí el adjetivo es en realidad un sustantivo que simplemente se coloca antes del otro sustantivo. En mandarín va antes una vez más, y la partícula {de} es la que cierra el grupo detrás de él.

En coreano el adjetivo va después. No es cuestión de gusto: es la posición. Y la prueba es rápida: "libro rojo pequeño" traducido con los adjetivos delante se convierte, en coreano, en una fila de sustantivos sueltos, sin la pieza que los une, que es justamente el {ui}, o la forma que hace su papel.

## El numeral y el contador abren la pila

El numeral y el contador son las únicas capas que se colocan antes que todo lo demás, y por eso abren la pila: cuando están ahí, son la primera capa y el sustantivo viene justo detrás. La frase entera, de una vez: "tres de mis libros rojos" en coreano es {se gwon-ui ppalkan chaek}, leído como numeral, contador, {ui}, adjetivo, sustantivo. El sustantivo es el CENTRO de la pila, con el numeral a un lado y el modificador al otro, y la tabla central es exactamente ese diagrama. Quien busca el numeral al final de la frase, como en portugués, nunca lo encuentra.

Una advertencia honesta sobre esa frase: cuando dos sustantivos quedan juntos sin verbo entre ellos, el coreano los une con {ui}, y la lectura literal de {se gwon-ui ppalkan chaek} es "tres volúmenes de libro rojo". La pila es la misma pila, y lo que decide entre "tres de mis libros rojos" y "tres volúmenes de libro rojo" es el contexto, no el orden, y el orden ya está dado, y es siempre este.

Y lo que NO cambia, dentro de la pila, es el orden entre los modificadores. Si hay dos descriptores, como en "libro rojo pequeño", el más PRÓXIMO al sustantivo es el que distingue más: {jageun ppalkan chaek} es un libro rojo pequeño, y no un libro pequeño rojo. Es lo único de la pila que el portugués hace exactamente igual.

## El {ui} doble y el gancho bíblico

Cuando dos posesivos van seguidos, el {ui} se repite: "mi de tu de libro" es {naui-ui neui-ui chaek}, y la repetición es obligatoria, no estilística. La alternativa es sustantivar el primer posesivo: {naui} solo puede funcionar como pronombre posesivo, sin {ui} ni sustantivo detrás. Pero el {ui} no tiene forma elíptica: o se repite, o la frase gana una palabra. Un {ui} repetido es una de las cosas más brutales del coreano escrito: la misma sílaba dos veces seguidas, y el lector tiene que saber que eso son dos enlaces y no una falta de tecleo.

El gancho bíblico no puede ser Juan 6:9, porque ese versículo ya se gastó en el numeral y el contador, y repetir el ejemplo borraría la capa nueva. Aquí el versículo vuelve una capa más adentro, en 1 Cor 13:4-8. En "el amor es paciente", el sustantivo {sarang} ocupa el centro y la partícula de tema se le pega de inmediato, porque es el sustantivo el que rige la partícula y el modificador el que viene detrás del grupo: {sarang-eun orae injneun}, "el amor es paciente", con el adverbio {orae} entre el grupo del sustantivo y el verbo. Y en 1 Cor 13:8 la estructura se repite intacta, con el sustantivo abriendo la cláusula y el verbo al final. El mismo versículo, en dos capas, muestra la pila por fuera y por dentro.
`),
  vocab: [
    V('ui', '의', 'partícula genitiva, "de", que une un grupo con otro; suena eui (ui)'),
    V('chaek', '책', 'libro; el sustantivo que queda en el centro de la pila (chaek)'),
    V('ppalkan', '빨간', 'rojo, en la forma que modifica al sustantivo siguiente (ppalkan)'),
    V('jageun', '작은', 'pequeño, en la forma que modifica al sustantivo siguiente (jageun)'),
    V('keun', '큰', 'grande, en la forma que modifica al sustantivo siguiente (keun)'),
    V('naui', '나의', 'mi; posesivo que también funciona solo (naui)'),
    V('neui', '네', 'tu, tuyo; posesivo de segunda persona (neui)'),
    V('se', '세', 'tres; numeral coreano, delante de todo en la pila (se)'),
    V('gwon', '권', 'contador de libros y de pergaminos (gwon)'),
    V('sarang', '사랑', 'amor; el sustantivo que abre 1 Cor 13 (sarang)'),
    V('orae', '오래', 'durante mucho tiempo; adverbio de duración (orae)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pila del sintagma nominal tiene este orden: numeral, contador, sustantivo, {ui}, sustantivo. El sustantivo queda en el centro.',
      ),
    },
    {
      n: '2',
      text: T(
        'El modificador va siempre DESPUÉS del sustantivo que modifica, y la partícula {ui} queda en medio de la pila, entre el sustantivo y el modificador.',
      ),
    },
    {
      n: '3',
      text: T(
        'El adjetivo nunca va antes del sustantivo, al contrario que en portugués, japonés y mandarín.',
      ),
    },
    {
      n: '4',
      text: T(
        'Numeral y contador son las únicas capas que van antes de todo; sin ellos, el sustantivo abre la pila.',
      ),
    },
    {
      n: '5',
      text: T(
        'Entre dos modificadores, el que está más cerca del sustantivo es el que distingue más — como en la lección 9 del curso ja.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {ui} doble y su castigo'),
      text: T(
        'Dos posesivos seguidos repiten el {ui}: {naui-ui neui-ui chaek}, "mi de tu de libro". La repetición es obligatoria, porque el {ui} es una partícula sin forma elíptica. Es una de las cosas más brutales del coreano escrito: dos sílabas iguales, una al lado de la otra, con significado distinto.',
      ),
    },
    {
      label: T('El sustantivo es lo que rige la partícula'),
      text: T(
        'En {sarang-eun orae injneun} (1 Cor 13:4) el {eun} se pega al sustantivo, y el adverbio {orae} viene después del grupo, no antes. Quien traduce palabra por palabra pone el adverbio delante y rompe la pila sin darse cuenta, porque el error no es de palabra, es de sitio.',
      ),
    },
  ],
  examples: [
    {
      text: '빨간 책',
      gloss: T('ppalkan chaek — libro rojo: el adjetivo va después del sustantivo'),
    },
    {
      text: '작은 빨간 책',
      gloss: T(
        'jageun ppalkan chaek — libro rojo pequeño: el más cercano al sustantivo distingue más',
      ),
    },
    {
      text: '세 권의 책',
      gloss: T('se gwon-ui chaek — tres libros: numeral, contador, {ui}, sustantivo'),
    },
    {
      text: '나의 빨간 책',
      gloss: T('naui ppalkan chaek — mi libro rojo: el {ui} va antes del adjetivo'),
    },
    {
      text: '사랑은 오래 참고',
      gloss: T(
        'sarang-eun orae injneun — el amor es paciente (1 Cor 13:4): sustantivo, partícula, adverbio, verbo',
      ),
    },
  ],
  tables: [
    {
      caption: T('La pila del sintagma nominal, capa por capa'),
      head: [T('Capa'), T('Pieza'), T('Dónde queda en la pila'), T('Ejemplo (romanización)')],
      rows: [
        [T('1'), T('numeral'), T('delante de todo: abre la pila'), T('se — tres')],
        [T('2'), T('contador'), T('justo después del numeral'), T('gwon — contador de libros')],
        [T('3'), T('sustantivo'), T('el centro: de ahí cuelga todo'), T('chaek — libro')],
        [
          T('4'),
          T('{ui} (eui)'),
          T('después del sustantivo, y no al final de la pila'),
          T('gwon-ui — de libros'),
        ],
        [
          T('5'),
          T('modificador del segundo sustantivo'),
          T('entre el {ui} y el sustantivo que modifica'),
          T('ppalkan — rojo'),
        ],
      ],
    },
    {
      caption: T('Dónde cae el adjetivo en cada uno de los tres idiomas'),
      head: [
        T('Idioma'),
        T('Dónde va el adjetivo'),
        T('Cómo queda escrito'),
        T('Dónde está la lección'),
      ],
      rows: [
        [
          T('portugués'),
          T('antes del sustantivo'),
          T('livro vermelho'),
          T('la lección 8 de este curso'),
        ],
        [
          T('japonés'),
          T('antes, y es un sustantivo'),
          T('akai hon — libro rojo'),
          T('la lección 10 del curso ja'),
        ],
        [
          T('mandarín'),
          T('antes, cerrado por la partícula {de}'),
          T('la partícula {de} va después del adjetivo'),
          T('la lección 13 del curso zh'),
        ],
        [
          T('coreano'),
          T('después del sustantivo'),
          T('ppalkan chaek — libro rojo'),
          T('esta lección'),
        ],
      ],
    },
    {
      caption: T('Un posesivo o dos: qué pasa con el {ui}'),
      head: [T('Situación'), T('Cómo queda'), T('Lectura')],
      rows: [
        [T('un posesivo'), T('{naui} + {ui} + sustantivo'), T('naui-ui chaek — mi libro')],
        [
          T('dos posesivos seguidos'),
          T('el {ui} se repite, sin excepción'),
          T('naui-ui neui-ui chaek — mi de tu de libro'),
        ],
        [
          T('el primero sustantivizado'),
          T('{naui} solo, sin {ui} ni sustantivo detrás'),
          T('naui chaek — mi libro'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En coreano, ¿dónde queda el adjetivo respecto al sustantivo que modifica?'),
    options: [
      T('antes del sustantivo, como en portugués'),
      T('después del sustantivo'),
      T('antes del numeral y del contador'),
      T('dentro de la partícula {ui}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El adjetivo va después del sustantivo: "rojo" + "libro" = 빨간____'),
      answer: '책',
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada pieza de la pila con el sitio que ocupa'),
      pairs: [
        { a: T('{se}'), b: T('numeral: abre la pila, delante de todo') },
        { a: T('{gwon}'), b: T('contador: justo después del numeral') },
        { a: T('{ui}'), b: T('partícula genitiva: después del sustantivo') },
        { a: T('{ppalkan}'), b: T('adjetivo: después del sustantivo, en medio de la pila') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se escribe "mi de tu de libro" en coreano?'),
      options: [
        T('naui chaek neui chaek'),
        T('naui-ui neui-ui chaek'),
        T('neui-ui naui-ui chaek'),
        T('chaek-ui naui neui'),
      ],
      answer: 1,
    },
  ],
};
