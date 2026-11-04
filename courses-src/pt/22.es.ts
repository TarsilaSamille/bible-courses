import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('El adjetivo y el adverbio'),
  title: T('El adjetivo: grado'),
  subtitle: T('bom, melhor, ótimo, y la locución que prefiere el texto'),
  body: C(`## Los tres grados

El adjetivo tiene tres grados, y el comparativo y el superlativo salen por regla. El comparativo de superioridad usa {mais}: {mais alto}, {mais forte}, {mais antigo}. El de inferioridad usa {menos}: {menos difícil}, {menor}. El de igualdad usa {tão} y {como}: {tão alto como}, {tão bom como}. Y está además el comparativo de cantidad, {muito}, el más común en el habla: {muito alto}, {muito bom}.

El superlativo sale del comparativo con {o} delante: {o mais alto}, {o mais forte}. La forma más común en el texto es la de intensidad, con {muito} y sin artículo: {muito alto}, {tão alto}, {bem alto}, {tão}. Ninguna flexiona, y por eso el portugués no distingue el superlativo masculino del femenino.

## Los irregulares

Una lista corta rompe la regla, y hay que memorizarla. {Bom} da {melhor} y {ótimo}. {Mau} dá {pior} y {péssimo}. {Grande} dá {maior} y {máximo}. {Pequeno} dá {menor} y {mínimo}. {Bom} además acepta {melhor} como superlativo, lo que da la construcción más antigua del portugués: {o melhor dos homens}.

Lo mismo con {muito} y {pouco}, que son palabras de grado: {muito bom}, {pouco bom}, {muito pior}. Y con {bastante}, que es palabra de cantidad y no de grado: {bastante gente}, y que en el texto antiguo aparece a menudo como verbo, {bastou}, con el sentido de «fue suficiente».

## La locución adjetiva

El portugués tiene un camino más largo para decir lo mismo, y el texto bíblico lo usa más que el otro. En vez de {ser importante}, el texto dice {ter importância}; en vez de {ser preciso}, dice {ser necessário}; en vez de {ele é fiel}, dice {ele se mostra fiel}. La locución adjetiva es lo que permite decir {é necessário que} y {é bom que} sin cambiar de construcción.

La ventaja es la regencia: {bom} solo no exige nada, pero {é bom vir} ya exige infinitivo, y {é bom que ele venha} exige una oración entera en subjuntivo. La locución, por tanto, no es adorno: es lo que rige el verbo que viene después, y es lo que el traductor tiene que producir donde el griego tiene un verbo como {δέει}.

El punto que hay que vigilar es doble. Primero, la locución admite las dos formas, y decide el sentido: {é bom que} es evaluación, {é bom vir} es consejo. Segundo, lo que rige el verbo siguiente es la locución y no el sustantivo, que es distinto del latín y del griego.

## Criterio de lectura

Con cualquier adjetivo, pregúntate: ¿está en positivo, en comparativo o en superlativo? ¿Es regular o irregular? ¿Y el texto usa el adjetivo solo o dentro de una locución?

En 1 Cor 13.13, {o maior deles é o amor} es un superlativo con {o} delante, y es el único de los tres grados que aparece en la frase. El texto no dice que el amor sea mayor que la fe, sino que entre los tres ocupa el primer lugar: es superlativo, no comparativo, y la diferencia entre las dos cosas es el sentido del versículo.`),
  vocab: [
    V('o adjetivo', 'adjetivo', 'el adjetivo'),
    V('bom', 'bom', 'bueno'),
    V('melhor', 'bom', 'mejor'),
    V('ótimo', 'bom', 'óptimo'),
    V('mau', 'mau', 'malo'),
    V('pior', 'mau', 'peor'),
    V('grande', 'grande', 'grande'),
    V('maior', 'grande', 'mayor'),
    V('pequeno', 'pequeno', 'pequeño'),
    V('menor', 'pequeno', 'menor'),
    V('muito', 'muito', 'muy'),
    V('tão', 'tão', 'tan'),
    V('mais', 'mais', 'más'),
    V('é bom que', 'bom', 'es bueno que'),
    V('é necessário', 'necessário', 'es necesario'),
    V('o amor', 'amor', 'el amor'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El comparativo de superioridad usa {mais}: {mais alto}; el de inferioridad usa {menos}: {menos difícil}.',
      ),
    },
    {
      n: '§2',
      text: T('El superlativo regular sale del comparativo con {o} delante: {o mais alto}.'),
    },
    {
      n: '§3',
      text: T('Los irregulares son pocos: {melhor}, {pior}, {maior}, {menor}, {ótimo}, {péssimo}.'),
    },
    {
      n: '§4',
      text: T(
        'La locución adjetiva rige el verbo que viene después: {é bom que} exige subjuntivo, {é bom} exige infinitivo.',
      ),
    },
    {
      n: '§5',
      text: T('El superlativo no flexiona en portugués: {o mais alto} vale para los dos géneros.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego y el hebreo comparan con partícula, y el portugués compara con {mais}, {menos} o {tão}. Donde el griego dice {μᾶλλον}, el portugués dice {mais}.',
      ),
    },
    {
      label: T('Cuidado con el sentido'),
      text: T(
        'En {o maior deles é o amor}, el superlativo indica posición entre tres, no comparación entre dos. Traducirlo por {mais amoroso} cambia el sentido del versículo.',
      ),
    },
  ],
  examples: [
    { text: 'Ele é mais alto que o irmão.', gloss: T('Comparativo de superioridad con {mais}.') },
    { text: 'É tão forte como o pai.', gloss: T('Comparativo de igualdad con {tão} y {como}.') },
    { text: 'É o melhor aluno.', gloss: T('Superlativo irregular de {bom}.') },
    { text: 'Isto é muito importante.', gloss: T('Comparativo de intensidad con {muito}.') },
    { text: 'Ele é um homem bom.', gloss: T('Positivo, sin grado alguno.') },
    { text: 'É necessário que todos venham.', gloss: T('Locución adjetiva que exige subjuntivo.') },
    { text: 'É bom vir cedo.', gloss: T('Locución con infinitivo: consejo, no evaluación.') },
    { text: 'O maior deles é o amor.', gloss: T('Superlativo con {o} delante.') },
  ],
  tables: [
    {
      caption: T('Los tres grados'),
      head: ['Grau', 'Exemplo', 'Como se forma'],
      rows: [
        ['positivo', 'alto', 'o próprio adjetivo'],
        ['comparativo', 'mais alto', 'mais + adjetivo'],
        ['comparativo', 'menos difícil', 'menos + adjetivo'],
        ['comparativo', 'tão alto como', 'tão + adjetivo + como'],
        ['superlativo', 'o mais alto', 'o + comparativo'],
      ],
    },
    {
      caption: T('Irregulares'),
      head: ['Positivo', 'Comparativo', 'Superlativo'],
      rows: [
        ['bom', 'melhor', 'o melhor, ótimo'],
        ['mau', 'pior', 'o pior, péssimo'],
        ['grande', 'maior', 'o maior, máximo'],
        ['pequeno', 'menor', 'o menor, mínimo'],
      ],
    },
    {
      caption: T('Locución adjetiva'),
      head: ['Locução', 'O que vem depois', 'Exemplo'],
      rows: [
        ['é bom que', 'subjuntivo', 'é bom que ele venha'],
        ['é necessário', 'subjuntivo', 'é necessário que ouçam'],
        ['tem importância', 'complemento', 'tem importância para todos'],
        ['é importante', 'complemento', 'é importante para todos'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el comparativo de {bom}?'),
    options: [T('melhor'), T('mais bom'), T('bomente'), T('o bom')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('«É bom que ele ___» necesita un verbo en ______.'),
      answer: 'subjuntivo',
      hint: T('Es la locución la que rige el verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('En «o maior deles é o amor», {maior} es:'),
      options: [T('superlativo'), T('comparativo'), T('positivo'), T('locución adjetiva')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el positivo con el comparativo.'),
      pairs: [
        { a: T('bom'), b: T('melhor') },
        { a: T('mau'), b: T('pior') },
        { a: T('grande'), b: T('maior') },
        { a: T('pequeno'), b: T('menor') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
