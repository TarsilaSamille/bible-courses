import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Preposition'),
  title: T('Prepositions: the word that governs the case'),
  subtitle: T('στο σπίτι — από — για — προς — με'),
  body: C(`## The preposition governs the case

In English "in" covers both place and time, and context says which. Greek has no such ambiguity: each preposition asks for a case, and the case shows up in the word that follows.

{Στο σπίτι} is place and {στις πέντε} is the hour, and the short preposition is the same in both. {στον} does duty for both. Anyone who learns the preposition without the case has learned half, and anyone who learns the case without the preposition does not know where the sentence is going.

The case a preposition governs does not change the meaning of the preposition; it changes the meaning of the word. {Τον φίλο} is "the friend" and {του φίλου} is "of the friend", and the preposition is what says what is being done with the friend.

## σε and its fused forms

{σε} is the preposition of place and of direction, and it governs the accusative: {πηγαίνω στο σπίτι}. The forms are fusions: {στο} is {σε} plus {το}, {στην} is {σε} plus {την}, {στους} is {σε} plus {τους}, {στα} is {σε} plus {τα}, {στις} is {σε} plus {τις}.

It is the fusion that makes them look different. Both components are always there, and that is why the preposition takes the article's place: {στο σπίτι} is not {σε το σπίτι} by accident, it is because Greek fuses the two things.

The same holds for {στον} with time: {στον τρίτο χρόνο}, "in the third year". And it holds for {στο νερό}, which is what makes Greek say "in the water" with the neuter.

## για is the preposition English does not have

{για} is "for", and in modern Greek it covers three senses that English splits into different words. Purpose: {για την υγεία}, "for health's sake", {για χάρη}, "for the sake of". Destination: {ταξίδι για την Αθήνα}, "a journey to Athens". And destination of a person: {για εσένα}.

It is the preposition that turns up most in a sentence about place, and is understood least the first time, because English renders it with three words and Greek uses one. {Για την υγεία} is neither "to health" nor "at health": it is "because of health", and that causal reading is the one biblical text uses all the time.

## The other five

{Από} is origin and agent: {από της Αθήνας}, "from Athens", {αγαπιέμαι από τον Θεό}, "I am loved by God". {Προς} is direction, and it is more formal than {για}: {προς τον Θεό}, "to God". {Με} is company and instrument: {μιλάω με τον φίλο}, {κόβω με το μαχαίρι}. {Σαν} is comparison: {σαν τον ήλιο}, "like the sun".

{Μακριά από} is distance, {κοντά σε} is proximity. And {γιατί} with the genitive is cause: {γιατί άρρωστου}, which is the same word {γιατί} with a different case.

## The case is marked, and that is why you can read without understanding

When {το} disappears and only {σπίτι} is left, it is because the preposition already carries the article. When the noun stands alone and the verb is in the second person, it is the case that says the function: {γράφω το βιβλίο} and {γράφω του βιβλίου} have the same noun and different verbs.

In Scripture this is even more true, because the ancient text repeats nothing. Anyone who reads ancient Greek quickly identifies the case from the ending and builds the sentence without understanding the word. That is the technique of the sibling course, and it works because ancient Greek marked case on almost everything.

## Where the prepositions are in Scripture

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{ἆρον τὸν κράβαττόν σου} has two prepositions: one for the action and one for possession. {τὸν κράβαττόν} is the direct accusative of the imperative, and {σου} is a genitive clitic glued to the noun before it. Without the second the sentence still works; without the first it does not.

{Εἰς} and {ἐν} are the prepositions of Scripture, and the two ask for different cases: {ἐν} asks for the genitive in almost every use, {εἰς} asks for the accusative. {Εἰς τὸν παράδεισον}, "into the kingdom". They are the two words modern Greek fused into {σε}.`),
  vocab: [
    V('σε', 'σε', 'in, to'),
    V('στο σπίτι', 'στο σπίτι', 'in the house'),
    V('σε το σπίτι', 'σε το σπίτι', 'to the house'),
    V('για', 'για', 'for; because of'),
    V('για την υγεία', 'για την υγεία', "for health's sake"),
    V('από', 'από', 'from; by'),
    V('από τον Θεό', 'από τον Θεό', 'by God'),
    V('προς', 'προς', 'towards'),
    V('με', 'με', 'with'),
    V('σαν', 'σαν', 'like'),
    V('εἰς', 'εἰς', 'to (ancient Greek)'),
    V('ἐν', 'ἐν', 'in (ancient Greek)'),
    V('στον τρίτο χρόνο', 'στον τρίτο χρόνο', 'in the third year'),
    V('το νερό', 'το νερό', 'the water'),
    V('ο ήλιος', 'ο ήλιος', 'the sun'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Each preposition governs a case: σε the accusative, από and του the genitive.'),
    },
    { n: '§2', text: T('στο, στην, στους, στα and στις are fusions of σε with the article.') },
    { n: '§3', text: T('για covers purpose, destination and "because of": για την υγεία.') },
    {
      n: '§4',
      text: T(
        'Εἰς and ἐν are the ancient prepositions; εἰς takes the accusative and ἐν the genitive.',
      ),
    },
  ],
  notes: [
    {
      label: T('Inheritance'),
      text: T(
        'εἰς plus genitive was the preposition of direction in ancient Greek, and modern του comes from it. It is the only Greek word that became a preposition and an article at the same time.',
      ),
    },
    {
      label: T('Careful'),
      text: T(
        'μου, σου, μας, σας and του look like prepositions and are not: they are clitics that mark possession. Writing "with God" for "of God" is the commonest mistake of anyone translating Scripture.',
      ),
    },
  ],
  examples: [
    { text: 'πηγαίνω στο σπίτι', gloss: T('I go into the house') },
    { text: 'στον τρίτο χρόνο', gloss: T('in the third year') },
    { text: 'μένω για την υγεία', gloss: T("I stay for health's sake") },
    { text: 'έρχεται από την Αθήνα', gloss: T('he comes from Athens') },
    { text: 'αγαπιέμαι από τον Θεό', gloss: T('I am loved by God') },
    { text: 'μιλάω με τον φίλο', gloss: T('I speak with the friend') },
    { text: 'προς τον Θεό', gloss: T('to God') },
    { text: 'σαν τον ήλιο', gloss: T('like the sun') },
  ],
  tables: [
    {
      caption: T('Preposition and case'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['σε', 'αἰτιατική', 'στο σπίτι'],
        ['από', 'γενική', 'από της Αθήνας'],
        ['για', 'αἰτιατική', 'για την υγεία'],
        ['με', 'αἰτιατική', 'με τον φίλο'],
        ['σαν', 'αἰτιατική', 'σαν τον ήλιο'],
      ],
    },
    {
      caption: T('The fusions of σε'),
      head: ['Μορφή', 'Σύνθεση', 'Παράδειγμα'],
      rows: [
        ['στο', 'σε + το', 'στο σπίτι'],
        ['στην', 'σε + την', 'στην Αθήνα'],
        ['στους', 'σε + τους', 'στους φίλους'],
        ['στις', 'σε + τις', 'στις πέντε'],
      ],
    },
    {
      caption: T('The prepositions of Scripture'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['ἐν', 'γενική', 'ἐν τῇ οἰκίᾳ'],
        ['ἐπί', 'γενική', 'ἐπὶ τῆς νηός'],
        ['εἰς', 'αἰτιατική', 'εἰς τὸν παράδεισον'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which preposition governs the genitive?'),
    options: [T('σε'), T('από'), T('για'), T('με')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ σπίτι (fusion of σε with το)'),
      answer: 'Στο',
      hint: T('Capital letter'),
    },
    {
      kind: 'choose',
      prompt: T('In ancient Greek, which preposition asks for the accusative?'),
      options: [T('ἐν'), T('ἐπί'), T('εἰς'), T('παρά')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Preposition and sense'),
      pairs: [
        { a: 'από', b: T('origin') },
        { a: 'για', b: T('purpose') },
        { a: 'με', b: T('company') },
        { a: 'σαν', b: T('comparison') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('μένω ___ την υγεία (preposition of purpose)'),
      answer: 'για',
      hint: T('Three letters'),
    },
  ],
};
