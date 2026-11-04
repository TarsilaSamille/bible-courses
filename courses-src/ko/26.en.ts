import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Particles'),
  title: T(
    '{eun} {neun} and {i} {gwa}: the particle of what is already known and the particle of what is being added',
  ),
  subtitle: T(
    'The two do not occupy different roles in the sentence; they occupy different moments of the conversation, and the second only shows up once the first has done its work',
  ),
  body: C(`## The test that separates the two

At first sight the difference looks like a difference of role: {eun} {neun} for one piece of the sentence, {i} {gwa} for another. The real difference is one of timing. {eun} {neun} can only appear on a noun the listener already knows. {i} {gwa} appears on the noun the sentence is establishing.

The test fits in one substitution, and it settles everything. Replace {eun} {neun} with {geuneun}, that is, with "that", and the sentence still answers a reasonable question: "as for that, it is a book". Replace {i} {gwa} with the same word and the question that comes up is narrower: "that is a book", and nothing beyond it. In {geuneun} chaek-imnida the noun was already in view and the sentence adds a classification. In {geuga} chaek-imnida the noun is what the sentence puts at the front, and the classification is what is being discovered.

Portuguese has no such choice. "This is a book" is a single sentence, and the context decides whether the speaker is classifying an object the listener already had or answering a question. Korean has to decide it on the surface, and that decision is what the listener uses to know what may be taken for granted.

## One topic, many clauses

A topic can govern a whole paragraph without being written again.

In 1 Corinthians 13 the first word of verse 4 is {sarang}, love, with {eun}: {sarang-eun}. And the same word opens each following clause, always with {eun}, without the pronoun Portuguese would have used appearing a single time. Five clauses, five times {sarang-eun}, and the listener understands that it is the same love from beginning to end. The new information of each clause is not in the noun: it is in the verb and the adverb, in "does not boast" and in "does not seek". Translating verb by verb writes "love…" five times and takes the verse apart; recognizing the topic reads one single clause.

Not every {eun} {neun} repeats. The same pronoun can open a second clause in contrast with the first: {nan-eun} haksang-imnida, I am a student, and {neo-neun} gyosu-imnida, you are a teacher. The two sentences stand in parallel and the second repeats nothing: it stands opposed. Same pronoun, same particle, and what changed is what the listener was already doing with the first clause.

The contrast is not marked by the particle. What marks it is a word outside it: {bangmyeon}, on the other hand, {myeon}, whereas, or the sentence-final particle that adds "in the case of". And the second place of contrast is {anira}, is not. In "this is a book, not a map", the topic stays intact and what receives the negation is the focus. The {neun} of {geuneun} is not what denies: what denies is the {i} closing "book".

## The words that only accept {i} {gwa}

There is a closed group of nouns that accept {i} {gwa} and refuse {eun} {neun}. They are the indefinite quantifiers: {amudo}, nobody, {amugeosdo}, nothing, {nugu}, who, {mujeosi}, what, {myeot}, some. It is not a matter of style. {amudo} answers "who?" and nothing else, and a topic particle needs a noun the listener can locate; "who" is not locatable, it is precisely the thing whose identity is not yet known. That is why {amudo} comes with {ga}, or with no particle at all, and never with {neun}: the form {amudo-neun} does not exist in the language.

The practical consequence is the one the Bible reader runs into most often. When the text brings {amudo} or {amugeosdo} before a negative verb, the negation is total and admits no correction. It is not "not everybody" nor "many do not": it is nobody, and the construction cannot be softened afterwards by any context. In the four Gospels the encounter is frequent, and the sense is always the same.

The mirror side of the rule is the question. {Nugu}, {mujeosi}, {eolma}, {jeoti} are the forms the question requires, and all of them carry {i} {gwa}: who said that, what is this. A question about somebody's identity has no answer in {eun} {neun}, because whoever asks still has no certainty that the thing exists. And the answer to that question comes back with {i} {gwa} for the same reason.

What is left is the reading criterion, and it is what settles the hesitation on the page. **{eun} {neun} when the noun has already entered the conversation; {i} {gwa} when the sentence brings it in.** In a narrative, the first mention of a person gets {i} {gwa} and the later mentions get {eun} {neun}. In Psalm 23:1, {yehova-neun} appears with {neun} because the covenant had already been named in the lines above: the verse takes for granted a God the reader recognizes. In 1 Corinthians 13, {sarang-eun} appears with {neun} in the opening of a letter addressed to churches that knew exactly what was being talked about. That is why the choice of particle is a decision of translation and not a detail of grammar: whoever translates preserves what the original gave as known and signals what the original brought in as new.

## A topic that runs through eight verses

Verse 4 of 1 Corinthians 13 is {sarang-eun} janggoni an-hamnida: love does not boast. Verse 8 begins the same way, {sarang-eun} gyeonoehaji an-neoyyeomyeon: love never fails. In between there are six verses in which the noun {sarang} comes back dozens of times, always with {eun}, and the only thing that changes from one line to the next is the verb.

Read in Portuguese, each line looks like an item on a list. Read in Korean, it is a sentence that does not end until the end of the chapter, and what holds it up is the repetition of the particle. The same noun, with the same particle, dozens of times: the tally is what carries the passage along. A translator who writes "love is patient, love is…" is doing the right translation and at the same time destroying the sentence, because in Korean those two "love" are not two independent occurrences: they are one, repeated, and it is the repetition that marks the movement of the chapter.

And what holds the first line is what holds the last one. Verse 13 closes the chapter with faith, hope and love, and the verb that governs the sentence is {nan-da}, to remain, the same one that gives the chapter its shape. **The noun the sentence takes as object is precisely what was presented as topic from verse 4 on.** It is the same piece, with the same particle, changing position.
`),
  vocab: [
    V('eun', '은', 'topic after a noun with a final consonant'),
    V('neun', '는', 'topic after a noun ending in a vowel'),
    V('i', '이', 'subject in focus after a final consonant'),
    V('gwa', '가', 'subject in focus after a vowel'),
    V('nan', '나', 'I; the form that takes the topic particle'),
    V('na', '나', 'I; the form that takes the subject particle'),
    V(
      'geuneun',
      '그것은',
      'that, as for that: what replaces any {eun} {neun} without changing the sense',
    ),
    V(
      'geuga',
      '그것이',
      'that is: the same word with the particle swapped, and the sentence goes on to classify',
    ),
    V('geu', '것', 'thing; the noun that usually comes with {i} {gwa}'),
    V('amudo', '아무도', 'nobody: a noun that only accepts {i} {gwa}'),
    V('amugeosdo', '아무것도', 'nothing: the same restriction as {amudo}'),
    V('nugu', '누구', 'who; the form of the question, which has no answer in {eun} {neun}'),
    V('mujeosi', '무엇이', 'what, as subject; the form of the question'),
    V('myeot', '몇', 'some, how many'),
    V('bangmyeon', '반면', 'on the other hand; the conjunction that marks the contrastive topic'),
    V('anira', '아니라', 'is not; denies the focus and leaves the topic standing'),
    V(
      'sarang',
      '사랑',
      'love: the topic of 1 Corinthians 13, which the text repeats with {eun} and never swaps for a pronoun',
    ),
    V('nan-da', '널다', 'to stay, to remain: the verb that governs the end of 1 Corinthians 13'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{eun} {neun} only comes on a noun the listener already knows. {i} {gwa} comes on the noun the sentence is establishing. Swapping them changes what the listener may take for granted, not the style.',
      ),
    },
    {
      n: '2',
      text: T(
        'The substitution test: replace {eun} {neun} with {geuneun}. If the sentence still answers a reasonable question, the noun was topic; if it does not, the noun was being established.',
      ),
    },
    {
      n: '3',
      text: T(
        'A topic can govern a whole clause. The noun repeats with {eun} and the pronoun does not appear, and the verb is where the new information of each line lives.',
      ),
    },
    {
      n: '4',
      text: T(
        '{amudo}, {amugeosdo}, {nugu} and {mujeosi} accept only {i} {gwa}. They are the nouns that answer "who?" and "what?", and the form {amudo-neun} does not exist in the language.',
      ),
    },
    {
      n: '5',
      text: T(
        'In a narrative, the first mention of a person gets {i} {gwa} and the following ones get {eun} {neun}. In Psalm 23:1 and in 1 Corinthians 13 the noun is already known, and so it opens the sentence with {neun}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle as presupposition'),
      text: T(
        'An {eun} {neun} asserts that the listener already had the noun in mind. That is why it can be rendered as "as for…", and it is why translating a verse forces a decision about what the original gave as known. A proper name transliterated into a passage is, in Korean, a promise that it has appeared before.',
      ),
    },
    {
      label: T('Why {anira} does not deny the topic'),
      text: T(
        'In "this is a book, not a map" the {neun} stays and what takes the negation is the name of the focus. The construction is the same as in "it is not that I eat", with the negation {-하다} in place of {an}: in both cases what is denied is an identification, and the topic survives intact.',
      ),
    },
  ],
  examples: [
    {
      text: '나는',
      gloss: T(
        'nan-eun — I, as topic: the particle takes for granted that I am the subject of the conversation',
      ),
    },
    {
      text: '내가',
      gloss: T('nae-ga — I, as subject: what the sentence establishes is what I am'),
    },
    {
      text: '그것은',
      gloss: T('geu-neun — that, as for that: replaces any {eun} {neun} without changing anything'),
    },
    {
      text: '그것이',
      gloss: T(
        'geu-ga — that is: the same word with the particle swapped, and the sentence goes on to classify what was already in view',
      ),
    },
    {
      text: '아무도',
      gloss: T('amu-do — nobody: a noun that refuses {eun} {neun} and answers only to "who?"'),
    },
    {
      text: '아무도 오지 않았다',
      gloss: T(
        'amu-do o-ji an-ha-neot-da — nobody came (negotiation is not a possible reading): {amudo} forces {ga}, and the negation is total',
      ),
    },
    {
      text: '사랑은',
      gloss: T(
        'sa-rang-eun — love (1 Cor 13:4): the topic that opens the verse and comes back on every following line',
      ),
    },
    {
      text: '사랑은 자랑하지 않으며',
      gloss: T(
        'sa-rang-eun jang-gwo-ni an-ham-ni-da — and love does not boast (1 Cor 13:4): the noun is the same, the new information is in the verb',
      ),
    },
    {
      text: '사랑은 결코 아니 넘어지며',
      gloss: T(
        'sa-rang-eun gyeon-oe-ha-ji an-neo-yeo-myeon — and love never fails (1 Cor 13:8): the verb changes, the topic does not',
      ),
    },
    {
      text: '여호와는',
      gloss: T(
        'yeho-va-neun — the Lord (Ps 23:1): {neun} on a name the covenant had already introduced',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same sentence with the two particles, and what changes for the listener'),
      head: [
        T('Noun'),
        T('Particle'),
        T('The sentence'),
        T('What the listener already knew'),
        T('What the sentence adds'),
      ],
      rows: [
        [
          T('{nan}'),
          T('{eun}'),
          T('nan-eun haksang-imnida'),
          T('that the talk is about me'),
          T('that I am a student'),
        ],
        [
          T('{nan}'),
          T('{gwa}'),
          T('na-ga haksang-imnida'),
          T('nothing'),
          T('that I am a student, and that this is what is at stake'),
        ],
        [
          T('{geu}'),
          T('{neun}'),
          T('geu-neun chaek-imnida'),
          T('that the talk is about this object'),
          T('that it is a book'),
        ],
        [
          T('{geu}'),
          T('{gwa}'),
          T('geu-ga chaek-imnida'),
          T('nothing'),
          T('that it is a book, and that this is the book'),
        ],
      ],
    },
    {
      caption: T('The nouns that refuse {eun} {neun}, and the question each one answers'),
      head: [T('Noun'), T('Romanization'), T('Question'), T('What the particle does')],
      rows: [
        [
          T('{amudo}'),
          T('amu-do'),
          T('who?'),
          T('requires {ga}, and the form with {neun} does not exist'),
        ],
        [
          T('{amugeosdo}'),
          T('amu-geos-do'),
          T('what?'),
          T('requires {ga}, and the form with {neun} does not exist'),
        ],
        [T('{nugu}'), T('nu-gu'), T('who?'), T('the particle of every question about identity')],
        [
          T('{mujeosi}'),
          T('mu-jeo-si'),
          T('what?'),
          T('the particle of every question about identity'),
        ],
        [
          T('{myeot}'),
          T('myeot'),
          T('how many?'),
          T('refuses {eun} {neun} for the same reason: "some" locates nobody'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Someone asks what the object on the table is and the answer is "this is a book". Which particle does the noun take?',
    ),
    options: [T('{gwa}'), T('{neun}'), T('{eul}'), T('{eseo}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the topic particle of "love" (사랑, ending in a vowel), in the line from 1 Corinthians 13: 사랑____ 오래 참고 (love is patient)',
      ),
      answer: '는',
    },
    {
      kind: 'match',
      prompt: T('Match each particle or word to the work it does'),
      pairs: [
        { a: T('{eun} {neun}'), b: T('marks the noun the listener already knows') },
        { a: T('{i} {gwa}'), b: T('marks the noun the sentence is establishing') },
        { a: T('{amudo}'), b: T('a noun that only accepts {i} {gwa}') },
        { a: T('{anira}'), b: T('denies the focus and leaves the topic standing') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Why does the form {amudo-neun} an-neunda, "nobody comes", not exist in Korean?'),
      options: [
        T(
          'because {amudo} answers only to "who?", and a topic particle needs a noun that can be located',
        ),
        T('because {amudo} is a polite form and {eun} {neun} is the informal one'),
        T('because the verb {neunda} requires {gwa} and never accepts {neun}'),
        T('because Korean does not allow a negation after a noun with {neun}'),
      ],
      answer: 0,
    },
  ],
};
