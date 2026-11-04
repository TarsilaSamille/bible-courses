import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T("Capstone: Lord's Prayer (Matt 6:9-13)"),
  subtitle: T('Πάτερ ἡμῶν — all grammar in one prayer'),
  section: T('Readings'),
  body: C(`## The invocation

{Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς} — "Our Father in heaven": vocative {Πάτερ} (ch. 13), possessive {ἡμῶν} (ch. 14), and article-with-preposition acting as relative — {ὁ ἐν τοῖς οὐρανοῖς} "he [who is] in heaven" (ch. 26, article substantivizing a prepositional phrase). Three chapters in the first line: the whole course lives in this prayer.

## Be, come, be-done: the three "lets"

{ἁγιασθήτω τὸ ὄνομά σου} — "hallowed be thy name": 3rd-sg. aorist passive imperative (chs. 9 + 19). {ἐλθέτω ἡ βασιλεία σου} — "thy kingdom come": 2nd-aorist imperative of {ἔρχομαι} ({ἐλθ-}, ch. 18). {γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ γῆς} — "thy will be done, as in heaven and on earth": passive aorist imperative of {γίνομαι} + comparison with {ὡς}.

The three petitions ask one thing in a spiral (John's style, ch. 28): name hallowed, kingdom come, will done — God acting, we receiving. All in the 3rd person: one does not order God in the 2nd ("hallow!"), one asks in the 3rd ("be it hallowed"). Grammar teaches reverence.

## Give, forgive, lead-not, deliver

{τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον} — "give us today our daily bread": object + {δὸς}, 2nd-aorist imperative of {δίδωμι} (ch. 12), dative {ἡμῖν}, adverb {σήμερον}. {ἐπιούσιος} "daily / needful" is a hapax — a word existing only here (and Luke 11:3): lexicographers debate {ἐπί + οὐσία} ("for subsistence") vs {ἐπι-ιέναι} ("for the [coming] day"). The learned doubt changes nothing of the prayer.

{καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν} — "and forgive us our debts, as we too have forgiven": imperative {ἄφες} (2nd aorist of {ἀφίημι}, "let go") + perfect {ἀφήκαμεν} ("we stand having forgiven" — resulting state, ch. 15). Matthew says "debts" ({ὀφειλήματα}); Luke says "sins" ({ἁμαρτίας}, Luke 11:4) — comparing versions lights up both.

{καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ} — "and lead us not into temptation, but deliver us from the Evil One": {μή} + aorist subjunctive (prohibition, ch. 8) + middle imperative {ῥῦσαι} ("deliver for us", interest middle). {τοῦ πονηροῦ} — masculine ("the Evil One") or neuter ("evil")? Grammar allows both; tradition prays both.`),
  vocab: [
    V('Πάτερ', 'πατήρ', 'Father! (voc.)'),
    V('ἁγιασθήτω', 'ἁγιάζω', 'hallowed be it'),
    V('ἐλθέτω', 'ἔρχομαι', 'let it come'),
    V('γενηθήτω', 'γίνομαι', 'be it done'),
    V('θέλημα', 'θέλημα', 'will'),
    V('ἐπιούσιος', 'ἐπιούσιος', 'daily (hapax)'),
    V('δὸς', 'δίδωμι', 'give!'),
    V('σήμερον', 'σήμερον', 'today'),
    V('ἄφες', 'ἀφίημι', 'forgive! let go!'),
    V('ὀφειλήματα', 'ὀφείλημα', 'debts'),
    V('ἀφήκαμεν', 'ἀφίημι', 'we have forgiven'),
    V('ὀφειλέταις', 'ὀφειλέτης', 'to debtors'),
    V('εἰσενέγκῃς', 'ἐσφέρω', 'you lead'),
    V('πειρασμόν', 'πειρασμός', 'temptation'),
    V('ῥῦσαι', 'ῥύομαι', 'deliver!'),
    V('πονηροῦ', 'πονηρός', 'of the Evil One / of evil'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἁγιασθήτω" stands in the 3rd person (not 2nd) because…'),
    options: [
      T('God is asked ("be it hallowed"), not ordered'),
      T('2nd person does not exist in the imperative'),
      T('It is μή prohibition'),
      T('The subject is plural'),
    ],
    answer: 0,
    hint: T('Mood and reverence — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete δίδωμι\'s imperative: ___ ἡμῖν ("give us", Matt 6:11).'),
      answer: 'δὸς',
      hint: T("δίδωμι's 2nd aorist: shortest form."),
    },
    {
      kind: 'choose',
      prompt: T('"ἀφήκαμεν" (perfect) grounds the plea "ἄφες" because…'),
      options: [
        T('Prior state ("having forgiven") authorizes the present'),
        T('It is disguised future'),
        T('It rhymes with ἄφες'),
        T('It is a metrical demand'),
      ],
      answer: 0,
      hint: T('Grounding perfect — rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its analysis.'),
      pairs: [
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'γενηθήτω', b: 'imperativo passivo' },
        { a: 'ἀφήκαμεν', b: 'perfeito' },
        { a: 'ῥῦσαι', b: 'imperativo médio' },
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
        'God is asked in the 3rd person ("be it hallowed"), not ordered in the 2nd. Mood carries reverence.',
      ),
    },
    {
      n: '2',
      text: T(
        'Article + prepositional phrase = implied relative: {ὁ ἐν τοῖς οὐρανοῖς} "he who is in heaven".',
      ),
    },
    {
      n: '3',
      text: T(
        'Perfect {ἀφήκαμεν} grounds the plea: "we having forgiven, forgive us". Prior state authorizes the present.',
      ),
    },
    {
      n: '4',
      text: T(
        'Hapax ({ἐπιούσιος}) and ambiguity ({τοῦ πονηροῦ}) are normal in real text: grammar circumscribes, tradition decides.',
      ),
    },
  ],
  notes: [
    {
      label: T('ΤΕΤΕΛΕΣΤΑΙ:'),
      text: T(
        '"It is finished" (John 19:30, passive perfect) — the cross\'s last word in resulting-state tense. You read thirty chapters to arrive here: every form in this prayer passed through your hands.',
      ),
    },
    {
      label: T('Luke 11:'),
      text: T(
        'Luke carries the short version (11:2-4): no "be it done", "sins" for "debts" ({ἁμαρτίας} for {ὀφειλήματα}). Compare both end to end — the final comparative-reading exam.',
      ),
    },
  ],
  examples: [
    { text: '{Πάτερ ἡμῶν}', gloss: T('our Father (vocative + possessive)') },
    { text: '{ὁ ἐν τοῖς οὐρανοῖς}', gloss: T('he who is in heaven (article-relative)') },
    { text: '{ἁγιασθήτω}', gloss: T('hallowed be it (3rd sg. passive)') },
    { text: '{ἐλθέτω}', gloss: T('come (2nd aorist of ἔρχομαι)') },
    { text: '{γενηθήτω}', gloss: T('be it done (passive of γίνομαι)') },
    { text: '{δὸς ἡμῖν}', gloss: T('give us (δίδωμι imperative + dative)') },
    { text: '{ἄφες ἡμῖν}', gloss: T('forgive us (2nd aorist)') },
    { text: '{ἀφήκαμεν}', gloss: T('we have forgiven (grounding perfect)') },
    { text: '{μὴ εἰσενέγκῃς}', gloss: T('do not lead (prohibition)') },
    { text: '{ῥῦσαι ἡμᾶς}', gloss: T('deliver us (middle imperative)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Petitions and their grammar'),
      head: [T('Petition'), T('Key form'), T('Chapters')],
      rows: [
        ['{ἁγιασθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{ἐλθέτω}', 'imperativo aor. 2º', '9 + 18'],
        ['{γενηθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{δὸς}', 'imperativo aor. 2º de δίδωμι', '9 + 12'],
        ['{ἄφες}', 'imperativo aor. 2º de ἀφίημι', '9 + 18'],
        ['{ἀφήκαμεν}', 'perfeito', '15'],
        ['{μὴ εἰσενέγκῃς}', 'proibição (μή + subj.)', '8'],
        ['{ῥῦσαι}', 'imperativo médio', '9 + 17'],
      ],
    },
  ],
};
