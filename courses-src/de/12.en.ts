import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('The dative'),
  subtitle: T('to whom and for whom'),
  section: T('Cases'),
  body: C(`The dative is the case of the recipient. It answers two questions that Portuguese tends to merge: to whom is something handed over? and for whom is something done? Ich gebe dem Mann das Buch answers the first; Ich backe für dich answers the second.

The dative has three main uses. The first is the indirect object of verbs of transfer, speech and feeling: Ich helfe dem Kranken, Sie dankt dem Herrn, Er antwortet mir, das Kind freut sich über die Geschenke. The second is the possessor registered as a dative when the possessor is a person and the possessed keeps the case it already had: Ich wasche mir die Hände, Er putzt sich das Gesicht, Sie bäckt sich einen Kuchen.

The third use is the most characteristic of German: dative impersonal expressions. There is no true subject, and the dative complement is who experiences the situation: Mir ist kalt, Mir graut davor, Mir tut der Kopf weh, Es ist mir wichtig. In Portuguese these constructions require a filled subject, which makes the translation awkward; what matters here is the idea that the dative is the experiencer of the sentence.

Verbs that govern the dative form a closed list that is worth learning. Memorise the main ones: helfen, danken, folgen, gehören, gefallen, passen, schmecken, antworten, dienen, gratulieren, drucken, wehtun, fehlen, schaden, verzeihen, erlauben, verbieten, befehlen, empfehlen.

The order of the elements also has a rule. When there is a dative and an accusative, the dative comes first: Ich gebe dem Mann das Buch. And the dative reflexive pronoun precedes the lexical dative: Ich schenke mir ein Buch.`),
  vocab: [
    V('der Dativ', 'Dativ', 'the dative case'),
    V('helfen', 'helfen', 'to help (dative)'),
    V('danken', 'danken', 'to thank (dative)'),
    V('folgen', 'folgen', 'to follow (dative)'),
    V('gehören', 'gehören', 'to belong (dative)'),
    V('passen', 'passen', 'to fit, to suit (dative)'),
    V('schmecken', 'schmecken', 'to taste (dative)'),
    V('antworten', 'antworten', 'to answer (dative)'),
    V('gratulieren', 'gratulieren', 'to congratulate (dative)'),
    V('schmecken lassen', 'schmecken', 'to leave to the taste of'),
    V('mit', 'mit', 'with (dative prep.)'),
    V('von', 'von', 'of, from (dative prep.)'),
    V('zu', 'zu', 'to, at (dative prep.)'),
    V('bei', 'bei', 'near, at (dative prep.)'),
    V('mir', 'ich', 'to me (dative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which verb requires the dative?'),
    options: [T('sehen'), T('danken'), T('kaufen'), T('lesen')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative: Das Buch gehört ___ (to me).'),
      answer: 'mir',
      hint: T('First person pronoun in the dative.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the preposition: Ich fahre ___ Berlin (to Berlin).'),
      answer: 'nach',
      hint: T('It indicates destination, without an article.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Ich schenke dir ein Buch", what is the order of the terms?'),
      options: [
        T('accusative before dative'),
        T('dative before accusative'),
        T('genitive before dative'),
        T('the order is free'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its use.'),
      pairs: [
        { a: T('Mir ist kalt'), b: T('impersonal') },
        { a: T('Ich wasche mir die Haare'), b: T('possessor in the dative') },
        { a: T('Er wird von Gott geliebt'), b: T('agent of the passive') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dative and accusative together form the standard order with the indirect object first: Ich gebe dem Nachbarn das Paket.',
      ),
    },
    {
      n: '2',
      text: T(
        'The dative reflexive pronoun precedes the lexical dative: Ich wasche mir die Haare, not mir die Haare ich.',
      ),
    },
    {
      n: '3',
      text: T(
        'The prepositions mit, von, zu, bei, aus, seit and gegenüber require the dative, and there the noun may appear without an article: bei Maria, von dem Herrn, zu Hause.',
      ),
    },
    {
      n: '4',
      text: T(
        'With people in the dative the article may be omitted after zu, von, für and bei: der Freund von Maria, die Mutter von Heinrich, ein Freund von mir.',
      ),
    },
  ],
  notes: [
    {
      label: T('The experiencing dative'),
      text: T(
        "In Mir ist kalt there is no subject in the Portuguese sense. What the sentence asserts is that there is someone for whom it is cold, and that someone is the dative. A literal translation opens a Pandora's box of the kind Ich habe kalt, which reintroduces a subject that is not there. A correct translation preserves the absence: Ich habe kalt, Mir ist nicht gut.",
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 3:16, hat Gott die Welt geliebt (dative as indirect object). The construction recurs in 1 John 4:9, Gott hat seinen Sohn geliebt für die Welt. The preposition für + accusative makes the same dative explicit in nominal form.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('I give the book to the man (dative before accusative).'),
    },
    { text: 'Kannst du mir helfen?', gloss: T('Can you help me? (helfen + dative).') },
    { text: 'Das Buch gehört mir.', gloss: T('The book belongs to me (gehören + dative).') },
    { text: 'Das Buch gefällt mir.', gloss: T('I like the book (gefallen + dative).') },
    { text: 'Ich wasche mir die Hände.', gloss: T('I wash my hands (possessor in the dative).') },
    { text: 'Mir ist kalt.', gloss: T('I am cold (impersonal with dative).') },
    { text: 'Es ist mir wichtig.', gloss: T('It is important to me (interest in the dative).') },
    {
      text: 'Die Hunde folgen dem Herrn.',
      gloss: T('The dogs follow the master (dative of goal).'),
    },
    {
      text: 'Sie wohnt bei ihrer Schwester.',
      gloss: T('She lives with her sister (bei + dative).'),
    },
  ],
  tables: [
    {
      caption: T('The three uses of the dative'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto indireto', 'verbo + dat. + acc.', 'Ich gebe dem Mann das Buch.', 'a quem?'],
        ['possessor pessoal', 'reflexivo + dat. + N', 'Ich wasche mir die Hände.', 'de quem são?'],
        ['impessoal', 'impers. + dat.', 'Mir ist kalt.', 'como se sente quem?'],
        ['interesse', 'es ist + dat. + adj.', 'Es ist mir wichtig.', 'o que importa a quem?'],
        ['dativo de agente', 'passiva + von + dat.', 'Er wird von Gott geliebt.', 'por quem?'],
      ],
    },
    {
      caption: T('Verbs governing the dative'),
      head: ['Verbo', 'Português', 'Frase'],
      rows: [
        ['helfen', 'ajudar', 'Kannst du mir helfen?'],
        ['danken', 'agradecer', 'Ich danke dir.'],
        ['folgen', 'seguir', 'Die Hunde folgen dem Herrn.'],
        ['gehören', 'pertencer', 'Das Buch gehört mir.'],
        ['gefallen', 'agradar (a alguém)', 'Das Buch gefällt mir.'],
        ['passen', 'servir, ficar bem', 'Der Mantel passt dir.'],
        ['schmecken', 'saborar', 'Der Wein schmeckt mir gut.'],
        ['antworten', 'responder', 'Er antwortet der Frage.'],
        ['wehtun', 'doer', 'Der Kopf tut mir weh.'],
        ['schaden', 'prejudicar', 'Das Rauchen schadet der Gesundheit.'],
      ],
    },
  ],
};
