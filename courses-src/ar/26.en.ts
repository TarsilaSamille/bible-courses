import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('أن، إن، أنَّ and the particle of negation'),
  subtitle: T('أَنْ، إِنْ، إِنَّ، لا، لَمْ، لَنْ'),
  section: T('Particles'),
  body: C(`## Two particles that are confused at first sight

{أَنْ} and {إِنْ} are the two particles that sit on the boundary of the verb, and they get confused at first sight because they look alike, occupy the same place and ask for the same thing: a verb in the subjunctive.

The difference is sense. {أَنْ} presents a fact as the content of another fact: {أَنْ يَأْتِيَ الرَّجُلُ} is "that the man come", and the main fact is elsewhere. {إِنْ} presents a condition: {إِنْ جَاءَ الرَّجُلُ} is "if the man come". One is subordination, the other is hypothesis.

Now the shadda, which settles the rest. **A shadda over the {ن} turns both into particles of emphasis**: {إِنَّ} is "indeed", and {أَنَّ} is "indeed that". {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} is not a condition, it is a reinforced assertion. And {أَنَّهُ صَدِيقٌ} is not a hypothesis, it is a certainty about what is known of the subject.

## {لا} does two jobs

The negating particle is one, and what changes is the mood of the verb that follows. **Prohibition is {لا} plus a verb in the jussive; negation of the present is {لا} plus a verb in the indicative.** {لا تَقْتَلُوا} is "do not kill", and the final vowel of the verb has dropped: that is the jussive. {لا يَقْتُلُ} is "he does not kill", and the vowel is there: that is the indicative.

The negative past has shapes of its own, and there are three. {لَمْ} plus a verb is the commonest: {لَمْ يَكُنْ} is "he was not". {لَمَّا} plus a verb is the same sense with the focus on the moment: {لَمَّا جَاءَ}. {مَا} plus a verb is negation with no reference to time: {مَا كَانَ}, "it was not".

The negative future is {لَنْ}: {لَنْ يَهْلِكَ} is "he shall not perish". And {لَنْ} with a verb in the jussive is "I do not want": {لَنْ أَسْمَحَ} opens a clause of refusal.

## The ones that open and close the clause

After those come the connectors, and they form a small fixed set, which makes them the easiest thing in the course to memorise.

{إِذْ} is "when" and also "if", and in the second sense it takes the jussive: {إِذَا جَاءَ} is "if he comes", with {إِذَا} instead of {إِنْ}. {لَمَّا} is "when" with a sense of beginning. {فَ} is "then" or "so", and it is the commonest particle in biblical text after {وَ}. {أَمْ} is the alternative: {أَمْ حُمْرٌ أَمْ بَيْضَ}. {لَكِنْ} is "but". {إِنَّمَا} is "only", and it denies what follows the verb: {إِنَّمَا بِالْحَقِّ}.

And there are two particles Portuguese has no single word for. {يَا} is the vocative, and it precedes a proper noun or a noun in order to call someone: {يَا دَاوُدُ}. {مَا} with a noun is the restrictive particle, and it means "that which", opposite to {مَا} with a verb: {مَا فَوْقَكُمْ}.

## Reading criterion

The shortest symptom is the shadda. An {إِنّ} with a {ّ} is never a condition, it is emphasis, and "indeed" or "in fact" always fits where it appears. In {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} the particle alone carries the sense of the whole clause, and anyone who reads {إِنْ} without the shadda translates "if God is with the patient", which is the opposite of what the author wrote.

The second symptom is the ending of the verb. When the negation is {لَمْ}, the verb is in the jussive, and the dropped final vowel is what separates {لَمْ يَكُنْ} from {لَمْ يَكُونَ}. When the negation is {لَنْ}, the verb is in the subjunctive, and the ending of the pronoun is what says who the negation lands on.`),
  vocab: [
    V('أَنْ', 'أن', 'that; subordinate conjunction'),
    V('إِنْ', 'إن', 'if'),
    V('إِنَّ', 'إن', 'indeed; with the shadda'),
    V('أَنَّ', 'أن', 'that; with the shadda'),
    V('كَأَنَّ', 'أن', 'as if'),
    V('لا', 'لا', 'not; never'),
    V('لَمْ', 'لم', 'not; the negative perfect'),
    V('لَنْ', 'لن', 'not; the negative future'),
    V('مَا', 'ما', 'not; restrictive particle'),
    V('إِذَا', 'إذا', 'if; when'),
    V('إِذْ', 'إذ', 'when'),
    V('فَ', 'ف', 'then; so'),
    V('أَمْ', 'أم', 'or'),
    V('لَكِنْ', 'لكن', 'but'),
    V('ثُمَّ', 'ثم', 'then; afterwards'),
    V('الصَّابِرُونَ', 'صبر', 'the patient ones'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the difference between {إِنْ} and {إِنَّ}?'),
    options: [
      T('None'),
      T('The shadda: {إِنَّ} is emphasis'),
      T('The shadda: {إِنْ} is emphasis'),
      T('The vowel of the verb'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the prohibition: "do not kill" is {لا ___}.'),
      answer: 'تَقْتَلُوا',
      hint: T('The verb is in the jussive, with no final vowel.'),
    },
    {
      kind: 'match',
      prompt: T('Match particle and use.'),
      pairs: [
        { a: T('لَمْ'), b: T('negation of the past') },
        { a: T('لَنْ'), b: T('negation of the future') },
        { a: T('مَا'), b: T('negation with no time') },
        { a: T('إِنَّمَا'), b: T('only') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {لا يَقْتُلُ}, the verb is in the...'),
      options: [
        T('jussive, with prohibition'),
        T('indicative, with negation'),
        T('subjunctive, with hypothesis'),
        T('imperfect, with no negation'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Which particle is the vocative?'),
      options: [T('أَمْ'), T('لَكِنْ'), T('يَا'), T('ثُمَّ')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**{أَنْ} and {إِنْ} both require the subjunctive, and the shadda turns them into emphasis: {إِنَّ} and {أَنَّ}.**',
      ),
    },
    {
      n: '2',
      text: T(
        '{إِنْ} is a condition and {إِنَّ} is a reinforced assertion; the text decides which, not the reader.',
      ),
    },
    {
      n: '3',
      text: T('{لا} plus the jussive prohibits; {لا} plus the indicative negates the present.'),
    },
    {
      n: '4',
      text: T(
        'The negative past has three shapes, {لَمْ}, {لَمَّا} and {مَا}, and {لَنْ} is the negative future.',
      ),
    },
    {
      n: '5',
      text: T('An initial {لَـ} prohibits, and an initial {لَا} after a question means "why not?".'),
    },
  ],
  notes: [
    {
      label: T('The jussive that only shows up by its absence'),
      text: T(
        'The difference between {لا تَقْتَلُوا} and {لا يَقْتُلُ} is in the ending: in the jussive the final vowel drops. An ancient text does not always write that drop, which is why {لا تَقْتُلُ} turns up written without it.',
      ),
    },
    {
      label: T('Why the subjunctive is compulsory'),
      text: T(
        'After {إِنْ} and {أَنْ} the verb cannot be in the indicative, because the clause does not assert that the event happens: it presents it as possible. Portuguese does the same with the subjunctive, but without a particle.',
      ),
    },
  ],
  examples: [
    { text: 'أَنْ يَأْتِيَ الرَّجُلُ', gloss: T('that the man come') },
    { text: 'إِنْ جَاءَ الرَّجُلُ', gloss: T('if the man come') },
    { text: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', gloss: T('indeed God is with the patient') },
    { text: 'أَنَّهُ صَدِيقٌ', gloss: T('that he is faithful') },
    { text: 'لا تَقْتَلُوا', gloss: T('do not kill; prohibition') },
    { text: 'لا يَقْتُلُ', gloss: T('he does not kill; negation of the present') },
    { text: 'لَمْ يَكُنْ', gloss: T('he was not') },
    { text: 'لَنْ يَهْلِكَ', gloss: T('he shall not perish') },
    { text: 'مَا كَانَ', gloss: T('it was not') },
  ],
  tables: [
    {
      caption: T('{أَنْ}, {إِنْ} and their emphatic forms'),
      head: [T('Particle'), T('Function'), T('Verb mood'), T('Example')],
      rows: [
        [T('أَنْ'), T('subordinate clause; "that"'), T('subjunctive'), 'أَنْ يَأْتِيَ'],
        [T('إِنْ'), T('condition; "if"'), T('subjunctive'), 'إِنْ جَاءَ'],
        [T('إِنَّ'), T('emphasis; "indeed"'), T('indicative'), 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ'],
        [T('أَنَّ'), T('emphasis; "that"'), T('indicative'), 'أَنَّهُ صَدِيقٌ'],
        [T('كَأَنَّ'), T('comparison; "as if"'), T('indicative'), 'كَأَنَّهُ مَاءٌ'],
      ],
    },
    {
      caption: T('{لا} and its neighbours'),
      head: [T('Form'), T('Use'), T('Example'), T('Gloss')],
      rows: [
        [T('{لا} plus jussive'), T('prohibition'), 'لا تَقْتَلُوا', T('do not kill')],
        [T('{لا} plus indicative'), T('negation of the present'), 'لا يَقْتُلُ', T('he does not kill')],
        [T('{لَمْ} plus verb'), T('negation of the past'), 'لَمْ يَكُنْ', T('he was not')],
        [T('{لَنْ} plus verb'), T('negation of the future'), 'لَنْ يَهْلِكَ', T('he shall not perish')],
        [T('{مَا} plus verb'), T('negation with no time'), 'مَا كَانَ', T('it was not')],
      ],
    },
    {
      caption: T('Clause connectors'),
      head: [T('Word'), T('Value'), T('Example')],
      rows: [
        [T('إِذْ'), T('when; if'), 'إِذْ جَاءَ'],
        [T('لَمَّا'), T('when, with a beginning'), 'لَمَّا بَلَغَ'],
        [T('فَ'), T('then; so'), 'فَفَهِمَ'],
        [T('أَمْ'), T('or'), 'أَمْ حُمْرٌ'],
        [T('لَكِنْ'), T('but'), 'لَكِنَّهُ'],
        [T('إِنَّمَا'), T('only'), 'إِنَّمَا بِالْحَقِّ'],
        [T('ثُمَّ'), T('then; afterwards'), 'ثُمَّ قَامَ'],
      ],
    },
  ],
};
