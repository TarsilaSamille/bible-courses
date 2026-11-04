import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('2-1-2 Adjectives'),
  subtitle: T('ἀγαθός, -ή, -όν: agreement and position'),
  section: T('The noun'),
  body: C(`## One adjective, three declensions

The most frequent adjectives in the New Testament follow the 2-1-2 pattern: the masculine uses 2nd-declension endings ({ἀγαθός}, like {λόγος}), the feminine uses 1st-declension ones ({ἀγαθή}, like {ἀλήθεια}), and the neuter returns to the 2nd ({ἀγαθόν}, like {ἔργον}). The dictionary lists the full trio — {ἀγαθός, -ή, -όν} — and with it you decline every form.

The feminine follows the chapter-2 alpha rule: after ρ, ε or ι it ends in {-α} ({δίκαιος, -α, -ον}; {μικρός, -ά, -όν}); otherwise in {-η} ({ἀγαθός, -ή, -όν}). Note: {ἅγιος} has its stem ending in iota, so the feminine is {ἁγία}, with pure alpha.

## Full agreement

The adjective agrees with its noun in gender, number AND case — all three categories at once. {ὁ ἀγαθὸς λόγος} (masc. sg. nom.), {ἡ ἁγία γραφή} (fem. sg. nom.), {τὰ καλὰ ἔργα} (neut. pl. nom./acc.). Missing any of the three breaks agreement, and the Greek ear caught it instantly.

In reading, agreement is your ally: facing an adjective, look for the noun of the same gender, number and case — nearly always the nearest neighbor with matching endings. In Paul's long sentences, this pairing resolves half the syntax.

## Attributive, predicate, substantive

Everything chapter 1 said about the article holds for adjectives: with a repeated article, the adjective qualifies ({ὁ λόγος ὁ ἀγαθός} "the good word"); without an article beside an articulated noun, it predicates ({ὁ λόγος ἀγαθός} "the word is good"). Greek drops the verb "to be" in the present — position does the work.

And with no noun at all, the adjective plus article becomes a noun: {οἱ ἀγαθοί} "the good", {τὸ ἀγαθόν} "the good (thing)", {οἱ πτωχοί} "the poor" (Matt 5:3). This substantive use is extremely frequent: {ὁ δίκαιος} "the righteous one", {τὰ κρυπτά} "the hidden things". Whenever you see article + adjective with no noun nearby, translate it as a noun.`),
  vocab: [
    V('ἀγαθός', 'ἀγαθός', 'good'),
    V('ἀγαθή', 'ἀγαθός', 'good (fem.)'),
    V('ἀγαθόν', 'ἀγαθός', 'good (neut.)'),
    V('ἅγιος', 'ἅγιος', 'holy (masc.)'),
    V('ἁγία', 'ἅγιος', 'holy (fem.)'),
    V('δίκαιος', 'δίκαιος', 'just, righteous'),
    V('δικαία', 'δίκαιος', 'just (fem.)'),
    V('καλός', 'καλός', 'beautiful, good'),
    V('μικρός', 'μικρός', 'small'),
    V('πονηρός', 'πονηρός', 'evil, wicked'),
    V('νεκρός', 'νεκρός', 'dead'),
    V('πιστός', 'πιστός', 'faithful'),
    V('μακάριος', 'μακάριος', 'blessed'),
    V('ἄλλος', 'ἄλλος', 'other, another'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the feminine form of "ἀγαθός" (good)?'),
    options: [T('ἀγαθή'), T('ἀγαθά'), T('ἀγαθόν'), T('ἀγαθοῦ')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('"ὁ δοῦλος ὁ ἀγαθός" means…'),
      options: [
        T('The servant is good (predicate)'),
        T('The good servant (attributive)'),
        T('Of the good servant (genitive)'),
        T('O good servant (vocative)'),
      ],
      answer: 1,
      hint: T('The article repeated before the adjective — rule §4.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Complete the feminine dative singular: ___ γραφῇ ("to the holy Scripture", from ἅγιος).',
      ),
      answer: 'ἁγίᾳ',
      hint: T('1st-declension dative singular: iota subscript.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its gender.'),
      pairs: [
        { a: 'ἀγαθοί', b: 'masc. pl.' },
        { a: 'ἀγαθαί', b: 'fem. pl.' },
        { a: 'ἀγαθά', b: 'neut. pl.' },
        { a: 'δικαίαν', b: 'fem. sg. ac.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '2-1-2 adjective: masculine = 2nd declension, feminine = 1st, neuter = 2nd. The dictionary gives the trio ({καλός, -ή, -όν}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Feminine in -α after ρ, ε, ι ({δικαία}, {μικρά}, {ἁγία}); in -η elsewhere ({ἀγαθή}, {καλή}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Triple agreement: the adjective matches its noun in gender, number and case, without exception.',
      ),
    },
    {
      n: '4',
      text: T(
        'Repeated article = attributive; article only on the noun = predicate (no "to be" verb in the present).',
      ),
    },
    {
      n: '5',
      text: T(
        'Article + adjective with no noun = noun: {οἱ νεκροί} "the dead", {τὸ λοιπόν} "as for the rest".',
      ),
    },
  ],
  notes: [
    {
      label: T('Trap:'),
      text: T(
        '{πονηρός} is regular, but {πολύς, πολλή, πολύ} is irregular and returns in ch. 16. And {μέγας, μεγάλη, μέγα} also escapes 2-1-2 — save both for the comparatives chapter.',
      ),
    },
    {
      label: T('In the text:'),
      text: T(
        '{ἅγιος} occurs substantivized in {οἱ ἅγιοι} "the saints" — Paul\'s usual designation for Christians (Rom 1:7; 1 Cor 1:2).',
      ),
    },
  ],
  examples: [
    { text: '{ἅγιον ὄνομα}', gloss: T('holy name (neuter sg.)') },
    { text: '{ἡ ἁγία γραφή}', gloss: T('the holy Scripture (fem. with pure alpha)') },
    { text: '{ὁ δοῦλος ὁ ἀγαθός}', gloss: T('the good servant (attributive; Matt 25:21)') },
    { text: '{πιστὸς ὁ λόγος}', gloss: T('faithful is the word (predicate; 1 Tim 1:15)') },
    { text: '{μακάριοι οἱ πτωχοί}', gloss: T('blessed are the poor (substantivized adjective)') },
    { text: '{τὰ κρυπτὰ φανερά}', gloss: T('the hidden things [are] manifest (Mark 4:22)') },
    { text: '{ἀγαθὴ συνείδησις}', gloss: T('good conscience (fem. sg.; 1 Tim 1:5)') },
    { text: '{δικαίᾳ κρίσει}', gloss: T('with righteous judgment (fem. dative; John 7:24)') },
    { text: '{πονηρὰ γενεά}', gloss: T('evil generation (fem.; Matt 12:39)') },
    { text: '{καλὸν ἔργον}', gloss: T('good deed (neuter; Matt 26:10)') },
  ],
  tables: [
    {
      caption: T('Table 1 — ἀγαθός, singular'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{ἀγαθός}', '{ἀγαθή}', '{ἀγαθόν}'],
        [T('Genitive'), 'ἀγαθοῦ', 'ἀγαθῆς', 'ἀγαθοῦ'],
        [T('Dative'), 'ἀγαθῷ', 'ἀγαθῇ', 'ἀγαθῷ'],
        [T('Accusative'), 'ἀγαθόν', 'ἀγαθήν', '{ἀγαθόν}'],
      ],
    },
    {
      caption: T('Table 2 — ἀγαθός, plural'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{ἀγαθοί}', '{ἀγαθαί}', '{ἀγαθά}'],
        [T('Genitive'), 'ἀγαθῶν', 'ἀγαθῶν', 'ἀγαθῶν'],
        [T('Dative'), 'ἀγαθοῖς', 'ἀγαθαῖς', 'ἀγαθοῖς'],
        [T('Accusative'), 'ἀγαθούς', 'ἀγαθάς', '{ἀγαθά}'],
      ],
    },
    {
      caption: T('Table 3 — Feminine in -α: δικαία'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{δικαία}', '{δίκαιαι}'],
        [T('Genitive'), 'δικαίας', 'δικαίων'],
        [T('Dative'), 'δικαίᾳ', 'δικαίαις'],
        [T('Accusative'), 'δικαίαν', 'δικαίας'],
      ],
    },
  ],
};
