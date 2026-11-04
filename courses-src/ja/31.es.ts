import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Lectura'),
  title: T('La primera línea de una carta: tres partículas que hacen el trabajo del membrete'),
  subtitle: T(
    'Quién escribe, a quién y el deseo que abre el libro son las tres frases más cortas del estilo epistolar, y las tres están hechas de nombre seguido de partícula',
  ),
  body: C(`
## La primera línea tiene tres nombres y tres partículas

Una carta griega empieza por tres cosas: quién escribe, a quién y un deseo. La línea más antigua del estilo está en 1 Tesalonicenses 1:1, *Pauro, Shiruwano to Temote {yori}, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai {e}*. **Hay tres nombres en el remitente**, y la partícula que los junta es {yori}, "de": quién escribe, y su nombre es {pauro}.

Después viene {e} antes del nombre de la {kyōkai}. **Es la partícula del destinatario**, y está en el sitio donde el portugués esperaría un "a". El nombre de la iglesia llega con {no} de posesión, *Tesarunikē no kyōkai*, "la iglesia de los tesalonicenses", y la partícula {e} queda pegada después del sustantivo entero. En griego ese nombre venía en el caso que significa "la"; el japonés no tiene casos, y resolvió con la partícula de dirección, que es el único sitio del idioma en que {e} es obligatoria sin que haya movimiento ninguno en la frase.

El {ni} viene enseguida, en *{chichi} naru {kami} … ni aru*: "en el Padre, que es Dios". El nombre propio de Dios no es el tema; el tema es la iglesia, y Dios es el lugar donde la iglesia está. Una frase que en portugués diría "de", "a" y "en" se vuelve {yori}, {e} y {ni}, y quien ya conoce las tres conoce la línea entera.

## El deseo es una cláusula sin sujeto humano

La frase siguiente es *megumi to heian {ga} anata no {ue} ni {arimasu} yō ni*, "que la gracia y la paz estén sobre vosotros". No hay verbo de decir, no hay nombre de quien habla, y el sujeto es el deseo: {ga} en *{megumi} to {heian} ga*. Lo que está sobre los tesalonicenses no es el afecto de Pablo, es la gracia; y la partícula {ga} lo dice sin necesitar una cláusula que diga quién lo desea.

El resto de la frase es *anata no ue ni*, "sobre vosotros", y es la única parte que el portugués resuelve de otra manera. Con persona, la preposición "sobre" es rara en portugués y común en japonés: el {ni} ya estaba en la lista, y es el mismo {ni} que marca destino y lugar. Y el *arimasu yō ni* del final es la fórmula que convierte un deseo en cláusula: "que haya", sin sujeto, sin persona, sin tiempo verbal.

Un lector que viene del portugués busca allí un sujeto gramatical y no encuentra ninguno, y lo que falta es el nombre de quien desea. El sujeto está en la primera mitad de la frase, y es una cosa: gracia, paz. El nombre del remitente está en la línea de arriba, y no es sujeto de nada.

## El cierre repite la construcción

Las cartas del Nuevo Testamento casi todas cierran con dos frases: una sobre quien escribe y un deseo. 1 Corintios 16:24 es el cierre más corto: *watashi no ai wa, {kirisuto} Yesu ni arite, anata subete no mono {tomo-ni} {arimasu}*. La primera parte declara dónde está el amor de quien escribe, y la construcción es la de la primera línea de la carta: {wa} para el tema, {ni} para el lugar.

En *watashi no ai wa*, el amor es el tema y quien escribe es el poseedor. El portugués traduce "mi amor está en Cristo Jesús", y es la misma información, pero la partícula {ni} después del nombre de Cristo es la que hace el trabajo: no es una preposición suelta, es el mismo {ni} que marca destino en Mateo 2:1, y por eso el traductor tiene que saber cuál de los dos está leyendo.

El *tomo-ni* del cierre es la partícula de compañía con el nombre entero envolviéndolo, *anata subete no mono*, "todos vosotros". Y el *āmen* del final es una palabra griega transliterada, que el japonés nunca tradujo porque no hay qué traducir.

**Fíjate en que ninguna de las dos frases tiene sujeto humano.** El amor está en Cristo; la gracia está sobre los destinatarios. El estilo epistolar hace lo que la partícula {ga} permite: cuando lo que se quiere decir es una entidad, esa entidad es el sujeto, y el nombre de las personas se vuelve {ni} de lugar. Es lo contrario de una carta común, en la que quien escribe es sujeto de todo.

## Lo que hace una carta y no hace un Evangelio

Una carta no empieza siendo narrada, y por eso la primera línea tiene tres nombres. Uno de los tres es el remitente que queda oculto, que da autoridad, y otro es el destinatario entero, que da unidad: una carta a una iglesia es una carta a una multitud que nadie ve, y la partícula {e} antes del nombre de esa multitud es la marca exacta de lo que el traductor no tiene que enumerar.

Después de la segunda línea, la carta hace una cosa que un Evangelio no hace: habla de sí misma. 1 Tesalonicenses 1:5 dice *ware-tachi no {fukuin} ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu*, "nuestro evangelio no llegó a vosotros solo por la palabra, sino por la fuerza, por el Espíritu Santo y por persuasión firme". Todo eso sale de verbos de escritura, de envío y de memoria, y la partícula que ata cada cosa con su nombre es {no}.

Y es {toki}, el sustantivo de la {inori} que está detrás del tiempo, el que aparece cuando la carta mira hacia atrás. La última frase de 2 Tesalonicenses 1:10 empieza con *sono hi ni*, "aquel día", y el tiempo que rige la validez de la afirmación es un sustantivo abstracto, no un adverbio: el verbo viene al final, con su flexión, y la condición en que vale queda nombrada como lugar.

Una carta hace tres cosas en el mismo orden en todas las páginas: quién escribe, a quién y el tiempo en que vale lo que afirma. Quien reconoce las tres líneas lee cualquier carta del Nuevo Testamento por la primera línea.
`),
  vocab: [
    V(
      'yori',
      'より',
      'origen: "de", y es la partícula que junta los nombres de quien envía (yori)',
    ),
    V('e', 'へ', 'destinatario: va antes del nombre de quien recibe la carta (e)'),
    V('ni', 'に', 'lugar, y también "dónde está" una cosa abstracta: amor, gracia, paz (ni)'),
    V('ga', 'が', 'el deseo que abre la carta es el sujeto: la gracia y la paz (ga)'),
    V(
      'no',
      'の',
      'posesión: liga el nombre de la ciudad con el de la iglesia y el del pueblo con el del amor (no)',
    ),
    V('pauro', 'パウロ', 'Pablo, el nombre que abre y cierra las cartas (pauro)'),
    V('kyōkai', '教会', 'iglesia; el nombre que va justo después de la partícula {e} (kyōkai)'),
    V('chichi', '父', 'padre; "Padre, que es Dios", el nombre propio del comienzo (chichi)'),
    V('kami', '神', 'Dios; el lugar donde está la iglesia, según la primera línea (kami)'),
    V('megumi', '恵み', 'gracia, favor, misericordia (megumi)'),
    V('heian', '平安', 'paz; el segundo nombre del primer deseo de la carta (heian)'),
    V('ue', '上', 'superficie; con {ni}, "sobre" (ue)'),
    V(
      'arimasu',
      'あります',
      'estar, haber; el verbo que cierra el deseo, sin sujeto ni persona (arimasu)',
    ),
    V('tomo-ni', '共に', 'junto con; el "con" del cierre, escrito con el nombre entero (tomo-ni)'),
    V(
      'kirisuto',
      'キリスト',
      'Cristo; el nombre que queda en {ni} en el cierre de la carta (kirisuto)',
    ),
    V('fukuin', '福音', 'evangelio; lo que la carta dice haber enviado (fukuin)'),
    V(
      'inori',
      '祈り',
      'oración; lo que la carta pide, y lo que nombra el sustantivo {toki} (inori)',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La primera línea de una carta trae los tres nombres con tres partículas: {yori} junta a quien escribe, {e} marca al destinatario y {ni} marca el lugar donde está Dios.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} antes del nombre de una iglesia no es dirección: es el caso griego que el portugués traduce por "la", y el único sitio del idioma en que {e} aparece sin movimiento alguno.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el deseo, el sujeto es la cosa deseada: {ga} en *megumi to heian ga*. Las personas no son sujeto; son el lugar, con {ni}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El cierre repite la construcción de la apertura: {wa} para el tema, {ni} para el lugar donde está la cosa, y ningún sujeto humano en las dos frases.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando la carta habla de sí misma, {no} liga cada acción con el nombre que la hizo, y {toki} da nombre al momento que evoca.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué {e} es obligatoria en la línea de apertura'),
      text: T(
        'Una carta griega abría con tres casos: origen para quien escribe, destino para la iglesia, y un caso de contexto para Dios. El japonés resolvió los dos primeros con {yori} y {e}, y la elección de {e} no es de dirección: es lo que hay para decir "la iglesia de Tesalónica". Romanos 1:1 hace lo mismo con la misma partícula, *kami no fukuin no tame ni erabitareru, shito to meshattareta Kirisuto Yesu no shimo-be Pauro*, y la construcción es tan rara que cuesta encontrar en japonés corriente una frase en que {e} sea obligatoria por otra razón.',
      ),
    },
    {
      label: T('El género epistolar entrena partícula mejor que el Evangelio'),
      text: T(
        'Una narración pone la información en verbos, y el lector avanza por el contenido. Una carta pone la información en nombres, y el lector avanza por las partículas. La primera línea y el cierre no tienen nada que traducir: son cuatro nombres y cuatro partículas, y quien reconoce la secuencia yori, e, ni ya ha leído la estructura de cualquier carta del Nuevo Testamento antes de entender una palabra del contenido. Es el ejercicio más barato que existe para quien está aprendiendo a leer japonés bíblico.',
      ),
    },
  ],
  examples: [
    {
      text: 'パウロ、シルワノ、テモテから、父なる神および主イエス・キリストにあるテサロニケ人の教会へ。',
      gloss: T(
        'Pauro, Shiruwano to Temote yori, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai e — Pablo, Silvano y Timoteo, a la iglesia de los tesalonicenses que está en Dios Padre y en el Señor Jesucristo (1 Tesalonicenses 1:1): {yori} en el remitente, {e} en el destinatario, {ni} en Dios',
      ),
    },
    {
      text: '恵みと平安があなたがたの上にありますように。',
      gloss: T(
        'megumi to heian ga anata no ue ni arimasu yō ni — que la gracia y la paz estén sobre vosotros (1 Tesalonicenses 1:1): el deseo es el sujeto, y las personas son el lugar',
      ),
    },
    {
      text: '私の愛は、キリスト・イエスにあって、あなたがたすべての者とともにあります。アーメン。',
      gloss: T(
        'watashi no ai wa, Kirisuto Yesu ni arite, anata subete no mono to tomoni arimasu. Āmen. — mi amor está en Jesucristo y con todos vosotros (1 Corintios 16:24): el amor es lo que está en {ni}, y nadie es el sujeto',
      ),
    },
    {
      text: 'なぜなら、私たちの福音があなたがたに伝えられたのは、ことばだけによったのではなく、力と聖霊と強い確信とによったからです。',
      gloss: T(
        'narawēru to wa, ware-tachi no fukuin ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu — porque nuestro evangelio no llegó a vosotros solo por la palabra, sino por la fuerza, por el Espíritu Santo y por persuasión firme (1 Tesalonicenses 1:5): la carta habla de su propio acto, y {kara} lo cierra como causa',
      ),
    },
    {
      text: '主イエスの恵みが、あなたがたとともにありますように。',
      gloss: T(
        'Shu Yesu no megumi ga, anata to tomoni arimasu yō ni — la gracia del Señor Jesucristo esté con vosotros (1 Corintios 16:23): la gracia es el sujeto, y el nombre del Señor es el poseedor',
      ),
    },
    {
      text: '教会へ',
      gloss: T(
        'kyōkai e — a la iglesia: el {e} del destinatario, sin ningún movimiento en el texto',
      ),
    },
    {
      text: 'あなたがたの上にある',
      gloss: T(
        'anata no ue ni aru — está sobre vosotros: {ni} de lugar con persona, y {no} de posesión entre el nombre y el sustantivo',
      ),
    },
  ],
  tables: [
    {
      caption: T('La primera línea de una carta, con las tres partículas en orden'),
      head: [
        T('La parte de la línea'),
        T('La forma'),
        T('La partícula'),
        T('Lo que hace la partícula'),
      ],
      rows: [
        [
          T('quién escribe'),
          T('*Pauro, Shiruwano to Temote yori*'),
          T('{yori}'),
          T('origen: "de", juntando los nombres de quien envía'),
        ],
        [
          T('a quién'),
          T('*Tesarunikē no kyōkai e*'),
          T('{e}'),
          T('destinatario: el caso griego que el portugués traduce por "la"'),
        ],
        [
          T('dónde está Dios'),
          T('*chichi naru Kami … ni aru*'),
          T('{ni}'),
          T('lugar: "en Dios Padre" y "en el Señor Jesucristo"'),
        ],
        [
          T('el deseo'),
          T('*megumi to heian ga*'),
          T('{ga}'),
          T('el sujeto: lo que el remitente desea, y no quien desea'),
        ],
        [
          T('sobre quién'),
          T('*anata no ue ni*'),
          T('{ni}'),
          T('el lugar del deseo: las personas son el lugar, no el sujeto'),
        ],
      ],
    },
    {
      caption: T('Apertura y cierre: la misma construcción, una frase a cada lado'),
      head: [T('La parte'), T('La frase de apertura'), T('La frase de cierre'), T('Lo que cambió')],
      rows: [
        [
          T('el remitente'),
          T('*Pauro … yori*'),
          T('*watashi no ai wa …*'),
          T('el nombre del remitente pasa de origen a poseedor'),
        ],
        [
          T('de quién es la carta'),
          T('*Tesarunikē no kyōkai e*'),
          T('*anata subete no mono to tomoni*'),
          T('la misma partícula de compañía, con el nombre entero envolviéndolo'),
        ],
        [
          T('lo que se desea'),
          T('*megumi to heian ga …*'),
          T('*watashi no ai wa …*'),
          T('la cosa deseada es el sujeto en los dos casos'),
        ],
        [
          T('el lugar de la cosa'),
          T('*anata no ue ni*'),
          T('*Kirisuto Yesu ni arite*'),
          T('{ni}: "sobre vosotros" y "en Cristo"'),
        ],
        [
          T('final de la frase'),
          T('*arimasu yō ni*'),
          T('*arimasu*'),
          T('el mismo verbo de estar, con y sin la fórmula del deseo'),
        ],
      ],
    },
    {
      caption: T('La carta hablando de sí misma, y la partícula que ata el acto con su nombre'),
      head: [
        T('Lo que la carta dice de sí misma'),
        T('La partícula'),
        T('Lo que ata'),
        T('Dónde aparece'),
      ],
      rows: [
        [
          T('lo que fue enviado'),
          T('{no}'),
          T('el nombre del evangelio con el de quien lo envió'),
          T('1 Tesalonicenses 1:5'),
        ],
        [
          T('la palabra enviada'),
          T('{ni}'),
          T('el nombre de quien recibió la palabra'),
          T('1 Tesalonicenses 1:5: *anata ni tsutareta*'),
        ],
        [
          T('el motivo de la firmeza'),
          T('{kara}'),
          T('la causa al final de la cláusula, después del verbo'),
          T('1 Tesalonicenses 1:5: *kara desu*'),
        ],
        [
          T('el tiempo que vale'),
          T('{toki}'),
          T('el sustantivo del tiempo con un verbo flexionado'),
          T('2 Tesalonicenses 1:10, que empieza por *sono hi ni*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Tesarunikē no kyōkai e}, ¿qué está haciendo la partícula {e}?'),
    options: [
      T(
        'marca al destinatario de la carta: el nombre de la iglesia va después, y no hay movimiento ninguno',
      ),
      T('marca dirección: la carta está yendo a Tesalónica mientras usted lee'),
      T('marca el lugar donde está Dios, como en la frase siguiente'),
      T('marca el motivo de la carta, que es lo mismo que {yori} en la primera línea'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa la partícula del remitente en la apertura de una carta: パウロ、シルワノ、テモテ____ (Pablo, Silvano y Timoteo)',
      ),
      answer: 'から',
    },
    {
      kind: 'match',
      prompt: T('Une la parte de la carta con la partícula que la hace'),
      pairs: [
        { a: T('{yori}'), b: T('junta los nombres de quien escribe, al comienzo de la línea') },
        { a: T('{e}'), b: T('marca al destinatario, y va antes del nombre de la iglesia') },
        { a: T('{ga}'), b: T('convierte el deseo en el sujeto de la primera cláusula de deseo') },
        { a: T('{ni}'), b: T('dice dónde está la cosa deseada: en Cristo, sobre vosotros') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        '¿Por qué la primera línea de una carta sirve bien como entrenamiento de partículas?',
      ),
      options: [
        T(
          'porque tiene cuatro nombres y cuatro partículas, y lo que el lector necesita es reconocer la secuencia',
        ),
        T('porque tiene un griego difícil que solo se puede resolver con partículas'),
        T('porque las cartas antiguas usan partículas que ya no existen en el japonés de hoy'),
        T('porque la apertura se escribe siempre en ideogramas, y las partículas aparecen enteras'),
      ],
      answer: 0,
    },
  ],
};
