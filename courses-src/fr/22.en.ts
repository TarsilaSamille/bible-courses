import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('The passive voice'),
  subtitle: T('{être + participle}, {par} and the {on} substitute'),
  section: T('The verbs'),
  body: C(`## The auxiliary is always {être}

The French passive is simpler than the Portuguese one: **one** auxiliary for everything, always {être}, conjugated in the tense the direct verb would have taken. The participle agrees with the subject, and with nothing else.

| Tense | Active | Passive |
|---|---|---|
| present | {Il écrit} | {Il est écrit} |
| imperfect | {Il écrivait} | {Il était écrit} |
| future | {Il écrira} | {Il sera écrit} |
| passé composé | {Il a écrit} | {Il a été écrit} |
| pluperfect | {Il avait écrit} | {Il avait été écrit} |
| conditional | {Il écrirait} | {Il aurait été écrit} |

Notice that the auxiliary takes **exactly** the forms the active verb would have taken: if the active goes to {écrivait}, the passive goes to {était écrit}. Nothing changes in the auxiliary.

## The participle, that one material

A participle is a noun form with three jobs at once: adjective ({une porte {fermée}}), verb ({il a {fermé} la porte}) and noun ({le {fermé} de la maison}). In French it has only one quirk of inflection: the endings {-é}, {-u}, {-i}, and the short form **with {s}** when it stands alone, which is the leftover of the {tu} {s} you lost in the imperative.

Irregular forms you need: {été} (from {être}), {eu}, {dû}, {crû}, {bu}, {pris}, {mis}, {vu}, {dit}, {fait}, {écrit}, {mort}, {né}, {venu}. The only really frequent group is the one ending in {-u}, and that is where the final {s} shows up: {lû}, {dû}, {crû}, {bu}.

## The agent with {par}

{par} introduces the origin, the cause or the instrument, in past or present: {aimé par Dieu}, {écrit par la main de saint Jean}, {le texte fut écrit {par} un auteur inconnu}. In older texts {par} is commoner than {de}: {l’amour de Dieu} and {la grâce {par} la foi}.

The stated agent disappears in everyday speech: speakers avoid the passive with an agent and say {Quelqu’un a pris mon livre} instead of {Mon livre a été pris par quelqu’un}. The passive then lives without an agent, or turns into an {on} sentence.

## The substitute: {on}

The passive par excellence of spoken French is the {on} sentence, where {on} is an indefinite pronoun frozen into the subject slot:

- {On parle français} — French is spoken
- {On voit la mer d’ici} — the sea can be seen from here
- {On m’a dit que tu partais} — I was told that you were leaving

Note that {on} is also the subject of the **active** verb: {On mange à midi}, «people eat at noon». The construction is the same; only the tense changes. That is why the classic manual writes {on} in brackets as a subject.

## A distinct tense: the passé simple

The Segond Bible reading lives on a tense that Portuguese and Spanish have practically abolished: the **passé simple**. It is the tense of narration, of telling:

- {Dieu créa les cieux et la terre} (Genesis 1:1)
- {Il fut crucifié} — he was crucified
- {Jésus{int} mounta la montagne}
- {La loi fut donnée sur le Sinaï}

The passé simple is the **narrative past**: it lives with the present, not with the imperfect, and it is the tense that makes {Il alla} sound like a story. In {Il fut crucifié}, that {fut} is this very past tense; the passive in the simple past is built with {fut} plus participle, without {été}.

And there is a historical subtlety: the passé simple is the ending of a tense Latin never had, and it came through the Latin perfect. It is the form that gave its name to the *passé simple*, in contrast to the *passé composé*, which is the nineteenth-century novelty.

## Application: the text

Read {Le Verbe s’est fait chair} «The Word became flesh» (John 1:14): passive of {se faire}, with {est} in the present. Read {Il a été jeté dans la prison}: passé composé passive with {été} plus participle. Read {La parole est devenue chair}.

Older French Scripture systematically prefers the **past** for accomplished events: {Il a été crucifié}, {Elle a été prise}. The present French form ({est ressuscité}) is a lazy reading each generation falls into.`),
  vocab: [
    V('il est écrit', 'écrire', 'is written (present passive)'),
    V('a été écrit', 'écrire', 'was written (passé composé passive)'),
    V('fut crucifié', 'crucifier', 'was crucified (passé simple)'),
    V('été', 'être', 'been (irregular participle of {être})'),
    V('dû', 'devoir', 'owed ({-û} participle)'),
    V('pris', 'prendre', 'taken (irregular participle)'),
    V('mis', 'mettre', 'put (irregular participle)'),
    V('vu', 'voir', 'seen (irregular participle)'),
    V('par Dieu', 'par', 'by God (agent)'),
    V('on parle français', 'parler', 'French is spoken ({on} in place of the agent)'),
    V('on m’a dit', 'dire', 'I was told ({on} plus indirect object)'),
    V('la porte fermée', 'fermer', 'the closed door (participle as adjective)'),
    V('il fut appelé', 'appeler', 'he was called ({fut} is the passé simple)'),
    V('serait écrit', 'écrire', 'would be written (conditional passive)'),
    V('si fait', 'faire', 'is done ({si} plus {fait}, impersonal)'),
    V('a été pris', 'prendre', 'was taken (irregular in the passive)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In «{Le texte a été écrit par un auteur inconnu}», why does {été} appear before {écrit}?',
    ),
    options: [
      T(
        'Because {être} is the auxiliary of the whole passive and carries the tense ({a} = passé composé)',
      ),
      T('Because {écrit} cannot express the past on its own'),
      T('Because {par} requires an auxiliary before the participle'),
      T('Because the participle of {être} is {été} and must repeat the verb'),
    ],
    answer: 0,
    hint: T(
      'Rule §1: in the passive the whole tense sits on the auxiliary, and the participle does not inflect.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participle of {prendre}: «Il a ___ ce livre» (passé simple)'),
      answer: 'pris',
      hint: T('Irregular in {-is}, like {mis} and {dit}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the active tense to its passive form'),
      pairs: [
        { a: T('Il écrit'), b: T('{Il est écrit}') },
        { a: T('Il écrivait'), b: T('{Il était écrit}') },
        { a: T('Il écrira'), b: T('{Il sera écrit}') },
        { a: T('Il avait écrit'), b: T('{Il avait été écrit}') },
        { a: T('Il a écrit'), b: T('{Il a été écrit}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is the Segond-style passive, with the passé simple?'),
      options: [
        T('{Il fut crucifié} — {fut} plus participle, without {été}'),
        T('{Il a été crucifié} — passé composé'),
        T('{Il est crucifié} — narrative present'),
        T('{Il crucifie} — simple present'),
      ],
      answer: 0,
      hint: T(
        'The {fut} of the simple passive is the {a} ending of the third group, and not the verb {être} — there is no {été} in the middle.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The passive is built with {être} in the matching tense plus the participle, which agrees with the subject. The auxiliary is always {être}, even when the main verb is {avoir}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The regular participle ends in {-é} in the first and second groups, {-i} in the third, and {-u} in the fourth. Alone, it takes {s}: {pris}, {mis}, {acquis}.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the passive the whole tense sits on the auxiliary: {a été} is the passé composé, {était} the imperfect, {sera} the future. The participle never inflects — it only agrees in gender and number.',
      ),
    },
    {
      n: '4',
      text: T(
        'The simple-past passive is {fut} plus participle, **without** {été}: {il fut crucifié}, {la loi fut donnée}. That is the form you will meet all over Bible reading.',
      ),
    },
    {
      n: '5',
      text: T(
        '{par} introduces the agent; without {par} and without {on}, the passive simply omits the agent. In everyday speech the {on} sentence almost always replaces the passive: {On parle français}, not {Le français est parlé}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The passé simple is dying'),
      text: T(
        'The {passé simple} ({il fut, il alla, il vit}) is the tense of narrative in written French, and it left speech over a century ago: nobody says {il alla}. Spoken French uses {il est allé}. But Segond Bible reading is full of it, because it is a nineteenth-century text following the narrative convention of the Vulgate and the 1810 revision. That sets a trap for a learner: you will read {Jésus monta la montagne} and conclude that {monta} is present — it is the past, disguised as identical to the present. Context rescues you: {il monta la montagne} in the present would require a continuation, {il est monté}.',
      ),
    },
    {
      label: T('Bible reading prefers the past'),
      text: T(
        'Compare two renderings of the same phrase. Latin says {Factum est corpus eius}, «became flesh». Segond writes {Le Verbe s’est fait chair} (John 1:14), with {est} in the present. A modern Spanish translation writes {El Verbo se hizo carne}, with the simple past. Older French chose the present, not by mistake, but because its present passive sounds like an accomplished fact: {est écrit} is more final than {a été écrit}. When you render a verse into Portuguese and come out with «foi feito», remember the French original stayed at {est}.',
      ),
    },
  ],
  examples: [
    { text: 'Le livre est lu.', gloss: T('the book is being read (present)') },
    { text: 'La maison est décrite.', gloss: T('the house is described (participle agrees)') },
    { text: 'Le texte a été écrit.', gloss: T('the text was written (passé composé passive)') },
    { text: 'Il fut crucifié.', gloss: T('he was crucified ({fut} plus participle, no {été})') },
    { text: 'Aimé par Dieu.', gloss: T('loved by God ({par} plus agent)') },
    { text: 'On parle français.', gloss: T('French is spoken (passive with {on})') },
    { text: 'On m’a dit que tu partais.', gloss: T('I was told that you were leaving') },
    {
      text: 'La parole est devenue chair.',
      gloss: T('the Word became flesh ({est} is a narrative present)'),
    },
    { text: 'une porte fermée', gloss: T('a closed door (participle as adjective)') },
    { text: 'le prix dû', gloss: T('the amount owed ({dû} means «owed»)') },
  ],
  tables: [
    {
      caption: T('Table 1 — tenses of the passive'),
      head: [T('Tense'), T('Active'), T('Passive'), T('Participle of {écrire}')],
      rows: [
        ['présent', 'il écrit', 'il est écrit', 'écrit'],
        ['imparfait', 'il écrivait', 'il était écrit', 'écrit'],
        ['futur simple', 'il écrira', 'il sera écrit', 'écrit'],
        ['passé composé', 'il a écrit', 'il a été écrit', 'écrit'],
        ['plus-que-parfait', 'il avait écrit', 'il avait été écrit', 'écrit'],
        ['conditionnel', 'il écrirait', 'il aurait été écrit', 'écrit'],
        ['passé simple', 'il écrivit', 'il fut écrit', 'écrit'],
        ['subjonctif', 'qu’il écrive', 'qu’il soit écrit', 'écrit'],
      ],
    },
    {
      caption: T('Table 2 — forms of the participle'),
      head: [T('Ending'), T('Examples'), T('Gloss')],
      rows: [
        ['{-é}', 'aimé, fermé, parlé', 'amado, fechado, falado'],
        ['{-u}', 'vu, dû, reçu', 'visto, devido, recebido'],
        ['{-i}', 'pris, mis, fini', 'tomado, posto, terminado'],
        ['{-s} (sozinho)', 'pris, mis, acquis', 'tomado, posto, adquirido'],
        [
          'irregulares',
          'été, eu, fait, dit, vu, né, venu',
          'sido, tenido, hecho, dicho, visto, nacido, venido',
        ],
      ],
    },
  ],
};
