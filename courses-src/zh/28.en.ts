import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Verb'),
  title: T('Adverbs: the open class, {shèn} and the {-地} that turns into a noun'),
  subtitle: T(
    'Mandarin makes adverbs freely, and the character that makes them is the same one that names the ground',
  ),
  body: C(`
## A class that does not close

Noun, verb, adjective and adverb are the four open classes of the language: Mandarin creates a new word in them whenever it needs one, and the count does not close. The other classes are short and countable, and that is why they become tables. The adverb sits on the open side, and the proof is that half of the adverbs in the biblical text are a single syllable glued to an adjective or to a verb.

The adverb enters in two positions and only two. Before the adjective, it is degree: {hěn} {lěng}, {tài} {guì}, {zuì} {hǎo}. Before the verb, it is time or aspect: {wèi} {lái}, {yǐ} {qù}, {huò} {shì} {huò}. And there is a third position, after the verb, which exists for one thing alone.

**The adverb enters before the verb or before the adjective. The manner {de} is the only one that enters after.**

## {-地}: the same sound, three jobs

Mandarin has two pieces that sound alike and are not the same piece — the possessive particle and the manner adverb. The possessive particle is written {de}, with the character that means "target", and the manner adverb is written {dì}, with the character that means "place". Romanisation erases the difference, and that is why every explanation of adverbs in Mandarin sounds harder than it is: there are two pieces, and the writing says which is which.

**The manner {dì} does the same work the possessive particle does and sits in the same slot.** After the verb or the adjective, {dì}, then the complement. {zǒu} {de} {kuài}, {dào} {de} {zhí}, {gōng} {zuò} {de} {hǎo}. What changes is what the complement is: an adverb in the first case, a noun in the second. Without {dì} after the verb the sentence is wrong, and {zǒu kuài} is not Mandarin.

The second job is the most surprising and the most useful. The same {dì} turns a verb or an adjective into a noun, with nothing changing position: {xīn} {dì} is "the place of the heart", that is, the heart; {jìng} {dì} is "the place of silence", that is, the mind; {fú} {dì} is "a place of happiness". Anyone who meets {xīndì} in a book and translates it as "the location of the heart" has read three words where there was one.

The third job is the ordinary noun: {dì} is the earth, the ground, the place. {quán} {dì} is "all the earth", {dì} {fāng} is "place", {tiān} {dì} is "heaven and earth". All three live in the same character, and what separates them is position: after a verb or an adjective it is a manner marker or a noun of action; on its own or before another noun it is the ground.

## One-syllable adverbs in the old text

Spoken Mandarin uses {hěn}, {tài} and {zuì}, and the Union Version uses almost none of the three: the bilingual translator of 1919 was translating into written Mandarin, and written Mandarin has other adverbs of degree. **Its "very" is {shèn}, its "rather" is {pō} and its "extremely" is {jí}.** All three are a single syllable, and not one of them is derived from anything: there is no verb inside and no noun inside.

The temporal adverbs are the same case. {wèi} is "not yet", {yǐ} is "already", and both come glued to the verb: {wèi} {dào}, {yǐ} {jīng}. The two synchronise with negation: {bù} {wèi} {lái} is the "not yet", {bù} {yǐ} {qù} is the "no longer", and anyone who builds the sentence without them loses the information.

The third group appears only in written text: {yì}, "also", and {fù}, "again", siblings of {yě} and {zài} in speech. And {huò}, which can be "perhaps" or "or", depending on what follows. These are what make an old text sound old, and none of them turns up in a conversation.

## What the biblical text does without an adverb

The practical finding is that the Union Version almost never uses the derived {-地}. Where the verb already says how, the adverb is redundant, and the bilingual translator knew it. Isaiah 6:3 writes {wàn jūn zhī Yēhéhuá chōngmǎn quán dì}: "the Lord of hosts fills the whole earth", with the verb {chōngmǎn}, "to fill", and no manner adverb at all, because {chōngmǎn} already contains its own.

What he does use are the degree adverbs of the written register and the quantifiers, which are not adverbs and do the same work. Psalm 19:1 opens with {zhū tiān shùshuō Shén de róngyào}: {zhū} is "all the", the same work {fán} and {xián} do, and not one numeral enters the sentence. Proverbs 14:23 brings {fán} and {bì}: "everyone who toils and bears a burden will surely have food", and the adverb is {bì}, "surely", one syllable glued to the verb {yǒu}.

The reading lesson is short and it holds for the whole Psalter: when the old translator writes a degree adverb, he is rendering a Hebrew intensifier and not adding a rhetorical shield. Recognising the word as an adverb, and not as a noun or a verb, is what leaves the sentence in Portuguese with the right strength.`),
  vocab: [
    V('shèn', '甚', 'very, much more; degree adverb of written Mandarin (shèn)'),
    V('pō', '颇', 'rather, fairly; degree adverb of written Mandarin (pō)'),
    V('jí', '极', 'extremely; degree adverb (jí)'),
    V('yì', '亦', 'also; adverb of written Mandarin, sibling of yě (yì)'),
    V('fù', '复', 'again, once more; written Mandarin (fù)'),
    V('huò', '或', 'perhaps, or; adverb of uncertainty (huò)'),
    V('wèi', '未', 'not yet; temporal adverb (wèi)'),
    V('yǐ', '已', 'already; temporal adverb (yǐ)'),
    V('bì', '必', 'surely; adverb of necessity (bì)'),
    V('xián', '咸', 'all, everyone; quantifier of written Mandarin (xián)'),
    V('zhū', '诸', 'all the; plural quantifier of written Mandarin (zhū)'),
    V('dì (modo)', '地', 'manner marker; same sound as the possessive particle (dì)'),
    V('dì (nominalizador)', '地', 'turns a verb or an adjective into a noun (dì)'),
    V('dì (lugar)', '地', 'earth, ground, place; the ordinary noun (dì)'),
    V('xīndì', '心地', 'the heart; literally "place of the heart" (xīndì)'),
    V('jìngdì', '境地', 'the mind, the state of spirit; "place of silence" (jìngdì)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb enters before the verb or before the adjective. The manner {de} is the only one that enters after.',
      ),
    },
    {
      n: '2',
      text: T(
        'The possessive particle is written {de} and the manner adverb is written {dì}: same sound, different characters.',
      ),
    },
    {
      n: '3',
      text: T(
        'After a verb or an adjective, {dì} makes a manner adverb or a noun of action; on its own, it is the earth.',
      ),
    },
    {
      n: '4',
      text: T(
        '{shèn}, {pō} and {jí} are the degree adverbs of written Mandarin, in place of {hěn}, {tài} and {zuì} of speech.',
      ),
    },
    {
      n: '5',
      text: T('{wèi} and {yǐ} are temporal and come glued to the verb: {wèi dào}, {yǐ jīng}.'),
    },
  ],
  notes: [
    {
      label: T('The {-地} the old text does not use'),
      text: T(
        'The derived suffix {-地} is productive in speech and almost absent from the Union Version. The reason is not poverty: it is register. The bilingual translator of 1919 was rendering Hebrew into written Mandarin, and in that register the verb {chōngmǎn} already contains its own adverb. Where Greek puts a participle, Mandarin writes a verb and nothing else.',
      ),
    },
    {
      label: T('Quantifiers that are not numerals'),
      text: T(
        '{zhū}, {xián}, {fán} and {jiē} say "all" with no numeral at all: there is no {yī}, no {liǎng}, no classifier. They are written Mandarin alternative to the numeral phrase, and they turn up where Hebrew has a plural that is not a number.',
      ),
    },
  ],
  examples: [
    { text: '慢慢地走', gloss: T('mànmàn de zǒu — to walk slowly: {dì} of manner') },
    {
      text: '心地',
      gloss: T('xīndì — the heart; literally "place of the heart", with {dì} as nominaliser'),
    },
    {
      text: '萬軍之耶和華充滿全地',
      gloss: T(
        'wàn jūn zhī Yēhéhuá chōngmǎn quán dì — the Lord of hosts fills the whole earth (Isa 6:3): no manner adverb',
      ),
    },
    {
      text: '諸天述說神的榮耀',
      gloss: T(
        'zhū tiān shùshuō Shén de róngyào — the heavens declare the glory of God (Ps 19:1): {zhū} is "all the"',
      ),
    },
    { text: '必', gloss: T('bì — surely, necessarily: an adverb glued to the verb {yǒu}') },
    {
      text: '尚',
      gloss: T('shàng — still, yet; adverb of written Mandarin, sibling of {hái} in speech'),
    },
    {
      text: '境',
      gloss: T('jìng — boundary, territory; in {jìngdì} it means "state of spirit", not place'),
    },
  ],
  tables: [
    {
      caption: T('One character, three jobs'),
      head: [T('Job'), T('What it does'), T('Example'), T('Gloss')],
      rows: [
        [
          T('manner adverb'),
          T('says how the verb happens'),
          T('{zǒu} {de} {kuài}'),
          T('runs fast'),
        ],
        [
          T('noun of action'),
          T('turns a verb or an adjective into a noun'),
          T('{xīndì}, {jìngdì}'),
          T('the heart; the mind'),
        ],
        [T('noun'), T('names the earth and the place'), T('{quán} {dì}'), T('all the earth')],
      ],
    },
    {
      caption: T('Degree adverbs: those of speech and those of the text'),
      head: [T('Adverb'), T('Register'), T('Enters'), T('Example')],
      rows: [
        [T('{hěn}'), T('speech'), T('before the adjective'), T('{hěn} {lěng}')],
        [T('{tài}'), T('speech and writing'), T('before the adjective'), T('{tài} {guì le}')],
        [T('{zuì}'), T('speech and writing'), T('before the adjective'), T('{zuì} {hǎo}')],
        [T('{shèn}'), T('written'), T('before the adjective or the verb'), T('{shèn} {cháng}')],
        [T('{pō}'), T('written'), T('before the adjective'), T('{pō} {wēn}')],
        [T('{jí}'), T('written'), T('before the adjective'), T('{jí} {zhòng}')],
      ],
    },
    {
      caption: T('Quantifiers that dispense with the numeral'),
      head: [T('Word'), T('Meaning'), T('Example')],
      rows: [
        [T('{zhū}'), T('all the, with a plural'), T('{zhū} {tiān} all the heavens')],
        [T('{xián}'), T('all, without a plural'), T('{xián} {wú} {liǎngzhǎng}')],
        [T('{fán}'), T('everyone, everything that'), T('{fán} {yǒu} {xuèqì de rén}')],
        [T('{jiē}'), T('all; closes the pair with {fán}'), T('{fán} … {jiē}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {心地}, what is the {dì} doing?'),
    options: [
      T('it turns the noun {xīn} into a noun of place: "the place of the heart"'),
      T('it marks the manner adverb after the verb'),
      T('it says the noun is possessive'),
      T('it marks the negation of the verb'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete with the degree adverb of written Mandarin: 我____想他, I miss him very much',
      ),
      answer: '甚',
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to what it is'),
      pairs: [
        { a: T('{shèn}'), b: T('degree, written Mandarin') },
        { a: T('{wèi}'), b: T('temporal: not yet') },
        { a: T('{bì}'), b: T('necessity: surely') },
        { a: T('{dì}'), b: T('turns a verb or an adjective into a noun') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {萬軍之耶和華充滿全地}, where is the manner adverb?'),
      options: [
        T('there is none: the verb {chōngmǎn} already says how'),
        T('it is in {quán}, before the noun'),
        T('it is in {wàn}, before the numeral'),
        T('it comes after {chōngmǎn}'),
      ],
      answer: 0,
    },
  ],
};
