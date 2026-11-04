import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('The Lord’s Prayer and Psalm 22'),
  subtitle: T('prayer, forgiveness and suffering'),
  section: T('Reading'),
  body: C(`## The Lord's Prayer has three tenses

The Lord's Prayer alternates invocation, petitions and instruction, and each part uses a different tense. The invocation is declarative and present: {Pai nosso que estás nos céus}. The petitions are wishes, and a wish is **subjunctive**: {santificado seja o teu nome}, {venha o teu reino}, {seja feita a tua vontade}. The instruction returns to the **imperative** and the present: {o pão nosso de cada dia dá-nos hoje}.

Note the pattern: the three central petitions of the prayer are precisely the three subjunctives. That is not rhetoric, it is grammar. A petition is by definition something you want and do not yet have, and in Portuguese (as in Greek, with ἐλθέτω) the subjunctive marks exactly that. Turning {seja} into {é} changes a petition into a statement.

## Dá-nos: verb and pronoun glued

{o pão nosso de cada dia dá-nos hoje} has {dá-nos} — verb plus the pronoun {nos} in one word. The shape is {dá} + {nos} stuck together, and it is the mark of the Portuguese clitic. The Greek parallel is ἐπιδίδου ἡμῖν (δίδω + ἡμῖν), with the pronoun in the **dative**, and that is what says "to us" rather than "we".

Register matters too: {dá-nos} is the form European Portuguese uses, and the everyday Brazilian form is {dá pra nós} or {nos dá}. Same function, three shapes, and the translator picks according to the audience without changing the meaning.

## Perdoemos: subjunctive in a narrative sentence

{perdoa-nos as nossas dívidas, assim como nós também perdoamos aos nossos devedores} has {perdoamos} in the present subjunctive, not indicative {perdoamos} and not perfect {perdoámos}. The sentence is narration ("just as we also forgive"), yet the verb is subjunctive.

Why? Because Greek in Matthew 6:12 uses ἀφῆτε (aorist, present subjunctive) and the fact is subjunctive because the prayer does not assert that we forgive — it asks that we forgive. The difference between {perdoamos} (assertion) and {perdoemos} (petition) is the difference between saying and praying, and biblical Portuguese preserves it.

Note the {aos}: it is {a + os} standing in for the Greek dative, which shows the preposition in Portuguese doing the work of a case.

## Psalm 22: the question that is a lament

Psalm 22 opens with {Deus meu, Deus meu, por que me desamparaste?} — and that is exactly the line Jesus speaks from the cross (Matthew 27:46; Mark 15:34). The {por que} is not a question seeking information: it is a lament. The rhetorical question in Hebrew (אַלְמָה, alamá) and in Greek (ἱνατί, hinatí) is the same cry: where are you.

The difference between question and lament is in what follows. In the Psalm, verse 2 changes the tone: {mas tu, Senhor, estás longe}; and from there the psalm turns to praise. Jesus on the cross does not have the following verses — he stays in the question. Reading the whole psalm onto the cross means reading a hymn he was not singing at that moment.

## Reading criterion

In each clause of the Lord's Prayer, ask: is it an assertion (indicative), a petition (subjunctive) or a command (imperative)? And in Psalm 22, is {por que} a question for information or a lament? The answer changes the reading more than any single word.`),
  vocab: [
    V('estás', 'estar', 'you are'),
    V('santificado', 'santificar', 'hallowed'),
    V('dá-nos', 'dar', 'give us'),
    V('perdoa', 'perdoar', 'forgive'),
    V('dívidas', 'dívida', 'debts'),
    V('desamparaste', 'desamparar', 'you forsake'),
    V('entregou', 'entregar', 'he delivered'),
    V('pão', 'pão', 'bread'),
    V('reino', 'reino', 'kingdom'),
    V('tribulação', 'tribulação', 'trouble'),
    V('perdoar', 'perdoar', 'to forgive'),
    V('nome', 'nome', 'name'),
    V('céus', 'céu', 'heavens (plural)'),
    V('hoje', 'hoje', 'today'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {nos} mean in “in the heavens”?'),
    options: [T('object pronoun'), T('em + os'), T('verb'), T('adjective')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ our daily ___”.'),
      answer: 'pão',
      hint: T('Essential food.'),
    },
    {
      kind: 'choose',
      prompt: T('In “My God, my God”, the repetition creates:'),
      options: [T('a direct question'), T('a prayer'), T('a comparison'), T('a future tense')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match petition and response.'),
      pairs: [
        { a: T('hallowed be'), b: T('hallowed be') },
        { a: T('come'), b: T('come') },
        { a: T('be done'), b: T('be done') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'In {santificado seja o teu nome} and {venha o teu reino}, the verb is in the subjunctive: the prayer asserts nothing, it petitions. Matthew 6:9 and 6:10 use the same mood ({ἁγιασθήτω}, {ἐλθέτω}).',
      ),
    },
    {
      n: '§2',
      text: T(
        '{dá-nos} is {dá} + {nos} attached, and {perdoa-nos} is {perdoa} + {nos}: the hyphen in writing shows the join that speech hides. Rendering it as {nos dá} keeps the sense and undoes the form.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{perdoamos} asserts and {perdoemos} petitions. The prayer {assim como nós também perdoamos} has {perdoamos} because it narrates a practice, and it is the Greek form (ἀφῆτε) that forces {perdoemos} in the petition itself.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{não} plus the subjunctive is the negative imperative formula: {não temas}, {não faltes}, {não leveis}. {não temas} comes from the subjunctive, not from the future: {não temais} and {não temeram} are the same formula.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{por que} in {Deus meu, Deus meu, por que me desamparaste?} does not ask for information: it is a lament. The Hebrew ({אַלְמָה}) and the Greek ({ἱνατί}) that Jesus quotes are the same rhetorical question, and the answer the psalm gives (v. 2) is what Jesus on the cross does not have.',
      ),
    },
  ],
  notes: [
    {
      label: T('Reading'),
      text: T(
        'Psalm 22 is a prayer of suffering before it is a passage to be used alone. Verse 1 is the cry, verse 2 already turns to praise, and Jesus on the cross stays in verse 1 (Matthew 27:46; Mark 15:34).',
      ),
    },
    {
      label: T('Register'),
      text: T(
        '{dá-nos} is the European Portuguese form. The current Brazilian ones are {dá pra nós} and {nos dá}: three registers for one function, and the choice belongs to the translator and the audience.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pai nosso que estás nos céus.',
      gloss: T('Declarative present: the prayer asserts, it does not petition.'),
    },
    {
      text: 'Santificado seja o teu nome.',
      gloss: T('Subjunctive: a petition, not an assertion.'),
    },
    { text: 'Venha o teu reino.', gloss: T('The same subjunctive, now with {venha}.') },
    {
      text: 'Não nos leveis à tentação.',
      gloss: T('Negative imperative: {não} plus subjunctive.'),
    },
    {
      text: 'O pão nosso de cada dia dá-nos hoje.',
      gloss: T('Verb and pronoun in one word, plus the imperative.'),
    },
    {
      text: 'Perdoa-nos as nossas dívidas.',
      gloss: T('{nos} is the object attached to the verb.'),
    },
    {
      text: 'Assim como nós também perdoamos.',
      gloss: T('{perdoamos} asserts, and so it is indicative.'),
    },
    {
      text: 'Deus meu, Deus meu, por que me desamparaste?',
      gloss: T('The question that is a lament (Psalm 22:1).'),
    },
    {
      text: 'Mas tu, Senhor, estás longe.',
      gloss: T('Verse 2 changes the tone: from here on it is praise.'),
    },
  ],
  tables: [
    {
      caption: T('The three tenses of the Lord’s Prayer'),
      head: ['Parte', 'Tempo', 'Exemplo'],
      rows: [
        ['invocação', 'presente', 'que estás nos céus'],
        ['pedido', 'subjuntivo', 'venha o teu reino'],
        ['instrução', 'imperativo', 'dá-nos hoje'],
      ],
    },
    {
      caption: T('Asserting and petitioning, side by side'),
      head: ['Verbo', 'O que faz', 'Exemplo'],
      rows: [
        ['perdoamos', 'afirma', 'assim como perdoamos'],
        ['perdoemos', 'pede', 'perdoa-nos'],
        ['perdoai', 'manda', 'perdoai aos outros'],
      ],
    },
    {
      caption: T('Verb with an attached pronoun'),
      head: ['Forma', 'Separação', 'Pronome'],
      rows: [
        ['dá-nos', 'dá + nos', 'nos'],
        ['perdoa-nos', 'perdoa + nos', 'nos'],
        ['entregou-lho', 'entregou + lho', 'lhe + o'],
      ],
    },
  ],
};
