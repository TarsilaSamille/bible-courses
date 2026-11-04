import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Infinitives and the indirect statement'),
  subtitle: T('{dīcit eum vēnisse} — the AcI, the structure that replaced «that»'),
  section: T('Pronouns and sentence syntax'),
  body: C(`## Latin’s greatest invention

In Portuguese and Spanish, to say «he says **that** he is coming», you need {that} plus a full clause with a finite verb. Latin needs none of that. It says {dīcit eum {venīre}}: **accusative and infinitive**, or AcI. The subject goes into the accusative and the verb becomes an infinitive. That is all.

{Verbum dicendi} is the technical name for the verb that governs the construction — «verb of saying» — and it covers the whole group: {dīcere} «to say», {scire} «to know», {putāre} «to think», {iubēre} «to order», {cupere} «to want», {audīre} «to hear», {videre} «to see», {meminisse} «to remember». Every one of them governs the AcI, without exception.

So {dīcit eum {venīre}} means «he says that he is coming». You must write the accusative {eum} for the subject, and the infinitive has no subject of its own: the subject of the AcI is the accusative of the governing verb. It is the only clause in Latin whose subject is accusative, which is why grammars treat it as a special case — but after a few pages you will notice it is just one more oblique report: Latin has very few indirect statements, and almost all of them are AcI.

| Governing verb | Subject (acc.) | Infinitive | Translation |
|---|---|---|---|
| dīcit | eum | venīre | «he says that he is coming» |
| scient | eum | vēnisse | «they know that he came» |
| iubet | eōs | īre | «he orders them to go» |
| vult | mē | manēre | «he wants me to stay» |
| putat | mulierēs | fortēs esse | «he thinks that women are strong» |

Note the last line: {fortēs} agrees with {mulierēs}, not with the subject of the main clause. The AcI has its own agreement, and that is the classic trap.

## The four infinitives and what each one says

Latin has four infinitives, and three of them say **when** the action happens relative to the moment of the governing verb. That is the key to the whole system:

- {amāre} — present, **simultaneous**: «who loves»;
- {amāvisse} — perfect, **prior**: «who loved»;
- {amātūrum esse} — future, **subsequent**: «who will love»;
- {passūrum esse} — future active, for actions that LAST: «who will be loving».

{Spēro eum {vēnisse}} «I hope he has come» — perfect, because the coming is prior to the moment I hope. {Spēro eum {ventūrum esse}} «I hope he will come» — future, because the coming is subsequent. {Spēro eum {venīre}} «I hope he is coming» — present, because the coming is simultaneous. The choice among the four is purely a question of chronology.

The future of the AcI has a shape worth memorising by itself: the **future active participle** plus {esse}. {Amātūrus sum} «I am about to love» → the future of the AcI. Notice that the {amātūr-} is identical: Latin forms the future of the infinitive with the very same {amātūrum} you already met in the active future.

## The AcI in the passive

When the governing verb is passive, the whole clause is passive too. And there is an important consequence: the **participle** comes in, and the participle agrees with the subject of the AcI:

{Dīcitur eum {vēnisse}} «it is said that he came» — {dīcitur} is passive, {eum} stays accusative, the infinitive {vēnisse} stays intact;

{Dīcitur mulierēs {fortēs esse}} «it is said that women are strong» — the AcI is in the passive ({dīcitur}), and the adjective {fortēs} agrees with the feminine plural subject {mulierēs}. If the subject were masculine singular, we would have {Dīcitur virum fortem esse} «it is said that the man is strong».

The same rule holds for {dīcuntur}, {putātur}, {iubētur}. Latin, when it turns the AcI passive, keeps the accusative subject and simply swaps the governing verb for its passive form. An elegant trick, and the reason why the passive is so common in devotional texts.

## Impersonal verbs

There are verbs with no subject — the **impersonals** — and they govern the AcI. The most important is {oportet} «it is necessary»:

{Oportet illum {crēscere}} «it is necessary that he grow»;
{Oportet nos {laborāre}} «it is necessary that we work»;
{Necesse est} «it is necessary» — the same idea with a neuter noun.

Alongside it go {oportet} the verb {licet} «it is permitted», the noun {necesse}, and the verb {decet} «it is fitting». All govern the AcI, and all are translated with «that» plus subjunctive in Portuguese, plus an infinitive in Latin. The difference is that in Latin the subject of the impersonal is in **accusative**, not nominative: {oportet illum} and not {oportet ille}.

Worth noting the contrast with {decet}: {oportet} is obligation («it is necessary»), {licet} is permission («it is allowed»), {decet} is fitness («it is fitting»). The three share a syntax and a Portuguese translation, and the difference shows only in the verb.

## The neuter AcI

A special case that looks like a mistake and is not: the neuter AcI. {Scire est {amāre}} «to know is to love» — {scire} is the subject of the main clause and at the same time a verbal noun, which leaves the accusative {amāre} occupying the subject’s place. The construction {Dīcere est {cōnsilium}} «to say is advice» sounds strange in Portuguese and is perfectly normal in Latin, and it turns up often in the letters.

## Reading

{Si quis vult {venīre} post mē, abneget sēmetipsum} «Whoever wishes to come after me, let him deny himself» (Matthew 16:24) — an AcI after a verb of wishing, with the accusative {sēmetipsum} as indirect subject and at the same time the object of {abneget}. One phrase does both jobs, and that is why Latin accepts it.

{Scient me sequī} «they know that they follow me» (John 6:56) — a minimal AcI: the governing verb {scient} comes first, the accusative {me} serves as subject, and the infinitive {sequī} names the action. Notice that Latin needs neither «that» nor a reflexive pronoun.

{Oportet nos omnes ante faciem Christi Iesu apparēre} «it is necessary for us all to appear before the face of Christ Jesus» (2 Corinthians 5:10) — the impersonal {oportet} with a plural accusative subject {nos omnes} and a single infinitive {apparēre}. In Portuguese the same sentence is «é necessário que todos compareçamos»: the preposition of {oportet} is {oportet} in Latin and nothing at all in Portuguese.

{Ego sum via, veritas et vita} «I am the way, the truth and the life» (John 14:6) — and here there is **no** AcI: {ego} and {sum} are nominative, because the subject of the sentence is the speaker himself. The contrast between {Scient me sequī} and {Ego sum} shows that Latin picks the structure by function: reported third person goes accusative, first person goes nominative.

{Dīcere est cōnsilium} «to say is advice» — the neuter AcI, the shortest of all: {dīcere} is the subject and {cōnsilium} the predicate. The construction shows up above all in the letters, among the classical authors, and Latin treats it as an ordinary sentence.

{Vēnī, vīdī, vīcī} «I came, I saw, I conquered» — the minimal reading: three verbs, no prepositions, and the relation to the object left entirely to context.

## What to take away

Latin does not use «that»: it uses the AcI. After a verb of saying, knowing, wanting or ordering, the subject of the indirect statement goes into the accusative and the verb becomes an infinitive. Four infinitives, four relations to the moment: the present is simultaneous, the perfect is prior, the future is subsequent, and the future-of-the-future is what «is under way». The rule for the rest is a single one: in deponents, in the AcI, and in the accusative with infinitive, whatever is an adjective agrees with the subject **of the AcI**, not with the subject of the main clause.`),
  vocab: [
    V('dīcit', 'dīcō', 'he says (verb of saying)'),
    V('dīcere', 'dīcō', 'to say, to speak'),
    V('scient', 'sciō', 'they know (verb of saying)'),
    V('scire', 'sciō', 'to know'),
    V('venīre', 'veniō', 'to come (pres. inf., simultaneous)'),
    V('vēnisse', 'veniō', 'to have come (perf. inf., prior)'),
    V('ventūrum esse', 'veniō', 'to be about to come (fut. inf., subsequent)'),
    V('eum', 'is', 'him (acc. sg. m.) — subject of the AcI'),
    V('putāre', 'putō', 'to think, to suppose'),
    V('iubēre', 'iubeō', 'to order, to command'),
    V('cupere', 'cupiō', 'to want, to desire'),
    V('oportet', 'oportet', 'it is necessary (+ AcI)'),
    V('licet', 'liceō', 'it is allowed (+ AcI)'),
    V('laborāre', 'laborō', 'to work'),
    V('dīcitur', 'dīcō', 'it is said (passive; governs AcI)'),
    V('necesse est', 'necesse', 'it is necessary (impersonal + AcI)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Spēro eum vēnisse}, which infinitive tense was chosen and why?'),
    options: [
      T('Perfect: the arrival is prior to the moment of hoping'),
      T('Present: the arrival is simultaneous with the moment of hope'),
      T('Future: the arrival is still to happen'),
      T('Imperfect: the arrival was under way'),
    ],
    answer: 0,
    hint: T(
      'Rule §2: the four infinitives say when the action happens relative to the governing verb.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('He says that he is coming: dīcit eum ___'),
      answer: 'venire',
      hint: T('The present infinitive is the third theme of the model.'),
    },
    {
      kind: 'choose',
      prompt: T('In {Dīcitur mulierēs fortēs esse}, what does {fortēs} agree with?'),
      options: [
        T('With {mulierēs} — the subject of the AcI, not of the main clause'),
        T('With {dīcitur} — the governing verb, which heads the sentence'),
        T('With the implicit subject of the main clause, which must be masculine'),
        T('With none: adjectives do not agree inside the AcI'),
      ],
      answer: 0,
      hint: T('Rule §4: in the AcI, everything agrees with the subject of the AcI.'),
    },
    {
      kind: 'match',
      prompt: T('Match the governing verb to its translation'),
      pairs: [
        { a: T('oportet illum crēscere'), b: T('it is necessary that he grow (impersonal)') },
        { a: T('iubet eōs īre'), b: T('he orders them to go') },
        { a: T('vult mē manēre'), b: T('he wants me to stay') },
        { a: T('putat mulierēs fortēs esse'), b: T('he thinks that women are strong') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Translate {oportet nos laborāre}.'),
      answer: 'it is necessary that we work',
      hint: T('{oportet} is impersonal, and the subject {nos} is accusative because of that.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every verb of saying, knowing, thinking, wanting or ordering governs the AcI: the subject goes to the accusative and the verb becomes an infinitive.',
      ),
    },
    {
      n: '2',
      text: T(
        'The four infinitives state the relation to the moment: present is simultaneous, perfect is prior, future is subsequent, {passūrum esse} is action under way.',
      ),
    },
    {
      n: '3',
      text: T(
        'The future of the AcI is the future active participle plus {esse}: {amātūrum esse}, {ventūrum esse}. The same {amātūrum} serves the active future.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the AcI, any adjective or participle agrees with the subject of the AcI itself: {mulierēs fortēs esse} is feminine plural, not the agreement of the main clause.',
      ),
    },
    {
      n: '5',
      text: T(
        'The impersonals {oportet}, {licet}, {necesse est} and {decet} govern the AcI, and the subject stays accusative: {oportet illum}, never {oportet ille}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The AcI is not a clause, it is the absence of one.'),
      text: T(`Look at what Latin does **not** do: it does not repeat the subject. In {Dīcit {Petrus} {Paulus} {venīre}}, you have {Petrus} and {Paulus} in the accusative because both do the verb. A noun that performs the infinitive is the subject — and that holds even when the noun sits inside the AcI: {putāre {sē} {sapientem esse} «to think that he is wise».

That explains why Latin practically has no indirect statements with an expressed subject. The Vulgate almost always writes {ut} plus subjunctive when the subject is needed, and reserves the AcI for when the subject is already accusative for another reason. Greek, by contrast, has infinitive clauses with expressed subjects, which is why translating from Greek into Latin requires a decision in almost every sentence.`),
    },
    {
      label: T('How Jerome renders Greek obligation'),
      text: T(`Ancient Greek has a simple verb for «it is necessary»: **ὀφείλω**. It says {ὀφείλει ἡμᾶς ἀποδοῦναι} «we must pay», and the Vulgate writes {oportet nos reddere} «it is necessary that we pay». Notice the transformation: the Greek verb is personal and takes an expressed subject in the nominative; the Latin is impersonal, with an accusative subject and an infinitive. The same happens with {δεῖ} «it is necessary», which gives {oportet} or {necesse est}.

The practical consequence is that translating Greek into Latin **forces a syntactic decision** in almost every obligation. Rendering {ὀφείλει} as {debemus} is writing archaic Latin; writing {oportet} is doing what Jerome did all through the New Testament.`),
    },
  ],
  examples: [
    { text: 'dīcit eum venīre', gloss: T('he says that he is coming (pres. inf., simultaneous)') },
    { text: 'scient Deum esse', gloss: T('they know that God is (minimal AcI)') },
    { text: 'spēro eum vēnisse', gloss: T('I hope he has come (perf. inf.)') },
    { text: 'spēro eum ventūrum esse', gloss: T('I hope he will come (fut. inf.)') },
    { text: 'iubet eōs īre', gloss: T('he orders them to go (accusative plural)') },
    { text: 'vult mē manēre', gloss: T('he wants me to stay (1st person of the AcI)') },
    {
      text: 'putat mulierēs fortēs esse',
      gloss: T('he thinks women are strong (adjective = subject of the AcI)'),
    },
    { text: 'dīcitur eum vēnisse', gloss: T('it is said that he came (passive AcI)') },
    {
      text: 'oportet illum crēscere',
      gloss: T('it is necessary that he grow (impersonal, subject in acc.)'),
    },
    { text: 'dīcere est cōnsilium', gloss: T('to say is advice (neuter AcI)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The four infinitives and their relation to the moment'),
      head: [T('Infinitive'), T('Meaning'), T('Time relation'), T('Example')],
      rows: [
        ['amāre', 'amar', 'simultâneo', 'dīcit eum amāre = «diz que ele ama»'],
        ['amāvisse', 'ter amado', 'anterior', 'dīcit eum amāvisse = «diz que ele amou»'],
        [
          'amātūrum esse',
          'haver de amar',
          'posterior',
          'dīcit eum amātūrum esse = «diz que ele vai amar»',
        ],
        [
          'passūrum esse',
          'estar amando',
          'ação em curso',
          'dīcit eum passūrum esse = «diz que ele estará amando»',
        ],
        ['dīcere', 'dizer (neutro, sujeito)', '—', 'dīcere est cōnsilium = «dizer é conselho»'],
      ],
    },
    {
      caption: T('Table 2 — Active AcI and passive AcI'),
      head: [T('Type'), T('Form'), T('Translation'), T('Gloss')],
      rows: [
        ['Ativo', 'dīcit eum vēnisse', 'diz que ele veio', 'dīcere — verbo de dizer'],
        [
          'Ativo',
          'putat mulierēs fortēs esse',
          'acha que as mulheres são fortes',
          'putāre — verbo de opinião',
        ],
        [
          'Ativo impersonal',
          'oportet illum crēscere',
          'é necessário que ele cresça',
          'oportet — sem sujeito',
        ],
        ['Passivo', 'dīcitur eum vēnisse', 'se diz que ele veio', 'dīcere — forma passiva'],
        [
          'Passivo',
          'dīcitur virum fortem esse',
          'se diz que o homem é forte',
          'singular masculino',
        ],
        [
          'Passivo impersonal',
          'oportet illum crēscere',
          'é preciso que ele cresça',
          'o sujeito continua em Acusativo',
        ],
      ],
    },
  ],
};
