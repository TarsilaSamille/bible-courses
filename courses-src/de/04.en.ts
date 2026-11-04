import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Indefinite articles and kein'),
  subtitle: T('ein, eine and kein'),
  section: T('Articles'),
  body: C(`The German indefinite article has a single form, ein, which declines exactly like the definite article. In the nominative it agrees in gender: ein Mann, eine Frau, ein Kind. From there on, ein takes precisely the same forms as der: einen (masculine accusative), einem (dative), einer (feminine in the oblique cases) and einem (neuter).

What does not exist is a plural form: ein requires a countable singular noun, because the noun itself carries the plural. In a sentence like Heute ist ein Gewitter, the reader infers that a single storm is meant.

The negation system is one of the gems of German. Negation is done with kein: Ich habe kein Buch. The form kein does not change position in relation to the indefinite, but when the negation falls on another word (the subject, for instance), the indefinite article disappears completely: Nicht ein Mensch hilft ihm = no human being helps him. With nicht, therefore, the indefinite only survives as a quantifier, never as a plain article.

One caution: kein means "no" and already contains the negation, so it does not combine with nicht. Ich habe nicht kein Buch is wrong, except when the negation is corrective (Nicht ein einziger kam = not a single one came).`),
  vocab: [
    V('ein', 'ein', 'a (masc./neut. nom.)'),
    V('eine', 'ein', 'a (fem. nom.)'),
    V('einen', 'ein', 'a (masc. acc.)'),
    V('einem', 'ein', 'to a (masc./neut. dat.)'),
    V('einer', 'ein', 'to a (fem. dat./gen.)'),
    V('kein', 'kein', 'no (masc./neut. nom.)'),
    V('keine', 'kein', 'no (fem. and plural)'),
    V('einen Baum', 'Baum', 'a tree'),
    V('eine Blume', 'Blume', 'a flower'),
    V('ein Buch', 'Buch', 'a book'),
    V('kein Brot', 'Brot', 'no bread'),
    V('keine Zeit', 'Zeit', 'no time'),
    V('ein wenig', 'wenig', 'a little'),
    V('ein Mensch', 'Mensch', 'a human being'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct dative of "of a city"?'),
    options: [T('einer Stadt'), T('ein Stadt'), T('einem Stadt'), T('eines Stadt')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the negation: Wir haben ___ Zeit.'),
      answer: 'keine',
      hint: T('Zeit is feminine and the noun is plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the accusative: Er hat ___ Hund (a dog).'),
      answer: 'einen',
      hint: T('Masculine accusative: -en.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Ich habe nicht kein Brot.'),
        T('Ich habe kein Brot.'),
        T('Nicht ich habe kein Brot.'),
        T('Ich habe nicht ein Brot.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the form to the case.'),
      pairs: [
        { a: T('eines'), b: T('masculine genitive') },
        { a: T('einer'), b: T('feminine genitive') },
        { a: T('keine'), b: T('negative plural') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    { n: '1', text: T('ein declines like der, not like a neuter noun: einen, einem, eines.') },
    {
      n: '2',
      text: T(
        'kein is the only declining form of negation; everywhere it behaves like ein, except that it admits the plural (keine Bücher).',
      ),
    },
    {
      n: '3',
      text: T(
        'kein negates only a countable quantity or a unit; for a quality (not cold but hot) use nicht + adjective.',
      ),
    },
    {
      n: '4',
      text: T(
        'nicht with the indefinite is only legitimate in a corrective or contrastive reading, usually reinforced by even: Nicht einmal ein Wort sagte er.',
      ),
    },
  ],
  notes: [
    {
      label: T('The article that disappears'),
      text: T(
        'When nicht negates an already determined element, the indefinite is withdrawn without leaving any grammatical trace: kein Freund hilft (no friend helps) is possible, but nicht ein Freund hilft only means "not a single friend helped". The difference between the two sentences is one of scope, not of correctness.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In John 1:3, Alle haben ihn nicht empfangen. The plural without article or pronoun works as the subject, and the plural verb shows that the negation covers people, not a thing. The construction Alle ... nicht is the exact opposite of kein.',
      ),
    },
  ],
  examples: [
    { text: 'Ein Mann kommt.', gloss: T('A man is coming (masculine nominative).') },
    {
      text: 'Ich sehe eine Blume.',
      gloss: T('I see a flower (ein → eine in the feminine nominative).'),
    },
    { text: 'Er hat einen Freund.', gloss: T('He has a friend (masculine accusative: einen).') },
    {
      text: 'Sie spricht mit einem Arzt.',
      gloss: T('She is speaking with a doctor (mit requires the dative: einem).'),
    },
    { text: 'Ich habe kein Brot.', gloss: T('I have no bread (kein in place of ein).') },
    { text: 'Wir haben keine Zeit.', gloss: T('We have no time (negative plural: keine).') },
    {
      text: 'Nicht ein Mensch blieb.',
      gloss: T('Not a single human being stayed (nicht + no article).'),
    },
  ],
  tables: [
    {
      caption: T('ein, eine and kein in all cases'),
      head: ['Caso', 'masc. sg.', 'fem. sg.', 'neut. sg.', 'plural'],
      rows: [
        ['Nominativo', 'ein Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Acusativo', 'einen Mann', 'eine Frau', 'ein Kind', 'keine Kinder'],
        ['Dativo', 'einem Mann', 'einer Frau', 'einem Kind', 'keinen Kindern'],
        ['Genitivo', 'eines Mannes', 'einer Frau', 'eines Kindes', 'keiner Kinder'],
      ],
    },
    {
      caption: T('Negation with kein and with nicht'),
      head: ['Alvo da negação', 'Forma usada', 'Exemplo', 'Leitura'],
      rows: [
        ['o substantivo', 'kein', 'Ich habe kein Brot.', 'não tenho pão'],
        ['o adjetivo', 'kein', 'Das Wasser ist nicht kalt.', 'a água não é fria'],
        [
          'o sujeito inteiro',
          'nicht + sem artículo',
          'Nicht ein Mensch half ihm.',
          'nenhum ser humano o ajudou',
        ],
        ['o verbo', 'nicht', 'Ich gehe nicht.', 'eu não vou'],
        ['num substantivo plural', 'keine', 'Wir haben keine Zeit.', 'não temos tempo'],
      ],
    },
  ],
};
