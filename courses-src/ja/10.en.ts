import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Syntax'),
  title: T('SOV order, and why machine translation fails at it'),
  subtitle: T(
    'The verb goes last, the indirect object comes before the direct one and the adjective comes before the noun: three inversions, one order',
  ),
  body: C(`
## The verb goes last

Portuguese says "I eat an apple": subject, verb, object. Japanese says {watashi wa ringo o taberu}, the same content with the verb at the end. It looks inverted; it is not chaos, it is **the order**. And it is exactly the same order as Mandarin, which you have already seen: there {wǒ chī píngguǒ}, here {watashi wa ringo o taberu}. Two distant languages, one rule.

And the rule has a practical consequence: **everything Portuguese puts before the verb, Japanese puts even further forward**. Negation and adverbs of time and manner open the sentence, and the verb closes it. In "yesterday I did not go", Japanese puts "yesterday" at the front and the negation glued to the verb at the end. Anyone translating clause by clause, word by word, ends up with the pieces in the wrong positions, which is why machine translation collapses here: it knows the words and does not know the order.

## The indirect object comes before the direct one

Portuguese says "I give him a book": the indirect object is last. In Japanese the indirect object is first of all. {kare ni hon o ageru} is "I give him a book": {kare ni} for the person, {hon o} for the book, and the verb {ageru} last.

This is not a Japanese quirk: it is the same pattern you saw in Mandarin, where the indirect object also comes before the direct one. Portuguese does the opposite of both, and that is why "to give", "to send", "to show" and "to teach" are the constructions where the translation error shows up most often: in Portuguese the indirect object closes the sentence, and in Japanese it opens it.

## The adjective is a noun that comes first

Portuguese puts the adjective after the noun: "a red book". Japanese puts it before: {akai hon}, "red book". A Japanese adjective is not an adjective in the sense Portuguese uses the word: it is a **noun that modifies another noun**, and that is why it walks in front of it. The word {utsukushii}, "beautiful", is a word, not a category.

The same goes for a noun used as an adjective, which grammarians call a nominal adjective: {bijutsu}, "art", "beauty", goes in front of another noun with the sense of "artistic", "beautiful". Portuguese would say "an artist"; Japanese is "art + person". Machine translation fails twice over here: it knows the value of the adjective and puts it in the wrong place.

## The order of modifiers, which forgives nothing

In a phrase with more than one modifier the order is fixed and runs from the closest to the noun to the most distant: noun, relative clause, numeral, descriptive. For "the little white house", the noun is {ie}, "house"; the relative clause says which house; the numeral says how many; the descriptive is {shiroi}, "white". Japanese writes the noun first and stacks the modifiers after it, from the tightest to the loosest.

It is the reverse of Portuguese on every count, and getting it wrong once is enough for the phrase to stop existing: an adjective after a noun is not an adjective, it is another noun. In exchange, once the order is learned, any long phrase stays readable, and that is what the translator uses to justify the inversion of the Greek.

## Where this shows up in the Bible

The 1987 Japanese translation puts **a topic at the start of the verse** to reflect the Greek, and the rest of the sentence comes out in SOV order without any concession. John 1:1 is the best possible example, because it is the first verse everybody knows by heart: {hazime wa kotoba datta}. "In the beginning" is a topic marker at the front, and what follows is {kotoba}, "word", then the verb {atta}, "was".

Notice what the translator did. He could have written "in the beginning there was the word" in Portuguese order and nobody would have complained. Instead he moved "in the beginning" to the front of the sentence, which is where Greek puts it when the verb is *ēn*, "was". That is exactly what the topic marker {wa} allows: moving a constituent to the front and creating contrast, as in "as for him, he goes". A topic at the front is the most powerful tool you have in an SOV language, and that is why the new Japanese translation looks drier than ours and is more faithful.
`),
  vocab: [
    V('hon', '本', 'book (hon)'),
    V('akai', '赤い', 'red; an adjective, comes before the noun (akai)'),
    V('utsukushii', '美しい', 'beautiful; an adjective, comes before the noun (utsukushii)'),
    V('shiroi', '白い', 'white; positional adjective (shiroi)'),
    V('ie', '家', 'house (ie)'),
    V('kare', '彼', 'he; third person pronoun (kare)'),
    V('ageru', 'あげる', 'to give; to offer (ageru)'),
    V('ni', 'に', 'indirect object and destination (ni)'),
    V('o', 'を', 'direct object (o)'),
    V('wa', 'は', 'topic; contrast (wa)'),
    V('bijutsu', '美術', 'art; beauty; nominal adjective (bijutsu)'),
    V('hazime', '初め', 'beginning; principle (hazime)'),
    V('kotoba', '言葉', 'word (kotoba)'),
    V('atta', 'あった', 'to be; to exist; the plain form of the verb "to be" (atta)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The order is subject — object — verb. The verb closes the sentence, and there is no alternative position.',
      ),
    },
    {
      n: '2',
      text: T(
        'What English puts before the verb, Japanese puts even further forward: adverb and negation open the sentence.',
      ),
    },
    {
      n: '3',
      text: T(
        'The indirect object comes before the direct one: {kare ni hon o ageru}, never {hon o kare ni ageru}.',
      ),
    },
    {
      n: '4',
      text: T('An adjective is a noun and comes before the noun: {akai hon}, never {hon akai}.'),
    },
    {
      n: '5',
      text: T(
        'Modifiers run from the closest to the noun to the most distant: noun, relative clause, numeral, descriptive.',
      ),
    },
  ],
  notes: [
    {
      label: T('The topic marker {wa} is the escape valve'),
      text: T(
        'The topic marker lets you move any constituent to the front of the sentence and create contrast, as in "as for him, he goes". In SOV, with no topic marker, there is no way to reorganise anything.',
      ),
    },
    {
      label: T('Machine translation fails on position, not vocabulary'),
      text: T(
        'It knows {utsukushii} and it knows {ageru}; what it does not know is that one goes before the noun and the other goes after. The result is grammatical in English and unintelligible in Japanese.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — a red book') },
    { text: '美しい家', gloss: T('utsukushii ie — a beautiful house') },
    { text: '彼に本をあげる', gloss: T('kare ni hon o ageru — I give him a book') },
    {
      text: '学生に本を与えた',
      gloss: T('gakusei ni hon o ataeta — he gave a book to the student'),
    },
    {
      text: '初めは言葉だった',
      gloss: T('hazime wa kotoba datta — in the beginning was the Word'),
    },
  ],
  tables: [
    {
      caption: T('Indirect and direct object in three languages'),
      head: [T('Language'), T('Order of the complements'), T('The same sentence')],
      rows: [
        [T('English'), T('direct before indirect'), T('I give him a book')],
        [T('Japanese'), T('indirect before direct'), T('{kare ni hon o ageru}')],
        [T('Mandarin'), T('indirect before direct'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
    {
      caption: T('The order of modifiers: from the tightest to the loosest'),
      head: [T('Position'), T('What goes there'), T('Example')],
      rows: [
        [T('1'), T('the noun'), T('{ie} — house')],
        [
          T('2'),
          T('the relative clause, which says which house'),
          T('{bijutsu no ie} — the house of art'),
        ],
        [
          T('3'),
          T('the numeral, which says how many'),
          T('three houses, with numeral and counter'),
        ],
        [T('4'), T('the descriptive, the most distant'), T('{shiroi ie} — the white house')],
      ],
    },
    {
      caption: T('The adjective in English and in Japanese'),
      head: [T('English'), T('Japanese'), T('Order')],
      rows: [
        [T('a red book'), T('{akai hon}'), T('adjective before noun')],
        [T('a beautiful house'), T('{utsukushii ie}'), T('adjective before noun')],
        [T('an artistic person'), T('{bijutsu no hito}'), T('noun as adjective, before the noun')],
        [
          T('a nice red book'),
          T('{utsukushii akai hon}'),
          T('the most distant descriptive comes last, tight against the noun'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "I give him a book", which phrase comes first in Japanese?'),
    options: [T('{hon o}'), T('{kare ni}'), T('{ageru}'), T('{wa}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "he gave a book to the student" with the indirect object particle: 学生____本を与えた',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Match the element to the role it plays in the sentence'),
      pairs: [
        { a: T('{kare ni}'), b: T('indirect object: the person') },
        { a: T('{hon o}'), b: T('direct object: the thing') },
        { a: T('{ageru}'), b: T('verb: comes last') },
        { a: T('{wa}'), b: T('topic: can open the sentence') },
        { a: T('{utsukushii}'), b: T('adjective: comes before the noun') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('How do you write "a red book"?'),
      options: [T('{hon akai}'), T('{akai hon}'), T('{hon ga akai}'), T('{akai no hon}')],
      answer: 1,
    },
  ],
};
