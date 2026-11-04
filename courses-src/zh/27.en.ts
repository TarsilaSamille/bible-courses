import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Particles'),
  title: T('Particles of written Mandarin: {之}, {者}, {其}, {所}'),
  subtitle: T(
    'What Greek resolves with a relative clause, written Mandarin resolves with four particles and no verb',
  ),
  body: C(`
## Two families inside one class

The particle you already know is grammar and not word: {ma}, {le}, {ba}, {de} mark the stance of the speaker or the relation between two nouns, and none of them says what the sentence contains. Beside them lives a second family, older and far more written: {zhī}, {zhě}, {qí}, {suǒ}. These do not mark a stance: they **take the place of a Portuguese word**. Where Portuguese writes "the book I read", written Mandarin writes three characters and no verb at all.

The consequence for reading is immediate, and it arrives before the grammar: a verse that ends in a written {yě}, or in {yǐ}, did not come from Greek. The register speaks before the sentence does. And the {yě} of spoken Mandarin, the "also", is the same syllable and the same character as the sentence-final particle of written Mandarin. Anyone who sorts the two by pronunciation loses the register information and decides by sound, which is the one thing that cannot decide.

## {zhě} turns a verb into a noun

The rule fits on one line, and it is the most productive of the four.

**{zhě} comes after the verb or the adjective, and what is left is a noun.**

{láizhě} is "the one who comes" and {zhùzhě} is "the one who dwells"; {zhīzhě} is "the one who knows". The verb is still there inside, and the {zhě} says that the action has become a thing. Someone translating word for word writes "coming that one" and reads it as if Mandarin had a present participle.

What the {zhě} does is exactly what the {de} does with an adjective, only in the opposite direction. {hóngsè de huā} is adjective plus noun, two names; {zhī zhě} is verb plus particle, and the verb has become a noun. They are the two ways Mandarin builds a new noun phrase, and neither needs a new word.

The second use is rarer and older: {zhě} as a topic marker. {gǔjīn zhī rén} is "as for the ancient ones"; the particle {zhě} closes the subject matter and the rest of the sentence comments on it. This is what Portuguese resolves with "as for", and what the Union Version rarely uses.

## {zhī} and {qí}, the possessors that do not use {de}

The possessive {de} of the lesson on possession comes after the possessor: {wǒ de shū}, {tā de shū}. Written Mandarin does the same thing with {qí}, and comes before.

**{qí} comes before the noun and {de} comes after. Both say possession, and written Mandarin uses the first.**

{qí mǔ} is "his mother" and {wǒ de mǔ} is "my mother", and the difference in position is the clue to which register you are reading. A whole book can alternate the two without the reader noticing, because the information is the same and only the position gives it away.

The {zhī} has three lives. In the place of a pronoun: {zhī shì zhī wèi zhī}, "that is his knowledge". In the place of a possessive, bound to a noun the way possessive {de} is: {zhī dào} is "his coming". And inside a fixed expression, attached to the noun that follows — there the {zhī} is the preposition and the {guó} turns back into a noun: {zhī dào zhōng guó} is "along the road".

## {suǒ} and the three sentence endings

The {suǒ} marks the word that will be the subject of the verb that follows, and it is the alternative written Mandarin has to the relative clause. {suǒ} {wǒ} {chī} {de} {shí}, "that which I eat": the subject is marked twice, once by the {suǒ} and once by the {de}. Without the {de}, the {suǒ} alone already governs the verb, and that is the case that unsettles someone translating, because written Mandarin allows the pronoun acting as subject simply not to appear.

The three endings close the sentence and say what to do with it. {yǐ} says the speech is over and the listener should close; {hū} turns the sentence into a question that wants no answer; {yān} adds the sense of place. All three live in the older texts, and the Union Version brings nearly all of them over from the Psalms and Proverbs.

The hook is a single verse, and it is the proof that the register tells you the source language. First Corinthians 13 opens with {ài shì} and repeats the same construction through the whole letter: {ài shì} {héng jiǔ rěn nài}, "love is long-suffering". Eleven lines later the same book writes {ài shì} {yǒng bù zhǐ xī de}, and never puts a {yě} and never puts a {zhě}. First John 4:8 closes the letter in the shortest shape possible: {shén jiù shì ài}, "God is love", three words, the verb {shì}, no pronoun and no particle. The same Union Version, the same bilingual translator, the same desk. What changed between {ài shì héng jiǔ rěn nài} and {yǒu rén lái jiàn Yēsū} was the book it came from, and not the edition.

In Proverbs 4:23 written Mandarin appears with the best possible witness, because the verse is short: {yī qiè} is "all", {yī shēng} is "a whole life", and {yóu xīn fā chū} is "goes out from the heart", with no preposition and no copula, a verb and the noun that names it. The original says the same thing, and anyone who recognises the construction recognises Hebrew being translated.`),
  vocab: [
    V('zhī', '之', 'it, he, that which; pronoun and particle of written Mandarin (zhī)'),
    V('zhě', '者', 'the one who; turns a verb into a noun (zhě)'),
    V('yě (final)', '也', 'sentence-final particle of written Mandarin, and not "also" (yě)'),
    V('qí', '其', 'his, its; the possessive of written Mandarin (qí)'),
    V('suǒ', '所', 'that which; marks the subject of the verb that follows (suǒ)'),
    V('yǐ', '矣', 'sentence ending: the speech is over, the listener should close (yǐ)'),
    V('hū', '乎', 'sentence ending that becomes a rhetorical question (hū)'),
    V('yān', '焉', 'here, where; and a sentence ending (yān)'),
    V('cǐ', '此', 'this; demonstrative pronoun of written Mandarin (cǐ)'),
    V('fú', '弗', 'not; the negator of written Mandarin (fú)'),
    V('ěr', '尔', 'you; pronoun of written Mandarin (ěr)'),
    V('rǔ', '汝', 'you; pronoun of written Mandarin (rǔ)'),
    V('wèi', '为', 'for, by; the first tone of 為 (wèi)'),
    V('wéi', '为', 'to be, to become; the other tone of 為 (wéi)'),
    V('yīqiè', '一切', 'all, everything (yīqiè)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{zhě} comes after the verb or the adjective and the result is a noun: {láizhě}, "the one who comes".',
      ),
    },
    {
      n: '2',
      text: T(
        '{qí} goes BEFORE the noun and {de} AFTER it: both say possession, and the position says which of them you are reading.',
      ),
    },
    {
      n: '3',
      text: T(
        '{suǒ} marks the word that will be the subject of the following verb, and written Mandarin drops the pronoun acting as subject.',
      ),
    },
    {
      n: '4',
      text: T(
        '{yǐ}, {hū} and {yān} close the sentence and say what to do with it; a written {yě} is not the "also".',
      ),
    },
    {
      n: '5',
      text: T(
        '{wèi} is "for, by" and {wéi} is "to be, to become". Same character, the tone decides.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {yě} that is not "also"'),
      text: T(
        'The {yě} that closes the sentence in written Mandarin is the same syllable and the same character as the {yě} meaning "also". In {shàng} {Xiānsheng} {yě} {lái le} the {yě} is an adverb, and nothing marks that the sentence is over. The difference is one of register and not of sound, which is exactly why sound cannot decide it.',
      ),
    },
    {
      label: T('A verse of four words'),
      text: T(
        'The Union Version writes {shén jiù shì ài} for the sentence Greek writes in four words and Hebrew in three. Nothing is missing: {shén} is the subject, {shì} the verb, {ài} the predicate. A reader who goes looking for a particle where there is none will not find one, and the right conclusion is that this sentence had no particle at all.',
      ),
    },
  ],
  examples: [
    {
      text: '愛是恆久忍耐，又有恩慈',
      gloss: T(
        'ài shì héng jiǔ rěn nài, yòu yǒu ēncí — love is long-suffering and is kind (1 Cor 13:4): {shì} and nothing else',
      ),
    },
    {
      text: '神就是愛',
      gloss: T('shén jiù shì ài — God is love (1 John 4:8): three words, not one particle'),
    },
    {
      text: '我為此而生，也為此而來，為要給真理作見證',
      gloss: T(
        'wǒ wèi cǐ ér shēng, yě wèi cǐ ér lái — I was born for this, and I came for this (John 18:37): {cǐ} in the place of a demonstrative',
      ),
    },
    {
      text: '你要保守你心，勝過保守一切，因為一生的果效，是由心發出',
      gloss: T(
        'nǐ yào bǎoshǒu nǐ xīn, shèngguò bǎoshǒu yī qiè — guard your heart above all things (Prov 4:23): {yī qiè} and {yī shēng}',
      ),
    },
    {
      text: '知之為知之，不知為不知，是知也',
      gloss: T(
        'zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhī yě — to know that you know is knowing itself (Anal. 2:17): two uses of {zhī}',
      ),
    },
    {
      text: '學而時習之，不亦說乎',
      gloss: T(
        'xué ér shí xí zhī, bù yì yuè hū — is it not a pleasure to learn and to review what you have learned? (Anal. 1:1): {hū} at the end',
      ),
    },
    { text: '來者', gloss: T('láizhě — the one who comes: a verb that has become a noun') },
    {
      text: '所愛的',
      gloss: T('suǒ ài de — that which is loved: {suǒ} marks the subject of the following verb'),
    },
  ],
  tables: [
    {
      caption: T('Three families of particles, three jobs'),
      head: [T('Family'), T('What it does'), T('Examples'), T('Register')],
      rows: [
        [
          T('of stance'),
          T('marks the stance of the speaker'),
          T('{ma}, {le}, {ba}, {ne}'),
          T('spoken and written'),
        ],
        [
          T('of grammar'),
          T('takes the place of a Portuguese word'),
          T('{de}, {zhī}, {qí}'),
          T('both, in different registers'),
        ],
        [
          T('of the sentence'),
          T('sits at the end and says how to close the speech'),
          T('{yě}, {yǐ}, {hū}, {yān}'),
          T('older written text'),
        ],
      ],
    },
    {
      caption: T('The pronouns of written Mandarin'),
      head: [T('Word'), T('Portuguese equivalent'), T('Where it goes'), T('Example')],
      rows: [
        [
          T('{zhī}'),
          T('it, that which'),
          T('in the place of a pronoun'),
          T('{zhī shì zhī wèi zhī}'),
        ],
        [T('{qí}'), T('his, its'), T('before the noun'), T('{qí mǔ} his mother')],
        [T('{cǐ}'), T('this'), T('in the place of a demonstrative'), T('{wèi cǐ} for this reason')],
        [T('{ěr}, {rǔ}'), T('you'), T('in the place of {nǐ}'), T('{ěr wú shí}, {rǔ wú shí}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {知之為知之，不知為不知，是知也}, what is the first {zhī} doing?'),
    options: [
      T('it takes the place of a pronoun: that is what is known'),
      T('it turns the verb into a noun'),
      T('it marks the subject of the following verb'),
      T('it negates the verb {zhī}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the possessive of written Mandarin, which comes BEFORE the noun: ____ 母, his mother',
      ),
      answer: '其',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it does'),
      pairs: [
        { a: T('{zhě}'), b: T('turns a verb into a noun') },
        { a: T('{qí}'), b: T('possessive that comes before the noun') },
        { a: T('{suǒ}'), b: T('marks the subject of the following verb') },
        { a: T('{yǐ}'), b: T('says the speech is over') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these sentences is written Mandarin rather than speech?'),
      options: [
        T('{shén jiù shì ài}'),
        T('{wǒ yě ài nǐ}'),
        T('{nǐ shì wǒ de péngyou}'),
        T('{wǒ hěn gāoxìng}'),
      ],
      answer: 0,
    },
  ],
};
