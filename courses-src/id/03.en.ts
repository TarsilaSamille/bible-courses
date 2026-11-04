import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Time and verb'),
  title: T('The essential verbs'),
  subtitle: T(
    'makan, minum, pergi, datang, lihat, dengar: the verbs that hold almost every sentence up',
  ),
  body: C(`## The verb that does not conjugate

The Indonesian verb does not change shape to say who speaks or when. {makan} is "eat" in the first person and the third, in the present and the past: {saya makan}, {dia makan}, {kemarin dia makan}. What changes the meaning is not in the verb, it is in the word that goes with it.

That changes what "essential verb" means. In Portuguese, the essential verb is the one that conjugates in every sentence. In Indonesian, it is the one that carries the meaning and takes the affixes: {makan} eat, {minum} drink, {pergi} go, {datang} come, {lihat} see, {dengar} hear, {tahu} know, {mau} want, {ada} be there, {bilang} say, {tidur} sleep, {baca} read, {tulis} write, {beri} give, {ambil} take, {kerja} work cover almost everything said in a chapter of a Gospel.

## meN-: the prefix that changes the voice

The verb takes the prefix {meN-} when it is active and has an object: {makan} becomes {memakan}, {lihat} becomes {melihat}, {dengar} becomes {mendengar}, {tulis} becomes {menulis}, {baca} becomes {membaca}, {beri} becomes {memberi}, {ambil} becomes {mengambil}. The {N} is not a letter: it is the assimilation to the first sound of the root. Before {p}, {t}, {k} and {s} the sound drops and the root loses its consonant, as in {tulis} and {ambil}.

Without {meN-} the verb stays as it is, and the sentence changes voice without changing words. {Saya makan nasi} is "I eat rice"; {nasi itu dimakan} is "that rice is eaten", with {di-}, which is the passive {meN-}.

## sudah, sedang, akan, belum: where the tense lives

Since the verb does not inflect, the tense comes from four words that stand before it. {sudah} marks the finished: {saya sudah makan}, "I have eaten". {sedang} marks what is under way: {saya sedang makan}, "I am eating". {akan} marks what is coming: {saya akan makan}, "I will eat". And {belum} marks what has not happened yet: {saya belum makan}, "I have not eaten yet".

The fourth is the one Portuguese does not have with this precision. {belum} is not "no": it is "not yet", and it implies that it will happen. {tidak} negates the verb, {bukan} negates the noun, and {belum} negates only the time.

## In the Bible

John 1:1 opens with {ada}: {Pada mulanya adalah Firman}. {adalah} is {ada} with the suffix {lah}, and Indonesian says "the Word was there" where Greek says {ἦν ὁ λόγος}. The verb of existence is the same all through the Bible, and it is the first word of the verse.

Mark 4:39 has two commands with no subject and no tense: {Diam! Tenanglah!} "Be silent! Be still!". Indonesian does not need to inflect in order to command: the verb stays bare and the {lah} closes the order. And John 3:16 uses {mengaruniakan}, from {karunia} "gift", with {meN-} and {-kan}: "gave" in the sense of giving as a present.`),
  vocab: [
    V('makan', 'makan', 'to eat'),
    V('memakan', 'makan', 'to eat (active)'),
    V('minum', 'minum', 'to drink'),
    V('pergi', 'pergi', 'to go'),
    V('datang', 'datang', 'to come'),
    V('lihat', 'lihat', 'to see'),
    V('melihat', 'lihat', 'to see (active)'),
    V('dengar', 'dengar', 'to hear'),
    V('mendengar', 'dengar', 'to hear (active)'),
    V('tahu', 'tahu', 'to know'),
    V('mau', 'mau', 'to want'),
    V('ada', 'ada', 'to be there, to exist'),
    V('adalah', 'ada', 'is (existential)'),
    V('sudah', 'sudah', 'already'),
    V('sedang', 'sedang', 'to be doing'),
    V('akan', 'akan', 'will'),
    V('belum', 'belum', 'not yet'),
    V('berkata', 'kata', 'to say'),
    V('tinggal', 'tinggal', 'to live, to stay'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The verb does not inflect: {saya makan}, {dia makan}, {kemarin dia makan} have the same shape.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{meN-} is the active with an object: {makan} → {memakan}, {lihat} → {melihat}, {dengar} → {mendengar}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Before {p}, {t}, {k} and {s} the prefix sound drops: {tulis} → {menulis}, {ambil} → {mengambil}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{sudah} "already", {sedang} "under way", {akan} "future", {belum} "not yet": the tense stands before the verb.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{belum} is not {tidak}: it negates only the time, and implies it will still happen.',
      ),
    },
  ],
  notes: [
    {
      label: T('The ada that is not "have"'),
      text: T(
        '{ada} is existence, not possession. "I have a book" is {saya punya buku}, with {punya}, and {ada buku} is only "there is a book". Whoever translates {ada} as "have" turns the sentence around.',
      ),
    },
    {
      label: T('The imperative with no form of its own'),
      text: T(
        'Indonesian has no inflected imperative: the bare verb is already a command, and {lah} reinforces it. {Diam!} is "be silent" with no ending, no person and no subject.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pada mulanya adalah Firman',
      gloss: T('John 1:1 — {adalah} is {ada} with {lah}: the Word was there.'),
    },
    {
      text: 'Diam! Tenanglah!',
      gloss: T('Mark 4:39 — two commands with no subject and no tense.'),
    },
    {
      text: 'Ia telah mengaruniakan Anak-Nya',
      gloss: T('John 3:16 — {mengaruniakan}, from {karunia}: gave as a gift.'),
    },
    { text: 'saya sudah makan', gloss: T('{sudah} before the verb: I have eaten.') },
    { text: 'saya sedang makan', gloss: T('{sedang} before the verb: I am eating.') },
    { text: 'saya belum makan', gloss: T('{belum} negates the time, not the fact.') },
    { text: 'nasi itu dimakan', gloss: T('{di-} makes the passive without changing the verb.') },
    { text: 'saya punya buku', gloss: T('{punya} is "have"; {ada} would be "there is".') },
    { text: 'dia menulis surat', gloss: T('{tulis} → {menulis}: the {t} drops before {meN-}.') },
  ],
  tables: [
    {
      caption: T('The essentials, with and without meN-'),
      head: [T('Root'), T('Active'), T('Passive'), T('Meaning')],
      rows: [
        [T('{makan}'), '{memakan}', '{dimakan}', T('to eat')],
        [T('{lihat}'), '{melihat}', '{dilihat}', T('to see')],
        [T('{dengar}'), '{mendengar}', '{didengar}', T('to hear')],
        [T('{tulis}'), '{menulis}', '{ditulis}', T('to write')],
        [T('{baca}'), '{membaca}', '{dibaca}', T('to read')],
        [T('{beri}'), '{memberi}', '{diberi}', T('to give')],
        [T('{ambil}'), '{mengambil}', '{diambil}', T('to take')],
      ],
    },
    {
      caption: T('The four tense markers'),
      head: [T('Marker'), T('Meaning'), T('Example')],
      rows: [
        [T('{sudah}'), T('finished'), '{saya sudah makan}'],
        [T('{sedang}'), T('under way'), '{saya sedang makan}'],
        [T('{akan}'), T('future'), '{saya akan makan}'],
        [T('{belum}'), T('not yet'), '{saya belum makan}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Pada mulanya adalah Firman}, which verb does {adalah} come from?'),
    options: [T('{ada}'), T('{adalah}'), T('{punya}'), T('{makan}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "Diam! ___!" with the command to be still (root {tenang}).'),
      answer: 'Tenanglah',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its active form with meN-.'),
      pairs: [
        { a: T('{tulis}'), b: T('{menulis}') },
        { a: T('{lihat}'), b: T('{melihat}') },
        { a: T('{ambil}'), b: T('{mengambil}') },
        { a: T('{dengar}'), b: T('{mendengar}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which marker says "not yet, but it will happen"?'),
      options: [T('{tidak}'), T('{belum}'), T('{bukan}'), T('{sudah}')],
      answer: 1,
    },
  ],
};
