import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('The Konjunktiv II'),
  subtitle: T('würde, hätte, wäre and the literary forms'),
  section: T('The verbs'),
  body: C(`The Konjunktiv II is the tense of what is not fact: hypothesis, wish, politeness, a report repeated without certainty. It is built in two ways. The first is analytic: every form takes würde plus a present infinitive. Ich würde kommen, ich würde gehen, ihr würdet sagen. It is the form German prefers in speech and in ordinary writing, and it is so regular that it almost needs no rule.

The second is synthetic, and it is the older form: the indicative ending plus a -t- or a double ending on the vowel. Ich hätte, du hättest, er hätte; ich wäre, du wärst, er wäre; ich käme, ich ginge, ich schließe. Notice that sein, haben and the modals, all with a variable root vowel, form a closed block, and it is that block that is used every day: hätte, wäre, würde, könnte, müsste, sollte, dürfte, möchte.

The mood of wish has a rule of tense that is the heart of the lesson. Ich hätte gern Kaffee describes a wish in the present, and if it were realised right now we would have coffee; ich hätte Kaffee gehabt speaks of a wish in the past, which can no longer be satisfied. The same rule applies to the Konjunktiv I: dass ich sei is a wish now, dass ich gewesen wäre is a wish that did not come true. In Portuguese this difference barely shows, which is why many learners translate both sentences with the same Eu queria.

Politeness is the second use, and it is cheaper than it looks. Ich hätte gern einen Kaffee is literally I would have a coffee gladly, that is, if I had one. Könnten Sie mir helfen? is the polite could you. If the Konjunktiv is a real possibility, the speaker adds gern, gerne or vielleicht, and it is that particle that returns warmth to the statement.

The Konjunktiv II is also the tense of the Provisionssatz, the conditional clause: Wenn ich Zeit hätte, würde ich mehr lesen. Both tenses appear together, and biblical reading depends on it.`),
  vocab: [
    V('würde', 'werden', 'I would (analytic Konjunktiv II)'),
    V('würde + Infinitiv', 'werden', 'to do (analytic form)'),
    V('hätte', 'haben', 'would have (from haben)'),
    V('hätten', 'haben', 'we would have (plural)'),
    V('wäre', 'sein', 'would be'),
    V('käme', 'kommen', 'would come (vowel change)'),
    V('ginge', 'gehen', 'would go (strong verb)'),
    V('schließe', 'schließen', 'would close (strong verb)'),
    V('könnte', 'können', 'could (modal)'),
    V('müsste', 'müssen', 'should (obligation)'),
    V('sollte', 'sollen', 'should, ought to'),
    V('möchte', 'mögen', 'would like (polite wish)'),
    V('dürfte', 'dürfen', 'would be allowed to'),
    V('gern', 'gern', 'gladly (softens the Konjunktiv)'),
    V('wenn ich Zeit hätte', 'haben', 'if I had time (conditional)'),
    V('Provisionssatz', 'Provisionssatz', 'conditional clause'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence uses the synthetic Konjunktiv II correctly?'),
    options: [
      T('Ich hätte mehr Zeit.'),
      T('Ich habe mehr Zeit.'),
      T('Ich gehabt mehr Zeit.'),
      T('Ich hatte mehr Zeit.'),
    ],
    answer: 0,
    hint: T('The synthetic form of haben is hätte, with a double ending.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the analytic form: Ich ___ gern mehr lesen.'),
      answer: 'würde',
      hint: T('It is the auxiliary that works with any verb.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is a wish about the past rather than the present?'),
      options: [
        T('Ich hätte gern fahren wollen.'),
        T('Ich hätte gern fahren.'),
        T('Ich würde fahren.'),
        T('Ich fahre gern.'),
      ],
      answer: 0,
      hint: T('The wish about the past carries an infinitive with zu.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the conditional: Wenn ich mehr Zeit ___, würde ich reisen.'),
      answer: 'hätte',
      hint: T('The subordinate clause is also in the Konjunktiv II.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its value.'),
      pairs: [
        { a: T('würde kommen'), b: T('hypothesis or politeness') },
        { a: T('hätte gern'), b: T('realisable wish') },
        { a: T('hätte ... getrunken'), b: T('unrealisable wish') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The analytic form is always available: würde + present infinitive, with no exception of person or verb.',
      ),
    },
    {
      n: '2',
      text: T(
        'In sein, haben and the modal verbs the synthetic form uses the indicative ending with -t-: ich hätte, du wärst, er müsste.',
      ),
    },
    {
      n: '3',
      text: T(
        'A wish in the present takes the infinitive, a wish in the past takes the past participle: Ich hätte gern gehen wollen / Ich hätte gehen sollen.',
      ),
    },
    {
      n: '4',
      text: T(
        'The conditional joins a Konjunktiv II in the subordinate clause (wenn ich Zeit hätte) and a Konjunktiv II in the main clause (würde ich lesen).',
      ),
    },
    {
      n: '5',
      text: T(
        'The particle gern returns real warmth to the Konjunktiv: Ich hätte gern einen Kaffee is warmer than Ich hätte einen Kaffee.',
      ),
    },
  ],
  notes: [
    {
      label: T('Impossible wish and possible wish'),
      text: T(
        'Ich hätte gern einen Kaffee has two possible readings, and context decides. Read in the present, it is a wish that would come true now if the conditions allowed it; read with a past participle, Ich hätte einen Kaffee getrunken, it is a wish about the past, unrealisable forever. Portuguese forces a choice between Queria and Gostaria de ter tomado; German keeps both options alive in the same verb form, and word order settles it.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "In 2 Corinthians 12, wäre besser, wenn er schwächer wäre: Luther's translation uses the Konjunktiv II for a hypothesis about the past that nobody can check. In Romans 3, hätten wir... does the same work across a text that argues from what did not happen. Recognising the -t- or the würde is what separates reading the text as fact and reading it as something renegotiated.",
      ),
    },
  ],
  examples: [
    { text: 'Ich würde gern kommen.', gloss: T('I would like to come (analytic form).') },
    {
      text: 'Ich hätte gern einen Kaffee.',
      gloss: T('I would like a coffee (wish in the present).'),
    },
    {
      text: 'Ich hätte einen Kaffee getrunken.',
      gloss: T('I would have had a coffee (wish about the past).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich mehr lesen.',
      gloss: T('If I had time, I would read more (full conditional).'),
    },
    { text: 'Könnten Sie mir bitte helfen?', gloss: T('Could you help me, please? (politeness).') },
    { text: 'Das wäre sehr freundlich.', gloss: T('That would be very kind (polite wish).') },
    { text: 'Es müsste stimmen.', gloss: T('That must be right (modal in the Konjunktiv II).') },
    {
      text: 'An deiner Stelle würde ich gehen.',
      gloss: T('In your place I would go (Konjunktiv II in an indirect clause).'),
    },
    {
      text: 'Er sagte, er käme später.',
      gloss: T('He said he would come later (Konjunktiv I in speech, II in report).'),
    },
  ],
  tables: [
    {
      caption: T('Synthetic forms of the Konjunktiv II'),
      head: ['Pronome', 'sein', 'haben', 'Modais'],
      rows: [
        ['ich', 'wäre', 'hätte', 'könnte, müsste, sollte'],
        ['du', 'wärst', 'hättest', 'könntest, müsstest'],
        ['er/sie/es', 'wäre', 'hätte', 'könnte, dürfte, möchte'],
        ['wir', 'wären', 'hätten', 'könnten, müssten'],
        ['ihr', 'wärt', 'hättet', 'könntet, müsstet'],
        ['Sie/sie', 'wären', 'hätten', 'könnten, möchten'],
      ],
    },
    {
      caption: T('Analytic or synthetic'),
      head: ['Contexto', 'Forma', 'Exemplo'],
      rows: [
        ['verbo comum', 'würde + Infinitiv', 'Ich würde gern kommen.'],
        ['desejo no presente', 'hätte + Infinitiv', 'Ich hätte gern einen Kaffee.'],
        ['desejo no passado', 'hätte + Partizip II', 'Ich hätte den Brief schreiben sollen.'],
        ['verbo sein', 'wäre / würde sein', 'Das wäre schön.'],
        ['verbo haben', 'hätte / würde haben', 'Ich hätte mehr Zeit.'],
        ['modal', 'forma sintética', 'Das müsste stimmen.'],
      ],
    },
  ],
};
