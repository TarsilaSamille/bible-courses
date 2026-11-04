import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('El verbo: prefijos y formas derivadas'),
  title: T('Gerundio y participio, y las formas que sólo el acento separa'),
  subtitle: T('говоря, говорящий, сказал, сказанный: cuatro formas, tres lugares'),
  body: C(`
## Un adverbio y un adjetivo con el mismo nombre

El деепричастие es un adverbio: говоря, читая, неся. No se flexiona, no tiene género y no concuerda con nada. Modifica al verbo de la cláusula principal, y el sujeto suele ser el mismo: Он говорил, читая текст es él quien leía y él quien hablaba, y si el sujeto cambia la frase se queda sin suelo.

El participio es un adjetivo: говорящий, сказанный, написанный. Se flexiona en género, número y caso, y concuerda con el sustantivo. Слово, сказанное Богом, la Palabra dicha por Dios: сказанное es neutro y genitivo, y lo dice la concordancia.

Los dos tienen el mismo nombre de familia, y la diferencia es enteramente de flexión. **El participio se flexiona y el деепричастие no.** Quien traduce trata los dos como si fueran uno y escribe una frase que no flexiona donde el ruso flexiona.

## Las formas que el acento separa

Lo que confunde a quien llega del latín es que varias de las formas son idénticas salvo por el acento. Говоря y говоря son la misma palabra con el acento en sitios distintos, y cada una pertenece a una familia: говоря es el gerundio de говорить, y говорящий es el participio presente.

La lista es corta y cierra. Del infinitivo говорить salen cuatro formas que aparecen en casi toda frase rusa:

- говоря, el gerundio, sin flexión
- говорит, el presente, tercera persona
- говорящий, el participio presente, que sí se flexiona
- говорящий es también un adjetivo sustantivado, y en ese uso significa "quien habla"

El participio pasado tiene la misma forma: сказал es el pasado del verbo, сказанный es el participio, y сказан es la forma corta, que es la que sale en las frases bíblicas. Tres posiciones gramaticales y tres palabras, y ninguna terminación avisa cuál es cuál.

## El participio hereda el aspecto del verbo

Esta es la información que la lectura bíblica usa más que ninguna otra sobre participios. **El participio conserva el aspecto del verbo del que salió.**

Написанный viene de написать, que es perfectivo: fue escrito, y el resultado está a la vista. Пишущий, el participio presente de писать, es imperfectivo: quien está escribiendo ahora, y el texto todavía no existe. Los dos están en el mismo campo semántico y dicen cosas opuestas sobre el texto.

El participio pasado pasivo sigue la misma regla. Любимый viene de любить, imperfectivo, y significa amado de un modo que no implica reciprocidad ni tiempo. Положенный viene de положить, perfectivo, y significa colocado, con el objeto en su sitio. La terminación es la misma en ambos: -мый y -нный.

Y la forma corta guarda la misma información. Написан y писан no son lo mismo: el primero es perfectivo y el segundo imperfectivo. Слово написано es lo que quedó escrito; Слово писано es lo que se está escribiendo ahora.

## El gancho: una cláusula con las dos formas

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** El participio de la cláusula es полное, forma corta, y concuerda con Слово: neutro, nominativo, singular. La forma larga de la misma familia sería исполненное, y diría lo mismo con el caso marcado en la terminación.

Lo que el participio trae aquí es el genitivo: благодати y истины están en genitivo plural, y es por ellos que el verbo que lo acompaña es быть y no uno con instrumental. El participio corto neutro pide genitivo, y ésa es una de las pocas veces en que el ruso exige un caso que ninguna preposición explica.

Y la forma corta es la que el Nuevo Testamento prefiere, siempre. Благословен грядущий, bendito el que viene: Благословен es un participio pasado pasivo corto, y грядущий es un participio presente activo. Las dos formas en la misma cláusula, una a cada lado, y todo el versículo cabe en dos palabras-belgas.
`),
  vocab: [
    V('говоря', 'говорить', 'hablando; деепричастие, invariable'),
    V('говорящий', 'говорить', 'que habla; participio presente, que se flexiona'),
    V('читая', 'читать', 'leyendo; деепричастие'),
    V('сказал', 'сказать', 'dijo; pasado del verbo'),
    V('сказанный', 'сказать', 'dicho; participio pasado pasivo'),
    V('сказан', 'сказать', 'dicho; forma corta del participio'),
    V('написанный', 'написать', 'escrito; participio de un perfectivo'),
    V('написан', 'написать', 'escrito; forma corta perfectiva'),
    V('писан', 'писать', 'escrito; forma corta imperfectiva'),
    V('любимый', 'любить', 'amado; participio de un imperfectivo'),
    V('обитало', 'обитать', 'permaneció; gerundio del texto'),
    V('полное', 'полный', 'lleno; participio corto, neutro'),
    V('деепричастие', 'деепричастие', 'деепричастие, adverbio verbal'),
    V('причастие', 'причастие', 'participio'),
    V('Благословен грядущий', 'грядущий', 'bendito el que viene; Mt 21:9'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estas formas se flexiona en género y caso?'),
    options: [T('говоря'), T('сказанный'), T('читая')],
    answer: 1,
    hint: T(
      'El деепричастие es un adverbio y no se flexiona. El participio es un adjetivo, y por eso concuerda con el sustantivo.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete el participio corto de написать'), answer: 'написан' },
    {
      kind: 'choose',
      prompt: T('Написан viene de un verbo...'),
      options: [T('imperfectivo'), T('perfectivo')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Благословен ___ (Mt 21:9)'), answer: 'грядущий' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El {деепричастие} es un adverbio y no se flexiona; el participio es un adjetivo y se flexiona en género, número y caso.',
      ),
    },
    { n: '2', text: T('El {деепричастие} comparte el sujeto con la cláusula principal.') },
    {
      n: '3',
      text: T(
        'Varias formas difieren sólo en el acento: {говоря} y la familia {говорящ}- son formas distintas.',
      ),
    },
    {
      n: '4',
      text: T(
        'El participio hereda el aspecto del verbo: {написанный} viene de {написать}, y {любимый} de {любить}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El participio corto neutro pide genitivo del complemento: {полное} {благодати} {и} {истины}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el participio sabe el aspecto'),
      text: T(
        'El participio se forma a partir del verbo, y el verbo carga el aspecto. Como написанный viene de написать y любимый viene de любить, el participio nace perfectivo en un caso e imperfectivo en el otro. Eso significa que una traducción que traduce el participio por un adjetivo sin aspecto ha perdido una información que el griego también cargaba. En Juan 1:14, полное es la prueba: el participio corto neutro trae genitivos de complemento, y esa exigencia del caso es lo que amarra la cláusula.',
      ),
    },
    {
      label: T('Cuando la flexión no está a la vista'),
      text: T(
        'Quien lee un texto ruso sin ver los acentos no distingue dos participios que sólo se diferencian por él. Написано y писано son casi la misma palabra, y lo que cambia es el aspecto del verbo del que salieron. En un diccionario la información está en la entrada; en un texto viejo está en la columna de flexión del participio. Es uno de los pocos sitios donde la forma escrita del ruso es más pobre que el habla.',
      ),
    },
  ],
  examples: [
    { text: 'говоря', gloss: T('hablando; деепричастие, invariable') },
    { text: 'говорящий', gloss: T('que habla; participio presente, que se flexiona') },
    {
      text: 'Он говорил, читая текст',
      gloss: T('hablaba leyendo el texto; деепричастие, mismo sujeto'),
    },
    {
      text: 'Слово, сказанное Богом',
      gloss: T('la Palabra dicha por Dios; participio en genitivo'),
    },
    { text: 'сказанный', gloss: T('dicho; participio pasado pasivo') },
    { text: 'написанный', gloss: T('escrito; de un verbo perfectivo') },
    { text: 'любимый', gloss: T('amado; de un verbo imperfectivo') },
    { text: 'Слово написано', gloss: T('la palabra quedó escrita; forma corta perfectiva') },
    { text: 'Слово писано', gloss: T('la palabra se está escribiendo; forma corta imperfectiva') },
    {
      text: 'И Слово стало плотию, и обитало с нами, полное благодати и истины',
      gloss: T(
        'y el Verbo se hizo carne y habitó entre nosotros, lleno de gracia y verdad (Jn 1:14)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Cuatro posiciones, cuatro formas de un mismo verbo'),
      head: [T('Posición'), T('Forma'), T('Ejemplo'), T('¿Se flexiona?')],
      rows: [
        [T('infinitivo'), T('говорить'), T('—'), T('no')],
        [T('gerundio'), T('говоря'), T('говоря с тобой'), T('no')],
        [T('presente'), T('говорит'), T('он говорит'), T('sí, por persona')],
        [T('participio presente'), T('говорящий'), T('говорящий человек'), T('sí, por género')],
      ],
    },
    {
      caption: T('El participio y el aspecto del que salió'),
      head: [T('Participio'), T('Verbo'), T('Aspecto del verbo'), T('Qué dice')],
      rows: [
        [T('написанный'), T('написать'), T('perfectivo'), T('quedó escrito')],
        [T('писанный'), T('писать'), T('imperfectivo'), T('se está escribiendo')],
        [T('любимый'), T('любить'), T('imperfectivo'), T('amado, sin reciprocidad')],
        [T('сказанный'), T('сказать'), T('perfectivo'), T('dicho, una vez')],
        [T('сказанный'), T('говорить'), T('imperfectivo'), T('de lo que se habla')],
      ],
    },
    {
      caption: T('Participio y деепричастие en paralelo'),
      head: [T(''), T('деепричастие'), T('Participio')],
      rows: [
        [T('ejemplo'), T('говоря'), T('говорящий')],
        [T('flexión'), T('ninguna'), T('género, número y caso')],
        [
          T('función'),
          T('adverbio, modifica al verbo'),
          T('adjetivo, concuerda con el sustantivo'),
        ],
        [T('sujeto'), T('el de la cláusula principal'), T('el del sustantivo')],
        [T('género'), T('no tiene'), T('masculino, femenino, neutro y plural')],
      ],
    },
  ],
};
