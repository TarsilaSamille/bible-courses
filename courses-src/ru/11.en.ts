import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Pronouns and possessives'),
  subtitle: T('я — его — свой: who owns?'),
  section: T('Pronouns and numerals'),
  body: C(
    'Personal pronouns decline through six cases. Common forms are я: меня, мне, мной, обо мне; ты: тебя, тебе, тобой, о тебе; он/она/оно: его/её, ему/ей, им/ею/им, о нём/ней/нём. Human pronouns are animate, so the accusative of он is его, not он. After a preposition, masculine and neuter pronouns take initial н: у него, с ним, о нём. Possessive adjectives agree with the possessed noun: мой, моя, моё, мои; твой; наш; ваш; его and её. The reflexive свой means “one’s own” and points to the subject: Я люблю свою жену, “I love my own wife”. In Отче наш, наш agrees with the vocative Отче.',
  ),
  vocab: [
    V('меня', 'я', 'me'),
    V('его', 'он', 'him; his'),
    V('о нём', 'он', 'about him'),
    V('мой', 'мой', 'my'),
    V('наш', 'наш', 'our'),
    V('свою', 'свой', 'own'),
    V('себя', 'себя', 'oneself'),
    V('у него', 'он', 'near him'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «у него», which form occurs?'),
    options: [T('он'), T('него'), T('им')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Отче ___'), answer: 'наш' },
    { kind: 'fill', prompt: T('Complete: о ___ (about him)'), answer: 'нём' },
    {
      kind: 'choose',
      prompt: T('What does свой mean?'),
      options: [T('another person’s'), T('the subject’s own'), T('impossible')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('After a preposition, masculine and neuter pronouns take initial {н}.') },
  ],
  notes: [
    {
      label: T('The possessive follows the referent'),
      text: T(
        'In {Отче наш}, {наш} agrees with the vocative {Отче}, not with a noun in the nominative. A possessive follows the word it refers to, not its position in the sentence.',
      ),
    },
  ],
  examples: [
    { text: 'Я люблю свою жену', gloss: T('I love my own wife') },
    { text: 'Он любит её жену', gloss: T('He loves his wife') },
  ],
  tables: [
    {
      caption: T('Personal pronouns'),
      head: ['Caso', 'я', 'ты', 'он/она/оно'],
      rows: [
        ['Nominativo', 'я', 'ты', 'он/она/оно'],
        ['Genitivo', 'меня', 'тебя', 'его/её'],
        ['Dativo', 'мне', 'тебе', 'ему/ей'],
        ['Acusativo', 'меня', 'тебя', 'его/её'],
        ['Instrumental', 'мной', 'тобой', 'им/ею'],
        ['Preposicional', 'обо мне', 'о тебе', 'о нём/ней/нём'],
      ],
    },
  ],
};
