import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Los adjetivos'),
  subtitle: T('posición + apocopla (¡buen/gran!)'),
  section: T('Adjetivos y adverbios'),
  body: C(`## Concordancia

El adjetivo concuerda en género y número con el sustantivo: {bueno} → {buena}, {buenos}, {buenas} · {feliz} → {felices} · {grande} → {grandes}. Las nacionalidades en consonante también varían: {español} → {española}, {francés} → {francesa}. {hermano} → {hermanos} / {hermanas} «hermano / hermana».

## Posición: antes o después

**Después** del sustantivo el adjetivo es **objetivo**, casi siempre descriptivo: {un hombre pobre} «un hombre que no tiene dinero» · {una casa bonita} «una casa bonita».

**Antes** el adjetivo es **subjetivo**, valorativo: {un pobre hombre} «un pobre hombre (¡pobre!)» · {un nuevo libro} «otro libro» frente a {un libro nuevo} «un libro recién comprado».

## Apocopla

Cinco adjetivos pierden la vocal final ante un sustantivo masculino singular:

• {bueno} → {buen}: {un buen hombre} · {buenas nuevas} (¡el femenino mantiene la forma completa!)
• {malo} → {mal}: {un mal hombre}
• {grande} → {gran}: {gran Dios} «gran Dios»
• {santo} → {san}: {San Juan} «San Juan» · {San Pablo}
• {ciento} → {cien}: {cien años} «cien años»

La apocopla **no** ocurre cuando el adjetivo va **detrás**: {un hombre bueno} es obligatorio.

## Sustantivación

Con artículo, el adjetivo se sustantiva: {los buenos} «los buenos», {lo importante} «lo importante», {las santas} «las santas».

Bíblico: {buenas nuevas} «buenas nuevas» (el evangelio) · {gran mandamiento} «el gran mandamiento» (Jn 13.34).

## Europa × América

La apocopla y la concordancia son iguales en ambos mundos. Solo es más raro ver el adjetivo antepuesto en algunos estilos de América.`),
  vocab: [
    V('buen hombre', 'bueno', 'un buen hombre (¡apocopla!)'),
    V('gran Dios', 'grande', 'gran Dios'),
    V('San Juan', 'santo', 'San Juan'),
    V('pobre hombre', 'pobre', 'un pobre hombre (¡antepuesto!)'),
    V('buenas nuevas', 'nueva', 'buenas nuevas'),
    V('ciudad', 'ciudad', 'la ciudad (¡femenino en -dad!)'),
    V('nuevo', 'nuevo', 'nuevo (¡otro!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«un pobre hombre» frente a «un hombre pobre»?'),
    options: [
      T('Iguales'),
      T('¡Pobre hombre (antes!) frente a sin dinero (después!)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con apocopla: «___ Dios» (gran Dios)'),
      answer: 'gran',
      hint: T('grande apocopa: cae la vocal ante el masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde hay apocopla?'),
      options: [
        T('{un buen hombre}'),
        T('{un hombre bueno}'),
        T('{una buena mujer}'),
        T('{unas buenas ideas}'),
      ],
      answer: 0,
      hint: T('Solo ante masculino singular.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma plena con la apocopada'),
      pairs: [
        { a: T('bueno'), b: T('buen') },
        { a: T('malo'), b: T('mal') },
        { a: T('santo'), b: T('san') },
        { a: T('ciento'), b: T('cien') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Después del nombre = objetivo (hombre pobre = sin dinero); antes = subjetivo (pobre hombre = ¡pobre!).',
      ),
    },
    {
      n: '2',
      text: T(
        'Apocopla ante masc. singular: bueno→buen, malo→mal, grande→gran, santo→san, ciento→cien.',
      ),
    },
    {
      n: '3',
      text: T('El adjetivo concuerda en género y número: buena, buenos, felices, nuevas.'),
    },
  ],
  notes: [
    {
      label: T('Concordancia doble'),
      text: T(
        'Cuando el sustantivo es plural, el adjetivo concuerda en género y número con cada elemento: {las casas blancas}. Con dos adjetivos de clases distintas el primero queda en singular y el segundo en plural; el patrón está en la lección 22.',
      ),
    },
  ],
  examples: [
    { text: '{un buen hombre}', gloss: T('Un buen hombre (apocopla de bueno).') },
    { text: '{gran Dios}', gloss: T('Gran Dios.') },
    { text: '{buenas nuevas}', gloss: T('Buenas nuevas (¡el evangelio!).') },
    { text: '{San Juan}', gloss: T('San Juan (apocopla de santo).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Concordancia de adjetivos comunes'),
      head: [T('Adjetivo'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['bueno', '{buen}', '{buena}', '{buenos}', '{buenas}'],
        ['malo', '{mal}', '{mala}', '{malos}', '{malas}'],
        ['grande', '{gran}', '{grande}', '{grandes}', '{grandes}'],
        ['feliz', '{feliz}', '{feliz}', '{felices}', '{felices}'],
        ['nuevo', '{nuevo}', '{nueva}', '{nuevos}', '{nuevas}'],
      ],
    },
    {
      caption: T('Tabla 2 — Posición del adjetivo'),
      head: [T('Orden'), T('Ejemplo'), T('Valor típico')],
      rows: [
        [T('antes'), '{un pobre hombre}', T('subjetivo (valorativo)')],
        [T('después'), '{un hombre pobre}', T('objetivo (descriptivo)')],
        [T('antes'), '{un nuevo libro}', T('otro (¡no recién comprado!)')],
        [T('después'), '{un libro nuevo}', T('recién comprado')],
      ],
    },
  ],
};
