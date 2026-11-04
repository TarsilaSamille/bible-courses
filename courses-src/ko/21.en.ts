import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Writing'),
  title: T(
    'How to read a character in Korean: the reading lives in the character, not in the syllable',
  ),
  subtitle: T(
    'Korean has a Sino-Korean and a native reading the way Japanese does, but almost no character has the second one, and early Sino-Korean had far more voices than today',
  ),
  body: C(`## One character, one reading

Korean has, like Japanese, two systems for reading the same character. {eumdok} is the Sino-Korean reading: the character entered Korea together with Chinese texts and is read with the sound it had in Chinese. {hundok} is the native Korean reading: the sound the drawing already had here before the borrowing. Both live in the same character and neither of them is the wrong one.

And here is where Korean diverges from Japanese. In Japanese the native reading is the rule: almost every character has one, and it is the one that shows up in verbs. In Korean it is the other way round. The overwhelming majority of characters have ONLY the Sino-Korean reading, and the native reading belongs to a handful of core vocabulary words, person, country, to go, which almost never appear written in {hanja}. Someone who has learned Korean speaks the whole day in native readings and, on meeting a character on a sign, reads Sino-Korean without hesitating.

One detail shows this better than any rule. The Korean syllable reads "han", and the character {漢} also reads "han", as in the word for Korea. But the character {干} does not read "han": it reads "gan", as in the word for shield. The same Korean letter, two characters, two readings. Pronunciation is not a property of the syllable: it is a property of the character, and that is why the same Korean letter cannot let you guess the sound of a character you have not met before.

Rain is the cleanest example of both systems at once. The character {雨} has the Sino-Korean reading **u**, which shows up in rainfall and in the late-afternoon shower; and it has the native reading **bi**, which is the word Korean says every day when it rains. Someone who only speaks Korean says "bi"; someone reading a newspaper printed with characters says "u". Neither of them is wrong: they are different layers of the same object, and the page tells you which layer is in use.

## One sound, three characters

The other side of the system is ambiguity, and it is the exact inverse of the ambiguity of the character. The Korean syllable reads "ja" in three completely different characters: {子}, the child, which is the "ja" of child; {自}, the self, which is the "ja" of self-satisfied; and {字}, the written character, which is the "ja" of letter, of writing. Three drawings, three meanings, one sound.

Notice what that means for the reader. A character is precise: {子} means child and nothing else, and whoever sees it knows exactly what is being read. The Korean reading is imprecise: "ja" does not tell you whether what is written is a child, a vain person or a letter, and only the neighbouring character says. It is nearly the reverse of what the name of the system suggests: here the drawing is the fine line and the sound is the thick one.

This ties the syllable block to {hanja}. The hangul syllable block is exact: one block, one syllable, without exception. The Sino-Korean reading has no such exactness: one Korean syllable covers a handful of characters, and the character is what makes the distinction. That is why a Korean dictionary has two entries for the same syllable and a {hanja} dictionary has one entry per character: the unit of the two dictionaries differs, and neither is wrong.

And the same holds on the sound side: rain is "u" when it is a character and "bi" when it is not. Someone speaking Korean does not need {hanja} to say rain; someone writing Korean with {hanja} cannot say it without. {hanja} is a layer and not an ornament: it goes in where the word is learned or the name is proper, and it stays out of everything else.

## The same character in the three languages

Three characters are enough to show how the three languages of this project inherited the same system and did different things with it: water {水}, fire {火} and mountain {山}.

Water is the cleanest case. In Korean the character reads **su**, as in hydrogen. In Japanese the same character has two voices: the Sino-Japanese inherited reading "sui", and the native "mizu". In Chinese it is "shuǐ", from the same sound neighbourhood as "su". Notice what happened: Korean kept the reading that comes from Chinese and has no native reading to compete in the same field; Japanese acquired a native reading of its own and the two coexist; Chinese is the common ancestor of both.

Fire shows the same thing more sharply. In Korean {火} reads **hwa**, and the initial "h" is the mark of a reading still glued to the Chinese sound, which is "huǒ". In Japanese the same character reads "ka", and the sound Korean keeps as "h" Japanese turned into "k". Mountain repeats the pattern from the other side: {山} reads **san** in Korean, and reads "san" in Japanese as well as an inherited reading, while the Japanese native voice is "yama". Here Korean and Japanese share the inherited reading and diverge on the native one.

The table is the whole lesson in three lines. The character is one thing, inherited once. What varies is the layer each language adds on top: Korean adds almost nothing and stays with the ancestor's sound, Japanese adds a native reading for every character and ends up with two, and Chinese keeps the original reading. That is why Sino-Korean resembles Chinese more than it resembles Japanese, even though Korean is a language outside the Chinese family: it never manufactured a second voice to compete with the first.

## What Korean did with the system, and what is left today

Early Sino-Korean was far richer than today's, and this is where Korean diverges from Japanese a second time. In Korean texts of the fifteenth and sixteenth centuries the same character appears with more than one documented pronunciation, sometimes three or four, because Sino-Korean was taken from Chinese at different moments in Chinese history and each borrowing left a sound behind. The character for "to hit" is a recorded case: it reads {bi} in almost all modern Korean, and older texts also record pi, byeok and paek. Modern Korean standardised: one Sino-Korean reading per character survived, plus the native reading of the handful of core words. Rain shows the same in miniature, because besides today's Sino-Korean reading it keeps traces of an older Sino-Korean one, visible in the "a" with which sixteenth-century texts wrote "it rains".

And what Korea did afterwards with {hanja} is a decision, not a fate. {hanja} survived in proper names and learned words, and that is exactly where it is: in a person's name and in an erudite word, never in the sentence of the day. And at this moment it is being reversed by an official campaign of the Korean government that is teaching people to read {hanja} again, a political decision, under way, with public money and a school calendar. None of this is abstract cultural heritage: it is a choice being made now, in front of us.

The biblical hook is the proof that the choice matters. The 1917 Korean translation, the first one in Korean, is almost entirely {hanja}. The same verse in 1917 and in 1961 changes in every single character. In John 1:1 the 1917 version writes the whole sentence in characters, and the character for the Word is {道}, read "do", and the character for God is {神}, read "sin". The 1961 version writes the same two sounds in hangul, and the characters disappear from the page. The character is the same in both texts and the sound is the same; what changes is who has to produce the sound. A modern Korean reader reads 1961 effortlessly and cannot say a line of 1917 aloud, and the reason is a single one: the reading lives in the character, and the character is what was lost.

Learning the system pays even without learning {hanja}. Someone who knows that {漢} reads "han" and {干} reads "gan" knows that modern Korean pronunciation is not deducible from the letter; and someone who knows that will not promise anyone that the sound of a character can be guessed. A reading system is not a memory exercise: it is the information that the reading changes with the character, and that information is worth something for any text the reader will ever meet.
`),
  vocab: [
    V(
      'eumdok',
      '음독',
      'the Sino-Korean reading of a character: the one that came with the Chinese texts (eumdok)',
    ),
    V(
      'hundok',
      '훈독',
      'the native Korean reading of a character; it survives only in a handful of core words (hundok)',
    ),
    V(
      'hanja',
      '漢字',
      'Korean written in Chinese characters, used in proper names and learned words (hanja)',
    ),
    V('han', '漢', 'the Sino-Korean reading of 漢: han, as in Korea'),
    V(
      'gan',
      '干',
      'the Sino-Korean reading of 干: gan, not han — the reading changes with the character',
    ),
    V('u', '雨', 'the Sino-Korean reading of rain: u, as in rainfall'),
    V('bi', '雨', 'the native reading of rain: bi, the word said every day'),
    V('a', '雨', 'the older Sino-Korean reading of rain, visible in sixteenth-century texts (a)'),
    V('ja', '子', 'the Sino-Korean reading of "child": ja, the same sound as two other characters'),
    V('ja', '自', 'the Sino-Korean reading of "self": the same sound ja, a different character'),
    V(
      'ja',
      '字',
      'the Sino-Korean reading of "written character": the same sound ja, a third character',
    ),
    V('su', '水', 'water in Sino-Korean: su, as in hydrogen'),
    V('hwa', '火', 'fire in Sino-Korean: hwa, which keeps the Chinese initial'),
    V('san', '山', 'mountain in Sino-Korean: san, the same reading as Sino-Japanese'),
    V('do', '道', 'the Sino-Korean reading of "way": do, the Word in John 1:1'),
    V('sin', '神', 'the Sino-Korean reading of the character for God: sin'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A Korean character has two readings: {eumdok}, the Sino-Korean one, and {hundok}, the native one. In Korean almost every character has ONLY the {eumdok}; {hundok} survives in a handful of core words.',
      ),
    },
    {
      n: '2',
      text: T(
        'The reading lives in the character, not in the syllable: {漢} reads "han" and {干} reads "gan". The same Korean letter cannot let you guess the sound of a new character.',
      ),
    },
    {
      n: '3',
      text: T(
        'One Korean syllable can cover several characters: the same sound stands for {子}, {自} and {字}. The character is precise and the sound is imprecise — the reverse of what the name of the system suggests.',
      ),
    },
    {
      n: '4',
      text: T(
        'The Sino-Korean reading stays glued to the Chinese sound because it never gained a native reading to compete: {su}, {hwa} and {san}. Japanese gained both voices, and therefore drifted further from the ancestor than Korean did.',
      ),
    },
    {
      n: '5',
      text: T(
        "Early Sino-Korean had more voices per character than today: rain had a native reading, an older Sino-Korean reading and today's Sino-Korean reading. Korean standardised to one reading per character, and today's {hanja} is a layer, not a necessity.",
      ),
    },
  ],
  notes: [
    {
      label: T('Why the Korean reading is shorter than the Japanese one'),
      text: T(
        'Japanese manufactured a native reading for almost every character, and so has two voices in almost every sign. Korea rarely manufactured one, and so its reading is still very nearly the Chinese one. That is why Sino-Korean resembles Mandarin more than it resembles Japanese, even though Korean is not in the Chinese family.',
      ),
    },
    {
      label: T('A 1917 translation is illegible to anyone who reads Korean today'),
      text: T(
        'In John 1:1 the 1917 version writes the Word in a character, read "do", and God in a character, read "sin"; the 1961 version writes the same two sounds in hangul. The character and the sound are the same, and what changes is who has to produce the sound. Someone who does not read {hanja} cannot say a line of 1917 aloud, and the difficulty is not vocabulary: it is a reading system.',
      ),
    },
  ],
  examples: [
    {
      text: '漢字',
      gloss: T('hanja — Korean written in Chinese characters, in proper names and learned words'),
    },
    {
      text: '子自字',
      gloss: T(
        'ja, ja, ja — three characters and one Korean sound: child, self, written character',
      ),
    },
    {
      text: '水火山',
      gloss: T(
        'su, hwa, san — water, fire, mountain: the three characters the three languages of this project share',
      ),
    },
    {
      text: '雨',
      gloss: T(
        "u in today's Sino-Korean, bi in the native reading, a in older Sino-Korean: three Korean readings for one character",
      ),
    },
    {
      text: '道與神同在',
      gloss: T(
        'do, yeo, sin — the Word was with God: John 1:1 in the 1917 Korean version, which the reader has to pronounce',
      ),
    },
  ],
  tables: [
    {
      caption: T('The two readings, and why Korean lives almost only on the first'),
      head: [T('Reading'), T('Where it comes from'), T('Who has it'), T('Where it appears')],
      rows: [
        [
          T('{eumdok}'),
          T('from Chinese texts, taken at different moments of Chinese history'),
          T('almost every character'),
          T('{u}, {su}, {hwa}, {san}, {do}, {sin}'),
        ],
        [
          T('{hundok}'),
          T('from old Korean, from before the texts were imported'),
          T('a handful of core words'),
          T('{bi}, and words like person, country, to go'),
        ],
        [
          T('both on one character'),
          T('no single source: one layer is old and one is borrowed'),
          T('very few characters'),
          T('{雨}: {u} in writing, {bi} in speech'),
        ],
      ],
    },
    {
      caption: T('The same character in the three languages, and what each one added on top'),
      head: [T('Character'), T('Meaning'), T('Korean'), T('Japanese'), T('Chinese')],
      rows: [
        [T('{水}'), T('water'), T('{su}'), T('sui inherited, mizu native'), T('shuǐ')],
        [T('{火}'), T('fire'), T('{hwa}'), T('ka inherited, hi native'), T('huǒ')],
        [T('{山}'), T('mountain'), T('{san}'), T('san inherited, yama native'), T('shān')],
        [T('{雨}'), T('rain'), T('{u} and {bi}'), T('u inherited, ame native'), T('yǔ')],
        [
          T('{道}'),
          T('way, and the Word in John 1:1'),
          T('{do}'),
          T('dō inherited, michi native'),
          T('dào'),
        ],
      ],
    },
    {
      caption: T('One Korean sound, three characters: the ambiguity sits on the sound'),
      head: [T('Sound'), T('Character'), T('Meaning'), T('Where it appears')],
      rows: [
        [T('ja'), T('{子}'), T('child'), T('child, offspring')],
        [T('ja'), T('{自}'), T('self'), T('self-satisfied, vain')],
        [T('ja'), T('{字}'), T('written character'), T('letter, writing')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'The Korean letter that reads "han" appears in two different characters. The character for shield reads',
    ),
    options: [
      T('"han", because the Korean letter is the same'),
      T('"gan", because the reading lives in the character and not in the letter'),
      T('"bi", because it is a core vocabulary word'),
      T('"a", because that is the older Sino-Korean reading'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the character for water in Korean, the one read "su" in hydrogen: ____'),
      answer: '水',
    },
    {
      kind: 'match',
      prompt: T('Match the reading to what it is'),
      pairs: [
        { a: T('{eumdok}'), b: T('the Sino-Korean reading, which almost every character has') },
        {
          a: T('{hundok}'),
          b: T('the native reading, which survives only in a handful of core words'),
        },
        { a: T('{u}'), b: T("rain in today's Sino-Korean, as in rainfall") },
        { a: T('{bi}'), b: T('rain in the native reading, the everyday word') },
        { a: T('{do}'), b: T('the Word in John 1:1, read in the character for way') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about reading a character in Korean is true?'),
      options: [
        T('almost every character has a native reading, as in Japanese'),
        T(
          'the reading lives in the character, and one Korean syllable can stand for several characters',
        ),
        T('the character is ambiguous and the reading is precise, as in any ideographic system'),
        T('early Sino-Korean had fewer voices per character than today'),
      ],
      answer: 1,
    },
  ],
};
