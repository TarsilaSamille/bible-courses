import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('The definite article and its three forms'),
  subtitle: T('الشَّمْس، الْقَمَر، ٱلْعَالَمِينَ'),
  section: T('Alphabets and writing'),
  body: C(`## What the article does

{ال} is a definiteness morpheme: it turns an ordinary noun into a determined one. {قَمَر} is one moon among others, and {الْقَمَر} is the moon the listener already has in mind, or the one the text has made unique. Portuguese has no equivalent, because its article marks a class and not an identity.

That is the idea. The rest is about the three shapes this morpheme takes on the page, and there are three because the sound of the article adapts to the letter that follows.

## Before a sun letter the lām is written and silent

The twenty-eight consonants split into two classes of fourteen. The fourteen sun letters are {ت ث د ذ ر ز س ش ص ض ط ظ ن ه}; the fourteen moon letters are {ا ب ج ح خ ع غ ف ق ك ل م و ي}. Before a moon letter the article is pronounced whole. Before a sun letter the lām is absorbed: **the {ل} stays written and silent, and the sun letter shows up doubled**.

Anyone learning to read has here the most reliable clue in the language. {الشَّمْس} is the only noun in the text where the article does not sound like an article, and the shadda points at exactly the spot where the sound was swallowed.

## The third shape, and the two places it appears

The alif of the article has two engravings. In the ordinary shape it is a plain {ا} with nothing above it, as in {الْقَمَر}. In the shape the textual tradition of the Qurʾān uses, it is the {ٱ}, an alif carrying a sign above it that sets it apart from a word beginning with an alif-hamza. It appears in two places and only two: when the article opens the sentence, and when the word sits in an iḍāafa with a proper noun or with the name of God.

{ٱلْعَالَمِينَ} is the example that shows both at once. The word has an iḍāafa, {ٱلْعَامِ: عَالَمِينَ}, the second element is a proper noun, and even so the plural took the article back. A translator who renders {وَمَنْ يُؤْمِنْ بِٱللَّهِ} as "and whoever believes in God" has understood what happens inside the word, even without knowing the rule.

## When the article disappears

The exception is larger than it looks, and it deserves the room.

In an iḍāafa the second element loses the article: {كِتَابُ الْمُعَلِّمِ}, the book of the teacher, and not {كِتَابُ الْمُعَلِّمُ}. An article on both sides is not an iḍāafa at all but two unconnected constructions.

Then there are the cases where the article is left out by rule and not by construction. Proper nouns do not normally take it: {مَكَّة} and {مَدْيَنَ} are places, {مُحَمَّد} and {عِيسَى} are people. An indefinite noun under a preposition does not take it either: {فِي بَيْتِ} and {فِي الْبَيْتِ} are two different sentences, and the second adds what the text knows and the first does not.

Finally the name of God is a mixture of rules: {الله} is written with a plain {ا} instead of {ٱ}, because it is a proper noun, and {أَسْمَاءُهُ} leaves the noun without an article because it is in iḍāafa. Every word has its own rule, and that is why the system resists being taught as one rule.

## Reading criterion

In {أَنْتُمْ نُورُ الْعَالَمِ} both things are happening at once. {نُورُ} has no article because it heads an iḍāafa, {الْعَالَمِ} is genitive because it follows it, and the {ع} of the article is a moon letter, so the article is pronounced whole. A seven-word sentence carries two constructions and a case, and a reader who only reads the noun loses all three.`),
  vocab: [
    V('ال', 'ال', 'the definite article'),
    V('ٱل', 'ٱل', 'the article with the alif of wasla'),
    V('الشَّمْس', 'شمس', 'the sun; the article here is silent'),
    V('الْقَمَر', 'قمر', 'the moon; the article sounds whole'),
    V('ٱلْعَالَمِينَ', 'عالم', 'of the world; article in the plural of an iḍāafa'),
    V('السَّمَاوَات', 'سماوات', 'the heavens'),
    V('نُور', 'نور', 'light'),
    V('الْعَالَم', 'عالم', 'the world; in an iḍāafa'),
    V('كِتَاب', 'كتاب', 'book'),
    V('الْمُعَلِّم', 'معلم', 'the teacher'),
    V('كِتَابُهُ', 'كتاب', 'his book'),
    V('فِي بَيْتِ', 'بيت', 'in a house'),
    V('مَكَّة', 'مكة', 'Mecca'),
    V('الْمَلَكُوت', 'ملكوت', 'the kingdom'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {الشَّمْس}, what happens to the lām of the article?'),
    options: [
      T('It is doubled'),
      T('It is written and silent'),
      T('It becomes a shadda'),
      T('It is dropped'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the moon letter: {ال___رَ}, "the earth".'),
      answer: 'أَ',
      hint: T('The alif is part of the noun for earth itself.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word keeps the article inside an iḍāafa?'),
      options: [T('كِتَابُ الْمُعَلِّمِ'), T('الْمَلَكُوتِ'), T('نُورُ الْعَالَمِ'), T('فِي بَيْتِ')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match class and behaviour.'),
      pairs: [
        { a: T('الشَّمْس'), b: T('sun letter') },
        { a: T('الْقَمَر'), b: T('moon letter') },
        { a: T('ٱلْعَالَمِينَ'), b: T('article with wasla') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('How many letters does each class have?'),
      options: [T('12'), T('13'), T('14'), T('15')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ال} marks definiteness: without it the noun is indefinite, with it it is determined.',
      ),
    },
    {
      n: '2',
      text: T(
        '**Before a sun letter the {ل} is written and silent, and the sun letter is doubled.**',
      ),
    },
    {
      n: '3',
      text: T(
        'There are fourteen sun letters and fourteen moon letters, and together they make the twenty-eight of the alphabet.',
      ),
    },
    {
      n: '4',
      text: T(
        'In an iḍāafa the second element loses the article, but a plural or a proper noun can take it back, as in {ٱلْعَالَمِينَ}.',
      ),
    },
    {
      n: '5',
      text: T('Proper nouns and indefinite nouns under a preposition do not take the article.'),
    },
  ],
  notes: [
    {
      label: T('Why the shadda'),
      text: T(
        'The shadda of a sun letter is the trace of the sound the {ل} lost. It does not belong to the root, so anyone who reads it as root gemination goes looking for a doubled radical that is not there.',
      ),
    },
    {
      label: T('The {ال} of {الله}'),
      text: T(
        'The name of God is the most quoted shape of the article and the most irregular: it is written with a plain {ا}, the second {ل} carries a short alif above it, and the name takes a case ending no other word takes, the {اللهِ} of the genitive.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('the sun; the shadda takes the place of the lām sound') },
    { text: 'الْقَمَر', gloss: T('the moon; the article whole') },
    { text: 'ٱلْعَالَمِينَ', gloss: T('of the world; the article returns on the plural of an iḍāafa') },
    { text: 'أَنْتُمْ نُورُ الْعَالَمِ', gloss: T('you are the light of the world') },
    { text: 'كِتَابُ الْمُعَلِّمِ', gloss: T('the book of the teacher') },
    { text: 'كِتَابُهُ', gloss: T('his book') },
    { text: 'فِي بَيْتِ', gloss: T('in a house; no article') },
    { text: 'مَكَّةَ', gloss: T('Mecca; a proper noun with no article') },
    { text: 'الْمَلَكُوت', gloss: T('the kingdom; article before a moon letter') },
  ],
  tables: [
    {
      caption: T('The three shapes of the article in writing'),
      head: [T('Context'), T('Written'), T('What is heard'), T('Example')],
      rows: [
        [T('moon letter'), 'الـ', T('the lām and the alif sound'), 'الْقَمَر'],
        [
          T('sun letter'),
          T('الـ with the lām written and silent'),
          T('only the sound of the sun letter, doubled'),
          'الشَّمْس',
        ],
        [T('Uthmānī shape'), 'ٱلـ', T('the alif of wasla, with no sound of its own'), 'ٱلْعَالَمِينَ'],
        [
          T('second element of an iḍāafa'),
          T('no article'),
          T('both elements sound whole'),
          'كِتَابُ الْمُعَلِّمِ',
        ],
      ],
    },
    {
      caption: T('The two classes of letter'),
      head: [T('Class'), T('Letters'), T('Behaviour'), T('Example')],
      rows: [
        [
          T('sun'),
          'ت ث د ذ ر ز س ش ص ض ط ظ ن ه',
          T('the lām is absorbed and the sun letter doubles'),
          'الشَّمْس',
        ],
        [T('moon'), 'ا ب ج ح خ ع غ ف ق ك ل م و ي', T('the article is pronounced whole'), 'الْقَمَر'],
      ],
    },
    {
      caption: T('Where the article disappears'),
      head: [T('Situation'), T('What happens'), T('Example')],
      rows: [
        [T('iḍāafa'), T('the second element loses the article'), 'كِتَابُ الْمُعَلِّمِ'],
        [T('noun under a preposition'), T('no article when it is indefinite'), 'فِي بَيْتِ'],
        [T('proper noun'), T('does not take the article'), 'مَكَّة'],
        [T('iḍāafa with a proper noun'), T('the plural takes the article back'), 'ٱلْعَالَمِينَ'],
      ],
    },
  ],
};
