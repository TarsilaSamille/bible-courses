import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Prepositions: the list a learner will get wrong'),
  subtitle: T('depend on, consist of, believe in — what does not translate'),
  section: T('Prepositions'),
  body: C(`## Pairs that do not translate

The first pair is {to}, {into} and {onto}. {To} marks direction only ({go to school}); {into} marks movement into an enclosed space ({go into the room}); {onto} marks arrival on a surface ({jump onto the table}). Portuguese says "ir para" in all three, which is why {into} and {onto} join the list of mistakes.

The second pair is {from}, {of} and {off}. {From} marks origin and also end ({from Monday to Friday}, {ten miles from here}); {of} is the preposition of relation, the one that links a noun to what qualifies it ({the word of God}); {off} marks separation ({take the book off the table}, {fall off the horse}).

The third, which shows up only in {into} and {out of}, is the subtlest: {out of} means origin ({out of the room}) and also proportion ({three out of ten}).

## Verb plus preposition

The costliest part of English for someone translating out of Portuguese is the group where **the verb comes with a preposition that does not translate**. {Depend on}, {consist of}, {believe in}, {listen to}, {wait for}, {agree with}, {apologize for}, {object to}, {insist on}.

John 11:26 in the KJV reads {he that believeth in me, though he were dead, shall live}. The {in} after {believeth} translates nothing: {believe} is the same verb in both languages, and the preposition is an addition on the English side.

The list cannot be reasoned out, which is why it belongs to vocabulary and not to rules. What can be done is to learn the **whole verb**: {insist on}, {insiste em}; {object to}, {objeta a}. Learn the pair and the preposition comes along at no cost.

The same particle can shift meaning with the verb: {look at} is to look, {look for} is to search, and {look after} is to take care of. It is the rare case where one verb changes meaning with the preposition instead of gaining a new one.

## Three verbs that Portuguese brings together

{Borrow} is to take on loan, {lend} is to lend, and {rent} is to rent for a period. Portuguese uses one verb for the first two directions, and the distinction is exactly the one a learner needs: the one who receives on loan {borrows}, the one who gives {lends}. With {rent} there is no argument: renting for a period is {rent}, and renting a hotel room for a night is {rent} too; what changes is the object.

{Bring} is to bring something that is coming along with me, {take} is to carry something off that I fetch myself, and {carry} is to bear, with the weight in the foreground. {Bring me the book} brings the book that is here; {take me the book} fetches the book and brings it; {carry the box} says what the hand does.

The KJV uses {gave} with no preposition in Matthew 25:35, with {I was hungry, and ye gave me meat}. Borrowing and lending turn up in prose rather than in the biblical text, which makes them the part of the vocabulary a learner has to assemble on their own.

## Where the preposition ends up

The preposition may go to the end of the clause, and that is the commonest practice after a relative pronoun: {the man I spoke to}, {the book she looked at}. Learners hesitate here and usually put everything back in the middle, producing {the man to who I spoke}, which is possible and more formal.

With a verb in the {ing} form the preposition goes first: {by looking at}, {for waiting for}, {thank you for coming}. With an infinitive the preposition goes inside the {to}: {I agree to it}, {I insist on it}, {he objects to it}.`),
  vocab: [
    V('depend on', 'depend', 'depend on'),
    V('consist of', 'consist', 'consist of'),
    V('believe in', 'believe', 'believe in'),
    V('listen to', 'listen', 'listen to'),
    V('wait for', 'wait', 'wait for'),
    V('agree with', 'agree', 'agree with'),
    V('apologize for', 'apologize', 'apologize for'),
    V('object to', 'object', 'object to'),
    V('insist on', 'insist', 'insist on'),
    V('look at', 'look', 'look at'),
    V('look for', 'look', 'look for'),
    V('look after', 'look', 'look after'),
    V('borrow', 'borrow', 'borrow'),
    V('lend', 'lend', 'lend'),
    V('rent', 'rent', 'rent'),
    V('carry', 'carry', 'carry'),
    V('bring', 'bring', 'bring'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'To marks direction; into marks movement into a space; onto marks arrival on a surface.',
      ),
    },
    {
      n: '2',
      text: T(
        'From marks origin and end; of links a noun to what qualifies it; off marks separation.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verb plus preposition is learned as one unit: depend on, consist of, believe in, listen to.',
      ),
    },
    {
      n: '4',
      text: T('Borrow is to take on loan, lend is to lend, and rent is to rent for a period.'),
    },
    {
      n: '5',
      text: T('After a relative pronoun the preposition goes to the end: the man I spoke to.'),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 11:26 has believeth in me, with a preposition that matches nothing in Portuguese. Matthew 25:35 has gave me meat, with a verb and no preposition at all. The two cases are one phenomenon seen from both sides.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes "I depend of" or "she listens him", the problem is that they translated the verb on its own. The English preposition translates nothing: it is part of the verb.',
      ),
    },
  ],
  examples: [
    { text: '{he that believeth in me}', gloss: T('he that believeth in me') },
    { text: '{It all depends on the weather}', gloss: T('it all depends on the weather') },
    {
      text: '{The team consists of twelve players}',
      gloss: T('the team consists of twelve players'),
    },
    { text: '{go into the room}', gloss: T('go into the room') },
    { text: '{jump onto the table}', gloss: T('jump onto the table') },
    { text: '{take the book off the table}', gloss: T('take the book off the table') },
    { text: '{three out of ten}', gloss: T('three out of ten') },
    { text: '{the man I spoke to}', gloss: T('the man I spoke to') },
    { text: '{Can I borrow your pen}', gloss: T('can I borrow your pen?') },
    { text: '{Can you lend me your pen}', gloss: T('can you lend me your pen?') },
    { text: '{Bring me the book}', gloss: T('bring me the book') },
  ],
  tables: [
    {
      caption: T('Pairs that do not translate'),
      head: [T('Pair'), T('Difference'), T('Example')],
      rows: [
        ['{to}', T('direction, no arrival inside'), '{go to school}'],
        ['{into}', T('movement inside'), '{go into the room}'],
        ['{onto}', T('movement onto a surface'), '{jump onto the table}'],
        ['{from}', T('origin and end'), '{from nine to five}'],
        ['{of}', T('relation, possession'), '{the word of God}'],
        ['{off}', T('separation'), '{take it off the table}'],
      ],
    },
    {
      caption: T('Verb plus preposition'),
      head: [T('Verb'), T('Preposition'), T('Sentence')],
      rows: [
        ['{depend}', '{on}', '{It depends on you}'],
        ['{consist}', '{of}', '{It consists of four parts}'],
        ['{believe}', '{in}', '{believe in him}'],
        ['{listen}', '{to}', '{listen to me}'],
        ['{wait}', '{for}', '{wait for the answer}'],
        ['{agree}', '{with}', '{agree with you}'],
      ],
    },
    {
      caption: T('The verbs Portuguese brings together'),
      head: [T('English'), T('Portuguese'), T('Direction')],
      rows: [
        ['{borrow}', T('to take on loan'), T('I receive on loan')],
        ['{lend}', T('to lend'), T('I give on loan')],
        ['{rent}', T('to rent for a period'), T('I pay and use')],
        ['{bring}', T('to bring'), T('it comes along with me')],
        ['{take}', T('to carry off'), T('I fetch and carry')],
        ['{carry}', T('to bear'), T('the weight comes first')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('It depends of the weather'),
      T('It depends on the weather'),
      T('It depends in the weather'),
      T('It depends at the weather'),
    ],
    answer: 1,
    hint: T('Depend always takes on.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'The team consists ___ twelve players.'"), answer: 'of' },
    { kind: 'fill', prompt: T("Complete: '___ I borrow your pen?'"), answer: 'Can' },
    {
      kind: 'match',
      prompt: T('Match the verb to the preposition.'),
      pairs: [
        { a: 'depend', b: 'on' },
        { a: 'consist', b: 'of' },
        { a: 'believe', b: 'in' },
        { a: 'listen', b: 'to' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('She listens him'),
        T('She listens to him'),
        T('She listens for him'),
        T('She listens him to'),
      ],
      answer: 1,
    },
  ],
};
