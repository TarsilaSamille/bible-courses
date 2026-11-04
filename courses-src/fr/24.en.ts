import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Verbs with prepositions'),
  subtitle: T('{penser à, croire en, parler de, manquer à} — the verb chooses the preposition'),
  section: T('Prepositions'),
  body: C(`## A preposition does not translate on its own

The most important rule of this chapter fits in one sentence: **the preposition comes from the verb, and it can never be swapped**. You do not render {penser à} as «think something»; you translate the whole block. And the block can mean more than the sum of its parts.

The classic case is {penser}. With {à} you think of a thing or a person: {Je pense à la maison} «I am thinking of the house», {Je pense à mon ami} «I am thinking of my friend». With {de} you ask for an opinion: {Que penses-tu de ce film?} «what do you make of this film?». Portuguese uses the same two verbs and French uses two different prepositions — and that choice is the meaning.

## The map of the very frequent verbs

These verbs show up in almost every French text and almost all of them take a preposition:

| Verb | Preposition | Meaning | Example |
|---|---|---|---|
| {penser} | {à} | to think of | {penser à Dieu} |
| {penser} | {de} | to opine about | {penser de ce film} |
| {croire} | {en} | to believe in (faith) | {croire en Dieu} |
| {croire} | {que} | to believe that | {je crois qu’il dit vrai} |
| {parler} | {à} | to speak to | {parler à mon père} |
| {parler} | {de} | to speak about | {parler de Dieu} |
| {parler} | {pour} | to speak for | {parler pour le pauvre} |
| {attendre} | {?} | to wait for | {attendre le train} |
| {manquer} | {à / de} | to be missing to / to lack | {manque à Paul} |
| {dépendre} | {de} | to depend on | {dépendre de toi} |
| {avoir besoin} | {de} | to need | {avoir besoin d’aide} |
| {jouir} | {de} | to enjoy | {jouir de la paix} |

Notice {croire}: {croire en Dieu} is faith, {croire que} is opinion, and {croire quelqu’un} (no preposition) is to trust a person. Three distinct constructions with one verb.

## Verbs that govern a noun complement

Many verbs that take a direct object in Portuguese take a complement with {de} or {à} in French. This inversion is the most common feature of the chapter, and it is systematic:

- {jouir **de**} la paix — to enjoy peace (pt: gozar a paz)
- {profiter **de**} la nuit — to make the most of the night
- {se rendre compte **de**} ce qui s’est passé — to realise what happened
- {douter **de**} la promesse — to doubt the promise
- {renoncer **à**} la vanité — to renounce vanity

The pattern is clear: when Portuguese simply “has” the complement, French inserts a preposition of possession ({de}) or of purpose ({à}). This is what is called government, and it has to be memorised verb by verb.

## {chez} and the place of a person

{chez} is the preposition of persons and their spaces. {chez moi}, {chez Pierre}, {chez le médecin}, {chez nous}. And by extension the social environment: {chez les Juifs} «among the Jews», {l’usage est courant chez les Français} «the custom is current among the French».

That is why {à} disappears when the noun is a person: {chez Pierre}, not {à Pierre}, for «at Pierre’s place». In formal register {chez} also drops out: {chez le docteur} → {Dr Leblanc}.

## Application: the biblical text

The Segond text is a manual of verbs with prepositions, because the original Greek already was:

- {Je crois en mon Fils} (John 6:36) — {croire en}, faith
- {Je parle à mes disciples} — {parler à}, the addressee
- {Il ne faut pas juger sur les apparences} — {juger sur}, the criterion
- {Il alla trouver Philippe} — {aller} takes {trouver} with no preposition: {aller **trouver**}, not {aller à trouver}
- {Je ne suis pas venu pour être servi} — {venir pour}, purpose

And there is a rare one worth keeping: {Il suffit de} «it is enough». Latin {sufficit} governed the infinitive, and French inherited the construction unchanged.`),
  vocab: [
    V('penser à', 'penser', 'to think of (an idea, a person)'),
    V('penser de', 'penser', 'to opine about (asking for an opinion)'),
    V('croire en', 'croire', 'to believe in (faith, trust)'),
    V('croire que', 'croire', 'to believe that (opinion)'),
    V('croire quelqu’un', 'croire', 'to trust someone (no preposition)'),
    V('parler à', 'parler', 'to speak to (addressee)'),
    V('parler de', 'parler', 'to speak about (topic)'),
    V('parler pour', 'parler', 'to speak for (a cause)'),
    V('jouir de', 'jouir', 'to enjoy'),
    V('douter de', 'douter', 'to doubt'),
    V('renoncer à', 'renoncer', 'to renounce'),
    V('se rendre compte de', 'rendre', 'to realise'),
    V('dépendre de', 'dépendre', 'to depend on'),
    V('avoir besoin de', 'avoir', 'to need'),
    V('manquer à', 'manquer', 'to be missing to (a person)'),
    V('manquer de', 'manquer', 'to lack (a thing)'),
    V('il suffit de', 'suffire', 'it is enough (Latin legacy)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «{Que penses-tu de ce film?}», why does {penser} take {de} and not {à}?'),
    options: [
      T(
        'Because {penser de} is the construction of opinion: you ask what someone thinks, not what they think about',
      ),
      T('Because {de} is always the preposition of opinion in French'),
      T('Because a question with {?} takes {de} and a statement takes {à}'),
      T('Because {penser de} is a common speech error that the standard corrects'),
    ],
    answer: 0,
    hint: T(
      'Rule §1: {penser à} = to think **about** something; {penser de} = to **opine about** something.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Je ___ mon Fils» (John 6:36 — to believe in someone with faith)'),
      answer: 'crois en',
      hint: T('It is {croire} with {en}; the same verb with {que} means something else.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its required preposition'),
      pairs: [
        { a: T('jouir'), b: T('{jouir de}') },
        { a: T('douter'), b: T('{douter de}') },
        { a: T('dépendre'), b: T('{dépendre de}') },
        { a: T('renoncer'), b: T('{renoncer à}') },
        { a: T('profiter'), b: T('{profiter de}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct according to the verb’s government?'),
      options: [
        T('{Elle a profité de la nuit}'),
        T('{Elle a profité la nuit}'),
        T('{Elle a profité à la nuit}'),
        T('{Elle a profité pour la nuit}'),
      ],
      answer: 0,
      hint: T(
        'Rule §3: {profiter} governs {de}. {Jouir la paix} and {profiter la nuit} are government errors.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The preposition belongs to the verb and cannot be swapped: {penser **à**} = to think of, {penser **de**} = to opine about, {croire **en**} = to believe in, {croire **que**} = to believe that.',
      ),
    },
    {
      n: '2',
      text: T(
        'Many verbs that take a direct object in Portuguese take a complement with {de} or {à} in French: {jouir de}, {profiter de}, {douter de}, {renoncer à}, {jouer à}. This is called government and it has to be memorised verb by verb.',
      ),
    },
    {
      n: '3',
      text: T(
        'When the noun is a person, the place uses {chez} and not {à}: {chez Pierre}, {chez le médecin}, {chez nous}. By extension {chez} indicates social environment: {chez les Juifs}, {chez les Français}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Some verbs take no preposition at all and the construction comes whole: {aller **trouver** Philippe}, {venir **voir**}, {entendre **parler**}. Do not write {aller à trouver}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Watch the verbs with two senses: {manquer à} is to be missing to someone, {manquer de} is to lack something. {La vie manque de sens} «life lacks meaning» takes {de}, not {à}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin created government'),
      text: T(
        'Half of French government comes from Latin constructions where a verb governed a case, and the case survived as a preposition. {douter} governs {de}, as Latin {dubitare} governed the ablative: *dubitare + abl*. {jouir de} comes from *frui + abl*. Portuguese, which also comes from Latin, lost those markers: today it says {duvidar de} and {gozar de} by luck, and the {de} nearly vanished in {gozar a}. French kept the dead case alive inside the living preposition, and that is why government seems arbitrary: it is a syntactic fossil.',
      ),
    },
    {
      label: T('Bible reading teaches government'),
      text: T(
        'The French New Testament is the best manual of verbs with prepositions in existence, because it was translated from Greek and every verb keeps the preposition the Greek carried. {Je crois en mon Fils} is {πιστεύω εἰς}, the Greek {εἰς} (inward) rendered as {en}, because {croire en} is entering into a relation of faith. {Je parle à mes disciples} is {λαλῶ πρὸς}, and {πρὸς} means «towards». If you learn French government from the New Testament, you are at the same time learning Greek government — and that is no coincidence: it is the same root.',
      ),
    },
  ],
  examples: [
    { text: 'Je pense à mon ami.', gloss: T('I think of my friend ({penser à})') },
    { text: 'Que penses-tu de ce film ?', gloss: T('what do you make of this film? (opinion)') },
    { text: 'Je crois en Dieu.', gloss: T('I believe in God (faith)') },
    { text: 'Je crois qu’il dit vrai.', gloss: T('I believe he tells the truth (opinion)') },
    {
      text: 'Parlez pour qu’ils comprennent.',
      gloss: T('speak so that they understand ({parler pour} plus purpose)'),
    },
    {
      text: 'Il alla trouver Philippe.',
      gloss: T('he went to find Philip ({aller} with no preposition)'),
    },
    {
      text: 'Elle a profité de la nuit.',
      gloss: T('she made the most of the night ({profiter de})'),
    },
    {
      text: 'Se rendre compte de la vérité.',
      gloss: T('realising the truth (government of {de})'),
    },
    { text: 'La vie manque de sens.', gloss: T('life lacks meaning ({manquer de})') },
    {
      text: 'L’usage est courant chez les Français.',
      gloss: T('the custom is current among the French ({chez} = environment)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — verbs with an alternative preposition'),
      head: [T('Verb'), T('Preposition A'), T('Preposition B'), T('Difference in sense')],
      rows: [
        [
          'penser',
          'à — pensar em',
          'de — opinar sobre',
          'objeto de pensamento / pedido de opinião',
        ],
        ['croire', 'en — crer em', 'que — crer que', 'fé / opinião'],
        ['parler', 'à — falar com', 'de — falar sobre', 'interlocutor / tema'],
        ['manquer', 'à — faltar a', 'de — carecer de', 'pessoa / coisa'],
        ['venir', 'à — vir a', 'de — vir de', 'destino / origem'],
      ],
    },
    {
      caption: T('Table 2 — government: verb and complement'),
      head: [T('Verb'), T('Portuguese'), T('French'), T('Example')],
      rows: [
        ['jouir', 'gozar a', 'jouir de', 'jouir de la paix'],
        ['profiter', 'aproveitar a', 'profiter de', 'profiter de la nuit'],
        ['douter', 'duvidar de', 'douter de', 'douter de la promesse'],
        ['renoncer', 'renunciar a', 'renoncer à', 'renoncer au monde'],
        [
          'se rendre compte',
          'dar-se conta de',
          'se rendre compte de',
          'se rendre compte de la vérité',
        ],
        ['dépendre', 'depender de', 'dépendre de', 'dépendre de Dieu'],
        ['jouer', 'jogar', 'jouer à', 'jouer aux cartes'],
        ['manquer', 'faltar', 'manquer à / de', 'manque à Paul / manque de sens'],
      ],
    },
  ],
};
