import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Números'),
  title: T('Dos sistemas numéricos que no se mezclan — y la hora del reloj'),
  subtitle: T(
    'La elección no es de registro, es de tipo de cosa: las personas llevan el numeral nativo, las cosas el sino-coreano, y la hora del reloj es la prueba',
  ),
  body: C(`## Dos sistemas, y la elección no es de registro

El coreano tiene dos juegos completos de numerales, y lo primero que hay que entender es que la elección entre ellos no es de tono ni de elegancia. Quien viene del mandarín espera un solo sistema, el mandarín tiene uno, y descubre que el coreano tiene dos. El criterio no es el registro: es el TIPO DE COSA que se está contando, y la pregunta es una sola. ¿Esto es contable o no?

El sino-coreano cuenta cosas. Son {il}, {i}, {sam} y así hasta {sip}: minutos, horas del reloj escrito, meses, días, monedas, años, distancias. Vino del chino por los hanja, y es exactamente el mismo sistema que el del mandarín y el del japonés.

El nativo cuenta lo que no se cuenta uno a uno, y cuenta a las personas. Son {hana}, {dul}, {se} y así hasta die. Las personas en coreano llevan el nativo, sin excepción: es el único uso en que el sistema es obligatorio y no opcional.

Y aquí está la trampa que hace que el principiante abandone. Cuatro y cinco son la misma palabra en los dos sistemas, sa y o; ocho y nueve también, pal y gu; y el uno suena casi igual, {il} y {hana}. Un alumno que aprende solo la primera decena concluye que hay un sistema único. Hay dos, y se separan exactamente en el punto en que aparece la persona.

## La regla práctica: la persona es nativa, la cosa es sino

Si un numeral va a contar personas, es nativo: {se} {myeong} sarang, tres personas, y el {myeong} es obligatorio por la regla de los contadores: numeral, contador, sustantivo. Si va a contar cosas, es sino-coreano: seis cerdos es yuk mari, seis monedas es yuk won.

La edad es nativa, y es el caso que casi nadie acierta, porque una edad es al mismo tiempo una persona y un número de años. Treinta y cinco años empieza con {se} y no con {sam}, aunque sea un número de años, porque lo que se cuenta es el tiempo de vida de alguien. El dol de las decenas, seoreundeoldol, es lo mismo: es el nativo, con la parte "dos" cambiada de sonido.

Y el contador sigue con la regla de siempre: con numeral nativo, pronunciación corta; a partir de diez, pronunciación larga, misma escritura. Tres personas es {se} {myeong}; trece personas es {sip} {myeong}. La escritura del contador no ha cambiado, y por eso leer coreano en silencio pronuncia casi todo mal.

## La hora del reloj: sino por escrito, nativa en el habla

La hora es la prueba más limpia de la regla, porque el mismo número aparece en las dos formas en la misma frase. Escrito, el reloj usa el sino-coreano: {sam} {si}, las tres. Hablado, usa el nativo: {se} {si}, las mismas tres horas. En los dos casos el {si} va justo detrás del numeral y hace de contador, sin sustantivo alguno.

Después del número de la hora viene {jeongal}, "en punto", y concuerda con la hora: yeoseol jeongal, las seis en punto; ilgop jeongal, las siete en punto. {jeongal} es la exacta, la que cae justo; la hora aproximada no lleva partícula alguna. Y la media hora viene también después del número: {ohaseo} {hana} {si} ban, la una y media de la mañana.

Mañana y tarde: {ohaseo}, mañana, y {gayo}, tarde. Lo que se dice en la calle es {se} {si} {jeongal}; lo que se escribe en un horario de estación es {sam} {si} {jeongal}. El mismo reloj, dos sistemas, y ninguno equivocado.

## A partir del once: el diez va antes, y la primera parte cambia

Los números de dos cifras se construyen como en todos los idiomas que este proyecto compara: el diez primero, la unidad después. Dieciséis es sim {nol}: diez antes, seis después. Es el mismo orden posicional del mandarín y del japonés, con la misma absurdidad aparente, diez y seis nunca es diez y seis.

La irregularidad real está en el sonido. Del once al diecinueve el "diez" no es {sip}: es {nol} cuando la unidad es seis, como en sim {nol}, y hul cuando la unidad es dos, como en {sip} hul para el doce. En las demás décadas el diez vuelve a {sip} normal, {i} {sip} veinte, {sam} {sip} treinta, gu {sip} noventa, y la parte "dos" se vuelve dol, como en {sam} dol, treinta y dos. Es el mismo cambio que hace que el contador cambie de pronunciación después del diez: una sola regla, vista desde dos lados.

Quien se pierde en la aritmética se pierde por memorizar de más. El resumen cabe en una frase: hasta diez, se aprende; del once al diecinueve hay nueve formas y no cabe equivocarse; de veinte a noventa y nueve, el esquema de arriba ya da todas, y nadie necesita aprender nada más.

El versículo que ata las dos mitades es Juan 18:18. Pedro niega a Jesús y el texto marca la hora: {sam} {si}, hacia las tres, en el momento en que los guardias vuelven a la sala y la luz del fuego ilumina su rostro. Es un numeral sino-coreano en una hora de reloj, y el mismo número en el habla de quien contó la historia es {se} {si}. La misma noche, la misma hora, dos sistemas: lo escrito sigue el sino-coreano porque una hora de reloj es medida de tiempo, y el habla sigue el nativo porque es gente hablando. Quien pregunta cuál de los dos es el verdadero no sabe coreano: los dos lo son.
`),
  vocab: [
    V('il', '일', 'uno; numeral sino-coreano (il)'),
    V('i', '이', 'dos; numeral sino-coreano (i)'),
    V('sam', '삼', 'tres; numeral sino-coreano (sam)'),
    V('sip', '십', 'diez; numeral sino-coreano (sip)'),
    V('hana', '하나', 'uno; numeral nativo (hana)'),
    V('dul', '둘', 'dos; numeral nativo (dul)'),
    V('se', '세', 'tres; numeral nativo (se)'),
    V('nol', '놀', 'la parte "diez" del dieciséis: sim {nol}'),
    V('si', '시', 'hora; va justo detrás del numeral y hace de contador'),
    V('jeongal', '정각', 'en punto; la hora exacta, y concuerda con la hora (jeongal)'),
    V('ohaseo', '오전', 'mañana; antes del mediodía (ohaseo)'),
    V('gayo', '오후', 'tarde; después del mediodía (gayo)'),
    V('myeong', '명', 'contador de personas (myeong)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El coreano tiene dos sistemas numéricos y la elección entre ellos es de TIPO DE COSA, no de registro: la pregunta es si lo que se cuenta es contable.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sino-coreano para cosas, minutos, horas escritas, meses, días, monedas y años ({il} a {sip}); nativo para lo incontabable, para las personas ({hana} a die) y para las edades.',
      ),
    },
    {
      n: '3',
      text: T(
        'Las personas llevan siempre el nativo y el contador {myeong} es obligatorio: {se} {myeong} sarang. A partir de diez ese mismo contador cambia de pronunciación, {sip} {myeong}, sin cambiar de escritura.',
      ),
    },
    {
      n: '4',
      text: T(
        'La hora del reloj es sino-coreana por escrito ({sam} {si}) y nativa en el habla ({se} {si}); {jeongal} es el "en punto" y concuerda con la hora, y {ohaseo} y {gayo} separan mañana de tarde.',
      ),
    },
    {
      n: '5',
      text: T(
        'En los números de dos cifras el diez va siempre antes: sim {nol} es dieciséis. Del 11 al 19 el "diez" cambia de sonido ({nol}, hul) y en las demás décadas vuelve a {sip}, con dol en lugar del dos.',
      ),
    },
  ],
  notes: [
    {
      label: T('El sino-coreano es el mismo que el mandarín'),
      text: T(
        'Los dos sistemas coreanos no tienen la misma edad. El sino-coreano vino del chino por los hanja y se comparte con el mandarín y el japonés; el nativo es coreano y no tiene equivalente fuera de la lengua. Por eso quien ya sabe mandarín reconoce enseguida la serie de los días y los meses, y aprende dos veces lo mismo para las personas.',
      ),
    },
    {
      label: T('La misma hora, dos sistemas'),
      text: T(
        'No hay un coreano "correcto" para la hora del reloj: está el sino-coreano de los horarios escritos y el nativo de la conversación, y los dos circulan el mismo día. Un traductor que no sepa cuál elegir produce una frase que ningún hablante diría — o, peor, una en que la persona que aparece en el texto simplemente desaparece.',
      ),
    },
  ],
  examples: [
    {
      text: '사람 세 명',
      gloss: T('sarang se myeong — tres personas: numeral nativo, contador, sustantivo'),
    },
    { text: '삼 시쯤', gloss: T('sam sijjeum — hacia las tres: hora escrita en sino-coreano') },
    { text: '세 시', gloss: T('se si — las tres: la misma hora, dicha con numeral nativo') },
    {
      text: '돼지 여섯 마리',
      gloss: T('dwaeji yeoseot mari — seis cerdos: cosa, luego sino-coreano, más contador'),
    },
  ],
  tables: [
    {
      caption: T('Los dos sistemas lado a lado, y dónde entra cada uno'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('Dónde manda el nativo')],
      rows: [
        [T('1'), T('{il}'), T('{hana}'), T('personas y edades')],
        [T('2'), T('{i}'), T('{dul}'), T('personas y edades')],
        [T('3'), T('{sam}'), T('{se}'), T('personas')],
        [T('4'), T('sa'), T('sa'), T('palabra igual en los dos')],
        [T('5'), T('o'), T('o'), T('palabra igual en los dos')],
        [T('6'), T('yuk'), T('nul'), T('personas')],
        [T('7'), T('chil'), T('yil'), T('personas')],
        [T('8'), T('pal'), T('pal'), T('palabra igual en los dos')],
        [T('9'), T('gu'), T('gu'), T('palabra igual en los dos')],
        [T('10'), T('{sip}'), T('die'), T('meses, días, monedas, años')],
      ],
    },
    {
      caption: T('Del once al diecinueve, donde el "diez" cambia de sonido'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('Cómo se descompone')],
      rows: [
        [T('11'), T('{sip} {il}'), T('yeol han'), T('diez y uno, sin cambio')],
        [T('12'), T('{sip} hul'), T('yeol dul'), T('el dos se vuelve hul')],
        [T('13'), T('{sip} {sam}'), T('yeol set'), T('diez y tres')],
        [T('14'), T('{sip} sa'), T('yeol net'), T('diez y cuatro')],
        [T('15'), T('{sip} o'), T('yeol daseot'), T('diez y cinco')],
        [T('16'), T('sim {nol}'), T('yeol yeoseot'), T('el diez se vuelve {nol}')],
        [T('17'), T('{sip} chil'), T('yeol ilgop'), T('diez y siete')],
        [T('18'), T('{sip} pal'), T('yeol yeodeol'), T('diez y ocho')],
        [T('19'), T('{sip} gu'), T('yeol ahop'), T('diez y nueve')],
      ],
    },
    {
      caption: T('De veinte a noventa y nueve: el esquema basta'),
      head: [T('Número'), T('Sino-coreano'), T('Nativo'), T('Qué cambia')],
      rows: [
        [
          T('20'),
          T('{i} {sip}'),
          T('seoreun'),
          T('diez normal; en las decenas, el dos se vuelve dol'),
        ],
        [T('21'), T('{i} hul'), T('seoreun hana'), T('el dos se vuelve hul')],
        [T('32'), T('{sam} {i}'), T('seoreundol'), T('la decena es {sam}, la unidad es {i}')],
        [T('40'), T('sa {sip}'), T('saeseun'), T('de aquí en adelante no cambia nada')],
        [T('50'), T('o {sip}'), T('daseun'), T('igual al patrón')],
        [T('60'), T('yuk {sip}'), T('yueseun'), T('igual al patrón')],
        [T('70'), T('chil {sip}'), T('chilseun'), T('igual al patrón')],
        [T('80'), T('pal {sip}'), T('palseun'), T('igual al patrón')],
        [T('90'), T('gu {sip}'), T('auseun'), T('igual al patrón')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice, HABLADO, "las tres"?'),
    options: [T('{se} {si}'), T('{sam} {si}'), T('{se} {myeong}'), T('{sam} {jeongal}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "dieciséis" en la forma sino-coreana escrita: sim ____'),
      answer: '놀',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el numeral con lo que significa en el sistema indicado'),
      pairs: [
        { a: T('{sam}'), b: T('tres en el sistema sino-coreano') },
        { a: T('{se}'), b: T('tres en el sistema nativo') },
        { a: T('{hana}'), b: T('uno en el sistema nativo') },
        { a: T('{sip}'), b: T('diez en el sistema sino-coreano') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas personas son, en la forma correcta?'),
      options: [T('{se} {myeong}'), T('{sam} {myeong}'), T('{se}'), T('{sam} {myeong} sarang')],
      answer: 0,
    },
  ],
};
