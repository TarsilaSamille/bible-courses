import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Adverbio'),
  title: T('{mada} y {mou}: "todavía" y "ya", y lo que cambia cuando la frase se vuelve negativa'),
  subtitle: T(
    'Los dos adverbios que más hacen tropezar a quien lee son los que el portugués resuelve con una sola palabra; en japonés son dos, y es la negación la que dice cuál de los dos está en la frase',
  ),
  body: C(`
## El adverbio va después del verbo, y no flexiona

Un adverbio japonés no flexiona, no tiene forma negativa propia y no pide nada detrás de sí. *Hayaku sugimasu*, "es demasiado rápido"; *mizu ga takusan atsui*, "el agua está muy caliente". En ninguno de los dos hay ninguna marca después del adverbio, y esa falta de marca es lo que deja al japonés apilar dos o tres adverbios sin ambigüedad.

La posición es lo que cobra. El adverbio va **después** de la forma verbal y nunca antes, que es lo contrario del mandarín, donde la frecuencia abre el verbo. En *ashita wa mainichi izakaya e ikimasu*, "mañana voy al bar todos los días", el adverbio de frecuencia está entre la forma verbal y la partícula final. Quien viene del portugués escribe "mañana yo voy todos los días al bar", que es una frase que cualquier japonés entiende y nadie escribe como se escribe en japonés.

## {mada} y {mou}: los dos que el portugués no distingue

{mada} es "todavía" y {mou} es "**ya**". Los dos van después del verbo, los dos son una sílaba, y ninguno flexiona. En *ima made mada mikanai*, "todavía no lo he visto hasta ahora", el {mada} dice que el estado sigue; en *ima {mou} kita*, "ya he venido", el {mou} dice que el estado ha llegado.

{mou} tiene además un tercer trabajo, y es el que más engaña: dentro de *mou ichido*, "otra vez", la segunda mitad de la expresión significa "una vez" y no "ya". En Juan 3:4, *mou ichido, haru no uta ni hairu koto ga dekimasu ka*, "¿se puede nacer otra vez?", la misma sílaba aparece con el sentido de repetición. Quien traduce "otra vez" por "ya" produce una frase que no significa nada.

Y hay un cuarto: en la escritura, {mou} se vuelve otra palabra. En Hebreus 11:5, *Sara mo, {sudeni} sono nen o sugita mi no han'i de aru noni*, "Sara también, ya having pasado esa edad", el adverbio está escrito {sudeni}, y el lector que sólo conoce {mou} no lo reconoce. Con *totemo* pasa lo mismo, y la forma escrita es *makoto*, que Mateo 24:33 usa en "cierdamente os digo". El japonés escrito tiene una forma larga para los dos adverbios más comunes de la lengua, y no se parece a la que aparece en el habla.

## Cuando la frase se vuelve negativa

Aquí está el punto que más confunde, y cabe en dos líneas. En frase positiva, {mada} es "todavía" y {mou} es "ya". En frase negativa, los dos dicen lo mismo dado la vuelta: {mada} más negativo es "todavía no", {mou} más negativo es "ya no".

*Ware-tachi wa mada shinjiteimasen*, "todavía no podemos creer", es {mada} con un verbo negativo ({shinjiru}, creer, en la forma que niega), y la traducción más fiel no es "todavía no creemos": el {mada} cubre el verbo entero, y por eso el negativo va antes que él en vez de pegado al final. La misma frase con {mou}, *mou shinjiteimasen*, dice otra cosa: "ya no creemos", y el estado ha cambiado, alguien que creía ha dejado de creer. Las dos usan la misma construcción negativa y dicen lo contrario una de la otra.

El otro caso es el más común y el más fácil de errar. *Sensei ni wa mada hanashiteimasen*, "todavía no he hablado con el profesor", pone el {mada} delante de un verbo en la forma {teimasen}: el adverbio va antes de toda la negación. *Mada mitemasen*, "todavía no lo he visto", pone el {mada} delante de un {nai}: el adverbio va antes de un adjetivo negativo. Son dos construcciones distintas, y el portugués tiene una palabra para cada una; el japonés decide por la posición, y quien traduce del portugués le entrega al lector una de las dos sin notar que la otra existe.

Y hay un tercer adverbio, que sólo aparece con negativo y es el más enfático de los tres. *Sensei wa mada madara kaettekoi*, "el profesor no volverá de ninguna manera": el {mada} aquí ya no marca tiempo, marca certeza, y el negativo que viene con él es *mai*, que no existe como palabra; el verbo {kaeru} reaparece ahí en forma negativa. Quien traduce "todavía no volverá" con esa frase añade una certeza que el japonés está afirmando y la traducción al portugués no.

## Los adverbios de cantidad, y la forma que prefiere la escritura

{totemo} es "muy", {sukoshi} es "un poco", {takusan} es "mucho, muchos", {sugu} es "enseguida", {yoku} es "bien, a menudo". Ninguno flexiona, y todos se comportan como adverbio: después de la forma verbal. Lo que hace cada uno es modificar, y {takusan} es el único que también puede quedar delante de un sustantivo, como en *takusan no hito*, "mucha gente", a causa de {subete}, "todo", que es la palabra de cantidad que está detrás de él.

{sugu} y {yoku} enseñan la otra cara: los dos sólo admiten verbo, y es el verbo el que dice si el adverbio habla de tiempo o de costumbre. *Sugu kuru*, "venir enseguida", y *yoku yobu*, "llamar a menudo", tienen la misma forma y no tienen nada en común, y quien traduce sin mirar el verbo le entrega al lector un "enseguida" donde había un "a menudo".

El texto bíblico usa {takusan} al lado del verbo, y ahí es donde compara: en Marcos 12:43, *kono katsu {yobime} wa, sono dare yori mo {takusan} ireta*, "esta pobre viuda puso más que cualquiera de los otros", el adverbio está pegado al verbo, y es él quien hace la comparación con el {yori} que viene justo antes. Un adverbio de cantidad que modifica un verbo mide; el mismo adverbio delante de un sustantivo cuenta. Son dos trabajos, y lo que los separa es la posición.
`),
  vocab: [
    V('mada', 'まだ', '"todavía": el estado sigue; con el negativo, "todavía no" (mada)'),
    V(
      'mou',
      'もう',
      '"ya": el estado ha llegado; con el negativo, "ya no", y en *mou ichido*, "otra vez" (mou)',
    ),
    V('sudeni', 'すでに', 'ya; la forma escrita de {mou} (sudeni)'),
    V('totemo', 'とても', 'muy; adverbio neutro, después de la forma verbal (totemo)'),
    V('takusan', 'たくさん', 'mucho, muchos; cuantifica nombre y verbo (takusan)'),
    V('sukoshi', '少し', 'un poco; con el negativo, "no llega a ser" (sukoshi)'),
    V('sugu', 'すぐ', 'enseguida, inmediatamente (sugu)'),
    V('yoku', 'よく', 'bien, a menudo; y "querer demasiado" cuando se vuelve verbo (yoku)'),
    V('subete', 'すべて', 'todo, todo; la palabra de cantidad detrás de {takusan} (subete)'),
    V('kaeru', '帰る', 'volver, volver a casa; el verbo de Mateo 24:48 (kaeru)'),
    V('shinjiru', '信じる', 'creer; el verbo de los dos ejemplos de {mada} y de {mou} (shinjiru)'),
    V('yobime', 'やもめ', 'viuda; el sujeto de Marcos 12:43 (yobime)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un adverbio japonés no flexiona, no tiene negativo propio y va después de la forma verbal, nunca antes.',
      ),
    },
    {
      n: '2',
      text: T(
        '{mada} es "todavía" y {mou} es "ya"; la misma sílaba de {mou} dentro de *mou ichido* significa "otra vez", y en la escritura {mou} se vuelve {sudeni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'En la frase negativa los dos se invierten: {mada} más negativo es "todavía no", {mou} más negativo es "ya no", y la construcción es la misma en los dos casos.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mada} delante de verbo negativo pone el adverbio antes de toda la negación (*mada shinjiteimasen*); {mada} delante de {nai} lo pone delante de un adjetivo negativo (*mada mitemasen*). Son dos frases distintas.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con *mada madara* más el negativo *mai*, el {mada} deja de marcar tiempo y pasa a marcar certeza: el japonés está afirmando más de lo que suele decir la traducción.',
      ),
    },
  ],
  notes: [
    {
      label: T('El mismo adverbio en dos sílabas'),
      text: T(
        'La escritura japonesa elige, para casi todo adverbio, una forma que no es la del habla: {mou} se vuelve {sudeni}, *totemo* se vuelve *makoto*, y las dos formas conviven en la misma página de Mateo. La razón es histórica, y no de estilo: la forma escrita viene del chino, donde "ya" y "cierdamente" eran palabras de dos sílabas, y el japonés las guardó al lado de la forma corta que usa en el habla. El efecto para quien lee es que una misma idea aparece dos veces en el mismo capítulo, escrita de dos maneras, y quien conoce sólo la forma hablada no reconoce la escrita.',
      ),
    },
    {
      label: T('Por qué "todavía no podemos creer" y "todavía no creemos" no son la misma frase'),
      text: T(
        'El portugués resuelve la diferencia con una palabra más: "todavía no creemos" dice que el acto no ocurrió; "todavía no podemos creer" dice que el acto está bloqueado. El japonés resuelve la misma diferencia con la posición, y es la posición del {mada} la que decide: delante del verbo negativo cubre toda la negación; delante de {nai} es sólo un adverbio. Los dos aparecen en un texto bíblico, y lo que los separa es la forma que asume el verbo.',
      ),
    },
  ],
  examples: [
    {
      text: 'わたしはまだ父のもとに上っていないからです。',
      gloss: T(
        'wareta wa mada chichi no moto ni agarite orai kara desu — es porque todavía no he subido al Padre (Juan 20:17): {mada} más forma negativa al final de la cláusula',
      ),
    },
    {
      text: 'それでも、彼らは、うれしさのあまりまだ信じられず、不思議がっているので',
      gloss: T(
        'soredemo, kare wa, ureshisa no amari mada shinji rarezu, fushigi ni omotte iru no de — y todavía no podían creer, y estaban asombrados (Lucas 24:25): {mada} delante del verbo negativo',
      ),
    },
    {
      text: '私が渇くことがなく、もうここまでくみに来なくてもよいように',
      gloss: T(
        'watashi ga kawaku koto ga naku, mou koko made kumi ni kitakute mo ii yō ni — para que ya no tenga que venir aquí a buscar (Juan 4:4): {mou} más negativo, "ya no hace falta"',
      ),
    },
    {
      text: 'ところが、それが悪いしもべで、『主人はまだまだ帰るまい。』と心の中で思い、',
      gloss: T(
        'tokoro ga, sore ga warui shimo-be de, 「shujin wa mada madara kaette koi」 to kokoro no naka de omoi — «el señor no volverá de ninguna manera», y lo pensó en su corazón (Mateo 24:48): el par {mada} {madara} con el negativo *mai*',
      ),
    },
    {
      text: 'サラも、すでにその年を過ぎた身であるのに',
      gloss: T(
        "Sara mo, sudeni sono nen o sugita mi no han'i de aru noni — Sara también, ya having pasado esa edad (Hebreus 11:5): {mou} en la forma escrita {sudeni}",
      ),
    },
    {
      text: 'この貧しいやもめは、献金箱に投げ入れていたどの人よりもたくさん投げ入れました。',
      gloss: T(
        'kono katsu yobime wa, kensōbako ni nage irete ita dare yori mo takusan ireta — esta pobre viuda echó más que cualquiera de los otros (Marcos 12:43): {takusan} después del verbo',
      ),
    },
    {
      text: 'とても遠い',
      gloss: T(
        'totemo tōi — muy lejos: adverbio neutro sin forma negativa propia, y el adjetivo va detrás',
      ),
    },
    {
      text: 'すでにその年を過ぎた',
      gloss: T(
        'sudeni sono nen o sugita — ya having pasado aquella edad: el adverbio va después del sustantivo y antes del verbo',
      ),
    },
  ],
  tables: [
    {
      caption: T('La misma construcción, dos adverbios, dos sentidos opuestos'),
      head: [
        T('La frase'),
        T('El adverbio'),
        T('La traducción más fiel'),
        T('Lo que se está afirmando'),
      ],
      rows: [
        [
          T('*mada shinjiteimasen*'),
          T('{mada}'),
          T('todavía no podemos creer'),
          T('el estado sigue; el negativo es el del verbo'),
        ],
        [
          T('*mou shinjiteimasen*'),
          T('{mou}'),
          T('ya no creemos'),
          T('el estado cambió: quien creía dejó de creer'),
        ],
        [
          T('*mada mitemasen*'),
          T('{mada} más {nai}'),
          T('todavía no lo he visto'),
          T('el acto no ocurrió; el negativo es el del verbo'),
        ],
        [
          T('*mou mitemasen*'),
          T('{mou} más {nai}'),
          T('ya no lo he visto'),
          T('el acto ocurrió antes y ahora no ocurre'),
        ],
        [
          T('*mada madara kaettekoi*'),
          T('{mada} más {madara}'),
          T('no volverá de ninguna manera'),
          T('el adverbio se volvió certeza, y el negativo es *mai*'),
        ],
      ],
    },
    {
      caption: T('Los adverbios de cantidad y qué modifica cada uno'),
      head: [T('Adverbio'), T('Significa'), T('Qué modifica'), T('Ejemplo')],
      rows: [
        [T('{totemo}'), T('muy'), T('adjetivo o verbo'), T('*totemo utsukushii* — muy bonito')],
        [
          T('{sukoshi}'),
          T('un poco'),
          T('verbo, y en el negativo "no llega a"'),
          T('*sukoshi shimatta* — está casi terminado'),
        ],
        [
          T('{takusan}'),
          T('mucho, muchos'),
          T('sustantivo y verbo'),
          T('*takusan no hito* — mucha gente'),
        ],
        [T('{sugu}'), T('enseguida'), T('verbo de movimiento'), T('*sugu kuru* — venir enseguida')],
        [T('{yoku}'), T('bien, a menudo'), T('verbo'), T('*yoku yobu* — llamar a menudo')],
      ],
    },
    {
      caption: T('La misma palabra en dos sílabas: la forma del habla y la de la escritura'),
      head: [T('Forma hablada'), T('Forma escrita'), T('Significa'), T('Dónde aparece escrita')],
      rows: [
        [
          T('{mou}'),
          T('{sudeni}'),
          T('ya'),
          T('Hebreus 11:5: *Sara mo, sudeni sono nen o sugita*'),
        ],
        [
          T('*totemo*'),
          T('*makoto*'),
          T('cierdamente'),
          T('Mateo 24:33: *makoto ni, ware-tachi ni koshō shimasu*'),
        ],
        [
          T('{mou} con *ichido*'),
          T('*mou ichido*'),
          T('otra vez, y no "ya"'),
          T('Juan 3:4, en la pregunta de Nicodemo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      "En {Sara mo, sudeni sono nen o sugita mi no han'i de aru noni}, ¿qué está en el lugar donde en el habla estaría {mou}?",
    ),
    options: [
      T(
        '{sudeni}: es la forma escrita de "ya", y el contexto pide "ya" porque Sara ya había pasado esa edad',
      ),
      T('{mada}: está diciendo que Sara todavía no había pasado esa edad'),
      T('{mata}: está diciendo que Sara tuvo esa edad otra vez'),
      T(
        'nada: la frase es inválida, porque el japonés escrito no pone adverbio después del sustantivo',
      ),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa con el adverbio de "todavía": わたしはまだ父のもとに____ (todavía no he subido)',
      ),
      answer: '上っていない',
    },
    {
      kind: 'match',
      prompt: T('Une el adverbio con lo que hace en la frase'),
      pairs: [
        { a: T('{mada}'), b: T('con el negativo, "todavía no": el estado todavía no ha llegado') },
        { a: T('{mou}'), b: T('con el negativo, "ya no": el estado cambió y el viejo se acabó') },
        { a: T('{takusan}'), b: T('cuantifica: va después del verbo o delante del sustantivo') },
        {
          a: T('{mada} más {madara}'),
          b: T('marca certeza, y siempre viene con el negativo *mai*'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Lees {mada shinji rarezu} y después {mou shinji iru no de wa arimasen}. ¿Qué cambia entre las dos frases?',
      ),
      options: [
        T(
          'la primera dice que la fe todavía no ha llegado; la segunda dice que ya llegó, y lo que se niega es la certeza',
        ),
        T('la primera se niega con adverbio y la segunda se niega con sustantivo'),
        T('la primera pone el adverbio antes del verbo y la segunda después'),
        T('no hay diferencia: las dos significan "no creo"'),
      ],
      answer: 0,
    },
  ],
};
