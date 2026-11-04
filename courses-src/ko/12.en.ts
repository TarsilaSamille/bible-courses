import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Syntax'),
  title: T('Honorifics: the same sentence changes meaning because one syllable changes'),
  subtitle: T(
    'Korean picks the form of the verb from the position of the other person — and an honorific name even swaps the subject particle',
  ),
  body: C(`## The position of the other decides the word

Korean is a language of honorifics, and this is not social etiquette: it is grammar. Before anyone opens their mouth, the speaker has already answered a question: is the person in front of you above you, beside you, or below you? The answer picks the FORM of the verb. The same action has three words, and the choice among them carries the information that Portuguese leaves to intonation. In Portuguese the same verb serves father and son and the tone does the work; in Korean the tone works together with the word, and the word alone already says it all. That is why a beginner translating word for word gets the form wrong and passes for rude: the grammar heard the disrespect even when the speaker was being careful.

There are three registers. For the person above you, the verb comes in the honorific voice: {deurida}, to give, to feed, to offer. Giving is always giving upward, and that is how a father gives to a son. For someone equal, the verb comes in the neutral form: {meokda}, to eat, and {malhada}, to say, with no mark at all. For the person below, the verb comes in the humble voice: {meogeo juda}, to feed someone, literally "eat for me", which is what a son says to a father while serving him food. And speaking to God piles honorific on top: the everyday form of address is {junim}, "Lord", carrying the same suffix {nim} that human titles carry, and the pronoun a Korean Christian uses for himself in God's presence is {nam}, "we", never the plain form.

The pocket rule fits in one line: whoever is ABOVE you takes the verb in the honorific voice, and you are the one serving him; whoever is BELOW takes the verb in the humble voice, and he is the one serving for you. And this is not style. It is grammar, and getting it wrong is disrespect.

## One verb, three forms

What changes is the WORD, not the structure. Nothing is reordered, no piece enters the sentence: the root of the verb is the same in all three lines and only the ending glued to it changes. "To eat" is {meokda} for an equal, {meokneunda} for the person above, {meogeora} for the person below. Three words mean the same thing, and no native speaker swaps them by accident. Setting the three side by side explains why the beginner errs and seems rude: the mistake is not in the sentence, it is in a syllable he did not know was a decision.

The same holds for "to say": {malhada} is the neutral form, and the honorific verb is {malsseumdeurida}, "say-word-to-higher", the form used with the person above. The neutral verb stays in the speech, but whoever hears a son speak to his father knows, from the choice of the word, which of the two roles the son is occupying. The same holds for "to go": the same root gives gada, gamneunda and gara, three ways of going according to the listener. And it holds for {itda}, to be and to exist: the verb that carries the rest of the sentence is the same in all three lines, and it is the most honourable thing a human being can say, that they exist. And this is why the Korean Bible has two invisible columns: the column of what is written, which is the same for everyone, and the column of who is speaking, which changes from line to line.

What the lesson on pronouns showed applied to the speaker, and what the lesson on verbs showed with the ending, close here: the ending that marks tense now marks position, and the scale the pronouns were sketching is now glued to the verb.

## The honorific changes the particle too

There is a fine detail that almost nobody teaches and that shows up in every sentence with a proper name: after a name that receives an honorific, the subject particle is neither i nor gwa. It is {yeonsa}. Any name at all, of any person at all, takes the particle i when it ends in a consonant and gwa when it ends in a vowel; a name ending in {nim} takes {yeonsa}, and the last-consonant rule stops applying. {seonsaengnim} does not take i: it takes {yeonsa}. It is the same phenomenon as the honorific verb seen from another angle. The honorific does not stay inside the word, it contaminates the attaching pieces around it, and the whole sentence says what the person is before it says what the person does.

The effect is bigger than it looks, because the particle is what marks the function. A {yeonsa} where the other speaker would hear the particle i makes the listener realise at once that this is an honorific name and not an ordinary noun: the difference between "the teacher eats" said by a colleague and said by the teacher himself is not in the verb nor in the noun. It is in the particle.

## Titles, and the address of God

Titles are the written scale of the same rule, and position shows up here plainly: Korean records age and sex at the same time. There is no neutral term for "older brother", because the speaker has to say whether they are a man or a woman, because the choice is {hyeong} for a man and {oppa} for a woman. For the older sister, {nuna} for a man and {eonni} for a woman. The word an older brother would use for himself and the word an older sister would use for herself are different, and the pair straddles the line of gender.

And the word used for the king, for the aristocrat and for the master of the house is also a word of the scale: {yangban}. A father is {abeoji} for a man and {eomeoni} for a woman, and the voice of the father is the starting point of the scale. The suffix {nim} is the mark that sticks onto everything at the top: it goes into {seonsaengnim}, teacher, and turns an ordinary word into a title. A man who is addressed with {nim} is no longer what the word said: he is what the relation between the two people says.

The address of God is the point where this grammar became translation. The Korean translators of the Bible had to decide, word by word, what "Lord" means in Korean: a proper name with {nim}, a pronoun with an honorific, or a title. The result is visible in the verse, and a modern reader recognises it at once. In the 1917 translation Jesus appears in the Gospels as "Disciple", a choice no other translation made. The short name {Sin} carries weight: it comes from "truth" and is read as "the Truth", and it is the name Korean Christians use for Christ to this day. An address is a decision, and a decision leaves a mark in the text: it is enough to compare two Korean versions of the same verse and read which title was chosen.

One test with the verse: the scale works for people and for God at the same time. If someone says of Jesus {nim}, and of the father {nim} too, and eats in the same form he eats in front of the father, the reader cannot tell which of the two is being honoured, and that is exactly the doubt the translator had to settle before publishing.
`),
  vocab: [
    V('deurida', '드리다', 'to give, to feed: the honorific verb, for the person above'),
    V('meokda', '먹다', 'to eat, neutral (register of equals)'),
    V('meokneunda', '먹는다', 'eats (polite, for the person one respects or who is above)'),
    V('meogeora', '먹어라', 'eats (humble, for the person below)'),
    V('meogeo juda', '먹어 주다', 'to feed someone; literally "eat for me"'),
    V('malhada', '말하다', 'to say (neutral)'),
    V('malsseumdeurida', '말씀드리다', 'to say to the person above; the honorific of "to say"'),
    V('itda', '있다', 'to be, to exist'),
    V('nam', '남', 'we (honorific: speaking to someone above, or to God)'),
    V('nim', '님', 'lord; the honorific suffix'),
    V('junim', '주님', 'Lord: the honorific suffix applied to the name of God'),
    V('seonsaengnim', '선생님', 'teacher, sir'),
    V('yeonsa', '선수', 'subject particle after an honorific name, in place of i and gwa'),
    V('hyeong', '형', 'older brother (said by a man)'),
    V('oppa', '오빠', 'older brother (said by a woman)'),
    V('nuna', '누나', 'older sister (said by a man)'),
    V('eonni', '언니', 'older sister (said by a woman)'),
    V('abeoji', '아버지', 'father (said by a man); the top of the scale'),
    V('eomeoni', '어머니', 'mother (said by a woman)'),
    V('yangban', '양반', 'aristocrat; the master of the house'),
    V('Sin', '진', 'the Truth; the short everyday name of Jesus'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The form of the verb is chosen by the position of the other person: {deurida} for the person above, {meokda} for an equal, {meogeo juda} for the person below.',
      ),
    },
    {
      n: '2',
      text: T(
        'Position also decides the speaker\'s own word: before someone above, and before God, "I" is {nam}, never the plain form.',
      ),
    },
    {
      n: '3',
      text: T(
        'What changes is the word, not the structure: the root of the verb is the same in all three forms and only the ending changes.',
      ),
    },
    {
      n: '4',
      text: T('After an honorific name the subject particle is neither i nor gwa: it is {yeonsa}.'),
    },
    {
      n: '5',
      text: T(
        'Titles record age and sex at once: {hyeong} and {oppa} for the older brother, {nuna} and {eonni} for the older sister. There is no neutral term.',
      ),
    },
  ],
  notes: [
    {
      label: T('How Korean Christianity translates "Lord"'),
      text: T(
        '"Lord" can be a name with {nim}, a pronoun with an honorific ({nam} {nim}), or the title {Sin}, "the Truth". The 1917 Korean translation, the first one in Korean, called Jesus "Disciple" in the Gospels — a choice no other translation made — and the short name {Sin} was read from "truth", which settled the reading. The address chosen is a decision, and every decision leaves a mark in the text.',
      ),
    },
    {
      label: T('There is no neutral "older brother"'),
      text: T(
        'The same person is {hyeong} for a man and {oppa} for a woman; the same woman is {nuna} for a man and {eonni} for a woman. The pair straddles the line of gender: the Korean scale measures age and sex at the same time, and the speaker has to declare where they stand.',
      ),
    },
  ],
  examples: [
    { text: '먹는다', gloss: T('meok-neun-da — "eats" (polite, for the person above)') },
    { text: '먹어라', gloss: T('meo-geo-ra — "eats" (humble, for the person below)') },
    { text: '드립니다', gloss: T('deu-ri-da — "gives" (honorific, for the person above)') },
    {
      text: '선생님을',
      gloss: T('seon-saeng-nim-eul — the teacher (direct object; the honorific suffix)'),
    },
    { text: '남이', gloss: T('na-mi — we (honorific, before someone above)') },
  ],
  tables: [
    {
      caption: T('One verb in three registers: the word changes, the sentence does not'),
      head: [T('Verb'), T('For whom'), T('Form (romanisation)'), T('What the form says')],
      rows: [
        [T('to eat'), T('an equal'), T('{meokda}'), T('nothing: the neutral')],
        [T('to eat'), T('the person above'), T('{meokneunda}'), T('the honorific voice rises')],
        [T('to eat'), T('the person below'), T('{meogeora}'), T('the humble voice drops')],
        [T('to say'), T('an equal'), T('{malhada}'), T('nothing: the neutral')],
        [
          T('to say'),
          T('the person above'),
          T('{malsseumdeurida}'),
          T('the honorific voice rises'),
        ],
        [T('to say'), T('the person below'), T('{meogeo juda}'), T('the humble voice drops')],
        [T('to go'), T('an equal'), T('gada'), T('nothing: the neutral')],
        [T('to go'), T('the person above'), T('gamneunda'), T('the honorific voice rises')],
        [T('to go'), T('the person below'), T('gara'), T('the humble voice drops')],
      ],
    },
    {
      caption: T('After an honorific name the subject particle is a different one'),
      head: [T('The name'), T('Has an honorific'), T('Subject particle'), T('The sentence')],
      rows: [
        [T('teacher'), T('no'), T('i'), T('the teacher eats, said by an equal')],
        [T('teacher'), T('yes'), T('{yeonsa}'), T('the teacher eats, addressed by a pupil')],
        [T('older brother'), T('no'), T('i'), T('the brother eats, said by an equal')],
        [T('older brother'), T('yes'), T('{yeonsa}'), T('the brother eats, said with respect')],
        [
          T('our word for God'),
          T('yes'),
          T('{yeonsa}'),
          T('the most reverent sentence in the text'),
        ],
      ],
    },
    {
      caption: T('Titles measure age and sex at the same time'),
      head: [T('Degree'), T('Said by a man'), T('Said by a woman')],
      rows: [
        [T('father or mother — the top of the scale'), T('{abeoji}'), T('{eomeoni}')],
        [T('older brother'), T('{hyeong}'), T('{oppa}')],
        [T('older sister'), T('{nuna}'), T('{eonni}')],
        [T('aristocrat, master of the house'), T('{yangban}'), T('{yangban}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('The person you are speaking to stands above you: which form of "to eat" is right?'),
    options: [T('{meokda}'), T('{meokneunda}'), T('{meogeora}'), T('{meogeo juda}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the subject particle that replaces i after an honorific name: 선생님____',
      ),
      answer: '선수',
    },
    {
      kind: 'match',
      prompt: T('Match the form of the verb to the position of the other person'),
      pairs: [
        { a: T('{meokda}'), b: T('for an equal') },
        { a: T('{meokneunda}'), b: T('for the person above') },
        { a: T('{meogeora}'), b: T('for the person below') },
        { a: T('{meogeo juda}'), b: T('the verb says: eat for me') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about Korean honorifics is true?'),
      options: [
        T("the choice of the verb depends on the writer's style"),
        T('the choice of the verb depends on the position of the other person'),
        T('the subject particle does not change with the honorific'),
        T('Korean has a neutral term for older brother'),
      ],
      answer: 1,
    },
  ],
};
