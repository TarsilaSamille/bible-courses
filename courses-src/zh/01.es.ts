import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escritura'),
  title: T('El ideograma es una palabra, no una letra'),
  subtitle: T(
    'Ningún carácter representa un sonido, y por eso el aprendizaje va de la forma al conjunto',
  ),
  body: C(`## Un carácter, una **palabra**

En portugués, "a" es una letra y "casa" son cuatro. En chino no existe esa separación: cada carácter vale por una palabra o por un pedazo de ella. No hay una "a" suelta, y por eso nadie dice que alguien "escriba con letras" en chino: se dice {cá} {zi} {xiě}, "componer caracteres".

La consecuencia es la inversa de la portuguesa. Reconocer el sonido de una palabra inglesa no dice nada sobre su significado; reconocer un carácter chino ya dice el significado, aunque no se entienda la frase. Quien empieza leyendo {Zhōng} {guó} ("China") entiende más de un vistazo que quien sigue memorizando el alfabeto pinyin.

## Por qué los caracteres no parecen un código

Hay quien lee el chino como un cifrado: cada carácter sería una letra cambiada. No lo es. Un carácter es una palabra, y las palabras se combinan como en cualquier lengua. {nǐ} {hǎo} son dos palabras, "tú eres bueno", no tres letras.

Los caracteres tampoco se inventaron de una vez. {日} y {月}, sol y luna, son los componentes de {明}, "claro", y reconocer esas combinaciones es lo que hace crecer rápido el vocabulario.

## Qué trae la escritura a la lectura bíblica

Tres cosas. La Versión Unión ({和合本}, 1919) usó caracteres ya corrientes en la escritura del siglo XIX, así que el texto antiguo se lee hoy sin sonar arcaico. La referencia bíblica es libro, capítulo y versículo, en el mismo orden que en Occidente. Y como cada carácter es una palabra, un versículo de Juan 1 tiene unas veinte palabras: se pueden aprender una a una.`),
  vocab: [
    V('zhōng', '中', 'medio; centro; China (zhōngguó)'),
    V('guó', '国', 'país (guó)'),
    V('hǎo', '好', 'bueno (hǎo)'),
    V('人', '人', 'persona; gente (rén)'),
    V('日', '日', 'sol; día (rì)'),
    V('月', '月', 'luna; mes (yuè)'),
    V('明', '明', 'claro; brillante (míng)'),
    V('cá', '字', 'carácter (zì)'),
    V('xiě', '写', 'escribir (xiě)'),
    V('和合本', '和合本', 'la Unión, Biblia china de 1919'),
  ],
  rules: [
    { n: '1', text: T('Un carácter representa una palabra, no un sonido. No hay alfabeto chino.') },
    { n: '2', text: T('Reconocer el carácter ya da el significado: lo contrario del portugués.') },
    {
      n: '3',
      text: T('Reconocer los componentes (radicales) abre puertas: {明} contiene {日} y {月}.'),
    },
  ],
  notes: [
    {
      label: T('Qué traducción china usar'),
      text: T(
        '{和合本} (Unión, 1919) es la más leída y usa caracteres ya corrientes en la escritura del siglo XIX, así que el texto no suena arcaico.',
      ),
    },
    {
      label: T('Mandarín o cantonés'),
      text: T(
        'El curso enseña mandarín estándar (putonghua), la lengua de {和合本} en la península. El cantonés usa casi los mismos caracteres y otra pronunciación.',
      ),
    },
  ],
  examples: [
    { text: '中', gloss: T('centro; China') },
    { text: '中国', gloss: T('China') },
    { text: '好人', gloss: T('persona buena') },
    { text: '明', gloss: T('claro (sol + luna)') },
    { text: '写字', gloss: T('escribir caracteres') },
  ],
  tables: [
    {
      caption: T('Tres caracteres descompuestos'),
      head: [T('Carácter'), T('Componente'), T('Sentido')],
      rows: [
        [T('明'), T('{日} + {月}'), T('sol + luna = claro')],
        [T('好'), T('{女} + {子}'), T('mujer + hijo = bueno')],
        [T('和'), T('{禾} + {口}'), T('grano + boca = armonía')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa {明} y por qué?'),
    options: [
      T('Claro, porque une sol y luna'),
      T('Oscuro, porque es la noche'),
      T('No tiene significado propio'),
      T('Solo significa "escribir"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe el carácter de la luna: ____'),
      answer: '月',
      hint: T('El mismo carácter significa también "mes".'),
    },
    {
      kind: 'match',
      prompt: T('Une el carácter con su sentido'),
      pairs: [
        { a: T('{人}'), b: T('persona') },
        { a: T('{日}'), b: T('sol; día') },
        { a: T('{好}'), b: T('bueno') },
        { a: T('{字}'), b: T('carácter') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
