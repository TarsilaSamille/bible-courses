import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Particles'),
  title: T(
    '{ro}, {euro}, {kkaji} and {buto}: the particle that becomes a path, and the two that mark the edges',
  ),
  subtitle: T(
    'These are the ones Portuguese solves with "to", "by", "up to" and "from". None has a translation of its own: each one points at an edge of an extension, and the verb says which edge',
  ),
  body: C(`## {ro}: the noun that becomes a path

{ro} does not mean "to". It makes the noun into a direction. In {ji-beu-ro ga-da}, to go home, the house stops being a place and becomes the line of the movement: the sentence is telling the path, not the point of arrival.

The test that separates {ro} from {e} fits in one verb. With the verb to go, both work: {ji-beu-ro ga-da} and {jibe ga-da} are correct sentences, and the second puts the stress on the destination and the first on the route. With the verb to come, only {e} is natural: {jibe o-da}, I come home, while {ji-beu-ro o-da} sounds wrong to almost every speaker. **The rule is that {ro} points at the route and {e} points at where one arrives, and the verb decides whether the sentence is about the path or the arrival.**

The same {ro} shows up in a completely different job, and this is where the particle stops being direction. In {na-meu-ro man-deun jib}, a house made of wood, the noun is wood and the relation is of material. In {pyeo-neu-ro bo-nae-da}, to send by letter, it is of means. Those are the three jobs of {ro}, and Portuguese handles the three with different words: "to", "of" and "by". Whoever translates particle by particle has to choose, and the choice belongs to the translator, not to the language.

## {euro}: the same relation with one letter more

After a word with a final consonant, the relation of {ro} appears as {euro}. It is the alternation already known, and here it adds nothing: {na-meu-ro} and {pyeo-neu-ro} say the same thing as {mu-neu-ro} and {ga-ro}, and the difference between one pair and the other is the letter that follows the noun.

What {euro} adds is the possibility of standing on its own as a noun. {Uisa}, doctor, with {euro} gives {ui-sa-ro}: as a doctor, in the role of doctor. With {ro} on a word ending in a vowel the result is the same: {jeoga}, expert, gives {jeo-ga-ro}. **The particle {(e)uro} over a person's name says what role the person is playing in the sentence**, which is why Scripture uses the construction often: the same Jesus appears as king, as psalmist and as high priest, and it is the particle that says with which competence each line is treating him.

And there is a particle that looks like {ro} and is not {ro}. {Hago} is the conjunction "and", and it appears between two nouns: {nam-hago mul} is wood and water. {Ro} points at a route or a means. Both are short, both come after a noun, and confusing them is the commonest mistake of anyone writing Korean with the dictionary open.

## {buto} and {kkaji}: the two edges of an extension

{Buto} marks the beginning of an extension and {kkaji} marks its end. Between the two goes whatever is being measured, and the measure can be time, place, quantity or an abstraction: {saheul buto akka-kkaji} is from three days on, three days long. The two particles are the only pair in Korean that insist on coming together, and the pair shows up all the time in dates and in deadlines.

The easy part is the one already visible: {ir-e buto yeol-hae} is from tomorrow on, {yeol-hae kkaji} is up to Sunday. The hard part is that the edge of an extension need not be a place or a moment. {Kkeun kkaji} is up to the end, and the end is an abstract noun, not a point on the calendar. {Sibae buto} is from the beginning, and the beginning is abstract too. {Dase kkaji} is up to five, and five is a quantity. Korean measures with the noun of the edge, and the edge can be any noun that makes sense as an end.

Native counting comes in alongside {buto} and {kkaji}, and it explains why the extension has a single word. Time is counted in spoken Korean with the native numeral glued to {il}: {o-il} two days, {sa-heul} three days, {na-heul} four days. Up to six, the number is the one Portuguese would spell out. From seven on, the compound changes: {i-re} seven days, {yeo-deun} eight days, {yeol-heul} ten days. The same count, two families of numerals, and the border sits in the middle. A reader who knows both number systems sees the point where the sentence left orality, and one who does not reads "seven" where the speaker said "four".

## {boda}: two words with the same shape

Korean has a case where two different words are written the same way, and it is what fools anyone reading a dictionary. {Boda} is comparison, and it comes after a noun of quality: {geu-geot-bo-da}, better than that. {Boda} is also "along", and it comes before a verb: {geul-eul bwa-da}, to follow the path, {haneul-eul bo-da}, to look at the sky.

The test is mechanical: **can {boda} stand before a verb? Then it is "along".** Comparison never does, because the second term is a noun and not an action. And "along" never appears alone nor with a noun behind it: it requires the verb, and so it disappears inside {bara-boda}, to gaze at, and {sareo-boda}, to follow with the eye. In those compounds the word stops being a particle and becomes part of a verb, and that is where the Bible reader meets it without noticing it is there.

## Three particles the book opens and closes with

The Bible in Korean begins with {taechoe}, in the beginning, and the word is literally {mul}-{cho}-{eseo}: at the beginning of words. The first word of the book, in Korean, is a preposition glued to a noun, and what it marks is the beginning of an extension. Translating it as "in the beginning" loses nothing, because in Portuguese it is the same, but someone who studies the word finds that the book does not begin with a noun: it begins with a relation.

Further on, Matthew 7:13 brings {jo-seun mu-neu-ro deu-reo-ga-ra}, enter through the narrow gate, and the {ro} is on the verb of entering: the sentence is about the path, not about the house. Matthew 24:13 brings {kkeun kkaji}, to the very end, and the {kkaji} is on an abstract noun. Neither Portuguese rendering keeps the information that a particle is involved, and that is why translating {ro} and {kkaji} as "by" and "until" is not a loss of meaning: it is a loss of structure.

And the reading habit that comes out of this is simple. Romanize the particle before you translate the sentence, because in Portuguese it does not exist: if the page has {ro}, the original has a direction; if it has {kkaji}, the original has an end. The word the translator chose and the direction the text points are not the same thing, and whoever romanizes first knows which of the two they are reading.
`),
  vocab: [
    V('ro', '로', 'the route of a movement, and the means or material of an action'),
    V('euro', '으로', 'the same relation as {ro}, after a word with a final consonant'),
    V('kkaji', '까지', 'up to: the end of an extension'),
    V('buto', '부터', 'from: the beginning of an extension'),
    V('hago', '하고', 'and; together with, and not the same word as {ro}'),
    V('boda', '보다', 'than: the particle of comparison, not the same word as "along"'),
    V('nameu', '나무', 'wood: the noun that {ro} turns into material'),
    V('mandeul', '만들', 'to make, to build: the verb that asks for {ro} as material'),
    V('uisa', '의사', 'doctor; the office formed with {euro}'),
    V('jeoga', '제가', 'as an expert: the same {(e)uro} in another way'),
    V('mun', '문', 'gate'),
    V('joseun', '좁은', 'narrow'),
    V(
      'taecho',
      '태초',
      'the beginning; literally "at the beginning of words", the first word of Genesis',
    ),
    V('kkeun', '끝', 'end: the abstract noun that {kkaji} takes as an edge'),
    V('baraboda', '바라보다', 'to gaze at: {boda} is no longer a particle, it is part of a verb'),
    V('ppun', '품', 'contents, vessel: the second half of a noun'),
    V('ippun', '이품', 'personal vessel; "mouth" plus "vessel", a noun formed by accretion'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ro} points at the route of a movement, and {e} points at where one arrives. With the verb to go both work; with the verb to come only {e} is natural.',
      ),
    },
    {
      n: '2',
      text: T(
        'The same {ro} marks means and material: {na-meu-ro man-deun jib} is a house made of wood, and {pyeo-neu-ro bo-nae-da} is to send by letter. Three relations that Portuguese handles with three words.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Uisaro} and {jeo-ga-ro} show the other use: {euro} over a person’s name says what role the person is playing in the sentence.',
      ),
    },
    {
      n: '4',
      text: T(
        '{buto} marks the beginning of an extension and {kkaji} the end. The edge can be time, place, quantity or an abstract noun such as {kkeun}, and the pair {buto} {kkaji} almost always comes together.',
      ),
    },
    {
      n: '5',
      text: T(
        '{boda} has two words with the same shape: comparison, before a noun, and "along", before a verb. Can it stand before a verb? Then it is the second.',
      ),
    },
  ],
  notes: [
    {
      label: T('The first word of Genesis is a preposition'),
      text: T(
        '{Taecho} opens as {mul}, word, plus {cho}, beginning, plus {eseo}: at the beginning of words. The modern Korean translation put that on the first word of the book, and the information the particle carries is that the line of the text has a beginning. A reader of Portuguese never sees that information, because in Portuguese "in the beginning" is a noun with a preposition, not an extension with two edges.',
      ),
    },
    {
      label: T('Why {boda} disappears from the dictionary'),
      text: T(
        'The reading "along" only exists before a verb, and so it survives almost always locked inside one: {bara-boda}, {sareo-boda}. Inside those compounds the word stops being a particle and becomes part of a verb, which is why the Bible reader finds it on the page without knowing he is reading a particle.',
      ),
    },
  ],
  examples: [
    {
      text: '집으로 가다',
      gloss: T('ji-beu-ro ga-da — to go home: the house as the line of the movement'),
    },
    {
      text: '학교에 오다',
      gloss: T(
        'hak-gyo-e o-da — to come to school: the same destination, now with {e}, because the sentence is about arrival',
      ),
    },
    {
      text: '좁은 문으로 들어가라',
      gloss: T(
        'jo-seun mu-neu-ro deu-reo-ga-ra — enter through the narrow gate (Mt 7:13): {ro} on the verb of entering',
      ),
    },
    {
      text: '나무로 만든 집',
      gloss: T(
        'na-meu-ro man-deun jib — a house made of wood: {ro} as material, and the noun is a place nowhere',
      ),
    },
    {
      text: '편지로 보내다',
      gloss: T('pyeo-neu-ro bo-nae-da — to send by letter: {ro} as the means of the action'),
    },
    {
      text: '의사로',
      gloss: T(
        'ui-sa-ro — as a doctor: {euro} over a person’s name, naming the role in the sentence',
      ),
    },
    {
      text: '태초에',
      gloss: T(
        'tae-cho-e — in the beginning (Gn 1:1): the preposition {eseo} inside the first word of the book',
      ),
    },
    {
      text: '끝까지',
      gloss: T(
        'kkeun kka-ji — to the very end: {kkaji} on an abstract noun, and not on a point on the calendar',
      ),
    },
    {
      text: '사흘',
      gloss: T('sa-heul — three days: native numeral glued to {il}, in the spoken count'),
    },
    {
      text: '이레',
      gloss: T(
        'i-re — seven days: the same noun {il} with the Sino-Korean numeral, and the spoken count changed family',
      ),
    },
    {
      text: '바라보다',
      gloss: T(
        'ba-ra-bo-da — to gaze at: {boda} has gone into the verb and stopped being a particle',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same sentence with {ro} and with {e}, and the verb that decides'),
      head: [T('Sentence'), T('What is at stake'), T('Particle'), T('Verb it goes with')],
      rows: [
        [T('ji-beu-ro gada'), T('the route of the movement'), T('{ro}'), T('to go')],
        [T('jibe gada'), T('the point of arrival'), T('{e}'), T('to go')],
        [T('jibe oda'), T('the arrival'), T('{e}'), T('to come')],
        [
          T('ji-beu-ro oda'),
          T('—'),
          T('{ro}'),
          T('not natural: the verb of arrival does not ask for a route'),
        ],
      ],
    },
    {
      caption: T('What can sit at each edge of an extension'),
      head: [T('What is measured'), T('Beginning'), T('End'), T('What lies between')],
      rows: [
        [T('time'), T('{o-il buto}'), T('{sa-heul kkaji}'), T('three days of interval')],
        [T('place'), T('{yeoha-seo buto}'), T('{yeoha kkaji}'), T('from one city to another')],
        [T('quantity'), T('{myeoch buto}'), T('{dase kkaji}'), T('from some up to five')],
        [T('abstract'), T('{sibae buto}'), T('{kkeun kkaji}'), T('from the beginning to the end')],
      ],
    },
    {
      caption: T('Three short words that must not be confused'),
      head: [T('Word'), T('Romanization'), T('What it does'), T('How it enters the sentence')],
      rows: [
        [T('로'), T('ro'), T('points at a route, and marks the means'), T('after any noun')],
        [
          T('으로'),
          T('eu-ro'),
          T('the same, after a final consonant'),
          T('after a noun with a final consonant'),
        ],
        [
          T('하고'),
          T('ha-go'),
          T('the conjunction "and"'),
          T('between two nouns, and nothing else'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the real difference between {ro} and {e} when the verb is to go?'),
    options: [
      T(
        '{ro} points at the route and {e} points at the point of arrival; with the verb to come, only {e} is natural',
      ),
      T('{ro} is the informal form of {e}, and the two are used alike with any verb'),
      T('{ro} marks that the subject is known and {e} marks that it is new'),
      T('{ro} marks the time of the action and {e} marks the place'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the particle of "wood" (나무, ending in a vowel) to say "a house made of wood": 나무____ 만든 집',
      ),
      answer: '로',
    },
    {
      kind: 'match',
      prompt: T('Match each particle to the work it does'),
      pairs: [
        { a: T('{buto}'), b: T('the beginning of an extension') },
        { a: T('{kkaji}'), b: T('the end of an extension') },
        { a: T('{boda}'), b: T('than, in comparison') },
        { a: T('{ro}'), b: T('the route of a movement, and the means of an action') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'In Genesis 1:1, the first word of the Bible in Korean is {taechoe}. What is the word, literally?',
      ),
      options: [
        T('"word" plus "beginning" plus the preposition {eseo}: at the beginning of words'),
        T('a noun meaning beginning, with no particle at all'),
        T('the verb "to create" with the time particle {kkaji}'),
        T('the numeral one, which in Korean marks the first of a series'),
      ],
      answer: 0,
    },
  ],
};
