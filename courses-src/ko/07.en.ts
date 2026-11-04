import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verb'),
  title: T('The verb and the ending that already is the pronoun'),
  subtitle: T(
    'The Korean verb inflects for style and for person, never for gender, and it carries glued to it what in Portuguese would come as a separate pronoun',
  ),
  body: C(`## The ending is the pronoun

The Korean verb inflects for **style**, spoken or written, and for **person**. It never inflects for gender: the gender of the subject never reaches the verb, and neither does the plural, because a plural subject takes its mark on the noun and not on the verb. And the verb is **agglutinative**, which is the detail that matters most: it carries glued to it the information that in Portuguese would come in a separate pronoun. The pronoun can disappear because the ending is already on the verb, and now the ending can be seen at work.

Take the verb to go. Spoken and plain, "I go", "you go" and "he goes" are one and the same form: {ga}. The ending -a is the "I", but it does the same work for "you" and for "he", and what settles it is the context. Spoken and polite, all three become {gayo}, with the ending -yo; written and polite, all three become {gamnida}, with -bnida. Notice what the politeness did: it added **register**, not person. Korean marks the tone in the ending and leaves the person to the context; when the person really has to be said, the pronoun shows up, and that is for **contrast**, as in "I go, you do not go", never as a rule.

That is why the shortest sentence in the language is "go", two syllables and nothing else: {ga} is the verb and the pronoun at the same time. Someone translating word for word from Portuguese writes "I go"; Korean writes "go". Nothing was lost on the way, because the ending was doing the work of both.

## Conjugating or not: the short list and the long list

Korean has two kinds of verb, and the difference is neither one of style nor of meaning: it is inflection. Verbs whose **root ends in a vowel or in -l** conjugate, that is, they change form with the person and the register: that is the case of ita (to go), hada (to do), oda (to come), boda (to see), sseuda (to write). Verbs whose root ends in **another consonant** never change: meokda (to eat), deolda (to hear), geolda (to walk), gonhada (to finish), chada (to sit) are exactly the same word in any sentence.

The short list really is short: there are few verbs, and half a dozen of them account for nearly everything that is said in Korean. The whole of the rest of the language is long list. And this is where the beginner gets stuck, because a long-list verb looks wrong inside a sentence: it never changes, and the learner expects it to.

Combine it with the topic particle and the sentence closes. {neun} with {meokneumnida} is "I eat", in the polite written form: {neun} says whose sentence it is, {meokneumnida} says what the sentence does. The same {neun} with a long-list verb gives a dictionary entry, not a sentence. What is under way, the state rather than the act, is made with the same {ida}: meokgo itda, "I am eating".

## Negation: two positions, and why it matters

In Korean the negation belongs to the **verb** and never to the noun: there is no "not" glued to the subject. Two positions settle almost everything. The short one is {an}, always **before** the verb: an {gayo}, "I do not go"; an meokseumnida, "I do not eat". It is the one most used in speech and the one the ear expects. The long one is the ending -ji anida, which comes glued to the end of the verb, gaji anida, "do not go", and it is the form of formal writing, where {an} no longer shows up. And there is a third, which is not negation but impossibility: {mot} after the verb, mot gala, "I cannot go".

The choice is one of register: {an} in speech and in a plain tone, because it sounds short; the long form in written text, in a polite tone, and when the sentence is too long for a single particle. Watch out for an asymmetry that catches the beginner: {eopda}, the negation of {ida}, comes **after** what it negates, and it is the commonest verb in the written language. Someone who applies {an} to the verb of being builds a sentence the listener takes a different way.

## Register decides, and the verb that comes after the topic

Three verbs that in Portuguese collapse into a single "to speak": {malhada} is the neutral one, the one that serves for everything; {iyagihada} is the one of conversation, of telling, of dealing with a matter; {hwahada} is the formal one, the one that shows up in discourse and in prayer. Three nuances that Portuguese resolves with a preposition and Korean resolves with a verb.

Register, however, is the choice that matters to the translator. The Korean default is the **plain**; politeness is **optional** in the text, and it is marked in the ending, not in the lexicon. So a Korean translator does not "dress up" the sentence: they pick an ending, and that choice already tells the reader how much respect the text deserves. The Korean biblical translation has a register of its own and recognisable as such, and it is in that register that the verb {ida} always enters **after** the topic particle, the same slot that {aru} in Japanese and {zai} in Mandarin occupy in their sentences. The three languages of this project all lean on a verb of existing or showing for saying that something is there.

And the biblical text has something to say here. In John 1:1, "was the Word", the noun takes the subject particle and the verb comes in the polite form: {ireot}, the past of {ida}. In John 3:30, "he must increase, but I must decrease", the two verbs appear in the same form, the most direct one, and the obligation is the same piece glued to both. Compare the two sentences and the register becomes visible: a text that opens the Gospel speaks in a high register, and a text of demand from the same world speaks in a direct one. Same translator, same language, two different decisions, and the ending of the verb is where they show.
`),
  vocab: [
    V('ita', '가다', 'to go: a conjugating verb, the model of this lesson'),
    V('ga', '가', 'I go: plain spoken form, the ending -a is the pronoun I'),
    V('gayo', '가요', 'I go, you go: polite spoken form, ending -yo'),
    V('gamnida', '갑니다', 'I go, you go: polite written form, ending -bnida'),
    V('ida', '이다', 'to be, to exist: the verb that always comes right after the topic particle'),
    V('ireot', '이렀다', 'was: the past of {ida} in the polite form'),
    V('meokda', '먹다', 'to eat: a long-list verb, it never changes form'),
    V('meokneumnida', '먹습니다', 'I eat: to eat in the polite written form'),
    V('hada', '하다', 'to do: a short-list verb that conjugates'),
    V('an', '안', 'not: the short negator, always before the verb'),
    V('anida', '않다', 'not to do: the ending -ji anida, which negates after the verb'),
    V('eopda', '없다', 'there is not, it is absent: the negation of {ida}'),
    V('mot', '못하다', 'not to be able: also after the verb'),
    V('malhada', '말하다', 'to say: the neutral verb of speaking'),
    V('iyagihada', '이야기하다', 'to speak, to tell, to deal with: the verb of conversation'),
    V('hwahada', '화하다', 'to speak: the formal one, of discourse and of prayer'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb inflects for style and for person, never for gender, and it is agglutinative: the ending carries what in Portuguese would come as a separate pronoun.',
      ),
    },
    {
      n: '2',
      text: T(
        'The pronoun only shows up for contrast. Spoken and plain, "I go" is a single word, and it is verb and pronoun at once.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbs with a root in a vowel or in -l conjugate, like {ita} and {hada}; those with a root in another consonant, like {meokda}, never change form.',
      ),
    },
    {
      n: '4',
      text: T(
        'Negation belongs to the verb and not to the noun: {an} before, the ending -ji anida after, and {mot} for what cannot be done.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ida} always comes after the topic particle, and the choice between plain, polite spoken and polite written is a decision of register and not of lexicon.',
      ),
    },
  ],
  notes: [
    {
      label: T('Politeness changes the axis'),
      text: T(
        'In the polite forms all three persons of the verb to go collapse into one: {gayo} and {gamnida} say "I", "you" and "he" at the same time. That is not a loss of information, it is a change of axis: Korean marks the tone and leaves the person to the context.',
      ),
    },
    {
      label: T('The verb of existing is the same in the three languages'),
      text: T(
        '{ida} occupies, right after the topic particle, the same function that {aru} does in Japanese and {zai} in Mandarin: the three languages of this project all lean on a verb of existing or showing to say that something is there.',
      ),
    },
  ],
  examples: [
    {
      text: '제가 가요',
      gloss: T(
        'je-ga ga-yo — I go: the "I" lives in the ending, and the pronoun shows up only from context',
      ),
    },
    { text: '갑니다', gloss: T('gam-ni-da — I go: the same information in written form') },
    {
      text: '먹습니다',
      gloss: T(
        'meok-seum-ni-da — I eat: a long-list verb with the polite written ending -seum-ni-da',
      ),
    },
    { text: '안 가요', gloss: T('an ga-yo — I do not go: short negation, before the verb') },
    {
      text: '말씀이 계시니라',
      gloss: T(
        'mal-sseu-mi gye-si-ni-ra — "was the Word": noun with a particle and verb in the polite',
      ),
    },
  ],
  tables: [
    {
      caption: T('The ending does the work of the pronoun'),
      head: [
        T('Person'),
        T('What Portuguese writes'),
        T('Spoken, plain'),
        T('Spoken, polite'),
        T('Written, polite'),
      ],
      rows: [
        [T('I'), T('I go'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('you'), T('you go'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('he, she'), T('he goes'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [
          T('you, with respect'),
          T('you go, respectfully'),
          T('gasini'),
          T('gasini'),
          T('gasipnida'),
        ],
        [
          T('you and he, plural'),
          T('you all go'),
          T('gayo-deul'),
          T('gayo-deul'),
          T('gam-ni-da-deul'),
        ],
      ],
    },
    {
      caption: T('Conjugating or not: the short list really is short'),
      head: [T('Verb (romanisation)'), T('Gloss'), T('Ends in'), T('Conjugates?')],
      rows: [
        [T('ita'), T('to go'), T('a vowel (a)'), T('yes, it changes form')],
        [T('hada'), T('to do'), T('a vowel (a)'), T('yes, it changes form')],
        [T('oda'), T('to come'), T('a vowel (a)'), T('yes, it changes form')],
        [T('boda'), T('to see'), T('a vowel (o)'), T('yes, it changes form')],
        [T('meokda'), T('to eat'), T('a final consonant (da)'), T('no, it is always the same')],
        [T('deolda'), T('to hear'), T('a final consonant (da)'), T('no, it is always the same')],
        [T('gonhada'), T('to finish'), T('a final consonant (da)'), T('no, it is always the same')],
      ],
    },
    {
      caption: T('The same verb in three registers'),
      head: [
        T('Where it shows up'),
        T('Form (romanisation)'),
        T('Ending'),
        T('What it tells the reader'),
      ],
      rows: [
        [
          T('conversation between friends'),
          T('{ga}'),
          T('-a'),
          T('plain tone, person left to the context'),
        ],
        [T('polite speech'), T('{gayo}'), T('-yo'), T('polite tone, person left to the context')],
        [
          T('writing, a letter, a meeting'),
          T('{gamnida}'),
          T('-bnida'),
          T('polite tone in written form'),
        ],
        [
          T('discourse or prayer'),
          T('mal-sseum-han-dan-mal'),
          T('-da'),
          T('solemn text, a higher register'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In plain spoken Korean, "I go" is a single word. Where is the pronoun I?'),
    options: [
      T('in the ending of the verb'),
      T('in a separate particle, before the verb'),
      T('in the topic particle'),
      T('at the end of the sentence, after the verb'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the polite spoken form of "I go": ____ 가요'),
      answer: '가',
    },
    {
      kind: 'match',
      prompt: T('Match the word to its function'),
      pairs: [
        { a: T('{ita}'), b: T('a verb that conjugates') },
        { a: T('{meokda}'), b: T('a verb that never changes form') },
        { a: T('{an}'), b: T('short negation, before the verb') },
        { a: T('{eopda}'), b: T('the negation of {ida}, after the verb') },
        { a: T('{ida}'), b: T('to be, to exist: always after the topic particle') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'In John 1:1 the verb "was" appears in the polite form. What is that choice saying?',
      ),
      options: [
        T('that the translator chose a high register for the text'),
        T('that the verb changes according to the noun before it'),
        T('that the source text was written in Korean'),
        T('that "was" is a conjugating verb and the others are not'),
      ],
      answer: 0,
    },
  ],
};
