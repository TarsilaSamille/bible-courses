import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Lectura'),
  title: T('Leer Proverbios: pares de versos y el libro de pocas palabras'),
  subtitle: T(
    'El verso de Proverbios es media frase, y el libro entero se reconstruye con unas pocas decenas de sustantivos',
  ),
  body: C(`
## Un libro donde nadie habla

En Génesis alguien habla y alguien responde. En Proverbios no hay nadie. No hay narrador, no hay diálogo, y ninguna línea trae el "y dijo" que abre cada escena del Antiguo Testamento. Cada verso es una afirmación sobre dos cosas, y cada cosa tiene dos caras.

**El primer verso del libro es el modelo.** La versión-union escribe {zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu}: "el hijo sabio alebra al padre, el hijo insensato llena de pena a la madre". El punto y coma separa dos frases completas, y no una frase en dos partes. La segunda vuelve en el verso siguiente, casi palabra por palabra, con el mismo mensaje y casi las mismas palabras. Quien lee un solo verso ha leído la mitad, y quien traduce verso por verso produce un portugués que parece un texto repetido — porque lo está.

## La repetición que el traductor no corrigió

Un traductor con más fluidez traduciría mejor el hebreo. Cambiaría el segundo "el hijo insensato llena de pena a la madre" por una paráfrasis, para que el portugués no se repita, y el libro ganaría en fluidez y perdería el argumento entero. La repetición es la prueba de que el libro habla de una regla y no de dos casos concretos.

Y el patrón se repite a lo largo de Proverbios: un verso enuncia la regla, el verso siguiente aplica la regla a otro caso, y el par es lo que significa algo. Esto vale para casi todos los capítulos, y vale en particular para los capítulos diez a trece, donde el libro alterna sin parar entre {zhìhuì zhī zǐ} y {yúmào zhī zǐ}, entre {zhìhuì rén} y {yúmào rén}, y la diferencia entre los dos nombres es el argumento entero de cada par.

**El verso de Proverbios no es una frase: es media frase, y el par de versos es la unidad de lectura.**

## El sustantivo vuelve, el verbo cambia

Aquí está la regla de construcción del libro, y es sencilla de enunciar y difícil de aplicar. El par de versos en mandarín trae casi siempre los mismos dos sustantivos, uno en cada mitad, y el verbo es lo que cambia de un lado al otro.

**Vuelva a leer Proverbios 10:1 y mire solo los verbos.** En la primera mitad el verbo es {shǐ}, "hacer", y en la segunda es {jiào}, "llenar, causar". La construcción es exactamente la misma en los dos lados: hijo, verbo, padre o madre. El sustantivo {zhī zǐ}, "el hijo", vuelve en las dos mitades; el par {fùqīn} y {mǔqīn} cambia de lugar; y los dos verbos son dos verbos. La gramática de la frase es idéntica en los dos lados y el sentido es opuesto, y el mandarín no tiene nada que diga eso.

El mismo desenho aparece en Proverbios 11:14, con el consejo de un lado y la ruina del otro, y en cada capítulo del libro con otro par de sustantivos. Quien no conoce el libro lee los dos lados como una repetición, y por eso la lectura por construcción es obligatoria: las dos frases son iguales en gramática y opuestas en sentido.

Quien traduce del portugués escribe "y donde hay muchos consejos hay seguridad", y la construcción entera pierde lo que estaban haciendo los dos verbos. Leyendo por construcción, la segunda mitad se vuelve una pregunta al lector: y en tu caso, ¿cuál de los dos verbos?

El caso extremo es el verbo que sale de una mitad y entra en la otra. Donde el griego y el hebreo distribuyen dos verbos simétricos, el mandarín a veces deja una mitad solo con el sustantivo y lleva el verbo entero a la otra. El par sigue funcionando, y la asimetría es una elección del traductor, no un fallo.

## El banco de palabras y la palabra que vale dos

El libro entero se reconstruye con unas pocas decenas de sustantivos: {xīn}, el corazón, {kǒu}, la boca, {shǒu}, la mano, {yǎn}, el ojo, {jiā}, la casa, {xiōng}, el hermano, {fù}, el padre, {zǐ}, el hijo, {qī}, la esposa, {jīn}, el oro, {huǒ}, el fuego, {shuǐ}, el agua, {lù}, el camino. Los verbos son aún menos: {shī}, perder, {dé}, ganar, {zhī}, gobernar, {shǒu}, guardar, {zǒu}, andar, {jiàn}, ver.

Y hay un efecto secundario que el lector tiene que saber. Como el banco es pequeño, una misma palabra mandarín vuelve en proverbios cuyo original hebreo no tiene nada que ver. {shēngmìng} y {xìngmìng} son las dos palabras chinas para "vida": la primera es la vida como duración, la segunda es la vida como destino. Son el mismo {mìng} con dos prefijos, y el hebreo también tiene dos palabras distintas. Traducir del mandarín al hebreo palabra por palabra, sin mirar el original, produce equivalencias falsas.

Lo mismo vale para {lù}: en un verso es el camino que se pisa, en el siguiente es el modo de vivir. {xīn} es el corazón en un verso y la mente en el siguiente. El criterio es el otro sustantivo de la mitad: si el otro sustantivo es concreto, el valor es concreto; si es otro término abstracto, el valor es abstracto.

El procedimiento de lectura cabe en cuatro pasos, y vale también para los Salmos. Lea cuatro versos a la vez. Halle los dos sustantivos que se oponen. Vea qué verbo quedó en cada mitad. Después pregunte qué hace la segunda mitad con la primera, y esa pregunta, y no la traducción de cada palabra, es lo que produce el sentido de un capítulo.`),
  vocab: [
    V('zhìhuì', '智慧', 'sabiduría (zhìhuì)'),
    V('yúmào', '愚昧', 'necedad, insensatez (yúmào)'),
    V('fù', '父', 'padre (fù)'),
    V('mǔ', '母', 'madre (mǔ)'),
    V('kuàilè', '快樂', 'gozo, alegría (kuàilè)'),
    V('yōuchóu', '忧愁', 'pena, aflicción (yōuchóu)'),
    V('shǐ', '使', 'hacer, causar (shǐ)'),
    V('jiào', '叫', 'llenar, causar; y gritar (jiào)'),
    V('xīn', '心', 'corazón; el sustantivo que más aparece en el libro (xīn)'),
    V('kǒu', '口', 'boca; y lo que la boca hace (kǒu)'),
    V('lù', '路', 'camino; y modo de vivir, en los Proverbios (lù)'),
    V('bì', '必', 'seguro; adverbio de necesidad (bì)'),
    V('shēngmìng', '生命', 'vida, como duración (shēngmìng)'),
    V('xìngmìng', '性命', 'vida, como destino (xìngmìng)'),
    V('dé', '得', 'ganar, obtener (dé)'),
    V('shī', '失', 'perder (shī)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verso de Proverbios es media frase: lea de dos en dos, y el punto y coma marca el paso de una mitad a la otra.',
      ),
    },
    {
      n: '2',
      text: T(
        'Proverbios no tiene narrador ni diálogo: ninguna línea trae el "y dijo" que abre las escenas del Antiguo Testamento.',
      ),
    },
    {
      n: '3',
      text: T(
        'La repetición literal entre versos consecutivos viene de la redacción hebrea, y el mandarín la conserva en vez de parafrasear.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el par de versos el sustantivo se repite y el verbo cambia; el verbo es lo que carga el contraste.',
      ),
    },
    {
      n: '5',
      text: T(
        'Una palabra mandarín puede valer dos palabras hebreas: {shēngmìng} y {xìngmìng} son las dos versiones de "vida".',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué la traducción repite'),
      text: T(
        'Repetir no es falta de estilo del traductor: es el argumento. Un verso enuncia la regla, el siguiente aplica la regla a otro caso, y quien recibe los dos en portugués parafraseado pierde la prueba de que se trata de la misma regla. Una traducción fiel de Proverbios parece mal escrita en portugués, y esa apariencia corresponde al original.',
      ),
    },
    {
      label: T('El verbo que sale de una mitad'),
      text: T(
        'En algunos pares el mandarín deja una mitad solo con el sustantivo y lleva el verbo entero a la otra. El par sigue funcionando y no falta nada. La asimetría aparece también en los Salmos, y es una elección de ritmo del traductor, no una omisión: lo que cambia es la cadencia del habla, no el sentido.',
      ),
    },
  ],
  examples: [
    {
      text: '智慧之子使父親快樂；愚昧之子叫母親憂愁',
      gloss: T(
        'zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu — el hijo sabio alegra al padre; el insensato llena de pena a la madre (Prov 10:1)',
      ),
    },
    {
      text: '使',
      gloss: T('shǐ — hacer, causar: el verbo de la primera mitad de Proverbios 10:1'),
    },
    {
      text: '叫',
      gloss: T('jiào — llenar, causar: el verbo de la segunda mitad, con la misma construcción'),
    },
    { text: '生命', gloss: T('shēngmìng — la vida como duración: lo que corre y acaba') },
    {
      text: '性命',
      gloss: T('xìngmìng — la vida como destino: lo que se puede perder de una vez'),
    },
    { text: '口', gloss: T('kǒu — boca; y lo que se habla por ella, y lo que se come por ella') },
    { text: '路', gloss: T('lù — camino; y modo de vivir, y lo que uno hace con su vida') },
    {
      text: '當',
      gloss: T('dāng — en el caso de, cuando; y lo que se debe hacer con lo que se tiene'),
    },
  ],
  tables: [
    {
      caption: T('La anatomía de un par de versos'),
      head: [T('Parte'), T('Qué trae'), T('Ejemplo'), T('Papel')],
      rows: [
        [
          T('primera mitad'),
          T('sustantivo, verbo, sustantivo'),
          T('{zhìhuì zhī zǐ shǐ fùqīn kuàilè}'),
          T('la regla'),
        ],
        [
          T('segunda mitad'),
          T('sustantivo opuesto, verbo, sustantivo'),
          T('{yúmào zhī zǐ jiào mǔqīn yōuchóu}'),
          T('la aplicación'),
        ],
        [T('el par entero'), T('las dos mitades juntas'), T('{zhìhuì … yúmào}'), T('el contraste')],
      ],
    },
    {
      caption: T('Una palabra, dos valores'),
      head: [T('Palabra'), T('Un valor'), T('Otro valor'), T('Prueba')],
      rows: [
        [
          T('{xīn}'),
          T('el corazón, el interior'),
          T('la mente, el entendimiento'),
          T('el otro sustantivo decide el valor'),
        ],
        [
          T('{lù}'),
          T('el camino que se pisa'),
          T('el modo de vivir'),
          T('el otro sustantivo es concreto o abstracto'),
        ],
        [
          T('{shēngmìng}'),
          T('vida como duración'),
          T('vida como destino: {xìngmìng}'),
          T('el mismo {mìng} con dos prefijos'),
        ],
        [
          T('{kǒu}'),
          T('la boca, el órgano'),
          T('lo que se habla por ella'),
          T('el verbo vecino dice cuál es'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {智慧之子使父親快樂；愚昧之子叫母親憂愁}, ¿qué cambia entre las dos mitades?'),
    options: [
      T('el sustantivo {zhī zǐ} vuelve, y el verbo y el objeto cambian'),
      T('el sustantivo cambia y el verbo vuelve'),
      T('cambia el sujeto, porque la segunda mitad trae otro'),
      T('el adverbio de grado cambia de valor'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el verbo de la primera mitad de Proverbios 10:1: 智慧之子____父親快樂'),
      answer: '使',
    },
    {
      kind: 'match',
      prompt: T('Relacione la palabra mandarín con el par de valores que cubre'),
      pairs: [
        { a: T('{shēngmìng}'), b: T('vida como duración') },
        { a: T('{xìngmìng}'), b: T('vida como destino') },
        { a: T('{lù}'), b: T('camino y modo de vivir') },
        { a: T('{xīn}'), b: T('corazón y mente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        '¿Por qué la segunda mitad de un verso de Proverbios suele invertir el sustantivo y el verbo de la primera?',
      ),
      options: [
        T('porque el sustantivo se repite y el verbo es lo que cambia'),
        T('porque la segunda mitad es una pregunta al lector'),
        T('porque el punto y coma invierte la frase'),
        T('porque el traductor quiso variedad de estilo'),
      ],
      answer: 0,
    },
  ],
};
