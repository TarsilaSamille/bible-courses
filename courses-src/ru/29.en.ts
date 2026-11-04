import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Reading: John 1:1-5, 14'),
  subtitle: T('В начале было Слово'),
  section: T('Reading'),
  body: C(
    'Read the passage in blocks and observe agreement, case and lexical families. В начале: в + prepositional; начало changes to начале. Слово is neuter, so the past neuter было agrees: “the Word was”. У Бога: у + genitive expresses location near God, “with God”. In verse 1, было Бог equates the Word with God grammatically; the capitalized Слово is the divine title. Verse 4, в Нём: в + prepositional and the pronoun takes its softened form. Свет and тьма are nominative subjects. Verse 5, светит is imperfective, describing light that shines in darkness. Verse 14, стало agrees with neuter Слово; плотию is an archaic instrumental in -ию, “as flesh”. The segment исполненного благодати и истины is genitive after the participle and is a fixed biblical phrase. Read aloud; punctuation is editorial.',
  ),
  vocab: [
    V('было', 'быть', 'was'),
    V('стало', 'стать', 'became'),
    V('свет', 'свет', 'light'),
    V('тьма', 'тьма', 'darkness'),
    V('плотию', 'плоть', 'flesh (archaic instrumental)'),
    V('благодать', 'благодать', 'grace'),
    V('истина', 'истина', 'truth'),
    V('светит', 'светить', 'shines'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why is it было and not был?'),
    options: [T('It is plural'), T('It agrees with neuter Слово'), T('It is future')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('In у Бога, which case occurs?'), answer: 'genitivo' },
    {
      kind: 'choose',
      prompt: T('Which form means “as flesh”?'),
      options: [T('плотию'), T('плоти'), T('плоть')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('Complete: Слово ___ Бог'), answer: 'было' },
  ],
  rules: [{ n: '1', text: T('A past verb agrees with its subject in gender and number.') }],
  notes: [
    {
      label: T('Translation'),
      text: T('John 1:14 shows плотию in -ию; this is not a regular feminine noun form.'),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T(
        'In the beginning was the Word — {ἐν} with the genitive ({ἀρχῇ}); {ἦν} imperfect, marking state; {ὁ λόγος} is the nominative subject.',
      ),
    },
    {
      text: 'ὁ λόγος ἦν πρὸς τὸν θεόν',
      gloss: T(
        'the Word was with God — {πρὸς} with the accusative: a preposition that in Greek governs the accusative and marks relation, not motion alone.',
      ),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T(
        'and the Word was God — {θεὸς} in the accusative: predicative, not subject. The article repeats the noun, the verb repeats the tense.',
      ),
    },
    {
      text: 'ἐν αὐτῷ ζωὴ ἦν',
      gloss: T(
        'in him was life — {ζωὴ} nominative and {ἦν} again: the verb did not change tense when the subject changed.',
      ),
    },
    {
      text: 'καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν',
      gloss: T(
        'and the darkness did not receive it — {οὐ} with the main verb (negation of fact) and {κατέλαβεν} aorist: a bounded action against {ἦν}.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Analysis of John 1:1 and 14'),
      head: ['Forma', 'Categoría', 'Valor'],
      rows: [
        ['В начале', 'в + prepositivo', 'en el principio'],
        ['было', 'passado neutro sg.', 'era'],
        ['у Бога', 'у + genitivo', 'junto a Dios'],
        ['стало', 'passado neutro sg.', 'se hizo'],
        ['плотию', 'instrumental arcaico', 'como carne'],
      ],
    },
  ],
};
