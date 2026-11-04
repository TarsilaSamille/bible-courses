import { C, T, V } from '../shared.mts';

export default {
  id: 36,
  title: T("Commented reading: John 1:1-5 in Luther's translation"),
  subtitle: T('The preposition of the Word, case by case'),
  section: T('Reading'),
  body: C(`## The text

> **Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.**
> **Alles ist durch das Wort geworden, und ohne das Wort ist nichts geworden, was geworden ist.**
> **In dem war das Leben, und das Leben war das Licht der Menschen.**
> **Und das Licht leuchtet in der Finsternis, und die Finsternis hat es nicht aufgenommen.**

## {Im Anfang war das Wort}

Five words, and three syntactic decisions. {Im} is {in} + {dem}: the preposition {in} with the **dative**, and the masculine dative of the definite article is {dem}. When {in} meets a demonstrative such as {der}, the pronoun moves to the end — {in dem} — and, since the form begins with a vowel, it takes a **capital letter** so that it is not mistaken for the noun {In}: {Im Anfang}. The same goes for {bei dem}, {zu dem}, {von dem}.

The verb {war} holds the second position and the subject {das Wort} follows it: a V2 inversion with a time expression in the Vorfeld. The choice of {war} rather than {ist} matters — the **imperfect** reinforces the idea of a continuity prior to any narrated time.

## {das Wort war bei Gott}

The preposition {bei} governs the **dative** and, without an article, it indicates proximity: {bei Gott} is «with God», «close to God», not «beside». The noun {Wort} is the subject (nominative) and {Gott} is the **nominative complement** (an assertive sentence), which produces «the Word was [being] God».

The difference between nominative and dative becomes clear if you change the preposition: {bei meinem Freund} (dative, «with my friend») and {für meinen Freund} (accusative, «for my friend»). The case is decided by the preposition, not by the noun.

## {und das Wort war Gott}

The third clause repeats the subject and reverses the order: {und} in first position, {das Wort} second, {war} third, {Gott} last. This is **V2 with a postponed subject**, identical to the first clause. The parallelism of the three clauses — {war}, {war}, {war} — is what gives the verse its liturgical cadence.

Note that {das Wort} carries the definite article in all three clauses: the Greek {ho logos} was translated with the article, which marks identity rather than any word at all. The noun placed last ({Gott}) is also the shortest, and the middle noun ({Wort}) is the one that repeats: the pattern is **X Y war Z / X war Y Z**, a symmetry Portuguese cannot reproduce.

## {Alles ist durch das Wort geworden}

The **passive** with {werden} enters here — what grammarians call the *Vorgangspassiv* — and not the periphrastic passive {sein} + participle. The subject {Alles} (article-less nominative neuter) is what exists; {ist … geworden} is the verb, and the **agent** appears in the **instrumental**, with {durch} + **accusative**: {durch das Wort} = «through the Word». The practical rule: {durch} introduces cause or means, {von} introduces a personal agent.

{geworden} is the **participle** of {werden}, and joined to {ist} it forms the **perfect**: {ist geworden} is «has become». Compare it with {wird}, the present: {Alles wird} «everything is becoming».

## {ohne das Wort ist nichts geworden, was geworden ist}

{ohne} governs the **accusative** and means «without»: {ohne das Wort} «without the Word». The subject is {nichts}, and the verb {ist geworden} repeats — the second occurrence sits in the **relative clause** {was geworden ist}, opened by the relative pronoun {was}.

That relative clause is a trap for beginners: it has the **verb last** ({ist}), like every subordinate clause, and it repeats the antecedent {nichts}, which makes it longer than it looks. Note that {was} is at once a relative pronoun (nominative) and an interrogative word: here it plays the relative role, serving as the subject inside the clause.

## {In dem war das Leben}

Again {in} + dative: {In dem} is {In} + {dem}, with the capital letter mandatory. The verb {war} again in second position, and this time the subject {das Leben} closes the sentence. The whole sentence means «the life was in it», with {ihn} understood — the pronoun {ihn} picks up {das Wort} from the previous verse.

## {das Leben war das Licht der Menschen}

The **genitive** {der Menschen} is a genitive of possession: «the light of men». The noun in the genitive comes **after** the noun it modifies, and the form {der} is not a definite article: it is the relative pronoun {der} (= {welcher}), which never changes. Compare {das Licht des Menschen} (of a specific man) with {die Liebe des Menschen}.

There is a declension detail: {Menschen} is a **weak** noun, so its plural form is identical to the singular. You would never notice this while reading, but you would notice it immediately if you tried to build a plural like {die Menschen} on a different gender.

## {das Licht leuchtet in der Finsternis}

{in} with the **dative** once more, now inside an ordinary main clause: subject {das Licht}, verb {leuchtet} in second position, {in der Finsternis} at the end. {leuchten} is intransitive, so there is no direct object — the prepositional phrase occupies the last slot on its own.

The metaphor is one of light and shadow: what emits the light comes first in the syntax, what receives it comes last. The text always puts the source before the destination.

## {die Finsternis hat es nicht aufgenommen}

The last clause inverts again: subject {die Finsternis} first, verb {hat} second, {es} third. {es} is the **accusative** pronoun and stands in for {das Licht}: «the darkness did not receive it». The verb {aufnehmen} is in the **perfect** ({hat … aufgenommen}), built with {haben} + participle, because the verb is transitive.

The sentence uses the same pronoun twice in different roles: {die Finsternis} as subject and {es} as object. Telling the two apart is the final test of case from the earlier chapters — if you can say who acts and who undergoes the action, the text is solved.

## What to take away

Five verses and a complete demonstration: {in dem} shows the dative, {bei} shows proximity, {durch} shows the agent of the passive, {ohne} shows absence, {der} in the genitive shows belonging. Nothing here is exotic — it is the repertoire of chapters 9 to 13 applied without a break, which is exactly what a real text demands.`),
  vocab: [
    V('der Anfang', 'Anfang', 'the beginning'),
    V('das Wort', 'Wort', 'the Word'),
    V('bei', 'bei', 'at, near, with (governs dative)'),
    V('ohne', 'ohne', 'without (governs accusative)'),
    V('durch', 'durch', 'through, by (governs accusative)'),
    V('geworden', 'werden', 'become (participle of werden)'),
    V('nichts', 'nichts', 'nothing (invariable pronoun)'),
    V('das Leben', 'Leben', 'life'),
    V('das Licht', 'Licht', 'the light (weak neuter -es)'),
    V('der Mensch', 'Mensch', 'the human being (weak: Menschen)'),
    V('die Finsternis', 'Finsternis', 'the darkness'),
    V('leuchten', 'leuchten', 'to shine (intransitive)'),
    V('aufnehmen', 'aufnehmen', 'to receive (perfect: hat aufgenommen)'),
    V('in dem', 'in', 'in (dative, capitalised)'),
    V('Alle', 'alle', 'everything (plural nominative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Alles ist durch das Wort geworden}, who is the agent of the passive?'),
    options: [
      T('{das Wort}, in the instrumental {durch} + accusative.'),
      T('{Alles}, which is the subject of the passive.'),
      T('Nobody: the passive is impersonal.'),
      T('{Gott}, who appears twice in the previous verse.'),
    ],
    answer: 0,
    hint: T(
      'Rule §3: {durch} + accusative is the non-personal agent; {von} + dative would be the personal agent.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the auxiliary of the process passive: Alles ___ durch das Wort geworden.',
      ),
      answer: 'ist',
      hint: T(
        'Rule §2: the process passive uses {werden} as its auxiliary, and the verb ends the clause.',
      ),
    },
    {
      kind: 'choose',
      prompt: T(
        'Which sentence is correct according to the rule on prepositions with the demonstrative?',
      ),
      options: [
        T('In dem war das Leben.'),
        T('in dem war das Leben (lowercase).'),
        T('Indem war das Leben (one word).'),
        T('In der war das Leben (wrong demonstrative).'),
      ],
      answer: 0,
      hint: T('Rule §1: {in} + {dem} merge into {Im} or, if kept apart, {in dem} with a capital.'),
    },
    {
      kind: 'match',
      prompt: T('Match the segment to its syntactic function'),
      pairs: [
        { a: T('Im Anfang'), b: T('dative complement of time') },
        { a: T('war das Wort'), b: T('verb in second position') },
        { a: T('der Menschen'), b: T('genitive of possession') },
        { a: T('was geworden ist'), b: T('relative clause with the verb last') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A preposition plus a dative demonstrative merges into one compound and takes a capital: {in} + {dem} = {Im}, {bei} + {dem} = {beim}, {von} + {dem} = {vom}, {zu} + {dem} = {zum}. With {in} + {das} = {ins}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The process passive is {werden} + participle ({ist geworden}) and the state passive is {sein} + participle ({ist geschrieben}). The process describes an action; the state, a result.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the passive, {durch} + accusative gives cause or means, {von} + dative gives a personal agent: {Es ist durch das Wort geworden} and {Es ist von Gott geschrieben}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The relative {der} (= {welcher}) is invariable and is not an article: {das Licht der Menschen} has {der} in the genitive, and {Menschen} is plural because the noun is weak.',
      ),
    },
    {
      n: '5',
      text: T(
        'In {nichts geworden, was geworden ist} there is a whole relative clause; the repetition of {ist geworden} is required by the syntax, not by style. The verb stands last: {… geworden ist}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{war} instead of {ist}'),
      text: T(
        "The first sentence could have been translated {Im Anfang ist das Wort}, and the Greek {ēn archē ēn ho logos} carries an imperfect form. Luther's German keeps the tense: what existed **before** any narrated event. In English that nuance almost vanishes — «in the beginning was» and «in the beginning is» sound nearly identical. Anyone translating the New Testament into German has to take decisions of this kind in every sentence, and tense is always the first one.",
      ),
    },
    {
      label: T('The symmetry of the three clauses'),
      text: T(
        '{das Wort war bei Gott} and {das Wort war Gott} repeat the same three pieces and only swap {bei Gott} for {Gott}. That is why John 1:1 is so hard to translate without losing something: any language that does not repeat the noun twice in one sentence must choose between «the Word was with God and was God» and «the Word was God and was with God». Both are correct; only one keeps the **repetition**, which is the figure the author used.',
      ),
    },
  ],
  examples: [
    {
      text: 'Im Anfang war das Wort.',
      gloss: T('In the beginning was the Word (in + dative, verb in V2).'),
    },
    { text: 'und das Wort war bei Gott', gloss: T('and the Word was with God (bei + dative).') },
    { text: 'und das Wort war Gott', gloss: T('and the Word was God (nominative complement).') },
    {
      text: 'Alles ist durch das Wort geworden.',
      gloss: T('All things were made through the Word (passive with durch).'),
    },
    {
      text: 'ohne das Wort ist nichts geworden',
      gloss: T('without the Word nothing was made (ohne + accusative).'),
    },
    { text: 'was geworden ist', gloss: T('which has been made (relative clause, verb last).') },
    {
      text: 'In dem war das Leben',
      gloss: T('In him was the life (in + dative, capital letter required).'),
    },
    {
      text: 'das Leben war das Licht der Menschen',
      gloss: T('the life was the light of men (genitive with the relative der).'),
    },
    {
      text: 'die Finsternis hat es nicht aufgenommen',
      gloss: T('the darkness did not receive it (perfect with accusative {es}).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — John 1:1-5, structure by verse'),
      head: [T('Segment'), T('Structure'), T('Portuguese')],
      rows: [
        ['Im Anfang war das Wort', 'in + dativo, V2 invertida', 'No princípio era o Verbo'],
        [
          'das Wort war bei Gott',
          'bei + dativo, complemento nominativo',
          'o Verbo estava junto de Deus',
        ],
        ['das Wort war Gott', 'V2 com sujeito posposto', 'o Verbo era Deus'],
        [
          'ist durch das Wort geworden',
          'passivo de Vorgang, durch + A',
          'tudo foi feito pelo Verbo',
        ],
        [
          'nichts geworden, was geworden ist',
          'relativa com verbo no fim',
          'nada foi feito que não tenha sido feito',
        ],
        [
          'das Leben war das Licht der Menschen',
          'genitivo com relativo {der}',
          'a vida era a luz dos homens',
        ],
        [
          'das Licht leuchtet in der Finsternis',
          'in + dativo, verbo intransitivo',
          'a luz brilha nas trevas',
        ],
        [
          'die Finsternis hat es nicht aufgenommen',
          'perfeito, {es} acusativo',
          'as trevas não a receberam',
        ],
      ],
    },
    {
      caption: T('Table 2 — The prepositions of John 1:1-5'),
      head: [T('Form'), T('Case'), T('Value')],
      rows: [
        ['in dem (im)', 'dativo', 'lugar e tempo estáticos'],
        ['bei Gott', 'dativo', 'proximidade, companhia'],
        ['durch das Wort', 'acusativo', 'agente ou meio da passiva'],
        ['ohne das Wort', 'acusativo', 'ausência, privação'],
        ['in der Finsternis', 'dativo', 'lugar onde se está'],
        ['von Gott', 'dativo', 'origem, agente pessoal'],
        ['für meinen Freund', 'acusativo', 'destino, favorável a'],
        ['mit seinem Bruder', 'dativo', 'instrumento, companhia'],
      ],
    },
  ],
};
