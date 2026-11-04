import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The definite article'),
  subtitle: T('הַ — the prefix that marks every determinate thing'),
  section: T('Alphabet and the definite article'),
  body: C(`## What the article is for

Hebrew has a single article morpheme — the particle {הַ} — and it is prefixed, not a standalone word as in Portuguese or English. There is no indefinite article: «a horse» is simply {סוּס} (the same shape as «one horse» in an indefinite context), while «the horse» requires {הַסּוּס}. The upshot is that Hebrew is more precise: whatever lacks {הַ} is exactly what the author does not want to determine.

The definite noun takes the article most of the time, but an adjective usually repeats it when its noun carries one (ch. 4). So when you read Hebrew, the {הַ} is your signpost: every {הַ} points at something the author treats as individual and known.

## The standard shape: {הַ} + strong dagesh

The rule is mechanical: the article {הַ} with {ַ} (patah) triggers a strong dagesh in the following consonant. The dot inside the {ב} of {הַבַּיִת} is that dagesh — and the same holds in {הַמֶּלֶךְ}, {הַיּוֹם}, {הַסּוּס}. Memorize the pair as one block: {הַ} + doubled consonant.

## When the article lengthens: {הָ}

After four of the five gutturals — {א} {ח} {ע} {ה} — and also after {ר}, the article loses its short vowel and takes {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָהָר}, {הָרָאשִׁ֑י}. The reason is phonetic: those consonants do not tolerate strong dagesh well, and [a] is preferred.

An important exception: before a word-initial {ה}, the {הַ} normally drops entirely: {הַהָר} → {הָהָר}, {הַהֵם} → {הֵם} «the man». Spotting that loss keeps you from reading two letters where there is one.

## The article in the construct state

In the construct state (ch. 7) the article also disappears: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}, not {הַמֶּלֶךְ־יִשְׂרָאֵל}. The {הַ} returns only when the noun goes back to the absolute state: {הַבַּיִת} «the house» → {בֵּית־לֶחֶם} «house of bread» → {הַבֵּית־לֶחֶם} «the house of bread» again.

## What the article does (and does not do)

The {הַ} does **not** mark case: {הַמֶּלֶךְ} is nominative, {לַמֶּלֶךְ} is «to the king». It also does **not** mark plural: {הַסּוּסִים} is «the horses» with the same {הַ} as the singular. And it is never translated on its own: in {הַבַּיִת} it is the preposition {בְּ} that carries the case.

Words to fix: {יוֹם} «day» → {הַיּוֹם} «the day» · {מֶלֶךְ} «king» → {הַמֶּלֶךְ} «the king» · {אֶרֶץ} «earth» → {הָאָרֶץ} «the land».`),
  vocab: [
    V('הַ', 'הַ', 'the (def. art.)'),
    V('הָ', 'הַ', 'the (long form, guttural)'),
    V('סוּס', 'סוּס', 'horse'),
    V('הַסּוּס', 'סוּס', 'the horse'),
    V('בַּיִת', 'בַּיִת', 'house'),
    V('הַבַּיִת', 'בַּיִת', 'the house'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'king'),
    V('הַמֶּלֶךְ', 'מֶלֶךְ', 'the king'),
    V('הָאָרֶץ', 'אֶרֶץ', 'the land'),
    V('הֵם', 'הֵם', 'the man (article elided)'),
    V('יוֹם', 'יוֹם', 'day'),
    V('הַיּוֹם', 'יוֹם', 'the day'),
    V('כָּל', 'כָּל', 'all, every'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say «the king» in Hebrew?'),
    options: [T('מֶלֶךְ'), T('הַמֶּלֶךְ'), T('הָמֶלֶךְ'), T('מַלְכָּה')],
    answer: 1,
    hint: T('{מֶלֶךְ} starts with {מ}: the article takes {הַ} and the {מ} takes a strong dagesh.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the correct definite article (long form) for {אָרֶץ} «land».'),
      answer: 'הָאָרֶץ',
      hint: T(
        'The word begins with the guttural {א}: the article takes {ָ} (qamats) and no dagesh.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('In «{הֵם}» (the man), what happened to the {הַ}?'),
      options: [
        T('It changed {ַ} for {ָ}'),
        T('It dropped before the initial {ה}'),
        T('It became {ל} (a preposition)'),
        T('It swapped dagesh for sheva'),
      ],
      answer: 1,
      hint: T('Rule §4: two {ה} in a row are too much for Hebrew.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to what it marks.'),
      pairs: [
        { a: '{הָאָרֶץ}', b: T('long article (guttural)') },
        { a: '{הַמֶּלֶךְ}', b: T('short article + dagesh') },
        { a: '{הֵם}', b: T('elided article') },
        { a: '{מֶלֶךְ־יִשְׂרָאֵל}', b: T('construct without article') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of the following cannot take the article {הַ} with a strong dagesh?'),
      options: [T('{הַמֶּלֶךְ}'), T('{הַסּוּס}'), T('{הָאָרֶץ}'), T('{הַיּוֹם}')],
      answer: 2,
      hint: T('After gutturals the article changes its vowel: {הָ}, not {הַ}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Hebrew article is {הַ} (patah) and sticks to the word; there is no indefinite article and no contraction with prepositions: {בַּיִת} and {הַבַּיִת} mean the same thing.',
      ),
    },
    {
      n: '2',
      text: T(
        'After {א} {ח} {ע} {ה} and {ר} the article takes {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָרָאשִׁ֑י}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The article marks neither case nor number: {הַמֶּלֶךְ} and {הַמֶּלֶךְ} are identical, and the preposition is what says the case ({לַמֶּלֶךְ} «to the king»).',
      ),
    },
    {
      n: '4',
      text: T(
        'Before word-initial {ה} and in the construct state the {הַ} drops out: {הַהֵם} → {הֵם}, {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}.',
      ),
    },
    {
      n: '5',
      text: T(
        'When a preposition governs the noun, it may itself trigger the strong dagesh: {כַּל־הָעָם} «all the people» = {כָּל} + {הָעָם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'The divine name {אֱלֹהִים} appears sometimes as {הָאֱלֹהִים} and sometimes with no article at all. The absence of the article usually suggests nature, origin or deity: in Gen 1:1, {בָּרָא} «created» requires {אֱלֹהִים} without the article, because God is being treated as a category. The choice is theological, not grammatical — but you learn it by reading.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        "The word {בֵּית} «house» almost never takes the article in the Bible: Portuguese and Spanish translations write «the house», but Hebrew writes only {בֵּית}. It is the best proof that the {הַ} does not always survive translation — and that this course's grammar widget counts words, not translations.",
      ),
    },
  ],
  examples: [
    { text: '{הַ}', gloss: T('the (definite article, m./f.)') },
    { text: '{הָ}', gloss: T('the — long form before a guttural or {ר}') },
    { text: '{הַסּוּס}', gloss: T('the horse ({סוּס} + strong dagesh)') },
    { text: '{הַבַּיִת}', gloss: T('the house ({ב} with strong dagesh)') },
    { text: '{הַמֶּלֶךְ}', gloss: T('the king — {הַ} + strong {מ} + {ֶ}') },
    { text: '{הַיּוֹם}', gloss: T('the day — dagesh may drop under {ו}') },
    { text: '{הָאָרֶץ}', gloss: T('the land — {הָ} because of the guttural {א}') },
    { text: '{הֵם}', gloss: T('the man — {הַהֵם} with the {הַ} elided') },
    { text: '{כַּל־הָעָם}', gloss: T('all the people — {כָּל} «all» + {הָעָם}') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('the house of bread — article on the construct (ch. 7)') },
  ],
  tables: [
    {
      caption: T("Table 1 — The article according to the noun's first letter"),
      head: [T('Initial'), T('Form'), T('Example'), T('Gloss')],
      rows: [
        [T('B, D, G, K, L, M, N, P, S, T, Z'), '{הַ} + dagesh', '{הַמֶּלֶךְ}', T('the king')],
        [T('Gutturals {א} {ח} {ע}'), '{הָ}', '{הָאָרֶץ}', T('the land')],
        [T('Guttural {ה}'), T('the {הַ} drops'), '{הֵם}', T('the man')],
        [T('{ר}'), '{הָ} (às vezes {הַ})', '{הָרָאשִׁי}', T('the first')],
        [T('Construct noun'), T('no article'), '{מֶלֶךְ־יִשְׂרָאֵל}', T('the king of Israel')],
      ],
    },
    {
      caption: T('Table 2 — Article present and absent: what changes in meaning'),
      head: [T('Without article (indefinite)'), T('With article (definite)'), T('Reading')],
      rows: [
        ['{סוּס}', '{הַסּוּס}', T('a horse / the horse')],
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('a king / the king')],
        ['{יוֹם}', '{הַיּוֹם}', T('a day / the day')],
        ['{דָּבָר}', '{הַדָּבָר}', T('a word / the word')],
        [T('Class / category'), T('Class / category'), T('Humanity / creation')],
      ],
    },
  ],
};
