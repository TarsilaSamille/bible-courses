import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Verb'),
  title: T('The verb: the aspect system'),
  subtitle: T('menulis and menuliskan: the pair that changes the sense most'),
  body: C(`## The base and the four prefixes

The Indonesian verb has a base and never loses it. {tulis} is the base, and everything the verb does in Portuguese Indonesian does by gluing a prefix onto it. There is no person ending, no vowel change and no tense: what changes is the affix.

{meN-} marks an active action, with the object in focus: {menulis}, {membaca}, {melihat}.
{di-} marks the passive, with the agent in focus or left out: {ditulis}, {dibaca}, {dilihat}.
{ber-} marks an intransitive action or a state: {berjalan}, {berbicara}, {bertumbuh}.
{ter-} marks a resultant state: {tertulis}, {terbuka}, {terlihat}.

Which of the four turns up depends on what the sentence wants to say, not on tense or person. {Surat itu ditulis} "the letter is being written" and {Surat itu tertulis} "the letter is written, it says" share the base and part company there.

## -kan: the verb that gains a second object

The suffix {-kan} is the most important thing in the Indonesian verb after {meN-}, and it is what translators leave out most often.

{menulis} is to write. {menuliskan} is to make someone write, to have something written, to write for someone. {Dia menulis surat} "he writes a letter". {Dia menuliskan surat} "he has a letter written", or "he writes the letter for someone".

The practical reading rule: **with {-kan}, the verb has two objects.** The first is what gets written, the second is who writes or who receives. The full pattern is {menuliskan + surat + untuk orang}, and it is exactly the pattern Greek uses when it renders a Greek participle as "to be written for" or "causing to write".

The sibling of {-kan} is {-i}, which does almost the same thing with the other object: {mengisi} "to fill" (with {wadah}), {memenuhi} "to fulfil" (with {permintaan}), {menutupi} "to cover over" (with {permukaan}). The difference is that {-i} points at the object that **covers** the action, the way a receptacle covers what goes in it.

When the two compete on one root, the speaker chooses, and the choice is about content and not about grammar: {menutup} "to close" and {menutupi} "to cover over" are two verbs, not one verb used two ways.

## Reading the prefix without a dictionary

{meN-} changes shape according to the first letter of the base, and that is why no Indonesian verb looks like any other. The rule is learned whole in one line: **before a voiceless consonant the {n} shows up; before anything else it disappears.**

{k}, {p}, {t}, {s}, {c} → {meng-} and {men-}: {menulis}, {membaca}, {memakai}.
{b}, {d}, {j}, {l}, {r} → {mem-} or {me-}: {melihat}, {membawa}, {memilih}.
{vowels} → {me-}: {makan}, {masuk}, {menang}.
{g}, {h}, {k} → {meng-}: {mengajar}, {menggambar}, {menggunakan}.

The same holds for {di-}, {peN-} and {teN-}: {dibaca}, {digambar}, {dipakai}, {digunakan}; {penulis} "writer", {pelajar} "student", {pengajar} "teacher".

And there are the verbs that do **not** absorb the {n}: {ber-} goes straight in, and so do {ke-} and {pe-}. {berjalan}, {bernyanyi}, {ketawa}, {penanggalan} "date".

Two things are worth knowing before you get them wrong: borrowed verbs, such as {telepon}, {parkir} and {scan}, which carry no prefix at all, and the {n} that sometimes appears out of habit ({mengajarkan}) and sometimes does not ({mengajar}).

## Aspect lives outside the verb

Since the verb does not inflect, aspect is not in it. It comes from three adverbs already met: {sedang} plus a verb gives the progressive, {sudah} plus a verb gives the past, {akan} plus a verb gives the future.

{menulis} on its own can be "is writing", "writes" or "wrote", depending on what came before. With {sedang} there is no doubt: {sedang menulis} "is writing". With nothing at all the verb stays neutral, and a translator has to choose.

This is where the {-kan} pair does the work Greek does with the aorist and the imperfect. {Dia menulis surat} and {Dia menuliskan surat} are not one verb in two tenses: in the first the object is what he writes himself; in the second somebody is outside, and the action comes from outside. A translator who does not know the suffix writes both with the same verb and loses the agent.

{John 4:34} shows the other side of the system: the text uses {akan} plus a verb for the future almost automatically. Greek had the tense, Indonesian has the word {akan}, and a reader hunting for inflection finds nothing that varies.`),
  vocab: [
    V('tulis', 'tulis', 'to write'),
    V('menulis', 'tulis', 'to write'),
    V('menuliskan', 'tulis', 'to have written, to make write'),
    V('ditulis', 'tulis', 'to be written'),
    V('tertulis', 'tulis', 'to be written (state)'),
    V('penulis', 'tulis', 'writer'),
    V('baca', 'baca', 'to read'),
    V('membaca', 'baca', 'to read'),
    V('lihat', 'lihat', 'to see'),
    V('melihat', 'lihat', 'to see'),
    V('isi', 'isi', 'to fill'),
    V('mengisi', 'isi', 'to fill'),
    V('memenuhi', 'penuhi', 'to fulfil'),
    V('tutup', 'tutup', 'to close'),
    V('menutupi', 'tutup', 'to cover over'),
    V('berjalan', 'jalan', 'to walk'),
    V('sedang', 'sedang', 'be in the middle of'),
    V('sudah', 'sudah', 'already'),
    V('akan', 'akan', 'will'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb does not inflect: the base is always the same and what changes is the prefix.',
      ),
    },
    {
      n: '2',
      text: T(
        '{meN-} is active, {di-} is passive, {ber-} is intransitive or stative, {ter-} is resultant state.',
      ),
    },
    {
      n: '3',
      text: T(
        'With {-kan} the verb gains a second object: {menuliskan surat untuk orang} "to have a letter written for someone".',
      ),
    },
    {
      n: '4',
      text: T(
        'With {-i} the second object is what covers the action: {memenuhi permintaan} "to fulfil a request".',
      ),
    },
    {
      n: '5',
      text: T('The {n} of {meN-} appears before {k}, {p}, {t}, {s} and {c}: {menulis}, {membaca}.'),
    },
  ],
  notes: [
    {
      label: T('Where the form is not transparent'),
      text: T(
        'Some verbs are lexicalised and the prefix is no longer readable: {terjadi} "to happen" is not "become jadi", and {berbicara} is not "have + bicara" in the sense of someone talking. The system works as a rule of formation, and a list of stubborn verbs is still needed.',
      ),
    },
    {
      label: T('Loans and prefixes'),
      text: T(
        'Borrowed verbs are used with no prefix and no assimilation: {telepon}, {parkir} and {scan}. When {meng-} does turn up, the verb has been integrated: {mengDX} and {memotret} are already routine.',
      ),
    },
  ],
  examples: [
    { text: 'Dia menulis surat.', gloss: T('He writes a letter.') },
    {
      text: 'Dia menuliskan surat untuk temannya.',
      gloss: T('He has a letter written for his friend.'),
    },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    {
      text: 'Surat itu tertulis di atas salib.',
      gloss: T('The letter is written above the cross.'),
    },
    { text: 'Dia sedang menulis.', gloss: T('He is writing.') },
    { text: 'Dia sudah menulis surat.', gloss: T('He has written the letter.') },
    { text: 'Dia akan menulis surat.', gloss: T('He will write the letter.') },
    { text: 'Dia memenuhi permintaan itu.', gloss: T('He fulfils that request.') },
    { text: 'Hujan mengisi jalan.', gloss: T('The rain fills the street.') },
    { text: 'Murid itu menulis.', gloss: T('That student writes.') },
  ],
  tables: [
    {
      caption: T('Os quatro prefixos'),
      head: ['Prefixo', 'Valor', 'Exemplo', 'Leia como'],
      rows: [
        ['meN-', 'ação ativa', 'menulis', 'escreve'],
        ['di-', 'ação passiva', 'ditulis', 'é escrito'],
        ['ber-', 'intransitivo ou estado', 'berjalan', 'caminha'],
        ['ter-', 'estado resultante', 'tertulis', 'está escrito'],
        ['peN-', 'agente ou instrumento', 'penulis', 'escritor'],
        ['ke-', 'ser algo por natureza', 'ketawa', 'ri-se'],
        ['peN-an', 'ação nominalizada', 'pekerjaan', 'trabalho'],
      ],
    },
    {
      caption: T('A assimilação do prefixo meN-'),
      head: ['Primeira letra da base', 'Prefixo', 'Exemplo', 'Leia como'],
      rows: [
        ['k, p, t, s, c', 'men-', 'menulis', 'escrever'],
        ['k, p, t, s, c', 'mem-', 'membaca', 'ler'],
        ['m, n, w, y', 'men-', 'menari', 'dançar'],
        ['g, h, k', 'meng-', 'mengajar', 'ensinar'],
        ['vogal', 'me-', 'masuk', 'entrar'],
        ['b, d, j, l', 'mem-', 'membawa', 'levar'],
        ['r, l, w, y, vowel', 'me-', 'melihat', 'ver'],
      ],
    },
    {
      caption: T('O sufixo que cria um segundo objeto'),
      head: ['Sufixo', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['-kan', 'quem faz ou quem recebe', 'menuliskan surat', 'fazer escrever uma carta'],
        ['-i', 'o que cobre a ação', 'memenuhi permintaan', 'cumprir um pedido'],
        ['-kan', 'o que recebe', 'mengirimkan surat', 'enviar uma carta'],
        ['-i', 'o recipiente', 'mengisi wadah', 'encher o recipiente'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What distinguishes {menulis} from {menuliskan}?'),
    options: [
      T('the second has {-kan}: "to have written"'),
      T('the second is the past'),
      T('the second is the plural'),
      T('the second is the passive'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the prefix: he writes = ___ tulis.'),
      answer: 'Me',
      hint: T('The active prefix, with no {n} before {t}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is the passive of {membaca}?'),
      options: [T('dibaca'), T('terbaca'), T('berbaca'), T('kebaca')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the prefix to its value'),
      pairs: [
        { a: T('{meN-}'), b: T('active') },
        { a: T('{di-}'), b: T('passive') },
        { a: T('{ber-}'), b: T('intransitive') },
        { a: T('{ter-}'), b: T('resultant state') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
