import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Numeral y countable'),
  subtitle: T('two thousand people, both are, none of — el número como sustantivo'),
  section: T('Numerales'),
  body: C(`## El número es sustantivo, y por eso no pluraliza

Después de un número cardinal el sustantivo queda en **singular**: {two thousand people}, {three days}, {five hundred years}. La forma {two thousands people} está mal en cualquier registro, y la razón es que {thousand} ya es plural por sí mismo, como {million} y {billion}.

Un millón de personas es {a million people}, y la cantidad es {a million} en todas las escalas: {a thousand}, {a million}, {a billion}. Con {one} hay que tener cuidado: {one thousand} y {one million} obligan al sustantivo a singular, y el plural de {one} es {ones}, que aparece solo como pronombre ({the only ones who came}).

Mateo 18:22 en la KJV pone el número junto al sustantivo: {Seventy times seven}. Hay {seventy} y {seven} cardinales, sin artículo y sin preposición entre ellos, y la frase entera es un numeral.

## Both, either y neither

Tres palabras exigen verbo en plural y van cerca del verbo. {Both} apunta a dos y requiere plural: {Both children are here}. {Either} apunta a uno de dos y también requiere plural: {Either answer is correct}. {Neither} es {not either} y sigue la misma regla: {Neither answer is correct}.

El error del hablante de portugués es tratar {either} y {neither} como "uno" y "ninguno", que piden singular. La prueba es sencilla: si la palabra significa "ambos" o "cualquiera de los dos", el sujeto es plural, venga de donde venga.

Escribir {neither answer is correct} está bien; escribir {neither answer are correct} está mal por una palabra que en la otra lengua parece de singular.

## All of, none of, some of

Estas expresiones unen un cuantificador a un grupo indicado por {of} más sustantivo, y es el grupo el que concuerda: {all of the students are here}, {some of the water is bad}, {none of my friends came}.

Cuando el grupo es {all}, {none} o {both}, el verbo va en plural. Cuando es {some} o {any}, el verbo concuerda con el sustantivo que va después de {of}: {some of the water is bad} y {some of the problems are difficult}.

Es el único caso en que el verbo concuerda con algo que va después de él, y por eso {all of the water is bad} suena raro al aprendiz mientras {all of the problems are difficult} suena natural.

## Medir y contar

El numeral mide longitud, peso, volumen y tiempo de dos maneras. La primera usa un **adjetivo de medida** después del número: {two metres tall}, {ten kilos heavy}, {three years old}. La segunda usa {of} más lo que se cuenta: {ten kilos of flour}, {a cup of water}, {two litres of milk}.

La diferencia es de clase: {tall} y {old} son adjetivos y miden; {flour} y {water} son sustantivos y se cuentan. Con el adjetivo el sustantivo desaparece, y con el {of} aparece en singular detrás de la preposición.

{Two hours ago} es una cuarta forma: el tiempo transcurrido se mide en relación con {ago}, y la concordancia es con el sustantivo que va detrás.`),
  vocab: [
    V('two thousand people', 'thousand', 'dos mil personas'),
    V('a million people', 'million', 'un millón de personas'),
    V('one thousand', 'thousand', 'mil'),
    V('the only ones', 'one', 'los únicos'),
    V('both', 'both', 'ambos'),
    V('either', 'either', 'cualquiera de los dos'),
    V('neither', 'neither', 'ninguno de los dos'),
    V('all of', 'all', 'todos los'),
    V('none of', 'none', 'ninguno de'),
    V('some of', 'some', 'algunos de'),
    V('two metres tall', 'metre', 'dos metros de alto'),
    V('ten kilos of flour', 'kilo', 'diez kilos de harina'),
    V('three years old', 'year', 'tres años de edad'),
    V('two hours ago', 'hour', 'hace dos horas'),
    V('seventy times seven', 'times', 'setenta veces siete'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Después de un número cardinal el sustantivo queda en singular: two thousand people, three days.',
      ),
    },
    {
      n: '2',
      text: T(
        'One, thousand, million y billion no pluralizan; el plural de one es ones, que solo aparece como pronombre.',
      ),
    },
    { n: '3', text: T('Both, either y neither exigen verbo en plural.') },
    {
      n: '4',
      text: T(
        'Con all of y none of el verbo es plural; con some of y any of concuerda con el sustantivo después de of.',
      ),
    },
    {
      n: '5',
      text: T(
        'El numeral mide con un adjetivo (two metres tall) o con of más sustantivo (ten kilos of flour).',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Mateo 18:22 trae seventy times seven: dos cardinales sin artículo y sin preposición entre ellos. La frase entera es un numeral.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe neither answer are correct, el problema es que leyó neither como "ninguno" y aplicó el singular de la otra lengua.',
      ),
    },
  ],
  examples: [
    { text: '{two thousand people}', gloss: T('dos mil personas') },
    { text: '{three days}', gloss: T('tres días') },
    { text: '{a million people}', gloss: T('un millón de personas') },
    { text: '{Both children are here}', gloss: T('los dos niños están aquí') },
    {
      text: '{Either answer is correct}',
      gloss: T('cualquiera de las dos respuestas es correcta'),
    },
    { text: '{Neither answer is correct}', gloss: T('ninguna de las dos respuestas es correcta') },
    { text: '{all of the students are here}', gloss: T('todos los alumnos están aquí') },
    { text: '{some of the water is bad}', gloss: T('parte del agua está mala') },
    { text: '{two metres tall}', gloss: T('dos metros de alto') },
    { text: '{ten kilos of flour}', gloss: T('diez kilos de harina') },
    { text: '{Seventy times seven}', gloss: T('setenta veces siete') },
    { text: '{three years old}', gloss: T('tres años de edad') },
  ],
  tables: [
    {
      caption: T('Los números grandes'),
      head: [T('Número'), T('Forma'), T('Con sustantivo')],
      rows: [
        ['{one}', T('no pluraliza'), '{one thousand people}'],
        ['{hundred}', T('no pluraliza'), '{five hundred years}'],
        ['{thousand}', T('no pluraliza'), '{two thousand people}'],
        ['{million}', T('no pluraliza'), '{a million dollars}'],
        ['{ones}', T('plural de one'), '{the only ones who came}'],
      ],
    },
    {
      caption: T('Determinantes y concordancia del verbo'),
      head: [T('Palabra'), T('Verbo'), T('Ejemplo')],
      rows: [
        ['{both}', T('plural'), '{both children are here}'],
        ['{either}', T('plural'), '{either answer is correct}'],
        ['{neither}', T('plural'), '{neither answer is correct}'],
        ['{all of}', T('plural'), '{all of the students are here}'],
        ['{some of}', T('lo que va después de of'), '{some of the water is bad}'],
        ['{none of}', T('plural'), '{none of my friends came}'],
      ],
    },
    {
      caption: T('Medir y contar'),
      head: [T('Formato'), T('Clase de la última palabra'), T('Ejemplo')],
      rows: [
        [T('número + adjetivo'), T('adjetivo'), '{two metres tall}'],
        [T('número + of + sustantivo'), T('sustantivo'), '{ten kilos of flour}'],
        [T('número + período + ago'), T('sustantivo'), '{two hours ago}'],
        [T('número + of + contable'), T('singular'), '{a cup of tea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('two thousands people'),
      T('two thousand people'),
      T('two thousands peoples'),
      T('two thousand peoples'),
    ],
    answer: 1,
    hint: T('Después de un número el sustantivo queda en singular.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa: '___ answer is correct.' (ninguna de las dos)"),
      answer: 'Neither',
    },
    { kind: 'fill', prompt: T("Completa la medida: 'ten kilos ___ flour'"), answer: 'of' },
    {
      kind: 'match',
      prompt: T('Relaciona el cuantificador con la concordancia del verbo.'),
      pairs: [
        { a: 'both', b: T('plural') },
        { a: 'either', b: T('plural') },
        { a: 'some of the water', b: T('singular') },
        { a: 'none of', b: T('plural') },
      ],
      answer: ['0-0', '1-0', '2-1', '3-0'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('Neither answer are correct'),
        T('Neither answer is correct'),
        T('Neither answers are correct'),
        T('Neither answers is correct'),
      ],
      answer: 1,
    },
  ],
};
