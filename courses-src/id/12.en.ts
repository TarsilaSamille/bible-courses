import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Indirect speech with bahwa'),
  subtitle: T('berkata bahwa, apakah, supaya'),
  section: T('Register and discourse'),
  body: C(`An indirect clause is introduced by {bahwa} “that.” In general, overt time and aspect remain the same.

DIRECT → INDIRECT
{Isa berkata: “Saya akan datang”} → {Isa berkata bahwa saya akan datang}.
{Overt {akan} continues to express future time relative to the narrative situation, not necessarily relative to the moment of speech. Spanish may use «dijo que vendría» or «dijo: “vendré”» according to context and viewpoint.

{Konon} means “it is said/people say” and introduces unconfirmed report. {Kata orang} “people say” and {kata-kata mereka} “their words” leave content in the background.

{Berkata apakah…} = “asked whether…”:
{Dia bertanya apakah saya datang} = “He asked whether I was coming.”
For an embedded question about place, use the original question word:
{Di mana saya tinggal?} → {Dia bertanya di mana saya tinggal} = “He asked where I lived.”

Orders and requests:
{Menyuruh + verb} = “to order that”: {Isa menyuruh mereka pergi} “he ordered them to go.”
{Meminta supaya + verb} = “to ask that”: {Isa meminta supaya mereka berdoa} “he asked them to pray.”
{Suruh} alone can express a request or an order, depending on the speaker.

{Kata-Nya} is the formal/elevated third person “his word”; it pronominalizes {Firman} as {Nya} = “he.” Thus, {kata-Nya} literally means “His words/said He” and retains the divine referent.`),
  vocab: [
    V('bahwa', 'bahwa', 'that (complement clause)'),
    V('berkata', 'kata', 'to say, tell'),
    V('apakah', 'apakah', 'whether'),
    V('bertanya', 'tanya', 'to ask'),
    V('supaya', 'supaya', 'so that'),
    V('meminta', 'minta', 'to request'),
    V('menyuruh', 'suruh', 'to order'),
    V('suruh', 'suruh', 'to order; ask'),
    V('konon', 'konon', 'it is said'),
    V('kata orang', 'kata', 'people say'),
    V('kata-kata mereka', 'kata', 'their words'),
    V('kata-Nya', 'kata', 'his words; said He'),
    V('datang', 'datang', 'to come'),
    V('tinggal', 'tinggal', 'to live, stay'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you form “he asked where I live”?'),
    options: [
      T('Dia bertanya di mana saya tinggal'),
      T('Dia bertanya apakah saya tinggal'),
      T('Dia bertanya bahwa saya tinggal'),
      T('Dia bertanya supaya saya tinggal'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Isa berkata ___ saya akan datang” = “Jesus said that I would come.”'),
      answer: 'bahwa',
      hint: T('Neutral complement connector.'),
    },
    {
      kind: 'choose',
      prompt: T('Which correctly translates {konon kabarnya}?'),
      options: [
        T('They say the rumor is…'),
        T('It is immediately confirmed that…'),
        T('They asked whether…'),
        T('It was ordered that…'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In direct-to-indirect sequences, pronouns and demonstratives may shift to third-person forms; {saya} stays {saya} when its referent is clear. Pronominalizing {Firman} as {Nya} depends on register.',
      ),
    },
    {
      n: '2',
      text: T(
        'Indirect questions do not use {apakah} when retaining a question word such as {di mana}; {apakah} appears with yes/no questions or clause-finally.',
      ),
    },
    {
      n: '3',
      text: T('Translate tense by discourse function, not by an automatic conjugation shift.'),
    },
  ],
  notes: [
    {
      label: T('Principle'),
      text: T(
        'There is no absolute rule that “tense never changes.” Indirect report preserves, reinterprets, or shifts aspect according to narrative viewpoint.',
      ),
    },
  ],
  examples: [
    { text: 'Isa berkata bahwa ia akan datang.', gloss: T('Jesus said that he would come.') },
    { text: 'Dia bertanya apakah saya datang.', gloss: T('He asked whether I was coming.') },
    { text: 'Isa meminta supaya mereka berdoa.', gloss: T('Jesus asked them to pray.') },
  ],
  tables: [
    {
      caption: T('Indirect questions and commands'),
      head: ['Padrão', 'PT', 'ES'],
      rows: [
        ['berkata bahwa', T('said that'), '{berkata bahwa saya datang}'],
        ['bertanya apakah', T('asked whether'), '{bertanya apakah saya datang}'],
        ['menyuruh + V', T('ordered that'), '{menyuruh mereka pergi}'],
        ['meminta supaya + V', T('asked that'), '{meminta supaya mereka berdoa}'],
      ],
    },
  ],
};
