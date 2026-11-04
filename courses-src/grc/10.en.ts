import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Imperative'),
  subtitle: T('λῦε vs λῦσον: commanding process or act'),
  section: T('The verb'),
  body: C(`## Command with aspect

The Greek imperative orders, exhorts, beseeches and invites — and, like every Greek verb, carries aspect. The present imperative commands continuing or maintaining a process ({μετανοεῖτε} "live in repentance", {προσεύχεσθε} "live praying"); the aorist imperative commands executing an act ({ἔγειρε} "rise!", {πίστευσον} "believe!", Acts 16:31). The famous {μετανοεῖτε} of Mark 1:15 stands in the present: "live in repentance", not "repent once".

In reading practice, translations rarely mark the difference — the student must perceive it. Facing two imperatives, ask: does the author want a permanent state (present) or a punctual decision (aorist)?

## The imperative persons

The imperative has 2nd and 3rd persons (one does not command oneself in the singular). The present active 2nd sg. is the verb's shortest form: {λῦε} (stem + ε, no ending). The 3rd sg. takes {-τω}: {λυέτω} "let him loose!", {λυσάτω} in the aorist. The 2nd pl. coincides with the indicative ({λύετε}, {λύσατε}) — only context and punctuation reveal the command. The 3rd pl. ends in {-ντων}: {λυόντων}, {λυσάντων}.

In the middle voice, the 2nd sg. ends in {-ου} ({λύου}, {φοβοῦ}), a form returning in the deponent verbs of ch. 11.

## Prohibiting in Greek

Negating the imperative has its own rule, constantly tested and constantly in the text. To forbid a punctual act: {μή} + aorist subjunctive ({μὴ φοβηθῇς} "do not fear", Matt 1:20; {μὴ κρίνετε} "do not judge", Matt 7:1 — here present, "do not live judging"). To forbid continuing something: {μή} + present imperative ({μὴ μεριμνᾶτε} "do not be anxious", Matt 6:31).

The pair sums up aspect logic even in negation: stop doing (present) vs do not even start / count it undone (aorist). {μὴ θησαυρίζετε} "do not store up" (habit to abandon) vs {μὴ φοβηθῇς} "do not even fear" (act to avoid).`),
  vocab: [
    V('λῦε', 'λύω', 'loose! (pres.)'),
    V('λῦσον', 'λύω', 'loose! (aor.)'),
    V('λύετε', 'λύω', 'loose! (pl.)'),
    V('λύσατε', 'λύω', 'loose! (pl., aor.)'),
    V('λυέτω', 'λύω', 'let him loose!'),
    V('μετανοεῖτε', 'μετανοέω', 'repent'),
    V('πίστευσον', 'πιστεύω', 'believe!'),
    V('ἔγειρε', 'ἐγείρω', 'rise!'),
    V('μή', 'μή', 'not (prohibition)'),
    V('φοβοῦ', 'φοβέομαι', 'fear! / do not fear!'),
    V('αἰτεῖτε', 'αἰτέω', 'ask!'),
    V('γενηθήτω', 'γίνομαι', 'let it be done!'),
    V('ἐλθέτω', 'ἔρχομαι', 'let him come!'),
    V('ὕπαγε', 'ὑπάγω', 'go!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"μετανοεῖτε" (Mark 1:15) stands in the present because…'),
    options: [
      T('Repentance is a state to maintain, not a single act'),
      T('The aorist does not exist for this verb'),
      T('It is an order given only to the apostles'),
      T('Present and aorist are interchangeable'),
    ],
    answer: 0,
    hint: T('Present imperative = process to maintain — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the aorist 2nd singular: λῦ___ ("loose!", decisively).'),
      answer: 'σον',
      hint: T('1st aorist: stem + σ + ον.'),
    },
    {
      kind: 'choose',
      prompt: T('"μὴ κρίνετε" (Matt 7:1) negates with the present because…'),
      options: [
        T('It forbids a habit to drop ("do not live judging")'),
        T('The aorist would be grammatically wrong'),
        T('It is an unexplained exception'),
        T('μή only combines with the present'),
      ],
      answer: 0,
      hint: T('μή + present = stop doing — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its description.'),
      pairs: [
        { a: 'λῦε', b: '2ª sg. pres.' },
        { a: 'λῦσον', b: '2ª sg. aor.' },
        { a: 'λυέτω', b: '3ª sg. pres.' },
        { a: 'λύου', b: '2ª sg. média' },
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
        'Present imperative = process to maintain; aorist imperative = act to execute. The tense choice is the message.',
      ),
    },
    {
      n: '2',
      text: T(
        'Present 2nd sg. is the shortest form ({λῦε}, {βλέπε}); 3rd sg. takes -τω; 3rd pl. takes -ντων.',
      ),
    },
    {
      n: '3',
      text: T(
        'Imperative 2nd pl. = indicative 2nd pl. in form ({λύετε}). Only context reveals the command.',
      ),
    },
    {
      n: '4',
      text: T(
        'Prohibition: {μή} + aorist subjunctive (act) or {μή} + present imperative (habit to drop).',
      ),
    },
    {
      n: '5',
      text: T(
        'In the NT, the 3rd-person imperative translates as "let him…": {ἐλθέτω} "come!", {γενηθήτω} "be it done!".',
      ),
    },
  ],
  notes: [
    {
      label: T('Subtlety:'),
      text: T(
        '{ἄφες} (Matt 8:22) and {ἄφετε} (Matt 19:14, "let them come to me") are the same verb ({ἀφίημι}, ch. 12) in different tenses: punctual act vs permanent attitude. Aspect decides the translation.',
      ),
    },
    {
      label: T('Politeness:'),
      text: T(
        'The Greek imperative is not rude per se: requests to God ({δός}, "give us", Matt 6:11) and pleas ({ἐλέησόν με}, "have mercy on me") use the same mood as orders. Tone comes from context, not form.',
      ),
    },
  ],
  examples: [
    { text: '{μετανοεῖτε}', gloss: T('repent (present: state; Mark 1:15)') },
    { text: '{πίστευσον}', gloss: T('believe! (aorist: decision; Acts 16:31)') },
    { text: '{ἔγειρε καὶ περιπάτει}', gloss: T('rise and walk! (Matt 9:5)') },
    { text: '{μὴ φοβοῦ}', gloss: T('do not fear! (Luke 1:30)') },
    { text: '{μὴ κρίνετε}', gloss: T('do not judge (present: habit; Matt 7:1)') },
    { text: '{αἰτεῖτε καὶ δοθήσεται}', gloss: T('ask and it shall be given (Matt 7:7)') },
    { text: '{γενηθήτω τὸ θέλημά σου}', gloss: T('may your will be done (3rd sg.; Matt 6:10)') },
    { text: '{ἐλθέτω ἡ βασιλεία σου}', gloss: T('may your kingdom come (Matt 6:10)') },
    { text: '{ὕπαγε εἰς εἰρήνην}', gloss: T('go in peace (Mark 5:34)') },
    { text: '{ἄφες τοὺς νεκρούς}', gloss: T('leave the dead (aorist: act; Matt 8:22)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active imperative of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['2ª sg.', '{λῦε}', 'liberta! (continua)'],
        ['3ª sg.', '{λυέτω}', 'liberte ele!'],
        ['2ª pl.', '{λύετε}', 'libertai!'],
        ['3ª pl.', '{λυόντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Table 2 — Aorist active imperative of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['2ª sg.', '{λῦσον}', 'liberta! (de uma vez)'],
        ['3ª sg.', '{λυσάτω}', 'liberte ele!'],
        ['2ª pl.', '{λύσατε}', 'libertai!'],
        ['3ª pl.', '{λυσάντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Table 3 — Present middle imperative'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['2ª sg.', '{λύου}', 'liberta-te!'],
        ['3ª sg.', '{λυέσθω}', 'liberte-se ele!'],
        ['2ª pl.', '{λύεσθε}', 'libertai-vos!'],
      ],
    },
  ],
};
