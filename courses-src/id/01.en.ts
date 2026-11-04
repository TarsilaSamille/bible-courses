import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Pronunciation and pronouns'),
  subtitle: T('saya/aku, kamu/Anda, dia'),
  section: T('Phonology and pronouns'),
  body: C(`Indonesian (bahasa Indonesia) does not inflect verbs for person or number, has no grammatical gender, and normally needs no article. The verb form stays the same: {saya percaya}, {kamu percaya}, and {mereka percaya} mean “I believe,” “you believe,” and “they believe.” Time, aspect, and negation are expressed by separate words.

PRONUNCIATION
• {c} is /tʃ/, as in {cinta} “love”.
• {j} is /dʒ/, as in {jalan} “road”.
• {y} is /j/, as in {yakin} “firm”.
• {ng} is /ŋ/, as in {nyanyi} “to sing”.
• {kh} is /x/, as in {khotbah} “sermon”; {g} before {e/i} is /ɡ/, but before {a/u} it is /ɣ/, as in {gembira} “happy”.
• Final vowels in {sebut}, {saya}, and {buku} are greatly reduced in everyday speech; spelling preserves the final vowel.

The written accent {–} is uncommon: the usual penultimate stress is predictable, as in {membaca} [memˈbatʃa] and {bermuka} [bərˈmuka].`),
  vocab: [
    V('saya', 'saya', 'I (formal or neutral)'),
    V('aku', 'aku', 'I (intimate)'),
    V('kamu', 'kamu', 'you (informal)'),
    V('Anda', 'Anda', 'you (formal)'),
    V('dia', 'dia', 'he, she, it'),
    V('kami', 'kami', 'we (excluding you)'),
    V('kita', 'kita', 'we (including you)'),
    V('mereka', 'mereka', 'they'),
    V('ini', 'ini', 'this'),
    V('itu', 'itu', 'that'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which pronoun means “we,” including the listener?'),
    options: [T('kami'), T('kita'), T('mereka'), T('dia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ percaya” = “I believe” (formal).'),
      answer: 'saya',
      hint: T('Formal first-person pronoun.'),
    },
    {
      kind: 'choose',
      prompt: T('How is {cinta} approximately pronounced?'),
      options: [T('chinta'), T('jinta'), T('sinta'), T('tsinta')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb does not change with person or number: {dia membaca} = “he reads”; {mereka membaca} = “they read”.',
      ),
    },
    {
      n: '2',
      text: T(
        '{kami} excludes the addressee; {kita} includes the addressee. The choice does not depend on who is physically present.',
      ),
    },
    { n: '3', text: T('{dia} can also mean “it”; context resolves the reference.') },
  ],
  notes: [
    {
      label: T('Caution'),
      text: T('The word {dan} is lowercase and means “and”; the country is {Indonesia}.'),
    },
  ],
  examples: [
    { text: 'Saya percaya kepada Yesus.', gloss: T('I believe in Jesus.') },
    { text: 'Kamu dan aku membaca Firman.', gloss: T('You and I read the Word.') },
    { text: 'Kita adalah saudara.', gloss: T('We are brothers (including the listener).') },
  ],
  tables: [
    {
      caption: T('Personal pronouns'),
      head: ['Função', 'PT', 'ES'],
      rows: [
        ['1ª pessoa', T('saya / aku'), T('formal I / intimate I')],
        ['2ª pessoa', T('kamu / Anda'), T('informal / formal')],
        ['3ª pessoa', T('dia / mereka'), T('he or she / they')],
        ['Nós', T('kami / kita'), T('exclusive / inclusive')],
      ],
    },
  ],
};
