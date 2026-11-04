import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('The article and gender'),
  subtitle: T('ال: the sun and the moon'),
  section: T('The noun'),
  body: C(`## The definite article

The article {ال} — the equivalent of the Portuguese "o" — marks definiteness: {الكِتَاب} is "the book", the book already known. It joins the noun and may assimilate its initial consonant: after {ال} a {د} becomes {ذ}, a {ت} becomes {ط}, and a {ر} or {ز} take {ش}. Compare {الْمَلِك} and {الْمَلِكَة}: the change of theme plus {ة} is the other mechanism, gender.

## Gender

Gender is not free: {الْمَلِك} is masculine and {الْمَلِكَة} feminine, {ابْن} and {ابْنَة} likewise. The feminine is usually formed with {ة}, the masculine plural with {ونَ} ({مُؤْمِنُونَ}) against the feminine {ات} ({كَلِمَات}). Gender governs the agreement of every adjective and participle, so getting gender wrong breaks the whole clause, not just one word.

## Singular, plural and counting

The noun always appears in definite form. The plural {كَلِمَات} is commoner than the dual, which Arabic treats as its own category: {كَلِمَتَانِ} means "two words" and is the plural furthest from the singular.

## Reading criterion

Whenever you meet {ال} in a verse, ask whether it is the article or part of the root. In {الله} and {الْحَيَاة} it is stuck to the word; separating article from root changes the sense.`),
  vocab: [
    V('الكِتَاب', 'كتاب', 'the book'),
    V('النُّور', 'نور', 'the light'),
    V('الشَّمْس', 'شمس', 'the sun'),
    V('القَمَر', 'قمر', 'the moon'),
    V('الْمَلِك', 'ملك', 'the king'),
    V('الْمَلِكَة', 'ملكة', 'the queen'),
    V('ابْن', 'ابن', 'son'),
    V('ابْنَة', 'ابنة', 'daughter'),
    V('كَلِمَة', 'كلمة', 'word'),
    V('كَلِمَات', 'كلمة', 'words'),
    V('مُؤْمِن', 'مؤمن', 'believer'),
    V('مُؤْمِنُونَ', 'مؤمن', 'believers'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is {الشَّمْس} pronounced?'),
    options: [T('al-shams'), T('ash-shams'), T('shams-al'), T('a-shams without the article')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match noun and gender.'),
      pairs: [
        { a: T('king'), b: T('masc.') },
        { a: T('queen'), b: T('fem.') },
        { a: T('daughter'), b: T('fem.') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Plural of {كَلِمَة}.'),
      answer: 'كَلِمَات',
      hint: T('Use the -{ات} plural.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word begins with a sun letter?'),
      options: [T('the moon'), T('the sun'), T('the book'), T('life')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('The definite article is {ال}: {كِتَاب} → {الكِتَاب}.') },
    { n: '2', text: T('After a sun letter, pronounce {ال} as a- and omit {ل}.') },
    {
      n: '3',
      text: T('Lexical feminine commonly ends in {ـة}; the regular {ـات} plural is a strong clue.'),
    },
  ],
  notes: [
    {
      label: T('Careful'),
      text: T(
        'Assimilation is phonetic, not orthographic: the initial lām remains written but is not heard.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('aš-šams — the sun') },
    { text: 'القَمَر', gloss: T('al-qamar — the moon') },
    { text: 'كَلِمَات', gloss: T('kalimāt — words') },
  ],
  tables: [
    {
      caption: T('Sun and moon letters'),
      head: [T('Type'), T('Letters'), T('Initial pronunciation')],
      rows: [
        ['solares', 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن', 'aš-šams: no se oye l'],
        ['lunares', 'remaining connected letters', 'al-qamar: se oye l'],
      ],
    },
    {
      caption: T('Gender and plural'),
      head: [T('Category'), T('Singular'), T('Plural')],
      rows: [
        ['masculino', 'مَلِك m.', 'مُلُوك'],
        ['feminino -ة', 'مَلِكَة', 'مَلِكَات'],
        ['masculino humano regular', 'مُؤْمِن', 'مُؤْمِنُونَ'],
        ['feminino -ة', 'سَمَاء', 'سَمَاوَات'],
      ],
    },
  ],
};
