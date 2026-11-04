import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Comparatives and superlatives'),
  subtitle: T('πιο καλός — ο πιο καλός'),
  section: T('The verb'),
  body: C(`## Comparative: πιο + adjective, with no inflection

Modern Greek forms the comparative in one way only: πιο plus the adjective, uninflected. πιο καλός "better", πιο ακριβός "more expensive". Compare Portuguese, which inflects: bom, melhor, o melhor — Greek saves that work.

Comparison with another person or thing uses από, not que: πιο καλός από εσένα "better than you". And when the second term is a person the pronoun takes the article: από εσένα, από εμένα, not από εγώ.

## Superlative: the article comes in

The superlative is πιο plus the adjective, but with the definite article: ο πιο καλός "the best", η πιο καλή "the best", το πιο μικρό "the smallest". The article is what marks the superlative; without it πιο καλός is only a comparative.

And ο πιο καλός "the best" differs from ο καλύτερος (the best of a group). If the sentence does not say of whom, Greek still uses the article — the comparison comes from the context, not from the noun.

## Equality and difference

τόσο… όσο is the equality construction: τόσο μεγάλο όσο το σπίτι "as big as the house". The same form on both sides, and the verb is usually copied from the second: είναι τόσο… όσο.

For less: λιγότερο, μικρότερος, πιο μικρό. For quantity: λιγότερο από εμένα "less than I". For the absolute superlative, with no term of comparison, Greek uses πιο plus the adjective or the suffix -τατος: ο πιο καλύτερος, ο καλύτερος.

## The old forms survive, but they are not the pattern

καλύτερος, μεγαλύτερος, χειρότερος live on in elevated registers and fixed expressions. The productive pattern of modern Greek is πιο plus the adjective, and the old aorist is dead as a rule. Translating the New Testament with καλύτερος gets the form right and the ear wrong: it sounds like Portuguese, not like spoken Greek.

## Reading criterion

Whenever you see πιο, decide first whether there is an article: with an article it is a superlative, without one a comparative. And when old Greek shows up (μεγαλύτερος), understand it, but do not reproduce it in a current translation.`),
  vocab: [
    V('πιο', 'πιο', 'more'),
    V('πιο καλός', 'καλός', 'better'),
    V('ο πιο καλός', 'καλός', 'the best'),
    V('από', 'από', 'than'),
    V('τόσο', 'τόσο', 'so'),
    V('όσο', 'όσο', 'as; as much as'),
    V('λιγότερο', 'λίγο', 'less'),
    V('καλύτερος', 'καλός', 'better (elevated)'),
    V('μεγαλύτερος', 'μεγάλος', 'greater (elevated)'),
    V('ακριβός', 'ακριβός', 'expensive'),
    V('μικρός', 'μικρός', 'small'),
    V('μικρότερος', 'μικρός', 'smaller'),
    V('σπίτι', 'σπίτι', 'house'),
    V('εσένα', 'εσύ', 'you (acc.)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('better than me'),
    answer: 'πιο',
    hint: T('The word “more”'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which is the superlative?'),
      options: [T('πιο καλός'), T('ο πιο καλός'), T('από μένα'), T('τόσο καλός')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('as good as my friend'),
      answer: 'όσο',
      hint: T('Second part of equality'),
    },
    {
      kind: 'match',
      prompt: T('Match structure'),
      pairs: [
        { a: 'πιο', b: T('more') },
        { a: 'τόσο', b: T('degree') },
        { a: 'όσο', b: T('comparison') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('πιο does not change for gender or number.') }],
  notes: [
    {
      label: T('Caution'),
      text: T(
        'από εμένα can mean “from me” as origin or agent; in quantity comparison it also means “than I”.',
      ),
    },
  ],
  examples: [
    { text: 'η Αθήνα είναι πιο μεγάλη από την Τρίβα', gloss: T('Athens is larger than Tripoli') },
  ],
  tables: [
    {
      caption: T('Degrees'),
      head: ['Grado', 'Estructura'],
      rows: [
        ['comparativo', 'πιο + adjetivo'],
        ['superlativo', 'artículo + πιο + adjetivo'],
        ['igualdad', 'τόσο + adj. + όσο'],
      ],
    },
  ],
};
