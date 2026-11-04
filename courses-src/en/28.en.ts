import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Conjunctions: because, although, while'),
  subtitle: T('because × so, although × though — the pairs learners swap'),
  section: T('Connectives'),
  body: C(`## The coordinators and what each one does

English has seven coordinating conjunctions and most grammar books memorize them by the acronym FANBOYS: {and}, {but}, {or}, {nor}, {for}, {yet}, {so}.

Two of them need a warning. {For} means "because" and not "for the sake of": {I stayed home, for I was ill}. And {yet} means "nevertheless" and never "yet": {He is old, yet he works hard}.

{I saw him, but he did not see me} is the commonest contrast structure in English, and the position of {but} is always the same: between the two halves of the sentence, with no comma inside it.

## The two pairs learners swap

The first pair is {because} and {so}. {Because} gives **cause** and {so} gives **consequence**: {I stayed home because I was ill} and {I was ill, so I stayed home}. Learners swap the two very often, and the effect is to invert the logic of the sentence.

The second pair is {although} and {because}. {Although} is concessive and {because} is causal: {Although it rained, we went out} and {We went out because it did not rain}. Both open the clause, which is why the confusion goes unnoticed.

The KJV uses {though} and {yet} in the same clause in John 12:37: {Though he had done so many miracles before them, yet they believed not in him}. Those are the two coordinators working together: {though} concedes and {yet} contrasts.

2 Corinthians 5:17 links the pair of cause with {therefore}: {Therefore if any man be in Christ, he is a new creature}. The English {therefore} is the {so} of consequence, and the whole sentence is {because} plus {so} written out at length.

## While is not although

The mistake that shows up most in translation is {while} rendered as "although". {While} means **at the same time as**: {While I was at home, she called}. For a concessive sense English uses {while} in the meaning of "although" only in archaic and biblical English, and even there a contemporary reader takes it as temporal.

The test is the time of the second clause. If it is simultaneous, {while} is temporal. If it is concessive, it is {although}.

## The four ways of saying one condition

The conditional has four pairs, and a learner usually knows one. {If} and {unless} are one pair seen from two sides: {If you come, I will stay} and {Unless you come, I will stay}. {Though} and {even though} differ in emphasis: {even though} insists on the contrast. {So that} and {in order that} introduce purpose, and {as long as} and {provided that} introduce a prolonged condition.

What changes the meaning is always the same element: a {not} inside the {if}, an {even} before the {though}, a {long} inside the {as long as}. The clause itself is identical.`),
  vocab: [
    V('and', 'and', 'and'),
    V('but', 'but', 'but'),
    V('or', 'or', 'or'),
    V('nor', 'nor', 'nor'),
    V('for', 'for', 'because (archaic)'),
    V('yet', 'yet', 'nevertheless'),
    V('so', 'so', 'so'),
    V('because', 'because', 'because'),
    V('although', 'although', 'although'),
    V('though', 'though', 'though'),
    V('while', 'while', 'while'),
    V('unless', 'unless', 'unless'),
    V('even though', 'even', 'even though'),
    V('so that', 'so', 'so that'),
    V('as long as', 'as long as', 'as long as'),
    V('therefore', 'therefore', 'therefore'),
  ],
  rules: [
    {
      n: '1',
      text: T('For means because and not for the sake of; yet means nevertheless and never yet.'),
    },
    {
      n: '2',
      text: T(
        'Because gives cause and so gives consequence; swapping the two inverts the logic of the sentence.',
      ),
    },
    {
      n: '3',
      text: T('Although is concessive and because is causal, and either can open the clause.'),
    },
    {
      n: '4',
      text: T('While means at the same time as; for a concessive sense use although or though.'),
    },
    {
      n: '5',
      text: T(
        'If and unless, though and even though, so that and in order that, as long as and provided that are pairs that differ by one single element.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 12:37 has Though and yet in one clause, and 2 Corinthians 5:17 has therefore, which is the because and so pair written out.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes "Although I was ill, I stayed home", they put although where because belongs. The test is to ask which of the two clauses explains the other.',
      ),
    },
  ],
  examples: [
    { text: '{I stayed home, for I was ill}', gloss: T('I stayed home, for I was ill') },
    { text: '{He is old, yet he works hard}', gloss: T('he is old, yet he works hard') },
    { text: '{I stayed home because I was ill}', gloss: T('I stayed home because I was ill') },
    { text: '{I was ill, so I stayed home}', gloss: T('I was ill, so I stayed home') },
    { text: '{Although it rained, we went out}', gloss: T('Although it rained, we went out') },
    { text: '{While I was at home, she called}', gloss: T('While I was at home, she called') },
    {
      text: '{Though he had done so many miracles, yet they believed not}',
      gloss: T('though he had done so many miracles, yet they believed not'),
    },
    {
      text: '{Therefore if any man be in Christ, he is a new creature}',
      gloss: T('therefore if any man be in Christ, he is a new creature'),
    },
    { text: '{Unless you come, I will stay}', gloss: T('unless you come, I will stay') },
    { text: '{even though he is tired}', gloss: T('even though he is tired') },
  ],
  tables: [
    {
      caption: T('The coordinators'),
      head: [T('Conjunction'), T('Function'), T('Example')],
      rows: [
        ['{and}', T('addition'), '{He read and she wrote}'],
        ['{but}', T('contrast'), '{He read but she wrote}'],
        ['{or}', T('alternative'), '{Do you read or write}'],
        ['{nor}', T('accumulated negation'), '{neither read nor write}'],
        ['{for}', T('cause, archaic'), '{I stayed, for I was ill}'],
        ['{yet}', T('emphatic contrast'), '{He is old, yet he works}'],
        ['{so}', T('consequence'), '{I was ill, so I stayed}'],
      ],
    },
    {
      caption: T('The pairs learners swap'),
      head: [T('Pair'), T('First sense'), T('Second sense')],
      rows: [
        ['{because} / {so}', T('cause'), T('consequence')],
        ['{although} / {because}', T('concessive'), T('causal')],
        ['{if} / {unless}', T('hypothesis'), T('denied hypothesis')],
        ['{though} / {even though}', T('concessive'), T('emphatic concessive')],
        ['{so that} / {in order that}', T('purpose'), T('explicit purpose')],
      ],
    },
    {
      caption: T('When the conjunction opens the clause'),
      head: [T('Conjunction'), T('Can it open?'), T('Example')],
      rows: [
        ['{because}', T('yes'), '{Because it rained, we stayed}'],
        ['{so}', T('yes, with a comma'), '{It rained, so we stayed}'],
        ['{although}', T('yes'), '{Although it rained, we went}'],
        ['{though}', T('yes'), '{Though he asked, I refused}'],
        ['{while}', T('yes, but temporal'), '{While we waited, he called}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('Because it rained, we stayed home'),
      T('Although it rained, we stayed home'),
      T('So it rained, we stayed home'),
      T('While it rained, we stayed home'),
    ],
    answer: 1,
    hint: T('The rain is the obstacle, not the cause: use although.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the cause: 'I stayed home ___ I was ill.'"),
      answer: 'because',
    },
    {
      kind: 'fill',
      prompt: T("Complete the consequence: 'I was ill, ___ I stayed home.'"),
      answer: 'so',
    },
    {
      kind: 'match',
      prompt: T('Match the conjunction to its function.'),
      pairs: [
        { a: 'although', b: T('concessive') },
        { a: 'because', b: T('causal') },
        { a: 'unless', b: T('denied hypothesis') },
        { a: 'so that', b: T('purpose') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses while correctly?'),
      options: [
        T('While he was poor, he was happy'),
        T('While I read, he slept'),
        T('While he was poor, he became rich'),
        T('While the rain, we went out'),
      ],
      answer: 1,
    },
  ],
};
