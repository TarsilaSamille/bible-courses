import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('Advanced syntax'),
  subtitle: T('constituent order, the second position and the Nachfeld'),
  section: T('Advanced syntax'),
  body: C(`## Constituent order

German has two word orders, and switching between them is what gives the language its rhythm. In the **main clause** the finite verb occupies the **second position** (V2): the first constituent of the sentence moves to the front and the verb follows immediately. What takes that first slot is free — an adverb, an object, the subject itself — and that freedom produces the contrast between {Heute Abend bin ich müde} and {Bin ich müde}, which is only correct as a question.

If the first constituent is the subject, the verb closes the sentence: {Der HERR ist mein Hirte}. If it is an adverb, the subject goes after the verb: {Heute Abend bin ich müde}. Nothing is lost: the same elements appear in both cases, only the positions change.

## The subordinate clause turns the other way

In a **subordinate clause** the finite verb goes to the **last** position. The inversion is exact: {..., weil ich müde bin} ends in {bin}, while the matching main clause ends in {ist}: {Ich bin müde, weil ich heute lange gearbeitet habe}. The same inversion holds for every subordinate clause — {dass}, {weil}, {obwohl}, {wenn}, {damit}, {als} — without exception.

The practical consequence matters: in an introductory subordinate clause the new information almost always comes before the verb. Compare {Ich weiß, dass Gott die Liebe ist} with {Ich weiß, dass die Liebe Gott ist}. The second is more emphatic, because the verb {ist} is what stays in the light at the end.

## Connecting and supporting

A noun governed by a preposition is the backbone of the sentence: {ein Mann **mit** einem **Stock**} — each preposition stands right before its noun. And {ein **Stock** aus **Holz**} as well as {der Weg **zu** Gott} obey the same rule. In {mit seinem Bruder} you have the **dative**: {mit} governs the dative, so {seinem Bruder} stays in the dative, with the -m ending.

There is more: in {ein Mann von großer Geduld}, {von} plus a noun without an article is a content complement, almost a preposition. The same holds for {aus}, {mit}, {von} and {zu} when the thing itself is dropped.

## Long periods

When a sentence grows long, a constituent sitting at the end of one clause can jump into the **Nachfeld**, the field after the verb, and become the last piece of information in the period. In {Ich habe lange gewartet, und meine Freunde kamen endlich}, the decisive datum is *they finally came*. Or with a bracket: {Die Bibel war, wie viele andere Bücher, von Gott}. The explanatory content is placed at the end precisely so that it is read last.

## How to read

To translate a long sentence, always take the same route: find the finite verb, locate the subject in front of it (or inside a clause in brackets), and only then collect the objects. If the verb is last, you are in a subordinate clause and you may have to step back two constituents to find the subject.`),
  vocab: [
    V('zweite Position', 'zweite Position', 'second position (verb in V2)'),
    V('Endstellung', 'Endstellung', 'final position of the verb in a subordinate clause'),
    V('Nachfeld', 'Nachfeld', 'post-verbal field of the clause'),
    V('Nebensatz', 'Nebensatz', 'subordinate clause'),
    V('Hauptsatz', 'Hauptsatz', 'main clause'),
    V('weil', 'weil', 'because (causal subordinate)'),
    V('obwohl', 'obwohl', 'although (concessive subordinate)'),
    V('dass', 'dass', 'that (clausal complement)'),
    V('damit', 'damit', 'so that (purpose)'),
    V('weil ich müde bin', 'sein', 'because I am tired (verb last)'),
    V('Heute Abend bin ich müde.', 'sein', 'This evening I am tired (adverb in first position)'),
    V('mit seinem Bruder', 'mit', 'with his brother (dative)'),
    V('ein Mann von großer Geduld', 'von', 'a man of great patience'),
    V('wie viele andere Bücher', 'wie', 'like many other books (bracket)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In which of these sentences is the finite verb in the second position?'),
    options: [
      T('Because I am tired, I go to sleep.'),
      T('This evening I am tired.'),
      T('I know that God is love.'),
      T('The man with the stick is my father.'),
    ],
    answer: 1,
    hint: T(
      'Rule §1: a subordinate clause sends the verb to the end; the main clause places it second.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the verb in the right position: Ich weiß, dass Gott ___ Liebe ist.'),
      answer: 'ist',
      hint: T('Rule §2: in an introductory subordinate clause the finite verb comes last.'),
    },
    {
      kind: 'choose',
      prompt: T('Which version puts the adverb in the correct initial position?'),
      options: [
        T('This evening I am tired.'),
        T('This evening I am tired (adverb inside the V2 pair).'),
        T('Am I tired this evening.'),
        T('I this evening am tired.'),
      ],
      answer: 0,
      hint: T('V2 means the verb in second position, not after any two words.'),
    },
    {
      kind: 'match',
      prompt: T('Match the structure to its verbal position'),
      pairs: [
        { a: T('Heute Abend bin ich müde.'), b: T('verb in second position') },
        { a: T('..., weil ich müde bin.'), b: T('verb in last position') },
        {
          a: T('Die Bibel war, wie viele andere Bücher, von Gott.'),
          b: T('bracket in the Nachfeld'),
        },
        { a: T('mit seinem Bruder'), b: T('preposition with dative') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In the main clause the finite verb holds the second position: the first constituent is free, the verb is not. {Heute Abend bin ich müde} is correct; {Heute Abend ich bin müde} is not.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the subordinate clause the finite verb stands last, after the subject and all complements: {weil ich heute lange gearbeitet habe}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The initial slot is taken by the subject only when it is not displaced. With an implicit subject in the place or destination, the sentence opens with the adverb: {Morgen fahre ich nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Every preposition stands immediately before its noun or pronoun: {mit einem Stock}, {der Weg zu Gott}. When the preposition is interrogative, the question opens with it: {Worauf wartest du?}',
      ),
    },
    {
      n: '5',
      text: T(
        'The Nachfeld receives what was fronted or serves as a comment; it never takes the subject or the direct object while those are still available in the sentence.',
      ),
    },
  ],
  notes: [
    {
      label: T('Invert or do not invert'),
      text: T(
        'What beginners find hard is knowing whether the sentence they are translating is main or subordinate. The safest clue is the conjunction: {weil}, {dass}, {obwohl}, {wenn}, {damit}, {als}, {bevor}, {nachdem} and {ob} never appear in a main clause. If the text has one of these and the finite verb stands last, there is no doubt: you are looking at a subordinate clause, and the expected order is the inverted one.',
      ),
    },
    {
      label: T('Linking the paragraph to the Bible text'),
      text: T(
        "Luther's style is an extreme case of that alternation. Compare {Im Anfang war das Wort} — an adverb in first position, the verb in second — with {Das Wort war am Anfang}: the same information, the opposite emphasis. When you translate a verse it pays to make both versions: the literal one, which respects the original position, and the reordered one, which raises the verb for the convenience of English. The difference between them is always the difference between what the text highlights and what the grammar makes easy.",
      ),
    },
  ],
  examples: [
    {
      text: 'Heute Abend bin ich müde.',
      gloss: T('This evening I am tired (adverb in first position).'),
    },
    {
      text: 'Der HERR ist mein Hirte, mir wird nichts mangeln.',
      gloss: T('The LORD is my shepherd, I shall not want (subject in first position).'),
    },
    {
      text: 'Ich bin müde, weil ich heute lange gearbeitet habe.',
      gloss: T('I am tired because I worked a long time today (verb last).'),
    },
    {
      text: 'Wir wissen, dass die Liebe Gott ist.',
      gloss: T('We know that love is God (new information before the verb).'),
    },
    {
      text: 'Obwohl er müde war, blieb er stehen.',
      gloss: T(
        'Although he was tired, he stood still (subordinate clause before the main clause).',
      ),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('I am speaking with an old man (preposition governs dative -em).'),
    },
    {
      text: 'Ein Mann von großer Geduld',
      gloss: T('a man of great patience (von without an article).'),
    },
    {
      text: 'Die Bibel war, wie viele andere Bücher, von Gott.',
      gloss: T('The Bible was, like many other books, from God (bracket in the Nachfeld).'),
    },
    {
      text: 'Ich habe lange gewartet, und meine Freunde kamen endlich.',
      gloss: T(
        'I waited a long time, and my friends finally came (verb last in the second member).',
      ),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Main clause (V2) and subordinate clause (verb last)'),
      head: [T('What comes first'), T('Main clause'), T('Subordinate clause')],
      rows: [
        ['sujeito', 'Der HERR ist mein Hirte.', '..., weil Gott mein Hirte ist.'],
        ['advérbio', 'Heute Abend bin ich müde.', '..., weil ich heute müde bin.'],
        ['objeto', 'Seinen Bruder liebt er sehr.', '..., dass er seinen Bruder liebt.'],
        ['tempo', 'Morgen komme ich wieder.', '..., wenn ich morgen wiederkomme.'],
        ['conector', 'Trotzdem blieb ich stehen.', '..., obwohl ich müde war.'],
        ['modal', 'Ich muss jetzt gehen.', '..., dass ich jetzt gehen muss.'],
      ],
    },
    {
      caption: T('Table 2 — Fields of the clause in V2 order'),
      head: [T('Field'), T('Content'), T('Example')],
      rows: [
        ['1 (Vorfeld)', 'sujeito, objeto, advérbio', 'Heute Abend ...'],
        ['2', 'verbo conjugado', '... bin ...'],
        ['3 (Mittelfeld)', 'complementos, argumentos', '... müde.'],
        ['4 (Endfeld)', 'informação nova, comentários', '... denn er kommt heute.'],
        ['5 (Nachfeld)', 'parêntese explicativo', '..., wie viele andere Bücher.'],
      ],
    },
  ],
};
