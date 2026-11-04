import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Writing'),
  title: T('Where the space goes: Korean writing has two layers'),
  subtitle: T(
    'The syllable block is fixed and the spacing is rule: one space after each particle, none before the verb, and three exceptions that glue',
  ),
  body: C(`## Two layers, and only one of them is free

Mandarin and Japanese do not use spaces, and the boundary of the word sits in the reader's head, not on the page. Korean uses spaces, and it is the only language in this project that forces the reader to see the boundary marked. The difficulty looks immediately bigger than in Mandarin, and the first mistake is to think it is bigger. It is simpler, because Korean hands over a mechanical criterion and Mandarin hands over none.

The detail that ties everything together: Korean writing has TWO layers, and they are of different natures. The lower layer is the syllable block, and the block is not negotiable: it is one square, one syllable, with the fixed anatomy of always, always the same. The upper layer is the space, and that layer is a grammatical rule. That is why the same syllable block shows up glued in one place in a text and separated in another without anything having changed in it: what changed is the layer above. Whoever looks for an explanation of the space inside the block is looking in the wrong place, and that is why the rule seems impossible until it is said in a single sentence.

And the golden rule fits in one sentence: one space AFTER each particle, NO space before the verb, and everything else is a single word. Notice the two sides: where the particle is the last thing in the word, the space comes after; where the verb is the first thing in the word, the space comes before. A particle is never the first thing in a word, and a verb is never the last. A sentence is a run of words in which the particles are always at the end and the verbs always at the start.

The fine detail sits in "after each particle" and not "between two words": the most tightly attached particle of all is {ui}, which glues itself to the noun and is followed by the modifier. A word can carry a particle at its end and still have nothing after it, and it is the end of the sentence that settles it.

## The golden rule, measured

"I eat" in Korean is {naneun} {ppang-eul} {meokneunda}: three words, three spaces, three particles, pronoun plus topic particle; noun plus object particle; verb plus final ending. The final ending {da} is the last block of the verb, and the verb does not separate from it: it is the closed verb, and the sentence is over. Nobody splits the end of a word in Portuguese, and in Korean it is the same thing with a particle in the place of the suffix.

The central table is that count, and it is the whole golden rule added up line by line. What the reader has to internalise is not the list, it is the criterion: if the piece is a particle, the space is already decided and it comes after it; if the piece is a verb, the space is already decided and it comes before it; if the piece is anything else, there is nothing to decide, because everything else is a single word. The golden rule settles the overwhelming majority of cases without anyone having to think about anything, and what is left to think about is the exceptions.

Why particle and not noun? Because the particle is the piece that exists precisely in order to declare grammatical function, and a piece that declares function needs a boundary marker before the next function begins. The noun is already visible by itself, it is the big chunk, the one with its own entry in the dictionary. The particle is invisible, and that is why it needs space around it in order not to be swallowed by the neighbouring word. The Korean space is not decoration: it is the semicolon of the sentence.

## The three exceptions that glue

First exception: the number. Numeral, counter and noun form one glued group, {hann} {gwon} {seojeul}, "one book", and the three pieces are a single word. The numeral is the only thing in Korean that glues onto what comes BEFORE it, because it is the only item whose left boundary needs marking and whose right boundary is invisible. Notice what is left over: the possessive particle {ui} is glued too, and what separates the group from the modifier is the golden rule's own space.

Second exception: the Korean proper name. {kimjeongsu} is three blocks and a single word, and no space separates the syllables of the name. The reason is the same as the first exception and holds for both: between the blocks of a name there is no particle at all, and without a particle there is no boundary for the space to mark. Someone who writes {kim} {jeongsu} apart is not getting the name wrong: they are inventing a boundary the language never had. Foreign names behave differently: they are foreignised to the Korean standard and take a particle like any other noun.

Third exception, and the hardest: the pronoun that fuses with the particle. {urireul} is three blocks, we with the object particle, and it is a single word. The pronoun absorbs the particle, and what was two pieces became one. The difficulty is real because the result is a word that has three blocks and no visible particle at the end, which is exactly the signal the reader uses to know where the boundary is. The symmetry closes the system: a word has a space after it when it ends in a particle, and it does not when the particle was absorbed or never existed. The three exceptions are the same case: particle absent, space absent.

## The historical refusal and the Biblical hook

Old Koreans wrote run together, as Japanese does, and the obligatory space was imposed by the government in 1987. There was resistance, the "chamo", the movement against the space, and the movement lost. That changes what this lesson is teaching: Korean orthography is not a natural truth about the language, it is a political decision that won an argument and became law. The particles did not change in 1987; what changed was a decree about where to put a mark on the page. No word changed its sound and no sentence changed its meaning, and even so the document of today does not look like the one of yesterday.

The Biblical hook ties the two halves together. The 1917 Korean translation, the first one in Korean, is almost entirely hanja, and Korean in hanja at the beginning did not write the particles: they were recovered from the shape of the noun and from context. A particle that is not written has no word around it, and a word with no particle has no space. A 1917 Korean verse has one visible particle, the subject one, and another absent, the topic one; and the space around the absent one simply does not exist. In the current Korean Bible the same sentence has both particles written and, therefore, both spaces. What changes between 1917 and 1961 is both the orthography and the register.

And there is a lovely reunion of the two. Around 1980, in one CMOS edition, the space between two groups was no longer a space: it was a particle with a meaning, read as "by means of", "mediante". It is the proof that the Korean space is real grammatical material and not a typesetting convention, because there is an edition in which it means something. It is the opposite of the Mandarin of the word-segmentation lesson, where the boundary is invisible and has to be guessed: here the boundary is compulsory, and even so it can carry meaning.
`),
  vocab: [
    V('naneun', '나는', 'I: pronoun with topic particle, already glued (naneun)'),
    V('eun', '은', 'topic after a word with a final consonant (eun)'),
    V('ppang', '빵', 'bread; the bread of John 6:9 (ppang)'),
    V('eul', '을', 'direct object after a word with a final consonant (eul)'),
    V('meokneunda', '먹는다', 'eat: the verb whose ending already is the subject (meokneunda)'),
    V('hann', '한', 'one; the Korean numeral, always with a final consonant (hann)'),
    V('gwon', '권', 'counter for books and rolls of paper (gwon)'),
    V('ui', '의', 'genitive particle, "of", which links one group to another (ui)'),
    V('seojeul', '책', 'book (seojeul)'),
    V(
      'kimjeongsu',
      '김정수',
      'Kim Jeong-su: a Korean proper name of three blocks and a single word (kimjeongsu)',
    ),
    V(
      'urireul',
      '우리를',
      'us as object: pronoun fused with the particle, three blocks and one word (urireul)',
    ),
    V('mal', '말', 'word; the Word in the prologue of John (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Korean writing has two layers: the syllable block, which is fixed, and the spacing, which is rule. The same block shows up glued or separated according to the layer above.',
      ),
    },
    {
      n: '2',
      text: T(
        'Golden rule: one space after each particle, no space before the verb, and everything else is a single word.',
      ),
    },
    {
      n: '3',
      text: T(
        'Numeral, counter and noun are glued: {hann} + {gwon} + {seojeul} is one word. The numeral is the only thing that glues onto what comes before it.',
      ),
    },
    {
      n: '4',
      text: T(
        'A Korean proper name is a single word however many blocks it has: {kimjeongsu} is three blocks glued. A foreign name is foreignised and takes a particle like any other noun.',
      ),
    },
    {
      n: '5',
      text: T(
        'A pronoun fused with a particle is a single word even with three blocks: {urireul}. The symmetry that closes the lesson: particle absent, space absent.',
      ),
    },
  ],
  notes: [
    {
      label: T('The space is a political decision, not a linguistic one'),
      text: T(
        'Old Koreans wrote run together, as Japanese does. The obligatory space was imposed by the government in 1987, and the "chamo", the movement against the space, lost. No word changed its sound and no sentence changed its meaning; what changed was a decree about where to put a mark on the page. Orthography is a political decision — and once it has won, it is law.',
      ),
    },
    {
      label: T('The space as a particle with a meaning'),
      text: T(
        'Around 1980, in one CMOS edition, the space between two groups was no longer a space: it was read as "by means of", as "mediante". It is the proof that the Korean space is real grammatical material and not a typesetting convention. It is the opposite of the Mandarin of lesson 4 in the zh course, where the word boundary is invisible and has to be guessed.',
      ),
    },
  ],
  examples: [
    {
      text: '나는 빵을 먹는다',
      gloss: T(
        'na-neun ppang-eul meok-neun-da — I eat: three words, three particles at the end of each, three spaces',
      ),
    },
    {
      text: '한 권의 책이',
      gloss: T(
        'hann gwon-ui chaek-i — one book: numeral, counter and particle glued; the noun is a single word',
      ),
    },
    {
      text: '김정수 씨',
      gloss: T(
        'kim jeong-su ssi — Kim Jeong-su: three blocks inside one word, and the honorific set apart by a space',
      ),
    },
    {
      text: '좋은 책 한 권',
      gloss: T(
        'joeun chaek hann gwon — one good book: the noun is a word, the numeral glues to the counter',
      ),
    },
    {
      text: '말이',
      gloss: T(
        'mal-i — the Word: noun and particle are a single word, with no space between them at all',
      ),
    },
  ],
  tables: [
    {
      caption: T('The golden rule, measured piece by piece'),
      head: [T('Word (romanisation)'), T('What it is'), T('Where the space goes')],
      rows: [
        [T('naneun'), T('pronoun I + topic particle'), T('after it')],
        [T('ppang-eul'), T('noun bread + direct object particle'), T('after it')],
        [
          T('meokneunda'),
          T('verb eat, with the final ending at its end'),
          T('none: the verb is the first piece of its word'),
        ],
        [T('mal-i'), T('noun Word + subject particle'), T('after it')],
        [
          T('hann gwon-ui chaek'),
          T('numeral + counter + particle + noun'),
          T('none inside the group: that is the number exception'),
        ],
        [
          T('any noun on its own'),
          T('a noun with no particle at all'),
          T('nothing to decide: it is a single word'),
        ],
      ],
    },
    {
      caption: T('The three exceptions that glue, and what they have in common'),
      head: [T('Case'), T('What glues'), T('Example (romanisation)'), T('How many blocks')],
      rows: [
        [
          T('numeral'),
          T('numeral, counter and particle, together with the noun'),
          T('hann gwon-ui chaek'),
          T('four'),
        ],
        [
          T('Korean proper name'),
          T('every block of the name, in any position'),
          T('kimjeongsu'),
          T('three'),
        ],
        [
          T('pronoun fused with a particle'),
          T('the pronoun and the particle it absorbed'),
          T('urireul'),
          T('three'),
        ],
        [
          T('the ordinary case, for contrast'),
          T('noun and particle, and nothing more'),
          T('ppang-eul'),
          T('two'),
        ],
      ],
    },
    {
      caption: T('Where the word boundary sits in each of the three languages'),
      head: [
        T('Language'),
        T('Uses spaces'),
        T('Where the boundary is marked'),
        T('Where the lesson is'),
      ],
      rows: [
        [
          T('Mandarin'),
          T('no'),
          T("in the reader's head: three characters almost always form one word"),
          T('lesson 4 of the zh course'),
        ],
        [
          T('Japanese'),
          T('no'),
          T('in the kanji; pure kana is run together'),
          T('lesson 1 of the ja course'),
        ],
        [
          T('Korean'),
          T('yes, compulsory since 1987'),
          T('in the particle: it is the particle that orders the space'),
          T('this lesson'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Where does the space go before a Korean verb?'),
    options: [
      T('immediately before it'),
      T('immediately after it'),
      T('between the verb and its final ending'),
      T('there is no rule: spacing is free'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I eat": the pronoun "I" with the topic particle is 나____'),
      answer: '는',
    },
    {
      kind: 'match',
      prompt: T('Match each case to what glues in Korean writing'),
      pairs: [
        { a: T('numeral, counter and noun'), b: T('all together: a single word') },
        { a: T('Korean proper name'), b: T('three blocks, a single word') },
        { a: T('pronoun fused with a particle'), b: T('three blocks, a single word') },
        { a: T('any word ending in a particle'), b: T('the space comes after it') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about Korean spacing is true?'),
      options: [
        T('the Korean space was imposed by a government decision in 1987'),
        T('Korean never used a space and today uses one by UN standard'),
        T('the space is where the syllable loses its vowel'),
        T('particles are always written apart, with a space'),
      ],
      answer: 0,
    },
  ],
};
