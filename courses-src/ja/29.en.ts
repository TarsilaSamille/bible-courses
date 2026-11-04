import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Adverb'),
  title: T(
    '{mada} and {mou}: "still" and "already", and what changes when the sentence turns negative',
  ),
  subtitle: T(
    'The two adverbs that trip up a reader most are the ones Portuguese handles with a single word; in Japanese they are two, and it is the negation that says which of the two is in the sentence',
  ),
  body: C(`
## The adverb goes after the verb, and does not inflect

A Japanese adverb does not inflect, has no negative form of its own, and asks for nothing after it. *Hayaku sugimasu*, "it is too fast"; *mizu ga takusan atsui*, "the water is very hot". In neither of them is there any mark after the adverb, and that absence of a mark is what lets Japanese stack two or three adverbs without ambiguity.

Position is what it charges for. The adverb goes **after** the verbal form and never before, which is the reverse of Mandarin, where frequency opens the verb. In *ashita wa mainichi izakaya e ikimasu*, "tomorrow I go to the bar every day", the frequency adverb sits between the verbal form and the final particle. Whoever comes from Portuguese writes "tomorrow I go every day to the bar", which is a sentence any Japanese speaker understands and nobody writes the way Japanese writes it.

## {mada} and {mou}: the two Portuguese does not tell apart

{mada} is "still" and {mou} is "**already**". Both come after the verb, both are one syllable, and neither inflects. In *ima made mada mikanai*, "I have not seen it yet", {mada} says the state continues; in *ima {mou} kita*, "I have come already", {mou} says the state has arrived.

{mou} has a third job, and it is the one that misleads most: inside *mou ichido*, "once again", the second half of the expression means "once" and not "already". In John 3:4, *mou ichido, haru no uta ni hairu koto ga dekimasu ka*, "can one be born again?", the same syllable carries the sense of repetition. Whoever translates "again" as "already" produces a sentence that means nothing.

And there is a fourth: in writing, {mou} becomes another word. In Hebrews 11:5, *Sara mo, {sudeni} sono nen o sugita mi no han'i de aru noni*, "Sarah too, already having passed that age", the adverb is written {sudeni}, and a reader who only knows {mou} does not recognise it. The same happens with *totemo*, whose written form is *makoto*, which Matthew 24:33 uses in "truly, I tell you". Written Japanese has a long form for the two commonest adverbs of the language, and it does not look like the form that shows up in speech.

## When the sentence turns negative

Here is the point that confuses most, and it fits in two lines. In a positive sentence, {mada} is "still" and {mou} is "already". In a negative sentence, the two say the same thing turned around: {mada} plus a negative is "not yet", {mou} plus a negative is "no longer".

*Ware-tachi wa mada shinjiteimasen*, "we cannot believe yet", is {mada} with a negative verb ({shinjiru}, to believe, in the form that negates), and the most faithful rendering is not "we do not believe yet": {mada} covers the whole verb, which is why the negative comes before it instead of glued to the end. The same sentence with {mou}, *mou shinjiteimasen*, says something else: "we no longer believe", and the state has changed, someone who believed has stopped believing. The two use the same negative construction and say the opposite of each other.

The other case is the commonest and the easiest to get wrong. *Sensei ni wa mada hanashiteimasen*, "I have not yet spoken to the teacher", puts {mada} in front of a verb in the {teimasen} form: the adverb comes before the whole negation. *Mada mitemasen*, "I have not seen it yet", puts {mada} in front of a {nai}: the adverb comes before a negative adjective. They are two different constructions, and Portuguese has a word for each; Japanese decides by position, and a translator working from Portuguese hands the reader one of the two without noticing that the other exists.

And there is a third adverb, which only shows up with a negative and is the most emphatic of the three. *Sensei wa mada madara kaettekoi*, "the teacher will certainly not come back": {mada} here no longer marks time, it marks certainty, and the negative that comes with it is *mai*, which exists as no word on its own; the verb {kaeru} turns back up there in the negative. Whoever translates "he will not come back yet" with that sentence adds a certainty the Japanese is asserting and the Portuguese translation is not.

## The adverbs of quantity, and the form writing prefers

{totemo} is "very", {sukoshi} is "a little", {takusan} is "much, many", {sugu} is "immediately", {yoku} is "well, often". None of them inflects, and all of them behave like adverbs: after the verbal form. What each one does is modify, and {takusan} is the only one that can also stand in front of a noun, as in *takusan no hito*, "many people", because of {subete}, "everything", which is the word of quantity behind it.

{sugu} and {yoku} show the other face: both of them admit only a verb, and it is the verb that says whether the adverb is about time or about habit. *Sugu kuru*, "to come right away", and *yoku yobu*, "to call often", have the same shape and nothing in common, and a translator who does not look at the verb hands the reader a "right away" where there was a "often".

Biblical text uses {takusan} next to the verb, and that is where it compares: in Mark 12:43, *kono katsu {yobime} wa, sono dare yori mo {takusan} ireta*, "this poor widow put in more than any of the others", the adverb is glued to the verb, and it is what makes the comparison with the {yori} that comes just before. A quantity adverb that modifies a verb measures; the same adverb in front of a noun counts. They are two jobs, and position separates them.
`),
  vocab: [
    V('mada', 'まだ', '"still": the state continues; with a negative, "not yet" (mada)'),
    V(
      'mou',
      'もう',
      '"already": the state has arrived; with a negative, "no longer", and in *mou ichido*, "again" (mou)',
    ),
    V('sudeni', 'すでに', 'already; the written form of {mou} (sudeni)'),
    V('totemo', 'とても', 'very; a neutral adverb, after the verbal form (totemo)'),
    V('takusan', 'たくさん', 'much, many; it quantifies noun and verb (takusan)'),
    V('sukoshi', '少し', 'a little; with a negative, "not exactly" (sukoshi)'),
    V('sugu', 'すぐ', 'right away, immediately (sugu)'),
    V('yoku', 'よく', 'well, often; and "to want too much" when it becomes a verb (yoku)'),
    V('subete', 'すべて', 'everything, all; the word of quantity behind {takusan} (subete)'),
    V('kaeru', '帰る', 'to return, to go back home; the verb of Matthew 24:48 (kaeru)'),
    V(
      'shinjiru',
      '信じる',
      'to believe, to credit; the verb of both {mada} and {mou} examples (shinjiru)',
    ),
    V('yobime', 'やもめ', 'widow; the subject of Mark 12:43 (yobime)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A Japanese adverb does not inflect, has no negative of its own, and goes after the verbal form, never before.',
      ),
    },
    {
      n: '2',
      text: T(
        '{mada} is "still" and {mou} is "already"; the same syllable of {mou} inside *mou ichido* means "again", and in writing {mou} becomes {sudeni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'In a negative sentence the two invert: {mada} plus a negative is "not yet", {mou} plus a negative is "no longer", and the construction is the same in both.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mada} in front of a negative verb puts the adverb before the whole negation (*mada shinjiteimasen*); {mada} in front of {nai} puts it before a negative adjective (*mada mitemasen*). They are two different sentences.',
      ),
    },
    {
      n: '5',
      text: T(
        'With *mada madara* plus the negative *mai*, {mada} stops marking time and starts marking certainty: the Japanese is asserting more than the translation usually says.',
      ),
    },
  ],
  notes: [
    {
      label: T('The same adverb in two syllables'),
      text: T(
        'Written Japanese chooses, for almost every adverb, a form that is not the one of speech: {mou} becomes {sudeni}, *totemo* becomes *makoto*, and the two forms live on the same page of Matthew. The reason is historical, not stylistic: the written form comes from Chinese, where "already" and "truly" were words of two syllables, and Japanese kept them next to the short form it uses in speech. The effect on a reader is that one idea shows up twice in one chapter, written two ways, and someone who knows only the spoken form does not recognise the written one.',
      ),
    },
    {
      label: T('Why "we cannot believe yet" and "we do not believe yet" are not the same sentence'),
      text: T(
        'Portuguese settles the difference with one more word: "ainda não acreditamos" says the act did not happen; "não conseguimos ainda acreditar" says the act is blocked. Japanese settles the same difference with position, and it is the position of {mada} that decides: in front of a negative verb it covers the whole negation; in front of {nai} it is only an adverb. Both show up in a biblical text, and what separates them is the form the verb takes.',
      ),
    },
  ],
  examples: [
    {
      text: 'わたしはまだ父のもとに上っていないからです。',
      gloss: T(
        'wareta wa mada chichi no moto ni agarite orai kara desu — it is because I have not gone up to the Father yet (John 20:17): {mada} plus a negative form at the end of the clause',
      ),
    },
    {
      text: 'それでも、彼らは、うれしさのあまりまだ信じられず、不思議がっているので',
      gloss: T(
        'soredemo, kare wa, ureshisa no amari mada shinji rarezu, fushigi ni omotte iru no de — and they still could not believe, and were wondering (Luke 24:25): {mada} in front of a negative verb',
      ),
    },
    {
      text: '私が渇くことがなく、もうここまでくみに来なくてもよいように',
      gloss: T(
        'watashi ga kawaku koto ga naku, mou koko made kumi ni kitakute mo ii yō ni — so that I no longer have to come here and draw (John 4:4): {mou} plus a negative, "no longer needs to"',
      ),
    },
    {
      text: 'ところが、それが悪いしもべで、『主人はまだまだ帰るまい。』と心の中で思い、',
      gloss: T(
        'tokoro ga, sore ga warui shimo-be de, 「shujin wa mada madara kaette koi」 to kokoro no naka de omoi — "the master will never come back", and he thought so in his heart (Matthew 24:48): the pair {mada} {madara} with the negative *mai*',
      ),
    },
    {
      text: 'サラも、すでにその年を過ぎた身であるのに',
      gloss: T(
        "Sara mo, sudeni sono nen o sugita mi no han'i de aru noni — Sarah too, already having passed that age (Hebrews 11:5): {mou} in the written form {sudeni}",
      ),
    },
    {
      text: 'この貧しいやもめは、献金箱に投げ入れていたどの人よりもたくさん投げ入れました。',
      gloss: T(
        'kono katsu yobime wa, kensōbako ni nage irete ita dare yori mo takusan ireta — this poor widow put in more than any of the others (Mark 12:43): {takusan} after the verb',
      ),
    },
    {
      text: 'とても遠い',
      gloss: T(
        'totemo tōi — very far: a neutral adverb with no negative form of its own, and the adjective comes after it',
      ),
    },
    {
      text: 'すでにその年を過ぎた',
      gloss: T(
        'sudeni sono nen o sugita — already having passed that age: the adverb goes after the noun and before the verb',
      ),
    },
  ],
  tables: [
    {
      caption: T('The same construction, two adverbs, two opposite senses'),
      head: [
        T('The sentence'),
        T('The adverb'),
        T('The most faithful rendering'),
        T('What is being asserted'),
      ],
      rows: [
        [
          T('*mada shinjiteimasen*'),
          T('{mada}'),
          T('we cannot believe yet'),
          T("the state continues; the negative is the verb's"),
        ],
        [
          T('*mou shinjiteimasen*'),
          T('{mou}'),
          T('we no longer believe'),
          T('the state changed: someone who believed stopped'),
        ],
        [
          T('*mada mitemasen*'),
          T('{mada} plus {nai}'),
          T('I have not seen it yet'),
          T("the act did not happen; the negative is the verb's"),
        ],
        [
          T('*mou mitemasen*'),
          T('{mou} plus {nai}'),
          T('I have not seen it any more'),
          T('the act happened before and does not happen now'),
        ],
        [
          T('*mada madara kaettekoi*'),
          T('{mada} plus {madara}'),
          T('will certainly not come back'),
          T('the adverb became certainty, and the negative is *mai*'),
        ],
      ],
    },
    {
      caption: T('The adverbs of quantity and what each one modifies'),
      head: [T('Adverb'), T('Means'), T('What it modifies'), T('Example')],
      rows: [
        [
          T('{totemo}'),
          T('very'),
          T('adjective or verb'),
          T('*totemo utsukushii* — very beautiful'),
        ],
        [
          T('{sukoshi}'),
          T('a little'),
          T('verb, and in the negative "not exactly"'),
          T('*sukoshi shimatta* — it is nearly over'),
        ],
        [T('{takusan}'), T('much, many'), T('noun and verb'), T('*takusan no hito* — many people')],
        [T('{sugu}'), T('right away'), T('verb of motion'), T('*sugu kuru* — to come right away')],
        [T('{yoku}'), T('well, often'), T('verb'), T('*yoku yobu* — to call often')],
      ],
    },
    {
      caption: T('The same word in two syllables: the form of speech and the form of writing'),
      head: [T('Spoken form'), T('Written form'), T('Means'), T('Where it appears in writing')],
      rows: [
        [
          T('{mou}'),
          T('{sudeni}'),
          T('already'),
          T('Hebrews 11:5: *Sara mo, sudeni sono nen o sugita*'),
        ],
        [T('*totemo*'), T('*makoto*'), T('truly'), T('Matthew 24:33: *makoto ni, katarō to nasu*')],
        [
          T('{mou} with *ichido*'),
          T('*mou ichido*'),
          T('again, and not "already"'),
          T('John 3:4, in the question of Nicodemus'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      "In {Sara mo, sudeni sono nen o sugita mi no han'i de aru noni}, what stands where {mou} would be in speech?",
    ),
    options: [
      T(
        '{sudeni}: it is the written form of "already", and the context wants "already" because Sarah had passed that age',
      ),
      T('{mada}: it is saying that Sarah had not passed that age yet'),
      T('{mata}: it is saying that Sarah had that age again'),
      T(
        'nothing: the sentence is invalid, because written Japanese does not put an adverb after a noun',
      ),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the "still" adverb: わたしはまだ父のもとに____ (I have not gone up yet)'),
      answer: '上っていない',
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to what it does in the sentence'),
      pairs: [
        { a: T('{mada}'), b: T('with a negative, "not yet": the state has not arrived') },
        {
          a: T('{mou}'),
          b: T('with a negative, "no longer": the state changed and the old one is over'),
        },
        { a: T('{takusan}'), b: T('quantifies: it goes after the verb or in front of the noun') },
        {
          a: T('{mada} plus {madara}'),
          b: T('marks certainty, and it always comes with the negative *mai*'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'You read {mada shinji rarezu} and then {mou shinji iru no de wa arimasen}. What changes between the two?',
      ),
      options: [
        T(
          'the first says belief has not arrived yet; the second says it has arrived, and what is denied is the certainty',
        ),
        T('the first is negated by adverb and the second is negated by noun'),
        T('the first puts the adverb before the verb and the second after it'),
        T('there is no difference: the two mean "I do not believe"'),
      ],
      answer: 0,
    },
  ],
};
