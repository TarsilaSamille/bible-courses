import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Syntax'),
  title: T('The possessive and the particle {的}'),
  subtitle: T('One particle where Portuguese puts article, adjective and preposition all at once'),
  body: C(`
## One particle where Portuguese puts article and adjective

"My book" has two pieces: the article, which exists because the noun is countable, and the possessive, which says whose it is. Chinese has neither. It writes **{wǒ de shū}**, {wǒ}, the particle {de} and {shū}, and the same phrase works for ten thousand different books.

That is economy, not loss of information: {de} does not say *whose*, it says **of whom**. {tā de shū} is his book, {wǒ de shū} is mine, {Zhāng de shū} is Zhang's. Three words swap and the system keeps working, with no article, no gender, no agreement.

The position is the genitive one: **{noun} + {de} + {noun}**. What comes first is the possessor, what comes second is the possessed. In "Zhang's book" Zhang possesses and the book is possessed, and the Chinese order matches the Portuguese one. What differs is everything else: instead of a two-word phrase with an explicit preposition, Chinese has a particle that does not translate word for word and is recognised by position.

## Three uses, one particle

Only one of them is possession.

Possession. {wǒ de shū}, my book. The possessor comes first, the possessed after, and {de} sits between them. It is the most common use and the only one that works with a pronoun.

Attribution, or description. {hóngsè de huā}: {hóngsè} is "red", {huā} is "flower", and {de} links an adjective to a noun. {Zhōngguó de dúzhě}, "Chinese reader", with {Zhōngguó}, China, standing in for the adjective.

Here is the inversion that frightens every beginner: in Portuguese the attribute comes after the noun, "flower red", in Chinese it comes before, "red flower". Translating word for word you write {huā hóngsè} and sound like someone talking backwards. It is the order of {hóngsè de huā} turned around, and Chinese does not admit that turning: throughout the language, not only here, it prefers to qualify first and name afterwards.

Purpose. {dúshū de fāngfǎ}, "the method of reading books": {dúshū} is an action, {fāngfǎ} is "method", and {de} links not one thing to another but a doing to a name. It is the most advanced use, and context is the only signal: if {de} follows a concrete modified noun, it is possession; if it follows a verb, it is purpose. In {tā yǒu yí ge dúshū de fāngfǎ}, "he has a method of reading", {de} comes after the verb {yǒu}, far from any possessor, and the listener is not troubled.

## The possessive after the verb

{de} also appears where Greek would put an objective genitive. The indirect object comes before the verb: {wǒ gěi tā de shū}, "the book I gave him". The {gěi}, "to give", sits in the middle; the indirect object {tā}, "to him", comes before it; and the {de}, stuck to {tā}, says to whom the book belongs after the action: the book is his, not mine, even though I am the one handing it over.

It is the same mechanism as {tā de shū}, with a difference of position that Portuguese does not have: here {de} comes after the verb, not before. Chinese has both orders and knows which to use. {wǒ de shū}, possessive in front. {wǒ gěi tā de shū}, possessive behind, glued to the pronoun carrying it.

### When {de} is obligatory

With pronominal possessives {de} is **not optional**: {wǒ de shū} is grammatical and {wǒ shū} is wrong. It is not that {wǒ} loses its meaning on its own; it is that {wǒ} there is no longer a pronoun but a **bound form**. {wǒ} means "I" on its own, but inside {wǒ shū} it is grammatically fused to the noun, and that is the place where Chinese writes the particle.

Relaxed speech and older writing drop that {de} freely. You will hear {wǒ shū} in the street and read {wǒ shū} in a twentieth-century classic without anyone blinking. In colloquial registers and traditional literary prose the omission is common, mostly when the possessor is a family name or when the noun follows immediately: {Zhāng de shū} and {Zhāng shū} turn up at different rates depending on the source. Modern grammar says {de} is obligatory; real life says {de} is droppable. Neither rule is an error by itself.

### {de} and {dé}: the same sound

{de} and {dé} are the same sound written down and **different characters**, and position tells you which is which.

- {de}, between two nouns: {wǒ de shū}, "my book". It is a particle, has no meaning of its own, and goes between nouns.
- {dé}, after an adjective: {kuài dé}, "fast in a way", that is, "very fast". It comes after the adjective and says how, not of whom.

The pocket rule is short: if what follows is a noun, it is {de}; if what precedes is an adjective, it is {dé}. {hóngsè de huā} is {de}; {kuài dé} is {dé}. Confusing the two is not an error of meaning, it is an error of sound: the listener hears {de}, expects a noun, and gets something he cannot attach to anything.

## Psalm 23:1 and the particle that was missing

The most quoted verse in Chinese is a demonstration of {de}: {Yēhéhuá shì wǒ de mùzhě}, "the Lord is my shepherd".

Take the phrase apart: {Yēhéhuá} is the proper name, {shì} is the verb "to be", and the rest is the nominal predicate. What Chinese does here is treat {wǒ de mùzhě} as a unit: "that which is mine, and is a shepherd". The possessive {wǒ de} is not an apposition glued onto {mùzhě}; it is a phrase that works as a single thing. Notice that this is why Chinese says "my shepherd" and not "shepherd mine": it is not that freedom is missing, it is that {de} has already settled the link. In Chinese the possessive comes before the noun by default, and {de} is what makes that order irreversible.

And notice what {de} does to the original. Psalm 23:1 in Greek has the possessive pronoun stuck to the noun, "shepherd of mine", with no particle at all. That is the pronominal suffix, a device Hebrew uses constantly and Greek inherited. Chinese lost that path: there is no way to glue a pronoun onto a noun. The {和合本} adds {de} because it has to, not because the translator wanted to say more. It is the same information carried by whatever means each language has.`),
  vocab: [
    V('de', '的', 'possessive and attributive particle (de)'),
    V('shū', '书', 'book (shū)'),
    V('huā', '花', 'flower (huā)'),
    V('hóngsè', '红色', 'red (hóngsè)'),
    V('dúzhě', '读者', 'reader (dúzhě)'),
    V('fāngfǎ', '方法', 'method (fāngfǎ)'),
    V('gěi', '给', 'to give, to (gěi)'),
    V('mùzhě', '牧者', 'shepherd, pastor (mùzhě)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Possession: **{noun} + {de} + {noun}** — {wǒ de shū}, my book. The possessor comes first.',
      ),
    },
    {
      n: '2',
      text: T(
        'Attribution: the adjective goes BEFORE the noun — {hóngsè de huā}, red flower. The opposite of Portuguese.',
      ),
    },
    {
      n: '3',
      text: T(
        'If the word before {de} is a verb, it is purpose — {dúshū de fāngfǎ}, the method of reading.',
      ),
    },
    {
      n: '4',
      text: T('After the verb, {de} marks the possessor: {wǒ gěi tā de shū}, the book I gave him.'),
    },
    {
      n: '5',
      text: T(
        '{de} between a pronoun and a noun is obligatory: {wǒ shū} is wrong, {wǒ de shū} is right. Relaxed speech sometimes drops it.',
      ),
    },
  ],
  notes: [
    {
      label: T('{de} and {dé}: same sound, opposite positions'),
      text: T(
        '{de} links two nouns and sits between them: {hóngsè de huā}. {dé} follows an adjective and says manner: {kuài dé}, fast in a way. Position says which is which — before a noun it is {de}, after an adjective it is {dé}.',
      ),
    },
    {
      label: T('The particle Greek did not need'),
      text: T(
        'Hebrew and Greek use a pronominal suffix — "shepherd mine" with no particle. Chinese lost that device, and {de} is the rebuilding of the link. That is why Psalm 23:1 in the {和合本} has one word more than the Greek and means exactly the same thing.',
      ),
    },
  ],
  examples: [
    { text: '我的书', gloss: T('wǒ de shū — my book') },
    { text: '红色的花', gloss: T('hóngsè de huā — red flower') },
    { text: '我给他的书', gloss: T('wǒ gěi tā de shū — the book I gave him') },
    { text: '耶和华是我的牧者', gloss: T('Yēhéhuá shì wǒ de mùzhě — the Lord is my shepherd') },
  ],
  tables: [
    {
      caption: T('One particle in three places'),
      head: [T('Phrase'), T('What it links'), T('Gloss'), T('Order')],
      rows: [
        [
          T('{wǒ} {de} {shū}'),
          T('possessor and possessed'),
          T('my book'),
          T('attribute after the noun'),
        ],
        [
          T('{hóngsè} {de} {huā}'),
          T('description and noun'),
          T('red flower'),
          T('attribute BEFORE the noun'),
        ],
        [
          T('{dúshū} {de} {fāngfǎ}'),
          T('verb and noun'),
          T('method of reading'),
          T('{de} comes after the verb'),
        ],
      ],
    },
    {
      caption: T('Where the order flips'),
      head: [T('Function'), T('Portuguese'), T('Chinese')],
      rows: [
        [T('possession'), T('the book **my**'), T('{wǒ de} {shū}')],
        [T('attribution'), T('flower **red**'), T('{hóngsè de} {huā}')],
        [T('object possessive'), T('the book **I gave him**'), T('{wǒ gěi} {tā de} {shū}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you write "Chinese reader" with the attribute in the right place?'),
    options: [
      T('{dúzhě Zhōngguó}'),
      T('{Zhōngguó de dúzhě}'),
      T('{dúzhě de Zhōngguó}'),
      T('{de Zhōngguó dúzhě}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "my book" with the particle: 我____书'),
      answer: '的',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its function'),
      pairs: [
        { a: T('{wǒ de shū}'), b: T('possession: my book') },
        { a: T('{hóngsè de huā}'), b: T('attribution: red flower') },
        { a: T('{dúshū de fāngfǎ}'), b: T('purpose: method of reading') },
        { a: T('{kuài dé}'), b: T('manner, after an adjective — the other character') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form means "the book I gave him", with the possessor after the verb?'),
      options: [
        T('{de shū wǒ gěi tā}'),
        T('{wǒ gěi shū tā}'),
        T('{wǒ gěi tā de shū}'),
        T('{tā de wǒ gěi shū}'),
      ],
      answer: 2,
    },
  ],
};
