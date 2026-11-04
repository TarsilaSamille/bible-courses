import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('El nombre: género, número y el adjetivo'),
  title: T('Género y número'),
  subtitle: T('стол es masculino, вода es femenino, y nada en la palabra dice por qué'),
  body: C(`
## El género es gramatical, no natural

El género ruso no sigue al sexo ni a la naturaleza. Una mesa es masculina y el agua es femenina; el sol es neutro y la luna es femenina; un árbol es neutro y una montaña es femenina. Nada de eso se deduce de la cosa, y por eso el género hay que aprenderlo con la palabra, como el acento.

Lo que el género hace es concreto. Decide la concordancia del adjetivo, la forma del pasado, la configuración del plural y la terminación de media docena de casos. Un error de género no es un error de sonido: es un error de flexión que se repite en toda la frase.

Lo más importante que se puede decir del género es esto: **en el nominativo singular, ninguna terminación lo delata.** No hay -а para el femenino y -о para el neutro como hay en otras lenguas eslavónicas. Uno no descubre el género leyendo el sustantivo, sino por el adjetivo que viene con él, o por el diccionario.

## La prueba está en el adjetivo

La prueba cabe en una línea. Ponga el adjetivo en el nominativo singular: светлый es masculino, светлая es femenino, светлое es neutro, светлые es plural. La raíz es la misma en los cuatro; sólo cambia la terminación. Y la terminación del adjetivo sigue el género del sustantivo, así que el adjetivo es el reloj que dice qué hora es.

En la práctica, el lector hace lo contrario. Sabe que la palabra es femenina porque ya la encontró en una frase con adjetivo, o porque el diccionario lo dice. Todo lo demás se deduce: книга es femenino, de modo que el plural es книги, el pasado es читала y el instrumental es книгой.

El mismo camino sirve para el número. Un sustantivo neutro tiene un solo plural, en -а: слово hace слова, окно hace окна. Un femenino tiene dos, en -ы tras consonante dura y en -и tras consonante blanda: книга hace книги, ночь hace ночи. Y un masculino tiene tres: стол hace столы, день hace дни, музей hace музеи.

## La -ь final no dice nada

La señal más tentadora del masculino singular es la -ь, porque aparece en una familia enorme de sustantivos: день, ключ, меч, врач, муж, дождь. Y en una familia igual de enorme de femeninos: мать, дочь, ночь, любовь, печаль, радость, страсть. Las dos listas tienen el mismo tamaño, y ninguna terminación separa una de la otra.

Después están los neutros, que son una segunda trampa. пламя, время, имя, письмо, золото terminan todos de una manera que no corresponde a nada en los otros dos géneros. Y los neutros en -о forman una familia aparte: слово, окно, дерево, солнце, тело. Lo que los reúne es la terminación, y ésa es la única pista disponible: un sustantivo que termina en -о puede ser neutro, y no hay otra pista.

Cuando el patrón falla del todo, la palabra está en el diccionario y en ningún otro sitio. Pero la cantidad de casos en que el patrón funciona es bastante grande para que sirva como método: un sustantivo neutro termina en -о, un femenino termina en -а, y casi siempre eso es todo.

## El plural delata el género

Después de que la terminación del singular falle, la del plural suele entregar la respuesta. Bastan tres familias:

- стол hace столы, con -ы: el original era masculino, porque un masculino duro hace -ы y un neutro hace -а.
- ночь hace ночи, con -и: el original era femenino, porque un femenino blando también hace -и.
- слово hace слова, con -а: el original era neutro, porque sólo el neutro hace -а.

Ése es el truco que resuelve la mayoría de los casos. Y el gancho bíblico está en Juan 1:14, donde los dos géneros aparecen en la misma cláusula y ninguno delata al otro. **И Слово стало плотию, и обитало с нами, полное благодати и истины.** Слово es neutro, y por eso el pasado es стало y no стал. Плотию es instrumental, y плоть es femenino. Dos palabras de raíz bíblica, en la misma frase, con géneros que no se parecen en nada, y la única pista de cada una está en la palabra vecina: полное es neutro y concuerda con Слово, y el sustantivo que rige благодати es femenino sin que nada lo diga.`),
  vocab: [
    V('воды', 'вода', 'del agua; genitivo singular'),
    V('стол', 'стол', 'mesa; masculino'),
    V('окно', 'окно', 'ventana; neutro'),
    V('дерево', 'дерево', 'árbol; neutro'),
    V('солнце', 'солнце', 'sol; neutro'),
    V('мать', 'мать', 'madre; femenino, con -ь final'),
    V('страсть', 'страсть', 'pasión; femenino, con -ь final'),
    V('день', 'день', 'día; masculino, con -ь final'),
    V('ключ', 'ключ', 'llave; masculino'),
    V('ночь', 'ночь', 'noche; femenino'),
    V('любовь', 'любовь', 'amor; femenino'),
    V('пламя', 'пламя', 'llama; neutro'),
    V('письмо', 'письмо', 'carta; neutro'),
    V('слово', 'слово', 'palabra; neutro'),
    V('книга', 'книга', 'libro; femenino'),
    V('музей', 'музей', 'museo; masculino en -й'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El género es gramatical: {стол} es masculino, {вода} es femenino, {окно} es neutro. El sexo de la cosa no interviene.',
      ),
    },
    {
      n: '2',
      text: T(
        'La prueba del género es la forma del adjetivo en el nominativo singular: {светлый}, {светлая}, {светлое}, {светлые}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La -{ь} final no dice nada: {мать}, {страсть} y {ночь} son femeninas; {день}, {ключ} y {муж} son masculinos.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el nominativo singular ninguna terminación delata el género. El plural sí: -{ы} es masculino duro, -{а} es neutro, -{и} es femenino blando o masculino blando.',
      ),
    },
    {
      n: '5',
      text: T(
        'Un sustantivo neutro tiene un solo plural, en -{а}: {слово} hace {слова}, {окно} hace {окна}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El truco del plural'),
      text: T(
        'Si usted no sabe el género de una palabra, haga el plural mentalmente. Masculino duro en -ы, neutro en -а, femenino blando en -и. Ночь hace ночи, y por tanto es femenino; стол hace столы, y por tanto es masculino; слово hace слова, y por tanto es neutro. El truco falla cuando el sustantivo ya está en plural, y por eso es un truco y no una regla.',
      ),
    },
    {
      label: T('La palabra que nadie deduce'),
      text: T(
        'La mayoría de los neutros en -о son previsibles: слово, окно, дерево, тело, слово. Pero пламя, время, имя y письмо no se parecen a nada, y su terminación de plural es igual en todos los casos. Esas necesitan diccionario. Ningún idioma ofrece un camino más corto.',
      ),
    },
  ],
  examples: [
    { text: 'стол', gloss: T('mesa; masculino duro, el plural es столы') },
    { text: 'воды', gloss: T('del agua; genitivo singular de un femenino') },
    { text: 'окно', gloss: T('ventana; neutro, hace окна') },
    { text: 'мать', gloss: T('madre; femenino con -ь final') },
    { text: 'день', gloss: T('día; masculino con -ь final') },
    { text: 'страсть', gloss: T('pasión; femenino con -ь final') },
    { text: 'любовь', gloss: T('amor; femenino, hace любви') },
    { text: 'пламя', gloss: T('llama; neutro, hace пламени') },
    { text: 'музей', gloss: T('museo; masculino en -й, hace музеи') },
    {
      text: 'И Слово стало плотию',
      gloss: T('Y el Verbo se hizo carne (Jn 1:14); Слово es neutro, por eso стало y no стал'),
    },
  ],
  tables: [
    {
      caption: T('El género por la forma del adjetivo'),
      head: [T('Sustantivo'), T(' masc.'), T(' fem.'), T(' neutro')],
      rows: [
        [T('слово, palabra'), T('новое слово'), T('—'), T('новое слово')],
        [T('вода, agua'), T('—'), T('чистая вода'), T('—')],
        [T('окно, ventana'), T('—'), T('—'), T('чистое окно')],
      ],
    },
    {
      caption: T('La -ь final no delata nada'),
      head: [T('Grupo'), T('Ejemplos')],
      rows: [
        [T('femeninos en -ь'), T('мать, страсть, ночь, любовь, печаль, радость')],
        [T('masculinos en -ь'), T('день, ключ, меч, врач, муж, дождь')],
        [T('neutros sin patrón'), T('пламя, время, имя, письмо, золото')],
        [T('neutros en -о'), T('слово, окно, дерево, тело, солнце')],
      ],
    },
    {
      caption: T('El plural como pista de género'),
      head: [T('Singular'), T('Plural'), T('Terminación del plural'), T('Género que delata')],
      rows: [
        [T('стол'), T('столы'), T('-ы'), T('masculino duro')],
        [T('книга'), T('книги'), T('-и'), T('femenino blando')],
        [T('ночь'), T('ночи'), T('-и'), T('femenino blando, igual al masculino blando')],
        [T('день'), T('дни'), T('-и'), T('masculino blando')],
        [T('музей'), T('музеи'), T('-и'), T('masculino en -й')],
        [T('слуга'), T('слуги'), T('-и'), T('masculino en -а')],
        [T('слово'), T('слова'), T('-а'), T('neutro')],
        [T('окно'), T('окна'), T('-а'), T('neutro')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra es neutra?'),
    options: [T('вода'), T('окно'), T('ключ')],
    answer: 1,
    hint: T(
      'Agua es femenino y llave es masculino. Sólo la ventana hace окна, con la terminación del neutro.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete el plural: слово hace ___'), answer: 'слова' },
    {
      kind: 'choose',
      prompt: T('мать, страсть, ночь y день tienen en común...'),
      options: [T('la -ь final'), T('el plural en -и'), T('el género femenino')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete el pasado: И Слово ___ плотию (Jn 1:14)'),
      answer: 'стало',
    },
  ],
};
