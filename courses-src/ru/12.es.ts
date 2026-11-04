import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Los pronombres y los numerales'),
  title: T('Pronombres: lo que casi nunca aparece escrito'),
  subtitle: T(
    'Даня y Маша en lugar de él y ella, y el relativo que concuerda con lo que sustituye',
  ),
  body: C(`
## El pronombre de tercera persona casi nunca aparece

En português la frase "él fue a la ciudad" obliga a repetir el pronombre cuando el sujeto vuelve. En ruso no hay esa obligación, y la regla práctica es: **el pronombre de tercera persona aparece sólo cuando hace falta**.

Cuando el sujeto ya ha sido mencionado, el verbo basta. Даня пришёл. Он был устал. lleva el pronombre porque se refiere a una oración entera. Pero Даня пришёл и ушёл no lo lleva, porque el verbo ya dice de quién se trata. Quien traduce del português suele poner un él donde el ruso no lo pone, y la frase queda más larga y más enfática de lo que era.

El pronombre de tercera es además el único que.initial n después de una preposición: у него, с ним, о нём, y el femenino у неё, с ней, о ней. Sin preposición es его y её, y esas dos formas son a la vez genitivo y acusativo. Nada más en el sistema es menos claro que esto.

## Даня y Маша ocupan el lugar de él y ella

La segunda regla es la que más aparece en el habla: en lugar del pronombre, se usa el nombre. Маша пришла en lugar de Она пришла. Y como el nombre también se declina, la frase entera funciona: Я вижу Даню, Я говорю с Машей, Я думаю о Дане.

Eso tiene una consecuencia para la lectura que nadie espera: el nombre funciona como pronombre sin ninguna marca. Una frase con Иоанн puede tener Иоанн como sujeto o como objeto, y lo que decide es el verbo. En вижу Иоанна el nombre está en acusativo; en Иоанн видит está en nominativo. La misma palabra, dos casos, y la diferencia está en el verbo, como siempre.

Los demostrativos siguen la misma lógica y rara vez se usan en prosa. Это es el más común, y тот aparece todo el tiempo en la narración antigua. Этот concuerda con el sustantivo: этот человек, эта книга, это слово, эти люди. Y такой hace lo mismo, con sentido de calidad: tal grande.

## El relativo concuerda con lo que sustituye, y el caso viene de la oración

El pronombre relativo ruso tiene dos series. Который sustituye cualquier sustantivo y concuerda en género y número: который человек, которая книга, которое слово, которые люди. Кто sustituye personas y что sustituye cosas, y no hay nada que flexionar.

La parte que traba es el caso. **El relativo concuerda con el sustantivo en género y número, pero su caso viene de la función que cumple dentro de su propia oración, no de la posición del sustantivo que sustituye.**

En Который берёт на Себя грех мира, el sustantivo sustituido es el Cordero, masculino singular. El relativo está en masculino singular, sí, y el caso es nominativo, porque берёт es el verbo y Который es su sujeto. Si el relativo fuera el objeto de берёт sería Которого, porque un masculino animado en acusativo es genitivo.

Lo mismo vale con quién y qué: которые приняли Его trae которые en nominativo plural, porque приняли es el verbo y los que recibieron son el sujeto. Si fueran el objeto sería которых, y la forma se vería distinta.

## El gancho: tres pronombres, tres casos, una cláusula

**А тем, которые приняли Его, дал власть стать чадами Божиими.** Una cláusula con tres pronombres y tres casos, y ninguno repetido.

Тем es dativo plural, porque es a quien se da la autoridad: дал власть pide dativo. Которые es nominativo plural, porque es el sujeto de приняли, y un masculino animado en acusativo habría sido которых. Его es genitivo singular, porque es el objeto de приняли, y la forma es la misma que la del genitivo de un animado y la de un posesivo.

Los tres están en los mismos casos gramaticales que el pronombre del sujeto y el del objeto en una frase portuguesa, y ninguno tiene marca visible. Quien no conozca el relativo va a leer которые como objeto de приняли, porque está más cerca, y llegará al sentido invertido sin notar cuán lejos estaba de la gramática.
`),
  vocab: [
    V('Даня', 'Даня', 'Danya; nombre propio masculino en lugar de él'),
    V('Маша', 'Маша', 'Masha; nombre propio femenino en lugar de ella'),
    V('его', 'он', 'de él, o su; genitivo y acusativo'),
    V('её', 'она', 'de ella, o suya'),
    V('него', 'он', 'de él, después de preposición'),
    V('нём', 'он', 'sobre él; n inicial después de preposición'),
    V('ней', 'она', 'de ella, después de preposición'),
    V('Этот', 'этот', 'este; demostrativo'),
    V('такой', 'такой', 'tal, tan; con sentido de calidad'),
    V('который', 'который', 'que, el cual; relativo'),
    V('которая', 'который', 'que; relativo femenino'),
    V('которые', 'который', 'que; relativo plural nominativo'),
    V('которых', 'который', 'que; relativo plural en genitivo o acusativo'),
    V('кто', 'кто', 'quién; relativo e interrogativo'),
    V('тем', 'тот', 'a los que; dativo plural del demostrativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En которые приняли Его, ¿qué caso es которые?'),
    options: [T('Acusativo'), T('Nominativo'), T('Genitivo')],
    answer: 1,
    hint: T(
      'Si fuera el objeto, el relativo sería которых. Como приняли es el verbo, los que recibieron son el sujeto, y sujeto es nominativo.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: у ___ (junto de Dios)'), answer: 'Бога' },
    {
      kind: 'choose',
      prompt: T('¿Qué relativo sustituye a una persona en una oración relativa?'),
      options: [T('которое'), T('кто'), T('которая')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: о ___ (sobre él)'), answer: 'нём' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pronombre de tercera persona aparece sólo cuando hace falta; el verbo ya dice de quién se trata.',
      ),
    },
    {
      n: '2',
      text: T(
        'Después de una preposición el pronombre masculino y el neutro reciben n: {у него}, {с ним}, {о нём}.',
      ),
    },
    { n: '3', text: T('Sin preposición, {его} y {её} son a la vez genitivo y acusativo.') },
    {
      n: '4',
      text: T(
        'Un nombre propio ocupa el lugar del pronombre y se declina como sustantivo: {Я} {вижу} {Даню}, {Я} {говорю} {с} {Машей}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El relativo concuerda en género y número con lo que sustituye, pero su caso viene de su función dentro de su propia oración.',
      ),
    },
  ],
  notes: [
    {
      label: T('Который o кто'),
      text: T(
        'Который sustituye cualquier sustantivo y flexiona en género y número. Кто y что no flexionan: quién es siempre quién y qué es siempre qué. El portugués tiene un solo relativo, y esa variedad es lo que hace que un texto ruso parezca más repetido de lo que es. Traducir con un solo relativo es correcto; poner el relativo en el caso equivocado es error de lectura.',
      ),
    },
    {
      label: T('La forma que no dice el caso'),
      text: T(
        'Его es genitivo y acusativo a la vez, y eso ocurre porque el masculino animado tiene las dos formas iguales. En una segunda lectura de la cláusula, con él como sujeto, es imposible: el sujeto sería Он y no el genitivo. Es la regla de la lección anterior operando dentro de un pronombre.',
      ),
    },
  ],
  examples: [
    { text: 'Даня пришёл', gloss: T('Danya llegó; el nombre hace el trabajo de un pronombre') },
    { text: 'Маша пришла', gloss: T('Masha llegó; lo mismo, femenino') },
    { text: 'Я вижу Даню', gloss: T('veo a Danya; el nombre está en acusativo') },
    { text: 'Я говорю с Машей', gloss: T('hablo con Masha; instrumental') },
    { text: 'у него', gloss: T('junto a él; n inicial después de la preposición') },
    { text: 'о ней', gloss: T('sobre ella; n inicial después de la preposición') },
    { text: 'Его книга', gloss: T('su libro; la misma forma que el genitivo y el acusativo') },
    { text: 'Этот человек', gloss: T('este hombre; el demostrativo concuerda') },
    {
      text: 'Который берёт на Себя грех мира',
      gloss: T('que quita el pecado del mundo; el relativo es nominativo, así que es el sujeto'),
    },
    {
      text: 'тем, которые приняли Его',
      gloss: T('a los que le recibieron; dativo, nominativo plural y genitivo en una cláusula'),
    },
  ],
  tables: [
    {
      caption: T('Los pronombres personales, con la forma tras preposición'),
      head: [T('Caso'), T('я'), T('ты'), T('он'), T('она')],
      rows: [
        [T('nominativo'), T('я'), T('ты'), T('он'), T('она')],
        [T('genitivo'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('dativo'), T('мне'), T('тебе'), T('ему'), T('ей')],
        [T('acusativo'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('instrumental'), T('мной'), T('тобой'), T('им'), T('ей')],
        [T('tras preposición'), T('обо мне'), T('о тебе'), T('о нём'), T('о ней')],
      ],
    },
    {
      caption: T('El relativo en concordancia'),
      head: [T(''), T('masculino'), T('femenino'), T('neutro'), T('plural')],
      rows: [
        [T('nominativo'), T('который'), T('которая'), T('которое'), T('которые')],
        [T('genitivo'), T('которого'), T('которой'), T('которого'), T('которых')],
        [T('dativo'), T('которому'), T('которой'), T('которому'), T('которым')],
        [T('acusativo'), T('которого'), T('которую'), T('которое'), T('которых')],
        [T('instrumental'), T('которым'), T('которой'), T('которим'), T('которыми')],
        [T('prepositivo'), T('о котором'), T('о которой'), T('о котором'), T('о которых')],
      ],
    },
    {
      caption: T('Quién sustituye a qué'),
      head: [T('Sustituye'), T('Pronombre'), T('Flexiona'), T('Ejemplo')],
      rows: [
        [T('una persona'), T('кто'), T('no'), T('Кто пришёл, тот и судит')],
        [T('una cosa'), T('что'), T('no'), T('Что он сделал, не знаю')],
        [
          T('cualquier sustantivo'),
          T('который'),
          T('sí, en género y número'),
          T('Который берёт, который видит'),
        ],
        [T('lugar'), T('где'), T('no'), T('Где он живёт, там и работает')],
        [T('dirección'), T('куда'), T('no'), T('Куда идёшь, туда и иди')],
        [T('un sustantivo genérico'), T('какой'), T('sí'), T('Какой дом, такая и жизнь')],
      ],
    },
  ],
};
