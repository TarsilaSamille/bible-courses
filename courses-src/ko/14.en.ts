import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Reading'),
  title: T('Reading Psalms in Korean: the noun phrase, the missing verb, and what 1917 chose'),
  subtitle: T(
    'The last lesson is a synthesis: the verse that is not a sentence, the parallelism the particle gives away, and the table that ties the twelve earlier lessons together',
  ),
  body: C(`## The verse that is not a sentence

Psalms and Proverbs are poetry, and biblical poetry has a kind of verse that Portuguese almost never uses: the nominal verse. It has no verb. Psalm 23:1 is the best-known example, "the Lord is my shepherd". The Hebrew of the verse has five words and not one of them is a verb: the divine name, a term of possession and the word "shepherd". Nothing says "is". The verse is a complete noun phrase, and that is how it was written.

Korean is especially hard here, and the difficulty is structural, not stylistic. In Korean the verb of being, {ida}, is obligatory in a clause, and the noun that is the subject takes a particle: {i} or {gwa}, depending on the last consonant. A bare noun phrase is ungrammatical in standard Korean. Someone writing "my shepherd" with no verb does not produce a strange sentence: they produce something that is not a sentence. The {ida} and the particle are not decoration; they are what makes the sequence readable.

And the 1917 translation made the most revealing choice in the course. The first Korean Bible came out in hanja, and hanja Korean of the early period did not write the particles: they were recovered from the shape of the noun and from context. A nominal verse in hanja could therefore stay nominal instead of turning into a clause, because the writing itself allowed it. The 1961 revision moved everything into hangul, and hangul shows the particles. From then on the bare noun phrase stopped being an option: the full clause became obligatory. The translators of 1917 preserved the shape of the Hebrew verse; those of 1961 bought a Korean norm. Neither of them was wrong, and comparing the two texts shows exactly where the line runs between translating and transposing.

Psalm 23:6 is the other instructive case, because it has a future and it has counting left implicit: "I will dwell in the house of the Lord". Korean needs an explicit future verb, and the counted time of the original is carried by {eungwon}, forever. Someone translating from Portuguese writes "will dwell" and Korean answers "will live": a future verb, and the military picture of the original, a besieging and not a dwelling, is gone. The translation bought the grammar of Korean and lost the picture. That is what always happens when the target language is too analytic for the original: you gain the sentence and lose the image.

## Parallelism: the particle that gives the second line away

Biblical poetry repeats structure. Two lines, the same skeleton, and the second line adds no new fact: it comes back to the same place by another road. This is called parallelism, and in Psalms it is the rule and not the exception. Someone who does not know parallelism reads the second line as an independent clause and concludes, or feels, that something is missing, usually a subject that "is not there".

In Korean that confusion has a precise, diagnosable symptom: **the particle repeats literally**. If both lines close the same way, if the phrases of the second line carry the same particles as the first, then the second line is parallel, and it is not a new clause. The repetition that looks like redundancy is the clue. A reader who spots {ui} in the first line and spots {ui} again in the second, on the same noun, is reading parallelism and not reading a truncated passage. Anyone who worked through the particles already owns the tool and does not know it.

The whole of Psalm 23 is built in pairs, and that changes how you read the chapter. "I will lack nothing" and "I will dwell in the house of the Lord" are two beats of one movement: the second line introduces no new subject, no new time, no new verb. It completes the first. And reading by chapter is also the way the pattern becomes visible, because the pattern only appears when the lines sit side by side.

## What the Korean translation chose

The divine name is the most visible decision. {yehova} is the Hebrew name transliterated, with Korean pronunciation: transliterated, not translated. In Korean the name of God is a name too, as in Japanese, and names are not translated: translating one would be writing somebody else. That is why the same letters appear on every page, and why someone looking for the name in the Korean text finds it in the shape they already know.

The choice between {yehova} and {sin} is what marks the text. {sin} is the Korean noun for God, and the modern revision uses it where the Hebrew has the generic term; {yehova} stays where the Hebrew has the proper name. A translation that writes {sin} where the original has the proper name is saying something else, and one that writes {yehova} where the original has the generic term is doing the opposite. Neither is an accident of automatic translation: it is a decision about the standing of the text, about whether it is Jewish or Christian. The same goes for {mok}, shepherd, and {yang}, sheep: Psalm 23 is built on the difference between the one who leads and the one who is led, and a translation that swaps them for "guide" and "flock" keeps the sense and loses the words.

And there is the technical detail that ties this lesson to the earlier ones: the 1917 translation is entirely in hanja, literal and archaic; the 1961 one is entirely in hangul, fluent and modern. They are two literatures, not two editions of one book. A reader needs to know which one is in his hand before discussing anything at all, because the two diverge precisely on the points this course covered: the particles, the order, what gets translated and what gets transliterated.

## Two reading rules

The table at the end ties the earlier lessons together. It is what the reader keeps: each line is a rule, and the last column says which word does the work. Read the table before opening a chapter and go back to it when the Korean text stalls.

The first reading rule is to read by chapter, not by verse. The object, verb, subject order and the omitted subject make the isolated verse ambiguous: "they will be counted" says neither who counts nor what, and the answer is in the line above or the line below. A lone verse is a sentence without the anchors that hold it up; a chapter is what Korean was made to read. The other side of the same reason is parallelism: the sense of a line is in the neighbouring line, and the neighbouring line is exactly what the isolated verse cuts away.

The second is to know which translation is in your hand. A Korean reader uses the modern hangul revision by default, and meets the 1917 one, the first, in hanja, in older publications and in study sheets. Someone comparing the two is comparing two decisions: one that preserved the nominal shape of the Hebrew, and one that forced the full Korean clause. Both are Korean, and both are right in different fields.

This closes what the first lesson opened. In the first lessons the particles were the obstacle that prevented reading; here they are the instrument that reveals the structure of the verse. The very particle that made the text illegible is the one that gives parallelism away and the one that stops a noun phrase from passing for a sentence. The very verb missing from the Hebrew verse is the one the translator had to invent in Korean. None of this is finished translation: it is translation as a task, and the text stays open.
`),
  vocab: [
    V('yehova', '여호와', 'the Hebrew divine name, transliterated and not translated (yehova)'),
    V('sin', '신', 'God; the Korean noun for God (sin)'),
    V('mok', '목', 'shepherd; the one who leads the flock (mok)'),
    V('mokja', '목자', 'shepherd: {mok} plus the agent suffix (mokja)'),
    V('yang', '양', 'sheep; the animal of the flock (yang)'),
    V('nan', '나', 'I; the first person singular (nan)'),
    V('ui', '의', 'of; possessive particle, which comes before the noun (ui)'),
    V('itda', '있다', 'to have, to be, to exist (itda)'),
    V('mot', '못', 'not; the negation that comes before the verb (mot)'),
    V('eungwon', '영원', 'eternity; forever (eungwon)'),
    V('ida', '이다', 'to be; the verb the noun phrase needs (ida)'),
    V('an', '안', 'particle marking time after the verb (an)'),
    V('tara', '따라', 'to follow; to come after (tara)'),
    V('gosita', '고 있다', 'to be doing; the form that links two verbs (gosita)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb {ida} and the subject particle {i} or {gwa} are obligatory. A bare noun phrase is ungrammatical in standard Korean.',
      ),
    },
    {
      n: '2',
      text: T(
        'The particle that repeats in the second line gives parallelism away. The second line is not a new clause: it is the first one repeated by another road.',
      ),
    },
    {
      n: '3',
      text: T(
        '{yehova} is transliterated, not translated — in Korean the name of God is a name too, as in Japanese.',
      ),
    },
    {
      n: '4',
      text: T(
        'The choice between {yehova} and {sin} marks the standing of the text: proper name preserved or generic term substituted. It is a decision about the text, not a choice of synonym.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negation comes before the verb and the time particle after. On a single line, those two positions tell you where the verb is.',
      ),
    },
    {
      n: '6',
      text: T(
        'Read by chapter, not by verse: with object – verb – subject order and the omitted subject, the isolated verse is ambiguous by construction.',
      ),
    },
  ],
  notes: [
    {
      label: T('The repeated particle is the clue'),
      text: T(
        'The symptom of parallelism in Korean is literal: the particle comes back. Anyone who spots the same particle on both lines with the same noun knows what he is reading, even without knowing the Hebrew metre.',
      ),
    },
    {
      label: T('1917 and 1961 are not two editions'),
      text: T(
        'The 1917 Bible is entirely in hanja, literal and archaic, and could preserve the nominal verse; the 1961 one is entirely in hangul, and the visible particles forced the full clause. They diverge precisely on the points of this course: particles, order, what gets translated and what gets transliterated.',
      ),
    },
    {
      label: T('Where each translation lives today'),
      text: T(
        'A Korean reader uses the modern hangul revision by default and meets the 1917 one in older publications and study sheets. Comparing the two compares translation decisions, not editions of one book.',
      ),
    },
  ],
  examples: [
    {
      text: '여호와는 나의 목자시니라',
      gloss: T(
        'yehova-neun nan-ui mokja-si-ni-la — the Lord is my shepherd: the Hebrew has no verb, and the Korean has both verb and particle',
      ),
    },
    {
      text: '내가 여호와의 집에 영원히 거할지라',
      gloss: T(
        'nae-ga yehova-ui jibe eungwonhi geohal-jira — I will dwell in the house of the Lord (Psalm 23:6): explicit future, counted time in {eungwon}',
      ),
    },
    {
      text: '두려워하지 않으리니',
      gloss: T(
        'du-ryeo-haji an-swu-ni — I will not fear (Psalm 23:4): the negation comes before the verb, the time particle after',
      ),
    },
    {
      text: '여호와의 선하심이',
      gloss: T(
        'yehova-ui seon-ha-sim-i — the goodness of the Lord: the possessive {ui} before the noun, and the name transliterated',
      ),
    },
    {
      text: '내 양들은',
      gloss: T(
        'nae yangdeureun — my sheep: the plural particle repeats on the next line, and that is what gives parallelism away',
      ),
    },
  ],
  tables: [
    {
      caption: T('The nominal verse and the full clause Korean forces you to write'),
      head: [T('Text'), T('What it has'), T('Verb'), T('What the translator had to do')],
      rows: [
        [
          T('Hebrew of Psalm 23:1'),
          T('divine name, term of possession, {mok}'),
          T('none'),
          T('nothing: the verse already is a complete noun phrase'),
        ],
        [
          T('Korean of the 1961 revision'),
          T('divine name, {ui}, {mokja}, subject particle'),
          T('{ida}, given'),
          T('add the verb and the particle Korean requires'),
        ],
        [
          T('Korean of 1917, in hanja'),
          T('hanja, with no particle written'),
          T('absent or implicit'),
          T('preserve the nominal, because hanja allowed it'),
        ],
        [
          T('Psalm 23:6 in Korean'),
          T('{nan}, {yehova}, {ui}, {eungwon}'),
          T('future form'),
          T('implicit counting and explicit future where Portuguese has one verb'),
        ],
      ],
    },
    {
      caption: T(
        'Parallelism: the second line repeats the particle, and the repetition gives it away',
      ),
      head: [T('Line'), T('What it repeats'), T('What it does not add'), T('How to read it')],
      rows: [
        [
          T('the first'),
          T('the noun with its particle'),
          T('—'),
          T('the line that opens the movement'),
        ],
        [
          T('the second'),
          T('the same particle, on the same noun'),
          T('new subject, new time, new verb'),
          T('the same sentence by another road, not a new clause'),
        ],
        [
          T('the fourth'),
          T('the pattern of the second, once more'),
          T('nothing beyond what the second already said'),
          T('the verse is two beats, not four loose clauses'),
        ],
      ],
    },
    {
      caption: T('Recap: the twelve lessons of the course in one table'),
      head: [
        T('Topic'),
        T('The rule'),
        T('Where it sits in the sentence'),
        T('The word that does the work'),
      ],
      rows: [
        [
          T('particles'),
          T('they come after the noun, written attached'),
          T('between the noun and the verb'),
          T('{ui}'),
        ],
        [
          T('sentence order'),
          T('object, verb, subject'),
          T('the verb closes the proposition'),
          T('{ida}'),
        ],
        [
          T('article'),
          T('there is none: the "one" is a numeral, with a counter'),
          T('before the noun'),
          T('{itda}'),
        ],
        [T('syllable block'), T('the vowel is never missing'), T('inside the square'), T('{mot}')],
        [
          T('negation'),
          T('it comes before the verb'),
          T('between the adverb and the verb'),
          T('{mot}'),
        ],
        [T('time'), T('the particle comes after the verb'), T('attached to the verb'), T('{an}')],
        [T('connectives'), T('they close the clause'), T('after the verb'), T('{gosita}')],
        [
          T('honorifics'),
          T('they change the word, not just the form'),
          T('inside the noun phrase'),
          T('{yehova}'),
        ],
        [
          T('numerals'),
          T('two systems: the Chinese one and the Korean one'),
          T('before the counter'),
          T('{eungwon}'),
        ],
        [
          T('pronouns'),
          T('the verb already is the pronoun'),
          T('at the end of the sentence'),
          T('{nan}'),
        ],
        [
          T('genitive'),
          T('the possessor comes before the noun'),
          T('before the possessed noun'),
          T('{ui}'),
        ],
        [
          T('parallelism'),
          T('the repeated particle gives it away'),
          T('on every paired line'),
          T('{yang}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'The Hebrew verse of Psalm 23:1 has no verb. What did the Korean translator have to do?',
    ),
    options: [
      T('add the verb of being and the subject particle, which Korean requires'),
      T('keep the verse without a verb, because Korean accepts a bare noun phrase'),
      T('translate shepherd as guide, to fit the image to the Korean field'),
      T('drop the possessive particle, which would be optional in Korean'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the negation of Psalm 23:4: 두려워하지 ____으리니 (I will not fear)'),
      answer: '않',
    },
    {
      kind: 'match',
      prompt: T('Match the translation choice to what it marks'),
      pairs: [
        { a: T('{yehova}'), b: T('Hebrew proper name, transliterated: keeps the text Jewish') },
        { a: T('{sin}'), b: T('generic Korean noun: the text speaks of God, not of the name') },
        { a: T('{mok}'), b: T('shepherd: the one who leads the flock') },
        { a: T('{yang}'), b: T('sheep: the one who is led') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'You read two consecutive lines of a Psalm and the particle repeats in both. What does that indicate?',
      ),
      options: [
        T('the second line is parallel to the first, and not a new clause'),
        T('the second line is wrong and should carry another particle'),
        T('a subject is missing in the second line'),
        T('the translator used the same word twice by mistake'),
      ],
      answer: 0,
    },
  ],
};
