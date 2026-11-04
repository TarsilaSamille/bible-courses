import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Partícula'),
  title: T('{wa} y {ga}: qué es tema y qué es sujeto'),
  subtitle: T(
    'Las dos van después del sustantivo, en la misma posición, y ninguna flexiona; lo que las separa es lo que el lector ya sabe cuando empieza la frase',
  ),
  body: C(`
## Dos partículas, el mismo sitio

El portugués trata igual el tema y el sujeto. En "Pedro vio al gato" no hay nada que diga si Pedro es el tema de la conversación o quien ejecuta el verbo, y el contexto lo resuelve sin dejar rastro. En japonés la distinción existe, vive en una partícula y no sobrevive a la traducción palabra por palabra. {wa} va después del sustantivo y marca tema, aquello de lo que trata la frase. {ga} va después del sustantivo y marca sujeto, quien hace la acción de esa cláusula.

Las dos ocupan exactamente la misma posición, y por eso la posición no dice cuál es cuál. *kare wa iku* y *kare ga iku* tienen las mismas palabras en el mismo orden y producen frases distintas. Ninguna de las dos es artículo, y ninguna flexiona: son las dos marcas que un nombre puede recibir, y un nombre recibe una de ellas cada vez.

## Lo que hace {wa}: tema, contraste, referencia

Tema es lo que el lector ya sabe. En "él va", quien habla ya ha establecido de quién se trata, y lo que la frase entrega es el verbo; {wa} marca la parte que ya estaba ganada, y por eso casi desaparece en la traducción, porque el portugués tampoco tiene palabra para "esto de que estoy tratando".

{wa} hace tres cosas más, y las tres aparecen página tras página en un Evangelio. La primera es el contraste: la misma partícula a los dos lados de dos cláusulas produce "no A, sino B". Juan 1:5 es el ejemplo más limpio, *hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta.*: el {wa} de la segunda cláusula no repite un tema, pone un tema frente al otro, y es la segunda cláusula la que carga con el peso.

La segunda es la referencia. Cuando el nombre ya apareció y la frase vuelve a él, {wa} es lo que llama al lector de vuelta, y una traducción que escribe "en cuanto a esto" está inventando una frase que el japonés no tiene. La tercera es la partícula del "esto es", del "o sea": *kore wa ii koto da to iu koto da*, "esto es lo que significa ser algo bueno", donde {wa} marca el tema de una cláusula que va a explicar el tema de la anterior.

## Lo que hace {ga}: el sujeto que es información nueva

{ga} marca el sujeto de una cláusula, y lo que marca suele ser justamente lo que el lector no tenía: aquello que la frase entrega. En *fuku ga furu*, "llueve", el portugués no necesita sujeto porque en portugués llover no tiene quien lo llueva; en japonés la lluvia es un nombre, y un nombre necesita partícula como cualquier otro.

La regla práctica cabe en una frase: si el nombre es aquello de lo que ya trata la conversación, lleva {wa}; si el nombre es aquello que la cláusula está afirmando ahora, lleva {ga}. Los dos casos aparecen en el mismo párrafo, y quien los separa es lo que se dijo antes, no la frase de la página. En Juan 3:19, *hikari ga yo ni kite iru no ni*, el {ga} está sobre quien hace la acción precisamente porque la luz es el tema nuevo de la cláusula, y la segunda cláusula de la misma línea ya pasa a hablar de las personas con {wa}.

## Cuando las dos entran en la misma cláusula

Una cláusula puede tener tema y sujeto a la vez, y entonces hay dos partículas en dos posiciones. *Mado wa soto ga kakoyō*, "la ventana está ruidosa afuera": {wa} marca la ventana, que es el tema, y {ga} marca lo que está ruidoso, que es la información. *Sono hon wa dare ga yomimashita ka*, "quién leyó aquel libro", hace lo mismo con un interrogativo en el {ga}.

La segunda situación invierte el par y es la más útil en un texto bíblico: en la pasiva, quien sufre la acción pasa a tema con {wa} y quien la hace pasa a sujeto con {ga}. *Kami ga hito o yobutta* es " Dios envió al hombre"; *hito wa kami ga yoborareta* es la misma frase con los papeles cambiados, y el nombre que era sujeto pasó a ser tema. Juan 1:6 usa la segunda forma: *kami yobarusareta Yohane to iu hito ga arawareta*, y quien traduce tiene que decidir, sin salida, cuál de los dos nombres de la versión japonesa es el tema de la cláusula.

La tercera es el verbo de existir, {aru} e {iru}, que es el caso en que {wa} está sencillamente equivocado. "Tengo un amigo" es *tomodachi ga imasu*, y el {ga} no marca un sujeto de la conversación: marca la cosa que existe. Lo mismo vale para *kuruma ga arimasu*, el coche está aquí. Con verbo de existir, lo que existe lleva {ga}, y escribir {wa} produce una frase que un lector nativo lee como equivocada, aunque el sentido quede entero.

Y hay un cuarto caso, el más corto de todos: el verbo de ser. *Shu wa kami desu*, "el Señor es Dios", lleva {wa} y no lleva {ga}, porque lo que la cláusula afirma es la identidad del propio tema. Son cuatro situaciones, y las cuatro dan el mismo consejo: la partícula del nombre no se elige por el sentido de la frase, se elige por lo que esa cláusula le hace a ese nombre.
`),
  vocab: [
    V(
      'wa',
      'は',
      'tema: lo que el lector ya sabe y de lo que trata la frase; entre varias cláusulas, contraste (wa)',
    ),
    V(
      'ga',
      'が',
      'sujeto: quien hace la acción de la cláusula, y la información que la frase entrega (ga)',
    ),
    V('fuku', '降る', 'caer; la lluvia, como sustantivo: *fuku ga furu* (fuku)'),
    V('yami', '闇', 'oscuridad, tiniebla (yami)'),
    V('hikari', '光', 'luz (hikari)'),
    V('kotoba', 'ことば', 'palabra; el sustantivo de Juan 1:1 (kotoba)'),
    V('kami', '神', 'Dios; y, en compuestos, la raíz de todo lo que es de Dios (kami)'),
    V('sono', 'その', 'ese; el demostrativo que apunta a lo ya mencionado (sono)'),
    V('dare', '誰', 'quién; interrogativo que entra en {ga} (dare)'),
    V('mado', '窓', 'ventana (mado)'),
    V('soto', '外', 'afuera; el lado de fuera, y "fuera de" (soto)'),
    V('yobaru', '現われる', 'aparecer, estar presente; el verbo de Juan 1:6 (yobaru)'),
    V('okuru', '送る', 'enviar; el verbo del ejemplo de la pasiva (okuru)'),
    V('tomodachi', '友', 'amigo, compañero (tomodachi)'),
    V('aru', 'ある', 'haber, existir: el verbo que nunca acepta {wa} en el nombre (aru)'),
    V('iru', 'いる', 'estar, ocupar un lugar; y existir, cuando lo que existe es gente (iru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{wa} y {ga} van después del sustantivo, en la misma posición, y ninguna de las dos es artículo ni flexiona. Un nombre recibe una de ellas cada vez.',
      ),
    },
    {
      n: '2',
      text: T(
        '{wa} marca el tema, que es lo que el lector ya sabe; {ga} marca el sujeto, que es la información nueva de la cláusula. Lo que decide es lo que se dijo antes, no la frase que tienes delante.',
      ),
    },
    {
      n: '3',
      text: T(
        '{wa} en dos cláusulas hace contraste, y así es como Juan 1:5 pone luz y tiniebla una al lado de la otra.',
      ),
    },
    {
      n: '4',
      text: T(
        'En la pasiva el paciente lleva {wa} y el agente lleva {ga}: *sono hito wa kami ga okutta*. Es la inversión que el portugués no tiene.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con {aru} e {iru} lo que existe lleva {ga}: *tomodachi ga imasu*, *kuruma ga arimasen*. Con el verbo de ser, el sujeto lleva {wa}: *shu wa kami desu*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el principiante escribe {ga} en todo'),
      text: T(
        'Quien traduce del portugués busca el sujeto de la cláusula, encuentra {ga}, y la frase sale bien tres cuartas partes de las veces, porque en portugués casi todo verbo tiene sujeto explícito. Lo que delata el exceso es la palabra siguiente: si el nombre ya apareció en la cláusula anterior, lo que casi siempre recibe es {wa}, porque el tema en cuestión es el mismo. Regla de lectura: si la línea japonesa repite un sustantivo que la línea anterior ya tenía, la partícula es {wa}; si trae un sustantivo que el lector no esperaba, es {ga}.',
      ),
    },
    {
      label: T('Un nombre recibe una sola partícula por cláusula'),
      text: T(
        'En *hon to notebook ga arimasu*, "tengo un libro y un cuaderno", los dos nombres están ahí y hay un único {ga}, al final. La partícula cierra la lista de nombres, y quien escribe *hon ga, notebook ga* está haciendo dos cláusulas que el japonés no tenía. Es la misma economía de la partícula {no}, que enlaza sin repetir: lo que se repite en japonés es la estructura, no la marca.',
      ),
    },
  ],
  examples: [
    {
      text: '光はやみの中に輝いている。やみはこれに打ち勝たなかった。',
      gloss: T(
        'hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta. — la luz brilla en la oscuridad, y la oscuridad no la venció (Juan 1:5): los dos {wa} marcan temas que se oponen',
      ),
    },
    {
      text: '初めに、ことばがあった。ことばは神とともにあった。',
      gloss: T(
        'hazime ni, kotoba ga atta. kotoba wa kami to tomoni atta. — en el principio había la palabra; la palabra estaba con Dios (Juan 1:1-2): el mismo nombre, dos partículas',
      ),
    },
    {
      text: '神から遣わされたヨハネという人が現われた',
      gloss: T(
        'kami yobarusareta Yohane to iu hito ga arawareta — apareció un hombre llamado Juan, enviado por Dios (Juan 1:6): {kami} es quien envía, {hito} es quien aparece',
      ),
    },
    {
      text: 'その本は誰が読みましたか。',
      gloss: T(
        'sono hon wa dare ga yomimashita ka — quién leyó aquel libro (el libro es el tema, y el interrogativo es el sujeto)',
      ),
    },
    {
      text: '窓は外が騒がしい',
      gloss: T(
        'mado wa soto ga kakoyō — la ventana está ruidosa afuera (tema y sujeto en la misma cláusula)',
      ),
    },
    {
      text: '友達がいます。',
      gloss: T(
        'tomodachi ga imasu — tengo un amigo (con el verbo de existir, {wa} está equivocado)',
      ),
    },
    {
      text: '主は神です。',
      gloss: T('shu wa kami desu — el Señor es Dios (el verbo de ser toma el tema, no el sujeto)'),
    },
    {
      text: 'その人は神が遣わした。',
      gloss: T(
        'sono hito wa kami ga okutta — aquella persona fue enviada por Dios (pasiva: {wa} en el paciente, {ga} en el agente)',
      ),
    },
  ],
  tables: [
    {
      caption: T('El mismo nombre con {wa} y con {ga}: lo que cambia es lo que el lector ya sabe'),
      head: [T('Lo que quieres decir'), T('Lo que se escribe'), T('Lo que sabe el lector')],
      rows: [
        [T('en cuanto a él, va'), T('{kare wa iku}'), T('de quién se trata: ya era tema')],
        [T('fue él'), T('{kare ga iku}'), T('quién lo hizo: es la información de la frase')],
        [
          T('no el padre, sino el hijo'),
          T('{chichi wa …, musuko wa …}'),
          T('dos temas opuestos, y la segunda cláusula gana'),
        ],
        [
          T('él tiene un libro'),
          T('{kare ni hon ga aru}'),
          T('quién lo tiene es lo que se afirma: {ga} por {aru}'),
        ],
        [
          T('cuando llegó el que llegó, quién'),
          T('{dare ga kita ka}'),
          T('el nombre es nuevo, y por eso viene en {ga}'),
        ],
      ],
    },
    {
      caption: T('Las cuatro situaciones en que las dos entran en la misma cláusula'),
      head: [T('La frase'), T('Qué lleva {wa}'), T('Qué lleva {ga}'), T('Por qué')],
      rows: [
        [
          T('{mado wa soto ga kakoyō}'),
          T('la ventana'),
          T('lo que está ruidoso'),
          T('tema, y la información nueva'),
        ],
        [
          T('{sono hon wa dare ga yomimashita ka}'),
          T('el libro'),
          T('quién, interrogativo'),
          T('el foco de la pregunta es el {ga}'),
        ],
        [
          T('{shu wa kami desu}'),
          T('el Señor'),
          T('nada'),
          T('el verbo de ser no tiene sujeto propio'),
        ],
        [
          T('{sono hito wa kami ga okutta}'),
          T('aquella persona, que sufre'),
          T('Dios, que hace'),
          T('la pasiva intercambia los dos papeles'),
        ],
        [
          T('{tomodachi ga imasu}'),
          T('nada'),
          T('el amigo'),
          T('con {iru}, lo que existe es sujeto y no tema'),
        ],
      ],
    },
    {
      caption: T('La misma información, las dos partículas, y lo que cambia en portugués'),
      head: [T('Portugués'), T('Japonés'), T('Si el nombre es el mismo, cambia')],
      rows: [
        [
          T('Pedro fue a la iglesia'),
          T('{kare wa kyōkai e iki}, cuando ya se sabe de quién se trata'),
          T('la partícula desaparece: el portugués no marca tema'),
        ],
        [
          T('Pedro fue a la iglesia'),
          T('{kare ga kyōkai e iki}, cuando es información nueva'),
          T('el nombre recibe {ga} y pasa a ser sujeto'),
        ],
        [
          T('Pedro llegó tarde'),
          T('{kare wa osoi} o {kare ga osoi}'),
          T('las dos son posibles; decide la cláusula anterior'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {友達がいます}, ¿por qué el nombre recibe {ga} y no {wa}?'),
    options: [
      T('porque {iru} es el verbo de existir, y lo que existe entra como sujeto, no como tema'),
      T('porque el nombre está al final de la frase y {wa} nunca aparece al final'),
      T('porque {ga} es la partícula del objeto y {wa} es la de lugar'),
      T('porque el portugués dice "tengo un amigo" y la traducción obliga a cambiar el nombre'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa con la partícula de sujeto del verbo de existir: 友達____います (tengo un amigo)',
      ),
      answer: 'が',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que marca'),
      pairs: [
        { a: T('{wa}'), b: T('el tema: lo que el lector ya sabe y de lo que trata la frase') },
        { a: T('{ga}'), b: T('el sujeto: quien hace la acción y lo que la frase afirma') },
        {
          a: T('{sono hito wa kami ga okutta}'),
          b: T('la pasiva: el paciente en {wa}, el agente en {ga}'),
        },
        { a: T('{tomodachi ga imasu}'), b: T('el verbo de existir: lo que existe entra en {ga}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Lees dos líneas seguidas y el mismo nombre aparece en las dos. En la segunda línea, ¿qué partícula es más probable?',
      ),
      options: [
        T('{wa}, porque el nombre ya era tema y la línea nueva vuelve a él'),
        T('{ga}, porque la segunda línea empieza una cláusula nueva y trae información nueva'),
        T('ninguna, porque un nombre no puede llevar partícula dos veces'),
        T('{ga}, porque la traducción portuguesa pone el sujeto otra vez en cada cláusula'),
      ],
      answer: 0,
    },
  ],
};
