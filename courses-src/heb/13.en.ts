import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Reading: Psalm 23:1-3'),
  subtitle: T('יְהוָה רֹעִי — the most beloved psalm, word by word'),
  section: T('Non-finite forms and gutturals'),
  body: C(`## The text

{יְהוָה רֹעִי לֹא אֶחְסָר} «The LORD is my shepherd; I shall not want»

{בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי} «in green pastures he makes me lie down»

{עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי} «beside still waters he leads me»

{נַפְשִׁי יְשׁוֹבֵב} «he restores my soul»

Four verses, and almost everything you have studied so far is here.

## Verse 1: the noun with a suffix

{רֹעִי} is the noun {רֹעֶה} «shepherd» with the suffix {־ִי} (ch. 8). Note that it is **not** a participle: {רֹעִי} is a common noun with a possessive, and the whole clause is a nominal clause — perfectly normal in Hebrew: {אֱלֹהִים טוֹב} «God is good» has no verb at all.

{אֶחְסָר} is the 1st person qatal of {חסר} «to lack». With {לֹא} in front, a negated qatal renders the present: «I do not lack» — and Portuguese and Spanish translations use the future («I shall not want»). Negation of the perfective is one of the most elegant resources of the language, and you will meet it all through the Psalms.

A detail: o SENHOR is the divine name par excellence, written {י} + {ה} + {ו} + {ה} in order not to say «Adonai» (see ch. 13).

## Verse 2: construct, hiphil and suffix

{בִּנְאוֹת דֶּשֶׁא} is a chain of construct: {ב} «in» + the plural of {נֶאֶה} «pasture» ({בִּנְאוֹת}) + {דֶּשֶׁא} «greenness». The rendering gathers it: «in pastures of grass» = «in green pastures».

{יַרְבִּיצֵנִי} is the most interesting verb of the verse: root {רבץ} «to lie down», **hiphil** pattern («to make lie down»), with the suffix {־נִי} «me». Portuguese and English render it with a transitive verb («he makes me lie down») where Hebrew uses a causative. Remember: hiphil = «to make someone do» (ch. 9).

The {ֵ} in place of the usual {ַ} shows what the suffix {־נִי} does to the verb; it is the same rule as in {שְׁמָרַנִי}.

## Verse 3: maqaf, construct and piel

{עַל־מֵי מְנֻחוֹת} brings three things in one verse: a maqaf joining {עַל} «beside» to {מֵי} «waters» (construct of {מַיִם}, ch. 7); and {מְנֻחוֹת}, the plural of {מְנוּחָה} «rest» with {־וֹת} instead of {־ִים} because the noun is feminine (ch. 3).

{יְנַהֲלֵנִי} is hiphil of {נהל} «to lead» + {־נִי}. A few words later in the same verse, {יְשׁוֹבֵב} is the **piel** of {שׁוב} «to return»: the piel of this verb means «to bring back» = «to restore». Notice the difference: {נהל} in hiphil is «to lead» (action), {שׁוב} in piel is «to restore» (transformation of the object).

{נַפְשִׁי} deserves a note: {נֶפֶשׁ} means at once «soul», «throat» and «appetite». In the psalms, «my soul» often carries the sense of «everything I desire».

## What this psalm teaches

Psalm 23 is a complete portrait of the grammar: noun + suffix (v. 1), construct (vv. 2-3), hiphil with object (vv. 2-3), piel (v. 3), the dual {מַיִם} (v. 3), feminine plural (v. 3), negated qatal (v. 1), the divine name (v. 1). Anyone who understands verses 1-3 understands poetic Hebrew — the rest of the book is application.

If you want to close the psalm: in verse 6, {רוּחַ} «wind/spirit» comes back at the same time as {שׁוב} «return» and {נַפְשִׁי} «soul»: {וְשָׂבַת רוּחַ} is «and you will return», with the verb {שׁבַת} (qatal) instead of the piel. The change of pattern changes the tone: from «he restores me» to «and you return».`),
  vocab: [
    V('רֹעִי', 'רֹעֶה', 'my shepherd'),
    V('יְהוָה', 'יהוה', 'the LORD'),
    V('אֶחְסָר', 'חסר', 'I lack'),
    V('לֹא', 'לֹא', 'not, no'),
    V('יַרְבִּיצֵנִי', 'רבץ', 'he makes me lie down'),
    V('מְנֻחוֹת', 'מְנוּחָה', 'resting places (pl.)'),
    V('יְנַהֲלֵנִי', 'נהל', 'he leads me'),
    V('נַפְשִׁי', 'נֶפֶשׁ', 'my soul'),
    V('יְשׁוֹבֵב', 'שׁוב', 'he restores (piel)'),
    V('דֶּשֶׁא', 'דֶּשֶׁא', 'greenness, grass'),
    V('בִּנְאוֹת', 'נֶאֶה', 'pastures'),
    V('רוּחַ', 'רוּחַ', 'wind, spirit'),
    V('צַלְמַוֶת', 'צַלְמָוֶת', 'shadow of death'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does the suffix in «רֹעִי» mean?'),
    options: [
      T('«my» (my shepherd)'),
      T('«his» (his shepherd)'),
      T('plural (shepherds)'),
      T('feminine (shepherdess)'),
    ],
    answer: 0,
    hint: T('It is the same {־ִי} as in {סוּסִי} «my horse» (ch. 8).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What does {יַרְבִּיצֵנִי} mean literally?'),
      options: [
        T('«he rested»'),
        T('«he makes me lie down» (hiphil + object)'),
        T('«I lie down»'),
        T('«he repairs»'),
      ],
      answer: 1,
      hint: T('Rule §3: hiphil is causative, and {־נִי} is the object «me».'),
    },
    {
      kind: 'match',
      prompt: T('Match the word to its analysis.'),
      pairs: [
        { a: '{רֹעִי}', b: T('noun + suffix') },
        { a: '{מְנֻחוֹת}', b: T('feminine plural') },
        { a: '{יְשׁוֹבֵב}', b: T('piel') },
        { a: '{מֵי}', b: T('dual in construct') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {לֹא אֶחְסָר}, the negated qatal {אֶחְסָר} renders:'),
      options: [
        T('past: «I did not lack»'),
        T('present: «I do not lack»'),
        T('imperative: «do not lack»'),
        T('conditional: «if I did not lack»'),
      ],
      answer: 1,
      hint: T('Rule §2: {לֹא} + qatal = negated present.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Psalm 23:1 with the noun + suffix: «יְהוָה ___» (my shepherd).'),
      answer: 'רֹעִי',
      hint: T('{רֹעֶה} + {־ִי} makes «shepherd in the field»: the suffix marks possession.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{רֹעִי} is noun + suffix, not participle: Hebrew allows verbless nominal clauses ({יְהוָה רֹעִי}).',
      ),
    },
    {
      n: '2',
      text: T('{לֹא} + qatal renders the present: {לֹא אֶחְסָר} «I do not lack» = «I shall not want».'),
    },
    {
      n: '3',
      text: T(
        'Hiphil + {־נִי} renders Portuguese «he makes me + verb»: {יַרְבִּיצֵנִי} «he makes me lie down».',
      ),
    },
    {
      n: '4',
      text: T(
        'The feminine plural uses {־וֹת}: {מְנֻחוֹת} «resting places» (noun {מְנוּחָה}), not {־ִים}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Piel of {שׁוב} means «to restore» (bring back), while qatal of {שׁב} means «to return»: the pattern decides the direction.',
      ),
    },
  ],
  notes: [
    {
      label: T('Under the written form:'),
      text: T(
        'The psalms came down to us with the vowels of the medieval scribes, but the original psalm text was written in consonants only — verse 1 survives in that form too. What you are reading is therefore a thousand-year-old reading, and every word still works.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        'The verb {רבץ} «to lie down» has produced a new kinship term: {רֹעִי} is not a participle, but modern Hebrew still calls the field shepherd {רוֹעִי}. Two languages apart, one shared root: sheep and shepherd stayed together in the field, and the verb kept that pastoral scent across three thousand years.',
      ),
    },
  ],
  examples: [
    { text: 'o SENHOR', gloss: T('the LORD — the divine name, written with initial {י}') },
    { text: '{רֹעִי}', gloss: T('my shepherd — {רֹעֶה} + {־ִי}') },
    { text: '{לֹא אֶחְסָר}', gloss: T('I shall not want — negated qatal') },
    { text: '{בִּנְאוֹת דֶּשֶׁא}', gloss: T('green pastures — chain of construct') },
    { text: '{יַרְבִּיצֵנִי}', gloss: T('he makes me lie down — hiphil + {־נִי}') },
    { text: '{עַל־מֵי}', gloss: T('beside the waters — maqaf + construct') },
    { text: '{מֵי}', gloss: T('waters — dual in construct') },
    { text: '{מְנֻחוֹת}', gloss: T('resting places — feminine plural') },
    { text: '{יְנַהֲלֵנִי}', gloss: T('he leads me — hiphil + {־נִי}') },
    { text: '{נַפְשִׁי}', gloss: T('my soul — {נֶפֶשׁ} (soul/throat/appetite)') },
    { text: '{יְשׁוֹבֵב}', gloss: T('he restores — piel of {שׁוב}') },
    { text: '{וְשָׂבַת רוּחַ}', gloss: T('and you will return (v. 6) — qatal of {שׁוב}') },
    { text: '{לֹא־אִירָא}', gloss: T('I will fear no evil (v. 4) — negated perfective') },
  ],
  tables: [
    {
      caption: T('Table 1 — Psalm 23:1-3 word by word'),
      head: [T('Word'), T('Gloss'), T('Analysis')],
      rows: [
        ['o SENHOR', T('the LORD'), T('the divine name')],
        ['{רֹעִי}', T('my shepherd'), T('{רֹעֶה} + {־ִי} (suffix, ch. 8)')],
        ['{לֹא}', T('not'), T('negates a qatal: present')],
        ['{אֶחְסָר}', T('I lack'), T('1st sg. qatal of {חסר}')],
        ['{בִּנְאוֹת}', T('pastures'), T('plural of {נֶאֶה} in construct')],
        ['{דֶּשֶׁא}', T('greenness'), T('construct chain')],
        ['{יַרְבִּיצֵנִי}', T('he makes me lie down'), T('hiphil of {רבץ} + {־נִי}')],
        ['{מֵי}', T('waters'), T('construct of {מַיִם} (dual)')],
        ['{מְנֻחוֹת}', T('resting places'), T('fem. pl. of {מְנוּחָה}')],
        ['{יְנַהֲלֵנִי}', T('he leads me'), T('hiphil of {נהל} + {־נִי}')],
        ['{נַפְשִׁי}', T('my soul'), T('{נֶפֶשׁ} + {־ִי}')],
        ['{יְשׁוֹבֵב}', T('he restores'), T('piel of {שׁוב}')],
      ],
    },
    {
      caption: T('Table 2 — The four roots of the psalm and their patterns'),
      head: [T('Root'), T('Qal'), T('Piel'), T('Hiphil'), T('Gloss (ch. 23)')],
      rows: [
        ['{רבץ}', '{רָבֵץ}', '{רִבֵּץ}', '{יַרְבִּיץ}', T('to rest (v. 2)')],
        ['{נהל}', '{נָהַל}', '{נֵהַל}', '{יַנְהֵל}', T('to lead (v. 3)')],
        ['{שׁוב}', '{שָׁב}', '{יְשׁוֹב}', '{יְשִׁיב}', T('to return (v. 6) / restore (v. 3)')],
        ['{חסר}', '{חָסֵר}', '—', '{יַחְסֵר}', T('to lack (v. 1)')],
      ],
    },
  ],
};
