import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('The verb: the twelve combinations with have and do'),
  subtitle: T('have gone × went — the distinction of aspect'),
  section: T('The verb'),
  body: C(`## One auxiliary, twelve combinations

English tense is not in the main verb: it is in the **auxiliary**. The auxiliary inflects for person and the main verb stays in the shape that auxiliary requires, and twelve combinations cover almost everything.

With {be} there are two: {am working}, {is working}, {are working}, {was working}, {were working}. With {have} there are three: {have worked}, {has worked}, {had worked}. With {do} there are three: {do work}, {does work}, {did work}. With {will} and {shall} there are two: {will go}, {shall go}. With the modals there are two: {can go}, {must go}.

The main verb always follows the same logic: {be} takes {ing}, {have} takes the participle, and {do}, {will}, {shall} and the modals take the base. Once that column is understood, what remains is memorizing the auxiliary.

## The mistake Portuguese produces

The costliest error for a Portuguese speaker here is {I have went}. The sentence is wrong because {went} is past and not participle: the participle of {go} is {gone}.

The cause of the mistake is that Portuguese has one tense for both jobs. "Eu fui" and "eu tenho ido" are different sentences in Portuguese, but the learner formed the idea that both fitted in one verb. They do not: {I went} says the fact is past and closed; {I have gone} says the fact has a result that holds now.

John 9:25 in the KJV has exactly that pair: {whereas I was blind, now I see}. The {was} looks back and the {see} looks at now, and the same subject appears in both halves. Portuguese read loosely writes "era cego e vejo"; English draws the distinction inside the sentence.

## Three ways of saying that you did it

For one event English offers three or four constructions, and the choice is about aspect rather than clock time. {I went} is the simple past: the event happened and is over. {I have gone} is the present perfect: the event matters now, through its result. {I had gone} is the past perfect: the event comes before another past. {I am going} is the continuous: the action is under way.

The question that decides is **what the listener needs to know**: if they need a point in time, use the past; if they need the result, use the perfect. Portuguese almost always prefers the point, which is why {I have gone} sounds strange to a learner and {I went} sounds natural even when the result is what matters.

## will, shall and the modals

The future has more than one form because English distinguishes three intentions. {Will} is decision, prediction or offer: {I will call you}. {Shall} shows up in questions and offers: {Shall we go?} And {going to} is an intention formed before the moment of speaking: {I am going to call you}.

The modals have neither participle nor past. {Can go} is present, {could go} is past, and {will be able to go} is future. It is the only family where the past is a separate shape without {ed}, and it settles most of what a learner would call irregularity.`),
  vocab: [
    V('have worked', 'work', 'have worked'),
    V('has worked', 'work', 'has worked'),
    V('had worked', 'work', 'had worked'),
    V('am going', 'go', 'am going'),
    V('have gone', 'go', 'have gone'),
    V('had gone', 'go', 'had gone'),
    V('will go', 'go', 'will go'),
    V('shall go', 'go', 'shall go'),
    V('can go', 'go', 'can go'),
    V('must go', 'go', 'must go'),
    V('do work', 'work', 'do work'),
    V('did work', 'work', 'did work'),
    V('I went', 'go', 'I went'),
    V('were blind', 'be', 'were blind'),
    V('now I see', 'see', 'now I see'),
  ],
  rules: [
    { n: '1', text: T('Tense lives in the auxiliary, not in the main verb.') },
    {
      n: '2',
      text: T(
        'Be takes -ing, have takes the participle, and do, will, shall and the modals take the base of the verb.',
      ),
    },
    { n: '3', text: T('I have went is wrong: the participle of go is gone.') },
    {
      n: '4',
      text: T(
        'I went marks the past as closed; I have gone marks the past through the result that holds now.',
      ),
    },
    {
      n: '5',
      text: T(
        'Will is decision or prediction, shall is offer or question, and going to is intention formed before speaking.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 9:25 reads whereas I was blind, now I see: the past looks back and the present looks at now, in the same sentence and with the same subject.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes I have went, the problem is the participle and not the tense. The shape went is past; the participle is gone, and it is the participle the auxiliary requires.',
      ),
    },
  ],
  examples: [
    { text: '{I went}', gloss: T('I went — closed past') },
    { text: '{I have gone}', gloss: T('I have gone — the result holds now') },
    { text: '{I had gone}', gloss: T('I had gone — before another past') },
    { text: '{I am going}', gloss: T('I am going — under way') },
    { text: '{whereas I was blind, now I see}', gloss: T('whereas I was blind, now I see') },
    { text: '{He has worked here for ten years}', gloss: T('He has worked here for ten years') },
    { text: '{They had already left}', gloss: T('They had already left') },
    { text: '{Shall we go}', gloss: T('shall we go?') },
    { text: '{I will call you}', gloss: T('I will call you') },
    { text: '{I must go now}', gloss: T('I must go now') },
  ],
  tables: [
    {
      caption: T('The twelve combinations'),
      head: [T('Auxiliary'), T('Main verb'), T('Combinations')],
      rows: [
        ['{am / is / are}', '{+ing}', '{am working, is working, are working}'],
        ['{was / were}', '{+ing}', '{was working, were working}'],
        ['{have / has}', T('{+participle}'), '{have worked, has worked}'],
        ['{had}', T('{+participle}'), '{had worked}'],
        ['{do / does}', T('base'), '{do work, does work}'],
        ['{did}', T('base'), '{did work}'],
        ['{will / shall}', T('base'), '{will go, shall go}'],
        ['{can / could}', T('base'), '{can go, could go}'],
        ['{must}', T('base'), '{must go}'],
      ],
    },
    {
      caption: T('Four ways to speak of one event'),
      head: [T('Form'), T('What it says'), T('Question it answers')],
      rows: [
        ['{I went}', T('simple past'), T('when did it happen?')],
        ['{I have gone}', T('present perfect'), T('and now, what is the result?')],
        ['{I had gone}', T('past perfect'), T('what had happened before?')],
        ['{I am going}', T('continuous'), T('what is happening now?')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [T('I have went'), T('I have gone'), T('I have go'), T('I am went')],
    answer: 1,
    hint: T('After have comes the participle, which in go is gone.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'She ___ working.' (now)"), answer: 'is' },
    { kind: 'fill', prompt: T("Complete: 'They ___ already left.'"), answer: 'have' },
    {
      kind: 'match',
      prompt: T('Match the auxiliary to the shape it requires.'),
      pairs: [
        { a: '{have worked}', b: T('participle') },
        { a: '{is working}', b: T('-ing') },
        { a: '{will go}', b: T('base') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence says he has not arrived yet?'),
      options: [T('He did not come'), T('He has not come'), T('He is not come'), T('He not came')],
      answer: 1,
    },
  ],
};
