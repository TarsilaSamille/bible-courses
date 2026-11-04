import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Register and address'),
  subtitle: T('Anda, kamu, engkau; dia, beliau'),
  section: T('Register and discourse'),
  body: C(`The Indonesian system is relational, not simply formal versus informal. Choice depends on who the interlocutor is and on context.

{kamu} is the common, familiar, or respectful address in many everyday situations. {Anda} is formal/distant and also used with strangers; it may sound distant or ironic when inappropriate. {Kau} is more intimate and colloquial, normally as a clitic: {aku cinta kau}; the fuller {engkau} is emphatic, Biblical, or literary.

{Mu} is a second-person clitic: {nama-Mu} “your name.” {Anda} normally appears as the independent pronoun; {mu} is normally used for the familiar {kamu}: {rumahmu} “your house.”

{Beliau} is a respectful third-person reference, especially in documents or public settings; {dia} is ordinary. {Saudara} functions as a vocative: “brother” may include both men and women; {saudara-saudara} “dear brothers” is common in Pauline letters.

Register is contextual. {Santap} is a careful or refined verb for “to eat”; {makan} is ordinary, not “rude.” {Meninggal} describes death and may be courteous; {mati} is direct and can be jarring in sensitive contexts. {Wafat} belongs to formal or ecclesiastical usage.`),
  vocab: [
    V('Anda', 'Anda', 'you (formal); you'),
    V('kamu', 'kamu', 'you (informal)'),
    V('kau', 'kau', 'you (intimate)'),
    V('engkau', 'engkau', 'you (emphatic/literary)'),
    V('-mu', 'mu', 'your'),
    V('dia', 'dia', 'he, she'),
    V('beliau', 'beliau', 'he/she (respectful)'),
    V('saudara', 'saudara', 'brother, fellow believer'),
    V('saudara-saudara', 'saudara', 'brothers; fellow believers'),
    V('rumah', 'rumah', 'house, home'),
    V('rumahmu', 'rumah', 'your house'),
    V('makan', 'makan', 'to eat'),
    V('santap', 'santap', 'to eat (careful/refined)'),
    V('meninggal', 'meninggal', 'to die, pass away'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is most natural when meeting a stranger?'),
    options: [T('Siapa nama Anda?'), T('Siapa nama kamu?'), T('Engkau siapa?'), T('Bapa siapa?')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “rumah___” = “your house” (with {kamu}).'),
      answer: 'mu',
      hint: T('Second-person clitic attached to the base.'),
    },
    {
      kind: 'choose',
      prompt: T('Which verb is the most direct for “to die”?'),
      options: [T('mati'), T('meninggal'), T('santap'), T('tidur')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Anda} is capitalized because it replaces a proper name; {kamu} and {dia} are normally lowercase.',
      ),
    },
    {
      n: '2',
      text: T(
        'The clitic {mu} attaches to the base, and final {ny} is usually pronounced [ɲ]: {nama-Mu} ≈ [ˈnama mu].',
      ),
    },
    {
      n: '3',
      text: T(
        'Do not choose {Anda} only because someone is older: context, age, status, and social distance matter.',
      ),
    },
  ],
  notes: [
    {
      label: T('Variation'),
      text: T('The {santap/makan} pair is stylistic, not an absolute rude/polite opposition.'),
    },
  ],
  examples: [
    { text: 'Saudara, marilah kita belajar.', gloss: T('Brother, let us learn.') },
    { text: 'Aku menyanyikan lagu untukmu.', gloss: T('I sing a song for you.') },
    { text: 'Beliau tinggal di Jakarta.', gloss: T('He lives in Jakarta (respectful register).') },
  ],
  tables: [
    {
      caption: T('Forms of address'),
      head: ['Forma', 'PT', 'ES'],
      rows: [
        ['kamu', T('ordinary/informal'), '{kamu + -mu}'],
        ['Anda', T('formal/distant'), '{Anda}'],
        ['kau', T('intimate/clitic'), '{mencintamu} «te quiero»'],
        ['engkau', T('emphatic/literary'), '{Engkau Allahku}'],
      ],
    },
  ],
};
