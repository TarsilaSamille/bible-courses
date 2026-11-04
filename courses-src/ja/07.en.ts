import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verb'),
  title: T('The essential verbs'),
  subtitle: T('行く, 来る, する, 食べる, 着る: the verbs that hold almost every sentence up'),
  body: C(`## Fifteen verbs, and two with no rule

A regular Japanese verb inflects by its ending: in {食べる}, {食べない}, {食べた}, the stem {食べ-} does not move. The essentials include the only two irregular verbs in Japanese: {する} "to do" and {来る} "to come". No other verb is irregular, but those two appear on every page.

They are few and they weigh a lot. {行く} to go, {来る} to come, {する} to do, {ある} to exist (inanimate), {いる} to exist (animate), {食べる} to eat, {飲む} to drink, {着る} to wear, {見る} to see, {聞く} to hear, {言う} to say, {書く} to write, {読む} to read, {分かる} to understand, {知る} to know, {思う} to think, {持つ} to have, {寝る} to sleep, {歩く} to walk, {走る} to run, {泳ぐ} to swim, {話す} to speak cover almost everything said in a chapter of a Gospel.

## {する} and {来る}: the two irregulars

{する} "to do" is the most irregular verb: {する}, {しない}, {した}, {して}. The past is {した}, not {すた}. And the te-form is {して}, not {して} with the {し} of the stem. {来る} "to come" is the other one: {来る}, {来ない}, {来た}, {来て}. The stem moves from {く} to {こ} in the negative and the past: {来ない}, {来た}.

These two verbs are the exception that proves the rule: all the rest of Japanese inflects regularly. Whoever memorized {する} and {来る} memorized the only forms that cannot be deduced.

## {ある} and {いる}: to exist

{ある} "to exist" is for inanimate things: {本がある}, "there is a book". {いる} "to exist" is for animate things: {人がいる}, "there is a person". The negative of {ある} is {ない}, not {あるない}: {本がない}, "there is no book". The negative of {いる} is {いない}: {人がいない}, "there is no person".

{ある} has no passive and no causative: it is a verb of state, not of action. {いる} is the same. The two are the most frequent verbs in Japanese, and the choice between them is the choice between animate and inanimate.

## In the Bible

John 1:1 begins with {あった}: {初めに言があった}, in the beginning there was the Word. {あった} is the past of {ある}, and {言} is the noun "word". Japanese says "there was the word", and Greek says {ἦν ὁ λόγος}, "the Word was". The difference is the difference of the verb: {ある} is state, {いる} is animate existence.

John 3:16 has {愛した}, the past of {愛する} "to love": {神は世界を愛した}, God loved the world. Japanese puts the verb at the end of the sentence, and the object comes before it: {世界を愛した}. Greek says {ἠγάπησεν τὸν κόσμον}, and the order is the same.

Mark 4:39 has {黙れ}, "be silent": it is the imperative of {黙る} "to fall silent". Japanese puts the command in the verb, and the object comes before it: {黙れ} is the whole command.`),
  vocab: [
    V('行く', '行く', 'to go'),
    V('行った', '行く', 'went'),
    V('来る', '来る', 'to come'),
    V('来た', '来る', 'came'),
    V('する', 'する', 'to do'),
    V('した', 'する', 'did'),
    V('ある', 'ある', 'to exist (inanimate)'),
    V('ない', 'ある', 'not to exist'),
    V('いる', 'いる', 'to exist (animate)'),
    V('いない', 'いる', 'not to exist (animate)'),
    V('食べる', '食べる', 'to eat'),
    V('食べた', '食べる', 'ate'),
    V('飲む', '飲む', 'to drink'),
    V('飲んだ', '飲む', 'drank'),
    V('着る', '着る', 'to wear'),
    V('見る', '見る', 'to see'),
    V('見た', '見る', 'saw'),
    V('聞く', '聞く', 'to hear'),
    V('聞いた', '聞く', 'heard'),
    V('言う', '言う', 'to say'),
    V('言った', '言う', 'said'),
    V('書く', '書く', 'to write'),
    V('書いた', '書く', 'wrote'),
    V('読む', '読む', 'to read'),
    V('分かる', '分かる', 'to understand'),
    V('知る', '知る', 'to know'),
    V('思う', '思う', 'to think'),
    V('持つ', '持つ', 'to have'),
    V('寝る', '寝る', 'to sleep'),
    V('歩く', '歩く', 'to walk'),
    V('走る', '走る', 'to run'),
    V('泳ぐ', '泳ぐ', 'to swim'),
    V('話す', '話す', 'to speak'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{する} and {来る} are the only irregular verbs: {する}, {しない}, {した}, {して}; {来る}, {来ない}, {来た}, {来て}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ある} is for inanimate things, {いる} for animate ones. The negative of {ある} is {ない}, not {あるない}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The past of {行く} is {行った}, not {行いた}. The te-form is {行って}, not {行いて}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Japanese puts the verb at the end of the sentence: {世界を愛した}, "loved the world". The object comes before the verb.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 uses {あった} (past of {ある}) and John 3:16 uses {愛した} (past of {愛する}): the Word already was, and God loved.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {ある} with no passive'),
      text: T(
        '{ある} is a verb of state, not of action. It has no passive and no causative. Where Portuguese says "was made", Japanese says {作られた} (passive of {作る}), not {ある}.',
      ),
    },
    {
      label: T('The {いる} that is not "to be"'),
      text: T(
        '{いる} is "to exist" for animate things, not "to be". Where Portuguese says "he is a doctor", Japanese says {医者だ}, with the copula {だ}, not {いる}.',
      ),
    },
  ],
  examples: [
    {
      text: '初めに言があった',
      gloss: T('John 1:1 — {あった} is the past of {ある}: there was the Word.'),
    },
    {
      text: '神は世界を愛した',
      gloss: T('John 3:16 — {愛した} is the past of {愛する}: God loved the world.'),
    },
    { text: '本がある', gloss: T('{ある} with an inanimate: there is a book.') },
    { text: '人がいる', gloss: T('{いる} with an animate: there is a person.') },
    { text: '本がない', gloss: T('negative of {ある}: there is no book.') },
    { text: '行った', gloss: T('past of {行く}: went.') },
    { text: '来た', gloss: T('past of {来る}: came.') },
    { text: '食べた', gloss: T('past of {食べる}: ate.') },
    { text: '黙れ', gloss: T('Mark 4:39 — imperative of {黙る}: be silent.') },
  ],
  tables: [
    {
      caption: T('Present and past of the essentials'),
      head: [T('Verb'), T('Class'), T('Present'), T('Past'), T('Negative')],
      rows: [
        [T('{行く}'), T('godan'), T('{行く}'), T('{行った}'), T('{行かない}')],
        [T('{来る}'), T('irregular'), T('{来る}'), T('{来た}'), T('{来ない}')],
        [T('{する}'), T('irregular'), T('{する}'), T('{した}'), T('{しない}')],
        [T('{食べる}'), T('ichidan'), T('{食べる}'), T('{食べた}'), T('{食べない}')],
        [T('{飲む}'), T('godan'), T('{飲む}'), T('{飲んだ}'), T('{飲まない}')],
        [T('{着る}'), T('ichidan'), T('{着る}'), T('{着た}'), T('{着ない}')],
        [T('{見る}'), T('ichidan'), T('{見る}'), T('{見た}'), T('{見ない}')],
        [T('{聞く}'), T('godan'), T('{聞く}'), T('{聞いた}'), T('{聞かない}')],
        [T('{言う}'), T('godan'), T('{言う}'), T('{言った}'), T('{言わない}')],
        [T('{書く}'), T('godan'), T('{書く}'), T('{書いた}'), T('{書かない}')],
        [T('{読む}'), T('godan'), T('{読む}'), T('{読んだ}'), T('{読まない}')],
        [T('{持つ}'), T('godan'), T('{持つ}'), T('{持った}'), T('{持たない}')],
        [T('{寝る}'), T('ichidan'), T('{寝る}'), T('{寝た}'), T('{寝ない}')],
        [T('{歩く}'), T('godan'), T('{歩く}'), T('{歩いた}'), T('{歩かない}')],
        [T('{走る}'), T('godan'), T('{走る}'), T('{走った}'), T('{走らない}')],
        [T('{泳ぐ}'), T('godan'), T('{泳ぐ}'), T('{泳いだ}'), T('{泳がない}')],
        [T('{話す}'), T('godan'), T('{話す}'), T('{話した}'), T('{話さない}')],
      ],
    },
    {
      caption: T('ある and いる: the choice between animate and inanimate'),
      head: [T('Verb'), T('Use'), T('Present'), T('Past'), T('Negative')],
      rows: [
        [T('{ある}'), T('inanimate'), T('{ある}'), T('{あった}'), T('{ない}')],
        [T('{いる}'), T('animate'), T('{いる}'), T('{いた}'), T('{いない}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {初めに言があった}, what is the tense of {あった}?'),
    options: [T('Present'), T('Past'), T('Future'), T('Te-form')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "神は世界を___" with the past of {愛する} for "loved".'),
      answer: '愛した',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its past.'),
      pairs: [
        { a: T('{行く}'), b: T('{行った}') },
        { a: T('{来る}'), b: T('{来た}') },
        { a: T('{食べる}'), b: T('{食べた}') },
        { a: T('{する}'), b: T('{した}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the negative of {ある}?'),
      options: [T('{あるない}'), T('{ない}'), T('{あらない}'), T('{なかった}')],
      answer: 1,
    },
  ],
};
