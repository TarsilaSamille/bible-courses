import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Indefinidos y partitivos'),
  subtitle: T(
    '{un, une, des} — el artículo que presenta, y el que marca una porción que nadie contó',
  ),
  section: T('Artículos'),
  body: C(`## Tres artículos, tres funciones

El artículo indefinido tiene dos variantes por género: {un} masculino y {une} femenino, y un solo plural para ambos, {des}. Se elide igual que {le} y {la}: {un ami}, {une amie}, {un homme}, {une école}, {un œil}, {une histoire}.

La diferencia crucial con el español está en el plural. En español {un} solo existe en singular: un libro, dos libros. El {des} francés es un plural de verdad, y aquí se divide en dos usos completamente distintos.

**Indefinido plural**: {des} = «algunos, ciertos». {Il a des frères} «tiene hermanos» no dice cuántos ni cuáles, solo que existe más de uno. Fíjate en que {des frères} y {les frères} pueden ser casi sinónimos en contexto; la diferencia es de enfoque.

**Partitivo**: {du, de la, de l’, des} = «un poco de, cierta cantidad de». Aparece con sustantivos de masa — alimentos, materiales, sustantivos abstractos — y es el equivalente francés de **sin artículo** en español: {du pain} «pan», {de l’eau} «agua», {du vin} «vino», {des légumes} «verduras», {du courage} «valentía», {de la patience} «paciencia».

## Cuando el partitivo se vuelve definido: la clave de toda la gramática

El partitivo deja de existir cuando el sustantivo pasa a estar **contado**. Eso ocurre en tres situaciones que reconocerás enseguida:

1. Cuando la unidad tiene nombre: {une pomme} «una manzana», {deux pommes} «dos manzanas» — a partir de dos, el plural definido {les pommes} es obligatorio.
2. Cuando el sustantivo se mide: {un mètre de tissu} «un metro de tela», {deux kilos de farine} «dos kilos de harina».
3. Cuando se niega o se restringe: {Je ne veux pas de sucre} «no quiero azúcar», {Il n’y a pas de vie ici} «aquí no hay vida».

Regla práctica: si puedes decir «¿cuántos?», usa el definido. {J’ai {du} pain} es «tengo pan»; {J’ai {le} pain} es «tengo el pan, ese trozo concreto»; {J’ai {des} pains} es «tengo panes, algunos».

## La negación se come el partitivo

Aquí tienes una de las reglas más productivas y más específicamente francesas del curso: **la negación {ne … pas} borra todo el artículo partitivo**.

- {Il a du pain} «tiene pan» → {Il n’a pas de pain} «no tiene pan»
- {Elle boit du vin} «bebe vino» → {Elle ne boit pas de vin} «no bebe vino»
- {Je veux du sucre} «quiero azúcar» → {Je ne veux pas de sucre} «no quiero azúcar»

Es decir: {pas de}, nunca {pas du}, {pas de la}, {pas des}. Pero fíjate en que el **definido** resiste a la regla: {Je ne veux pas le pain} conserva su {le}, porque ese pan concreto sigue existiendo — simplemente no es lo que quiero. La negación borra lo que es una porción indefinida, no lo que ya está identificado.

La misma regla vale con {sans} «sin», {avant} «antes de» y {jusqu’à} «hasta», que funcionan como pseudo-negaciones: {sans du courage} «sin valentía», {avant la lettre} «antes de la carta», {jusqu’à la fin} «hasta el final».

## {du} tiene dos orígenes, y eso explica sus dos usos

Históricamente, {du} es la contracción de {de + le} y {des} la de {de + les}. La regla de la lección anterior ({de + le = du}) y el partitivo de esta ({du} = un poco de) son **el mismo hecho gramatical visto desde dos ángulos**.

Y hay una consecuencia práctica: como {du} viene de {de}, **nunca sigue a otra preposición**. Dices {avec du pain} «con pan», {sans du vin} «sin vino», {par la lettre} «por la carta» — pero nunca {à du} ni {de du}. El plural sigue la misma lógica: {avec des légumes} «con verduras».

Por otro lado, el partitivo se usa libremente como si fuera un indefinido corriente: {J’ai {du} temps} «tengo tiempo», {Elle a {de} la patience} «tiene paciencia», {Il reste {des} doutes} «quedan dudas». Y cuando el sustantivo es abstracto y contable, puede aparecer el definido: {l’optimisme} «el optimismo», {le courage} «la valentía».

## Lectura aplicada

El texto de **Louis Segond** de {Juan 1:6} es un laboratorio de artículos: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}.

{un homme} — indefinido singular, el artículo **presenta** a un hombre que todavía no conocemos. {envoyé de Dieu} — aquí la {de} es preposición de origen, no partitivo, porque {Dieu} es nombre propio y no se puede medir. Y {le nom} vuelve al definido: lo que **tiene**, algo ya determinado. Una frase, tres funciones.

En {Juan 1:3}: {Toutes les choses ont été faites par lui, et sans lui rien n’a été fait qui ait été fait}. {Toutes les choses} — {toutes} es cuantificador y {les} es el plural definido: **todas** las cosas, no algunas. Fíjate también en {rien n’a été fait}, con {ne} explícito y sujeto pospuesto, donde {rien} ya es negativo y {ne} queda pleonástico.

Y en {Juan 1:14}: {Et la parole est devenue chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}. {sa gloire} dos veces — pronombre posesivo, pero fíjate en la estructura: en {celle du Père}, el partitivo desaparece y da paso a {du} = «de + le», es decir, «la gloria **del** Padre». Traducir esa frase exige acertar con la {la} y con la {du}.

## Lo esencial

{un, une} presentan y cuentan uno. {des} presenta algunos. {du, de la, des} partitivizan — «un poco de» — y desaparecen en cuanto el sustantivo pasa a estar contado, medido o negado. Y la regla más útil del capítulo: tras {ne … pas}, {sans} o {avant}, el partitivo se convierte en {de} y solo en {de}.`),
  vocab: [
    V('un', 'un', 'un, una (indefinido masculino singular); se elide en {l’}'),
    V('une', 'une', 'una (indefinido femenino singular)'),
    V('des', 'des', 'algunos, ciertos (indefinido plural) o «un poco de» (partitivo)'),
    V('du', 'du', 'de, de un poco de; {de + le} contraído'),
    V('de la', 'de la', 'de un poco de (femenino); nunca contrae'),
    V('de l’eau', 'eau', 'de agua; partitivo ante vocal'),
    V('pas de', 'pas', 'ninguno, sin; lo que la negación hace del partitivo'),
    V('sans du courage', 'courage', 'sin valentía; {sans} actúa como negación'),
    V('le pain', 'pain', 'el pan (el pan entero)'),
    V('de la patience', 'patience', 'de paciencia; partitivo con sustantivo abstracto'),
    V('le courage', 'courage', 'el coraje; definido con abstracto contable'),
    V('l’optimisme', 'optimisme', 'el optimismo; la {i} tónica se vuelve {y} sin guion'),
    V('une pomme', 'pomme', 'una manzana; nombrar la unidad elimina el partitivo'),
    V('toutes les choses', 'chose', 'todas las cosas; cuantificador con plural definido'),
    V('rien', 'rien', 'nada; ya negativo, la {ne} queda pleonástica'),
    V('un homme envoyé', 'homme', 'un hombre enviado; {un} presenta un referente nuevo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Je ne veux pas de sucre}, ¿qué pasó con el partitivo {du}?'),
    options: [
      T('La negación borró el artículo entero y dejó solo {de}'),
      T('El {du} se volvió {dus}, un plural femenino inexistente'),
      T('El sustantivo pasó a plural y el artículo se volvió {des}'),
      T('La negación se trasladó al sustantivo, sin efecto en el artículo'),
    ],
    answer: 0,
    hint: T('Regla §3: {ne … pas} borra el partitivo, pero el definido sobrevive.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: Elle boit ___ vin. (bebe vino)'),
      answer: 'du',
      hint: T('Partitivo masculino, sin negación: {de + le} fusionado.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase mantiene el artículo definido pese a la negación?'),
      options: [
        T('{Je ne veux pas le pain que tu as acheté}'),
        T('{Je ne veux pas du pain}'),
        T('{Je ne veux pas de la viande}'),
        T('{Il n’y a pas des enfants ici}'),
      ],
      answer: 0,
      hint: T('Regla §3: la regla alcanza la porción, no la cosa ya identificada.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada construcción con su función'),
      pairs: [
        { a: T('{un homme}'), b: T('presenta un referente nuevo y singular') },
        { a: T('{des frères}'), b: T('presenta algunos, sin contar') },
        { a: T('{du courage}'), b: T('partitiviza un abstracto no contable') },
        { a: T('{le courage}'), b: T('trata el abstracto como una cosa determinada') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Completa la negación: Elle n’a pas ___mundo. (no tiene mundo)'),
      answer: 'de',
      hint: T('El partitivo desaparece y queda solo la preposición {de}.'),
    },
  ],
  rules: [
    { n: '1', text: T('{un} y {une} cuentan exactamente uno; {des} presenta algunos sin contar.') },
    {
      n: '2',
      text: T(
        'El partitivo {du, de la, de l’, des} significa «un poco de» y sustituye la ausencia de artículo del español: {du pain}, {de l’eau}, {des légumes}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tras {ne … pas}, {sans}, {avant} o {jusqu’à}, el partitivo se vuelve {de}: {pas de}, nunca {pas du}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El partitivo desaparece en cuanto el sustantivo se cuenta o se mide: {une pomme}, {deux kilos de farine}, {le courage}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Como {du} viene de {de}, nunca sigue a otra preposición: {avec du pain} es correcto, {à du} está mal.',
      ),
    },
  ],
  notes: [
    {
      label: T('El partitivo marca lo «no contable»'),
      text: T(
        'En español la distinción contable / no contable la lleva el contexto sin marca formal: {como} funciona con {uno} y con {ninguno} y nadie lo nota. El francés lo resuelve con {du}. Por eso una frase como {Il y a de la lumière dans cette pièce} es imposible en español honesto, y sin embargo es la única forma francesa de decir «hay luz en esta habitación». No puedes decir {Il y a la lumière}, porque eso significaría «la luz que ya conocemos».',
      ),
    },
    {
      label: T('Negaciones falsas'),
      text: T(
        'Con {ne … pas} la regla es obligatoria y nadie la infringe. Con {sans} es una consecuencia, no una obligación: puedes decir {sans pain} si hablas de un pan concreto. Y fíjate en la asimetría: {pas de pain} es obligatorio, pero {pas le pain} es igual de correcto — la diferencia es que el definido nombra una cosa que existe con independencia de tu voluntad.',
      ),
    },
  ],
  examples: [
    {
      text: 'Il y eut un homme envoyé de Dieu',
      gloss: T('hubo un hombre enviado por Dios (Jn 1:6) — {un} presenta'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('cuyo nombre era Juan — {de} posesivo, {le} determinado'),
    },
    {
      text: 'Toutes les choses ont été faites par lui',
      gloss: T('todas las cosas fueron hechas por él (Jn 1:3) — cuantificador + definido'),
    },
    {
      text: 'et sans lui rien n’a été fait',
      gloss: T('y sin él nada fue hecho — {sans} actúa como negación'),
    },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('su gloria como la del Padre único (Jn 1:14) — {du} = «de + le»'),
    },
    {
      text: 'Je ne veux pas de sucre',
      gloss: T('no quiero azúcar — partitivo borrado por la negación'),
    },
    { text: 'avec du courage', gloss: T('con valentía — partitivo tras preposición, permitido') },
    {
      text: 'deux kilos de farine',
      gloss: T('dos kilos de harina — el conteo elimina el partitivo'),
    },
    {
      text: 'la lumière du monde',
      gloss: T('la luz del mundo (Jn 8:12) — definido + genitivo vía {du}'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Indefinidos y partitivos uno al lado del otro'),
      head: [T('Uso'), T('Masc. sg.'), T('Fem. sg.'), T('Plural'), T('Ejemplo')],
      rows: [
        ['Indefinido', 'un', 'une', 'des', '{un homme}'],
        ['Partitivo', 'du', 'de la', 'des', '{du pain}'],
        ['Partitivo + vogal', "de l'", 'de la', 'des', "{de l'eau}"],
        ['Após negação', 'pas de', 'pas de', 'pas de', '{pas de sucre}'],
      ],
    },
    {
      caption: T('Tabla 2 — El partitivo dentro y fuera de frases'),
      head: [T('Contexto'), T('Forma'), T('Glosa'), T('Observación')],
      rows: [
        ['positiva', 'du pain', 'pão', 'sem negação'],
        ['negativa', 'pas de pain', 'nada de pão', 'partitivo apagado'],
        ['com {sans}', 'sans du courage', 'sem coragem', '{sans} = negação'],
        ['contagem', 'deux pains', 'dois pães', 'partitivo sai'],
        ['medição', 'un kilo de farine', 'um quilo de farinha', '{de} = unidade'],
      ],
    },
  ],
};
