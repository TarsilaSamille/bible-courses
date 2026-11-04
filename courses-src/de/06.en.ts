import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Nouns'),
  subtitle: T('class, inflection and compounds'),
  section: T('Nouns'),
  body: C(`The German noun is the only word class that must always begin with a capital, and it is the class that carries gender, number and case. Everything else can become a noun by nominalisation: an infinitive (das Essen, eating), an adjective (der Arme, the poor person), a numeral (die Zweite, the second) and even a pronoun (das Ich, the I). When that happens, the noun takes a gender of its own, which does not always match that of the base.

Compounds are the most visible feature of the German noun. The rule of formation is simple — the elements go from the largest to the smallest, and the last one is the head: Krankenhaus = Krank + en + Haus (sick + house). The linking element usually takes an -s, called the Fugen-s, although it does not always appear (Krankenhaus, Arbeitnehmer, but Haustür, Schiffahrt, Rucksack).

The declension of a noun always follows the same plan: the ending of the article follows the gender, and that of the noun varies only in the genitive singular and in the plural. A masculine noun has in the genitive either -s, or -es (des Mannes, des Hauses), or an -n (des Vaters, des Jungen). The feminine and the neuter form the genitive with -s or -es (der Frau, des Kindes).

One practical caution: the gender of a compound is the gender of its head, not of its first element. Der Arbeitgeber is masculine because the head is Arbeitgeber (a person), although Arbeit is feminine. A mnemonic that works better than sheer habit is to learn every noun with its article and in the plural, because that is the form that shows up in speech.`),
  vocab: [
    V('das Essen', 'Essen', 'the food; eating (nominalised)'),
    V('frühstücken', 'frühstücken', 'to have breakfast'),
    V('das Frühstück', 'Frühstück', 'the breakfast'),
    V('der Arme', 'Arme', 'the poor person (nominalised adj.)'),
    V('das Lesen', 'Lesen', 'the reading (nominalised)'),
    V('die Zweite', 'zweite', 'the second one (nominalised numeral)'),
    V('das Krankenhaus', 'Krankenhaus', 'the hospital (compound)'),
    V('der Arbeitgeber', 'Arbeitgeber', 'the employer (compound)'),
    V('die Haustür', 'Haustür', 'the front door (compound, no linking s)'),
    V('die Forschung', 'Forschung', 'the research (compound in -ung)'),
    V('die Rede', 'Rede', 'the speech; the net'),
    V('reden', 'reden', 'to speak'),
    V('der Handschlag', 'Handschlag', 'the handshake'),
    V('das Verstehen', 'Verstehen', 'the understanding'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the head and the gender of "der Arbeitgeber"?'),
    options: [
      T('Arbeit, feminine'),
      T('Arbeitgeber, masculine'),
      T('Geber, neuter'),
      T('der Arbeitgeber, neuter'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Take the compound apart: Krankenhaus = Haus für ___'),
      answer: 'Kranke',
      hint: T('The first element indicates the person affected.'),
    },
    {
      kind: 'fill',
      prompt: T('Form the noun of "verstehen" (to understand): das ___'),
      answer: 'Verstehen',
      hint: T('A nominalised infinitive is neuter.'),
    },
    {
      kind: 'choose',
      prompt: T('Which compound does NOT have a linking s?'),
      options: [T('das Krankenhaus'), T('die Haustür'), T('das Arbeithaus'), T('der Kirchturm')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the base to the nominalisation.'),
      pairs: [
        { a: T('essen'), b: T('das Essen') },
        { a: T('arm'), b: T('der Arme') },
        { a: T('frühstücken'), b: T('das Frühstück') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every nominalisation is masculine, feminine or neuter according to the rule of the nominal head, and that rule is not the rule of the base word.',
      ),
    },
    {
      n: '2',
      text: T(
        'The head of a compound is its last element, and that element determines the gender: die Blume + der Topf → die Blumenvase.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the genitive singular the masculine uses -s, -es or -n according to the weight of the word; the feminine and the neuter use -s or -es.',
      ),
    },
    {
      n: '4',
      text: T(
        'The linking s is an empty morpheme: it never takes stress, never counts for the plural and can vanish when the compound is shortened (Krankenhaus → krank).',
      ),
    },
  ],
  notes: [
    {
      label: T('Stand back a little'),
      text: T(
        'The compound construction is, in its origin, a recipe for instruction. Where German says Wenn Sie die Tür schließen, there is a way of speaking around the missing article. Anyone who learns to take compounds apart recovers the grammar without memorising anything: Krankenhaus = Haus für Kranke.',
      ),
    },
    {
      label: T('By degrees'),
      text: T(
        'A high-yield strategy is pairing: Karte ↔ die Karte, die Karte ↔ maps, and the plural die Karten. With three data points — article, singular and plural — the noun stays recoverable even when memory fails.',
      ),
    },
  ],
  examples: [
    {
      text: 'Das Essen ist fertig.',
      gloss: T('The food is ready (das = neuter, Essen = eating).'),
    },
    {
      text: 'Die Armen essen später.',
      gloss: T('The poor eat later (Arme = nominalised adjective).'),
    },
    {
      text: 'Er arbeitet in einem Krankenhaus.',
      gloss: T('He works in a hospital (compound with linking s).'),
    },
    {
      text: 'Die Haustür war offen.',
      gloss: T('The front door was open (compound without linking s).'),
    },
    {
      text: 'Sie hält die Zweite im Kreuz.',
      gloss: T('She is holding the second one (nominalised numeral).'),
    },
    {
      text: 'Das Verstehen kam langsam.',
      gloss: T('The understanding came slowly (nominalised verb).'),
    },
    {
      text: 'Zum Frühstück gab es Brot.',
      gloss: T('There was bread for breakfast (z um = zu dem, genitive).'),
    },
  ],
  tables: [
    {
      caption: T('Nominalised forms'),
      head: ['Base', 'Nominalização', 'Gênero', 'Leitura'],
      rows: [
        ['infinitivo (essen)', 'das Essen', 'neutro', 'a comida, o ato de comer'],
        ['infinitivo (frühstücken)', 'das Frühstück', 'neutro', 'o café da manhã'],
        ['adjetivo (arm)', 'der Arme', 'masculino', 'o pobre'],
        ['adjetivo (schön)', 'das Schönste', 'neutro', 'o mais belo, o melhor'],
        ['numeral (die zweite)', 'die Zweite', 'feminino', 'a segunda, a outra pessoa'],
        ['pronome (ich)', 'das Ich', 'neutro', 'o eu, o ego'],
        ['verbo (verstehen)', 'das Verstehen', 'neutro', 'a compreensão'],
      ],
    },
    {
      caption: T('The linking s in compounds'),
      head: ['Composto', 'Análise', 'Fugen-s'],
      rows: [
        ['das Krankenhaus', 'Krank + en + Haus', 'presente'],
        ['der Arbeitgeber', 'Arbeit + Geber', 'ausente'],
        ['die Haustür', 'Haus + Tür', 'ausente'],
        ['die Rucksackreise', 'Rucksack + Reise', 'ausente'],
        ['die Schiffahrt', 'Schiff + Fahrt', 'fricativo /f/'],
        ['der Arbeitnehmer', 'Arbeit + Nehmer', 'ausente'],
        ['die Blumentopferdecke', 'Blume + Topf + Decke', 'presente, truncado'],
        ['der Dreikäsehoch', 'drei + Käse + Hoch', 'presente, truncado'],
      ],
    },
  ],
};
