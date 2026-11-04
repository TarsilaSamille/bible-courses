import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Verbos en presente'),
  subtitle: T('читать — говорить — быть'),
  section: T('El verbo: presente y aspecto'),
  body: C(
    'El infinitivo ruso suele terminar en -ть. En presente, un verbo puede seguir el modelo 1: читаю, читаешь, читает, читаем, читаете, читают; o el modelo 2: говорю, говоришь, говорит, говорим, говорите, говорят. El modelo depende del tema y no determina por sí mismo el aspecto: говорить es imperfectivo, mientras que сказать es perfectivo. El presente suele indicar una acción actual o repetida, pero la morfología rusa es más rica que esta división simplificada. El verbo быть suele omitir la cópula presente: Бог есть любовь es enfático o bíblico; Бог — любовь es neutro. En la negación se usa не, no нет: Я не знаю. En una pregunta de sí o no puede cambiar el orden y añadirse ли: Знаешь ли ты? Importan tiempo y aspecto: Я читаю сейчас significa «estoy leyendo ahora»; Я буду читать expresa una acción planeada o futura. La forma читаю identifica a quien lee, no un artículo ni el género.',
  ),
  vocab: [
    V('говорю', 'говорить', 'yo hablo'),
    V('читают', 'читать', 'ellos leen'),
    V('верю', 'верить', 'yo creo'),
    V('любит', 'любить', 'él ama'),
    V('молимся', 'молиться', 'nosotros oramos'),
    V('есть', 'быть', 'es'),
    V('знаю', 'знать', 'yo sé'),
    V('могу', 'мочь', 'yo puedo'),
  ],
  exercise: { kind: 'fill', prompt: T('Completa: я говор…'), answer: 'ю' },
  exercises: [
    { kind: 'fill', prompt: T('Completa: они чита…'), answer: 'ют' },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo es perfectivo?'),
      options: [T('говорить'), T('сказать')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se forma «¿Lo sabes?»?'),
      options: [T('Ты знаешь'), T('¿Знаешь ли ты?'), T('Ты ли знаешь')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{Ли} aparece en preguntas de sí o no.') },
    { n: '2', text: T('{Нет} niega la existencia; {не} niega una acción o cualidad.') },
  ],
  notes: [
    {
      label: T('El tema decide el aspecto'),
      text: T(
        'El presente ruso solo tiene dos series, pero no marcan aspecto: decide el tema. El par {говорить} / {сказать} es el que lleva la diferencia, no la terminación.',
      ),
    },
  ],
  examples: [
    { text: 'Они читают Библию', gloss: T('Ellos leen la Biblia') },
    { text: 'Знаешь ли ты?', gloss: T('¿Lo sabes?') },
  ],
  tables: [
    {
      caption: T('Presente de «leer» y «hablar»'),
      head: ['Pessoa', 'читать', 'говорить'],
      rows: [
        ['я', 'читаю', 'говорю'],
        ['ты', 'читаешь', 'говоришь'],
        ['он/она/оно', 'читает', 'говорит'],
        ['мы', 'читаем', 'говорим'],
        ['вы', 'читаете', 'говорите'],
        ['они', 'читают', 'говорят'],
      ],
    },
  ],
};
