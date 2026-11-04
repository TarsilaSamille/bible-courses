import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('The cases'),
  title: T('The six cases and what governs them'),
  subtitle: T(
    'each case is chosen by a verb, a preposition or a count, never by the meaning of the noun',
  ),
  body: C(`
## A case is a relation, and the relation has an owner

The Russian case does not translate a preposition or a meaning: it marks the function a word fills inside a relation, and that relation always comes from somewhere. From a verb, a preposition, a negation or a count. The noun does not choose its own case.

So the useful question is not what this case means, but **who is in charge of it**. The genitive is what follows нет, у, от, до, two, many. The dative is what follows помогать, радоваться, молиться. The instrumental is what follows быть when you say what someone is, and it follows заниматься, интересоваться. The prepositional never appears alone: only after a preposition, which is why it is the one case you will never see unaccompanied.

Saying that the genitive is possession and the dative is the recipient describes the effect. Saying that the genitive is the case of нет and the dative is the case of помогать describes the machine, and the machine is what you need in order to read.

## What each case cannot do

The part that jams a reader is not what a case does, it is what it cannot do.

The genitive cannot be the subject and cannot be the direct object. In Russian nothing that is the focus of the sentence appears in the genitive: if you mean who did it, that is nominative; if you mean what was done, that is accusative. The genitive is always a dependency.

The instrumental cannot hold the subject position, and it is not what a verb takes as a direct object. It appears as means, as company, as occupation and as a predicative of profession: Он врач, he is a doctor, and Он был врачом, he was a doctor. The change from one to the other is the move from present to past, and the case is part of that move.

The dative is the narrowest of all. No Portuguese verb asks for a dative, and the list of those that do is short and has to be learned. Everything that is to someone in Portuguese is not necessarily dative in Russian: if the verb is to give, the object is accusative, and the recipient is what may go into the dative.

The prepositional is the only case that cannot appear alone. There is no sentence with о слове without a preposition governing it, and that is why it is the easiest case: you only need the pair.

## When two shapes coincide

The cost of the system is that two shapes can be identical, and then the ending says nothing. In the masculine singular animate, Бога is genitive and accusative. The preposition на is prepositional with a static sense and accusative with a sense of direction.

The way out is to look for the verb. If the verb is transitive and the word answers what, it is accusative. If it answers of whom or of what, it is genitive. If it answers to whom, it is dative. The noun is the same in all three sentences, and the verb is what changes the case.

## The hook: John 1:1 has three of the six cases

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** One sentence with the three main cases, each marked by a different element. В начале is prepositional, because в governs the prepositional and начало declines into the case. У Бога is genitive, because у governs the genitive and means together with. Слово appears twice as nominative, once as subject and once as predicative after was.

And the second clause is the most informative. **Слово было к Богу.** Here the dative appears, the narrowest case of the language, and it appears because к is one of the few prepositions that governs it. If the translator had written Слово было у Бога, the verse would say something else: with God, and not toward God.

The case that does not appear is the accusative, and the absence is equally informative. Nothing was done to the Word in this verse: the Word is the subject of every clause, and a subject in Russian is nominative. Whatever the verb falls on is what goes into the accusative, and here there is no one.
`),
  vocab: [
    V('нет', 'нет', 'there is not; governs the genitive'),
    V('у', 'у', 'by, near; governs the genitive'),
    V('от', 'от', 'from; governs the genitive'),
    V('до', 'до', 'up to; governs the genitive'),
    V('к', 'к', 'to, toward; governs the dative'),
    V('о', 'о', 'about; governs the prepositional'),
    V('о слове', 'слово', 'about the word; prepositional case'),
    V('помогать', 'помогать', 'to help; governs the dative'),
    V('молиться', 'молиться', 'to pray; governs the dative'),
    V('заниматься', 'заниматься', 'to occupy oneself; governs the instrumental'),
    V('врачом', 'врач', 'doctor; instrumental'),
    V('у Бога', 'бог', 'with God; genitive'),
    V('к Богу', 'бог', 'to God; dative'),
    V('в начале', 'начало', 'in the beginning; prepositional'),
    V('Слово', 'слово', 'the Word; nominative'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Слово было к Богу, which case is Богу?'),
    options: [T('Genitive'), T('Dative'), T('Prepositional')],
    answer: 1,
    hint: T(
      'The preposition к governs the dative. With у it would be genitive, and with о prepositional.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (there is no bread)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('Which case does помогать govern?'),
      options: [T('Genitive'), T('Dative'), T('Instrumental')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он был ___ (he was a doctor)'), answer: 'врачом' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The case is chosen by the verb, the preposition or the count, never by the meaning of the noun.',
      ),
    },
    {
      n: '2',
      text: T('The genitive cannot be subject or direct object: it is always a dependency.'),
    },
    {
      n: '3',
      text: T(
        'The dative is the narrowest: only the verbs that ask for it do, and the list has to be learned.',
      ),
    },
    {
      n: '4',
      text: T(
        'The instrumental cannot hold the subject position: it appears as means, company, occupation and predicative.',
      ),
    },
    {
      n: '5',
      text: T(
        'The prepositional never appears alone, which is why it is the easiest case to read.',
      ),
    },
  ],
  notes: [
    {
      label: T('The case belongs to the verb, not to the thing'),
      text: T(
        'The same preposition governs different cases depending on the sense: в начале is prepositional and в храм is accusative. The same thing shows up with different verbs: to give asks for an accusative object, and the recipient goes into the dative, while to help asks for a dative directly. The noun is the same; the verb is in charge.',
      ),
    },
    {
      label: T('When the ending says nothing'),
      text: T(
        'In the masculine singular animate, genitive and accusative have the same shape: Бога. No ending settles it, and no other resource exists besides the verb. That is why reading a case in Russian always starts with the verb and never with the noun.',
      ),
    },
  ],
  examples: [
    {
      text: 'В начале было Слово',
      gloss: T('in the beginning was the Word; В начале is prepositional'),
    },
    { text: 'Слово было у Бога', gloss: T('the Word was with God; у governs the genitive') },
    { text: 'Слово было к Богу', gloss: T('the Word was toward God; к governs the dative') },
    { text: 'нет хлеба', gloss: T('there is no bread; нет governs the genitive') },
    { text: 'много воды', gloss: T('much water; the quantity governs the genitive') },
    { text: 'помогать другу', gloss: T('to help a friend; помогать governs the dative') },
    { text: 'молиться Отцу', gloss: T('to pray to the Father; молиться governs the dative') },
    {
      text: 'заниматься музыкой',
      gloss: T('to occupy oneself with music; заниматься governs the instrumental'),
    },
    { text: 'Он был врачом', gloss: T('he was a doctor; profession in the instrumental') },
    { text: 'о слове', gloss: T('about the word; the prepositional never goes alone') },
  ],
  tables: [
    {
      caption: T('The six cases and what governs them'),
      head: [T('Case'), T('Governed by'), T('Question it answers'), T('Example')],
      rows: [
        [T('nominative'), T('verb and copula'), T('who does it?'), T('Бог')],
        [T('genitive'), T('нет, у, от, до, two, many'), T('of whom, of what'), T('у Бога')],
        [T('dative'), T('к, по, помогать, молиться'), T('to whom'), T('к Богу')],
        [T('accusative'), T('transitive verb'), T('what'), T('вижу Бога')],
        [
          T('instrumental'),
          T('быть, заниматься, интересоваться'),
          T('with what, by what means'),
          T('врачом'),
        ],
        [
          T('prepositional'),
          T('в, на, о, при in a static sense'),
          T('where, inside what'),
          T('в начале'),
        ],
      ],
    },
    {
      caption: T('What each case cannot do'),
      head: [T('Case'), T('Cannot be'), T('Example of the error')],
      rows: [
        [
          T('nominative'),
          T('direct object or possessor'),
          T('the one who loves is what governs, not the one loved'),
        ],
        [
          T('genitive'),
          T('subject or direct object'),
          T('вижу Бога has Бога in the accusative, and only the verb decides'),
        ],
        [
          T('dative'),
          T('subject or direct object of a common verb'),
          T('Я даю книгу другу: the friend is dative, the book accusative'),
        ],
        [
          T('accusative'),
          T('subject or possessor'),
          T('слово Бога is genitive; вижу слово Бога has the accusative'),
        ],
        [
          T('instrumental'),
          T('subject'),
          T('Он пишет пером: the subject is he, the instrument is the pen'),
        ],
        [
          T('prepositional'),
          T('anything on its own'),
          T('о слове without the preposition о is an error'),
        ],
      ],
    },
    {
      caption: T('When two shapes coincide'),
      head: [T('Shape'), T('Possible cases'), T('What decides')],
      rows: [
        [T('Бога'), T('genitive and accusative'), T('the verb: вижу, or слово Бога')],
        [T('на'), T('prepositional and accusative'), T('на столе is place, на стену is direction')],
        [
          T('по'),
          T('dative, genitive and accusative'),
          T('the sense: по улице is place, по брату is recipient'),
        ],
        [T('о'), T('prepositional'), T('always with a sense of place or of subject matter')],
        [T('мы'), T('pronoun, or noun'), T('the number of the verb: приняли is plural')],
      ],
    },
  ],
};
