import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Weak verbs and the wayyiqtol'),
  subtitle: T('וַיֹּאמֶר — the chain that tells the Bible'),
  section: T('Verb and numeral'),
  body: C(`## The engine of narrative

Almost all of the Bible's narrative runs on one single verb form: the **wayyiqtol** (also called waw consecutive). It is built with {וַ} + the 3rd m. of the verb, and it means «and it came to pass». Thanks to it, Genesis 1-11 becomes a chain of actions:

{וַיֹּאמֶר} «and he said» · {וַיַּרְא} «and he saw» · {וַיִּקְרָא} «and he called» · {וַיִּשְׁמַע} «and he heard» · {וַיָּבֹא} «and he came» · {וַיַּבְדֵּל} «and he separated»

The graphic signal is the {ו} with {ַ} (patah) followed by a strong dagesh in the next letter: {וַיֹּאמֶר}, {וַיִּקְרָא}. Spotting that pair means spotting half the Bible.

Technical explanation: historically the wayyiqtol grows out of the **yiqtol** (imperfect) with a copulative {ו} and a dagesh naf (the doubling that neutralizes the vowel). That is why many public grammars teach: {וַ} + yiqtol = narrative past. The shapes are identical to the yiqtol with {ו}.

## Three verbs you cannot memorize like the others

Roots with gutturals (ch. 13) or with {א}/{ו} deform the paradigm (Gesenius §62-75). They are the «weak» verbs, and knowing them is enough:

{אמר} «to say»: {אָמַר} «he said» · {יֹאמַר} «he will say» · {יֹאמֵר} «and he said»
{היה} «to be»: {הָיָה} «he was» · {יִהְיֶה} «he will be» · {יְהִי} «let there be»
{בוא} «to come»: {בָּא} «he came» · {יָבוֹא} «he will come» · {יָבֹא} «let him come»

The irregularity is visible: {יֹאמַר} has {ו} with holam, {יִהְיֶה} has {י} with hiriq, {יָבוֹא} doubles the {ב}. None of that is a mistake: it is why they appear on almost every list of words worth memorizing.

## Wayyiqtol and aspect

Wayyiqtol is not merely «past»: it is **narrative imperfective**. It tells what happens inside an open scene. In Genesis 3, {וַיֹּאמֶר} «and he said» opens the scene, and the next verb {וַיִּקְרָא} «and he called» continues in the same scene. When the story jumps scenes, the verb switches to the qatal ({בָּרָא}, {הָיָה}), and that contrast is what gives the biblical style its breathing rhythm.

## Building a chain

Try reading this sequence from chapter 1, marking the {וַ} each time:

{וַיֹּאמֶר} e {וַיַּרְא} e {וַיַּבְדֵּל} e {וַיִּקְרָא} «and he said… and he saw… and he separated… and he called» (Gen 1:3-5)

Notice that {וַיַּרְא} «and he saw» and {וַיַּבְדֵּל} «and he separated» share the pattern: {וַ} + {י} + dagesh. Once you see the pattern, the text stops being a word list and becomes a told story.

## Watch what is not wayyiqtol

Not every initial {וַ} is narrative. In {וְהִיא} «and she», {וְאַתָּה} «and you» the {ו} is just the conjunction «and» with sheva. The difference is the {ַ}: with {ַ} and dagesh it is narrative; without it, plain coordination.

In practice almost every {וַ} with dagesh in a narrative is wayyiqtol, and almost every {ו} with sheva is coordination. Biblical grammar works like this: read the pattern, confirm with the context.`),
  vocab: [
    V('וַיֹּאמֶר', 'אמר', 'and he said'),
    V('וַיַּרְא', 'ראה', 'and he saw'),
    V('וַיִּקְרָא', 'קרא', 'and he called'),
    V('וַיִּשְׁמַע', 'שׁמע', 'and he heard'),
    V('וַיָּבֹא', 'בוא', 'and he came'),
    V('וַיַּבְדֵּל', 'בדל', 'and he separated'),
    V('וַיְהִי', 'היה', 'and there was'),
    V('יֹאמַר', 'אמר', 'he will say'),
    V('יִהְיֶה', 'היה', 'he will be'),
    V('יָבוֹא', 'בוא', 'he will come'),
    V('וְהִיא', 'הִיא', 'and she'),
    V('אָמַר', 'אמר', 'he said (qatal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does the initial «וַ» do in «וַיֹּאמֶר»?'),
    options: [
      T('Negates the verb'),
      T('Turns the verb into narrative past («and he said»)'),
      T('Forms the plural'),
      T('Marks the feminine'),
    ],
    answer: 1,
    hint: T('The {וַ} followed by a strong dagesh is the narrative marker.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the form to its tense/mood.'),
      pairs: [
        { a: '{אָמַר}', b: T('qatal (past)') },
        { a: '{יֹאמַר}', b: T('yiqtol (future)') },
        { a: '{וַיֹּאמֶר}', b: T('wayyiqtol (narrative)') },
        { a: '{לֵאמֹר}', b: T('infinitive') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these forms is a wayyiqtol?'),
      options: [T('וְהִיא'), T('וַיָּבֹא'), T('וְאֵת'), T('וְאַתָּה')],
      answer: 1,
      hint: T('Rule §4: {וַ} with dagesh is narrative; {ו} with sheva is coordination.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the wayyiqtol of {שׁמע} «to hear» (3rd m.).'),
      answer: 'וַיִּשְׁמַע',
      hint: T('{וַ} + {י} with strong dagesh + {שְׁמַע}.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {היה} called a weak verb?'),
      options: [
        T('Because the root has only two letters'),
        T('Because the final {ה} changes vowel with tense ({הָיָה}, {יִהְיֶה})'),
        T('Because it appears only in the Old Testament'),
        T('Because it is an irregular verb'),
      ],
      answer: 1,
      hint: T('Compare {הָיָה} with {יִהְיֶה}: the {ה} takes no strong dagesh in the future.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Wayyiqtol = {וַ} + verb; in practice, {וַ} + dagesh in the following letter is the narrative signal.',
      ),
    },
    {
      n: '2',
      text: T(
        'Wayyiqtol is imperfective aspect: it tells what happens inside a scene; the qatal marks the jump to another scene.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbs with gutturals or with {א}/{ו} are «weak» and change vowel and dagesh: memorize {אמר}, {היה}, {בוא}, {מות} and {ראה} as one block.',
      ),
    },
    {
      n: '4',
      text: T('Not every {וַ} is narrative: {ו} with sheva ({וְ}) is just the conjunction «and».'),
    },
    {
      n: '5',
      text: T(
        'In {וַיֹּאמֶר} the subject comes from context ({אֱלֹהִים}), not from a pronoun: Hebrew dispenses with the explicit pronoun.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        "Because the wayyiqtol tells what is happening, its frequency is a theological thermometer. In the creation accounts (Gen 1) it dominates; in the Psalms and Proverbs the qatal and the participle dominate; in the historical psalms the chain of {וַ} grows. Reading the ratio between the two is reading the author's attitude to the facts: what is put on stage and what is already accomplished fact.",
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The name «wayyiqtol» is modern: ancient Hebrew grammarians did not use it, called the phenomenon {וַיִּקְטֹל} and studied it as one of the «qatal forms» (the ten endings of {קטל}: {הוּא}, {הוּז}, {הוּם}…). The missionaries who worked out the modern system gave us the current, easier term.',
      ),
    },
  ],
  examples: [
    { text: '{וַיֹּאמֶר}', gloss: T('and he said — {וַ} + dagesh + {אמר}') },
    { text: '{וַיַּרְא}', gloss: T('and he saw — {וַיִּ} + {ראה}') },
    { text: '{וַיִּקְרָא}', gloss: T('and he called — {וַיִּ} + {קרא}') },
    { text: '{וַיִּשְׁמַע}', gloss: T('and he heard — {וַיִּ} + {שׁמע}') },
    { text: '{וַיָּבֹא}', gloss: T('and he came — from {בוא} (weak verb)') },
    { text: '{וַיַּבְדֵּל}', gloss: T('and he separated — piel of {בדל} (Gen 1:4)') },
    { text: '{יֹאמַר}', gloss: T('he will say — future of {אמר} with holam') },
    { text: '{יִהְיֶה}', gloss: T('he will be — future of {היה}') },
    { text: '{יָבוֹא}', gloss: T('he will come — future of {בוא} with strong {ב}') },
    { text: '{וְהִיא}', gloss: T('and she — {ו} + sheva: plain coordination') },
    { text: '{וַיְהִי}', gloss: T('and there was — narrative of {היה} (Gen 1:3)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Weak verbs: the three you meet most'),
      head: [T('Verb'), T('Qatal (past)'), T('Infinitive'), T('Yiqtol (future)'), T('Wayyiqtol')],
      rows: [
        [T('{אמר} «to say»'), '{אָמַר}', '{לֵאמֹר}', '{יֹאמַר}', '{וַיֹּאמֶר}'],
        [T('{היה} «to be»'), '{הָיָה}', '{לִהְיוֹת}', '{יִהְיֶה}', '{וַיְהִי}'],
        [T('{בוא} «to come»'), '{בָּא}', '{לָבוֹא}', '{יָבוֹא}', '{וַיָּבֹא}'],
        [T('{מות} «to die»'), '{מָת}', '{לָמוּת}', '{יָמוּת}', '{וַיָּמוּת}'],
      ],
    },
    {
      caption: T('Table 2 — The wayyiqtol in the Genesis 1 narrative'),
      head: [T('Form'), T('Gloss'), T('Reference')],
      rows: [
        ['{וַיֹּאמֶר}', T('and he said'), 'Gn 1.3'],
        ['{וַיְהִי}', T('and there was'), 'Gn 1.3'],
        ['{וַיַּרְא}', T('and he saw'), 'Gn 1.4'],
        ['{וַיַּבְדֵּל}', T('and he separated'), 'Gn 1.4'],
        ['{וַיִּקְרָא}', T('and he called'), 'Gn 1.5'],
        ['{וַיַּעַשׂ}', T('and he made'), 'Gn 1.7'],
      ],
    },
    {
      caption: T('Table 3 — Narrative {וַ} or plain coordination?'),
      head: [T('Form'), T('Signal'), T('Reading')],
      rows: [
        ['{וַיֹּאמֶר}', T('{וַ} + dagesh'), T('and he said (narrative)')],
        ['{וְהִיא}', T('{ו} + sheva'), T('and she')],
        ['{וְאֵת}', T('{ו} + sheva'), T('and (marker)')],
        ['{וַיְהִי}', T('{וַ} + dagesh'), T('and there was (narrative)')],
      ],
    },
  ],
};
