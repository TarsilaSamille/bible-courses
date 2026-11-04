import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('The verb and the clause'),
  subtitle: T('בָּרָא, בְּרֵאשִׁית — why the Hebrew verb does not inflect for person'),
  section: T('Verb'),
  body: C(`## The verb does not inflect, and that is the point

In Latin, {creavit} is 3rd person: the ending {־it} says who created. In Greek, {ἔκτισεν} likewise. In Hebrew, {בָּרָא} of Genesis 1.1 has no ending at all, and Greek still has to be 3rd person because context says so.

That is the difference that decides the reading: **the Hebrew verb rarely inflects for person**. What inflects are the suffixes, and only when the subject has to be marked: {בָּרָאתִּי} «I created» · {בָּרָאתָּ} «you created» · {בָּרָאנוּ} «we created» · {בָּרָאוּ} «they created». The 3rd person singular has no suffix, which is why it is identical to the plural without {ו} and to the verb with no subject at all.

The consequence is that **an isolated verb has no owner**. {בָּרָא} can be «created», «he created», «God created» and «they created», and every reading fits the form. The subject sits in {בְּרֵאשִׁית} at the front of the clause or in {אֱלֹהִים} right after, and it is the dictionary of context that settles it. Greek settles it in the form; Hebrew obliges you to settle it in the context.

## Four people that are one

The same form {בָּרָא} serves more than one person in the same verse, and the change is made by the rest of the clause. In Genesis 1.1, {בְּרֵאשִׁית} «in the beginning» and {אֱלֹהִים} «God» give the subject: {בָּרָא} is «God created». In Genesis 1.2, {וְהָאָרֶץ הָיְתָה} «and the earth was» brings the sequence {וְ}, and the verb {בָּרָא} is still the same one: the form has not changed, the subject has changed with the clause before it.

The practical rule is worth keeping: **in Hebrew the suffixes inflect for person, and the wayyiqtol never inflects at all**. The {וַ} + verb of {וַיֹּאמֶר} (ch. 10) marks narrative past, not person. The whole wayyiqtol is 3rd person masculine singular, which is why English writes «he said» and «they said» with the same word.

## The nominal clause

The Hebrew clause does not need a verb. A clause like {יְהוָה רֹעִי} «the LORD is my shepherd» (Ps 23.1) has a noun and nothing else, and means what English requires a verb and a copula for.

That changes what the translator looks for. In a clause, look for a verb first; if there is none, what follows is a noun serving as predicate, or a participle, or a whole clause with no verb. The Hebrew verb, when it appears, is the short piece; everything else is names.

And the reverse also holds: many Hebrew clauses have the verb and almost no noun. {עָשָׂה} «he did» on its own is a whole clause. English and Spanish translation have to decide the object Hebrew left out, and that decision belongs to the translator, not to the grammar.

## Where the verb sits in the clause

If the verb does not inflect for person, it does not fix the place of the subject either. Hebrew word order is noun-verb-noun, but the noun that comes first may be the subject or the object, and the verb decides which.

{בָּרָא אֱלֹהִים} «God created» — the noun is the subject because the verb {בָּרָא} «to create» is transitive and comes before its complement.

{אֱלֹהִים בָּרָא} «God created» — the same word in the same position, and the noun is the object: what was created is the thing being created.

Old Hebrew, unlike Greek, marks neither case. A translator writes the same sentence in both orders, and a student needs the verb and the logic to say which of the two nouns is the subject.

The result shows up in the first line of Genesis. {בְּרֵאשִׁית בָּרָא אֱלֹהִים} is «in the beginning created God»: the noun {בְּרֵאשִׁית} stands before the verb and looks like the subject, and it is a preposition with a noun. The subject of {בָּרָא} is the second noun, {אֱלֹהִים}. One line of text, and three decisions that only someone who knows the verb can make.`),
  vocab: [
    V('בָּרָא', 'ברא', 'created (3rd s., no suffix)'),
    V('בָּרָאתִּי', 'ברא', 'I created'),
    V('בָּרָאתָּ', 'ברא', 'you created'),
    V('בָּרָאנוּ', 'ברא', 'we created'),
    V('בָּרָאוּ', 'ברא', 'they created'),
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'in the beginning'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'God'),
    V('בָּרָא אֱלֹהִים', 'ברא', 'God created (subject + verb)'),
    V('אֱלֹהִים בָּרָא', 'ברא', 'what was created (object + verb)'),
    V('וַיֹּאמֶר', 'אמר', 'and he said (wayyiqtol)'),
    V('יְהוָה רֹעִי', 'רֹעֶה', 'the LORD is my shepherd'),
    V('הָיְתָה', 'היה', 'was (qatal 3rd f.)'),
    V('וְהָאָרֶץ', 'אֶרֶץ', 'and the earth'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {בָּרָא אֱלֹהִים} «God created», why is {אֱלֹהִים} the subject?'),
    options: [
      T('Because the verb {בָּרָא} is transitive and comes before its complement'),
      T('Because {אֱלֹהִים} has the article'),
      T('Because {בָּרָא} has a dagesh'),
      T('Because {אֱלֹהִים} is plural'),
    ],
    answer: 0,
    hint: T(
      'Rule §4: with no case marking, a transitive verb in initial position marks the object.',
    ),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match the verb form to the person it marks.'),
      pairs: [
        { a: '{בָּרָא}', b: T('3rd person (no suffix)') },
        { a: '{בָּרָאתִּי}', b: T('1st person singular') },
        { a: '{בָּרָאוּ}', b: T('3rd person plural') },
        { a: '{בָּרָאתָּ}', b: T('2nd person singular') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete Genesis 1:1: «בְּרֵאשִׁית ___ אֶת הַשָּׁמַיִם» (created).'),
      answer: 'בָּרָא',
      hint: T('It is the qatal of {ברא} «to create», with no suffix: 3rd person.'),
    },
    {
      kind: 'choose',
      prompt: T('What does the form {וַיֹּאמֶר} «and he said» show about person?'),
      options: [
        T('That the wayyiqtol is always 3rd person masculine singular'),
        T('That the wayyiqtol inflects for person'),
        T('That {וַ} is a 3rd person suffix'),
        T('That the verb has an explicit subject'),
      ],
      answer: 0,
      hint: T('Rule §2: the wayyiqtol does not inflect; {וַ} marks tense, not person.'),
    },
    {
      kind: 'choose',
      prompt: T('In {יְהוָה רֹעִי} (Ps 23:1), what kind of clause is it?'),
      options: [
        T('A nominal clause: there is no verb'),
        T('A clause with a verb'),
        T('A clause with a participle'),
        T('A clause with a negation'),
      ],
      answer: 0,
      hint: T('Rule §3: Hebrew admits a clause with no verb.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Hebrew verb rarely inflects for person: {בָּרָא} has no ending, and context gives the subject.',
      ),
    },
    {
      n: '2',
      text: T(
        'What inflects for person are the suffixes ({בָּרָאתִּי}, {בָּרָאוּ}), and the wayyiqtol never inflects: {וַ} marks tense, not person.',
      ),
    },
    {
      n: '3',
      text: T('The Hebrew clause may have no verb: {יְהוָה רֹעִי} is a complete nominal clause.'),
    },
    {
      n: '4',
      text: T(
        'With no case marking, the order is noun-verb-noun and the verb decides the roles: {בָּרָא אֱלֹהִים} has {אֱלֹהִים} as subject; {אֱלֹהִים בָּרָא} has it as object.',
      ),
    },
  ],
  notes: [
    {
      label: T('Common error:'),
      text: T(
        'There is no Hebrew verb form for the 3rd person plural without {ו}, and the 3rd person singular takes no suffix. The result is that {בָּרָא} serves for «created» and, in a context with a plural suffix around it, for «they created». Anyone translating verb for verb without reading the rest of the clause gets the person wrong in most of the clauses in the Tanakh.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The person inflection Hebrew does have is a leftover from the Semitic verb. The suffixes {תִּי}, {תָּ}, {נוּ}, {וּ} and {תֶּם} are the ones English still shows in its participles, {loved} and {loves}. Greek and Latin made the inflection inside the word; Hebrew threw the person outward, which is why it survives in Europe and not here.',
      ),
    },
  ],
  examples: [
    { text: '{בָּרָא}', gloss: T('created — 3rd person, no suffix (Gen 1.1)') },
    { text: '{בָּרָאתִּי}', gloss: T('I created — suffix {־תִּי}') },
    { text: '{בָּרָאתָּ}', gloss: T('you created — suffix {־תָּ}') },
    { text: '{בָּרָאנוּ}', gloss: T('we created — suffix {־נוּ}') },
    { text: '{בָּרָאוּ}', gloss: T('they created — suffix {־וּ}') },
    {
      text: '{בְּרֵאשִׁית בָּרָא}',
      gloss: T('in the beginning created — the subject comes after (Gen 1.1)'),
    },
    { text: '{בָּרָא אֱלֹהִים}', gloss: T('God created — the noun is the subject') },
    { text: '{אֱלֹהִים בָּרָא}', gloss: T('what was created — the noun is the object') },
    { text: '{וַיֹּאמֶר}', gloss: T('and he said — wayyiqtol, always 3rd m.') },
    { text: '{יְהוָה רֹעִי}', gloss: T('the LORD is my shepherd — a nominal clause (Ps 23.1)') },
    { text: '{וְהָאָרֶץ הָיְתָה}', gloss: T('and the earth was — {ו} of sequence (Gen 1.2)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Person inflection in {ברא}'),
      head: [T('Person'), T('Suffix'), T('Form'), T('Gloss')],
      rows: [
        [T('3rd s. (m.)'), T('—'), '{בָּרָא}', T('created (he)')],
        [T('3rd pl.'), '{־וּ}', '{בָּרָאוּ}', T('they created')],
        [T('2nd s. (m.)'), '{־תָּ}', '{בָּרָאתָּ}', T('you created')],
        [T('2nd s. (f.)'), '{־תְּ}', '{בָּרָאתְּ}', T('you created (f.)')],
        [T('1st s.'), '{־תִּי}', '{בָּרָאתִּי}', T('I created')],
        [T('1st pl.'), '{־נוּ}', '{בָּרָאנוּ}', T('we created')],
        [T('2nd pl. m.'), '{־תֶּם}', '{בָּרָאתֶּם}', T('you (pl.) created')],
      ],
    },
    {
      caption: T('Table 2 — The wayyiqtol does not inflect'),
      head: [T('Form'), T('What the {וַ} does'), T('Person'), T('Gloss')],
      rows: [
        ['{וַיֹּאמֶר}', T('marks the narrative'), T('always 3rd m.'), T('and he said')],
        ['{וַיִּשְׁמַע}', T('marks the narrative'), T('always 3rd m.'), T('and he heard')],
        ['{וַיְהִי}', T('marks the narrative'), T('always 3rd m.'), T('and it happened')],
        ['{וְהוּא}', T('is only the conjunction «and»'), T('{הוּ} is a pronoun'), T('and he')],
      ],
    },
  ],
};
