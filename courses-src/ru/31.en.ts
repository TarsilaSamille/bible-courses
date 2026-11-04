import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('Reading John 1 all the way through'),
  subtitle: T('case, aspect and order on the same page, verse by verse'),
  body: C(`
## The first verse, word by word

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Three clauses, and each one carries a decision about case, a decision about aspect and a decision about order. It is the best paragraph available for testing everything that came before.

В начале is prepositional, because в governs the prepositional and начало is neuter, which makes the case appear as начале. Было is the past of быть, a verb with no aspect, and the absence of бы is what marks the sentence as an assertion. Слово is nominative, and it is neuter: that is why the verb seems to agree with nothing visible.

In the second clause у Бога is genitive, and the genitive is marked by the preposition rather than by the ending. In the third, Слово comes back to the nominative, now as a predicative after был. The same noun, three clauses, three functions, and none of them marked.

## Where the text changes register

John 1 is a text in two parts, and the change happens at verse 6. Up to there the language is of fact: past verbs, a present copula, a noun with a preposition. From verse 6 on there are people with names, present verbs, and pronouns that repeat.

Verses 6 to 8 are the hardest for anyone coming from the Greek, because the Greek of verse 7 has a particle that Russian renders with a whole word. Он пришёл свидетельствовать is a simple perfective, and it says that John arrived once, with an arrival time. The same John, four verses later, is Иоанн свидетельствует о Нём, in the present: the testimony is what he does, and not once.

Verse 14 is the longest in the chapter and the most demanding. И Слово стало плотию, и обитало с нами, полное благодати и истины brings a perfective (стало), an imperfective (обитало), a short participle (полное) and two genitives (благодати, истины) into a clause of twelve words. Anyone who has read the previous lessons has everything they need here.

## The chain of pronouns

The second half of the chapter depends on three pronouns that repeat, and the repetition is what holds the text together. Его in 1:12 and 1:16 is genitive singular and refers to Christ. Которые in 1:12 is nominative plural and is the subject of приняли. Оно in 1:2 is neuter singular and goes back to the Слово of the first verse.

What a reader loses without that chain is the direction of the sentence. К своим же Он пришёл, и свои Его не приняли is the first time the text uses a retrospective possessive, and свои is a plural that refers to the same group as the которые of verse 12. The chain lets the text say "his own" twice without repeating the noun.

And it is the chain that lets Его in verse 16 be the genitive of полноты and at the same time the possessive of the person speaking. One word with two functions, and a reader who did not tell genitive from possessive read the verse twice without noticing.

## What is left for the reader, and what closes the chapter

Three things. First: **look at the ending before the noun.** The ending gives the case in almost every noun, and a reader who looks at it first arrives at the verb already knowing what it governs.

Second: **look for the verb before deciding the case.** In the ambiguous cases, and Бога is the commonest, it is the verb that settles it. вижу Бога and слово Бога have the same word and different cases, and only the verb tells them apart.

Third: **count the perfectives.** On a page of Russian text, the number of perfective verbs says how many events there are. John 1 has few perfectives at the start and many after verse 14, and that curve is the curve of the narrative.

And the last clause of the chapter is this one.

**Бога не видел никто никогда; Единородный Сын, сущий в недре Отчем, Он явил.** The hardest verse in the chapter closes with a perfective verb, явил, and the perfective is what closes the text: the Son was manifested, and the act has a beginning and an end.

What comes before it is a double negator, никто никогда, which is the strongest way to deny in Russian. And сущий is a present active participle, which in Portuguese would have to become a verbal form. Anyone who has read the earlier lessons recognises all three without effort: the double negation, the present participle, and the perfective that closes.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'in the beginning was the Word (John 1:1)'),
    V('Слово было у Бога', 'бог', 'the Word was with God'),
    V('Слово было Бог', 'бог', 'the Word was God'),
    V('Оно было в начале у Бога', 'оно', 'he was in the beginning with God (John 1:2)'),
    V('начало быть', 'начать', 'began to be; the formula of John 1:3'),
    V('сотворил', 'сотворить', 'created; perfective (Gen 1:1)'),
    V('свидетельствует', 'свидетельствовать', 'testifies; imperfective present'),
    V('пришёл', 'прийти', 'came; perfective'),
    V('обитало', 'обитать', 'dwelt; imperfective'),
    V('полное', 'полный', 'full; short neuter participle'),
    V('сущий', 'сущий', 'who is; present active participle'),
    V('явил', 'явить', 'manifested; the closing perfective'),
    V('никто', 'никто', 'nobody'),
    V('никогда', 'никогда', 'never'),
    V('свои', 'свой', 'his own; reflexive possessive'),
    V('Он явил', 'явить', 'he manifested; explicit subject'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Слово было у Бога, which case is Бога?'),
    options: [T('Accusative'), T('Genitive'), T('Dative')],
    answer: 1,
    hint: T(
      'У governs the genitive, and the genitive is marked by the preposition rather than by the ending.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete John 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('Which verb in John 1:14 is perfective?'),
      options: [T('обитало'), T('стало'), T('полное')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete John 1:18: Бог не видел никто ___'), answer: 'никогда' },
  ],
  rules: [
    {
      n: '1',
      text: T('The case is read on the ending before the noun, and the verb confirms it.'),
    },
    { n: '2', text: T('In ambiguous cases such as {Бога}, it is the verb that decides.') },
    {
      n: '3',
      text: T(
        'The perfectives on a page say how many events there are: they mark a beginning and an end.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Никто} and {никогда} are the strongest negation, and {сущий} is a present active participle.',
      ),
    },
    {
      n: '5',
      text: T('The pronouns {Оно}, {Его} and {свои} hold up the second half of the chapter.'),
    },
  ],
  notes: [
    {
      label: T('The curve of the perfectives'),
      text: T(
        'Counting the perfective verbs of a chapter is a cheap way to measure a narrative. John 1 opens with sentences of state, almost without perfectives, and closes with the testimony and then with the manifestation. The number of perfectives grows exactly where the text starts counting facts instead of describing a situation, and that is why aspect is the easiest information for a translation to lose.',
      ),
    },
    {
      label: T('Where the translation has to choose'),
      text: T(
        'John 1:3 is the verse in which a translation decides the most: начало быть can become began to be, came to be or passed into existence, and each option carries a different aspect. The choice closest to the Greek is the one that keeps the idea of origin. What a translator cannot do is choose without noticing, because the reader of the translation has no Greek alongside to check.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('in the beginning was the Word') },
    { text: 'и Слово было у Бога', gloss: T('and the Word was with God') },
    { text: 'и Бог был Слово', gloss: T('and God was the Word') },
    { text: 'Оно было в начале у Бога', gloss: T('he was in the beginning with God') },
    { text: 'Все чрез Него начало быть', gloss: T('all things came to be through him') },
    { text: 'Он пришёл свидетельствовать', gloss: T('he came to testify') },
    { text: 'Иоанн свидетельствует о Нём', gloss: T('John testifies about him') },
    { text: 'И Слово стало плотию', gloss: T('and the Word became flesh') },
    { text: 'полное благодати и истины', gloss: T('full of grace and truth') },
    {
      text: 'Единородный Сын, сущий в недре Отчем, Он явил',
      gloss: T('the only-begotten Son, who is in the bosom of the Father, he has manifested'),
    },
  ],
  tables: [
    {
      caption: T('John 1:1-3, shape by shape'),
      head: [T('Shape'), T('Case or function'), T('Aspect'), T('Gloss')],
      rows: [
        [T('В начале'), T('prepositional'), T('—'), T('in the beginning')],
        [T('было'), T('past neuter'), T('no aspect'), T('was')],
        [T('Слово'), T('nominative neuter'), T('—'), T('the Word')],
        [T('у Бога'), T('genitive'), T('—'), T('with God')],
        [T('начало быть'), T('compound verb'), T('perfective'), T('began to be')],
      ],
    },
    {
      caption: T('The curve of the text, in two parts'),
      head: [T('Verses'), T('What dominates'), T('Predominant aspect'), T('Example')],
      rows: [
        [T('1 to 5'), T('statements of state'), T('no aspect and imperfective'), T('светит')],
        [
          T('6 to 8'),
          T('actions of one person'),
          T('both, alternating'),
          T('пришёл, свидетельствует'),
        ],
        [T('9 to 13'), T('receiving and refusing'), T('perfective'), T('приняли, не приняли')],
        [
          T('14 to 18'),
          T('manifestation and testimony'),
          T('both, with a participle'),
          T('стало, обитало, явил'),
        ],
      ],
    },
    {
      caption: T('The chain of pronouns'),
      head: [T('Pronoun'), T('Case'), T('What it refers to'), T('Where it appears')],
      rows: [
        [T('Слово'), T('nominative'), T('the Word'), T('1:1, 1:2 through Оно, 1:14')],
        [T('Оно'), T('nominative neuter'), T('the Word'), T('1:2')],
        [
          T('Его'),
          T('genitive singular'),
          T('Christ, or the Father in 1:18'),
          T('1:12, 1:16, 1:18'),
        ],
        [T('которые'), T('nominative plural'), T('those who received'), T('1:12')],
        [T('свои'), T('nominative plural'), T('the same group as 1:12'), T('1:11')],
      ],
    },
  ],
};
