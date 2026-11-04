import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Pronouns'),
  title: T('Four "I" and four "you": the scale of relationship Portuguese does not have'),
  subtitle: T(
    'Picking {nae} where {neo} belongs is a social error, not a grammatical one — and the verb ending already is the pronoun',
  ),
  body: C(`## Four "I", four "you", and the scale running from {de} to {gyeonui}

Korean has four words for "I" and four for "you", and not one of them is a stylistic variant. Each one states a position: the speaker places themselves above the listener, below them, or at the same level.

{nae} is the neutral "I", the default, the one that works with a stranger, at work, in ordinary life. {neo} is the neutral-polite "I": the same neutrality one rung higher, the one used with a client, a boss, someone treated with courtesy. {de} is "I myself": the pronoun that lowers the speaker, that places them underneath the conversation, and that is why it is the "I" of the servant and of the devout. And {je} sits at the opposite end: only with very close friends or with God. Saying {je} to a stranger is as wrong as saying in Portuguese what nobody says.

The "you" side is the mirror image. {ne} is the neutral "you", friend to friend. {ni} is the polite "you", a form of address. And the last two are not ordinary pronouns: {dangsin} literally means "the one below", and it is the servant's singular for the king, the Bible's word for the one believers address as Christ; {gyeonui} is "the one above", the lord being answered, and it is the form Jesus uses for God in the Korean translation. Both are arranged on the same scale that runs from {nae} to {gyeonui}, and that scale is the whole subject.

What the scale measures is not manners: it is relationship. Each word says where the speaker places themselves and, with that, where they place the other. Which is why choosing {nae} where {neo} belonged, treating a client as an equal, is a SOCIAL error and not a grammatical one. The sentence is syntactically perfect, and that is exactly why the mistake escapes: it does not show up in the grammar, it shows up in the distance you put between two people. A speaker of Portuguese rarely has this problem, because in Portuguese the "I" is always the same "I".

## The particle adapts, and the verb already is the pronoun

The topic particle adapts to the pronoun the way it adapts to any word. The pronoun {je} ends in a vowel and therefore takes the soft form: {je-neun}. The same goes for {nae-neun} and {de-neun}, and for {geo-neun} and {yeo-neun}. Nothing new: it is the same rule from the particles, and that is why it matters here.

The difference that separates Korean from Portuguese comes one step further on. In Portuguese, "I eat" carries two marks: the pronoun {nae} and the verb inflection. In Korean the inflection is enough. {meokneunda}, "I eat", already says the person is first: the verb ending IS the pronoun. Which is why the subject pronoun is almost always left out, and why anyone translating from Portuguese word for word ends up writing pronouns that Korean treats as redundancy.

That changes what gets translated. In John 1:1, "in the beginning was the Word", the Korean version puts in no subject at all, because the verb already carries it. Also in John 1:1, in the part "I am the Word", the pronoun does appear, and there the choice is theological: {nae} is the neutral one, {de} is the lowered one, and the 1961 translation uses {nae}. A translator writing {de} is not varying a synonym: that translator is deciding how low Jesus puts his own voice. The same verse, with the same verb, has in its two halves one absence of pronoun and one presence, and the presence is the one carrying the weight.

And that choice has a date. The first Korean Bible translation, the one of 1883, came out with the text in Chinese characters, and there Jesus was not made into a pronoun at all: he was named by a title, the "High Lord", written in hanja, and no pronoun showed up. Only when the text moved to hangul, in the 1961 revision, did the question stop being which title to use and start being which pronoun to use. The move from title to pronoun is the theological history of Korean Bible translation, and it is written into the choosing of one letter.

## Gender: only in the third person

Here Korean does the opposite of Portuguese. In Portuguese, "he" and "she" are the same word with the verb agreeing; in Korean gender is not on the verb but on the pronoun, and the pronoun is the only place in the system where it appears.

{geo} is he, {yeo} is she. Those are the only two gendered pronouns in Korean. Everything else is neutral: {nae}, {neo}, {de}, {ne}, {ni} do not distinguish man from woman, nor speaker from listener. And {dangsin} and {gyeonui}, the two ends of the scale, are not gendered either: the servant and the lord have a position, not a sex.

The practical consequence for anyone reading the Bible: when the Korean text says {geo}, the gender information is not there, and a translator ends up adding it. And the common third person is {geo}, which is also the demonstrative "that, near": the same sound serves for "he" and for "that over there", and it is the position in the sentence that separates the two uses. Gender in Korean is a detail of the third person system, not a property of the language.

## This, that, and the possessive particle

The demonstratives are few, and nearly all of them work as a sentence-final particle. {ige} is this, the thing being pointed at. {geugeo} is that, the thing over there. {jegeum} is that which is far from the speaker. {eon} is that one over there, what the speaker indicates but cannot reach, the demonstrative of the sermon, the thing pointed at from a distance while one speaks.

The possessive particle is {ui}, and it binds the pronoun to the noun: "my book" is {nae-ui} and the book. The possessive comes BEFORE the noun, not after as in Portuguese. That is the same tie that appears in Japanese and in Mandarin: in all three languages the genitive goes before the noun, and it is the pronoun's position that says so. Saying "book my" in Korean is as wrong as saying "book my" in Portuguese.

And the pronoun can disappear inside the possessive, as in "his book", where only the particle survives. It is the same move as the topic particle: once the particle already carries the reference, repeating the pronoun only adds weight. The general rule of Korean is this: explicit pronoun when the relationship matters, omitted pronoun when the verb or the particle already said it.
`),
  vocab: [
    V('je', '저', 'I: only with very close friends or with God'),
    V('nae', '나', 'I: neutral, the default'),
    V('neo', '너', 'I: neutral-polite, one rung higher'),
    V('de', '데', 'I myself; the pronoun that lowers the speaker'),
    V('ne', '네', 'you: neutral, friend to friend'),
    V('ni', '님', 'you: polite, a form of address'),
    V('dangsin', '당신', 'the one below: the servant speaking of the king'),
    V('gyeonui', '견의', 'the one above: the lord being answered'),
    V('geo', '그', 'he'),
    V('yeo', '여', 'she'),
    V('ige', '이거', 'this: the thing being pointed at'),
    V('geugeo', '그거', 'that: the thing over there'),
    V('jegeum', '저것', 'that: far from the speaker'),
    V('eon', '언', 'that one: indicated but out of reach'),
    V('ui', '의', 'of; possessive particle (ui)'),
    V('meokda', '먹다', 'verb "to eat"; the ending already says the person'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The scale is not style, it is relationship: {nae} neutral, {neo} neutral-polite, {de} lowered, {je} only for the closest or for God.',
      ),
    },
    {
      n: '2',
      text: T(
        'On the "you" side: {ne} neutral, {ni} polite, {dangsin} the one below and {gyeonui} the one above. The last two are the ends of one scale.',
      ),
    },
    {
      n: '3',
      text: T(
        'The particle {eun} {neun} adapts to the pronoun as it adapts to any word: {je-neun}, {nae-neun}, {de-neun}. It is the rule of lesson 2, without exception.',
      ),
    },
    {
      n: '4',
      text: T(
        'The subject pronoun is almost always omitted, because the verb ending already is the pronoun. Korean "I eat" is just the verb with the first-person ending.',
      ),
    },
    {
      n: '5',
      text: T(
        'Possession is {ui} and it comes before the noun: "my book" is {nae-ui} and the book. With the particle, the pronoun can disappear.',
      ),
    },
  ],
  notes: [
    {
      label: T('Getting the pronoun wrong is getting the relationship wrong'),
      text: T(
        'Using {nae} where {neo} belonged does not produce a malformed sentence: it produces a grammatical sentence that is socially wrong. That is why the mistake escapes anyone still learning grammar, and why the pronoun choice matters more than any inflection.',
      ),
    },
    {
      label: T('Gender lives only in the third person'),
      text: T(
        '{geo} and {yeo} are the only two gendered pronouns in Korean; everything else is neutral or honorific. A translator writing "he" where the Korean says {geo} is adding information the original did not have.',
      ),
    },
  ],
  examples: [
    { text: '나는', gloss: T('na-neun — I (neutral: a vowel pronoun with the soft particle)') },
    { text: '내가', gloss: T('nae-ga — I, as subject') },
    {
      text: '먹는다',
      gloss: T(
        'meok-neun-da — I eat; the ending is the pronoun, with no {nae} anywhere in the sentence',
      ),
    },
    { text: '내 책', gloss: T('nae-ui chaek — my book: the possessive comes before the noun') },
    {
      text: '저는 하나님입니다',
      gloss: T('je-neun — I am God; the "I" of Jesus, and the choice on the scale is theological'),
    },
  ],
  tables: [
    {
      caption: T('The pronoun scale, from {de} to {gyeonui}'),
      head: [T('Pronoun'), T('Gloss'), T("Speaker's position"), T('Used with')],
      rows: [
        [T('{je}'), T('I'), T('closest intimacy'), T('very close friends, God')],
        [T('{nae}'), T('I'), T('neutral, the default'), T('anyone, ordinary life')],
        [T('{neo}'), T('I'), T('neutral-polite'), T('clients, a boss, a near-stranger')],
        [
          T('{de}'),
          T('I myself'),
          T('below the conversation'),
          T('the servant speaking, the devout speaking of themself'),
        ],
        [T('{ne}'), T('you'), T('a peer, at the same level'), T('friends, equals, colleagues')],
        [
          T('{ni}'),
          T('you'),
          T('above, out of courtesy'),
          T('respectful address, a form of treatment'),
        ],
        [
          T('{dangsin}'),
          T('the one below'),
          T('speaking of someone above'),
          T('the servant about the king, the faithful about Christ'),
        ],
        [
          T('{gyeonui}'),
          T('the one above'),
          T('speaking of someone above'),
          T('the lord being answered; God, in the Bible'),
        ],
      ],
    },
    {
      caption: T('Where gender exists in Korean'),
      head: [T('Person'), T('Pronoun'), T('Gender'), T('Note')],
      rows: [
        [T('first'), T('{nae}, {neo}, {de}'), T('none'), T('the "I" says nothing about sex')],
        [T('second'), T('{ne}, {ni}'), T('none'), T('nor does the "you"')],
        [
          T('third, the ends'),
          T('{dangsin}, {gyeonui}'),
          T('none'),
          T('servant and lord: position, not gender'),
        ],
        [T('third, ordinary'), T('{geo}'), T('masculine'), T('he')],
        [T('third, ordinary'), T('{yeo}'), T('feminine'), T('she')],
      ],
    },
    {
      caption: T('Demonstratives and the possessive particle'),
      head: [T('Word'), T('Gloss'), T('Where the thing is'), T('Note')],
      rows: [
        [
          T('{ige}'),
          T('this'),
          T('near, pointed at'),
          T('also works as a sentence-final particle'),
        ],
        [
          T('{geugeo}'),
          T('that'),
          T('over there, in sight'),
          T('the same sound as {geo}, changed by position'),
        ],
        [T('{jegeum}'), T('that'), T('far from the speaker'), T('the demonstrative of the sermon')],
        [
          T('{eon}'),
          T('that one'),
          T('far and out of reach'),
          T('what is indicated but cannot be reached'),
        ],
        [T('{ui}'), T('of'), T('no position'), T('possessive particle: {nae-ui} and the book')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('A servant speaks of the king. Which pronoun does he use for the king?'),
    options: [T('{dangsin}'), T('{gyeonui}'), T('{ni}'), T('{je}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "my book": 나____ 책'),
      answer: '의',
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the position it states'),
      pairs: [
        { a: T('{de}'), b: T('I myself: below the conversation') },
        { a: T('{neo}'), b: T('I: neutral-polite') },
        { a: T('{dangsin}'), b: T('the one below, the servant speaking of the king') },
        { a: T('{gyeonui}'), b: T('the one above, the lord being answered') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Why does the subject pronoun almost never appear in Korean?'),
      options: [
        T('because the verb ending already says the person'),
        T('because Korean has no pronouns'),
        T('because the verb is always left out'),
        T('because the particle {ui} replaces the pronoun'),
      ],
      answer: 0,
    },
  ],
};
