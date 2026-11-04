import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('The verb: phrasal verbs and the separable particle'),
  subtitle: T('turn off the light, turn the light off — what separates'),
  section: T('The verb'),
  body: C(`## The particle can move

A phrasal verb is verb plus particle, and the particle can occupy three positions. With a named object the commoner form keeps the particle glued to the verb: {turn off the light}. The second puts the particle at the end: {turn the light off}. With a pronoun there is only one possible position: {turn it off}, because the pronoun has to come right after the verb.

With a gerund the particle goes back to after the verb: {turning the light off} and not {turning off the light}. Writing {turning off the light} produces an ambiguous sentence in which the gerund may be modifying the light.

The practical rule fits on one line: **verb, particle, object**. When the object is a pronoun it goes in the middle.

## The short list of those that do not separate

There are phrasal verbs whose particle **never** moves, and {look after} is the best-known case. {I look after the dog} is right and {I look the dog after} is wrong.

The reason is that these particles function as prepositions, and a preposition does not separate from its verb. That is why the list is short: {look after}, {look into}, {get on with}, {put up with}, {cope with}, {run out of}, {stand by}, {take after}.

The test for finding out whether a unit separates is simple: build the sentence with a pronoun after the verb. {Turn it off} works and proves that {turn off} separates; {look it after} does not work and proves that {look after} does not.

## The particle and what it adds

The particle almost never means only "somewhere". {On} is support and contact, {off} is removal, {out} is outward or completion, {up} is upward or increase, {down} is downward or decrease, {away} is distance, {back} is return.

The value changes with the verb, which is why the unit is learned whole. {Give up} is to give up, {give in} is to yield, {give out} is to distribute or run out, {give away} is to give as a present or to betray: four particles, four verbs.

## What the KJV does with the particle

The KJV uses phrasal verbs often and without asking permission: {he shall take up serpents}, {put on the armour of righteousness}, {put off anger}, {let not your hands be slack}.

Mark 16:18 brings {take up} in the sense of picking something up, which is the original and almost the only sense of {take up}: lifting something off the ground. The modern sense of "understand" ({I take up your offer}) is much later and does not appear in the biblical text.

The same holds for {put on}: in Romans 13:14 it is to put on, metaphorically to put on armour, and not to place one thing over another.`),
  vocab: [
    V('turn off', 'turn', 'turn off'),
    V('turn the light off', 'turn', 'turn the light off'),
    V('turn it off', 'turn', 'turn it off'),
    V('look after', 'look', 'look after'),
    V('look into', 'look', 'look into'),
    V('get on with', 'get', 'get on with'),
    V('put up with', 'put', 'put up with'),
    V('cope with', 'cope', 'cope with'),
    V('run out of', 'run', 'run out of'),
    V('stand by', 'stand', 'stand by'),
    V('give up', 'give', 'give up'),
    V('give in', 'give', 'give in'),
    V('give away', 'give', 'give away'),
    V('take up', 'take', 'take up'),
    V('put on', 'put', 'put on'),
    V('put off', 'put', 'put off'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'With a named object the particle can stay glued to the verb or go to the end; with a pronoun it has to go in the middle.',
      ),
    },
    {
      n: '2',
      text: T('With a gerund the particle goes back after the verb: turning the light off.'),
    },
    {
      n: '3',
      text: T(
        'Look after, look into, get on with, put up with, cope with, run out of and stand by do not separate, because the particle functions as a preposition.',
      ),
    },
    {
      n: '4',
      text: T(
        'The test for separability is the sentence with a pronoun: turn it off works, look it after does not.',
      ),
    },
    {
      n: '5',
      text: T(
        'The particle adds a meaning to the verb, and the meaning shifts from verb to verb: give up, give in, give away.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Mark 16:18 has take up in the physical sense of lifting off the ground. The modern sense of understanding is much later and does not appear in the KJV.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes I look the dog after, the problem is not the position of the particle: it is that look after does not separate, and the list of the non-separable ones is short.',
      ),
    },
  ],
  examples: [
    { text: '{turn off the light}', gloss: T('turn off the light') },
    { text: '{turn the light off}', gloss: T('turn the light off — particle at the end') },
    { text: '{turn it off}', gloss: T('turn it off — pronoun in the middle') },
    { text: '{turning the light off}', gloss: T('turning the light off — gerund') },
    { text: '{I look after the dog}', gloss: T('I look after the dog') },
    { text: '{I look the dog after}', gloss: T('wrong: look after does not separate') },
    { text: '{I cannot put up with it}', gloss: T('I cannot put up with it') },
    { text: '{we ran out of bread}', gloss: T('we ran out of bread') },
    { text: '{he shall take up serpents}', gloss: T('he shall take up serpents — KJV') },
    {
      text: '{put on the armour of righteousness}',
      gloss: T('put on the armour of righteousness'),
    },
  ],
  tables: [
    {
      caption: T('Where the particle can go'),
      head: [T('Object type'), T('Particle glued'), T('Particle at the end')],
      rows: [
        [T('noun'), '{turn off the light}', '{turn the light off}'],
        [T('pronoun'), T('—'), '{turn it off}'],
        [T('gerund'), T('—'), '{turning the light off}'],
        [T('relative clause'), T('—'), '{the light he turned off}'],
      ],
    },
    {
      caption: T('The ones that do not separate'),
      head: [T('Unit'), T('Why it does not separate'), T('Test sentence')],
      rows: [
        ['{look after}', T('the particle is a preposition'), '{I look after him}'],
        ['{get on with}', T('the particle is a preposition'), '{I get on with him}'],
        ['{put up with}', T('the particle is a preposition'), '{I put up with it}'],
        ['{run out of}', T('the particle is a preposition'), '{I ran out of it}'],
        ['{stand by}', T('the particle is a preposition'), '{I stand by him}'],
      ],
    },
    {
      caption: T('What the particle adds'),
      head: [T('Particle'), T('Core sense'), T('With give')],
      rows: [
        ['{on}', T('support, contact'), T('—')],
        ['{off}', T('removal, separation'), T('—')],
        ['{up}', T('increase, completion'), '{give up}'],
        ['{out}', T('extinction, distribution'), '{give out}'],
        ['{away}', T('distance, donation'), '{give away}'],
        ['{in}', T('yielding'), '{give in}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [T('Turn off it'), T('Turn it off'), T('Turn off the it'), T('Turn the it off')],
    answer: 1,
    hint: T('With a pronoun the particle goes to the end: verb, pronoun, particle.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'Please switch ___ the light.'"), answer: 'off' },
    {
      kind: 'fill',
      prompt: T("Does not separate: 'I look ___ my little sister.'"),
      answer: 'after',
    },
    {
      kind: 'match',
      prompt: T('Match the unit to its meaning.'),
      pairs: [
        { a: 'give up', b: T('to give up') },
        { a: 'give away', b: T('to betray') },
        { a: 'put up with', b: T('to bear') },
        { a: 'run out of', b: T('to run out of') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('I look the dog after'),
        T('I look after the dog'),
        T('I look the after dog'),
        T('I look after dog the'),
      ],
      answer: 1,
    },
  ],
};
