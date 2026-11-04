import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verb'),
  title: T('The verb conjugates to mark the end of its own clause'),
  subtitle: T(
    'When a sentence has more than one clause, the Japanese verb conjugates in the middle of it and everything after it falls back to the base form — this is what makes the text look truncated',
  ),
  body: C(`
## The verb goes to the end of its clause

The verb conjugates **exactly when there is another clause behind it**. Being the last of the sentence, it stays plain.

Portuguese puts the verb at the end of the sentence. Japanese puts it at the end of the clause, and that only becomes visible when the sentence has more than one. The shortest case is two nominal clauses: "I go, he stays" is {私は行きます} and {彼はいます}. The first verb conjugates, the second stays plain, and a reader hunting for the verb at the end of the whole sentence finds nothing there.

And the first verb conjugates **precisely** because something follows it. The conjugation is the mark of "my clause ends here": {行きます} says "go" and is no longer the last word of the sentence, so it climbs into the polite series. If the sentence ended there, {私は行きます} would read as a single clause, a plain verb, with nothing after it.

## The honourable exception: same subject, conjugation optional

There is one case in which the conjugation may be left out: when the clause that follows has the same subject, or no subject at all. "I eat an apple and I eat vegetables" may be {りんごを食べ、野菜も食べる}, with {食べる} twice and everything plain. Compare it with {彼も食べます}: the subject changes there, and the conjugation stops being optional.

What deserves attention is how much work this exception covers, because it is much larger than the main rule suggests. The conjugation marks a boundary, and a boundary only exists when there are two pieces that have to be kept apart. In the commonest case of written Japanese those two pieces are the subject and the rest: in "I go, he stays" the conjugation of the first verb is what stops the reader from taking "go, he" for a single phrase and "stays" for the verb of the whole sentence. Take the conjugation away and the sentence may still be readable thanks to context, but Japanese loses the mark that the subject changed, and the reader has to guess it.

There is a middle case as well, and it is what confuses beginners most: when the second clause brings a new subject but an elliptical one, almost always unstated, the conjugation of the first verb is what separates the two subjects. In {りんごを食べ、野菜も食べる} the pronoun appears once and serves both clauses, and the plain form of {食べる} is what says the same subject carries on; if the subject changed, the second clause would be {彼も食べます} and the conjugation of the first verb would be obligatory. The same goes when what comes next is an object: in {本を読む} the {を} makes it clear the sentence did not end at the verb, and the verb may stay plain because no other clause follows it.

And the practical consequence is the one you feel while reading. When the same subject runs through both clauses, Japanese prefers the plain form; when the subjects change, the conjugation is obligatory. Anyone who does not know which of the two cases they are reading gets it wrong in the same proportion, and gets it wrong silently, because one conjugation too many or too few produces no visible error in the sentence.

Notice that this conjugation is neither tense nor mood: it is the marking of a boundary. It answers a structural question, "is my clause over?", and not a question of when. That is why the same polite series that marks tense elsewhere shows up here marking a junction, and why it is so hard to read for anyone who started with verbal tense.

## Verb in the middle: the boundary as a reading cue

A clause can sit in the middle of the sentence. "I, when I got to Tokyo, went to see the teacher" is {東京に着いたとき} plus {先生を見に行った}: the conditional clause of {toki} is a complete clause with a verb of its own, and that is why the main verb conjugates. It is the last one of its clause and not the last one of the sentence. The conjugated verb is a **reading cue**: the moment you see {行きました}, that clause is over and the next one has begun. In Portuguese nothing marks that point; in Japanese the conjugation is the mark.

The other side is worth stating too: the boundary is visible because of the verb, and the verb can sit in the middle when the sentence carries three or four clauses. Anyone hunting for the verb at the end of the sentence reads slowly and gets it wrong; anyone hunting for the boundary reads at the speed of speech and stops exactly where he should.

## The relative noun agrees with the verb

Here is the fine detail. "The book I read" is {私が読んだ本}: the relative noun is {本}, the pronoun {私} is the subject of the relative clause, and that is why the verb is {読んだ}, conjugated, with {が}. What sits inside the relative parentheses is a clause, and {が} is the particle that makes the verb conjugate.

If the relative noun is the subject, the verb stays in the base form: "the man who comes" is {来る人}, with {来る} plain and no particle. The man comes: the relative is the subject, there is no other subject after it, and the conjugation has nothing to mark. The same {読んだ} shows the other side in {本を読んだ人}: "the person who read the book", where the relative is the object and the verb conjugates.

The final hook is the opening of John 1: {初めには言葉があり、言葉は神と共にあった}. The clause "and the Word was" has its verb in the middle of the sentence because it has a clause of its own after it, "and God made it". The boundary shows up in a verse of four words, and a reader who recognises the conjugation reads the verse as two clauses instead of a list.
`),
  vocab: [
    V('iku', '行く', 'to go, to leave (iku)'),
    V('iru', 'いる', 'to be, to stay in a place (iru)'),
    V('nomu', '読む', 'to read (nomu)'),
    V('taberu', '食べる', 'to eat (taberu)'),
    V('hon', '本', 'book (hon)'),
    V('ringo', 'りんご', 'apple (ringo)'),
    V('yasai', '野菜', 'vegetable (yasai)'),
    V('sensei', '先生', 'teacher; master (sensei)'),
    V('Tōkyō', '東京', 'Tokyo (Tōkyō)'),
    V('toki', '時', 'when; time (toki)'),
    V('kami', '神', 'God (kami)'),
    V('kotoba', '言葉', 'word; Word (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Japanese verb goes to the end of its clause, not of the whole sentence: it conjugates in the middle and everything after it falls back to the base form.',
      ),
    },
    {
      n: '2',
      text: T(
        'The verb conjugates exactly when there is another clause behind it; as the last clause, it stays plain.',
      ),
    },
    {
      n: '3',
      text: T(
        'If the following clause has the same subject — or no subject at all — the conjugation may be left out: {りんごを食べ、野菜も食べる} is correct.',
      ),
    },
    {
      n: '4',
      text: T(
        'The conjugation marks the boundary of the clause: seeing it is seeing that another one has begun. It does not mark tense.',
      ),
    },
    {
      n: '5',
      text: T(
        'With a relative noun, the verb conjugates when the relative is the object ({が}) and stays in the base form when the relative is the subject.',
      ),
    },
  ],
  notes: [
    {
      label: T('The conjugation is not tense'),
      text: T(
        'Lesson 8 showed that the Japanese verb does not conjugate to mark the past. Here it does conjugate, and the same polite series shows up — but what it says is "my clause ends here", not "this happened". Same surface, two jobs.',
      ),
    },
    {
      label: T('The relative clause is a hidden clause'),
      text: T(
        'A relative clause is a clause like any other: it has a subject, it has a verb, and it obeys the same boundary rule. The noun it modifies is the topic, {が} is the subject of the relative, and that is why the verb conjugates exactly as it would outside the relative.',
      ),
    },
  ],
  examples: [
    {
      text: '私は行きます、彼はいます',
      gloss: T('watashi wa ikimasu, kare wa imasu — I go, he stays'),
    },
    {
      text: '彼はここにいる',
      gloss: T('kare wa koko ni iru — he is here, and the verb stays plain'),
    },
    {
      text: 'りんごを食べ、野菜も食べる',
      gloss: T(
        'ringo o taberu, yasai mo taberu — I eat an apple and I eat vegetables, with the same subject',
      ),
    },
    {
      text: '東京に着いたとき先生を見に行った',
      gloss: T(
        'Tōkyō ni tsuita toki sensei o mi ni itta — when I got to Tokyo, I went to see the teacher',
      ),
    },
    {
      text: '初めには言葉があり、言葉は神と共にあった',
      gloss: T(
        'hazime ni wa kotoba ga ari, kotoba wa kami to tomo ni atta — in the beginning was the Word, and the Word was with God (John 1:1)',
      ),
    },
  ],
  tables: [
    {
      caption: T('What decides the conjugation of the verb'),
      head: [T('Situation'), T('The verb stays'), T('Example')],
      rows: [
        [
          T('it is the last clause of the sentence'),
          T('plain, base form'),
          T('{彼はいます} — "he stays"'),
        ],
        [
          T('another clause follows, with another subject'),
          T('conjugated'),
          T('{私は行きます} — "I go"'),
        ],
        [
          T('another clause follows, with the same subject'),
          T('may stay plain'),
          T('{りんごを食べ、野菜も食べる} — "I eat an apple, I eat vegetables"'),
        ],
        [
          T('the relative noun is the subject'),
          T('plain, no particle'),
          T('{来る人} — "the person who comes"'),
        ],
        [
          T('the relative noun is the object'),
          T('conjugated, with {が}'),
          T('{私が読んだ本} — "the book I read"'),
        ],
      ],
    },
    {
      caption: T('Where the verb conjugates inside the sentence'),
      head: [T('Sentence'), T('Where the verb is'), T('Reading')],
      rows: [
        [
          T('{私は行きます、彼はいます}'),
          T('in the middle'),
          T('two clauses: the conjugation is the boundary'),
        ],
        [T('{彼はここにいる}'), T('at the end'), T('a single clause: the verb stays plain')],
        [
          T('{東京に着いたとき先生を見に行った}'),
          T('in the middle and at the end'),
          T('the {toki} clause closes before the main verb'),
        ],
        [
          T('{初めには言葉があり、言葉は神と共にあった}'),
          T('in the middle'),
          T('the first conjugation shows that the sentence goes on'),
        ],
      ],
    },
    {
      caption: T('The relative: the verb follows what the relative noun does'),
      head: [T('Phrase'), T('Verb'), T('Gloss')],
      rows: [
        [
          T('{私が読んだ本}'),
          T('{読んだ}, conjugated with {が}'),
          T('the book I read: the relative is the object'),
        ],
        [
          T('{本を読んだ人}'),
          T('{読んだ}, conjugated with {を}'),
          T('the person who read the book: the relative is the object'),
        ],
        [
          T('{来る人}'),
          T('{来る}, base form, no particle'),
          T('the person who comes: the relative is the subject'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {私は行きます、彼はいます}, why does the first verb conjugate?'),
    options: [
      T('because there is another clause after it'),
      T('because it is past tense'),
      T('because of politeness, and so is the second form'),
      T('because it is the main verb of the sentence'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('In "I go, he stays", complete the conjugated form of {iku}: I go ____, he stays'),
      answer: 'ikimasu',
    },
    {
      kind: 'match',
      prompt: T('Match the verb form to what it is doing'),
      pairs: [
        { a: T('{ikimasu}'), b: T('conjugated: another clause follows') },
        { a: T('{iru}'), b: T('plain: it is the last clause') },
        { a: T('{taberu}'), b: T('may stay plain: the next clause has the same subject') },
        { a: T('{kuru}'), b: T('plain: the relative noun is the subject') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {初めには言葉があり、言葉は神と共にあった}, what is {あり} marking?'),
      options: [
        T('the boundary of the first clause: another one follows it'),
        T('the past of the story'),
        T('the difference between polite and plain'),
        T('the end of the verse'),
      ],
      answer: 0,
    },
  ],
};
