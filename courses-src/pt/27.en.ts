import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Connectives'),
  title: T('Conjunctions: subordinating'),
  subtitle: T('porque, embora, para que, and the government each one requires'),
  body: C(`## Cause and consequence

Cause answers why: {porque}, {como}, {já que}, {visto que}, {uma vez que}. The difference between them is register and position, not sense: {porque} can open the sentence or come after the verb, and the others almost only open it.

Consequence answers and then: {por isso}, {de sorte que}, {de modo que}, {portanto}, {por conseguinte}. Greek handles these with two particles, {διό} and {ἄρα}, and Portuguese chooses which word to use.

## Condition and concession

Condition: {se}, {caso}, {salvo que}, {desde que}, {conforme}, {dado que}. Concession: {embora}, {ainda que}, {mesmo que}, {se bem que}, {por mais que}, {conquanto}. The two put the fact on the same level and oppose each other with different words.

The point that costs most is the rule of {embora}. The concessive {embora} **takes neither {que} nor a finite verb**: you write {embora fosse}, never {embora que fosse}. When the clause is longer the verb goes to the subjunctive and the conjunction drops: {Ainda que fosse difícil, ele foi}. Greek, which is one word, has no such prohibition.

## Purpose, time and comparison

Purpose: {para que}, {a fim de que}, {com}, {para} plus infinitive. Time: {quando}, {enquanto}, {antes que}, {depois que}, {assim que}, {logo que}. Comparison: {como}, {do que}, {que}. Conformity: {conforme}, {segundo}, {como}.

What changes between them is the tense of the verb: {quando eu vier} is future subjunctive, {quando eu vim} is past; {depois que eu vier} is also future, and that difference is what {depois} makes; {enquanto} takes the present, {enquanto eu vivia}.

## Reading criterion

With any subordinate clause, ask: what is the value, cause, consequence, condition, concession, purpose, time, comparison or conformity? And is the verb indicative, subjunctive or infinitive? And does the conjunction allow {que} or does it take a bare verb?

John 3:16 has {para que todo aquele que crê nele não pereça}: it is purpose, and the pair {para que} is the mark. Greek puts ὅπως in the same place, and Portuguese translated it as {para que}, which is the form that makes the purpose visible in the sentence.`),
  vocab: [
    V('porque', 'porque', 'porque'),
    V('como', 'como', 'como (cause)'),
    V('por isso', 'isso', 'por isso'),
    V('de sorte que', 'sorte', 'de sorte que'),
    V('se', 'se', 'se (condition)'),
    V('caso', 'caso', 'caso'),
    V('embora', 'embora', 'although'),
    V('ainda que', 'ainda', 'even though'),
    V('mesmo que', 'mesmo', 'even if'),
    V('para que', 'para', 'so that'),
    V('a fim de que', 'fim', 'so that'),
    V('quando', 'quando', 'when'),
    V('enquanto', 'enquanto', 'while'),
    V('depois que', 'depois', 'after'),
    V('conforme', 'conforme', 'according to'),
    V('segundo', 'segundo', 'according to'),
    V('a concessão', 'concessão', 'the concession'),
    V('a finalidade', 'finalidade', 'the purpose'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Cause: {porque}, {como}, {já que}, {visto que}. Consequence: {por isso}, {de sorte que}, {portanto}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Embora} takes neither {que} nor a finite verb: {embora fosse}, never {embora que fosse}.',
      ),
    },
    {
      n: '§3',
      text: T('Condition and concession both take the subjunctive: {se vier}, {ainda que fosse}.'),
    },
    {
      n: '§4',
      text: T('Time changes the verb: {quando eu vier} is future, {quando eu vim} is past.'),
    },
    {
      n: '§5',
      text: T('Conformity: {conforme}, {segundo}, {como}; comparison: {como}, {do que}, {que}.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek marks each value with a different particle ({ὅτι}, {ἵνα}, {εἰ}, {ἀν}, {ὡς}, {ὅπως}, {καθώς}) and Hebrew uses constructions with particles. Portuguese uses one word per value, and the translation chooses which.',
      ),
    },
    {
      label: T('Where Greek is more economical'),
      text: T(
        'Where Greek has {ἵνα} plus subjunctive, Portuguese has {para que} plus subjunctive: two words for one. Where Greek has {εἰ} plus an indicative, Portuguese has {se} plus subjunctive, and the verb changes tense.',
      ),
    },
  ],
  examples: [
    { text: 'Não vi, porque chovia.', gloss: T('Cause with {porque} after the verb.') },
    { text: 'Chovia; por isso não saímos.', gloss: T('Consequence with {por isso}.') },
    { text: 'Se vier, avise-me.', gloss: T('Condition with the verb in the subjunctive.') },
    {
      text: 'Embora fosse difícil, ele foi.',
      gloss: T('Concession without {que}: that is the rule.'),
    },
    {
      text: 'Ainda que fosse difícil, ele foi.',
      gloss: T('The same idea with another conjunction.'),
    },
    { text: 'Vem para que eu te veja.', gloss: T('Purpose with {para que} plus subjunctive.') },
    { text: 'Quando eu vier, aviso.', gloss: T('Time: future subjunctive.') },
    { text: 'Conforme o testemunho, basta.', gloss: T('Conformity with {conforme}.') },
  ],
  tables: [
    {
      caption: T('The values and their words'),
      head: ['Valor', 'Conjunções'],
      rows: [
        ['causa', 'porque, como, já que, visto que'],
        ['consequência', 'por isso, de sorte que, portanto'],
        ['condição', 'se, caso, salvo que, desde que'],
        ['concessão', 'embora, ainda que, mesmo que, por mais que'],
        ['finalidade', 'para que, a fim de que, com'],
        ['tempo', 'quando, enquanto, antes que, depois que, assim que'],
        ['comparação', 'como, do que, que'],
        ['conformidade', 'conforme, segundo, como'],
      ],
    },
    {
      caption: T('What each one governs'),
      head: ['Conjunção', 'O que vem depois'],
      rows: [
        ['porque', 'indicativo ou qualquer tempo'],
        ['se', 'futuro do subjuntivo ou imperfeito'],
        ['embora', 'subjuntivo, sem que'],
        ['para que', 'subjuntivo'],
        ['quando', 'futuro do subjuntivo no futuro'],
        ['como', 'indicativo'],
      ],
    },
    {
      caption: T('Concessives and the verb'),
      head: ['Forma', 'Verbo', 'Correto?'],
      rows: [
        ['embora', 'fosse', 'sim'],
        ['embora que', 'fosse', 'não'],
        ['ainda que', 'fosse', 'sim'],
        ['mesmo que', 'fosse', 'sim'],
        ['por mais que', 'fosse', 'sim'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which construction is correct?'),
    options: [
      T('embora fosse difícil'),
      T('embora que fosse difícil'),
      T('embora que difícil fosse'),
      T('embora difícil que fosse'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{para que} requires a verb in the ______.'),
      answer: 'subjuntivo',
      hint: T('It is the mark of purpose.'),
    },
    {
      kind: 'choose',
      prompt: T('In “conforme o testemunho”, {conforme} is:'),
      options: [T('conformity'), T('cause'), T('concession'), T('comparison')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the conjunction to its value.'),
      pairs: [
        { a: T('porque'), b: T('causa') },
        { a: T('embora'), b: T('concessão') },
        { a: T('para que'), b: T('finalidade') },
        { a: T('conforme'), b: T('conformidade') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
