import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Writing'),
  title: T('Syllable blocks: hangul, hanja, and the particles that make the text readable'),
  subtitle: T(
    'Every square is one syllable with a fixed anatomy, the vowel is never missing, and the particles shift with the last consonant',
  ),
  body: C(`## One square, one syllable

Korean is agglutinative: a word is a stack of pieces, and each piece is a particle glued to the one before it. And it is written in syllable blocks. Each block is a square that stands for exactly one syllable, not less and not more. A reader of Portuguese opens a page of Korean and sees a wall of squares; what they do not yet know is that every square has the same anatomy, always the same, and that the anatomy is read before the word.

The block has three positions, and the reading order is always this one. At the top left, optionally, an initial consonant (g, k, n, s). In the centre and to the right, the vowel (a, eo, u, i), obligatory and without exception. At the bottom, optionally, a final consonant (k, l, m, p). The initial consonant sounds before the vowel and the final consonant sounds after it, which is why you read the block top to bottom and left to right. A block with initial, vowel and final is guk, "country": three positions filled, three sounds. A block with nothing but a vowel is "a": one position, one sound. And there is no third possibility.

## An alphabet, not an ideogram

Hangul was invented in 1443, under King Sejong and with scholars of the court, and that fact settles everything that follows. It is not an ideogram: it is an alphabetic writing system. Every letter stands for a sound, exactly as in Latin, and not for a meaning. An ideogram stands for things; a letter stands for sounds. A reader of Portuguese arrives at Korean with the habit that the written sign *is* the word, and hangul breaks that habit on the first day of reading.

The comparison that ties the three languages of this project together: Japanese needs two systems, kana and kanji, and neither one alone writes the whole of Japanese. Korean also needs two, hangul and hanja, but hangul alone already writes everything that is spoken. Hanja is Korean written in Chinese characters, still used in proper names and in learned words; hangul is colloquial Korean. Just as katakana is register in Japanese, hanja is register in Korean. The 1917 Korean translation, the first one in Korean, is almost entirely hanja; the current one is hangul, with hanja only where it needs them.

## The vowel is not optional

This is the detail that ties Korean, Mandarin and Japanese together, and the point where almost every beginner stumbles. Mandarin has syllables that end in a consonant alone: ba, bei, a sound that stops abruptly, with no vowel at all. Korean has no such thing. No Korean syllable ends in a consonant without a vowel. The final consonant lives at the bottom of the block, but always after a vowel. It is a coda, not a final sound.

The practical consequence: someone coming from Mandarin looks for the "final sound" and cannot find it, because what they have is a sound that in Japanese would have been swallowed inside a kanji. And someone writing Korean never has to choose between two forms for the same syllable, because a vowelless syllable never exists to collide with another.

## The particles and the word order

The central hook of Korean is the particles, and without them a Korean text is a sequence of squares with no relation among themselves. {eun} and {neun} mark the topic, the matter the sentence is about, which is not necessarily the subject. {i} and {gwa} mark the subject: {sarang} with {i} or {gwa} is the person functioning as subject. {eul} and {reul} mark the direct object. {e} is destination, place or time; {eseo} is origin, "starting from".

The choice between the two members of each pair is mechanical and admits no taste: what counts is the last consonant of the word. A word with a final consonant takes the hard form, {eun}, {i}, {eul}. A word ending in a vowel takes the soft form, {neun}, {gwa}, {reul}. guk ends in k and therefore takes {eun}; nara ends in a and therefore takes {neun}. Getting this wrong is the beginner's commonest mistake and the most visible one, because the listener expects the other pronunciation and cannot make out what you meant.

And the order is object, verb, subject: {naneun yeohaeneul sseumnida}, "I read a book", with the object before the verb and the subject before the object. Anyone translating word for word from Portuguese builds subject, verb, object and produces a sentence that sounds translated. The particles are what save you: they declare the function of each piece even when the position lies.

The 1917 Korean translation is all hanja, and the current one is hangul. In John 1:1, "in the beginning was the Word", the Word appears as a noun, and in modern Korean every noun that is the subject takes {i} or {gwa}. Portuguese has no such particle: in "the Word" and in "I read" the noun is treated the same way. A Korean translation of John 1 carries a mark that the Portuguese one does not, and that mark is telling you what the sentence did to the word.
`),
  vocab: [
    V('eun', '은', 'topic after a word with a final consonant (eun)'),
    V('neun', '는', 'topic after a word ending in a vowel (neun)'),
    V('i', '이', 'subject after a word with a final consonant (i)'),
    V('gwa', '가', 'subject after a word ending in a vowel (gwa)'),
    V('eul', '을', 'direct object after a word with a final consonant (eul)'),
    V('reul', '를', 'direct object after a word ending in a vowel (reul)'),
    V('e', '에', 'destination, place or time (e)'),
    V('eseo', '에서', 'origin; starting from (eseo)'),
    V('sarang', '사람', 'person; human being (sarang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every block is one syllable: optional initial consonant, obligatory vowel, optional final consonant.',
      ),
    },
    {
      n: '2',
      text: T(
        'No Korean syllable lacks a vowel. Mandarin has them — and that is why a learner coming from there looks for a sound that is not there.',
      ),
    },
    {
      n: '3',
      text: T(
        "{eun} {neun} is topic, {i} {gwa} is subject and {eul} {reul} is direct object: the hard or soft form depends only on the word's last consonant.",
      ),
    },
    {
      n: '4',
      text: T(
        "{e} is destination, place or time; {eseo} is origin. Swapping the two is the beginner's commonest mistake.",
      ),
    },
    {
      n: '5',
      text: T(
        'The order is object – verb – subject, the reverse of Portuguese. The particles declare the function, so the position can lie.',
      ),
    },
  ],
  notes: [
    {
      label: T('An alphabet on one side, an ideogram on the other'),
      text: T(
        'Hangul was invented in 1443 and each of its letters stands for a sound; a kanji stands for a thing. Korean needs both, hangul and hanja, the way Japanese needs kana and kanji — but hangul alone already writes everything that is spoken.',
      ),
    },
    {
      label: T('A Korean noun carries a particle'),
      text: T(
        'In modern Korean a noun takes {i} or {gwa} when it is the subject. In John 1:1 the Word appears as a noun and therefore takes a particle; Portuguese has no mark at all. A translator who does not know the system loses the information in the transposition.',
      ),
    },
  ],
  examples: [
    { text: '한국어', gloss: T('han-gu-geo — Korean; three blocks, three syllables') },
    { text: '사람이', gloss: T('sarang-i — the person (subject after a consonant: 이)') },
    { text: '학교에', gloss: T('hak-gyo-e — to school (destination: 에)') },
    { text: '집에서', gloss: T('jib-e-seo — from home (origin: 에서)') },
  ],
  tables: [
    {
      caption: T('The anatomy of the block, read top to bottom'),
      head: [
        T('Position in the square'),
        T('Element'),
        T('Mandatory'),
        T('Typical sounds'),
        T('Symbols'),
      ],
      rows: [
        [
          T('top left'),
          T('initial consonant'),
          T('no'),
          T('g, k, n, s, j'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ}'),
        ],
        [
          T('centre and right'),
          T('vowel'),
          T('yes, always'),
          T('a, eo, u, i, o'),
          T('{ㅏ} {ㅓ} {ㅜ} {ㅣ} {ㅗ}'),
        ],
        [
          T('bottom'),
          T('final consonant'),
          T('no'),
          T('k, l, m, p, t'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ}'),
        ],
        [
          T('the whole square'),
          T('one syllable'),
          T('it is the unit of reading'),
          T('never two syllables'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('The particle shifts with the last consonant of the word'),
      head: [
        T('Word (romanisation)'),
        T('Last letter'),
        T('Has a final consonant'),
        T('Topic'),
        T('Subject'),
        T('Object'),
      ],
      rows: [
        [T('guk'), T('k'), T('yes'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('bang'), T('ng'), T('yes'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('mul'), T('l'), T('yes'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('sarang'), T('ng'), T('yes'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('nara'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}')],
        [T('cha'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('The word guk ends in a consonant. Which subject particle does it take?'),
    options: [T('{i}'), T('{gwa}'), T('{eun}'), T('{reul}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "the person" as subject, after a consonant: 사람____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its function'),
      pairs: [
        { a: T('{eun}'), b: T('topic after a final consonant') },
        { a: T('{neun}'), b: T('topic after a vowel') },
        { a: T('{e}'), b: T('destination, place or time') },
        { a: T('{eseo}'), b: T('origin; starting from') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about the Korean block is true?'),
      options: [
        T('every Korean syllable has a vowel'),
        T('there are syllables ending in a consonant alone'),
        T('hangul is an ideogram'),
        T('hanja is colloquial Korean'),
      ],
      answer: 0,
    },
  ],
};
