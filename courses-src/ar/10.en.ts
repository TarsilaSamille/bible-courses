import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Participles and verbal nouns'),
  subtitle: T('كَاتِب، مَكْتُوب، كِتَابَة'),
  section: T('The verb'),
  body: C(`## Three derivatives, three functions

The root {ك-ت-ب} produces nominal forms distinguished by vocalisation rather than by raw sense. {كَاتِب} has a long vowel and is the **active participle**: "whoever writes". {مَكْتُوب} begins with {م} and is the **passive participle**: "what was written". {كِتَابَة} ends in {ة} and is the **verbal noun**: "the writing", with no defined agent or patient.

## Whether a participle describes or names

{kَاتِب} followed by an article and agreement works as a noun: {الكَاتِبُ} is "the scribe". Followed by a noun, it works as an adjective: {كَاتِبٌ عَالِمٌ} is "a learned scribe". The same holds for {مَكْتُوب} in {كَلِمَةٌ مَكْتُوبَةٌ} and for {عِلْمٌ عَمِيقٌ}.

## The tense a participle does not have

A participle has no tense of its own: saying {مَكْتُوب} asserts neither that the writing happened nor that it will. Tense comes from the verb accompanying it, if any. A translation that turns a participle into a past or a future adds something Arabic never said.

## Reading criterion

Identify the vocalisation of the derivative: {ـاتِب} active, {مَـتُوب} passive, {ـتَابَة} verbal noun. Then check for the article: with an article it names, without one it describes. That check settles the translation in 1 Corinthians and the Psalms.`),
  vocab: [
    V('كَاتِب', 'كتب', 'writer'),
    V('مَكْتُوب', 'كتب', 'written'),
    V('كِتَابَة', 'كتب', 'writing'),
    V('عَالِم', 'علم', 'scholar; one who knows'),
    V('حَافِظ', 'حفظ', 'guardian'),
    V('مَحْبُوب', 'حب', 'beloved'),
    V('مُبَارَك', 'بارك', 'blessed'),
    V('إِيمَان', 'آمن', 'faith'),
    V('عِلْم', 'علم', 'knowledge'),
    V('حَمْد', 'حمد', 'praise'),
    V('طُوبَى', 'طوبى', 'blessedness'),
    V('آمَنُوا', 'آمن', 'they believed'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the active participle of {كتب}?'),
    options: [T('written'), T('writer'), T('writing'), T('book')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match form and function.'),
      pairs: [
        { a: T('writer'), b: T('active participle') },
        { a: T('written'), b: T('passive participle') },
        { a: T('writing'), b: T('verbal noun') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete {ال___}: {الْحَمْدُ} means “praise”.'),
      answer: 'حَمْدُ',
      hint: T('It is the verbal noun of praising.'),
    },
    {
      kind: 'choose',
      prompt: T('In {رَحْمَةُ اللهِ}, which word is governed?'),
      options: [T('mercy'), T('God'), T('he had mercy'), T('God accusative')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The active participle indicates present activity; the passive indicates result or resulting state.',
      ),
    },
    {
      n: '2',
      text: T(
        'The verbal noun names the abstract event and can govern an object like its source verb.',
      ),
    },
    { n: '3', text: T('The prefix {لِ} turns “mercy” into “to have mercy”.') },
  ],
  notes: [
    {
      label: T('Note'),
      text: T(
        'Not every verbal noun belongs rigidly to one form; teaching labels simplify the system.',
      ),
    },
  ],
  examples: [
    { text: 'كَاتِبٌ جَدِيدٌ', gloss: T('a new writer') },
    { text: 'كِتَابَةٌ مُبْدَعَةٌ', gloss: T('creative writing') },
    { text: 'الْحَمْدُ لِلَّهِ', gloss: T('praise belongs to God') },
  ],
  tables: [
    {
      caption: T('Derivatives of كتب'),
      head: [T('Category'), T('Pattern'), T('Result')],
      rows: [
        ['particípio ativo', 'فَاعِل', 'كَاتِب: quem escreve'],
        ['particípio passivo', 'مَفْعُول', 'مَكْتُوب: que foi escrito'],
        ['nome verbal', 'مَفْعَالَة / مَفْعِل', 'كِتَابَة: ato de escrever'],
        ['nome verbal', 'فِعْلَة', 'صَلَاة: oração'],
      ],
    },
  ],
};
