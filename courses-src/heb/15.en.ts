import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Participles'),
  subtitle: T('כֹּתֵב, כָּתוּב — who writes, what is written'),
  section: T('Non-finite forms and gutturals'),
  body: C(`## Two voices, two states

The Hebrew participle has two main shapes (Gesenius §37):

**Active** ({קֹטֵל}, {כּוֹתֵב}): it describes action in progress. {כֹּתֵב} «writing» · {שֹׁמֵר} «keeping» · {אֹהֵב} «loving» · {יֹשֵׁב} «dwelling» · {בֹּרֵחַ} «fleeing» (with furtive patah!).

**Stative/passive** ({קָטוּל}, {כָּתוּב}): it describes a resulting state. {כָּתוּב} «written» · {שָׁבוּר} «broken» · {בָּרוּךְ} «blessed» · {אָרוּר} «cursed».

The difference shows in practice: {הַבַּיִת כָּתוּב} is «the house **is** written», {הַבַּיִת כּוֹתֵב} is «the house **is being** written».

## The participle as a noun

With the article {הַ}, the participle becomes a group name: {הַשֹּׁפְטִים} «the judges» · {הַכֹּהֲנִים} «the priests» · {הַנְּבִיאִים} «the prophets». They are the three leaderships of Israel.

With the prepositions {ב} and {ל}, the participle becomes **transitive** and means «the one who is the object of…»: {בָּרוּךְ} + {ב} = «blessed in» (or «through whom one is blessed»); {שֹׁמֵר} + {ל} = «guarded by» — the same sense as the piel {שֹׁמֵר}.

Without article and without preposition, the participle works as a noun modifier: {בֵּית חֶסֶד} «house of {חֶסֶד}».

## Participle = present without a pronoun

In Hebrew, a participle with a pronoun is the present: {אֲנִי כֹּתֵב} «I am writing». But unlike Greek, Hebrew prefers the **wayyiqtol** for narrative past and the **participle** for state: {הָאָרֶץ טוֹבָה} «the land is good» reads naturally; {הָאָרֶץ הָיְתָה טוֹבָה} sounds forced.

## Aramaic shapes

Daniel, Ezra and 2 Chronicles use **Aramaic**, Hebrew's sister language, and there the participle is the main verb: {מַלְכָּה} «he reigns» (3rd m. sg.), {מַלְכְּתָה} «she reigns», {קָדוּשׁ} «holy» as an adjective. That is why the Aramaic participle {שָׁמַיִן} «exalted» (Dan 2:34) literally means «the one who was lifted up» — a participle, not a past tense.

The Hebrew participle keeps traces of that origin: {הִנְנִי} «here I am» is {הִנֵּה} «behold» + {־ִי}; and the pronoun {הוֹא} «he» comes from an Aramaic participle meaning «the one who is».

## Participles with suffixes

Participles take pronominal suffixes too (ch. 8): {בָּרוּךְ אַתָּה} «blessed are you» (Ps 103:1), {שָׁמוּרִי} «guard me». In {עִם־יְהוָה} the noun {עִם} precedes the Aramaic participle {יְהוָה} «the one who is with»: literally «the one who is with YHWH» = «God's companion».

## Two blessings to memorize

{bְּרָכוּ יְהוָה} «blessed be the LORD» (Ps 103:1) and {בָּרוּךְ אַתָּה יְהוָה} «blessed are you, LORD». All Jewish liturgy starts this way — with a passive participle. The starting point of Hebrew worship is a state, not an action.`),
  vocab: [
    V('כֹּתֵב', 'כתב', 'writing'),
    V('כָּתוּב', 'כתב', 'written'),
    V('אֹהֵב', 'אהב', 'loving'),
    V('בָּרוּךְ', 'ברך', 'blessed'),
    V('אָרוּר', 'אָרור', 'cursed'),
    V('שֹׁמֵר', 'שׁמר', 'keeping'),
    V('הַנְּבִיאִים', 'נָבִיא', 'the prophets'),
    V('הִנְנִי', 'הִנֵּה', 'here I am'),
    V('מַלְכָּה', 'מלך', 'he reigns (Aramaic part.)'),
    V('בּוֹרֵחַ', 'ברח', 'fleeing'),
    V('שֹׁמֵעַ', 'שׁמע', 'hearing'),
    V('קֹרֵא', 'קרא', 'calling, reading'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete the blessing: «___ אַתָּה יְהוָה» (blessed are you).'),
    answer: 'בָּרוּךְ',
    hint: T('Passive participle of «to bless», from the root {ברך}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which is the stative (state) participle of {כתב}?'),
      options: [T('כֹּתֵב'), T('כָּתוּב'), T('יִכְתֹּב'), T('לִכְתֹּב')],
      answer: 1,
      hint: T('The stative uses the {קָטוּל} pattern: {ָ} in the root and {וּ} in the suffix.'),
    },
    {
      kind: 'match',
      prompt: T('Match the participle to its type.'),
      pairs: [
        { a: '{שֹׁמֵר}', b: T('active') },
        { a: '{שָׁמוּר}', b: T('stative') },
        { a: '{בֹּרֵךְ}', b: T('active') },
        { a: '{בָּרוּךְ}', b: T('stative') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {הַנְּבִיאִים} «the prophets», what did the noun do?'),
      options: [
        T('It lost the article'),
        T('It took the article and became a group name'),
        T('It entered the construct'),
        T('It became a verb'),
      ],
      answer: 1,
      hint: T('Rule §2: {הַ} + participle = group noun.'),
    },
    {
      kind: 'choose',
      prompt: T('In {נֶאֱמַנְתָּה לְיוֹסֵף}, what does {ל} do to the participle {נֶאֱמַנְתָּה}?'),
      options: [
        T('It makes it transitive: «entrusted to»'),
        T('It marks the plural'),
        T('It indicates future tense'),
        T('It replaces the article'),
      ],
      answer: 0,
      hint: T('Rule §3: {ל} + participle = «guarded by», like the piel.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The active participle ({כּוֹתֵב}) marks action in progress; the stative participle ({כָּתוּב}) marks a resulting state.',
      ),
    },
    { n: '2', text: T('With {הַ} the participle becomes a group noun: {הַשֹּׁפְטִים} «the judges».') },
    {
      n: '3',
      text: T(
        'With {ב} or {ל} the participle is transitive: {שֹׁמֵר} + {ל} = «guarded by», like the piel {שֹׁמֵר}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Participle + pronoun is the present ({אֲנִי כֹּתֵב}); for state Hebrew prefers the participle, not a verb ({הָאָרֶץ טוֹבָה}).',
      ),
    },
    {
      n: '5',
      text: T(
        'In Aramaic (Daniel, Ezra, 2 Chr.) the participle is the main verb: {מַלְכָּה} «he reigns».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "The choice between participle and verb changes the meaning of a whole clause. In {הָאָרֶץ טוֹבָה} «the land is good», the participle describes a permanent state; in {הָאָרֶץ הָיְתָה טוֹבָה} the verb describes an event. In Ezekiel 33:32 God complains that the people «read» ({קֹרֵא}) and «love to hear» ({שֹׁמֵעַ}) the prophet's words — and it is precisely a participle that describes their habit.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The two sister languages split the tasks in the Bible: Hebrew tells narratives with verbs (wayyiqtol), Aramaic tells them with participles. Daniel switches language according to his interlocutor — Aramaic with the king, Hebrew with the Jews. It is a dialogue written inside the text itself, and only Daniel and Ezra preserve that conversation.',
      ),
    },
  ],
  examples: [
    { text: '{כֹּתֵב}', gloss: T('writing — active participle (root {כתב})') },
    { text: '{כָּתוּב}', gloss: T('written — stative participle') },
    { text: '{בָּרוּךְ}', gloss: T('blessed — stative of {ברך}') },
    { text: '{אָרוּר}', gloss: T('cursed — the opposite of {בָּרוּךְ}') },
    { text: '{אֹהֵב}', gloss: T('loving — active participle') },
    { text: '{הַנְּבִיאִים}', gloss: T('the prophets — {נָבִיא} + {הַ} (substantivized adjective)') },
    { text: '{הִנְנִי}', gloss: T('here I am — {הִנֵּה} + {־ִי}') },
    { text: '{בָּרוּךְ אַתָּה יְהוָה}', gloss: T('blessed are you, LORD (Ps 103:1)') },
    { text: '{מַלְכָּה}', gloss: T('he reigns — Aramaic participle (Dan 2:37)') },
    { text: '{שָׁמַיִן}', gloss: T('exalted — Aramaic: «the one lifted up»') },
    { text: '{עִם־יְהוָה}', gloss: T("God's companion — {עִם} + Aramaic participle") },
    { text: '{בֹּרֵחַ}', gloss: T('fleeing — active with furtive patah') },
  ],
  tables: [
    {
      caption: T('Table 1 — Active participle and stative participle'),
      head: [T('Root'), T('Active (action)'), T('Stative (state)'), T('Gloss')],
      rows: [
        ['{כתב}', '{כֹּתֵב}', '{כָּתוּב}', T('writing / written')],
        ['{שׁמר}', '{שֹׁמֵר}', '{שָׁמוּר}', T('keeping / guarded')],
        ['{אהב}', '{אֹהֵב}', '{אָהוּב}', T('loving / beloved')],
        ['{ישׁב}', '{יֹשֵׁב}', '{יָשֵׁב}', T('dwelling / inhabited')],
        ['{ברך}', '{בֹּרֵךְ}', '{בָּרוּךְ}', T('blessing / blessed')],
        ['{רחץ}', '{רֹחֵץ}', '{רָחוּץ}', T('washing / washed')],
        ['{שמם}', '{שֹׁמֵעַ}', '{שָׁמוּעַ}', T('hearing / heard')],
      ],
    },
    {
      caption: T('Table 2 — The participle with the article and with a preposition'),
      head: [T('Construction'), T('Example'), T('Gloss')],
      rows: [
        [T('Article {הַ} = group'), '{הַנְּבִיאִים}', T('the prophets')],
        [T('No article = modifier'), '{בֵּית חֶסֶד}', T('house of steadfast love')],
        [T('{ב} = «blessed in»'), '{בָּרוּךְ בַּמּוֹסֵד}', T('blessed in the counsel')],
        [T('{ל} = «guarded by»'), '{נֶאֱמַנְתָּה לְיוֹסֵף}', T('entrusted to Joseph')],
        [T('Pronoun + participle = present'), '{אֲנִי כֹּתֵב}', T('I am writing')],
      ],
    },
  ],
};
