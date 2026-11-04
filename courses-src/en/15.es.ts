import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('El sustantivo: plural y conteo'),
  subtitle: T('man/men, child/children, foot/feet — los plurales que no son -s'),
  section: T('Sustantivos'),
  body: C(`## Lo que resuelve la regla del -s

Casi todo plural inglés se forma añadiendo {s}: {book → books}, {city → cities}, {sin → sins}. La regla tiene tres desdoblamientos y cabe en una frase: {ch}, {sh}, {s}, {x} y {o} finales reciben {es}; consonante más {y} pasa a {ies}; {f} y {fe} finales a veces pasan a {ves}.

**El sonido manda sobre la forma.** {church} no puede recibir solo {s} y seguir sonando como {church}; por eso recibe {es}. Quien memorice {-es} como lista errará justamente los casos en que no se aplica.

Lo que queda después de esas tres reglas es un conjunto cerrado. Ninguna regla lo genera, y ningún hablante de portugués lo adivina, porque en portugués todos son regulares: {children} es la palabra que no existe en portugués.

## Los irregulares que toda lectura debería llevar

{Man → men} y {woman → women} cambian la vocal y la consonante final. {Child → children} y {goose → geese} cambian el núcleo de la palabra. {Foot → feet} y {tooth → teeth} pierden la {o}. {Mouse → mice} cambia el final por {ice}. {Person → people} y {ox → oxen} son los dos casos en que el plural no tiene ninguna relación con el singular.

La KJV usa los dos lados de la regla en un mismo versículo. Salmo 8:6 dice {Thou hast put all things under his feet}, y el versículo sigue con {all sheep and oxen}: {feet} es irregular, {sheep} no cambia y {oxen} no tiene relación con {ox}. Tres plurales, tres caminos.

## Los que no cambian, y los que vienen del griego

{Sheep}, {deer}, {fish}, {series} y {species} tienen la misma forma en singular y en plural: un {sheep} y cien {sheep}. **Lo que delata el plural es el verbo**, y es singular: {the sheep are feeding}, {this species is rare}.

Del griego vienen {data}, {criteria} y {phenomena}, que en inglés contemporáneo son plural y concuerdan en plural: {the data are convincing}. El uso técnico los trata como sustantivo singular, y la forma {datas} aparece cuando se quiere contar conjuntos distintos de datos.

## Dos palabras, dos plurales y el número que no pluraliza

{Compass} es uno de los pocos casos en que el mismo plural sirve para dos sentidos: {two compasses} puede ser dos instrumentos de navegación o dos circunferencias. El singular ya no distingue, y el contexto resuelve.

{Chalk} funciona como masa ({the chalk is white}) y como contable ({three chalks} son tres trozos). Con sustantivos que oscilan entre los dos regímenes, el plural no es una regla fija: es una decisión sobre lo que se está contando.

El número es sustantivo: {two thousand people}, no {two thousands people}. "Um milhão de pessoas" en inglés es {a million people}, y la concordancia es con {people}, que es plural. Lo mismo vale para {a thousand} y {a dozen}.

En las preguntas, {How many} cuenta con {How many books} y {How much} pesa con {How much money}, y el sustantivo sigue la respuesta: {How many pieces of advice do you need}?`),
  vocab: [
    V('child', 'child', 'niño'),
    V('children', 'child', 'niños'),
    V('foot', 'foot', 'pie'),
    V('feet', 'foot', 'pies'),
    V('man', 'man', 'hombre'),
    V('men', 'man', 'hombres'),

    V('tooth', 'tooth', 'diente'),
    V('teeth', 'tooth', 'dientes'),
    V('mouse', 'mouse', 'ratón'),
    V('mice', 'mouse', 'ratones'),
    V('person', 'person', 'persona'),
    V('people', 'person', 'personas'),
    V('sheep', 'sheep', 'oveja/ovejas'),

    V('goose', 'goose', 'ganso'),
    V('geese', 'goose', 'gansos'),
    V('data', 'data', 'datos'),

    V('compass', 'compass', 'brújula/circunferencia'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El plural regular es -s, con tres correcciones sonoras: -es tras ch, sh, s, x y o finales; -ies tras consonante + y; -ves tras algunos -f y -fe.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los irregulares no tienen regla ni relación con el singular. Son una lista cerrada y hay que memorizarlos: children, feet, teeth, mice, geese, oxen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Sheep, deer, fish, series y species mantienen la misma forma en ambos números, y el verbo es lo que revela cuál se está viendo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Después de un número el sustantivo queda en singular: two thousand people, a million dollars.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los sustantivos griegos como data y criteria son plural en inglés y concuerdan en plural, aunque muchos técnicos los traten como singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Salmo 8:6 tiene feet (irregular), sheep (inalterado) y oxen (sin relación con ox) en un versículo. Tres plurales, tres caminos, ninguna regla común.',
      ),
    },
    {
      label: T('Pronunciación:'),
      text: T(
        'Las correcciones del -s están por el sonido: quien escribe churchs en vez de churches acierta la forma escrita y falla el sonido de la palabra.',
      ),
    },
  ],
  examples: [
    { text: '{two thousand people}', gloss: T('dos mil personas — el número no pluraliza') },
    { text: '{the sheep are feeding}', gloss: T('las ovejas están pastando — verbo en plural') },
    { text: '{the data are convincing}', gloss: T('los datos son convincentes') },
    { text: '{two compasses}', gloss: T('dos brújulas o dos circunferencias') },
    { text: '{three chalks}', gloss: T('tres trozos de tiza') },
    { text: '{all sheep and oxen}', gloss: T('todas las ovejas y bueyes') },
    { text: '{How many pieces of advice do you need}', gloss: T('¿Cuántos consejos necesitas?') },
    { text: '{the city and its churches}', gloss: T('la ciudad y sus iglesias') },
    { text: '{five loaves and two fish}', gloss: T('cinco panes y dos peces — fish no cambia') },
    { text: '{a series of events}', gloss: T('una serie de eventos — series, no serials') },
  ],
  tables: [
    {
      caption: T('Plurales regulares'),
      head: [T('Final del singular'), T('Plural'), T('Ejemplo')],
      rows: [
        ['-', '{+s}', '{book → books}'],
        ['ch / sh / s / x / o', '{+es}', '{church → churches}'],
        [T('consonante + y'), '{y → ies}', '{city → cities}'],
        [T('vocal + y'), '{+s}', '{day → days}'],
        [T('-f / -fe (algunos)'), '{f/fe → ves}', '{leaf → leaves}'],
      ],
    },
    {
      caption: T('Plurales irregulares'),
      head: [T('Singular'), T('Plural'), T('Qué cambia')],
      rows: [
        ['{man}', '{men}', T('vocal y consonante final')],
        ['{woman}', '{women}', T('vocal y consonante final')],
        ['{child}', '{children}', T('núcleo de la palabra')],
        ['{foot}', '{feet}', T('pierde la -oo-')],
        ['{tooth}', '{teeth}', T('pierde la -oo-')],
        ['{goose}', '{geese}', T('núcleo de la palabra')],
        ['{mouse}', '{mice}', T('final sustituido')],
        ['{person}', '{people}', T('sin relación con el singular')],
        ['{ox}', '{oxen}', T('sin relación con el singular')],
      ],
    },
    {
      caption: T('Plurales que no cambian'),
      head: [T('Palabra'), T('Plural'), T('Cómo se reconoce')],
      rows: [
        ['{sheep}', '{sheep}', T('por el verbo: the sheep are')],
        ['{deer}', '{deer}', T('por el verbo: the deer is')],
        ['{fish}', '{fish}', T('por el verbo: two fish are')],
        ['{data}', '{data}', T('griego: plural en inglés')],
        ['{criteria}', '{criteria}', T('griego: plural en inglés')],
        ['{chalk}', '{chalks}', T('la masa se vuelve contable')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué plural es correcto?'),
    options: [T('two childs'), T('two children'), T('two childrens'), T('two childes')],
    answer: 1,
    hint: T('Child es irregular: children.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa el irregular: 'I have two ___. ' (dientes)"),
      answer: 'teeth',
    },
    {
      kind: 'fill',
      prompt: T("Corrígelo: 'two thousands people' → 'two thousand ___'"),
      answer: 'people',
    },
    {
      kind: 'match',
      prompt: T('Relaciona singular y plural.'),
      pairs: [
        { a: 'goose', b: 'geese' },
        { a: 'foot', b: 'feet' },
        { a: 'person', b: 'people' },
        { a: 'ox', b: 'oxen' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
      options: [
        T('The sheep is feeding'),
        T('The sheep are feeding'),
        T('The sheeps is feeding'),
        T('The sheep are feeds'),
      ],
      answer: 1,
    },
  ],
};
