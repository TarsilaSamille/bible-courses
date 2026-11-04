import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('La sintaxis y la traducción'),
  title: T('Las traduccionesluasas y lo que deciden'),
  subtitle: T('было y стало en el mismo capítulo: la elección del verbo cambia el versículo'),
  body: C(`
## Una traducción es una elección de verbo

Toda traducción elige un verbo, y elegir un verbo en ruso es elegir un aspecto. No hay traducción neutral de un verbo griego a un verbo ruso, porque el griego tiene una sola forma de aoristo y el ruso tiene dos, y cada una dice algo distinto.

El ejemplo más limpio está dentro de un mismo capítulo. Juan 1:1 dice **В начале было Слово**, y Juan 1:14 dice **И Слово стало плотию**. El mismo infinitivo, en dos cláusulas del mismo texto, con dos verbos rusos distintos. Было es el verbo de estado: la Palabra era. Стало es el perfectivo de volverse: la Palabra se hizo.

Si el traductor hubiera escrito стало en 1:1, el versículo pasaría a decir que la Palabra fue creada y no que era. Si hubiera escrito было en 1:14, el versículo diría que la Palabra era carne y no que se hizo carne. **Ninguna de las dos lecturas es absurda, y las dos son teológicamente distintas.** La elección del traductor no es estilística: es una afirmación sobre lo que ocurrió.

Y por eso las traducciones_Field divergen en la primera línea de Juan. Donde la Sinodal escribe начало быть, una traducción más antigua puede escribir стать sin el perfectivo, y donde otra escribe сотворено, una tercera escribe создано. Quien tiene dos traducciones_Field en la mano tiene dos otros textos, no el mismo texto dos veces.

## La palabra que el griego resuelve y el ruso no

El griego antiguo tiene una partícula que el ruso traduce por una palabra entera, y esa palabra necesita un verbo. Οὐκ ἔστιν, en Juan 3:16 y en otros lugares, es una negación que en griego es una partícula delante del verbo. El ruso lo resuelve con нет, que es un verbo, y que por eso necesita un caso: нет Бога, no hay Dios, con genitivo.

La consecuencia es que un trozo del griego que no tiene verbo en ruso se convierte en verbo en ruso, y el verbo nuevo trae caso, número y aspecto que el griego no traía. Οὐκ ἔστιν no dice de quién es la ausencia, y el genitivo ruso es una decisión del traductor.

Lo mismo pasa con el relativo del versículo 12: ὅσοι δὲ ἔλαβον αὐτόν, cuantos recibieron. La palabra griega es un pronombre relativo sin caso marcado en el texto. El ruso escribe которые, que necesita un caso, y la traducción necesita saber cuál. Quien no lo sepa lee которые приняли como objeto e invierte el sentido del versículo.

## Qué cambia entre traducciones, y qué hacer cuando divergen

Una traducción al portugués pierde el aspecto casi siempre, porque el portugués no tiene el par. Pero la pérdida no es simétrica: el perfectivo suele sobrevivir mejor que el imperfectivo, porque el perfectivo tiene sitio en el pretérito perfecto y el imperfectivo no tiene a dónde ir.

El resultado es una asimetría que conviene conocer. Las acciones puntuales siguen visibles en el texto portugués, y los procesos desaparecen. Juan 1:5 es el ejemplo: светит es imperfectivo y se traduce por un presente, y el griego tenía un presente. Quien lee la traducción portuguesa tiene la impresión de que el versículo no dice nada sobre la duración de la luz, y el original ruso sí lo dice, y el griego lo decía.

El revés también ocurre y produce errores del otro tipo. Было en 1:1 es un verbo sin aspecto que en portugués se vuelve "era", y было no dice si la situación duró o no. Un traductor que escribe "existía" sugiere un estado duradero que el original no afirma.

Cuatro pasos, y ninguno de los tres primeros exige el griego.

Primero: compare las terminaciones. Si una traducción trae Слово было y la otra trae Слово было Бог, la diferencia es de caso y no de sentido. Segundo: busque el perfectivo en la forma del verbo. Стало contra было es una decisión de aspecto, y es visible sin saber griego. Tercero: vea si la negación cambió de verbo. Si una traducción tiene нет y la otra tiene не, son frases de categorías distintas.

Cuarto, y es lo más difícil: pregunte al griego original sólo por el verbo, no por la frase entera. Quien lee griego lo bastante para identificar un aoristo ya sabe si la traducción conservó el aspecto, y la pregunta es una sola. Quien no lee griego puede preguntar a quien sí, y la respuesta cabe en cinco palabras.

## El gancho: una palabra, dos versículos, dos teologías

El mejor ejercicio de lectura rusa que existe son dos traducciones del mismo versículo, una al lado de la otra. Si las dos difieren en un verbo, la diferencia es teológica y no estilística. Si difieren en un caso, la diferencia es gramatical, y un lector ruso puede decidir por su cuenta cuál de las dos es la correcta.

Y vale la inversa: un texto ruso en que todos los verbos son de la misma familia de aspecto ha perdido la información que el griego tenía. Un traductor que escribe sólo perfectivos donde el original alternaba hizo una elección, y el lector pierde la distinción entre lo que dura y lo que ocurre.

La Sinodal rusa de 1876 es una traducción que respeta el aspecto la mayor parte del tiempo, y por eso sigue siendo la referencia. Pero ninguna traducción es el griego, y la distancia entre ellas es la medida honesta de lo que hace una traducción: no reproducir el texto, elegir por qué texto se está leyendo.
`),
  vocab: [
    V('В начале было Слово', 'быть', 'en el principio era la Palabra; estado (Jn 1:1)'),
    V('И Слово стало плотию', 'стать', 'y el Verbo se hizo carne; cambio (Jn 1:14)'),
    V('начало быть', 'начать', 'empezó a ser; la fórmula de 1:3'),
    V('сотворено', 'сотворить', 'fue creado; participio perfectivo'),
    V('создано', 'создать', 'fue creado; otra elección de perfectivo'),
    V('нет Бога', 'нет', 'no hay Dios; verbo de negación con genitivo'),
    V('не было Бога', 'быть', 'no había Dios; negación verbal, sin caso nuevo'),
    V('которые приняли', 'который', 'los que recibieron; relativo en nominativo'),
    V('светит', 'светить', 'brilla; imperfectivo de duración'),
    V('обитало', 'обитать', 'permaneció; imperfectivo de estado'),
    V('явил', 'явить', 'se manifestó; el perfectivo de cierre'),
    V('перевод', 'перевод', 'traducción'),
    V('аспект', 'аспект', 'aspecto'),
    V('синодальный', 'синодальный', 'sinodal; de la traducción de 1876'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Si un traductor escribe стало en Juan 1:1, ¿qué cambia?'),
    options: [
      T('El tiempo del verbo'),
      T('El aspecto: de estado a cambio'),
      T('El caso de la preposición'),
    ],
    answer: 1,
    hint: T(
      'Стало es el perfectivo de volverse. Cambiar было por стало cambia lo que el versículo afirma, y no sólo cómo se lee.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete Jn 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra es el perfectivo de volverse?'),
      options: [T('было'), T('стало'), T('обитало')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ Бога (no hay Dios)'), answer: 'нет' },
  ],
  rules: [
    {
      n: '1',
      text: T('Toda traducción elige un verbo, y elegir un verbo en ruso es elegir un aspecto.'),
    },
    {
      n: '2',
      text: T(
        '{Было} y {стало} son el mismo infinitivo con verbos distintos, y la diferencia es una afirmación sobre lo que ocurrió.',
      ),
    },
    {
      n: '3',
      text: T('{Нет} es un verbo y pide un caso; οὐκ ἔστιν es una partícula y no pide ninguno.'),
    },
    {
      n: '4',
      text: T(
        'Quien traduce a una lengua sin aspecto pierde primero el imperfectivo, y no el perfectivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Dos traducciones que difieren en un verbo difieren teológicamente; las que difieren en un caso difieren gramaticalmente.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el perfectivo sobrevive mejor'),
      text: T(
        'El portugués no tiene par de aspecto, y lo que falta es el imperfectivo. El perfectivo tiene sitio en el pretérito, así que sobrevive; el imperfectivo no tiene sitio ninguno y desaparece. La consecuencia es una asimetría que se puede medir: cuántas veces una traducción portuguesa tiene un verbo de estado donde el ruso tiene un imperfectivo de duración. Juan 1:5 es el caso más visible, y la impresión de que el versículo nada dice sobre la duración de la luz viene de ahí y no del griego.',
      ),
    },
    {
      label: T('El griego que se vuelve verbo en ruso'),
      text: T(
        'οὐκ ἔστιν es una partícula negativa más un verbo, y en ruso no hay construcción que haga eso con dos palabras. El traductor escribe нет, que es verbo, y el verbo trae genitivo. Ese genitivo no está en el griego, y es una decisión del traductor. Lo mismo vale para los relativos: ὅσοι no tiene caso marcado, y el который ruso necesita uno. Son dos sitios donde el ruso obliga al traductor a decidir más de lo que el griego lo obligaba.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('en el principio era la Palabra; estado, sin cambio') },
    { text: 'И Слово стало плотию', gloss: T('y el Verbo se hizo carne; cambio, con resultado') },
    { text: 'начало быть', gloss: T('empezó a ser; la fórmula de 1:3') },
    { text: 'сотворено', gloss: T('fue creado; participio de un perfectivo') },
    { text: 'создано', gloss: T('fue creado; otra elección de perfectivo') },
    { text: 'нет Бога', gloss: T('no hay Dios; verbo que pide genitivo') },
    { text: 'не было Бога', gloss: T('no había Dios; negación verbal, sin caso nuevo') },
    { text: 'которые приняли Его', gloss: T('los que lo recibieron; el relativo es nominativo') },
    {
      text: 'И свет во тьме светит',
      gloss: T('y la luz brilla en las tinieblas; imperfectivo de duración'),
    },
    { text: 'Он явил', gloss: T('él se manifestó; el perfectivo que cierra el texto') },
  ],
  tables: [
    {
      caption: T('El mismo campo semántico, tres verbos rusos'),
      head: [T('Verbo'), T('Aspecto'), T('Qué afirma'), T('Dónde aparece')],
      rows: [
        [T('быть'), T('sin aspecto'), T('un estado'), T('1:1, 1:2, 1:4')],
        [T('стать'), T('perfectivo'), T('un cambio de estado'), T('1:14')],
        [T('начало быть'), T('compuesto perfecto'), T('el comienzo de un proceso'), T('1:3')],
      ],
    },
    {
      caption: T('Lo que cada traducción tiene que decidir'),
      head: [T('Fenómeno griego'), T('Qué hace el ruso'), T('Qué decide el traductor')],
      rows: [
        [T('οὐκ ἔστιν'), T('se convierte en нет, que es verbo'), T('qué caso va al genitivo')],
        [
          T('ὅσοι ἔλαβον'),
          T('se convierte en которые, que necesita caso'),
          T('si es sujeto u objeto'),
        ],
        [T('aoristo'), T('se convierte en uno de los dos del par'), T('cuál de los dos miembros')],
        [T('participio'), T('hereda el aspecto del verbo'), T('qué perfectivo usó')],
      ],
    },
    {
      caption: T('La asimetría de la pérdida de aspecto'),
      head: [T('Lo que se pierde primero'), T('Por qué'), T('Cómo se nota')],
      rows: [
        [
          T('el imperfectivo'),
          T('el portugués no tiene sitio para él'),
          T('светит queda un presente sin duración'),
        ],
        [
          T('el perfectivo'),
          T('tiene sitio en el pretérito'),
          T('стало queda un pretérito normal'),
        ],
        [
          T('el valor de бы'),
          T('no hay partícula en portugués'),
          T('la hipótesis desaparece entera'),
        ],
        [
          T('el gerundio'),
          T('el portugués tiene pocos'),
          T('se pierde la duración de la acción principal'),
        ],
      ],
    },
  ],
};
