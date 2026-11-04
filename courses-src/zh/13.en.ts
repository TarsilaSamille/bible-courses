import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Syntax'),
  title: T('Connectives: {而}, {但}{是}, {所}{以}, {因}{为}'),
  subtitle: T('Four words that join clauses, and one of them does two jobs at once'),
  body: C(`
## One character, two jobs

In English "and" and "but" are different words, and you pick between them without thinking. Chinese has a character that covers both: **{ér}**. It means "and" in one clause and "but" in the next, and it is the **context**, not the form, that decides which one you are reading.

The cleanest pair shows this: {ér jīn} is "and now": it adds, it continues. {rán'ér} is "but, however": it interrupts, it corrects what came before. The second uses the same {ér} with a prefix in front, and that alone is enough to turn it into contrast. There is no particle, no inflection, nothing that says "contradiction here"; the position of the rest of the sentence says it.

So Chinese spends one word less than English on what English spends two words on, and that is why reading the Bible in Chinese forces a decision at every {ér}. A translator who reaches for {ér} out of habit produces a flatter text than the Greek original, which was skilled at opposition.

## The explicit "but": {但是}

When the contrast is strong and deliberate, Chinese uses {dànshì}, two syllables, no possible ambiguity, "but". It is the word of the second plane, written out in full: {wǒ hěn lèi, dànshì wǒ yào qù} is "I am very tired, but I want to go". Compare {wǒ hěn lèi, ér wǒ yào qù}, which is the same idea with {ér} and sounds lighter, more literary.

The practical rule for a reader: ordinary prose, contrast as the main point, {dànshì}. Poetic text, or a line whose neighbours are already full of parallelism, {ér} or {rán'ér}, because there the weight of a two-syllable {dànshì} would break the rhythm.

Notice the comma: it comes before {dànshì} and before a contrastive {ér}, always. A contrastive connective is a pause, and a pause in Chinese is written with a comma.

## Because and therefore: the fixed pair

**{yīnwèi}** is "because" and **{suǒyǐ}** is "therefore". Both come at the beginning of the clause they govern, and they almost always come together: {yīnwèi} … {suǒyǐ} is a fixed pair, as natural as "because… therefore" in English.

Here the news is good, after all that inversion: English and Chinese agree on this one. "Therefore I am going" and {suǒyǐ} {wǒ} {qù} put the same word in the same place. What differs is the direction: in English "because" is a subordination and "therefore" opens the main clause; in Chinese the two are symmetrical, each opening its own clause. {yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}, "because I am tired, therefore I am not going", is a perfectly well-formed Chinese sentence, with the two connectives in parallel.

And {suǒyǐ} on its own, with no {yīnwèi} in front, is perfectly normal: {suǒyǐ} {wǒ} {dào le}, "therefore I arrived". {yīnwèi} is the one that needs a reason behind it; {suǒyǐ} is the one that can open a sentence on its own.

## Connective, subject, verb

This is the mistake every English speaker makes on their second sentence in Chinese. A connective cannot be dropped into a free position the way an English one can: "because" and "therefore" in Chinese have a fixed place, and that place is **before the subject**.

{yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}.

Connective, subject, verb. The connective precedes the subject, not the verb. Writing {wǒ} {yīnwèi} {lèi} sounds wrong for the same reason {wǒ} {suǒyǐ} {qù} does: you put the preposition after the subject. Anyone translating word for word produces "because I tired" and finds that nothing works, because Greek and English have the syntactic freedom Chinese does not.

Two seconds on punctuation: the comma goes after {yīnwèi}, not before. {yīnwèi} {wǒ} {lèi}, not {yīnwèi}, {wǒ} {lèi}. And the {和合本} punctuates differently from the western convention in several verses containing {yīnwèi}; if your copy has a comma where the other does not, that is neither your mistake nor hers, it is an editorial convention.

The hook that fixes all of it: in John 3:16 the {和合本} opens the verse with the connective. {yīnwèi} {shén} {ài} {shìrén}, "for God so loved the world". The whole verse begins with "because", and "loved" comes three words later. A Greek reader recognises the opening ὅτι; an English reader recognises the "for" at the front. Both languages agree, and Chinese makes it visible on the very first line. And in Proverbs 3:5, {nǐ} {yào} {zhuānxīn} {yǐkào} {Yēhéhuá}, "trust in the LORD", {yǐkào} is the verb, "to lean on": none of this works if the connective does not come in the right place in the clause.`),
  vocab: [
    V('ér', '而', 'and, but (depends on context)'),
    V('dànshì', '但是', 'but (explicit contrast)'),
    V("rán'ér", '然而', 'but, however (formal contrast)'),
    V('suǒyǐ', '所以', 'therefore, so'),
    V('yīnwèi', '因为', 'because (comes at the start of the clause)'),
    V('yǐkào', '倚靠', 'to lean on, to trust in (yǐkào)'),
    V('lèi', '累', 'tired (lèi)'),
    V('qù', '去', 'to go (qù)'),
    V('ài', '爱', 'to love (ài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} means "and" or "but" depending on context; {rán\'ér} forces the contrastive sense.',
      ),
    },
    {
      n: '2',
      text: T(
        '{dànshì} is the explicit "but" and always follows a comma: {wǒ hěn lèi, dànshì wǒ yào qù}.',
      ),
    },
    {
      n: '3',
      text: T('{yīnwèi} and {suǒyǐ} open the clause, at the front, and form a fixed pair.'),
    },
    {
      n: '4',
      text: T('Fixed order: connective, subject, verb — never the connective after the subject.'),
    },
    { n: '5', text: T('The comma goes before a contrastive connective and after {yīnwèi}.') },
  ],
  notes: [
    {
      label: T('The "and" that turns into "but"'),
      text: T(
        '{ér jīn} is "and now", additive; {rán\'ér} is "but, however", cutting. Same character, opposite function — a translator has to choose at every occurrence.',
      ),
    },
    {
      label: T('Mind the punctuation of the {和合本}'),
      text: T(
        'The {和合本} sometimes punctuates differently from the western convention in verses containing {yīnwèi}. Compare two editions before concluding there is an error.',
      ),
    },
  ],
  examples: [
    {
      text: '我很累但是我要去',
      gloss: T('wǒ hěn lèi dànshì wǒ yào qù — I am very tired, but I want to go'),
    },
    { text: '因为神爱世人', gloss: T('yīnwèi shén ài shìrén — for God so loved the world') },
    { text: '所以我今天不去', gloss: T('suǒyǐ wǒ jīntiān bù qù — therefore I am not going today') },
    { text: '然而他依然来了', gloss: T("rán'ér tā yīrán lái le — but he came all the same") },
  ],
  tables: [
    {
      caption: T('The four connectives side by side'),
      head: [T('Word'), T('Gloss'), T('Position'), T('Note')],
      rows: [
        [T('{ér}'), T('and / but'), T('front or middle'), T('context decides')],
        [T('{dànshì}'), T('but'), T('start of the 2nd clause'), T('comma before')],
        [T('{suǒyǐ}'), T('therefore'), T('start of the clause'), T('comes before the subject')],
        [T('{yīnwèi}'), T('because'), T('start of the clause'), T('comma after')],
      ],
    },
    {
      caption: T('The order that cannot be negotiated'),
      head: [T('Step'), T('Correct form'), T("English speaker's error")],
      rows: [
        [T('1st'), T('{yīnwèi} {wǒ} {lèi}'), T('{wǒ} {yīnwèi} {lèi}')],
        [T('2nd'), T('{suǒyǐ} {wǒ} {bù} {qù}'), T('{wǒ} {suǒyǐ} {bù} {qù}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我很累，但是我要去}, which connective is the explicit "but"?'),
    options: [T('{而}'), T('{所以}'), T('{但是}'), T('{因为}')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Open the clause with the connective: ____神爱世人'),
      answer: '因为',
    },
    {
      kind: 'match',
      prompt: T('Match the connective to its function'),
      pairs: [
        { a: T('{而}'), b: T('and or but, depending on context') },
        { a: T('{但是}'), b: T('explicit but, with a comma before') },
        { a: T('{所以}'), b: T('therefore, at the start of the clause') },
        { a: T('{因为}'), b: T('because, at the start of the clause') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which is the correct order for "I am tired, therefore I am not going"?'),
      options: [
        T('{wǒ} {lèi}, {suǒyǐ} {bù} {qù}'),
        T('{lèi} {wǒ}, {suǒyǐ} {bù} {qù}'),
        T('{suǒyǐ} {wǒ} {bù} {qù}'),
        T('{wǒ} {suǒyǐ} {bù} {qù}'),
      ],
      answer: 2,
    },
  ],
};
