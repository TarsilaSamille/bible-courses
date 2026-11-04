import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Possessives'),
  subtitle: T('mein, dein, sein, ihr and unser'),
  section: T('Pronouns'),
  body: C(`The German possessives form a family of twelve words, and they all follow the same declension rule, with two exceptions. The rule is: nominative and accusative end in nothing or in -n according to number; dative and genitive take -em and -es. mein, dein, sein, ihr, unser, euer mark nominative and accusative without an ending in the singular and with -n in the plural: mein Buch, meine Bücher, meinem Buch, meines Buches. Euer is the only form written with an initial -e-.

The two exceptions are sein and ihr. Sein is the third person possessive, and in writing it is identical to the form sie: er sieht sein Buch and er sieht sie, with meaning deciding. ihr, besides being the second person plural possessive, is also the familiar plural pronoun; context makes the distinction, just as it distinguishes Sie from capitalised Sie. In spoken language the third person possessive rarely appears: the article is usually repeated instead, as in Ich sehe den Hund, and the possessive is reserved for emphasis, irony, or to avoid repetition.

The possessive is an adjective, and as such it declines: mein kleiner Hund, meine kleine Katze, mit meinem kleinen Hund, wegen meines kleinen Hundes. That is why it behaves like the adjective of lesson 14: after a definite article the form is weak, and what changes is gender and number, not the possessive itself.

There is a special case that deserves attention: the possessor with people in the genitive may be dropped after a possessive. Der Vater meiner Schwester, die Mutter meines Bruders. And the possessive can become the subject, as in Mein Vater ist Lehrer.

Finally, there is a set of nouns that behaves like a possessive pronoun and dispenses with the article: mein Vater, dein Buch, sein Haus, ihr Kind, unser Land. These are the everyday possessives, and it is in them that the possessive appears more often than anywhere else.`),
  vocab: [
    V('mein', 'mein', 'my (1st person)'),
    V('dein', 'dein', 'your (2nd person)'),
    V('sein', 'sein', 'his, its (3rd person)'),
    V('ihr', 'ihr', 'your (2nd plural)'),
    V('unser', 'unser', 'our (1st plural)'),
    V('euer', 'euer', 'yours (2nd plural, with -e-)'),
    V('meinem', 'mein', 'my (dative)'),
    V('meiner', 'mein', 'my (feminine / strong genitive)'),
    V('meines', 'mein', 'my (neuter, genitive)'),
    V('Ihre', 'Ihr', 'your (polite, capitalised)'),
    V('mein Vater', 'mein', 'my father (no article)'),
    V('sein Buch', 'sein', 'his book'),
    V('der Vater meiner Schwester', 'Vater', "my sister's father (genitive)"),
    V('unser Land', 'unser', 'our country'),
    V('von wegen', 'wegen', 'because of (with genitive)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct form in "mit ___ Bruder"?'),
    options: [T('mein'), T('meinem'), T('meines'), T('meine')],
    answer: 1,
    hint: T('Rule §2: the dative adds -em to the possessive.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the plural: Ich habe ___ Bücher (my books).'),
      answer: 'meine',
      hint: T('In the plural the possessive takes -e, like the noun.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct with the second person plural possessor?'),
      options: [
        T('Das ist euer Haus.'),
        T('Das ist ihr Haus.'),
        T('Das ist eueren Haus.'),
        T('Das ist eurem Haus.'),
      ],
      answer: 0,
      hint: T('Rule §4: ihr is a pronoun, euer is a possessive.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the genitive: wegen ___ Bruders (of my brother).'),
      answer: 'meines',
      hint: T('The genitive adds -es to the possessive.'),
    },
    {
      kind: 'match',
      prompt: T('Match the possessive to the person.'),
      pairs: [
        { a: T('mein'), b: T('1st person singular') },
        { a: T('unser'), b: T('1st person plural') },
        { a: T('Ihr'), b: T('you, formal address') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nominative and accusative have no ending in the singular and take -n in the plural: mein Haus, meine Häuser.',
      ),
    },
    {
      n: '2',
      text: T('Dative and genitive take -em and -es: mit meinem Bruder, wegen meines Bruders.'),
    },
    {
      n: '3',
      text: T(
        'Only the possessor changes; the form of the noun that follows it is that of an adjective, with -e in the singular and -n in the plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'Writing an initial -e- (euer, Euer) is optional and common, but using ihr in place of euer as a possessive is wrong: *ihr Haus is wrong for yours.',
      ),
    },
    {
      n: '5',
      text: T(
        'After a possesive the genitive is used and may be dropped with personal names: das Haus meines Vaters, das Haus meiner Mutter, des Herrn.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where the possessive really shows up'),
      text: T(
        'In spontaneous speech the possessive is rare. The speaker prefers Ich sehe das Buch to Ich sehe mein Buch. The possessive gains force in three situations: when the name is ambiguous (Meine Mutter ist gekommen can be my mother or yours), when contrast is intended (Mein Bruder arbeitet, seiner nicht), and when repetition is avoided (Ich habe mein Buch gelesen und danach ihres). Lesson 31 explains why the article wins in everyday use.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'The possessive is the mark of belonging in the biblical text, and the pattern is clear: Ich bin dein, du bist mein (John 2:16), a sentence that swaps the possessives without losing rhythm. Die Welt mit ihrer Pracht und ihrer Herrlichkeit (Isaiah 2:14) repeats the genitive -r, and the possessive pronoun takes the place of the article: alle ihre Städte.',
      ),
    },
  ],
  examples: [
    { text: 'Mein Vater ist Lehrer.', gloss: T('My father is a teacher (possessive as subject).') },
    { text: 'Das ist mein Buch.', gloss: T('This is my book (no article).') },
    { text: 'Ich sehe deine Schwester.', gloss: T('I see your sister (dein, 2nd person).') },
    { text: 'Er liebt sein Volk.', gloss: T('He loves his people (sein = his).') },
    { text: 'Wir singen in unserer Kirche.', gloss: T('We sing in our church (dative unserem).') },
    {
      text: 'Wegen meines Bruders blieb ich.',
      gloss: T('Because of my brother I stayed (genitive meines).'),
    },
    {
      text: 'Meine kleinen Kinder schlafen.',
      gloss: T('My little children sleep (weak plural adjective).'),
    },
    { text: 'Sagen Sie Ihren Namen.', gloss: T('Say your name (capitalised Ihre, polite).') },
    { text: 'Das ist euer Buch.', gloss: T('This is your book (euer with -e-).') },
  ],
  tables: [
    {
      caption: T('Declension of the possessives'),
      head: ['Caso', 'Singular', 'Plural'],
      rows: [
        ['Nominativo', 'mein Buch', 'meine Bücher'],
        ['Acusativo', 'mein Buch', 'meine Bücher'],
        ['Dativo', 'meinem Buch', 'meinen Büchern'],
        ['Genitivo', 'meines Buches', 'meiner Bücher'],
        ['fem. Nom.', 'meine Frau', 'meine Frauen'],
        ['neutro Nom.', 'mein Kind', 'meine Kinder'],
      ],
    },
    {
      caption: T('Possessives by person and by case'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Genitivo'],
      rows: [
        ['ich', 'mein', 'meinem', 'meines'],
        ['du', 'dein', 'deinem', 'deines'],
        ['er/sie/es', 'sein', 'seinem', 'seines'],
        ['wir', 'unser', 'unserem', 'unseres'],
        ['ihr', 'euer', 'eurem', 'eures'],
        ['Sie', 'Ihr', 'Ihrem', 'Ihres'],
      ],
    },
  ],
};
