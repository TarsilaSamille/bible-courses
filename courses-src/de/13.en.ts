import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('The genitive'),
  subtitle: T('possession, origin and measure'),
  section: T('Cases'),
  body: C(`The genitive is the case that survived least in everyday speech and matters most in writing. It links two nouns: the second one, which comes later, is the possessed, and the first, in parentheses, is the possessor. Die Eltern des Mannes shows the order: possessor first, possessed second.

The article ending is des or der; that of the noun is -s or -es, with the exception of the masculine, which can take -n: des Mannes, der Frau, des Kindes, des Vaters. In proper names governed by an article the most common shape is des + name without any further ending: des Herrn, des Johannes, des Petrus.

Besides possession, the genitive indicates material origin (ein Gefühl der Dankbarkeit), measure (ein Glas Wasser) and content (der Inhalt des Buches). In time expressions the genitive appears without an article: heute Morgen, letzten Monat, Anfang des Jahres, während des Krieges.

Genitive prepositions are few and almost all abstract: wegen (because of), trotz (in spite of), während (during), statt and anstatt (instead of), außerhalb, innerhalb, hinsichtlich, betreffs, mittels, namens. In biblical language they are frequent: um des Römers, wegen der Sünde.

Verbs that govern the genitive are few: entbehren (to be deprived of), bedürfen (to be in need of), gedenken (to remember), spotten (to mock), hohnen (to jeer at), ermangeln (to lack). In all of them the preposition can be replaced by von + dative, and that is how the modern speaker avoids the case: wegen der Sünde / von der Sünde.`),
  vocab: [
    V('der Genitiv', 'Genitiv', 'the genitive case'),
    V('wegen', 'wegen', 'because of (gen. prep.)'),
    V('trotz', 'trotz', 'in spite of (gen. prep.)'),
    V('während', 'während', 'during (gen. prep.)'),
    V('statt', 'statt', 'instead of (gen. prep.)'),
    V('entbehren', 'entbehren', 'to be deprived of (gen.)'),
    V('bedürfen', 'bedürfen', 'to be in need of (gen.)'),
    V('gedenken', 'gedenken', 'to remember (gen.)'),
    V('der Herr', 'Herr', 'the lord (des Herrn in the gen.)'),
    V('das Jahr', 'Jahr', 'the year (des Jahres in the gen.)'),
    V('die Eltern', 'Eltern', 'the parents'),
    V('der Krieg', 'Krieg', 'the war (des Krieges in the gen.)'),
    V('ein Glas Wasser', 'Glas', 'a glass of water (measure in the gen.)'),
    V('heute Morgen', 'Morgen', 'this morning (time in the gen.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Die Liebe des Kindes", which case is des?'),
    options: [T('nominative'), T('accusative'), T('dative'), T('genitive')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Form the genitive: das Jahr → ___'),
      answer: 'des Jahres',
      hint: T('Neuter in -es in the genitive.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the preposition: ___ des Regens (because of the rain)'),
      answer: 'Wegen',
      hint: T('Genitive preposition of cause.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the correct genitive of "der Vater"?'),
      options: [T('des Vaters'), T('der Vater'), T('den Vater'), T('dem Vater')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to its meaning.'),
      pairs: [
        { a: T('trotz'), b: T('in spite of') },
        { a: T('während'), b: T('during') },
        { a: T('statt'), b: T('instead of') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The genitive precedes the noun it qualifies: die Eltern des Mannes (the parents of the man), never des Mannes die Eltern in ordinary speech.',
      ),
    },
    {
      n: '2',
      text: T(
        'The strong masculine forms the genitive with -es, the weak masculine with -n and the neuter and feminine with -es or -s: des Hauses, des Vaters, des Kindes, der Frau.',
      ),
    },
    {
      n: '3',
      text: T(
        'Proper names with an article form the genitive with no ending: des Herrn, des Petrus, des Johannes; without an article they take -s: Petri, Johanns.',
      ),
    },
    {
      n: '4',
      text: T(
        'In almost every case von + dative can replace the genitive, and that is the standard solution for the contemporary speaker: wegen des Mangels / von dem Mangel.',
      ),
    },
  ],
  notes: [
    {
      label: T('The genitive in des'),
      text: T(
        'When there is no human possessor, German prefers the dative with von: Die Farbe des Himmels can be Die Farbe vom Himmel, and the second sounds more natural. That shows the genitive has not disappeared: it has changed partners.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 1:14, die Herrlichkeit Gottes eingeweht. The genitive of origin is one of the marks of biblical style: the glory of God, the Word of God, the Son of Man. In Portuguese the genitive is rare; in biblical German it is constant, because it translates the Greek genitive without loss.',
      ),
    },
  ],
  examples: [
    {
      text: 'Die Eltern des Mannes kommen.',
      gloss: T('The parents of the man are coming (possessor first).'),
    },
    { text: 'Des Kindes Stimme ist laut.', gloss: T("The child's voice is loud (neuter in -es).") },
    {
      text: 'Der Name der Lehrerin fehlt.',
      gloss: T("The teacher's name is missing (feminine without an ending)."),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('Because of the rain we stay at home (wegen + gen.).'),
    },
    {
      text: 'Trotz des Mangels ist er zufrieden.',
      gloss: T('In spite of the lack he is satisfied (trotz + gen.).'),
    },
    {
      text: 'Während des Krieges lebte er in Wien.',
      gloss: T('During the war he lived in Vienna.'),
    },
    {
      text: 'Ein Glas Wasser bitte.',
      gloss: T('A glass of water, please (measure in the genitive).'),
    },
    {
      text: 'Heute Morgen trank ich Kaffee.',
      gloss: T('This morning I drank coffee (time in the genitive).'),
    },
  ],
  tables: [
    {
      caption: T('The genitive in all its cases'),
      head: ['Gênero', 'Artigo', 'Substantivo', T('Example'), T('Another example')],
      rows: [
        [
          'masc.',
          'des',
          '+ s / es / n',
          'des Mannes, des Hauses, des Vaters',
          'die Liebe des Kindes',
        ],
        ['fem.', 'der', '+ (s / es)', 'der Frau, der Königin', 'der Name der Lehrerin'],
        ['neut.', 'des', '+ (s / es)', 'des Kindes, des Buches', 'der Inhalt des Buches'],
        ['plural', 'der', '+ (s / es)', 'der Eltern, der Menschen', 'der Anfang des Jahres'],
      ],
    },
    {
      caption: T('Uses of the genitive'),
      head: ['Uso', 'Exemplo', 'Tradução'],
      rows: [
        ['posse', 'das Hauses meiner Eltern', 'da casa dos meus pais'],
        ['origem material', 'ein Bild des Malers', 'um quadro do pintor'],
        ['medida', 'ein Glas Wasser, zwei Meter Höhe', 'um copo de água, dois metros de altura'],
        ['conteúdo', 'der Inhalt des Buches', 'o conteúdo do livro'],
        ['tempo', 'heute Morgen, letzten Monat', 'hoje de manhã, mês passado'],
        ['duração', 'während des Krieges', 'durante a guerra'],
        ['com preposição', 'wegen der Sünde', 'por causa do pecado'],
      ],
    },
  ],
};
