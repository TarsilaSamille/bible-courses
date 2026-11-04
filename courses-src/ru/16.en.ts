import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Present-tense verbs'),
  subtitle: T('читать — говорить — быть'),
  section: T('The verb: present and aspect'),
  body: C(
    'A Russian infinitive normally ends in -ть. In the present, a verb may follow model 1: читаю, читаешь, читает, читаем, читаете, читают; or model 2: говорю, говоришь, говорит, говорим, говорите, говорят. These models are selected by the stem and do not themselves guarantee aspect: говорить is imperfective, while сказать is perfective. The present usually denotes a current or repeated action, but Russian morphology is richer than this simplified division. The verb быть usually omits the present copula: Бог есть любовь is emphatic or biblical; Бог — любовь is neutral. In the negative use не, not нет: Я не знаю. For a yes/no question, word order can change and ли may close the question: Знаешь ли ты? Time and aspect matter: Я читаю сейчас means “I am reading now”; Я буду читать expresses a planned or future action. The form читаю identifies the person who reads, not an article or gender.',
  ),
  vocab: [
    V('говорю', 'говорить', 'I speak'),
    V('читают', 'читать', 'they read'),
    V('верю', 'верить', 'I believe'),
    V('любит', 'любить', 'he loves'),
    V('молимся', 'молиться', 'we pray'),
    V('есть', 'быть', 'is'),
    V('знаю', 'знать', 'I know'),
    V('могу', 'мочь', 'I can'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete: я говор…'), answer: 'ю' },
  exercises: [
    { kind: 'fill', prompt: T('Complete: они чита…'), answer: 'ют' },
    {
      kind: 'choose',
      prompt: T('Which verb is perfective?'),
      options: [T('говорить'), T('сказать')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('How do you form “Do you know?”?'),
      options: [T('Ты знаешь'), T('Знаешь ли ты?'), T('Ты ли знаешь')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{Ли} occurs in yes/no questions.') },
    { n: '2', text: T('{Нет} negates existence; {не} negates an action or quality.') },
  ],
  notes: [
    {
      label: T('The stem decides the aspect'),
      text: T(
        'The Russian present has only two series, but they do not mark aspect: the stem decides. The pair {говорить} / {сказать} is what carries the difference, not the ending.',
      ),
    },
  ],
  examples: [
    { text: 'Они читают Библию', gloss: T('They read the Bible') },
    { text: 'Знаешь ли ты?', gloss: T('Do you know?') },
  ],
  tables: [
    {
      caption: T('Present of “to read” and “to speak”'),
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
