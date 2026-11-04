import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Nouns: gender and number'),
  subtitle: T('כָּל־דָּבָר — only masculine or feminine, and three numbers'),
  section: T('Nouns, adjectives and pronouns'),
  body: C(`## There is no neuter

Every Hebrew noun is **masculine** or **feminine**, without exception (Gesenius §97). This has nothing to do with sex or nature: {מֶלֶךְ} «king» is masculine and {מַלְכָּה} «queen» is feminine; {חֶסֶד} «steadfast love» is masculine although it ends in {-ֶת}, and {אוֹר} «light» is masculine although it is abstract. Gender decides agreement, not translation — and Portuguese or Spanish forces you to invent a gender Hebrew does not have.

So when Hebrew says {רוּחַ} «spirit» in the masculine, it asserts nothing about the Spirit: it simply agrees with the adjective or verb that accompanies it.

## How to recognize the feminine

Most feminines end in {-ָה} (qamats + he): {מַלְכָּה} «queen», {אִשָּׁה} «woman», {לָשׁוֹן} «tongue», {תּוֹרָה} «instruction», {רוּחַ} «wind/breath» (shortened form).

A small group ends in {-ֶת} (segol + tav), such as {בַּת} «daughter». But the ending is a clue, not proof: {מֶלֶךְ} «king» also ends in {-ֶת} and is masculine. Practical tip: if you are unsure of the gender, look at the plural — the masculine plural is {-ִים} and the feminine is {-וֹת}.

## The plural

The masculine plural adds {-ִים}: {סוּס} → {סוּסִים} «horses», {יוֹם} → {יָמִים} «days», {מֶלֶךְ} → {מְלָכִים} «kings». The feminine plural adds {-וֹת}: {מַלְכָּה} → {מְלָכוֹת} «queens», {בַּת} → {בָּנוֹת} «daughters».

Segolate nouns (like {מֶלֶךְ} «king») have a plural that seems to come from another word: {מְלָכִים} carries an {ָ} the singular lacks. It is a fossil of an old base; practically, learn the whole pair.

## Irregular plurals

Some plurals leave the pattern and must be memorized: {אִשָּׁה} → {נָשִׁים} «women», {בַּיִת} → {בָּתִּים} «houses», {עִיר} → {עָרִים} «cities», {אָדָם} → {אֲנָשִׁים} «people», {בֵּן} → {בָּנִים} «sons». In all of them the {-ִים} pattern survives: what changes is the base.

## The dual

The dual is the most archaic feature of the language: {-ַיִם} (yim) marks exactly two: {יָדַיִם} «(two) hands», {עֵינַיִם} «eyes», {רַגְלַיִם} «feet», {שָׁמַיִם} «heavens», {מַיִם} «waters».

The Bible uses the dual constantly: {אֵחֶיךָ} «your brother» can mean «your two brothers», and {שְׁנֵי} «two» in {שְׁנֵי אֲנָשִׁים} is literally «two persons». Duals hardly need a plural in practice: {שָׁמַיִם} already does the job of the plural of {שָׁמָה} «heaven», and {שָׁמֵי} is the form you meet constantly in phrases like {שָׁמֵי אֲדָם} «heavens of earth».

Words to keep: {יוֹם} «day», {אוֹר} «light», {אֶרֶץ} «earth» — all three return in Genesis 1 and Psalm 19.`),
  vocab: [
    V('סוּסִים', 'סוּס', 'horses'),
    V('יָמִים', 'יוֹם', 'days'),
    V('מְלָכִים', 'מֶלֶךְ', 'kings'),
    V('מְלָכוֹת', 'מַלְכָּה', 'queens'),
    V('נָשִׁים', 'אִשָּׁה', 'women'),
    V('בָּנוֹת', 'בַּת', 'daughters'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'heavens'),
    V('מַיִם', 'מַיִם', 'waters'),
    V('עֵינַיִם', 'עַיִן', 'eyes (dual)'),
    V('רַגְלַיִם', 'רֶגֶל', 'feet (dual)'),
    V('חֶסֶד', 'חֶסֶד', 'steadfast love (masc.)'),
    V('מַלְכָּה', 'מַלְכָּה', 'queen'),
    V('אִשָּׁה', 'אִשָּׁה', 'woman'),
    V('בַּת', 'בַּת', 'daughter'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of «יוֹם» (day, masculine)?'),
    options: [T('יוֹמוֹת'), T('יָמִים'), T('יוֹמַיִם'), T('יָמָה')],
    answer: 1,
    hint: T('{יוֹם} is masculine, so the plural takes {-ִים}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which of these nouns is FEMININE?'),
      options: [T('מַלְכָּה'), T('מֶלֶךְ'), T('דָּבָר'), T('חֶסֶד')],
      answer: 0,
      hint: T('Only one of them has a plural in {-וֹת} ({מְלָכוֹת}).'),
    },
    {
      kind: 'fill',
      prompt: T('Write the feminine plural of «בַּת» (daughter).'),
      answer: 'בָּנוֹת',
      hint: T('The feminine plural adds {-וֹת}: {בַּת} → {בָּנוֹת}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the noun to its plural.'),
      pairs: [
        { a: '{אִשָּׁה}', b: '{נָשִׁים}' },
        { a: '{בַּיִת}', b: '{בָּתִּים}' },
        { a: '{עִיר}', b: '{עָרִים}' },
        { a: '{מֶלֶךְ}', b: '{מְלָכִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What does the form {מַיִם} «waters» demonstrate?'),
      options: [
        T('That Hebrew has a special plural for liquids'),
        T('That {-ַיִם} is the dual, used collectively'),
        T('That the word is feminine because it ends in {-ִים}'),
        T('That it is a numeral, not a noun'),
      ],
      answer: 1,
      hint: T('Rule §4: {-ַיִם} marks two — used here for a whole set.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every Hebrew noun is masculine or feminine: there is no neuter, and gender never marks sex or nature.',
      ),
    },
    {
      n: '2',
      text: T(
        'The ending does not decide gender: {-ֶת} appears in {מֶלֶךְ} (masc.) and {-ַיִם} in {מַיִם} (fem.). When in doubt, check the plural.',
      ),
    },
    {
      n: '3',
      text: T('Masculine plural {-ִים}, feminine plural {-וֹת}: {מֶלֶךְ} → {מְלָכִים}, {מַלְכָּה} → {מְלָכוֹת}.'),
    },
    {
      n: '4',
      text: T(
        'The dual {-ַיִם} marks exactly two: {עֵינַיִם} «eyes», {רַגְלַיִם} «feet», {שָׁמַיִם} «heavens», {מַיִם} «waters».',
      ),
    },
    {
      n: '5',
      text: T(
        'Number agrees with the adjective and the verb: {מְלָכִים טוֹבִים} «good kings» (masc. pl.), {מְלָכוֹת טוֹבוֹת} «good queens» (fem. pl.).',
      ),
    },
  ],
  notes: [
    {
      label: T('Trap:'),
      text: T(
        'Many beginners render {מַלְכָּה} as «king» when the context is gender-neutral. Remember that {מֶלֶךְ}/{מַלְכָּה} is the king/queen pair and {אִישׁ}/{אִשָּׁה} is the man/woman pair: two independent pairs, not synonyms. The plural {אֲנָשִׁים} can be rendered «men» or «people» depending on the verb.',
      ),
    },
    {
      label: T('For the next chapter:'),
      text: T(
        "Knowing a noun's gender is what lets the adjective agree. In chapter 4 you will see that {טוֹבָה} agrees with {מַלְכָּה} but not with {מֶלֶךְ} — and that the article {הַ} is repeated in both when the noun is determinate.",
      ),
    },
  ],
  examples: [
    { text: '{מֶלֶךְ}', gloss: T('king (masc.) → {מַלְכָּה} queen (fem.)') },
    { text: '{סוּסִים}', gloss: T('horses (masc. pl. of {סוּס})') },
    { text: '{יָמִים}', gloss: T('days (masc. pl. of {יוֹם})') },
    { text: '{מְלָכוֹת}', gloss: T('queens (fem. pl. of {מַלְכָּה})') },
    { text: '{נָשִׁים}', gloss: T('women — irregular plural of {אִשָּׁה}') },
    { text: '{בָּנוֹת}', gloss: T('daughters — {ו} closes the last syllable of {בַּת}') },
    { text: '{שָׁמַיִם}', gloss: T('heavens — dual, also used as plural') },
    { text: '{מַיִם}', gloss: T('waters — collective dual, with a {y}-like sound') },
    { text: '{רַגְלַיִם}', gloss: T('feet (dual) — returns in Ps 110:1 ({לְרַגְלֶיךָ})') },
    { text: '{חֶסֶד}', gloss: T('steadfast love — ends in {-ֶת} but is MASCULINE') },
    { text: '{אֲנָשִׁים}', gloss: T('people — plural of {אָדָם}, with a proper name') },
  ],
  tables: [
    {
      caption: T('Table 1 — How to find the gender'),
      head: [T('Clue'), T('Masculine'), T('Feminine')],
      rows: [
        [T('Ending'), '{מֶלֶךְ} {סוּס} {יוֹם} {דָּבָר}', '{מַלְכָּה} {אִשָּׁה} {לָשׁוֹן} {תּוֹרָה}'],
        [T('Plural'), '{-ִים}', '{-וֹת}'],
        [T('Article'), '{הַמֶּלֶךְ} {הַיּוֹם}', '{הַמַּלְכָּה} {הַתּוֹרָה}'],
        [T('Warning'), '{חֶסֶד} (termina em -ֶת!)', '{שָׁמַיִם} (vogais de água!)'],
      ],
    },
    {
      caption: T('Table 2 — Number: singular, dual and plural'),
      head: [T('Lemma'), T('Singular'), T('Dual'), T('Plural')],
      rows: [
        ['{מֶלֶךְ}', '{מֶלֶךְ}', '{שְׁנֵי מְלָכִים}', '{מְלָכִים}'],
        ['{סוּס}', '{סוּס}', '{סֻסַּיִם}', '{סוּסִים}'],
        ['{אִשָּׁה}', '{אִשָּׁה}', '{שְׁתֵּי נָשִׁים}', '{נָשִׁים}'],
        ['{שָׁמַיִם}', '{שָׁמַיִם}', '—', '—'],
        ['{מַיִם}', '{מַיִם}', '—', '—'],
      ],
    },
    {
      caption: T('Table 3 — Irregular plurals you will meet again'),
      head: [T('Singular'), T('Gloss'), T('Plural'), T('Gloss')],
      rows: [
        ['{אִשָּׁה}', T('woman'), '{נָשִׁים}', T('women')],
        ['{בַּיִת}', T('house'), '{בָּתִּים}', T('houses')],
        ['{עִיר}', T('city'), '{עָרִים}', T('cities')],
        ['{אָדָם}', T('human being'), '{אֲנָשִׁים}', T('people')],
        ['{בֵּן}', T('son'), '{בָּנִים}', T('sons')],
        ['{דֶּרֶךְ}', T('way'), '{דְּרָכִים}', T('ways')],
      ],
    },
  ],
};
