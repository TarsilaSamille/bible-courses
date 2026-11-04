import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Prepositions'),
  subtitle: T('fixed cases and Wechselpräpositionen'),
  section: T('Prepositions'),
  body: C(`Every German preposition governs a case, and its case is fixed. There are no exceptions: mit requires the dative, and *mit dem Weg in the sense of along the way does not exist, which in German is along dem Weg. The Wechselpräpositionen, or case-alternating prepositions, are only nine in practice, and all of them take dative or accusative according to sense: an, auf, aus, bei, für, hinter, in, neben, über, unter, seit, von, vor, zu, zwischen. The list deserves to be learned whole, because it is what governs the accusative with the prepositions of motion.

The rule of alternation is one of sense, not of form. The preposition with the dative marks position: Ich sitze an dem Tisch, Er wohnt bei meiner Schwester, das Buch liegt auf dem Tisch. The preposition with the accusative marks destination or duration: Ich setze mich an den Tisch, Er geht zu dem Arzt, das Buch liegt auf dem Tisch — note that auf with the same noun can take both cases, and what changes is the verb: liegen stays, legen puts.

There are two pairs that produce almost identical sentences with opposite meanings: auf and an, and über and unter. Ich hänge das Bild an die Wand and Ich hänge das Bild über den Tisch. Er geht unter die Brücke and Er kommt unter der Brücke durch. The preposition means nothing on its own: it works like a nail, and it is the verb that decides where to hammer.

A second, much smaller group is the prepositions with the genitive. Only a handful are common: während, wegen, trotz, statt, anstatt, außerhalb. They are typical of written language and sound academic to anyone coming from Portuguese, where the genitive has disappeared. Während des Lebens is more formal than it is difficult.

Finally, three two-word prepositions deserve separate memorisation: anstatt ... zu, um ... zu and auf ... zu, which express substitution, purpose and movement towards something already in motion. And there is one special case that catches people out: in questions about time with the sense of awaiting, an can take the dative: Wann kommst du an?`),
  vocab: [
    V('an', 'an', 'at, on (Wechselpräposition)'),
    V('auf', 'auf', 'on, upon'),
    V('bei', 'bei', 'near, at, with'),
    V('für', 'für', 'for'),
    V('hinter', 'hinter', 'behind'),
    V('in', 'in', 'in, into'),
    V('neben', 'neben', 'beside'),
    V('über', 'über', 'over, above'),
    V('unter', 'unter', 'under'),
    V('vor', 'vor', 'in front of, before'),
    V('zwischen', 'zwischen', 'between'),
    V('von', 'von', 'of, from (always dative)'),
    V('zu', 'zu', 'to, at (always dative)'),
    V('mit', 'mit', 'with (always dative)'),
    V('während', 'während', 'during (genitive)'),
    V('wegen', 'wegen', 'because of (genitive)'),
    V('trotz', 'trotz', 'in spite of (genitive)'),
    V('außerhalb', 'außerhalb', 'outside of (genitive)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('Er hängt das Bild an die Wand.'),
      T('Er hängt das Bild an der Wand.'),
      T('Er hängt das Bild an dem Wand.'),
      T('Er hängt das Bild in die Wand.'),
    ],
    answer: 0,
    hint: T('Rule §1: motion takes the accusative, hence die.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the right case: Das Buch liegt auf ___ Tisch (on the table).'),
      answer: 'dem',
      hint: T('Static position takes the dative: auf dem Tisch.'),
    },
    {
      kind: 'choose',
      prompt: T('Which preposition requires the dative even when it indicates motion?'),
      options: [T('zu'), T('in'), T('an'), T('auf')],
      answer: 0,
      hint: T('Er geht zu dem Arzt: destination, but dative.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete with the genitive: Wegen ___ Wetters bleiben wir hier.'),
      answer: 'des',
      hint: T('The neuter noun Wetter needs -es in the genitive.'),
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to the case it requires.'),
      pairs: [
        { a: T('mit'), b: T('always dative') },
        { a: T('für'), b: T('always accusative') },
        { a: T('trotz'), b: T('always genitive') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dative for position, accusative for direction: Ich hänge das Bild an die Wand, but das Bild hängt an der Wand.',
      ),
    },
    {
      n: '2',
      text: T(
        'von, zu, mit, aus, bei, seit and nach always require the dative, even when they indicate motion: Er geht zu dem Arzt.',
      ),
    },
    {
      n: '3',
      text: T(
        'With person nouns, the preposition and the of in the dative may be dropped: der Freund von Maria → ein Freund von mir, zu Maria.',
      ),
    },
    {
      n: '4',
      text: T(
        'The verb decides the case of the preposition, not the noun: Er legt das Buch auf den Tisch (puts) and das Buch liegt auf dem Tisch (lies).',
      ),
    },
    {
      n: '5',
      text: T(
        'In questions about arrival, an stays in the dative: Wann kommst du an? The answering sense of arrival takes the accusative: Wann kommst du an den Bahnhof?',
      ),
    },
  ],
  notes: [
    {
      label: T('A preposition means nothing alone'),
      text: T(
        'Über and unter show why case-by-case study is useless. Ich hänge das Bild über den Tisch and Ich hänge das Bild an die Wand use the same construction, and the only difference is the preposition: over the table, on the wall. And über der Brücke and unter der Brücke describe the same spatial relation from opposite sides. Anyone who learns prepositions as vocabulary without the verbs that accompany them keeps a list; anyone who learns verb and preposition together keeps a sentence.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "Luther's translation has a persistent habit of zu: ohne mich könnt ihr nichts tun (John 15:5) uses the second person plural without an article, and zu is the preposition that never gives up the dative. Wer nicht liebt den Menschen, liebt auch den Bruder nicht (1 John 4:20) adds ohne with the accusative. The second preposition, gegen, is rare in the Bible and common in speech, which shows that a translation also ages.",
      ),
    },
  ],
  examples: [
    { text: 'Ich sitze an dem Tisch.', gloss: T('I am sitting at the table (position, dative).') },
    {
      text: 'Ich setze mich an den Tisch.',
      gloss: T('I sit down at the table (destination, accusative).'),
    },
    {
      text: 'Er wohnt bei meiner Schwester.',
      gloss: T('He lives with his sister (bei + dative).'),
    },
    { text: 'Das Buch liegt auf dem Tisch.', gloss: T('The book is on the table (auf + dative).') },
    {
      text: 'Er legt das Buch auf den Tisch.',
      gloss: T('He puts the book on the table (auf + accusative).'),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('Because of the rain we stay at home (wegen + genitive).'),
    },
    {
      text: 'Trotz des Sturms gingen wir hinaus.',
      gloss: T('In spite of the storm we went out (trotz + genitive).'),
    },
    { text: 'Ich gehe, um zu helfen.', gloss: T('I am going in order to help (um ... zu).') },
    {
      text: 'Er kam an dem Bahnhof an.',
      gloss: T('He arrived at the station (verb an takes dative here).'),
    },
  ],
  tables: [
    {
      caption: T('Wechselpräpositionen: dative or accusative'),
      head: ['Preposição', 'Dativo (posição)', 'Acusativo (destino)'],
      rows: [
        ['an', 'an dem Tisch', 'an den Tisch'],
        ['auf', 'auf dem Tisch', 'auf den Tisch'],
        ['bei', 'bei meiner Schwester', 'zu meiner Schwester'],
        ['in', 'in dem Haus', 'in das Haus'],
        ['über', 'über dem Tisch', 'über den Tisch'],
        ['unter', 'unter dem Baum', 'unter den Baum'],
        ['vor', 'vor der Tür', 'vor die Tür'],
      ],
    },
    {
      caption: T('Prepositions with a fixed case'),
      head: ['Caso', 'Preposições', 'Exemplo'],
      rows: [
        ['dativo', 'aus, bei, mit, nach, seit, von, zu', 'Er kommt aus Berlin.'],
        ['acusativo', 'durch, für, gegen, ohne, um', 'Das ist für dich.'],
        ['genitivo', 'während, wegen, trotz, statt, außerhalb', 'wegen des Wetters'],
        ['duas palavras', 'anstatt ... zu, um ... zu, auf ... zu', 'Ich gehe, um zu helfen.'],
      ],
    },
  ],
};
