import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Partículas'),
  title: T('Partículas: la misma palabra con dos formas, y el motivo de que eso exista'),
  subtitle: T(
    'Una forma tras consonante final, otra tras vocal — y bajo esa regla está la razón de que el coreano no tenga artículo ni plural',
  ),
  body: C(`## La regla que parece imposible y no lo es

Toda partícula del coreano tiene dos formas, y la elección entre ellas es mecánica: cuenta la última consonante del nombre. {haksang} termina en ng y por eso lleva {i}; {cha} termina en a y por eso lleva {gwa}. Son la misma partícula: la del sujeto. Lo mismo vale para {eul} {reul}, la del objeto directo, para {eun} {neun}, la del tema, y para {wa}, que hace la conjunción y.

Lo que el principiante no ve es que {i} y {gwa} no son dos palabras: son una palabra con dos formas. Quien lee en portugués oye dos palabras y concluye que hay dos palabras; son la misma partícula, pronunciada de dos maneras.

Y la diferencia con el portugués aparece ya en la elección. El artículo portugués cambia con el género, que es una propiedad de la cosa. La partícula coreana cambia con la última letra escrita del nombre, que es una propiedad del sonido. En coreano no hay género ni hay número: uno vale para uno y para muchos. No hay artículo ni plural.

## Por qué existe: la partícula también avisa si el nombre tiene consonante final

El portugués resuelve todo eso con artículo, con número y con preposición, y nada de eso va escrito en el nombre: el artículo va pegado, la preposición aparte. El coreano eligió distinto. No tiene artículo, no distingue el plural, y por eso la partícula carga dos informaciones a la vez: cuál es la función del nombre en la frase y si el nombre tiene o no consonante final. La partícula es lo que hace legible la frase, más que el orden de las palabras.

El error típico del principiante es escribir el nombre separado de la partícula, como si fueran dos palabras del portugués. En coreano es UNA palabra escrita pegada: {haksang}-i, el alumno, tres letras. El sustantivo y su partícula forman un único bloque ortográfico, igual que en portugués nadie escribe el artículo separado por un espacio. Escribir {haksang} {i} separado produce una frase que el oyente no reconoce, y la causa es ortográfica, no de léxico: falta la regla de la pega.

El mecanismo entero cabe en una frase: cuenta la última consonante del nombre, elige la forma dura o la blanda, pégala al sustantivo, escríbelo todo junto. Cuatro pasos, sin excepción y sin gusto.

## Tema y sujeto: la diferencia más profunda del coreano

{eun} {neun} marca el tema, aquello de lo que se comenta; {i} {gwa} apunta al sujeto gramatical, quien ejecuta el verbo. El mismo nombre puede recibir cualquiera de las dos en frases distintas, y elegir una en vez de la otra cambia el sentido, no el estilo. Este contraste es el más fondo del coreano, y el japonés tiene algo muy parecido en {wa} y {ga}.

El ejemplo mínimo muestra la diferencia sin ruido. En "yo soy alumno" el pronombre {nan} con {eun} da {nan-eun haksang-imnida}, en cuanto a mí, soy alumno: yo soy el asunto comentado, y alumno es lo que se dice de ese asunto. Cambiando a {na} con {gwa}, el mismo sustantivo, yo pasa a ser el foco de la aserción: la pregunta implícita pasa a ser qué soy yo, y no qué se está diciendo de mí. Nada cambió de posición en el texto; cambió la partícula.

Por eso "yo soy alumno" en coreano no es la frase que sugiere el portugués. El portugués tiene una sola manera de decirlo, y esa manera es ambigua entre tema y sujeto; el coreano está obligado a elegir, y la elección es información.

## Objeto, objeto indirecto y el orden de la frase

{eul} {reul} marca el objeto directo. El objeto indirecto tiene tres partículas que el principiante confunde sin parar, porque el portugués lo resuelve con tres preposiciones distintas: {eseo} es origen, de dónde, "de casa"; {e} es destino, lugar o tiempo, "a la escuela"; {hante} es destinatario, a alguien, "a un amigo". Cuando aparecen los dos objetos, el indirecto va antes del directo.

Y la pila se cierra. El orden es objeto indirecto, objeto directo, verbo, sujeto, y las partículas viajan pegadas a los nombres, siempre antes del verbo. Son ellas las que declaran la función de cada pieza, aunque la posición mienta: eso es lo que permite que una frase coreana sea objeto, verbo, sujeto y aun así se lea sin ambigüedad.

Tres partículas menores aparecen todo el tiempo: {hago} hace la conjunción y escrita, {cheoreom} es como, igual a, y {man} restringe, solo, únicamente. {man} combina con cualquier otra partícula, porque no sustituye ninguna: se suma.

El gancho bíblico está en la primera línea de Juan 1:1, en el principio era el Verbo. El sustantivo Palabra, {mal}, es sujeto del verbo ser, y en coreano moderno todo sujeto recibe partícula: {mal}-i, la Palabra, por ejemplo en {mal}-i-seo. La traducción coreana de 1917, la primera en coreano, está escrita casi toda en hanja, y el coreano en hanja de aquel começo no escribía las partículas: la partícula se recuperaba de la forma del sustantivo y del contexto, no de los caracteres. Dicho de otro modo, los traductores de 1917 tuvieron que decidir si mostraban las partículas o no. Cada partícula que aparece hoy en las Biblias coreanas es una decisión editorial tomada hace más de un siglo, y es una decisión gramatical, no estilística.
`),
  vocab: [
    V('eun', '은', 'tema después de palabra con consonante final (eun)'),
    V('neun', '는', 'tema después de palabra terminada en vocal (neun)'),
    V('i', '이', 'sujeto después de palabra con consonante final (i)'),
    V('gwa', '가', 'sujeto después de palabra terminada en vocal (gwa)'),
    V('eul', '을', 'objeto directo después de palabra con consonante final (eul)'),
    V('reul', '를', 'objeto directo después de palabra terminada en vocal (reul)'),
    V('wa', '와', 'y; junto con (wa)'),
    V('hago', '하고', 'y; junto con (hago)'),
    V('e', '에', 'destino, lugar o tiempo (e)'),
    V('eseo', '에서', 'origen; de; a partir de (eseo)'),
    V('hante', '한테', 'a alguien; destinatario (hante)'),
    V('cheoreom', '처럼', 'como; igual a (cheoreom)'),
    V('man', '만', 'solo; únicamente (man)'),
    V('haksang', '학생', 'alumno; estudiante (haksang)'),
    V('nan', '나', 'yo; primera persona, forma de tema (nan)'),
    V('na', '나', 'yo; primera persona, forma de sujeto (na)'),
    V('mal', '말', 'palabra (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda partícula tiene dos formas y la elección es mecánica: cuenta la última consonante del nombre. Una palabra con consonante final toma la forma dura, una palabra terminada en vocal toma la forma blanda. Nunca por gusto.',
      ),
    },
    {
      n: '2',
      text: T(
        'El sustantivo y la partícula se escriben juntos: {haksang}-i es una palabra, el alumno. Escribirlos separados es un error de ortografía, no de léxico.',
      ),
    },
    {
      n: '3',
      text: T(
        'El coreano no tiene artículo y no distingue el plural. Por eso la partícula hace dos cosas a la vez: declara la función del nombre y dice si tiene consonante final.',
      ),
    },
    {
      n: '4',
      text: T(
        '{eun} {neun} es tema, aquello que se comenta; {i} {gwa} es sujeto, quien ejecuta el verbo. Cambiar una por otra cambia el sentido de la frase, no el estilo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{eul} {reul} es objeto directo; {eseo} es origen, {e} es destino, lugar o tiempo y {hante} es destinatario. El indirecto va antes del directo, y toda partícula queda antes del verbo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una partícula, no dos palabras'),
      text: T(
        'El principiante oye {i} y {gwa} como dos palabras y no entiende el idioma. Son la misma palabra con dos formas, como el artículo portugués tiene dos — pero en coreano la elección es fonética, hecha por la última letra del nombre, y no por género.',
      ),
    },
    {
      label: T('La Biblia coreana de 1917 y las partículas'),
      text: T(
        'La traducción coreana de 1917 es casi toda hanja, y el coreano en hanja de aquel começo no escribía las partículas: se recuperaban de la forma del sustantivo y del contexto. Los traductores tuvieron que decidir si mostrarlas, y cada partícula que aparece hoy en las Biblias coreanas es esa decisión, que es gramatical y no estilística.',
      ),
    },
  ],
  examples: [
    { text: '학생이', gloss: T('haksang-i — el alumno (sujeto tras consonante ng: i)') },
    { text: '말이', gloss: T('mal-i — la Palabra (sujeto tras consonante l: i)') },
    { text: '말을', gloss: T('mal-eul — la Palabra (objeto directo tras consonante l: eul)') },
    { text: '친구한테', gloss: T('chin-gu-han-te — a un amigo (destinatario: hante)') },
    { text: '집에서', gloss: T('jib-e-seo — desde casa (origen: eseo)') },
  ],
  tables: [
    {
      caption: T('La partícula cambia con la última consonante del nombre'),
      head: [
        T('Nombre (romanización)'),
        T('Última letra'),
        T('Tiene consonante final'),
        T('Tema'),
        T('Sujeto'),
        T('Objeto directo'),
        T('Y'),
      ],
      rows: [
        [T('haksang'), T('ng'), T('sí'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('sarang'), T('ng'), T('sí'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('mul'), T('l'), T('sí'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('guk'), T('k'), T('sí'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('nan'), T('n'), T('sí'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('cha'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
        [T('uri'), T('i'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
      ],
    },
    {
      caption: T('A qué apunta cada partícula, y qué hace el portugués en su lugar'),
      head: [T('Caso'), T('Partícula'), T('A qué apunta'), T('Qué hace el portugués en su lugar')],
      rows: [
        [
          T('Quien ejecuta el verbo'),
          T('{i} {gwa}'),
          T('el sujeto gramatical'),
          T('nada: el portugués no marca el sujeto'),
        ],
        [
          T('Asunto ya conocido'),
          T('{eun} {neun}'),
          T('aquello que se comenta'),
          T('tampoco nada: el portugués no distingue tema de sujeto'),
        ],
        [
          T('Destino, lugar, tiempo'),
          T('{e}'),
          T('adónde, dónde, cuándo'),
          T('la preposición a, en, para'),
        ],
        [T('Origen'), T('{eseo}'), T('de dónde, a partir de dónde'), T('la preposición de, desde')],
        [T('Destinatario'), T('{hante}'), T('a quién se dirige la acción'), T('la preposición a')],
        [
          T('Blanco directo'),
          T('{eul} {reul}'),
          T('el objeto directo'),
          T('nada: el sustantivo objeto no lleva marca alguna'),
        ],
      ],
    },
    {
      caption: T('El orden fijo que ata la lección 1'),
      head: [
        T('Paso'),
        T('Lo que aparece'),
        T('Qué partícula lo marca'),
        T('Lo que hace el texto'),
      ],
      rows: [
        [
          T('1'),
          T('objeto indirecto'),
          T('{eseo} {hante} {e}'),
          T('dice de dónde, a quién, adónde'),
        ],
        [T('2'), T('objeto directo'), T('{eul} {reul}'), T('dice qué alcanza la acción')],
        [T('3'), T('verbo'), T('ninguna'), T('dice qué ocurre')],
        [T('4'), T('sujeto'), T('{i} {gwa}'), T('dice quién ejecuta la acción')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('La palabra cha termina en vocal. ¿Qué partícula de sujeto lleva?'),
    options: [T('{gwa}'), T('{i}'), T('{eul}'), T('{wa}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "la Palabra" como sujeto, tras una consonante final (l): 말____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la partícula con el caso que marca'),
      pairs: [
        { a: T('{i} {gwa}'), b: T('sujeto: quien ejecuta el verbo') },
        { a: T('{eun} {neun}'), b: T('tema: aquello que se comenta') },
        { a: T('{eul} {reul}'), b: T('objeto directo: el blanco de la acción') },
        { a: T('{eseo}'), b: T('origen: de dónde') },
        { a: T('{hante}'), b: T('destinatario: a quién') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'En "en cuanto a mí, soy alumno", el pronombre yo es el asunto comentado, no el sujeto gramatical. ¿Qué partícula lleva?',
      ),
      options: [T('{eun}'), T('{i}'), T('{eul}'), T('{eseo}')],
      answer: 0,
    },
  ],
};
