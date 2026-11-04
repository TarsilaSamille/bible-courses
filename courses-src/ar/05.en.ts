import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Reading: John 1:1–5'),
  subtitle: T('فِي الْبَدْءِ كَانَ الْكَلِمَةُ'),
  section: T('Readings'),
  body: C(`## The passage in blocks

John 1:1-5 has four short clauses. In {فِي الْبَدْءِ} the preposition {فِي} governs the genitive, visible in the ending {الْبَدْءِ}; the noun is thus in the governed case, not the nominative. In {كَانَ الْكَلِمَةُ} the verb {كَانَ} expresses state, and {الْكَلِمَةُ} is the nominative subject.

## Predicative and apposition

In {وَالْكَلِمَةُ كَانَتْ عِنْدَ اللهِ} the subject is {الْكَلِمَةُ}. In verse 1, where the text says the Word *was* God, {اللهَ} is not a subject: it stands in the accusative, as a predicate. That is the mark of a verse that does not fit a plain grammatical reading. In {نُورَ النَّاسِ} the same happens: {نُورَ} is predicative and {النَّاسِ} is genitive by apposition.

## Tense and aspect

{كَانَ يُضِيءُ النُّورُ} has the imperfect {يُضِيءُ} describing something continuous. Verse 5, {النُّورُ يُضِيءُ فِي الظُّلْمَةِ}, keeps the light as agent of an action that continues, and {الظُّلْمَة} does not receive it. Note the difference: what received the light would be a direct object, which would need the right case marking.

## Reading criterion

Mark each clause, identify the verb first, then the subject, and only then the remaining terms. Nearly every misreading of John 1 comes from exchanging subject and predicate.`),
  vocab: [
    V('الْبَدْء', 'بدء', 'beginning'),
    V('كَانَ', 'كان', 'was'),
    V('الْكَلِمَة', 'كلمة', 'the Word'),
    V('عِنْدَ', 'عند', 'with; at'),
    V('الله', 'الله', 'God'),
    V('فِيهِ', 'في', 'in him; in it'),
    V('الْحَيَاة', 'حياة', 'the life'),
    V('النَّاس', 'ناس', 'humanity'),
    V('النُّور', 'نور', 'the light'),
    V('يُضِيءُ', 'أضاء', 'shines'),
    V('الظُّلْمَة', 'ظلام', 'the darkness'),
    V('وَ', 'و', 'and'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does {اللهَ} have a final fatha?'),
    options: [
      T('It is the subject'),
      T('It is predicative after كَانَ'),
      T('It is plural'),
      T('By convention'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The noun after {فِي} is genitive: complete “فِي ___”.'),
      answer: 'الْبَدْءِ',
      hint: T('The ending changes to -i.'),
    },
    {
      kind: 'match',
      prompt: T('Match word and meaning.'),
      pairs: [
        { a: T('light'), b: T('light') },
        { a: T('life'), b: T('life') },
        { a: T('darkness'), b: T('darkness') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('In {الْكَلِمَةُ كَانَ اللهَ}, which word is the subject?'),
      options: [T('اللهَ'), T('الْكَلِمَةُ'), T('كان'), T('and')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The noun after {كَانَ} is nominative; its predicate may take the accusative.'),
    },
    {
      n: '2',
      text: T(
        'The final fatha in {اللهَ} marks the accusative here; it is not a separate name form.',
      ),
    },
    { n: '3', text: T('Initial {و} links clauses and may repeat a known element.') },
  ],
  notes: [
    {
      label: T('Transcription'),
      text: T(
        'Long vowels may be unexpressed in unvocalized text; they normally persist in fully vocalized biblical reading.',
      ),
    },
  ],
  examples: [
    { text: 'وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ', gloss: T('and the Word was with God') },
    { text: 'وَالْحَيَاةُ كَانَتْ نُورَ النَّاسِ', gloss: T('and the life was the light of humanity') },
    { text: 'وَالنُّورُ يُضِيءُ فِي الظُّلْمَةِ', gloss: T('and the light shines in the darkness') },
  ],
  tables: [
    {
      caption: T('Syntactic analysis'),
      head: [T('Segment'), T('Function'), T('Portuguese')],
      rows: [
        ['فِي الْبَدْءِ', 'prep. + gen.', 'no princípio'],
        ['كَانَ الْكَلِمَةُ', 'verbo + sujeito', 'a Palavra era'],
        ['عِنْدَ اللهِ', 'prep. + gen.', 'junto a Deus'],
        ['اللهَ', 'predicativo acusativo', 'era Deus'],
      ],
    },
  ],
};
