import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('The imperative'),
  subtitle: T('du, ihr, Sie and the polite form'),
  section: T('The verbs'),
  body: C(`The German imperative has two families, and they are distinguished by the level of address, not by number. Against du, ihr and Sie you have only the singular: komm!, kommt!, kommen Sie!. The polite form is almost identical to the present indicative, with the ending -en in place of the -t: Sie kommen = you come, kommen Sie! = come!. Against du and ihr you have both forms, plus a Sie form that is always the same as the ihr one.

The singular of du comes from the present indicative with the ending removed: du kommst → komm!, du fährst → fahr!, du heißt → heiß! There is no second person plural that derives from the first person: ihr kommt comes from *kommet, archaic today. With the strong verbs lesen, sehen, geben, essen, treffen the vowel alternates in the du form (du gibst) and therefore the imperative alternates too (gib!, sieh!, iss!, lies!). This is the only case in which the imperative does not coincide with the indicative minus ending.

The -e ending of the plural before -t deserves attention: ihr sagt → sagt!, ihr macht → macht!, but ihr fahrt → fahrt! and ihr geht → geht!. The rule is that the -e is obligatory when the form ends in -t or -d and optional otherwise. It is the same reason that produces the optional -e of the Konjunktiv I, with the classic integration of the second vowel.

With Sie the verb is always the present with -e: Setzen Sie sich!, Haben Sie Geduld!, Sagen Sie mir die Wahrheit!. And there is a politeness point that German manuals almost always keep quiet about: the negative imperative is se Verb nicht, and with Sie the negation comes after the pronoun: Setzen Sie sich nicht!.

One last feature: German has few subjunctive forms, and the imperative is the only one that survived intact from the old language. It is also the only form German does not need to soften: komm! is at once neutral and emphatic.`),
  vocab: [
    V('komm!', 'kommen', 'come! (du, singular)'),
    V('kommt!', 'kommen', 'come! (ihr, plural)'),
    V('kommen Sie!', 'kommen', 'come! (polite)'),
    V('du', 'du', 'you (familiar)'),
    V('ihr', 'ihr', 'you all (familiar)'),
    V('Sie', 'Sie', 'you (polite)'),
    V('gib!', 'geben', 'give! (vowel change)'),
    V('iss!', 'essen', 'eat! (strong verb)'),
    V('lies!', 'lesen', 'read! (strong verb)'),
    V('fahr!', 'fahren', 'go! (no -e in the singular)'),
    V('setzt euch!', 'setzen', 'sit down! (plural reflexive)'),
    V('nicht', 'nicht', 'not (imperative negation)'),
    V('haben Sie Geduld', 'haben', 'have patience (polite)'),
    V('warten Sie', 'warten', 'wait (polite)'),
    V('Vergiss nicht', 'vergessen', 'do not forget (negative imperative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the correct imperative of "du fährst"?'),
    options: [T('fährst!'), T('fahr!'), T('fahre!'), T('gefahr!')],
    answer: 1,
    hint: T('Rule §1: the du singular is the present minus its ending.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the polite imperative: ___ Sie sich! (sit down)'),
      answer: 'Setzen',
      hint: T('With Sie the verb takes -en in place of -t.'),
    },
    {
      kind: 'choose',
      prompt: T('Which imperative is correct according to the -e rule?'),
      options: [T('Fahrt!'), T('Fahre!'), T('Fahrt zu!'), T('Fahret!')],
      answer: 0,
      hint: T('The form ends in -t: the -e is obligatory.'),
    },
    {
      kind: 'fill',
      prompt: T('Build the negative imperative: Komm nicht zu spät! → Warte __ nicht!'),
      answer: 'mir',
      hint: T('The pronoun occupies the middle position of the sentence.'),
    },
    {
      kind: 'match',
      prompt: T('Match the person to the imperative form.'),
      pairs: [
        { a: T('du'), b: T('komm!') },
        { a: T('ihr'), b: T('kommt!') },
        { a: T('Sie'), b: T('kommen Sie!') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The du singular drops the present ending: du fährst → fahr!, du heißt → heiß!'),
    },
    {
      n: '2',
      text: T(
        'Strong verbs with vowel change also change the vowel in the imperative: du gibst → gib!, du isst → iss!, du liest → lies!',
      ),
    },
    {
      n: '3',
      text: T(
        'In the plural the -e is obligatory after -t and -d and optional elsewhere: geht! and fahrt!, but wartet! and macht!',
      ),
    },
    {
      n: '4',
      text: T(
        'With Sie the imperative is the present with -e and the pronoun comes first: Setzen Sie sich!',
      ),
    },
    {
      n: '5',
      text: T(
        'The negative imperative uses nicht after the verb: Komm nicht zu spät!; with Sie the negation follows the pronoun: Kommen Sie nicht!',
      ),
    },
  ],
  notes: [
    {
      label: T('Why there is no second person plural from the first'),
      text: T(
        'The first person plural indicative Ich komme is not the source of the imperative plural. The form comes from *kommet, with the -et ending, which survives only in a few fixed contexts and is now completely archaic outside the imperative. Lesson 31 shows that the pronoun ihr grew out of the verb form, not the other way round: it was the verb that carried the second person marking, and the pronoun simply slowly filled the space it left.',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "The Ten Commandments are the largest storehouse of German imperatives. Du sollst deinen Vater und deine Mutter ehren (Exodus 20:12) gives the second person singular, and Du sollst nicht töten gives the same structure with a following negation. In Galatians 5:1, Die Freiheit des Gesetzes steht uns Christen zu, Luther's translation uses the subjunctive; the -st imperative is the key to reading the text as a set of orders rather than descriptions.",
      ),
    },
  ],
  examples: [
    { text: 'Komm sofort!', gloss: T('Come right away! (du, ending dropped).') },
    { text: 'Gib mir das Buch!', gloss: T('Give me the book! (vowel change).') },
    { text: 'Vergiss das nicht!', gloss: T('Do not forget that! (negation after the verb).') },
    { text: 'Setzt euch!', gloss: T('Sit down! (plural reflexive).') },
    { text: 'Wartet auf mich!', gloss: T('Wait for me! (-e obligatory after -t).') },
    { text: 'Macht das Fenster auf!', gloss: T('Open the window! (-e optional).') },
    { text: 'Kommen Sie herein!', gloss: T('Do come in (Sie + verb with -en).') },
    { text: 'Seien Sie ruhig!', gloss: T('Be calm (always the Sie form).') },
    {
      text: 'Halte die Tür offen!',
      gloss: T('Keep the door open (subjunctive imperative, rare).'),
    },
  ],
  tables: [
    {
      caption: T('Imperative forms by person'),
      head: ['Pessoa', 'Indicativo', 'Imperativo'],
      rows: [
        ['du (singular)', 'du kommst', 'komm!'],
        ['ihr (plural)', 'ihr kommt', 'kommt!'],
        ['Sie (polidez)', 'Sie kommen', 'kommen Sie!'],
        ['du + sein', 'du bist', 'sei!'],
        ['ihr + sein', 'ihr seid', 'seid!'],
        ['Sie + sein', 'Sie sind', 'seien Sie!'],
      ],
    },
    {
      caption: T('The plural -e ending'),
      head: ['Verbo', 'Sem -e', 'Com -e'],
      rows: [
        ['sagen', 'sagt!', '—'],
        ['machen', 'macht!', '—'],
        ['gehen', 'geht!', '—'],
        ['fahren', 'fahrt!', '—'],
        ['warten', 'wart!', 'wartet!'],
        ['arbeiten', 'arbeit!', 'arbeitet!'],
      ],
    },
  ],
};
