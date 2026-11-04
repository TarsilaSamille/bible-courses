import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Article'),
  title: T('The three articles and the neuter plural rule'),
  subtitle: T('ο — η — το, and τα that becomes αυτά'),
  body: C(`## Two series and a third

The Greek article has two morphological series, not four: {ο} covers masculine and feminine, and {το} is kept separate for the neuter alone. In the plural {οι} covers masculine and feminine and {τα} is kept for the neuter. The old inflection, with four series, shows up in the Bible and not in speech.

What the article does is the same thing it does in English: it makes the referent specific. {ο άνθρωπος} is "the man", a person already identified. {άνθρωπος} without an article is "a man" or "humanity". The difference is the same one, and the difference is large.

## The rule nobody expected

The neuter plural swaps its article depending on what comes before it. With a plain determiner it stays {τα}: {τα παιδιά}, "the children". With a demonstrative it becomes {αυτά}: {αυτά τα παιδιά}, "these children". With a strong possessive, the same: {δικά μου παιδιά}. This is not irregular: {αυτά} is the article working as a demonstrative, and the form it takes is the neuter one.

The working rule fits in one line: **in the neuter plural, with a demonstrative the article is {αυτά}; without one, the article is {τα}**. And it is the only place in modern Greek where a form changes according to the determiner. No other noun class does that.

## Why Greek does it and English does not

The phenomenon is not modern — it is ancient. In ancient Greek the noun in -ον dropped its -ν in the plural, and the article τά stayed {τὰ}: {τὰ τέκνα}, "the children". With a demonstrative {αὐτά}, the noun in -α replaced the -ον outright: {αὐτὰ τέκνα}. Modern Greek kept the noun substitution and lost the -ν, and with it lost the reason. The rule survived without its ground, which is why it looks arbitrary to anyone who does not know the history.

## The genderless neuter plural

There is a use of the neuter plural that English does not have, and it solves a real problem. When a group is mixed and it is not worth saying what sex it is, Greek uses the neuter plural: {τα παιδιά έφαγαν}, "the children ate". It is also used for a collection of things of different kinds: {τα πράγματα έφερα}, "he brought the things".

The verb is the same in both options and the article is what announces the choice: {οι άνθρωποι} says the group is of men, {τα παιδιά} says it does not matter.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'the man, the person'),
    V('άνθρωπος', 'άνθρωπος', 'a man; humanity'),
    V('το παιδί', 'το παιδί', 'the child'),
    V('τα παιδιά', 'το παιδί', 'the children'),
    V('τα', 'τα', 'the (neuter plural)'),
    V('οι', 'οι', 'the (masc. and fem. plural)'),
    V('αυτά', 'αυτά', 'these (neuter plural)'),
    V('αυτά τα παιδιά', 'αυτός', 'these children'),
    V('δικά μου παιδιά', 'δικός', 'my children'),
    V('ο φίλος', 'ο φίλος', 'the friend'),
    V('η φιλία', 'η φιλία', 'the friendship'),
    V('το σπίτι', 'το σπίτι', 'the house'),
    V('τα πράγματα', 'το πράγμα', 'the things'),
    V('τα τέκνα', 'τὸ τέκνον', 'the children (ancient Greek)'),
    V('αὐτὰ τέκνα', 'αὐτός', 'these children (ancient Greek)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The article has two series: ο for masculine and feminine, το for the neuter; οι and τα in the plural.',
      ),
    },
    {
      n: '§2',
      text: T(
        'In the neuter plural, with a demonstrative the article is αυτά; without one, it is τα.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The article makes the referent specific: ο άνθρωπος is "the man", άνθρωπος is "a man".',
      ),
    },
    {
      n: '§4',
      text: T('The neuter plural serves a mixed group: τα παιδιά, without saying the sexes.'),
    },
  ],
  notes: [
    {
      label: T('Etymology'),
      text: T(
        'αυτά and αυτός are the same root: the neuter plural article absorbed the demonstrative pronoun and lost the other end of the contrast, which is εκείνος, "that one".',
      ),
    },
    {
      label: T('Careful'),
      text: T(
        'The αυτά rule only holds in the plural. In the singular the neuter article is always το, even with a demonstrative: αυτό το παιδί, and never "αυτόν το παιδί".',
      ),
    },
  ],
  examples: [
    { text: 'τα παιδιά παίζουν', gloss: T('the children play') },
    { text: 'αυτά τα παιδιά παίζουν', gloss: T('these children play') },
    { text: 'τα παιδιά μου παίζουν', gloss: T('my children play') },
    { text: 'οι φίλοι έρχονται', gloss: T('the friends come') },
    { text: 'αυτοί οι φίλοι έρχονται', gloss: T('these friends come') },
    { text: 'τα πράγματα είναι εδώ', gloss: T('the things are here') },
    { text: 'το σπίτι είναι μικρό', gloss: T('the house is small') },
    { text: 'ανθρωπος και άνθρωπος', gloss: T('one man and another man') },
  ],
  tables: [
    {
      caption: T('The article everywhere'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('The neuter plural and what comes before'),
      head: ['Προηγούμενο', 'Άρθρο', 'Παράδειγμα'],
      rows: [
        ['κανένα', 'τα', 'τα παιδιά'],
        ['αυτός', 'αυτά', 'αυτά τα παιδιά'],
        ['δικός μου', '—', 'δικά μου παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "these children"?'),
    options: [T('αυτά τα παιδιά'), T('τα αυτά παιδιά'), T('αυτά παιδιά'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά παίζουν (no demonstrative)'),
      answer: 'τα',
      hint: T('Simple neuter plural article'),
    },
    {
      kind: 'choose',
      prompt: T('In "τα παιδιά έφαγαν", what does the neuter plural mark?'),
      options: [
        T('that they are all boys'),
        T('that the group is mixed or unspecified'),
        T('that it is one single group'),
        T('that it is indefinite'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Article and gender'),
      pairs: [
        { a: 'ο', b: T('masculine and feminine') },
        { a: 'η', b: T('feminine') },
        { a: 'το', b: T('neuter') },
        { a: 'τα', b: T('neuter plural') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φιλία είναι μεγάλη (feminine singular article)'),
      answer: 'η',
      hint: T('Singular feminine article'),
    },
  ],
};
