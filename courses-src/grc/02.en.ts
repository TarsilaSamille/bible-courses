import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('1st declension — feminines'),
  subtitle: T('ἀλήθεια, δόξα, ὥρα: the genitive reveals the group'),
  section: T('The noun'),
  body: C(`## Three declensions, one starting point

Greek has three declensions — three families of noun and adjective endings. The first gathers mostly feminine nouns, and we start here: its endings are regular, and this group's vocabulary ({ἀλήθεια} "truth", {δόξα} "glory", {ζωή} "life", {ἐκκλησία} "church") ranks among the most frequent in the New Testament.

The trick for identifying a noun's group is to look at the genitive singular: it ends in {-ης} or {-ας}. The dictionary always prints the genitive beside the nominative ({ἀλήθεια, -ας}) precisely because that form removes all doubt.

## Feminines in -η and -α

There are two feminine subgroups. Words in {-η} ({ἀλήθεια}, {γραφή}, {φωνή}) keep {-η} through the whole singular: genitive {ἀληθείας}, dative {ἀληθείᾳ}, accusative {ἀλήθειαν}. Note the iota subscript in the dative ({ᾳ}) — the trademark of the 1st declension.

Words in {-α} split. After {ρ}, {ε} or {ι} (so-called pure alpha), the {-α} holds through the singular: {ἡμέρα, ἡμέρας}, {δόξα, δόξης}, {οἰκία}. Elsewhere the singular alternates: nominative and accusative in {-α}, genitive and dative in {-η}: {θάλασσα, θαλάσσης}, {ὥρα, ὥρας}. This alternation is an Ionic-dialect inheritance and appears constantly in the New Testament.

## One plural for all

Good news: in the plural, all three feminine groups are identical — nominative {-αι}, genitive {-ῶν}, dative {-αις}, accusative {-ας}. The genitive plural {-ῶν}, with omega and circumflex, is unmistakable and recurs in the 2nd declension and in adjectives. Memorize the plural once and it serves every word in this chapter.

## Masculines of the 1st declension

Some masculines use 1st-declension endings: those in {-ας} ({προφήτης, -ου}, {νεανίας, -ου}) and in {-ης} ({μαθητής, -ου}). The nominative singular ends in {-ς}, as in 2nd-declension masculines, but the genitive singular ends in {-ου} — once again, the genitive reveals the group. The plural of these masculines matches the feminines ({μαθηταί, μαθητῶν}).`),
  vocab: [
    V('ἀλήθεια', 'ἀλήθεια', 'truth'),
    V('ἀληθείας', 'ἀλήθεια', 'of truth (gen.)'),
    V('δόξα', 'δόξα', 'glory'),
    V('ζωή', 'ζωή', 'life'),
    V('φωνή', 'φωνή', 'voice'),
    V('γραφή', 'γραφή', 'writing, Scripture'),
    V('ἐκκλησία', 'ἐκκλησία', 'church'),
    V('βασιλεία', 'βασιλεία', 'kingdom'),
    V('ἡμέρα', 'ἡμέρα', 'day'),
    V('ὥρα', 'ὥρα', 'hour'),
    V('εἰρήνη', 'εἰρήνη', 'peace'),
    V('ψυχή', 'ψυχή', 'soul, life'),
    V('μαθητής', 'μαθητής', 'disciple'),
    V('μαθητοῦ', 'μαθητής', 'of the disciple (gen.)'),
    V('προφήτης', 'προφήτης', 'prophet'),
    V('νεανίας', 'νεανίας', 'young man'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the genitive singular of "ἀλήθεια"?'),
    options: [T('ἀληθείας'), T('ἀληθεῖαι'), T('ἀληθείᾳ'), T('ἀλήθειαν')],
    answer: 0,
    hint: T('An -η word: the genitive singular ends in -ης.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative plural: ταῖς ___ ("to the truths").'),
      answer: 'ἀληθείαις',
      hint: T('The 1st-declension dative plural ends in -αις.'),
    },
    {
      kind: 'choose',
      prompt: T('"ὥρας" (from ὥρα) is a genitive in -ας because…'),
      options: [
        T('ὥρα has pure alpha'),
        T('ὥρα has impure alpha (after ω)'),
        T('ὥρα is masculine'),
        T('ὥρα is 2nd declension'),
      ],
      answer: 1,
      hint: T('Pure alpha only after ρ, ε, ι — rule §2.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its case.'),
      pairs: [
        { a: 'μαθητοῦ', b: 'gen. sg. masc.' },
        { a: 'μαθητῇ', b: 'dat. sg. masc.' },
        { a: 'μαθηταί', b: 'nom. pl. masc.' },
        { a: 'ἀληθειῶν', b: 'gen. pl. fem.' },
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
        'The genitive singular identifies the group: {-ης} for -η and impure-α words; {-ας} for pure-α words.',
      ),
    },
    {
      n: '2',
      text: T(
        'Alpha is pure after ρ, ε, ι ({ἡμέρα}, {δόξα}, {οἰκία}); elsewhere the singular alternates -α/-η ({ὥρα, ὥρας}).',
      ),
    },
    {
      n: '3',
      text: T(
        'The 1st-declension dative singular takes an iota subscript: {ἀληθείᾳ}, {δόξῃ}, {μαθητῇ}.',
      ),
    },
    {
      n: '4',
      text: T(
        "Masculines in {-ας}/{-ης} make the genitive in {-ου} ({μαθητοῦ}, {προφήτου}) and a plural identical to the feminines'.",
      ),
    },
    {
      n: '5',
      text: T(
        'The plural is one for the whole chapter: {-αι}, {-ῶν}, {-αις}, {-ας}. The {-ῶν} with circumflex cannot be mistaken for anything.',
      ),
    },
  ],
  notes: [
    {
      label: T('How to memorize:'),
      text: T(
        'Always memorize the nominative + genitive pair ({γραφή, -ῆς}; {θάλασσα, -ης}; {μαθητής, -οῦ}). Only the genitive distinguishes pure from impure -α, and masculine from feminine — the nominative alone deceives.',
      ),
    },
    {
      label: T('In the text:'),
      text: T(
        '{ἡμέρα} occurs over 300 times in the New Testament, nearly always in the accusative of duration ({νύκτα καὶ ἡμέραν}). Recognizing the case by heart saves dictionary trips.',
      ),
    },
  ],
  examples: [
    { text: '{ἡ ἀλήθεια ἐλευθεροῖ}', gloss: T('the truth sets free (cf. John 8:32)') },
    { text: '{δόξα τῷ θεῷ}', gloss: T('glory to God (dative of interest)') },
    { text: '{ἡ βασιλεία τῶν οὐρανῶν}', gloss: T('the kingdom of the heavens (genitive plural)') },
    { text: '{ἡμέραν καὶ νύκτα}', gloss: T('day and night (accusative of duration)') },
    { text: '{σὺν τῇ ἐκκλησίᾳ}', gloss: T('with the church (dative with iota subscript)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voice of one crying (genitive of source; Mark 1:3)') },
    { text: '{ὁ μαθητὴς βλέπει}', gloss: T('the disciple sees (masculine nominative singular)') },
    { text: '{οἱ προφῆται λέγουσιν}', gloss: T('the prophets say (nominative plural)') },
    { text: '{ταῖς ψυχαῖς}', gloss: T('to souls (feminine dative plural)') },
    { text: '{τὴν εἰρήνην}', gloss: T('peace (accusative: {εἰρήνη, -ης})') },
  ],
  tables: [
    {
      caption: T('Table 1 — Feminine in -η: ἡ ἀλήθεια'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{ἡ ἀλήθεια}', '{αἱ ἀλήθειαι}'],
        [T('Genitive'), 'τῆς ἀληθείας', 'τῶν ἀληθειῶν'],
        [T('Dative'), 'τῇ ἀληθείᾳ', 'ταῖς ἀληθείαις'],
        [T('Accusative'), 'τὴν ἀλήθειαν', 'τὰς ἀληθείας'],
      ],
    },
    {
      caption: T('Table 2 — Feminine in -α: ἡ δόξα and ἡ ὥρα'),
      head: [
        T('Case'),
        {
          0: 'α',
          1: ' ',
          2: 'p',
          3: 'u',
          4: 'r',
          5: 'o',
          6: ' ',
          7: '(',
          8: 'δ',
          9: 'ό',
          10: 'ξ',
          11: 'α',
          12: ')',
        },
        {
          0: 'α',
          1: ' ',
          2: 'i',
          3: 'm',
          4: 'p',
          5: 'u',
          6: 'r',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'ὥ',
          11: 'ρ',
          12: 'α',
          13: ')',
        },
      ],
      rows: [
        [T('Nominative'), '{ἡ δόξα}', '{ἡ ὥρα}'],
        [T('Genitive'), 'τῆς δόξης', 'τῆς ὥρας'],
        [T('Dative'), 'τῇ δόξῃ', 'τῇ ὥρᾳ'],
        [T('Accusative'), 'τὴν δόξαν', 'τὴν ὥραν'],
      ],
    },
    {
      caption: T('Table 3 — Masculine in -ης: ὁ μαθητής'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{ὁ μαθητής}', '{οἱ μαθηταί}'],
        [T('Genitive'), 'τοῦ μαθητοῦ', 'τῶν μαθητῶν'],
        [T('Dative'), 'τῷ μαθητῇ', 'τοῖς μαθηταῖς'],
        [T('Accusative'), 'τὸν μαθητήν', 'τοὺς μαθητάς'],
      ],
    },
  ],
};
