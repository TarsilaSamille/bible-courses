import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Reading'),
  title: T('**{kanbun}**: reading a Chinese sentence in Japanese order'),
  subtitle: T(
    'For centuries the Japanese read Chinese texts by sound, and they still read them: the order is the Japanese one, the verb closes each clause, and the marks to the right say which character governs which',
  ),
  body: C(`
## The character as a phoneme

For centuries the Japanese read Chinese texts without speaking the language, and the trick was to treat each character as if it were a letter. The {manyōgana} wrote a syllable by choosing the character that had that sound in the reader's mouth, not the sound the character had in China. Anyone who needed the sound "hana" picked the character for "nose", the same one that is read *bi* in the Sino-Japanese reading today and *hana* in the native one.

And here the lesson on the two readings is the key, not a detail. If a character is going to act as a letter, it has to have a single sound. But the Japanese kanji has two: on and kun. A reader of {manyōgana} had to know both readings in order to turn the drawing into a phoneme, and it was that requirement which fixed the two lists Japanese still uses. The history of {kanbun} begins with the letter: to write a language that was not your own, Japan had to solve the problem of the character's ambiguity.

## The order is the Japanese one

The most famous sentence is {ten} {ichi} {chi} {ni}. In China it is read as a dry enumeration: heaven, one; earth, two, two phrases with no verb at all. In {kanbun} it becomes two sentences, and they are **Japanese** sentences: one person, heaven one; two people, earth two. The name of the place comes before the numeral, the numeral appears marked by the particle that says where, and the verb closes the clause. It is the whole of the syntax lesson applied to a sentence that was never Japanese.

And this is where {kanbun} really separates from Chinese. Chinese puts the verb in the middle of the phrase and the object after it; Japanese puts the verb last and the object before it. There is no "correct" reading of the pair of characters: there are two, and each language makes its own. That is why moving from {kanbun} to ordinary Japanese is not a matter of looking up word by word; it is rewriting the sentence in the order of the language that will read it.

## The marks that are not part of the word

A printed {kanbun} text seems to have no punctuation, and in fact it has none. In its place the Japanese reader wrote the {konfutsugaki} over the text: the reading marks, small drawings beside the characters that say how to read them. They come in two families, and both have to be known before the first word.

The first are the {kaeriten}, which say **which character governs which**, and they are not words: they are punctuation marks named after characters. The {jōten} makes the character on the left govern the one on the right; the {geten} makes the one on the right govern the one on the left. When the governor reaches more than one character, it counts with numbered marks: the {kazu-ten} covers two, and there are up to five, because in {kanbun} a verb rarely governs more than that. The second family is the {okurigana}, the kana that accompanies the verb's character and carries the inflection, the same division of labour as always, with the meaning in the character and the conjugation in the kana.

Anyone who does not know these marks reads the pair backwards, and the error is silent: the text still looks Chinese, it just means something else. It is the same risk as a Latin quotation with no punctuation, and the solution is the same both times: the mark does not memorise the text, it memorises the reading.

## The verb stops at the end, and what is left of {kanbun}

The position of the verb in {kanbun} is doubled, and the doubling comes from the lesson on clause inflection. The verb goes at the end of each clause, and a clause in {kanbun} is a sentence: it has its own verb and can be read on its own. So in a passage with three clauses there are three verbs, one at the end of each, and two of them in the middle of the passage. The boundary between clauses is marked by the verb, exactly as in ordinary Japanese; anyone who looks for the verb at the end of the paragraph is wrong twice over.

Proper-name characters fill the place of the subject, and they are names: people, texts, places. They come before the verb, they take no counter and no particle, and it is that fixed position that makes a {kanbun} passage read as a list of names and actions. That is why Confucian poetry and Buddhist texts are so short: every clause is a short unit and the rest is names. The three Chinese classics of the Japanese school curriculum, {daigaku}, {kōkyū} and {chūyaku}, are read exactly this way, and anyone who studied in Japan read them before reading any novel in kana.

In {kanbun} nobody has held a conversation for centuries: the language survived as **register**, and it is the formal register of Japan, public documents, newspaper editorials, draft laws, the prose of committees. A text written in {kanbun} is a text speaking with authority. That is why it lasted: when Japan needed to write for the world, in the nineteenth century, it already had at hand a written style of high precision, and what it gave up was reading Confucius in order to start reading the Chinese businessman.

The final hook is biblical, and it is worth drawing for the sake of symmetry. The Japanese Bible translation is not {kanbun}: it is ordinary Japanese with kanji. But Luke and the early church wrote Greek, and the method of a Japanese man reading Greek was exactly the method of {kanbun}, fitting the ancient language to the order of his own instead of translating word for word. The first Japanese translation of the New Testament, in 1873, is the first example of it. And the parallel is Latin in Europe: a dead language read in the order of another, which turned into style instead of pretension.
`),
  vocab: [
    V('kanbun', '漢文', 'reading Chinese texts in Japanese order (kanbun)'),
    V(
      'manyōgana',
      '万葉仮名',
      'using the character for its Japanese sound rather than its Chinese one (manyōgana)',
    ),
    V(
      'konfutsugaki',
      '訓点',
      'the marks the reader writes beside the text, saying how to read it (konfutsugaki)',
    ),
    V('kaeriten', '返り点', 'the marks that say which character governs which (kaeriten)'),
    V('jōten', '上点', 'the mark that rises: the left character governs the right one (jōten)'),
    V('geten', '下点', 'the mark that falls: the right character governs the left one (geten)'),
    V(
      'kazu-ten',
      '三点',
      'the numbered marks, one to five, counting how far the governor reaches (kazu-ten)',
    ),
    V(
      'okurigana',
      '送り仮名',
      'the kana that accompanies the character and carries the inflection (okurigana)',
    ),
    V('ten', '天', 'heaven, the firmament (ten)'),
    V('chi', '地', 'earth, the ground (chi)'),
    V('ichi', '一', 'one (ichi)'),
    V('ni', '二', 'two (ni)'),
    V(
      'daigaku',
      '大学',
      'the Great Learning, one of the three Chinese classics of the Japanese curriculum (daigaku)',
    ),
    V('kōkyū', '孝経', 'the Classic of Filial Piety, one of the three classics (kōkyū)'),
    V('chūyaku', '中庸', 'the Doctrine of the Mean, the third of the three classics (chūyaku)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Reading {kanbun} is reading a Chinese text in Japanese order: the same characters, a different reading order.',
      ),
    },
    {
      n: '2',
      text: T(
        'In {manyōgana} the character acted as a letter, and to become a letter it had to have a single sound — which meant knowing both readings of lesson 12, on and kun.',
      ),
    },
    {
      n: '3',
      text: T(
        'The verb goes at the end of each clause, once per clause: a passage of three clauses has three verbs, and two of them sit in the middle.',
      ),
    },
    {
      n: '4',
      text: T(
        'The marks {kaeriten} and {okurigana} are reading marks, not parts of the word: the {jōten} makes the left character govern the right one, the {geten} the reverse, and the {kazu-ten} counts how far the governor reaches.',
      ),
    },
    {
      n: '5',
      text: T(
        'A proper-name character is a name: it comes before the verb and takes neither counter nor particle.',
      ),
    },
  ],
  notes: [
    {
      label: T('How {manyōgana} built the list of names'),
      text: T(
        'Every character used as a phoneme acquired a name of its own in the readers\' heads — "the one that sounds hana", "the one that sounds ro" — and Japan built the names of things on top of such a list. It is the same list as in lesson 12; there it is called reading, and every line has two voices in it.',
      ),
    },
    {
      label: T('Latin in Europe is the same case'),
      text: T(
        'European scholars read Latin for centuries by rearranging it into the order of their own language, and Portuguese is the result. The Japanese version of the same phenomenon is {kanbun}, and neither of them is translation: both are reading.',
      ),
    },
  ],
  examples: [
    {
      text: '天一人',
      gloss: T(
        'hito, ten ni ichi — one person, in heaven one; the character for heaven governs the numeral that comes to its right',
      ),
    },
    {
      text: '地二人',
      gloss: T(
        'hito, chi ni ni — two people, on earth two; the same mark inverted, with the right-hand character in command',
      ),
    },
    {
      text: '學而時習之',
      gloss: T(
        'gaku, shite ji shishisu — to learn and to practise it in season; the verb comes in the middle and at the end, and the kana mark the inflection',
      ),
    },
    {
      text: '大學之道',
      gloss: T(
        'daigaku no michi — the way of the Great Learning; the first two characters are the proper name of a text',
      ),
    },
    {
      text: '溫故而知新',
      gloss: T(
        'on kyū o shite shinjitsu — knowing the old and learning the new; three verbs, three clauses, each with its own',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same sentence in three orders'),
      head: [T('Reading'), T('Where the numeral sits'), T('Where the verb sits')],
      rows: [
        [
          T('Chinese'),
          T('right after the name, and the sentence is an enumeration'),
          T('there is no verb: the phrase ends at the numeral'),
        ],
        [
          T('{kanbun}'),
          T('after the name, marked by the particle of place'),
          T('at the end of each clause, as in Japanese'),
        ],
        [T('Portuguese'), T('after the name'), T('in the middle: "heaven has one person"')],
      ],
    },
    {
      caption: T('The reading marks and what each one commands'),
      head: [T('Mark'), T('Where it sits'), T('What it says')],
      rows: [
        [
          T('{jōten}'),
          T('to the left of the pair, below the line'),
          T('the character on the left governs the one on the right'),
        ],
        [
          T('{geten}'),
          T('to the right of the pair, below the line'),
          T('the character on the right governs the one on the left'),
        ],
        [
          T('{kazu-ten}'),
          T('between the characters, counting from one to five'),
          T("how far the marked character's government reaches"),
        ],
        [
          T('{okurigana}'),
          T("right after the verb's character"),
          T('which inflection that verb takes in this reading'),
        ],
      ],
    },
    {
      caption: T('Where the verb stops in {kanbun}'),
      head: [T('Shape of the passage'), T('Where the verb is'), T('Why')],
      rows: [
        [
          T('a single clause'),
          T('at the end'),
          T('every clause is a sentence, and the sentence has its verb last'),
        ],
        [
          T('two or more clauses'),
          T('at the end of each, and in the middle of the passage'),
          T('the boundary between them is marked by the verb, as in lesson 15'),
        ],
        [
          T('proper names'),
          T('before the verb'),
          T('they are who acts, not a common noun nor a grammatical subject'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In the Japanese reading of "one person, heaven one", which character governs the numeral?',
    ),
    options: [
      T('the character for heaven, on the left, by {jōten}'),
      T('the numeral, because it comes after'),
      T('the character for heaven, on the left, by {geten}'),
      T('neither: the two characters are equivalent'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'In the reading of "father and son", the mark that says the character on the right governs the one on the left is called ____',
      ),
      answer: 'geten',
    },
    {
      kind: 'match',
      prompt: T('Match the mark to what it does'),
      pairs: [
        { a: T('{jōten}'), b: T('the left character governs the right one') },
        { a: T('{geten}'), b: T('the right character governs the left one') },
        { a: T('{kazu-ten}'), b: T('the government reaches more than one character') },
        { a: T('{okurigana}'), b: T('the inflection of the verb, written in kana') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Why are Confucian poems and Buddhist texts in {kanbun} so short?'),
      options: [
        T('because each clause is a short sentence and nearly everything is a name'),
        T('because Chinese writing has fewer characters than Japanese writing'),
        T('because they were written for children'),
        T('because the text was read aloud by several people at once'),
      ],
      answer: 0,
    },
  ],
};
