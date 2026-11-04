import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('La sintaxis'),
  title: T('La regencia: los verbos que atascan'),
  subtitle: T('confiar em, concordar com, lembrar-se de, y los que cambian'),
  body: C(`## El verbo que viene sin preposición y el que la exige

La regencia es la preposición que un verbo exige ante su complemento. Algunos verbos dispensan preposición: {confio nele} da {confio} y {confio em você}; {concordo com ele} da {concordo} y {concordo com você}. La preposición no es adorno: sin ella el verbo se queda sin objeto, y el lector nota que falta algo.

Lo que atasca al lector es lo contrario: verbos que **exigen** preposición y de los que la gramática no avisa. {Depender de}, {proceder de}, {necessitar de}, {participar de}, {visar a}, {ater-se a}, {lembrar-se de}, {esquecer-se de}, {reportar-se a}. Todos esos verbos nacen con una preposición pegada, y la preposición es parte de la palabra tanto como la raíz.

## El grupo del com y el grupo del de

Los verbos de concordancia piden {com}: {concordar com}, {lidiar com}, {conformar-se com}, {coincidir com}. Los verbos de necesidad y participación piden {de}: {necessitar de}, {participar de}, {tratar de}, {fazer-se de}, {dar-se de}. Los verbos de dirección piden {a}: {visar a}, {assistir a}, {proteger a}.

La preposición no es decorativa: dice si el verbo es relacional. {Concordar} sin {com} parece incompleto, porque el verbo es relacional; {participar} sin {de}, lo mismo. Y el griego resuelve esto con caso y no con preposición: quien traduce caso por caso sin saber cuál es la preposición escribe mal en portugués y además pierde la información.

## Los que cambian de preposición

Hay verbos que cambian de preposición según el sentido, y son ellos los que producen traducciones erróneas. {Assistir} a un servicio es estar presente; {assistir} enfermo es tener la enfermedad. {Informar} a alguien es avisarle; {informar} sobre algo es relatar. {Visar} a un blanco es apuntarlo; {visar} a un fin es tenerlo por objetivo.

La regla práctica: cuando el verbo tiene dos construcciones, decide el complemento. Si el complemento es persona, la preposición suele ser directa o {a}; si es cosa o asunto, suele ser {sobre}, {em} o {de}.

## Criterio de lectura

Con cualquier verbo transitivo, pregúntate: ¿cuál es la preposición que exige? ¿Y el verbo tiene más de una regencia? ¿Y el complemento que viene detrás es persona, cosa o asunto?

En Hch 2.38 el verbo es {sede bautizados}, y no hay preposición ninguna: el participio hace de verbo y el sustantivo {todos} es el sujeto. La frase es corta porque el griego tampoco tenía preposición, y quien traduce añadiendo una produce una palabra que el original no tiene.`),
  vocab: [
    V('a regência', 'regência', 'la regencia'),
    V('confiar em', 'confiar', 'confiar en'),
    V('concordar com', 'concordar', 'concordar con'),
    V('depender de', 'depender', 'depender de'),
    V('lembrar-se de', 'lembrar-se', 'acordarse de'),
    V('esquecer-se de', 'esquecer-se', 'olvidarse de'),
    V('necessitar de', 'necessitar', 'necesitar de'),
    V('participar de', 'participar', 'participar en'),
    V('proceder de', 'proceder', 'proceder de'),
    V('visar a', 'visar', 'visar a'),
    V('assistir a', 'assistir', 'asistir a'),
    V('implicar em', 'implicar', 'implicar en'),
    V('ater-se a', 'ater-se', 'atenerse a'),
    V('reportar-se a', 'reportar-se', 'reportarse a'),
    V('informar sobre', 'informar', 'informar sobre'),
    V('o complemento', 'complemento', 'el complemento'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La regencia es la preposición que el verbo exige: {confiar em}, {concordar com}, {depender de}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Los verbos de concordancia piden {com}; los de necesidad y participación piden {de}; los de dirección piden {a}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Algunos verbos cambian de preposición según el sentido: {assistir a} y {assistir de}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Cuando el verbo tiene dos regencias, decide el complemento: persona pide {a}, asunto pide {sobre} o {em}.',
      ),
    },
    {
      n: '§5',
      text: T('No todo verbo transitivo pide preposición: {sede bautizados} no pide ninguna.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego y el hebreo marcan la relación por caso y por partícula, y el portugués por preposición. Traducir caso por caso sin saber la preposición produce una frase que parece correcta y no significa lo mismo.',
      ),
    },
    {
      label: T('Cuidado con assistir'),
      text: T(
        '{Assistir} a una reunión es estar presente; {assistir} enfermo es tener la enfermedad. Una palabra con dos regencias opuestas es lo que hace tropezar la lectura bíblica.',
      ),
    },
  ],
  examples: [
    { text: 'Confio em Deus.', gloss: T('Verbo con preposición obligatoria.') },
    { text: 'Concordo com a tua leitura.', gloss: T('Verbo relacional: pide {com}.') },
    { text: 'Depende da vontade dele.', gloss: T('Regencia fija: {de}.') },
    { text: 'Lembrei-me da promessa.', gloss: T('{Lembrar-se} exige {de}.') },
    { text: 'Esqueceu-se de tudo.', gloss: T('El mismo grupo que {esquecer-se de}.') },
    { text: 'Necessitava de descanso.', gloss: T('{De} en la regencia, no {para}.') },
    { text: 'Assistiu à reunião.', gloss: T('Uno de los sentidos de {assistir}.') },
    { text: 'Assistiu de febre.', gloss: T('El otro sentido: estar enfermo.') },
  ],
  tables: [
    {
      caption: T('Regencia por grupo'),
      head: ['Grupo', 'Preposição', 'Verbos'],
      rows: [
        ['concordância', 'com', 'concordar com, coincidir com, conformar-se com'],
        ['necessidade', 'de', 'necessitar de, tratar de, fazer-se de'],
        ['participação', 'de', 'participar de, assistir de'],
        ['direção', 'a', 'visar a, assister a, proteger a'],
        ['origem', 'de', 'proceder de, resultar de, advir de'],
        ['confiança', 'em', 'confiar em, crer em, insistir em'],
      ],
    },
    {
      caption: T('Verbos con dos regencias'),
      head: ['Verbo', 'Primeira regência', 'Segunda regência'],
      rows: [
        ['assistir', 'assistir a (estar presente)', 'assistir de (ter a doença)'],
        ['informar', 'informar alguém', 'informar sobre algo'],
        ['visar', 'visar a um alvo', 'visar a um fim'],
        ['implicar', 'implicar em algo', 'implicar algo'],
        ['proceder', 'proceder de algo', 'proceder bem'],
      ],
    },
    {
      caption: T('Lo que decide la preposición'),
      head: ['Complemento', 'Preposição típica', 'Exemplo'],
      rows: [
        ['pessoa', 'a ou direta', 'assistir ao pai'],
        ['assunto', 'sobre, em, de', 'informar sobre o caso'],
        ['origem', 'de', 'proceder de Deus'],
        ['finalidade', 'a', 'visar ao bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué construcción es correcta?'),
    options: [T('confio em Deus'), T('confio de Deus'), T('confio com Deus'), T('confio a Deus')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{concordar} exige la preposición ______.'),
      answer: 'com',
      hint: T('Es un verbo relacional.'),
    },
    {
      kind: 'choose',
      prompt: T('En «assistiu de febre», {assistir} significa:'),
      options: [T('estar enfermo'), T('estar presente'), T('mirar a'), T('pedir ayuda')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con la preposición.'),
      pairs: [
        { a: T('concordar com'), b: T('com') },
        { a: T('necessitar de'), b: T('de') },
        { a: T('visar a'), b: T('a') },
        { a: T('confiar em'), b: T('em') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
