import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Reading'),
  title: T('John 3:16 read particle by particle: six marks and two verbs in two lines'),
  subtitle: T(
    'The most translated line of the New Testament is also the shortest: almost everything it asserts is in the particles, and what is left for the verb is two forms',
  ),
  body: C(`
## What the first line has: a topic, two objects and a verb at the end

The first line of John 3:16 in the {shinkaiyaku} is *kami wa, jitsu ni, {sono} {hitori-ko} o {ataeru} ni {hodo} ni, {yo} o aisareta*. It has a noun, a topic particle, an adverb, two objects with {wo}, a particle of degree and a verb at the end. What the sentence asserts is short: God loved the world. Everything that makes the text a long sentence rather than a short one is in the marks.

The first {wa} is topic and the second {wo} is object, and the distance between them is the same one that exists in any sentence of the chapter. What changes is what sits in between: *jitsu ni*, "in fact", which is a conjunction in Greek and became an adverb in Japanese; and *hodo ni*, "to the point of", which is the hardest of the two to see. In *ataetai ni hodo ni, yo o aisareta*, the construction is "to the point of giving the Son, he loved the world": the noun with {wo} after *hodo ni* is what shows the degree of the action, and Portuguese has nothing to do that work.

The verb comes at the end and in the past, and that is the second mark of the line: the root {aisuru}, to love, and the form *aisareta*, "loved". Whoever translates from Portuguese writes "God loved the world" and arrives at the same place, and that is exactly why the line is no use: it is identical to the Portuguese everywhere the Portuguese is clear.

## The construction *nai koto*: the subject that becomes a noun

The second line starts with *sore wa*, and the {wa} here does not mark a new topic: it marks the bridge to the explanation of the first one. After it comes the hardest piece of the verse: *miko o shinzeru mono ga, hitotsu to shite horobininai koto ni*, "that everyone who believes in him should not perish".

What is happening there is a whole clause turned into a noun. The subject, *shinzeru mono ga*, is marked with {ga}; the verb, *horobinai*, is in the negative form that does not inflect; and *koto* comes in at the end to name the whole thing. The complete construction, *〜nai koto*, means "without", "that not", and Portuguese renders it with a whole clause: "so that none who believes should perish". A piece of clause has become a noun, and that is why the {ga} is there: the subject became a noun, and a noun takes a particle.

It is the construction that shows up all through John 3, and it is the same thing Greek does with the infinitive and Japanese does with *koto*. Whoever does not know it reads *horobinai koto* as if it said "not a perishing thing", and loses the sense of a piece, which is what {koto} does not mean in Japanese: it names an action, not a thing.

## The construction *tame de aru*: purpose with a noun

The end of the line is *eien no {inochi} o {mamoru} tame de aru*. The {wo} marks what is wanted, *mamoru*, to have, and what comes before it is what exists for that: *eien no inochi*, eternal life. {tame} is **the word of purpose**, and the form the text uses is *tame de aru*: "is for", with the verb of being at the end, like any clause that explains the motive of another one.

It is the second noun of the line, and it is the same mechanism: the purpose of a verb is named before the verb that performs it. "God loved the world so that all who believe should have eternal life" is, in Japanese, a clause with two noun phrases and two verbs; Greek had an infinitive for it, and Portuguese settled it with a "so that" that costs nothing.

And there is a difference worth measuring between the two noun phrases. The first, *shinzeru mono ga*, is a subject: who does it, and {shinjiru} is the root of the verb. The second, *mamoru tame de aru*, is a motive: why. Both are nouns with a particle, and the word that accompanies them says which one it is: {ga} with *mono* for the subject, *tame* with *de aru* for the purpose. The same mechanism at the start of the line, inverted at the end, and a reader who only learns to read the beginning of the sentence never arrives at the end.

## The line below: the same shape, the parties swapped

John 3:17 repeats the construction with one thing changed, and the change is the whole reading: *kami ga miko o yo ni yobausareta no wa, yo o sabaku tame de wa naku, miko yotte yo ga sukwareru tame de aru*. What changed is the particle on the first noun: {kami} now takes {ga}, and not {wa}.

**And the particle decides the sense of the verb.** In *kami ga miko o yo ni yobausareta no wa*, the form *yobausareta* is the passive, and the one who acts is {kami}, marked with {ga}. In the line above, *o ataetai ni hodo ni, yo o aisareta*, the form *aisareta* has the same ending, but there is no passive there at all: the one who acts is the topic, marked with {wa}, and the ending is the one of treating the other with respect. Two shapes that written look the same, and one particle each time decides whether the text is saying that God sent the Son or that God loves the world with deference.

The rest of the line is a denied noun, and the noun is *no wa*: *tame de wa naku*, "not in order to judge, but". It is {de} working with {naku}: the {wa} of *de wa* points back at the motive that was just named, and {naku} says that motive is refused. Portuguese writes "not to judge, but to"; Japanese writes "it is not the motive of X, it is the motive of Y", with both motives in noun form and the verb {aru} closing both.

The last piece is *miko yotte yo ga sukwareru*. {yotte} is the particle of means: *miko yotte*, "by the Son", and it is what Portuguese writes "by means of". After it comes *yo ga*, the world as a new subject, and that is the new information of the line, the same thing 3:16 handed over in *yo o*. Two lines, four verbs, and not one word more than Greek needed.
`),
  vocab: [
    V(
      'wa',
      'は',
      'topic; in 3:16 it marks God in the first line and the world as a bridge in the second (wa)',
    ),
    V(
      'ga',
      'が',
      'subject; in 3:17 it marks who sends, and in 3:16 it marks the subject that became a noun (ga)',
    ),
    V('wo', 'を', 'direct object; the verse has three of them, and none of them is the verb (wo)'),
    V(
      'no',
      'の',
      'possession; it links what is owned to the owner, and the purpose to its motive (no)',
    ),
    V('kami', '神', 'God; in 3:16 and 3:17 it is the first noun of both lines (kami)'),
    V('yo', '世', 'the world, the human generation (yo)'),
    V('sono', 'その', 'that; in "that only Son", it points at a single referent (sono)'),
    V('hitori-ko', 'ひとり子', 'only son, the onlybegotten (hitori-ko)'),
    V(
      'ataeru',
      '与える',
      'to give, to grant; the text writes the respectful form, "gave" (ataeru)',
    ),
    V(
      'hodo',
      'ほど',
      'degree; "to the point of", and that is how 3:16 says "to the point of giving" (hodo)',
    ),
    V('aisuru', '愛する', 'to love; in 3:16 the verb comes in the past (aisuru)'),
    V(
      'shinjiru',
      '信じる',
      'to believe, to credit; the root of "those who believe" in 3:16 (shinjiru)',
    ),
    V(
      'horobu',
      '滅ぶ',
      'to perish, to be destroyed; "should not perish" is the verb of the construction in 3:16 (horobu)',
    ),
    V('koto', 'こと', 'action; it names a piece of a clause and turns it into a noun (koto)'),
    V('tame', 'ため', 'purpose, motive; "is for" (tame)'),
    V('inochi', '命', 'life (inochi)'),
    V('mamoru', '持つ', 'to have, to possess; with {wo}, "to have for oneself" (mamoru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The first line of John 3:16 has a topic, two objects and a verb at the end. What the sentence asserts is short; what makes it long are the particles.',
      ),
    },
    {
      n: '2',
      text: T(
        '*hodo ni* is the particle of degree: "to the point of". The noun that comes after it is the action that measures the how much.',
      ),
    },
    {
      n: '3',
      text: T(
        'In *〜nai koto*, the subject of the clause becomes a noun and therefore takes {ga}; *koto* names the action, not a thing.',
      ),
    },
    {
      n: '4',
      text: T(
        '{tame de aru} is "is for": the motive comes as a noun before the verb, and the verb of being closes the sentence.',
      ),
    },
    {
      n: '5',
      text: T(
        'The same ending *〜sareta* appears in 3:16 and 3:17 with opposite values: in 3:16 it is the respectful form, and in 3:17 it is the passive. What decides is the particle on the first noun: {wa} or {ga}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why a line so famous is no use on its own'),
      text: T(
        'The Portuguese translation of John 3:16 and the Japanese line say the same thing, and that is why the line is no use as reading. It is very good as eye training: someone who opens the page and tries to identify each particle has a text of two lines with {wa}, {wo}, {wo}, {ga}, {de}, {koto}, {tame} and {de} inside twenty words of Japanese. No other short passage of the New Testament packs so many marks into so little space, and no other one is so well known.',
      ),
    },
    {
      label: T('{tame} is not a preposition'),
      text: T(
        'In *eien no inochi o mamoru tame de aru*, the purpose is a noun with its particle, not a word that glues itself to the verb. The consequence is that it can move: it can go before the verb, as here, or become the topic of the sentence with {wa}, and the Portuguese "so that" does not move because it is a conjunction. Whoever translates from Portuguese writes the "so that" glued to the verb and loses the freedom the text had.',
      ),
    },
  ],
  examples: [
    {
      text: '神は、実に、そのひとり子をお与えになったほどに、世を愛された。',
      gloss: T(
        'kami wa, jitsu ni, sono hitori-ko o ataetai ni hodo ni, yo o aisareta — God loved the world to the point of giving his only Son (John 3:16): topic {wa}, two {wo}, and the degree in {hodo ni}',
      ),
    },
    {
      text: 'それは御子を信じる者が、ひとりとして滅びることなく、永遠のいのちを持つためである。',
      gloss: T(
        'sore wa miko o shinzeru mono ga, hitotsu to shite horobininai koto ni, eien no inochi o mamoru tame de aru — so that no one who believes should perish, but have eternal life (John 3:16): {ga} on the subject that became a noun, and {tame} on the motive',
      ),
    },
    {
      text: '神が御子を世に遣わされたのは、世をさばくためではなく、御子によって世が救われるためである。',
      gloss: T(
        'kami ga miko o yo ni yobausareta no wa, yo o sabaku tame de wa naku, miko yotte yo ga sukwareru tame de aru — God sent the Son into the world not to judge the world, but that the world might be saved through the Son (John 3:17): {ga} on the agent of the passive, and {de wa naku} refusing the first motive',
      ),
    },
    {
      text: 'お与えになった',
      gloss: T(
        'o ataetai ni natta — "(God) gave": the respectful form of the verb "to give", and the ending is the same as the passive\'s',
      ),
    },
    {
      text: '遣わされた',
      gloss: T(
        'yobausareta — "was sent": the same ending, now with a passive sense, because the one who sends comes in {ga}',
      ),
    },
    {
      text: 'ひとりとして滅びることなく',
      gloss: T(
        'hitotsu to shite horobininai koto ni — without one perishing: the verb in the negative, and *koto* naming the whole',
      ),
    },
    {
      text: 'ためである',
      gloss: T('tame de aru — "is for": the motive in noun form, and the verb of being at the end'),
    },
    {
      text: '世が救われるためである',
      gloss: T(
        'yo ga sukwareru tame de aru — it is that the world may be saved: {ga} brings the new subject, and {tame} brings the motive',
      ),
    },
  ],
  tables: [
    {
      caption: T('The two lines of John 3:16 and 3:17, piece by piece'),
      head: [T('The piece'), T('The form'), T('What it is'), T('What Portuguese does with it')],
      rows: [
        [
          T('topic'),
          T('{wa}'),
          T('the first noun of each line, what the reader already knows'),
          T('no word: the subject is already in place'),
        ],
        [
          T('new subject'),
          T('{ga}'),
          T('who believes, who is saved, who sends'),
          T('"those who believe", "that the world might be saved"'),
        ],
        [
          T('object'),
          T('{wo}'),
          T('the Son, the world, eternal life'),
          T('"gave the Son", "loved the world", "have eternal life"'),
        ],
        [
          T('degree'),
          T('{hodo ni}'),
          T('it measures the action that comes after it'),
          T('"to the point of": a "so" that Portuguese resolves in the verb'),
        ],
        [
          T('action without inflection'),
          T('{koto}'),
          T('it names a whole piece of a clause'),
          T('"that should not perish": a new clause'),
        ],
        [
          T('motive'),
          T('{tame}'),
          T('the reason that comes before the verb, as a noun'),
          T('"so that": a word that does not move'),
        ],
        [
          T('refusal'),
          T('{de} {wa} {naku}'),
          T('it denies a motive that was already named'),
          T('"not to": the "not" goes back to the noun'),
        ],
        [
          T('means'),
          T('{yotte}'),
          T('it marks the instrument of the passive'),
          T('"by means of": a preposition Portuguese has'),
        ],
      ],
    },
    {
      caption: T('The same ending, two values, and the particle that decides'),
      head: [
        T('The form in the line'),
        T('The particle on the first noun'),
        T('What the ending is'),
        T('What the line asserts'),
      ],
      rows: [
        [
          T('*sono hitori-ko o ataetai ni hodo ni, yo o aisareta*'),
          T('{wa}'),
          T('the respectful form, not the passive'),
          T('God, who is the topic, gave the Son and loved the world'),
        ],
        [
          T('*kami ga miko o yo ni yobausareta no wa*'),
          T('{ga}'),
          T('the passive'),
          T('God sent the Son, and the Son is the object'),
        ],
        [
          T('*yo ga sukwareru tame de aru*'),
          T('{ga}'),
          T('a plain verb with {de}'),
          T('the world is saved: a new subject, a named motive'),
        ],
      ],
    },
    {
      caption: T('The two nouns the line builds'),
      head: [T('The part'), T('The form'), T('What it is'), T('How Portuguese resolves it')],
      rows: [
        [
          T('the subject'),
          T('*shinzeru mono ga*'),
          T('who does it, turned into a noun'),
          T('"those who believe": a relative clause'),
        ],
        [
          T('the motive'),
          T('*mamoru tame de aru*'),
          T('so that, turned into a noun'),
          T('"so that": a conjunction that comes last'),
        ],
        [
          T('the quantity'),
          T('*hitotsu to shite*'),
          T('the numeral turned into an adverb, "not one"'),
          T('"none": the negation lives inside the verb'),
        ],
        [
          T('the possessive'),
          T('*eien no inochi*'),
          T('the life that is eternal, linked by {no}'),
          T('"eternal life": the adjective becomes a noun and goes first'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {それは御子を信じる者が、ひとりとして滅びることなく}, why does {ga} appear on {shinzeru mono}?',
    ),
    options: [
      T('because that clause became a noun with {koto}, and a new noun needs the subject particle'),
      T('because {ga} is the particle that appears after every negative verb'),
      T('because the verb {horobu} is transitive and {ga} marks the object'),
      T('because {ga} is the question particle, and this line is a rhetorical question'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the purpose of John 3:16: 永遠のいのちを持つ____である (it is to have eternal life)',
      ),
      answer: 'ため',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it marks in the line'),
      pairs: [
        { a: T('{wa}'), b: T('topic: the first noun of the line, what the reader already knows') },
        { a: T('{wo}'), b: T('object: the Son given, the world loved, the life wanted') },
        { a: T('{ga}'), b: T('new subject: who believes in 3:16, who is saved in 3:17') },
        { a: T('{tame}'), b: T('the motive that comes before the verb, in noun form') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'In 3:17 the text writes {kami ga} where 3:16 wrote {kami wa}. What does that swap produce?',
      ),
      options: [
        T(
          'in 3:17 the verb becomes passive, and the one who sends is marked as the new subject of the clause',
        ),
        T('the text stops showing respect to God, because {ga} is the particle of insult'),
        T('the sentence becomes a question about the motive of the sending'),
        T("nothing: {wa} and {ga} are synonyms here, and the choice is the translator's"),
      ],
      answer: 0,
    },
  ],
};
