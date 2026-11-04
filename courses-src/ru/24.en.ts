import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Participles and gerunds'),
  subtitle: T('говорящий, сказанный — говоря'),
  section: T('The verb: prefixes and derived forms'),
  body: C(
    'A Russian participle combines verbal and adjectival features. A present active participle ends in -ый/-ий: говорящий, “speaking”; верующий, “believing”. A past active participle ends in -вший/-ший: сказавший. Passive participles are normally formed from transitive verbs: present -емый/-имый, as in любимый, and past -мый/-нный/-тый, as in сказанный and написанный. “Present passive” refers to a relation to the present, not necessarily current time. Participles decline when adjectival, and the short form is common in predicative biblical style: Благословен грядущий. A деепричастие, often called gerund, is normally invariant: читая, “while reading”. Its subject is normally the subject of the main clause. It is not a perfective counterpart of the infinitive. In Приходите ко Мне, труждающиеся is a participle, not a gerund.',
  ),
  vocab: [
    V('говорящий', 'говорить', 'speaking'),
    V('верующий', 'верить', 'believer'),
    V('сказанный', 'сказать', 'said'),
    V('благословен', 'благословить', 'blessed'),
    V('говоря', 'говорить', 'while speaking'),
    V('читая', 'читать', 'while reading'),
    V('написанный', 'написать', 'written'),
    V('грядущий', 'идти', 'coming'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete Mt 21:9: Благословен ___'), answer: 'грядущий' },
  exercises: [
    { kind: 'fill', prompt: T('Complete the gerund: говор…'), answer: 'я' },
    {
      kind: 'choose',
      prompt: T('Which is a present active participle?'),
      options: [T('говорящий'), T('сказанный'), T('написанный')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Which form of сказанный is short?'),
      options: [T('сказан'), T('сказанный')],
      answer: 0,
    },
  ],
  rules: [{ n: '1', text: T('A {деепричастие} normally shares the subject of the main clause.') }],
  notes: [
    {
      label: T('The participle declines, the gerund does not'),
      text: T(
        "The participle is an adjective that inherited verbal marks: it declines and agrees. The деепричастие is the opposite — an adverb, invariable and uninflected. Confusing the two is the lesson's commonest error.",
      ),
    },
  ],
  examples: [
    { text: 'Благословен грядущий', gloss: T('Blessed is he who comes') },
    { text: 'Он говорил, читая текст', gloss: T('He spoke while reading the text') },
  ],
  tables: [
    {
      caption: T('Participle formation'),
      head: ['Tipo', 'Terminação típica', 'Exemplo'],
      rows: [
        ['Presente ativo', '-ый/-ий', 'говорящий'],
        ['Passado ativo', '-вший/-ший', 'сказавший'],
        ['Presente passivo', '-емый/-имый', 'любимый'],
        ['Passado passivo', '-мый/-нный/-тый', 'написанный'],
      ],
    },
  ],
};
