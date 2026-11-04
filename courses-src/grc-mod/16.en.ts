import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('The noun'),
  title: T('Singular, plural and the remains of the dual'),
  subtitle: T('οι άνθρωποι — δυο άνθρωποι — ανθρώπων'),
  body: C(`## Three endings make the regular plural

Greek makes the plural by ending, and there are three endings for three genders. The masculine adds {-οι} or {-ους}: {ο άνθρωπος} gives {οι άνθρωποι}, {ο λέων} gives {οι λέοντες}. The feminine adds {-ες}: {η γυναίκα} gives {οι γυναίκες}. The neuter adds {-ια}: {το παιδί} gives {τα παιδιά}. Three endings, three genders, and the article follows: {οι}, {οι}, {τα}.

The neuter adds nothing: it replaces the ending outright. {το παιδί} does not become {το παιδί-ο}, it becomes {τα παιδιά}. And the verb has to change person too, because the number changed: "the child sleeps" is {το παιδί κοιμάται}, "the children sleep" is {τα παιδιά κοιμούνται}. The same goes for the adjective, which in the neuter plural loses its gender: {τα παιδιά καλά}, and not "καλές".

## The plural genitive is a fossil

Every plural genitive in Greek ends in {-ων}, without exception: {ανθρώπων}, {γυναικών}, {παιδιών}, {φίλων}. It is the only living remnant of the {-ων} that ancient Greek had across all the declensions, and it survived because it is the form Greek uses when it counts, as the lesson on the numeral shows.

The same {-ων} turns up in {δύο ανθρώπων}, and that is why Greek says "of two people" rather than "two people". The genitive does two things at once: it marks number, and it marks a part of a whole.

## The dual still has a slot

Ancient Greek had three numbers. English kept two. Modern Greek lost the dual as a morphological category, but kept it as a slot in the counting system: {δυο άνθρωποι} counts exactly two people, and it is not the same as {πολλοί άνθρωποι}, which counts many.

Where the dual comes back in fixed forms, it comes back as {-ες} in the vocative, not in the plural: {πατέρες}, {υἱές μου}. It is the form used when addressing a group of fathers or of sons, and it is the one Scripture uses when it speaks to a people. The neuter vocative is the only one that did not change: {παιδί}, {φίλε}.

## What Scripture shows

> Κύριε, σῶσον τὸν λαόν σου καὶ εὐλόγησον τὴν κληρονομίαν σου, καὶ ἐλέησον αὐτοὺς καθὼς ἤλαφθεν ἐν τοῖς θρόνοις σου.

The vocative endings of {πατέρες} come back in {εὐλόγησον} and {ἐλέησον}: second person singular imperatives that share the ending with the vocative. If you know the vocative you recognise the imperative in the biblical text, and if you only know the indicative you read those two words as one thing.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'the man, the person'),
    V('οι άνθρωποι', 'ο άνθρωπος', 'the people'),
    V('η γυναίκα', 'η γυναίκα', 'the woman'),
    V('οι γυναίκες', 'η γυναίκα', 'the women'),
    V('το παιδί', 'το παιδί', 'the child'),
    V('τα παιδιά', 'το παιδί', 'the children'),
    V('ο λέων', 'ο λέων', 'the lion'),
    V('οι λέοντες', 'ο λέων', 'the lions'),
    V('το σπίτι', 'το σπίτι', 'the house'),
    V('το βιβλίο', 'το βιβλίο', 'the book'),
    V('τα βιβλία', 'το βιβλίο', 'the books'),
    V('ανθρώπων', 'άνθρωπος', 'of people (genitive)'),
    V('γυναικών', 'γυναίκα', 'of women (genitive)'),
    V('παιδιών', 'παιδί', 'of children (genitive)'),
    V('φίλων', 'φίλος', 'of friends (genitive)'),
    V('πατέρες', 'πατέρας', 'fathers (vocative)'),
    V('δύο ανθρώπων', 'δύο', 'of two people'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The regular plural is -οι/-ους in the masculine, -ες in the feminine and -ια in the neuter.',
      ),
    },
    { n: '§2', text: T('The plural genitive is always -ων: ανθρώπων, γυναικών, παιδιών.') },
    { n: '§3', text: T('The neuter plural swaps the article for τα and the verb for the plural.') },
    { n: '§4', text: T('The dual survives as a counting slot: δυο άνθρωποι is exactly two.') },
    { n: '§5', text: T('The vocative in -ες addresses a group, not an object: πατέρες.') },
  ],
  notes: [
    {
      label: T('Inheritance'),
      text: T(
        'παιδιών and ανθρώπων share the same ending by inheritance from the ancient plural genitive. A noun that lost its declension kept this single ending because it is still useful: it is the form Greek uses when it counts.',
      ),
    },
    {
      label: T('Register'),
      text: T(
        "δυο άνθρωποι sounds formal and literary in today's speech. People say πολλοί άνθρωποι, or use the numeral δύο; the dual category survives in the school grammar, not in the mouth.",
      ),
    },
  ],
  examples: [
    { text: 'οι άνθρωποι δουλεύουν', gloss: T('the people work') },
    { text: 'οι γυναίκες μιλούν', gloss: T('the women speak') },
    { text: 'τα παιδιά τρέχουν', gloss: T('the children run') },
    { text: 'οι λέοντες τρώγουν', gloss: T('the lions eat') },
    { text: 'τα βιβλία είναι εδώ', gloss: T('the books are here') },
    { text: 'δύο άνθρωποι ήρθαν', gloss: T('two people came') },
    { text: 'πολλοί άνθρωποι ήρθαν', gloss: T('many people came') },
    { text: 'ανθρώπων πολλών', gloss: T('of many people') },
  ],
  tables: [
    {
      caption: T('Three numbers, three articles'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['δυο', 'δύο άνθρωποι', 'δύο γυναίκες', 'δύο παιδιά'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('The plural genitive'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική', 'ανθρώπων', 'γυναικών', 'παιδιών'],
        ['κλητική', 'άνθρωπε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('Irregular plurals'),
      head: ['Singular', 'Plural'],
      rows: [
        ['ο άνθρωπος', 'οι άνθρωποι'],
        ['η φύση', 'οι φύσεις'],
        ['το δέντρο', 'τα δέντρα'],
        ['το νερό', 'τα νερά'],
        ['ο κανείς', 'οι κανείς'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of "το παιδί"?'),
    options: [T('τα παιδιά'), T('οι παιδιά'), T('τα παίδια'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά τρέχουν (neuter plural article)'),
      answer: 'τα',
      hint: T('The neuter plural article'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "of two people"?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δυο ανθρώπων'), T('δύο του ανθρώπου')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Number of each form'),
      pairs: [
        { a: 'δυο άνθρωποι', b: T('dual') },
        { a: 'πολλοί άνθρωποι', b: T('plural') },
        { a: 'ο άνθρωπος', b: T('singular') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ λέοντες τρώγουν'),
      answer: 'οι',
      hint: T('Masculine plural article'),
    },
  ],
};
