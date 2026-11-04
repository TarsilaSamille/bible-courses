import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Future and perfect'),
  subtitle: T('θα μιλήσω — έχω μιλήσει'),
  section: T('The verb'),
  body: C(`## θa is a particle, not a form

θa + verb in the present: θα μιλήσω. Modern Greek has no future verb form — Koine built the future with σ- on the aorist (λύσω), and modern Greek kept the particle θα and dropped the inflection. That is why θα μιλήσω and μιλάω look alike: same information, different cost.

The same θα also gives possibility: "I may speak", "she may come". This is where ambiguity shows up in translation — θα έρθει can be "he will come" or "he may come", and the translator has to choose by context.

## The perfect is analytic

The perfect is έχω + participle: έχω μιλήσει. All the conjugation comes from the auxiliary, which makes it easy — έχω, είχα, είχε, είχαμε, είχατε, είχαν. Compare:

**Το είπα** — "I said" (aorist, a result)
**Το έχω ειπεί** — "I have said" (perfect, a resulting state)

Careful-style negation is **δεν έχω** (δέν έχω), not μην έχω — μην belongs to the subjunctive and the imperative, not to the indicative. Writing έχω with μην sounds wrong even though speech produces it.

## Reading criterion

θα before a verb marks future or possibility. έχω + participle marks a resulting state, not a time: the speaker says "I have spoken" thinking of the effect, not the moment.`),
  vocab: [
    V('θα μιλήσω', 'μιλώ', 'I will speak'),
    V('θα έρθει', 'έρχομαι', 'he will come'),
    V('έχω μιλήσει', 'μιλώ', 'I have spoken'),
    V('έχεις δει', 'βλέπω', 'you have seen'),
    V('είχα φύγει', 'φεύγω', 'I had left'),
    V('θα έχω τελειώσει', 'τελειώνω', 'I will have finished'),
    V('θα έχει', 'έχω', 'will have'),
    V('δεν έχω', 'έχω', 'I do not have'),
    V('μιλήσει', 'μιλώ', 'to have spoken (participle)'),
    V('έχει', 'έχω', 'has (will have)'),
    V('είχα', 'έχω', 'I had'),
    V('τέλος', 'τέλος', 'end, finish'),
    V('τελειώσει', 'τελειώνω', 'to have finished (participle)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('I have spoken'),
    answer: 'έχω',
    hint: T('Write no word here'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('“I have seen”'),
      options: [T('έχω δει'), T('είδα'), T('θα δω'), T('είχα δει')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('he has not come'),
      answer: 'έχει',
      hint: T('μην έχει is very formal'),
    },
    {
      kind: 'match',
      prompt: T('Match structure'),
      pairs: [
        { a: 'θα πω', b: T('future') },
        { a: 'είχα πει', b: T('pluperfect') },
        { a: 'έχω πει', b: T('perfect') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('θα does not combine with να.') }],
  notes: [
    {
      label: T('Caution'),
      text: T('Do not confuse έχω “have” with the perfect tense; the result is absent.'),
    },
  ],
  examples: [{ text: 'έχω ήδη τελειώσει', gloss: T('I have already finished') }],
  tables: [
    {
      caption: T('Perfect'),
      head: ['Tiempo', 'Estructura'],
      rows: [
        ['presente', 'έχω μιλήσει'],
        ['pasado', 'είχα μιλήσει'],
        ['futuro', 'θα έχω μιλήσει'],
      ],
    },
  ],
};
