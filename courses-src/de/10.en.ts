import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('The nominative'),
  subtitle: T('subject and predicative'),
  section: T('Cases'),
  body: C(`The nominative has two functions. The first is that of subject: the element that agrees with the verb in number and person. Wer kommt? answers who performs the action. In Der Schlüssel steckt im Schloss, the nominative is der Schlüssel, and the dative im Schloss indicates only where.

The second function is that of a nominal complement, or predicative complement, linked to verbs expressing identity or state: sein, werden, bleiben, heißen, scheinen. Those verbs admit two nominatives: Er ist Arzt, Er heißt Peter, Sie wird Lehrerin. When the quality is an adjective, the complement is no longer nominative but an undeclined predicate: Er ist ein guter Arzt.

Observe the difference between the two models. With a noun, the case declines along with it: Er ist der Arzt (identity, with the definite article). With adjective plus noun, it is the construction of quality: Er ist ein guter Arzt. The first identifies, the second characterises. The distinction exists in Portuguese too, but German keeps the morphological mark: der Arzt is nominative, ein guter Arzt as well.

The nominative can also appear after a verb of movement or an impersonal: Es regnet (it rains), Es sind zehn Leute gekommen (impersonal with an existential sense), Mir ist kalt, Mir ist kalt. In those cases es is not a true subject: it is an empty subject that fills the position and leaves the information to the dative or to the rest of the clause.

Finally, there is a second nominative in constructions such as Er ist Arzt und Lehrer, with a singular standing for the plural: Die Kinder sind Schüler. That agreement exists because the whole clause is the subject, and what declines is the verb.`),
  vocab: [
    V('der Nominativ', 'Nominativ', 'the nominative'),
    V('das Subjekt', 'Subjekt', 'the subject'),
    V('das Prädikat', 'Prädikat', 'the predicate'),
    V('sein', 'sein', 'to be'),
    V('werden', 'werden', 'to become'),
    V('heißen', 'heißen', 'to be called'),
    V('bleiben', 'bleiben', 'to stay, remain'),
    V('scheinen', 'scheinen', 'to seem'),
    V('das Wetter', 'Wetter', 'the weather'),
    V('es regnen', 'regnen', 'to rain'),
    V('mir sein', 'sein', 'impersonal to be (dative)'),
    V('der Arzt', 'Arzt', 'the doctor'),
    V('die Lehrerin', 'Lehrerin', 'the teacher (feminine)'),
    V('ein guter Arzt', 'gut', 'a good doctor (quality)'),
    V('es sein', 'sein', 'there to be (existential)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Er ist der Arzt", what is the function of der Arzt?'),
    options: [
      T('subject only'),
      T('complement of the nominative'),
      T('direct object'),
      T('dative'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the subject: ___ Kinder spielen.'),
      answer: 'Die',
      hint: T('In the plural the article is always die.'),
    },
    {
      kind: 'fill',
      prompt: T('Give the verb for "die Kinder": die Kinder ___ (to play).'),
      answer: 'spielen',
      hint: T('The plural always ends in -n.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence declines the adjective?'),
      options: [
        T('Er ist ein guter Arzt.'),
        T('Der gute Arzt kommt.'),
        T('Er ist gut.'),
        T('Er bleibt gut.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its function.'),
      pairs: [
        { a: T('heißen'), b: T('to be called') },
        { a: T('werden'), b: T('to become') },
        { a: T('scheinen'), b: T('to seem') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject agrees with the verb in number: Das Kind spielt, die Kinder spielen. If the subject is plural, the verb obligatorily takes -n.',
      ),
    },
    {
      n: '2',
      text: T(
        'With sein, werden, bleiben, heißen and scheinen the noun completing the clause is nominative, not accusative.',
      ),
    },
    {
      n: '3',
      text: T(
        'When the complement of identity is an adjective, that adjective does not decline: Er ist ein guter Arzt, but Der gute Arzt kommt.',
      ),
    },
    {
      n: '4',
      text: T(
        'The impersonal es is only truly empty when it is present: Heute wird es kalt — in Die Temperatur ist niedrig the noun takes its place.',
      ),
    },
  ],
  notes: [
    {
      label: T('The empty subject'),
      text: T(
        'In Es regnet, the es designates nothing. It exists because German requires an element in first position and because the verb needs an overt subject. Every impersonal verb of weather and sensation (es regnet, es friert, mir ist warm) follows this pattern, and for that reason it can be inverted: Regnet es? = is it raining?',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 1:1, das Wort war bei Gott. Notice the construction war bei: instead of neben (which would require a dative), the verb to be takes a dative, which is why the noun bei Gott is not a genitive. The case comes from the preposition, never from the noun.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Schlüssel steckt im Schloss.',
      gloss: T('The key is in the lock (nominative + dative).'),
    },
    { text: 'Kommt der Mann?', gloss: T('Is the man coming? (postposed subject).') },
    { text: 'Er ist der Arzt.', gloss: T('He is the doctor (identity, two nominatives).') },
    {
      text: 'Er ist ein guter Arzt.',
      gloss: T('He is a good doctor (quality, undeclined predicate).'),
    },
    {
      text: 'Sie heißt Anna und ist Studentin.',
      gloss: T('Her name is Anna and she is a student (two nominatives).'),
    },
    {
      text: 'Es regnet seit gestern.',
      gloss: T('It has been raining since yesterday (es = empty subject).'),
    },
    {
      text: 'Es sind zwölf Leute gekommen.',
      gloss: T('Twelve people have come (existential impersonal es).'),
    },
    { text: 'Mir ist kalt.', gloss: T('I am cold (impersonal with dative).') },
    {
      text: 'Die Kinder sind Schüler.',
      gloss: T('The children are pupils (singular for the plural).'),
    },
  ],
  tables: [
    {
      caption: T('Nominative as subject and as predicate'),
      head: ['Função', 'Estrutura', 'Exemplo', 'O que marca'],
      rows: [
        ['sujeito', 'N + verbo', 'Der Mann kommt.', 'concordância com o verbo'],
        ['sujeito posposto', 'verbo + N', 'Kommt der Mann?', 'verbo na primeira posição'],
        ['complemento de identidade', 'sein + N', 'Er ist der Arzt.', 'dois nominativos'],
        [
          'complemento de qualidade',
          'sein + adj + N',
          'Er ist ein guter Arzt.',
          'predicado sem caso',
        ],
        ['atribuição nominal', 'heißen + N', 'Sie heißt Anna.', 'dois nominativos'],
        ['tornar-se', 'werden + N', 'Sie wird Ärztin.', 'dois nominativos'],
        ['impessoal', 'es + verbo', 'Es regnet.', 'sujeito vazio'],
        ['impessoal existencial', 'es + sein + N', 'Es sind zehn Leute da.', 'sujeito vazio'],
      ],
    },
    {
      caption: T('Verbs that admit two nominatives'),
      head: ['Verbo', 'Significado', 'Frase'],
      rows: [
        ['sein', 'ser, estar', 'Das Buch ist ein Geschenk.'],
        ['werden', 'tornar-se', 'Er wird Lehrer.'],
        ['bleiben', 'ficar, permanecer', 'Er bleibt mein Freund.'],
        ['heißen', 'chamar-se', 'Der Berg heißt Brocken.'],
        ['scheinen', 'parecer', 'Sie scheint krank zu sein.'],
        ['werden', 'virar (algo)', 'Es wurde Abend.'],
      ],
    },
  ],
};
