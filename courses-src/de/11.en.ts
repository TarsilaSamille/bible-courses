import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('The accusative'),
  subtitle: T('direct object and direction'),
  section: T('Cases'),
  body: C(`The accusative marks what the action of the verb reaches directly: the object, the affected person, the destination. Ich sehe den Mann, Ich schreibe ein Buch, Sie kaufen ein Haus. In all these cases the accusative answers the question on whom or on what the action falls.

The same case covers direction. Verbs of motion require the accusative not for the starting point but for the destination: Ich gehe in die Stadt, Wir fahren nach Berlin, Er läuft über die Brücke. Note the difference from Portuguese: Ich gehe in die Stadt is the destination; in der Stadt is the place, and therefore the dative.

There is also an affected-person use that is peculiar to German: when harm falls on someone, the accusative marks the victim. Er friert sich die Hände, Ich wasche mir die Haare, Er hat sich das Bein gebrochen. These are constructions with a dative reflexive pronoun and an accusative object, and the sense is "to do something to oneself".

Verbs with two accusatives are rarer, but frequent in written register: Ich schenke dir ein Buch, Er zeigt mir die Tür, Gott gab ihm ein Gesetz. The standard German order puts the recipient (dative) before the thing; when both are accusative, the order is marked by the case of the pronoun.

The accusative prepositions are fixed and only these: durch (through), für (for), gegen (against), ohne (without), um (around), bis (until), entlang (along). With them the case is guaranteed and not negotiable: durch den Wald, für dich, gegen meinen Willen, ohne Zweifel, um die Ecke, bis morgen, den Fluss entlang.`),
  vocab: [
    V('der Akkusativ', 'Akkusativ', 'the accusative case'),
    V('sehen', 'sehen', 'to see (accusative)'),
    V('schreiben', 'schreiben', 'to write'),
    V('kaufen', 'kaufen', 'to buy'),
    V('brauchen', 'brauchen', 'to need'),
    V('schenken', 'schenken', 'to give as a gift'),
    V('zeigen', 'zeigen', 'to show'),
    V('durch', 'durch', 'through (accusative prep.)'),
    V('für', 'für', 'for (accusative prep.)'),
    V('gegen', 'gegen', 'against (accusative prep.)'),
    V('ohne', 'ohne', 'without (accusative prep.)'),
    V('um', 'um', 'around (accusative prep.)'),
    V('entlang', 'entlang', 'along (accusative prep.)'),
    V('sich waschen', 'waschen', 'to wash oneself'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Ich gehe in die Stadt", which case is die?'),
    options: [T('nominative'), T('accusative'), T('dative'), T('genitive')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the preposition: Ich gehe ___ Garten spazieren.'),
      answer: 'im',
      hint: T('in + dem = in the garden (destination).'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the accusative: Ich brauche ___ (the book).'),
      answer: 'das Buch',
      hint: T('The neuter does not change in the accusative.'),
    },
    {
      kind: 'choose',
      prompt: T('Which preposition requires the accusative?'),
      options: [T('mit'), T('von'), T('durch'), T('bei')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to the case.'),
      pairs: [
        { a: T('ohne'), b: T('accusative') },
        { a: T('für'), b: T('accusative') },
        { a: T('mit'), b: T('dative') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The destination of a verb of motion is marked by an accusative preposition (in, an, auf, über) or by a bare noun (nach Berlin, zu Hause).',
      ),
    },
    {
      n: '2',
      text: T(
        'The affected-person construction always has a dative reflexive: sich, mir, dir, ihm, ihr, uns, euch, ihnen — never mich in the dative.',
      ),
    },
    {
      n: '3',
      text: T(
        'With two accusatives the first is usually the pronoun and keeps the pronominal order: Ich gebe ihm das Buch, Ich gebe es ihm.',
      ),
    },
    {
      n: '4',
      text: T(
        'Bare proper nouns tend to the accusative, especially in time constructions: letzten Montag, nächsten Sommer, letzten Sonntag.',
      ),
    },
  ],
  notes: [
    {
      label: T('Wo or wohin'),
      text: T(
        'The question wo? (where?) asks for the dative; the question wohin? (where to?) asks for the accusative. Ich bin in der Schule (dative, place) and Ich gehe in die Schule (accusative, destination) use the same noun with different articles. It is the question, not the preposition, that decides the case — and that is why wo and wohin are the best key to the whole preposition section.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 3:16, denn Gott hat seinen Sohn gegeben (dative), dass die Welt gerettet werde (purpose). The verb to give shows the pattern we have just seen: the recipient stays in the dative and the thing given in the accusative.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe den Mann.', gloss: T('I see the man (direct object).') },
    {
      text: 'Wir fahren nach Berlin.',
      gloss: T('We are going to Berlin (destination without article).'),
    },
    {
      text: 'Er läuft über die Brücke.',
      gloss: T('He runs across the bridge (über = accusative, motion).'),
    },
    { text: 'Ich bin in der Schule.', gloss: T('I am at school (in + dative = place).') },
    {
      text: 'Ich gehe in die Schule.',
      gloss: T('I am going to school (in + accusative = destination).'),
    },
    { text: 'Er friert sich die Hände.', gloss: T('He freezes his own hands (affected).') },
    { text: 'Ich schenke ihr ein Buch.', gloss: T('I give her a book as a gift.') },
    {
      text: 'Ohne Zweifel ist das richtig.',
      gloss: T('Without doubt this is right (ohne + accusative).'),
    },
  ],
  tables: [
    {
      caption: T('Uses of the accusative'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto direto', 'verbo + N', 'Ich sehe den Mann.', 'em quem?'],
        ['destino', 'verbo de movimento + N', 'Wir fahren nach Berlin.', 'para onde?'],
        ['pessoa afetada', 'reflexivo dativo + N', 'Er friert sich die Hände.', 'a quem acontece?'],
        ['com complemento de direção', 'um + N', 'Er bog um die Ecke.', 'em torno de quê?'],
        ['com duração', 'por + N', 'Zwei Wochen lang.', 'por quanto tempo?'],
        [
          'com dois acusativos',
          'verbo + pronome + N',
          'Ich schenke dir ein Buch.',
          'a quem o quê?',
        ],
      ],
    },
    {
      caption: T('Accusative prepositions'),
      head: ['Preposição', 'Significado', 'Exemplo'],
      rows: [
        ['durch', 'através de', 'durch den Wald gehen'],
        ['für', 'para, por', 'für dich, für zwei Wochen'],
        ['gegen', 'contra', 'gegen meinen Willen'],
        ['ohne', 'sem', 'ohne Zweifel, ohne Geld'],
        ['um', 'em torno de, para (mudar)', 'um die Ecke, um neun Uhr'],
        ['bis', 'até', 'bis morgen, bis Leipzig'],
        ['entlang', 'ao longo de', 'den Fluss entlang'],
      ],
    },
  ],
};
