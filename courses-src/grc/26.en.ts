import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Indirect discourse and questions'),
  subtitle: T('ὅτι… — τίς; ποῦ; πῶς; and what each question expects'),
  section: T('Syntax'),
  body: C(`## Reporting what was said

Greek reports speech two ways. Direct quotes verbatim. Indirect uses {ὅτι} "that" + the SAME tense and mood as the direct — none of English's backshifting ("he said he had come"): {λέγει ὅτι πιστεύει} "he says that he believes"; {εἶπεν ὅτι ἦλθεν} "he said that he had come" (the imperfect stays put!). This preservation simplifies: copy the direct verb into the indirect.

The second path is the infinitive: {ἔφη λῦσαι} "he said he had loosed", {νομίζουσιν εἶναι} "they think they are". With its own subject, the infinitive puts it in the accusative: {λέγουσιν αὐτὸν εἶναι} "they say that he is…". Ch. 10 laid the base; here the reporting use.

## Asking in Greek

Interrogatives cover the essentials: {τίς;} "who?" (person), {τί;} "what?" (thing), {ποῦ;} "where?", {πότε;} "when?", {πῶς;} "how?", {διὰ τί;} and {τί;} + genitive "why?" ({τί ποιήσω;} "what shall I do?", Luke 18:18; {ποῦ μένεις;} "where are you staying?", John 1:38 — the disciples' first question).

Do not confuse interrogative with relative (ch. 26): {τίς} asks ("who?"), {ὅς} links ("who/which"). Accent helps: interrogatives are stubborn oxytones ({τίς, τί}); relative {ὅς} is proclitic in editors' practice.

## Questions carrying their answer

Greek marks the expected answer. {ἆρα} (or {οὐχί} in practice) + indicative expects "yes": questions anticipating confirmation. {μήτι} + indicative expects "no": {μήτι ἐγώ εἰμι, κύριε;} "surely not I, Lord?" (Matt 26:22) — each disciple asked expecting to hear "not you".

This nuance lights up the Last Supper: eleven {μήτι} questions in sequence, each an anticipated sigh of relief — until {σὺ εἶπας} "you have said it" (Matt 26:25) answers Judas. Grammar and drama in one particle.`),
  vocab: [
    V('ὅτι', 'ὅτι', 'that, because'),
    V('τίς', 'τίς', 'who?'),
    V('τί', 'τίς', 'what?'),
    V('ποῦ', 'ποῦ', 'where?'),
    V('πότε', 'πότε', 'when?'),
    V('πῶς', 'πῶς', 'how?'),
    V('διὰ τί', 'διά', 'why?'),
    V('ἆρα', 'ἆρα', 'really (expects yes)'),
    V('μήτι', 'μήτι', 'really (expects no)'),
    V('ἔφη', 'φημί', 'he said'),
    V('νομίζω', 'νομίζω', 'to think, suppose'),
    V('οὖν', 'οὖν', 'therefore, then'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"εἶπεν ὅτι ἦλθεν" keeps the imperfect because…'),
    options: [
      T('Greek does not backshift in indirect speech'),
      T('ἦλθεν is present'),
      T('ὅτι requires imperfect'),
      T('It is direct speech'),
    ],
    answer: 0,
    hint: T('Same tense and mood as the direct — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the particle expecting "no": ___ ἐγώ εἰμι; (Matt 26:22).'),
      answer: 'μήτι',
      hint: T('μήτι expects "no" — rule §4.'),
    },
    {
      kind: 'choose',
      prompt: T('"χαίρω ὅτι ἦλθες" — here ὅτι is…'),
      options: [
        T('Causal ("because"): the verb is feeling'),
        T('Reporting ("that")'),
        T('Final ("in order that")'),
        T('Conditional ("if")'),
      ],
      answer: 0,
      hint: T('Feeling verb → causal ὅτι.'),
    },
    {
      kind: 'match',
      prompt: T('Match each word to its function.'),
      pairs: [
        { a: 'τίς', b: 'interrogativo' },
        { a: 'ὅς', b: 'relativo' },
        { a: 'μήτι', b: 'espera «não»' },
        { a: 'ἆρα', b: 'espera «sim»' },
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
    { n: '1', text: T('ὅτι + same tense and mood as the direct. No backshifting as in English.') },
    {
      n: '2',
      text: T('Reporting infinitive with own accusative subject: {λέγουσιν αὐτὸν εἶναι}.'),
    },
    {
      n: '3',
      text: T('Interrogative ({τίς}) asks; relative ({ὅς}) links. Ch. 26 completes the relative.'),
    },
    {
      n: '4',
      text: T(
        '{μήτι} expects "no"; {ἆρα}/οὐχί expects "yes". The particle reveals the asker\'s fear or certainty.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ambiguous ὅτι:'),
      text: T(
        '{ὅτι} also means "because" (causal). {λέγω ὅτι} + verb = "I say that"; {χαίρω ὅτι} = "I rejoice because". The preceding verb decides: saying/believing → "that"; feeling/acting → "because".',
      ),
    },
    {
      label: T('Rhetorical question:'),
      text: T(
        'Paul uses answerless questions as argument: {τί οὖν;} "what then?" (Rom 6:1), {μὴ γένοιτο} as implied answer. Recognizing the {τί οὖν; + μὴ γένοιτο} game is reading Romans at the right tempo.',
      ),
    },
  ],
  examples: [
    { text: '{λέγει ὅτι πιστεύει}', gloss: T('he says that he believes (tense kept)') },
    { text: '{εἶπεν ὅτι ἦλθεν}', gloss: T('he said that he had come (imperfect kept)') },
    { text: '{τί ποιήσω;}', gloss: T('what shall I do? (Luke 18:18)') },
    { text: '{ποῦ μένεις;}', gloss: T('where are you staying? (John 1:38)') },
    { text: '{μήτι ἐγώ εἰμι;}', gloss: T('surely not I? (expects "no"; Matt 26:22)') },
    { text: '{τίς ἐστιν οὗτος;}', gloss: T('who is this? (Mark 4:41)') },
    { text: '{πῶς δύναται;}', gloss: T('how can it be? (John 3:9)') },
    { text: '{διὰ τί φοβεῖσθε;}', gloss: T('why are you fearful? (Matt 8:26)') },
    { text: '{πότε ταῦτα ἔσται;}', gloss: T('when shall these things be? (Mark 13:4)') },
    { text: '{σὺ εἶπας}', gloss: T('you have said it (answer to Judas; Matt 26:25)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Essential interrogatives'),
      head: [T('Form'), T('Meaning'), T('Example')],
      rows: [
        ['{τίς;}', 'quem?', '{τίς ἐστιν οὗτος;}'],
        ['{τί;}', 'que?', '{τί ποιήσω;}'],
        ['{ποῦ;}', 'onde?', '{ποῦ μένεις;}'],
        ['{πότε;}', 'quando?', '{πότε ταῦτα ἔσται;}'],
        ['{πῶς;}', 'como?', '{πῶς δύναται;}'],
        ['{διὰ τί;}', 'por quê?', '{διὰ τί φοβεῖσθε;}'],
      ],
    },
    {
      caption: T('Table 2 — Indirect discourse'),
      head: [T('Direct'), T('Indirect with ὅτι'), T('Indirect with infinitive')],
      rows: [
        ['{πιστεύω}', '{λέγει ὅτι πιστεύει}', '—'],
        ['{ἦλθον}', '{εἶπεν ὅτι ἦλθεν}', '{ἔφη ἐλθεῖν}'],
        ['{λύσω}', '{λέγει ὅτι λύσει}', '{ἔφη λύσειν}'],
      ],
    },
  ],
};
