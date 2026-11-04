import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Syntax'),
  title: T('Fixed expressions and the subject that disappears'),
  subtitle: T(
    'The repeated question, the four fixed expressions, and the omission that no longer needs announcing',
  ),
  body: C(`
## Chinese drops the subject without asking permission

With the verb in the middle and the subject dropped, an isolated group like {chī le} means nothing: who ate? That is true, but only for someone reading outside the context. Inside a sentence, Chinese omits the subject all the time, with no marker, no particle, no ceremony, because the context has already said who is speaking.

The canonical example: {tā yě qù} is "he goes too". Said by someone who has just been talking about Peter, the same sentence becomes {yě qù}, "goes too", and stays true, because the subject is that of the speaker, whom the listener already knows. This is not a truncated subject; it is ordinary economy. English has nothing comparable: "goes too" without a subject is ungrammatical. Translating word for word produces "he also goes" and throws away the subject that was obvious.

The elision happens everywhere, and the pattern never varies: **if the subject of the previous clause does the job, it is not written again**. In coordinated clauses this produces real ambiguity. {tā shuō wǒ qù} can mean "he says that I go", a verb of saying plus a reported clause, or "he says and I go", two verbs with the subject only in the first. The context settles it; word-by-word reading does not. And that is precisely why reading a chapter is reading sense, not reading characters.

## Negation by **repetition**

Chinese has a second way to negate, and it uses no particle at all. The pattern is **verb or adjective + {bù} + the same verb or adjective**. Instead of {tā bù hǎo}, "he is not good", you can say {tā hǎo bù hǎo}, "is he good or is he not?". The negation is not in the {bù}: the negation is the repetition, and the {bù} is the hinge that holds the two copies together.

Here {bù} changes role. Before it was a negation particle placed in front of the verb, with a job of its own; here it sits in the middle and negates nothing by itself. Take the {bù} away and {hǎo hǎo} is left, which means nothing. The pronunciation follows from the role: inside {shì bú shì}, the {bù} loses its tone, *bú* and not {bù}, because it has stopped being a claim and become a marker of choice.

The point nearly everyone needs: {shì bú shì} reads **"is it or is it not?"**, with the {shì} of the question before the {bù}. It is not "is it not is it not". Someone producing that last one is applying English word order to a language that has none, and ending up with a sentence no Chinese speaker has ever pronounced. In Chinese the order is verb first, negation in the middle: {shì bú shì}, {chī bù chī}, {hǎo bù hǎo}.

When the word has more than one syllable, the whole word repeats and the negation goes in the middle. {yǒu yǒu}, "have, have?", with {méi} slotted in gives {yǒu méi yǒu}, "have, not have?", which is why the hinge is {méi}, the particle for past and existence. The verb does not split: it is {yǒu} on both sides. In {yǒu méi yǒu} the reading can also be {yǒu} plus {méi yǒu}, "to have" plus "not to have", and context decides. The sentence is ambiguous on purpose.

## Four fixed expressions that give the speaker away

These are the four commonest, and none of them is a sentence: they are loose parts that slot in wherever the verb is.

- {shì bú shì} — "is it or not?" — {nǐ shì bú shì shīfu} — "are you the teacher or not?"
- {yǒu méi yǒu} — "have or not have?" — {nǐ yǒu méi yǒu shū} — "do you have a book or not?"
- {hǎo bù hǎo} — "good or not good?" — about food, health, mood. The most colloquial of the four.
- {duì bú duì} — "right or not right?" — the only one that usually takes {ma} with it: {duì bú duì ma}.

What they give away is the speaker, not the subject matter. Someone using {hǎo bù hǎo} is talking about food; someone using {duì bú duì ma} is checking something. This matters in a biblical text: when the translator writes one of these where the Greek had a plain question, he is choosing for the reader a tone the Greek never fixed.

## Three ways to ask the same question

The question "are you going?" has three forms, and they are not synonyms: they are different registers.

- V-{嗎} — the particle at the end. {nǐ qù ma}, "are you going?". More formal, the written form and the one of the old text.
- V-{不}-V — the repetition. {nǐ qù bú qù}, "are you going or not?". Colloquial, the spoken form.
- V-{不}-V? — both, with *bú* sandhi on the second copy. The neutral register, and what the {和合本} uses when the question is rhetorical or climactic.

In all three the subject {nǐ} is written out, but it can go. If the previous clause had the same subject, {qù ma} is enough. The dropped subject works in reverse here: now it is missing because the question is what is needed.

The {和合本} shows its hand in two verses. In John 6:67, Jesus asks {nǐmen yě yào qù ma}: the formal {ma}, with the subject *nǐmen* spelled out because the question is aimed at a group that has to hear that it is addressed to them. In John 18:33 the high priest asks {nǐ shì bú shì Yóudú rén}: pure {shì bú shì}, no {ma}, and the sharpest of the four forms, one of the most famous questions in the New Testament, asked without the sandhi *bú*, by someone who already knows the answer. Compare John 1:37, {guòlái kàn}, "come and see": subject omitted, verb repeated, no particle at all. The context alone says that the one speaking is Jesus and the ones coming are the two disciples.`),
  vocab: [
    V('yě', '也', 'also (yě)'),
    V('shì bú shì', '是不是', 'is it or not? (shì bú shì)'),
    V('yǒu méi yǒu', '有沒有', 'have or not have? (yǒu méi yǒu)'),
    V('hǎo bù hǎo', '好不好', 'good or not good? (hǎo bù hǎo)'),
    V('duì bú duì', '對不對', 'right or not right? (duì bú duì)'),
    V('ma', '嗎', 'question particle at the end (ma)'),
    V('nǐ', '你', 'you (nǐ)'),
    V('tā', '他', 'he (tā)'),
    V('bù', '不', 'not (negation particle, lesson 09)'),
    V('méi', '没', 'not (past and existence, lesson 09)'),
    V('shì', '是', 'to be (shì)'),
    V('yǒu', '有', 'to have, there is (yǒu)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject is dropped when the previous clause already supplied it: {tā yě qù} → {yě qù}.',
      ),
    },
    {
      n: '2',
      text: T('The question pattern is verb or adjective + {bù} + the same verb or adjective.'),
    },
    {
      n: '3',
      text: T(
        'The negation is the repetition; the {bù} in the middle is a hinge, not a negation: {shì bú shì} is "is it or not?".',
      ),
    },
    {
      n: '4',
      text: T(
        'A word of more than one syllable repeats only its first part: {yǒu méi yǒu}, with {méi} in the middle.',
      ),
    },
    { n: '5', text: T('{ma} closes the question and never appears in the middle of it.') },
  ],
  notes: [
    {
      label: T('The same {bù} with two jobs'),
      text: T(
        'In lesson 09, {bù} negates: {wǒ bù chī}. In {shì bú shì} it negates nothing — it marks the choice between two copies. That is why the tone shifts to *bú*, and why it loses the falling contour that made it look like a negation particle.',
      ),
    },
    {
      label: T('The ambiguity the context settles'),
      text: T(
        '{tā shuō wǒ qù} can be "he says that I go" or "he says and I go". Neither reading is wrong by construction; only the chapter decides. Translating word by word picks one of the two without noticing.',
      ),
    },
  ],
  examples: [
    { text: '他也去', gloss: T('tā yě qù — he goes too') },
    {
      text: '也去',
      gloss: T('yě qù — goes too (the subject is the one from the previous clause)'),
    },
    { text: '你去不去', gloss: T('nǐ qù bú qù — are you going or not?') },
    { text: '你是不是猶太人', gloss: T('nǐ shì bú shì Yóudú rén — are you a Jew or not?') },
  ],
  tables: [
    {
      caption: T('Three ways to ask the same question'),
      head: [T('Form'), T('How it is built'), T('Register'), T('Example')],
      rows: [
        [
          T('{A 嗎}'),
          T('verb + {ma} at the end'),
          T('formal, written'),
          T('{nǐ qù ma?} — are you going?'),
        ],
        [
          T('{A 不 A}'),
          T('verb repeated with {bù} in the middle'),
          T('colloquial, spoken'),
          T('{nǐ qù bú qù?} — going or not?'),
        ],
        [
          T('{A 不 A?}'),
          T('the same, with the *bú* sandhi'),
          T('neutral, commonest'),
          T('{nǐ shì bú shì Yóudú rén?} — are you a Jew?'),
        ],
      ],
    },
    {
      caption: T('The four fixed expressions'),
      head: [T('Expression'), T('Literally'), T('English'), T('What it questions')],
      rows: [
        [T('{shì bú shì}'), T('is, not is?'), T('is it or not?'), T('the verb {shì}')],
        [T('{yǒu méi yǒu}'), T('have, not have?'), T('have or not have?'), T('the verb {yǒu}')],
        [T('{hǎo bù hǎo}'), T('good, not good?'), T('good or not good?'), T('an adjective')],
        [T('{duì bú duì}'), T('right, not right?'), T('right or not right?'), T('the verb {duì}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the pattern of {是不是}?'),
    options: [
      T('{是} {不} {是} — the verb repeated with {bù} in the middle'),
      T('{不} {是} — the negation before the verb'),
      T('{是} {是} — the verb repeated with no particle'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the question "are you going or not?": 你____ (to go)'),
      answer: '去不去',
    },
    {
      kind: 'match',
      prompt: T('Match the expression to its meaning'),
      pairs: [
        { a: T('{是不是}'), b: T("is it or isn't it?") },
        { a: T('{有沒有}'), b: T('have or not have?') },
        { a: T('{好不好}'), b: T('good or not good?') },
        { a: T('{對不對}'), b: T('right or not right?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'After a clause that already has the subject {wǒ}, how do you ask "are you going?" without repeating the subject?',
      ),
      options: [T('{去嗎}'), T('{你去嗎}'), T('{去不}'), T('{你也去嗎}')],
      answer: 0,
    },
  ],
};
