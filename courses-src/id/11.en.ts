import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Passive voice: di- and ter-'),
  subtitle: T('dibaca, tertulis, terjadi'),
  section: T('Tense and verb'),
  body: C(`The actional passive foregrounds the object:

{di- + baca} → {dibaca} “to be read”;
{di- + salib + -kan} → {disalibkan} “to be crucified”;
{di- + buat} → {dibuat} “to be made”;
{di- + tentang} → {dibahas} “to be discussed.”

Aspect can come from {sudah}, {sedang}, or {akan}: {sudah dibaca}, {sedang dibaca}, {akan dibaca}. The agent {oleh} normally follows: {dibaca oleh murid}. With a pronominal agent, a clitic is used: {kubaca} “read by me,” {kaubaca} “read by you.”

{Ter-} expresses a RESULTING STATE, an involuntary condition, capacity, or surface: {tertulis} “to be written” (John 19:19), {terbuka} “to be open,” {tersembunyi} “to be hidden,” {terlihat} “to be visible,” {terangkat} “to be raised.” In Biblical idiom, {terbuka} may suggest an open door.

{Terjadi} “to happen” is lexicalized and should be learned as a whole; not every ter- form is fully compositional.

Compare:
• {Alkitab itu dibaca} = “The Bible is being read” (an action; someone reads it).
• {Alkitab itu tertulis} = “It is written in the Bible” or “The Bible says” (state/result).

Choose according to the question: if the text receives an action, prefer {dibaca}; if the available information is the point, use {tertulis}.`),
  vocab: [
    V('dibaca', 'baca', 'to be read'),
    V('dibuat', 'buat', 'to be made'),
    V('dibahas', 'bahas', 'to be discussed'),
    V('disalibkan', 'salib', 'to be crucified'),
    V('tertulis', 'tulis', 'to be written'),
    V('terbuka', 'buka', 'to be open'),
    V('tersembunyi', 'sembunyi', 'to be hidden'),
    V('terlihat', 'lihat', 'to be visible, appear'),
    V('terjadi', 'jadi', 'to happen, occur'),
    V('kubaca', 'baca', 'read by me'),
    V('kaubaca', 'baca', 'read by you'),
    V('oleh', 'oleh', 'by (agent)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form means “is written” as a resulting state?'),
    options: [T('tertulis'), T('dibaca'), T('ditulis'), T('menulis')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ oleh murid” = “is read by the disciple.”'),
      answer: 'dibaca',
      hint: T('Use di- + baca.'),
    },
    {
      kind: 'choose',
      prompt: T('In “We read the Word,” which passive expresses the action?'),
      options: [
        T('Firman dibaca kami'),
        T('The Word is interpreted'),
        T('Kami dibaca'),
        T('Membaca Firman'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'di- prefers rounded vowels but has allomorphs: di- + -kan → {di-kan}; {di- + baca} → {dibaca}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Oleh} introduces the agent, but it also means “mark” in other uses. Do not automatically treat it as the Spanish causal “por.”',
      ),
    },
    {
      n: '3',
      text: T(
        '{Ter-} does not simply mean “to be -ed”: it can indicate result, involuntariness, capacity, or a visible surface.',
      ),
    },
  ],
  notes: [
    {
      label: T('Register'),
      text: T('{Terlihat} can mean “seem/obvious” as well as “be visible.”'),
    },
  ],
  examples: [
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    { text: 'Ia tertulis di atas salib.', gloss: T('It is written above the cross.') },
    { text: 'Pintu terbuka.', gloss: T('The door is open.') },
  ],
  tables: [
    {
      caption: T('di- and ter-'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['di- + V', T('passive action; object foregrounded'), '{dibaca}'],
        ['ter- + V', T('state/result'), '{tertulis}'],
      ],
    },
  ],
};
