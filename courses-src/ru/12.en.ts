import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Pronouns and numerals'),
  title: T('Pronouns: what almost never appears in writing'),
  subtitle: T(
    'Даня and Маша in the place of he and she, and the relative that agrees with what it replaces',
  ),
  body: C(`
## The third person pronoun rarely appears

In English the sentence "he went to town" forces the pronoun back in when the subject returns. In Russian there is no such obligation, and the practical rule is: **a third person pronoun appears only when it is needed**.

When the subject has already been mentioned, the verb is enough. Даня пришёл. Он был устал. carries the pronoun because it refers back to a whole clause. But Даня пришёл и ушёл does not, because the verb already says who is meant. A translator coming from Portuguese habitually puts a he where Russian has none, and the sentence ends up longer and more emphatic than it was.

The third person is also the only pronoun that takes an initial n after a preposition: у него, с ним, о нём, and the feminine у неё, с ней, о ней. Without a preposition it is его and её, and those two shapes are both genitive and accusative at once. Nothing else in the system is less clear than this.

## Даня and Маша take the place of he and she

The second rule is the one that shows up most in speech: instead of the pronoun, use the name. Маша пришла instead of Она пришла. And since the name declines too, the whole sentence works: Я вижу Даню, Я говорю с Машей, Я думаю о Дане.

That has a consequence for reading that nobody expects: the name works as a pronoun with no marking at all. A sentence with Иоанн can have Иоанн as subject or as object, and what decides is the verb. In вижу Иоанна the name is accusative; in Иоанн видит it is nominative. The same word, two cases, and the difference is in the verb, as always.

The demonstratives follow the same logic and are rarely used in prose. Это is the commonest, and тот appears all the time in older narrative. Этот agrees with the noun: этот человек, эта книга, это слово, эти люди. And такой does the same, with a quality sense: such a big one.

## The relative agrees with what it replaces, and the case comes from the clause

The Russian relative pronoun has two series. Который replaces any noun and agrees in gender and number: который человек, которая книга, которое слово, которые люди. Кто replaces people and что replaces things, and there is nothing to inflect.

The part that jams is the case. **The relative agrees with the noun in gender and number, but its case comes from the function it fills inside its own clause, not from the position of the noun it replaces.**

In Который берёт на Себя грех мира, the noun replaced is the Lamb, masculine singular. The relative is masculine singular, yes, and the case is nominative, because берёт is the verb and Который is its subject. If the relative were the object of берёт it would be Которого, because a masculine animate accusative is the genitive.

The same holds with who and what: которые приняли Его has которые in the nominative plural, because приняли is the verb and those who received are the subject. If they were the object it would be которых, and the shape would be visibly different.

## The hook: three pronouns, three cases, one clause

**А тем, которые приняли Его, дал власть стать чадами Божиими.** One clause with three pronouns and three cases, and none of them repeated.

Тем is dative plural, because it is to whom the authority is given: дал власть asks for a dative. Которые is nominative plural, because it is the subject of приняли, and a masculine animate in the accusative would have been которых. Его is genitive singular, because it is the object of приняли, and the shape is the same as that of an animate genitive and of a possessive.

All three are in the same grammatical cases as the subject pronoun and the object pronoun of an English sentence, and none of them is visibly marked. A reader who does not know the relative will read которые as the object of приняли, because it stands closer, and will arrive at the reverse meaning without noticing how far off the grammar he was.
`),
  vocab: [
    V('Даня', 'Даня', 'Danya; masculine proper name in the place of he'),
    V('Маша', 'Маша', 'Masha; feminine proper name in the place of she'),
    V('его', 'он', 'of him, or his; genitive and accusative'),
    V('её', 'она', 'of her, or her'),
    V('него', 'он', 'of him, after a preposition'),
    V('нём', 'он', 'about him; initial n after a preposition'),
    V('ней', 'она', 'of her, after a preposition'),
    V('Этот', 'этот', 'this; demonstrative'),
    V('такой', 'такой', 'such, so; with a quality sense'),
    V('который', 'который', 'who, which; relative'),
    V('которая', 'который', 'which; feminine relative'),
    V('которые', 'который', 'who; nominative plural relative'),
    V('которых', 'который', 'whom; plural relative in the genitive or accusative'),
    V('кто', 'кто', 'who; relative and interrogative'),
    V('тем', 'тот', 'to those; dative plural of the demonstrative'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In которые приняли Его, which case is которые?'),
    options: [T('Accusative'), T('Nominative'), T('Genitive')],
    answer: 1,
    hint: T(
      'If it were the object, the relative would be которых. Since приняли is the verb, those who received are the subject, and a subject is nominative.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: у ___ (with God)'), answer: 'Бога' },
    {
      kind: 'choose',
      prompt: T('Which relative replaces a person in a relative clause?'),
      options: [T('которое'), T('кто'), T('которая')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: о ___ (about him)'), answer: 'нём' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A third person pronoun appears only when needed; the verb already says who is meant.',
      ),
    },
    {
      n: '2',
      text: T(
        'After a preposition the masculine and neuter pronoun take n: {у него}, {с ним}, {о нём}.',
      ),
    },
    { n: '3', text: T('Without a preposition, {его} and {её} are both genitive and accusative.') },
    {
      n: '4',
      text: T(
        'A proper name stands in for the pronoun and declines as a noun: {Я} {вижу} {Даню}, {Я} {говорю} {с} {Машей}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The relative agrees in gender and number with what it replaces, but its case comes from its role inside its own clause.',
      ),
    },
  ],
  notes: [
    {
      label: T('Который or кто'),
      text: T(
        'Который replaces any noun and inflects for gender and number. Кто and что do not inflect: who is always who and what is always what. English has one relative, and that variety is what makes a Russian text look more repetitive than it is. Translating with a single relative is correct; putting the relative in the wrong case is a reading error.',
      ),
    },
    {
      label: T('The shape that does not show the case'),
      text: T(
        'Его is genitive and accusative at once, and that happens because the masculine animate has the two shapes alike. In или Accepted Его a second reading, with him as the subject, is impossible: the subject would be Он and not the genitive. It is the rule of the previous lesson operating inside a pronoun.',
      ),
    },
  ],
  examples: [
    { text: 'Даня пришёл', gloss: T('Danya came; the name does the work of a pronoun') },
    { text: 'Маша пришла', gloss: T('Masha came; the same, feminine') },
    { text: 'Я вижу Даню', gloss: T('I see Danya; the name is accusative') },
    { text: 'Я говорю с Машей', gloss: T('I am speaking with Masha; instrumental') },
    { text: 'у него', gloss: T('with him; initial n after the preposition') },
    { text: 'о ней', gloss: T('about her; initial n after the preposition') },
    { text: 'Его книга', gloss: T('his book; the same shape as the genitive and the accusative') },
    { text: 'Этот человек', gloss: T('this man; the demonstrative agrees') },
    {
      text: 'Который берёт на Себя грех мира',
      gloss: T(
        'who takes away the sin of the world; the relative is nominative, so it is the subject',
      ),
    },
    {
      text: 'тем, которые приняли Его',
      gloss: T('to those who received him; dative, nominative plural and genitive in one clause'),
    },
  ],
  tables: [
    {
      caption: T('Personal pronouns, with the shape used after a preposition'),
      head: [T('Case'), T('я'), T('ты'), T('он'), T('она')],
      rows: [
        [T('nominative'), T('я'), T('ты'), T('он'), T('она')],
        [T('genitive'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('dative'), T('мне'), T('тебе'), T('ему'), T('ей')],
        [T('accusative'), T('меня'), T('тебя'), T('его'), T('её')],
        [T('instrumental'), T('мной'), T('тобой'), T('им'), T('ей')],
        [T('after a preposition'), T('обо мне'), T('о тебе'), T('о нём'), T('о ней')],
      ],
    },
    {
      caption: T('The relative in agreement'),
      head: [T(''), T('masculine'), T('feminine'), T('neuter'), T('plural')],
      rows: [
        [T('nominative'), T('который'), T('которая'), T('которое'), T('которые')],
        [T('genitive'), T('которого'), T('которой'), T('которого'), T('которых')],
        [T('dative'), T('которому'), T('которой'), T('которому'), T('которым')],
        [T('accusative'), T('которого'), T('которую'), T('которое'), T('которых')],
        [T('instrumental'), T('которым'), T('которой'), T('которым'), T('которыми')],
        [T('prepositional'), T('о котором'), T('о которой'), T('о котором'), T('о которых')],
      ],
    },
    {
      caption: T('Who replaces what'),
      head: [T('Replaces'), T('Pronoun'), T('Inflects'), T('Example')],
      rows: [
        [T('a person'), T('кто'), T('no'), T('Кто пришёл, тот и судит')],
        [T('a thing'), T('что'), T('no'), T('Что он сделал, не знаю')],
        [
          T('any noun'),
          T('который'),
          T('yes, in gender and number'),
          T('Который берёт, который видит'),
        ],
        [T('place'), T('где'), T('no'), T('Где он живёт, там и работает')],
        [T('direction'), T('куда'), T('no'), T('Куда идёшь, туда и иди')],
        [T('a generic noun'), T('какой'), T('yes'), T('Какой дом, такая и жизнь')],
      ],
    },
  ],
};
