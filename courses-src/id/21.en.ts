import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Numeral'),
  title: T('Time, dates and number'),
  subtitle: T('sudah, masih, baru, hampir, segera, kemarin, nanti, lalu'),
  body: C(`## The words Portuguese does not have as adverbs

Portuguese marks time on the verb: "já vim", "ainda vou", "quase terminei". Indonesian cannot, because the verb does not inflect, and so it has a set of words that do the job on their own.

{sudah} is "already", and it is the commonest: {saya sudah makan} "I have eaten", {dia sudah datang} "he has come".

{masih} is "still", in the sense of continuation: {dia masih di sini} "he is still here", {saya masih tinggal di sini} "I still live here". The pair {masih belum} is "not yet".

{baru} is "only", in the sense of recency: {dia baru datang} "he has just come", {saya baru tahu} "I only just found out". With {saja} it gets stronger: {baru saja} "only just now".

{hampir} is "almost": {hampir selesai} "it is nearly done". With reduplication, {hampir-hampir}, the sense turns into "just barely", almost ironic: {hampir-hampir tidak sampai} "he very nearly did not make it".

{segera} is "soon": {akan segera datang} "will come soon". {kemarin} is "yesterday", {nanti} is "later", and {tadi} is "just now", pointing backwards.

{sementara itu} is "meanwhile", {sekarang} is "now", {saat ini} is "at this moment". And there are the frequencies: {selalu} "always", {sering} "often", {kadang-kadang} "sometimes", {jarang} "rarely", {pernah} "ever", {tidak pernah} "never".

All of these are invariable. None inflects, none agrees with the noun, and none changes because of the subject.

## Verb time comes before

Four of the words above are aspect, and aspect comes before the verb, as the position rule already said.

{sudah} plus a verb is "have done": {sudah datang} "has come", and {sudah} plus a base is the commonest way of expressing past in Indonesian; there is no other way.

{akan} plus a verb is the future: {akan datang} "will come". {sedang} plus a verb is the progressive: {sedang datang} "is coming". {belum} plus a verb is "not yet": {belum datang} "has not come yet". And {telah} is a second past marker, more formal, that turns up mainly in writing: {telah datang}.

The pair {sudah} and {belum} is the most useful of all: {sudah datang} "has come" and {belum datang} "has not come yet" are two halves of the same thread. The answer to {belum datang} is always {sudah datang}, and the commonest question in ordinary conversation is {sudah?}, meaning "already?", which expects {sudah} or {belum}.

{masih} and {baru} also come before the verb when they are aspect: {masih tinggal} "still lives", {baru tahu} "has just found out". And there is a fine difference between them that Portuguese does not have: {masih} looks backwards, at a situation that started earlier and continues; {baru} looks forwards, at something that has just started.

## Where the date goes

Time that is a noun goes where an adverb goes: at the end of the verb phrase or at the front of the sentence. {Dia datang kemarin} "he came yesterday", {Kemarin dia datang} "yesterday he came", {Dia datang di hari Senin} "he came on Monday".

The units are {hari} "day", {minggu} "week", {bulan} "month", {tahun} "year" and {jam} "hour". The days of the week are capitalised and take no numeral: {Senin}, {Selasa}, {Rabu}, {Kamis}, {Jumat}, {Sabtu}, {Minggu}. Note that {Minggu} is Sunday on the calendar and "week" in ordinary conversation, which is a classic source of confusion.

The months are also borrowed proper nouns: {Januari}, {Februari}, {Maret} and so on to {Desember}. There is no way to write January in lower case.

The full date takes no preposition: {17 Agustus 1945}, and in running text {tanggal 17 Agustus}. The noun {tanggal} is a Sanskrit loan meaning "mark, day of the month", and the text uses it in exactly that role. A translator coming from Portuguese writes "no dia 17 de agosto", with three prepositions Indonesian does not have.

## Mintilah, maka akan diberikan kepadamu

{Matthew 7:7} is where verb time shows up in its pure state, and no table says more: {Mintilah, maka akan diberikan kepadamu; carilah, maka kamu akan mendapat; ketoklah, maka akan dibukakan kepadamu}.

The three imperatives are {minta}, {cari} and {ketok}, and the three verbs that follow are {diberikan}, {mendapat} and {dibukakan}: {akan} plus verb in all three cases, plus two passives with {di-} and no {oleh} written out.

What the passage does not have is {-lah} in the past. Where the Greek of the Sermon on the Mount alternates aorist and imperfect, the text uses {akan} three times and {sudah} not at all, because time in Indonesian is not in the verb. A reader hunting for a change of tense in the verb finds none and concludes that the passage says the same thing three times. That is wrong: what changes is the verb, not the tense.`),
  vocab: [
    V('sudah', 'sudah', 'already'),
    V('telah', 'telah', 'already (past, written register)'),
    V('akan', 'akan', 'will'),
    V('sedang', 'sedang', 'be in the middle of (progressive)'),
    V('belum', 'belum', 'not yet'),
    V('masih', 'masih', 'still'),
    V('baru', 'baru', 'only just; new'),
    V('hampir', 'hampir', 'almost'),
    V('segera', 'segera', 'soon'),
    V('kemarin', 'kemarin', 'yesterday'),
    V('nanti', 'nanti', 'later'),
    V('tadi', 'tadi', 'just now'),
    V('lalu', 'lalu', 'then, after that'),
    V('sekarang', 'sekarang', 'now'),
    V('selalu', 'selalu', 'always'),
    V('kadang-kadang', 'kadang', 'sometimes'),
    V('hari', 'hari', 'day'),
    V('tanggal', 'tanggal', 'date, day of the month'),
    V('Senin', 'Senin', 'Monday'),
    V('Minggu', 'Minggu', 'Sunday; week'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Verb time comes from the adverb: {sudah}, {akan}, {sedang}, {belum} come before the verb.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} plus a verb is the past: {sudah datang} "has come". {telah} does the same in written register.',
      ),
    },
    {
      n: '3',
      text: T('{belum} has a required answer: the answer to {belum datang} is {sudah datang}.'),
    },
    {
      n: '4',
      text: T(
        '{masih} looks backwards and {baru} looks forwards; both come before the verb when they are aspect.',
      ),
    },
    {
      n: '5',
      text: T(
        'A date takes no preposition: {17 Agustus 1945}, {hari Senin}, {tanggal 17 Agustus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('An adverb with no inflection'),
      text: T(
        'None of the time words inflects. {sudah}, {akan}, {belum} and {sedang} do not change with subject or number, which is why the same verb serves {saya}, {dia} and {mereka}: {saya sudah datang}, {dia sudah datang}, {mereka sudah datang}.',
      ),
    },
    {
      label: T('Minggu and the week'),
      text: T(
        '{Minggu} is Sunday on the calendar and "week" in ordinary conversation, and context decides. On a calendar there is no ambiguity; in a letter there is, and the word is worth avoiding when the date matters.',
      ),
    },
  ],
  examples: [
    { text: 'Saya sudah makan.', gloss: T('I have eaten.') },
    { text: 'Dia masih di sini.', gloss: T('He is still here.') },
    { text: 'Saya baru tahu ontem.', gloss: T('I only found out yesterday.') },
    { text: 'Hampir selesai.', gloss: T('It is nearly done.') },
    { text: 'Dia akan segera datang.', gloss: T('He will come soon.') },
    { text: 'Dia belum datang.', gloss: T('He has not come yet.') },
    { text: 'Sudah?', gloss: T('Already?') },
    { text: 'Dia datang kemarin.', gloss: T('He came yesterday.') },
    { text: 'Kita bertemu di hari Senin.', gloss: T('We met on Monday.') },
    {
      text: 'Peristiwa itu terjadi pada 17 Agustus 1945.',
      gloss: T('That event happened on 17 August 1945.'),
    },
  ],
  tables: [
    {
      caption: T('Palavras de tempo e de aspecto'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['sudah', 'já', 'antes do verbo', 'sudah datang'],
        ['telah', 'já (escrito)', 'antes do verbo', 'telah datang'],
        ['akan', 'vai', 'antes do verbo', 'akan datang'],
        ['sedang', 'estar a', 'antes do verbo', 'sedang datang'],
        ['belum', 'ainda não', 'antes do verbo', 'belum datang'],
        ['masih', 'ainda', 'antes do verbo', 'masih tinggal'],
        ['baru', 'só agora', 'antes do verbo', 'baru tahu'],
      ],
    },
    {
      caption: T('Advérbios que ficam fora do verbo'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['kemarin', 'ontem', 'fim da frase', 'dia datang kemarin'],
        ['nanti', 'depois', 'fim da frase', 'nanti kita bicara'],
        ['tadi', 'agora mesmo', 'fim da frase', 'tadi dia telephon'],
        ['hampir', 'quase', 'antes do verbo', 'hampir selesai'],
        ['segera', 'em breve', 'antes do verbo', 'akan segera datang'],
        ['sekarang', 'agora', 'qualquer', 'sekarang dia bekerja'],
        ['selalu', 'sempre', 'antes do verbo', 'selalu datang tepat waktu'],
        ['kadang-kadang', 'às vezes', 'antes do verbo', 'kadang-kadang lupa'],
      ],
    },
    {
      caption: T('Datas e unidades de tempo'),
      head: ['Unidade', 'Palavra', 'Exemplo', 'Leia como'],
      rows: [
        ['dia', 'hari', 'hari Senin', 'na segunda-feira'],
        ['semana', 'minggu', 'minggu depan', 'na semana que vem'],
        ['mês', 'bulan', 'bulan Januari', 'em janeiro'],
        ['ano', 'tahun', 'tahun 1945', 'em 1945'],
        ['data', 'tanggal', 'tanggal 17 Agustus', 'a 17 de agosto'],
        ['completa', '(dia + mês + ano)', '17 Agustus 1945', '17 de agosto de 1945'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Dia belum datang}, what does the sentence mean?'),
    options: [
      T('he has not come yet'),
      T('he has already come'),
      T('he will come soon'),
      T('he came yesterday'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the past: has come = ___ datang.'),
      answer: 'sudah',
      hint: T('The aspect word that comes before the verb.'),
    },
    {
      kind: 'choose',
      prompt: T('How is a full date written?'),
      options: [
        T('17 Agustus 1945'),
        T('di 17 dari Agustus 1945'),
        T('ke 17 Agustus 1945'),
        T('pada tanggal tujuh belas Agustus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the word to its time'),
      pairs: [
        { a: T('{sudah}'), b: T('already') },
        { a: T('{belum}'), b: T('not yet') },
        { a: T('{akan}'), b: T('will') },
        { a: T('{kemarin}'), b: T('yesterday') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
