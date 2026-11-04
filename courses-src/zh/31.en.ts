import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('Reading Psalm 119 by blocks: the acrostic and the six words for "word"'),
  subtitle: T(
    'Twenty-two blocks of eight verses with the same opening character, and the character is not meaning: it is structure',
  ),
  body: C(`
## A psalm that is an alphabet

Psalm 119 has no free stanza and no argument. It is built as an alphabet: twenty-two letters, eight verses to each, one hundred and seventy-six verses in all. The Union Version keeps the acrostic, and each block of eight begins with the same character.

**Psalm 119 is 22 blocks of 8 verses, and the first verse of each block begins with the same character.**

What the reader has to understand is that this character is structure and not meaning. It is not the subject of the block, it is not a word of the verse, and it is not translated. It is there because the verse occupies the slot of the first of a sequence, and the translator had to write a sentence beginning with that letter. Anyone who tries to pull a theme out of it will find, in every block, a letter that has nothing to do with what the block says — and will read the wrong block.

And the acrostic is invisible in Portuguese. The Hebrew letter that organises the original resembles none of the twenty-two Chinese letters that organise it in Mandarin, and a reader of a Portuguese translation sees the structure neither directly nor by inference. There is no way to discover it by reading the text in Portuguese: you have to know that it is there.

## A psalm with a single subject

Read block by block, Psalm 119 looks like the same sentence one hundred and seventy-six times. The noun comes back in almost every verse, and what changes is the verb: {jì}, to remember, {zūnshǒu}, to keep, {cōngmíng}, to understand, {yìng}, to answer, {cáng}, to hide inside. The parallelism of the other psalms works on two sides, with two opposing things; here it works on one side only, because there are not two things to oppose: there is the word of God and what the faithful one does with it.

**In Psalm 119 the noun repeats and does not change; the verb is what changes, and the verb is what says what the faithful one did with the word.**

The variety of that parallelism is in {lǜ}, the law, and in {huà}, what was said, and in {yǔ}, {cí}, {mìng}, {jiè}. These are six Chinese words for what Hebrew distinguishes with precision, and the choice among them belongs to the translator. Written Mandarin does not have six words for "law": it has one for the precept, one for the method and one for the body of instructions. Translating the whole verse as "your word" eight times in a row is not a grammar mistake, and it erases a distinction the original made.

Verse 11 is the cleanest example of all of it. The Union Version writes {wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de}: "I store your words in my heart, so that I may not sin against you". There is {huà}, the word, and {cáng}, to hide, and {dé zuì}, to sin. One noun for "word", one verb, and one reason. The acrostic letter sits at the start of the verse and does not appear in the sense.

## What the opening character forces on the translator

The opening character occupies a slot Portuguese does not have. It comes before the verb and the object, it is the first word of the verse, and the translator cannot choose the verb he wanted: he can only choose the word that fills that slot. That is why the first verse of each block tends to begin with a verb or with a generic noun, and it is why the second and third verses of the block are, as a rule, freer.

**The opening character fixes the first word of the verse and nothing else: the translator freedom is inside the verse, not at its edge.**

The side effect is that the eight verses of a block look more like each other than the eight verses of the next block do. That is not repetition: it is the result of eight sentences that begin the same way. And when the translator writes the same word twice in one verse, it is because the opening letter and the word in the middle are being forced at the same time and he settles it in the least bad way.

The right way to read is in blocks of eight, never in loose verses. Read the eight, find what changes, and ask which verb is opposed to which. A block of Psalm 119 is short enough to fit on one screen and long enough for the question to be worth asking.

## Three readings that go wrong

The first is the commonest: reading a single verse and thinking you have understood it. A verse of Psalm 119 without its block is a clause with no subject, because the subject of the psalms is always the same and the verb changes from verse to verse. The second is trying to make sense of the opening character: it is a letter of the alphabet, not the subject of the block. The third is rendering the six words with one and the same term, and there the reader loses the distinction the original drew in every verse.

What is left is the simplest and most useful thing about the psalm: there is no new information in every verse, there is a new action in every verse. The noun is constant and the verb counts. And that is why this psalm is the best place in the book to train the one thing that reading in Mandarin asks of someone who does not have the original: attention to the word that changes.`),
  vocab: [
    V('jìng', '经', 'the body of instructions; and the Scriptures (jìng)'),
    V('lǜ', '律', 'the precept of God; and the name of the Pentateuch (lǜ)'),
    V('fǎ', '法', 'law, method (fǎ)'),
    V('huà', '话', 'what was said; and what someone says (huà)'),
    V('yǔ', '语', 'word, language (yǔ)'),
    V('cí', '词', 'word, term (cí)'),
    V('mìng', '命', 'decree, order; and destiny (mìng)'),
    V('jiè', '诫', 'precept, instruction (jiè)'),
    V('lì', '例', 'case, statute (lì)'),
    V('jì', '记', 'to remember (jì)'),
    V('zūnshǒu', '遵守', 'to keep, to obey (zūnshǒu)'),
    V('cōngmíng', '聪明', 'understanding; and wisdom, in the same psalm (cōngmíng)'),
    V('yìng', '应', 'to answer; and what is owed, in the same psalm (yìng)'),
    V('cáng', '藏', 'to hide, to store inside (cáng)'),
    V('xīn (coracao)', '心', 'the heart: where the word is stored in verse 11 (xīn)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Psalm 119 has 22 blocks of 8 verses, and the first verse of each block begins with the same character.',
      ),
    },
    {
      n: '2',
      text: T(
        'The acrostic character is structure and not meaning: it is not the subject of the block and it is not translated.',
      ),
    },
    {
      n: '3',
      text: T(
        'In Psalm 119 the noun repeats and does not change; the verb is what changes, and it is what says what the faithful one did with the word.',
      ),
    },
    {
      n: '4',
      text: T(
        'Six Chinese words render what Hebrew distinguishes: {lǜ}, {huà}, {yǔ}, {cí}, {mìng} and {jiè}.',
      ),
    },
    { n: '5', text: T('Read the psalm in blocks of eight, never in loose verses.') },
  ],
  notes: [
    {
      label: T('The acrostic disappears in translation'),
      text: T(
        'The Hebrew letter that organises the original resembles none of the twenty-two Chinese letters that organise it in Mandarin. A reader of a Portuguese translation sees no structure and cannot infer it from the text. It is information that exists in the book in Mandarin and in no translation, which is why the reader needs it before starting.',
      ),
    },
    {
      label: T('Six words, one idea'),
      text: T(
        'In Psalm 119 the noun changes name almost at every verse, and Mandarin offers few options: the law, the word, the instruction, the decree. Rendering everything by "word" is grammatically correct and erases the distinction Hebrew drew. The same Mandarin word goes the other way too: {cōngmíng} is understanding in one half and wisdom in the other.',
      ),
    },
  ],
  examples: [
    {
      text: '我將你的話藏在心裏，免得我得罪你的',
      gloss: T(
        'wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de — I store your words in my heart, so that I may not sin against you (Ps 119:11): one noun and two verbs',
      ),
    },
    {
      text: '你的話',
      gloss: T('nǐ de huà — your words: {huà} is "what was said", and not "what you think"'),
    },
    {
      text: '藏在心裏',
      gloss: T('cáng zài xīn lǐ — stored in the heart: {cáng} and {lǐ}, the inside as a place'),
    },
    {
      text: '得罪',
      gloss: T('dé zuì — to sin, to offend: a two-character verb, and the commonest in the psalm'),
    },
    {
      text: '律',
      gloss: T('lǜ — the precept; and, capitalised, the name of the five books of Moses'),
    },
    { text: '經', gloss: T('jìng — the body of instructions; and the name of the Scriptures') },
    {
      text: '誡命',
      gloss: T(
        'jiè mìng — the commandment: the most solemn word in the psalm, kept for a few verses',
      ),
    },
  ],
  tables: [
    {
      caption: T('The structure of Psalm 119'),
      head: [T('Level'), T('What it is'), T('How many'), T('What the reader sees')],
      rows: [
        [
          T('letter'),
          T('the fixed character of the block'),
          T('22'),
          T('the same character at the head of each block'),
        ],
        [
          T('block'),
          T('the group of verses with the same letter'),
          T('8'),
          T('eight verses with the same opening'),
        ],
        [T('verse'), T('the isolated unit'), T('1'), T('nothing: it is the inside of a block')],
        [T('psalm'), T('the whole book'), T('176'), T('22 blocks of 8')],
      ],
    },
    {
      caption: T('Six Chinese words for "word"'),
      head: [T('Word'), T('Mandarin nuance'), T('The risk of one word for all')],
      rows: [
        [T('{lǜ}'), T('the precept of God (lǜ)'), T('and the name of the Pentateuch')],
        [
          T('{jiè} {mìng}'),
          T('the commandment, solemn (jiè mìng)'),
          T('and the order given by someone'),
        ],
        [T('{huà}'), T('what was said (huà)'), T('and what someone says now')],
        [T('{yǔ}'), T('word, language (yǔ)'), T('and what is understood')],
        [T('{cí}'), T('term, unit of speech (cí)'), T('and the term of a glossary')],
        [T('{jìng}'), T('body of instructions (jìng)'), T('and the name of the Scriptures')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Psalm 119, what is the opening character of each block?'),
    options: [
      T('alphabet structure: it takes the first word of the verse and is not the subject'),
      T('the subject of the block of eight verses'),
      T('the translation of the corresponding Hebrew letter'),
      T('a summary of what follows'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the verb of Psalm 119:11: 我將你的話____在心裏'),
      answer: '藏',
    },
    {
      kind: 'match',
      prompt: T('Match the word of Psalm 119 to its Mandarin value'),
      pairs: [
        { a: T('{lǜ}'), b: T('the precept of God') },
        { a: T('{huà}'), b: T('what was said') },
        { a: T('{cōngmíng}'), b: T('understanding and wisdom') },
        { a: T('{dé} {zuì}'), b: T('to sin against someone') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('When reading Psalm 119, what actually changes from one verse to the next?'),
      options: [
        T(
          'the verb: the noun repeats and what changes is what the faithful one does with the word',
        ),
        T('the noun: every verse uses a different word for "word"'),
        T('the subject: every verse brings a different servant'),
        T('the time: every verse advances one day in the story'),
      ],
      answer: 0,
    },
  ],
};
