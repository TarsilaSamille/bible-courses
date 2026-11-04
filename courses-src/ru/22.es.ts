import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('El verbo: tiempo, modo y negación'),
  title: T('Negación: el no que va antes de todo'),
  subtitle: T('не, ни y nada: tres maneras de negar y una sola posición'),
  body: C(`
## El marcador va en la primera palabra

La negación rusa no es un adverbio que se pega al verbo. Es una partícula que ocupa el primer lugar de la cláusula, y ésa es la información que transmite: **la negación es lo que va primero, y lo que va primero es lo que está en el foco.**

Он не читал книгу niega el acto. Не он читал книгу niega que haya sido él, y toda la diferencia está en la posición del не, que ha subido al principio de la cláusula. Не книгу он читал niega que haya sido ese libro. La negación es un marco, y lo que rodea es lo que se está negando.

En portugués la negación también precede al verbo, pero no puede subir hasta el sujeto sin convertirse en otra construcción. Não ele leu o livro es agramatical en portugués y gramatical en ruso. Por eso la posición del не es información y no un detalle: dice qué está negando la cláusula.

## Не y ни, y la diferencia entre los dos

Не niega un solo predicado. Ни niega un miembro de un grupo. Не я, а он: no yo, sino él. Ни он, ни я: ni él ni yo. En la primera frase hay una cosa negada y un sustituto; en la segunda hay dos cosas negadas y ningún sustituto.

El otro uso de ни es el más útil para la lectura: **ни aparece después de una palabra negativa para sumar una segunda.**
Не я говорил, а он y Ни он, ни я не говорил. La negación está en el не, y el ни sólo marca la suma. Quien traduce y pone ни donde el original tiene не está reforzando la negación sin necesidad, y la frase queda más dura de lo que era.

Y hay una segunda familia que parece no negar nada. Никто не видел Бога. El никто es el sujeto, y el не está en el verbo, como siempre. La negación vive en никто, y el не es la marca de que eso concreto no fue visto. **Nadie es una palabra positiva**: en latín y en portugués, nemo y ninguém son pronombres normales, y quien los traduce por una palabra negativa pierde el mecanismo.

## Lo que en ruso no se hace

Нет y не no son sinónimos, y la diferencia es de categoría y no de intensidad. Нет niega la existencia y pide genitivo: нет хлеба, no hay pan. Не niega un predicado y no cambia de caso: хлеба нет es lo mismo que нет хлеба, con la negación movida al final. **La negación puede desplazarse al final de la cláusula cuando la cláusula es nominal**, y entonces aparece sin не.

Es la diferencia más productiva entre portugués y ruso para quien traduce el griego. Οὐκ ἔστιν y ἐστιν οὐκ son la misma frase con la negación en dos sitios, y el griego antiguo hace exactamente lo mismo. Quien escribe нет donde el griego tiene οὐκ está eligiendo entre negar el ser y negar el tener.

## El gancho: dos negaciones en un versículo

**Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** El versículo tiene tres negaciones en diez palabras, y no hacen lo mismo.

Без Него es la negación de medio: sin él. No hay partícula, y el caso es instrumental, con la preposición без delante del genitivo. Ничто не начало быть es la negación doble: el sujeto es ничто, un pronombre normal que significa nada, y el не niega el verbo. **La negación no está doblada: está dividida.** El sujeto niega un lado y el verbo niega el otro.

Y la tercera parte es lo más bonito del versículo: что начало быть, que repite exactamente la palabra que fue negada. Ничто не начало быть, что начало быть quiere decir que nada llegó a ser de lo que llegó a ser, y la repetición es lo que convierte la doble negación en una afirmación. Quien traduce escribiendo "y nada fue creado" ha cortado la segunda mitad y ha perdido el versículo.
`),
  vocab: [
    V('не', 'не', 'no; partícula de negación'),
    V('ни', 'ни', 'ni; partícula que suma bajo una negación'),
    V('Нет', 'нет', 'no hay; niega la existencia y rige el genitivo'),
    V('никто', 'никто', 'nadie; pronombre normal'),
    V('ничто', 'ничто', 'nada; pronombre normal'),
    V('Не я, а он', 'не', 'no yo, sino él; negación con sustitución'),
    V('Ни он, ни я', 'ни', 'ni él ni yo; negación de grupo'),
    V('без Него', 'без', 'sin él; instrumental por preposición'),
    V('Никто не видел Бога', 'видеть', 'nadie vio a Dios'),
    V('оно', 'оно', 'eso; el neutro del pronombre'),
    V('начало быть', 'начать', 'empezó a ser; verbo compuesto'),
    V('есть', 'быть', 'es; sin aspecto'),
    V('отрицание', 'отрицание', 'negación'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Не он читал книгу, ¿qué niega el не?'),
    options: [T('El verbo leer'), T('El sujeto él'), T('El libro')],
    answer: 1,
    hint: T(
      'La negación ocupa el primer lugar de la cláusula, y lo que rodea es lo que está en el foco. Aquí ha subido hasta el sujeto.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (no hay pan)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra niega la existencia?'),
      options: [T('не'), T('нет'), T('ни')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ не начало быть (nada llegó a ser)'), answer: 'Ничто' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Не} ocupa el primer lugar de la cláusula, y lo que rodea es lo que está en el foco.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Не} niega un predicado; {ни} niega un miembro de un grupo y suma bajo una negación anterior.',
      ),
    },
    { n: '3', text: T('{Нет} niega la existencia y pide genitivo: {нет хлеба}.') },
    {
      n: '4',
      text: T(
        '{Никто} y {ничто} son pronombres normales: quien niega la acción es el {не} que los acompaña.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando la cláusula es nominal la negación puede ir al final y aparece sin {не}: {хлеба} {нет}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nada es una palabra normal'),
      text: T(
        'Ничто y никто no son pronombres negativos. Son pronombres normales, con caso y con número, y lo que niega la acción es el не que viene con ellos. En griego, el οὐκ de los versículos de Juan funciona igual: niega él, y οὐδείς y οὐθέν limitan el sujeto. Traducir por una palabra negativa portuguesa conserva el sentido y desmonta la estructura, y quien quiera leer el griego necesita ver la estructura.',
      ),
    },
    {
      label: T('Negación nominal y elección del traductor'),
      text: T(
        'Хлеба нет y нет хлеба son la misma frase, y la posición de la negación cambia lo que está en el foco. En la primera el foco es el pan; en el segundo es la ausencia. Con un verbo la posición del не es fija y la traducción no tiene elección; con un sustantivo la elección reaparece. Es el mismo phenomenon que en el griego antiguo, y por eso las traducciones rusas de Juan divergen tanto en la primera línea.',
      ),
    },
  ],
  examples: [
    { text: 'Он не читал книгу', gloss: T('no leyó el libro; la negación niega el acto') },
    { text: 'Не он читал книгу', gloss: T('no fue él quien lo leyó; la negación niega el sujeto') },
    { text: 'Не я, а он', gloss: T('no yo, sino él; negación con sustitución') },
    { text: 'ни он, ни я', gloss: T('ni él ni yo; negación de grupo') },
    { text: 'нет хлеба', gloss: T('no hay pan; нет rige el genitivo') },
    { text: 'хлеба нет', gloss: T('pan no hay; la negación va al final') },
    { text: 'никто не видел Бога', gloss: T('nadie vio a Dios; quien niega es el не') },
    { text: 'ничто не начало быть', gloss: T('nada llegó a ser; sujeto y verbo niegan') },
    { text: 'без Него ничто не начало быть', gloss: T('sin él nada llegó a ser; tres negaciones') },
    { text: 'что начало быть', gloss: T('que llegó a ser; la palabra negada, repetida') },
  ],
  tables: [
    {
      caption: T('Las tres palabras que niegan, y qué niega cada una'),
      head: [T('Palabra'), T('Clase'), T('Qué niega'), T('Ejemplo')],
      rows: [
        [T('не'), T('partícula'), T('un predicado'), T('Он не читал')],
        [
          T('ни'),
          T('partícula'),
          T('un miembro de un grupo, y suma bajo una negación'),
          T('ни он, ни я'),
        ],
        [T('нет'), T('verbo'), T('la existencia'), T('нет хлеба')],
      ],
    },
    {
      caption: T('La familia de los pronombres de negación'),
      head: [T('Normal'), T('Con не'), T('Qué limita'), T('Caso')],
      rows: [
        [T('кто'), T('никто не'), T('la persona'), T('genitivo con не знает')],
        [T('что'), T('ничто не'), T('la cosa'), T('genitivo o nominativo, según el verbo')],
        [T('где'), T('нигде не'), T('el lugar'), T('prepositivo')],
        [T('когда'), T('никогда не'), T('el tiempo'), T('adverbial')],
      ],
    },
    {
      caption: T('Negación verbal y negación nominal'),
      head: [T('Tipo'), T('Dónde va'), T('Ejemplo'), T('Qué se traduce')],
      rows: [
        [T('con verbo'), T('antes del verbo'), T('Он не читал книгу'), T('no leyó')],
        [T('con sustantivo, orden neutro'), T('antes del sustantivo'), T('нет хлеба'), T('no hay')],
        [
          T('con sustantivo, foco en el sustantivo'),
          T('al final de la cláusula'),
          T('хлеба нет'),
          T('no hay'),
        ],
        [
          T('con verbo, foco en el sujeto'),
          T('antes del sujeto'),
          T('Не он читал'),
          T('no fue él quien'),
        ],
      ],
    },
  ],
};
