import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('The verb'),
  title: T('The essential verbs'),
  subtitle: T('είμαι, έχω, κάνω, πάω: the verbs that hold up almost every clause'),
  body: C(`## Ten verbs, and two with no rule

A regular modern Greek verb drops its ending and returns a new one: in {κάνω}, {κάνεις}, {κάνει}, the stem {κάν-} does not move. The essentials have no fixed stem: {είμαι}, {έχω}, {πάω}, {έρχομαι}, {τρώω}, {πίνω}, {κοιμάμαι}, {βλέπω}, {ακούω}, {μιλάω} are forms that no rule produces, and they are what is read on every page.

They are few and they weigh a lot. {είμαι} to be, {έχω} to have, {κάνω} to do, {λέω} to say, {πάω} to go, {έρχομαι} to come, {τρώω} to eat, {πίνω} to drink, {κοιμάμαι} to sleep, {βλέπω} to see, {ακούω} to hear, {μιλάω} to speak, {δίνω} to give, {παίρνω} to take, {ξέρω} to know, {θέλω} to want, {μπορώ} can cover almost everything said in a chapter of a Gospel.

## είμαι and έχω: to be and to have

{είμαι} is the most irregular verb in modern Greek: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. It has no own past or future — it uses {ήμουν} in the past and {θα είμαι} in the future. It is the verb that closes the identity of things, and Portuguese translates it as "ser" or "estar" according to context.

{έχω} is the verb "to have", and is almost as irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. The past is {είχα} and the future {θα έχω}. Where Portuguese says "tenho", modern Greek uses {έχω} with the same sense of possession and state.

## πάω and έρχομαι: to go and to come

{πάω} "to go" and {έρχομαι} "to come" are the easiest pair to confuse. {πάω} is irregular in the present ({πάω}, {πάς}, {πάει}, {πάμε}, {πάτε}, {πάνε}) and regular in the past ({πήγα}). {έρχομαι} is regular in the present ({έρχομαι}, {έρχεσαι}, {...}) but the past is {ήρθα}.

The difference in meaning is that of Portuguese: {πάω} indicates movement outward, {έρχομαι} movement inward. Whoever translates both as "ir" loses the direction.

## In the Bible

John 1:1 begins with {ήτον}: {Εν αρχή ήτον ο Λόγος}, in the beginning was the Word. {ήτον} is the past of {είμαι}, 3rd person singular. And John 1:3 closes with {έγινε}, the past of {γίνομαι}: all things came to be. The Greek that begins with {ήτον} ends with {έγινε}: the Word already was, and everything else happened.

Mark 4:39 has {σίγασε}, "be silent": it is the aorist imperative of {σιγάω}, "to be silent". The whole verse shows the method: Greek places Jesus' command in the imperative to say that the sea does not answer the command, but to Christ.`),
  vocab: [
    V('είμαι', 'είμαι', 'to be'),
    V('ήμουν', 'είμαι', 'was'),
    V('έχω', 'έχω', 'to have'),
    V('είχα', 'έχω', 'had'),
    V('κάνω', 'κάνω', 'to do'),
    V('έκανα', 'κάνω', 'did'),
    V('πάω', 'πάω', 'to go'),
    V('πήγα', 'πάω', 'went'),
    V('έρχομαι', 'έρχομαι', 'to come'),
    V('ήρθα', 'έρχομαι', 'came'),
    V('τρώω', 'τρώω', 'to eat'),
    V('έφαγα', 'τρώω', 'ate'),
    V('πίνω', 'πίνω', 'to drink'),
    V('ήπια', 'πίνω', 'drank'),
    V('κοιμάμαι', 'κοιμάμαι', 'to sleep'),
    V('βλέπω', 'βλέπω', 'to see'),
    V('είδα', 'βλέπω', 'saw'),
    V('ακούω', 'ακούω', 'to hear'),
    V('άκουσα', 'ακούω', 'heard'),
    V('μιλάω', 'μιλάω', 'to speak'),
    V('μίλησα', 'μιλάω', 'spoke'),
    V('δίνω', 'δίνω', 'to give'),
    V('παίρνω', 'παίρνω', 'to take'),
    V('ξέρω', 'ξέρω', 'to know'),
    V('θέλω', 'θέλω', 'to want'),
    V('μπορώ', 'μπορώ', 'can'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{είμαι} is the most irregular verb: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. It has no own past or future.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{έχω} is almost as irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. Past {είχα}, future {θα έχω}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{πάω} indicates movement outward, {έρχομαι} inward. Whoever translates both as "ir" loses the direction.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The past of {πάω} is {πήγα}, of {έρχομαι} is {ήρθα}: two verbs, two pasts, no common letter.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 uses {ήτον} (past of {είμαι}) and John 1:3 uses {έγινε} (past of {γίνομαι}): the Word already was, and everything else happened.',
      ),
    },
  ],
  notes: [
    {
      label: T('The έχω that is not "to have"'),
      text: T(
        'Modern Greek uses {έχω} for "have", "possess" and "be with". In John 15:4 {έχω} tells the branch that it bears no fruit, not a property.',
      ),
    },
    {
      label: T('The ήτον that is not "was"'),
      text: T(
        '{ήτον} is the past of {είμαι}, but Portuguese translates it as "era" or "estava" according to context. The form is the same in both cases.',
      ),
    },
  ],
  examples: [
    {
      text: 'Εν αρχή ήτον ο Λόγος',
      gloss: T('Jn 1:1 — {ήτον} is the past of {είμαι}: the Word already was.'),
    },
    {
      text: 'και Θεός ήτον ο Λόγος',
      gloss: T('Jn 1:1 — {ήτον} without article defends a nominal predicate: the Word was God.'),
    },
    {
      text: 'πάντα δι᾽ αὐτοῦ έγινε',
      gloss: T('Jn 1:3 — {έγινε} of {γίνομαι}: all things came to be.'),
    },
    {
      text: 'έφαγεν ο λαός',
      gloss: T('Ex 16:35 — {έφαγεν} is the past of {τρώω}: the manna was eaten.'),
    },
    { text: 'ήρθαν οι μαθηταί', gloss: T('Jn 4:8 — {ήρθαν} is the past of {έρχομαι}: they came.') },
    { text: 'έχω ένα βιβλίο', gloss: T('{έχω} with a direct object: I have a book.') },
    { text: 'ήμουν στο σπίτι', gloss: T('{ήμουν} is the past of {είμαι}: I was at home.') },
    { text: 'θα πάω στην πόλη', gloss: T('future with {θα} + present: I will go to the city.') },
    { text: 'σίγασε', gloss: T('Mk 4:39 — aorist imperative of {σιγάω}: be silent.') },
  ],
  tables: [
    {
      caption: 'O presente dos essenciais',
      head: ['Pessoa', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
      rows: [
        ['εγώ', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
        ['εσύ', 'είσαι', 'έχεις', 'πάς', 'έρχεσαι', 'τρως'],
        ['αυτός/αυτή/αυτό', 'είναι', 'έχει', 'πάει', 'έρχεται', 'τρώει'],
        ['εμείς', 'είμαστε', 'έχουμε', 'πάμε', 'έρχομαστε', 'τρώμε'],
        ['εσείς', 'είστε', 'έχετε', 'πάτε', 'έρχεστε', 'τρώτε'],
        ['αυτοί/αυτές/αυτά', 'είναι', 'έχουν', 'πάνε', 'έρχονται', 'τρώνε'],
      ],
    },
    {
      caption: 'O passado dos essenciais',
      head: ['Verbo', 'Passado', 'Futuro'],
      rows: [
        ['είμαι', 'ήμουν', 'θα είμαι'],
        ['έχω', 'είχα', 'θα έχω'],
        ['πάω', 'πήγα', 'θα πάω'],
        ['έρχομαι', 'ήρθα', 'θα έρχομαι'],
        ['τρώω', 'έφαγα', 'θα τρώω'],
        ['πίνω', 'ήπια', 'θα πίνω'],
        ['κοιμάμαι', 'κοιμήθηκα', 'θα κοιμάμαι'],
        ['βλέπω', 'είδα', 'θα βλέπω'],
        ['ακούω', 'άκουσα', 'θα ακούω'],
        ['μιλάω', 'μίλησα', 'θα μιλάω'],
        ['δίνω', 'έδωσα', 'θα δίνω'],
        ['παίρνω', 'πήρα', 'θα παίρνω'],
        ['ξέρω', 'ήξερα', 'θα ξέρω'],
        ['θέλω', 'ήθελα', 'θα θέλω'],
        ['μπορώ', 'μπορούσα', 'θα μπορώ'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Εν αρχή ήτον ο Λόγος}, what is the tense of {ήτον}?'),
    options: [T('Present'), T('Past'), T('Future'), T('Aorist')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "πάντα δι᾽ αὐτοῦ ___" with the past of {γίνομαι} for "happened".'),
      answer: 'έγινε',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its past.'),
      pairs: [
        { a: T('{πάω}'), b: T('{πήγα}') },
        { a: T('{έρχομαι}'), b: T('{ήρθα}') },
        { a: T('{τρώω}'), b: T('{έφαγα}') },
        { a: T('{είμαι}'), b: T('{ήμουν}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the past of {λέγω}?'),
      options: [T('{είπα}'), T('{λέγω}'), T('{λέξω}'), T('{λέγομαι}')],
      answer: 0,
    },
  ],
};
