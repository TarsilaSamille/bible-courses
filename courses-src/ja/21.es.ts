import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Verbo'),
  title: T('Tres "si", y ninguno flexiona el verbo'),
  subtitle: T(
    'La construcción con {ba}, {to} y {nara} hace lo que el español hace conjugando — y por eso el principiante flexiona el verbo equivocado',
  ),
  body: C(`
## Tres construcciones, tres valores

El condicional ya apareció como partícula, y eso era verdad y era incompleto: lo que existe no es un "si" japonés, son **tres construcciones** con tres valores diferentes, y escoger la equivocada cambia lo que la frase está afirmando.

La construcción más común y más neutra es {ba}: dice "si" y nada más, sin carga de hipótesis ni de causa. Al lado, {to} en tiempo genérico dice "cuando" y "a medida que", siempre con un sabor de causa incrustado. Y {nara} es la más causal de las tres, "si es el caso, y por eso", y es la que más aparece en el habla, aunque es rara en la escritura bíblica.

Lo que las tres tienen en común importa más que lo que las separa.

## La construcción con {ba}: la más común, y la flexión que no existe

La construcción completa es el verbo del "si", más {ba}, más el resultado: *ame ga fureba, iku*, "si llueve, voy".

El detalle que rompe al principiante es justamente el verbo del "si". **No recibe forma condicional propia.** Lo que hace es entrar en la forma que liga, y es en esa forma donde {ba} se pega: el verbo de la lluvia sale de *furu* y pasa a *furi*, y *furi* más {ba} da *fureba*. No existe en japonés ninguna forma del verbo que signifique "en caso de", y no hay un "tener" condicional en japonés. Quien busca esa forma busca algo que la lengua nunca construyó.

Quien flexiona está aplicando una regla traída de otra lengua. El portugués dice "se eu tiver tempo", y "tiver" es una forma aparte, aprendida en la lista de conjugación del verbo "tener". El japonés resuelve el mismo problema sin tocar el verbo: una partícula delante de él.

El versículo que mejor lo demuestra está en Juan 12:24: 「un grano de trigo, puesto en tierra y no muere, sigue siendo un solo grano; pero si muere, da mucho fruto.」 El mismo verbo aparece dos veces, una vez negado y otra no, y lo que cambia es solo la partícula. El verbo no cambió de forma en ninguno de los dos casos, no porque flexione para el condicional, sino porque nunca flexiona para nada de eso.

## {to}, {nara} y el "si" que es una fecha

La construcción con {to} en tiempo genérico es esta: *haru ni naru to, hana ga saku*, "cuando llega la primavera, las flores se abren". El {to} ocupa el lugar de un "si", y el verbo queda en la forma base. Lo que lo diferencia de {ba} es lo que lleva consigo: tiempo y causa al mismo tiempo, sin pedirle al lector que imagine una hipótesis.

{nara} es la más causal: *jikan ga aru nara, iku*, "si hay tiempo, voy". El {nara} presupone un estado del mundo y de él saca una conclusión, y por eso es la construcción preferida de quien habla.

Y hay un cuarto camino, el {toki}. En *ie ni tsuite toki, taberu*, "cuando llego a casa, como", el {toki} también se lee como un "si", pero es una condición **temporal**, no hipotética. Lo que separa una familia de la otra es el verbo: antes del {toki}, el verbo viene en la forma que no flexiona, y eso es lo que dice que aquello es fecha y no hipótesis.

## La duda y el "no"

La partícula de duda {kashira} significa "si por acaso". La construcción es {toki} más {wa}, más el verbo, más {kashira}: *shinjitai nara toki wa, shokai ga aru kashira*, "si por acaso el mercado estará abierto". Con {nara} la misma idea sale más directa, sin la capa de duda.

Y el "no" del condicional es el punto en que la construcción más cambia. No es el {nai} de siempre. Ese niega un estado: *gakusei* más *aru* es "ser estudiante", y el negativo es *arunai*, "no ser estudiante". En el condicional no se niega un estado: se niega la propia cláusula del "si", y para eso la construcción se reescribe entera.

Hay dos puertas. La primera es el propio negativo más {ba}: *toki ga nakereba iku*, "si no hay tiempo, voy". La segunda nombra la cláusula con {toki} más {wa} y pone el negativo delante: *toki ga nai nara ikenai*, "si no hay tiempo, no voy". Las dos aceptan la misma cláusula entera con el verbo en la forma que liga, y por eso aparece el {toki}: da un nombre a la cláusula, y el negativo se apoya en ese nombre.

El efecto colateral es lo más bonito de aquí. En *jikan ga aru nara ikimasu*, la flexión *ikimasu* está en el verbo del **resultado**, y el {nara} es una partícula de futuridad. El japonés dice "voy, en caso de que haya tiempo" como quien pone la hipótesis en el "si" y la flexión en todo lo demás. La flexión que el portugués pone dentro del verbo se trasladó fuera de él, y eso es lo que la lección del tiempo ya señalaba: el tiempo está hecho de partículas, y el condicional es solo uno más.
`),
  vocab: [
    V('ba', 'ば', 'el "si" más común y más neutro: hipótesis sin carga de causa (ba)'),
    V('nara', 'なら', 'el "si" más causal: "si fuera el caso, y por lo tanto" (nara)'),
    V('to', 'と', 'tiempo genérico: "cuando", "a medida que", con causa incorporada (to)'),
    V(
      'toki',
      '時',
      'tiempo; con el verbo en la forma que no flexiona, es cláusula temporal (toki)',
    ),
    V(
      'toki wa',
      '時',
      'abre la cláusula del "si", dándole nombre para que el negativo se una a ella (toki wa)',
    ),
    V('wa', 'は', 'tópico; aquí marca la cláusula del "si" delante del verbo (wa)'),
    V('kashira', 'かしら', 'partícula de duda: "si por acaso", "quizás" (kashira)'),
    V('nakereba', 'なければ', '"si no": el negativo en la forma que enlaza, más {ba} (nakereba)'),
    V(
      'nai',
      'ない',
      'negativo en la forma base; en el condicional niega la cláusula, no un estado (nai)',
    ),
    V('ga', 'が', 'partícula de sujeto, y aquí el apoyo del negativo (ga)'),
    V('aru', 'ある', 'ser, estar: el verbo cuyo negativo en la lección 7 es *arunai* (aru)'),
    V('tsunagaru', 'つながる', 'estar unido, permanecer unido (tsunagaru)'),
    V('shinuru', '死ぬ', 'morir: el verbo que Juan 12:24 repite en las dos condiciones (shinuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No hay forma condicional del verbo: el "si" es una partícula que va delante de él, y el verbo del "si" no flexiona para nada.',
      ),
    },
    {
      n: '2',
      text: T(
        'Son tres construcciones con tres valores: {ba} es la más neutra, {to} en tiempo genérico es tiempo y causa a la vez, {nara} es la más causal y la más hablada.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con {ba}, el verbo del "si" entra en la forma que enlaza y la partícula se pega a ella: *furi* más {ba} da *fureba*.',
      ),
    },
    {
      n: '4',
      text: T(
        'El "no" del condicional no es el {nai} que niega un estado en la lección 7: niega la cláusula entera, y la construcción se reescribe — negativo más {ba}, o {toki} más {wa} más el negativo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Lo que separa la condición temporal del "si" hipotético es el verbo: antes de {toki} viene en la forma que no flexiona, como en la lección 16.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué flexiona el principiante'),
      text: T(
        'El español dice "si **tuviere** tiempo", y "tuviere" es una forma aparte, aprendida en la lista de conjugación del verbo "tener". El japonés no tiene esa forma ni ninguna otra con ese valor. La señal de que la regla no se aplica es que el verbo de la cláusula siguiente está libre: puede quedar en la forma base o subir a la polida, y el "si" sigue igual.',
      ),
    },
    {
      label: T('La cláusula recibe nombre antes de ser negada'),
      text: T(
        'En el condicional negativo el {toki} no está marcando tiempo: es lo que le da nombre a la cláusula del "si", y es sobre ese nombre donde se apoya el negativo. Es la misma economía de la lección 16, con una partícula haciendo el trabajo de un sintagma entero. Por eso "si no hay tiempo" sale de dos maneras — *toki ga nakereba* o *toki ga nai nara* — y las dos ponen el mismo nombre en el mismo sitio.',
      ),
    },
  ],
  examples: [
    {
      text: '一粒の麦は、地に落ちて死ななければ、一粒のままである。だが、死ねば、多くの実を結ぶ。',
      gloss: T(
        'hitotsubu no mugi wa, chi ni ochite shinakereba, hitotsubu no mama de aru. daga, shinereba, ōku no minori o musubu — el grano, si no muere, sigue siendo uno; pero si muere, da mucho fruto (Juan 12:24)',
      ),
    },
    {
      text: 'ぶどうの枝が、木につながっていなければ、自分では実を結ぶことができない',
      gloss: T(
        'budō no eda ga, ki ni tsunagatte inakereba, jibun de wa minori o musubu koto ga dekinai — si la rama no está unida a la vid, no puede dar fruto por sí misma (Juan 15:4)',
      ),
    },
    {
      text: '自分に罪がないと言うなら、自らを欺いており、真理はわたしたちの内にありません。',
      gloss: T(
        'jibun ni tsumi ga nai to iu nara, jibun o azayuite ori, shinri wa watashitachi no uchi ni arimasen — si decimos que no tenemos pecado, nos engañamos a nosotros mismos (1 Juan 1:8)',
      ),
    },
    {
      text: '天から与えられなければ、人は何も受けることができない。',
      gloss: T(
        'ten kara aware rareba, hito wa nanimo ukeru koto ga dekinai — si no es dado del cielo, el hombre no recibe nada (Juan 3:27)',
      ),
    },
    {
      text: '春になると、花が咲く',
      gloss: T('haru ni naru to, hana ga saku — cuando llega la primavera, las flores se abren'),
    },
  ],
  tables: [
    {
      caption: T('Las tres construcciones del "si", lado a lado'),
      head: [
        T('Construcción'),
        T('Lo que hace el verbo del "si"'),
        T('El valor que lleva'),
        T('Ejemplo'),
      ],
      rows: [
        [
          T('{ba}'),
          T('entra en la forma que enlaza, y {ba} se pega a ella'),
          T('hipótesis neutra, sin causa: la más común'),
          T('{雨が降れば} — "si llueve"'),
        ],
        [
          T('{to}'),
          T('queda en la forma base'),
          T('tiempo genérico: "cuando", con causa incorporada'),
          T('{春になると} — "cuando llega la primavera"'),
        ],
        [
          T('{nara}'),
          T('queda en la forma base'),
          T('la más causal: "si fuera el caso, y por lo tanto"'),
          T('{時間があるなら} — "si hay tiempo"'),
        ],
      ],
    },
    {
      caption: T('Negar el condicional: el "no" reescribe la construcción'),
      head: [T('Lo que quieres decir'), T('Lo que se escribe'), T('Dónde está el "no"')],
      rows: [
        [
          T('si no hay tiempo'),
          T('{toki} {ga} {nakereba}'),
          T('en el negativo de la forma que enlaza, más {ba}'),
        ],
        [
          T('si no hay tiempo, no iré'),
          T('{toki} {ga} {nai} {nara}'),
          T('en el negativo de la forma base, y {nara} abre la condición'),
        ],
        [
          T('si por acaso el mercado está abierto'),
          T('{toki} {wa}, verbo, {kashira}'),
          T('la duda viene después, y no niega nada'),
        ],
      ],
    },
    {
      caption: T('¿Condición temporal o hipótesis? Decide el verbo que va antes del {toki}'),
      head: [T('Lo que va antes del {toki}'), T('Cómo se lee'), T('Ejemplo')],
      rows: [
        [
          T('verbo en la forma que no flexiona'),
          T('cláusula temporal: "cuando"'),
          T('{家に着いた時} — cuando llegué a casa'),
        ],
        [
          T('verbo flexionado'),
          T('descriptivo: "en el momento en que estaba"'),
          T('{着いていた時} — en el momento en que yo llegaba'),
        ],
        [
          T('partícula de posesión en lugar del verbo'),
          T('sustantivo: solo "tiempo"'),
          T('{時の流れ} — el curso del tiempo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {天から与えられなければ} (Juan 3:27), ¿qué marca el condicional?'),
    options: [
      T('una partícula pegada a la forma que enlaza del verbo'),
      T('una forma condicional del verbo, como el "tuviere" del español'),
      T('el verbo flexionado para el pasado'),
      T('la partícula interrogativa que cierra la frase, del tipo *ka*'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el "si" de la construcción neutra: 雨が降____、行く'),
      answer: 'れば',
    },
    {
      kind: 'match',
      prompt: T('Une la construcción con el valor que lleva'),
      pairs: [
        { a: T('{ba}'), b: T('hipótesis neutra: la más común de las tres') },
        { a: T('{to}'), b: T('tiempo genérico: "cuando", con causa incorporada') },
        { a: T('{nara}'), b: T('la más causal, y la más común en el habla') },
        { a: T('{kashira}'), b: T('la duda: "si por acaso"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'El español dice "si tengo tiempo". ¿Por qué el principiante flexiona el verbo en japonés?',
      ),
      options: [
        T(
          'porque busca una forma condicional del verbo que el japonés no tiene: aquí el "si" es una partícula',
        ),
        T(
          'porque en japonés el verbo del "si" flexiona a una forma propia, distinta del resultado',
        ),
        T('porque la partícula {ba} va después del verbo y obliga a flexionarlo'),
        T('porque el verbo del "si" es siempre igual al verbo del resultado'),
      ],
      answer: 0,
    },
  ],
};
