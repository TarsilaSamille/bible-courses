import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Writing'),
  title: T('The four changes the writer makes and the speaker does not see'),
  subtitle: T(
    'Korean is written with sound changes that only unfold when someone speaks: without the rules you read letter by letter, pronounce it wrong, and the page gives you no warning',
  ),
  body: C(`## A system, not a transcription

Korean is written with sound-change rules, and those rules hold in the writing even when nobody is speaking. That goes against the expectation of anyone arriving from a Latin alphabet: a letter ought to record a sound, not a rule. A Korean speaker reads and pronounces correctly because the rules were learned; someone who is not Korean reads letter by letter, says each letter the way it sounds alone, and gets it wrong. Korean orthography is a system, not a transcription: it records the word, not the sound. And the practical consequence is hard: without the rules you cannot work out the pronunciation from the page. In Portuguese the letter gives up the sound almost every time; in Korean the letter gives up the word, and the sound is one step behind.

Four rules do almost all the work: {yeoneumhwa}, {bieumeumhwa}, {gyeongeumhwa} and the neutralisation of the syllable end. Three of them change what is heard without changing what is written, which is exactly why they are invisible to someone reading. Knowing they exist is what separates reading Korean from decoding Korean.

## {yeoneumhwa}: the written word that lies about the speech

{yeoneumhwa} is consonant liaison, and it is the most visible of the four. When a block ends in ng and the next one begins with a vowel, the ng drops its g and moves into the next block, in the coda position. The word {song} followed by the block e is written as two blocks, song and e, and is said sone: the ng of song slides down into the e and becomes the final consonant of the new block. The same thing inside a single word: a block {um} followed by one beginning ing is written umin and said un.

Two things matter here. The first is that context plays no part: whom you love, when you love, with what intention, none of that changes the sound. The rule is blind to meaning, which is what makes it deterministic, and that is why Korean pronunciation is learned like arithmetic. The second is that {sarang}, love, does not move at all: the final ng stays where it is, because the next block does not begin with a vowel. Not every word with ng links, and the condition is what follows, not the letter.

And there is a second kind of liaison, shorter: an initial h right after an initial i disappears and the h is said on its own. The pronunciation contracts, the writing does not change, and the detail comes back later, with the syllable end.

## {bieumeumhwa} and {gyeongeumhwa}: what the ear does and the page does not show

{bieumeumhwa} is nasalisation. When k, d or b meets m or n in the next syllable, the sound becomes its nasal version: ng, n, m. {gukmul} is written guk-mul and is said gun-mul, because the final k becomes n before the m. Eopda is written eop-da and is said eop-tta: the final p became m before the d, and the d hardened, two rules in the same pair of syllables. Someone reading the page aloud, letter by letter, produces a sound no Korean speaker produces.

{gyeongeumhwa} is tensification: after a voiceless sound, the next consonant becomes tense. {hakgyo}, school, is written hak-gyo and is said hak-kkyo, with the second k tense. And here is the central point of the lesson. Sometimes the writing keeps up: the tense k is a different block from the lax k, and the reader knows he read that one. Sometimes the writing keeps up with nothing. The Korean word for "good" and the Korean word for "the same" have the same letters and different pronunciations, jot-tta and gat-tta, and the difference exists only in the mouth. The page shows the two words as one and the same thing; the mouth does not. That is the case in which reading hangul and speaking Korean are two separate pieces of knowledge, and the second one needs a rule.

## The syllable end, and the names the translator left behind

The fourth rule changes no sound at all: it decides what may sit under the block. A Korean syllable closes on seven consonants, and not one of them is tense or aspirated. {bap}, cooked rice, is written bap and is said bak: a tense b cannot be sustained at the end of a syllable, so it neutralises to the lax version, which is the same as the p. And the ss rule: s followed by i at the end of a syllable becomes ss, which is what makes the word for "better" come out nat-tta instead of what the writing suggests. A side detail, and one that only shows up when you speak: the initial i of Korean has not the glottal closure Mandarin gives the same vowel, so the very i that sounds with a closed glottis there sounds smooth here.

And here the lesson pays what it promised in the first place. Biblical proper names in Korean are written in hangul and spoken in Chinese, and the reason is historical rather than orthographic: whoever translated the Bible into Korean was a Chinese missionary, and read the biblical name in Chinese before writing it in Korean. So {yesu}, the Korean name of Jesus, carries the Chinese s and not the sh that hangul would hand a native speaker. The same goes for {moise}, whose sound comes from the Chinese reading of Moses, and for {paulo}, spoken with the Chinese rolled r. Even {sin}, the term Korean uses for God, comes from the Chinese reading of the word. The Korean name of Jesus is not the name of Jesus in Korean: it is the name the translator heard in his own language and wrote in his own.

This is why knowing the sound rules is not a detail of pronunciation. When someone preaches in Korean and pronounces a biblical name with a Chinese sound, that is not an accent mistake: it is the pronunciation the word kept from the day it was translated. The name is a historical document, and the four rules in this chapter are what let you read that document without mistaking the old pronunciation for the sound the letter suggests.
`),
  vocab: [
    V(
      'yeoneumhwa',
      '연음화',
      'consonant liaison: the final ng migrates into the next block when that block begins with a vowel (yeoneumhwa)',
    ),
    V(
      'bieumeumhwa',
      '비음화',
      'nasalisation: k, d and b become ng, n and m before m or n (bieumeumhwa)',
    ),
    V(
      'gyeongeumhwa',
      '경음화',
      'tensification: after a voiceless sound the next consonant becomes tense (gyeongeumhwa)',
    ),
    V(
      'song',
      '송',
      'a block with final ng; before a vowel the ng migrates and the sound changes (song)',
    ),
    V('um', '음', 'the vowel u with final m: the m migrates and the sound comes out un (um)'),
    V('sarang', '사랑', 'love; the final ng stays, and the word does not change (sarang)'),
    V('gukmul', '국물', 'soup: written guk-mul and spoken gun-mul (gukmul)'),
    V('hakgyo', '학교', 'school: written hak-gyo and spoken hak-kkyo (hakgyo)'),
    V('bap', '밥', 'cooked rice: the tense b cannot close a syllable and comes out bak (bap)'),
    V('yesu', '예수', 'Jesus in Korean: written in hangul, spoken the Chinese way (yesu)'),
    V('sin', '신', 'God; the Korean term comes from the Chinese reading of the word (sin)'),
    V('moise', '모세', 'Moses in Korean, spoken with the sound Chinese gave it (moise)'),
    V('paulo', '바오로', 'Paul in Korean, spoken with the Chinese rolled r (paulo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yeoneumhwa}: when a block ends in ng and the next one begins with a vowel, the ng slides down into its final position. {song} plus e is written song-e and is said sone.',
      ),
    },
    {
      n: '2',
      text: T(
        'Context plays no part in pronunciation: whom you love and when you love alter no sound. The rule is blind to meaning, and that is what makes it deterministic.',
      ),
    },
    {
      n: '3',
      text: T(
        '{bieumeumhwa}: k, d and b become ng, n and m before m or n. {gukmul} is written guk-mul and spoken gun-mul.',
      ),
    },
    {
      n: '4',
      text: T(
        '{gyeongeumhwa}: after a voiceless sound the next consonant becomes tense, as in {hakgyo}. Sometimes the writing shows it, sometimes it shows nothing — and when it shows nothing, only the rule decides.',
      ),
    },
    {
      n: '5',
      text: T(
        'A syllable only closes on a lax consonant: {bap} is said bak. And biblical proper names are spoken in Chinese even when written in hangul, as {yesu} and {moise}.',
      ),
    },
  ],
  notes: [
    {
      label: T('When the writing does not change at all'),
      text: T(
        'The hardest case in the lesson is {gyeongeumhwa} with no visual mark: the Korean word for "good" and the one for "the same" have the same letters and different pronunciations, jot-tta and gat-tta. A reader who decodes letter by letter arrives at the wrong pronunciation with no sign on the page that anything went wrong.',
      ),
    },
    {
      label: T('A biblical name is a historical document'),
      text: T(
        'The first Korean translators were Chinese missionaries and read the biblical name in Chinese before writing it in Korean. That is why {yesu} sounds with the s of "syrian", {paulo} with the Chinese rolled r and {sin} with the Chinese reading of the term. The Korean pronunciation of the name is the translator\'s voice, recorded in the word.',
      ),
    },
  ],
  examples: [
    {
      text: '손에',
      gloss: T(
        'son-e — in the hand: written song-e, said sone, because the ng slides into the next block',
      ),
    },
    { text: '국물', gloss: T('gun-mul — soup: the final k is nasalised to n before the m') },
    {
      text: '없다',
      gloss: T(
        'eop-tta — not to have: the p becomes m before the d and the d hardens, two rules in one pair',
      ),
    },
    {
      text: '학교',
      gloss: T('hak-kkyo — school: after the voiceless k, the final g becomes a tense k'),
    },
    {
      text: '예수',
      gloss: T(
        'ye-su — Jesus: the s is the Chinese s, the one of "syrian", and not the sound hangul would give a native speaker',
      ),
    },
  ],
  tables: [
    {
      caption: T('The four changes, side by side'),
      head: [
        T('Rule'),
        T('What changes'),
        T('When it happens'),
        T('In the writing'),
        T('In the speech'),
      ],
      rows: [
        [
          T('{yeoneumhwa}'),
          T('the final ng drops its g and becomes the coda of the next block'),
          T('the next block begins with a vowel'),
          T('song plus e'),
          T('sone'),
        ],
        [
          T('{bieumeumhwa}'),
          T('k, d and b become ng, n and m'),
          T('before m or n'),
          T('guk-mul'),
          T('gun-mul'),
        ],
        [
          T('{gyeongeumhwa}'),
          T('the consonant that follows becomes tense'),
          T('after a voiceless sound'),
          T('hak-gyo'),
          T('hak-kkyo'),
        ],
        [
          T('syllable end'),
          T('the tense final neutralises to the lax one'),
          T('at the end of the block'),
          T('bap'),
          T('bak'),
        ],
      ],
    },
    {
      caption: T('The same word in the writing and in the speech'),
      head: [T('Word'), T('Blocks written'), T('How it is said'), T('Rule')],
      rows: [
        [T('{sarang}'), T('sa-rang'), T('sarang'), T('none: the ng stays where it is')],
        [T('{song}'), T('song plus e'), T('sone'), T('{yeoneumhwa}')],
        [T('{gukmul}'), T('guk-mul'), T('gun-mul'), T('{bieumeumhwa}')],
        [T('{hakgyo}'), T('hak-gyo'), T('hak-kkyo'), T('{gyeongeumhwa}')],
        [T('{bap}'), T('bap'), T('bak'), T('a tense final cannot be sustained')],
        [
          T('{yesu}'),
          T('ye-su'),
          T('yesu, with the s of "syrian"'),
          T('the name is spoken in Chinese'),
        ],
      ],
    },
    {
      caption: T('Proper names: hangul written, Chinese spoken'),
      head: [
        T('Name'),
        T('Written in Korean'),
        T('Spoken in Korean'),
        T('Where the sound comes from'),
      ],
      rows: [
        [T('Jesus'), T('{yesu}'), T('ye-su'), T('from Chinese, with the s of "syrian"')],
        [T('God'), T('{sin}'), T('sin'), T('from the Chinese reading of the word for God')],
        [T('Moses'), T('{moise}'), T('mo-se'), T('from the Chinese reading of Moses')],
        [T('Paul'), T('{paulo}'), T('pa-o-ro'), T('from Chinese, with the rolled r')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '{gukmul} is written in two blocks, but nobody speaking Korean says "guk-mul". What happened?',
    ),
    options: [
      T('{bieumeumhwa}: the final k became n because the next block begins with m'),
      T('{yeoneumhwa}: the final l moved up into the next block'),
      T('the next block begins with a vowel, so the k moved up'),
      T('Korean pronounces the final k of any word as an aspirate before a consonant'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Write in hangul the Korean name of Jesus, with the pronunciation the Chinese missionary left behind: ____',
      ),
      answer: '예수',
    },
    {
      kind: 'match',
      prompt: T('Match the rule to what it does'),
      pairs: [
        {
          a: T('{yeoneumhwa}'),
          b: T('the final ng migrates into the next block when that block begins with a vowel'),
        },
        { a: T('{bieumeumhwa}'), b: T('k, d and b become ng, n and m before m or n') },
        {
          a: T('{gyeongeumhwa}'),
          b: T('after a voiceless sound the next consonant becomes tense'),
        },
        { a: T('{sarang}'), b: T('the final ng stays: none of the three rules applies') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'The Korean word for "good" and the word for "the same" are written with the same letters and spoken differently. Why?',
      ),
      options: [
        T(
          '{gyeongeumhwa} hardens the consonant after a voiceless sound, and the writing does not show it',
        ),
        T('the two words have two compound vowels with different sounds'),
        T('Korean distinguishes the words by the position of the final consonant'),
        T('one of the two words is a pronoun and the other is a noun'),
      ],
      answer: 0,
    },
  ],
};
