import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Writing'),
  title: T('The accent, and why it decides what you read'),
  subtitle: T('мы and мы: the same spelling for we and for fly'),
  body: C(`
## The accent belongs to the word, not to a rule

The Russian accent is, in most cases, a dictionary fact. It does not follow from the suffix, nor from the prefix, nor from the ending, and anyone who tries a general rule will get wrong exactly the words that matter. There are tendencies, and they are real: the first syllable is more common than any other, and nouns in -а and -я usually take the stress on the last. A tendency is not a rule. Every verb, noun and adjective has its own, and it is learned together with the word.

That has a reading consequence no other language in this course produces. Because the accent is not written in running text, some words stay ambiguous until you know which one it is. Not the ambiguous word in the dictionary: the ambiguous word on the page, with nothing to settle it.

## Pairs that only the accent separates

**мы is we and мы is fly.** The four letters are the same and there is no signal. The reader decides from the rest of the sentence, which is why context in Russian is not decoration: it is what disambiguates the spelling.

The same happens with уже, which is still or narrower depending on where the stress falls, and with плачу, which is I pay or I cry. The most interesting case for a reader is звонит: the letters are always the same, and the accent decides the aspect. With the stress on the last syllable it is the perfective present, he calls now; with the stress on the first it is the imperfective present, he calls, and he keeps calling.

In other words: **the accent does not only separate meanings, it separates the aspect of the verb.** Nothing else on the page does that.

## The accent that moves from syllable to syllable

A large family of masculine nouns has a mobile accent. In the nominative singular the stress sits on the root, in вода́, окно́, дом; in the other cases it moves back to the first syllable, as in во́ду, о́кна, до́мом. The water that was wa-ter becomes water-a, and when a preposition comes in front it is the preposition that takes the stress, as in на́ руки and по́д руку.

This happens with one Portuguese word and not with the other. We say a água, de água, com a água, and the stress of the noun disappears behind the article. In Russian nothing disappears: the accent changes syllable, and the change shows in the writing.

What does not move is more interesting than what does. The nominative singular does not move, because it is the form the dictionary teaches. The genitive singular of a masculine noun does not move either, because the stress goes over to the preposition. That is why о́браз keeps the stress on the first syllable in every position.

## Where the accent does not decide

There is a group of words, some three hundred, that resist the general rule and keep the stress on the first syllable in every case. The adjective до́рогой is one of them, and the noun доро́га is not. They are the exception that proves the rule exists.

And there is the letter that already decides: where there is a ё, the stress is marked in the spelling, and no ambiguity is possible. Psalm 118:105 has Слово Твое, and Твое has two syllables because the ё marks the second. If the ё were left out, the same verse would read the same word twice, once stressed and once not.

The hook is John 1, which uses both words in the same chapter. **Все чрез Него начало быть** in 1:3, and **И от полноты Его все мы приняли и благодать на благодать** in 1:16. The same мы, the same spelling, and no signal: in 1:16 it can only be the pronoun we, because what received the fullness was a group of people and not a fly. And the все in both places means all, not everything: if the translator had written всё, the verse would say that the whole world received, and that is not what is there.`),
  vocab: [
    V('ударение', 'ударение', 'stress, accent'),
    V('ударный', 'ударный', 'stressed'),
    V('мы', 'мы', 'we, or fly, depending on the stress'),
    V('уже', 'уже', 'still, or narrower'),
    V('плачу', 'платить', 'I pay, stress on the last syllable'),
    V('плачу', 'плакать', 'I cry, stress on the first'),
    V('звонит', 'звонить', 'he calls; the stress decides the aspect'),
    V('вода', 'вода', 'water, stress on the last syllable'),
    V('воду', 'вода', 'the water, stress on the first'),
    V('нога', 'нога', 'leg'),
    V('ногу', 'нога', 'the leg, stress on the first'),
    V('дом', 'дом', 'house'),
    V('домом', 'дом', 'with the house, instrumental with the stress on the first'),
    V('на руки', 'рука', 'into the hands; the stress goes to the preposition'),
    V('дорога', 'дорога', 'road, stress on the last syllable'),
    V('дорогой', 'дорогой', 'expensive; the stress never moves'),
  ],
  rules: [
    {
      n: '1',
      text: T('The accent is a dictionary fact: learn it with the word, not by derivation.'),
    },
    {
      n: '2',
      text: T(
        'With no written accent, some words are ambiguous: {мы}, {уже}, {плачу}. Context disambiguates.',
      ),
    },
    {
      n: '3',
      text: T(
        'In {звонит} the accent decides the aspect, not only the meaning: last syllable perfective, first syllable imperfective.',
      ),
    },
    {
      n: '4',
      text: T(
        'In masculine nouns with a consonant root the accent is mobile, and in the oblique cases it moves back to the first syllable: {вода}́ but {во}́{ду}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Where there is a {ё} the accent is already marked in the spelling, and no ambiguity is possible.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the accent moves back'),
      text: T(
        'The accent of вода́ moves back to во́ду because the inflected form is unstressed: the word is no longer the centre of the sentence. And when a preposition comes in front, the preposition takes the stress, in на́ руки, по́д руку, за́ ногу. In both cases the noun is left with a free first syllable, which is why the accent seems to have moved to the preposition.',
      ),
    },
    {
      label: T('The most ambiguous word in the chapter'),
      text: T(
        'In John 1:16, все мы приняли, the мы can only be the pronoun. A fly is one, and приняли is plural. A reader who does not know the accent of мы will try to read a noun in the middle of the sentence and the reading jams. The correction for reading Russian is this: when two words have the same spelling, context is not just a clue, it is the clue.',
      ),
    },
  ],
  examples: [
    { text: 'мы', gloss: T('we, stress on the first syllable') },
    { text: 'мы', gloss: T('fly, stress on the second') },
    { text: 'воду', gloss: T('the water; the stress moved back to the first') },
    { text: 'вода', gloss: T('water; the stress on the last syllable') },
    { text: 'на руки', gloss: T('into the hands; the stress went to the preposition') },
    { text: 'звони́т', gloss: T('he calls now; perfective present') },
    { text: 'зво́нит', gloss: T('he calls, and keeps calling; imperfective present') },
    { text: 'пла́чу', gloss: T('I cry') },
    { text: 'плачу́', gloss: T('I pay') },
    { text: 'Все чрез Него начало быть', gloss: T('All things came to be through him (John 1:3)') },
  ],
  tables: [
    {
      caption: T('One spelling, two readings'),
      head: [T('Word'), T('First reading'), T('Second reading')],
      rows: [
        [T('мы'), T('we, stress on the first syllable'), T('fly, stress on the second')],
        [T('уже'), T('still, stress on the last'), T('narrower, stress on the first')],
        [T('плачу'), T('I cry, stress on the first'), T('I pay, stress on the last')],
        [T('звонит'), T('he calls now, perfective'), T('he keeps calling, imperfective')],
        [
          T('свечи'),
          T('the candles, stress on the first'),
          T('the burning candle, stress on the last'),
        ],
      ],
    },
    {
      caption: T('The mobile accent in masculine nouns'),
      head: [T('Case'), T('вода'), T('нога'), T('дом'), T('город')],
      rows: [
        [T('nominative singular'), T('вода́'), T('нога́'), T('дом'), T('го́род')],
        [T('genitive'), T('воды́'), T('ноги́'), T('до́ма'), T('го́рода')],
        [T('dative'), T('воде́'), T('ноге́'), T('до́му'), T('го́роду')],
        [T('accusative'), T('во́ду'), T('но́гу'), T('дом'), T('го́род')],
        [T('instrumental'), T('водо́й'), T('ногой'), T('до́мом'), T('го́родом')],
        [T('prepositional'), T('воде́'), T('ноге́'), T('до́ме'), T('го́роде')],
      ],
    },
    {
      caption: T('Who ends up with the stress'),
      head: [T('Situation'), T('What happens'), T('Examples')],
      rows: [
        [
          T('a preposition comes first'),
          T('the preposition takes the stress'),
          T('на́ руки, по́д руку, за́ ногу'),
        ],
        [
          T('the noun is the centre of the sentence'),
          T('the stress stays on the noun'),
          T('вода, нога, доро́га'),
        ],
        [T('the noun is plural'), T('the stress returns to the root'), T('во́ды, но́ги, го́роды')],
        [
          T('the noun is in an oblique case'),
          T('the stress moves back to the first syllable'),
          T('во́ду, до́мом'),
        ],
        [T('the word has a ё'), T('the stress is already marked'), T('Твое, всё, ещё')],
        [
          T('the word resists the general rule'),
          T('the stress never moves'),
          T('до́рогой, ло́шадь, де́ньги'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In воду, where did the stress go?'),
    options: [
      T('It stayed on the last syllable, as in вода'),
      T('It moved back to the first syllable'),
      T('It went to the preposition, if there is one'),
    ],
    answer: 1,
    hint: T(
      'In an oblique case a masculine noun with a consonant root loses the root stress, and the first syllable keeps it.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: В ___ было Слово (John 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('In И от полноты Его все мы приняли, the мы is...'),
      options: [T('a fly'), T('the pronoun we'), T('ambiguous, without context')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: доро___ (road, stress on the last syllable)'),
      answer: 'га',
    },
  ],
};
