import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('The verb: form and tense'),
  title: T('The verb: verbal aspect'),
  subtitle: T('falou, falava, tinha falado, and what the inflection does'),
  body: C(`## The perfect and the imperfect

The two pasts of Portuguese are not distinguished by time but by aspect. The **perfect** presents the action as whole and finished: {falou}, {escreveu}, {chegou}. The **imperfect** presents the action as going on, as a process under way or as a habit: {falava}, {escrevia}, {chegava sempre cedo}.

The difference shows best with both verbs in one example: {Ele saiu quando eu chegava}. {Chegou} is perfect because the arrival is a whole; {chegava} is imperfect because the text means that I was already on my way and the arrival had not finished. Portuguese aspect does not answer how long, it answers whether the action is done.

## Compound aspect

Portuguese also has compound aspect, and it comes from Latin. The **pluperfect** is {tinha falado} or {havia falado}: the two mean the same thing, and the second is the more literary form and the one closest to the Latin original. It turns up in narrative, and it is how Portuguese says that an action was already over before another began.

There is also a compound future with the same material: {quando eu tiver falado com ele}, where the verb {ter} in the future builds the periphrasis. It is the only way to say “have spoken” as a future event, and it is the form that {ter de} uses underneath.

## The imperfect that speaks of the future

The rule that misleads most in biblical reading is that the **imperfect also serves for the future**. In Portuguese, the future of the past is imperfect: {Ele ia sair quando chegou}, {Eu ia visitá-lo}, {A chuva ia cair}.

It is a relic of the Portuguese system, and it happens because the Latin verb ended in {-amābam} and carried future and imperfect in one form. In Portuguese the shape {ia} serves as future and as imperfect alike. What the text says is that the action was about to begin, and something interrupted it.

For the translator the consequence is practical: one future form in Greek, one imperfect form in Portuguese. Where Greek uses the future to say what is going to happen, Portuguese uses the imperfect, and translating with the future loses the cut.

## Reading criterion

With any past verb, ask: is it perfect or imperfect? And if it is a pluperfect, was the action already finished? And is the text speaking of the past or of the future of the past?

Psalm 118:6 opens with a present: the Lord {é} the strength and the song of the one speaking. A translator coming from Greek finds a perfect there, and has to understand that this Greek form can mean {é}. It is aspect settling time: Portuguese settles it with {é}, and anyone who writes {foi} has traded the certainty of the sentence for a piece of news.`),
  vocab: [
    V('falou', 'falar', 'falou'),
    V('falava', 'falar', 'falava'),
    V('havia falado', 'falar', 'havia falado'),
    V('tinha falado', 'falar', 'tinha falado'),
    V('chegou', 'chegar', 'chegou'),
    V('chegava', 'chegar', 'chegava'),
    V('ia sair', 'sair', 'ia sair'),
    V('escreveu', 'escrever', 'escreveu'),
    V('escrevia', 'escrever', 'escrevia'),
    V('o aspecto', 'aspecto', 'aspect'),
    V('o perfeito', 'perfeito', 'the perfect'),
    V('o imperfeito', 'imperfeito', 'the imperfect'),
    V('o mais-que-perfeito', 'mais-que-perfeito', 'the pluperfect'),
    V('o futuro', 'futuro', 'the future'),
    V('o verbo', 'verbo', 'the verb'),
  ],
  rules: [
    {
      n: '§1',
      text: T('The perfect presents the action as whole and finished: {falou}, {chegou}.'),
    },
    {
      n: '§2',
      text: T(
        'The imperfect presents the action as going on, or as a habit: {falava}, {chegava sempre cedo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The pluperfect is {tinha falado} or {havia falado}, and marks an action already finished before another began.',
      ),
    },
    {
      n: '§4',
      text: T('The imperfect also carries future meaning in the past: {ia sair}, {ia chover}.'),
    },
    {
      n: '§5',
      text: T('Aspect does not mark time: it marks whether the action is whole or in process.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek does the same with the aorist and the imperfect, which is why literal translation keeps both forms without effort. The trouble starts where Greek uses the perfect with present meaning.',
      ),
    },
    {
      label: T('Literary form'),
      text: T(
        '{havia falado} is more literary and older than {tinha falado}. It is the {havia} that shows up in the 1611 translations; in present-day language almost only {ter} survives.',
      ),
    },
  ],
  examples: [
    { text: 'Ele saiu quando eu chegava.', gloss: T('Perfect and imperfect in one sentence.') },
    { text: 'Falou a verdade.', gloss: T('Whole action.') },
    { text: 'Falava toda noite.', gloss: T('Habit, with the imperfect.') },
    { text: 'Ele tinha falado antes.', gloss: T('Pluperfect: the action was already over.') },
    { text: 'Ele ia sair quando chegou.', gloss: T('Imperfect with future meaning in the past.') },
    { text: 'A chuva ia cair.', gloss: T('What was going to happen and was interrupted.') },
    { text: 'Havia falado com ele.', gloss: T('The more literary form of the same tense.') },
    { text: 'Quando eu tiver falado, saio.', gloss: T('Compound future with the same {ter}.') },
  ],
  tables: [
    {
      caption: T('Perfect and imperfect'),
      head: ['Aspecto', 'Exemplo', 'O que apresenta'],
      rows: [
        ['perfeito', 'falou', 'ação inteira e concluída'],
        ['imperfeito', 'falava', 'ação em curso'],
        ['imperfeito', 'falava toda noite', 'costume'],
        ['mais-que-perfeito', 'tinha falado', 'ação terminada antes de outra'],
      ],
    },
    {
      caption: T('Aspect in narrative'),
      head: ['Frase', 'Verbo', 'Aspecto'],
      rows: [
        ['Ele saiu quando eu chegava.', 'saiu', 'perfeito'],
        ['Ele saiu quando eu chegava.', 'chegava', 'imperfeito'],
        ['Ele tinha chegado antes.', 'tinha chegado', 'mais-que-perfeito'],
      ],
    },
    {
      caption: T('The tenses of Portuguese'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'falo', 'falo agora'],
        ['perfeito', 'falei', 'falei ontem'],
        ['imperfeito', 'falava', 'falava antes'],
        ['mais-que-perfeito', 'tinha falado', 'tinha falado ontem'],
        ['futuro', 'falarei', 'falarei amanhã'],
        ['condicional', 'falaria', 'falaria se pudesse'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which verb presents the action as whole?'),
    options: [T('chegou'), T('chegava'), T('chegaria'), T('havia chegado')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{ia sair} is an imperfect with ______ meaning.'),
      answer: 'futuro',
      hint: T('It is the future of the past.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form is the pluperfect?'),
      options: [T('tinha falado'), T('falou'), T('falava'), T('falaria')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the aspect to the example.'),
      pairs: [
        { a: T('perfeito'), b: T('chegou') },
        { a: T('imperfeito'), b: T('chegava') },
        { a: T('mais-que-perfeito'), b: T('tinha chegado') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
