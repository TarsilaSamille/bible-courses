import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Infinitives'),
  subtitle: T('לִכְתֹּב, שָׁמוֹעַ — to write, hearing'),
  section: T('Non-finite forms and gutturals'),
  body: C(`## Two infinitives, two jobs

Hebrew has two infinitive shapes (Gesenius §45), both built on the {קְטֹל} (qatal) skeleton of the root:

**Construct** ({ל} + {קְטֹל}): {לִכְתֹּב} «to write», {לִשְׁמֹר} «to keep», {לִרְאוֹת} «to see». This is the normal shape after {יָכוֹל} «to be able», «to want», and above all to express purpose: {לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת} «to keep the Sabbath».

**Absolute** ({קָטוֹל}, without {ל}): {שָׁמוֹעַ} «hearing», {מוֹת} «dying», {בָּרְכִי} «blessed». It does not express purpose: it expresses **emphasis**, and it almost always stands next to a finite verb.

## The absolute infinitive as emphasis

The Bible's most famous construction is {שָׁמוֹעַ תִּשְׁמַע} «hearing you shall hear» (Deut 28:1) = «you shall surely hear» · {מוֹת תָּמוּת} «dying you shall die» (Gen 2:17) = «you shall surely die».

The mechanism is simple: the absolute infinitive gives force to the finite verb that follows. Translating literally «hearing you shall hear» loses the emphasis; writing «you shall surely hear» gets the sense right.

The same happens with {יֹאמַר} becoming {אֹמֵר} «he will surely say», and with {בָּרַךְ} becoming {בָּרָךְ} «he will surely bless».

## {לֵאמֹר} and the Hebrew pleonasm

{לֵאמֹר} «saying» comes from the root {אמר} and introduces **every** divine speech: {וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה לֵאמֹר} «And the LORD said to Moses, saying:» (Exod 6:10). Hebrew repeats the sense out of pure literary tradition — and that repetition is what Greek copied in {λέγων} and Latin in {dicens}.

That is why nearly every prophetic chapter opens with {אָמַר יְהוָה} + {לֵאמֹר}. It is not the scribe's redundancy: it is the mark that the word is God's, not the prophet's.

## Negation with the infinitive

Hebrew has three ways of saying «not to do»:

{לֹא} + construct infinitive: {לֹא־תִרְצָח} «thou shalt not kill» (Exod 20:13)
{אֵין} + construct infinitive: {אֵין־לְהָרֵג} «cannot be killed»
{ל} (with the negating {וּ}) + absolute infinitive: {וּלְאָכְלָה} «and you shall not eat» (Gen 2:17)

The third is rare but legitimate: {וּלְאָכְלָה} has {ל} + {אָכְלָה} (absolute), with the negating {וּ}. With {לֹא} plus an absolute we get the strongest negation: «by no means shall he send».

## The same infinitive with another preposition

The absolute infinitive takes prepositions, and each changes the sense: {ב} = «when», {כ} = «when» (also), {אַחֲרֵי} = «after», {לִפְנֵי} = «before».

In Genesis 1:5, {וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם} names the first period {יוֹם} «day» and the second {לָיְלָה} «night». In Genesis 2:7, {בְּבֹא־הָאָדָם} means «when the man came»: the same infinitive {בֹּא} that appears as the verb {בָּא} here functions as a time expression.

## Where the infinitive appears

After {יָכוֹל} «to be able»: «he can fly»
As a direct object: {חָפֵץ לִמְנוֹת} «he wishes to count»
With {אֶת} as object: {לַעֲשׂוֹת אֶת־הַתּוֹרָה} «to do the law»
Negated by {בְּלִי}: {בְּלִי־דָבָר} «without words»

The point is this: Hebrew prefers the participle (ch. 14) where Portuguese and Spanish use the gerund. That is why translators write «blessed» where {בָּרוּךְ} stands and «blessing» where {בֹּרֵךְ} stands: the distinction is state versus action.`),
  vocab: [
    V('לִכְתֹּב', 'כתב', 'to write'),
    V('לֵאמֹר', 'אמר', 'saying'),
    V('לִשְׁמֹר', 'שׁמר', 'to keep'),
    V('לִרְאוֹת', 'ראה', 'to see'),
    V('שָׁמוֹעַ', 'שׁמע', 'hearing (emphasis)'),
    V('מוֹת', 'מות', 'dying (emphasis)'),
    V('בָּרָךְ', 'ברך', 'he will surely bless'),
    V('לֹא', 'לֹא', 'not'),
    V('אֵין', 'אֵין', 'there is not, it is impossible'),
    V('לָבוֹא', 'בוא', 'to come'),
    V('שַׁבָּת', 'שַׁבָּת', 'Sabbath, rest'),
    V('אֲנִי', 'אֲנִי', 'I'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does «מוֹת תָּמוּת» (Gen 2:17) mean?'),
    options: [
      T('You may die'),
      T('You shall surely die (infinitive + verb = emphasis)'),
      T('You shall not die'),
      T('Death and life'),
    ],
    answer: 1,
    hint: T('Rule §2: the absolute infinitive strengthens the finite verb that follows.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the form to its infinitive type.'),
      pairs: [
        { a: '{לִכְתֹּב}', b: T('construct') },
        { a: '{שָׁמוֹעַ}', b: T('absolute') },
        { a: '{לֵאמֹר}', b: T('construct') },
        { a: '{בָּרָךְ}', b: T('absolute') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which is the negated imperative of «fear not»?'),
      options: [T('לֹא־תִּירָא'), T('אַל־תִּירָא'), T('לֹא יִרְאָה'), T('אֵין־תִּירָא')],
      answer: 1,
      hint: T('{אַל} + jussive negates will; {לֹא} negates the indicative (ch. 16).'),
    },
    {
      kind: 'fill',
      prompt: T('Write the construct infinitive of {אמר} «to say».'),
      answer: 'לֵאמֹר',
      hint: T('{ל} + {אֹמְרִי}? No: {ל} + the {קְטֹל} skeleton of the root = {לֵאמֹר}.'),
    },
    {
      kind: 'choose',
      prompt: T('In «בְּבֹא־הָאָדָם», what does {ב} + absolute infinitive indicate?'),
      options: [
        T('«when» (time)'),
        T('«because» (cause)'),
        T('«so that» (purpose)'),
        T('«although» (concession)'),
      ],
      answer: 0,
      hint: T('Rule §4: {ב} and {כ} + absolute give a time expression.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The construct infinitive ({ל} + {קְטֹל}) expresses purpose; the absolute ({קָטוֹל}) expresses emphasis.',
      ),
    },
    {
      n: '2',
      text: T(
        'The absolute almost always accompanies a finite verb: {שָׁמוֹעַ תִּשְׁמַע} «you shall surely hear».',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֵאמֹר} «saying» introduces all divine speech: {וַיֹּאמֶר יְהוָה לֵאמֹר} «and the LORD said, saying».',
      ),
    },
    {
      n: '4',
      text: T(
        'The same absolute shifts sense with the preposition: {ב} and {כ} give «when», {לִפְנֵי} gives «before».',
      ),
    },
    {
      n: '5',
      text: T(
        'Where Portuguese and Spanish use a gerund, Hebrew uses the participle: {בָּרוּךְ} «blessed» and {בֹּרֵךְ} «blessing».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "Genesis 2:17 changes tone when the translator gets the absolute right: {מוֹת תָּמוּת} is not «dying you shall die» (describing a process) but «you shall surely die» (issuing a threat). Three words decide the fate of a person's life, and they sit in the finite verb, not in the noun.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Hebrew has no gerund. Where Portuguese writes «estou escrevendo», Hebrew writes either {אֲנִי כֹּתֵב} (participle + pronoun) or {אֲנִי כּוֹתֵב} (infinitive + pronoun). The Romance languages did the opposite: they turned the old participle into a compound verbal form («estou loving»), which is why Portuguese {-er} and Spanish {-ando} ended up doing the job Hebrew assigned to the plain participle.',
      ),
    },
  ],
  examples: [
    { text: '{לִכְתֹּב}', gloss: T('to write (construct inf.)') },
    { text: '{לֵאמֹר}', gloss: T('saying — infinitive of {אמר}') },
    { text: '{שָׁמוֹעַ}', gloss: T('hearing (absolute inf.) — emphasis') },
    { text: '{מוֹת}', gloss: T('dying (absolute inf.) — emphasis') },
    { text: '{שָׁמוֹעַ תִּשְׁמַע}', gloss: T('you shall surely hear (Deut 28:1)') },
    { text: '{מוֹת תָּמוּת}', gloss: T('you shall surely die (Gen 2:17)') },
    { text: '{לֹא־תִרְצָח}', gloss: T('thou shalt not kill (Exod 20:13)') },
    { text: '{וּלְאָכְלָה}', gloss: T('and you shall not eat (Gen 2:17) — {ו} + absolute inf.') },
    { text: '{אֵין־לְהָרֵג}', gloss: T('cannot be killed — {אֵין} + infinitive') },
    { text: '{בְּבֹא־הָאָדָם}', gloss: T('when the man came (Gen 2:7) — {ב} + abs.') },
    { text: '{בָּרָךְ}', gloss: T('he will surely bless (absolute of {ברך})') },
    { text: '{לִשְׁמֹר}', gloss: T('to keep — same skeleton as {שָׁמוֹעַ}') },
  ],
  tables: [
    {
      caption: T('Table 1 — The {קְטֹל} skeleton and its three realizations'),
      head: [T('Root'), T('Qatal (3rd m.)'), T('Construct inf.'), T('Absolute inf.')],
      rows: [
        ['{כתב}', '{כָּתַב}', '{לִכְתֹּב}', '{כָּתוֹב}'],
        ['{שׁמר}', '{שָׁמַר}', '{לִשְׁמֹר}', '{שָׁמוֹעַ}'],
        ['{מות}', '{מָת}', '{לָמוּת}', '{מוֹת}'],
        ['{ברך}', '{בָּרַךְ}', '{לְבָרֵךְ}', '{בָּרָךְ}'],
        ['{אמר}', '{אָמַר}', '{לֵאמֹר}', '{אֹמֵר}'],
        ['{ראה}', '{רָאָה}', '{לִרְאוֹת}', '{רֹאה}'],
        ['{בוא}', '{בָּא}', '{לָבוֹא}', '{בֹּא}'],
      ],
    },
    {
      caption: T('Table 2 — Constructions with the infinitive'),
      head: [T('Type'), T('Example'), T('Gloss')],
      rows: [
        [T('Purpose'), '{לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת}', T('to keep the Sabbath')],
        [T('Emphasis (absolute)'), '{שָׁמוֹעַ תִּשְׁמַע}', T('you shall surely hear (Deut 28:1)')],
        [T('Introducing speech'), '{וַיֹּאמֶר יְהוָה לֵאמֹר}', T('and the LORD said, saying')],
        [T('Negation {לֹא}'), '{לֹא־תִרְצָח}', T('thou shalt not kill (Exod 20:13)')],
        [T('Negation {אֵין}'), '{אֵין־לְהָרֵג}', T('cannot be killed')],
        [T('Time ({ב} + abs.)'), '{בְּבֹא־הָאָדָם}', T('when the man came')],
      ],
    },
  ],
};
