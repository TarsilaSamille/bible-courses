import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Long and short adjectives'),
  subtitle: T('хороший — хорош: quality and state'),
  section: T('The noun: gender, number and the adjective'),
  body: C(
    'The full, long adjective agrees with its noun in gender, number and case: хороший человек, хорошая книга, хорошее слово, хорошие люди. It declines: хорошего, хорошему and so on. A short adjectival form is normally used predicatively, with быть or another copula: Он велик, “He is great”; Жизнь коротка, “Life is short”. Short forms do not decline, but they do vary by gender and, in the plural, not by grammatical case: велик, велика, велико, велики. The long form may also be predicative: Это интересно; compare Это интересная книга. Biblical phrases include Святое Писание, “Holy Scripture”, Новый Завет, “New Testament”, and вечная жизнь, “eternal life”.',
  ),
  vocab: [
    V('хороший', 'хороший', 'good; long masculine'),
    V('хорошая', 'хороший', 'good; long feminine'),
    V('хорошее', 'хороший', 'good; long neuter'),
    V('хорошие', 'хороший', 'good; long plural'),
    V('хорош', 'хороший', 'is good; short masculine'),
    V('хороша', 'хороший', 'is good; short feminine'),
    V('хорошо', 'хороший', 'is good; short neuter'),
    V('велик', 'великий', 'great; short masculine'),
    V('велика', 'великий', 'great; short feminine'),
    V('велико', 'великий', 'great; short neuter'),
    V('велики', 'великий', 'great; short plural'),
    V('коротка', 'короткий', 'short; short feminine'),
    V('новый', 'новый', 'new; long masculine'),
    V('вечный', 'вечный', 'eternal'),
    V('Новый Завет', 'Новый Завет', 'New Testament'),
    V('Святое Писание', 'Святое Писание', 'Holy Scripture'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form is naturally predicative?'),
    options: [T('хорош'), T('хорошего'), T('хорошее')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Это ___ книга'), answer: 'хорошая' },
    { kind: 'fill', prompt: T('Complete: Он ___ (great, short)'), answer: 'велик' },
    {
      kind: 'match',
      prompt: T('Match form and gender'),
      pairs: [
        { a: 'хорош', b: T('masculine') },
        { a: 'хороша', b: T('feminine') },
      ],
      answer: ['хорош', 'хороша'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The long adjective agrees in gender, number and case: {хорошая книга}, {хорошее слово}, {хорошие люди}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The short form does not decline by case, but it varies by gender and number: {велик}, {велика}, {велико}, {велики}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The short form is the one that appears with a copula: {Он велик} is “he is great”, and {жизнь коротка} is “life is short”.',
      ),
    },
    {
      n: '4',
      text: T(
        'After {Это} the noun requires the long form: {Это интересная книга}, not {Это интересная}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The pair that gets confused is {хорошая} against {хорошо}: the first agrees with the noun, the second is a state.',
      ),
    },
  ],
  notes: [
    {
      label: T('Short or long?'),
      text: T(
        'The short form fills the predicate slot, and that is why {жизнь коротка} is right while {жизнь короткая} sounds wrong: a determined noun asks for the long form.',
      ),
    },
    {
      label: T('The same root, four endings'),
      text: T(
        '{хорош} is the root of all of them: {хорошего} in the genitive, {хорошая} in the feminine nominative, {хорошо} in the neuter and {хорошие} in the plural. What changes is not the root but the ending, and the ending is what says gender and number.',
      ),
    },
  ],
  examples: [
    { text: 'Это хорошая книга', gloss: T('this is a good book; long form, feminine') },
    { text: 'Это хорошее слово', gloss: T('this is a good word; long form, neuter') },
    { text: 'Он хорош', gloss: T('he is good; short predicative') },
    { text: 'Она хороша', gloss: T('she is good; short feminine') },
    { text: 'Он велик', gloss: T('he is great') },
    { text: 'Жизнь коротка', gloss: T('life is short; the neuter noun takes the short form') },
    { text: 'Это интересно', gloss: T('this is interesting; short form, no noun') },
    { text: 'Это интересная книга', gloss: T('this is an interesting book; long form') },
    { text: 'Новый Завет', gloss: T('New Testament; two nominatives') },
    { text: 'вечная жизнь', gloss: T('eternal life; the agreement is with жизнь') },
  ],
  tables: [
    {
      caption: T('Agreement of {хороший}'),
      head: [T('Gender/number'), T('Long form'), T('Short form'), T('Typical use')],
      rows: [
        [T('masculine sg.'), T('хороший'), T('хорош'), T('predicative')],
        [T('feminine sg.'), T('хорошая'), T('хороша'), T('predicative')],
        [T('neuter sg.'), T('хорошее'), T('хорошо'), T('predicative')],
        [T('plural'), T('хорошие'), T('хороши'), T('predicative')],
      ],
    },
    {
      caption: T('Long and short side by side'),
      head: [T('Function'), T('Example'), T('Form'), T('Gloss')],
      rows: [
        [T('attributive'), T('хорошая книга'), T('long'), T('good book')],
        [T('attributive'), T('хорошие люди'), T('long'), T('good people')],
        [T('predicative'), T('Он хорош'), T('short'), T('he is good')],
        [T('predicative'), T('Жизнь коротка'), T('short'), T('life is short')],
        [T('without a noun'), T('Это интересно'), T('short'), T('this is interesting')],
      ],
    },
    {
      caption: T('The pairs that get confused'),
      head: [T('Pair'), T('One is'), T('The other is'), T('How to decide')],
      rows: [
        [
          T('хорошая / хорошо'),
          T('attributive'),
          T('a state'),
          T('the noun asks for the long one'),
        ],
        [
          T('велик / великий'),
          T('a state'),
          T('attributive'),
          T('the copula asks for the short one'),
        ],
        [
          T('коротка / короткая'),
          T('a state'),
          T('attributive'),
          T('the copula asks for the short one'),
        ],
      ],
    },
  ],
};
