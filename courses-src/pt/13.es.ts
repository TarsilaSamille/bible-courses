import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('El sustantivo'),
  title: T('El sustantivo: género y formación'),
  subtitle: T('o problema, a mão, y por qué la terminación no decide'),
  body: C(`## El género no está en la terminación

El género del sustantivo portugués es **léxico**: cada nombre tiene un sexo que el diccionario registra, y la terminación solo concuerda con él. {o problema} es masculino a pesar de la {-a}, {a mão} es femenino a pesar de la {-ão}, {o dia} y {o mapa} son masculino sin ninguna señal, y {a foto} es femenino con una señal débil.

La regla de la {-o} y de la {-a} vale para la mayoría de los casos, y por eso funciona en la lectura corriente. Falla justo donde vive el texto: {o Verbo} es masculino, {o livro} es masculino, {o pão} es masculino, y ninguno entrega el género por la terminación.

## Los tres recursos que marcan el género

El texto dice el género tres veces, y ninguna de las tres exige diccionario. El **artículo** es el primero, y vale en la primera mención: {o} o {a}. El **sufijo** es el segundo, cuando existe, porque {-ção} y {-dade} llegan con el género incorporado. Y la **concordancia** es el tercero, y el más fuerte de los tres, porque viene de lejos: un adjetivo, un participio o un verbo flexionado que concuerda con el sustantivo prueban el género aunque la frase esté a diez palabras de distancia.

En Mt 7.25, {a casa não caiu} y {aquela casa não caiu} repiten verbo y sustantivo: el género está en el verbo, y quien leyó el artículo {a} no necesitó nada más.

## Los pares que ninguna señal resuelve

Hay pares en los que nada en la palabra ayuda. {o coma} y {a coma} son el mismo conjunto de letras: uno es el estado en que está la persona, el otro es una unidad de masa, y el género es la única señal disponible. {o homem} y {a mulher} son el par más conocido, y ni la terminación ni el número los resuelven: es el género lo que separa los dos nombres. Lo mismo pasa con {o animal} y {a fêmea}, y con {o irmão} y {a irmã}.

Los sufijos también mienten: {-ário} es masculino en {o cardápio} y {o vocabulário}, y femenino en {a enciclopédia} y {a livraria}. Y {-ão} no dice nada sobre el género, ya que {o coração}, {o órgão}, {a mão} y {a multidão} conviven en la misma página.

Cuando ninguna señal ayuda, decide el sentido: nadie duda ante {o dia} o {a noite}, porque el significado ya trae el género.

## Criterio de lectura

Con cualquier sustantivo, pregúntate: ¿el artículo da el género? ¿El sufijo, cuando existe, promete lo mismo? ¿Y un adjetivo, un participio o un verbo más adelante lo confirman? Tres respuestas coincidentes cierran el género sin diccionario, y así se lee un capítulo entero sin parar en cada nombre.

En Jn 1.1, {o Verbo} es masculino porque λόγος es masculino en el griego; {a Palavra} es una elección del traductor, legítima, que cambia el género del original por el género de la palabra que usa. Es la elección que hay que ver, y no dejar pasar.`),
  vocab: [
    V('o problema', 'problema', 'o problema (masculino, pese a la -a)'),
    V('a mão', 'mão', 'a mão (femenino, pese a la -ão)'),
    V('o dia', 'dia', 'o día'),
    V('o mapa', 'mapa', 'o mapa'),
    V('a foto', 'foto', 'la foto'),
    V('o substantivo', 'substantivo', 'el sustantivo'),
    V('o gênero', 'gênero', 'el género'),
    V('a terminação', 'terminação', 'la terminación'),
    V('o artigo', 'artigo', 'el artículo'),
    V('o sufixo', 'sufixo', 'el sufijo'),
    V('a concordância', 'concordância', 'la concordancia'),
    V('o adjetivo', 'adjetivo', 'el adjetivo'),
    V('o Verbo', 'Verbo', 'el Verbo'),
    V('a palavra', 'palavra', 'la palabra'),
  ],
  rules: [
    { n: '§1', text: T('El género del sustantivo es léxico: el sufijo sugiere, pero no decide.') },
    {
      n: '§2',
      text: T(
        '{-dade}, {-ção}, {-mento}, {-ura} y {-ência} forman sustantivos femeninos casi siempre, y sirven para deducir el género de una palabra nueva.',
      ),
    },
    {
      n: '§3',
      text: T('{-or}, {-eiro}, {-ista} y {-ante} forman sustantivos masculinos casi siempre.'),
    },
    {
      n: '§4',
      text: T(
        'El artículo y la concordancia con adjetivo, participio o verbo prueban el género dentro del propio texto.',
      ),
    },
    {
      n: '§5',
      text: T(
        'En la traducción el género sigue al original: λόγος es masculino, y por eso se escribe {o Verbo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'Jn 1.1 trae {o Verbo} en masculino, que es lo más fiel al griego. {a Palavra} no es un error: es una elección que cambia el género del original por el género de la palabra elegida.',
      ),
    },
    {
      label: T('Léxico × morfológico'),
      text: T(
        'El latín flexiona el adjetivo en tres terminaciones para un solo género ({bonus}, {bona}, {bonum}). El portugués flexiona en dos ({bom}, {boa}), y el sustantivo guarda el género en el diccionario.',
      ),
    },
  ],
  examples: [
    {
      text: 'O Verbo se fez carne.',
      gloss: T('Jn 1.14: masculino por concordancia y por herencia del griego.'),
    },
    { text: 'Deus amou o mundo.', gloss: T('{o mundo} es masculino sin señal en la terminación.') },
    { text: 'A mão tremia.', gloss: T('Femenino que la {-ão} no anuncia.') },
    {
      text: 'O mapa estava dobrado.',
      gloss: T('Masculino confirmado por la concordancia con {dobrado}.'),
    },
    {
      text: 'A casa não caiu.',
      gloss: T('Mt 7.25: el género está en el verbo, lejos del sustantivo.'),
    },
    {
      text: 'A palavra permaneceu.',
      gloss: T('Femenino léxico; el griego correspondiente es masculino.'),
    },
    { text: 'Os problemas crescem.', gloss: T('El artículo {os} resuelve el género del plural.') },
    {
      text: 'Uma fotografia nova.',
      gloss: T('La {-a} concuerda con el género; si no concordara, mandaría todo lo demás.'),
    },
  ],
  tables: [
    {
      caption: T('Sufijos que prometen femenino'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-dade', 'liberdade, bondade, verdade'],
        ['-ção', 'salvação, criação, tradição'],
        ['-mento', 'movimento, casamento, fundamento'],
      ],
    },
    {
      caption: T('Sufijos que prometen masculino'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-or', 'cantor, tradutor, Senhor'],
        ['-eiro', 'primeiro, brasileiro, padeiro'],
        ['-ista', 'cristiano, batista, romancista'],
      ],
    },
    {
      caption: T('Los tres recursos'),
      head: ['Recurso', 'Exemplo', 'Força'],
      rows: [
        ['artigo', 'o problema', 'forte'],
        ['sufixo', 'a salvação', 'média'],
        ['concordância', 'caiu com a casa', 'decisiva'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estos sustantivos es femenino?'),
    options: [T('a mão'), T('o problema'), T('o mapa'), T('o dia')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El sufijo {-ção} forma sustantivos ______.'),
      answer: 'femininos',
      hint: T('Compara {salvação} con {tradutor}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué Jn 1.1 traduce λόγος por {o Verbo} y no por {a Palavra}?'),
      options: [
        T('λόγος es masculino en el griego'),
        T('el portugués antiguo no tenía género'),
        T('el griego no distingue el género'),
        T('la Almeida traduce palabra por palabra'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sufijo con el género que sugiere.'),
      pairs: [
        { a: T('-dade'), b: T('femenino') },
        { a: T('-or'), b: T('masculino') },
        { a: T('-mento'), b: T('femenino') },
        { a: T('-ista'), b: T('masculino') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
