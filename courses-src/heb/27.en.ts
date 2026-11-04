import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Negation: {לֹא}, {אֵין} and the verb that is missing'),
  subtitle: T('οὐκ ἔστι × אֵין — why Greek does not stumble and Hebrew does'),
  section: T('Adverb'),
  body: C(`## One word for negating what exists

{לֹא} negates a verb. That is all, and it is a rule without exception: after {לֹא} there is always a verb, and the {לֹא} is glued to it by maqaf when the clause is long.

{לֹא־תִרְצָח} «you shall not murder» (Ex 20.13) · {לֹא הָלַךְ} «he did not walk» (Ps 1.1) · {לֹא יִיעַף} «he does not grow weary» (Isa 40.28) · {וְלֹא יִהְיֶה} «and it shall not be».

Its position in the clause is fixed: immediately before the verb, whatever the tense. In {וְלֹא יִהְיֶה} the {וְ} is the conjunction «and» and the {לֹא} stays glued to the verb. Hebrew has no post-verbal negation, and no particle after the verb to close the clause off: the position of {לֹא} is fixed and the context comes after it.

One position deserves attention: {לֹא} can fall on a **participle**, and then the clause no longer has a verb. In Genesis 3.5 the serpent says {לֹא יֹדֵעַ}, literally «not, knowing». What Hebrew did was treat the participle as a noun and give it the negation, which is the shortest way to say that someone acts without knowing what they are doing.

## {אֵין}: the clause with no verb

{אֵין} is different. It does not negate anything that is happening: it asserts that a thing **does not exist**. And because it has no verb, it governs what comes after it in three ways.

After it can come a **noun**: {אֵין חֵקֶר} «there is no search» (Isa 40.28) · {אֵין חָרָב} «there is no sword». The whole clause is a phrase, and English has to borrow a verb: «there is no» or «it does not exist».

After it can come a **participle**: {אֵין} + {מִשְׁתַּחֲוֶה} «there is none who bows». The result is «there is nobody who...», and the negation here is stronger than {לֹא}'s, because it does not negate an action: it negates the existence of whoever would do it.

And it can come with {ל} plus a noun, which is the formula for possession: {אֵין־לוֹ} «he has not», {אֵין־לִי} «I have not». The noun comes after {ל}, and Hebrew says literally «there is not for him».

## When the verb shows up after {אֵין}

Here is the problem that blocks Biblical reading, and it deserves to be spelled out: **in Old Hebrew {אֵין} is not followed by a finite verb**. The three cases above are all the cases there are. The grammar is simple and so is the practice.

The exception is the later books. In Jeremiah and in Ezekiel the sequence {אֵין} + verb turns up often enough that it cannot be a scribal error, and there the debate begins. One reads {אֵין} as an ordinary absence and renders «cannot»; another reads the verb as if it were a petrified participle and renders it in the present; a third reads the two together as an emphatic negation and writes «in no way». All three readings turn up in translations of the same clause, and none of them is a mistranslation.

Why does this happen in a book that had already solved the problem? Because {אֵין} began to be copied from the {אֵין} of Genesis 1.2, {וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}. In Genesis the clause is negative and nominal; in Ezekiel it turns negative and verbal. Greek helps because it has the word that was missing, and that is why the text feels too easy to translate.

## Greek and Hebrew side by side

Greek handles absence with the verb {εἰμί}: it writes {οὐκ ἔστι} «there is not» and {οὐκ ἔστιν} «he is not». The whole Greek translation of the Septuagint lives off that surplus, and the translators got as far as adding verbs Hebrew did not have.

Greek negation also splits in two, as Hebrew does: {οὐ} negates the indicative, {μή} negates the subjunctive and the imperative. On one side {לֹא} and {אַל}, on the other. But {οὐκ ἔστι} is still a verb, and {אֵין} is still without one. That is the difference underneath, and it is what you feel when someone moves between the two texts and the Hebrew seems to be wrong.

One example to close with: {וְאַתָּה לֹא יָדַעְתָּ} «and you do not know», at the end of God's answer to Jeremiah after the prophet calls out. Hebrew has {לֹא} and the verb {יָדַעְתָּ}, which is a qatal of the 2nd person. A literal rendering writes «and you did not know», and the clause changes sense: late Latin and Portuguese put the past in the right place, and the threat stays a threat.`),
  vocab: [
    V('לֹא', 'לֹא', 'not (with a verb)'),
    V('אֵין', 'אֵין', 'there is not, does not exist'),
    V('אֵין־לוֹ', 'אֵין', 'he has not'),
    V('אֵין־לִי', 'אֵין', 'I have not'),
    V('לֹא־תִרְצָח', 'הרג', 'you shall not murder (Ex 20.13)'),
    V('וְלֹא יִהְיֶה', 'היה', 'and it shall not be'),
    V('לֹא יִיעַף', 'עיף', 'he does not grow weary (Isa 40.28)'),
    V('אֵין חֵקֶר', 'חֵקֶר', 'there is no search (Isa 40.28)'),
    V('אֵין חָרָב', 'חָרָב', 'there is no sword'),
    V('לֹא יֹדֵעַ', 'ידע', 'not, knowing (Gen 3.5)'),
    V('אֵין מִשְׁתַּחֲוֶה', 'שׁחה', 'there is none who bows'),
    V('וְאַתָּה לֹא יָדַעְתָּ', 'ידע', 'and you do not know (Jer 33.3)'),
    V('וְהָאָרֶץ הָיְתָה תֹהוּ', 'היה', 'the earth was formless (Gen 1.2)'),
    V('לֹא', 'לֹא', 'not (repeated: emphatic negation)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which clause is grammatical in Hebrew?'),
    options: [
      T('{אֵין} + noun: «there is no...»'),
      T('{אֵין} + finite verb: the common shape in the older books'),
      T('{אֵין} + the article'),
      T('{אֵין} only after the verb'),
    ],
    answer: 0,
    hint: T('Rule §2: in Old Hebrew {אֵין} is not followed by a finite verb.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the negation to what it negates.'),
      pairs: [
        { a: '{לֹא} + verbo', b: T('the action: «he did not»') },
        { a: '{לֹא} + particípio', b: T('the attitude: «not, knowing»') },
        { a: '{אֵין} + substantivo', b: T('existence: «there is no»') },
        { a: '{אֵין} + {ל} + substantivo', b: T('possession: «he has not»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {אֵין־לוֹ} «he has not», what does {אֵין} negate?'),
      options: [
        T('A verb'),
        T('The existence of something for him (possession)'),
        T('A participle'),
        T('The past'),
      ],
      answer: 1,
      hint: T('It is {אֵין} + {ל} + {הוּ}: «there is not for him».'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: «אֵין ___» = «there is no search of his understanding» (Isa 40.28).'),
      answer: 'חֵקֶר',
      hint: T('The noun {חֵקֶר} «search», with no article.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is the construction {אֵין} + verb more common in Ezekiel than in Genesis?'),
      options: [
        T('Ezekiel uses later forms, in which the construction spread'),
        T('Ezekiel has fewer nouns'),
        T('Ezekiel wrote in Greek'),
        T('It is a repeated copying error'),
      ],
      answer: 0,
      hint: T('The construction is rare in Old Hebrew and common in the books of the exile.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{לֹא} negates a verb and only appears immediately before it: {לֹא־תִרְצָח}, {וְלֹא יִהְיֶה}, {לֹא יִיעַף}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{אֵין} asserts absence and has no verb: in Old Hebrew it is never followed by a finite verb, but by a noun, a participle or {ל} + noun.',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֹא} + participle turns the clause into a phrase: {לֹא יֹדֵעַ} «not, knowing» (Gen 3.5).',
      ),
    },
    { n: '4', text: T('{אֵין} + {ל} + noun is the formula for possession: {אֵין־לוֹ} «he has not».') },
    {
      n: '5',
      text: T(
        'Greek has {οὐκ ἔστι}, a real existential verb; Hebrew has {אֵין}, which is absence without a verb. That is the difference that makes Greek feel too easy to translate.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'In Ezekiel, {אֵין} + verb has the force of law. The prohibitions of chapter 22 of Leviticus speak in the voice of someone declaring something impossible: «no», and not «it is forbidden». Rendering it «it cannot be done» keeps the negation; rendering it «he cannot» can suggest lack of ability, which is a different thing. Hebrew forbids, English describes.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Later Hebrew, Aramaic and Syriac ended up building an existential verb for {אֵין}: Aramaic has {לֵית} «there is not», and Modern Hebrew uses {אֵין} followed by a finite verb as if it were one. In other words, the construction translators argue about in Ezekiel is exactly the solution the language later chose. Reading the result through history, you watch the old text acquire the word it lacked.',
      ),
    },
  ],
  examples: [
    { text: '{לֹא־תִרְצָח}', gloss: T('you shall not murder — {לֹא} + future (Ex 20.13)') },
    { text: '{לֹא הָלַךְ}', gloss: T('he did not walk — {לֹא} + qatal (Ps 1.1)') },
    { text: '{וְלֹא יִהְיֶה}', gloss: T('and it shall not be — {וְ} + {לֹא} + yiqtol') },
    { text: '{לֹא יִיעַף}', gloss: T('he does not grow weary — {לֹא} + yiqtol (Isa 40.28)') },
    { text: '{לֹא יֹדֵעַ}', gloss: T('not, knowing — negation on a participle (Gen 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('there is no search — {אֵין} + noun (Isa 40.28)') },
    { text: '{אֵין־לוֹ}', gloss: T('he has not — {אֵין} + {ל} + suffix') },
    { text: '{אֵין מִשְׁתַּחֲוֶה}', gloss: T('there is none who bows — {אֵין} + participle') },
    {
      text: '{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ}',
      gloss: T('the earth was formless and void (Gen 1.2) — a nominal clause'),
    },
    { text: '{וְאַתָּה לֹא יָדַעְתָּ}', gloss: T('and you do not know (Jer 33.3) — {לֹא} + qatal') },
  ],
  tables: [
    {
      caption: T('Table 1 — The four positions of {לֹא}'),
      head: [T('What follows'), T('Tense'), T('Example'), T('Gloss')],
      rows: [
        [T('qatal'), T('past or present'), '{לֹא הָלַךְ}', T('he did not walk / does not walk')],
        [T('yiqtol'), T('future'), '{לֹא יִיעַף}', T('he does not grow weary (Isa 40.28)')],
        [T('wayyiqtol with {וְ}'), T('narrative'), '{וְלֹא יִהְיֶה}', T('and it shall not be')],
        [T('participle'), T('present circumstantial'), '{לֹא יֹדֵעַ}', T('not, knowing (Gen 3.5)')],
      ],
    },
    {
      caption: T('Table 2 — What can follow {אֵין}'),
      head: [T('Category'), T('Result'), T('Example'), T('Natural rendering')],
      rows: [
        [T('noun'), T('absence of a thing'), '{אֵין חֵקֶר}', T('there is no search')],
        [T('participle'), T('absence of an agent'), '{אֵין מִשְׁתַּחֲוֶה}', T('there is none who bows')],
        [T('{ל} + noun'), T('absence of possession'), '{אֵין־לוֹ}', T('he has not')],
        [
          T('finite verb'),
          T('later construction, disputed'),
          '—',
          T('multiple readings in the exile books'),
        ],
      ],
    },
    {
      caption: T('Table 3 — Greek and Hebrew: the two negations'),
      head: [T('Function'), T('Greek'), T('Hebrew'), T('Parallel example')],
      rows: [
        [T('negate the indicative'), '{οὐ}', '{לֹא}', '{לֹא־תִרְצָח} / {οὐ φονεύσεις}'],
        [T('negate subjunctive and imperative'), '{μή}', '{אַל}', '{אַל־תִּירָא} / {μὴ φοβηθῇς}'],
        [
          T('assert absence'),
          '{οὐκ ἔστι}',
          '{אֵין} (sem verbo)',
          '{אֵין חֵקֶר} / {οὐκ ἔστιν ἐρεύνημα}',
        ],
        [T('origin'), 'Latin {sunt}', '—', T('Hebrew never inherited an existential verb')],
      ],
    },
  ],
};
