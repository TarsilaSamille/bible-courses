import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('Capstone: Mark 4,35-41 in modern Greek'),
  subtitle: T('Γιατί φοβάστε; Έχετε πίστη;'),
  body: C(`## The text

> Την απογευμά εκείνη, καθώς έπεφτε ο καιρός, του είπε ο ίδιος: «Διαπεράσωμεν στο απέναντι μέρος.»
>
> Και αφήκαν αυτόν και πήραν μαζί τους στο πλοίο. Και ήταν βασταζόμενα στο πλοίο. Και έγινε άνεμος σφοδρός.
>
> Και καθώς πλέαν, ο ίδιος κοιμόταν στο κατάστρωμα. Και τα ρολόγια του ανέβηκαν.
>
> Και τον ξύπνησαν και του λένε: «Διδάσκαλε, δεν σε νοιάζει που χαθήκαμε;»
>
> Και αναστηκε και επετίμησε στον άνεμο και είπε στη θάλασσα: «Σίγασε, σίγασε! Κι ακόμα, σώφρονε!»
>
> Και ο άνεμος σταμάτησε και γαλάζιασε η θάλασσα. Και αυτός τους είπε: «Γιατί φοβάστε; Έχετε πίστη;»
>
> Και φοβήθηκαν πολύ και ρώτησαν μεταξύ τους: «Ποιος είναι λοιπόν αυτός, που και ο άνεμος και η θάλασσα τον ακούνε;»

## The verb and the tense, verse by verse

The text has few verbs and each one is working. In the first verse there is a subjunctive, {διαπεράσωμεν}, and the pronoun {μας} is inside it: "let us cross over".

In verse 36, {έγινε} is aorist and {ήταν} is imperfect. The difference is not decorative: {έγινε} says the wind rose, full stop; {ήταν βασταζόμενα} says the boat was being shaken, scene.

In verse 37, {κοιμόταν} is imperfect and {ανέβηκαν} is aorist. The same pair again: what lasted and what happened.

In verse 38, {δεν σε νοιάζει} has {δεν} stuck to the verb and the pronoun {σε} in front of it. That is the position that never changes: the negative goes before the finite verb, and the object pronoun clings to it.

In verse 39, {επετίμησε} and {γαλάζιασε} are aorists of one verb, and the second is not the passive of the first in English: "it calmed down" in Greek is a new verb, which means "it turned blue", and the colour of the sea is the final state.

In verse 40, {φοβήθηκαν} is aorist and the question comes in {φοβάστε}, aorist too. Greek asks in the same tense in which it asserts.

## Where the article is

In {το κατάστρωμα}, {τη θάλασσα}, {τον άνεμο}: the article marks the referent. In {και τον ξύπνησαν}, {και αφήκαν αυτόν}: the pronoun {αυτόν} takes the place of the article and the noun, and the verb stays accusative.

One thing the text does and English does not: {στο πλοίο} appears twice in the same verse, once for the boat as a whole and once for the deck. Greek repeats the word and lets the context change the sense.

And there is a neuter plural article that is not there: {τα ρολόγια} is the group, and the verb {ανέβηκαν} is plural. If Greek had said {τα ρολόγια ανέβη}, the text would be wrong.

## Where the negative is

Only one, in verse 38: {δεν σε νοιάζει}. It comes before the verb, as always. And the question in verse 40 has no negative at all: {Γιατί φοβάστε;} is a direct question, with no "not", and Greek treats a rhetorical question as an assertion.

The verb {φοβάστε} is aorist, and it is the same form as {φοβήθηκαν} in the line below. Ancient Greek would use the subjunctive {φοβᾶσθε} after "why"; modern Greek uses the aorist, and a little of the sense is lost.

## What the order is doing

{Κι ακόμα, σώφρονε!} puts the particle {κι} in front of the adverb, and the whole clause is an inversion. Ancient Greek says {Σίγασε, σίγασε! Κι ακόμα, σωφρόνει!}; modern Greek keeps the second clause inverted because it is a vocative.

{Γιατί φοβάστε; Έχετε πίστη;} are two questions, and each one puts in the foreground what it is accusing: first the fear, then the lack of faith. English has the second one too, but Greek puts the two on the same level, with no connective, and the parallelism carries the weight.

{Και φοβήθηκαν πολύ} has the adverb {πολύ} at the end. In Greek an adverb of degree can go anywhere after the verb, and the final position is the most neutral one: the fright is the new information.

## Where the text stops an English reader

The hardest point is {Κι ακόμα, σώφρονε}. The verb {σώφρονε} comes from {σωφρονίω}, which in modern Greek means "put yourself in your place" and is almost unknown outside fixed expressions. The literal translation is "be quiet, be sensible", and any good translation delivers the sense without the word.

The second is {που και ο άνεμος και η θάλασσα τον ακούνε}. The relative {που} does not inflect, the verb {ακούνε} is third person plural, and the subject is two things. Greek asks about a person with {ποιος}, and the answer is the whole last line: a man whom the wind and the sea obey.`),
  vocab: [
    V('ο διδάσκαλος', 'ο διδάσκαλος', 'the teacher'),
    V('Διαπεράσωμεν', 'διαπερνώ', 'let us cross'),
    V('επετίμησε', 'επιτιμώ', 'rebuked'),
    V('είπε', 'λέω', 'said'),
    V('λέγει', 'λέγω', 'says'),
    V('είπεν', 'λέω', 'said'),
    V('πλέαν', 'πλέω', 'they sailed'),
    V('κοιμόταν', 'κοιμάμαι', 'was sleeping'),
    V('ανέβηκαν', 'ανεβαίνω', 'went up'),
    V('κοιμάμαι', 'κοιμάμαι', 'to sleep'),
    V('φοβάστε', 'φοβάμαι', 'you fear'),
    V('φοβήθηκαν', 'φοβάμαι', 'were afraid'),
    V('Σίγασε', 'σιγάω', 'be quiet'),
    V('γαλάζιασε', 'γαλάζω', 'turned blue'),
    V('ο άνεμος', 'ο άνεμος', 'the wind'),
    V('η θάλασσα', 'η θάλασσα', 'the sea'),
    V('το κατάστρωμα', 'το κατάστρωμα', 'the cockpit'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The text alternates aorist (ἔγινε) and imperfect (ήταν): what happened and what lasted.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The negative appears once only, in verse 38, and comes before the verb: δεν σε νοιάζει.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The article marks the referent, and the pronoun αυτόν takes its place once the sentence knows it.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The free order puts the focus on what comes first: Γιατί φοβάστε; Έχετε πίστη; are two parallel accusations.',
      ),
    },
  ],
  notes: [
    {
      label: T('Source'),
      text: T(
        'The text is a demotic rendering of Mark 4,35-41, made for this course and not taken from a published modern Greek edition. Anyone who wants to check the polytonic original finds the same passage in the ancient Greek course.',
      ),
    },
    {
      label: T('Careful'),
      text: T(
        'σώφρονε and γαλάζιασε are words with no equivalent translation. σώφρονε comes from a modern Greek verb of rare use, and γαλάζιασε literally means "it turned blue". The two are the real test of someone who is reading and not only translating.',
      ),
    },
  ],
  examples: [
    { text: 'διαπεράσωμεν στο απέναντι μέρος', gloss: T('let us cross to the other side') },
    { text: 'και ήταν βασταζόμενα στο πλοίο', gloss: T('and the boat was being shaken') },
    { text: 'και τα ρολόγια του ανέβηκαν', gloss: T('and his watch filled up') },
    { text: 'Διδάσκαλε, δεν σε νοιάζει', gloss: T('Teacher, do you not care') },
    { text: 'Σίγασε, σίγασε!', gloss: T('Be quiet, be quiet!') },
    { text: 'και γαλάζιασε η θάλασσα', gloss: T('and the sea turned blue') },
    { text: 'Γιατί φοβάστε; Έχετε πίστη;', gloss: T('Why are you afraid? Have you faith?') },
    { text: 'ποιος είναι λοιπόν αυτός', gloss: T('who then is this one') },
  ],
  tables: [
    {
      caption: T('The verbs of the text'),
      head: ['Στίχος', 'Ρήμα', 'Χρόνος'],
      rows: [
        ['36', 'ήταν', 'παρατατικός'],
        ['37', 'κοιμόταν', 'παρατατικός'],
        ['37', 'ανέβηκαν', 'αόριστος'],
        ['39', 'γαλάζιασε', 'αόριστος'],
        ['40', 'φοβήθηκαν', 'αόριστος'],
      ],
    },
    {
      caption: T('Where each thing is'),
      head: ['Στοιχείο', 'Πού'],
      rows: [
        ['η άρνηση', 'δεν σε νοιάζει (v. 38)'],
        ['το άρθρο', 'το κατάστρωμα, τη θάλασσα'],
        ['η αντωνυμία', 'αυτόν, τον'],
        ['το έμφαση', 'Γιατί φοβάστε;'],
      ],
    },
    {
      caption: T('Verb tense'),
      head: ['Χρόνος', 'Παράδειγμα', 'Ανάγνωση'],
      rows: [
        ['αόριστος', 'ἔγινε άνεμος', 'σήκωσε τον άνεμο'],
        ['παρατατικός', 'ήταν βασταζόμενα', 'κουνόταν'],
        ['ενεστώτας', 'δεν σε νοιάζει', 'δεν σε νοιάζει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "και ήταν βασταζόμενα στο πλοίο", what tense is ήταν?'),
    options: [T('aorist'), T('imperfect'), T('subjunctive'), T('imperative')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ σε νοιάζει (negative in verse 38)'),
      answer: 'Δεν',
      hint: T('Capital letter'),
    },
    {
      kind: 'choose',
      prompt: T('Which word in the text is the focus of the last question?'),
      options: [T('ποιος'), T('ανέβηκαν'), T('γαλάζιασε'), T('σιγάσε')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Verb and tense in the text'),
      pairs: [
        { a: 'έγινε', b: T('aorist') },
        { a: 'ήταν', b: T('imperfect') },
        { a: 'κοιμόταν', b: T('imperfect') },
        { a: 'ανέβηκαν', b: T('aorist') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('Σίγασε, ___! (the second word of the repeated imperative)'),
      answer: 'σίγασε',
      hint: T('The same word, lower case'),
    },
  ],
};
