import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escritura'),
  title: T('Bloques silábicos: hangul, hanja y las partículas que hacen el texto legible'),
  subtitle: T(
    'Cada cuadrado es una sílaba con anatomía fija, la vocal nunca falta y las partículas cambian con la última consonante',
  ),
  body: C(`## Un cuadrado, una sílaba

El coreano es aglutinante: una palabra es una pila de trozos, y cada trozo es una partícula pegada a la anterior. Y se escribe en bloques silábicos. Cada bloque es un cuadrado que representa exactamente una sílaba, ni menos ni más. Quien lee en portugués abre una página de coreano y ve un muro de cuadrados; lo que todavía no sabe es que todo cuadrado tiene la misma anatomía, siempre la misma, y que la anatomía se lee antes que la palabra.

El bloque tiene tres posiciones, y el orden de lectura es siempre este. Arriba a la izquierda, opcionalmente, una consonante inicial (g, k, n, s). En el centro y a la derecha, la vocal (a, eo, u, i), obligatoria y sin excepción. Abajo, opcionalmente, una consonante final (k, l, m, p). La consonante inicial suena antes que la vocal y la final suena después, y por eso el bloque se lee de arriba abajo y de izquierda a derecha. Un bloque con inicial, vocal y final es guk, "país": tres posiciones ocupadas, tres sonidos. Un bloque solo con vocal es "a": una posición, un sonido. Y no existe una tercera posibilidad.

## Un alfabeto, no un ideograma

El hangul se inventó en 1443, bajo el rey Sejong y con eruditos de la corte, y eso decide todo lo que viene después. No es un ideograma: es un sistema alfabético. Cada letra representa un sonido, exactamente como en el latín, y no un significado. Un ideograma representa cosas; una letra representa sonidos. Quien llega al coreano con el hábito de que el signo escrito *es* la palabra, y el hangul rompe esa costumbre el primer día de lectura.

La comparación que ata los tres idiomas de este proyecto: el japonés necesita dos sistemas, kana y kanji, y ninguno de los dos por sí solo escribe todo el japonés. El coreano también necesita dos, hangul y hanja, pero el hangul solo ya escribe todo lo que se habla. El hanja es el coreano escrito con caracteres chinos, todavía usado en nombres propios y en palabras sabidas; el hangul es el coreano coloquial. Así como el katakana es registro en japonés, el hanja es registro en coreano. La traducción coreana de 1917, la primera en coreano, es casi toda hanja; la actual es hangul, con hanja solo donde hace falta.

## La vocal no es opcional

Este es el detalle que ata coreano, mandarín y japonés, y el punto donde casi todo principiante tropieza. En mandarín hay sílabas terminadas solo en consonante: ba, bei, un sonido que se corta de golpe, sin vocal alguna. En coreano eso no existe. Ninguna sílaba coreana termina en consonante sin vocal. La consonante final vive abajo en el bloque, pero siempre después de una vocal. Es coda, no sonido final.

La consecuencia práctica: quien viene del mandarín busca el "sonido final" y no lo encuentra, porque lo que tiene es un sonido que en japonés se habría perdido dentro de un kanji. Y quien escribe coreano nunca tiene que elegir entre dos formas para la misma sílaba, porque una sílaba sin vocal nunca existe para chocar con otra.

## Las partículas y el orden

La gancho central del coreano son las partículas, y sin ellas un texto coreano es una secuencia de cuadrados sin relación entre sí. {eun} y {neun} marcan el tema, aquello de lo que trata la frase, que no es necesariamente el sujeto. {i} y {gwa} marcan el sujeto: {sarang} con {i} o {gwa} es la persona funcionando como sujeto. {eul} y {reul} marcan el objeto directo. {e} es destino, lugar o tiempo; {eseo} es origen, "a partir de".

La elección entre los dos miembros de cada par es mecánica y no admite gusto: cuenta la última consonante de la palabra. Una palabra con consonante final toma la forma dura, {eun}, {i}, {eul}. Una palabra terminada en vocal toma la forma blanda, {neun}, {gwa}, {reul}. guk termina en k y por eso lleva {eun}; nara termina en a y por eso lleva {neun}. Equivocarse aquí es el error más común del principiante y el más visible, porque el oyente espera la otra pronunciación y no entiende lo que quisiste decir.

Y el orden es objeto, verbo, sujeto: {naneun yeohaeneul sseumnida}, "yo leo un libro", con el objeto antes del verbo y el sujeto antes del objeto. Quien traduce palabra por palabra del portugués construye sujeto, verbo, objeto y produce una frase que suena a traducción. Son las partículas las que salvan: declaran la función de cada pieza aunque la posición mienta.

La traducción coreana de 1917 es toda hanja, y la actual es hangul. En Juan 1:1, "en el principio era el Verbo", el Verbo aparece como sustantivo, y en coreano moderno todo sustantivo que es sujeto lleva {i} o {gwa}. El portugués no tiene esa partícula: en "el Verbo" y en "yo leo" el sustantivo se trata igual. Una traducción coreana de Juan 1 lleva una marca que la portuguesa no lleva, y esa marca está diciendo qué hizo la frase con la palabra.
`),
  vocab: [
    V('eun', '은', 'tema después de palabra con consonante final (eun)'),
    V('neun', '는', 'tema después de palabra terminada en vocal (neun)'),
    V('i', '이', 'sujeto después de palabra con consonante final (i)'),
    V('gwa', '가', 'sujeto después de palabra terminada en vocal (gwa)'),
    V('eul', '을', 'objeto directo después de palabra con consonante final (eul)'),
    V('reul', '를', 'objeto directo después de palabra terminada en vocal (reul)'),
    V('e', '에', 'destino, lugar o tiempo (e)'),
    V('eseo', '에서', 'origen; a partir de (eseo)'),
    V('sarang', '사람', 'persona; ser humano (sarang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo bloque es una sílaba: consonante inicial opcional, vocal obligatoria, consonante final opcional.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ninguna sílaba coreana carece de vocal. El mandarín sí las tiene — y por eso quien viene de allí busca un sonido que no está.',
      ),
    },
    {
      n: '3',
      text: T(
        '{eun} {neun} es tema, {i} {gwa} es sujeto y {eul} {reul} es objeto directo: la forma dura o blanda depende solo de la última consonante de la palabra.',
      ),
    },
    {
      n: '4',
      text: T(
        '{e} es destino, lugar o tiempo; {eseo} es origen. Confundir las dos es el error más común del principiante.',
      ),
    },
    {
      n: '5',
      text: T(
        'El orden es objeto – verbo – sujeto, el inverso al portugués. Las partículas declaran la función, así que la posición puede mentir.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un alfabeto de un lado, un ideograma del otro'),
      text: T(
        'El hangul se inventó en 1443 y cada una de sus letras representa un sonido; un kanji representa una cosa. El coreano necesita ambos, hangul y hanja, igual que el japonés necesita kana y kanji — pero el hangul solo ya escribe todo lo que se habla.',
      ),
    },
    {
      label: T('El sustantivo coreano lleva partícula'),
      text: T(
        'En coreano moderno el sustantivo recibe {i} o {gwa} cuando es sujeto. En Juan 1:1 el Verbo aparece como sustantivo y por eso lleva partícula; el portugués no tiene marca alguna. Un traductor que desconoce el sistema pierde la información al traspasar.',
      ),
    },
  ],
  examples: [
    { text: '한국어', gloss: T('han-gu-geo — coreano; tres bloques, tres sílabas') },
    { text: '사람이', gloss: T('sarang-i — la persona (sujeto tras consonante: i)') },
    { text: '학교에', gloss: T('hak-gyo-e — a la escuela (destino: e)') },
    { text: '집에서', gloss: T('jib-e-seo — desde casa (origen: eseo)') },
  ],
  tables: [
    {
      caption: T('La anatomía del bloque, leída de arriba abajo'),
      head: [
        T('Posición en el cuadrado'),
        T('Elemento'),
        T('Obligatorio'),
        T('Sonidos típicos'),
        T('Símbolos'),
      ],
      rows: [
        [
          T('arriba a la izquierda'),
          T('consonante inicial'),
          T('no'),
          T('g, k, n, s, j'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ}'),
        ],
        [
          T('centro y derecha'),
          T('vocal'),
          T('sí, siempre'),
          T('a, eo, u, i, o'),
          T('{ㅏ} {ㅓ} {ㅜ} {ㅣ} {ㅗ}'),
        ],
        [
          T('abajo'),
          T('consonante final'),
          T('no'),
          T('k, l, m, p, t'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ}'),
        ],
        [
          T('el cuadrado entero'),
          T('una sílaba'),
          T('es la unidad de lectura'),
          T('nunca dos sílabas'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('La partícula cambia con la última consonante de la palabra'),
      head: [
        T('Palabra (romanización)'),
        T('Última letra'),
        T('Tiene consonante final'),
        T('Tema'),
        T('Sujeto'),
        T('Objeto'),
      ],
      rows: [
        [T('guk'), T('k'), T('sí'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('bang'), T('ng'), T('sí'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('mul'), T('l'), T('sí'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('sarang'), T('ng'), T('sí'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('nara'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}')],
        [T('cha'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('La palabra guk termina en consonante. ¿Qué partícula de sujeto lleva?'),
    options: [T('{i}'), T('{gwa}'), T('{eun}'), T('{reul}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "la persona" como sujeto, tras una consonante: 사람____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la partícula con su función'),
      pairs: [
        { a: T('{eun}'), b: T('tema tras consonante final') },
        { a: T('{neun}'), b: T('tema tras vocal') },
        { a: T('{e}'), b: T('destino, lugar o tiempo') },
        { a: T('{eseo}'), b: T('origen; a partir de') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas afirmaciones sobre el bloque coreano es verdadera?'),
      options: [
        T('toda sílaba coreana tiene vocal'),
        T('hay sílabas terminadas solo en consonante'),
        T('el hangul es un ideograma'),
        T('el hanja es el coreano coloquial'),
      ],
      answer: 0,
    },
  ],
};
