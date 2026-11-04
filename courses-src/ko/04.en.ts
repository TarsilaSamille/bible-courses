import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Noun'),
  title: T('Counters: the "one" that Portuguese leaves out'),
  subtitle: T(
    'After a numeral Korean forces a counter, and the noun comes last: numeral, counter, noun',
  ),
  body: C(`## The "one" that Portuguese drops

In Portuguese, "I have a book" has two pieces that are barely words at all: the "I" and the "a". The "a" is an indefinite article, and an article is a word that evaporates. Nobody translates it, nobody asks about it, nobody notices it was there. In Korean {hann} is an ordinary word, with sound and with function, and after a numeral the language demands a second word that Portuguese makes do without: the counter. So "a book" is not {seojeul}, and it is not {hann} {seojeul}. It is {hann} {gwon} {seojeul}, and both of the pieces in the middle are obligatory.

Side by side, you see what is at stake. On one side, I have a book: four words, two of them discardable. On the other, {je chaegi han gwon-i itda}: the same information, with a numeral, with a counter and with a subject particle, none of it removable. Whoever translates word for word from Portuguese writes {hann} {seojeul}, the sentence everyone starts by saying and nobody quite understands: the {gwon} has gone, and with it the information about the shape of the thing.

This holds for every numeral, not only for the "one". {hann} {myeong}, one person; {hann} {cha}, one sheet; {hann} {gwon} {seojeul}, one book; {hann} {dae}, one machine. The numeral is always {hann} when it is one, and the counter is always the second word. The rule is mechanical and has no exception: a numeral with no counter is a wrong sentence.

## The order: numeral, counter, noun

The order is numeral, counter, noun, and the noun comes last. Three books is sam, {gwon}, {seojeul}: three plus counter plus book. It is not "book three", and it is not "three book counter". The noun closes the group, exactly as the first lesson showed for the whole sentence: the order is object, verb, subject, and the object behaves like a thing too, with its own detail at the end.

And that is why the "of" of possession goes BEFORE. "My book" is {ui} {seojeul}: of, book. The possessor comes first, as in Japanese, and as in most of the languages this course compares. Here it becomes specific to numerals: {ui} {seojeul}, my book, and sam {gwon} {ui} {seojeul}, three of my books. The numeral and the counter open the group, the {ui} enters in the middle, the noun closes it. Getting this wrong is not a matter of style: {seojeul} {ui} is not a thing that exists in Korean.

**The biblical hook is John 6:9**: five loaves and two fish. In Korean, {ppang dase gwaeo murgogi du mari}, bread, five, and fish, two, with a counter before each noun and no article anywhere. Portuguese hands over the two numerals and drops the two counters, because that is what articles are for; Korean cannot drop them: each of the five loaves is counted, each of the two fish too, and the whole verse fits into two instances of "numeral, counter, noun".

## The counter describes the kind of object

The counter does not say the number; the numeral says the number. The counter says the KIND of thing being counted, and that is why every noun has its own. {gwon} counts what is a book, a rolled sheet of paper, a scroll: the thing long and long on its side. {myeong} counts people. {cha} counts sheets and what is flat and thin: paper, a plate, a disc. {dae} counts machines and cars, and also the things that have legs. {byeol} counts objects of different kinds, the "this and that" of counting. And {jae} is the general counter: the thing with no definite shape, the "thing" of Korean.

The logic serves you better than a memorised list. Whoever remembers that {dae} began as "a platform, a machine" gets cars right without thinking. And the two most unexpected counters come from the same memory: {myeong} and {dae} are counters of feet. Historically you counted the domesticated things, and you counted them by their feet; that is why {dae} stuck with what has legs and {myeong} stuck with people, who also walk. An animal does not take {myeong}; it takes the animal counter, mari for the dog and the fish, and the counter for fruit and for single pieces is another one, which is neither of the two.

Keep the counter by its shape: {cha} is the flat sheet, {gwon} is the roll of paper, {dae} is the machine. Whoever reasons in images slips less than whoever memorised a list, because no list has the counter of the object that turns up for the first time in the biblical text.

## The pronunciation shifts; some, many, all

There is a technical detail that frightens the beginner: the number changes the pronunciation of the word that follows it. In Korean this happens to the counter. From one to nine the counter has one pronunciation; from ten on, it has another. Three books is sam {gwon}; thirteen books is sipsam {gwon}, the counter is written the same way and pronounced differently. And the numeral one is the exception: {hann}, which keeps the short pronunciation even where the rule would hand it the other one.

The origin of that is a leftover from spoken counting. Big numbers are not always said five by five; they are said three by three, and the "and three" glues itself to whatever came before. What was a number turns into a word, and the word carries the mark of the group it belongs to. The writing does not change, and that is why reading Korean in silence gets the pronunciation of almost everything wrong: the printed text never shows which pronunciation of the counter to use.

"Some" is {myeochi} plus a counter, with no numeral: {myeochi} {gwon} {seojeul}, some books. "Many" is {man} plus a counter: {man} {gwon} {seojeul}. "All" is {jeong} or {dae} plus the noun: {jeong} {seojeul}, all the books. Notice that "some" is not a numeral at all: it is a word that stands in the numeral's place, and the counter stays obligatory after it.
`),
  vocab: [
    V('hann', '한', 'one; the Korean numeral, always with a final consonant (hann)'),
    V('jae', '개', 'general counter for things and objects (jae)'),
    V('myeong', '명', 'counter for people (myeong)'),
    V('cha', '차', 'counter for sheets, paper and discs (cha)'),
    V('gwon', '권', 'counter for books and rolls of paper (gwon)'),
    V('dae', '대', 'counter for machines, cars and things with legs (dae)'),
    V('byeol', '별', 'counter for objects of different kinds (byeol)'),
    V('ui', '의', 'of; possessive, and it goes before the noun (ui)'),
    V('myeochi', '몇', 'some; some, with no numeral (myeochi)'),
    V('man', '만', 'many; only (man)'),
    V('jeong', '전', 'all; all of (jeong)'),
    V('seojeul', '책', 'book (seojeul)'),
    V('dase', '다섯', 'five (dase)'),
    V('ppang', '빵', 'bread; the bread of the verse in John 6:9 (ppang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'After a numeral the counter is obligatory: "a book" is {hann} + {gwon} + {seojeul}. The "a" of Portuguese is an article and disappears; in Korean it is a word.',
      ),
    },
    {
      n: '2',
      text: T(
        'The order is numeral, counter, noun — the noun last, as in every Korean sentence: sam {gwon} {seojeul} is three books.',
      ),
    },
    {
      n: '3',
      text: T(
        'The counter describes the kind of object, not the quantity: {myeong} for people, {cha} for sheets, {gwon} for books, {dae} for machines and things with legs, {byeol} for objects of different kinds, {jae} for things in general.',
      ),
    },
    {
      n: '4',
      text: T(
        'The possessive {ui} goes before the noun: {ui} {seojeul} is "my book", and sam {gwon} {ui} {seojeul} is "three of my books".',
      ),
    },
    {
      n: '5',
      text: T(
        'From 1 to 9 the counter has one pronunciation and from 10 on another; the 1 is the exception. The writing does not change. "Some" is {myeochi} + counter, "many" is {man} + counter, "all" is {jeong} + noun.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {ui} comes first, the noun closes'),
      text: T(
        'The "of" of possession opens the noun group and the noun closes it. So the beginner writes {ui} {seojeul} correctly and writes {seojeul} {ui} when trying to be careful about that "of". After a numeral nothing changes: {seojeul} {ui} does not exist either.',
      ),
    },
    {
      label: T('Counters born from feet'),
      text: T(
        '{myeong}, of people, and {dae}, of things with legs, share one origin: you counted the domesticated things, and you counted them by their feet. That is why {dae} counts cars and machines today, and {myeong} counts passengers and people.',
      ),
    },
  ],
  examples: [
    {
      text: '책 한 권이 있어요',
      gloss: T('chaek han gwon-i isseoyo — there is one book: numeral, counter, noun'),
    },
    {
      text: '제 책이 두 권 있어요',
      gloss: T(
        'je chaegi du gwon isseoyo — I have two books: the numeral changed, the counter did not',
      ),
    },
    {
      text: '빵 다섯 개와 물고기 두 마리',
      gloss: T(
        'ppang dase gwaeo murgogi du mari — five loaves and two fish (John 6:9): numeral, counter, noun twice over',
      ),
    },
    {
      text: '몇 권이 있어요',
      gloss: T(
        'myeochi gwon-i isseoyo — there are some books: no numeral, and the counter is still there',
      ),
    },
  ],
  tables: [
    {
      caption: T('The commonest counters and what each one counts'),
      head: [T('Counter'), T('Romanisation'), T('What it counts'), T('The kind of object')],
      rows: [
        [
          T('{jae}'),
          T('jae'),
          T('things in general, with no definite shape'),
          T('the "thing" of Korean'),
        ],
        [T('{myeong}'), T('myeong'), T('people'), T('what walks on two legs')],
        [T('{cha}'), T('cha'), T('sheets, paper, plates, discs'), T('flat and thin, a flat plate')],
        [T('{gwon}'), T('gwon'), T('books, rolls of paper'), T('long and long on its side')],
        [
          T('{dae}'),
          T('dae'),
          T('machines, cars, things with legs'),
          T('the platform, what stands on'),
        ],
        [
          T('{byeol}'),
          T('byeol'),
          T('objects of different kinds'),
          T('the "this and that" of counting'),
        ],
      ],
    },
    {
      caption: T('The pronunciation of the counter shifts with the number; the writing does not'),
      head: [T('Numeral'), T('What happens to the counter'), T('Example')],
      rows: [
        [T('from 1 to 9'), T('one pronunciation, the simplest one'), T('sam gwon — three books')],
        [
          T('from 10 on'),
          T('another pronunciation, the same writing'),
          T('sipsam gwon — thirteen books'),
        ],
        [
          T('the numeral 1'),
          T('exception: it keeps the short pronunciation'),
          T('han gwon — one book'),
        ],
        [T('no numeral'), T('the simplest form, without a number'), T('myeochi gwon — some books')],
      ],
    },
    {
      caption: T('Numeral, counter, noun — and the possessive {ui} before'),
      head: [T('What is said'), T('Piece by piece in Korean'), T('What the piece does')],
      rows: [
        [T('a book'), T('{hann} + {gwon} + {seojeul}'), T('the "one" is a word, not an article')],
        [T('three books'), T('sam + {gwon} + {seojeul}'), T('numeral, counter, noun')],
        [T('my book'), T('{ui} + {seojeul}'), T('the possessor comes first')],
        [
          T('three of my books'),
          T('sam + {gwon} + {ui} + {seojeul}'),
          T('the {ui} enters after the counter'),
        ],
        [
          T('{seojeul} {ui}'),
          T('does not exist in Korean'),
          T('possessor after the noun is a mistake'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Korean, "a book" is:'),
    options: [
      T('numeral, counter and noun'),
      T('just the noun, as in Portuguese'),
      T('numeral and noun, with no counter'),
      T('counter and noun, with no numeral'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "three books" with the book counter: sam ____ seojeul'),
      answer: '권',
    },
    {
      kind: 'match',
      prompt: T('Match the counter to the kind of object it counts'),
      pairs: [
        { a: T('{gwon}'), b: T('books and rolls of paper') },
        { a: T('{myeong}'), b: T('people') },
        { a: T('{cha}'), b: T('sheets, paper and discs') },
        { a: T('{byeol}'), b: T('objects of different kinds') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How do you say "some books", with no numeral?'),
      options: [
        T('{myeochi} + {gwon}'),
        T('{hann} + {gwon}'),
        T('{man} + {seojeul}'),
        T('{jeong} + {gwon}'),
      ],
      answer: 0,
    },
  ],
};
