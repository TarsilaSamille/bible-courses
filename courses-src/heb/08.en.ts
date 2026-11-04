import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Pronominal suffixes'),
  subtitle: T('סוּסִי, אָבִינוּ — «my» and «our» glued to the word'),
  section: T('First texts and particles'),
  body: C(`## The possessed phrase in two letters

Hebrew has neither «of» nor possessive pronouns: it glues a **suffix** to the end of the word (Gesenius §91-103). In {סוּסִי} «my horse», the final {־ִי} is the pronoun «I». The advantage is brevity — two letters instead of a whole word — and the statistical advantage is enormous: about a third of all Tanakh words end that way.

The suffixes attach to three things: the **noun** (possession), the **verb** (direct object) and the **preposition** (object as well). They are the same ten.

## On the noun

{סוּסִי} «my horse» · {סוּסְךָ} «your horse (m.)» · {סוּסְךְ} «your horse (f.)» · {סוּסוֹ} «his horse» · {סוּסָהּ} «her horse» · {סוּסֵנוּ} «our horse» · {סוּסֵיכֶם} «your (m. pl.) horse» · {סוּסָם} «their horse»

The shape of {אָב} «father» is irregular and therefore famous: {אָבִי} «my father», {אָבִינוּ} «our father». It is literally the first word of the prayer that every Jew and every Christian knows.

## On the verb: the direct object

{בָּרָא} + {הוּ} → {בְּרָאוֹ} «he created him»
{שָׁמַר} + {נִי} → {שְׁמָרַנִי} «he guarded me»
{קָרָא} + {נִי} → {קְרָאֻנִי} «he called me»

Mind the vowel: the 1st person suffix {־נִי} raises the root vowel to {־וּ} ({שְׁמָרַנִי}, {זְכֹרֵנִי}). You do not need to memorize the rule: read the forms and the pattern appears.

## On the preposition: the indirect object

{עִם} + {־ִי} → {עִמִּי} «with me»
{אֶל} + {־ךָ} → {אֵלֶיךָ} «to you»
{ל} + {־נוּ} → {לָנוּ} «to us»
{ב} + {־ךָ} → {בְּךָ} «in you»

So {אֱלֹהַי בְּךָ בָטָחְתִּי} (Ps 25:2) is literally «my God, in you I trust»: the preposition {בְּ} took the suffix {־ךָ} and the verb {בָטָחְתִּי} took {־תִּי}. Two persons in one clause, two suffixes.

## The suffix goes at the end of the group

The practical rule: the suffix sticks to the **last** word of the phrase, not necessarily to the noun it qualifies. In {דְּבַר־מֶלֶךְ} «the king's word», the possessive appears as {דְּבַר־מֶלֶךְּוֹ} «the king's word — his» — and the reader works out whose the king is. The position is the last point of the chain.

## Watch out for ambiguous shapes

Some words absorb the suffix and end up with two readings. {בֵּיתִי} can be «my house» ({בַּיִת} + {־ִי}) or «inside me» ({בַּיִת} + locative {־י}, written short). Context decides: in {בֵּיתִי} and {בֵּיתִךְ} the possessive reading is the common one.

The same is true of {אִתּוֹ} «with him» (which looks like {אִתּי} «with me») and of {אֵלֶיךָ} «to you» versus {אֵלֶיךְ} «to your». A tiny difference with a huge effect on the reading.

## Sentences to keep

{סוּסִי} «my horse» · {אָבִינוּ} «our father» · {עִמִּי} «with me» · {בְּךָ} «in you» · {לָנוּ} «for us» · {בְּרָאוֹ} «he created him».`),
  vocab: [
    V('סוּסִי', 'סוּס', 'my horse'),
    V('סוּסְךָ', 'סוּס', 'your horse'),
    V('סוּסוֹ', 'סוּס', 'his horse'),
    V('סוּסָהּ', 'סוּס', 'her horse'),
    V('סוּסֵנוּ', 'סוּס', 'our horse'),
    V('אָבִי', 'אָב', 'my father'),
    V('אָבִינוּ', 'אָב', 'our father'),
    V('בְּרָאוֹ', 'ברא', 'he created him'),
    V('עִמִּי', 'עִם', 'with me'),
    V('לָנוּ', 'לְ', 'to/for us'),
    V('בְּךָ', 'בְּ', 'in you'),
    V('אֵלֶיךָ', 'אֶל', 'to you'),
    V('שָׁמַר', 'שׁמר', 'to keep (root)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «סוּסִי» («my horse»), what does the suffix {־ִי} mean?'),
    options: [T('«my» (1st person)'), T('«his» (3rd person)'), T('plural'), T('feminine')],
    answer: 0,
    hint: T('Compare {סוּסוֹ} «his horse» and {סוּסֵנוּ} «our horse».'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Which suffix in «אָבִינוּ» means «our»?'),
      answer: 'נוּ',
      hint: T('They are the last two letters, with {ֶ} (segol) before the {נ}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the base to the result with the suffix.'),
      pairs: [
        { a: '{סוּס} + {־ִי}', b: '{סוּסִי}' },
        { a: '{בָּרָא} + {־וֹ}', b: '{בְּרָאוֹ}' },
        { a: '{עִם} + {־ִי}', b: '{עִמִּי}' },
        { a: '{ל} + {־נוּ}', b: '{לָנוּ}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «אֱלֹהַי בְּךָ בָטָחְתִּי» (Ps 25:2), how many pronouns appear?'),
      options: [
        T('Two: {־ךָ} on the preposition and {־תִּי} on the verb'),
        T('One: only {־תִּי}'),
        T('Three: {אֱלֹהַי}, {־ךָ} and {־תִּי}'),
        T('None: the clause uses only independent pronouns'),
      ],
      answer: 0,
      hint: T('Rule §1: the same ten suffixes serve possession and object.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is {בֵּיתִי} an ambiguous form?'),
      options: [
        T('It can be «my house» or «inside me»'),
        T('It has two different vowels'),
        T('It is a verb, not a noun'),
        T('It lost the article {הַ}'),
      ],
      answer: 0,
      hint: T('Rule §5: the same {־י} can be possessive or locative.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The pronominal suffix marks possession, direct object and indirect object — the same ten serve all three.',
      ),
    },
    {
      n: '2',
      text: T(
        'The suffix glues itself to the last word of the group: {דְּבַר־מֶלֶךְּוֹ} «the word of his king», not «the word of his king».',
      ),
    },
    {
      n: '3',
      text: T('The 1st person suffix {־נִי} makes the root vowel become {־וּ}: {שָׁמַר} → {שְׁמָרַנִי}.'),
    },
    {
      n: '4',
      text: T(
        'The 3rd person suffixes ({-וֹ}, {־ָהּ}, {־ָם}, {־ָן}) never take a dagesh; the 2nd person ones ({-ְךָ}, {־ְךְ}, {־ֵיכֶם}) always form a dagesh in the final letter.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some words absorb the suffix and become ambiguous: {בֵּיתִי} «my house» or «inside me».',
      ),
    },
  ],
  notes: [
    {
      label: T('By the numbers:'),
      text: T(
        'The suffix {־ִי} appears some 1,900 times in the Tanakh and {־וֹ} over 2,600 times. No other morphological category comes close. If you learn one thing about Hebrew grammar, let it be this: person lives at the end of the word, not at its beginning.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        "{אָבִי} «my father» survived in languages that no longer speak Hebrew: Syriac, Middle Persian, some European languages, and Portuguese and old Castilian in forms like «abba». Job and the creed's closing line both end with it. A two-letter suffix that has travelled three thousand years.",
      ),
    },
  ],
  examples: [
    { text: '{סוּסִי}', gloss: T('my horse — {־ִי} = «my»') },
    { text: '{סוּסוֹ}', gloss: T('his horse — {־וֹ} = «his»') },
    { text: '{סוּסָהּ}', gloss: T('her horse — {־הּ} with qamats') },
    { text: '{סוּסֵנוּ}', gloss: T('our horse — {־נוּ} = «our»') },
    { text: '{אָבִינוּ}', gloss: T('our father — the first word of the prayer') },
    { text: '{בְּרָאוֹ}', gloss: T('he created him — object {־וֹ} glued to the verb') },
    { text: '{שְׁמָרַנִי}', gloss: T('he guarded me — vowel {ַ} + {־נִי}') },
    { text: '{עִמִּי}', gloss: T('with me — {עִם} + {־ִי}') },
    { text: '{אֵלֶיךָ}', gloss: T('to you — {אֶל} + {־ךָ} (dagesh in {כ})') },
    { text: '{בְּךָ}', gloss: T('in you — {בְּ} + {־ךָ}') },
    { text: '{בָטָחְתִּי}', gloss: T('I trust — {־תִּי} = «I» (Ps 25:2)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The ten pronominal suffixes'),
      head: [T('Person'), T('Suffix'), T('Example with {סוּס}'), T('Gloss')],
      rows: [
        [T('1st sg.'), '{־ִי}', '{סוּסִי}', T('my horse')],
        [T('2nd m. sg.'), '{־ְךָ}', '{סוּסְךָ}', T('your (m.) horse')],
        [T('2nd f. sg.'), '{־ְךְ}', '{סוּסְךְ}', T('your (f.) horse')],
        [T('3rd m. sg.'), '{־וֹ}', '{סוּסוֹ}', T('his horse')],
        [T('3rd f. sg.'), '{־ָהּ}', '{סוּסָהּ}', T('her horse')],
        [T('1st pl.'), '{־ֵנוּ}', '{סוּסֵנוּ}', T('our horse')],
        [T('2nd pl. m.'), '{־ֵיכֶם}', '{סוּסֵיכֶם}', T('your horses')],
        [T('3rd pl.'), '{־ָם}', '{סוּסָם}', T('their horse')],
        [T('2nd pl. f.'), '{־ֵיכֶן}', '{סוּסֵיכֶן}', T('your horses (f.)')],
        [T('3rd pl. f.'), '{־ָן}', '{סוּסָן}', T('their horse (f.)')],
      ],
    },
    {
      caption: T('Table 2 — The same suffix in three jobs'),
      head: [T('Function'), T('Base + suffix'), T('Result'), T('Gloss')],
      rows: [
        [T('Possession (noun)'), '{סוּס} + {־ִי}', '{סוּסִי}', T('my horse')],
        [T('Object (verb)'), '{שָׁמַר} + {־נִי}', '{שְׁמָרַנִי}', T('he guarded me')],
        [T('Indirect object (preposition)'), '{ב} + {־ךָ}', '{בְּךָ}', T('in you')],
      ],
    },
    {
      caption: T('Table 3 — Famous forms you need to know'),
      head: [T('Form'), T('Analysis'), T('Gloss')],
      rows: [
        ['{אָבִי}', T('{אָב} + {־ִי} (assimilated shape)'), T('my father')],
        ['{אָבִינוּ}', T('{אָב} + {־ינוּ}'), T('our father')],
        ['{בְּרָאוֹ}', T('{בָּרָא} + {־וֹ} (object)'), T('he created him')],
        ['{עִמִּי}', T('{עִם} + {־ִי}'), T('with me')],
        ['{אֵלֶיךָ}', T('{אֶל} + {־ךָ}'), T('to you')],
        ['{לָנוּ}', T('{ל} + {־נוּ}'), T('to us')],
        ['{בְּךָ}', T('{ב} + {־ךָ}'), T('in you')],
        ['{בֵּיתִי}', T('ambiguous: possession or locative'), T('my house / inside me')],
      ],
    },
  ],
};
