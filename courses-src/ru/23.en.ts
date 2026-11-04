import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Aspect and prefixes'),
  subtitle: T('писать → написать, описать, списать'),
  section: T('The verb: prefixes and derived forms'),
  body: C(
    'Prefixes commonly produce a perfective verb, but not always, and they often add lexical meaning. Compare писать, imperfective, with написать, bounded and completed; переписать, rewrite; записать, write down; подписать, sign; описать, describe. A second imperfective is sometimes suppletive: сделать pairs with делать, and взять with брать. дай is therefore the imperative of дать, not a form of давать. по- may limit duration or mark onset: почитать; пойти. про- is not always literally “through” and must be learned in простить. Prefixes also affect government: выйти из takes genitive, while войти в follows the verb’s static or directed interpretation.',
  ),
  vocab: [
    V('написать', 'написать', 'write completely'),
    V('переписать', 'переписать', 'rewrite'),
    V('простить', 'простить', 'forgive'),
    V('пойти', 'пойти', 'set off'),
    V('давать', 'давать', 'give repeatedly'),
    V('прости нам', 'простить', 'forgive us'),
    V('описать', 'описать', 'describe'),
    V('взять', 'взять', 'take'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form means “rewrite”?'),
    options: [T('написать'), T('переписать'), T('подписать')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ письмо (completed)'), answer: 'написал' },
    {
      kind: 'match',
      prompt: T('Match verb and meaning'),
      pairs: [
        { a: 'подписать', b: T('sign') },
        { a: 'описать', b: T('describe') },
      ],
      answer: ['подписать', 'описать'],
    },
    {
      kind: 'choose',
      prompt: T('Which imperfective/perfective pair is correct?'),
      options: [T('брать/взять'), T('дать/давать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Not every perfective verb is prefixed, and not every prefixed verb is perfective.'),
    },
  ],
  notes: [
    {
      label: T('Not every pair is a derivation'),
      text: T(
        'Not every perfect verb comes from a prefixed imperfect: {взять} pairs with {брать}, and the stems do not resemble each other. Treating aspect as mechanical derivation produces errors a verb list gives away.',
      ),
    },
  ],
  examples: [
    { text: 'Он написал письмо', gloss: T('He wrote the letter') },
    { text: 'Он пишет письмо', gloss: T('He is writing a letter') },
  ],
  tables: [
    {
      caption: T('Prefixes and meaning shifts'),
      head: ['Verbo', 'Significado', 'Glosa'],
      rows: [
        ['написать', 'completar a ação', 'escrever'],
        ['переписать', 'outra vez', 'reescrever'],
        ['записать', 'registrar', 'anotar'],
        ['описать', 'dar a forma por escrito', 'descrever'],
        ['подписать', 'assinar abaixo/dentro', 'firmar'],
      ],
    },
  ],
};
