import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Syntax and translation'),
  title: T('Word order: the last one is the news'),
  subtitle: T(
    'in Russian nothing is fixed, and what goes last is what the speaker is talking about',
  ),
  body: C(`
## Free order, and what it does

Word order in Russian is free in the strongest sense: the three parts of a clause can take any position and none of them becomes unreadable for that. В начале было Слово and Слово было в начале say the same thing, and the second is the one theology prefers, because Слово is the subject and the subject goes first when the clause is about it.

That is only possible because the case has already marked the function of each word. If each part of the clause has already said what role it plays, position stops carrying information. In English order is part of the information: "I saw the man in the street" and "in the street I saw the man" put the focus in different places, and swapping them changes the meaning.

In Russian swapping also changes the meaning, but it changes something else: **what goes last is what is new, what the speaker is talking about right now.** The rest is context, and context goes first. That is the practical rule, and it is worth more than any list of forbidden positions.

## What tends to stay where it is

What has a fixed position is the negation. Не comes before the verb, and when there is a subject and a verb, не almost always goes before the verb and not before the subject. Compare Он не читал книгу and Не он читал книгу: the first denies the act, the second denies that it was he.

What also has a fixed position is what you want to contrast. Это не Бог, а человек puts the не on the word being denied and the а on the word taking its place. A noun that arrives late in the clause is the one the speaker is insisting on, and that is why Russian prose is hard for a reader of another language.

What does not have a fixed position is almost everything else: subject, transitive verb, direct object, adverbial. They can trade places and the grammar does not object. Two caveats: the verb rarely opens a clause in written narrative, and the subject rarely closes it.

## What the freedom does to a translator

For a translator the freedom is a problem and not an advantage. Translating into a language with fixed order forces you to **choose** where each element goes, and the choice is an interpretation. If the original is И Слово стало плотию, and the translator puts the verb at the end of the feminine clause, a reading has been produced; if the translator puts it first, another one has.

The most interesting case is information that is not expressed. Слово Бога is genitive, and the de is the most optional of all prepositions: it can appear or not. A sentence that leaves the information out can be rewritten in two ways, and the two rewrites put the information in different parts of the clause.

The symmetric risk is the opposite: a translator into Russian can push any word to the end, and the reader will take it as the news. If the translator did not mean that, the sense has changed without anyone noticing.

## The hook: the same sentence, four times over

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Four possible arrangements, all readable:

- В начале было Слово — time first, the thing named last
- Было Слово в начале — the verb in front; more literary, older
- Слово было в начале — the subject first; the reading theology cares about
- В начале Слово было — almost a hiccup, and the listener is troubled

The second and the third are the same sentence with the information in different places, and the difference is emphasis, not meaning. What changes between them is what the speaker wants the reader to do first. **Никто не видел Бога** puts God first; **Бога никто не видел** puts God last, and the second is a statement about God and not about the people.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'in the beginning was the Word'),
    V('Слово было в начале', 'слово', 'the Word was in the beginning; the subject first'),
    V('Было Слово в начале', 'быть', 'was the Word in the beginning; the verb in front'),
    V('Он не читал книгу', 'не', 'he did not read the book; the negation denies the act'),
    V('Не он читал книгу', 'не', 'it was not he who read it; the negation denies the subject'),
    V('Это не Бог, а человек', 'а', 'this is not God but a man; contrast'),
    V('Слово Бога', 'бог', 'the Word of God; genitive without a preposition'),
    V('никто', 'никто', 'nobody'),
    V('Никто не видел Бога', 'видеть', 'nobody saw God; the negation before the verb'),
    V('Бога никто не видел', 'бог', 'God, nobody saw him; the subject goes last'),
    V('в конце', 'конец', 'at the end'),
    V('порядок слов', 'порядок слов', 'word order'),
    V('рема', 'рема', 'new information of the clause'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Никто не видел Бога, what goes last?'),
    options: [T('The negation'), T('The subject'), T('The object')],
    answer: 2,
    hint: T(
      'The rule is that what goes last is the new information. Here what is said is about God, not about who did not see.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: ___ слово было в начале'), answer: 'С' },
    {
      kind: 'choose',
      prompt: T('Where does the negator normally stand?'),
      options: [T('After the verb'), T('Before the verb'), T('At the end of the clause')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Никто ___ видел Бога'), answer: 'не' },
  ],
  rules: [
    {
      n: '1',
      text: T('Word order is free because the case has already marked the function of each word.'),
    },
    { n: '2', text: T('What goes last is the new information; what comes first is context.') },
    {
      n: '3',
      text: T('The negator stands before the verb: {Он не читал}, and not He did not read.'),
    },
    {
      n: '4',
      text: T(
        'The verb rarely opens a clause in written narrative, and the subject rarely closes it.',
      ),
    },
    {
      n: '5',
      text: T(
        'An omission in the original can become explicit information in any position, and the position chosen belongs to the translator.',
      ),
    },
  ],
  notes: [
    {
      label: T('Theme and rheme, without the jargon'),
      text: T(
        'Literary criticism calls the known part the theme and the new part the rheme. In Russian, word order is the most direct realisation of that distinction: the rheme goes last and the context comes first. A translator into a language with fixed order loses the mark, because in the target language the particle does the work that position does in Russian.',
      ),
    },
    {
      label: T('The freedom that mistranslates'),
      text: T(
        'If a Russian original puts the new information last, and the target language has fixed order, the translator has two choices: keep the old order, which reads stiffly, or rewrite, which puts the new information somewhere else. The second choice is legitimate and unavoidable. What is not legitimate is rewriting without deciding, and then the reader of the translation finds more emphasis than the original had.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('in the beginning was the Word; the noun last') },
    { text: 'Слово было в начале', gloss: T('the Word was in the beginning; the subject first') },
    {
      text: 'Он не читал книгу',
      gloss: T('he did not read the book; the negation denies the act'),
    },
    {
      text: 'Не он читал книгу',
      gloss: T('it was not he who read the book; the negation denies the subject'),
    },
    {
      text: 'Это не Бог, а человек',
      gloss: T('this is not God but a man; the contrast is marked'),
    },
    { text: 'Слово Бога', gloss: T('the Word of God; the de is an optional preposition') },
    { text: 'Никто не видел Бога', gloss: T('nobody saw God; the new information is God') },
    { text: 'Бога никто не видел', gloss: T('God, nobody saw him; the subject goes last') },
    { text: 'И Слово стало плотию', gloss: T('and the Word became flesh; the verb in the middle') },
    {
      text: 'Это не Бог, а человек',
      gloss: T('the second half of the sentence is carried by the а'),
    },
  ],
  tables: [
    {
      caption: T('The same sentence in four positions'),
      head: [T('Order'), T('Sentence'), T('What goes last'), T('Reading')],
      rows: [
        [
          T('time, verb, noun'),
          T('В начале было Слово'),
          T('Слово'),
          T('what is named comes last'),
        ],
        [T('verb, noun, time'), T('Было Слово в начале'), T('в начале'), T('more literary, older')],
        [T('noun, verb, time'), T('Слово было в начале'), T('в начале'), T('the subject first')],
        [T('time, noun, verb'), T('В начале Слово было'), T('было'), T('odd for the listener')],
      ],
    },
    {
      caption: T('What has a fixed position'),
      head: [T('Element'), T('Where it goes'), T('Example'), T('Why')],
      rows: [
        [
          T('the negator'),
          T('before the verb'),
          T('Он не читал'),
          T('it denies the verb, not the subject'),
        ],
        [
          T('the contrast'),
          T('before the second half'),
          T('не Бог, а человек'),
          T('the а is the second half'),
        ],
        [
          T('the subject'),
          T('usually first'),
          T('Он не читал книгу'),
          T('where the reader expects it'),
        ],
        [
          T('the verb'),
          T('usually in the middle or last'),
          T('было Слово в начале'),
          T('it rarely opens a narrative'),
        ],
        [T('the new information'), T('last'), T('Бога никто не видел'), T('it is the rheme')],
      ],
    },
    {
      caption: T('What free order does to a translation'),
      head: [T('Phenomenon'), T('What happens'), T('Example')],
      rows: [
        [
          T('omitted information'),
          T('it can become explicit in any position'),
          T('Слово Бога, Слово от Бога'),
        ],
        [T('emphasis'), T('it changes with the position of the rheme'), T('Бога никто не видел')],
        [T('contrast'), T('it depends on the а and the не'), T('Это не Бог, а человек')],
        [
          T('an understood subject'),
          T('the verb sometimes carries it alone'),
          T('Идём means the two of us'),
        ],
        [T('literary emphasis'), T('it is a choice, not an error'), T('Было Слово в начале')],
      ],
    },
  ],
};
