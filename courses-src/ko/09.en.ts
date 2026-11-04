import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Syntax'),
  title: T('SOV order and where everything goes: the adverb is what misleads most'),
  subtitle: T(
    'The verb goes last, but the adverb does not come before the subject as in Mandarin: in Korean it fits between the subject and the verb',
  ),
  body: C(`## Object, verb, subject: the same order as the other two

Portuguese says "I eat an apple": subject, verb, object, the SVO order. Korean says {naneun sagwaneul meogeotda}, the same content with the verb in the middle and the subject last. It is not chaos, it is **the order**, and it is exactly the same order as Mandarin, {wǒ chī píngguǒ}, and as Japanese, {watashi wa ringo o taberu}. The three languages of this project govern the sentence with the same key: the verb closes, and whatever Portuguese puts before the verb Korean pushes even further forward.

The practical consequence is the same in all three cases, and it is worth more than the rule itself: **anyone translating word for word arrives at the end with the pieces in the wrong place**, and the sentence that comes out is grammatical in Portuguese and unintelligible in Korean. That is why machine translation collapses here: it knows the words and it does not know the order.

## The adverb: between the subject and the verb

The adverb is the difference between Korean and Mandarin that almost nobody expects. In Mandarin the time adverb opens the sentence and the subject comes after it: "yesterday I ate an apple". In Korean the adverb also comes before the verb, but **after the subject**: {nat neun naneun meogeotda}, "yesterday I ate", with "yesterday" after "I" and before "ate". The adverb does not open the sentence; it fits into the gap between the subject and the verb, which is the only gap the SOV order leaves open.

In Portuguese this costs nothing: "yesterday I ate an apple", "I yesterday ate an apple" and "I ate an apple yesterday" are the same sentence, and the adverb is free. In Korean the position is fixed, and that is why an adverb in the wrong place is not a displaced sentence: it is a wrong sentence. The practical rule is a single one: an adverb of time and of place between the subject and the verb, and never before the subject.

And the topic particle shows up glued to the adverb: "yesterday" takes {neun}, the same particle a noun takes, and the result is a visible mark that this piece is the adverb and not the subject. A reader of Korean who does not know the particle stumbles exactly here: builds "yesterday, I, ate" and produces {nat naneun meogeotda}, a sentence about yesterday in which the reader supposes the subject to be sitting in the Mandarin position.

## The adjective comes first, the verb comes in the middle

Portuguese puts the adjective **after** the noun: "a red book". Korean puts it **before**: {chwib chwib chwib chaek}, "red book", as Japanese does and as Mandarin does too. And the verb always comes in the middle, never at the end and never at the front.

Combine the two rules and the sentence is ready: "yesterday I ate a red book" is {nat neun naneun chwib chwib chwib yeohaeneul meogeotda}, adverb, subject, adjective, noun with the object particle, verb. Read from left to right it is the Portuguese sentence with every piece turned out of place: in Portuguese the adjective sticks to the noun and the verb sticks to the subject; in Korean the verb sticks to the object and the noun sticks to it, and the adverb, which in Portuguese is free, is pinned in the middle. Write the two sentences side by side once and the Korean text stops looking truncated.

When there is more than one adjective the order is fixed too: **the one closest to the noun is the one that distinguishes it**, and Korean and Japanese agree on this. For "a small white book", {jageun hwen chaek}, the white {hwen} is what separates this book from the others, and that is why it comes last, right next to the noun. The same holds for {gichimi chan chwib chwib chwib chaek}, "a very small red book".

## The indirect object first, and marked by a particle

"To give", "to send", "to show" and "to teach" are the constructions where the translation error shows up hardest, because Portuguese puts the indirect object at the end: "I give a book to him". Korean puts the indirect object before everything: {kurege chwaege chwawassseo}, "to him a book I gave", with {kurege} for the person and {chwaege} for the thing.

And here Korean is more robust than Japanese: the indirect object is not recognised by position alone, it is **recognised by the particle**. {ee}, "to someone", and {hantaee}, also "to someone", are the two forms of the person as indirect object, and {eseo} marks origin, "from". In Japanese the indirect object is recognised by {ni}; Korean has a particle of its own, and it survives even when the position is ambiguous. It is that particle that separates "from" from "to" in the same sentence: {chosim chwiteuseo} is "from the beginning", while {ee} is "to someone", two different roles, two different particles.

What does **not** change is the subject: it comes last, but it can be **omitted**, because the ending of the verb already says who the subject is. In a sentence with no indirect object the order is object, verb, subject, and when the subject disappears what is left is object and verb: {nat gatta}, "yesterday (someone) went". That omission is what makes a Korean text look truncated to someone who does not know the language: nothing is missing at the end, the verb ending has already done its work.
`),
  vocab: [
    V('naneun', '는', 'topic after "I" (naneun)'),
    V('nat', '어제', 'yesterday; time adverb (nat)'),
    V('neun', '는', 'topic particle, also after an adverb (neun)'),
    V('yeohaeneul', '책', 'book with the direct object particle (yeohaeneul)'),
    V('reul', '를', 'direct object after a word ending in a vowel (reul)'),
    V('gat', '가', 'subject after a word ending in a vowel (gat)'),
    V('ee', '에게', 'to someone; indirect object (ee)'),
    V('hantaee', '한테', 'to someone; indirect object (hantaee)'),
    V('eseo', '에서', 'from; origin (eseo)'),
    V('chwib', '빨간', 'red; adjective, comes before the noun (chwib)'),
    V('jageun', '작다', 'to be small (jageun)'),
    V('hwen', '흰', 'white; positional adjective (hwen)'),
    V('mulgug', '말씀', 'the Word (mulgug)'),
    V('chosim', '처음', 'beginning; start (chosim)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The order is object — verb — subject, the same as Mandarin and Japanese. The verb closes the sentence and the subject comes last.',
      ),
    },
    {
      n: '2',
      text: T(
        'A time and place adverb comes between the subject and the verb: {nat neun naneun meogeotda}. In Portuguese it is free; in Korean the position is fixed.',
      ),
    },
    {
      n: '3',
      text: T(
        'The adverb takes the topic particle, {neun}, which is the visible mark that this piece is the adverb and not the subject.',
      ),
    },
    {
      n: '4',
      text: T(
        'The adjective comes before the noun and the verb comes in the middle; with several adjectives, the one closest to the noun is the one that distinguishes it.',
      ),
    },
    {
      n: '5',
      text: T(
        'The indirect object comes before the direct one and is marked by a particle — {ee}, {hantaee}, {eseo} — which makes it more readable than in Japanese.',
      ),
    },
  ],
  notes: [
    {
      label: T('The subject can disappear, and that is why the text looks truncated'),
      text: T(
        'The subject comes last, but the ending of the verb already declares who it is. In a sentence with no indirect object what is left is object and verb: {nat gatta}, "yesterday (someone) went". What looks like a cut-off sentence is a complete one.',
      ),
    },
    {
      label: T('The particle is worth more than the position'),
      text: T(
        'In Mandarin and in Japanese the function of each phrase is deduced from the position, which is why machine translation gets it wrong when it assembles the sentence. In Korean the particle declares the function: the indirect object is recognised by {ee} or {hantaee} even when the position is ambiguous. That is what makes the text readable.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 나는 빨간 책을 먹었다',
      gloss: T(
        'nat neun naneun chwib chwib chwib yeohaeneul meogeotda — yesterday I ate a red book',
      ),
    },
    {
      text: '어제 나는 책만 먹었다',
      gloss: T('nat neun naneun chaekman meogeotda — yesterday I ate only books'),
    },
    { text: '그에게 책을 주었다', gloss: T('kurege chwaege chwawassseo — I gave a book to him') },
    { text: '작은 흰 책', gloss: T('jageun hwen chaek — a small white book') },
    {
      text: '처음부터 말씀 이었어',
      gloss: T('chosim chwiteuseo mulgug ittaseo — in the beginning was the Word'),
    },
  ],
  tables: [
    {
      caption: T('The order of the constituents: the same sentence in Portuguese and Korean'),
      head: [
        T('Constituent'),
        T('Where it sits in Portuguese'),
        T('Where it sits in Korean'),
        T('The rule'),
      ],
      rows: [
        [
          T('time adverb'),
          T('free, in any position'),
          T('between the subject and the verb'),
          T('comes after the subject'),
        ],
        [T('subject'), T('first'), T('last'), T('can be omitted')],
        [
          T('adjective'),
          T('after the noun'),
          T('before the noun'),
          T('the closest one distinguishes'),
        ],
        [
          T('indirect object'),
          T('closing the sentence'),
          T('before the direct object'),
          T('comes with a particle'),
        ],
        [T('direct object'), T('after the verb'), T('before the verb'), T('comes with a particle')],
        [T('verb'), T('second'), T('before the subject'), T('closes the proposition')],
      ],
    },
    {
      caption: T('Where the adverb "yesterday" sits in the three languages of this project'),
      head: [T('Language'), T('The sentence'), T('Where the adverb sits')],
      rows: [
        [T('Portuguese'), T('ontem eu comi maçã'), T('free: in any position')],
        [
          T('Mandarin'),
          T('{zuotian wo chi-le pingguo}'),
          T('before the verb and before the subject'),
        ],
        [T('Japanese'), T('{kinou ringo o tabeta}'), T('before the verb and before the subject')],
        [T('Korean'), T('{nat neun naneun meogeotda}'), T('between the subject and the verb')],
      ],
    },
    {
      caption: T('The adjective in Portuguese and in Korean, with several adjectives'),
      head: [T('Portuguese'), T('Korean'), T('Order')],
      rows: [
        [T('a red book'), T('{chwib chwib chwib chaek}'), T('adjective before the noun')],
        [
          T('a small white book'),
          T('{jageun hwen chaek}'),
          T('the distinguishing one sits next to the noun'),
        ],
        [
          T('a small red book'),
          T('{jageun chwib chwib chwib chaek}'),
          T('the order of the adjectives is fixed too'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "yesterday I ate an apple", where does the adverb go in Korean?'),
    options: [
      T('before the subject'),
      T('between the subject and the verb'),
      T('after the verb'),
      T('at the end of the sentence, after the subject'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Insert "yesterday" between the subject and the verb: 나는 ____ 빨간 책을 먹었다'),
      answer: '어제',
    },
    {
      kind: 'match',
      prompt: T('Match the piece to the role it plays in the sentence'),
      pairs: [
        { a: T('{kurege}'), b: T('indirect object: the person, marked by a particle') },
        { a: T('{yeohaeneul}'), b: T('direct object: the thing, marked by a particle') },
        { a: T('{nat}'), b: T('time adverb, between the subject and the verb') },
        { a: T('{chwib chwib chwib}'), b: T('adjective, before the noun') },
        { a: T('{meogeotda}'), b: T('verb, and its ending declares the subject') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('How is "a small white book" written in Korean?'),
      options: [
        T('{chaek jageun hwen}'),
        T('{hwen jageun chaek}'),
        T('{jageun hwen chaek}'),
        T('{chaek hwen jageun}'),
      ],
      answer: 2,
    },
  ],
};
