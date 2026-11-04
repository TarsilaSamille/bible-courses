import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Gutturals'),
  subtitle: T('א ח ע ר — the four letters that do not obey'),
  section: T('Non-finite forms and gutturals'),
  body: C(`## What a guttural is

The gutturals are the five consonants {[אָחַע״ר]}: {א} aleph, {ח} het, {ע} ayin, {ה} he and {ר} resh. They are gutturals because they are pronounced in the throat, with the tongue touching the pharynx. All the other sounds are formed in the mouth or the palate; only these five are deep.

They cause four practical effects you will notice all through the Bible (Gesenius §22):

**1. They never take a strong dagesh.** Neither {א}, nor {ח}, nor {ע} can be doubled: {הַחָכְמָה} has a dagesh in the {ח}, but {הֶחָכְמָה} does not. Two gutturals in a row therefore ripple through the word.

**2. They prefer A vowels.** After a guttural, Hebrew tends towards {ַ}, {ָ} or {ֲ}, never towards {ִ} or {ֵ}. In {יַעֲמֹד} «he will stand» the {ע} forces an A vowel, and the following {ו} lengthens to {וֹ} to compensate.

**3. They steal the patah at the end of a word.** A final {ח} or {ע} accepts neither a long vowel nor closure: it inserts a short **furtive** {ַ} (furtive patah), written before it but pronounced after it: {רוּחַ} is read «rú-ach», {נֹחַ} «No-ach», {שָׂמֵחַ} «sã-mé-ach», {רָקִיעַ} «ra-kí-ach». The sound you hear after the {ח} is not written to its left.

**4. They take reduced vowels (hataf).** Under a guttural sometimes appears a «flattened» vowel: {ֲ} hataf patah, {ֱ} hataf segol, {ֳ} hataf qamats. The commonest cases are the initial {א} of {אֱלֹהִים} and {אֲדֹנָי} «Lord», the {ח} of {חֲכָמִים} «wise» and the {ע} of {עֲבָדִים} «servants».

## Two special letters: {ר} and {ה}

{ר} is not a guttural in the mouth, but it behaves like one in writing: it never takes a strong dagesh and it prefers A vowels. {ה} is different: it accepts a dagesh ({הֶסֶד}), but it also prefers A vowels, and as the final consonant of a prefix it pulls the {הָ} of the article and of other words.

## The furtive dagesh

One last effect appears precisely because of the gutturals. When {ב} {כ} {ל} {פ} {ק} stand at the end of a syllable, the Masoretes print a **furtive** dagesh to make audible the sound that would follow naturally: {לִבְךָ} «your heart», {לִגְּדֹל} «the mighty one», {הַלְלוּהָ} «his praise». The furtive dagesh shows up especially after {ר}, the guttural that precedes. Remember it as a scribal mark, not as a doubled sound.

## Why this matters when reading

Knowing the gutturals turns noise into pattern. In {רוּחַ אֱלֹהִים} the final {ַ} does not belong to the {ר} but to the {ח}. In {אֱלֹהִים} the {ֱ} is a hataf, not a full {ֶ}. In {יַעֲמֹד} the {ֲ} is a hataf, and the {וֹ} is compensatory lengthening. Three letters, three rules, one word.

Each guttural has its own habit: {א} and {ח} attract hataf often; final {ע} attracts furtive patah often; {ה} governs the dagesh of the word before it.

## The rafe rule

After a guttural, the letters {פ} and {ק} appear without dagesh, marked with {ֿ} (rafe) when the context requires a point. That is why {פֶּרַשׁ} «separate» (strong dagesh) contrasts with its emphatic shape: the dagesh marks solidity, the rafe marks weakness.

## Words to keep

{רוּחַ} «wind/spirit» · {חֶסֶד} «steadfast love» · {עַם} «people» (with guttural {ע}!) · {חָכְמָה} «wisdom» · {רֹעֶה} «shepherd» · {נֹחַ} «Noah» · {גָּבֹהַּ} «high» · {נָשִׁים} «women»

You can already pronounce all of them — what was missing was knowing **why** they sound that way.`),
  vocab: [
    V('רוּחַ', 'רוּחַ', 'wind, spirit'),
    V('חֶסֶד', 'חֶסֶד', 'steadfast love'),
    V('עַם', 'עַם', 'people'),
    V('חָכְמָה', 'חָכְמָה', 'wisdom'),
    V('אֲדֹנָי', 'אָדוֹן', 'Lord'),
    V('יַעֲמֹד', 'עמד', 'he will stand'),
    V('גָּבֹהַּ', 'גָּבֹהַּ', 'high'),
    V('נֹחַ', 'נֹחַ', 'Noah'),
    V('רָקִיעַ', 'רָקִיעַ', 'the expanse'),
    V('חֲכָמִים', 'חָכֵם', 'wise (pl.)'),
    V('עֲבָדִים', 'עֶבֶד', 'servants'),
    V('לִבְךָ', 'לֵב', 'your heart'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does «רוּחַ» end with a patah under the {ח}?'),
    options: [
      T('Scribal error'),
      T('Furtive patah: a final guttural steals a quick «a»'),
      T('Marks the plural'),
      T('Marks the feminine'),
    ],
    answer: 1,
    hint: T('The «ach» sound is heard after the {ח}, although the {ַ} is written to its left.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the guttural to the effect it produces.'),
      pairs: [
        { a: '{ע} final', b: T('furtive patah') },
        { a: '{א} inicial', b: T('hataf') },
        { a: '{ה} inicial', b: T('the article {הָ}') },
        { a: '{ר}', b: T('never takes a strong dagesh') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these words contains a hataf?'),
      options: [T('אֲדֹנָי'), T('שַׁמַּיִם'), T('בֵּית'), T('תּוֹרָה')],
      answer: 0,
      hint: T('The sign {ֲ} is a hataf patah: a short vowel under a guttural.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the Hebrew word for «your heart» (with the furtive dagesh).'),
      answer: 'לִבְךָ',
      hint: T('{לֵב} + {־ךָ} = {לִבְךָ}, with a furtive dagesh in the {ב}.'),
    },
    {
      kind: 'choose',
      prompt: T('Why does {הֶחָכְמָה} have no dagesh in the {ח} while {הַחָכְמָה} does?'),
      options: [
        T('Because {הֶ־} is the article with a long vowel'),
        T('Because {ח} is a guttural and cannot be doubled'),
        T('Because {הַחָכְמָה} is an archaic form'),
        T('Because the scribe left out the dot'),
      ],
      answer: 1,
      hint: T('Rule §1: no guttural takes a strong dagesh.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The gutturals are {א} {ח} {ע} {ה} {ר}: pronounced in the throat, they never take a strong dagesh and they pull A vowels.',
      ),
    },
    {
      n: '2',
      text: T(
        'The furtive patah appears in final {ח} and {ע}: written to the left of the letter, pronounced to its right — {רוּחַ} = «rú-ach».',
      ),
    },
    {
      n: '3',
      text: T(
        'A hataf is a reduced vowel that appears only under gutturals: {אֲדֹנָי} «Lord», {חֲכָמִים} «wise», {עֲבָדִים} «servants».',
      ),
    },
    {
      n: '4',
      text: T(
        'After a guttural the vowel avoids {ִ} and {ֵ} and lengthens to compensate: {יַעֲמֹד} «he will stand».',
      ),
    },
    {
      n: '5',
      text: T(
        'The furtive dagesh is a writing convention, not a doubled sound: {לִבְךָ} «your heart».',
      ),
    },
  ],
  notes: [
    {
      label: T('Sound versus letter:'),
      text: T(
        'Not every {ח} or {ע} in the Tanakh is a guttural: the rule is historical — {ח} and {ע} are gutturals when pronounced pharyngeally, which happens most of the time, but in a few loanwords (Persian proper names, for example) they are ordinary sibilants. The same holds for initial {ה}, which can be mere aspiration.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'Neighboring Semitic languages preserved the throat longer than Biblical Hebrew did: Aramaic and Arabic still have full gutturals in every position, which is why an Aramaic speaker recognizes a Hebrew guttural instantly. When you read {רוּחַ} aloud and feel the {ח} in your throat, you are speaking as it was spoken three thousand years ago.',
      ),
    },
  ],
  examples: [
    { text: '{רוּחַ}', gloss: T('wind, spirit — read «rú-ach»') },
    { text: '{נֹחַ}', gloss: T('Noah — read «No-ach»') },
    { text: '{גָּבֹהַּ}', gloss: T('high — furtive patah after {ֹ}') },
    { text: '{רָקִיעַ}', gloss: T('the expanse — furtive patah (Gen 1:6)') },
    { text: '{אֱלֹהִים}', gloss: T('God — hataf {ֱ} under the guttural {א}') },
    { text: '{אֲדֹנָי}', gloss: T('Lord — hataf {ֲ} under the {א}') },
    { text: '{חֲכָמִים}', gloss: T('wise — hataf {ֲ} under the {ח}') },
    { text: '{עֲבָדִים}', gloss: T('servants — hataf {ֲ} under the {ע}') },
    { text: '{יַעֲמֹד}', gloss: T('he will stand — guttural + compensatory lengthening') },
    { text: '{לִבְךָ}', gloss: T('your heart — furtive dagesh in the {ב}') },
    { text: '{עַם}', gloss: T('people — initial guttural {ע}, vowel {ַ}') },
    { text: '{חֶסֶד}', gloss: T('steadfast love — {ח} with dagesh (it is a rafe letter here)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The five gutturals and their properties'),
      head: [T('Letter'), T('Name'), T('Behaviour')],
      rows: [
        ['{א}', 'ʾālef', T('takes hataf, no dagesh')],
        ['{ח}', 'ḥēt', T('takes hataf, no dagesh')],
        ['{ע}', 'ʿayin', T('furtive patah when final')],
        ['{ה}', 'hē', T('takes dagesh; governs the article {הָ}')],
        ['{ר}', 'rēš', T('never takes a strong dagesh')],
      ],
    },
    {
      caption: T('Table 2 — Four guttural effects in action'),
      head: [T('Effect'), T('Example'), T('Gloss')],
      rows: [
        [T('No strong dagesh'), '{הֶחָכְמָה}', T('the wisdom (the {ח} is not doubled)')],
        [T('A vowel'), '{יַעֲמֹד}', T('he will stand')],
        [T('Furtive patah'), '{רוּחַ}', T('wind, spirit (read «rú-ach»)')],
        [T('Hataf'), '{אֲדֹנָי}', T('Lord')],
        [T('Furtive dagesh'), '{לִבְךָ}', T('your heart')],
      ],
    },
    {
      caption: T('Table 3 — Words with a furtive patah'),
      head: [T('Word'), T('Reading'), T('Gloss')],
      rows: [
        ['{רוּחַ}', 'rú-ach', T('wind, spirit')],
        ['{נֹחַ}', 'Nó-ach', T('Noah')],
        ['{רוּחַ}', 'rú-ach', T('wind, spirit')],
        ['{גָּבֹהַּ}', 'gavó-ah', T('high')],
        ['{רָקִיעַ}', 'ráqí-a', T('the expanse, the firmament')],
        ['{שָׂמֵחַ}', 'sã-mé-ach', T('glad')],
      ],
    },
  ],
};
