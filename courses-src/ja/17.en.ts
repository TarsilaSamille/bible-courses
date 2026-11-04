import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Verb'),
  title: T('The reason for condensation: how the verb disappears inside the sentence'),
  subtitle: T(
    'In a subordinate clause the Japanese verb usually drops out, and what holds the sentence together is context and the particle',
  ),
  body: C(`
## The language that economises on verbs

Japanese is a very economical language, and its economy shows up in the verb. In a subordinate clause the verb often **disappears**, and what holds the sentence together is the context plus the particle. Anyone coming from Mandarin or Korean feels this as a loss: the two sister languages almost never give up their verb, and Japanese gives it up all the time. Three languages in the same group, three economies of the verb, and only one of them deletes the verb.

The most visible case is the clause of time. "When I get home, I eat" is not "when" plus an inflected verb and then another inflected verb: it is arriving home, **eating**. The first verb enters in the form that does not inflect, and sometimes the second one drops out too and only {食べる} is left. What holds all of it is {時}, "when", which comes after the verbal form like every particle in this language.

## {時}: when the verb of a time clause disappears

{時} is a temporal particle, and the inflection of the verb is the proof. In {家に着いた時、食べる} the first verb is in the plain form, {着いた}, and the {時} says "when". The same {時} attached to an inflected verb reads differently: {着いていた時} is "at the point when I was arriving", because the progressive came in and the sentence became description instead of condition.

The way to read any {時} is to look at the verb in front of it: plain form, and it is a time clause, so it means "when"; inflected verb, or a possessive particle in its place, and the {時} is just the noun "time", as in {時の流れ}, "the flow of time". A small particle does both jobs because Japanese does not have two words for this: it has one, and a reader arriving from outside has to learn to read the inflection to know which of the two is being read.

## The relative clause that turns into a particle

A whole relative clause can shrink to a single particle. "The book that is on the table" is {机の上にある本}: the noun {本}, the place said by {上}, "on top of", and the verb is not there. It survived as {に}, the particle that takes the verb's place and says that the book is there. A relative clause that takes four words in Portuguese reaches Japanese as a particle and nothing more.

This is the construction that separates Japanese most from the two sister languages. In Mandarin and Korean the relative clause keeps its verb; here it can be just {上} or just {に}. And that is why {ある}, the Japanese "to be" with no animate subject, appears so often: it does not vanish because it is weak, it vanishes because context holds the sentence up.

The Bible shows this on the first page of John. In 1:3, {万物は言によって成った。成ったもので、言によらず成ったものは何一つなかった。}, in the second clause the verb "was made" does not appear once, because the first clause already said it. Wherever the verb dropped out, Greek also had a very simple and very repeated verb: the Japanese economy invents nothing, it saves what Greek was already repeating.

## The verb that changes clothes and the verb that is left over

The opposite road to vanishing: instead of disappearing, the verb changes clothes and turns into a noun. {取る} is "to take, to pick up, to buy"; in the noun form, {取り}, it no longer inflects like a verb, and it takes the object particle and the genitive particle like any noun. That is why {駅で切符を取る}, "I buy a ticket at the station", and {取るものを集める}, "I gather what is taken", work: in the second one the {の} links the noun {取り} to the noun {もの}, and after {集める} no verb comes at all. What inflects changes place: a verb inflects with {ます} and {た}, a noun inflects with {を}, {の} and {に}, and that is how a Japanese dictionary finds {取り}, as a noun.

On the other side of the same economy is the verb that **is left**. Subject and object can both disappear as long as context resolves them: {食べる} alone, without "I" and without "what", is a complete sentence, because it is the natural answer to "what are you going to do now?". That is why the verb holds the sentence together: it is the last piece standing when everything else has been omitted, and it is the piece that gives the answer. Without a verb there is no answer, even with subject and object.

And the shortening machine is the same one: the origin particle does without the verb of going and coming, and the means of locomotion does without the rest. {東京から} means "from Tokyo", and {歩いて} means "on foot", and both answer "how are you getting there?" with no verb at all.

The example that ties it all together is John 3:30, {あの方は栄え、わたしは衰えねばならない。}, "he must grow, and I must decrease". Notice that here both verbs are there, and neither could be missing: growing and decreasing are the whole point of the sentence, and each clause needs its own. The rule here is not "optional verb"; it is "verb only when it carries something". That is why John's Gospel, which in Greek has one verb per clause, becomes in Japanese a sequence in which the verb appears where it matters and disappears where Greek only repeated.
`),
  vocab: [
    V('toki', '時', 'when; time; temporal particle (toki)'),
    V('tsuku', '着く', 'to arrive (tsuku)'),
    V('taberu', '食べる', 'to eat (taberu)'),
    V('aru', 'ある', 'to be, to exist: the "to be" that is left when the verb drops (aru)'),
    V('tsukue', '机', 'table (tsukue)'),
    V('ue', '上', 'on top of; surface (ue)'),
    V('no', 'の', 'of; links two nouns (no)'),
    V('toru', '取る', 'to take; to pick up; to buy (toru)'),
    V('atsumeru', '集める', 'to gather; to collect (atsumeru)'),
    V('hataraku', '働く', 'to work (hataraku)'),
    V('aruite', '歩いて', 'on foot; walking (aruite)'),
    V('kara', 'から', 'from (origin); since; does without the verb of going and coming (kara)'),
    V('kuru', '来る', 'to come (kuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In a subordinate clause the verb may disappear: what holds the sentence together is context and the particle.',
      ),
    },
    {
      n: '2',
      text: T(
        '{時} with a plain-form verb is a time clause and means "when"; with an inflected verb or with {の} it is just the noun "time".',
      ),
    },
    {
      n: '3',
      text: T(
        "A relative clause can shrink to a single particle: in {机の上にある本}, the {に} takes the verb's place.",
      ),
    },
    {
      n: '4',
      text: T(
        'A nominalised verb ({取る} becoming {取り}) is a noun: it takes {を}, {の} and {に} instead of inflecting as a verb.',
      ),
    },
    {
      n: '5',
      text: T(
        'Subject and object drop out together when context resolves them, and the verb that is left is what gives the answer — as lesson 8 said.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where the verb vanished, Greek was simple'),
      text: T(
        'It is worth setting John 1:3 beside the Greek. The second clause repeats the verb "was made" twice, and Japanese writes the first and drops the second; the same happens in 1:5, where the clause of the light and the clause of the darkness keep different verbs because they say different things. The reading rule is simple: a verb missing in Japanese is a verb repeated in Greek.',
      ),
    },
    {
      label: T('The particle holds what the verb lost'),
      text: T(
        'When a verb is missing from a Japanese verse, do not hunt for a hidden verb: look for the particle. {から} holds the origin, {上} holds the place, {に} holds the state. It is also why {から} does without the verb of going and coming: the particle has already said there was movement, and saying it twice would spend a verb for nothing.',
      ),
    },
  ],
  examples: [
    {
      text: '家に着いた時、食べる',
      gloss: T('ie ni tsuitaku natta toki, taberu — when I get home, I eat'),
    },
    { text: '机の上にある本', gloss: T('tsukue no ue ni aru hon — the book that is on the table') },
    { text: '取るものを集める', gloss: T('toru mono o atsumeru — I gather what is taken') },
    { text: '食べる', gloss: T('taberu — I eat, with no subject and no object') },
    {
      text: 'あの方は栄え、わたしは衰えねばならない',
      gloss: T(
        'ano kata wa sakaeru, watashi wa otoroeneba naranai — he must grow and I must decrease (John 3:30)',
      ),
    },
  ],
  tables: [
    {
      caption: T('The verb that disappears, and what is left in its place'),
      head: [
        T('Where the verb disappears'),
        T('What Japanese writes'),
        T('The verb that is missing'),
        T('The full sentence'),
      ],
      rows: [
        [
          T('clause of time'),
          T('{家に着いた時、食べる}'),
          T('{着く}, "to arrive"'),
          T('{家に着いてから、食べる}'),
        ],
        [
          T('relative clause'),
          T('{机の上にある本}'),
          T('{ある}, "to be"'),
          T('{机の上に本がある}'),
        ],
        [
          T('nominalised verb'),
          T('{取るものを集める}'),
          T('the inflection of the verb'),
          T('{取るものを集める}'),
        ],
        [T('subject'), T('{食べる}'), T('the subject pronoun'), T('{わたしが食べる}')],
        [
          T('means of locomotion'),
          T('{歩いて}'),
          T('the verbs of going and of walking'),
          T('{歩いて行きます}'),
        ],
        [T('origin'), T('{東京から}'), T('{来る}, "to come"'), T('{東京から来ます}')],
      ],
    },
    {
      caption: T('Three languages in one group, three economies of the verb'),
      head: [T('Language'), T('The verb in a clause'), T('What holds the sentence up')],
      rows: [
        [T('Mandarin'), T('almost always present'), T('the particle and the word order')],
        [T('Korean'), T('almost always present'), T('the verb inflection and the particle')],
        [T('Japanese'), T('sometimes absent'), T('the context and the particle')],
      ],
    },
    {
      caption: T('The verb that changes clothes'),
      head: [T('The verb'), T('The noun'), T('The sentence it builds')],
      rows: [
        [
          T('{取る}, "to take"'),
          T('{取り}, the act of taking'),
          T('{駅で切符を取る} — I buy a ticket at the station'),
        ],
        [T('{働く}, "to work"'), T('{働き}, work'), T('{働く人} — the person who works')],
        [T('{歩く}, "to walk"'), T('{道}, path'), T('{歩く道} — the path you walk along')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {家に着いた時、食べる}, what is {時} doing?'),
    options: [
      T(
        'opening a clause of time: which is why the first verb appears in the form that does not inflect',
      ),
      T('replacing the verb "to eat", which may be left out'),
      T('marking the subject of {食べる}'),
      T('turning the sentence into a rhetorical question'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "the book that is on the table" with the particle left over from the relative clause: 机の上____ある本',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it holds up'),
      pairs: [
        { a: T('{時}'), b: T('opens the clause of time and does without the verb inflection') },
        {
          a: T('{上}'),
          b: T('says "on top of", and with it a relative clause can shrink to a particle'),
        },
        { a: T('{の}'), b: T('links the noun to what comes after it') },
        { a: T('{から}'), b: T('does without the verb of going and coming') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In which of these sentences is the verb truly required?'),
      options: [
        T(
          '{あの方は栄え、わたしは衰えねばならない} — growing and decreasing are the point of the sentence',
        ),
        T('{机の上にある本}'),
        T('{食べる}'),
        T('{東京から}'),
      ],
      answer: 0,
    },
  ],
};
