import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Pronouns and the past (qatal)'),
  subtitle: T('אֲנִי…הֵם · כָּתַבְתִּי…כָּתְבוּ — the subject sticks to the verb'),
  section: T('Nouns, adjectives and pronouns'),
  body: C(`## The independent pronouns

Hebrew has ten full personal pronouns written as whole words: {אֲנִי} «I», {אַתָּה} «you (m.)», {אַתְּ} «you (f.)», {הוּא} «he», {הִיא} «she», {אֲנַחְנוּ} «we», {אַתֶּם} «you (m. pl.)», {אַתֶּן} «you (f. pl.)», {הֵם} «they (m.)», {הֵן} «they (f.)». They all begin with {א} or {ה} — that is the visual mark of person.

Those pronouns are rare: the normal form is the **verb with a suffix**. In {כָּתַבְתִּי} the pronoun «I» is already stuck to the verb, so the English translation simply says «I wrote» and Portuguese «escrevi», with no visible subject. Hebrew allows that omission in almost every finite clause.

## Root, tense and person

A Hebrew verb is always: **root** (consonants) + **tense** (vowels) + **person** (suffixes). With the root {כתב} «to write»:

{כָּתַבְתִּי} «I wrote» (root {כתב} + qatal {ַ} + {־תִּי} of 1st sg.)
{כָּתַבְתָּ} «you (m.) wrote» ({־תָּ} of 2nd m.)
{כָּתַבְתְּ} «you (f.) wrote» ({־תְּ} of 2nd f.)
{כָּתַב} «he wrote» (3rd m.: **no suffix at all**)
{כָּתְבָה} «she wrote» (3rd f.: {־ה} with qamats)
{כָּתַבְנוּ} «we wrote» ({־נוּ} of 1st pl.)
{כָּתְבוּ} «they wrote» ({־וּ} of 3rd pl.)

The two bare forms — {כָּתַב} and {כָּתְבָה} — are among the most frequent shapes in the language.

## Qatal is not only past

We call the form with {ַ} (patah) in the singular the qatal. Historically it is a perfective, and in the Bible it covers three uses: (1) narrative past — {בָּרָא} «he created» (Gen 1:1); (2) stative present — {אֱלֹהִים טוֹב} «God is good»; (3) modality — {יְהִי} «let there be», {נַעֲשֶׂה} «let us make» (cohortative, ch. 16). Do not look for a «pure past»: context decides.

One detail that saves time: the 3rd person singular is identical in qatal and in the future ({כָּתַב} «he wrote» and «he will write»). Only context and the other persons reveal the tense.

## The root vowels

Tense lives in the vowels of the root: {ַ} in the singular ({כָּתַב}), {ָ} before the suffixes of the 1st and 2nd person plural ({כָּתַבְנוּ}, {כָּתְבוּ}). Roots containing {ו} usually show {וֹ} (holam) instead of {ו}, as in {מוֹת} «to die» and {יוֹדֵעַ} «to know».

## {הָיָה}, the most useful verb

{הָיָה} «to be» covers almost everything: {הָיָה} «he was», {הָיְתָה} «she was», {הָיִיתִי} «I was», {הָיִינוּ} «we were», {הָיוּ} «they were». In the 3rd singular outside the first position of a clause it usually appears as {יְהִי}: {וְלֹא יְהִי} «and there was not».

It is with {הָיָה} that God answers in Exod 3:14: {אֶהְיֶה אֲשֶׁר אֶהְיֶה} «I AM WHO I AM». Keep that phrase — it returns in chapter 16 with the jussive {יְהִי} «let there be».

## Sentences to build

{אֲנִי כָּתַבְתִּי} «I wrote» (explicit pronoun) · {כָּתַבְתִּי} «I wrote» (suffixed) · {אַתָּה כָּתַבְתָּ} «you wrote» · {הוּא כָּתַב} «he wrote» · {אֲנַחְנוּ כָּתַבְנוּ} «we wrote».`),
  vocab: [
    V('אֲנִי', 'אֲנִי', 'I'),
    V('אַתָּה', 'אַתָּה', 'you (masc.)'),
    V('הוּא', 'הוּא', 'he'),
    V('הִיא', 'הִיא', 'she'),
    V('אֲנַחְנוּ', 'אֲנַחְנוּ', 'we'),
    V('הֵם', 'הֵם', 'they'),
    V('כָּתַבְתִּי', 'כתב', 'I wrote'),
    V('כָּתַבְתָּ', 'כתב', 'you wrote'),
    V('כָּתְבָה', 'כתב', 'she wrote'),
    V('כָּתְבוּ', 'כתב', 'they wrote'),
    V('הָיָה', 'היה', 'he was'),
    V('יְהִי', 'היה', 'let there be'),
    V('כתב', 'כתב', 'to write (root)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: «___ כָּתַבְתִּי» = «I wrote» (pronoun).'),
    answer: 'אֲנִי',
    hint: T('The 1st person singular pronoun.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {כָּתְבָה} «she wrote», the {־ה} marks:'),
      options: [
        T('3rd person feminine singular'),
        T('feminine plural'),
        T('1st person plural'),
        T('the {ה} particle of the noun'),
      ],
      answer: 0,
      hint: T('It is the only person that takes a suffix: {־ה} with qamats.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the qatal of {כתב} for «we wrote».'),
      answer: 'כָּתַבְנוּ',
      hint: T('Root {כתב} + vowel {ַ} + suffix {־נוּ} of 1st person plural.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the person.'),
      pairs: [
        { a: '{אֲנִי}', b: T('1st sg.') },
        { a: '{אַתְּ}', b: T('2nd f. sg.') },
        { a: '{הֵן}', b: T('3rd pl. f.') },
        { a: '{אַתֶּם}', b: T('2nd pl. m.') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Why is {יְהִי} (Gen 1:3) a form of {הָיָה}?'),
      options: [
        T('It is a different root, the verb «to see»'),
        T('It is {הָיָה} in its usual shape outside first position'),
        T('It is a participle of {הָיָה}'),
        T('It is a numeral'),
      ],
      answer: 1,
      hint: T('Compare {וְיְהִי} (Gen 1:5) with {הָיָה}: only the initial {־י} moves.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every finite verb = root + tense vowel + person suffix; the 3rd masculine singular takes no suffix at all.',
      ),
    },
    {
      n: '2',
      text: T(
        'The personal pronoun lives inside the verb: {כָּתַבְתִּי} already means «I wrote». Independent pronouns appear only for emphasis.',
      ),
    },
    {
      n: '3',
      text: T(
        'The root vowel marks the tense: {ַ} in the singular ({כָּתַב}) and {ָ} before the plural suffixes ({כָּתַבְנוּ}, {כָּתְבוּ}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Qatal = perfective: it serves for the past, for the stative present and for modality ({יְהִי} «let there be»). Context decides.',
      ),
    },
    {
      n: '5',
      text: T(
        'The 3rd person singular is identical in qatal and in the future ({כָּתַב}); only the other persons reveal the tense.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'Do not look for a resumptive pronoun: in {וַיֹּאמֶר} (ch. 10) there is no person suffix and no pronoun, yet Portuguese renders «e ele disse». Context and agreement with the noun {אֱלֹהִים} recover the subject. This is normal Hebrew, not a scribal omission.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The ten pronouns take few lines in the Bible because they rarely appear: the Old Testament has thousands of occurrences of {הוּא} and {אֵת}, but very few clauses where the pronoun alone can be the subject. That is why this course concentrates on the verbs: they carry the person.',
      ),
    },
  ],
  examples: [
    { text: '{אֲנִי}', gloss: T('I — appears only when the verb does not carry it') },
    { text: '{אַתָּה}', gloss: T('you (m.) — the same word as {אַתְּ} with a different vowel') },
    { text: '{הוּא}', gloss: T('he — {ה} + {ו} (holam) + shureq') },
    { text: '{כָּתַב}', gloss: T('he wrote — no suffix: 3rd m.') },
    { text: '{כָּתְבָה}', gloss: T('she wrote — {־ה} with qamats: 3rd f.') },
    { text: '{כָּתַבְתִּי}', gloss: T('I wrote — {־תִּי}: 1st person') },
    { text: '{כָּתַבְתֶּם}', gloss: T('you (m. pl.) wrote — {־תֶּם}: 2nd pl. m.') },
    { text: '{כָּתְבוּ}', gloss: T('they wrote — {־וּ} with root vowel {ָ}') },
    { text: '{הָיָה}', gloss: T('he was — the most versatile verb of the language') },
    { text: '{אֶהְיֶה אֲשֶׁר אֶהְיֶה}', gloss: T('I AM WHO I AM (Exod 3:14)') },
    { text: '{יְהִי}', gloss: T('let there be, be — {הָיָה} in its usual non-initial shape') },
    { text: '{אֲנַחְנוּ}', gloss: T('we — {א} + {נחנו}: 1st pl. mark') },
  ],
  tables: [
    {
      caption: T('Table 1 — The ten personal pronouns'),
      head: [T('Person'), T('Singular'), T('Plural')],
      rows: [
        [T('1st'), '{אֲנִי} «eu»', '{אֲנַחְנוּ} «nós»'],
        [T('2nd m.'), '{אַתָּה} «tu»', '{אַתֶּם} «vós (m.)»'],
        [T('2nd f.'), '{אַתְּ} «tu»', '{אַתֶּן} «vós (f.)»'],
        [T('3rd m.'), '{הוּא} «ele»', '{הֵם} «eles»'],
        [T('3rd f.'), '{הִיא} «ela»', '{הֵן} «elas»'],
      ],
    },
    {
      caption: T('Table 2 — Qatal of {כתב} «to write»'),
      head: [T('Person'), T('Suffix'), T('Form'), T('Gloss')],
      rows: [
        [T('3rd m.'), T('—'), '{כָּתַב}', T('he wrote')],
        [T('3rd f.'), '{־ה}', '{כָּתְבָה}', T('she wrote')],
        [T('2nd m.'), '{־תָּ}', '{כָּתַבְתָּ}', T('you (m.) wrote')],
        [T('2nd f.'), '{־תְּ}', '{כָּתַבְתְּ}', T('you (f.) wrote')],
        [T('1st'), '{־תִּי}', '{כָּתַבְתִּי}', T('I wrote')],
        [T('1st pl.'), '{־נוּ}', '{כָּתַבְנוּ}', T('we wrote')],
        [T('2nd pl. m.'), '{־תֶּם}', '{כָּתַבְתֶּם}', T('you (m. pl.) wrote')],
        [T('3rd pl.'), '{־וּ}', '{כָּתְבוּ}', T('they wrote')],
      ],
    },
    {
      caption: T('Table 3 — The verb {הָיָה} «to be» in the full paradigm'),
      head: [T('Person'), T('Form'), T('Gloss')],
      rows: [
        [T('3rd m.'), '{הָיָה}', T('he was')],
        [T('3rd f.'), '{הָיְתָה}', T('she was')],
        [T('2nd m.'), '{הָיִיתָ}', T('you were')],
        [T('1st'), '{הָיִיתִי}', T('I was')],
        [T('1st pl.'), '{הָיִינוּ}', T('we were')],
        [T('3rd pl.'), '{הָיוּ}', T('they were')],
        [T('Usual form (non-initial)'), '{יְהִי}', T('let there be (Gen 1:3)')],
      ],
    },
  ],
};
