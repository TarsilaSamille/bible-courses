import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Reading'),
  title: T('The same Psalm 23, read a second time: now every word is a lesson'),
  subtitle: T(
    'Lesson 13 showed what the translator had to invent; this one shows why, verse by verse, and ties up the twenty-three lessons of the course',
  ),
  body: C(`## The same verse, now with the whole course in hand

An earlier lesson opened this same verse and showed what the translator was forced to do. The one going back to it now asks the question that was left open: why.

The Hebrew of Psalm 23:1 is five words with no verb at all: the divine name, a term of possession, the word "shepherd". The Korean verse is {yehova-neun nan-ui mokja-si-ni-la}, and it holds three pieces the Hebrew could do without. The first is the verb: the original has none, and the Korean writes {ida}, the verb "to be". The second is the subject particle, glued to the name in its soft form because the name ends in a vowel, the rule of the particles applied without exception and without taste. The third is the ending that closes the sentence, the same one that turns a dictionary entry into speech.

On the first reading those pieces appeared as a cost: the translator paid a debt of the language. Here they appear as what holds the verse upright. A Hebrew noun phrase is a sentence that holds up on its own; the Korean sentence is a sentence that exists only because someone wrote three pieces the original did without. And the name in the middle of all this is {yehova}, transliterated and not translated, because in Korean the name of God is also a name, as it is in Japanese. The choice between {yehova} and {sin} marks the status of the text: proper name preserved or the generic Korean noun.

## Verse by verse: every construction is an earlier lesson

Psalm 23 has six verses, and read a second time it is an index of the whole course. The central table does that line by line, and it is worth using as a reading map rather than a summary.

In 23:3 the verb is {hoebokhada}, to restore, and what appears as the object of the verb is the noun of the entire verse: the verb gives back what the verse opened on. Beside it, {seon}, which is the Korean noun-adjective: goodness is a noun, not a form, and the noun is glued to what it qualifies, as in "a red book", the shape that Portuguese solves with an inflection Korean does not have. It is the same noun appearing twice in the clause: once as what is restored, once as the adjective of the way. Two functions, one word, and position is what says which is which.

In 23:4 the verse puts two opposite positions in the same line, which is why it is the best test in the course. The negation {an} comes **before** the verb; the conditional {myeon} comes **after** the verbal form; and the conjunction {wa} is glued to the name and ties the second half to the first. Three pieces, three positions, and a reader who knows the three does not need to understand the sentence to know where each thing is. The verb of that verse is {yabu}, to abandon, and the 1917 form says what the modern form hides: "you will not abandon me" is a promise about what the shepherd does **not** do, and the negation is the content of the verse, not an ornament. In Japanese the conditional lives in the verbal form and it is the honorific auxiliary that changes with the person; in Korean both live somewhere else, and that is why the same verse sounds different in the two translations.

In 23:6 duration appears as a noun, not as an inflection: {eonni} is endless time, and {haru} is the day, the unit in which life is counted. The particle {myeon} turns that noun into an adverb of manner, in the manner of a particle glued to a noun to say how something is done, and the verb is {ttarahada}, to follow, to accompany, which is the shepherd's answer to the question of the verse: he goes ahead and the other one follows behind. Time here is a piece counted after the verb, never inside it, and that is all of the tense lesson condensed into one line. A sentence that Portuguese renders with one word for a lifetime and Korean writes with three words.

## Recap: where each thing goes

The table below is what the reader carries away. Each line is a lesson, and the column that matters is the middle one: **where** the piece enters the sentence. A particle nobody can place is a piece nobody can read, and a reading error in Korean is almost never about vocabulary; it is about place.

Two lines of that table deserve attention because they close the course. The first is the honorific one: in Korean the register changes the **word**, and the verb changes its root, as in the honorific form of "to eat", which says that the king receives rather than eats. In Japanese the register changes the **auxiliary**, and the verb root stays. Two paths to the same concept, and the difference is a matter of how the language is drawn, not of manners. The second is the adverb: in Korean the adverb sits between subject and verb, which is why it never opens the sentence. A translator coming from Portuguese who puts it at the front builds a sentence the Korean listener understands backwards.

And one line of the table is a spelling warning rather than a grammatical one: spacing. Korean writes the particle glued to the noun, with no space, and the noun of a student together with its particle is one word, not two. Whoever writes the pieces apart produces a sentence the listener does not recognise, and the cause is not vocabulary: it is the rule of gluing.

## The final contrast, and reading every day

The last table puts the three languages of the project side by side on three points, and not one of them is about vocabulary: it is about position and mechanism. The adverb comes before the verb in Korean and after the verbal form in Japanese. The adjective comes after the noun in Korean and before it in Japanese. And the honorific changes the word in Korean, changes the auxiliary in Japanese, and has a particle of its own in Mandarin. Three languages, three places for the same idea, and none of them moves by accident: in each case the position is a consequence of the rest of the language's design. That is what the reader takes away when comparing the three Psalm 23 texts side by side.

Two reading rules remain, and neither is grammatical. The first is to read by chapters, not by verses. With object-verb-subject order and the omitted subject, the isolated verse is ambiguous by construction: "they shall be counted" does not say who counts or what, and the answer is in the line above or the line below. The chapter is what Korean was made to read, and the parallelism of biblical poetry only appears with the neighbouring lines in view.

The second is which translation is in your hand. The modern Korean revision is modern **Korean**, with the particles written out: the noun shows its particle, the verb shows its ending, and a reader who knows the twenty-three lessons sees every one of them without effort. The 1917 one is entirely in hanja, literal and archaic, and there the particles were recovered from the shape of the noun and from context; that is why it could preserve the noun phrase that modern Korean is obliged to turn into a sentence. Comparing the two is not comparing two editions of the same book: it is comparing two decisions about where the line runs between translating and transposing. And that is why reading modern Korean is easier than it looks: the particle that seems like noise is the mark that says which piece is which.
`),
  vocab: [
    V('yehova', '여호와', 'the Hebrew divine name, transliterated and not translated (yehova)'),
    V('sin', '신', 'God: the generic Korean noun, used where the Hebrew has no proper name (sin)'),
    V('mokja', '목자', 'shepherd: the root that means "to lead", plus the agent suffix (mokja)'),
    V('yang', '양', 'sheep: the animal of the flock, the one who is led (yang)'),
    V('nan', '나', 'I; the first person singular (nan)'),
    V('ui', '의', 'of; the possessive particle, which comes before the noun (ui)'),
    V('ida', '이다', 'to be: the verb the Hebrew noun phrase does not have (ida)'),
    V(
      'itda',
      '있다',
      'to have, to be at: the partner of {ida} that holds the Korean sentence up (itda)',
    ),
    V('wa', '와', 'and; a conjunction that also has two forms, hard and soft (wa)'),
    V('myeon', '면', 'if: the conditional particle, which comes after the verbal form (myeon)'),
    V('an', '안', 'not: negation that comes before the verb, not after it (an)'),
    V('yabu', '버리다', 'to abandon, to leave; the verb of 23:4, beside the negation (yabu)'),
    V('hoebokhada', '회복하다', 'to restore, to make well again: the verb of 23:3 (hoebokhada)'),
    V(
      'seon',
      '선',
      'the noun-adjective: goodness is a noun, and the noun qualifies what follows (seon)',
    ),
    V('eonni', '영원', 'endless duration; eternity counted in days, never inflected (eonni)'),
    V('haru', '하루', 'day; the unit in which a life is counted (haru)'),
    V('ttarahada', '따라하다', 'to follow, to accompany; the verb of 23:6 (ttarahada)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Hebrew of Psalm 23:1 has no verb. Korean writes {ida} and the subject particle, and both are obligatory: without them there is no sentence (lessons 1, 2, 6 and 13).',
      ),
    },
    {
      n: '2',
      text: T(
        'In the same line of 23:4 the negation {an} comes before the verb and the conditional {myeon} after the verbal form. Two positions, two lessons, and the conjunction {wa} ties the second half to the first (lessons 7, 9 and 10).',
      ),
    },
    {
      n: '3',
      text: T(
        'Time is a particle after the verb, never inside it, and duration is a noun: {eonni} plus {haru} says "all the days of my life" without inflecting anything (lesson 7).',
      ),
    },
    {
      n: '4',
      text: T(
        'The Korean honorific changes the WORD, swapping the root of the verb; Japanese changes the AUXILIARY, and the root stays. That is a difference of design between the two languages, not of manners (lesson 11, and lesson 14 of Japanese).',
      ),
    },
    {
      n: '5',
      text: T(
        'The adjective comes after the noun and the adverb between subject and verb. In Korean the adverb never opens the sentence; in Japanese it closes (lessons 8 and 18).',
      ),
    },
    {
      n: '6',
      text: T(
        'The particle is written glued to the noun, with no space: the noun of a student and its particle are a single word (lesson 21). Read by chapters and know which translation you are holding (lessons 8 and 23).',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the second reading is worth more than the first'),
      text: T(
        'Lesson 13 showed that the translator invented a verb. This lesson shows that the invented verb is the same thing lesson 6 called an ending and lesson 2 called a particle: one key, seen from three places. Rereading a verse you already know is the only way to see that the construction is the same across three different lessons.',
      ),
    },
    {
      label: T('The Korean verb says who is speaking'),
      text: T(
        'The modern Korean revision gives God the highest register, with the honorific verb; it gives the disciples the polite spoken register; and it gives Jesus the courteous register of {yo}. In a scene of question and answer, the choice of verb reveals who is who before any translation happens (lessons 11, 14 and 19).',
      ),
    },
    {
      label: T('Why modern Korean is easier than the 1917 text'),
      text: T(
        'The modern revision is modern Korean with the particles written out: the noun shows its particle and the verb shows its ending. The 1917 one, entirely in hanja, recovered the particle from the shape of the noun and from context, and could therefore preserve the noun phrase. A reader of both is comparing two translation decisions, not two editions of one book.',
      ),
    },
  ],
  examples: [
    {
      text: '여호와는 나의 목자시니라',
      gloss: T(
        'yehova-neun nan-ui mokja-si-ni-la — the Lord is my shepherd (Ps 23:1): {ida} added, the subject particle in its soft form, and the ending that closes the sentence',
      ),
    },
    {
      text: '내가 선한 길로 인도하시리로다',
      gloss: T(
        'nae-ga seon-han gir-ro in-do-ha-si-ri-da — he leads me in right paths (Ps 23:3): {seon} is a noun-adjective and qualifies the noun that follows',
      ),
    },
    {
      text: '너는 나의 영혼을 회복하시리로다',
      gloss: T(
        'neo-neun nan-ui yeonghon-eul hoebok-ha-si-ri-da — you restore my soul (Ps 23:3): the verb of restoring, with the noun of the verse as its object',
      ),
    },
    {
      text: '두려워하지 않으리니',
      gloss: T(
        'du-ryeo-haji an-swu-ni — I will fear no evil (Ps 23:4): the negation {an} comes before the verb, and it is the content of the verse',
      ),
    },
    {
      text: '주께서 내 영혼을 버리지 않으시리로다',
      gloss: T(
        'ju-gaeseo nae yeonghon-eul bu-ri-ji an-si-ri-da — the Lord will not abandon my soul (Ps 23:4): {yabu} with {an} in front of the verb',
      ),
    },
    {
      text: '내 생일을 여호와의 집에 거할게 하리로다',
      gloss: T(
        'nae saeng-ir-eul yehova-ui jib-e gehal-ge ha-ri-da — I will dwell in the house of the Lord all the days of my life (Ps 23:6): {eonni} and {haru} count the duration, and {ttarahada} says the shepherd accompanies',
      ),
    },
  ],
  tables: [
    {
      caption: T('Rereading Psalm 23: each verse and the lesson it is'),
      head: [
        T('Verse'),
        T('What Korean had to write'),
        T('The construction doing the work'),
        T('The lesson'),
      ],
      rows: [
        [
          T('23:1'),
          T('{ida} and the subject particle, with the name {yehova} transliterated'),
          T('the verb of being and the particle the Hebrew noun phrase does without'),
          T('1, 2 and 6; the choice of the name, 13 and 20'),
        ],
        [
          T('23:3'),
          T('{seon} glued to the noun it qualifies, and {hoebokhada} as the verb'),
          T('the noun-adjective and the verb of restoring'),
          T('18 and 15'),
        ],
        [
          T('23:4'),
          T('{an} before the verb, {myeon} after the verbal form, and {wa} joining the halves'),
          T('the negation, the conditional and the conjunction, each in its place'),
          T('7, 9 and 10'),
        ],
        [
          T('23:4'),
          T('{yabu}, the verb of abandoning, with the negation glued in front'),
          T('a noun turned into a verb by a suffix, and the negation that comes before'),
          T('10 and 18'),
        ],
        [
          T('23:6'),
          T('{eonni} and {haru} for the duration, and {ttarahada} for the accompaniment'),
          T('time as a noun and as a particle, never inflected inside the verb'),
          T('7 and 17'),
        ],
      ],
    },
    {
      caption: T('Recap: the twenty-three lessons, and where each thing goes in the sentence'),
      head: [
        T('What comes in'),
        T('Where it sits'),
        T('What the reader recognises in the Bible'),
        T('The lesson'),
      ],
      rows: [
        [
          T('subject, possessive and object particles'),
          T('AFTER the noun, glued, with no space'),
          T('{yehova} with {ui}, the name with its mark'),
          T('lesson 2'),
        ],
        [
          T('verb'),
          T('AT THE END of the proposition, its ending already being the pronoun of the subject'),
          T('who does the action with no pronoun written'),
          T('lessons 8 and 6'),
        ],
        [
          T('inverted order'),
          T('object, verb, subject: the reverse of Portuguese'),
          T('the noun that looks truncated'),
          T('lesson 8'),
        ],
        [
          T('adverb'),
          T('BETWEEN subject and verb'),
          T('"yesterday" outside that place changes the sentence'),
          T('lesson 8'),
        ],
        [
          T('time'),
          T('as a particle AFTER the verb, never inside it'),
          T('past and future glued to the verbal form'),
          T('lesson 7'),
        ],
        [
          T('connective'),
          T('at the END of the clause it governs'),
          T('the "but" that arrives after the second clause'),
          T('lesson 9'),
        ],
        [
          T('negation'),
          T('BEFORE the verb, and inside it in the polite form'),
          T('"I shall not want" and what it is denying'),
          T('lesson 10'),
        ],
        [
          T('honorific'),
          T('changes the WORD: the verb changes its root'),
          T('who is speaking and to whom, before any translation'),
          T('lesson 11, and lesson 14 of Japanese'),
        ],
        [
          T('two number systems'),
          T('people take the native set, things take the Sino-Koreanese'),
          T('the native numeral with the people counter, beside the Sino-Koreanese for hours'),
          T('lesson 12'),
        ],
        [
          T('sound rule'),
          T('in the word, not in the particle: the sound changes and the spelling does not always'),
          T('the name of Jesus spoken with the sound Chinese gave it'),
          T('lesson 16'),
        ],
        [
          T('spacing'),
          T('the particle glues to the noun; a space separates phrases'),
          T('half the text glued, half spaced'),
          T('lesson 21'),
        ],
        [
          T('stack of modifiers'),
          T('numeral, counter, noun, {ui}, noun'),
          T('the noun in the middle, not at the end'),
          T('lesson 18'),
        ],
        [
          T('order of the particles'),
          T('topic, subject, object, verb, final particle'),
          T('five positions, and no piece ever changes place'),
          T('lessons 19 and 14'),
        ],
      ],
    },
    {
      caption: T('Three languages, three places for the same idea'),
      head: [T('What is compared'), T('Korean'), T('Mandarin'), T('Japanese')],
      rows: [
        [
          T('position of the adverb'),
          T('before the verb, between subject and verb'),
          T('before the verb'),
          T('after the verbal form'),
        ],
        [
          T('position of the adjective'),
          T('after the noun, with {ui} in the middle of the stack'),
          T('before the noun, closed by a particle'),
          T('before the noun'),
        ],
        [
          T('mechanism of the honorific'),
          T('changes the word: the verb changes its root'),
          T('has a particle of its own, glued to the noun'),
          T('changes the auxiliary: the verb root stays'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'The Hebrew of Psalm 23:1 has no verb. Why does Korean write a verb of being all the same?',
    ),
    options: [
      T(
        'because Korean grammar requires a verb and a subject particle in a sentence, and the Hebrew verse is a noun phrase',
      ),
      T('because the Korean translator wanted to give the line more force'),
      T('because in Korean the divine name works as a verb'),
      T('because the possessive particle only exists next to a verb'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the verb Korean had to add to Psalm 23:1: 여호와는 ____ 나의 목자시니라 (the Lord is my shepherd)',
      ),
      answer: '이다',
    },
    {
      kind: 'match',
      prompt: T('Match each construction to the verse where it appears'),
      pairs: [
        { a: T('{ida}'), b: T('the verb the Hebrew noun phrase does not have (23:1)') },
        { a: T('{an}'), b: T('the negation that comes before the verb (23:4)') },
        { a: T('{myeon}'), b: T('the conditional that comes after the verbal form (23:4)') },
        { a: T('{seon}'), b: T('the noun-adjective that qualifies the name that follows (23:3)') },
        { a: T('{eonni}'), b: T('endless duration, counted in days (23:6)') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In the Korean of 23:4, where does the negation sit in relation to the verb?'),
      options: [
        T('before the verb, glued in front of it'),
        T('after the verb, as a connective would be'),
        T('inside the noun, between the particle and the name'),
        T('at the end of the clause, after the final particle'),
      ],
      answer: 0,
    },
  ],
};
