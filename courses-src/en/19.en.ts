import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('The adverb: how it is formed'),
  subtitle: T('quick → quickly, fast, hardly — three routes'),
  section: T('Adverbs'),
  body: C(`## Three routes to the same meaning

The English adverb of manner has three routes of formation, and a learner only knows the first. {quick} is an adjective and {quickly} is an adverb; {soft} and {softly} likewise; {careful} and {carefully} likewise. The rule is **adjective plus {ly}**, and it produces most of the adverbs a reader will meet.

The second route is the form that **has nothing to do with an adjective**: {fast}, {well}, {soon}, {now}, {then}, {here}, {there}, {today}, {tomorrow}, {yesterday}, {very}, {too}. They are autonomous forms and have to be memorized as they stand.

The third route is the adjective that **already works as an adverb** and therefore never gained {ly}. It is the shortest of the three and the one that misleads most.

## The adjective that became an adverb

{Fast}, {hard}, {late}, {early}, {straight}, {high}, {low} and {long} do both jobs with the same shape. {He runs fast} and {a fast train} use the same word; {She works hard} and {a hard question} too.

The KJV uses the device at the end of Matthew 5:48, with {Be ye therefore perfect, as your Father which is in heaven is perfect}. The {perfect} in the first clause is an adverb and the one in the second is an adjective, and they are the same word. A translator who misses it writes "be perfect" in Portuguese and loses the sense of "be perfect in love", which is what the Greek was reaching for.

The practical test is short: **try to turn the adverb into {very} plus the adjective**. {She speaks slowly} can become {She is very slow} and the sentence still works; {She speaks quick} turns into nothing, because what exists is {She is very quick}.

## Hardly is not "hard"

{Hardly} is the adverb of hardly, and it means "scarcely" or "almost never": {He hardly ever comes}. A learner who knows {hard} and {hardly} as a pair translates {hardly} as "with difficulty" and produces {He speaks hardly}, which in English means almost "he does not speak at all".

Three more pairs behave the same way: {late} is "late" and {lately} is "recently"; {near} is "near" and {nearly} is "almost"; {hard} is "hard" and {hardly} is "scarcely". Four pairs change category and meaning at once, and none of them follows the {ly} rule.

## Not every -ly is an adverb

The reverse path has a trap too: {lovely}, {friendly}, {lively} and {lonely} end in {ly} and are adjectives, not adverbs. {A lovely day} is correct; {She sings lovely} does not exist.

The test works from both sides: if the word accepts a {very} before it, it is an adjective; if it can appear after a verb that says how, it is an adverb.`),
  vocab: [
    V('quickly', 'quickly', 'quickly'),
    V('softly', 'softly', 'softly'),
    V('carefully', 'carefully', 'carefully'),
    V('fast', 'fast', 'fast'),
    V('hard', 'hard', 'hard'),
    V('late', 'late', 'late'),
    V('early', 'early', 'early'),
    V('straight', 'straight', 'straight'),
    V('hardly', 'hardly', 'hardly'),
    V('lately', 'lately', 'lately'),
    V('nearly', 'nearly', 'nearly'),
    V('well', 'well', 'well'),
    V('soon', 'soon', 'soon'),
    V('yesterday', 'yesterday', 'yesterday'),
    V('very', 'very', 'very'),
    V('too', 'too', 'too'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb of manner is formed by three routes: adjective plus -ly, a form of its own unrelated to any adjective, or an adjective that already serves as an adverb.',
      ),
    },
    {
      n: '2',
      text: T(
        'Fast, hard, late, early, straight, high and low are adjective and adverb with the same shape.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hardly, lately and nearly are not the adverbs of hard, late and near: the meaning is a different one.',
      ),
    },
    { n: '4', text: T('Words such as lovely, friendly and lively end in -ly and are adjectives.') },
    {
      n: '5',
      text: T(
        'The category test works both ways: if very can come before the word it is an adjective; if it can follow a verb that says how it is an adverb.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Matthew 5:48 has perfect once as an adverb and once as an adjective. Context decides, and the very verb under discussion is doing the work.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner says "hardly" when they meant "with difficulty", the problem is not the form: it is that they assumed the pair was regular and never checked the meaning.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('he speaks slowly') },
    { text: '{She runs fast}', gloss: T('she runs fast — adverb') },
    { text: '{a fast train}', gloss: T('a fast train — adjective') },
    { text: '{She works hard}', gloss: T('she works hard') },
    { text: '{He hardly ever comes}', gloss: T('he hardly ever comes') },
    { text: '{What have you been doing lately}', gloss: T('what have you been doing lately') },
    { text: '{The work is nearly done}', gloss: T('the work is nearly done') },
    { text: '{Be ye therefore perfect}', gloss: T('be ye therefore perfect — perfect as adverb') },
    { text: '{a lovely day}', gloss: T('a lovely day — adjective, not adverb') },
    { text: '{We shall see you soon}', gloss: T('we shall see you soon') },
  ],
  tables: [
    {
      caption: T('The three routes'),
      head: [T('Route'), T('Formula'), T('Examples'), T('Note')],
      rows: [
        [
          T('adjective + -ly'),
          T('quick → quickly'),
          '{quickly, softly, carefully}',
          T('most cases'),
        ],
        [T('form of its own'), T('—'), '{fast, well, soon, now}', T('memorize as it stands')],
        [T('adjective = adverb'), T('—'), '{fast, hard, late, straight}', T('nothing added')],
      ],
    },
    {
      caption: T('The pairs that change meaning'),
      head: [T('Without -ly'), T('With -ly'), T('Difference in meaning')],
      rows: [
        ['{hard}', '{hardly}', T('hard × scarcely')],
        ['{late}', '{lately}', T('late × recently')],
        ['{near}', '{nearly}', T('near × almost')],
        ['{well}', '{well}', T('the same: adverb in both')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('He speaks hardly'),
      T('He speaks hard'),
      T('He speaks nearly'),
      T('He speaks late'),
    ],
    answer: 1,
    hint: T('Hardly means "scarcely"; for "with difficulty" use hard.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Derive the adverb: 'careful' → '___'"), answer: 'carefully' },
    { kind: 'fill', prompt: T("Complete: 'She is a ___ girl.' (lovely)"), answer: 'lovely' },
    {
      kind: 'match',
      prompt: T('Match the word to its category.'),
      pairs: [
        { a: 'quickly', b: T('adverb') },
        { a: 'fast', b: T('adverb and adjective') },
        { a: 'hardly', b: T('negative adverb') },
        { a: 'lovely', b: T('adjective') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses hardly correctly?'),
      options: [
        T('He hardly speaks English'),
        T('He speaks hardly English'),
        T('He speaks hardly'),
        T('He is hardly speak English'),
      ],
      answer: 0,
    },
  ],
};
