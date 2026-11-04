import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Verbs in the present'),
  subtitle: T('parlare, leggere, finire'),
  section: T('The noun and the verb'),
  body: C(`## Three conjugations, one method

Take off the ending of the infinitive, {parl-are}, {legg-ere}, {fin-ire}, and join what is left to **the six present endings**: {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}. {Parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}. The second conjugation, {-ere}, is identical and only the stem changes: {leggo}, {leggi}, {legge}, {leggiamo}, {leggete}, {leggono}. Once the method is learned, half the Italian verbs are done.

The final {-e} of the infinitive **disappears in every present form**, and that is why the same stem turns up in every tense. From {parlare} what is left is {parl-}; from {leggere} it is {legg-}, and its {g} survives before {-i} and {-e} but drops before {-o} and {-a}, as in {mangiare}, which gives {mangio}.

## {-ire} has two models

**The third conjugation splits on a criterion** that needs no memory: the form of {io}. {Finire} uses {-isc-}: {finisco}, {finisci}, {finisce}, {finiamo}, {finite}, {finiscono}. {Partire} uses the regular form: {parto}, {parti}, {parte}, {partiamo}, {partite}, {partono}. The two models live side by side, and neither is more correct than the other.

The warning is in the stressed syllable. If the stress falls on the penultimate, the verb belongs to the {-isc-} group, and the {i} of the infinitive lengthens into {fin-ís-co}. If it falls on the last, the verb is regular, {pár-ti-re}. The same principle that sorts the Greek verbs into {-ω} and {-μι} decides here, and anyone who knows Greek already knows this much Italian.

The irregular verbs almost always run away only in {io}: {leggo} from {leggere}, {prendo} from {prendere}, {faccio} from {fare}, {dico} from {dire}. Once the irregular is learnt, the rest of the paradigm is the regular one with the vowel swapped.

## The present is also habit

{Studio italiano ogni giorno} is "I study Italian every day". Italian has no tense set apart for habit, and it uses the present for the customary past: Greek would name two tenses where Italian names one. In a biblical text this shows up constantly, and it is why literal translation goes wrong so often.

## Reading criterion

When you meet an Italian present in a biblical text, ask what the context wants: a fact in progress or a habit? The answer changes the translation more than the form does.`),
  vocab: [
    V('parlare', 'parlare', 'to speak'),
    V('parlo', 'parlare', 'I speak'),
    V('leggere', 'leggere', 'to read'),
    V('leggo', 'leggere', 'I read'),
    V('finire', 'finire', 'to finish'),
    V('finisco', 'finire', 'I finish'),
    V('mangiare', 'mangiare', 'to eat'),
    V('mangio', 'mangiare', 'I eat'),
    V('partire', 'partire', 'to leave'),
    V('parto', 'partire', 'I leave'),
    V('prendere', 'prendere', 'to take'),
    V('dormire', 'dormire', 'to sleep'),
    V('Vangelo', 'Vangelo', 'Gospel'),
    V('Verbo', 'verbo', 'Word (Logos)'),
    V('mondo', 'mondo', 'world'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the io form of leggere?'),
    options: [T('leggi'), T('leggo'), T('legge'), T('leggono')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: noi ___ (parlare)'),
      answer: 'parliamo',
      hint: T('Noi + -iamo'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence expresses habit?'),
      options: [
        T('Mangio una mela.'),
        T('Mangio una mela ogni giorno.'),
        T('Ho mangiato la mela.'),
        T('Mangiavo la mela ieri.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Form the io of finire: ___'),
      answer: 'finisco',
      hint: T('The -isc- model.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The present endings are {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}: {parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The infinitive loses its final vowel: {parl-are} gives {parlo} and {parl-ano} gives {parlano}, and the stem is left over.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the {-ire} group the form of {io} settles the conjugation: {finisco} carries {-isc-}, {parto} does not.',
      ),
    },
    {
      n: '4',
      text: T(
        'The stressed syllable warns you: stress on the penultimate ({fi-nís-co}) asks for {-isc-}, stress on the last ({pár-ti-re}) gives the regular form.',
      ),
    },
    {
      n: '5',
      text: T(
        'With {tu} there are two second-person forms, {leggi} and {leggiti}; the first is the one the biblical text uses.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {-e} that disappears'),
      text: T(
        'In the present the ending has no final vowel: {parlare} gives {parlo} and {partire} gives {parto}, never {parloo}. The same stem serves every tense, and it is where the future {parlerò} and the conditional {parlerei} start from.',
      ),
    },
    {
      label: T('Habit in the present'),
      text: T(
        'Greek distinguishes what happened now and then from what happened always; Italian uses the present for both. Translating {venne} as "was coming" gets the sense right and the tense wrong, because {venne} is the passato prossimo and {veniva} is the imperfetto.',
      ),
    },
  ],
  examples: [
    { text: 'Parlo ogni giorno.', gloss: T('I speak every day.') },
    { text: 'Leggi il Vangelo.', gloss: T('Read the Gospel.') },
    { text: 'Finisco il lavoro.', gloss: T('I finish the work.') },
    { text: 'Partiamo adesso.', gloss: T('We leave now.') },
    { text: 'Maria mangia una mela.', gloss: T('Maria eats an apple.') },
    { text: 'Noi leggiamo le Scritture.', gloss: T('We read the Scriptures.') },
    { text: 'Dio parla al suo servo.', gloss: T('God speaks to his servant.') },
    { text: 'Il maestro spiega la lezione.', gloss: T('The teacher explains the lesson.') },
  ],
  tables: [
    {
      caption: T('Regular present'),
      head: ['Persona', '-are', '-ere', '-ire (finire)', '-ire (partire)'],
      rows: [
        ['io', 'parlo', 'leggo', 'finisco', 'parto'],
        ['tu', 'parli', 'leggi', 'finisci', 'parti'],
        ['lui/lei', 'parla', 'legge', 'finisce', 'parte'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', 'partiamo'],
        ['voi', 'parlate', 'leggete', 'finite', 'partite'],
        ['loro', 'parlano', 'leggono', 'finiscono', 'partono'],
      ],
    },
    {
      caption: T('Stem and final vowel'),
      head: ['Infinitivo', 'Tema', 'io', 'loro'],
      rows: [
        ['parlare', 'parl-', 'parlo', 'parlano'],
        ['leggere', 'legg-', 'leggo', 'leggono'],
        ['finire', 'fin-', 'finisco', 'finiscono'],
        ['partire', 'part-', 'parto', 'partono'],
        ['dormire', 'dorm-', 'dormo', 'dormono'],
      ],
    },
  ],
};
