import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Guided reading: John 1:1'),
  subtitle: T('Dal principio era la Parola'),
  section: T('The past and the reading'),
  body: C(`## Four clauses, one piece of grammar

Read the verse in four stages, not word by word. First the structure: {In principio era la Parola}. Then the three clauses that enlarge it: {e la Parola era presso Dio}, {e la Parola era Dio}, {e Dio era la Parola}. **The verb is the same in all four**, {era}, and what changes is the complement.

{La Parola} takes an article in almost all of them, and that is not decoration: it is what marks {la Parola} as the grammatical subject. In the second clause the subject is {la Parola} and {Dio} appears in {presso Dio}, which means "with" and "near". In the third, {Dio} loses the article and becomes a predicate, and that is where the sentence stops speaking of proximity and starts speaking of identity.

## {Era} against {fu}

The distinction the verse demands is between {era} and {fu}. {Era} **is the imperfetto of** {essere} and describes continuous existence: the light was there, with no marked beginning. {Fu} is the *passato remoto* and marks a result that came to be.

The Greek of John 1:1 uses {ἦν} (ἐν ἀρχῇ ἦν ὁ λόγος), the same imperfetto. Where Italian writes {fu}, in Genesis 1:3, Greek writes {γένοιτο} and the effect is the same. Translating {era} as "existed" and {fu} as "was" gets the difference right; translating both as "was" loses what the text is doing.

## {In} without an article, {la} with

{In principio} **takes no article**, and the reason is mechanical: {in} absorbs the {-o} of {principio}. The same goes for {con Dio}, {con Gesù}, {fra i giudei}. By contrast {la Parola} and {il Verbo} keep their article, because nothing was absorbed.

{In principio} can still mean "in the beginning" or "as a principle", depending on the context. The next verse settles it, {Era nel principio presso Dio}, where {in} marks place and not origin.

## Reading criterion

When you translate {la Parola era Dio}, do not turn it into "the Word was with God": Italian uses {era presso} for the second clause and {era} alone for the third, and the difference is deliberate. Greek marks the same contrast (πρὸς τὸν θεόν in the second, θεός in the third), and the Greek preposition πρὸς can mark a relationship and not only a position. Translating the form loses that second sense.`),
  vocab: [
    V('principio', 'principio', 'beginning'),
    V('era', 'essere', 'was (imperfetto)'),
    V('Parola', 'parola', 'Word'),
    V('presso', 'presso', 'with, near'),
    V('Dio', 'Dio', 'God'),
    V('vita', 'vita', 'life'),
    V('luce', 'luce', 'light'),
    V('tenebre', 'tenebra', 'darkness'),
    V('Verbo', 'verbo', 'Word (Logos)'),
    V('fu', 'essere', 'was (result)'),
    V('cose', 'cosa', 'things'),
    V('creazione', 'creazione', 'creation'),
    V('mondo', 'mondo', 'world'),
    V('conosciuto', 'conoscere', 'known'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the difference between era and fu in John 1?'),
    options: [
      T('They are interchangeable synonyms'),
      T('era is continuous existence; fu is a punctual result'),
      T('era is future; fu is past'),
      T('era is plural; fu is singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: la Parola ___ presso Dio'),
      answer: 'era',
      hint: T('Imperfetto of essere.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word means "with, near"?'),
      options: [T('con'), T('presso'), T('dove'), T('tra')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete the verse: e la Parola ___ Dio'),
      answer: 'era',
      hint: T('Repeat the verb of the verse.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Era} is the imperfetto of {essere} and describes continuous existence; {fu} is the passato remoto and marks a result.',
      ),
    },
    {
      n: '2',
      text: T(
        '{In} absorbs the {-o} of the noun, so there is no article: {in principio}, {con Dio}, {fra i giudei}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{La Parola} keeps its article because it is the subject: {la Parola era} and {era la Parola} share the structure.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Dio} without an article in {era Dio} is a predicate: the missing article is what marks the identity.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Presso} means "with" and renders πρὸς, which in Greek can mark a relationship and not only a position.',
      ),
    },
  ],
  notes: [
    {
      label: T('The verb in front'),
      text: T(
        'The verse repeats the same verb four times, {era}, and a hurried translator hands over a phrase instead of an argument. The parallelism {X era Y} with {Y era X} at the end of the verse is the argument: what was with God is what is God.',
      ),
    },
    {
      label: T('Where the translations differ'),
      text: T(
        'The two Italian translations of the verse differ in the third clause: one writes {la Parola era Dio} and the other {il Verbo era Dio}. The difference lies in {Parola} and {Verbo}, and the Greek λόγος supports both choices, because the same Greek word fits an abstract noun and a concrete one.',
      ),
    },
  ],
  examples: [
    { text: 'In principio era la Parola.', gloss: T('In the beginning was the Word.') },
    { text: 'La Parola era presso Dio.', gloss: T('The Word was with God.') },
    { text: 'E la Parola era Dio.', gloss: T('And the Word was God.') },
    { text: 'E Dio era la Parola.', gloss: T('And God was the Word.') },
    { text: 'In lui era la vita.', gloss: T('In him was the life.') },
    { text: 'Era la luce nel mondo.', gloss: T('The light was in the world.') },
    { text: 'La vita era la luce degli uomini.', gloss: T('The life was the light of men.') },
    { text: 'Il mondo non lo ha conosciuto.', gloss: T('The world did not know him.') },
  ],
  tables: [
    {
      caption: T('Map of John 1:1'),
      head: ['Frase', 'Verbo', 'Funzione'],
      rows: [
        ['In principio', '—', 'tempo'],
        ['era la Parola', 'era', 'esistenza'],
        ['la Parola era presso Dio', 'era', 'relazione'],
        ['la Parola era Dio', 'era', 'identità'],
      ],
    },
    {
      caption: T('Era, fu, è stato'),
      head: ['Forma', 'Tempo', 'Valore'],
      rows: [
        ['era', 'imperfetto', 'esistenza continua'],
        ['fu', 'passato remoto', 'risultato puntuale'],
        ['è stato', 'passato prossimo', 'passato con effetto'],
        ['è', 'presente', 'stato attuale'],
      ],
    },
  ],
};
