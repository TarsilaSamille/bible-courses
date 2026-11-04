import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verb'),
  title: T('Saying: {說} and the punctuation of direct speech'),
  subtitle: T(
    'The generic verb, the noun for "word", and the punctuation the {和}{合}{本} borrowed from the West in the nineteenth century',
  ),
  body: C(`
## One verb, one noun, two characters

Chinese has two characters for what Portuguese resolves with a single root, *say*. **{shuō}** is the verb: "to say", "to speak", the generic verb that does all the work. {Tā shuō} is "he says"; {wǒ shuō} is "I say"; and {shuō} on its own, with an understood subject, already means "to speak" in the plain sense of talking. **{huà}** is the noun: "word", "speech", the **thing** that was said, not the act of saying it.

They are different characters with different sounds, and that is exactly why they are worth stopping on. You do not decode {huà} when you meet {shuō}: two signs, two pronunciations, two words. The character is the word, and the sound travels with it; there is no way to know one and not the other.

Together they form a word: **{shuōhuà}**, {shuō} + {huà}, "to speak", in the everyday sense of talking. {Wǒ shuōhuà} is "I speak"; {tā gēn wǒ shuōhuà} is "he speaks with me".

There is a third, more elevated and more ancient: **{yán}**, "word, discourse". It hardly appears alone in everyday speech, but it lives inside words such as {yǔyán}, {yǔ} + {yán}, "language", and {yányǔ}, {yán} + {yǔ}, "words, discourse", the object of study of linguistics. {Yán} is the semantic field: from that root come both the word and the idea of a message. {Shuō} is the act; {yán} is the thing and the subject matter.

## Direct speech and the punctuation it requires

Direct speech in Chinese has a shape very close to your own: {shuō}, or **{duì}** … {shuō}, comes in, a colon, and the speech itself arrives inside quotation marks.

{tā shuō: "…"}, "he said: …".

Here the {和合本} departs from what your trained eye expects. Chinese quotation marks are {「 」}, straight strokes, the frame of an open square, and when the text carries speech inside speech they alternate with {« »}. The convention is: first level {「 」}, second level {« »}, and the Western marks {""} simply have no place in traditional Chinese text. None of this is typographic decoration: these are characters with name and function, like everything else.

And there is a historical detail that explains why a nineteenth-century Chinese text has colons and quotation marks at all: punctuation did not exist in the tradition. The system was devised by the American missionary Dwight Whitney in 1870, for the translation he was preparing. Before that, Chinese biblical text was written with no punctuation whatsoever, and the pauses were left to the reader.

The contrast with English is worth drawing, because English uses colons and quotation marks too, and the agreement is real rather than inherited: each tradition solved the same problem the same way, because direct speech is direct speech. The difference is only convention: which characters open the quotation, and how the inner level is marked.

## Saying A to B: {對} and {告}{訴}

The fine detail: Chinese resolves with two constructions what Portuguese resolves with one.

{duì} means "toward", "to", in the sense of a target: {duì} {wǒ} is "to me", {duì} {shén} is "to God". With {shuō} it gives "to say to someone": {tā} {duì} {wǒ} {shuō}, "he told me", literally "he, toward me, said". {Wǒ} {duì} {tā} {shuō} is "I told him". The {duì} marks the addressee, and nothing more.

**{gàosu}** is stronger: "to tell, to relate". It is not {shuō} with an extra object; it is a different verb, carrying the idea of **transmitting**: {wǒ} {gàosu} {nǐ}, "I tell you", with the weight of "I let you know", "I inform you". The difference is fine, and that fine difference is what separates the two verbs: {shuō} is neutral and assumes nothing, while {gàosu} assumes the other does not yet know and that you are carrying the news to him.

The question/answer pair closes the set. {wèn} is "to ask", and {回}{答}, {huí} + {dá}, is "to answer", literally "to give back": {huí} means "back", and the verb means "to hand the answer back". Alone, {dá} is an old or colloquial form of "to answer", common in {fǎn} {dá}, "to reply", and it does not survive well in running text.

## Psalm 12:6 and the noun that ties it together

Psalm 12:6 in the {和合本} says: {Yēhéhuá} {de} {huàyǔ}, "the words of the LORD", and then repeats the same word in the same sentence: "pure words".

Look at the construction: {de} links the possessive noun to the name of the possessor. What matters here is the noun, not the verb. The verse does not say "the LORD *said*", that would be {shuō}; it says "the words of the LORD", {huàyǔ}, {huà} + {yán}. Greek and Portuguese also use the noun, and the three languages agree for a reason that is not coincidence: what the psalmist asserts is not that God spoke, but that what came out of God is word, and word carries a weight that everyday speech does not.

The pair {shuō} and {huà} is in play throughout Scripture, and almost always on both sides of the same sentence. Mark 1:14 gives plain {shuō}: {Yēsū} {jìn le} {huìtáng}, "and he entered the synagogue", and the preaching that follows is the {shuō}. Verb where the verb belongs, noun where the noun belongs: the {和合本} keeps the distinction even where Greek blurs it.`),
  vocab: [
    V('shuō', '说', 'to say, to speak (the generic verb)'),
    V('huà', '话', 'word, speech (noun)'),
    V('shuōhuà', '说话', 'to speak (to talk)'),
    V('duì', '对', 'toward; with {shuō}, "to say to someone"'),
    V('gàosu', '告诉', 'to tell someone, to inform'),
    V('wèn', '问', 'to ask'),
    V('huídá', '回答', 'to answer ({huí} + {dá})'),
    V('yán', '言', 'word, discourse (semantic field)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{shuō} is the verb "to say"; {huà} is the noun "word". Different characters, different sounds.',
      ),
    },
    {
      n: '2',
      text: T(
        'Direct speech: {shuō}, a colon, and the speech inside quotation marks — {「 」} at the first level, {« »} at the second.',
      ),
    },
    { n: '3', text: T('{duì … shuō} marks the addressee: {tā duì wǒ shuō}, "he told me".') },
    {
      n: '4',
      text: T(
        '{gàosu} assumes the transmission of something new; {shuō} is neutral and assumes nothing.',
      ),
    },
    {
      n: '5',
      text: T(
        '{回答} is "to give the answer back" ({huí} = "back"); {dá} alone is an old or colloquial form.',
      ),
    },
  ],
  notes: [
    {
      label: T('What Whitney did, and why it matters'),
      text: T(
        'The punctuation of the {和合本} was devised by Dwight Whitney in 1870. Before it, Chinese biblical text had no punctuation at all. Colons and Chinese quotation marks are a deliberate import, not a tradition.',
      ),
    },
    {
      label: T('{yán} lives inside words'),
      text: T(
        '{yán} hardly appears alone. It sits in {yǔyán} "language" and {yányǔ} "discourse". Learning {shuō} is learning the act; learning {yán} is learning the field.',
      ),
    },
  ],
  examples: [
    {
      text: '他說：「耶穌是彌賽亞。」',
      gloss: T('tā shuō: "Yēsū shì Mísàiyà" — he said: "Jesus is the Messiah."'),
    },
    { text: '他對我說', gloss: T('tā duì wǒ shuō — he told me') },
    { text: '我告訴你', gloss: T('wǒ gàosu nǐ — I tell you, I let you know') },
    { text: '耶和華的話語', gloss: T('Yēhéhuá de huàyǔ — the words of the LORD') },
  ],
  tables: [
    {
      caption: T('The field of "to say" in six verbs'),
      head: [T('Word'), T('Class'), T('What it adds')],
      rows: [
        [T('{shuō}'), T('verb'), T('nothing — it is the generic one')],
        [T('{huà}'), T('noun'), T('the thing said, not the act')],
        [T('{duì … shuō}'), T('verb + preposition'), T('the addressee: "to say A to B"')],
        [T('{gàosu}'), T('verb'), T('transmitting what the other does not know')],
        [T('{wèn}'), T('verb'), T('to ask')],
        [T('{huídá}'), T('verb'), T('to give the answer back')],
      ],
    },
    {
      caption: T('Direct speech: what matches and what does not'),
      head: [T('Element'), T('English'), T('Chinese / {和合本}')],
      rows: [
        [T('verb'), T('said'), T('{shuō}')],
        [T('separator'), T('colon'), T('colon — the same')],
        [T('quotes level 1'), T('""'), T('{「 」}')],
        [T('quotes level 2'), T("''"), T('{« »}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {他對我說}, what does the {對} mark?'),
    options: [
      T('the content of the speech'),
      T('the addressee'),
      T('the tense of the verb'),
      T('the mood of the sentence'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "he told me" with the preposition of addressee: 他____我說'),
      answer: '對',
    },
    {
      kind: 'match',
      prompt: T('Match the word to what it adds'),
      pairs: [
        { a: T('{shuō}'), b: T('the generic verb "to say", adds nothing') },
        { a: T('{huà}'), b: T('the noun "word", the thing said') },
        { a: T('{gàosu}'), b: T('to tell someone: transmitting something new') },
        { a: T('{回答}'), b: T('to "give back" the answer ({huí} = "back")') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('To say "the words of the LORD" (Psalm 12:6), which form?'),
      options: [T('{耶和華的話語}'), T('{耶和華說}'), T('{告訴耶和華}'), T('{問耶和華}')],
      answer: 0,
    },
  ],
};
