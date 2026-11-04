import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('The plural of nouns'),
  subtitle: T('five main patterns'),
  section: T('Nouns'),
  body: C(`The German plural has five ending patterns, and the gender of the singular decides almost everything. The plural -e is the most frequent and belongs mainly to the feminine: die Frau → die Frauen, die Stadt → die Städte, die Straße → die Straßen. It also reaches some masculine nouns: der Bote → die Boten, der Junge → die Jungen, der Hund → die Hunde.

The plural -n/-en belongs to the so-called weak masculine nouns and to the diminutives: der Mensch → die Menschen, der Kunde → die Kunden, der Student → die Studenten, das Mädchen → die Mädchen. A practical rule: every masculine ending in -e, -el, -er or -en and having two syllables makes -n or -en.

The plural -er belongs almost exclusively to masculine nouns in -ling, -ig and -ich, and almost always with an umlaut in the plural: der Frühling → die Frühlinge, der König → die Könige, der Fuchs → die Füchse. The plural with no ending belongs to heavy masculine nouns: der Vater → die Väter, der Lehrer → die Lehrer, der Sohn → die Söhne. The plural -s, finally, is reserved for foreign masculine nouns: der Bus → die Busse, das Auto → die Autos, der Computer → die Computer.

The umlaut of the plural follows a pattern: it appears in many monosyllables and in disyllables ending in -er, -el, -en (Mann → Männer, Buch → Bücher, Baum → die Bäume, Vater → die Väter, Mutter → die Mütter), but it does not appear when the plural already has -e or -s (Garten → Gärten, Tag → Tage, Hund → Hunde) nor in the diminutives (das Mädchen → die Mädchen). The umlaut in the plural is therefore a fairly reliable signal: if the umlaut appeared, the noun is almost always masculine or neuter.`),
  vocab: [
    V('die Frauen', 'Frau', 'the women (plural -e)'),
    V('die Städte', 'Stadt', 'the cities (plural -e with umlaut)'),
    V('die Straßen', 'Straße', 'the streets (plural -e, no umlaut)'),
    V('die Jungen', 'Junge', 'the boys (plural -n)'),
    V('die Hunde', 'Hund', 'the dogs (plural -e)'),
    V('die Menschen', 'Mensch', 'the human beings (plural -en)'),
    V('die Kunden', 'Kunde', 'the customers (plural -en)'),
    V('die Mädchen', 'Mädchen', 'the girls (plural with no ending)'),
    V('die Füchse', 'Fuchs', 'the foxes (plural -e with umlaut)'),
    V('die Könige', 'König', 'the kings (plural -e)'),
    V('die Väter', 'Vater', 'the fathers (plural with no ending, umlaut)'),
    V('die Mütter', 'Mutter', 'the mothers (plural -ü)'),
    V('die Bücher', 'Buch', 'the books (plural -ü)'),
    V('die Busse', 'Bus', 'the buses (plural -e, foreign word)'),
    V('die Autos', 'Auto', 'the cars (plural -s)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the correct plural of "das Mädchen"?'),
    options: [T('die Mädchen'), T('die Mädchens'), T('die Mägdchen'), T('der Mädchen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Form the plural: der König → ___'),
      answer: 'die Könige',
      hint: T('A masculine in -ig makes -e with umlaut.'),
    },
    {
      kind: 'fill',
      prompt: T('Form the plural: die Lehrerin → ___'),
      answer: 'die Lehrerinnen',
      hint: T('Feminine nouns almost always make -e or -n.'),
    },
    {
      kind: 'choose',
      prompt: T('In which of these plurals is there NO umlaut?'),
      options: [T('die Bücher'), T('die Männer'), T('die Hunde'), T('die Bäume')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match the singular to the plural.'),
      pairs: [
        { a: T('der Bus'), b: T('die Busse') },
        { a: T('das Buch'), b: T('die Bücher') },
        { a: T('der Lehrer'), b: T('die Lehrer') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Feminine nouns almost never form a plural in -er or with no ending: die Lehrerin → die Lehrerinnen.',
      ),
    },
    {
      n: '2',
      text: T(
        'The plural -n is obligatory in the masculine nouns in -e, -el, -en and in the diminutives, even when the singular already ends in -e: der Junge → die Jungen.',
      ),
    },
    {
      n: '3',
      text: T(
        'The plural umlaut appears in monosyllables (Buch, Baum) and in disyllables in -er, -el, -en (Vater, Glück), but disappears before the plural -e, -en, -er and -s.',
      ),
    },
    {
      n: '4',
      text: T(
        'Diminutives in -chen and -lein never take an umlaut or a new ending: das Bäumchen → die Bäumchen.',
      ),
    },
  ],
  notes: [
    {
      label: T('The plural always takes die'),
      text: T(
        'In the plural all genders merge into die, and that fusion is what makes the German plural so easy to recognise. When the sentence carries a plural with a visible ending (die Hunde), the missing distinction does no harm; when it carries a plural with no ending (die Väter), it is the ending that betrays the gender of the singular.',
      ),
    },
    {
      label: T('Redundant-looking plurals'),
      text: T(
        'Some plurals look redundant and are not: die Kirschen is the plum, and Kirsch- is the part of the word that indicates the fruit; Kirschbaum is the cherry tree. Likewise das Ei is the egg, but der Eisberg is the iceberg, because -ei forms a different compound. A plural in -n sometimes serves to keep the singular alive inside it.',
      ),
    },
  ],
  examples: [
    { text: 'Die Frauen arbeiten viel.', gloss: T('The women work a lot (feminine → -e).') },
    { text: 'Die Städte sind alt.', gloss: T('The cities are old (umlaut with plural -e).') },
    {
      text: 'Die Jungen spielen draußen.',
      gloss: T('The boys play outside (weak masculine → -n).'),
    },
    {
      text: 'Die Mädchen gehen zur Schule.',
      gloss: T('The girls go to school (diminutive with no ending).'),
    },
    {
      text: 'Die Füchse jagen nachts.',
      gloss: T('The foxes hunt at night (masculine in -ch → -e with umlaut).'),
    },
    {
      text: 'Unsere Lehrer sind freundlich.',
      gloss: T('Our teachers are kind (plural with no ending).'),
    },
    {
      text: 'Die Väter kommen später.',
      gloss: T('The fathers come later (zero plural with umlaut).'),
    },
    { text: 'Die Busse fahren hier.', gloss: T('The buses drive here (foreign masculine → -e).') },
  ],
  tables: [
    {
      caption: T('The five plural patterns'),
      head: ['Padrão', 'Terminação', 'Gênero típico', 'Exemplos'],
      rows: [
        ['1', '-e', 'feminino (e alguns masculinos)', 'die Frauen, die Straßen, die Hunde'],
        [
          '2',
          '-n / -en',
          'masculinos fracos e diminutivos',
          'die Menschen, die Kunden, die Mädchen',
        ],
        ['3', '-er', 'masculinos em -ling, -ig, -ich', 'die Füchse, die Könige, die Frühlinge'],
        [
          '4',
          '∅ (nenhuma)',
          'masculinos graves em -er, -el, -en',
          'die Väter, die Lehrer, die Söhne',
        ],
        ['5', '-s', 'masculinos estrangeiros', 'die Busse, die Autos, die Computers'],
      ],
    },
    {
      caption: T('When the umlaut appears in the plural'),
      head: ['Singular', 'Plural', 'Diéresis'],
      rows: [
        ['der Mann', 'die Männer', 'sim'],
        ['das Buch', 'die Bücher', 'sim'],
        ['der Baum', 'die Bäume', 'sim'],
        ['die Stadt', 'die Städte', 'sim'],
        ['der Vater', 'die Väter', 'sim'],
        ['die Straße', 'die Straßen', 'não (plural em -e)'],
        ['der Tag', 'die Tage', 'não (plural em -e)'],
        ['der Bus', 'die Busse', 'não (plural em -s)'],
        ['das Mädchen', 'die Mädchen', 'não (diminutivo)'],
        ['der Hund', 'die Hunde', 'não (plural em -e)'],
      ],
    },
  ],
};
