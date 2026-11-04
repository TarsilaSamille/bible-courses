import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('La sintaxis y la traducción'),
  title: T('Orden de las palabras: la última es la noticia'),
  subtitle: T('en ruso nada es fijo, y lo que va al final es de lo que está hablando el narrador'),
  body: C(`
## Orden libre, y qué hace

El orden de las palabras en ruso es libre en el sentido más fuerte: las tres piezas de una cláusula pueden ocupar cualquier posición y ninguna se vuelve ilegible por eso. В начале было Слово y Слово было в начале dicen lo mismo, y la segunda es la que prefiere la teología, porque Слово es el sujeto, y el sujeto va primero cuando la cláusula trata de él.

Eso sólo es posible porque el caso ya marcó la función de cada palabra. Si cada pieza de la cláusula ya dijo qué papel, la posición deja de cargar información. En portugués el orden forma parte de la información: "vi o homem na rua" y "na rua vi o homem" ponen el foco en sitios distintos, y cambiarlos cambia el sentido.

En ruso cambiarlos también cambia el sentido, pero cambia otra cosa: **lo que va al final es lo nuevo, aquello sobre lo que el narrador está hablando ahora.** El resto es contexto, y el contexto va por delante. Esa es la regla práctica, y vale más que cualquier lista de posiciones prohibidas.

## Qué suele quedarse donde está

Lo que tiene posición fija es la negación. Не va antes del verbo, y cuando hay sujeto y verbo, el не casi siempre va antes del verbo y no antes del sujeto. Compare Он не читал книгу y Не он читал книгу: la primera niega el acto, la segunda niega que haya sido él.

Lo que también tiene posición fija es aquello que se quiere contrastar. Это не Бог, а человек pone el не en la palabra que se niega y la а en la que la sustituye. Un sustantivo que llega tarde en la cláusula es aquel sobre el que el narrador insiste, y por eso la prosa rusa es difícil para quien lee otra lengua.

Lo que no tiene posición fija es casi todo lo demás: sujeto, verbo transitivo, objeto directo, adjunto adverbial. Pueden cambiar de sitio y la gramática no protesta. Dos reservas: el verbo raramente abre la cláusula en la narrativa escrita, y el sujeto raramente la cierra.

## Qué freedom le hace a quien traduce

Para quien traduce, la libertad es un problema y no una ventaja. Traducir a una lengua de orden fijo obliga a **elegir** dónde va cada elemento, y la elección es una interpretación. Si el original es И Слово стало плотию, y el traductor pone el verbo al final de la cláusula femenina, ha producido una lectura; si lo pone al principio, ha producido otra.

El caso más interesante es la información que no está expresada. Слово Бога es genitivo, y el de es la preposición más opcional de todas: puede aparecer o no. Una frase que omite la información puede reescribirse de dos maneras, y las dos reescritas ponen la información en sitios distintos de la cláusula.

El riesgo simétrico es el opuesto: quien traduce al ruso puede mandar al final cualquier palabra, y el lector lo entenderá como la noticia. Si el traductor no lo pretendía, el sentido ha cambiado sin que nadie lo note.

## El gancho: la misma frase, cuatro veces

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Cuatro órdenes posibles, todas legibles:

- В начале было Слово — el tiempo primero, lo nombrado al final
- Было Слово в начале — el verbo delante; más literario, más antiguo
- Слово было в начале — el sujeto primero; la lectura que le importa a la teología
- В начале Слово было — casi una vacilación, y el oyente se incomoda

La segunda y la tercera son la misma frase con la información en sitios distintos, y la diferencia es de énfasis, no de sentido. Lo que cambia entre ellas es lo que el narrador quiere que el lector haga primero. **Никто не видел Бога** pone a Dios primero; **Бога никто не видел** pone a Dios al final, y la segunda es una afirmación sobre Dios y no sobre las personas.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'en el principio era la Palabra'),
    V('Слово было в начале', 'слово', 'la Palabra era en el principio; el sujeto primero'),
    V('Было Слово в начале', 'быть', 'era la Palabra en el principio; el verbo delante'),
    V('Он не читал книгу', 'не', 'no leyó el libro; la negación niega el acto'),
    V('Не он читал книгу', 'не', 'no fue él quien lo leyó; la negación niega el sujeto'),
    V('Это не Бог, а человек', 'а', 'esto no es Dios sino un hombre; contraste'),
    V('Слово Бога', 'бог', 'la Palabra de Dios; genitivo sin preposición'),
    V('никто', 'никто', 'nadie'),
    V('Никто не видел Бога', 'видеть', 'nadie vio a Dios; la negación antes del verbo'),
    V('Бога никто не видел', 'бог', 'a Dios nadie lo vio; el sujeto va al final'),
    V('в конце', 'конец', 'al final'),
    V('порядок слов', 'порядок слов', 'orden de las palabras'),
    V('рема', 'рема', 'información nueva de la cláusula'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Никто не видел Бога, ¿qué va al final?'),
    options: [T('La negación'), T('El sujeto'), T('El objeto')],
    answer: 2,
    hint: T(
      'La regla es que lo que va al final es la información nueva. Aquí lo que se dice es sobre Dios, no sobre quien no vio.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: ___ слово было в начале'), answer: 'С' },
    {
      kind: 'choose',
      prompt: T('¿Dónde suele ir el negador?'),
      options: [T('Después del verbo'), T('Antes del verbo'), T('Al final de la cláusula')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Никто ___ видел Бога'), answer: 'не' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden de las palabras es libre porque el caso ya marcó la función de cada palabra.',
      ),
    },
    { n: '2', text: T('Lo que va al final es la información nueva; lo que va antes es contexto.') },
    { n: '3', text: T('El negador va antes del verbo: {Он не читал}, y no Él no leyó.') },
    {
      n: '4',
      text: T(
        'El verbo raramente abre la cláusula en la narrativa escrita, y el sujeto raramente la cierra.',
      ),
    },
    {
      n: '5',
      text: T(
        'Una omisión del original puede volverse información explícita en cualquier posición, y la posición elegida es del traductor.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tema y rema, sin jerga'),
      text: T(
        'La crítica literaria llama tema a lo que se sabe y rema a lo que se dice. En ruso, el orden de las palabras es la realización más directa de esa distinción: el rema va al final y el contexto va antes. Quien traduce a una lengua de orden fijo pierde la marca, porque en la lengua de destino la partícula hace el trabajo que hace la posición en ruso.',
      ),
    },
    {
      label: T('La libertad que traduce mal'),
      text: T(
        'Si un original en ruso pone la información nueva al final, y la lengua de destino tiene orden fijo, el traductor tiene dos salidas: mantener el orden antiguo, que suena rígido, o reescribir, que pone la información nueva en otro sitio. La segunda salida es legítima e inevitable. Lo que no es legítimo es reescribir sin decidir, y entonces quien lee la traducción encuentra más énfasis del que tenía el original.',
      ),
    },
  ],
  examples: [
    {
      text: 'В начале было Слово',
      gloss: T('en el principio era la Palabra; el sustantivo al final'),
    },
    { text: 'Слово было в начале', gloss: T('la Palabra era en el principio; el sujeto primero') },
    { text: 'Он не читал книгу', gloss: T('no leyó el libro; la negación niega el acto') },
    { text: 'Не он читал книгу', gloss: T('no fue él quien leyó; la negación niega el sujeto') },
    {
      text: 'Это не Бог, а человек',
      gloss: T('esto no es Dios sino un hombre; el contraste está marcado'),
    },
    { text: 'Слово Бога', gloss: T('la Palabra de Dios; el de es una preposición opcional') },
    { text: 'Никто не видел Бога', gloss: T('nadie vio a Dios; la información nueva es Dios') },
    { text: 'Бога никто не видел', gloss: T('a Dios nadie lo vio; el sujeto va al final') },
    { text: 'И Слово стало плотию', gloss: T('y el Verbo se hizo carne; el verbo en medio') },
    { text: 'Это не Бог, а человек', gloss: T('la segunda mitad de la frase la carga la а') },
  ],
  tables: [
    {
      caption: T('La misma frase en cuatro posiciones'),
      head: [T('Orden'), T('Frase'), T('Qué va al final'), T('Lectura')],
      rows: [
        [
          T('tiempo, verbo, sustantivo'),
          T('В начале было Слово'),
          T('Слово'),
          T('lo nombrado va al final'),
        ],
        [
          T('verbo, sustantivo, tiempo'),
          T('Было Слово в начале'),
          T('в начале'),
          T('más literario, más antiguo'),
        ],
        [
          T('sustantivo, verbo, tiempo'),
          T('Слово было в начале'),
          T('в начале'),
          T('el sujeto primero'),
        ],
        [
          T('tiempo, sustantivo, verbo'),
          T('В начале Слово было'),
          T('было'),
          T('raro para el oyente'),
        ],
      ],
    },
    {
      caption: T('Lo que tiene posición fija'),
      head: [T('Elemento'), T('Dónde va'), T('Ejemplo'), T('Por qué')],
      rows: [
        [
          T('el negador'),
          T('antes del verbo'),
          T('Он не читал'),
          T('niega el verbo, no el sujeto'),
        ],
        [
          T('el contraste'),
          T('antes de la segunda mitad'),
          T('не Бог, а человек'),
          T('la а es la segunda mitad'),
        ],
        [
          T('el sujeto'),
          T('normalmente al principio'),
          T('Он не читал книгу'),
          T('donde el lector lo espera'),
        ],
        [
          T('el verbo'),
          T('normalmente en medio o al final'),
          T('было Слово в начале'),
          T('rara vez abre la narrativa'),
        ],
        [T('la información nueva'), T('al final'), T('Бога никто не видел'), T('es el rema')],
      ],
    },
    {
      caption: T('Qué le hace el orden libre a la traducción'),
      head: [T('Fenómeno'), T('Qué pasa'), T('Ejemplo')],
      rows: [
        [
          T('información omitida'),
          T('puede volverse explícita en cualquier posición'),
          T('Слово Бога, Слово от Бога'),
        ],
        [T('énfasis'), T('cambia con la posición del rema'), T('Бога никто не видел')],
        [T('contraste'), T('depende de la а y del не'), T('Это не Бог, а человек')],
        [
          T('sujeto sobreentendido'),
          T('el verbo a veces lo carga solo'),
          T('Идём quiere decir los dos'),
        ],
        [T('énfasis literario'), T('es una elección, no un error'), T('Было Слово в начале')],
      ],
    },
  ],
};
