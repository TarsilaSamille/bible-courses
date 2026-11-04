import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Syntax'),
  title: T('Heavy coordination: {而}, {雖}…{也} and the one-syllable connectives'),
  subtitle: T(
    'Mandarin links whole clauses with half a dozen words, and almost all of them need a second half',
  ),
  body: C(`
## What a conjunction actually links

Portuguese has a word for every relation between clauses: and, but, because, therefore, although. Mandarin has half a dozen in the written text and none in speech. And the one it has does not link clauses: it links verbs. {ér} is the operator of heavy coordination, and what it coordinates is the predicate.

In {tā ér wǒ}, "he and I", the {ér} stands between two noun phrases and there is no verb anywhere in the sentence. That is the proof that coordination in Mandarin does not pass through the clause. In {tā lái ér wǒ qù}, "he comes and I go", the same {ér} links two verbs, and the subject appears once, at the front. Someone translating from Portuguese writes "he comes, and I go", with the subject repeated, and produces the speech of a child.

The restriction comes from the lesson on serial verbs: when the verbs form a chain with a single sense, the {ér} does not enter. {wǒ lái kàn nǐ} takes no {ér}, because the order already says that the second action serves the first. The {ér} enters when the order is not enough.

**The {ér} comes after the first verb, or after the adverb, and before the second.**

## One character, three readings

The {ér} is one thing and what follows it decides how to read it. {zǒu ér hūr} is "he goes out and shouts"; {zǒu ér bù hūr} is "he goes out and does not shout"; {zǒu ér hūr de gèng lóng} is "he goes out and shouts even longer. Three sentences, one word, and Mandarin puts nothing between the {ér} and the verb to warn you which of the three you are reading. Someone translating from Portuguese looks for a different conjunction for each sentence and always finds the same one.

What changes in each pair is the rest of the sentence. Contrast comes with {bù}, with {què}, or with an opposite adjective. Sequence comes from another verb with no negation. Progression comes from {gèng}, "even more", or from a stronger adjective. A pair helps decide: {ér} with {què} is always contrast, {ér} with {yě} is always sequence.

The case that trips up a beginner is the {ér} with no second verb at all. {gānxīn ér tīng}, {zǐxì ér kàn}, {bēi ér xíng}: in all three there is an adverb, the {ér}, and a single verb. Mandarin uses the same {ér} to link an adverb to a verb, and someone who looks for a second clause after it finds none, and concludes they have misread. They have not: {bēi ér xíng} written {步行} is a single word, and the {ér} sits there because the written form of the old word keeps the mark.

## Concession and the half that is missing

Concession admits a fact in order to deny the conclusion that fact would lead to. Mandarin does it with a pair, and the old text has two members for the same idea: {suī} on its own, which waits for {què} on the other side, and {suīrán}, which carries the whole pair inside itself and comes out with {yě} or with {què} at the close.

The difference between the two is not of degree, it is of structure — one brings the second half along, the other leaves the second half to context. A reader will find both on the same page, and the choice tells you the register of the text, not its meaning. {suīrán} is the form of modern translations and of the epistles; {suī} on its own is written Mandarin, and it is what shows up in the poetic books.

**{suī} never comes alone: {què} or {yě} waits on the other side.**

The pair also has a fixed shape, and the close changes the sense without changing the concession. {suīrán … {yě}} admits the fact and keeps the conclusion, "although, and even so"; {suīrán … {què}} admits the fact and cuts the conclusion, "although, but not". Between the two, what changes is strength, not structure.

## One-syllable connectives, and the second half

The ones left over are few, and nearly all of them come paired with a close that carries the sense.

- {qiě}: "and", "and also": it adds, and never introduces contrast. The expected pair is {érqiě}, "and even more", which has already hardened into a single word.
- {nǎi}: "then", "so". After a negative such as {fēi}, the sense shifts and it becomes "otherwise".
- {gù}: "therefore": written Mandarin, the sibling of {suǒyǐ}, which is the spoken form of the same pair.
- {ruò}: "if", and it brings the close {zé}: {ruò} {bù} {zhǔ} {shíhou} {zé} {shàng}, "if supper is not ready, then".
- {fán}: "all", and it closes with {jiē}: {fán} {yǒu} {xuèqì de rén} {jiē} {shò}, "every person of flesh and blood".
- {qǐ}: "how could", only in a rhetorical question, and never asking for an answer.

**After a negative, {nǎi} means "otherwise", not "then".**

The hook is in the New Testament, and it uses the pair in two ways. John 11:25 gives the full form: {suīrán sǐ le, yě bì fùhuó}, "although he has died, he will live again". John 6:38 gives the other pair: {bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi}, "not to do my will, but the will of him who sent me". And the hardest coordination in the same book carries no mark at all: John 1:5, {guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng}, writes "the light shines in the darkness, and the darkness has not taken it up" without a particle, a conjunction, or a comma that Portuguese would not have. The contrast sits entirely in the second half of the sentence, and someone looking for {ér} after {lǐ} does not find it.`),
  vocab: [
    V('ér', '而', 'and, but; the operator of heavy coordination (ér)'),
    V('suī', '虽', 'although; opens a pair and waits for què (suī)'),
    V('suīrán', '虽然', 'although; the whole pair in a single word (suīrán)'),
    V('què', '却', 'but; the close of an adversative (què)'),
    V('yě', '也', 'also; the close of concession and of sequence (yě)'),
    V('qiě', '且', 'and, and also; never introduces contrast (qiě)'),
    V('nǎi', '乃', 'then; otherwise, after a negative (nǎi)'),
    V('gù', '故', 'therefore; written Mandarin, sibling of suǒyǐ (gù)'),
    V('ruò', '若', 'if; brings the close zé (ruò)'),
    V('zé', '则', 'then; the close of 若 and of the adversative (zé)'),
    V('fán', '凡', 'all, everyone who; opens a pair with jiē (fán)'),
    V('jiē', '皆', 'all; closes the pair with fán (jiē)'),
    V('gèng', '更', 'even more; progressive degree (gèng)'),
    V('érqiě', '而且', 'and even more: the pair of ér fused into one word (érqiě)'),
    V('qǐ', '岂', 'how could; only in a rhetorical question (qǐ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} links verbs to each other, or adverbs to verbs, and sits after the first member: {tā lái ér wǒ qù}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The sense of {ér} comes from what follows it: contrast, sequence, or progression. The form is the same in all three.',
      ),
    },
    { n: '3', text: T('{suī} never appears alone: {què} or {yě} waits on the other side.') },
    {
      n: '4',
      text: T(
        '{ér} does not enter a series of verbs with a single sense: {wǒ lái kàn nǐ} stays without it.',
      ),
    },
    { n: '5', text: T('After a negative, {nǎi} means "otherwise": {bú shì …, nǎi shì …}.') },
  ],
  notes: [
    {
      label: T('The {ér} that coordinates no clauses'),
      text: T(
        '{bēi ér xíng} has an adverb, the {ér}, and one verb, and no second clause. The same piece links adverb to verb and verb to verb. Someone who looks for a clause after the {ér} everywhere understands neither coordination nor this, and concludes they misread when the text was right.',
      ),
    },
    {
      label: T('Concession admits, it does not deny'),
      text: T(
        '{suīrán} … {yě} says the fact is true and so is the conclusion. What Mandarin does not do is deny the fact: the negation, when the fact itself is what is conceded, is an ordinary negative, {bù} or {méi}, inside the second half. A reader who renders it "although it were not true" has put the not in the wrong place and erased the admitted fact.',
      ),
    },
  ],
  examples: [
    {
      text: '雖然死了，也必復活',
      gloss: T('suīrán sǐ le, yě bì fùhuó — although he has died, he will live again (John 11:25)'),
    },
    {
      text: '不是要照自己的意思行，乃是要遵行差我來者的意思',
      gloss: T(
        'bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi — not to do my will, but the will of him who sent me (John 6:38)',
      ),
    },
    {
      text: '光照在黑暗裏，黑暗就不領受光',
      gloss: T(
        'guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng — the light shines in the darkness, and the darkness has not taken it up (John 1:5)',
      ),
    },
    {
      text: '學而不思則罔，思而不學則殆',
      gloss: T(
        'xué ér bù sī zé wǎng, sī ér bù xué zé dài — to learn without thinking is to be lost (Anal. 2:15)',
      ),
    },
    {
      text: '專心而聽',
      gloss: T('gānxīn ér tīng — to listen with attention: an adverb, {ér}, and a single verb'),
    },
    {
      text: '步行',
      gloss: T('bùxíng — to go on foot; {bēi ér xíng} written {步行} is a single word'),
    },
    {
      text: '人不知而不慍',
      gloss: T(
        'rén bù zhī ér bù yùn — not to be angry with those who do not understand (Anal. 2:2)',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same {ér}, three readings'),
      head: [T('Reading'), T('What follows'), T('Example'), T('Gloss')],
      rows: [
        [
          T('sequence'),
          T('a verb, with no negation'),
          T('{zǒu ér hūr}'),
          T('he goes out and shouts'),
        ],
        [
          T('contrast'),
          T('a verb with {bù} or {què}'),
          T('{zǒu ér bù hūr}'),
          T('he goes out and does not shout'),
        ],
        [
          T('progression'),
          T('a stronger adjective, or {gèng}'),
          T('{zǒu ér hūr gèng lóng}'),
          T('he goes out and shouts even longer'),
        ],
        [
          T('adverb'),
          T('an adverb and a verb, no second verb'),
          T('{gānxīn ér tīng}'),
          T('he listens with attention'),
        ],
      ],
    },
    {
      caption: T('Fixed pairs: the opening never comes alone'),
      head: [T('Opening'), T('Close'), T('Sense'), T('Example')],
      rows: [
        [T('{suīrán}'), T('{yě}'), T('although, and even so'), T('{suīrán sǐ le, yě bì fùhuó}')],
        [T('{suīrán}'), T('{què}'), T('although, but not'), T('{suīrán shì zhī shì, què bù zhēn}')],
        [T('{suī}'), T('{què}'), T('although, but'), T('{suī shì zhī shì, què bù rú suǒ yù}')],
        [T('{ruò}'), T('{zé}'), T('if, then'), T('{ruò bù zhǔ shíhou, zé shàng}')],
        [T('{fán}'), T('{jiē}'), T('all, all'), T('{fán yǒu xuèqì de rén}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {信我的人，雖然死了，也必復活}, what is the {yě} doing?'),
    options: [
      T('it closes the pair that {suīrán} opened: the fact is admitted and the conclusion stands'),
      T('it marks contrast with what came before'),
      T('it says the speaker did not know what would happen'),
      T('it negates the verb {fùhuó}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the sentence of John 11:25: 信我的人，____死了，也必復活'),
      answer: '雖然',
    },
    {
      kind: 'match',
      prompt: T('Match the opening to what the whole pair means'),
      pairs: [
        { a: T('{suīrán … yě}'), b: T('although, and even so') },
        { a: T('{suīrán … què}'), b: T('although, but not') },
        { a: T('{ruò … zé}'), b: T('if, then') },
        { a: T('{fán … jiē}'), b: T('all, all') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {專心而聽}, how many verbs are there?'),
      options: [
        T('two: one in the {ér} and one after'),
        T('one: the {ér} links the adverb to the verb'),
        T('three: adverb, {ér} and verb all count as verbs'),
        T('none: {gānxīn} is the verb'),
      ],
      answer: 1,
    },
  ],
};
