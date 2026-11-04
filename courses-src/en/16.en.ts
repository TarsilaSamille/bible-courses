import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('The article: where it is obligatory'),
  subtitle: T('a, an, the — the rule Portuguese hides'),
  section: T('Nouns'),
  body: C(`## The rule, which is shorter than it looks

The article {a} or {an} goes with a **countable singular**, and with nothing else: {a book}, {an idea}, {a city}, {the Word}. When the noun leaves the singular, or when it was never countable, the article leaves with it. There is no exception to this in English grammar: {books} with no article, {information} with no article, {water} with no article.

What changes is the reason for each absence, and there are two. With a countable plural the article simply is not used, because definiteness already sits in the plural. With a mass in general it is not used either, because the sentence is about everything the word covers and not about a part of it: {Life is short} takes neither {a} nor {the}.

## Why the mistake appears

Portuguese alternates without a rule the learner can see: "o pão" in general, but "um pão" when counting, "o amor", "a vida", "o Evangelho". Generalizing that pattern and applying it to English produces two wrong forms at once: {informations} and {the informations}.

John 1:1 in the KJV reads {the Word}, {the Word was with God} and {the Word was God}. The article goes with a proper singular noun, and the whole sentence rests on the same article. Mark 4:41 reads {a great calm}: {calm} is countable and {a great calm} names one episode, not a category.

## The pair a and an

{A} goes before a consonant sound and {an} goes before a vowel sound. The test is the sound that comes out, not the letter that is written: {an hour}, because the {h} is silent; {a university}, because the {y} already carries the /ju/ sound.

Anyone who decides by spelling writes {a hour} and {a university}, and both are mispronounced. In {hour} the {h} is not sounded; in {university} the initial {u} sounds like a consonant.

## Where the KJV leaves the article out

1 John 4:24 says that {they that worship him must worship him in spirit and in truth}. The word {worship} appears twice without an article, because the sentence is not about one particular act of worship and about everything worship covers.

Hebrews 11:1 opens with {Now faith is the substance of things hoped for}, and {faith} has no article for the same reason. {Charity} in 1 Corinthians 13:4 opens the list the same way, with {Charity suffereth long}.

Those are three masses in general, and none of them can take {a} or {the} on first mention.`),
  vocab: [
    V('a book', 'book', 'a book'),
    V('an idea', 'idea', 'an idea'),
    V('a city', 'city', 'a city'),
    V('the Word', 'word', 'the Word'),
    V('an hour', 'hour', 'an hour'),
    V('a university', 'university', 'a university'),
    V('an honest man', 'honest', 'an honest man'),
    V('a great calm', 'calm', 'a great calm'),
    V('in general', 'general', 'in general'),
    V('article', 'article', 'article'),
    V('the', 'the', 'the'),
    V('a', 'a', 'a'),
    V('an', 'an', 'an'),
    V('calm', 'calm', 'calm'),
    V('worship', 'worship', 'worship'),
    V('faith', 'faith', 'faith'),
  ],
  rules: [
    {
      n: '1',
      text: T('The indefinite article (a, an) goes only before a countable singular noun.'),
    },
    {
      n: '2',
      text: T(
        'A plural noun takes no article at all, neither definite nor indefinite: books, not the books and not a books.',
      ),
    },
    {
      n: '3',
      text: T(
        'A mass in general takes no article either: life is short, music is a gift, water is life.',
      ),
    },
    {
      n: '4',
      text: T(
        'The choice between a and an is made by sound: an hour, a university, an honest man.',
      ),
    },
    {
      n: '5',
      text: T(
        'The definite article the goes before any countable singular, before any plural whose referent is already settled, and before a mass that is settled.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        '1 John 4:24 drops the article on worship twice, Hebrews 11:1 drops it on faith, and 1 Corinthians 13:4 drops it on charity. The KJV does this because they are masses in general.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'A missing article where the noun is a countable singular is an error; a surplus article where the noun is plural or a mass in general is also an error. Excess and omission share one cause.',
      ),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('the Word — countable singular, definite') },
    { text: '{a great calm}', gloss: T('a great calm') },
    { text: '{an hour}', gloss: T('an hour — silent h') },
    { text: '{a university}', gloss: T('a university — u sounds /ju/') },
    {
      text: '{Faith is the substance of things hoped for}',
      gloss: T('Faith is the substance of things hoped for'),
    },
    { text: '{Charity suffereth long}', gloss: T('Charity suffers long') },
    {
      text: '{books are on the shelf}',
      gloss: T('the books are on the shelf — plural without article'),
    },
    { text: '{water is life}', gloss: T('water is life — mass in general') },
    {
      text: '{the water in the glass}',
      gloss: T('the water in the glass — settled mass, with the'),
    },
    { text: '{an honest man}', gloss: T('an honest man') },
  ],
  tables: [
    {
      caption: T('Where the article appears'),
      head: [T('Noun'), T('Countable singular'), T('Plural'), T('Mass in general')],
      rows: [
        ['book', '{a book}', '{books}', T('—')],
        ['city', '{a city}', '{cities}', T('—')],
        ['idea', '{an idea}', '{ideas}', T('—')],
        ['information', T('—'), T('—'), '{information}'],
        ['water', T('—'), T('—'), '{water}'],
        ['life', T('—'), T('—'), '{life}'],
      ],
    },
    {
      caption: T('a and an by sound'),
      head: [T('Initial sound'), T('Article'), T('Example')],
      rows: [
        [T('consonant'), '{a}', '{a book}'],
        [T('vowel'), '{an}', '{an idea}'],
        [T('silent h'), '{an}', '{an hour}'],
        [T('u read /ju/'), '{a}', '{a university}'],
        [T('isolated vowel'), '{an}', '{an idea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('He gave me an useful advice'),
      T('He gave me a useful piece of advice'),
      T('He gave me many advices'),
      T('He gave me an advice'),
    ],
    answer: 1,
    hint: T('Advice is a mass; to count one unit, use a piece of.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Choose the article: 'It took ___ hour.'"),
      answer: 'an',
      hint: T('The h of hour is silent: the sound starts with a vowel.'),
    },
    {
      kind: 'fill',
      prompt: T("Complete with the definite article: '___ water in the glass is cold.'"),
      answer: 'The',
    },
    {
      kind: 'match',
      prompt: T('Match the noun to its article.'),
      pairs: [
        { a: 'a university', b: 'a' },
        { a: 'an honest man', b: 'an' },
        { a: 'a European', b: 'a' },
        { a: 'an idea', b: 'an' },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the article correctly?'),
      options: [
        T('She drinks the water every day'),
        T('She drinks water every day'),
        T('She drinks waters every day'),
        T('She drinks the waters every day'),
      ],
      answer: 1,
    },
  ],
};
