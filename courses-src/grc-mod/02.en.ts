import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Nouns and plurals'),
  subtitle: T('ο άνθρωπος — οι άνθρωποι'),
  section: T('The noun'),
  body: C(`Greek nouns retain gender but have lost the ancient declension: nominative and accusative end alike. The plural depends mainly on the final syllable.

Masculines in -ος normally form -οι: άνθρωπος → άνθρωποι. Feminines ending in -α, -η or -η/-ια form -ες: γυναίκα → γυναίκες, ώρα → ώρες. Neuter -ί, -ος, -ός, -υς nouns and some consonant-final nouns form -ια: παιδί → παιδιά, βιβλίο → βιβλία.

There are exceptions: το δίχτυ → τα δίχτυα, το χρώμα → τα χρώματα, το μέρος → τα μέρη. The article always agrees.

The vocative is formal and occurs chiefly in literary or religious texts: Κύριε, Πατέρ. In everyday use the nominative is used: Θεός μου. The contrast with the ancient vocative is clear: Κύριος is the nominative; κύριος the ancient vocative; Κύριε the modern and liturgically preserved vocative.`),
  vocab: [
    V('άνθρωπος', 'άνθρωπος', 'man; person'),
    V('άνθρωποι', 'άνθρωπος', 'men; people'),
    V('γυναίκα', 'γυναίκα', 'woman'),
    V('γυναίκες', 'γυναίκα', 'women'),
    V('παιδί', 'παιδί', 'child'),
    V('παιδιά', 'παιδί', 'children'),
    V('βιβλίο', 'βιβλίο', 'book'),
    V('βιβλία', 'βιβλίο', 'books'),
    V('ζωή', 'ζωή', 'life'),
    V('θάνατος', 'θάνατος', 'death'),
    V('μητέρα', 'μητέρα', 'mother'),
    V('ώρα', 'ώρα', 'hour'),
    V('Κύριε', 'Κύριος', 'Lord (vocative)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Plural of το βιβλίο'),
    answer: 'τα βιβλία',
    hint: T('Neuter plural article + -ια'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which is the plural of η γυναίκα?'),
      options: [T('οι γυναίκα'), T('οι γυναίκες'), T('τα γυναίκες'), T('οι γυναίκια')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: ο άνθρωπος — ___ άνθρωποι'),
      answer: 'οι',
      hint: T('Masculine plural article'),
    },
    {
      kind: 'choose',
      prompt: T('How does ο Κύριος normally appear when addressing someone?'),
      options: [T('κύριος'), T('Κύριε'), T('Κύριον'), T('Κυρίων')],
      answer: 1,
    },
  ],
  rules: [
    { n: '§1', text: T('Nominative and accusative are identical in the noun.') },
    { n: '§2', text: T('Learn the plural with its corresponding article.') },
  ],
  notes: [
    {
      label: T('Caution'),
      text: T('Ending alone does not determine gender: τα λεφτά, τα παντελόνια and τα παγωτά.'),
    },
  ],
  examples: [
    { text: 'η μητέρα μου', gloss: T('my mother') },
    { text: 'τα παιδιά παίζουν', gloss: T('the children are playing') },
  ],
  tables: [
    {
      caption: T('Usual plurals'),
      head: ['Tipo', 'Singular', 'Plural'],
      rows: [
        ['masc. -ος', 'ο άνθρωπος', 'οι άνθρωποι'],
        ['fem. -α', 'η γυναίκα', 'οι γυναίκες'],
        ['neut. -ί', 'το παιδί', 'τα παιδιά'],
        ['neut. -ο', 'το βιβλίο', 'τα βιβλία'],
      ],
    },
  ],
};
