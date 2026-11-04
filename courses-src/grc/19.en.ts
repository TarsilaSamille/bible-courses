import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Second aorist'),
  subtitle: T('ἔλιπον, εἶδον, ἔγνων: the sigmaless aorist'),
  section: T('The verb'),
  body: C(`## The other aorist

Not every aorist uses {σ}. A family of verbs — precisely the most frequent — forms the perfective past with a different stem, sigmaless, but with the imperfect's secondary endings: {ἔλιπον, ἔλιπες, ἔλιπε, ἐλίπομεν, ἐλίπετε, ἔλιπον}. This is the second (strong) aorist, against the first (sigmatic) aorist of ch. 7.

With no sigma to betray the tense, the dictionary must supply the stem: a verb's principal parts grow to six pieces (present, future, aorist, perfect…). {λέγω} → {ἐρῶ}, {εἶπον}, {εἴρηκα}; {ὁράω} → {ὄψομαι}, {εἶδον}, {ἑώρακα}. Without principal parts, the 2nd aorist is unpredictable — memorize them.

## The six giants (and friends)

Six verbs account for most New Testament 2nd aorists: {λείπω} → {ἔλιπον} "I left"; {ὁράω} → {εἶδον} "I saw" (augment on the {ἰδ-} stem: {ἐ-ἰδ-ον}); {γινώσκω} → {ἔγνων} "I knew"; {ἔχω} → {ἔσχον} "I had"; {λαμβάνω} → {ἔλαβον} "I took"; {πάσχω} → {ἔπαθον} "I suffered".

Joining them: {φέρω} → {ἤνεγκον} "I brought" (most irregular of all, three stems: {φερ-}, {ἐνεγκ-}, {ἐνεχθ-}); {ἐσθίω} → {ἔφαγον} "I ate"; {πίνω} → {ἔπιον} "I drank"; {πίπτω} → {ἔπεσον} "I fell"; {φεύγω} → {ἔφυγον} "I fled"; {εὑρίσκω} → {εὗρον} "I found".

## Recognizing without memorizing everything

Three clues betray the 2nd aorist. First: augment + different-from-present stem + imperfect endings ({ἔ-λαβ-ον} against {λαμβάν-ω}). Second: the {-εῖν} infinitive ({λιπεῖν}, {ἰδεῖν}, {λαβεῖν}, {παθεῖν}) — only the 2nd aorist looks like that. Third: the {-ών, -οῦσα, -όν} participle ({λιπών}, {ἰδών}, {λαβών}) — unmistakable.

In reading, {εἶδον} and {ἔλαβεν} occur hundreds of times (Supper: {λαβὼν ἄρτον} "having taken bread", Matt 26:26; resurrection: {εἶδον τὸν κύριον} "I have seen the Lord", John 20:25). Every giant fixed unlocks whole pages.`),
  vocab: [
    V('ἔλιπον', 'λείπω', 'I left'),
    V('εἶδον', 'ὁράω', 'I saw'),
    V('ἔγνων', 'γινώσκω', 'I knew'),
    V('ἔσχον', 'ἔχω', 'I had'),
    V('ἔλαβον', 'λαμβάνω', 'I took'),
    V('ἔπαθον', 'πάσχω', 'I suffered'),
    V('εἶπον', 'λέγω', 'I said'),
    V('ἤνεγκον', 'φέρω', 'I brought'),
    V('ἔφαγον', 'ἐσθίω', 'I ate'),
    V('ἔπιον', 'πίνω', 'I drank'),
    V('ἔπεσον', 'πίπτω', 'I fell'),
    V('εὗρον', 'εὑρίσκω', 'I found'),
    V('λαβών', 'λαμβάνω', 'having taken'),
    V('ἰδών', 'ὁράω', 'having seen'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἔλαβον" is 2nd aorist (not imperfect) because…'),
    options: [
      T('It uses another stem (λαβ-) than the present (λαμβαν-)'),
      T('It has sigma'),
      T('It lacks augment'),
      T('It ends in -ον'),
    ],
    answer: 0,
    hint: T('Same endings as the imperfect, different stem — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 2nd-aorist infinitive: λαβ___ ("to have taken").'),
      answer: 'εῖν',
      hint: T('2nd-aorist infinitive ends in -εῖν — rule §2.'),
    },
    {
      kind: 'choose',
      prompt: T('"εἶδον τὸν κύριον" (John 20:25): the seeing verb stands in the…'),
      options: [
        T('2nd aorist of ὁράω'),
        T('Imperfect of βλέπω'),
        T('1st aorist of ὁράω'),
        T('Perfect of βλέπω'),
      ],
      answer: 0,
      hint: T('ὁράω/βλέπω suppletion: aorist = εἶδον.'),
    },
    {
      kind: 'match',
      prompt: T('Match each aorist to its present.'),
      pairs: [
        { a: 'ἔσχον', b: 'ἔχω' },
        { a: 'ἔπαθον', b: 'πάσχω' },
        { a: 'εἶπον', b: 'λέγω' },
        { a: 'ἤνεγκον', b: 'φέρω' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '2nd aorist = augment + its own (σ-less) stem + imperfect endings. The stem cannot be deduced: memorize principal parts.',
      ),
    },
    {
      n: '2',
      text: T(
        '-εῖν infinitive ({λαβεῖν}) and -ών participle ({λαβών}) belong exclusively to the 2nd aorist.',
      ),
    },
    {
      n: '3',
      text: T(
        'The six giants ({ἔλιπον}, {εἶδον}, {ἔγνων}, {ἔσχον}, {ἔλαβον}, {ἔπαθον}) cover most occurrences.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sense identical to the 1st aorist (completed act). The difference is purely morphological, never semantic.',
      ),
    },
  ],
  notes: [
    {
      label: T('Triple λέγω:'),
      text: T(
        '{λέγω} has three pasts in use: imperfect {ἔλεγεν} ("he kept saying"), 2nd aorist {εἶπον} ("he said") and perfect {εἴρηκα} ("I have said"). Three stems ({λεγ-}, {ἐπ-}, {ἐρ-}) for one verb — suppletion in pure state.',
      ),
    },
    {
      label: T('ὁράω vs βλέπω:'),
      text: T(
        'In the present, "to see" is {βλέπω}; in the aorist, {εἶδον} (from {ὁράω}). The two verbs share one paradigm as if one — another suppletion to memorize as a block.',
      ),
    },
  ],
  examples: [
    { text: '{εἶδον τὸν κύριον}', gloss: T('I have seen the Lord (John 20:25)') },
    { text: '{λαβὼν ἄρτον}', gloss: T('having taken bread (Matt 26:26)') },
    { text: '{ἔπαθεν ὑπὲρ ὑμῶν}', gloss: T('he suffered for you (1 Pet 2:21)') },
    { text: '{ἔσχον χαρὰν}', gloss: T('I had joy (3 John 4)') },
    { text: '{ἔγνω αὐτόν}', gloss: T('he knew him (John 1:10)') },
    { text: '{ἤνεγκαν αὐτῷ}', gloss: T('they brought to him (from φέρω; Mark 1:32)') },
    { text: '{ἔφαγον καὶ ἐχορτάσθησαν}', gloss: T('they ate and were filled (Mark 6:42)') },
    { text: '{ἔπεσεν ἐπὶ πρόσωπον}', gloss: T('he fell on his face (Matt 26:39)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('they found the child (Matt 2:11)') },
    { text: '{ἰδὲ ὁ ἀμνός}', gloss: T('behold the Lamb! (imperative; John 1:29)') },
  ],
  tables: [
    {
      caption: T('Table 1 — 2nd aorist of λείπω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{ἔλιπον}', 'deixei'],
        ['2ª sg.', '{ἔλιπες}', 'deixaste'],
        ['3ª sg.', '{ἔλιπε(ν)}', 'deixou'],
        ['1ª pl.', '{ἐλίπομεν}', 'deixamos'],
        ['2ª pl.', '{ἐλίπετε}', 'deixastes'],
        ['3ª pl.', '{ἔλιπον}', 'deixaram'],
      ],
    },
    {
      caption: T('Table 2 — The giants and their stems'),
      head: [
        T('Present'),
        { 0: 'A', 1: 'o', 2: 'r', 3: 'i', 4: 's', 5: 't', 6: 'o', 7: ' ', 8: '2', 9: 'º' },
        T('Meaning'),
      ],
      rows: [
        ['{λείπω}', '{ἔλιπον}', 'deixei'],
        ['{ὁράω}', '{εἶδον}', 'vi'],
        ['{γινώσκω}', '{ἔγνων}', 'conheci'],
        ['{ἔχω}', '{ἔσχον}', 'tive'],
        ['{λαμβάνω}', '{ἔλαβον}', 'tomei'],
        ['{πάσχω}', '{ἔπαθον}', 'sofri'],
      ],
    },
    {
      caption: T('Table 3 — 2nd-aorist nominal forms'),
      head: [T('Form'), T('Example'), T('Hint')],
      rows: [
        ['Infinitivo', '{λιπεῖν}, {ἰδεῖν}', 'terminação -εῖν'],
        ['Particípio masc.', '{λιπών}, {ἰδών}', '-ών, -οῦσα, -όν'],
        ['Imperativo 2ª sg.', '{λάβε}, {ἰδέ}', 'forma curta, sem σ'],
      ],
    },
  ],
};
