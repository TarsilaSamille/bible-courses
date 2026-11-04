import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Romans 8 in the Vulgate'),
  subtitle: T('{Nihil ergo condemnatio est} — thirty-nine verses, period by period'),
  section: T('Reading'),
  body: C(`## The text

A selection from Romans 8, in the order of the chapter. The verses are whole; what changes is the gaze, which goes after the main verb.

> **Nihil ergo condemnatio est his qui sunt in Christo Iesu.**
> **Lexus enim Spiritus vitae in Christo Iesu libertatem peccati et mortis.**
> **Si autem Christus in vobis, corpus quidem mortuum est propter peccatum, spiritus autem vivus est propter iustitiam.**
> **Non enim accepistis spiritum servituti iterum ad timorem, sed accepistis spiritum adoptionis, in quo clamamus: Abba, Pater!**
> **Spes autem expectatio est rerum: sed spes quae conspicitur, ea non est spes. Si enim quae conspicitur, spes est: si autem quae non conspicitur, eam expectamus.**
> **Scimus autem quia omnibus qui dividuntur secundum carnem sunt sine lege; iis autem qui secundum spiritum sunt, lex vitae est.**
> **Si enim Deus pro nobis, quis contra nos?**
> **Neque creatura alia poterit nos separare a caritate Dei, quae est in Christo Iesu Domino nostro.**

## Period by period

**8:1** is a simple period with one relative clause. The subject is {nihil}, the verb is {est} and the nominal predicate is {condemnatiō}: {condemnatiō est his} means "there is condemnation for them", not "the condemnation is them". The subordinate clause {quī sunt in Christo Iesu} is a relative, and the {ergo} at the beginning joins nothing: it is a particle, and what it does is take up everything Paul wrote in the seven verses before and close it. One verse, one main clause, one subordinate clause of relative degree.

**8:2** repeats the nominal construction of the verse before, and {est} disappears again: {lexus} is nominative, {Spiritus} and {vitae} are genitives, and the whole clause means "the law of the Spirit of life". Two sentences in a row without a verb is something Latin does and English does not; a word-for-word translation writes a sentence with no verb and concludes that it slipped.

**8:10** is compound, with one conditional and two main clauses. {Si autem Christus in vobis} is the subordinate clause, and the subjunctive {sīt} is left out. Then come two clauses in a pair ({corpus quidem mortuum est} and {spiritus autem vivus est}), each with its own {autem}, and the pair is marked by {quidem} and {autem}: "the body, indeed, is dead, but the Spirit, on the other hand, is alive".

**8:15-16** is the flattest period in the chapter and the hardest to translate. {Non enim accepistis ... sed accepistis} is the correction: {non} appears twice, and the object changes from {spiritum servituti} to {spiritum adoptionis}. The {iterum ad timorem} of the first member is what a translation is bound to lose: "you did not receive again the spirit of slavery to fear". The {in quo clamamus} adds a relative of place, and {Abba, Pater!} is an exclamation inside the relative, with two vocatives.

**8:31** is the shortest and densest period: {Si enim Dēus prō nōbis} is the conditional, and {quis contrā nōs?} is the main clause, a rhetorical question that waits for no answer. One subordinate clause and one question, eleven words.

**8:38-39** is a list of negations, and it is the only place in the chapter where the main verb comes twice: {sum} in {certus sum} and {poterit} in {poderit nos separare}. The relative {quae est in Christo Iesu Domino nostro} closes the chapter and translates a Greek participle.

## The chain of 8:24-28

The hardest stretch of Romans 8 is not the longest, it is the most chained. In {spes autem expectatio est rerum} there is no personal verb: {spes} is the subject, {expectatio} is the predicate ("hope is expectation"), and {est} closes. In {sed spes quae conspicitur, ea non est spes} the first relative enters ({quae conspicitur}, which points back to {spes}) along with two clauses joined by {sed} and {nōn}. In {si enim quae conspicitur, spes est: si autem quae non conspicitur, eam expectamus} come the two conditionals, with {enim} in the first and {autem} in the second: the pair that explains the logic of Paul is the pair of 8:10, {corpus quidem mortuum est, spiritus autem vivus est}, with the same alternation.

And {Scimus autem quia omnibus qui dividuntur secundum carnem sunt sine lege} is the point where the rule of the oblique appears and is disobeyed. The verb of the report is {scīmus}, and {sunt} should be {sint} if the Vulgate obeyed the sequence. It does not: it keeps the indicative, and the effect is that 8:28 sounds like an assertion by Paul rather than a quotation. In {iis autem qui secundum spiritum sunt, lex vitae est} the same happens: {sunt} indicative, and {lex vitae est} is another nominal clause, with {lex} as subject and {vitae} as genitive. Romans 8 alternates verbal and nominal clauses from beginning to end, and the chapter cannot be read without counting which is which.

## What stays

The method is the one of 1 Corinthians 13 applied to a whole chapter. First, find the main verb of each verse and note the mood. Then count the subordinate clauses and give each one its degree from the connective. Third, and only then, translate, and translate each clause in the order Latin put it in, even when English wants another.

What Romans 8 teaches and no single lesson teaches: biblical Latin is a prose of degrees. Every verse has a main verb and a chain of connectives around it, and the chain is the argument. A verse with no explicit verb is not a weak verse; it is a nominal clause, and in Paul they are as common as the verbal ones.

Editions of the Vulgate differ in the punctuation and in isolated words of Romans 8, and the analysis below depends on none of those choices: it depends on where the verbs are, and the verbs do not move.`),
  vocab: [
    V('nihil', 'nihil', 'nothing (nom. n. sg., subject of {condemnatiō est})'),
    V('condemnatiō', 'condemnatio', 'condemnation (nom. f. sg., predicate)'),
    V('lexus', 'lexus', 'law (nom. m. sg., from {lexus}, part. of {līgō})'),
    V('vitae', 'vita', 'of life (gen. f. sg.)'),
    V('corpus', 'corpus', 'body (nom./acc. sg.)'),
    V('mortuum', 'mortuus', 'dead (part. perf. pass.)'),
    V('spiritus', 'spiritus', 'spirit (nom. sg.)'),
    V('servitūtis', 'servitus', 'of slavery (gen. f. sg.)'),
    V('adoptionis', 'adoptio', 'of adoption (gen. f. sg.)'),
    V('conspicitur', 'conspicio', 'is seen (present passive)'),
    V('eam', 'is', 'the hope (feminine demonstrative pronoun = {spes})'),
    V('sine lege', 'sine lege', 'without law (ablative, {sine} + {lex})'),
    V('separare', 'separo', 'to separate (present infinitive)'),
    V('caritate', 'caritas', 'of love (abl. f. sg.)'),
    V('separabit', 'separo', 'will separate (future of {separō})'),
    V('certus', 'certus', 'certain (adjective: sure of)'),
    V('poterit', 'possum', 'will be able (future of {possum})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {Nihil ergo condemnatio est his qui sunt in Christo Iesu}, what is the main verb?',
    ),
    options: [
      T('{est}, of {sum}, with {nihil} as subject and {condemnatiō} as nominal predicate'),
      T('{sunt}, of the relative clause {quī sunt}'),
      T('{ergo}, which is a particle'),
      T('There is no verb: the sentence is entirely nominal'),
    ],
    answer: 0,
    hint: T('The nominal {condemnatiō est} is the core; {quī sunt} is subordinate.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T(
        'In {Si autem Christus in vobis, corpus quidem mortuum est ...}, what is the degree of the subordinate clause?',
      ),
      options: [
        T('Conditional: {sī} with the subjunctive {sīt} left out'),
        T('Causal: {autem} introduces the cause'),
        T('Temporal: {si} marks time'),
        T('Comparative: {autem} compares the two halves'),
      ],
      answer: 0,
      hint: T(
        'Rule §2: {sī} with a conditional sense takes the subjunctive, and the verb is dropped when the subject is the same.',
      ),
    },
    {
      kind: 'fill',
      prompt: T('In 8:38, the main verb of the second clause is ___ (future of {possum})'),
      answer: 'poterit',
      hint: T('The list of negations ends in a verb of ability.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'In {scīmus autem quia ... sunt}, classical Latin would ask for the subjunctive ___ (3rd pl. of {sum})',
      ),
      answer: 'sint',
      hint: T('It is the oblique sequence: the indicative {sunt} should be {sint}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each stretch of Romans 8 to what it is'),
      pairs: [
        { a: T('{condemnatiō est}'), b: T('nominal clause: {est} with a predicate') },
        { a: T('{quī sunt in Christo Iesu}'), b: T('subordinate clause of relative degree') },
        { a: T('{sī autem Christus in vobis}'), b: T('conditional clause, with {sīt} left out') },
        { a: T('{Abba, Pater!}'), b: T('exclamation with two vocatives, inside the relative') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rules §1 and §2: every clause of Romans 8 has a verb, even when {est} disappears.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A nominal clause is one that has {est} with a nominative predicate: {condemnatiō est}, {lexus est}, {spes est}. It has no verb of its own; a word-for-word translation writes a sentence without a verb.',
      ),
    },
    {
      n: '2',
      text: T(
        'Every subordinate clause in Romans 8 has a degree: relative ({quī sunt}), conditional ({sī ... sit}), causal ({quia}), temporal ({postquam}). The connective decides the degree.',
      ),
    },
    {
      n: '3',
      text: T(
        'The correction with {sed} and {autem} is the spine of the chapter: {corpus quidem mortuum est, spiritus autem vivus est} is the same pair as 8:25, and a reader who recognises it reads the whole chapter faster.',
      ),
    },
    {
      n: '4',
      text: T(
        'The oblique in the chapter does not keep the sequence: {scīmus quia ... sunt} stays in the indicative, and the text must be read in the voice of Paul.',
      ),
    },
    {
      n: '5',
      text: T(
        'The main verb is not always visible: in {Si autem Christus in vobis}, {sīt} is left out because the subject is the same as the main clause.',
      ),
    },
  ],
  notes: [
    {
      label: T('The list of 8:38-39'),
      text: T(
        'The final list ({mors}, {vīta}, {angelī}, {archangelī}, {prīncipātūs}, {virtūtēs}, {instantia}, {altitūdō}, {profundum}, {creātūra alia}) is a climax: each negation adds a category, from death to creation itself. It is the one place in the chapter where the noun carries more weight than the verb, and that is why the chapter ends on a noun and not on a verb: the love of God is the one thing that does not become a list.',
      ),
    },
    {
      label: T('Why Romans 8 is the best closing exercise'),
      text: T(
        'The chapter uses everything the course has seen and invents nothing: nominal and verbal clauses, chained relatives, conditionals, the oblique that disobeys the sequence, the particle {autem} in the middle of the period, gerund and participle in {secundum carnem}. A verse-by-verse analysis exercises the method, not the memory.',
      ),
    },
  ],
  examples: [
    {
      text: 'Nihil ergo condemnatiō est',
      gloss: T('there is then no condemnation (nominal clause, Rom 8:1)'),
    },
    { text: 'quī sunt in Christo Iesu', gloss: T('who are in Christ Jesus (relative, degree 1)') },
    {
      text: 'lexus enim Spiritus vitae',
      gloss: T('for the law of the Spirit of life (nominal, with {est} left out)'),
    },
    {
      text: 'corpus quidem mortuum est',
      gloss: T('the body, indeed, is dead ({quidem} opens the pair)'),
    },
    {
      text: 'spiritus autem vivus est',
      gloss: T('but the Spirit is alive ({autem} closes the pair)'),
    },
    { text: 'iterum ad timorem', gloss: T('again to fear ({iterum} + {ad} + accusative)') },
    {
      text: 'in quo clamamus: Abba, Pater!',
      gloss: T('in whom we cry out: Abba, Father (relative + exclamation)'),
    },
    {
      text: 'spes quae conspicitur',
      gloss: T('the hope that is seen (relative, {quae} pointing to {spes})'),
    },
    {
      text: 'si autem quae non conspicitur, eam expectamus',
      gloss: T(
        'but if the one not seen, that one we await (conditional with {expectamus} in the indicative)',
      ),
    },
    { text: 'quis contrā nōs?', gloss: T('who against us? (rhetorical main clause, Rom 8:31)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Romans 8: main clause and subordinates'),
      head: [T('Verse'), T('Main clause'), T('Subordinates and degree'), T('Kind of period')],
      rows: [
        [
          T('8:1'),
          T('{nihil} + {est} + {condemnatiō}'),
          T('{quī sunt in Christo Iesu} (relativo)'),
          T('simples com relativa'),
        ],
        [
          T('8:2'),
          T('{lexus} + {est} omitido'),
          T('{Spiritus}, {vitae} (genitivos, não são orações)'),
          T('nominal'),
        ],
        [
          T('8:10'),
          T('{corpus ... est} e {spiritus ... est}'),
          T('{sī autem Christus in vobis} (condicional)'),
          T('composto com duas principais'),
        ],
        [T('8:15'), T('{accepistis}'), T('{in quo clamamus} (relativo de lugar)'), T('composto')],
        [
          T('8:25'),
          T('{eam expectamus}'),
          T('{sī ...} (duas condicionais)'),
          T('composto encadeado'),
        ],
        [
          T('8:28'),
          T('{scīmus}'),
          T('{quia} (causal), {quī dividuntur} (relativo)'),
          T('oblíqua sem sequência'),
        ],
        [
          T('8:31'),
          T('{quis contrā nōs?}'),
          T('{sī enim Dēus prō nōbis} (condicional)'),
          T('composto'),
        ],
        [
          T('8:39'),
          T('{poterit nos separare}'),
          T('{neque ... neque ...} (enumeração)'),
          T('complexo'),
        ],
      ],
    },
    {
      caption: T('Table 2 — Verbs of Romans 8, mood and tense'),
      head: [T('Form'), T('Verb'), T('Mood and tense'), T('Portuguese')],
      rows: [
        ['{est}', '{sum}', 'indicativo presente', 'é / há'],
        ['{sunt}', '{sum}', 'indicativo presente (oblíqua)', 'são'],
        ['{mortuum est}', '{morior}', 'perifrástico passivo', 'está morto'],
        ['{accepistis}', '{accipio}', 'perfeito indicativo', 'recebestes'],
        ['{conspicitur}', '{conspicio}', 'presente passivo', 'é vista'],
        ['{expectamus}', '{exspecto}', 'presente indicativo', 'esperamos'],
        ['{scīmus}', '{sciō}', 'presente indicativo', 'sabemos'],
        ['{poterit}', '{possum}', 'futuro indicativo', 'poderá'],
        ['{sīt} (omitido)', '{sum}', 'subjuntivo presente', 'esteja'],
      ],
    },
  ],
};
