import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Particle'),
  title: T(
    '{de}, {to}, {mo}, {kara}, {made} and {yori}: where it happens, with whom, and from where to where',
  ),
  subtitle: T(
    'Six particles that never show up on their own: each goes after a noun or at the end of a clause, and the one for {kara} changes sense according to the spot it occupies in the sentence',
  ),
  body: C(`
## {de}: where it happens, and what with

{de} goes after the noun and says where. *Kare wa {koya} de baputema o ukutta*, "he baptised in the desert", is the cleanest example: the noun after {de} is the place where the action happens, and the noun before it is the place it comes from. The same {de} refuses a question Portuguese asks and Japanese does not: *tomodachi ni {au}*, "I meet a friend", takes {ni} and not {de}, because a meeting has no fixed place. Where the action happens, there is {de}; to whom, or with whom, there is another particle.

{de} also says with what. *Kin, gin, {hōseki}, ki, {kusa}, wara nado de tateru nara*, "if anyone builds with gold, silver, precious stone, wood, grass and straw", in 1 Corinthians 3:12, has six materials and a single {de} at the end: it is what closes the list, the same job the particle does with the list of nouns in the verb of existence. And there is a third use, which is state: *genki de iru*, "to be in good health". In biblical text, with the sense of cause, {de} is rare, because that job goes to {tame} and to the particle that closes the clause.

## {to} and {mo}: with whom, and also

{to} after two people means "with", company. *Mose to Eriya ga arawarete*, "Moses and Elijah appeared", in Matthew 17:3, is the whole sentence: two nouns, one particle in the middle, and the verb at the end.

The same syllable does two other jobs in Japanese, and it is the most expensive trap in the course. In *haru ni naru to, hana ga saku*, {to} is "when"; in *「watashi wa iku」 to iutta*, it is the particle that opens and closes the quotation. In all three the position is the same, and what changes is the verb that comes before. With company, {to} comes right after the second noun; which is why, in a stretch with two nouns in a row, the reader has to decide fast whether what follows is a verb of saying, a verb in generic time, or more people.

{mo} is "**also**", and it goes after noun after noun. 1 Corinthians 12:13 is the densest sentence in the New Testament on this point: *Yudaya mo Girisha mo, doreki mo jiyū mo*, "Jew, Greek, slave, free". There are four {mo} and four nouns, and what they do is say that nobody stays out of the list. The same {mo} with a negative becomes "not even": in 1 Corinthians 12:21 the eye says *watashi wa anata o hitsuyō to shinai*, "I have no need of you", and the whole body adds right after that the weakest members are the most necessary, and it is the negation that produces the reversal.

## {kara} and {made}: the line of time

{kara} says where the line begins. *Ten no kihaj kara, ima made*, "from the beginning of creation until now", in Mark 13:19, has the two particles glued to a single noun: {kara} opens the interval, {made} closes it, and neither of them repeats the noun. It is the most economical construction in written Japanese, and the common one in Mark and Matthew.

{made} on its own is the limit, and it renders the Portuguese "até". *{Mizu} no naka made {fukumaru}*, "it sank into the water": {made} says how far the verb got, and the noun can be place, time or measure, as in *yon-jikan made*, "until four o'clock". Japanese has no separate word for "until", and the particle does that job on all three things at once.

The pair is what produces the reading: where {kara} begins and where {made} ends, whatever lies between the two is what the sentence is describing, be it a stretch of dates, a road walked by whoever {iku}, or the end of a wait.

## {yori}: comparison, and the three readings of {kara}

{yori} is the "than" of comparison. *Abelu wa Kain yori subureta ikeze o {sasageru}*, "Abel offered a better sacrifice than Cain", in Hebrews 11:4: the noun comes first, {yori} after it, and what comes after {yori} is the thing the comparison is measured against. With {sugiru} the comparison gets even more direct, *kain yori mo yowai*, "older than Cain". It is the easiest of the thirteen particles: if there is a {yori} after two nouns, the first is the term of comparison and the second is the standard.

The exception is {kara}, and it is what trips biblical reading most. {kara} has **three readings**, and position decides which one. Glued to a noun, it is origin: *kami kara yobausareta*, "sent by God", which is how John 1:6 opens his account, and which Portuguese renders with a "by" Japanese does not have. Glued to a time noun, it is the start of an interval: *ten no kihaj kara*, "since the creation". At the end of the clause, after the verb, it is cause: *shikashi ware-tachi wa mada wakaranai kara da*, "because we still do not understand". The last two are written exactly the same, and position is what says whether the text is marking where something came from or why something happens.

And there is a fourth case, the easiest of all and the most useful when reading: {kara} in the sense of material origin, "out of". *Ariamaru naka kara* is "out of what was left over", and it is the word Mark 12:44 uses twice in one verse, once for what was too much and once for what was too little. In a text that talks about money and offerings, {kara} is the word that shows up most, and both times the sense is the same.
`),
  vocab: [
    V(
      'de',
      'で',
      'place where the action happens, means, material and state: it answers "where" and "with what" (de)',
    ),
    V(
      'to',
      'と',
      'company: "with", after the noun of two people; the same syllable is "when" and the particle of quotation (to)',
    ),
    V('mo', 'も', '"also": it goes after the noun, and with a negative it becomes "not even" (mo)'),
    V(
      'kara',
      'から',
      'origin and the start of an interval; at the end of a clause, "because" (kara)',
    ),
    V('made', 'まで', 'limit: "until", with a noun of place, time or measure (made)'),
    V('yori', 'より', 'comparison: "than", after the noun of the term being compared (yori)'),
    V('koya', '荒野', 'desert, a bare and empty place (koya)'),
    V('hōseki', '宝石', 'precious stone (hōseki)'),
    V('kusa', '草', 'grass, weed (kusa)'),
    V('Mizu', '水', 'water (Mizu)'),
    V(
      'sasageru',
      'ささげる',
      'to offer, to present to the other; the verb of Hebrews 11:4 (sasageru)',
    ),
    V('iku', '行く', 'to go; with {kara} and {made} it forms the interval (iku)'),
    V('fukumaru', '沈む', 'to sink, to submerge; the verb of the {made} example (fukumaru)'),
    V('au', '会う', 'to meet; meeting someone takes {ni}, never {de} (au)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{de} says where the action happens and what it is done with. In biblical text the sense of cause is rare: that job goes to {tame} and to the particle that closes the clause.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} between two nouns is company. The same syllable is "when" in generic time and it is the particle that opens and closes a quotation, and what separates the three is the verb in front.',
      ),
    },
    {
      n: '3',
      text: T(
        '{mo} means "also" and goes after each noun of the list. With a negative, {mo} means "not even": *mō … nai*.',
      ),
    },
    {
      n: '4',
      text: T(
        '{kara} {made} is a closed interval, and neither particle repeats the noun: *ten no kihaj kara, ima made*.',
      ),
    },
    {
      n: '5',
      text: T(
        '{kara} at the end of a clause, after the verb, is cause: *ware-tachi ga mada wakaranai kara da*. That is where biblical text writes the "because" of the sentence.',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle that closes the list'),
      text: T(
        'Three constructions use the same economy, and the three are worth reading together: {hon to notebook ga arimasu} puts one {ga} at the end of a list of nouns; *kin, gin, {hōseki}, ki, {kusa}, wara nado de tateru nara* puts one {de} at the end of a list of materials; and *Yudaya mo Girisha mo, doreki mo jiyū mo* puts one {mo} after each noun of the list. Japanese does not repeat the mark on every element when the list is long, and what marks the list as a list is the particle at the end.',
      ),
    },
    {
      label: T('How Greek left its mark on {kara}'),
      text: T(
        'The particle of cause at the end of a clause is a Greek habit the Japanese translator kept: in Greek "because" is a word that opens the clause, and in Japanese it became a particle that closes it. The result is a sentence in which the cause arrives last, and it is the second reading of {kara} that confuses anyone coming from Portuguese most. The test is simple: if the clause already has a verb and an ending, and the {kara} comes after it on its own, it is cause.',
      ),
    },
  ],
  examples: [
    {
      text: 'バプテスマのヨハネが荒野に現われて',
      gloss: T(
        'baputema no Yohane ga koya de arawarete — John the baptist appeared in the desert (Mark 1:4): {de} is the place where the action happens',
      ),
    },
    {
      text: 'もし、だれかがこの土台の上に、金、銀、宝石、木、草、わらなどで建てるなら',
      gloss: T(
        'moshi, dare ka ga kono dote no ue ni, kin, gin, hōseki, ki, kusa, wara nado de tateru nara — if anyone builds on this foundation with gold, silver, stone, wood, grass and straw (1 Corinthians 3:12): six materials, one {de}',
      ),
    },
    {
      text: 'しかも、モーセとエリヤが現われてイエスと話し合っているではないか。',
      gloss: T(
        'shikamo, Mōse to Eriya ga arawarete Yesu to hanashatte iru ja nai ka — are not Moses and Elijah appearing and speaking with Jesus (Matthew 17:3): two {to} in one stretch, with different values',
      ),
    },
    {
      text: 'なぜなら、私たちはみな、ユダヤ人もギリシヤ人も、奴隷も自由人も、一つのからだとなるように',
      gloss: T(
        'narawēru to wa, ware-tachi wa mina, Yudaya mo Girisha mo, doreki mo jiyū mo, hitotsu no karada to naru yō ni — for all of us, Jew, Greek, slave, free, to become one body (1 Corinthians 12:13): four {mo}, and nobody stays out',
      ),
    },
    {
      text: 'その日は、神が天地を創造された初めから、今に至るまで、いまだかつてなかったような',
      gloss: T(
        'sono hi wa, kami ga ten to chi o zōse sareta kihaj kara, ima made, imada kattette nai yō na — that day, from the beginning of creation until now, like nothing before (Mark 13:19): {kara} and {made} on one noun',
      ),
    },
    {
      text: '信仰によって、アベルはカインよりもすぐれたいけにえを神にささげた',
      gloss: T(
        'shinkō yotte, Abel wa Kain yori subureta ikeze o kami ni sasageta — by faith Abel offered God a better sacrifice than Cain (Hebrews 11:4): {yori} separates the term of comparison from the standard',
      ),
    },
    {
      text: '私たちは愛しています。神がまず私たちを愛してくださったからです。',
      gloss: T(
        'ware-tachi wa aishiteimasu. kami ga mazu ware-tachi o aishite kudasatta kara desu — we love, because God loved us first (1 John 4:19): the {kara} at the end of the clause is cause',
      ),
    },
    {
      text: 'みなは、あり余る中から投げ入れたのに、この女は、乏しい中から、あるだけを全部',
      gloss: T(
        'mina wa, ariamaru naka kara nage ireta no ni, kono onna wa, toshi naka kara, aru dake o zenzen — all put in out of what was left over, but this woman put in out of what she lacked, all she had (Mark 12:44): {kara} as material origin',
      ),
    },
  ],
  tables: [
    {
      caption: T('{de} and the noun that comes after it'),
      head: [T('What the noun is'), T('The sentence'), T('What Portuguese does with it')],
      rows: [
        [
          T('place where the action happens'),
          T('*koya de baputema o ukutta*'),
          T('"baptised in the desert": Portuguese puts the place in the verb'),
        ],
        [
          T('means, instrument or material'),
          T('*kin, gin, hōseki nado de tateru*'),
          T('"built with gold and silver": {de} closes the list of materials'),
        ],
        [
          T('state'),
          T('*genki de iru*'),
          T('"be in good health": {de} links the noun to the verb of being'),
        ],
        [
          T('who acts, with no passive'),
          T('*kami kara yobausareta*'),
          T('"sent by God": the origin the action came from'),
        ],
        [
          T('cause'),
          T('*byōin de yasumu*'),
          T('"miss school because of illness": spoken usage, rare in biblical translation'),
        ],
      ],
    },
    {
      caption: T('The same syllable {to} in three spots, decided by the verb'),
      head: [T('{to} is'), T('The sentence'), T('What comes before it')],
      rows: [
        [
          T('company'),
          T('*Mose to Eriya ga arawarete*'),
          T('two nouns, a noun and a noun: the first name'),
        ],
        [
          T('"when", in generic time'),
          T('*haru ni naru to, hana ga saku*'),
          T('any verb: generic time closes on it'),
        ],
        [
          T('quotation'),
          T('*「watashi wa iku」 to iutta*'),
          T('what was just said: the noun and the pronoun inside the speech'),
        ],
      ],
    },
    {
      caption: T(
        '{kara}, {made} and {yori}: the answers to where from, until where, and compared with whom',
      ),
      head: [T('The question'), T('The particle'), T('The sentence'), T('Where it appears')],
      rows: [
        [
          T('from where'),
          T('{kara}'),
          T('*ten no kihaj kara*'),
          T('Mark 13:19: the start of the interval'),
        ],
        [
          T('until where'),
          T('{made}'),
          T('*ima made*'),
          T('Mark 13:19: the end of the same interval'),
        ],
        [
          T('from where, as cause'),
          T('{kara}'),
          T('*mada wakaranai kara da*'),
          T('at the end of the clause, after the verb'),
        ],
        [
          T('from where, as material'),
          T('{kara}'),
          T('*ariamaru naka kara*'),
          T('Mark 12:44: "out of what was left over"'),
        ],
        [
          T('compared with what'),
          T('{yori}'),
          T('*Kain yori subureta*'),
          T('Hebrews 11:4: "better than Cain"'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {私たちは愛しています。神がまず私たちを愛してくださったからです。}, what is the {kara} doing?',
    ),
    options: [
      T('marking cause: it sits at the end of the clause, after the verb, and it means "because"'),
      T('marking origin: the line of loving starts with the one who loved first'),
      T('marking comparison: "we love more than God loved"'),
      T('marking a limit: the sentence ends where the love of God ends'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the interval of Mark 13:19: 神が天地を創造された初め____、今____ (from the beginning of creation until now)',
      ),
      answer: 'から、まで',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it marks'),
      pairs: [
        { a: T('{de}'), b: T('the place where the action happens, and the means it is done with') },
        { a: T('{mo}'), b: T('"also", and "not even" when the verb is negated') },
        {
          a: T('{kara}'),
          b: T('origin, the start of an interval and, at the end of a clause, cause'),
        },
        { a: T('{yori}'), b: T('comparison: the noun after it is the standard of the measure') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'You read *"Mose to Eriya ga arawarete"* and then *"haru ni naru to, hana ga saku"*. What makes the first {to} company and the second one "when"?',
      ),
      options: [
        T(
          'what comes before: in the first there are two nouns, and in the second there is a verb in generic time',
        ),
        T('the position in the sentence: the first is in the middle and the second is at the end'),
        T('the noun that comes after: in the first a personal name, in the second a common noun'),
        T('the script: the Japanese text writes one of them in kana and the other in ideograms'),
      ],
      answer: 0,
    },
  ],
};
