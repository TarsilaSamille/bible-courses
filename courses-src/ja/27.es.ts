import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partícula'),
  title: T('{ni} y {e}: el destino y la dirección son dos partículas'),
  subtitle: T(
    '{ni} va después de casi todo y no necesita verbo de movimiento; {e} aparece solo con verbos de ir y venir, y por eso es más raro en el texto corrido que en los libros de gramática',
  ),
  body: C(`
## {ni}: el destino, que no exige verbo ninguno

{ni} va después del sustantivo y dice adónde. *Kare wa kyōkai ni iku*, "él va a la escuela", es la frase más sencilla que existe, y ya trae la lección: {ni} no significa movimiento, significa destino. Quien se mueve es el verbo, y {ni} solo apunta.

Lo que hace útil a {ni} es que no necesita un verbo de movimiento para funcionar. En *hon o ie ni {ireru}*, "meto el libro en casa", el sustantivo que va después de {ni} es un lugar donde algo **entra**, y el verbo es el de poner. En *tomodachi ni tegami o kakimashita*, "escribo una carta a mi amigo", lo que viene después de {ni} no es un lugar ninguno: es una persona que recibe. El mismo {ni} hace los dos trabajos, y lo que cambia es lo que sea el nombre que lo sigue.

## {e}: la dirección, y los verbos que la piden

El japonés escribe la dirección en una partícula aparte. *Kyōkai e iku* es la misma frase de antes, con {e} en lugar del {ni}, y la única diferencia es que {e} dice dirección, no destino. En portugués son dos palabras casi iguales, y en japonés son dos partículas distintas.

{e} aparece casi solo con verbos de ir y venir: {iku} ir, {kuru} venir, {kaeru} volver, y además *hōkō suru* partir, *mukau* dirigirse a, *wataru* atravesar. Con cualquier otro verbo, el lugar lo marca el {ni}: *eki ni {noru}*, "tomo el tren en la estación", *machi ni {sumu}*, "vivimos en la ciudad", *ie ni hairu*, "entro en casa". Escribir *eki e noru* no es japonés.

## El mismo nombre con las dos partículas

La pregunta que surge enseguida es si {iku} acepta las dos. Las acepta. *Tōkyō ni iku* y *Tōkyō e iku* son frases que cualquier japonés entiende, y la diferencia es de registro: {e} es más cuidado, más escrito, y {ni} es lo que aparece en el habla y en el texto corriente. Lo que no existe es {e} con un verbo que no sea de ir y venir, y ahí es donde el principiante se equivoca.

Mateo 2 lo muestra mejor que cualquier gramática. En 2:1, *hiseki-tachi wa erusaremu ni yatte kite*, "los magos de oriente vinieron a Jerusalén", el verbo es venir, el nombre es el lugar, y la partícula es {ni}. En 2:8, *kare wa sono-tachi o Betsurēmu ni {okutta}*, "los envió a Belén", la partícula sigue siendo {ni}, y ahora el sustantivo que va después es el destino de un tercero, no del que envía. En Juan 1:43, *Yesu wa Gariraya ni {iku} to shitameta*, el texto escribe {ni} con el verbo {iku}, que es justo el verbo que más acepta {e}. Un traductor japonés podría escribir {e} en esos tres lugares sin un solo error; el texto eligió {ni}, y la elección no dice nada sobre el sentido.

## Los otros cinco trabajos del {ni}

La dificultad del {ni} no es que signifique destino. Es que destino es **sólo uno de los seis lugares** donde aparece.

El primero es el tiempo. *San-ji ni*, "a las tres"; *yoru ni*, "de noche". El {ni} después de un sustantivo de tiempo dice cuándo, y la forma es la misma: nombre más partícula.

El segundo es la persona, y va antes del objeto directo, lo que produce la inversión que la lección de sintaxis ya midió: *tomodachi ni tegami o kakimashita*. El {ni} del destinatario es el mismo que el del destino, y quien traduce del portugués escribe *tegami o tomodachi ni*, que es una frase que existe, con otro sentido.

El tercero es quien sufre la acción, y es el más amplio de los tres. *Onna ni nagureareta*, "fue golpeada por una mujer", tiene el agente en la partícula; pero el mismo trabajo aparece sin pasiva ninguna, en Mateo 26:50, *Yesu ni te o kakete*, "pusieron las manos sobre Jesús": {ni} señala a quien recibió la acción, y la frase sigue activa. Quien traduce de una lengua donde la preposición es obligatoria busca el instrumento y no lo encuentra; lo que está ahí es una persona.

El cuarto es la finalidad. *Kami ni kansha shite*, "después de dar gracias a Dios", o *mizu o nomu ni nonde iku*, "voy a beber agua para beber", ponen un motivo delante del verbo, y la forma es nombre más {ni} más verbo.

El quinto es el lugar donde el suceso ocurre dentro de un grupo: *Kazoku ni otoko no ko ga umareta*, "nació un varón en esa familia". El nombre va primero, la partícula dice a qué grupo pertenece el hecho, y la traducción suele resolverlo con un genitivo que el portugués no tiene.

Y {e} tiene sus propios lugares, que son frase hecha y no regla de verbo: *daiichi ni*, "primero", *tsugi ni*, "después", *michi no ue e*, "a lo largo del camino". Son locuciones, y por eso {e} no existe solo: sin el sustantivo, {e} desaparece.
`),
  vocab: [
    V(
      'ni',
      'に',
      'destino, persona, tiempo, finalidad: la partícula que va después de casi todo (ni)',
    ),
    V('e', 'へ', 'dirección: va con verbos de ir y venir, y en locuciones hechas (e)'),
    V('iku', '行く', 'ir; el verbo que más acepta {e} (iku)'),
    V('kuru', '来る', 'venir (kuru)'),
    V('kaeru', '帰る', 'volver, volver a casa (kaeru)'),
    V('tsuku', '着く', 'llegar; el lugar de llegada lleva {ni}, nunca {e} (tsuku)'),
    V('sumu', '住む', 'morar; morar es {ni}, y nunca {e} (sumu)'),
    V(
      'ireru',
      '入れる',
      'meter dentro, hacer entrar; el destino del {ni} es un lugar donde algo entra (ireru)',
    ),
    V('noru', '乗る', 'tomar, subir: en vehículo, en tren, a caballo (noru)'),
    V('oriru', '降りる', 'bajar, salir de un vehículo (oriru)'),
    V(
      'hanareru',
      '離れる',
      'dejar, alejarse de; el lugar que se deja también lleva {ni} (hanareru)',
    ),
    V('motsu', '持つ', 'llevar consigo; el {ni} es el lugar donde la cosa se guarda (motsu)'),
    V(
      'okuru',
      '送る',
      'enviar; el destino de quien es enviado es el {ni} que va antes del nombre (okuru)',
    ),
    V(
      'erusaremu',
      'エルサレム',
      'Jerusalén; el nombre de destino de Mateo 2:1 y de Marcos 12:2 (erusaremu)',
    ),
    V('jikan', '時間', 'tiempo, hora; con {ni}, el tiempo se vuelve un punto de la frase (jikan)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ni} va después del sustantivo y marca destino, y el destino no exige verbo de movimiento: el nombre que lo sigue puede ser un lugar, una persona o un tiempo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} marca dirección y vive prácticamente sólo con verbos de ir y venir. Con {noru}, {sumu} e {ireru} el lugar lo marca el {ni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con {iku} las dos son correctas, y la elección es de registro: {e} es más cuidado y más escrito, {ni} es el del texto corriente.',
      ),
    },
    {
      n: '4',
      text: T(
        'El {ni} de la persona va antes del objeto directo: *tomodachi ni tegami o kakimashita*. Con verbo transitivo señala a quien recibe la acción, y el lugar es el de quien fue enviado.',
      ),
    },
    {
      n: '5',
      text: T(
        'En la pasiva el agente lleva {ni}: *onna ni nagureareta*. El mismo trabajo aparece sin pasiva, en Mateo 26:50, *Yesu ni te o kakete*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué {e} casi no aparece en la Biblia'),
      text: T(
        'La dirección es lo único que el griego bíblico expresa con una preposición dedicada, y el japonés lo resuelve con {ni} sin dificultad: destino y dirección pueden ser la misma palabra, porque {ni} no es preposición y no carga con la diferencia que carga el griego. {e} sobrevive, pero como registro: aparece en texto cuidado, en nombre de institución y en los saludos de carta, donde el destino no es movimiento. Marcos 12:2 es un ejemplo vivo, *shimo-be o nōfu-tachi no tokoro e yobisareta*, "envió el siervo a la casa de los labradores": la partícula es {e}, y lo que va detrás es un grupo entero de personas. Quien espera ver {e} en cada "a" de una traducción va a leer una página entera sin encontrarse una sola vez.',
      ),
    },
    {
      label: T('El {ni} del tiempo no necesita el nombre de la persona'),
      text: T(
        'En *san-ji ni oki mashita*, "llegué a las tres", la persona desaparece de la frase: el número ya lo dijo todo, y el {ni} queda pegado a él. Con *yoru ni*, "de noche", quien desaparece es el sustantivo, porque la palabra ya es el tiempo. Es el mismo movimiento que las otras partículas: el nombre de lo que está en juego se puede omitir, y queda la marca y el verbo. Quien traduce del portugués escribe "llegué a las tres" y pierde la economía sin saber por qué.',
      ),
    },
  ],
  examples: [
    {
      text: '博士たちがエルサレムにやって来て',
      gloss: T(
        'hiseki-tachi wa erusaremu ni yatte kite — los magos de oriente vinieron a Jerusalén (Mateo 2:1): verbo de venir con {ni}, y el texto no usa {e}',
      ),
    },
    {
      text: 'そして、こう言って彼らをベツレヘムに送った。',
      gloss: T(
        'soshite, kō itte kare o Betsurēmu ni okutta — y así los envió a Belén (Mateo 2:8): el {ni} es el destino de quien es enviado, no del que envía',
      ),
    },
    {
      text: 'その翌日、イエスはガリラヤに行こうとされた。',
      gloss: T(
        'sono jitsuyō ni, Yesu wa Gariraya ni iku to shitameta — al día siguiente Jesús resolvió ir a Galilea (Juan 1:43): {ni} con el verbo {iku}',
      ),
    },
    {
      text: '今どこにお泊まりですか。',
      gloss: T(
        'ima doko ni tomari masu ka — dónde está hospedado ahora (Juan 1:38): el interrogativo es un sustantivo, y el {ni} es el de lugar',
      ),
    },
    {
      text: '駅に乗り、町に住み、家に入ります',
      gloss: T(
        'eki ni noru, machi ni sumu, ie ni hairu — tomo el tren, vivo en la ciudad, entro en casa: tres verbos que no aceptan {e}',
      ),
    },
    {
      text: '友達に手紙を書きました。',
      gloss: T(
        'tomodachi ni tegami o kakimashita — escribí una carta a mi amigo (el {ni} del destinatario va antes del objeto)',
      ),
    },
    {
      text: '群衆が来て、イエスに手をかけて捕えた。',
      gloss: T(
        'shūshū ga kite, Yesu ni te o kakete tsuketa — la multitud llegó y puso las manos sobre Jesús (Mateo 26:50): {ni} señala a quien recibió la acción, y la frase sigue activa',
      ),
    },
    {
      text: 'しもべを農夫たちのところへ遣わした',
      gloss: T(
        'shimo-be o nōfu-tachi no tokoro e yobisareta — envió el siervo a la casa de los labradores (Marcos 12:2): el {e} de la dirección, con el destino siendo un grupo de personas',
      ),
    },
  ],
  tables: [
    {
      caption: T('{e} o {ni}: decide el verbo, no el sentido del lugar'),
      head: [T('El verbo'), T('Cómo se escribe'), T('La partícula'), T('Por qué')],
      rows: [
        [T('{iku} ir'), T('*kyōkai e iku*'), T('{e}'), T('dirección, con verbo de movimiento')],
        [
          T('{kuru} venir'),
          T('*erusaremu e kite*'),
          T('{e}'),
          T('dirección, con verbo de movimiento'),
        ],
        [
          T('{kaeru} volver'),
          T('*ie e kaeru*'),
          T('{e}'),
          T('el destino de la vuelta es dirección como el de la ida'),
        ],
        [
          T('{tsuku} llegar'),
          T('*erusaremu ni tsuku*'),
          T('{ni}'),
          T('el lugar de llegada no es dirección'),
        ],
        [T('{sumu} morar'), T('*machi ni sunu*'), T('{ni}'), T('morar no es ir a ninguna parte')],
        [
          T('{noru} tomar'),
          T('*eki ni noru*'),
          T('{ni}'),
          T('la cosa entra en un lugar, y {e} no cabe'),
        ],
        [
          T('{ireru} meter dentro'),
          T('*ie ni ireru*'),
          T('{ni}'),
          T('es el destino del objeto, no el de quien va'),
        ],
      ],
    },
    {
      caption: T('Los cinco trabajos del {ni}, con la misma forma cada vez'),
      head: [T('Qué señala el {ni}'), T('La frase'), T('Qué hace el portugués con ella')],
      rows: [
        [
          T('destino'),
          T('*kyōkai ni iku*'),
          T('"va a la escuela": la partícula del lugar de quien va'),
        ],
        [
          T('destinatario'),
          T('*tomodachi ni tegami o kakimashita*'),
          T('"escribe al amigo": la misma partícula, antes del objeto'),
        ],
        [
          T('tiempo'),
          T('*yoru ni, san-ji ni*'),
          T('"de noche, a las tres": el nombre del tiempo entra igual'),
        ],
        [
          T('quien recibe la acción'),
          T('*Yesu ni te o kakete*'),
          T('"pusieron las manos sobre Jesús": {ni} sin pasiva ninguna'),
        ],
        [
          T('agente de la pasiva'),
          T('*onna ni nagureareta*'),
          T('"golpeada por una mujer": quien hace va primero'),
        ],
        [
          T('finalidad'),
          T('*kami ni kansha shite*'),
          T('"después de dar gracias": el {ni} ata la acción a un motivo'),
        ],
      ],
    },
    {
      caption: T('El mismo destino, tres formas posibles'),
      head: [T('Lo que quieres decir'), T('Con {ni}'), T('Con {e}'), T('Dónde aparece')],
      rows: [
        [
          T('los magos vinieron a Jerusalén'),
          T('*erusaremu ni yatte kite*'),
          T('*erusaremu e yatte kite*'),
          T('Mateo 2:1 escribe {ni}'),
        ],
        [
          T('los envió a Belén'),
          T('*Betsurēmu ni okutta*'),
          T('*Betsurēmu e okutta*'),
          T('Mateo 2:8: el destino es de quien es enviado'),
        ],
        [
          T('Jesús fue a Galilea'),
          T('*Gariraya ni itte*'),
          T('*Gariraya e itte*'),
          T('Juan 1:43 escribe {ni}'),
        ],
        [
          T('envió el siervo a los labradores'),
          T('*nōfu-tachi no tokoro ni*'),
          T('*nōfu-tachi no tokoro e*'),
          T('Marcos 12:2 escribe {e}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En {駅に乗って、町に住んで、家に入ります}, ¿por qué las tres frases usan {ni} y no {e}?',
    ),
    options: [
      T(
        'porque ninguno de los tres verbos es de ir o venir, y {e} solo aparece con verbos de movimiento',
      ),
      T('porque {ni} es la partícula del lugar y {e} es la partícula del tiempo'),
      T('porque las tres frases son traducciones, y {e} no aparece en texto traducido'),
      T('porque {e} fue sustituido por {ni} en la traducción moderna del Evangelio'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa con la partícula de destino, y no con la de dirección: 家に____入ります (entro en casa)',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Une la frase al trabajo que está haciendo el {ni}'),
      pairs: [
        {
          a: T('{erusaremu ni okutta}'),
          b: T('destino de quien es enviado: la partícula señala al objeto'),
        },
        { a: T('{yoru ni}'), b: T('tiempo: el nombre del tiempo entra en la misma forma') },
        { a: T('{onna ni nagureareta}'), b: T('agente de la pasiva: quien hizo la acción') },
        {
          a: T('{tomodachi ni tegami o kakimashita}'),
          b: T('destinatario, que va antes del objeto directo'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        '¿Por qué una traducción japonesa puede escribir {ni} donde un gramático escribiría {e} sin que ninguno de los dos esté mal?',
      ),
      options: [
        T(
          'porque {ni} cubre destino y dirección a la vez, y {e} es la marca más cuidada del mismo trabajo',
        ),
        T('porque {e} solo existe en texto antiguo y el japonés corriente lo perdió'),
        T('porque {ni} es obligatorio con verbo transitivo y {e} con intransitivo'),
        T('porque la partícula de dirección cambia de sentido según el tiempo del verbo'),
      ],
      answer: 0,
    },
  ],
};
