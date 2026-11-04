import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Verbos no presente'),
  subtitle: T('читать — говорить — быть'),
  section: T('O verbo: o presente e o aspecto'),
  body: C(
    'O infinitivo russo termina normalmente em -ть. No presente, um verbo pode seguir o modelo 1: читаю, читаешь, читает, читаем, читаете, читают; ou o modelo 2: говорю, говоришь, говорит, говорим, говорите, говорят. Esses dois modelos são escolhidos pelo tema e não garantem, sozinhos, o aspecto: говорить é imperfeito, enquanto сказать é perfeito. O presente costuma indicar ação atual ou repetida, mas a morfologia russa é mais rica do que essa divisão simplifica. O verbo быть costuma omitir a cópula no presente: Бог есть любовь é enfático ou bíblico; Бог — любовь é neutro. Na negação use не, e não нет: Я не знаю. Na pergunta de sim ou não a ordem das palavras pode inverter-se, e ли pode fechar a pergunta: Знаешь ли ты? Tempo e aspecto importam: Я читаю сейчас significa "estou lendo agora"; Я буду читать exprime ação planejada ou futura. A forma читаю nomeia a pessoa que lê, não um artigo nem um gênero especial.',
  ),
  vocab: [
    V('говорю', 'говорить', 'eu falo'),
    V('читают', 'читать', 'eles leem'),
    V('верю', 'верить', 'eu creio'),
    V('любит', 'любить', 'ele ama'),
    V('молимся', 'молиться', 'nós oramos'),
    V('есть', 'быть', 'é'),
    V('знаю', 'знать', 'eu sei'),
    V('могу', 'мочь', 'eu posso'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete: я говор…'), answer: 'ю' },
  exercises: [
    { kind: 'fill', prompt: T('Complete: они чита…'), answer: 'ют' },
    {
      kind: 'choose',
      prompt: T('Qual verbo é perfectivo?'),
      options: [T('говорить'), T('сказать')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Como se forma a pergunta “¿Sabes?”?'),
      options: [T('Ты знаешь'), T('Знаешь ли ты?'), T('Ты ли знаешь')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{Ли} ocorre em perguntas de sim ou não.') },
    { n: '2', text: T('{Нет} nega la existencia; {не} niega una acción o cualidad.') },
  ],
  notes: [
    {
      label: T('O tema decide o aspecto'),
      text: T(
        'O presente russo tem só duas séries, mas elas não indicam aspecto: é o tema que decide. {говорю} e {говорю} são a mesma pessoa, e o par {говорить} / {сказать} é que carrega a diferença.',
      ),
    },
  ],
  examples: [
    { text: 'Они читают Библию', gloss: T('Eles leen a Bíblia') },
    { text: 'Знаешь ли ты?', gloss: T('Tu sabes?') },
  ],
  tables: [
    {
      caption: T('Presente de leer y hablar'),
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
