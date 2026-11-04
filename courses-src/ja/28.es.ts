import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Partícula'),
  title: T(
    '{de}, {to}, {mo}, {kara}, {made} y {yori}: dónde ocurre, con quién, y de dónde a dónde',
  ),
  subtitle: T(
    'Seis partículas que nunca aparecen solas: todas van después de un nombre o al final de una cláusula, y la de {kara} cambia de sentido según el sitio que ocupa en la frase',
  ),
  body: C(`
## {de}: dónde ocurre, y con qué se hace

{de} va después del nombre y dice dónde. *Kare wa {koya} de baputema o ukutta*, "bautizó en el desierto", es el ejemplo más limpio: el nombre que va después de {de} es el lugar donde ocurre la acción, y el nombre de antes es el lugar de donde viene. El mismo {de} rechaza una pregunta que el portugués hace y el japonés no: *tomodachi ni {au}*, "encuentro a un amigo", lleva {ni} y no {de}, porque un encuentro no tiene lugar fijo. Donde ocurre la acción hay {de}; a quién, o con quién, hay otra partícula.

{de} también dice con qué. *Kin, gin, {hōseki}, ki, {kusa}, wara nado de tateru nara*, "si alguien construye con oro, plata, piedra precious, madera, hierba y paja", en 1 Corintios 3:12, tiene seis materiales y un solo {de} al final: es lo que cierra la lista, el mismo trabajo que hace la partícula con la lista de nombres en el verbo de existir. Y hay un tercer uso, que es el estado: *genki de iru*, "estar con salud". En el texto bíblico, con sentido de causa, el {de} es raro, porque ese trabajo lo hace {tame} y la partícula que cierra la cláusula.

## {to} y {mo}: con quién, y también

{to} después de dos personas significa "con", compañía. *Mose to Eriya ga arawarete*, "aparecieron Moisés y Elías", en Mateo 17:3, es la frase entera: dos nombres, una partícula en medio, y el verbo al final.

La misma sílaba hace otros dos trabajos en japonés, y es la trampa más cara del curso. En *haru ni naru to, hana ga saku*, el {to} es "cuando"; en *「watashi wa iku」 to iutta*, es la partícula que abre y cierra la cita. En los tres casos la posición es la misma, y lo que cambia es el verbo que viene antes. Con compañía, el {to} va justo después del segundo nombre; por eso, en un trozo con dos nombres seguidos, quien lee tiene que decidir deprisa si lo que viene después es un verbo de decir, un verbo en tiempo genérico o más gente.

{mo} es "**también**", y entra después de nombre tras nombre. 1 Corintios 12:13 es la frase más densa del Nuevo Testamento en este punto: *Yudaya mo Girisha mo, doreki mo jiyū mo*, "judío, griego, esclavo, libre". Hay cuatro {mo} y cuatro nombres, y lo que hacen es decir que nadie queda fuera de la lista. El mismo {mo} con el negativo se vuelve "ni siquiera": en 1 Corintios 12:21 el ojo dice *watashi wa anata o hitsuyō to shinai*, "no tengo necesidad de ti", y el cuerpo entero añade enseguida que los miembros más débiles son los más necesarios, y es la negación la que produce la inversión.

## {kara} y {made}: la línea del tiempo

{kara} dice dónde empieza la línea. *Ten no kihaj kara, ima made*, "desde el principio de la creación hasta ahora", en Marcos 13:19, tiene las dos partículas pegadas a un solo sustantivo: {kara} abre el intervalo, {made} lo cierra, y ninguna de las dos repite el sustantivo. Es la construcción más económica del japonés escrito, y la más común en Marcos y en Mateo.

{made} solo es el límite, y traduce el "hasta" del portugués. *{Mizu} no naka made {fukumaru}*, "se hundió en el agua": el {made} dice hasta dónde llegó el verbo, y el nombre puede ser lugar, tiempo o medida, como en *yon-jikan made*, "hasta las cuatro". El japonés no tiene una palabra aparte para "hasta", y la partícula hace ese trabajo con las tres cosas a la vez.

El par es lo que produce la lectura: donde empieza {kara} y donde acaba {made}, todo lo que está entre las dos es aquello que la frase está describiendo, sea un tramo de fechas, un camino recorrido por quien {iku}, o el final de una espera.

## {yori}: la comparación, y las tres lecturas de {kara}

{yori} es el "que" de la comparación. *Abelu wa Kain yori subureta ikeze o {sasageru}*, "Abel ofreció un sacrificio mejor que el de Caín", en Hebreus 11:4: el nombre va primero, {yori} después, y lo que va después de {yori} es aquello con lo que se compara. Con el {sugiru} la comparación se vuelve más directa, *kain yori mo yowai*, "más viejo que Caín". Es la partícula más fácil de las trece: si hay {yori} después de dos nombres, el primero es el término de comparación y el segundo es el patrón.

La excepción es {kara}, y es lo que más tropieza en la lectura bíblica. {kara} tiene **tres lecturas**, y la posición decide cuál. Pegado a un nombre, es origen: *kami kara yobausareta*, "enviado por Dios", que es como Juan 1:6 abre su relato, y que el portugués traduce con un "por" que en japonés no existe. Pegado a un nombre de tiempo, es comienzo de intervalo: *ten no kihaj kara*, "desde la creación". Al final de la cláusula, después del verbo, es causa: *shikashi ware-tachi wa mada wakaranai kara da*, "porque todavía no entendemos". Las dos últimas se escriben exactamente igual, y la posición es lo que dice si el texto está marcando de dónde viene algo o por qué ocurre algo.

Y hay un cuarto caso, el más fácil de todos y el más útil al leer: {kara} en el sentido de origen material, "de". *Ariamaru naka kara* es "de lo que sobró", y es la palabra que Marcos 12:44 usa dos veces en el mismo versículo, una para lo que sobraba y otra para lo que faltaba. En un texto que habla de dinero y ofrendas, {kara} es la palabra que más aparece, y las dos veces el sentido es el mismo.
`),
  vocab: [
    V(
      'de',
      'で',
      'lugar donde ocurre la acción, medio, materia y estado: responde "dónde" y "con qué" (de)',
    ),
    V(
      'to',
      'と',
      'compañía: "con", después del nombre de dos personas; la misma sílaba es "cuando" y es la partícula de la cita (to)',
    ),
    V(
      'mo',
      'も',
      '"también": va después del nombre, y con el negativo se vuelve "ni siquiera" (mo)',
    ),
    V('kara', 'から', 'origen y comienzo de intervalo; al final de la cláusula, "porque" (kara)'),
    V('made', 'まで', 'límite: "hasta", con sustantivo de lugar, de tiempo o de medida (made)'),
    V('yori', 'より', 'comparación: "que", después del nombre del término de comparación (yori)'),
    V('koya', '荒野', 'desierto, lugar yermo y vacío (koya)'),
    V('hōseki', '宝石', 'piedra preciosa (hōseki)'),
    V('kusa', '草', 'hierba, maleza (kusa)'),
    V('Mizu', '水', 'agua (Mizu)'),
    V('sasageru', 'ささげる', 'ofrecer, presentar al otro; el verbo de Hebreus 11:4 (sasageru)'),
    V('iku', '行く', 'ir; con {kara} y {made} forma el intervalo (iku)'),
    V('fukumaru', '沈む', 'hundirse, sumergirse; el verbo del ejemplo de {made} (fukumaru)'),
    V('au', '会う', 'encontrarse con; encontrar a alguien lleva {ni}, nunca {de} (au)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{de} dice dónde ocurre la acción y con qué se hace. En el texto bíblico el sentido de causa es raro: ese trabajo lo hacen {tame} y la partícula que cierra la cláusula.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} entre dos nombres es compañía. La misma sílaba es "cuando" en el tiempo genérico y es la partícula que abre y cierra la cita, y lo que separa los tres es el verbo que viene delante.',
      ),
    },
    {
      n: '3',
      text: T(
        '{mo} significa "también" y va después de cada nombre de la lista. Con el negativo, {mo} significa "ni siquiera": *mō … nai*.',
      ),
    },
    {
      n: '4',
      text: T(
        '{kara} {made} es un intervalo cerrado, y ninguna de las dos partículas repite el sustantivo: *ten no kihaj kara, ima made*.',
      ),
    },
    {
      n: '5',
      text: T(
        '{kara} al final de la cláusula, después del verbo, es causa: *ware-tachi ga mada wakaranai kara da*. Ahí es donde el texto bíblico escribe el "porque" de la frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('La partícula que cierra la lista'),
      text: T(
        'Tres construcciones del curso usan la misma economía, y vale verlas juntas: {hon to notebook ga arimasu} pone un {ga} al final de una lista de nombres; *kin, gin, {hōseki}, ki, {kusa}, wara nado de tateru nara* pone un {de} al final de una lista de materiales; y *Yudaya mo Girisha mo, doreki mo jiyū mo* pone un {mo} después de cada nombre de la lista. El japonés no repite la marca en cada elemento cuando la lista es larga, y lo que marca la lista como lista es la partícula del final.',
      ),
    },
    {
      label: T('Cómo el griego dejó huella en el {kara}'),
      text: T(
        'La partícula de causa al final de la cláusula es una costumbre griega que el traductor japonés conservó: en griego "porque" es una palabra que abre la cláusula, y en japonés se volvió una partícula que la cierra. El resultado es una frase en la que la causa llega al final, y es la segunda lectura del {kara} la que más confunde a quien viene del portugués. La prueba es sencilla: si la cláusula ya tiene verbo y flexión, y después viene el {kara} solo, es causa.',
      ),
    },
  ],
  examples: [
    {
      text: 'バプテスマのヨハネが荒野に現われて',
      gloss: T(
        'baputema no Yohane ga koya de arawarete — Juan el bautista apareció en el desierto (Marcos 1:4): {de} es el lugar donde ocurre la acción',
      ),
    },
    {
      text: 'もし、だれかがこの土台の上に、金、銀、宝石、木、草、わらなどで建てるなら',
      gloss: T(
        'moshi, dare ka ga kono dote no ue ni, kin, gin, hōseki, ki, kusa, wara nado de tateru nara — si alguien construye sobre este fundamento con oro, plata, piedra, madera, hierba y paja (1 Corintios 3:12): seis materiales, un {de}',
      ),
    },
    {
      text: 'しかも、モーセとエリヤが現われてイエスと話し合っているではないか。',
      gloss: T(
        'shikamo, Mōse to Eriya ga arawarete Yesu to hanashatte iru ja nai ka — ¿no son Moisés y Elías apareciendo y hablando con Jesús (Mateo 17:3)? dos {to} en el mismo trozo, con valores distintos',
      ),
    },
    {
      text: 'なぜなら、私たちはみな、ユダヤ人もギリシヤ人も、奴隷も自由人も、一つのからだとなるように',
      gloss: T(
        'narawēru to wa, ware-tachi wa mina, Yudaya mo Girisha mo, doreki mo jiyū mo, hitotsu no karada to naru yō ni — pues todos nosotros, judío, griego, esclavo, libre, para formar un solo cuerpo (1 Corintios 12:13): cuatro {mo}, y nadie queda fuera',
      ),
    },
    {
      text: 'その日は、神が天地を創造された初めから、今に至るまで、いまだかつてなかったような',
      gloss: T(
        'sono hi wa, kami ga ten to chi o zōse sareta kihaj kara, ima made, imada kattette nai yō na — aquel día, desde el principio de la creación hasta ahora, como nunca hubo (Marcos 13:19): {kara} y {made} sobre un solo sustantivo',
      ),
    },
    {
      text: '信仰によって、アベルはカインよりもすぐれたいけにえを神にささげた',
      gloss: T(
        'shinkō yotte, Abel wa Kain yori subureta ikeze o kami ni sasageta — por la fe, Abel ofreció a Dios un sacrificio mejor que el de Caín (Hebreus 11:4): el {yori} separa el término de comparación del patrón',
      ),
    },
    {
      text: '私たちは愛しています。神がまず私たちを愛してくださったからです。',
      gloss: T(
        'ware-tachi wa aishiteimasu. kami ga mazu ware-tachi o aishite kudasatta kara desu — nosotros amamos, porque Dios nos amó primero (1 Juan 4:19): el {kara} al final de la cláusula es causa',
      ),
    },
    {
      text: 'みなは、あり余る中から投げ入れたのに、この女は、乏しい中から、あるだけを全部',
      gloss: T(
        'mina wa, ariamaru naka kara nage ireta no ni, kono onna wa, toshi naka kara, aru dake o zenzen — todos echaron de lo que sobraba, pero esta mujer echó de lo que le faltaba, todo lo que tenía (Marcos 12:44): {kara} como origen material',
      ),
    },
  ],
  tables: [
    {
      caption: T('{de} y el nombre que va después de él'),
      head: [T('Qué es el nombre'), T('La frase'), T('Qué hace el portugués con ella')],
      rows: [
        [
          T('lugar donde ocurre la acción'),
          T('*koya de baputema o ukutta*'),
          T('"bautizó en el desierto": el portugués pone el lugar en el verbo'),
        ],
        [
          T('medio, instrumento o materia'),
          T('*kin, gin, hōseki nado de tateru*'),
          T('"construyó con oro y plata": el {de} cierra la lista de materiales'),
        ],
        [
          T('estado'),
          T('*genki de iru*'),
          T('"estar con salud": el {de} liga el sustantivo al verbo de estar'),
        ],
        [
          T('quien actúa, sin pasiva'),
          T('*kami kara yobausareta*'),
          T('"enviado por Dios": el origen de donde vino la acción'),
        ],
        [
          T('causa'),
          T('*byōin de yasumu*'),
          T('"faltar por la enfermedad": uso del habla, raro en la traducción bíblica'),
        ],
      ],
    },
    {
      caption: T('La misma sílaba {to} en tres sitios, decide el verbo'),
      head: [T('El {to} es'), T('La frase'), T('Lo que viene antes')],
      rows: [
        [
          T('compañía'),
          T('*Mose to Eriya ga arawarete*'),
          T('dos nombres, un sustantivo y otro: el primer nombre'),
        ],
        [
          T('"cuando", en tiempo genérico'),
          T('*haru ni naru to, hana ga saku*'),
          T('cualquier verbo: el tiempo genérico cierra en él'),
        ],
        [
          T('cita'),
          T('*「watashi wa iku」 to iutta*'),
          T('lo que ya se ha dicho: el nombre y el pronombre dentro del habla'),
        ],
      ],
    },
    {
      caption: T(
        '{kara}, {made} y {yori}: las tres respuestas a de dónde, hasta dónde y comparado con quién',
      ),
      head: [T('La pregunta'), T('La partícula'), T('La frase'), T('Dónde aparece')],
      rows: [
        [
          T('de dónde'),
          T('{kara}'),
          T('*ten no kihaj kara*'),
          T('Marcos 13:19: comienzo del intervalo'),
        ],
        [
          T('hasta dónde'),
          T('{made}'),
          T('*ima made*'),
          T('Marcos 13:19: el fin del mismo intervalo'),
        ],
        [
          T('de dónde, como causa'),
          T('{kara}'),
          T('*mada wakaranai kara da*'),
          T('al final de la cláusula, después del verbo'),
        ],
        [
          T('de dónde, como materia'),
          T('{kara}'),
          T('*ariamaru naka kara*'),
          T('Marcos 12:44: "de lo que sobró"'),
        ],
        [
          T('comparado con qué'),
          T('{yori}'),
          T('*Kain yori subureta*'),
          T('Hebreus 11:4: "mejor que Caín"'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En {私たちは愛しています。神がまず私たちを愛してくださったからです。}, ¿qué está haciendo el {kara}?',
    ),
    options: [
      T('marcando causa: está al final de la cláusula, después del verbo, y vale "porque"'),
      T('marcando origen: la línea de quien ama empieza en quien amó primero'),
      T('marcando comparación: "amamos más de lo que amó Dios"'),
      T('marcando un límite: la frase termina donde termina el amor de Dios'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa el intervalo de Marcos 13:19: 神が天地を創造された初め____、今____ (desde la creación hasta ahora)',
      ),
      answer: 'から、まで',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que marca'),
      pairs: [
        { a: T('{de}'), b: T('el lugar donde ocurre la acción, y el medio con que se hace') },
        { a: T('{mo}'), b: T('"también", y "ni siquiera" cuando el verbo está en negativo') },
        {
          a: T('{kara}'),
          b: T('origen, comienzo de intervalo y, al final de una cláusula, causa'),
        },
        { a: T('{yori}'), b: T('comparación: el nombre que va después es el patrón de la medida') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Lees *"Mose to Eriya ga arawarete"* y después *"haru ni naru to, hana ga saku"*. ¿Qué hace que el primer {to} sea compañía y el segundo sea "cuando"?',
      ),
      options: [
        T(
          'lo que viene antes: en el primero hay dos nombres y en el segundo hay un verbo en tiempo genérico',
        ),
        T('la posición en la frase: el primero está en medio y el segundo está al final'),
        T(
          'el sustantivo que viene después: en el primero un nombre de persona y en el segundo un sustantivo común',
        ),
        T('la caligrafía: el texto japonés escribe uno en kana y el otro en ideogramas'),
      ],
      answer: 0,
    },
  ],
};
