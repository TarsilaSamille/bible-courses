import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Volitives and negation'),
  subtitle: T('אַל־תִּירָא, נַעֲשֶׂה — the will and its negation'),
  section: T('Non-finite forms and gutturals'),
  body: C(`## Three wills (Gesenius §48)

Hebrew sorts the volitional forms into three groups, all built on the {קְטֹל} skeleton:

**Imperative** — the order of the speaker: {כְּתֹב} «write!» · {שְׁמַע} «hear!» · {לֵךְ} «go!» · {צֵא} «go out!». It is the bare skeleton, with no prefix and no suffix (in 3rd m. and 2nd m.).

**Cohortative** — «let me…», «let us…»: {אֶכְתְּבָה} «let me write» (1st m.) · {תִּכְתֹּב} «write (cohort.)» (2nd m.) · {נַעֲשֶׂה} «let us make» (1st pl.) · {יִכְתְּבוּ} «let them write» (3rd pl.). The {ה} of the 1st person and the strong dagesh in the {ת} mark the person.

**Jussive** — «let him…», «let there be…»: {יְהִי} «let there be» · {יִכְתֹּב} «let him write» · {יָבֹא} «let him come» · {תֹּאמַר} «let her say». Here the dagesh of the second letter **falls away** and the vowel shortens: compare {כּוֹתֵב} (participle) with {יִכְתֹּב} (jussive).

The two most repeated wills in Genesis are {נַעֲשֶׂה} «let us make» (Gen 1:26) and {יְהִי} «let there be» (Gen 1:3): to create and to speak.

## Israel's creed

{שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד} «Hear, O Israel: the LORD our God, the LORD is one» (Deut 6:4). The verb {שְׁמַע} in the imperative is the same word as the noun {שֵׁם} «name» — and the wordplay between them is the point of the verse: hearing God's name is keeping his command.

## Negation: two doors

Hebrew negates in two ways, and the choice is obligatory:

**{לֹא}** + a declarative verb (indicative or future): {לֹא־תִרְצָח} «thou shalt not kill» (Exod 20:13) · {לֹא־תִּגֶּנּב} «thou shalt not steal» · {לֹא־תְעָנֶה} «thou shalt not answer».

**{אַל}** + a jussive: {אַל־תִּירָא} «fear not!» · {אַל־תִּפְגְּעִי} «do not urge me!» (Ruth 1:16) · {אַל־תִּתְעַבֵּר} «do not pass!». The {אַל} is shorter and punchier: it negates will, request, encouragement.

After {אַל} a jussive always follows; after {לֹא}, an indicative or a future. Filling a clause with {אַל} marks the register of exhortation — which is why Scripture has dozens of «fear not» sayings.

Simplifying: {אַל} belongs to the scene of dialogue; {לֹא} belongs to the law and to narrative.

## {אַל}, {לֹא} and {ו}

The coordinating {ו} changes the force of the negation: {וְלֹא יְהִי} (Gen 1:5) «and there was not» is {יְהִי} in the jussive with {לֹא} — the hardest negation, «and it did not happen». In {וְלֹא יְהוּא} «and it was not» the {לֹא} negates the {הָיָה}.

The construction {אֵין} + verb (or + participle) is the third door: {אֵין־לוֹ} «he has not» — {אֵין} + the noun {ו} + {־לוֹ}.

## The tense of the will

The imperative belongs to the present of the scene; the jussive and cohortative appear in orders, instructions and, with the sequence {ו}, in the narrative future: «and the priest shall come» (Num 3:1), with the {י} of the future. That is how Hebrew tells what is still going to happen as if it were an order.

## Build your own sentences

{כְּתֹב} «write!» · {נִכְתֹּב} «let us write!» · {יִכְתֹּב} «let him write» · {אַל־תִּכְתֹּב} «do not write!» · {לֹא תִכְתֹּב} «you shall not write»

Five modes from one root. This is the most regular part of Hebrew grammar: find the {קְטֹל} skeleton and the rest follows.`),
  vocab: [
    V('שְׁמַע', 'שׁמע', 'hear! (imperative)'),
    V('כְּתֹב', 'כתב', 'write! (imperative)'),
    V('לֵךְ', 'הלך', 'go! (imperative)'),
    V('נַעֲשֶׂה', 'עשׂה', 'let us make (cohortative)'),
    V('אֶכְתְּבָה', 'כתב', 'let me write'),
    V('יִכְתֹּב', 'כתב', 'let him write (jussive)'),
    V('יְהִי', 'היה', 'let there be (jussive)'),
    V('יָבֹא', 'בוא', 'let him come (jussive)'),
    V('אַל־תִּירָא', 'ירא', 'fear not!'),
    V('אַל־תִּפְגְּעִי', 'פגע', 'do not urge me (f.)'),
    V('לֹא', 'לֹא', 'not'),
    V('אל', 'אל', 'not (with jussive)'),
    V('אֵין', 'אֵין', 'there is not, he has not'),
    V('תֵּלִדִי', 'ילד', 'you shall have (jussive, Gen 3:16)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Deut 6:4: «___ יִשְׂרָאֵל» (Hear, O Israel).'),
    answer: 'שְׁמַע',
    hint: T('Imperative of {שׁמע} «to hear» — the bare {קְטֹל} skeleton.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the form to the verbal mode.'),
      pairs: [
        { a: '{כְּתֹב}', b: T('imperative') },
        { a: '{נַעֲשֶׂה}', b: T('cohortative') },
        { a: '{יִכְתֹּב}', b: T('jussive') },
        { a: '{אֶכְתְּבָה}', b: T('cohortative') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which negation of «fear not» is grammatically CORRECT?'),
      options: [T('אַל־תִּירָא'), T('לֹא־תִּירָא'), T('לֹא־תִּרְאֶה'), T('אֵין־תִּירָא')],
      answer: 0,
      hint: T('Rule §3: {אַל} requires a jussive, and {תִּירָא} is the jussive of {ירא}.'),
    },
    {
      kind: 'choose',
      prompt: T('What distinguishes the jussive {יִכְתֹּב} from the qatal {כָּתַב}?'),
      options: [
        T('The {י} prefix'),
        T('The loss of the dagesh in the second letter and the shortened vowel'),
        T('The {־וּ} suffix'),
        T('The article {הַ}'),
      ],
      answer: 1,
      hint: T('Compare the two shapes letter by letter: the {כ} of {יִכְתֹּב} has no dagesh.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the 1st person plural cohortative of «let us make» (root {עשׂה}).'),
      answer: 'נַעֲשֶׂה',
      hint: T('The 1st pl. cohortative starts with {נ} + strong dagesh: {נַעֲשֶׂה}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Imperative = the bare {קְטֹל} skeleton; the cohortative gains {ָה} (1st m.) or a strong dagesh in the {ת}; the jussive loses the dagesh of the second letter.',
      ),
    },
    {
      n: '2',
      text: T(
        'The 3rd person jussive is «let him do»; the 1st person cohortative is «let me do» — both express will, with a different accent.',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֹא} negates indicative and future; {אַל} negates the jussive. Swapping the particles produces an odd clause.',
      ),
    },
    {
      n: '4',
      text: T(
        'Negating {יְהִי} with the sequence {ו} — {וְלֹא יְהִי} — is the strongest negation in Scripture: «and it did not happen».',
      ),
    },
    {
      n: '5',
      text: T(
        'Jussive and cohortative are identical in several persons; context (conversation, prayer, narrative) decides the reading.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegesis:'),
      text: T(
        'In Genesis 3, after the serpent speaks, God says to Eve: {הִשְׁמוֹתְךָ תֵּלִדִי} «your pain in childbearing shall increase» — {תֵּלִדִי} is a jussive, not a future: it is declared divine will, which is why it is fulfilled in Genesis 3:16. Rendering {תֵּלִדִי} as «you will» erases the will; rendering it as «he wills that you have» reveals it.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The jussive has almost disappeared from Modern Hebrew and from everyday Spanish, but it survives intact in liturgical texts and in shapes like «Let there be!» (the jussive of «to be»). It is the one Greek verb form that Portuguese and Spanish kept alive by inheritance: Latin had {sīt}, Greek {ἔστω}, and Portuguese said «seja» until the eighteenth century.',
      ),
    },
  ],
  examples: [
    { text: '{שְׁמַע}', gloss: T('hear! — imperative of {שׁמע} (Deut 6:4)') },
    { text: '{לֵךְ}', gloss: T('go! — imperative of {הלך}') },
    { text: '{נַעֲשֶׂה}', gloss: T('let us make — 1st pl. cohortative (Gen 1:26)') },
    { text: '{אֶכְתְּבָה}', gloss: T('let me write — 1st m. cohortative') },
    { text: '{יִכְתֹּב}', gloss: T('let him write — jussive (dagesh dropped)') },
    { text: '{יְהִי}', gloss: T('let there be — jussive of {הָיָה} (Gen 1:3)') },
    { text: '{יָבֹא}', gloss: T('let him come — jussive of {בוא}') },
    { text: '{תֹּאמַר}', gloss: T('let her say — 3rd f. jussive') },
    { text: '{יִכְתְּבוּ}', gloss: T('let them write — 3rd pl. cohortative') },
    { text: '{לֹא־תִרְצָח}', gloss: T('thou shalt not kill — {לֹא} + future (Exod 20:13)') },
    { text: '{אַל־תִּירָא}', gloss: T('fear not! — {אַל} + jussive') },
    { text: '{אַל־תִּפְגְּעִי}', gloss: T('do not urge me! — 2nd f. jussive (Ruth 1:16)') },
    { text: '{וְלֹא יְהִי}', gloss: T('and there was not — maximal negation (Gen 1:5)') },
    { text: '{אֵין־לוֹ}', gloss: T('he has not — {אֵין} + {ו} + {־לוֹ}') },
    { text: '{שֵׁם}', gloss: T('name — same root as {שְׁמַע} «hear»') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three volitives built from {כתב}'),
      head: [T('Mode'), T('Form'), T('Person'), T('Gloss')],
      rows: [
        [T('Imperative'), '{כְּתֹב}', T('2nd m.'), T('write!')],
        [T('Cohortative'), '{אֶכְתְּבָה}', T('1st m.'), T('let me write')],
        [T('Cohortative'), '{נִכְתֹּב}', T('2nd pl. m.'), T('let us write!')],
        [T('Cohortative'), '{יִכְתְּבוּ}', T('3rd pl.'), T('let them write')],
        [T('Jussive'), '{יִכְתֹּב}', T('3rd m.'), T('let him write')],
        [T('Jussive'), '{תֹּאמַר}', T('3rd f.'), T('let her say')],
        [T('Jussive (of {היה})'), '{יְהִי}', T('3rd m.'), T('let there be')],
      ],
    },
    {
      caption: T('Table 2 — The two doors of negation'),
      head: [T('Particle'), T('Requires'), T('Example'), T('Gloss')],
      rows: [
        ['{לֹא}', T('indicative / future'), '{לֹא־תִרְצָח}', T('thou shalt not kill (Exod 20:13)')],
        ['{אַל}', T('jussive'), '{אַל־תִּירָא}', T('fear not!')],
        ['{לֹא}', T('jussive (harsher)'), '{וְלֹא יְהִי}', T('and there was not (Gen 1:5)')],
        ['{אֵין}', T('verb / noun'), '{אֵין־לוֹ}', T('he has not')],
        ['{אֵל}', T('alternative shape of {אַל}'), '{אַל־תִּתְעַבֵּר}', T('do not pass!')],
      ],
    },
  ],
};
