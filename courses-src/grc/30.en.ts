import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Reading: Beatitudes (Matt 5:3-10)'),
  subtitle: T('Μακάριοι… ὅτι — proclamation and promise'),
  section: T('Readings'),
  body: C(`## The macarism's architecture

Each beatitude has two halves joined by {ὅτι} "for": proclamation in the present ({Μακάριοι οἱ πτωχοί} "blessed the poor") and promise in the future ({αὐτῶν ἐστιν ἡ βασιλεία} "theirs is the kingdom" / {αὐτοὶ παρακληθήσονται} "they shall be comforted"). Eight times the same frame, eight groups, eight futures — and the frame closes: 1st and 8th end in the present ({ἐστιν}); the kingdom is already theirs.

{Μακάριοι} is not "happy" as feeling — it declares status before God, as in the Septuagint psalms ({μακάριος ἀνήρ} "blessed the man", Ps 1:1). {ἐστιν} often drops (nominal predicate, ch. 11): {Μακάριοι οἱ πτωχοί} = "[are] blessed the poor".

## The subjects: substantivized participles

The blessed come as participles: {οἱ πενθοῦντες} "those who mourn", {οἱ πεινῶντες καὶ διψῶντες} "those who hunger and thirst", {οἱ δεδιωγμένοι} "those who have been persecuted" — the last a PERFECT passive participle: the state of the already-persecuted bearing its mark. {οἱ πραεῖς} "the meek" and {οἱ καθαροὶ} "the pure" use adjectives; {οἱ εἰρηνοποιοί} "the peacemakers" uses a compound noun ({εἰρήνη} + {ποιέω}).

Datives limit and specify: {τῷ πνεύματι} "in spirit" (poor not in pocket but in spirit), {τῇ καρδίᾳ} "in heart" (located purity). Dative of respect — "as regards…".

## The promises: Kingdom futures

Apodoses speak future — nearly all divine passive (ch. 20): {παρακληθήσονται} "they shall be comforted", {χορτασθήσονται} "they shall be filled", {ἐλεηθήσονται} "they shall obtain mercy", {κληθήσονται} "they shall be called". The implicit agent is God: He comforts, fills, calls.

Two exceptions teach: {αὐτῶν ἐστιν} (present — the kingdom already belongs) and {ὄψονται} "they shall see" (ACTIVE future of {ὁράω}: seeing God is the pure's act, not reception). And {κληρονομήσουσιν τὴν γῆν} "they shall inherit the earth" (v. 5) quotes LXX Ps 37:11 nearly word for word — Matthew anchors the promise in Scripture.`),
  vocab: [
    V('μακάριοι', 'μακάριος', 'blessed, happy'),
    V('πτωχοί', 'πτωχός', 'poor'),
    V('πενθοῦντες', 'πενθέω', 'those who mourn'),
    V('πραεῖς', 'πραΰς', 'meek'),
    V('πεινῶντες', 'πεινάω', 'those who hunger'),
    V('διψῶντες', 'διψάω', 'those who thirst'),
    V('ἐλεήμονες', 'ἐλεήμων', 'merciful'),
    V('καθαροί', 'καθαρός', 'pure, clean'),
    V('εἰρηνοποιοί', 'εἰρηνοποιός', 'peacemakers'),
    V('δεδιωγμένοι', 'διώκω', 'persecuted'),
    V('παρακληθήσονται', 'παρακαλέω', 'they shall be comforted'),
    V('χορτασθήσονται', 'χορτάζω', 'they shall be filled'),
    V('ὄψονται', 'ὁράω', 'they shall see'),
    V('κληρονομήσουσιν', 'κληρονομέω', 'they shall inherit'),
    V('οὐρανῶν', 'οὐρανός', 'of the heavens'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"παρακληθήσονται" is future passive (not present) because…'),
    options: [
      T('It has -θη- (passive) + -σ- (future) before the ending'),
      T('It ends in -ονται'),
      T('It follows ὅτι'),
      T('It is a participle'),
    ],
    answer: 0,
    hint: T('θη + σ = future passive — chs. 19–20.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative: τῷ ___ ("in spirit", from πνεῦμα).'),
      answer: 'πνεύματι',
      hint: T('Neuter in -μα: dative in -ματι.'),
    },
    {
      kind: 'choose',
      prompt: T('"οἱ δεδιωγμένοι" uses a perfect participle because…'),
      options: [
        T('It marks resulting state (persecuted bearing permanent mark)'),
        T('It is shorter than the present'),
        T('Present does not exist for this verb'),
        T('μακάριοι requires it'),
      ],
      answer: 0,
      hint: T('Perfect = resulting state — ch. 15.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its analysis.'),
      pairs: [
        { a: 'πενθοῦντες', b: 'part. presente' },
        { a: 'δεδιωγμένοι', b: 'part. perfeito' },
        { a: 'ὄψονται', b: 'futuro ativo' },
        { a: 'ἐστιν', b: 'presente (moldura)' },
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
        'Macarism = proclamation (present) + ὅτι + promise (future). The 1st/8th frame closes in the present.',
      ),
    },
    {
      n: '2',
      text: T(
        'Subjects as substantivized participles; the perfect ({δεδιωγμένοι}) marks resulting state.',
      ),
    },
    {
      n: '3',
      text: T(
        "Passive futures = divine passive (God comforts, fills, calls). Active futures ({ὄψονται}) = the blessed's act.",
      ),
    },
    {
      n: '4',
      text: T(
        'Dative of respect limits the adjective: {τῷ πνεύματι}, {τῇ καρδίᾳ} — "as regards…".',
      ),
    },
  ],
  notes: [
    {
      label: T('Luke vs Matthew:'),
      text: T(
        'Luke has four beatitudes with no limiting datives ({Μακάριοι οἱ πτωχοί} "the poor", Luke 6:20) + four woes ({οὐαὶ ὑμῖν} "woe to you"). Comparing versions is a classic exercise: Matthew spiritualizes, Luke socializes — grammar shows where each edited.',
      ),
    },
    {
      label: T('Sound:'),
      text: T(
        'Read all eight aloud, beating the Μακάριοι… ὅτι / Μακάριοι… ὅτι rhythm. The parallelism is mnemonic: ancient communities memorized the Sermon singing this cadence.',
      ),
    },
  ],
  examples: [
    { text: '{Μακάριοι οἱ πτωχοί}', gloss: T('blessed the poor (verbless: nominal predicate)') },
    { text: '{αὐτῶν ἐστιν}', gloss: T('theirs it is (fronted possessive genitive)') },
    { text: '{οἱ πενθοῦντες}', gloss: T('those who mourn (present participle)') },
    { text: '{παρακληθήσονται}', gloss: T('they shall be comforted (future passive)') },
    { text: '{κληρονομήσουσιν}', gloss: T('they shall inherit (active future; Ps 37:11)') },
    { text: '{χορτασθήσονται}', gloss: T('they shall be filled (eschatological fullness)') },
    { text: '{τῇ καρδίᾳ}', gloss: T('in heart (dative of respect)') },
    { text: '{ὄψονται}', gloss: T('they shall see (future of ὁράω; promised theophany)') },
    { text: '{κληθήσονται}', gloss: T('they shall be called (declared sonship)') },
    { text: '{οἱ δεδιωγμένοι}', gloss: T('the persecuted (perfect: permanent mark)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The eight beatitudes'),
      head: [T('Subject'), T('Promise'), T('Tense')],
      rows: [
        ['{οἱ πτωχοὶ τῷ πνεύματι}', '{αὐτῶν ἐστιν}', 'presente'],
        ['{οἱ πενθοῦντες}', '{παρακληθήσονται}', 'fut. passivo'],
        ['{οἱ πραεῖς}', '{κληρονομήσουσιν}', 'futuro ativo'],
        ['{οἱ πεινῶντες}', '{χορτασθήσονται}', 'fut. passivo'],
        ['{οἱ ἐλεήμονες}', '{ἐλεηθήσονται}', 'fut. passivo'],
        ['{οἱ καθαροὶ τῇ καρδίᾳ}', '{ὄψονται}', 'futuro ativo'],
        ['{οἱ εἰρηνοποιοί}', '{κληθήσονται}', 'fut. passivo'],
        ['{οἱ δεδιωγμένοι}', '{αὐτῶν ἐστιν}', 'presente'],
      ],
    },
  ],
};
