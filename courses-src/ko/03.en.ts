import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Writing'),
  title: T('The anatomy of the block: the obligatory vowel and the final coda'),
  subtitle: T(
    'Korean is easy to write once you have the formula: optional initial, obligatory vowel, optional final — a finite and tiny system that fits in your head',
  ),
  body: C(`## The formula: optional initial, obligatory vowel, optional final

Every hangul square is written in the same order: initial, optional; vowel, obligatory; final, optional. No square has a fourth position and no square can do without the second one. Writing Korean is applying the formula as many times as the sentence has syllables.

The whole inventory fits on a page. There are 19 initial consonants, 10 of them simple and 11 written with two consonants set side by side. There are 7 vowels. There are 7 final consonants. Multiplying those pieces gives a large number, more than ten thousand possible blocks, and that is exactly the point: the number is large, the rule is tiny. Someone learning Korean does not memorise thousands of syllables, they memorise one formula and apply it piece by piece. Someone learning Mandarin memorises thousands of pairs, because there each syllable is an item on a list. The difference is not talent, it is design. Korean was drawn so that the arithmetic of the alphabet would be done once, in the design lesson, and everything after it would be repetition.

And the detail with no exception is the middle one: there is no Korean syllable without a vowel in the middle. Never. A syllable is an initial consonant, a vowel and, sometimes, a final consonant; the vowel is what stays, the part that cannot be missing under any circumstance, and the only part of the block that carries the pronunciation.

The contrast with Mandarin is what makes it visible. Mandarin has syllables ending in a consonant alone: ba, bei, a sound that stops abruptly, with no vowel at all to hold it. In Korean that is impossible, and the impossibility is what makes the writing regular. A vowelless syllable would have two consonants glued together and no indication of where the syllable boundary lies; in Korean the vowel is always the cut, always the centre of the block, and so any reader finds the boundary without effort. A Korean text segments itself: it is the vowel that says where each syllable ends.

## Simple and compound

Korean vowels split into two groups, and the split is about how many sounds fit in one symbol. The simple ones have a single sound: a, eo, ya, yeo, o, yo, u. The compound ones pull two sounds into a single vowel, and that is why a Korean syllable can have two vowels in the same square and still have only one vowel.

The commonest compound vowels are {ye}, {wa}, {we}, {wi}, {wo} and {yu}, and what the learner has to keep is not the list but the mechanism: {ye} is written with the sign for y followed by the sign for e, and it behaves as one vowel, not as two. One example is enough to fix it: in {yeong} the {ye} at the front is the vowel of the block, and the whole block is worth one syllable. Anyone who read the symbol as two vowels read two syllables, and the word came out twice too long. The beginner's usual mistake is not getting the sound wrong, it is counting the syllable wrong.

## The final changes the sound of the vowel

The coda at the bottom is the part that frightens people and it is the most informative part. There are seven final consonants, k, l, m, p, t, n, ng, and it is not an echo of the initial nor any kind of noise: it comes after the vowel and it changes what the vowel sounds like. Compare {ga} and {gak}: it is the same g, it is the same vowel a, and even so one sounds "ga" and the other "gak". The difference is one letter underneath.

The most instructive example is {i} against {in}. On its own the block {i} sounds "i". With the n final underneath, the same block becomes {in} and sounds "in". The vowel is no longer the same one: someone hearing "in" is not hearing an i with an extra letter, they are hearing another syllable. The same holds with {u}: {u} sounds "u" and {un} sounds "un". And it holds in general: the final is the position that changes the pronunciation of the vowel.

And here is the principle that ties Korean to Japanese: a consonant that sits INSIDE the block, the initial, does not alter the sound of the vowel; the one that sits underneath, the final, does. That is why Korean distinguishes "in" from "i" as two different sounds, and Japanese, whose syllable has no position after the vowel, distinguishes nothing after it. In a word like {guk} all three positions are occupied: initial, vowel, final, three sounds. In a word like {ga} only two positions are occupied and the third is blank. A blank position is allowed; the vowel never is.

## The name of the system, and the text it put on the street

The Korean name of the system already hands over the whole system. {hangul} is literally "Korean letter": the first block means Korean and the second means letter, and letter in Korean is the written character, not the sound. Hence the standard Korean word for "written in Korean" is precisely {hangul}, the noun for written Korean. The name of the language follows the same arithmetic: {hangugeo} is "the language of the Korean country", with {guk}, the country, in the middle, the same {guk} that means state and that today is half of the name of the country. {hanja} is "Korean character", the same scheme with the Chinese character in place of the letter.

And this is where the writing choice becomes a historical fact. The Korean Bible, the 1917 translation, was printed in hanja with Korean pronunciation: readable by anyone who reads Chinese characters and useless to anyone who does not. The missionaries who prepared it had to decide whether the text, from beginning to end, would be written in hanja or in hangul, and they chose hangul. The choice was not aesthetic, it was about access. A Bible text written in a pure alphabet is read by anyone who speaks Korean, without years of Chinese characters standing in front of it, and that was the first time a biblical text was printed in an alphabetic script in an Asian language. The world today shows where the decision paid off: hanja survives in proper names and in learned words, and the Korean Bible is hangul, with hanja only where it is needed.

The segmentation of Mandarin is exactly the problem Korean does not have. There the syllable boundary has to be hunted down; here it is handed over by the vowel.
`),
  vocab: [
    V('guk', '국', 'country; state (guk) — it is also the vowel u with a k final'),
    V('ga', '가', 'initial plus vowel a, no final: "ga"'),
    V('gak', '각', 'the same g and the same a with a final consonant: "gak"'),
    V('i', '이', 'the vowel i alone: "i"'),
    V('in', '인', 'the same vowel i with an n final: sounds "in", not "i"'),
    V('u', '우', 'the vowel u alone: "u"'),
    V('un', '운', 'the same vowel u with an n final: sounds "un"'),
    V('bang', '방', 'ng final: the final consonant sounds "ng" (bang)'),
    V('yeong', '영', 'compound vowel ye with an ng final: "yeong"'),
    V('hangul', '한글', 'the Korean alphabet; literally "Korean letter" (hangul)'),
    V(
      'hanja',
      '한자',
      'Korean written in Chinese characters; literally "Korean character" (hanja)',
    ),
    V('hangugeo', '한국어', 'Korean; literally "the language of the Korean country" (hangugeo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every block is written in the same order: optional initial, obligatory vowel, optional final. There is no fourth position.',
      ),
    },
    {
      n: '2',
      text: T(
        'There is no Korean syllable without a vowel. Mandarin has them — and that is why Mandarin needs segmentation rules and Korean does not.',
      ),
    },
    {
      n: '3',
      text: T(
        'The compound vowels {ye} {wa} {we} {wi} {wo} {yu} — {예} {와} {왜} {위} {워} {유} — pull two sounds into one vowel: they count as one position of the block, not two.',
      ),
    },
    {
      n: '4',
      text: T(
        'The final consonant changes the sound of the vowel: {in} {인} is not {i} {이} with one letter more, it is another syllable.',
      ),
    },
    {
      n: '5',
      text: T(
        'The initial does not alter the sound of the vowel; the final does. That is why Korean distinguishes "in" from "i" and Japanese distinguishes nothing after the vowel.',
      ),
    },
  ],
  notes: [
    {
      label: T('The name of the system is the system'),
      text: T(
        '{hangul} is literally "Korean letter" and {hanja} is "Korean character"; the name of the language, {hangugeo}, is "the language of the Korean country", with {guk}, the country, in the middle. The nomenclature hands over the design: letter, character, country.',
      ),
    },
    {
      label: T('The Bible text was chosen in hangul'),
      text: T(
        'The 1917 Korean translation came out in hanja with Korean pronunciation, readable only by people who read Chinese characters. The missionaries decided to write in hangul for access, not for aesthetics: it was the first time a biblical text was printed in an alphabetic script in an Asian language. Today hanja appears almost only in proper names and learned words.',
      ),
    },
  ],
  examples: [
    { text: '국', gloss: T('guk — "country": initial, vowel and final, three positions filled') },
    { text: '가', gloss: T('ga — initial and vowel: the bottom position is empty') },
    {
      text: '각',
      gloss: T('gak — the same g and the same vowel as ga, with a final consonant underneath'),
    },
    { text: '인', gloss: T('in — the vowel i of {i} with an n final: sounds "in", not "i"') },
    { text: '한글', gloss: T('han-gul — literally "Korean letter", the name of the alphabet') },
  ],
  tables: [
    {
      caption: T('The anatomy of the block, read top to bottom'),
      head: [
        T('Position in the square'),
        T('Element'),
        T('Mandatory'),
        T('How many'),
        T('Typical sounds'),
        T('Symbols'),
      ],
      rows: [
        [
          T('top left'),
          T('initial consonant'),
          T('no'),
          T('19 (10 simple, 11 compound)'),
          T('g, k, n, s, j'),
          T(
            '{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ} {ㅊ} {ㅋ} {ㅌ} {ㅍ} {ㅎ} {ㄲ} {ㄸ} {ㅃ} {ㅆ} {ㅉ}',
          ),
        ],
        [
          T('centre and right'),
          T('vowel'),
          T('yes, always'),
          T('7'),
          T('a, eo, ya, yeo, o, yo, u'),
          T('{ㅏ} {ㅑ} {ㅓ} {ㅕ} {ㅗ} {ㅛ} {ㅜ} {ㅠ} {ㅡ} {ㅣ}'),
        ],
        [
          T('bottom'),
          T('final consonant'),
          T('no'),
          T('7'),
          T('k, l, m, p, t, n, ng'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅇ}'),
        ],
        [
          T('the whole square'),
          T('one syllable'),
          T('it is the unit of reading'),
          T('more than 10 thousand combinations'),
          T('never two syllables'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('The same vowel, with and without a final consonant'),
      head: [T('Vowel'), T('Without final'), T('With final'), T('What changes')],
      rows: [
        [T('a'), T('{ga} — "ga"'), T('{gak} — "gak"'), T('the vowel starts to sound "ak"')],
        [T('i'), T('{i} — "i"'), T('{in} — "in"'), T('the vowel starts to sound "in"')],
        [T('u'), T('{u} — "u"'), T('{un} — "un"'), T('the vowel starts to sound "un"')],
        [
          T('a, ng final'),
          T('{ga} — "ga"'),
          T('{bang} — "bang"'),
          T('the ng final closes the sound with "ng"'),
        ],
      ],
    },
    {
      caption: T('Simple vowels and compound vowels'),
      head: [T('Group'), T('How many'), T('Sounds per symbol'), T('Examples')],
      rows: [
        [T('simple'), T('7'), T('one'), T('a, eo, ya, yeo, o, yo, u')],
        [
          T('compound'),
          T('several, named one by one'),
          T('two pulled into a single vowel'),
          T('ye, wa, we, wi, wo, yu'),
        ],
        [
          T('consequence'),
          T('—'),
          T('a compound vowel is still one position of the block'),
          T('{yeong} is worth one syllable, not two'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '{ga} sounds "ga" and {gak} sounds "gak". What exactly changed from one to the other?',
    ),
    options: [
      T('the final consonant underneath changed the sound of the vowel'),
      T('the initial consonant changed from g to something else'),
      T('the vowel disappeared and only the final was left'),
      T('the word went on to have two syllables'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the Korean block that is the vowel i with the final consonant n: ____'),
      answer: '인',
    },
    {
      kind: 'match',
      prompt: T('Match the block to the sound'),
      pairs: [
        { a: T('{ga}'), b: T('"ga": initial and vowel, no final') },
        { a: T('{gak}'), b: T('"gak": the same g with a final consonant') },
        { a: T('{i}'), b: T('"i": the vowel alone') },
        { a: T('{in}'), b: T('"in": the vowel i with an n final') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about the Korean block is true?'),
      options: [
        T('the vowel is the only position that can never be missing'),
        T('there are syllables ending in a consonant alone'),
        T('the final consonant does not alter the sound of the vowel'),
        T('a square can hold two syllables'),
      ],
      answer: 0,
    },
  ],
};
