import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('The period: its three shapes'),
  subtitle: T('Simple, compound and complex — and the degree of each subordinate clause'),
  section: T('Syntax'),
  body: C(`## The simple period

A period is what is said in one go, from one point to another, with no punctuation in between. The simple period has a single clause: a subject, a verb, whatever the verb governs. {Deus caritās est} is the shortest example there is, and it is a complete clause: nominative, verb {est}, nominative predicate. {Hic est fīlius meus dīlectus} is simple too, with {hīc} an adverb, {est} the verb and {fīlius} the subject.

The simple period is rare in the prose of Paul, and that is not an accident. A writer who wants to show that one thing follows from another needs two clauses; a writer who wants to show cause needs cause. The simple sentence is the sentence of assertion, and the Vulgate almost never asserts without arguing.

## The compound period

The compound period has two clauses: a main clause and a subordinate one, joined by a connective. {Quī credit in mē, etiam si mortuus fuerit, vivet} has a main clause ({vivet}, "he will live") and a subordinate clause ({quī credit in mē, etiam si mortuus fuerit}), which is conditional and carries a second subordinate clause inside it ({etiam si mortuus fuerit}). What makes the period compound is the subordinate clause; what makes it easy is there being only one.

Here is the detail that changes the reading: in Latin the subordinate clause almost always comes **before** the main one. The main verb ends up last, and that is why Latin is read backwards. English has a free order and puts the subject first; Latin opens with the connective and closes with the verb.

## The complex period

The complex period is the one with three clauses or more, and it is there that the writer shows. What distinguishes it is not the number of subordinate clauses but the **degree**: the first subordinate clause can carry the second, and the second can carry the third, and it is that chain that makes the period.

In 1 Corinthians 2:4 the Vulgate writes {sed in manifestātiōne spīritūs et virtūtis, et nōn in sapientiāe verbōrum, sed in virtūte Dei}. The structure is: {sed} opens the contrast; {in manifestatione} and {in virtute} are two ablative regimes; {et non in sapientiae verborum} denies the second of them; {sed in virtute Dei} replaces it. Five segments, one idea. A translator who translated each segment on its own would produce a sentence that never ends; a reader who understands the degree produces one sentence.

The degree of the subordinate clauses is what matters:

| Degree | Connective | Mood of the verb | Example |
|---|---|---|---|
| causal | {quod}, {quia}, {quoniam}, {ut} | indicative | {scīmus quia vēnit} |
| final | {ut}, {ne} | subjunctive | {vēnit ut videat} |
| completive | {ut}, {quod} | subjunctive or indicative | {nesciō quid faciam} |
| conditional | {sī}, {nisi} | subjunctive | {sī vēnit, videbit} |
| concessive | {cum}, {quamquam}, {etiamsī} | subjunctive or indicative | {cum sīt stultus, errat tamen} |
| comparative | {quasi}, {sicut}, {tamquam}, {velut} | indicative | {sicut fīlius} |
| temporal | {cum}, {ubi}, {dum}, {antequam} | indicative or subjunctive | {cum vēnisset} |
| consecutive | {ita}, {tam}, {tanta ... quanta} | indicative | {ita ut confundat} |

Two of those lines need a reading. The causal {quod} takes the indicative when the speaker endorses the content as true, and the subjunctive when it is the opinion of someone else. And temporal {cum} changes mood according to the time it marks: {cum vēnit} "when he was coming", {cum vēnisset} "when he had come, since he had come".

## Where Greek shows up in English

The Latin of the Vulgate is a language of subordination, and the Greek word behind it is {ὑπόταξις}: the Greek period puts every subordinate clause in front and the main clause at the end, in ascending order of dependence. That is the opposite of the Hebrew habit, which strings one clause to another with {καί} and leaves the main clause in the middle, as in Psalm 21:3, {Dīvīsērunt sibi vestimenta mea}.

The effect in English is visible: a sentence of Paul, translated, tends to have "because", "so that", "although" and "since" stacked up, and the modern translator ends up reading the period over again in English to put the verb where English wants it. That is exactly where the Greek feels Greek: not in the vocabulary, but in the order the ideas appear in.

The period of the Vulgate has one feature Greek does not: the particle {autem}, which shows up in the middle of the period and always returns to the same spot. In {scīmus autem quia ...} it does not join two clauses, it changes the tone. A translator who treats it as "but" writes something different from what the Latin did.`),
  vocab: [
    V('Deus', 'Deus', 'God (nom. sg., subject of {est})'),
    V('caritās', 'caritas', 'love (nom. f. sg., predicate)'),
    V('est', 'sum', 'is (verb {sum}, 3rd sg.)'),
    V('fīlius', 'filius', 'son (nom. sg.)'),
    V('dīlectus', 'dilectus', 'beloved (part. perf. pass.)'),
    V('vivet', 'vivo', 'lives (pres. ind.) or will live (fut. ind.)'),
    V('credit', 'credo', 'believes (pres. ind. 3rd sg.)'),
    V('vēnit', 'venio', 'comes (pres. ind.) or came (perf. ind.)'),
    V('sed', 'sed', 'but (adversative connective)'),
    V('et', 'et', 'and (additive connective)'),
    V('nōn', 'non', 'not (adverb of negation)'),
    V('fuerit', 'sum', 'has been (perf. subj. 3rd sg., in the concessive)'),
    V('manifestātiōne', 'manifestatio', 'manifestation (abl. f. sg., of means)'),
    V('sapientiāe', 'sapientia', 'wisdom (gen. f. sg., governing {verbōrum})'),
    V('virtūte', 'virtus', 'power (abl. f. sg.)'),
    V('Dei', 'deus', 'of God (gen. m. sg.)'),
    V('verbōrum', 'verbum', 'words (gen. pl.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus caritās est}, what kind of period is this?'),
    options: [
      T('Simple: one clause, a subject, a verb and a nominative predicate'),
      T('Compound: the noun {caritās} is a subordinate clause'),
      T('Complex: {Deus} and {caritās} are two clauses'),
      T('Nominal: there is no verb'),
    ],
    answer: 0,
    hint: T('Rule §1: a simple period has exactly one clause.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why does the Latin of the Vulgate usually put the main verb last?'),
      options: [
        T(
          'Because the subordinate clause comes first by rule, and the main clause closes the period',
        ),
        T('Because Latin is a language of fixed word order like Greek'),
        T('Because the verb cannot be in the middle in any Indo-European language'),
        T('Because the relative pronoun comes first'),
      ],
      answer: 0,
      hint: T('Rule §2: subordinate first, main clause last, and Latin is read backwards.'),
    },
    {
      kind: 'fill',
      prompt: T('In {Quī credit in mē, etiam si mortuus fuerit, vivet}, the main verb is ___'),
      answer: 'vivet',
      hint: T('The conditional clause opens the sentence; the main verb closes it.'),
    },
    {
      kind: 'fill',
      prompt: T('In {cum sīt stultus, errat tamen}, the {cum} is a ___ subordinate clause'),
      answer: 'concessiva',
      hint: T('Subjunctive after {cum} means concession: "although".'),
    },
    {
      kind: 'match',
      prompt: T('Match the connective to the degree it introduces'),
      pairs: [
        { a: T('{ut}'), b: T('final or completive') },
        { a: T('{sī}'), b: T('conditional') },
        { a: T('{cum}'), b: T('temporal or concessive, according to the mood') },
        { a: T('{ita ... ut}'), b: T('consecutive') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rule §3: the connective decides the degree; {cum} decides twice.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A simple period has one clause; a compound period has two; a complex period has three or more, chained by degree.',
      ),
    },
    {
      n: '2',
      text: T(
        'In Latin the subordinate clause comes before the main one: the main verb closes the period, and that is why Latin is read backwards.',
      ),
    },
    {
      n: '3',
      text: T(
        'The degree of the subordinate clause is decided by the connective: {quod} causal, {ut} final or completive, {sī} conditional, {cum} temporal or concessive, {quasi} comparative, {ita ... ut} consecutive.',
      ),
    },
    {
      n: '4',
      text: T(
        'The same connective can serve different degrees: {cum} is temporal with the indicative and concessive with the subjunctive; {quod} is causal in the indicative and oblique in the subjunctive.',
      ),
    },
    {
      n: '5',
      text: T(
        'The particle {autem} does not join clauses: it marks the tone inside the period and always holds the second position.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin puts the verb last'),
      text: T(
        'It is not arbitrariness: it is a consequence of the subordinate clause being obliged to come first. If the subordinate clause opens the sentence and the main clause closes it, the main verb ends up last by structural necessity, not by style. Greek does the same, and that is why translated Pauline texts sound twisted until the reader gets used to the eye.',
      ),
    },
    {
      label: T('The complex period is what distinguishes the writer'),
      text: T(
        "Anyone writes simple and compound periods. What separates one author from another is the number of degrees he chains without losing the thread, and that is why Paul's prose is recognisable even when the vocabulary is the commonest there is. A badly built complex period is a tangle; a well built one is proof that the writer had the whole argument in his head before he wrote the first word.",
      ),
    },
  ],
  examples: [
    { text: 'Deus caritās est', gloss: T('God is love (simple period, 1 Jn 4:8)') },
    {
      text: 'Quī credit in mē, etiam si mortuus fuerit, vivet',
      gloss: T('whoever believes in me, even if he is dead, will live (compound period)'),
    },
    {
      text: 'sed in manifestatione spiritus et virtutis',
      gloss: T('but in the manifestation of the Spirit and of power (ablative of means)'),
    },
    {
      text: 'et nōn in sapientiāe verbōrum',
      gloss: T('and not in the wisdom of words (negation of the second regime)'),
    },
    {
      text: 'sed in virtūte Dei',
      gloss: T('but in the power of God (third segment, same ablative)'),
    },
    { text: 'scīmus quia vēnit', gloss: T('we know that he came (causal with the indicative)') },
    { text: 'vēnit ut videat', gloss: T('he came to see (final with the subjunctive)') },
    {
      text: 'cum sīt stultus, errat tamen',
      gloss: T('although he is a fool, he still errs (concessive)'),
    },
    { text: 'ita ut confundat', gloss: T('so that he confuses (consecutive)') },
    {
      text: 'scīmus autem quia',
      gloss: T('but we know that (particle in the second position, inside the period)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The three shapes of the period'),
      head: [T('Shape'), T('Clauses'), T('Example'), T('What the period marks')],
      rows: [
        [T('simples'), T('1'), T('{Deus caritās est}'), T('afirma')],
        [T('composto'), T('2'), T('{sī vēnit, videbit}'), T('uma subordinada, um grau')],
        [
          T('complexo'),
          T('3 ou mais'),
          T('{scīmus autem quia ... sit}'),
          T('dois ou mais graus encadeados'),
        ],
      ],
    },
    {
      caption: T('Table 2 — Degree of each subordinate clause'),
      head: [T('Degree'), T('Connective'), T('Modo do verbo'), T('Example')],
      rows: [
        [T('causal'), T('{quod}, {quia}'), T('indicativo'), T('{scīmus quia vēnit}')],
        [T('final'), T('{ut}, {ne}'), T('subjuntivo'), T('{vēnit ut videat}')],
        [T('completivo'), T('{ut}, {quod}'), T('subjuntivo'), T('{nesciō quid faciam}')],
        [T('condicional'), T('{sī}, {nisi}'), T('subjuntivo'), T('{sī vēnit, videbit}')],
        [
          T('concessivo'),
          T('{cum}, {quamquam}'),
          T('subjuntivo'),
          T('{cum sīt stultus, errat tamen}'),
        ],
        [T('comparativo'), T('{quasi}, {sicut}'), T('indicativo'), T('{sicut fīlius}')],
        [T('temporal'), T('{cum}, {ubi}, {dum}'), T('ind. ou subj.'), T('{cum vēnisset}')],
        [T('consecutivo'), T('{ita}, {tam}'), T('indicativo'), T('{ita ut confundat}')],
      ],
    },
  ],
};
