import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('The verb: aspect and the split negation'),
  subtitle: T("didn't go, have been × have gone — the pair that shifts meaning"),
  section: T('The verb'),
  body: C(`## Negation inserts an auxiliary

A Portuguese speaker writes {I didn't went} and {She doesn't likes}. Both sentences are wrong for one reason: after an auxiliary the main verb stays in the **base**, not in the shape it would have on its own.

It is {do} that does the work. In the present, {do not} plus base: {I do not go}, {she does not like}. In the past, {did not} plus base: {I did not go}, {they did not come}. The {did} is the past form of {do}, and it is what carries the tense.

The rule fits on one line: **negation is not the tense, the auxiliary is**. That is why {did not} never appears with a past form such as {went}, {saw} or {came}. A sentence like {I did not went} has the tense doubled.

## Have been and have gone

The pair a Portuguese speaker has never seen is {have been} and {have gone}, and the difference is not one of tense: it is one of **result**. {I have gone to Rome} says the trip happened and is over; {I have been to Rome} says the trip happened too and what matters is that you were there.

The same holds with {have left} and {have been away}: {He has left} says he is not here; {He has been away} says he was away and came back. One sentence describes the current state and the other counts the experience.

The KJV uses constructions that leave the same distinction visible. John 11:17 reads {when he had heard that he was dead, he met him}: the {had heard} comes before another past, and the meeting is what closes the sentence.

## Three constructions, three aspects

English settles with three constructions what Portuguese settles with tense. {Be} plus {ing} gives what is happening: {He is working}. {Have} plus participle gives what has a result: {He has finished}. {Have been} plus {ing} gives what has been going on for a while: {He has been working since eight}.

The third is the one that confuses most, because in Portuguese the only way to say it is the periphrasis "estar + a + infinitive", and the learner does not know that it has a name of its own in English.

1 John 4:18 joins the three in one sentence: {There is no fear in love: for perfect love casteth out fear}. The {there is} is an existential construction, {casteth out} is verb plus particle, and the present {casteth} says that perfect love keeps casting fear out.

## The pair Portuguese settles on its own

Portuguese has one tense for two jobs and English has two for one. "Eu já fui à Europa" can be {I have already been to Europe} (experience) or {I have already gone to Europe} (result), and Portuguese settles it by context without the speaker deciding anything.

A learner translating sentence by sentence ends up inheriting the ambiguity and writes the commoner form. The short route is to fix the two pairs: {have been} and {have gone}, {have left} and {have been away}, and then start hearing the difference.`),
  vocab: [
    V('did not go', 'go', 'did not go'),
    V('does not like', 'like', 'does not like'),
    V('do not go', 'go', 'do not go'),
    V('have gone', 'go', 'have gone'),
    V('have been', 'be', 'have been'),
    V('have been to', 'be', 'have been to'),
    V('have left', 'leave', 'have left'),
    V('have been away', 'be', 'have been away'),
    V('had heard', 'hear', 'had heard'),
    V('is working', 'work', 'is working'),
    V('has finished', 'finish', 'has finished'),
    V('has been working', 'work', 'has been working'),
    V('there is no fear', 'fear', 'there is no fear'),
    V('casteth out', 'cast', 'casteth out'),
    V('already', 'already', 'already'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'After an auxiliary the main verb stays in the base: did not go, does not like, will not go.',
      ),
    },
    {
      n: '2',
      text: T(
        'The negation is the auxiliary, not the tense: did not never appears with a past form.',
      ),
    },
    {
      n: '3',
      text: T(
        'Have been and have gone differ by result rather than tense: one describes the current state, the other counts the experience.',
      ),
    },
    {
      n: '4',
      text: T(
        'Be plus -ing gives what is happening, have plus participle gives what has a result, have been plus -ing gives what has been going on.',
      ),
    },
    {
      n: '5',
      text: T('There is is an existential construction and takes neither plural nor tense.'),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 11:17 has had heard before another past, and 1 John 4:18 has casteth out, which joins an existential construction with verb plus particle.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes did not went, the problem is not the past but the rule about auxiliaries: negation carries the tense and the verb stays in the base.',
      ),
    },
  ],
  examples: [
    { text: '{I did not go}', gloss: T('I did not go') },
    { text: "{I didn't went}", gloss: T('wrong: tense doubled') },
    { text: '{She does not like it}', gloss: T('she does not like it') },
    { text: '{I have gone to Rome}', gloss: T('I have gone to Rome — the trip is over') },
    { text: '{I have been to Rome}', gloss: T('I have been to Rome — experience') },
    { text: '{He has left}', gloss: T('he has left — he is not here') },
    { text: '{He has been away}', gloss: T('he has been away — he was away and back') },
    { text: '{He has been working since eight}', gloss: T('he has been working since eight') },
    {
      text: '{when he had heard that he was dead}',
      gloss: T('when he had heard that he was dead'),
    },
    { text: '{There is no fear in love}', gloss: T('There is no fear in love') },
    { text: '{perfect love casteth out fear}', gloss: T('perfect love casteth out fear') },
  ],
  tables: [
    {
      caption: T('Negation in each tense'),
      head: [T('Tense'), T('Affirmative'), T('Negative')],
      rows: [
        [T('present'), '{I go}', '{I do not go}'],
        [T('past'), '{I went}', '{I did not go}'],
        [T('present perfect'), '{I have gone}', '{I have not gone}'],
        [T('future'), '{I will go}', '{I will not go}'],
        [T('modal'), '{I can go}', '{I cannot go}'],
      ],
    },
    {
      caption: T('The pair that shifts meaning'),
      head: [T('Sentence'), T('What it says')],
      rows: [
        ['{I have gone to Rome}', T('the trip is done and over')],
        ['{I have been to Rome}', T('the trip counts, and you were there')],
        ['{He has left}', T('he is not here')],
        ['{He has been away}', T('he was away and came back')],
      ],
    },
    {
      caption: T('Three constructions of aspect'),
      head: [T('Construction'), T('Example'), T('Aspect')],
      rows: [
        ['{be + -ing}', '{He is working}', T('under way')],
        [T('{have + participle}'), '{He has finished}', T('with a result')],
        ['{have been + -ing}', '{He has been working}', T('duration up to now')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [T("I didn't went"), T('I did not go'), T('I not went'), T('I did not went to')],
    answer: 1,
    hint: T('After did not the verb stays in the base.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the negation in the past: 'He ___ not come.'"),
      answer: 'did',
    },
    {
      kind: 'fill',
      prompt: T("Complete: 'I have ___ to Paris twice.' (experience)"),
      answer: 'been',
    },
    {
      kind: 'match',
      prompt: T('Match the construction to the aspect.'),
      pairs: [
        { a: 'is working', b: T('under way') },
        { a: 'has finished', b: T('with a result') },
        { a: 'has been working', b: T('duration up to now') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence says he was away and came back?'),
      options: [
        T('He has gone away'),
        T('He has been away'),
        T('He has away been'),
        T('He has been gone'),
      ],
      answer: 1,
    },
  ],
};
