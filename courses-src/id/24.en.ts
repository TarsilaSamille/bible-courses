import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Verb'),
  title: T('The verb: tense'),
  subtitle: T('sudah, akan, sedang, belum, and the -lah that is disappearing'),
  body: C(`## The verb does not change

The Indonesian verb inflects neither person nor tense. The same form serves {saya}, {kamu}, {dia} and {mereka}: {datang} "comes", {datang} "come", {datang} "came", {datang} "will come". Everything Portuguese puts in the ending, Indonesian puts around the verb.

The whole matrix fits on one page. Before the verb come the aspect adverbs; after the verb come the manner adverbs; and around it, whatever else needs saying.

{nothing} {sedang datang} "is coming", {sudah datang} "has come", {akan datang} "will come".
{nothing} {tidak datang} "does not come", {tidak sudah datang} "has not come yet", {belum datang} "has not come yet".
{nothing} {sudah + negative} {salah datang} "came wrong", {sedang + negative} {sedang tidak datang} "is not coming", {akan + negative} {akan tidak datang} "will not come".

The detail that produces mistakes is the negative one: {tidak} combines with {sedang} and {akan}, and does not combine with {belum}. {Tidak belum datang} is wrong; what exists is {belum datang} or {tidak sudah datang}. The same holds for {akan}: {tidak akan datang} is correct, {akan tidak datang} is colloquial.

## Four ways to say the past

The past is what has the most paths, and that is why a translator has to choose instead of hunting for an inflection that is not there.

{sudah} plus a verb is the ordinary conversational past. {Dia sudah datang} "he has come", {saya sudah baca} "I have read". It is the form that turns up in most New Testament translations, and it is not the translator’s choice: it is the only one in speech.

{telah} plus a verb is the same past in written and solemn register. {Telah datang} "had come", {telah wafat} "had died". Anyone writing in a formal register finds it more natural, and anyone writing a letter finds it so too.

{-lah} on the verb is remote past, and it is the only form that carries on the verb what the others carry outside it. {Pergilah} "he departed", {Datanglah}, {mendengarlah} "listen attentively". The {-lah} comes from the old particle {lah}, which is gone from speech, and it survives in three places: literature, ecclesiastical language, and frozen expressions such as {mendengarlah} and {sudahlah}, "that is enough".

And there is the resultative past, which is not a time but a state: {Lantainya sudah lapuk} "the floor has collapsed", {Pintu sudah tertutup} "the door is shut". The {sudah} here marks the consequence, not the moment, and Portuguese renders it with a perfect that suggests time.

## Three particles that glue to the end

What was left of inflection is a handful of particles that stick to the end of the verb or the clause. There are few, three are useful, and one is dying.

{-lah}, with the sense of result and of insistence: {Tolong datanglah!} "please come!", {Cepatlah!} "hurry!", {Dengarkanlah!} "listen!". In ordinary speech it is emphasis and a plea; in old writing it is tense. Anyone learning to read an older text has to know that {Datanglah} can mean "came" and not "come".

{-pun} marks emphasis by contrast, and it is more about addition than about time: {Dia pun pelayan} "he is a servant too", {Kita pun ikut suffer} "we suffer as well". The commonest form is {pun} after a pronoun or an adverb: {Aku pun tidak tahu} "I do not know either", {Dia pun datang} "he came too".

{-kah} is a question particle, and it is literary: {Datangkah kamu?} "are you coming?". The ordinary way to ask is {Apakah kamu datang?}, with {apakah} in front. {Datangkah} turns up in liturgical prayer and in older text, and a reader who does not know it takes {Datakah} as {datang + kah} and gets lost. The same goes for {-tah}, which asserts instead of asking and only lives in a set phrase: {Sudahkah?} "has it happened yet?".

Taken together they do what Greek did with the ending. A Greek clause reaches the end of its verb with tense, person and mood printed in the ending; an Indonesian clause reaches the end of its verb with the adverb already glued on in front and perhaps an {-lah} at the end. Nothing was lost: it moved house.

## Three questions and one sentence

{John 21:15-17} is the best example of what happens in a language that does not inflect. Jesus asks Simon three times whether he loves him, and the text repeats the question with few changes.

Greek makes the question with three different verbs, and the difference is a wordplay the Greek translator exploits. Indonesian repeats {Apakah kamu cintaku?} three times, and the difference is lost. Not because a translator dropped something, but because the language has nowhere to put it: the verb of loving is {cinta}, with or without {meN-}, and there are not three verbs for three questions.

A translator who renders the question three times with three different Portuguese verbs is adding something from the Greek, not translating from the Indonesian. And a translator who renders the answer {Ya, Rabbiku, dan Engkau tahu bahwa aku mencintaimu?} three times with the same structure discovers that Greek parallelism, made of variation, has become Indonesian parallelism, made of repetition. The effect on the reader is the same, and the grammar that produced it is not.`),
  vocab: [
    V('datang', 'datang', 'to come'),
    V('datanglah', 'datang', 'come! (emphatic)'),
    V('pergi', 'pergi', 'to go'),
    V('pergilah', 'pergi', 'he departed'),
    V('tidur', 'tidur', 'to sleep'),
    V('bekerja', 'kerja', 'to work'),
    V('makan', 'makan', 'to eat'),
    V('sudah', 'sudah', 'already'),
    V('telah', 'telah', 'already (written)'),
    V('akan', 'akan', 'will'),
    V('sedang', 'sedang', 'be in the middle of'),
    V('belum', 'belum', 'not yet'),
    V('tidak', 'tidak', 'not'),
    V('-lah', 'lah', '(emphatic; remote past, written)'),
    V('-pun', 'pun', 'also, even'),
    V('-kah', 'kah', '(question particle, literary)'),
    V('apakah', 'apakah', 'whether (question)'),
    V('cinta', 'cinta', 'to love, love'),
    V('mencintai', 'cinta', 'to love'),
    V('Rabbiku', 'Rabbiku', 'my Master'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb inflects neither person nor tense: {datang} serves every person and every tense.',
      ),
    },
    { n: '2', text: T('Aspect comes before the verb: {sedang}, {sudah}, {akan}, {belum}.') },
    {
      n: '3',
      text: T(
        '{tidak} combines with {sedang} and {akan} but not with {belum}: {tidak sudah datang}, never {tidak belum datang}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{-lah} at the end of the verb is emphasis in speech and remote past in older writing.',
      ),
    },
    {
      n: '5',
      text: T('{-pun} marks contrast through "also" and {-kah} is a literary question particle.'),
    },
  ],
  notes: [
    {
      label: T('The resultative past'),
      text: T(
        'In {Lantainya sudah lapuk} the {sudah} marks no moment but a consequence. Portuguese renders it with a perfect that suggests time, and the sentence says "the result is present", not "it happened".',
      ),
    },
    {
      label: T('Where -lah still lives'),
      text: T(
        'The remote-past {-lah} shows up in fixed expressions such as {mendengarlah}, "listen attentively", and in old liturgical prayer. Anyone who meets {Datanglah} in a text and reads "came" instead of "come" got the tense wrong, not the language.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang.', gloss: T('He comes. / He came. / He will come.') },
    { text: 'Dia sedang datang.', gloss: T('He is coming.') },
    { text: 'Dia sudah datang.', gloss: T('He has come.') },
    { text: 'Dia belum datang.', gloss: T('He has not come yet.') },
    { text: 'Dia tidak sudah datang.', gloss: T('He has not come yet.') },
    { text: 'Telah datang.', gloss: T('He had come.') },
    { text: 'Pergilah!', gloss: T('He departed!') },
    { text: 'Tolong datanglah!', gloss: T('Please come!') },
    { text: 'Aku pun tidak tahu.', gloss: T('I do not know either.') },
    { text: 'Datangkah kamu?', gloss: T('Are you coming?') },
  ],
  tables: [
    {
      caption: T('A matriz do tempo'),
      head: ['Tempo', 'Marca', 'Exemplo', 'Leia como'],
      rows: [
        ['presente', '(nada)', 'Dia datang.', 'ele vem'],
        ['progressivo', 'sedang + V', 'Dia sedang datang.', 'ele está vindo'],
        ['passado', 'sudah + V', 'Dia sudah datang.', 'ele já chegou'],
        ['passado escrito', 'telah + V', 'Telah datang.', 'havia chegado'],
        ['futuro', 'akan + V', 'Dia akan datang.', 'ele virá'],
        ['ainda não', 'belum + V', 'Dia belum datang.', 'ele ainda não chegou'],
        ['passado remoto', 'V-lah', 'Pergilah.', 'partiu'],
        ['negativo', 'tidak + V', 'Dia tidak datang.', 'ele não vem'],
      ],
    },
    {
      caption: T('Partículas do fim do verbo'),
      head: ['Partícula', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['-lah', 'ênfase na fala, tempo na escrita', 'Tolong datanglah!', 'por favor, venha!'],
        ['-pun', 'contraste pelo «também»', 'Aku pun tidak tahu.', 'eu também não sei'],
        ['-kah', 'pergunta, literário', 'Datangkah kamu?', 'você vem?'],
        ['-tah', 'afirmação, frase feita', 'Sudahkah?', 'será que já?'],
        ['-nya', 'retoma o substantivo', 'datangnya', 'a vinda dele'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct form of "he has not come yet"?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak belum datang'),
      T('Dia sedang tidak datang'),
      T('Dia tidak akan datang'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the future: he will come = Dia ___ datang.'),
      answer: 'akan',
      hint: T('The adverb that comes before the verb.'),
    },
    {
      kind: 'choose',
      prompt: T('What does {Aku pun tidak tahu} mean?'),
      options: [
        T('I do not know either'),
        T('I only do not know'),
        T('I do not know yet'),
        T('I do not want to know'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its function'),
      pairs: [
        { a: T('{-lah}'), b: T('emphasis') },
        { a: T('{-pun}'), b: T('also') },
        { a: T('{-kah}'), b: T('question') },
        { a: T('{-nya}'), b: T('picks up the noun') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
