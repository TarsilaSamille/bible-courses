import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('dass and zu + infinitive'),
  subtitle: T('subordination, purpose and reason'),
  section: T('The verbs'),
  body: C(`The German subordinate clause has a visible formal marker: the set dass comes first, and the finite verb goes to the end. Ich glaube, dass Gott ist places the verb last, unlike Portuguese. The same happens with the causal weil and the temporal wenn, which also send the verb to the end: weil er krank ist, wenn du kommst. What is preserved is the person; what moves is the position. The advantage is practical: since the verb closes the subordinate clause, the listener knows immediately where the subordination ends, even when it comes before the main verb.

Not everything admits dass. Three verb constructions always use zu + infinitive and nothing else: purpose, habitual relation, and purpose denied by means of nicht. Ich komme, um zu lernen, Ich gehe oft schwimmen, Ich habe keine Lust, noch einmal auszugehen. All three can be rewritten with a full clause: der Wunsch, dass du kommst, die Gewohnheit, dass er geht, and die Einsicht, dass es besser wäre, nicht zu gehen. The construction with zu and infinitive does not have the same value: it does not like an expressed subject, and the subject is born inside the infinitive.

There are also three fixed pairs: statt... zu, instead of; anstatt... zu, instead of; ohne... zu, without doing; um... zu, in order to. The particle zu closes the phrase and the finite verb stays in the normal position of the main clause, before it: Ich trinke, statt zu schlafen. Compare with Ich trinke nicht, um zu schlafen, where the particle comes after the verb.

Reason and purpose are the two ends of the same idea: Ich lerne, weil ich Gott dienen will says why, and Ich lerne, um Gott zu dienen says to what end. In Portuguese the two barely differ; in German the distinction is obligatory, and this is why understanding both roles means understanding the logic of the texts.`),
  vocab: [
    V('dass', 'dass', 'that (subordination marker)'),
    V('zu', 'zu', 'to, for (preposition and particle)'),
    V('um', 'um', 'in order to (purpose)'),
    V('weil', 'weil', 'because (reason)'),
    V('wenn', 'wenn', 'when, if (time and condition)'),
    V('obwohl', 'obwohl', 'although (concession)'),
    V('zu + Infinitiv', 'zu', 'to + infinitive (purpose)'),
    V('lernen', 'lernen', 'to learn'),
    V('dienen', 'dienen', 'to serve (someone)'),
    V('glauben', 'glauben', 'to believe, to think'),
    V('kommen', 'kommen', 'to come'),
    V('schlafen', 'schlafen', 'to sleep'),
    V('trinken', 'trinken', 'to drink'),
    V('statt', 'statt', 'instead of'),
    V('ohne', 'ohne', 'without (particle)'),
    V('anstatt', 'anstatt', 'instead of (variant)'),
    V('weiss', 'wissen', 'that (indirect subordination)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence correctly places the finite verb at the end?'),
    options: [
      T('Ich hoffe, dass wir uns sehen.'),
      T('Ich hoffe, dass sehen wir uns.'),
      T('Ich hoffe, wir sehen uns, dass.'),
      T('Ich hoffe, wir dass uns sehen.'),
    ],
    answer: 0,
    hint: T('The dass clause is self-contained: the finite verb closes the sentence.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the purpose: Ich komme, ___ lernen (in order to learn).'),
      answer: 'um zu',
      hint: T('Purpose takes um ... zu.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Ich trinke, statt zu schlafen", why does the verb trinke come before statt?'),
      options: [
        T('The particle zu closes the phrase, and the verb of the main clause precedes it.'),
        T('German allows no inversion of any kind.'),
        T('statt is an auxiliary verb and therefore comes later.'),
        T('Word order is always random in spoken German.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete the reason: Er hilft ihm, ___ er arm ist (because he is poor).'),
      answer: 'weil',
      hint: T('Reason is different from purpose.'),
    },
    {
      kind: 'match',
      prompt: T('Match the connector to its use.'),
      pairs: [
        { a: T('dass'), b: T('complement, verb at the end') },
        { a: T('um ... zu'), b: T('purpose') },
        { a: T('ohne ... zu'), b: T('negation of an infinitive') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'After dass, weil, wenn, obwohl and other connectors, the finite verb goes to the end of the clause: Er sagt, dass er kommt.',
      ),
    },
    {
      n: '2',
      text: T(
        'For purpose only um ... zu or statt/anstatt/ohne ... zu are used; never *um zu gehen as a main clause with an expressed subject.',
      ),
    },
    {
      n: '3',
      text: T(
        'The particle zu closes the phrase, and so the finite verb of the main clause stands before it: Ich trinke, statt zu schlafen.',
      ),
    },
    {
      n: '4',
      text: T(
        'Reason takes weil, purpose takes um ... zu; swapping one for the other changes the meaning of the sentence even when the translation looks the same.',
      ),
    },
    {
      n: '5',
      text: T(
        'verb + zu + infinitive means to learn to do: Ich lerne schreiben, Er kann gut kochen.',
      ),
    },
  ],
  notes: [
    {
      label: T('Inversion as a signpost'),
      text: T(
        'The verb at the end serves the listener: in a long sentence, the listener hears Ich glaube and still does not know whether the clause goes on. When ist arrives, he knows the subordination has ended. It is the same economy found in writing: the punctuation of a sentence is, in practice, the position of its verb. Anyone learning word order in module 9 is already applying the logic seen here in the clauses.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "In John 3:16 Luther's translation writes hat Gott die Welt geliebt, dass auch wir Kinder Gottes sind: the reason sits in dass with the verb at the end, the same device as the verses of Romans, die Kraft Gottes ist den Gehorsam des Glaubens. The mögen form shows the clause is not optative but assertive: the condition of faith is presented as fact.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich glaube, dass Gott ist.',
      gloss: T('I believe that God exists (verb at the end).'),
    },
    {
      text: 'Er bleibt, weil er krank ist.',
      gloss: T('He stays because he is ill (weil + verb at the end).'),
    },
    {
      text: 'Wenn du kommst, feiern wir.',
      gloss: T('When you come, we will celebrate (time, verb at the end).'),
    },
    {
      text: 'Obwohl es regnet, gehen wir.',
      gloss: T('Although it is raining, we are going (concession).'),
    },
    { text: 'Ich komme, um zu lernen.', gloss: T('I am coming in order to learn (purpose).') },
    {
      text: 'Ich trinke, statt zu schlafen.',
      gloss: T('I drink instead of sleeping (verb before statt ... zu).'),
    },
    {
      text: 'Er ging, ohne zu antworten.',
      gloss: T('He left without answering (negated infinitive).'),
    },
    {
      text: 'Ich lerne, um Gott zu dienen.',
      gloss: T('I am learning in order to serve God (two zu, different roles).'),
    },
    {
      text: 'Er lernt lesen.',
      gloss: T('He is learning to read (verb + zu + infinitive, skill sense).'),
    },
  ],
  tables: [
    {
      caption: T('Connector, verb position and value'),
      head: ['Conector', 'Verbo', 'Valor'],
      rows: [
        ['dass', 'no fim', 'objeto, sujeito, complemento'],
        ['weil', 'no fim', 'motivo'],
        ['wenn', 'no fim', 'tempo, condição'],
        ['obwohl', 'no fim', 'concessão'],
        ['um ... zu', 'na oração principal', 'finalidade'],
        ['ohne ... zu', 'na oração principal', 'negação de um infinitivo'],
        ['(an)statt ... zu', 'na oração principal', 'substituição de um infinitivo'],
      ],
    },
    {
      caption: T('Comparing zu and que'),
      head: ['Pergunta', 'Resposta com dass', 'Resposta com zu'],
      rows: [
        ['Finalidade', 'der Wunsch, dass ich lerne', 'um zu lernen'],
        ['Hábito', 'die Gewohnheit, dass ich lerne', 'oft zu lernen'],
        ['Negação de finalidade', 'der Wunsch, dass ich nicht lerne', 'nicht zu lernen'],
        ['Onde está o sujeito?', 'expresso: ich', 'dentro do infinitivo'],
        ['Ordem', 'verbo conjugado no fim', 'verbo conjugado antes de um/zu'],
      ],
    },
  ],
};
