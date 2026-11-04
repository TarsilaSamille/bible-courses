import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('The binyanim'),
  subtitle: T('קָדַשׁ, קִדַּשׁ, הִקְדִּישׁ — one root, seven molds'),
  section: T('Verb and numeral'),
  body: C(`## Seven ways to say the same root

A Hebrew root is not a ready-made verb: it is a consonant skeleton that needs a **pattern** (binyan, «construction») to become a verb (Gesenius §39-53). There are seven main patterns, and each one adds a shade of meaning. Take {קדשׁ} «holy»:

{קָדַשׁ} **qal** — {קָדַשׁ} «he was/is holy»
{נִקְדַּשׁ} **niphal** — {נִקְדַּשׁ} «he was sanctified»
{קִדַּשׁ} **piel** — {קִדַּשׁ} «he sanctified»
{קֻדַּשׁ} **pu'al** — {קֻדַּשׁ} «he was made holy»
{הִקְדִּישׁ} **hiphil** — {הִקְדִּישׁ} «he caused to sanctify»
{הָקְדַּשׁ} **hopal** — {הָקְדַּשׁ} «it was made holy»
{הִתְקַדֵּשׁ} **hitpael** — {הִתְקַדֵּשׁ} «he sanctified himself»

A single three-consonant skeleton yields seven complete verbs, each with its own prefix, dagesh and vowels.

## How each pattern is formed

Qal is the base pattern: the root's consonants plus a vowel, with the first letter strong. Every other pattern modifies the skeleton in a predictable way:

**Niphal** adds the prefix {נִ} and a dagesh in the second letter: {קדשׁ} → {נִקְדַּשׁ}
**Piel** doubles the second letter: {קדשׁ} → {קִדַּשׁ}
**Hiphil** adds the prefix {הִ} and shifts the vowel: {קָדַשׁ} → {הִקְדִּישׁ}
**Hitpael** adds {הִ} + {ת} and lengthens the vowel: {הִתְקַדֵּשׁ}

When the pattern begins with {ה}, the vowel may become {ָ} (qamats) instead of {ַ} (patah) — the same mechanism as the article {הָ} (ch. 1).

## What each pattern means

Qal is the neutral value: «to do» and nothing more. Niphal adds passivity, reflex or reciprocity: {נִשְׁמַר} «he guarded himself», {נִקְדַּשׁ} «he was sanctified». Piel is intensive-factive: «to make holy», «to bless» ({בֵּרַךְ} from {ברך}). Pu'al is the passive of qal. Hiphil is the causative par excellence: «to make someone do» ({הִקְדִּישׁ}). Hophal is the passive of hiphil. Hitpael is piel reflexive.

With other roots the system shines even more: {שׁמַר} «to guard» → {נִשְׁמַר} «to guard oneself», {הִשְׁמַר} «to make someone guard», {הִשְׁמֹר} «to be guarded». {נָתַן} «to give» → {נִתַּן} «to be given», {הִנָּתֵן} «to give to someone».

## Participles: where the pattern shows

The participle displays the pattern clearly, because it repeats the prefix:

{קֹדֶשׁ} (qal) «holy» · {נִקְדֵּשׁ} (niphal) «sanctified» · {מַקְדֵּשׁ} (hiphil) «sanctifier» · {קָדוּשׁ} (pu'al) «holy [passive]»

The line of Isa 6:3 — {קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה} «Holy, holy, holy is the LORD» — uses the participle {קָדוֹשׁ}, from the same root {קדשׁ}. The root that governs the whole book appears three times in one clause: one root, three participles, one only God.

## Not every root has all seven

Full triliteral roots accept all seven; defective roots ({אמר} «to say», {הלך} «to go») and guttural roots ({שׁמַר}) sometimes lose one. And some verbs drop the dagesh in particular forms. So: learn the pattern, but always confirm the shape in the word you are reading.

## Visual summary

If you remember only the root and what each pattern does, you can read any verb. This is the biggest leap of reasoning in the course: the root is the lexeme, the pattern is the inflection.`),
  vocab: [
    V('קָדַשׁ', 'קדשׁ', 'he was holy (qal)'),
    V('נִקְדַּשׁ', 'קדשׁ', 'he was sanctified (niphal)'),
    V('קִדַּשׁ', 'קדשׁ', 'he sanctified (piel)'),
    V('קֻדַּשׁ', 'קדשׁ', "he was made holy (pu'al)"),
    V('הִקְדִּישׁ', 'קדשׁ', 'he caused to sanctify (hiphil)'),
    V('הָקְדַּשׁ', 'קדשׁ', 'it was made holy (hopal)'),
    V('הִתְקַדֵּשׁ', 'קדשׁ', 'he sanctified himself (hitpael)'),
    V('בֵּרַךְ', 'ברך', 'he blessed (piel)'),
    V('נִשְׁמַר', 'שׁמר', 'he guarded himself (niphal)'),
    V('הִשְׁמֹר', 'שׁמר', 'to be guarded (hopal)'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'holy'),
    V('מַקְדֵּשׁ', 'קדשׁ', 'sanctifier (hiphil part.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which binyan is «הִקְדִּישׁ»?'),
    options: [
      T('Qal (simple)'),
      T('Niphal (passive)'),
      T('Piʿel (intensive)'),
      T('Hiphil (causative, הִ prefix)'),
    ],
    answer: 3,
    hint: T('Look at the {הִ} prefix and the {ִ} vowel before the {־י} suffix.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What does {הִשְׁמֹר} mean, given that {שׁמַר} is «to guard»?'),
      options: [
        T('he guards (qal)'),
        T('he guards himself (niphal)'),
        T('to be guarded (hopal)'),
        T('to make someone guard (hiphil)'),
      ],
      answer: 2,
      hint: T('{הִ} + {שֹׁ} indicates hophal: the passive of the causative.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form of {קדשׁ} to its pattern.'),
      pairs: [
        { a: '{קָדַשׁ}', b: T('qal') },
        { a: '{נִקְדַּשׁ}', b: T('niphal') },
        { a: '{קִדַּשׁ}', b: T('piel') },
        { a: '{הִתְקַדֵּשׁ}', b: T('hitpael') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Write the hiphil qatal of {קדשׁ} («he caused to sanctify»).'),
      answer: 'הִקְדִּישׁ',
      hint: T('{קָדַשׁ} → prefix {הִ}, vowel {ִ} and the {־י} of the perfective.'),
    },
    {
      kind: 'choose',
      prompt: T('In «קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה» (Isa 6:3), {קָדוֹשׁ} is:'),
      options: [
        T('a participle of the root {קדשׁ}'),
        T('the future of {קדשׁ}'),
        T('a numeral («three»)'),
        T('an independent noun'),
      ],
      answer: 0,
      hint: T('The form ends in {וֹשׁ} and has no article: it is a participle (ch. 14).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Hebrew verb = root + pattern (binyan). The pattern is the inflection; the root is the lexeme.',
      ),
    },
    {
      n: '2',
      text: T(
        "Qal is the neutral value; niphal passive/reflexive; piel intensive-factive; hiphil causative; pu'al and hophal are the passives.",
      ),
    },
    {
      n: '3',
      text: T(
        "Piel doubles the root's second letter; niphal and hiphil add a prefix ({נִ} and {הִ}) with a dagesh in the second letter.",
      ),
    },
    {
      n: '4',
      text: T(
        "The participle repeats the pattern's prefix: {מַקְדֵּשׁ} is hiphil («sanctifier»), {קֹדֶשׁ} is qal («holy»).",
      ),
    },
    {
      n: '5',
      text: T(
        'Not every root has all seven patterns: defective and guttural roots lose forms. Always check the actual word.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "The binyanim are the main reading tool of Biblical Hebrew. Two clauses with the same noun can have opposite senses if the verb changes pattern: {פּוֹרְשִׁים} (hiphil, «separating») and {פּוֹרְשִׁים} (pu'al, «separated») describe different actions and states. The verb is not only tense: it is an attitude towards who acts.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        "The seven patterns are not a grammarian's invention: they were already there in ancient Hebrew, when the people still spoke it. The Ugarit documents and the Ketef Hinnom papyri from the Jerusalem temple reveal the same system — meaning that the scribes of the Old Testament wrote the way their great-grandfathers did.",
      ),
    },
  ],
  examples: [
    { text: '{קָדַשׁ}', gloss: T('he was holy — qal') },
    { text: '{נִקְדַּשׁ}', gloss: T('he was sanctified — niphal (passive)') },
    { text: '{קִדַּשׁ}', gloss: T('he sanctified — piel (doubles the {ד})') },
    { text: '{קֻדַּשׁ}', gloss: T("he was made holy — pu'al (qal passive)") },
    { text: '{הִקְדִּישׁ}', gloss: T('he caused to sanctify — hiphil (causative)') },
    { text: '{הָקְדַּשׁ}', gloss: T('it was made holy — hophal (hiphil passive)') },
    { text: '{הִתְקַדֵּשׁ}', gloss: T('he sanctified himself — hitpael (reflexive piel)') },
    { text: '{בֵּרַךְ}', gloss: T('he blessed — piel of {ברך} «to bless»') },
    { text: '{נִשְׁמַר}', gloss: T('he guarded himself — niphal of {שׁמַר}') },
    { text: '{הִשְׁמֹר}', gloss: T('to be guarded — hophal of {שׁמַר}') },
    { text: '{מַקְדֵּשׁ}', gloss: T('sanctifier — hiphil participle') },
    { text: '{קָדוֹשׁ}', gloss: T('holy — participle of {קדשׁ} (Isa 6:3)') },
  ],
  tables: [
    {
      caption: T('Table 1 — How each pattern grows out of {קדשׁ}'),
      head: [T('Pattern'), T('3rd m. qatal'), T('Participle'), T('Gloss')],
      rows: [
        ['qal', '{קָדַשׁ}', '{קֹדֶשׁ}', T('he was/is holy')],
        ['niphal', '{נִקְדַּשׁ}', '{נִקְדֵּשׁ}', T('he was sanctified')],
        ['piel', '{קִדַּשׁ}', '{מְקַדֵּשׁ}', T('he sanctified')],
        ["pu'al", '{קֻדַּשׁ}', '{קָדוּשׁ}', T('he was made holy')],
        ['hiphil', '{הִקְדִּישׁ}', '{מַקְדֵּשׁ}', T('he caused to sanctify')],
        ['hopal', '{הָקְדַּשׁ}', '{מְקֻדָּשׁ}', T('it was made holy')],
        ['hitpael', '{הִתְקַדֵּשׁ}', '{מִתְקַדֵּשׁ}', T('he sanctified himself')],
      ],
    },
    {
      caption: T('Table 2 — How the pattern is formed'),
      head: [T('Operation'), T('Prefix'), T('Dagesh'), T('Vowel')],
      rows: [
        [T('qal (base)'), T('—'), T('in the 2nd letter'), '{ַ} (pataj)'],
        [T('niphal'), '{נִ}', T('in the 2nd letter'), T('{ַ} → {ְ} in the 1st letter')],
        [T('piel'), T('—'), T('doubles the 2nd letter'), '{ַ}'],
        [T('hiphil'), '{הִ}', T('in the 2nd letter'), '{ַ} → {ִ}'],
        [T('hitpael'), '{הִת}', T('in the 2nd letter'), '{ַ} → {ֵ}'],
      ],
    },
    {
      caption: T('Table 3 — Two roots across six patterns'),
      head: [T('Pattern'), T('Root {שׁמַר} «to guard»'), T('Root {נתן} «to give»')],
      rows: [
        ['qal', '{שָׁמַר}', '{נָתַן}'],
        ['niphal', '{נִשְׁמַר}', '{נִתַּן}'],
        ['piel', '{שָׁמֵר}', '{נְתַן}'],
        ['hiphil', '{הִשְׁמַר}', '{הִנָּתֵן}'],
        ['hopal', '{הִשְׁמֹר}', '{הֻנְתַּן}'],
        ['hitpael', '{הִתְשַׁמֵּר}', '{הִתְנַתֵּן}'],
      ],
    },
  ],
};
