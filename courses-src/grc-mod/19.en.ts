import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Case'),
  title: T('The four cases that survived'),
  subtitle: T('του πατρός — τον πατέρα — Πατέρα'),
  body: C(`## Four, not six

Ancient Greek had six cases. Modern Greek has four, and the losses were not random: the dative and the vocative went as free positions, and what stayed is what a sentence cannot do without.

The **nominative** is the subject and what is offered to the verb: {ο φίλος μιλάει}. The **genitive** is possession and relation: {του φίλου το σπίτι}, "the friend's house". The **accusative** is the direct object and the complement of prepositions: {βλέπω τον φίλο}, {μιλάω με τον φίλο}. The **vocative** is only address, with no verb: {φίλε}, "friend".

The nominative and the accusative are identical in almost every noun: {ο φίλος} and {τον φίλο} are the same word with the article swapped. A translator does not need to know which is which on the noun; the verb says it.

## The genitive belongs to the noun, not to the preposition

The genitive is the one case that attaches to a word rather than to another word. {του φίλου} is a single unit: preposition plus genitive, and the pair does not come apart. What follows {του} can be a noun, a pronoun or an adjective, and whatever follows that is no longer part of the genitive.

That is why {το σπίτι του φίλου} is "the friend's house" and {το σπίτι φίλου} is what you can say in a high register, with no preposition at all. Ancient Greek did that all the time, and the Bible does. A translator who drops the {του} without noticing erases the possession.

## The genitive also counts

The same genitive marks a part of a whole, and that is why it comes after a numeral: {δύο ανθρώπων}, "of two people". English has no such construction: English says "two people", and Greek says "two, of people". The noun goes to the genitive because it is being counted, and the numeral stands alone, uninflected.

The genitive also marks origin and separation, and that is what makes {από της Αθήνας} say "from Athens" and {μακριά από την Αθήνα} say "far from Athens". Same case, sense supplied by the preposition.

## The accent gives the change away

In the two cases where inflection survived, the accent moves, and it is the only sign there is. {ο φίλος} in the nominative, {του φίλου} in the genitive: the accent drops a syllable because the noun got longer. {ο πατέρας} in the nominative, {του πατέρα} in the genitive: the same drop, and the {-ας} of the nominative disappears.

In the vocative the movement is the same, and sometimes doubled: {Σοφοκλῆς} gives {Σοφοκλεῖς}, three syllables become two and the accent climbs to the last. Anyone who has learned to watch the accent is reading the case without doing any arithmetic.

## Where the inflection is still whole

> Πατέρα μου, ἦλθεν ὁ ἄγγελος· καὶ εἶπεν αὐτῷ· Ἀββᾶ ὁ Πατήρ.

The vocative of {πατέρας} is {πατέρα} in modern Greek, with no change at all, and that is how you address God in English. Ancient Greek has {Πατήρ} in the nominative and {Πάτερ} in the vocative, with {Πατέρα} in between. The two forms live side by side: the modern one is indeclinable, the ancient one stays in the liturgy.`),
  vocab: [
    V('ο φίλος', 'ο φίλος', 'the friend'),
    V('του φίλου', 'ο φίλος', 'of the friend (genitive)'),
    V('τον φίλο', 'ο φίλος', 'the friend (accusative)'),
    V('το σπίτι', 'το σπίτι', 'the house'),
    V('μιλάω', 'μιλάω', 'I speak'),
    V('βλέπω', 'βλέπω', 'I see'),
    V('ο πατέρας', 'πατέρας', 'the father'),
    V('του πατέρα', 'πατέρας', 'of the father (genitive)'),
    V('φίλε', 'φίλος', 'friend (vocative)'),
    V('Σοφοκλής', 'Σοφοκλής', 'Sophocles'),
    V('Σοφοκλείς', 'Σοφοκλής', 'Sophocles (vocative)'),
    V('Πατέρα', 'πατέρας', 'Father (modern vocative)'),
    V('δύο ανθρώπων', 'δύο', 'of two people'),
    V('από', 'από', 'from; by'),
    V('η Αθήνα', 'η Αθήνα', 'Athens'),
    V('μακριά από', 'μακριά', 'far from'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'There are four cases: nominative (subject), genitive (possession), accusative (object and preposition) and vocative (address).',
      ),
    },
    {
      n: '§2',
      text: T(
        'The genitive attaches to the word after του, of της, of του: it is one unit and does not come apart.',
      ),
    },
    {
      n: '§3',
      text: T('After a numeral the noun goes to the genitive: δύο ανθρώπων, "of two people".'),
    },
    {
      n: '§4',
      text: T(
        'The genitive and the vocative move the accent: that is the sign that the word changed case.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dative'),
      text: T(
        'The dative has no case of its own in modern Greek: it was absorbed by the accusative. Four words of it survive as clitics: μου, σου, μας, σας. And του comes from εἰς τοῦ, which was a preposition with a genitive.',
      ),
    },
    {
      label: T('Reading'),
      text: T(
        'When a Greek sentence has two names in a row and only one article, the second name is almost always genitive: φίλου ἀνθρώπου is "of a man who is a friend". It is the oldest apparatus in the language, and it is still alive in fixed expressions.',
      ),
    },
  ],
  examples: [
    { text: 'ο φίλος μιλάει', gloss: T('the friend speaks') },
    { text: 'βλέπω τον φίλο', gloss: T('I see the friend') },
    { text: 'το σπίτι του φίλου', gloss: T("the friend's house") },
    { text: 'μιλάω με τον φίλο', gloss: T('I speak with the friend') },
    { text: 'φίλε, έλα εδώ', gloss: T('friend, come here') },
    { text: 'του πατέρα το σπίτι', gloss: T("the father's house") },
    { text: 'δύο ανθρώπων παρέστησαν', gloss: T('two people showed up') },
    { text: 'μακριά από την Αθήνα', gloss: T('far from Athens') },
  ],
  tables: [
    {
      caption: T('The four cases'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο φίλος', 'η γυναίκα', 'το παιδί'],
        ['γενική', 'του φίλου', 'της γυναίκας', 'του παιδιού'],
        ['αἰτιατική', 'τον φίλο', 'την γυναίκα', 'το παιδί'],
        ['κλητική', 'φίλε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('The genitive with its article'),
      head: ['Μορφή', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική άρθρου', 'τού', 'της', 'τού'],
        ['γενική ουσιαστικού', 'φίλου', 'γυναίκας', 'παιδιού'],
        ['αἰτιατική άρθρου', 'τον', 'την', 'το'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "το σπίτι του φίλου", what case is "του φίλου"?'),
    options: [T('nominative'), T('genitive'), T('accusative'), T('vocative')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ φίλου το σπίτι (masculine genitive article)'),
      answer: 'του',
      hint: T('Genitive article'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "of two people"?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δύο του ανθρώπων'), T('δύο ανθρώπων')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Case of each form'),
      pairs: [
        { a: 'ο φίλος', b: T('nominative') },
        { a: 'του φίλου', b: T('genitive') },
        { a: 'τον φίλο', b: T('accusative') },
        { a: 'φίλε', b: T('vocative') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('Πατέρα ___ (vocative of πατέρας in modern Greek)'),
      answer: 'μου',
      hint: T('The form does not change: write the enclitic possessive'),
    },
  ],
};
