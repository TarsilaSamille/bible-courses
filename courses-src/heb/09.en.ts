import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('The essential verbs'),
  subtitle: T('הָלַךְ, בּוֹא, הָיָה, אָכַל: the roots that hold nearly every verse'),
  section: T('Verb and numeral'),
  body: C(`## Six roots the biblical text never lets go

A Hebrew root is not ready. {הלכ} alone is only a pattern of consonants; it becomes a verb in the {קָטַל} (qal) binyan, with the {cacac} vowels that qal imposes. The essential verbs of the course are six old roots, and none of them forms or inflects by a simple rule:

{הָלַךְ} walk / go
{בּוֹא} come / come
{הָיָה} be / be, be, happen
{אָכַל} eat / eat
{רָאָה} see / see
{שָׁמַע} hear / hear, obey

The rest of the verb arrives by derivation. {שָׁמַר} "to guard" in Pentateuchal Hebrew lives more as a guarantee than as a Gospel verb, but the same root yields {שָׁמַרְתָּ}, "you guarded", and {יְהוָה שֹׁמֵר}, "the LORD guards".

## Qatal (preterite) marks the concluded fact

When the text wants to say that something happened, it uses the qatal: the second consonant drops its vowel and the person suffix changes:

{הָלַךְ} he went / walked
{אָכַל} he ate
{רָאָה} he saw
{הָיָה} he was / happened

{הָיָה} is the most used verb in Biblical Hebrew. Almost every verse carries a {הָיָה} or shows a hidden {וַיְהִי}, and the translation opens a dilemma: {הָיָה} at the head of a clause, alone, with a proper noun after it, usually is "and he lived" or "and it happened", and not plain "was".

{וַיְהִי} is the continuous preterite of {הָיָה}, and it is the signature of Hebrew narrative: {וַיְהִי בַּיָּמִים הָהֵם} says "and it came to pass in those days" (Lk 2:1). When the verse opens with {וַיְהִי}, the story sits in the continuous past, in what was unfolding.

## The forms that reverse the gaze

The qatal also marks adverbs and possession, and the two most important uses are these:

- **{לִי הַהִוא}, "it was given to me"**. Portuguese demands the subject in {הָיָה}: "there was". Hebrew leaves {הָיָה} alone and hangs the owner with {לִי}. The most common bad translation is weak: "he had".
- **{מִצְוָה} and {נֹתֵן}**. The imperfect of give and take can mark repetition or law: {וַיִּתֵּן}, "and he gave"; {נוֹתֵן}, "the one who gives". The imperfect of {נָתַן} is what appears in the Torah as a participle.

## In the Bible

Genesis 1:3 opens with {וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר}, and the verb that continues is {וַיְהִי־אוֹר}: Greek reads it as {ἐγένετο φῶς}, "and there was light". In Hebrews 11:3 the same two verbs in Hebrew become one clause. When {וַיְהִי} echoes in Aramaic, the moment shifts: the clause stops being a report and becomes marked time.

Matthew 5:45 has {בְּנֵי־אָבִיכֶם}, and the verb of making is {מַמְטִיר} — the imperfect of {הִמְטִיר}, "he makes it rain". The imperfect locates the act in a vague moment, which can be already or still. That is the form Matthew's Greek renders by {βρέχων} — participle, "the one who makes it rain".`),
  vocab: [
    V('הָלַךְ', 'הָלַךְ', 'he went / he walked'),
    V('בָּא', 'בּוֹא', 'he came'),
    V('הָיָה', 'הָיָה', 'he was / happened'),
    V('אָכַל', 'אָכַל', 'he ate'),
    V('רָאָה', 'רָאָה', 'he saw'),
    V('שָׁמַע', 'שָׁמַע', 'he heard / obeyed'),
    V('נָתַן', 'נָתַן', 'he gave'),
    V('לָקַח', 'לָקַח', 'he took'),
    V('עָשָׂה', 'עָשָׂה', 'he did'),
    V('יָדַע', 'יָדַע', 'he knew'),
    V('צִוָּה', 'צִוָּה', 'he commanded'),
    V('שָׁתָה', 'שָׁתָה', 'he drank'),
    V('לָבַשׁ', 'לָבַשׁ', 'he wore'),
    V('קָרָא', 'קָרָא', 'he called / read'),
    V('אֹהֵל', 'אֹהֵל', 'tent'),
    V('קִרְיַת', 'קִרְיַת', 'city'),
    V('לֵאמֹר', 'לֵאמֹר', 'saying'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Qatal marks a concluded fact: {אָכַל} "he ate", {הָלַךְ} "he went". The Portuguese tense does not confuse with it.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{הָיָה} opening a verse often renders "and it happened", "and he lived", "and there was". Alone, never plain "was".',
      ),
    },
    {
      n: '§3',
      text: T(
        '{וַיְהִי} marks narrative: when it opens the verse, the text pushes toward what was unfolding.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Possession verbs in qatal take {לִי}, never "to have": {היה לי}, "it was to me" → "I had". {היה לי בית}, "I had a house" (not Jn 14:2, but cf. Lk 2:49: {בְּבֵית אָבִי}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{וַיִּתֵּן} with the direct object and the subject in dative writes the order of {וַיְצַו}: {וַיְצַו יְהוָה אֱלֹהִים עַל־הָאָדָם} (Gn 2:16).',
      ),
    },
  ],
  notes: [
    {
      label: T('{הָיָה} is not the verb "to have"'),
      text: T(
        'Hebrew has no verb "to have". Where Portuguese says "he has", Hebrew uses {הָיָה לוֹ} in the past or the present continuous. Where it says "he had", it uses {הָיָה לוֹ} in qatal. The translation that writes "he had" erases the structure that says the possessor went through an event — having is something that happened.',
      ),
    },
    {
      label: T('{וַיְהִי} leads the translator astray'),
      text: T(
        'In Portuguese every opening with {וַיְהִי} forces a choice between "happened", "and it was", "and so it was" and "once upon a time". The common error is to read it as "once upon a time": it is a marked past of discourse, not a sublime beginning.',
      ),
    },
  ],
  examples: [
    { text: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים', gloss: T('Gn 1:1 — {בָּרָא} is qatal: a fact that happened.') },
    {
      text: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר',
      gloss: T('Gn 1:3 — {יְהִי} is the jussive of {הָיָה}, "let there be".'),
    },
    { text: 'וַיְהִי־אוֹר', gloss: T('Gn 1:3 — {וַיְהִי} + {אוֹר}: "and there was light", narrative.') },
    { text: 'וַיְהִי בַּיָּמִים הָהֵם', gloss: T('Lk 2:1 — {וַיְהִי} marks days in progress, not an instant.') },
    { text: 'הָיָה כֵּן', gloss: T('qatal form of {הָיָה} with an affirmation: "it was so".') },
    {
      text: 'אֹתִי נָקָם',
      gloss: T('qatal of {נָקַם}: something happened to him; Greek reads {ἐγένετο}.'),
    },
    {
      text: 'וַיְצַו יְהוָה',
      gloss: T('Gn 2:16 — {וַיְצַו} is the wayyiqtol of {צִוָּה}: narrative, immediate past.'),
    },
    {
      text: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר',
      gloss: T('Gn 1:4 — {וַיַּרְא} is the wayyiqtol of {רָאָה}: following action.'),
    },
    { text: 'וַיִּתֵּן לָהֶם', gloss: T('imperfect of {נָתַן} with dative: "and he gave to them".') },
    {
      text: 'אֹכֵל מַלְאָךְ',
      gloss: T('Gn 18 — the active participle describes the angel coming; {אֹכֵל} precedes {אָכַל}.'),
    },
  ],
  tables: [
    {
      caption: T('Qatal of the essentials, person by person'),
      head: [T('Verb'), T('he'), T('she'), T('they'), T('we')],
      rows: [
        [T('{הָלַךְ}'), T('{הָלַךְ}'), T('{הָלְכָה}'), T('{הָלְכוּ}'), T('{הָלַכְנוּ}')],
        [T('{בּוֹא}'), T('{בָּא}'), T('{בָּאָה}'), T('{בָּאוּ}'), T('{בָּאנוּ}')],
        [T('{הָיָה}'), T('{הָיָה}'), T('{הָיְתָה}'), T('{הָיוּ}'), T('{הָיִינוּ}')],
        [T('{אָכַל}'), T('{אָכַל}'), T('{אָכְלָה}'), T('{אָכְלוּ}'), T('{אָכַלְנוּ}')],
        [T('{רָאָה}'), T('{רָאָה}'), T('{רָאֲתָה}'), T('{רָאוּ}'), T('{רָאִינוּ}')],
        [T('{שָׁמַע}'), T('{שָׁמַע}'), T('{שָׁמְעָה}'), T('{שָׁמְעוּ}'), T('{שָׁמַעְנוּ}')],
        [T('{נָתַן}'), T('{נָתַן}'), T('{נָתְנָה}'), T('{נָתְנוּ}'), T('{נָתַנּוּ}')],
        [T('{לָקַח}'), T('{לָקַח}'), T('{לָקְחָה}'), T('{לָקְחוּ}'), T('{לָקַחְנוּ}')],
      ],
    },
    {
      caption: T('{וַיְהִי} against {הָיָה}: two verbs for two tenses'),
      head: [T('Form'), T('Tense'), T('Use'), T('Example')],
      rows: [
        [T('{הָיָה}'), T('qatal'), T('punctual fact'), T('{הָיָה כֵן}')],
        [T('{וַיְהִי}'), T('wayyiqtol'), T('narrative in progress'), T('{וַיְהִי בַּיָּמִים}')],
        [T('{יְהִי}'), T('jussive'), T('will, order'), T('{יְהִי אוֹר}')],
        [T('{הָיוּ}'), T('qatal plural'), T('past fact of many'), T('{הָיוּ יָמִים}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {וַיְהִי בַּיָּמִים הָהֵם}, what does {וַיְהִי} mark?'),
    options: [
      T('A single closed fact'),
      T('Narrative in progress in the past'),
      T('An order or wish'),
      T('A future tense'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "וַיְהִי ___ אוֹר" (Gn 1:3) with the verb "to be".'),
      answer: 'אוֹר',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the qatal 3rd person.'),
      pairs: [
        { a: T('{הָלַךְ}'), b: T('{he went}') },
        { a: T('{רָאָה}'), b: T('{he saw}') },
        { a: T('{אָכַל}'), b: T('{he ate}') },
        { a: T('{בּוֹא}'), b: T('{he came}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {וַיְהִי כְּדְבַר יְהוָה}, {וַיְהִי} indicates:'),
      options: [
        T('A present command'),
        T('Narrative already in progress'),
        T('An infinitive verb'),
        T('A possessive pronoun'),
      ],
      answer: 1,
    },
  ],
};
