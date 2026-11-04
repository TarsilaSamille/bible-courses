import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Guided reading: the Lord’s Prayer and Psalm 22'),
  subtitle: T('Padre nostro che sei nei cieli'),
  section: T('The tenses of the verb'),
  body: C(`## Read the Lord’s Prayer in blocks

The trick for reading the Lord’s Prayer in Italian is not the vocabulary: it **is spotting the verb of each petition**. {Padre nostro che sei nei cieli}: {sei} is the present of {essere}, and {nei} is the fusion of {in} + {i}, "in the". {Sia santificato il tuo nome}: {sia} is congiuntivo, **because it expresses a wish**; the form {è} would be an error. {Venga il tuo regno}: {venga} is the congiuntivo of {venire}. {Sia fatta la tua volontà} repeats {sia} for the same reason.

The pattern is visible: everything that is a wish goes into the congiuntivo, and those are exactly the three central petitions. It is no accident, because a petition is by definition something the speaker wants and does not yet have.

## {Dacci}: verb and clitic glued

{Dacci oggi il nostro pane quotidiano} carries {dacci}, **the imperative of** {dare} with {ci} stuck to it, "give us". The {ci} glues itself to the verb because it is an indirect object, and the order is verb plus clitic. Translating it as "give to us" works, but it loses the fact that in Italian this is one word, and the same goes for {dammelo} and {diccelo}.

{Rimetti a noi i nostri debiti} carries {rimettere}, which here means "to forgive, to release" and not "to put back". The construction with {a noi} is a dative of person, the commonest one in Italian, and it is what Portuguese has when the recipient is marked. Where Portuguese says "let go", Italian says {lasciarare} or {perdonare}, and in the Lord’s Prayer it says {rimettere}.

## What makes the translation in Psalm 22

{Dio mio, Dio mio, perché mi hai abbandonato?} is a question about motive. {Perché} here does what Greek (ἱνατί) and Hebrew (למה) do: it asks why. Translating it with "because" without seeing that it is a rhetorical question leaves the line without force, and the psalm loses its shout.

{Mi} in {mi hai abbandonato} is the indirect object, "to me", and {hai} is the present of {avere}, "you have". The verb is shorter than in Portuguese, and the form settles what the word cannot: where one Italian translation has the dative of advantage, {mi}, the other has the ablative, {me}. Both are Italian, and a translator has to choose knowing the choice was already made.

## Reading criterion

In any petition of the Lord’s Prayer, ask: is this a wish (congiuntivo), a command (imperative) or a fact (indicative)? In the psalm, ask: is {perché} cause or question? The answer changes the translation more than any single word.`),
  vocab: [
    V('Padre', 'padre', 'Father'),
    V('nostro', 'nostro', 'our'),
    V('cieli', 'cielo', 'heavens'),
    V('venga', 'venire', 'may come (subj.)'),
    V('dacci', 'dare', 'give us!'),
    V('rimetti', 'rimettere', 'forgive'),
    V('debito', 'debito', 'debts'),
    V('abbandonato', 'abbandonare', 'abandoned'),
    V('sei', 'essere', 'you are'),
    V('nei', 'in', 'in the (in + i)'),
    V('oggi', 'oggi', 'today'),
    V('pane', 'pane', 'bread'),
    V('hai', 'avere', 'you have'),
    V('perché', 'perché', 'why'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is nei in nei cieli?'),
    options: [T('A pronoun'), T('The fusion in + i'), T('A verb'), T('A negative adverb')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ il tuo regno (congiuntivo of venire)'),
      answer: 'Venga',
      hint: T('Irregular subjunctive.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form means "give us"?'),
      options: [T('daci'), T('dacci'), T('dacelo'), T('dacine')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Dio mio, Dio mio, perché mi ___ abbandonato?'),
      answer: 'hai',
      hint: T('Present of avere, tu.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Everything that is a wish goes into the congiuntivo: {Sia santificato}, {Venga il tuo regno}, {Sia fatta la tua volontà}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Nei} is {in} + {i}: {nei cieli} means "in the heavens", and {cieli} is the plural of {cielo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Dacci} is {da} + {ci}: in the imperative the pronoun glues to the verb, {daccelo}, {dammelo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Perché} with a past-tense verb asks for a motive: {perché mi hai abbandonato?}, like ἱνατί and למה.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Mi} in {mi hai abbandonato} is the indirect object, and {hai} is the present of {avere}: "you have".',
      ),
    },
  ],
  notes: [
    {
      label: T('{Rimettere} is not to put back'),
      text: T(
        'In {Rimetti a noi i nostri debiti}, {rimettere} means to forgive and {a noi} is a dative of person. Portuguese "forgive us our debts" translates both things; anyone who writes "give back" for {rimetti} translates the letter and loses the sense.',
      ),
    },
    {
      label: T('The text is not a translation'),
      text: T(
        'The two Italian translations of Psalm 22 use different registers, and the Greek decides between them: where one has the dative {mi}, the other has the ablative {me}. The form settles the problem better than the word, because both options are Italian and only one matches the Greek.',
      ),
    },
  ],
  examples: [
    { text: 'Padre nostro che sei nei cieli.', gloss: T('Our Father who art in heaven.') },
    { text: 'Sia santificato il tuo nome.', gloss: T('Hallowed be thy name.') },
    { text: 'Venga il tuo regno.', gloss: T('Thy kingdom come.') },
    { text: 'Sia fatta la tua volontà.', gloss: T('Thy will be done.') },
    { text: 'Dacci oggi il nostro pane.', gloss: T('Give us today our bread.') },
    { text: 'Rimetti a noi i nostri debiti.', gloss: T('Forgive us our debts.') },
    { text: 'Perché mi hai abbandonato?', gloss: T('Why have you forsaken me?') },
    { text: 'Non ci abbandonare.', gloss: T('Do not forsake us.') },
  ],
  tables: [
    {
      caption: T('Map of the Lord’s Prayer'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['Padre nostro che sei nei cieli', 'sei', 'indicativo'],
        ['Sia santificato il tuo nome', 'sia', 'congiuntivo'],
        ['Venga il tuo regno', 'venga', 'congiuntivo'],
        ['Sia fatta la tua volontà', 'sia', 'congiuntivo'],
        ['Dacci oggi il nostro pane', 'dacci', 'imperativo'],
        ['Rimetti a noi i nostri debiti', 'rimetti', 'imperativo'],
      ],
    },
    {
      caption: T('Forms a reader trips over'),
      head: ['Forma', 'Analisi'],
      rows: [
        ['nei', 'in + i'],
        ['dacci', 'da + ci'],
        ['mi', 'pronome indiretto'],
        ['perché', 'interrogativo'],
        ['hai', 'avere, tu'],
      ],
    },
  ],
};
