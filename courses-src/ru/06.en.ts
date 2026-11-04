import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('The noun: gender, number and the adjective'),
  title: T('Gender and number'),
  subtitle: T('стол is masculine, вода is feminine, and nothing in the word says why'),
  body: C(`
## Gender is grammatical, not natural

Russian gender does not follow sex or nature. A table is masculine and water is feminine; the sun is neuter and the moon is feminine; a tree is neuter and a mountain is feminine. None of that follows from the thing itself, and that is why gender has to be learned with the word, like the stress.

What gender does is concrete. It decides the agreement of the adjective, the form of the past tense, the shape of the plural, and the ending of half a dozen cases. A gender error is not a sound error: it is an inflection error that repeats itself through the whole sentence.

The most important thing that can be said about gender is this: **in the nominative singular, no ending gives it away.** There is no -а for the feminine and -о for the neuter as there is in other Slavic languages. You do not discover the gender by reading the noun; you discover it from the adjective that comes with it, or from the dictionary.

## The test is in the adjective

The test fits on one line. Put the adjective in the nominative singular: светлый is masculine, светлая is feminine, светлое is neuter, светлые is plural. The root is the same in all four; only the ending changes. And the adjective ending follows the gender of the noun, so the adjective is the clock that tells the time.

In practice the reader does the reverse. He knows the word is feminine because he has already met it in a phrase with an adjective, or because the dictionary says so. Everything else follows: книга is feminine, so the plural is книги, the past is читала, the instrumental is книгой.

The same path works for number. A neuter noun has a single plural, in -а: слово makes слова, окно makes окна. A feminine noun has two, in -ы after a hard consonant and in -и after a soft one: книга makes книги, ночь makes ночи. And a masculine noun has three: стол makes столы, день makes дни, музей makes музеи.

## The final -ь says nothing

The most tempting signal of the masculine singular is the -ь, because it appears in an enormous family of nouns: день, ключ, меч, врач, муж, дождь. And in an equally enormous family of feminines: мать, дочь, ночь, любовь, печаль, радость, страсть. The two lists are the same size, and no ending separates one from the other.

Then there are the neuters, which are a second trap. пламя, время, имя, письмо, золото all end in a way that matches nothing in the other two genders. And the neuters in -о form a family of their own: слово, окно, дерево, солнце, тело. What unites them is the ending, and that is the only clue available: a noun ending in -о may be neuter, and there is no other clue.

Where the pattern fails outright, the word is in the dictionary and nowhere else. But the number of cases where the pattern works is large enough to be worth using as a method: a neuter noun ends in -о, a feminine noun ends in -а, and almost always that is it.

## The plural gives the gender away

After the singular ending has failed, the plural ending usually delivers the answer. Three families are enough:

- стол makes столы, with -ы: the original was masculine, because a hard masculine makes -ы and a neuter makes -а.
- ночь makes ночи, with -и: the original was feminine, because a soft feminine also makes -и.
- слово makes слова, with -а: the original was neuter, because only the neuter makes -а.

That is the trick that settles most cases. And the biblical hook is John 1:14, where both genders appear in the same clause and neither gives the other away. **И Слово стало плотию, и обитало с нами, полное благодати и истины.** Слово is neuter, and that is why the past is стало and not стал. Плотию is instrumental, and плоть is feminine. Two words of biblical root, in the same sentence, with genders that have nothing in common, and the only clue for each one sits in the neighbouring word: полное is neuter and agrees with Слово, and the noun governing благодати is feminine without anything saying so.`),
  vocab: [
    V('воды', 'вода', 'of the water; genitive singular'),
    V('стол', 'стол', 'table; masculine'),
    V('окно', 'окно', 'window; neuter'),
    V('дерево', 'дерево', 'tree; neuter'),
    V('солнце', 'солнце', 'sun; neuter'),
    V('мать', 'мать', 'mother; feminine, with final -ь'),
    V('страсть', 'страсть', 'passion; feminine, with final -ь'),
    V('день', 'день', 'day; masculine, with final -ь'),
    V('ключ', 'ключ', 'key; masculine'),
    V('ночь', 'ночь', 'night; feminine'),
    V('любовь', 'любовь', 'love; feminine'),
    V('пламя', 'пламя', 'flame; neuter'),
    V('письмо', 'письмо', 'letter; neuter'),
    V('слово', 'слово', 'word; neuter'),
    V('книга', 'книга', 'book; feminine'),
    V('музей', 'музей', 'museum; masculine in -й'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Gender is grammatical: {стол} is masculine, {вода} is feminine, {окно} is neuter. The sex of the thing is irrelevant.',
      ),
    },
    {
      n: '2',
      text: T(
        'The gender test is the shape of the adjective in the nominative singular: {светлый}, {светлая}, {светлое}, {светлые}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The final -{ь} says nothing: {мать}, {страсть} and {ночь} are feminine; {день}, {ключ} and {муж} are masculine.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the nominative singular no ending gives the gender away. The plural does: -{ы} is hard masculine, -{а} is neuter, -{и} is soft feminine or soft masculine.',
      ),
    },
    {
      n: '5',
      text: T(
        'A neuter noun has a single plural, in -{а}: {слово} makes {слова}, {окно} makes {окна}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The plural trick'),
      text: T(
        'If you do not know the gender of a word, make the plural in your head. Hard masculine in -ы, neuter in -а, soft feminine in -и. Ночь makes ночи, and so it is feminine; стол makes столы, and so it is masculine; слово makes слова, and so it is neuter. The trick fails when the noun is already plural, which is why it is a trick and not a rule.',
      ),
    },
    {
      label: T('The word nobody can work out'),
      text: T(
        'Most neuters in -о are predictable: слово, окно, дерево, тело, слово. But пламя, время, имя and письмо look like nothing else, and their plural ending is the same in every case. Those need a dictionary. No language offers a shorter way.',
      ),
    },
  ],
  examples: [
    { text: 'стол', gloss: T('table; hard masculine, the plural is столы') },
    { text: 'воды', gloss: T('of the water; genitive singular of a feminine') },
    { text: 'окно', gloss: T('window; neuter, makes окна') },
    { text: 'мать', gloss: T('mother; feminine with a final -ь') },
    { text: 'день', gloss: T('day; masculine with a final -ь') },
    { text: 'страсть', gloss: T('passion; feminine with a final -ь') },
    { text: 'любовь', gloss: T('love; feminine, makes любви') },
    { text: 'пламя', gloss: T('flame; neuter, makes пламени') },
    { text: 'музей', gloss: T('museum; masculine in -й, makes музеи') },
    {
      text: 'И Слово стало плотию',
      gloss: T('And the Word became flesh (John 1:14); Слово is neuter, so стало and not стал'),
    },
  ],
  tables: [
    {
      caption: T('Gender through the shape of the adjective'),
      head: [T('Noun'), T(' masc.'), T(' fem.'), T(' neuter')],
      rows: [
        [T('слово, word'), T('новое слово'), T('—'), T('новое слово')],
        [T('вода, water'), T('—'), T('чистая вода'), T('—')],
        [T('окно, window'), T('—'), T('—'), T('чистое окно')],
      ],
    },
    {
      caption: T('The final -ь gives nothing away'),
      head: [T('Group'), T('Examples')],
      rows: [
        [T('feminines in -ь'), T('мать, страсть, ночь, любовь, печаль, радость')],
        [T('masculines in -ь'), T('день, ключ, меч, врач, муж, дождь')],
        [T('neuters with no pattern'), T('пламя, время, имя, письмо, золото')],
        [T('neuters in -о'), T('слово, окно, дерево, тело, солнце')],
      ],
    },
    {
      caption: T('The plural as a clue to gender'),
      head: [T('Singular'), T('Plural'), T('Plural ending'), T('Gender it gives away')],
      rows: [
        [T('стол'), T('столы'), T('-ы'), T('hard masculine')],
        [T('книга'), T('книги'), T('-и'), T('soft feminine')],
        [T('ночь'), T('ночи'), T('-и'), T('soft feminine, same as soft masculine')],
        [T('день'), T('дни'), T('-и'), T('soft masculine')],
        [T('музей'), T('музеи'), T('-и'), T('masculine in -й')],
        [T('слуга'), T('слуги'), T('-и'), T('masculine in -а')],
        [T('слово'), T('слова'), T('-а'), T('neuter')],
        [T('окно'), T('окна'), T('-а'), T('neuter')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which word is neuter?'),
    options: [T('вода'), T('окно'), T('ключ')],
    answer: 1,
    hint: T(
      'Water is feminine and key is masculine. Only the window makes окна, with the neuter ending.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the plural: слово makes ___'), answer: 'слова' },
    {
      kind: 'choose',
      prompt: T('мать, страсть, ночь and день have in common...'),
      options: [T('the final -ь'), T('the plural in -и'), T('the feminine gender')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete the past: И Слово ___ плотию (John 1:14)'),
      answer: 'стало',
    },
  ],
};
