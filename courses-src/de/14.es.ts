import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Los adjetivos'),
  subtitle: T('fuerte, débil y mixto'),
  section: T('Adjetivos y adverbios'),
  body: C(`El adjetivo alemán se flexiona de tres maneras, y la elección depende de lo que viene antes. Si no hay nada, o si lo que viene es un cuantificador débil, el adjetivo toma la forma fuerte; si viene un artículo definido o un posesivo, es débil.

La declinación débil es la más fácil: -e, -en, -e, -en. Der schöne Mann, die schöne Frau, das schöne Kind, die schönen Männer, mit einem schönen Kind. La razón es histórica: el artículo ya llevaba la información de caso, y el adjetivo solo concordaba en género y número.

La declinación fuerte usa las terminaciones -er, -e, -es, -en y aparece cuando no hay artículo: schöne Männer. Las formas realmente fuertes aparecen con cuantificadores como alle, beide, viele, einige, keine, mehrere: Alle neuen Bücher sind teuer. También aparecen sin determinante alguno: Neue Bücher kosten viel.

La declinación mixta afecta solo a los adjetivos sin -e en el radical cuando los precede un artículo definido: hoch, teuer, dunkel, hell, kalt, warm, stark, schwach, jung. En esos casos la terminación fuerte no aparece: der hohe Berg, die hohe Schule, mit hohem Tempo, ein junger Mann. Con un cuantificador, sin embargo, vuelve la forma fuerte: hohe Berge.

Un último detalle: los adjetivos terminados en -d o -t pierden la -e de las formas débiles. schön da schöne, pero groß da große, gut da gute, warm da warme. Por eso la forma débil de schön parece la regla y la de groß, la excepción.`),
  vocab: [
    V('schön', 'schön', 'bonito, hermoso (fuerte: schöner)'),
    V('groß', 'groß', 'grande (fuerte:größer)'),
    V('hoch', 'hoch', 'alto (mixto: der hohe)'),
    V('jung', 'jung', 'joven (mixto: ein junger)'),
    V('kalt', 'kalt', 'frío (mixto: la fría)'),
    V('teuer', 'teuer', 'caro (mixto: lo caro)'),
    V('neu', 'neu', 'nuevo (fuerte en plural: neue)'),
    V('gut', 'gut', 'bueno (débil: el bueno)'),
    V('warm', 'warm', 'cálido (débil: la cálida)'),
    V('der schöne Mann', 'schön', 'el guapo hombre (débil)'),
    V('ein schönes Kind', 'schön', 'una niña bonita (neutro débil -es)'),
    V('mit einem schönen Kind', 'schön', 'con una niña bonita (dativo débil -en)'),
    V('alle neuen Bücher', 'neu', 'todos los libros nuevos (fuerte)'),
    V('neue Bücher', 'neu', 'libros nuevos (fuerte sin artículo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta en «ein ___ Kind»?'),
    options: [T('schönes'), T('schön'), T('schöner'), T('schönen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el adjetivo débil: der ___ Mann (nuevo)'),
      answer: 'neue',
      hint: T('Neutro en -t pierde la -e: neue.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el adjetivo fuerte: ___ Bücher sind neu (todos los libros).'),
      answer: 'Alle neuen',
      hint: T('alle exige forma fuerte.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué secuencia es correcta?'),
      options: [
        T('con un tempo alto'),
        T('con un tempo alto (inflexión errónea)'),
        T('con un tempo alto (sin terminación)'),
        T('con un tempo alto (terminación de dativo -em)'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el determinante con la declinación.'),
      pairs: [
        { a: T('der'), b: T('débil') },
        { a: T('mein'), b: T('débil') },
        { a: T('viele'), b: T('fuerte') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Un adjetivo como predicado nunca se flexiona: Die Kinder sind klein, no kleine.'),
    },
    {
      n: '2',
      text: T(
        'Tras ein y los posesivos la forma es siempre débil: ein junger Mann, mein altes Haus.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tras alle, viele, einige, keine, beide y muchos cuantificadores la forma es fuerte: alle jungen Leute.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los adjetivos en -d y -t pierden la -e de la forma débil: groß → große, gut → gute, warm → warme, stark → starke.',
      ),
    },
  ],
  notes: [
    {
      label: T('Adjetivo débil y fuerte'),
      text: T(
        'El nombre débil no significa una forma más débil. La forma débil es la que aparece tras un determinante, y es la más común en el habla. La fuerte aparece cuando el adjetivo tiene que llevar sozinho la información de caso, lo que ocurre sobre todo con cuantificadores. Compara: der neue Wagen (el coche nuevo) y ein neuer Wagen (un coche nuevo) frente a neue Wagen kosten viel (los coches nuevos cuestan mucho).',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 1:1, war das Wort. En la traducción de Lutero los adjetivos seguidos de artículo casi siempre adoptan la forma débil, mientras que los textos más literarios conservan la alternancia fuerte. Reconocer la forma débil es, en la práctica, reconocer la arquitectura de la oración.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der schöne Mann ist mein Lehrer.',
      gloss: T('El guapo hombre es mi profesor (adjetivo débil).'),
    },
    {
      text: 'Ein schönes Kind spielt im Garten.',
      gloss: T('Una niña bonita juega en el jardín (neutro débil -es).'),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('Hablo con un anciano (dativo débil -en).'),
    },
    {
      text: 'Alle neuen Bücher sind teuer.',
      gloss: T('Todos los libros nuevos son caros (fuerte).'),
    },
    {
      text: 'Neue Wagen kosten viel.',
      gloss: T('Los coches nuevos cuestan mucho (fuerte sin artículo).'),
    },
    {
      text: 'Der hohe Berg ist schön.',
      gloss: T('La montaña alta es bonita (mixto: hohe, schön).'),
    },
    { text: 'Er fährt mit hohem Tempo.', gloss: T('Conduce a gran velocidad (dativo mixto -em).') },
    {
      text: 'Das ist ein guter Rat.',
      gloss: T('Eso es un buen consejo (gut en -t pierde la -e).'),
    },
  ],
  tables: [
    {
      caption: T('Las tres declinaciones del adjetivo'),
      head: [T('Caso'), 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['forte (nom.)', 'schöner', 'schöne', 'schönes', 'schöne'],
        ['forte (acc.)', 'schönen', 'schöne', 'schönes', 'schöne'],
        ['fraco (nom.)', 'schöne', 'schöne', 'schöne', 'schönen'],
        ['fraco (acc.)', 'schönen', 'schöne', 'schöne', 'schönen'],
        ['fraco (dat.)', 'schönem', 'schöner', 'schönem', 'schönen'],
        ['fraco (gen.)', 'schönen', 'schöner', 'schönen', 'schöner'],
        ['misto (nom.)', 'der hohe', 'die hohe', 'das hohe', 'die hohen'],
        ['misto (dat.)', 'mit hohem', 'mit hoher', 'mit hohem', 'mit hohen'],
      ],
    },
    {
      caption: T('Qué declinación usar'),
      head: ['O que vem antes', 'Declinação', 'Exemplo'],
      rows: [
        ['der, die, das', 'fraca', 'der schöne Tag'],
        ['mein, dein, sein', 'fraca', 'mein schönes Zimmer'],
        ['ein, eine', 'fraca', 'eine schöne Idee'],
        ['dieser, jeder, welcher', 'fraca', 'jeder neue Tag'],
        ['alle, beide, viele, einige, keine', 'forte', 'alle neuen Häuser'],
        ['nada (plural genérico)', 'forte', 'neue Häuser'],
        ['nada (singular genérico)', 'forte', 'neuer Wein'],
        ['adjetivo em predicado', 'sem flexão', 'Der Wein ist neu.'],
      ],
    },
  ],
};
