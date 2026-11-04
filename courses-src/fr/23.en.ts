import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Prepositions'),
  subtitle: T('{à, de, en, par, pour, dans, sur, chez} — goal, origin, means, purpose'),
  section: T('Prepositions'),
  body: C(`## What a preposition does

A French preposition links a noun to a verb, to another noun or to an infinitive, and the sense comes from the verb, not from the preposition. {Jean habite {à} Paris} and {Jean pense {à} Paris} use the same preposition and say different things: in the first, {à} is place; in the second, {à} is the target of the thought.

The most productive everyday prepositions are six, and they split into two columns:

| Preposition | Main value | Example | Gloss |
|---|---|---|---|
| {à} | goal, place, direction | {Je vais {à} Lyon} | I am going to Lyon |
| {de} | origin, possession, material | {Il vient {de} Rome} | he comes from Rome |
| {en} | place, time, means | {Elle est {en} Italie} | she is in Italy |
| {par} | agent, means, route | {Par la foi} | through faith |
| {pour} | purpose, duration, opinion | {Pour toi} | for you |
| {avec} | company, instrument | {Avec Dieu} | with God |

The trick for not confusing {par} and {pour} is to translate by **intention**: {par la foi} means «through faith», that is, the means; {pour la foi} means «for the sake of faith», that is, the motive. One use is religious and the other is not.

## The contractions: {au, aux, du, des}

What makes the French preposition special is not its sense: it is the **fusion**. {à} plus {le} gives {au}; {à} plus {les} gives {aux}; {de} plus {le} gives {du}; {de} plus {les} gives {des}. They are the same prepositions, merely welded to the article, and the meaning does not change at all.

| Contraction | Long form | Example | Gloss |
|---|---|---|---|
| {au} | {à + le} | {au marché} | at the market |
| {aux} | {à + les} | {aux portes} | at the gates |
| {du} | {de + le} | {du ciel} | from heaven |
| {des} | {de + les} | {des enfants} | of children |

And there is a sound rule that explains almost everything: it contracts **only** when the article is {le} or {les}. With {la} and {l’} there is no fusion: {à la} ({à la maison}), {de la} ({de la famille}), {à l’} ({à l’église}). With {lui} and {elles} either: {de lui}, {à elles}.

## Time with {à, en, dans, depuis}

Time is the field where French most deceives a learner coming from Portuguese, because Portuguese uses the same preposition for distinct things.

- **{en} + expression**: {en 1810}, {en été}, {en France}, {en deux minutes}. It is the preposition of time **inside** a period or a limit.
- **{à} + expression**: {à midi}, {à minuit}, {à six heures}, {à Noël}, {à la Pentecôte}. It marks an **instant**, an exact point.
- **{dans} + expression**: {dans une heure}, {dans deux jours}. It marks a relative **future**: in.
- **{depuis} + expression**: {depuis deux ans}, {depuis ce matin}. It marks a temporal **origin**, a starting point that still holds.

In one line: {en} = inside, {à} = at the point, {dans} = in, {depuis} = since.

## Place with {dans, sur, sous, chez, devant}

Place is the second great field:

- {dans} — interior: {dans la maison}, {dans la forêt}, {dans la boîte}
- {sur} — surface, support: {sur la table}, {sur le mur}, {sur l’eau}
- {sous} — below, covered: {sous l’arbre}, {sous la terre}, {sous la main}
- {chez} — the place of a person, by extension the environment: {chez moi}, {chez le médecin}, {chez les Juifs}
- {devant} / {derrière} — front and back: {devant la maison}, {derrière l’église}

A quick test: if the noun is a person, use {chez}. Not {à Pierre} for «at Pierre’s place», but {chez Pierre}. In formal contexts {chez} can be dropped: {chez le docteur} → {Dr Leblanc}.

## Application: the biblical text

The Gospel of Luke is made entirely of prepositions, and each one is a piece of information. {Au commencement était la Parole} «In the beginning was the Word» (John 1:1): {au} = {à + le}, an abstract place. {La Parole était auprès de Dieu} «the Word was with God» (1:1): {auprès de} = «close to». {En ce temps-là, Jésus sortit} «In that time Jesus went out» (Luke 2:1): {en} = time. {Il alla à la maison de Dieu} «he went to the house of God» (Luke 2:49): {à} plus {de}, a goal with possession.

And the text keeps repeating the pair that matters most: {Pour vous et pour beaucoup} «for you and for many» (Matthew 26:13) — {pour} as purpose, not as means. A sloppy translation blurs that distinction, and that distinction is exactly what separates {par la foi} from {pour la foi}.`),
  vocab: [
    V('à Paris', 'à', 'in Paris (place)'),
    V('à la maison', 'à', 'home, to the house (goal; {la} does not contract)'),
    V('de France', 'de', 'from France (origin, possession)'),
    V('au marché', 'à', 'at the market ({à + le})'),
    V('du ciel', 'de', 'from heaven ({de + le})'),
    V('aux portes', 'à', 'at the gates ({à + les})'),
    V('des enfants', 'de', 'of children ({de + les})'),
    V('en 1810', 'en', 'in 1810 (time inside)'),
    V('à midi', 'à', 'at noon (instant)'),
    V('dans une heure', 'dans', 'in an hour (relative future)'),
    V('depuis ce matin', 'depuis', 'since this morning (temporal origin)'),
    V('par la foi', 'par', 'through faith (means, route)'),
    V('pour la foi', 'pour', 'for the sake of faith (motive, purpose)'),
    V('chez moi', 'chez', 'at my place'),
    V('sous l’arbre', 'sous', 'under the tree (covered)'),
    V('auprès de Dieu', 'auprès', 'close to God, with God'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «{Je vais à Lyon}» and «{Je pense à Lyon}», what changes?'),
    options: [
      T(
        'Nothing in the preposition: the governing verb changes — {aller} gives a goal, {penser} gives the direction of the thought',
      ),
      T('The preposition becomes {en}, the neutral place form'),
      T('The second sentence needs an article: {à le Lyon}'),
      T('The second sentence is wrong, because {penser} takes no preposition'),
    ],
    answer: 0,
    hint: T(
      'In French the sense of a preposition comes from the verb that precedes it, not from the preposition itself.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contract: {à + le marché} →'),
      answer: 'au',
      hint: T('The article {le} fuses with {à}; with {la} there is no fusion.'),
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to its value'),
      pairs: [
        { a: T('à'), b: T('goal, exact point: {à six heures}') },
        { a: T('en'), b: T('inside a period: {en 1810}') },
        { a: T('dans'), b: T('relative future: {dans deux jours}') },
        { a: T('depuis'), b: T('temporal origin: {depuis ce matin}') },
        { a: T('chez'), b: T('place of a person: {chez le médecin}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses {pour} with the sense of purpose, not means?'),
      options: [
        T('{Tout est fait pour la gloire de Dieu}'),
        T('{Il a été sauvé par la foi}'),
        T('{Par la foi, les justes vivront}'),
        T('{Il est entré par la porte}'),
      ],
      answer: 0,
      hint: T(
        'Rule §1: {pour} points to an end, {par} to a means. {par la foi} uses {par} precisely for that reason.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{par} introduces **means, agent or route**; {pour} introduces **purpose, duration or opinion**. {Par la foi} = «through faith» (means), {pour la foi} = «for the sake of faith» (motive). Swapping them swaps the theological sense.',
      ),
    },
    {
      n: '2',
      text: T(
        'Contraction happens only with {le} and {les}: {à le} = {au}, {à les} = {aux}, {de le} = {du}, {de les} = {des}. With {la}, {l’}, {lui} and {elles} there is no fusion.',
      ),
    },
    {
      n: '3',
      text: T(
        'In time, each preposition marks one value: {en} = inside a period, {à} = at an instant, {dans} = in a relative future, {depuis} = from a starting point. Portuguese needs fewer prepositions for the same work.',
      ),
    },
    {
      n: '4',
      text: T(
        'In place, {dans} is interior, {sur} is surface, {sous} is below or covered, and {chez} is the place of a person. The {chez} test: if the noun is a person, use {chez}, never {à}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The sense of a preposition comes from the verb that governs it, not from the preposition itself: {Je vais à la ville} (goal), {Je pense à la ville} (direction of the thought), {Je viens de la ville} (origin). Three verbs, three values, one preposition each.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why Latin vanished and so did Greek'),
      text: T(
        'Latin had a rich case system that already coded origin, goal, instrument and time in the ending of the noun itself. Greek had four cases. French, the most faithful heir to that logic, chose to erase the cases and put the information into prepositions — and there lies the step: {de} and {à} became the two strongest prepositions, with dozens of values each. That is why the same Latin word {sub} shows up now as {sur}, now as {sous}: the Latin the case said which, and French has to ask which one you mean.',
      ),
    },
    {
      label: T('The biblical text is a map of prepositions'),
      text: T(
        'Whoever learns to read John 1 and Luke 2 learns, without noticing, to use half of the French prepositions. {Au commencement} is {à + le} applied to abstract time. {Auprès de Dieu} is a compound word, and it means «close to». {En ce temps-là} is {en} applied to a moment. And {Il alla à la maison de Dieu} stacks three pieces of information into one verb: {à} (goal), {la maison} (the noun), {de Dieu} (whose house it is). The French preposition is as informative as the Latin case ending — anyone who knows Latin will read the New Testament in French almost effortlessly.',
      ),
    },
  ],
  examples: [
    { text: 'Je vais à Lyon.', gloss: T('I am going to Lyon ({à} = goal)') },
    { text: 'Il vient de Rome.', gloss: T('he comes from Rome ({de} = origin)') },
    { text: 'au marché', gloss: T('at the market ({à + le} fused)') },
    { text: 'aux portes de la ville', gloss: T('at the gates of the city ({à + les})') },
    { text: 'du ciel', gloss: T('from heaven ({de + le})') },
    { text: 'en 1810', gloss: T('in 1810 (inside a period)') },
    { text: 'à la Pentecôte', gloss: T('at Pentecost ({à} = instant; {la} does not contract)') },
    { text: 'dans deux jours', gloss: T('in two days (relative future)') },
    { text: 'depuis ce matin', gloss: T('since this morning (temporal origin)') },
    { text: 'chez le médecin', gloss: T('at the doctor’s ({chez} = place of a person)') },
  ],
  tables: [
    {
      caption: T('Table 1 — the article contractions'),
      head: [T('Preposition'), T('+ {le}'), T('+ {les}'), T('+ {la} / {l’}')],
      rows: [
        ['à', 'au', 'aux', 'à la / à l’'],
        ['de', 'du', 'des', 'de la / de l’'],
        ['pour', 'pour le', 'pour les', 'pour la / pour l’'],
        ['sans', 'sans le', 'sans les', 'sans la / sans l’'],
        ['avec', 'avec le', 'avec les', 'avec la / avec l’'],
      ],
    },
    {
      caption: T('Table 2 — time and place'),
      head: [T('Value'), T('Preposition'), T('Example'), T('Gloss')],
      rows: [
        [T('time inside'), 'en', T('{en 1810}'), T('in 1810')],
        [T('instant'), 'à', T('{à minuit}'), T('at midnight')],
        [T('relative future'), 'dans', T('{dans deux jours}'), T('in two days')],
        [T('temporal origin'), 'depuis', T('{depuis ce matin}'), T('since this morning')],
        [T('interior'), 'dans', T('{dans la forêt}'), T('in the forest')],
        [T('surface'), 'sur', T('{sur la table}'), T('on the table')],
        [T('place of a person'), 'chez', T('{chez le médecin}'), T('at the doctor’s')],
      ],
    },
  ],
};
