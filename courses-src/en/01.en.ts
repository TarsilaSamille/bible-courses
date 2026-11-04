import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Articles and nouns'),
  subtitle: T('a/an/the and plural formation'),
  section: T('The noun'),
  body: C(`## The article system

English distinguishes three functions that Portuguese expresses in different ways. {a/an} introduces something not yet identified; {the} points to something already identifiable to the listener or context; no article usually expresses generalization or a whole class.

Choose {an} by sound, not spelling: {an hour} has a silent h; {a university} begins with a consonant sound. Proper names normally take no article: {Jesus}, {Mary}, {London}. General plurals likewise: {Birds fly}; {The birds in the cage fly} identifies a particular group.

## Number and countability

Regular plurals add {-s}; words ending in {-s, -sh, -ch, -x} add {-es}. If {y} follows a consonant, {-y} becomes {-ies}: {city} → {cities}. Some nouns are plural-only, such as {sheep}, and irregular plurals are common in Biblical texts: {man/men}, {woman/women}, {child/children}, {foot/feet}, {mouse/mice}.

## Reading method

First ask whether the noun is countable. Then decide whether the speaker presents one unspecified item, an identifiable item, or the whole class. In Biblical English, article choice also carries rhythm and focus: {the Word}, {the Father}, {the light} direct attention to a determinate referent.`),
  vocab: [
    V('the', 'the', 'the (definite)'),
    V('a/an', 'a', 'a/an'),
    V('Word', 'word', 'Word'),
    V('light', 'light', 'light'),
    V('shepherd', 'shepherd', 'shepherd'),
    V('men', 'man', 'men'),
    V('women', 'woman', 'women'),
    V('children', 'child', 'children'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form naturally completes: “I saw ___ shepherd”?'),
    options: [
      T('a (any shepherd)'),
      T('the (an identified shepherd)'),
      T('an (any shepherd)'),
      T('no article'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The plural of city is ___.'),
      answer: 'cities',
      hint: T('y after a consonant changes to -ies.'),
    },
    {
      kind: 'match',
      prompt: T('Match each use with an article.'),
      pairs: [
        { a: T('general'), b: T('no article') },
        { a: T('identifiable'), b: T('the') },
        { a: T('one unspecified'), b: T('a/an') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Why is it an hour?'),
      options: [
        T('because hour has a written final vowel'),
        T('because the h in hour is silent'),
        T('because every h is silent'),
        T('because hour is plural'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Use a/an for one countable unit not yet identified; in questions and negatives, plurals require some: some books, not a books.',
      ),
    },
    {
      n: '2',
      text: T('Use the when the referent is identifiable or when the plural means the whole set.'),
    },
    { n: '3', text: T('General plurals take no article; a bounded group normally takes the.') },
    { n: '4', text: T('a/an follows pronunciation: an hour, a university.') },
  ],
  notes: [
    {
      label: T('Register:'),
      text: T('Omitted articles and proper nouns are grammatical, not errors.'),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('the Word: a determinate referent') },
    { text: '{a disciple}', gloss: T('a disciple: not yet identified') },
    { text: '{Christians pray}', gloss: T('Christians pray: generalization') },
    { text: '{the children in the house}', gloss: T('the children in the house: bounded group') },
  ],
  tables: [
    {
      caption: T('Articles and countability'),
      head: [T('Context'), T('Use'), T('Example')],
      rows: [
        [T('One unspecified item'), T('a/an + singular'), '{a shepherd}'],
        [T('Identifiable referent'), T('the + singular/plural'), '{the shepherd}'],
        [T('A whole class'), T('plural without article'), '{Shepherds care for sheep}'],
      ],
    },
  ],
};
