import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Adverbs of time and frequency'),
  subtitle: T("{aujourd'hui}, {demain}, {déjà}, {jamais} and the {depuis} construction"),
  section: T('Adjectives and adverbs'),
  body: C(`## Three and a half words settle almost everything

Time has the simplest adverbs in the language: {aujourd'hui} "today", {hier} "yesterday", {demain} "tomorrow". Only "tomorrow" has a separate word for "the following day", which is {le lendemain} — a distinction Portuguese also makes and Spanish does not need.

These three combine with nouns of moment and form fixed expressions: {hier soir} "last night", {demain matin} "tomorrow morning", {après-midi} "afternoon", {avant-midi} "morning", {ce soir} "this evening", {l'an prochain} "next year". Note {après-midi} and {avant-midi}: they are hyphenated because a term from another language already comes glued to them.

And {aujourd'hui} has a second, more figurative sense: {le monde d'aujourd'hui} "the world of today", {les hommes d'aujourd'hui} "people today".

## What follows and what has already passed

{Maintenant} is "now", the most neutral adverb of all. {Bientôt} is "soon", {déjà} is "already", {tout à l'heure} is "in a moment" (literally "every hour").

Inside a sequence: {d'abord} "first", {ensuite} "then", {puis} "next", {enfin} "finally", {alors} "then". And {déjà} can soften a concession: {C'est déjà quelque chose} "that is already something".

For **duration**, the verb does the work, not the adverb. {Je travaille depuis deux heures} "I have been working for two hours" — the present is obligatory after {depuis}, because the action began in the past and still goes on. {Je travaille pendant deux heures} is different: "I work for two hours", a bounded stretch. Confusing {depuis} with {pendant} is the commonest mistake of anyone meeting French.

## Frequency: the whole ladder

The full scale fits in six words:

| Adverb | Meaning | Example |
|---|---|---|
| {toujours} | always | {Je prie toujours} |
| {souvent} | often | {Je prie souvent} |
| {de temps en temps} | from time to time | {Je prie de temps en temps} |
| {parfois} | sometimes | {Je prie parfois} |
| {rarement} | rarely | {Je prie rarement} |
| {jamais} | never | {Je ne prie jamais} |

Two rules of the first importance. First: with {jamais}, {toujours}, {souvent}, {parfois} and {rarement}, the sentence becomes **negative or restrictive**, and the negation comes only once: {je ne prie jamais}, {je ne prie pas toujours}, {je ne prie pas souvent}, {je ne prie pas parfois}, {je ne prie pas rarement}. {Je ne prie pas jamais} is redundant and sounds wrong.

Second: {jamais} on its own carries the negation by itself, so {ne … pas … jamais} doubles it up and must be avoided.

## {déjà} and {encore}

The two ends of the same pair:

- {déjà} — already, completed action: {j'ai déjà mangé}
- {encore} — still, action under way: {je suis encore là}
- {ne … pas encore} — not yet: {je ne suis pas encore arrivé}
- {ne … plus} — no longer: {je ne suis plus là}
- {ne … jamais} — never: {je ne suis jamais allé en Italie}
- {ne … que} — nothing but: {je n'ai que le temps de prier}

Note the symmetry: {pas encore} "not yet" sits on the same axis as {déjà} "already". And {ne … plus} is always negative — {plus jamais} is the only possible positive environment, and it is rare even there.

There is a syntactic trap when {jamais} is attached to the future: {je ne verrai jamais} is a negative future and already means "I shall never see" — it needs no {pas}.

## Reading — Louis Segond

{Hier, c'est-à-dire le jour d'avant} uses {hier} as an adverb with an explanatory apposition. {Demain, si nous ne nous repentons pas} (Luke 13:3) puts the adverb at the front of the sentence, which is rare and emphatic. {Je ne suis pas encore monté} (Luke 4:31) gives {pas encore} with the present — proof that {encore} speaks of process, not of clock time. {Reste donc ce qui est bon} (Luke 3:14) places {donc} between verb and object, the fixed slot of the short adverb. And {Vous avez besoin d'un seul bon grain} (Matt. 13:21) uses {seul} as an adjective, not an adverb — that is the previous lesson.

## What to take away

Time and frequency in French are short words, almost always placed after the verb. {depuis} plus the present measures duration up to now; {pendant} plus present or past measures a bounded stretch. And the frequency ladder has six rungs, of which only {jamais} forces the negation.`),
  vocab: [
    V("aujourd'hui", "aujourd'hui", 'today; also "of our time"'),
    V('hier', 'hier', 'yesterday; hier soir = last night'),
    V('demain', 'demain', 'tomorrow; ≠ le lendemain'),
    V('le lendemain', 'lendemain', 'the following day'),
    V('après-midi', 'après-midi', 'afternoon; with de in the plural'),
    V('maintenant', 'maintenant', 'now; the most neutral adverb'),
    V('bientôt', 'bientôt', 'soon, in a little while'),
    V('déjà', 'déjà', 'already; completed action'),
    V('encore', 'encore', 'still; action under way'),
    V('toujours', 'toujours', 'always; when negated: not always'),
    V('souvent', 'souvent', 'often; when negated: rarely'),
    V('parfois', 'parfois', 'sometimes; when negated: hardly ever'),
    V('rarement', 'rarement', 'rarely; when negated: not rarely'),
    V('jamais', 'jamais', 'never; it already carries the negation'),
    V('depuis', 'depuis', 'for (duration); + present'),
    V('pendant', 'pendant', 'during; a bounded stretch'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say «I have been working for two hours»?'),
    options: [
      T('{Je travaille depuis deux heures}'),
      T('{Je travaille pendant deux heures}'),
      T('{Je travaille pour deux heures}'),
      T('{Je travaille déjà deux heures}'),
    ],
    answer: 0,
    hint: T('An action that began and continues takes depuis + present; pendant delimits.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('I have not arrived yet: {Je ne suis pas ___ arrivé}'),
      answer: 'encore',
      hint: T('The pair is déjà "already" against pas encore "not yet".'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct on the frequency ladder?'),
      options: [
        T('{Je ne prie pas jamais}'),
        T('{Je ne prie jamais}'),
        T('{Je ne prie pas toujours}'),
        T('{Je prie jamais}'),
      ],
      answer: 1,
      hint: T('{jamais} is negative by itself; {toujours} needs pas.'),
    },
    {
      kind: 'match',
      prompt: T('Match each adverb to its value'),
      pairs: [
        { a: T('hier'), b: T('yesterday') },
        { a: T('demain'), b: T('tomorrow (not the following day)') },
        { a: T('rarement'), b: T('rarely') },
        { a: T('depuis'), b: T('for, with the present') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «{Je travaille depuis deux heures}», what does the present tense indicate?'),
      options: [
        T('That the action ends now'),
        T('That the action began in the past and continues'),
        T('That the action is a habit'),
        T('That the action already ended yesterday'),
      ],
      answer: 1,
      hint: T('That is the sense of depuis: a window that opened earlier and is still open.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Time has its own adverbs, and few of them: {aujourd\'hui} "today", {hier} "yesterday", {demain} "tomorrow", {maintenant} "now". Demain is not le lendemain "the following day": they are different things.',
      ),
    },
    {
      n: '2',
      text: T(
        "These adverbs combine with nouns of moment: {hier soir}, {demain matin}, {ce soir}, {après-midi}, {avant-midi}, {l'an prochain}. Expressions built that way are fixed and take an article and a plural: {les après-midis}.",
      ),
    },
    {
      n: '3',
      text: T(
        'Depuis measures an ongoing duration and requires the present: {je travaille depuis deux heures} "for two hours now". Pendant measures a closed stretch and goes with any tense: {pendant deux heures}, {pendant qu\'il a parlé}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Negation comes once with {toujours}, {souvent}, {parfois} and {rarement}: {je ne prie pas toujours}. With {jamais} there is no pas: {je ne prie jamais}. {Je ne prie pas jamais} doubles the negation and is wrong.',
      ),
    },
    {
      n: '5',
      text: T(
        'Déjà marks a completed action ({j\'ai déjà mangé}) and encore an action under way ({je suis encore là}); together they form the opposition déjà / pas encore. Ne … plus is always negative and ne … que means "nothing but".',
      ),
    },
  ],
  notes: [
    {
      label: T('The frequency ladder flips when negated'),
      text: T(
        'It is the prettiest phenomenon in the language: the same adverbs say the opposite once they receive pas. Je prie toujours = always; je ne prie pas toujours = not always. Je prie souvent = often; je ne prie pas souvent = rarely. Je prie parfois = sometimes; je ne prie pas parfois = hardly ever. Je prie rarement = rarely; je ne prie pas rarement = not rarely. A negated French sentence can therefore mean the exact opposite of a positive one.',
      ),
    },
    {
      label: T('Mind {demain} and {le lendemain}'),
      text: T(
        'Demain is the day that is coming. Le lendemain is the day after that: {je suis arrivé lundi; le lendemain, je suis parti} "I arrived on Monday; the next day I left". The same holds for avant-hier "the day before yesterday", which no other language needs with such precision.',
      ),
    },
  ],
  examples: [
    { text: "aujourd'hui", gloss: T('today — the shortest adverb here') },
    { text: 'hier soir', gloss: T('last night — adverb + noun') },
    { text: 'le lendemain', gloss: T('the following day — ≠ demain') },
    { text: 'je travaille depuis deux heures', gloss: T('for two hours now — depuis + present') },
    { text: 'je ne prie jamais', gloss: T('never — jamais already carries the negation') },
    { text: 'je ne prie pas toujours', gloss: T('not always — negated toujours') },
    { text: 'je ne prie pas souvent', gloss: T('rarely — negated souvent') },
    { text: "j'ai déjà mangé", gloss: T('I have already eaten — completed action') },
    { text: 'je suis encore là', gloss: T('I am still here — action under way') },
    { text: 'je ne suis pas encore arrivé', gloss: T('I have not arrived yet — pas encore') },
  ],
  tables: [
    {
      caption: T('Table 1 — Adverbs of moment'),
      head: [T('Word'), T('Gloss'), T('With a noun'), T('Example')],
      rows: [
        ["{aujourd'hui}", 'hoje / de agora em diante', '{—}', "{le monde d'aujourd'hui}"],
        ['{hier}', 'ontem', '{hier soir, hier matin}', '{hier soir} = ontem à noite'],
        ['{demain}', 'amanhã', '{demain soir}', '{le lendemain} = o dia seguinte'],
        ['{maintenant}', 'agora', '{—}', '{maintenant, je parle}'],
        ['{bientôt}', 'em breve', '{—}', '{à bientôt} = até logo'],
        ['{déjà}', 'já', '{—}', "{j'ai déjà mangé}"],
        ['{encore}', 'ainda', '{—}', '{je suis encore là}'],
      ],
    },
    {
      caption: T('Table 2 — Frequency and negation'),
      head: [T('Positive form'), T('Gloss'), T('Negative form'), T('Gloss')],
      rows: [
        ['{toujours}', 'sempre', '{ne … pas toujours}', 'nem sempre'],
        ['{souvent}', 'frequentemente', '{ne … pas souvent}', 'raramente'],
        ['{parfois}', 'às vezes', '{ne … pas parfois}', 'quase nunca'],
        ['{rarement}', 'raramente', '{ne … pas rarement}', 'não é raro'],
        ['{jamais}', '— (já é negativo)', '{ne … jamais}', 'nunca'],
        ['{toujours} + {ne … pas}', '—', '{ne … jamais}', 'nunca (sem {pas})'],
      ],
    },
  ],
};
