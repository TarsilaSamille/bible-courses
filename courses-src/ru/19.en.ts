import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Motion verbs'),
  subtitle: T('идти/ходить: direction and habituality'),
  section: T('The verb: present and aspect'),
  body: C(
    'Many Russian motion verbs form imperfective/perfective pairs. идти is directed motion, normally on foot; ходить is multidirectional or habitual motion. Compare Я иду в церковь, “I am going now”, with Я хожу в церковь, “I go regularly”. The same pattern appears in ехать/ездить, бежать/бегать, лететь/летать, плыть/плавать and нести/носить. Prefixes shift motion and meaning: прийти means to arrive, уйти to leave, войти to enter, выйти to go out. The imperfective носиться in Дух носился над водою describes circulating movement in Genesis 1:2. Aspect is not derived mechanically: летит has a voiceless final consonant before a voiceless ending, and some pairs have suppletive stems.',
  ),
  vocab: [
    V('идти', 'идти', 'go on foot (directed)'),
    V('ходить', 'ходить', 'walk; go habitually'),
    V('ехать', 'ехать', 'travel by vehicle'),
    V('ездить', 'ездить', 'travel repeatedly'),
    V('прийти', 'прийти', 'arrive'),
    V('войти', 'войти', 'enter'),
    V('носился', 'носиться', 'hovered; circulated'),
    V('лететь', 'лететь', 'fly'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which verb indicates directed motion?'),
    options: [T('ходить'), T('идти'), T('носиться')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the perfective: ___йти (arrive)'), answer: 'пр' },
    {
      kind: 'choose',
      prompt: T('Which form describes regular travel?'),
      options: [T('еду'), T('езжу')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он во___ в храм'), answer: 'шёл' },
  ],
  rules: [{ n: '1', text: T('Static complements or ability can select {ходить}.') }],
  notes: [
    {
      label: T('One trip or many'),
      text: T(
        'The pair {идти} / {ходить} describes the same act seen two ways: one trip now, or repeated trips. It is a distinction of viewpoint, and context decides which is in play.',
      ),
    },
  ],
  examples: [
    { text: 'Я иду в церковь', gloss: T('I am going to church') },
    { text: 'Он ходит в церковь', gloss: T('He goes to church regularly') },
  ],
  tables: [
    {
      caption: T('Motion pairs'),
      head: ['Imperfectivo dirigido', 'Imperfectivo habitual', 'Perfectivo'],
      rows: [
        ['идти', 'ходить', 'прийти/уйти'],
        ['ехать', 'ездить', 'приехать/уехать'],
        ['бежать', 'бегать', 'пробежать'],
        ['лететь', 'летать', 'прилететь/улететь'],
        ['нести', 'носить', 'принести'],
      ],
    },
  ],
};
