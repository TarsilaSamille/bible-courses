import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Verb'),
  title: T(
    'The order that ties everything together: particle, verb, and honorific in one sentence',
  ),
  subtitle: T(
    'Every piece has a fixed place, the honorific verb sits exactly where the plain verb sits, and Korean politeness was built on top of a negation',
  ),
  body: C(`## The order that ties everything together

Every piece of Korean has been explained on its own, and no piece works on its own. The particles, one at a time; the verb, with the ending that already is the pronoun; the three registers of address; and the final particles, which close the sentence. The canonical order has five positions, and the good news is that the combination hides no surprise: every element has its place, and the reader assembles the sentence the way one assembles a row of words.

The canonical order has five positions. The topic particle comes first, declaring what the sentence is about; then the subject with its particle; then the object with its; then the verb, in the form of register the sentence calls for; and last of all the final particle, which gives the tone of the whole sentence. No piece moves. What varies is whether a piece is there at all: the topic particle may be missing, the object may be missing, but when they appear, they take their position.

Notice what the table says and what it does not. It does not say that the topic particle is mandatory, because it is not, and a sentence may start straight with the subject. It says that two pieces never trade places, and that is why the verb is always in the fourth position. From there the verb {ida}, "to be", works only after the topic particle: it waits for its position the way a piece of furniture waits for the room it was assembled in. And from there the practical consequence of a fixed order: the reader does not have to understand the sentence to know what comes next. He reads the first piece and already knows it is the topic, and he reads the fourth and already knows the action is there. Grammar works as a visible skeleton.

## The honorific verb and the honorific final particle

To honour someone in Korean is not to add an adjective to the sentence: it is to choose, in the same position, a different form of the verb, and then to choose the ending that closes that choice. Where the speaker says {mukda}, to eat, a text addressed to a superior says {deusida}. And the root of that honorific form is {deuri-}, the verb that means to give. The verb of eating changes root in deference: to say that the king eats is, literally, to say that the king receives. It is the grammar of service, and courtesy enters through the root, not through the ending.

The final particle follows the choice, because verb and tone travel together: {deuryeosseoyo} is the spoken one, {deusipnida} the written one. And there is an exception that is the most interesting thing in the language: the verb of being is the only one that shifts axis. {imnida} will not take the {yeyo} that closes the other forms; Korean adds {yeyo} to {imnida} and the result changes in sound, {gyeyo}, which is "to be" in the honorific form. That is why "to be" is the safest form for reading the register of any Korean text: a careful writer writes {gyeyo}.

And there is a detail, the strangest and hardest thing in Korean, that no other language of this project has. The honorific form was built on top of a negation. The same {si} that forms the honorific verb {deusida} and the honorific imperative {gasira}, the "come" that comes from the plain {gala}, descends from the negative particle {ji}. In Portuguese and in Spanish politeness arrives as an adverb glued to the verb, a "please" that does not change the verb; in Korean it is a particle that has gone inside the verb. And the effect is so strong that the negation itself comes to serve as politeness: {annyeonghi gaseyo}, the goodbye every Korean knows by heart, is literally "do not go in peace", {an} is "not" and {annyeonghi} is "in peace", and nobody hears a negation. The negative that serves as treatment is the summary of a language in which deference is a problem of root.

## The mistake that repeats itself three times

Once combined, the easiest thing for a beginner is to pile up. He learned that there are three registers, he learned that there is an honorific verb, and he learned that there is an honorific final particle; so he puts all three in the same sentence, and still calls someone "sir". The result is three or four marks of respect stacked on one word, a heavy sound, and no gain, because in Korean each of them has already been done by the verb, and the honorific form already carries the politeness by itself.

The practical rule falls out of adding the two previous sections together. The honorific final particle attaches to a verb that is already in the honorific form because of the person being addressed, and not again because of the person speaking. And the personal honorific, the one that swaps the plain pronoun for an honorific pronoun, can live together with the honorific verb, because one marks who hears and the other marks who speaks, and those are different things. What cannot happen is the honorific verb with the honorific ending: the particle {si} is already in the verb, and {yeyo} on top of {si} forms nothing in Korean. That is why {deusipnida} and {deuryeosseoyo} exist, and a third form with {si} and {yeyo} together simply does not exist.

## The biblical hook: the register says who is speaking

The 1961 Korean translation keeps three registers across the text, and they are information, not style. God receives the highest register: "to be" becomes {gyeyo}, and a plain verb becomes honorific whenever the subject is God, because treating God casually would be blasphemy in the language. The disciples receive the middle register: polite spoken, the tone of respectful conversation. And Jesus receives the sympathetic middle: {yo} in his speeches, the register that is courteous without being high. The effect is that, in a verse, the Korean verb says who is speaking.

In a question from a producer to the king, and in an answer from the king to a servant, the verbs differ, and a Korean reader knows at once, before translating: the king does not receive {an} nor a plain verb, and the servant does not speak in {gyeyo}. The Korean translation hands over that information together with the sense, and that is why reading the text in Korean is reading the scene, and not only the proposition.

John 4:7 is the clearest example. There Jesus speaks to the Samaritan woman, a stranger, and the vocative {yeobosiyo} is the informal one: it is the "listen, you" he would use with anybody on the street. He could have used the formal register, which would be the natural thing before a stranger, and he chose the casual one. And the choice of vocabulary confirms the intention: the word he uses for the Messiah is the borrowed word, {mesia}, and not the Sino-Korean word a Korean orator would have chosen. A man who speaks casually and uses a borrowed word to a stranger, at the edge of a well: that is how the Gospel of John presents the scene, and that is how the verb, in Korean, tells the story.
`),
  vocab: [
    V('mukda', '먹다', 'to eat: a long-list verb, the register model of this lesson'),
    V('deusida', '드시다', 'to eat, honorific: the verb used toward a superior'),
    V('deuryeosseoyo', '드세요', 'do eat, please: the polite spoken form of {deusida}'),
    V('deusipnida', '드십니다', 'do eat: the polite written form of {deusida}'),
    V('imnida', '입니다', 'to be: {ida} in the polite written form'),
    V('yeyo', '여요', 'the politeness ending that closes the sentence after the verb'),
    V('gyeyo', '께요', 'to be: the honorific form, from {imnida} plus {yeyo}'),
    V('an', '안', 'not: the short negator, which in the honorific form stops negating'),
    V(
      'annyeonghi',
      '안녕히',
      'in peace: the adverb of the Korean goodbye, which is a negative of a negative',
    ),
    V('gala', '가라', 'come: the plain form of the imperative of to go'),
    V('gasira', '가시라', 'come: the honorific form of the same imperative'),
    V(
      'yeobosiyo',
      '여보시오',
      'listen, you: the informal vocative, the tone Jesus uses with the stranger',
    ),
    V('mesia', '메시아', 'Messiah: the borrowed noun, in place of the Sino-Korean term'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The order is fixed: topic particle, subject with its particle, object with its, verb in the form of register, final particle. No piece changes place.',
      ),
    },
    {
      n: '2',
      text: T(
        'The honorific verb takes exactly the same position as the plain verb: it changes form, not place. That is why {ida}, "to be", only comes after the topic particle.',
      ),
    },
    {
      n: '3',
      text: T(
        'To honour is to choose the verb form and the ending that closes it: {deuryeosseoyo} spoken, {deusipnida} written. The verb of being is the only one that shifts axis, becoming {gyeyo}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The honorific final particle does not attach to an already honorific verb: {si} plus {yeyo} forms nothing. Stacking honorific pronoun, honorific verb and honorific final in one sentence sounds heavy and gains nothing.',
      ),
    },
    {
      n: '5',
      text: T(
        'With an honorific verb, {an} stops negating: {annyeonghi gaseyo}, the goodbye, is literally "do not go in peace".',
      ),
    },
  ],
  notes: [
    {
      label: T('The negative that became treatment'),
      text: T(
        'The negating particle is {an}, and the honorific particle is {si}. Historically the two are siblings: {gasira}, the honorific "come", comes from {gala}, the plain "come", and the difference between the two is the negative particle {ji}. Korean built its highest treatment on top of the negation, and that is why the goodbye {annyeonghi gaseyo} is literally "do not go in peace", with nobody hearing a "not".',
      ),
    },
    {
      label: T('The register says who is speaking'),
      text: T(
        'The 1961 Korean translation gives God the highest register, with {gyeyo} and honorific verbs; gives the disciples the middle one, polite spoken; and gives Jesus the sympathetic middle, with {yo}. In a scene of question and answer, the verb chosen reveals who is who before any translation.',
      ),
    },
  ],
  examples: [
    {
      text: '할아버지께서 오십니다',
      gloss: T(
        'hal-abeo-ji-ge-seo o-ship-ni-da — the grandfather sir comes: honorific pronoun plus honorific verb, with the common written ending',
      ),
    },
    {
      text: '안녕히 가세요',
      gloss: T(
        'an-nyeong-hi ga-se-yo — literally "do not go in peace", and it means "goodbye": the negative serving as treatment',
      ),
    },
    {
      text: '학생이 께요',
      gloss: T(
        'haksaeng-i gye-yo — he is a student: {imnida} plus {yeyo}, the honorific form of "to be"',
      ),
    },
    {
      text: '드시요',
      gloss: T(
        'deu-si-yo — the form that does not exist: the particle {si} and the ending {yeyo} do not combine',
      ),
    },
    {
      text: '여보시오',
      gloss: T(
        'yeo-bo-si-yo — listen, you: the informal vocative Jesus uses with the stranger in John 4:7',
      ),
    },
  ],
  tables: [
    {
      caption: T('The canonical order of the Korean sentence'),
      head: [T('Position'), T('Piece'), T('What it declares'), T('Example (romanisation)')],
      rows: [
        [T('first'), T('topic particle'), T('what the sentence is about'), T('eun / neun')],
        [
          T('second'),
          T('subject with subject particle'),
          T('who performs the action'),
          T('i / gwa'),
        ],
        [T('third'), T('object with object particle'), T('what is done'), T('eul / reul')],
        [
          T('fourth'),
          T('verb, in the form of register'),
          T('the action and the tone of the act'),
          T('ga / gamnida / deusida'),
        ],
        [
          T('fifth'),
          T('final particle'),
          T('the tone of the whole sentence'),
          T('yo / eoyo / yeoyeyo'),
        ],
      ],
    },
    {
      caption: T('The verb to eat in three registers, and what shifts by person'),
      head: [T('Person'), T('Spoken, plain'), T('Spoken, polite'), T('Written, polite')],
      rows: [
        [T('I'), T('meongneunda'), T('meogeoyo'), T('meokseumnida')],
        [T('you or he'), T('meongneunda'), T('meogeoyo'), T('meokseumnida')],
        [T('does the person change the form?'), T('no'), T('no'), T('no')],
      ],
    },
    {
      caption: T('Right and wrong, side by side, when speaking to a superior'),
      head: [T('Version'), T('Sentence (romanisation)'), T('What happens')],
      rows: [
        [
          T('right, written'),
          T('hal-abeo-ji-ge-seo de-ship-ni-da'),
          T('honorific pronoun and verb, with the common written ending'),
        ],
        [
          T('right, spoken'),
          T('hal-abeo-ji ga deu-se-yo'),
          T('plain subject with an honorific verb, the everyday register'),
        ],
        [
          T('wrong'),
          T('hal-abeo-ji-ge-seo de-si-yo'),
          T('three marks stacked, and -si- with -yo forms nothing'),
        ],
        [
          T('wrong'),
          T('hal-abeo-ji-ge-seo deu-se-yo deuseyo'),
          T('the honorific verb repeated with the honorific ending repeated: weight without gain'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of the forms below is the honorific form of "eat", addressed to a superior?'),
    options: [T('deuseyo'), T('deusyeyo'), T('deuseyo deuseyo'), T('an deuseyo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the polite spoken form of the honorific verb "eat": 드시____'),
      answer: '요',
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function'),
      pairs: [
        { a: T('{an}'), b: T('not: the negator that turns into politeness in the honorific form') },
        { a: T('{gyeyo}'), b: T('to be: the honorific form of the verb of being') },
        {
          a: T('{gasira}'),
          b: T('come: the honorific imperative, derived from the negative particle'),
        },
        { a: T('{imnida}'), b: T('to be: the polite written form, before it turns honorific') },
        {
          a: T('{annyeonghi}'),
          b: T('in peace: the adverb of the goodbye nobody reads as a negation'),
        },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'In John 4:7 Jesus speaks to a stranger in the casual register. What is that choice saying?',
      ),
      options: [
        T('that the tone between them is one of equality, and that was bold'),
        T('that he did not know the formal vocabulary'),
        T('that the sentence is a quotation of another text'),
        T('that he was angry with the woman'),
      ],
      answer: 0,
    },
  ],
};
