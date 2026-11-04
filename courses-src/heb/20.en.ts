import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Questions and relatives'),
  subtitle: T('מִי, מָה, אֲשֶׁר — who, what, which'),
  section: T('Prepositions, comparison, questions and time'),
  body: C(`## The six questions

Hebrew has a compact questionnaire, all in short words:

{מִי} «who?» — {מָה} «what?» — {אֵיךְ} «how?» — {לָמָּה} «why?» — {מָתַי} «when?» — {אַיֵּה} «where?»

Note the two shapes of «where»: {אַיֵּה} for **people** and {אַיכָ} (or {אֵיכָ}) for **things**. It is the same logic as chapter 16: the question fits its referent. In Genesis 4:9, Cain asks {אַיֵּה הֶבֶל אָחִיךָ} «where is Abel your brother?» — {הֶבֶל} is a person, {אַיֵּה} is the right shape; if it were a sheep, the verb would be {אַיכָ}.

There is also {מַדּוּעַ} «for what reason?», the longest and rarest shape, and indirect questions with {אִם}: «is there a shepherd?» (Gen 11:7).

## {מָה} becomes {מֶה}

A writing detail: before a guttural, {מָה} swaps qamats for segol. In Genesis 20:9, Abimelech asks {מֶה־עָשִׂיתָ} «what have you done?» and {מֶה־חָטָאתִי} «what have I offended you against?». It is the guttural {ע} right after {מֶה} that triggers the vowel change.

## The relative {אֲשֶׁר}

The commonest relative pronoun is {אֲשֶׁר} «that, which, who» — and it is **invariable**: it inflects for neither gender nor number, and it is rendered as «who» or «which» according to the target language. In Psalm 1:1, {אַשְׁרֵי־הָאִישׁ אֲשֶׁר} is literally «blessed is the man who».

There is a short poetic form, {שֶׁ}, found in the poetry: «whose dwelling is the heaven» (Ps 68:7). And, rarely, {זַ} with the sense of «whose».

A construction detail: the relative may be followed by a preposition — {אֲשֶׁר בּוֹ} «in which», {אֲשֶׁר לּוֹ} «which has» — and that is how Hebrew renders the genitive of other languages. In Psalm 1:1, {בַּעֲצַת} «in the counsel» is {ב} + {עֲצַת}, with the {ע} in the construct.

## Yes-no questions

Two particles open a question that **expects a positive answer**: {הֲלוֹא} «has it not…?» and {הֲ} at the start of the clause. In Isaiah 40:28, {הֲלוֹא־יָדַעְתָּ אִם־לֹא שָׁמָעְתָּ} «Have you not known? Have you not heard?» — the expected answer is «yes», and the whole verse is a request for recognition.

In Ezekiel, {הֲתַפְלָא} «is it not astonishing?» expects a **negative** answer: «is it not astonishing?». A context of negation reverses the expectation.

Beware {ה} inside a discourse: {ה} is also the particle of honesty, which introduces the human voice in the middle of God's word — it marks the distance between what God says and what the prophet repeats.

## {מָה} + adjective = «how!»

The noun {מָה} «what», bound by maqaf to an adjective or adverb, becomes an exclamation of degree: {מַה־טֹּבוּ} «how goodly!» (Num 24:5, the tents of Jacob) · {מַה־נִפְלָא} «how wonderful!» (Ps 118:23) · {מַה־טּוֹבָה} «how good!» (feminine, with {ה}).

With a verb, {מָה} + verb = «how?» or «what?» — in Jeremiah 13:16 the prophet asks the vessel: {מַה־תִּבְעֲיָהוּ} «what are you doing?». The reader recognizes at once the harshest question in the whole Bible.

## Forms to keep

{מִי} «who?» · {מָה} «what?» · {אֵיךְ} «how?» · {לָמָּה} «why?» · {מָתַי} «when?» · {אַיֵּה} «where? (people)» · {אַיכָ} «where? (things)» · {אֲשֶׁר} «that, which» · {הֲלוֹא} «has it not?»`),
  vocab: [
    V('מִי', 'מִי', 'who?'),
    V('מָה', 'מָה', 'what?'),
    V('מֶה', 'מָה', 'what? (before a guttural)'),
    V('אֵיךְ', 'אֵיךְ', 'how?'),
    V('לָמָּה', 'לָמָּה', 'why?'),
    V('מָתַי', 'מָתַי', 'when?'),
    V('אַיֵּה', 'אַיֵּה', 'where? (people)'),
    V('אַיכָ', 'אַיכָ', 'where? (things)'),
    V('אֲשֶׁר', 'אֲשֶׁר', 'that, which'),
    V('שֶׁ', 'אֲשֶׁר', 'that (poetic form)'),
    V('הֲלוֹא', 'הֲלוֹא', 'has it not?'),
    V('מַדּוּעַ', 'מַדּוּעַ', 'for what reason?'),
    V('הֶבֶל', 'הֶבֶל', 'Abel'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Gen 4:9: «___ הֶבֶל אָחִיךָ» (where is Abel?).'),
    answer: 'אַיֵּה',
    hint: T('«Where?» for persons.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the question to its referent.'),
      pairs: [
        { a: '{מִי}', b: T('who? (people)') },
        { a: '{אַיֵּה}', b: T('where? (people)') },
        { a: '{אַיכָ}', b: T('where? (things)') },
        { a: '{מָתַי}', b: T('when?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What does {אֲשֶׁר} do differently from an adjective?'),
      options: [
        T('It inflects for neither gender nor number'),
        T('It always comes with the article'),
        T('It appears only in poetry'),
        T('It is always plural'),
      ],
      answer: 0,
      hint: T('Rule §3: the Hebrew relative is invariable.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Num 24:5: «מַה־___» (how goodly!).'),
      answer: 'טֹּבוּ',
      hint: T('{מַה־} + the plural shape of {טוֹב} «good».'),
    },
    {
      kind: 'choose',
      prompt: T('In {הֲלוֹא־יָדַעְתָּ} (Isa 40:28), the expected answer is:'),
      options: [
        T('«yes» — a request for recognition'),
        T('«no» — an objection'),
        T('«I do not know» — a question of ignorance'),
        T('«perhaps» — a hypothesis'),
      ],
      answer: 0,
      hint: T('Rule §4: {הֲלוֹא} expects a positive answer.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The questions are short separate words: {מִי} {מָה} {אֵיךְ} {לָמָּה} {מָתַי} {אַיֵּה}.'),
    },
    { n: '2', text: T('«Where?» has two shapes: {אַיֵּה} for people and {אַיכָ} for things.') },
    {
      n: '3',
      text: T(
        'The relative {אֲשֶׁר} is invariable: it never inflects, and it renders «who» or «which» according to the language.',
      ),
    },
    {
      n: '4',
      text: T(
        '{הֲלוֹא} and {הֲ} open questions that expect «yes»; in a negated context the expectation reverses.',
      ),
    },
    {
      n: '5',
      text: T(
        '{מַה־} + adjective is an exclamation («how!»), not a question: {מַה־טֹּבוּ} «how goodly!».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "Isaiah 40:28 ({הֲלוֹא־יָדַעְתָּ}) does not expect «no». Ancient Hebrew used such questions to catch someone's attention and provoke recognition: it is the teacher's question when he knows the student knows, and the student discovers the question was rhetorical.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The particle of honesty {ה} is the same one that opens questions: in ancient Hebrew, «I say» preceded any strong statement, and the {ה} of {הֲלוֹא} is its formal mark. That is why the same sound serves both «has it not» and «certainly»: the function depends on the whole context.',
      ),
    },
  ],
  examples: [
    { text: '{מִי}', gloss: T('who? — people only') },
    { text: '{מָה}', gloss: T('what? — {מָה זֶּה} «what is this?» (Exod 3:6)') },
    { text: '{מֶה־עָשִׂיתָ}', gloss: T('what have you done? — {מֶה} before a guttural (Gen 20:9)') },
    { text: '{אֵיךְ}', gloss: T('how? — {אֵיךְ־יָפוּ} «how goodly!»') },
    { text: '{לָמָּה}', gloss: T('why? — «why this?» (Gen 3:20)') },
    { text: '{מָתַי}', gloss: T('when? — «when shall I come?»') },
    { text: '{אַיֵּה}', gloss: T('where? (people) — Gen 4:9') },
    { text: '{אַיכָ}', gloss: T('where? (things) — «where is this?»') },
    { text: '{אֲשֶׁר}', gloss: T('that, which — invariable') },
    { text: '{הֲלוֹא}', gloss: T('has it not? — expects «yes» (Isa 40:28)') },
    { text: '{מַה־טֹּבוּ}', gloss: T('how goodly! — the tents of Jacob (Num 24:5)') },
    { text: '{מַה־נִפְלָא}', gloss: T('how wonderful! (Ps 118:23)') },
    { text: '{מַה־תִּבְעֲיָהוּ}', gloss: T('what are you doing? — asked of the vessel (Jer 13:16)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The Hebrew questionnaire'),
      head: [T('Question'), T('Form'), T('Used with'), T('Example')],
      rows: [
        [T('who?'), '{מִי}', T('people'), '{מִי הָאָדָם} «quem é o homem?» (Ec 3.15)'],
        [T('what?'), '{מָה}', T('things, actions'), '{מָה זֶּה} «o que é isto?» (Êx 3.6)'],
        [
          T('what? (before a guttural)'),
          '{מֶה}',
          T('following guttural'),
          '{מֶה־עָשִׂיתָ} «o que fizeste?» (Gn 20.9)',
        ],
        [T('how?'), '{אֵיךְ}', T('adjective, verb'), '{אֵיךְ־יָפוּ} «como são belas!» (Ct 7.6)'],
        [T('why?'), '{לָמָּה}', T('cause, purpose'), '{לָמָּה־זָה} «para que isto?» (Gn 3.20)'],
        [T('when?'), '{מָתַי}', T('time'), '{מָתַי־אָבֹא} «quando he de chegar?» (Gn 29.7)'],
        [T('where? (people)'), '{אַיֵּה}', T('human beings'), '{אַיֵּה הֶבֶל אָחִיךָ} (Gn 4.9)'],
        [
          T('where? (things)'),
          '{אַיכָ} / {אֵיכָ}',
          T('objects, places'),
          '{אֵיכָ זֶה} «onde está isto?» (Êx 2.18)',
        ],
      ],
    },
    {
      caption: T('Table 2 — Yes/no questions and exclamations'),
      head: [T('Type'), T('Form'), T('Expected answer'), T('Example')],
      rows: [
        [T('Yes/no, positive'), '{הֲלוֹא}', T('«yes»'), '{הֲלוֹא־יָדַעְתָּ} (Is 40.28)'],
        [T('Yes/no, positive'), '{הֲ}', T('«yes»'), '{הֲ־לֹא} «acaso não?» (1 Sm 12.3)'],
        [T('Negative rhetoric'), '{הֲתַפְלָא}', T('«no»'), '{הֲתַפְלָא} «não é incrível?» (Ez 3.15)'],
        [T('Degree exclamation'), '{מַה־}', T('«how!»'), '{מַה־טֹּבוּ} «quão bom!» (Nm 24.5)'],
        [T('Exclamation (fem.)'), '{מַה־}+ {ה}', T('«how!»'), '{מַה־טּוֹבָה} «quão boa!» (Sl 118.24)'],
      ],
    },
  ],
};
