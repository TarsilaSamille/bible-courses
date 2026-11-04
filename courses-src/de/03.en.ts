import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('The definite articles'),
  subtitle: T('der, die, das in the four cases'),
  section: T('Articles'),
  body: C(`The German definite article does more than point to a known object: it carries the case information and therefore the function of the clause. There are three words, one for each gender: der (masculine), die (feminine), das (neuter). In the plural all three collapse into die.

Each case has its own ending. In the nominative nothing changes. In the accusative the masculine changes -er into -en (der → den) and the others do not change. In the dative all forms take -e (der → dem, die → der, das → dem). In the genitive all forms take -s or -es, and masculine nouns add -es or an -n: des Mannes, des Vaters.

It is the ending of the article that reveals the function, not the word order. In Der Mann sieht das Kind we have a nominative and an accusative, and in Das Kind sieht der Mann the neuter at the front is the subject.

After a preposition the noun may appear without an article: nach Berlin, bei Maria, zu Hause. In that case the case is marked by the preposition: nach requires the dative, so nach dem Mann and nach dem Kind agree in form although the nouns have different genders.`),
  vocab: [
    V('der', 'der', 'the (masc. nom. sing.)'),
    V('die', 'die', 'the (fem. nom. sing.)'),
    V('das', 'das', 'the (neut. nom. sing.)'),
    V('den', 'der', 'the (masc. acc. sing.)'),
    V('dem', 'der', 'to the (masc./neut. dat. sing.)'),
    V('des', 'der', 'of the (masc./neut. gen. sing.)'),
    V('die', 'die', 'the (plural, all genders)'),
    V('den', 'die', 'the (plural, acc. and dat.)'),
    V('der Vater', 'Vater', 'the father'),
    V('die Mutter', 'Mutter', 'the mother'),
    V('das Kind', 'Kind', 'the child'),
    V('die Stadt', 'Stadt', 'the city'),
    V('das Buch', 'Buch', 'the book'),
    V('des Mannes', 'Mann', 'of the man (strong genitive)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which case does "der Mutter" express in Die Mutter des Kindes kommt?'),
    options: [T('Nominative'), T('Accusative'), T('Dative'), T('Genitive')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative: mit ___ Mann (with the man)'),
      answer: 'dem',
      hint: T('Every dative form ends in -e.'),
    },
    {
      kind: 'fill',
      prompt: T('Make it plural: das Kind → ___'),
      answer: 'die Kinder',
      hint: T('In the plural the article is die for all genders.'),
    },
    {
      kind: 'choose',
      prompt: T('In Ich sehe den Mann, what is the function of den?'),
      options: [T('nominative'), T('accusative'), T('dative'), T('genitive')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the article to its function.'),
      pairs: [
        { a: T('des'), b: T('masculine genitive') },
        { a: T('dem'), b: T('masculine dative') },
        { a: T('der'), b: T('feminine genitive') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The nominative is the only form that is identical in all three genders; the most neutral sentence possible is Das Kind spielt.',
      ),
    },
    {
      n: '2',
      text: T(
        'The dative marks the person to whom something is given, said or sent: Ich gebe dem Mann das Buch.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the genitive the masculine noun normally takes -s or -es (des Vaters) and the neuter -es (des Kindes); the feminine stays unchanged (der Frau).',
      ),
    },
    {
      n: '4',
      text: T(
        'The plural die serves for nominative and accusative; the position of the verb is therefore what disambiguates: Die Kinder kommen (nominative), Ich sehe die Kinder (accusative).',
      ),
    },
  ],
  notes: [
    {
      label: T('Article or zero'),
      text: T(
        'Optionally a Wechselpräposition can drop the article: bei dem Arzt → beim Arzt, von dem Meer → vom Meer, zu dem Haus → zum Haus. The fusion into -m reveals the dative and avoids repetition, but it is only possible because the dative article already ends in -m.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        'In 1 John 1:1, Im Anfang war das Wort: the neuter das is nominative and subject, and war is the verb. The article does here the same job as in Greek, but in German gender is grammatical rather than inherited from Greek.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest das Buch.',
      gloss: T('The man reads the book (der = nom. masc., das = acc. neut.).'),
    },
    {
      text: 'Das Kind sieht der Mann.',
      gloss: T('The man sees the child (the fronted neuter has become the subject).'),
    },
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('I give the book to the man (dative = person, accusative = thing).'),
    },
    {
      text: 'Die Mutter des Kindes kommt.',
      gloss: T('The mother of the child is coming (two genitives).'),
    },
    {
      text: 'Die Kinder spielen im Garten.',
      gloss: T('The children play in the garden (im = in dem, dative because of location).'),
    },
    {
      text: 'Nach Berlin fahren wir.',
      gloss: T('We are going to Berlin (destination without an article).'),
    },
  ],
  tables: [
    {
      caption: T('Declension of the definite article'),
      head: ['Caso', 'masc. sing.', 'fem. sing.', 'neut. sing.', 'plural'],
      rows: [
        ['Nominativo', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Acusativo', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Dativo', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern'],
        ['Genitivo', 'des Mannes', 'der Frau', 'des Kindes', 'der Kinder'],
      ],
    },
    {
      caption: T('How case information is read'),
      head: ['Forma observada', 'Leitura', 'Pergunta que responde'],
      rows: [
        ['der / die / das', 'nominativo', 'quem ou o quê faz a ação?'],
        ['den / die / das', 'acusativo', 'quem ou o quê recebe a ação?'],
        ['dem / der / dem', 'dativo', 'a quem ou para quem?'],
        ['des / der / des', 'genitivo', 'de quem ou de quê?'],
        ['die (plural)', 'nominativo ou acusativo', 'ambos possíveis'],
        ['den (plural)', 'dativo ou acusativo', 'ambos possíveis'],
      ],
    },
  ],
};
