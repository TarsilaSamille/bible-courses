import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('El sustantivo: contable e incontables'),
  subtitle: T('information, advice, furniture — la frontera que decide el idioma'),
  section: T('Sustantivos'),
  body: C(`## La frontera es del idioma, no de la lógica

{Information} es contable en casi todo el português de la calle: "uma informação importante", "três informações". En inglés {information} no tiene plural, y {an information} no existe. Lo mismo vale para {advice}, {furniture}, {research}, {evidence}, {luggage} y {progress}. Quien traduce desde el portugués escribe {many informations} sin notar que está contando, en una lengua, algo que la otra no cuenta.

La regla cabe en una línea: **contable** es el sustantivo que el inglés marca con {a} o {an} en singular y pluraliza en plural; **incontable** es lo que se mide, no se cuenta. La pregunta que decide es {How many}, y la de la masa es {How much}.

Génesis 1:1 en la KJV trae {heaven and earth}: dos masas, sin artículo y sin plural. El portugués del mismo versículo diría "o céu e a terra", y el versículo siguiente muestra que el contexto vecino usa artículo y plural a voluntad; la ausencia en esas dos palabras no es omisión, es gramática.

## El par que lo resuelve

Cuando el sustantivo es incontable y la frase necesita una unidad, el inglés usa **a piece of** más el sustantivo en singular: {a piece of advice}, {a piece of furniture}, {a piece of information}. El nombre después de {of} vuelve al singular y no pluraliza, y {a piece of advices} está mal.

El mismo mecanismo sirve para otras medidas: {an hour of study}, {a cup of water}, {a kilo of flour}, {a piece of bread}. Con cualquiera de ellas el verbo queda en singular, porque lo que se cuenta es la medida y no la cosa: {a piece of bread was on the table}.

Cuando el sustantivo ya es contable, el par sobra: {a piece of book} no existe, y lo que se quiere decir es {a book}.

## Dónde aparece la masa en la KJV

Juan 15:5 habla de {much fruit}, y la imagen es agrícola: la fruta se cuenta en unidades, pero la cantidad se nombra con {how much}. {Water}, {bread}, {wine}, {oil}, {money} y {love} son de la misma familia. Son palabras que el portugués tampoco cuenta, y por eso el error pasa inadvertido.

Un sustantivo contable puede volverse masa en otro sentido. {Work} es contable en plural ({the works of the Lord}) e incontable en singular ({I have a lot of work}). El contexto decide cuál de los dos está en juego, y la forma que aparece en el texto dice cuál.

## La pregunta que delata el error

"How much information do you have?" y "How many informations do you have?" no son dos maneras de decir lo mismo. La primera está bien; la segunda es lo que un hablante de portugués produce por generalización, y aparece en carteles y en formularios.

Cuando el sustantivo es masa, {a piece of} salva la frase en cualquier posición, y {an item of}, {a unit of} y {a piece of} hacen el mismo trabajo en registros más formales. La reparación es siempre la misma: **medir la masa en vez de contarla**.`),
  vocab: [
    V('information', 'information', 'información'),
    V('advice', 'advice', 'consejo'),
    V('furniture', 'furniture', 'mobiliario'),
    V('research', 'research', 'investigación'),
    V('evidence', 'evidence', 'evidencia'),
    V('luggage', 'luggage', 'equipaje'),
    V('progress', 'progress', 'progreso'),
    V('knowledge', 'knowledge', 'conocimiento'),
    V('a piece of', 'piece', 'un trozo de'),
    V('piece of advice', 'piece', 'un consejo'),
    V('an hour of', 'hour', 'una hora de'),
    V('how much', 'how much', 'cuánto (masa)'),
    V('how many', 'how many', 'cuántos (conteo)'),
    V('countable', 'countable', 'contable'),
    V('uncountable', 'uncountable', 'incontable'),
    V('water', 'water', 'agua'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un sustantivo incontable nunca lleva plural en {s}: many informations, three advices y an information están mal.',
      ),
    },
    {
      n: '2',
      text: T(
        'El criterio es la pregunta: How many espera un conteo, How much espera una masa. Cada sustantivo responde a una de las dos.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cuando la frase pide una unidad de una masa, el inglés inserta una medida (a piece of, an hour of) y pone el nombre en singular.',
      ),
    },
    {
      n: '4',
      text: T(
        'Con una medida, el verbo concuerda con la medida: a piece of bread was on the table.',
      ),
    },
    {
      n: '5',
      text: T(
        'Algunas palabras cambian de clase según el contexto: work en plural significa obras; work como masa significa trabajo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Génesis 1:1 trae heaven and earth sin artículo y sin plural. Ninguna de las dos palabras es contable en esa forma, y el versículo no omite nada.',
      ),
    },
    {
      label: T('Error común:'),
      text: T(
        'How many informations? no es una pregunta difícil en inglés; es la traducción mecánica de una pregunta que el portugués hace y el inglés no.',
      ),
    },
  ],
  examples: [
    { text: '{a piece of advice}', gloss: T('un consejo (la masa medida)') },
    { text: '{an information}', gloss: T('una información — mal: information es masa') },
    { text: '{He gave me some good advice}', gloss: T('Me dio un buen consejo') },
    { text: '{The furniture is old}', gloss: T('El mobiliario es viejo') },
    { text: '{How much information do you have}', gloss: T('Cuánta información tienes') },
    { text: '{two kilos of flour}', gloss: T('dos kilos de harina') },
    { text: '{a piece of bread}', gloss: T('un trozo de pan') },
    { text: '{the works of the Lord}', gloss: T('las obras del Señor — aquí work es contable') },
    { text: '{much fruit}', gloss: T('mucho fruto') },
    { text: '{three pieces of bread}', gloss: T('tres trozos de pan') },
  ],
  tables: [
    {
      caption: T('Contable × incontable'),
      head: [T('Clase'), T('Marca'), T('Pregunta'), T('Ejemplos')],
      rows: [
        [T('contable'), T('a/an + plural en s'), '{How many}', T('book, chair, city, sin')],
        [
          T('incontable'),
          T('sin artículo ni plural'),
          '{How much}',
          T('information, advice, water, love'),
        ],
        [T('medido'), T('a piece of + singular'), T('—'), T('a piece of bread')],
      ],
    },
    {
      caption: T('Medidas que sustituyen el plural'),
      head: [T('Medida'), T('Ejemplo'), T('Concordancia del verbo')],
      rows: [
        ['{a piece of}', '{a piece of advice}', T('singular')],
        ['{an hour of}', '{an hour of silence}', T('singular')],
        ['{a cup of}', '{a cup of water}', T('singular')],
        ['{a kilo of}', '{a kilo of flour}', T('singular')],
        ['{a bottle of}', '{a bottle of wine}', T('singular')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de las frases está correcta?'),
    options: [
      T('He gave me a good advice'),
      T('He gave me a piece of good advice'),
      T('He gave me many advices'),
      T('He gave me two advices'),
    ],
    answer: 1,
    hint: T('Advice es masa; para contarlo, usa a piece of.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'I have some ___ to tell you.'"), answer: 'advice' },
    {
      kind: 'fill',
      prompt: T("Hazlo contable: 'I need some information' → 'I need a ___'"),
      answer: 'piece of information',
    },
    {
      kind: 'match',
      prompt: T('Clasifica el sustantivo.'),
      pairs: [
        { a: 'advice', b: T('incontable') },
        { a: 'city', b: T('contable') },
        { a: 'furniture', b: T('incontable') },
        { a: 'sin', b: T('contable') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué pregunta es correcta para un sustantivo contable?'),
      options: [
        T('How much information do you have?'),
        T('How many informations do you have?'),
        T('How many information do you have?'),
        T('How much informations do you have?'),
      ],
      answer: 2,
    },
  ],
};
