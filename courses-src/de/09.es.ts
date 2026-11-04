import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Los casos'),
  subtitle: T('wer, wen, wem, wessen'),
  section: T('Los casos'),
  body: C(`El caso es la flexión que el alemán heredó del latín y que conserva funcionalmente. Cada caso responde a una pregunta, y las preguntas son las mismas para todos los sustantivos, lo que hace el sistema transparente a pesar de su complejidad.

El nominativo responde: ¿quién o qué realiza la acción? El acusativo responde: ¿quién o qué recibe la acción? El dativo responde: ¿a quién o para quién? El genitivo responde: ¿de quién o de qué?

Los pronombres interrogativos muestran el sistema con claridad: wer solo tiene forma de nominativo (¿Wer kommt?), mientras que los demás aparecen en tres casos — wen (masculino y neutro, acusativo), wem (dativo) y wessen (genitivo). Para el neutro el sistema ofrece was en todos los casos, porque desaparece la diferencia de género: Was kommt? Was suchst du? Wem gibst du das Buch? Wessen Buch ist das?

El demostrativo relativo repite exactamente el mismo dibujo: der, die, das, con wessen → dessen, dativo → dem, acusativo → den. Si se entienden estos cuatro casos, toda la declinación del capítulo 3 y de la sección de sintaxis queda resuelta de forma automática.

La consecuencia práctica es importante: la información de caso nunca está en el orden de las palabras, sino en la terminación. Por eso las frases Die Kinder kommen y Ich sehe die Kinder tienen la misma palabra die pero funciones opuestas; lo que desambigua es el verbo conjugado, el elemento que ocupa la segunda posición.`),
  vocab: [
    V('wer', 'wer', 'quién (nom.)'),
    V('wen', 'wer', 'quién (acc. masc./neut.)'),
    V('wem', 'wer', 'a quién (dat.)'),
    V('wessen', 'wer', 'de quién (gen.)'),
    V('was', 'was', 'qué (todos los casos)'),
    V('der Nominativ', 'Nominativ', 'el caso nominativo'),
    V('der Akkusativ', 'Akkusativ', 'el caso acusativo'),
    V('der Dativ', 'Dativ', 'el caso dativo'),
    V('der Genitiv', 'Genitiv', 'el caso genitivo'),
    V('das Pronomen', 'Pronomen', 'el pronombre'),
    V('das Subjekt', 'Subjekt', 'el sujeto'),
    V('das Objekt', 'Objekt', 'el objeto'),
    V('die Form', 'Form', 'la forma (gramatical)'),
    V('der Satz', 'Satz', 'la oración'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Ich sehe die Frau», ¿qué caso tiene die?'),
    options: [T('Nominativo'), T('Acusativo'), T('Dativo'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la pregunta: ___ suchst du? (quién, acc.)'),
      answer: 'Wen',
      hint: T('Acusativo de wer.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la pregunta: ___ Buch ist das? (de quién)'),
      answer: 'Wessen',
      hint: T('Genitivo de wer.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Der Schlüssel steckt im Schloss», ¿qué caso tiene Schlüssel?'),
      options: [T('nominativo'), T('dativo'), T('genitivo'), T('no es un caso con nombre')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con el caso.'),
      pairs: [
        { a: T('wem'), b: T('dativo') },
        { a: T('wessen'), b: T('genitivo') },
        { a: T('wer'), b: T('nominativo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nominativo y acusativo tienen formas idénticas en el femenino y en el plural, así que solo el orden de las palabras revela la diferencia: Der Mann sieht die Frau / Die Frau sieht den Mann.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dativo y genitivo se identifican fácilmente por la terminación: -m en el dativo y -s en el genitivo de artículo y sustantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'El caso de un sustantivo depende de su función, no de su sentido: Der Schlüssel ist im Schloss (nominativo del sujeto), pero Der Schlüssel steckt im Schloss (dativo de lugar).',
      ),
    },
    {
      n: '4',
      text: T(
        'En las preguntas el verbo conjugado va en primer lugar y el pronombre interrogativo puede ir detrás: Wer kommt heute? Wem gibst du es?',
      ),
    },
  ],
  notes: [
    {
      label: T('Un caso, una pregunta'),
      text: T(
        'El método que enseña toda la declinación sin memorizar un solo sustantivo es el de la pregunta fija. Ante cualquier nombre, pregúntate siempre: ¿quién lo hace? (nom.) ¿a quién? (dat.) ¿de quién? (gen.) La pregunta devuelve el caso, y el caso devuelve la forma. Sustituye el sustantivo por wen, wem, wessen y el ejercicio se vuelve puramente mecánico.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 1:1, Im Anfang war das Wort. La pregunta «¿quién era?» devuelve das (nominativo neutro); la pregunta «¿qué era?» también. El versículo es una frase de identificación, y el nominativo es el caso de la identificación.',
      ),
    },
  ],
  examples: [
    { text: 'Wer kommt?', gloss: T('¿Quién viene? (wer = nominativo).') },
    { text: 'Wem gibst du das Buch?', gloss: T('¿A quién le das el libro? (wem = dativo).') },
    { text: 'Wessen Name ist das?', gloss: T('¿De quién es el nombre? (wessen = genitivo).') },
    { text: 'Wen suchst du?', gloss: T('¿A quién buscas? (wen = acusativo).') },
    {
      text: 'Der Mann sieht die Frau.',
      gloss: T('El hombre ve a la mujer (der = nom., die = acc.).'),
    },
    {
      text: 'Die Frau sieht den Mann.',
      gloss: T('La mujer ve al hombre (la misma forma die, otra función).'),
    },
    {
      text: 'Das Buch liegt auf dem Tisch.',
      gloss: T('El libro está sobre la mesa (dem = dativo de lugar).'),
    },
    {
      text: 'Die Mutter des Kindes wartet.',
      gloss: T('La madre del niño espera (dos genitivos).'),
    },
  ],
  tables: [
    {
      caption: T('Los cuatro casos y sus preguntas'),
      head: ['Caso', 'Pergunta', 'Função', 'Sinal no artigo (masc. sg.)'],
      rows: [
        ['Nominativo', 'quem faz?', 'sujeito', 'der'],
        ['Acusativo', 'em quem age?', 'objeto direto, direção', 'den'],
        ['Dativo', 'a quem?', 'destinatário, beneficiário', 'dem'],
        ['Genitivo', 'de quem?', 'posse, origem, medida', 'des'],
      ],
    },
    {
      caption: T('Pronombres interrogativos por caso'),
      head: ['Caso', 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['Nominativo', 'wer', 'wer', 'was', 'was'],
        ['Acusativo', 'wen', 'wen', 'was', 'was'],
        ['Dativo', 'wem', 'wem', 'wem', 'wem'],
        ['Genitivo', 'wessen', 'wessen', 'wessen', 'wessen'],
      ],
    },
  ],
};
