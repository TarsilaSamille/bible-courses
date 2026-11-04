import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Particles'),
  title: T(
    '{e}, {eseo}, {ege} and {hante}: four relations in the same vowel, and the verb that decides which one it is',
  ),
  subtitle: T(
    '{e} has no meaning of its own: it points at the noun and waits for the verb to say what it does with it. The answer is in the verb, which is why the same particle serves three relations',
  ),
  body: C(`## {e} means nothing on its own

{e} does not mean "to", nor "in", nor "at". It points at the noun it is glued to and waits for the verb to say what is happening to it. A verb of movement turns {e} into a destination; a verb of staying turns {e} into a place; a noun of time with {e} marks the moment. Three relations, one particle, and the criterion is the verb.

In Korean, {jib-e ga-da} is going home, {jib-e itda} is being at home, and {i-re} is on Sunday. All three sentences carry the same particle and none of them translates it: the preposition Portuguese uses in each of them is present in all three, and Korean writes none. Someone translating from Portuguese arrives with the preposition ready and loses the information, because in Korean the relation is not in the particle but in the pair of verb and noun.

The same goes for {eseo}, which looks like the opposite operation and is not. {eseo} points at the point of departure of a path, {jib-e-seo na-nanda} is leaving the house, and at a transformation, {hwan-eu-ro} is with money, the means of an exchange. In both cases the noun is the point at which something stops being what it was. {e} and {eseo} are not "destination and origin" in general: they are two answers to a question the particle asks and only the verb answers.

## The same place, two verbs, two particles

The pair {e} and {eseo} on the same thing is what confuses the Portuguese reader, and it is not solved by memorising a rule: it is solved by looking at the verb.

In Korean, being at school is {hakgyo-e itda} and studying at school is {hakgyo-e-seo gongbu-ham-ni-da}. The school is the same, the noun is the same, and the particle changed. What changed is that in the first case nothing happens: someone is in a place and stays there. In the second case something does happen there, and the action is what the sentence is telling. **The particle follows the verb, and the verb says whether there is an event.**

The criterion can be checked on any sentence: ask what the verb does. Verbs of state, of position and of existence ask for {e}: is, stays, lives, exists, fits. Verbs of event ask for {eseo}: studies, works, eats, prays, writes. And the list is not a closed rule, and that is where the exception shows up.

The exception is the verbs that fit on both sides. {Ja-da} is to sleep, and both {jib-e ja-da} and {jib-e-seo ja-da} are correct, in spoken and in written Korean. The reason is that sleeping is at once a state, lasting the whole night, and an event, happening while one sleeps. {Meok-da}, to eat, behaves the same way in some contexts and not in others, which is why the place particle in Korean is not a closed system: it is a consequence of the verb, and the verb sometimes leaves the choice open. A manual that presents {e} as "in" and {eseo} as "from" is wrong; biblical reading depends entirely on that distinction.

## Two words for the recipient

The recipient has two words, and they are not synonyms. {Hante} is the recipient of a relationship between people, and it sounds intimate or from below upward: {chin-gu-han-te}, to a friend, {eomeoni-han-te}, to a mother. {Ege} is the formal form, and it is the one Scripture uses with God. In the Bible {hante} hardly ever appears with reference to God: what appears is {yehova-ege}, to him, and that is the form the translator had to choose.

The distinction shows in the verb that goes with each. {Hante} goes straight into the verb of giving and of speaking: {hante ju-da}, to give to someone, {hante mal-ha-da}, to speak to someone. {Ege} accepts the same verb and also the polite verb {deu-ri-da}, to give, which is the form used with someone above. A reader who renders {hante} and {ege} with the same Portuguese preposition "a" loses the register, and the register is what says who stands above.

And there is a third form, which is not a different particle but the same one after a vowel. After a syllable ending in a vowel, {ege} appears as {kke}: {ju-kke}, to the Lord, {abeo-ji-kke}, to the father. It is the same relation with the particle fitted to the sound of the noun, and the detail the Bible reader runs into on every line is that {ju-kke} lowers the writer. A man writes {ju-kke} to God; two men in the street do not.

## Two particles, one sound, Psalm 23 and Proverbs 3

Biblical text offers the cleanest example in two lines. In Proverbs 3:6 the verb is {mar-ha-da}, to entrust, and the noun is God: {geu-ege}, to him. The relation is the recipient of an action, and the particle is {ege}. In Psalm 23:6 the verb is {ge-hal-da}, to dwell, and the noun is a house: {yehova-ui jib-e}, in the house of the Lord. The relation is a place of staying, and the particle is {e}.

The same vowel, the same sound, two opposite relations, and what separates them is the verb: to entrust asks for {ege}, to dwell asks for {e}. A reader working from Portuguese renders both with the preposition "a" and sees no difference at all, because in Portuguese the preposition does not change. In Korean the change exists, it is written, and it is what stops the line of Proverbs and the line of the Psalm from meaning the same thing.

The same goes for the word that closes the sentence of Proverbs: {geul-eul mar-ha-da}, entrust it to him. The noun path carries the object particle, the verb is the one of entrusting, and the recipient is God. Three positions, three pieces, and the whole sentence stands without a single word that is not there.
`),
  vocab: [
    V(
      'e',
      '에',
      'the particle that points at the noun and waits for the verb to name the relation',
    ),
    V(
      'eseo',
      '에서',
      'from where, starting from: the departure point of a path or a transformation',
    ),
    V('ege', '에게', 'to someone, in the formal register: the recipient Scripture uses with God'),
    V('hante', '한테', 'to someone, in the intimate register or from below upward'),
    V('kke', '께', 'to someone: the form of {ege} after a syllable ending in a vowel'),
    V('ju', '주', 'the Lord: the root of {ju-kke}'),
    V('ju-kke', '주께', 'to the Lord: {ege} after a vowel, and the form that lowers the writer'),
    V(
      'yehova-ege',
      '여호와에게',
      'to the Lord: the recipient of an action, in the register of Scripture',
    ),
    V('geul', '길', 'path'),
    V('marhada', '맡기라', 'to entrust: the verb of Proverbs 3:6'),
    V('jib', '집', 'house'),
    V('nanaga', '나가', 'to go out; the verb that makes {eseo} a point of departure'),
    V('hakgyo', '학교', 'school'),
    V('gongbu', '공부', 'to study; the verb that makes {eseo} the place of an action'),
    V('itda', '있다', 'to be, to stay: the verb that makes {e} a place of staying'),
    V(
      'geori',
      '거리',
      'street, neighbourhood: the noun that takes {e} and {eseo} with different verbs',
    ),
    V(
      'ja',
      '자다',
      'to sleep: the verb that accepts both particles, and the exception to the rule',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{e} has no meaning of its own. With a verb of movement it is destination, with a verb of staying it is place, with a noun of time it is a moment. The verb says which of the three it is.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eseo} points at the point at which something stops being what it was: the departure of a path or the means of a transformation. That is why {e} and {eseo} are not "destination and origin" in general.',
      ),
    },
    {
      n: '3',
      text: T(
        'The same place takes {e} or {eseo} according to the verb: state and staying ask for {e}, event and action ask for {eseo}. The rule has an exception, and the exception is the verbs that fit on both sides.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hante} is the recipient of a relationship between people; {ege} is the formal form, and it is the one Scripture uses with God. The choice between the two is register information.',
      ),
    },
    {
      n: '5',
      text: T(
        'After a syllable ending in a vowel, {ege} appears as {kke}: {ju} + {kke}, {ju-kke}. It is the same relation, with the particle fitted to the sound of the noun.',
      ),
    },
  ],
  notes: [
    {
      label: T('What Portuguese solves with one preposition'),
      text: T(
        'Portuguese has one preposition "a" for destination, one "in" for place and one "de" for origin, and context says which is which. Korean has five particles for that and none of them is the Portuguese preposition translated. The Korean particle does not name the relation: it forces the verb to declare the relation, which is why the same word appears in two sentences Portuguese writes differently.',
      ),
    },
    {
      label: T('Why Scripture does not use {hante} with God'),
      text: T(
        '{hante} is the form of a relationship between people, and Scripture writes to God in the formal register. That is why what appears on the page is {yehova-ege} and, after a vowel, {ju-kke}. A reader who renders both as "to" loses the register, and the register is precisely what says who stands above.',
      ),
    },
  ],
  examples: [
    { text: '학교에', gloss: T('hak-gyo-e — to school: {e} on a verb of movement') },
    {
      text: '학교에 있다',
      gloss: T('hak-gyo-e it-da — I am at school: the same particle, now on a verb of staying'),
    },
    {
      text: '학교에서 공부한다',
      gloss: T(
        'hak-gyo-e-seo gong-bu-ham-ni-da — I study at school: the same noun with {eseo}, because now an action is happening there',
      ),
    },
    {
      text: '집에서 나간다',
      gloss: T('jib-e-seo na-nan-da — I leave the house: {eseo} as the departure point of a path'),
    },
    {
      text: '친구한테',
      gloss: T(
        'chin-gu-han-te — to a friend: {hante}, the recipient of a relationship between people',
      ),
    },
    {
      text: '그에게',
      gloss: T(
        'geu-ege — to him (Prov 3:6): {ege}, the formal recipient, and here the recipient is God',
      ),
    },
    {
      text: '주께',
      gloss: T('ju-kke — to the Lord: {ege} after a vowel, in the form that lowers the writer'),
    },
    {
      text: '여호와의 집에',
      gloss: T(
        'yeho-va-ui jib-e — in the house of the Lord (Ps 23:6): {e} on the verb to dwell, which is a place of staying',
      ),
    },
    {
      text: '길을 맡기라',
      gloss: T(
        'geul-eul mar-ha-da — entrust it: the noun with the object particle and the verb of entrusting',
      ),
    },
    {
      text: '삼 시에',
      gloss: T(
        'sam si-e — at three o’clock: {e} on a noun of time, the third use of the same particle',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same particle with three verbs, and three relations'),
      head: [T('Noun'), T('Verb'), T('What the verb does'), T('Particle'), T('Reading')],
      rows: [
        [T('{jib}'), T('{ga-da}'), T('moves toward'), T('{e}'), T('to the house')],
        [T('{jib}'), T('{it-da}'), T('stays in'), T('{e}'), T('in the house')],
        [T('{i-re}'), T('none'), T('marks the moment'), T('{e}'), T('on Sunday')],
        [T('{jib}'), T('{na-ga-da}'), T('leaves from'), T('{eseo}'), T('from the house')],
        [T('{hwan}'), T('{sa-gi-da}'), T('is exchanged for'), T('{eseo}'), T('for money')],
      ],
    },
    {
      caption: T('The same place with two verbs, and the particle that changes'),
      head: [T('Sentence'), T('What is happening'), T('Particle'), T('Why')],
      rows: [
        [T('hakgyo-e itda'), T('nobody is doing anything'), T('{e}'), T('state, not event')],
        [
          T('hakgyo-e-seo gongbu-ham-ni-da'),
          T('an action is happening in there'),
          T('{eseo}'),
          T('event, not state'),
        ],
        [
          T('jib-e ja-da'),
          T('sleeping, which is state and event at once'),
          T('{e} and {eseo}'),
          T('the exception: the verb leaves the choice open'),
        ],
      ],
    },
    {
      caption: T('Three forms of recipient, and the register of each'),
      head: [T('Particle'), T('Register'), T('Verb it usually goes with'), T('How it appears')],
      rows: [
        [
          T('{hante}'),
          T('intimate, or from below upward'),
          T('give, speak'),
          T('to a friend, to a mother'),
        ],
        [
          T('{ege}'),
          T('formal, and Scripture’s default'),
          T('give, give politely'),
          T('{yehova-ege}, to him'),
        ],
        [T('{kke}'), T('the same {ege}, after a vowel'), T('—'), T('{ju-kke}, to the Lord')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In Korean, being at school is {hakgyo-e itda} and studying at school is {hakgyo-e-seo gongbu-ham-ni-da}. What changes between the two sentences?',
    ),
    options: [
      T(
        'the verb: with a verb of state the school takes {e}, and with a verb of action it takes {eseo}',
      ),
      T('the noun: "school" is polysemous and therefore accepts both particles'),
      T('the register: the first is formal and the second is colloquial'),
      T('nothing: the two particles are synonyms in this use'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the recipient of "the Lord" (주, syllable ending in a vowel) in the form that appears after a vowel: 주____ (to the Lord, with humility)',
      ),
      answer: '께',
    },
    {
      kind: 'match',
      prompt: T('Match each particle to the relation it points at'),
      pairs: [
        { a: T('{eseo}'), b: T('the point at which something stops being what it was') },
        { a: T('{e}'), b: T('a place of staying, when the verb is a verb of state') },
        { a: T('{hante}'), b: T('the recipient of a relationship between people') },
        { a: T('{ege}'), b: T('the formal recipient, and the form Scripture uses with God') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'In Proverbs 3:6, "entrust all your ways to him", what is the particle {ege} doing?',
      ),
      options: [
        T('it marks the recipient of the act of entrusting, and the recipient is God'),
        T('it marks the place where the entrusting happens'),
        T('it marks the point of departure of the ways'),
        T('it replaces the possessive particle of the pronoun'),
      ],
      answer: 0,
    },
  ],
};
