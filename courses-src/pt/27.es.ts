import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Los conectivos'),
  title: T('Conjunciones: subordinantes'),
  subtitle: T('porque, embora, para que, y el régimen que exige cada una'),
  body: C(`## Causa y consecuencia

La causa responde a por qué: {porque}, {como}, {já que}, {visto que}, {uma vez que}. La diferencia entre ellas es de registro y de posición, no de sentido: {porque} puede abrir la frase o ir detrás del verbo, y las otras casi solo la abren.

La consecuencia responde a y entonces: {por isso}, {de sorte que}, {de modo que}, {portanto}, {por conseguinte}. El griego resuelve esas con dos partículas, {διό} y {ἄρα}, y el portugués elige qué palabra usar.

## Condición y concesión

Condición: {se}, {caso}, {salvo que}, {desde que}, {conforme}, {dado que}. Concesión: {embora}, {ainda que}, {mesmo que}, {se bem que}, {por mais que}, {conquanto}. Las dos ponen el hecho en el mismo plano y se oponen con palabras distintas.

El punto que más cuesta es la regla de {embora}. La conectiva concessiva {embora} **no admite {que} ni verbo conjugado**: se escribe {embora fosse}, nunca {embora que fosse}. Cuando la subordinada es más larga, el verbo va al subjuntivo y la conjunción desaparece: {Ainda que fosse difícil, ele foi}. El griego, que es una sola palabra, no tiene esa prohibición.

## Finalidad, tiempo y comparación

Finalidad: {para que}, {a fim de que}, {com}, {para} más infinitivo. Tiempo: {quando}, {enquanto}, {antes que}, {depois que}, {assim que}, {logo que}. Comparación: {como}, {do que}, {que}. Conformidad: {conforme}, {segundo}, {como}.

Lo que cambia entre ellas es el tiempo del verbo: {quando eu vier} es futuro del subjuntivo, {quando eu vim} es pretérito; {depois que eu vier} también es futuro, y esa diferencia es la que hace {depois}; {enquanto} pide presente, {enquanto eu vivia}.

## Criterio de lectura

Con cualquier subordinada, pregúntate: ¿cuál es el valor, causa, consecuencia, condición, concesión, finalidad, tiempo, comparación o conformidad? ¿Y el verbo está en indicativo, subjuntivo o infinitivo? ¿Y la conjunción admite {que} o exige verbo directo?

Jn 3.16 trae {para que todo aquele que crê nele não pereça}: es finalidad, y la pareja {para que} es la marca. El griego pone ὅπως en el mismo sitio, y el portugués lo tradujo por {para que}, que es la forma que hace visible la finalidad en la frase.`),
  vocab: [
    V('porque', 'porque', 'porque'),
    V('como', 'como', 'como (causa)'),
    V('por isso', 'isso', 'por eso'),
    V('de sorte que', 'sorte', 'de suerte que'),
    V('se', 'se', 'si (condición)'),
    V('caso', 'caso', 'caso'),
    V('embora', 'embora', 'aunque'),
    V('ainda que', 'ainda', 'aun cuando'),
    V('mesmo que', 'mesmo', 'aunque'),
    V('para que', 'para', 'para que'),
    V('a fim de que', 'fim', 'a fin de que'),
    V('quando', 'quando', 'cuando'),
    V('enquanto', 'enquanto', 'mientras'),
    V('depois que', 'depois', 'después de que'),
    V('conforme', 'conforme', 'conforme'),
    V('segundo', 'segundo', 'según'),
    V('a concessão', 'concessão', 'la concesión'),
    V('a finalidade', 'finalidade', 'la finalidad'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Causa: {porque}, {como}, {já que}, {visto que}. Consequência: {por isso}, {de sorte que}, {portanto}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Embora} não admite {que} nem verbo conjugado: {embora fosse}, nunca {embora que fosse}.',
      ),
    },
    {
      n: '§3',
      text: T('Condição e concessão admitem verbo no subjuntivo: {se vier}, {ainda que fosse}.'),
    },
    {
      n: '§4',
      text: T('Tempo muda o verbo: {quando eu vier} é futuro, {quando eu vim} é pretérito.'),
    },
    {
      n: '§5',
      text: T('Conformidade: {conforme}, {segundo}, {como}; comparação: {como}, {do que}, {que}.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego marca cada valor con una partícula distinta ({ὅτι}, {ἵνα}, {εἰ}, {ἀν}, {ὡς}, {ὅπως}, {καθώς}) y el hebreo usa construcciones con partículas. El portugués usa una palabra por valor, y la traducción elige cuál.',
      ),
    },
    {
      label: T('Donde el griego es más económico'),
      text: T(
        'Donde el griego tiene {ἵνα} más subjuntivo, el portugués tiene {para que} más subjuntivo: dos palabras por una. Donde el griego tiene {εἰ} más indicativo, el portugués tiene {se} más subjuntivo, y el verbo cambia de tiempo.',
      ),
    },
  ],
  examples: [
    { text: 'Não vi, porque chovia.', gloss: T('Causa con {porque} después del verbo.') },
    { text: 'Chovia; por isso não saímos.', gloss: T('Consequência com {por isso}.') },
    { text: 'Se vier, avise-me.', gloss: T('Condição com o verbo no subjuntivo.') },
    { text: 'Embora fosse difícil, ele foi.', gloss: T('Concessión sin {que}: esa es la regla.') },
    { text: 'Ainda que fosse difícil, ele foi.', gloss: T('La misma idea con otra conjunción.') },
    { text: 'Vem para que eu te veja.', gloss: T('Finalidad con {para que} más subjuntivo.') },
    { text: 'Quando eu vier, aviso.', gloss: T('Tiempo: futuro del subjuntivo.') },
    { text: 'Conforme o testemunho, basta.', gloss: T('Conformidad con {conforme}.') },
  ],
  tables: [
    {
      caption: T('Os valores e suas palavras'),
      head: ['Valor', 'Conjunções'],
      rows: [
        ['causa', 'porque, como, já que, visto que'],
        ['consequência', 'por isso, de sorte que, portanto'],
        ['condição', 'se, caso, salvo que, desde que'],
        ['concessão', 'embora, ainda que, mesmo que, por mais que'],
        ['finalidade', 'para que, a fim de que, com'],
        ['tempo', 'quando, enquanto, antes que, depois que, assim que'],
        ['comparação', 'como, do que, que'],
        ['conformidade', 'conforme, segundo, como'],
      ],
    },
    {
      caption: T('O regime de cada uma'),
      head: ['Conjunção', 'O que vem depois'],
      rows: [
        ['porque', 'indicativo ou qualquer tempo'],
        ['se', 'futuro do subjuntivo ou imperfeito'],
        ['embora', 'subjuntivo, sem que'],
        ['para que', 'subjuntivo'],
        ['quando', 'futuro do subjuntivo no futuro'],
        ['como', 'indicativo'],
      ],
    },
    {
      caption: T('Concessivas e o verbo'),
      head: ['Forma', 'Verbo', 'Correto?'],
      rows: [
        ['embora', 'fosse', 'sim'],
        ['embora que', 'fosse', 'não'],
        ['ainda que', 'fosse', 'sim'],
        ['mesmo que', 'fosse', 'sim'],
        ['por mais que', 'fosse', 'sim'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué construcción es correcta?'),
    options: [
      T('embora fosse difícil'),
      T('embora que fosse difícil'),
      T('embora que difícil fosse'),
      T('embora difícil que fosse'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{para que} exige un verbo en ______.'),
      answer: 'subjuntivo',
      hint: T('Es la marca de la finalidad.'),
    },
    {
      kind: 'choose',
      prompt: T('En «conforme o testemunho», {conforme} es:'),
      options: [T('conformidad'), T('causa'), T('concesión'), T('comparación')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la conjunción con su valor.'),
      pairs: [
        { a: T('porque'), b: T('causa') },
        { a: T('embora'), b: T('concessão') },
        { a: T('para que'), b: T('finalidade') },
        { a: T('conforme'), b: T('conformidade') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
