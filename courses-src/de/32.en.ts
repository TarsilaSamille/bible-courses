import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Personal pronouns'),
  subtitle: T('ich, du, er, es, wir, ihr and Sie'),
  section: T('Pronouns'),
  body: C(`The table of personal pronouns has seven rows and three columns, and the columns are the three possible positions in the sentence. Ich, mir, mich: nominative, dative and accusative. The same structure holds for every person: du, dir, dich; er/sie/es, ihm/ihr/ihnen, ihn/sie/es. In the plural: wir, uns, uns; ihr, euch, euch; Sie, Ihnen, Sie. The rule that memorises everything is short: in the accusative the pronoun takes the shape of the nominative, except in the second person singular (dich), where the nominative is short and the accusative is long.

The accusative is the place of action: sich lässt machen, man wagt, er folgt ihr. That is why all synthetic action verbs require an accusative pronoun, and all stative verbs require a dative. Ich kenne ihn (he does not know me) and Ich helfe ihm (I help him) are not the same sentence: they are two different cases, and Portuguese usually hides the difference behind prepositions.

Sie is the most overloaded word in German. In writing it is capitalised and means you or they, according to the number of the verb: Sie kommen can be you come or they come. In speech the distinction is made with the verb in singular or plural: Komm! is you, kommen Sie! is you or they, and context settles it. Anyone who needs to avoid the ambiguity reaches for Ihnen (dative) or uses Siesie.

The choice of du, ihr and Sie dictates different reflexive pronouns, and the choice is more a matter of social distance than of grammar. Against Sie the reflexive is sich: Setzen Sie sich. Against ihr, yourselves: Setzt euch. Against du: Setz dich. With Sie in the third person there is a personal sich, and between them the reciprocal sie sich appears; against ihr there is no reciprocal, since the form setzt euch is only reflexive: Ihr setzt euch.

Finally, es has a function manuals forget to mention: it can stand in for a whole noun phrase, which is impossible with er or sie. Es ist heute kalt, Es sind viele Leute gekommen, Wie ist es? Here the pronoun stands in for a noun, not for a name.`),
  vocab: [
    V('ich', 'ich', 'I (nominative)'),
    V('mir', 'ich', 'to me (dative)'),
    V('mich', 'ich', 'me (accusative)'),
    V('du', 'du', 'you (nominative)'),
    V('dir', 'du', 'to you (dative)'),
    V('dich', 'du', 'you (accusative)'),
    V('er', 'er', 'he (nominative)'),
    V('ihn', 'er', 'him (accusative)'),
    V('ihm', 'er', 'to him (dative)'),
    V('es', 'es', 'it (neuter)'),
    V('sie', 'sie', 'she (lower case)'),
    V('wir', 'wir', 'we (nominative)'),
    V('ihr', 'ihr', 'you all (nominative)'),
    V('Sie', 'Sie', 'you, they (capitalised)'),
    V('Ihnen', 'Sie', 'to you, to them (dative)'),
    V('sich', 'sich', 'oneself (reflexive)'),
    V('euch', 'ihr', 'yourselves (reflexive/accusative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the accusative pronoun of "du"?'),
    options: [T('du'), T('dich'), T('dir'), T('dihr')],
    answer: 1,
    hint: T('It is the only row of the table that does not repeat the nominative.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative: Das Buch gefällt ___ (to me).'),
      answer: 'mir',
      hint: T('It is the -r form of the pronoun ich.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Ich gebe Ihnen das Buch", what does Ihnen mean?'),
      options: [
        T('to you, in the dative'),
        T('to them, in the nominative'),
        T('to ourselves, in the accusative'),
        T('to you, in the accusative'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete the impersonal sentence: ___ ist heute kalt.'),
      answer: 'Es',
      hint: T('The verb has nothing to govern, so es steps in.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the case.'),
      pairs: [
        { a: T('mich'), b: T('accusative') },
        { a: T('dir'), b: T('dative') },
        { a: T('Ihnen'), b: T('dative of Sie') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In the accusative the pronoun repeats the nominative, except in du, which becomes dich.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dative and accusative have the same shape in the plural, except in Sie, whose accusative is Sie and whose dative is Ihnen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Capitalised Sie can mean you or they; the ambiguity is resolved by the number of the verb and by context.',
      ),
    },
    {
      n: '4',
      text: T(
        'es can replace a whole phrase: Es sind viele Leute gekommen. With er or sie that is impossible.',
      ),
    },
    {
      n: '5',
      text: T(
        'The form of address decides the reflexive: sich against Sie, euch against ihr, dich against du.',
      ),
    },
  ],
  notes: [
    {
      label: T('The dative that looks like Portuguese'),
      text: T(
        'Ich helfe ihm and Ich gebe ihm das Buch are translated into Portuguese with a preposition, and that preposition makes the case disappear. Anyone who translates into Portuguese and then tries to rebuild the sentence loses the information. Biblical reading depends on that accuracy: Wenn ich euch nicht liebe, so ist keine Liebe in mir (1 John 4:16) has a dative and an accusative pronoun in the same clause, and neither survives the Portuguese preposition.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "Luther's translation uses ich and du without an article, which is the most reliable sign of intimacy in the biblical text. Ich bin bei euch (Matthew 28:20) and Ihr seid mein Leib (1 Corinthians 12:23) place the speaker and the addressee on the same level. The same verse, in church usage, has Sie: Siehe, ich bin bei euch alle Tage, which is the liturgical form of the text, free of ambiguity of address.",
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe dich.', gloss: T('I see you (accusative pronoun).') },
    { text: 'Ich gebe dir das Buch.', gloss: T('I give you the book (dative before accusative).') },
    { text: 'Es gefällt mir.', gloss: T('I like that (pronoun in the dative).') },
    {
      text: 'Sie kommen heute.',
      gloss: T('You are coming today (or they are: the verb settles it).'),
    },
    { text: 'Setzen Sie sich, bitte.', gloss: T('Please sit down (reflexive sich).') },
    { text: 'Setzt euch!', gloss: T('Sit down! (reflexive euch).') },
    {
      text: 'Es sind viele Leute hier.',
      gloss: T('There are many people here (es in place of a phrase).'),
    },
    { text: 'Wie ist es?', gloss: T('How are things? (impersonal with es).') },
    { text: 'Ich kenne ihn gut.', gloss: T('I know him well (accusative he).') },
  ],
  tables: [
    {
      caption: T('The table of personal pronouns'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Acusativo'],
      rows: [
        ['ich', 'ich', 'mir', 'mich'],
        ['du', 'du', 'dir', 'dich'],
        ['er/sie/es', 'er/sie/es', 'ihm/ihr/ihnen', 'ihn/sie/es'],
        ['wir', 'wir', 'uns', 'uns'],
        ['ihr', 'ihr', 'euch', 'euch'],
        ['Sie', 'Sie', 'Ihnen', 'Sie'],
      ],
    },
    {
      caption: T('Nominative and accusative: only one exception'),
      head: ['Pronome', 'Nominativo', 'Acusativo', 'Exceção?'],
      rows: [
        ['1ª sing.', 'ich', 'mich', 'não'],
        ['2ª sing.', 'du', 'dich', 'sim: du → dich'],
        ['3ª masc.', 'er', 'ihn', 'não (vogal → nada)'],
        ['3ª fem.', 'sie', 'sie', 'não'],
        ['neutro', 'es', 'es', 'não'],
        ['plural', 'wir/ihr/Sie', 'uns/euch/Sie', 'não'],
      ],
    },
  ],
};
