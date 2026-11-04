import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verb'),
  title: T('Negation: {an}, {mot} and {ji an-da} — three negatives that are not synonyms'),
  subtitle: T(
    'Portuguese has one "not" for everything; Korean has three, and picking the wrong one changes what the sentence says',
  ),
  body: C(`## Three negatives, and Portuguese has only one

Portuguese settles negation with a single word and leaves context to decide which sense you meant. "I did not eat", "I cannot eat", "it is not so": three separate sentences, the same "not" in all three, and nothing in the text that says which one you wrote. Korean does not work that way. It has three negatives, and none of them substitutes for another: {an} denies the fact, {mot} denies the capacity, {ji an-da} denies the validity of what is being asserted. The choice among them is semantic, not stylistic. Picking the wrong one does not produce an odd sentence; it produces a different assertion, and in a biblical text that means different theology.

- **{an}** denies the action. {sarang-i an meokneunda}, "the person does not eat". It is plain negation, the commonest of the three, and the only one that says nothing about the reason.
- **{mot}** denies the capacity. {sarang-i mot meokneunda}, "the person cannot eat". It is not "I do not want" and not "I will not": it is "I cannot". And Korean does not say why, because the reason may be the body, the money, the circumstance or the will, and {mot} is the same word in all four.
- **{ji an-da}** denies the fact. {geuneun jeokda jeokji an-da}, "that is not so". It is the most polite and the hardest, because it does not deny the action: it refuses the content of what was said.

The same verb with all three shows why the choice matters theologically. In "I do not believe", Portuguese leaves open whether you do not believe, cannot believe, or it is not to be believed. Korean forces the decision: {naneun an mitneunda} is "I do not believe"; {naneun mot mitneunda} is "I cannot believe"; {naneun mitji an-da} is "it is not that I believe". Three different assertions written with one and the same "not" in Portuguese.

## Position: before in the plain form, inside in the polite one

Korean negates **before** the verb, like Mandarin. In the plain form it is a word glued to the front of the verb: {sarang-i an meokda}, {naneun mot mitda}. In the polite form the negation goes inside the verb, glued to the root and ahead of the endings: {sarang-i meokneunda}, {naneun motneunda}. It is the same mechanism as the particles: the form shifts with politeness. Anyone translating literally from Portuguese ends up gluing {an} onto the verb in the polite sentence and writes a form nobody uses.

{mot} does exactly what {an} does, position by position. And {ji an-da} is the exception that proves the rule: because it ends in -da it is a whole word and sits **after** the verb in both forms, {mitji an-da} and {mitji an-neunda}. The practical rule: if the negative is {-da}, it goes after; if it is not, it goes before in the plain form and moves inside in the polite one.

The tie to the other two languages of the project shows up here. In Mandarin the negation is a particle attached before the verb and it never changes place: {wǒ bù chī}, with {méi} for past and for existence. In Japanese, the negation comes **after** the verb and the verb takes the negative form. In Korean the negation comes before, as in Mandarin, but gains a second life: inside the verb in the polite form. Three different positions for the same concept.

## The linkage: {do}, "not either", and the double negative

{d o} is a particle like the others: it sticks to the word it modifies. And in a negative sentence, {do} comes **before** {an}, not after: {naneun-do an meokneunda}, "I do not eat either". Whoever writes the Portuguese way, leaving "also" to the end, produces a sentence the Korean listener understands backwards: in Korean the order is fixed, and {do} before the negative is a construction, not an option.

The second pair is {an} followed by {mot}, and it is the proof that the linkage is obligatory: "not only ... but not either". In Korean these are two negatives pressed together, {an} ... {mot}, and the listener takes the two as a single block. Neither one means anything alone in that sentence, and neither can be translated separately. Rendering {an} as "not" and {mot} as "not" a second time produces in Portuguese a double negative that does not exist.

## Negating a noun requires a verb

In Portuguese you negate a noun with an adjective: "it is not a book", "it is not true". In Korean this does not exist, because negation is always verbal: there is no "not" that lands on the thing itself. What gets negated is the verb lying underneath the noun, and there are two doors. The first is the copula, {ida}: {chaeg-eun anida}, "it is not a book". Note that the sentence has a subject: the "not" is a verb and, being a verb, it takes a subject particle such as {i} or {gwa}. The second door is {eun mu}, the form for "there is not": {chaegi eun mu itda}, "there is no book", literally "book has no place".

{eun mu} is the counterpart of Mandarin {méi}. In Mandarin {méi} denies existence; in Korean {eun mu} denies existence, and the construction is made of the noun followed by the verb of having. Same semantic field, same kind of verse, different words because each language assembles the sentence from the inside out.

And the verse that closes the lesson is the test. In John 1:5, "the light shines in the darkness, and the darkness has not overcome it", the negation comes at the end of the verse and falls on "overcome": {bichida}, to shine, against {ikida}, to overcome. The word for darkness is {eodum}. If a translator writes {an} where the text was refusal of fact, or {mot} where it was mere absence of victory, they have strengthened a verse about faint light into a verse about victorious light. Choosing the negative is therefore not a matter of style: it is choosing what the verse says.
`),
  vocab: [
    V('an', '안', 'not; plain negation of the action, before the verb'),
    V('mot', '못', 'cannot; negation of capacity, before the verb'),
    V('ji an-da', '지 않다', 'not do; not be; refusal of a fact, after the verb'),
    V('an mot', '안 ... 못', 'not only ... but not either (double negative)'),
    V('do', '도', 'also; the particle that comes before the negative'),
    V('eun mu', '없음', 'there is not; not exist'),
    V('mol da', '못하다', 'cannot; be impossible'),
    V('ji mot ha da', '지 못하다', 'not be able to be; be impossible'),
    V('ida', '이다', 'to be (the copula)'),
    V('naneun', '나는', 'I (subject, polite form)'),
    V('mitda', '믿다', 'to believe'),
    V('bichida', '비치다', 'to shine; to glow'),
    V('ikida', '이기다', 'to overcome; to prevail over'),
    V('eodum', '어둠', 'darkness'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The three negatives are not synonyms: {an} denies the fact, {mot} denies the capacity, {ji an-da} denies the validity of what is asserted. Swapping one for another changes the assertion.',
      ),
    },
    {
      n: '2',
      text: T(
        '{an} and {mot} come before the verb in the plain form and move inside the verb in the polite form: {an meokda} becomes {meokneunda}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ji an-da} ends in -da and therefore sits after the verb in both forms: {mitji an-da}, {mitji an-neunda}.',
      ),
    },
    {
      n: '4',
      text: T(
        'In a negative sentence, {do} comes before {an}: {naneun-do an meokneunda}, "I do not eat either". The order is fixed.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negating a noun requires a verb: {anida} for identity, {eun mu itda} for existence. There is no "not" that lands on the thing.',
      ),
    },
  ],
  notes: [
    {
      label: T('You do not choose the reason'),
      text: T(
        '{mot} says the action does not happen, and nothing more. It does not distinguish "I do not want" from "I cannot" from "I will not" — Korean leaves that distinction to the context and to the next sentence. That is why {mot} is the wrong word when what you want to deny is the choice.',
      ),
    },
    {
      label: T('The Korean "not" is always a verb'),
      text: T(
        'In Korean the negation is a verb and, being one, it takes a subject particle: {chaeg-eun anida} has a subject, because {anida} is a verbal form. In Portuguese "it is not a book" is an adjective and has no grammatical subject. That is the difference between negating and qualifying.',
      ),
    },
  ],
  examples: [
    {
      text: '안 먹습니다',
      gloss: T('an meokneunda — I do not eat; plain negation, inside the verb'),
    },
    { text: '못 먹습니다', gloss: T('mot meokneunda — I cannot eat; incapacity, not refusal') },
    {
      text: '먹지 않습니다',
      gloss: T('meokji an-neunda — it is not that I eat; refusal of the fact, after the verb'),
    },
    {
      text: '나도 안 먹습니다',
      gloss: T('naneun-do an meokneunda — I do not eat either; {do} before the negative'),
    },
    {
      text: '책이 아닙니다',
      gloss: T('chaegi an-i-neunda — it is not a book; negation as a verb'),
    },
  ],
  tables: [
    {
      caption: T('The three negatives side by side'),
      head: [T('Negative'), T('What it denies'), T('Sentence'), T('What it is not')],
      rows: [
        [
          T('{an}'),
          T('the fact of the action'),
          T('{naneun an mitneunda}'),
          T('neither refusal nor incapacity'),
        ],
        [
          T('{mot}'),
          T('the capacity'),
          T('{naneun mot mitneunda}'),
          T('not "I do not want" nor "I will not"'),
        ],
        [
          T('{ji an-da}'),
          T('the validity of what is said'),
          T('{naneun mitji an-da}'),
          T('it does not deny the action, it denies the fact'),
        ],
      ],
    },
    {
      caption: T('Where the negative sits in each form'),
      head: [T('Negative'), T('Plain form'), T('Polite form'), T('Where it is')],
      rows: [
        [
          T('{an}'),
          T('{an meokda}'),
          T('{meokneunda}'),
          T('before the verb plain, inside it polite'),
        ],
        [
          T('{mot}'),
          T('{mot mitda}'),
          T('{motneunda}'),
          T('before the verb plain, inside it polite'),
        ],
        [
          T('{ji an-da}'),
          T('{mitji an-da}'),
          T('{mitji an-neunda}'),
          T('after the verb in both forms'),
        ],
      ],
    },
    {
      caption: T('Where the negative goes in each language of the project'),
      head: [T('Language'), T('Where the negative enters'), T('Does it move'), T('Lesson')],
      rows: [
        [
          T('Mandarin'),
          T('before the verb, as a particle'),
          T('no'),
          T('lesson 9, with {méi} for the past'),
        ],
        [T('Japanese'), T('after the verb, in the negative form'), T('no'), T('lesson 7')],
        [
          T('Korean'),
          T('before the verb plain, inside it polite'),
          T('yes, with politeness'),
          T('this lesson'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Korean, "I cannot eat" — which negative do you use?'),
    options: [T('{an}'), T('{mot}'), T('{ji an-da}'), T('{eun mu}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the refusal of fact "it is not so": geun-neun jeok-da jeok-ji ____'),
      answer: '않다',
    },
    {
      kind: 'match',
      prompt: T('Match the negative to what it denies'),
      pairs: [
        { a: T('{an}'), b: T('the fact of the action') },
        { a: T('{mot}'), b: T('the capacity') },
        { a: T('{ji an-da}'), b: T('the validity of what is said') },
        { a: T('{eun mu}'), b: T('existence') },
        { a: T('{do}'), b: T('also; comes before the negative') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In a negative Korean sentence, where does the particle {do} stand?'),
      options: [
        T('after {an}'),
        T('before {an}'),
        T('glued to the noun, away from the negative'),
        T('always at the end of the sentence'),
      ],
      answer: 1,
    },
  ],
};
