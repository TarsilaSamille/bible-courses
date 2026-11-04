import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Writing'),
  title: T('Katakana: the script of the foreign, of names and of emphasis'),
  subtitle: T(
    'Katakana says the same syllables as hiragana; the choice is one of register, and that choice is what does the stressing',
  ),
  body: C(`
## Katakana: five uses, one register

Katakana is a syllabary just like hiragana: it says exactly the same syllables. The choice between the two is one of **register**, not of pronunciation. Katakana marks five things: the borrowed foreign word, the Japanese proper name, emphasis or tone, the onomatopoeia, and scientific symbols.

A Brazilian reader trips over katakana on the first page. The word "computer" is {konpyuuta}, "coffee" is {kafe} and "baseball" is {beisubooru}; hospital and hotel are borrowed words too, and so they are katakana as well. The important point is a different one: the kanji is the same whenever it exists. Coffee has a real Japanese word, {kohi}, written in kanji, and a borrowed version, {kafe}, written in katakana. The same game happens with baseball: {yakyuu} in kanji, {beisubooru} in katakana. The two say the same thing; one of them was learned as a loanword and that is why it uses katakana.

## Proper names: the rule without exception

There is no debate here. Every Japanese name goes in katakana, person, city, state, whatever it is. {toukyou} is Tokyo, {oosaka} is Osaka, {yamada} is Yamada: all three in katakana, even though in real life they usually appear in kanji. And a foreign name comes in through the same door, because the rule does not look at nationality: a Japanese and a foreigner get the same treatment. **If it is a name, katakana**, for a person and for a city alike.

## Emphasis and onomatopoeia: the two edges

**Emphasis.** A word in the middle of a hiragana sentence switches to katakana when the writer wants to stress it. {ookii} is "big" and comes from the kanji {大}; stressing it is rewriting that kanji in katakana, and the same "big" becomes {オオキイ}. Japanese is a script with no capitals and no italics, so katakana in the middle of hiragana is the only written-emphasis mechanism the language has.

**Onomatopoeia.** The second edge is a system of its own, and it is the most characteristic thing about Japanese. Onomatopoeia is almost always in katakana, and none of it can be translated literally. {ban} is the sound of knocking, {dokan} is the "toc-toc" of something falling, {gorogoro} is the bubbling of water coming to the boil. {ban} does not mean "to knock": it means the noise a hand makes when it knocks. Onomatopoeia is sound, not word.

## The origin trick

Every katakana is a deformed kanji. Katakana was born out of parts of Chinese characters which, more than a thousand years ago, Japanese monks used purely to represent sounds, with no meaning at all; over time those parts grew a life of their own. {力}, which means "strength", loses its middle and becomes {カ} (ka). {無}, which means "nothing", becomes {ム} (mu). That is why the strokes of katakana are harder than those of hiragana: they carry the shadow of the brush of the kanji they came out of.

## Where the Bible shows up

A Bible reader is going to see katakana everywhere in Biblical Japanese. The 1987 Japanese translation uses katakana for administrative terms and for the foreign names that appear in the text, while "in the beginning" and nearly all the rest is hiragana. Japanese Bible study books are a festival of katakana: the name of a commentary, a publishing imprint, everything in katakana. And the most curious detail comes last: New Testament Greek, when somebody writes it in Japanese, comes out in katakana. The Greek Logos became {rogosu}, an ancient Greek word that turned into a loanword in exactly the same way as "computer".
`),
  vocab: [
    V('konpyuuta', 'コンピューター', 'computer: a loanword, hence katakana'),
    V('kafe', 'カフェ', 'coffee in the borrowed version, in katakana'),
    V('kohi', '珈琲', 'home coffee, in kanji: the native version'),
    V('yakyuu', '野球', 'baseball in kanji: the native version of baseball'),
    V('toukyou', 'トウキョウ', 'Tokyo: a city name, in katakana'),
    V('oosaka', 'オオサカ', 'Osaka: a city name, in katakana'),
    V('yamada', 'ヤマダ', 'Yamada: a Japanese surname, always in katakana'),
    V('ookii', '大きい', 'big: the kanji 大 is the part that gets stressed in katakana'),
    V('ban', 'バン', 'ban: the sound of knocking; it is sound, not the verb'),
    V('dokan', 'ドカン', 'dokan: the "toc-toc" of something falling'),
    V('gorogoro', 'ゴロゴロ', 'gorogoro: the bubbling of water coming to the boil'),
    V('rogosu', 'ロゴス', 'Logos: New Testament Greek written in katakana'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Katakana and hiragana say the same syllable: the choice is one of register, and katakana marks five uses — loanword, name, emphasis, onomatopoeia and scientific symbol.',
      ),
    },
    {
      n: '2',
      text: T(
        'If it is a name, katakana — Japanese or foreign, person or city, without exception.',
      ),
    },
    {
      n: '3',
      text: T(
        'Katakana in the middle of hiragana is the only written-emphasis mechanism Japanese has.',
      ),
    },
    {
      n: '4',
      text: T(
        'Onomatopoeia is almost always katakana and none of it translates literally: {ban} is not "to knock", it is the noise of knocking.',
      ),
    },
    {
      n: '5',
      text: T(
        'Every katakana is a deformed kanji: {カ} is {力} without its middle, {ム} is {無}. The strokes keep the shadow of the brush.',
      ),
    },
  ],
  notes: [
    {
      label: T('A loanword is not an "English word"'),
      text: T(
        '{kafe} is a Japanese word for coffee, and {kohi} is one too. The difference is not one of meaning, it is one of history: one came from outside and so uses katakana, the other is homegrown and uses kanji. A Japanese dictionary lists both.',
      ),
    },
    {
      label: T('Greek is a loanword too'),
      text: T(
        'When New Testament Greek is put into Japanese it comes out in katakana: {rogosu} is Logos. An ancient Greek word turned borrowed in exactly the same way as "computer". Anyone who has understood loanwords recognises the Logos on the same shelf as television.',
      ),
    },
  ],
  examples: [
    { text: 'コンピューターを使う', gloss: T('konpyuuta o tsukau — I use the computer') },
    {
      text: 'ヤマダさんは東京にいる',
      gloss: T('yamada-san wa toukyou ni iru — Mr Yamada is in Tokyo'),
    },
    {
      text: 'オオキイ',
      gloss: T('ookii — "big", with the kanji rewritten in katakana to stress it'),
    },
    {
      text: 'ゴロゴロと湯が沸く',
      gloss: T('gorogoro to yu ga waku — the water boils, going gorogoro'),
    },
    { text: 'ドカンと音がした', gloss: T('dokan to oto ga shita — there came a "toc-toc"') },
  ],
  tables: [
    {
      caption: T('The five uses of katakana'),
      head: [T('Use'), T('Example'), T('What it is')],
      rows: [
        [
          T('a borrowed foreign word'),
          T('{konpyuuta}'),
          T('loanword: a word that came into Japanese from outside'),
        ],
        [
          T('a Japanese proper name'),
          T('{yamada}'),
          T('person, city, state — if it is a name, katakana'),
        ],
        [
          T('emphasis or tone'),
          T('{オオキイ}'),
          T('katakana in the middle of hiragana is what stresses'),
        ],
        [T('onomatopoeia'), T('{gorogoro}'), T('written sound; it hardly ever translates')],
        [T('scientific symbol'), T('{メートル}'), T('unit and symbol letter, always in katakana')],
      ],
    },
    {
      caption: T('Onomatopoeia: written sound, not word'),
      head: [T('Onomatopoeia'), T('Sound it describes'), T('Portuguese gloss')],
      rows: [
        [T('{ban}'), T('a hand knocking'), T('a knock, a pat')],
        [T('{dokan}'), T('something heavy falling'), T('"toc-toc", a thud')],
        [T('{gorogoro}'), T('water boiling in a pan'), T('bubbling, rumbling')],
      ],
    },
    {
      caption: T('Every katakana is a deformed kanji'),
      head: [T('Origin kanji'), T('Katakana'), T('Reading')],
      rows: [
        [T('{力} "strength"'), T('{カ}'), T('ka')],
        [T('{八} "eight"'), T('{ハ}'), T('ha')],
        [T('{之} "this"'), T('{シ}'), T('shi')],
        [T('{無} "nothing"'), T('{ム}'), T('mu')],
        [T('{女} "woman"'), T('{メ}'), T('me')],
        [T('{毛} "hair"'), T('{モ}'), T('mo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In a sentence written in hiragana, a word that shows up in katakana is almost always there in order to...',
    ),
    options: [
      T('stress the word'),
      T('mark the past tense'),
      T('negate the verb'),
      T('indicate a number'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write "computer" in katakana, completing what is missing: コン____'),
      answer: 'ピューター',
    },
    {
      kind: 'match',
      prompt: T('Match the katakana to what it does'),
      pairs: [
        { a: T('{ban}'), b: T('the sound of knocking') },
        { a: T('{dokan}'), b: T('the "toc-toc" of a thud') },
        { a: T('{gorogoro}'), b: T('the bubbling of boiling water') },
        { a: T('{ヤマダ}'), b: T('a Japanese surname') },
        { a: T('{オオキイ}'), b: T('emphasis: the stressed word') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which character did the katakana {カ} come from?'),
      options: [
        T('the kanji {力}, which means "strength"'),
        T('an old hiragana'),
        T('an ideogram invented in recent times'),
        T('a scientific symbol'),
      ],
      answer: 0,
    },
  ],
};
