import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Time, aspect, and negation'),
  subtitle: T('sudah, sedang, akan, belum; tidak, bukan'),
  section: T('Tense and verb'),
  body: C(`Verbs are not conjugated: the verbal event itself may carry no overt time marker. Time and aspect enter through markers.

{sudah} presents an event as complete: “it has happened” — {Allah sudah berfirman}. {telah} is formal/Biblical and can carry special emphasis: {Ia telah datang}. {sedang} marks an ongoing process: {Dia sedang berdoa}. {akan} places the event after the reference point: {Ia akan datang}. {belum} means “not yet”: {Ia belum datang}.

To compare the reference time:
• {Dia sudah datang} = “he has arrived.”
• {Dia sedang datang} = “he is coming” (ongoing aspect).
• {Dia akan datang} = “he will come.”
• {Dia belum datang} = “he has not arrived yet.”

Negation
{tidak} negates verbs and adjectives: {tidak percaya}, {tidak baik}. {bukan} negates or identifies nouns: {Dia bukan nabi} = “He is not a prophet”; {Ini bukan Allah} = “This is not God”. {bukanlah} adds emphasis: “certainly not”.

The suffix {-lah} makes the main verb emphatic and in coordinated bipolar clauses also highlights the second element: {Berfirmanlah Allah, jadilah terang}. In {Datanglah!}, it marks an emphatic imperative.`),
  vocab: [
    V('sudah', 'sudah', 'already; completed event'),
    V('telah', 'telah', 'already (formal/Biblical)'),
    V('sedang', 'sedang', 'be ongoing'),
    V('akan', 'akan', 'will; in the future'),
    V('belum', 'belum', 'not yet'),
    V('tidak', 'tidak', 'not (verb/adjective)'),
    V('bukan', 'bukan', 'not (noun/identity)'),
    V('berfirman', 'firman', 'to speak, declare'),
    V('datang', 'datang', 'to come'),
    V('berfirmanlah', 'firman', 'speak!; emphatically said'),
    V('terang', 'terang', 'light, bright'),
    V('gelap', 'gelap', 'dark, darkness'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you form “he has not arrived yet”?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak datang'),
      T('Dia bukan datang'),
      T('Datang belum dia'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Dia ___ berdoa” = “he is praying”.'),
      answer: 'sedang',
      hint: T('Ongoing-aspect marker.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence correctly uses {bukan}?'),
      options: [
        T('Dia bukan nabi.'),
        T('Dia tidak nabi.'),
        T('Bukan dia percaya.'),
        T('Dia bukan percaya.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In neutral sentences, context can supply the time: {Dia datang} may be habitual present or narrative past.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} and {telah} mark completion; {belum} negates an expected completion and implies a reference time.',
      ),
    },
    {
      n: '3',
      text: T(
        'Use {tidak} before a verb/adjective; use {bukan} before a noun, pronoun, or to explain identity.',
      ),
    },
  ],
  notes: [
    {
      label: T('Do not confuse'),
      text: T('{sudah} means “already,” while {belum} means “not yet.”'),
    },
  ],
  examples: [
    { text: 'Allah sudah berfirman.', gloss: T('God has spoken.') },
    { text: 'Dia sedang berdoa.', gloss: T('He is praying.') },
    { text: 'Ini bukan Firman.', gloss: T('This is not the Word.') },
    { text: 'Dia belum percaya.', gloss: T('He has not believed yet.') },
  ],
  tables: [
    {
      caption: T('Time and aspect markers'),
      head: ['Marcador', 'PT', 'ES'],
      rows: [
        ['sudah', T('already / completed'), '{Dia sudah datang}'],
        ['sedang', T('ongoing'), '{Dia sedang datang}'],
        ['akan', T('later than reference'), '{Dia akan datang}'],
        ['belum', T('not yet'), '{Dia belum datang}'],
      ],
    },
  ],
};
