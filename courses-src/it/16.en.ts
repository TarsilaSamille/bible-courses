import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Articulated prepositions'),
  subtitle: T('del, alla, dal, nel, sul'),
  section: T('Syntax and the noun'),
  body: C(`## Five fusions, six forms each

Five simple prepositions **fuse obligatorily with the article**: {di}, {a}, {da}, {in}, {su}. It is not optional; it is a rule, and the grid is mechanical. {Di} plus {il} gives {del}, plus {lo} gives {dello}, plus {la} gives {della}, plus {i} gives {dei}, plus {gli} gives {degli}, plus {le} gives {delle}.

{A} repeats exactly the same pattern: {al}, {allo}, {alla}, {ai}, {agli}, {alle}. {Da} gives {dal}, {dallo}, {dalla}, {dai}, {dagli}, {dalle}. {In} gives {nel}, {nello}, {nella}, {nei}, {negli}, {nelle}. {Su} gives {sul}, {sullo}, {sulla}, {sui}, {sugli}, {sulle}. Twenty-four forms, and once the grid is on the page it is filling in.

## What each fusion says

The fusion **says the relation with no preposition in sight**. {Nel} is {in} plus {il} and marks place, "in the". {Dal} is {da} plus {il} and marks origin, "from the". {Della} is {di} plus {la} and is a feminine genitive. {Sui} is {su} plus {i} and means "on the mountains", possession or place. Each fusion carries information the noun alone does not, which is why the same noun turns up with {del}, {dal} and {nel} in one paragraph and none of the three can be swapped for another.

The grid has no slack: {di} plus {gli} gives {degli}, and that is the only way to get there. {Di} plus {i} gives {dei}, and no other combination produces {dei}.

## The order of the elements

Read the verse in blocks: {nel principio}, {presso Dio}, {la luce degli uomini}. "In the beginning", "with God", "the light of men". Breaking the sentence into loose words loses the fusion and loses the sense.

Then widen it: {dalla creazione} (from creation), {al mondo} (to the world), {sui monti} (on the mountains). The fusion **gives the point of view**, origin ({da}), direction ({a}), place ({in}) and possession ({su}), and that is what the bare preposition does not do.

## Reading criterion

Whenever you see {del}, {nel}, {dal} or {sul}, recognise the preposition and article that have fused. If the sentence is {dal}, the relation is origin and not place, and anyone who renders everything as "of" loses the distinction. And note that {nel} and {dal} never carry a separate article: one article, the fusion.`),
  vocab: [
    V('del', 'di', 'of the'),
    V('alla', 'a', 'to the'),
    V('dal', 'da', 'from the'),
    V('della', 'di', 'of the (fem.)'),
    V('nel', 'in', 'in the'),
    V('sul', 'su', 'on the'),
    V('sui', 'su', 'on the (pl.)'),
    V('dei', 'di', 'of the (pl.)'),
    V('degli', 'di', 'of the (m. pl.)'),
    V('dalla', 'da', 'from the (fem.)'),
    V('preposizione', 'preposizione', 'preposition'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Mt 5:1: salì ___ monte'),
    answer: 'sul',
    hint: T('su + il'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Form: di + la → ___'), answer: 'della', hint: T('di + la') },
    {
      kind: 'choose',
      prompt: T('Which fusion means "on the (+ plural)"?'),
      options: [T('sul'), T('sulla'), T('sui'), T('sugli')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Form: da + gli → ___'), answer: 'dagli', hint: T('da + gli') },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The fusion is obligatory when the preposition stands before the article: {di il} → {del}, {a il} → {al}, {in il} → {nel}, {su il} → {sul}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Di + i} gives {dei} and {di + gli} gives {degli}; no other combination produces those two forms.',
      ),
    },
    {
      n: '3',
      text: T('{Con} and {per} almost never fuse: {con il}, {per il}, never {con lo} or {coglio}.'),
    },
    {
      n: '4',
      text: T(
        '{Nel} marks place, {dal} marks origin and {sui} marks possession: {nel monte}, {dal cielo}, {sui monti}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Nel} and {dal} never carry a separate article: one article, the fusion, as in {nel principio}.',
      ),
    },
  ],
  notes: [
    {
      label: T('What the fusion carries'),
      text: T(
        '{nel} is {in} plus {il} and marks place; {dal} is {da} plus {il} and marks origin; {della} is {di} plus {la} and is a genitive. That is why the same noun turns up with {del}, {dal} and {nel} in one paragraph and none of the three can be swapped for another.',
      ),
    },
    {
      label: T('Where the fusion tricks you'),
      text: T(
        '{Sui monti} is {su} plus {i} and means "on the mountains"; {sui} is never {su} plus {il}, which would give {sul}. And {sul} plus {i} gives {sui}. The grid in the table has no slack, and that is why it is learnt in one go.',
      ),
    },
  ],
  examples: [
    { text: 'Nel principio era la Parola.', gloss: T('In the beginning was the Word.') },
    { text: 'La luce degli uomini.', gloss: T('The light of men.') },
    { text: 'Sali sul monte.', gloss: T('He went up the mountain.') },
    { text: 'Vengo dall’Italia.', gloss: T('I come from Italy.') },
    { text: 'La parola della verità.', gloss: T('The word of truth.') },
    { text: 'Il libro di Paolo.', gloss: T('Paul’s book.') },
    { text: 'Uno strato di nebbia.', gloss: T('A layer of mist.') },
    { text: 'Con Dio e per Dio.', gloss: T('With God and for God.') },
  ],
  tables: [
    {
      caption: T('Fusões de preposição e artigo'),
      head: ['Preposizione', 'il', 'lo', 'la', 'i', 'gli', 'le'],
      rows: [
        ['di', 'del', 'dello', 'della', 'dei', 'degli', 'delle'],
        ['a', 'al', 'allo', 'alla', 'ai', 'agli', 'alle'],
        ['da', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle'],
        ['in', 'nel', 'nello', 'nella', 'nei', 'negli', 'nelle'],
        ['su', 'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle'],
      ],
    },
    {
      caption: T('What each fusion says'),
      head: ['Fusão', 'Função'],
      rows: [
        ['del', 'di + il'],
        ['dal', 'da + il'],
        ['nel', 'in + il'],
        ['sul', 'su + il'],
        ['dei', 'di + i'],
        ['degli', 'di + gli'],
        ['dalla', 'da + la'],
        ['sui', 'su + i'],
      ],
    },
  ],
};
