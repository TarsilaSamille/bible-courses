import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Verb'),
  title: T('Negation and prohibition'),
  subtitle: T('tidak, bukan, jangan, belum: three negatives and one structure'),
  body: C(`## Three negatives, three targets

Portuguese has one negation and puts it in three places: "does not come", "is not good", "do not come". Indonesian has three words, and each one has a target. Getting this wrong is the most visible mistake a Portuguese speaker makes, because the sentence still looks correct.

{tidak} negates a verb or a predicate. It goes immediately before the verb, and it is what almost every negation uses: {Dia tidak datang}, {Ini tidak sulit}, {Dia tidak bekerja keras}.

{bukan} negates a copula and a noun. It goes before the noun or the phrase it negates, and never after the verb: {Ini bukan buku}, {Dia bukan guru}, {bukan saya yang menulis}. And it is the only possible answer to a negated {adalah}: {Ini bukan buku}, never {Ini tidak buku}.

{jangan} negates an order. It is not an ordinary negation: it is the prohibitive, and it changes what the sentence is doing. {Jangan datang} "do not come", {Jangan mencuri} "do not steal", {Jangan lupa membawa buku} "do not forget to bring the book".

The practical rule is a question: **what is being negated?** An action or a predicate is {tidak}. An identity or a thing is {bukan}. An order is {jangan}.

And there is a case where {tidak} comes before what looks like a noun and is not {bukan}: {tidak banyak}, {tidak sulit}, {tidak lama}, {tidak jauh}. Those are adjectives used as adverbs, and the negation reaches them as it reaches the verb. {Tidak banyak orang datang} "not many people came". Anyone who writes {bukan banyak} produces a sentence that exists, with a different sense.

## belum and sudah: a structure, not a word

{belum} is not a negation like {tidak}. It marks a state that runs up to a point in time and has not yet passed it, which is why it comes with {sudah} as its answer.

{belum datang} "has not come yet". The answer is {sudah datang} "has come", and the paired question is {sudah?}, which expects one of the two.

What makes {belum} a structure rather than a word is the series of three. {belum} is the action not done up to now; {sudah} is the action done; and {akan} is the action still to come. All three combine into sentences that hold the whole of time in one word: {Dia belum datang} "has not come yet", {Dia sudah datang} "has come", {Dia akan datang} "will come".

With {masih} the thing tightens: {dia masih belum datang} "he still has not come", which is the commonest sense in Biblical narrative, because the text is describing a wait. And {sudah belum} exists too, with the sense of "already... and still not", when the second clause comes after: {Sudah aku selesai membaca, belum semua selesai}.

And there is {juga} and {pun}, which reinforce: {belum juga} "still not even", {belum pun} "not even yet". {Dia belum juga datang} "he still has not come, and is still not coming", which is more emphatic than {belum} alone.

The point that blocks reading is that {tidak} and {belum} do **not** combine. {Dia tidak belum datang} is wrong, and the correction is neither {tidak belum} nor {belum tidak}: it is to choose one of the two. For "not yet", write {belum}; for "does not come", write {tidak}. And for "has not come yet", both {belum datang} and {tidak sudah datang} work, and the second is the commoner in narrative.

## Forms that do not exist

There are four combinations a Portuguese speaker produces by accident, and knowing in advance that they are impossible saves a lot.

{tidak belum} does not exist. Use {belum} or {tidak sudah}.
{bukan tidak} does not exist. The one that exists is {tidak bukan}, which is the opposite: "certainly is".
{tidak bukan} means "certainly is". {Ini tidak bukan benar} "this is certainly true".
{jangan tidak} is redundant. {Jangan tidak datang} has the sense of "do not fail to come", and is almost never what you want; to forbid coming, write {jangan datang}.

And there is what to say instead. For a prohibition that asks for attention rather than denying an action, the form is {jangan lupa}: {Jangan lupa menggosok gigi} "do not forget to brush your teeth", which forbids an action rather than negating it.

A negative interrogative, "is it not true that he came?", is made with {bukan} and not the way Portuguese makes it. {Bukannya dia yang datang?} "was it not he who came?", and the expected answer is {benar} "it is" or {bukan} "it is not". Portuguese "isn't it...?" becomes {Bukannya...} here, with {bukan} in front.

## Janganlah kamu cemas tentang hari esok

{Matthew 6:34} is the passage where the prohibitive appears in its pure state: {Janganlah kamu cemas tentang hari esok}. The {janganlah} is the prohibitive with an emphatic {lah}, and {cemas} is a stative verb without {ada}, working like an adjective that describes a state of the person speaking.

Notice what the verse does not do: it does not say {tidak cemas}, which would be a denied statement, but {janganlah kamu cemas}, which is an order about the conduct of the listener. The Greek uses the negative imperative, and Indonesian does too, because it is the only thing that makes sense in an exhortation.

The rest of the verse uses {akan} plus a verb, and the text settles the last part with {akan lebih baik}, which is why a translator has to know that {akan} is not a tense but an expectation about what is going to happen.

And the clause just before it, {Janganlah kamu cemas tentang hidup}, has the same construction. Two prohibitions, two {janganlah}, and not one ordinary negation on the way. A reader who knows the system reads both sentences without effort; one who does not looks for the word "not" and does not find it.`),
  vocab: [
    V('tidak', 'tidak', 'not (verb)'),
    V('bukan', 'bukan', 'not (copula, noun)'),
    V('jangan', 'jangan', 'do not (prohibition)'),
    V('belum', 'belum', 'not yet'),
    V('sudah', 'sudah', 'already'),
    V('akan', 'akan', 'will'),
    V('masih', 'masih', 'still'),
    V('juga', 'juga', 'also'),
    V('pun', 'pun', 'even'),
    V('cemas', 'cemas', 'to worry'),
    V('hari esok', 'hari esok', 'the next day, tomorrow'),
    V('hidup', 'hidup', 'life, to live'),
    V('lupa', 'lupa', 'to forget'),
    V('banyak', 'banyak', 'many'),
    V('sulit', 'sulit', 'difficult'),
    V('benar', 'benar', 'true'),
    V('bukan', 'bukan', 'not (in a question)'),
    V('datang', 'datang', 'to come'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tidak} negates a verb or predicate and comes before it; {bukan} negates a noun or copula; {jangan} negates an order.',
      ),
    },
    {
      n: '2',
      text: T(
        '{tidak} also negates an adverbialised adjective: {tidak banyak}, {tidak sulit}, {tidak lama}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{belum} answers {sudah} and never combines with {tidak}: {tidak belum datang} is wrong.',
      ),
    },
    {
      n: '4',
      text: T(
        'The answer to {belum datang} is {sudah datang}, and the paired question is {sudah?}.',
      ),
    },
    { n: '5', text: T('A negative interrogative uses {bukannya} and expects {benar} or {bukan}.') },
  ],
  notes: [
    {
      label: T('Why one "not" is not enough'),
      text: T(
        'Indonesian negation is split because Portuguese puts "not" in three positions and Indonesian has to choose. A reader translating from Portuguese writes {tidak buku} where the text has {bukan buku}, and the difference is not stylistic: one denies existence, the other denies identity.',
      ),
    },
    {
      label: T('The force of juga and pun'),
      text: T(
        '{juga} adds "still" to the negation and {pun} adds "even". {Belum juga} and {belum pun} are stronger than {belum}, and the difference shows up above all in Biblical text, where a narrative of repeated waiting depends on it.',
      ),
    },
  ],
  examples: [
    { text: 'Dia tidak datang.', gloss: T('He does not come.') },
    { text: 'Ini bukan buku.', gloss: T('This is not a book.') },
    { text: 'Jangan datang.', gloss: T('Do not come.') },
    { text: 'Tidak banyak orang datang.', gloss: T('Not many people came.') },
    { text: 'Ini tidak sulit.', gloss: T('This is not difficult.') },
    { text: 'Dia belum datang.', gloss: T('He has not come yet.') },
    { text: 'Sudah?', gloss: T('Already?') },
    { text: 'Dia masih belum datang.', gloss: T('He still has not come.') },
    { text: 'Dia belum juga datang.', gloss: T('He still has not come even now.') },
    { text: 'Bukannya dia yang datang?', gloss: T('Was it not he who came?') },
  ],
  tables: [
    {
      caption: T('As três negativas e o que negam'),
      head: ['Palavra', 'Alvo', 'Exemplo', 'Leia como'],
      rows: [
        ['tidak', 'verbo, predicado', 'Dia tidak datang.', 'ele não vem'],
        ['tidak', 'adjetivo adverbial', 'Tidak sulit.', 'não é difícil'],
        ['bukan', 'cópula, nome', 'Ini bukan buku.', 'isto não é um livro'],
        ['bukan', 'sujeito', 'Bukan saya yang tulis.', 'não fui eu que escrevi'],
        ['jangan', 'ordem', 'Jangan datang.', 'não venha'],
        ['jangan', 'hábito', 'Jangan mencuri.', 'não roube'],
        ['belum', 'ação até agora', 'Dia belum datang.', 'ainda não chegou'],
      ],
    },
    {
      caption: T('A série de três'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['belum', 'já aconteceu?', 'Dia belum datang.', 'ainda não chegou'],
        ['sudah', 'já aconteceu?', 'Dia sudah datang.', 'já chegou'],
        ['akan', 'vai acontecer?', 'Dia akan datang.', 'virá'],
        ['masih belum', 'ainda por quê?', 'Dia masih belum datang.', 'ainda não chegou'],
        ['sudah?', 'qual das duas?', 'Sudah?', 'já?'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct negation of "this is not a book"?'),
    options: [T('Ini bukan buku'), T('Ini tidak buku'), T('Ini jangan buku'), T('Ini belum buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in: he has not come yet = Dia ___ datang.'),
      answer: 'belum',
      hint: T('The word that answers {sudah}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which of these sentences is correct?'),
      options: [
        T('Dia tidak belum datang'),
        T('Dia belum datang'),
        T('Dia belum tidak datang'),
        T('Dia bukan belum datang'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the negation to its target'),
      pairs: [
        { a: T('{tidak}'), b: T('verb') },
        { a: T('{bukan}'), b: T('noun') },
        { a: T('{jangan}'), b: T('order') },
        { a: T('{belum}'), b: T('up to now') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
