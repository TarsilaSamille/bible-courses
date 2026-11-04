import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('La escritura'),
  title: T('El alfabeto que no suena como se ve'),
  subtitle: T('В no es b, Р no es p, С no es c'),
  body: C(`
## Once letras que mienten a quien lee latín

El alfabeto ruso tiene 33 posiciones: 10 vocales, 21 consonantes y dos signos, {ъ} y {ь}. Once de ellas tienen una forma que el latín hace prometer otra cosa, y por ahí es donde un lector empieza a equivocarse. {В} parece b y suena como la v de "vaca". {Н} parece h y suena n. {Р} parece p y suena r. {С} parece c y suena s. {Х} no es h ni k: es el sonido de "chino". {Ц} trae dos letras y dos sonidos, "ts", como al final de "cats". {Ч} suena como el ch de "chico". {Ш} como la sh de "show". {Щ} como la sh de "shoe". {Ж} como la s de "measure". {Й} como la y de "yema".

Quien empieza por el alfabeto griego comete exactamente estos errores, y la cura no es una regla: es una semana de lectura. Lo que salva es que la lectura equivocada es siempre la misma, y la misma palabra repite el error hasta que el oído lo agarra.

## Las letras de un solo sonido

Un tercio del alfabeto tiene sonido fijo: {а}, {б}, {в}, {г}, {д}, {з}, {и}, {к}, {л}, {м}, {н}, {о}, {п}, {р}, {с}, {т}, {у}, {ф}. Son las que se aprenden en la primera línea de cualquier texto. El resto viene en pares, y el par es lo que importa, porque del par sale el error.

{Е} cambia con la posición: al principio de la palabra y después de consonante blanda suena como "ye", y en el resto como "e". Compara {Его} y {его}. {О} y {а} alternan, {И} y {ы} también, y lo que decide es la posición en la palabra, no la letra. {Ю} y {я} cierran la boca sobre la consonante anterior, y por eso {няня} tiene n blanda donde {тяга} conserva la t dura.

## El acento no se escribe

El ruso no marca el acento en la escritura, y esa es la diferencia que más retrasa a quien viene de una lengua que sí lo marca. {Бог} tiene una sola sílaba y no necesita nada. {слово} tiene dos, y nadie escribió cuál recibe el acento. {земля} tiene dos, y lo mismo. El diccionario ruso imprime el acento por una razón práctica: la grafía sola no lo dice, y quien no lo sabe pronuncia mal.

La letra {ё} es la excepción que confirma la regla. Donde aparece, el acento está escrito: {всё}, {Твое}, {ещё}. Donde no aparece, el acento sigue sin decidirse.

## ъ y ь: la frontera y la consonante blanda

{ъ} no tiene sonido. Aparece en medio de la palabra, donde no se habla nada: {подъём}, {съезд}, {отъезд}. {ь} hace lo contrario: marca que la consonante anterior se pronuncia con la lengua alta contra el paladar. {день}, {любовь}, {мать} suenan distinto sin él. Uno silencia, el otro cambia el sonido, y ambos sobreviven en poquísimas palabras de uso diario.

## El gancho

Juan 1 abre con cuatro palabras que usan tres de esas letras engañosas: **В начале было Слово, и Слово было у Бога.** La {С} de Слово es s y no c, la {В} de было es v, y la {Б} es una b cerrada. Y el último versículo del capítulo usa la letra que no miente: **Единородный Сын, сущий в недре Отцем, Он явил.** Quien aprendió {ц}, {ч}, {ш} y {щ} por el sonido, y no por la forma, ya sabe pronunciar la mitad del capítulo.`),
  vocab: [
    V('слово', 'слово', 'palabra'),
    V('Бог', 'бог', 'Dios'),
    V('свет', 'свет', 'luz'),
    V('земля', 'земля', 'tierra'),
    V('день', 'день', 'día'),
    V('жизнь', 'жизнь', 'vida'),
    V('начало', 'начало', 'principio'),
    V('человек', 'человек', 'ser humano'),
    V('царь', 'царь', 'rey; Ц es "ts"'),
    V('чаша', 'чаша', 'copa; Ч es "ch"'),
    V('небо', 'небо', 'cielo; Н es n, no h'),
    V('В', 'в', 'la letra que parece b y suena v'),
    V('Н', 'н', 'la letra que parece h y suena n'),
    V('Р', 'р', 'la letra que parece p y suena r'),
    V('С', 'с', 'la letra que parece c y suena s'),
    V('Х', 'х', 'la letra que no es h ni k'),
    V('ь', 'ь', 'palatiza la consonante anterior'),
    V('ъ', 'ъ', 'marca una frontera muda'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{В} suena v, {Н} suena n, {Р} suena r y {С} suena s: cuatro letras cuya forma promete la letra latina.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Ц} tiene dos sonidos, {Ч} suena como ch, {Ш} como sh y {Щ} como una sh más larga: el mismo par admite dos pronunciaciones.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Е} vale "ye" al principio de palabra y tras consonante blanda, y "e" en el resto: {Его} frente a {его}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{О} y {а} alternan, {И} y {ы} alternan; la misma letra suena de dos maneras según su posición en la palabra.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Ю} y {я} cierran la boca, y la consonante anterior se vuelve blanda: {няня} tiene n blanda, {тяга} conserva la t dura.',
      ),
    },
    {
      n: '6',
      text: T(
        'El acento no se marca en la escritura; solo la {ё} lo marca por sí misma, y por eso {всё} y {ещё} se salen de la regla.',
      ),
    },
  ],
  notes: [
    {
      label: T('La letra que más miente'),
      text: T(
        '{С} produce el error más caro, porque es la primera letra de {Слово} en el primer versículo de Juan 1: leerla como c convierte el Verbo en una palabra con K. Y {Р} es la segunda, porque en {Царь} y en {мир} el cambio de r por p pasa inadvertido hasta que uno dice el nombre en voz alta.',
      ),
    },
    {
      label: T('Por qué no se escribe el acento'),
      text: T(
        'La ortografía rusa se formó antes de que el acento se volviera obligatorio, y la norma nunca lo adoptó. El resultado es un texto en que una misma grafía puede esconder palabras distintas, y por eso un diccionario ruso imprime el acento en casi cada entrada. La {ё} sobrevivió precisamente porque es el único caso en que el acento quedó en la grafía.',
      ),
    },
  ],
  examples: [
    {
      text: 'В начале было Слово',
      gloss: T('en el principio era el Verbo (Jn 1:1); В es v, С es s'),
    },
    { text: 'и Слово было у Бога', gloss: T('y el Verbo estaba con Dios; С es s, Б es b cerrada') },
    {
      text: 'Все чрез Него начало быть',
      gloss: T('todo llegó a ser por medio de él (Jn 1:3); В es v, Н es n'),
    },
    { text: 'И Слово стало плотию', gloss: T('y el Verbo se hizo carne (Jn 1:14)') },
    { text: 'Бог есть любовь', gloss: T('Dios es amor (1Jn 4:8)') },
    { text: 'царь', gloss: T('rey; Ц es "ts" y el par final es mudo') },
    { text: 'чаша', gloss: T('copa; Ч es "ch"') },
    { text: 'жизнь', gloss: T('vida; Ж es la s de "measure" y la ь final no suena') },
    { text: 'человек', gloss: T('ser humano; Ч sigue siendo "ch" ante e') },
    { text: 'небо', gloss: T('cielo; Н es n, y б es la b corriente') },
  ],
  tables: [
    {
      caption: T('Letras que no suenan como se ven'),
      head: [T('Letra'), T('Lo que la forma sugiere'), T('Lo que suena')],
      rows: [
        [T('В'), T('b de "bota"'), T('v de "vaca"')],
        [T('Н'), T('h de "hola"'), T('n de "noche"')],
        [T('Р'), T('p de "pan"'), T('r de "rojo"')],
        [T('С'), T('c de "casa"'), T('s de "sol"')],
        [T('Х'), T('h o k'), T('el sonido de "chino"')],
        [T('Ц'), T('dos letras'), T('"ts", como en "cats"')],
        [T('Ч'), T('cuatro letras'), T('ch de "chico"')],
        [T('Ш'), T('tres letras'), T('sh de "show"')],
        [T('Щ'), T('cuatro letras'), T('sh de "shoe"')],
        [T('Ж'), T('seis letras'), T('la s de "measure"')],
        [T('Й'), T('sin par en latín'), T('y de "yema"')],
      ],
    },
    {
      caption: T('Los dos signos que no son sílaba'),
      head: [T('Signo'), T('Lo que hace'), T('Ejemplos'), T('Glosa')],
      rows: [
        [
          T('ъ'),
          T('marca una frontera muda'),
          T('подъём, съезд, отъезд'),
          T('subida, congreso, partida'),
        ],
        [
          T('ь'),
          T('palatiza la consonante anterior'),
          T('день, любовь, мать'),
          T('día, amor, madre'),
        ],
      ],
    },
    {
      caption: T('El sonido de {Е} según la posición'),
      head: [T('Contexto'), T('Ejemplo'), T('Sonido'), T('Glosa')],
      rows: [
        [T('al principio de la palabra'), T('Его'), T('"ye"'), T('él, suyo')],
        [T('al principio de la palabra'), T('Евангелие'), T('"ye"'), T('evangelio')],
        [T('tras consonante dura'), T('нет'), T('"e"'), T('no hay')],
        [T('tras consonante blanda'), T('день'), T('"ye"'), T('día')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Слово, ¿qué sonido tiene la С?'),
    options: [T('c, como en casa'), T('s, como en sol'), T('x, como en chino')],
    answer: 1,
    hint: T('Es la letra que más engaña a quien lee latín: la forma es de c, el sonido es de s.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué sonido tiene Р?'),
      options: [T('p'), T('r'), T('v')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Completa: сло_о'), answer: 'в' },
    {
      kind: 'match',
      prompt: T('Relaciona letra y sonido'),
      pairs: [
        { a: 'Щ', b: T('sh, como en "shoe"') },
        { a: 'Ж', b: T('la s de "measure"') },
      ],
      answer: ['Щ', 'Ж'],
    },
  ],
};
