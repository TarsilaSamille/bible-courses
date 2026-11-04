import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Kanji'),
  title: T('The same reading and the same writing: how a kanji has two voices'),
  subtitle: T(
    'Every ideograph has a Sino-Japanese reading and a native one, and it is the word — not the drawing — that decides which of the two is heard',
  ),
  body: C(`
## One ideograph, two voices

Every kanji has two readings, and both are equally true. The **on** (on'yomi) is the Sino-Japanese reading: the ideograph came into Japan together with the texts of China, and it is read with the sound it had in Mandarin. The **kun** (kun'yomi) is the native reading, the sound the same drawing already had in Japan before the importation. Both live in the same character, and neither of them is the wrong one.

{生} is the cleanest example there is. In on it is {sei}, or *shō* when the tone shifts because of the neighbouring ideograph, and that is what shows up in {gakusei} "student", where both ideographs are on. In kun it is {ikiru}, and that is what shows up in the verb "to live". The ideograph has not gone anywhere: the word has changed, and the word chooses which of the two voices to sound.

That is why two ideographs which together form one word can each be read in their own way, and it is why the same written ideograph can sound different depending on the word it is helping to build. A beginner treats this as a defect of the system: the same character ought to sound the same every time. It ought not to, and it is precisely because it does not sound the same every time that the pair is still alive after a thousand years.

## The pocket rule: a compound asks for on, a verb ends in kun

The working rule fits in one sentence. When two ideographs form a compound noun, both tend to be on; when there is a verb, the last ideograph tends to be kun, because it is the one carrying the inflection.

On the on side: {gakusei}, {kyō} "today", {sensei} "teacher". All three are compounds and all three are on throughout. {kyō} has a single reading precisely because there is no verb inside it, and words made only of ideographs are the easiest ones to guess. On the kun side: an inflected verb tends to be kun in its last ideograph, with the tip in kana.

The case that exposes the whole system is {ikizokuru}, "to survive": the first ideograph is kun, the same {ikiru} "to live", and the second is on. Dictionary entries mark that second one with an asterisk, and the asterisk is the one thing a reader has to learn to look for: it warns that this reading exists only there, inside that word. The same happens in {tegami}, "letter", with the hand in kun and the paper in on.

## The family of the kun reading, and the okurigana

A kun reading is almost never a single one. The ideograph {生} has four different verbs in its native reading: {ikiru} "to live", {umoru} "to be born", {hayasu} "to raise, to grow" and {nou} "to cultivate". They are distinct verbs, with distinct subjects and tenses, and the only thing they share is the drawing. The list belonging to an ideograph is a dictionary entry made of verbs that have nothing in common outside it, and context is what chooses.

The other side of the same coin is the {okurigana}: the kana that accompany the ideograph and carry the inflection. {kaita}, "wrote", is the ideograph {kaku}, "to write" plus the ending, and the ending goes in kana even when everything around it is an ideograph. The division of labour is the cleanest a language has: the ideograph keeps the meaning and the kana keeps the conjugation. The kanji is the noun of the action, and the kana is the verb.

The account closes with what inflection showed: it lives at the tip of the word, and the tip is always kana. When inflection shows up, it is written in kana. That rule is what makes {kaita} exist in two pieces and {gakusei} exist in one.

## What the Bible does with the two voices

The Japanese Bible translation follows a pattern the reader does not have to work out: **kanji for the nouns, kana for the verbs**. And that is why the on reading dominates the text: the nouns are the ones that arrived ready-made from China, name and sound together, and the verbs that stayed in kana are the ones carrying the inflection.

The verbs of God are almost all on, and the on reading is the one that sounds older, more written: "to save" is *sukū*, "to redeem" is *aganau*, both read on. "To create" is the honest exception: *tsukuru* is kun. Three verbs, two reading systems, none of them memorised, all of them learned in the vocabulary, like everything else.

The ideograph of height is the most beautiful example of all. {noboru} is the kun: "to go up", the everyday verb, the one said of stairs and of mountains. {tō} is the on: the "high" of the older titles, the "Most High Lord" of the old translations, when the divine name was written with the drawing of height and not with the one of person. The two live together without any problem, one in the common verb and the other in the title.

And last, the scale, because the reader needs to know where they are standing: there are roughly 13,000 kanji in use in Japanese today, and the {jōyō} set gathers 2,100 of them. It is the {jōyō} that is learned at school and it is what a reader meets first. Nobody is going to learn 13,000: everybody learns the ones that turn up, and one ideograph's list is short beside the whole list.
`),
  vocab: [
    V('sei', '生', 'Sino-Japanese reading of the ideograph of birth: life, birth (sei)'),
    V('ikiru', '生', 'native reading of the same ideograph: to live, to be alive (ikiru)'),
    V('gakusei', '学生', 'student (gakusei) — both ideographs in the on reading'),
    V(
      'sensei',
      '先生',
      'teacher, master (sensei) — two on; the kun of the ideograph stays alongside',
    ),
    V('kyō', '今日', 'today (kyō) — a single reading, because there is no verb inside'),
    V('umoru', '生', 'kun: to be born (umoru)'),
    V('hayasu', '生', 'kun: to raise, to grow, to bring up (hayasu)'),
    V('nou', '生', 'kun: to cultivate (nou)'),
    V('ikizokuru', '生き残る', 'to survive (ikizokuru) — kun and on in the same word'),
    V('tegami', '手紙', 'letter (tegami) — kun and on in the same word'),
    V('kaku', '書', 'kun: to write (kaku)'),
    V('kaita', '書く', 'wrote, written (kaita) — the ideograph plus the okurigana'),
    V(
      'okurigana',
      '送り仮名',
      'kana that accompanies the ideograph and carries the inflection (okurigana)',
    ),
    V('tō', '上', 'on: high, the Most High of the archaic titles (tō)'),
    V('noboru', '上', 'kun: to go up (noboru)'),
    V('jōyō', '常用漢字', 'the official set of kanji in common use (jōyō)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every kanji has two readings: the Sino-Japanese **on**, which arrived with the texts of China, and the **kun**, native, which the drawing already had here. Neither is the wrong one.',
      ),
    },
    {
      n: '2',
      text: T(
        'A compound noun of two ideographs tends to have both in **on** ({gakusei}, {kyō}, {sensei}); a word with a verb usually has the last one in **kun**, because it is the one carrying the inflection.',
      ),
    },
    {
      n: '3',
      text: T(
        'A kun reading is almost never single: {ikiru}, {umoru}, {hayasu} and {nou} are four different verbs of one ideograph, and context picks which one is meant.',
      ),
    },
    {
      n: '4',
      text: T(
        'Inflection is written in kana even when the rest is kanji: {kaita} is the ideograph {kaku} plus the ending. This is lesson 7 applied — the tip of the verb is always kana.',
      ),
    },
    {
      n: '5',
      text: T(
        'The same written ideograph can sound differently depending on the word. An asterisk in an entry means that reading exists only inside that word.',
      ),
    },
  ],
  notes: [
    {
      label: T('On and kun inside one word'),
      text: T(
        'The two systems sometimes live side by side inside a single word, and those are the cases entries mark. {ikizokuru} joins the kun of {ikiru} to the on of the next ideograph; {tegami} does the same with hand and paper. The asterisk exists to say "this one only".',
      ),
    },
    {
      label: T('The on reading is neither an error nor a foreign reading'),
      text: T(
        'The on reading is the one an ideograph carries when it is written in a text composed in Chinese, and that is how it entered speech: old Japanese also composed words out of Chinese characters. The two systems are a loan and a native usage living together — and they have lived together for a thousand years, which only happens when both are useful.',
      ),
    },
  ],
  examples: [
    { text: '学生', gloss: T('sei gakusei — a student; two ideographs, two on') },
    {
      text: '生きる',
      gloss: T('ikiru — to live; the same ideograph as in the example above, now in kun'),
    },
    {
      text: '書いた',
      gloss: T(
        'kaita — I wrote; the ideograph carries the meaning and the kana carries the inflection',
      ),
    },
    { text: '生き残る', gloss: T('ikizokuru — to survive; kun and on in the same word') },
    {
      text: '世界を救う',
      gloss: T('sekai o sukū — saves the world; the noun is an ideograph and the verb is on'),
    },
  ],
  tables: [
    {
      caption: T('The two voices of the same ideograph'),
      head: [
        T('Reading'),
        T('Where it comes from'),
        T('How the same ideograph sounds'),
        T('Where you meet it'),
      ],
      rows: [
        [T('on'), T('from the texts of China'), T('{生} → {sei}'), T('{gakusei}, {kyō}, {sensei}')],
        [T('kun'), T('from old Japanese'), T('{生} → {ikiru}'), T('{ikiru}, {kaita}')],
        [
          T('both'),
          T('they are in the same character'),
          T('{上} → {tō} and {noboru}'),
          T('the word decides which one sounds'),
        ],
      ],
    },
    {
      caption: T('The family of the kun: four verbs, one ideograph'),
      head: [T('Kun'), T('What it means'), T('Where it turns up')],
      rows: [
        [T('{ikiru}'), T('to live, to be alive'), T('the verb "to live"')],
        [T('{umoru}'), T('to be born'), T('the birth of a child')],
        [T('{hayasu}'), T('to raise, to grow'), T('raising a child; letting something grow')],
        [T('{nou}'), T('to cultivate'), T('work in the field')],
      ],
    },
    {
      caption: T('On, kun, or both inside one word'),
      head: [T('Word'), T('Each ideograph'), T('What you get')],
      rows: [
        [T('{kyō}'), T('on + on'), T('a single reading: there is no verb inside')],
        [
          T('{sensei}'),
          T('on + on'),
          T('both on; the kun of the ideograph keeps existing alongside'),
        ],
        [T('{ikizokuru}'), T('kun + on'), T('the asterisk marks the on as exclusive to this word')],
        [T('{tegami}'), T('kun + on'), T('hand in kun and paper in on, in the same word')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {gakusei}, what are the two readings?'),
    options: [
      T('both kun'),
      T('both on'),
      T('the first on and the second kun'),
      T('the first kun and the second on'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "wrote" with the ideograph of the verb to write and its inflection in kana: ____いた',
      ),
      answer: '書',
    },
    {
      kind: 'match',
      prompt: T('Match the reading to what it is'),
      pairs: [
        { a: T('{gakusei}'), b: T('both ideographs in on') },
        { a: T('{ikiru}'), b: T('the ideograph from the example above, read in kun') },
        { a: T('{hayasu}'), b: T('kun: to raise, to grow') },
        { a: T('{nou}'), b: T('kun: to cultivate') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('By the pocket rule, a two-ideograph noun like {sensei} is usually read:'),
      options: [
        T('both kun'),
        T('both on'),
        T('the first kun and the second on'),
        T('the first on and the second kun'),
      ],
      answer: 1,
    },
  ],
};
