import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Case and the three endings'),
  subtitle: T('ـُ، ـَ، ـِ'),
  section: T('Nouns'),
  body: C(`## Three endings and one question

Latin had three cases and lost two of them on the way to Portuguese. Portuguese kept a trace, and the trace sits inside the prepositions: "of me", "to God", "to him". Arabic kept all three, and the mark sits on the noun, not on the preposition.

They are {ـُ} in the nominative, {ـَ} in the accusative and {ـِ} in the genitive: {كِتَابٌ}, {كِتَابًا}, {كِتَابٍ}. One question decides among them, and the question is about the noun: **what is this noun doing in this clause?** If it is the subject, nominative. If it is the direct object of a transitive verb, accusative. If it follows a preposition, genitive.

That is why the ending is the cheapest information the sentence offers. A reader who translates from the preposition goes wrong half the time, because {بِـ} and {لِـ} take the genitive while {كَتَبَ} takes the accusative, and both are on the same line.

## What decides the case

Case comes from the role, and the roles are few. The subject of any verb goes nominative: {جَاءَ الرَّجُلُ}. The direct object of a transitive verb goes accusative: {كَتَبَ رِسَالَةً}. The complement of a preposition goes genitive: {فِي الْبَيْتِ}.

There is one case that comes from none of these and that shows up all the time: **the second element of an iḍāafa is always genitive**. {بَيْتُ اللهِ} shows no preposition at all, and {اللهِ} is genitive anyway, because it closes a unit. It is the only context where the genitive appears without a preposition, and that is why it misleads beginners.

The verb {كَانَ} has a behaviour of its own that is worth isolating now. Its subject is nominative, as always: {كَانَ الْمَلِكُ}. What follows is a predicate, and the predicate goes accusative: {كَانَ الْمَلِكُ عَالِمًا}. Rendering that as nominative produces a sentence nobody says.

## Where the case does not show

Here is the exception, and it takes more room than the rule because that is where readers go wrong.

The regular feminine plural hides the case. {مُعَلِّمَاتٌ} is nominative and {مُعَلِّمَاتٍ} is accusative or genitive, but the final vowel disappears and the two shapes end up identical once the {ة} is not written. A dictionary will tell you they are one word, and biblical text is full of places where the case is known only from the preposition that came before.

The same happens with the {أَفْعَال} plural: {رِجَالٌ}, {رِجَالٍ}, {رِجَالٍ}. And with the regular masculine plural, which at least tells the nominative {ـُونَ} from the rest.

The shortest list belongs to the diptotes. There are few words, nearly all proper nouns or names of places: {أَحْمَدٌ}, {مَسْجِدٌ}, {هِنْدٌ}, {دِينَارٌ}. They swap the final vowel for {ٍ} in the genitive and drop it in the accusative: {رَأَيْتُ أَحْمَدٍ}, {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}. Anyone who does not know the list exists will read {فِي مَسَاجِدَ} as a copying error.

## Reading criterion

Start at the verb and work outwards from it. In {كَذَا بَحُبُّ اللَّهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ} there are two accusative constructions: {الْعَالَمَ} is the object of {بَحُبّ}, {ابْنَهُ} is the object of {بَذَلَ}, and the final fatha of each says so with no help at all. A reader who renders the final ending as nominative arrives at the end with the whole clause wrong, and the mistake stays invisible if he never looked at the noun.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'book; nominative'),
    V('كِتَابًا', 'كتاب', 'book; accusative'),
    V('كِتَابٍ', 'كتاب', 'book; genitive'),
    V('رِسَالَةً', 'رسالة', 'message; accusative'),
    V('رَجُلٌ', 'رجل', 'man; nominative'),
    V('جَاءَ', 'جاء', 'he came'),
    V('الْبَيْتِ', 'بيت', 'the house; genitive'),
    V('الْمَلِكُ', 'ملك', 'the king; nominative'),
    V('عَالِمًا', 'علم', 'wise; accusative as a predicate'),
    V('كُتُبٌ', 'كتب', 'books; broken plural in the nominative'),
    V('كُتُبًا', 'كتب', 'books; broken plural in the accusative'),
    V('أَحْمَدٌ', 'أحمد', 'a proper name; a diptote'),
    V('مَسَاجِدَ', 'مسجد', 'mosques; a diptote in the accusative'),
    V('الْعَالَمَ', 'عالم', 'the world; accusative'),
    V('بَحُبُّ', 'حبب', 'he loves'),
    V('ابْنَهُ', 'ابن', 'his son; accusative'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {كَتَبَ رِسَالَةً}, what case is {رِسَالَةً}?'),
    options: [T('Nominative'), T('Accusative'), T('Genitive'), T('Vowel')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the genitive: "in a house" is {فِي ___}.'),
      answer: 'بَيْتٍ',
      hint: T('After a preposition the noun takes the ending with kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Match role and case.'),
      pairs: [
        { a: T('subject'), b: T('nominative') },
        { a: T('direct object'), b: T('accusative') },
        { a: T('after a preposition'), b: T('genitive') },
        { a: T('second element of an iḍāafa'), b: T('genitive') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {كَانَ الْمَلِكُ عَالِمًا}, what case is {عَالِمًا}?'),
      options: [T('Nominative'), T('Accusative'), T('Genitive'), 'Dual'],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Which of these words is a diptote?'),
      options: [T('كِتَابٌ'), T('أَحْمَدٌ'), T('مُعَلِّمٌ'), 'كِتَابَتَانِ'],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('**Case is an ending of the noun: {ـُ} nominative, {ـَ} accusative, {ـِ} genitive.**'),
    },
    {
      n: '2',
      text: T(
        'Case is decided by the role of the noun in the clause: subject, direct object or complement of a preposition.',
      ),
    },
    {
      n: '3',
      text: T(
        'The second element of an iḍāafa is always genitive, and it is the only context where the genitive shows up without a preposition.',
      ),
    },
    {
      n: '4',
      text: T(
        'The regular feminine plural hides the case: {مُعَلِّمَاتٌ} and {مُعَلِّمَاتٍ} are the two shapes.',
      ),
    },
    {
      n: '5',
      text: T(
        'Diptotes swap the genitive vowel for {ٍ} and drop it in the accusative: {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin lost it'),
      text: T(
        'Latin kept the three cases to the end, and Portuguese inherited case only inside prepositions: "of me", "to God". Arabic kept all three, and that is what makes the ending information rather than decoration.',
      ),
    },
    {
      label: T('The case that is not written'),
      text: T(
        'In an ancient text the case is not always there. The missing ending can sometimes be recovered from the ending of the verb or from the preposition that follows, and that is why the same noun appears with {ـُ} in one manuscript and {ـَ} in another without either being wrong.',
      ),
    },
  ],
  examples: [
    { text: 'جَاءَ الرَّجُلُ', gloss: T('the man came; subject in the nominative') },
    { text: 'كَتَبَ رِسَالَةً', gloss: T('he wrote a message; accusative') },
    { text: 'فِي الْبَيْتِ', gloss: T('in the house; genitive by preposition') },
    { text: 'بَيْتُ اللهِ', gloss: T('the house of God; genitive by iḍāafa') },
    { text: 'كَانَ الْمَلِكُ عَالِمًا', gloss: T('the king was wise; predicate in the accusative') },
    { text: 'مُعَلِّمَاتٍ', gloss: T('teachers; accusative and genitive identical') },
    { text: 'كُتُبٌ', gloss: T('books; broken plural in the nominative') },
    { text: 'أَحْمَدٍ', gloss: T('Ahmad; a diptote in the genitive') },
    { text: 'فِي مَسَاجِدَ', gloss: T('in mosques; a diptote in the accusative, with no final vowel') },
  ],
  tables: [
    {
      caption: T('The three endings'),
      head: [T('Case'), T('Ending'), T('Role'), T('Example')],
      rows: [
        [T('nominative'), 'ـُ', T('subject'), 'كِتَابٌ'],
        [T('accusative'), 'ـَ', T('direct object, predicate'), 'كِتَابًا'],
        [T('genitive'), 'ـِ', T('after a preposition or an iḍāafa'), 'كِتَابٍ'],
      ],
    },
    {
      caption: T('What decides the case'),
      head: [T('Role of the noun'), T('Case'), T('Example')],
      rows: [
        [T('subject of the verb'), T('nominative'), 'جَاءَ الرَّجُلُ'],
        [T('object of a transitive verb'), T('accusative'), 'كَتَبَ رِسَالَةً'],
        [T('after a preposition'), T('genitive'), 'فِي الْبَيْتِ'],
        [T('second element of an iḍāafa'), T('genitive'), 'بَيْتُ اللهِ'],
        [T('predicate after {كَانَ}'), T('accusative'), 'عَالِمًا'],
      ],
    },
    {
      caption: T('Where the case hides'),
      head: [T('Type'), T('Nominative'), T('Accusative'), T('Genitive')],
      rows: [
        [T('regular feminine'), 'مُعَلِّمَاتٌ', 'مُعَلِّمَاتٍ', 'مُعَلِّمَاتِ'],
        [T('regular masculine'), 'مُعَلِّمُونَ', 'مُعَلِّمِينَ', 'مُعَلِّمِينَ'],
        [T('broken plural'), 'كُتُبٌ', 'كُتُبًا', 'كُتُبٍ'],
        [T('diptote'), 'أَحْمَدٌ', 'أَحْمَدًا', 'أَحْمَدٍ'],
      ],
    },
  ],
};
