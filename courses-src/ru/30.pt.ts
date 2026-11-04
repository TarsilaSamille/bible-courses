import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Pai-Nosso e aspecto verbal'),
  subtitle: T('да будет — делать/сделать'),
  section: T('Leitura'),
  body: C(
    'Отче é uma forma vocativa herdada, ainda conservada na oração. сущий é um particípio presente ativo com valor gramatical de "que é", e да em да святится é partícula optativa, traduzida por convenção como "seja". да будет significa do mesmo modo "seja"; a forma будет em да будет tem valor futuro. Os imperativos дай e прости mostram sincretismo: as mesmas formas servem para tu ou vocês, embora a tonicidade ou o contexto possam esclarecer o número. Em дай нам, нам está em dativo porque o verbo toma destinatário. O aspecto russo é gramaticalizado, mas não é uma simples oposição de tempos. As formas imperfeitas делать, читать, говори apresentam processo, repetição ou resultado incompleto; as perfeitas сделать, прочитать, сказать apresenta evento delimitado, concluído ou inteiro. O mesmo verbo perfeito pode ter forma de presente em narrativa repetida: Вчера я прочитал книгу significa "ontem li o livro inteiro"; o resultado é apresentado como parte da situação passada. O aspecto não coincide com pontualidade em toda frase. Compare Я писал письмо, "eu estava escrevendo uma carta", com Я написал письмо, "eu escrevi a carta".',
  ),
  vocab: [
    V('сущий', 'сущий', 'que é'),
    V('да будет', 'быть', 'seja'),
    V('дай', 'дать', 'dá'),
    V('сделать', 'сделать', 'fazer (perfectivo)'),
    V('прочитаю', 'прочитать', 'lerei por completo'),
    V('оставил', 'оставить', 'deixou'),
    V('делать', 'делать', 'fazer (imperfectivo)'),
    V('прости', 'простить', 'perdoa'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual par é imperfectivo/perfectivo?'),
    options: [T('делать/сделать'), T('сказать/говорить'), T('простить/прощать')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ письмо (ação concluída)'), answer: 'написал' },
    { kind: 'fill', prompt: T('Complete: да ___ нам'), answer: 'будет' },
    {
      kind: 'choose',
      prompt: T('Qual forma diz “ler por completo”?'),
      options: [T('читаю'), T('прочитаю')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('O perfectivo pode referirse ao passado, não apenas ao futuro.') },
    {
      n: '2',
      text: T('As formas perfectivas também têm presente, embora o uso narrativo seja limitado.'),
    },
  ],
  notes: [
    {
      label: T('Да é partícula, não verbo'),
      text: T(
        'Em {да святится} e {да будет}, o {да} é partícula optativa e o verbo fica no presente ou no futuro — as duas construções são paralelas, e é assim que o texto soa litúrgico.',
      ),
    },
  ],
  examples: [
    { text: 'Я писал письмо', gloss: T('Eu estava escrevendo uma carta') },
    { text: 'Я написал письмо', gloss: T('Eu escrevi a carta') },
  ],
  tables: [
    {
      caption: T('Pares de aspecto'),
      head: ['Imperfectivo', 'Perfectivo', 'Uso típico'],
      rows: [
        ['делать', 'сделать', 'proceso / resultado'],
        ['читать', 'прочитать', 'experiencia / lectura completa'],
        ['говорить', 'сказать', 'hablar / decir una vez'],
        ['писать', 'написать', 'escribir en curso / terminar'],
      ],
    },
  ],
};
