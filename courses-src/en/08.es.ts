import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Tiempos perfecto'),
  subtitle: T('have seen, had seen — relación con el presente'),
  section: T('El verbo'),
  body: C(`## El presente perfecto

El presente perfecto combina un pasado con relevancia presente: {I have read the book} puede indicar conocimiento o experiencia actual. La acción está terminada, pero el momento que interesa es ahora. También acumula experiencia: {She has visited Rome}.

Normalmente no admite un tiempo pasado ya cerrado: no {I have seen him yesterday}; usa {I saw him yesterday}. En cambio, {has gone} puede describir un resultado de destino: {He has gone to Paris} puede significar que está allí o que no volverá.

## Presente y pasado perfecto

El pasado perfecto sitúa un suceso antes de otro: {When I arrived, he had left}. El inglés también usa {was/were} + participio: {It was written}. Esto es especialmente importante en el inglés bíblico, donde el tiempo suele seguir la lógica y el discurso más que una línea temporal rígida.

Juan 19:30, {It is finished}, y 2 Timoteo 4:7, {I have fought the good fight}, deben traducirse sin forzar sus formas hacia un único tiempo português. El contexto distingue estado resultante, experiencia acumulada y aspecto narrativo.`),
  vocab: [
    V('has seen', 'see', 'ha visto'),
    V('have believed', 'believe', 'hemos creído'),
    V('had gone', 'go', 'había ido'),
    V('is finished', 'finish', 'está consumado'),
    V('yesterday', 'yesterday', 'ayer'),
    V('experience', 'experience', 'experiencia'),
    V('result', 'result', 'resultado'),
    V('already', 'already', 'ya'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase es natural?'),
    options: [
      T('I have seen him yesterday'),
      T('I saw him yesterday'),
      T('I did saw him yesterday'),
      T('I have saw him yesterday'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa: 'When she arrived, he ___ (leave).'"),
      answer: 'had left',
    },
    {
      kind: 'match',
      prompt: T('Relaciona forma y participio.'),
      pairs: [
        { a: 'speak', b: 'spoken' },
        { a: 'say', b: 'said' },
        { a: 'write', b: 'written' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué bloquea normalmente el presente perfecto con yesterday?'),
      options: [
        T('La ausencia de artículo'),
        T('Una expresión de tiempo pasado ya cerrado'),
        T('El uso de was'),
        T('La negación'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Usa el presente perfecto para una situación vigente ahora: I have lost my keys. Usa el pasado simple para un tiempo cerrado: I lost them yesterday.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pasado perfecto significa más que solo pasado: mide una relación de anterioridad dentro de una narración pasada.',
      ),
    },
    {
      n: '3',
      text: T(
        'El participio no siempre coincide con el pasado: speak/spoken, say/said. Aprende ambos cuando difieren.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'No supongas que perfect corresponde a un solo tiempo português; su función es discursiva.',
      ),
    },
  ],
  examples: [
    { text: '{I have believed}', gloss: T('he creído — experiencia/estado actual') },
    { text: '{When I came, he had gone}', gloss: T('cuando llegué, él ya se había ido') },
    { text: '{It is finished}', gloss: T('está consumado — estado resultante') },
  ],
  tables: [
    {
      caption: T('Elección del tiempo'),
      head: [T('Situación'), T('Forma'), T('Valor')],
      rows: [
        [T('ayer'), '{saw}', T('pasado cerrado')],
        [T('experiencia/resultado'), '{have seen}', T('presente relevante')],
        [T('pasado anterior'), '{had seen}', T('perspectiva pasada')],
      ],
    },
  ],
};
