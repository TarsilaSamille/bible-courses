import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Pronouns'),
  title: T('Interrogatives and the particle {嗎}'),
  subtitle: T(
    'The question inverts nothing: same order as the statement, and a particle at the end',
  ),
  body: C(`
## The **question** does not move

English marks the question by inversion. From "you like apples" you get "do you like apples?": the verb climbs into the subject's place and the interrogative shows in the shape of the sentence. Chinese does none of that. {nǐ xǐhuan píngguǒ}, you like apples, and {nǐ xǐhuan píngguǒ ma} are the same sentence: the same four elements, the same order, one particle at the end. Nothing climbed, nothing descended.

The proof comes from verbs where inversion would change the meaning. "Do you eat apples?" and "Do you like apples?" happen to match Chinese, because both verbs take an object; but Chinese rejects "apples eat?" too, {píngguǒ chī}, a noun glued to a verb with no subject. That is neither a question nor a **statement**: it is the verbless sentence with a verb pushed into the middle, and it is wrong for exactly the same reason.

The mirror-image mistake is the one almost everyone makes: moving the subject to the end. {xǐhuan píngguǒ nǐ ma} is not Chinese, is not a question, and means nothing. Chinese has no delayed-subject sentence that English and Portuguese built; it has the fixed subject-verb-object order plus a particle that does the work of interrogation.

## {嗎}: one particle that does everything

{ma} is the yes-or-no particle, and it is a single piece. Watch the same sentence in three states:

- statement — {nǐ xǐhuan píngguǒ}, "you like apples".
- **negative** — {nǐ bù xǐhuan píngguǒ}, "you do not like apples": the negation is {bù}, and nothing else changes.
- question — {nǐ xǐhuan píngguǒ ma}, "do you like apples?": the same sentence with {ma} at the end.

What changes is not the sentence but the type. That is why {ma} is the cheapest particle in the language, one syllable with no meaning of its own that still makes the whole difference.

One restriction follows, and it comes from position: {ma} needs a verb or an adjective to lean on. {nǐ lái ma} works, {nǐ hěn lèi ma} works, and {nǐ shì ma}, "are you?", works too, because {shì} is the verb that most readily takes {ma} in Mandarin: it links two noun phrases, and the question falls naturally on that link. What fails is {ma} with nothing to lean on at all: {nǐ ma} is not a question, it is noise.

The second restriction is about type, not position: {ma} only closes a yes-or-no question. {nǐ yào qù nǎlǐ ma} is wrong, because the answer to a question about place cannot be yes or no. That is the practical test: if the answer can begin with "yes" or "no", use {ma}; if it cannot, leave it out.

Chinese tells apart what English tells apart, by opposite means. English tells them apart by inverting; Chinese tells them apart by choosing a particle, or by choosing none at all.

## The neutral question and the other two particles

A question that does not expect a yes or a no does not need {ma}. {nǐ yào qù nǎlǐ}, "where are you going?", is complete: what marks the question is the intonation, which rises at the end, and the absence of {ma}. The same holds for {nǐ chī shénme} and {tā shì shéi}.

In those cases Chinese has two other particles that English does not have:

- {ne} is the particle of reference: it comes in when the question lands on something already mentioned, on what the other person just said. {nǐ shì shénme?} asks the name of someone who introduced themselves; {nǐ shì shénme ne?} asks the name of the *other* one. It points rather than interrogates.
- {ba} is the particle of suggestion and confirmation: {zǒu ba} proposes, {hǎo ba} closes an agreement, {shì ba} asks the listener to confirm what was said.

With three particles where English has one mouth, anyone translating out of English gets it wrong twice in the same paragraph: they put {ma} where there was intonation, and intonation where there was a particle.

## The pronouns, the position, and Peter's question

An interrogative pronoun occupies the place the noun would occupy, and the noun's place is before the verb, like any object. So position is not a detail here: it is the position of the noun.

{wèishénme} is the only one that carries visible marking: it is wèi plus shénme, "for what" turned into "why". {duōshao} asks price and uncountable quantity, as in {duōshao qián}, how much; the relative that counts objects is {jǐ}, in {jǐ běn shū}. Both live in the same position, the noun's and before the verb, and neither takes {ma}.

The biblical payoff is exact: John 6:68, {nǐ wǎng nǎlǐ qù}, "where are you going?", is Peter's question to Jesus. It is a question with no inversion, no {ma}, the pronoun in the noun's place and the verb at the end. Everyday speech adds the verb {yào} and says {nǐ yào dào nǎlǐ qù}; John 6:71 repeats the {yào}, {nǐ yào wǎng nǎlǐ qù}, and John 1:38 asks the same question after làbì, "Rabbi". Three questions, one sentence.

And the {和合本} shows why the written form is worth learning: {shéi} has a spoken long form, shuí; {nǎlǐ} has a spoken nǎr; {zěnme} has the more formal written zěnyàng. The Bible always prints the written form. Anyone who learned by speaking recognises the sentence and not the character, and anyone who only reads never had the problem, because the question never moves.`),
  vocab: [
    V('ma', '吗', 'yes-or-no question particle; always at the end (ma)'),
    V('ne', '呢', 'reference particle: the question lands on something already said (ne)'),
    V('ba', '吧', 'particle of suggestion and confirmation (ba)'),
    V('shéi', '谁', 'who, someone (written form); spoken shuí (shéi)'),
    V('shuí', '谁', 'spoken form of shéi, common outside the north (shuí)'),
    V('shénme', '什么', 'what (shénme)'),
    V('nǎlǐ', '哪里', 'where (written form); spoken nǎr (nǎlǐ)'),
    V('nǎr', '哪儿', 'where, in speech (nǎr)'),
    V('zěnme', '怎么', 'how (zěnme); the more formal written form is zěnyàng'),
    V('duōshao', '多少', 'how much, what price (duōshao)'),
    V('wèishénme', '为什么', 'why; it is wèi plus shénme (wèishénme)'),
    V(
      '和合本',
      '和合本',
      'the union translation of the Bible into Chinese, the written form this course follows',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The question keeps the order of the statement: {nǐ xǐhuan píngguǒ ma} is {nǐ xǐhuan píngguǒ} plus {ma} at the end. Nothing inverts.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ma} closes a yes-or-no question and needs a verb or adjective before it: {nǐ lái ma}, never {nǐ shì ma}.',
      ),
    },
    {
      n: '3',
      text: T('An open question drops {ma}: {nǐ yào qù nǎlǐ}, never {nǐ yào qù nǎlǐ ma}.'),
    },
    {
      n: '4',
      text: T(
        'The interrogative pronoun takes the place of the noun, which is before the verb: {nǐ yào qù nǎlǐ}.',
      ),
    },
    { n: '5', text: T('{ma} asks, {ne} refers back to what was said, {ba} proposes or confirms.') },
  ],
  notes: [
    {
      label: T('Why {ma} will not close an open question'),
      text: T(
        '{nǐ yào qù nǎlǐ ma} is not Chinese: {nǎlǐ} asks for a place, and the answer cannot be yes or no. If you want {ma}, reformulate the question: {nǐ yào qù ma} — "are you going?".',
      ),
    },
    {
      label: T('The {和合本} writes what speech shortens'),
      text: T(
        '{shéi} (spoken shuí), {nǎlǐ} (spoken nǎr), {zěnme} (also written zěnyàng). The Bible almost always uses the written form, which is longer and clearer. A reader recognizes what they have already heard; a speaker recognizes the sentence and never the character.',
      ),
    },
  ],
  examples: [
    { text: '你喜歡蘋果嗎', gloss: T('nǐ xǐhuan píngguǒ ma — do you like apples?') },
    { text: '你是誰', gloss: T('nǐ shì shéi — who are you?') },
    { text: '你要吃什麼', gloss: T('nǐ yào chī shénme — what are you going to eat?') },
    { text: '你往哪裡去', gloss: T('nǐ wǎng nǎlǐ qù — where are you going? (John 6:68)') },
  ],
  tables: [
    {
      caption: T('One particle, three sentences'),
      head: [T('Type'), T('Sentence'), T('Gloss')],
      rows: [
        [T('statement'), T('{nǐ} {xǐhuan} {píngguǒ}'), T('you like apples')],
        [T('negative'), T('{nǐ} {bù} {xǐhuan} {píngguǒ}'), T('you do not like apples')],
        [T('question'), T('{nǐ} {xǐhuan} {píngguǒ} {ma}'), T('do you like apples?')],
      ],
    },
    {
      caption: T('Three particles where English has one'),
      head: [T('Particle'), T('What it does'), T('Where it goes'), T('Example')],
      rows: [
        [
          T('{ma}'),
          T('asks for yes or no'),
          T('at the end, after the verb'),
          T('{nǐ} {lái} {ma} are you coming?'),
        ],
        [
          T('{ne}'),
          T('asks about something already said'),
          T('at the end, on what was cited'),
          T('{nǐ} {shì} {shénme} {ne} and you?'),
        ],
        [
          T('{ba}'),
          T('proposes or confirms'),
          T('at the end, on what is proposed'),
          T('{wǒ} {men} {zǒu} {ba} shall we go?'),
        ],
      ],
    },
    {
      caption: T('Interrogatives, all of them before the verb'),
      head: [T('Pronoun'), T('Asks'), T('Example'), T('Note')],
      rows: [
        [T('{shéi}'), T('who'), T('{nǐ} {shì} {shéi}'), T('spoken form shuí')],
        [T('{shénme}'), T('what'), T('{nǐ} {chī} {shénme}'), T('also asks "which"')],
        [T('{nǎlǐ}'), T('where'), T('{nǐ} {qù} {nǎlǐ}'), T('spoken nǎr')],
        [T('{zěnme}'), T('how'), T('{nǐ} {zěnme} {qù}'), T('also written zěnyàng')],
        [T('{duōshao}'), T('how much'), T('{duōshao} {qián}'), T('price and uncountables')],
        [T('{wèishénme}'), T('why'), T('{wèishénme} {bù} {qù}'), T('it is wèi plus shénme')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you ask "do you like apples?" in Chinese?'),
    options: [
      T('{nǐ xǐhuan píngguǒ ma}'),
      T('{xǐhuan píngguǒ nǐ ma}'),
      T('{ma nǐ xǐhuan píngguǒ}'),
      T('{nǐ ma xǐhuan píngguǒ}'),
    ],
    answer: 0,
    hint: T(
      'The order does not change: the particle goes at the end and the subject stays where it was.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the question "do you like apples?": 你喜歡蘋果____'),
      answer: '嗎',
    },
    {
      kind: 'match',
      prompt: T('Match the interrogative pronoun to the question'),
      pairs: [
        { a: T('{shéi}'), b: T('who') },
        { a: T('{shénme}'), b: T('what') },
        { a: T('{nǎlǐ}'), b: T('where') },
        { a: T('{zěnme}'), b: T('how') },
        { a: T('{duōshao}'), b: T('how much') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which of these is the correct question for "where are you going?"'),
      options: [
        T('{nǐ dào nǎlǐ ma}'),
        T('{nǐ wǎng nǎlǐ qù}'),
        T('{nǎlǐ nǐ qù}'),
        T('{qù nǐ nǎlǐ}'),
      ],
      answer: 1,
    },
  ],
};
