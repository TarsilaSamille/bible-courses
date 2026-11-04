import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('The plural of nouns'),
  subtitle: T('{-s}, {-x} and the {-aux} plurals'),
  section: T('Nouns'),
  body: C(`## The rule you cannot hear

The French plural is, in the overwhelming majority of cases, a *silent* -s. {livre} «book» gives {livres}; {ami} «friend» gives {amis}; {maison} «house» gives {maisons}. The letter shows up, the sound does not. A French speaker says the same thing for {livre} and {livres} — one sound for both. So the plural can only be recovered from context, from the determiners or from the verb.

Whoever uses the wrong word gives themselves away instantly, even without speaking: it is the same effect as writing "the book" in English.

## When the -s is already there

If the noun already ends in *-s*, *-x* or *-z*, the plural adds nothing at all, neither letter nor sound:

- {le fils} → {les fils} «the son → the sons»
- {le prix} → {les prix} «the price → the prices»
- {la voix} → {les voix} «the voice → the voices»
- {le nez} → {les nez} «the nose → the noses»

These are called **invariable plurals**, and in French they are commoner than one would guess: {le temps}, {le mois}, {l'angle}, {le corps}, {le sourcil}, {le pelvis}. The list is worth memorising, because mistakes here are expensive.

## The two great groups: -eau and -al

The most productive plural pattern in French swaps one ending for another, always with the same final *x*: *-eau → -eaux* and *-al → -aux*.

| Singular | Plural | Gloss |
|---|---|---|
| {château} | {châteaux} | castle / castles |
| {oiseau} | {oiseaux} | bird / birds |
| {bateau} | {bateaux} | boat / boats |
| {cheval} | {chevaux} | horse / horses |
| {animal} | {animaux} | animal / animals |
| {journal} | {journaux} | newspaper / newspapers |
| {hôpital} | {hôpitaux} | hospital / hospitals |

What the French student learns early on is that **the plural is regular in the ending**; the irregularity always lives in the case, never in the number. There is no dual and no double plural: there is simply one form for many.

## Where the pattern fails

The *-al → -aux* rule is strong but not universal. A stubborn handful of words refuses it:

- {festival} → {festivals}, {carnaval} → {carnavals}, {bal} → {bals}
- {oral} → {oraux}, {hospital} → {hôpitaux}, {global} → {globaux}

The same holds for *-eau*: {le nouveau} → {les nouveaux}, {le peau} → {les peaux}, yet {le château} → {les châteaux} and {le bateau} → {les bateaux}. What decides is the number of syllables, not the letter.

## The -ou group

The ending *-ou* produces *-oux* only in a short, closed list: {genou} → {genoux} «knee/knees», {caillou} → {cailloux} «pebble/pebbles», {chou} → {choux} «cabbage/cabbages», {hibou} → {hiboux} «owl/owls», {joujou} → {joujoux} «toy/toys». Everything else merely takes the -s: {clou → clous}, {trou → trous}, {cou → cous}, {bijou → bijoux}.

## Reading — Louis Segond

{Au commencement, Dieu créa les cieux et la terre} (Gen. 1:1) — {les cieux} with the invariant *-x*. {Il fit ensuite le soleil, la lune et les étoiles} (Gen. 1:16) — three nouns, the second with *-x*. {Vous serez donc parfaits comme votre Père qui est aux cieux est parfait} (Matt. 5:48) — the plural of {les enfants de Dieu} is what the promise turns on. {Les animaux de la terre}, {les oiseaux du ciel} and {les poissons des eaux} of Genesis 1 keep the very same plural machinery.

## What to take away

One letter changes and nothing changes in the sound: that is the central idea of the French plural. Only when the ending itself is swapped (*-al → -aux*, *-ou → -oux*, *-iel → -ieux*) does the ear receive a signal.`),
  vocab: [
    V('livre', 'livre', 'book (→ livres)'),
    V('les fils', 'fils', 'the sons; invariant plural'),
    V('les prix', 'prix', 'the prices; invariant (x)'),
    V('la voix', 'voix', 'the voice; invariant in the plural'),
    V('le nez', 'nez', 'the nose; invariant (z)'),
    V('le château', 'château', 'the castle; -eau → -eaux'),
    V('le cheval', 'cheval', 'the horse; -al → -aux'),
    V('le journal', 'journal', 'the newspaper; journals in -aux'),
    V("l'animal", 'animal', 'the animal; animaux'),
    V("l'hôpital", 'hôpital', 'the hospital; hôpitaux'),
    V('le genou', 'genou', 'the knee; -ou → -oux'),
    V('le chou', 'chou', 'the cabbage; -ou → -oux'),
    V('le clou', 'clou', 'the nail; takes only -s'),
    V('le ciel', 'ciel', 'the sky; cieux'),
    V("l'œil", 'œil', 'the eye; yeux (one plural only)'),
    V('le travail', 'travail', 'the work; travaux'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the plural of {journal} normally formed?'),
    options: [
      T('{journaux} — ending swap, as in {cheval}'),
      T('{journals} — just a silent -s'),
      T('{journaux} — because it ends in -al'),
      T('{journaus} — insertion of -u'),
    ],
    answer: 0,
    hint: T(
      'Option 2 names the rule; option 4 gives its reason. Both are true — pick the one that describes the mechanism.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural of {cheval}: cheva_'),
      answer: 'ux',
      hint: T('Rule §3: {-al} → {-aux}.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'Which of these plurals is irregular, that is, it does not follow the pattern of its group?',
      ),
      options: [T('{les voix}'), T('{les châteaux}'), T('{les carnavals}'), T('{les genoux}')],
      answer: 2,
      hint: T('Three follow their group; {carnaval} refuses the -aux.'),
    },
    {
      kind: 'match',
      prompt: T('Match each singular to its plural'),
      pairs: [
        { a: T('the newspaper'), b: T('the newspapers') },
        { a: T('the price'), b: T('the prices') },
        { a: T('the button'), b: T('the buttons') },
        { a: T('the cabbage'), b: T('the cabbages') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «{les yeux, les oreilles et les bouches}», how many invariant plurals appear?'),
      options: [T('None'), T('One'), T('Two'), T('Three')],
      answer: 1,
      hint: T('Eyes and mouths are not invariant: {yeux} is irregular and {bouches} is regular.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The general rule adds a silent *-s* to the singular: {livre → livres}, {ami → amis}, {maison → maisons}, {enfant → enfants}. The sound does not change, and the plural is recognised only from context.',
      ),
    },
    {
      n: '2',
      text: T(
        'Nouns ending in *-s*, *-x* or *-z* are invariant in the plural: {le fils → les fils}, {le prix → les prix}, {la voix → les voix}, {le nez → les nez}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The productive swaps are *-eau → -eaux* and *-al → -aux*: {château → châteaux}, {oiseau → oiseaux}, {cheval → chevaux}, {animal → animaux}, {journal → journaux}, {hôpital → hôpitaux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The *-al → -aux* is a rule, not a law: {festival → festivals}, {carnaval → carnavals}, {bal → bals} stay out. The number of syllables explains the resistance, not the final letter.',
      ),
    },
    {
      n: '5',
      text: T(
        'The *-ou → -oux* works only for a closed list — {genou → genoux}, {caillou → cailloux}, {chou → choux}, {hibou → hiboux} —; everywhere else a plain *-s* does: {clou → clous}, {trou → trous}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Conceptual plurals'),
      text: T(
        'Some plurals are not mechanics: they are real forms with their own roots. {œil → yeux}, {ciel → cieux}, {vitrail → vitraux}, {dieu → dieux}, {eau → eaux}. None of them is derivable by rule — learn them as words.',
      ),
    },
    {
      label: T('Numbers, acronyms and names'),
      text: T(
        'Years, acronyms and surnames take no plural: {les années 1990}, {les États-Unis}, {les Dupont}, {les Martin}. The plural appears only when the person becomes a group: {les Duponts} «the several Duponts».',
      ),
    },
  ],
  examples: [
    { text: 'livre → livres', gloss: T('book → books: silent -s') },
    { text: 'le fils → les fils', gloss: T('the son → the sons: invariant') },
    { text: 'le prix → les prix', gloss: T('the price → the prices: invariant (x)') },
    { text: 'la voix → les voix', gloss: T('the voice → the voices: invariant') },
    { text: 'le château → les châteaux', gloss: T('castle → castles: -eau → -eaux') },
    { text: 'le cheval → les chevaux', gloss: T('horse → horses: -al → -aux') },
    { text: "l'animal → les animaux", gloss: T('animal → animals: -al → -aux') },
    { text: 'le genou → les genoux', gloss: T('knee → knees: -ou → -oux') },
    { text: 'le clou → les clous', gloss: T('nail → nails: just -s') },
    { text: "l'œil → les yeux", gloss: T('eye → eyes: one irregular plural') },
  ],
  tables: [
    {
      caption: T('Table 1 — The general rule and invariant plurals'),
      head: [T('Case'), T('Singular ending'), T('Plural'), T('Sound'), T('Examples')],
      rows: [
        [
          'regra geral',
          '{-e}, {-a}, consoante',
          '{-s}',
          'inalterado',
          '{livre → livres}, {ami → amis}',
        ],
        ['já em -s', '{-s}', '{-s}', 'inalterado', '{le fils → les fils}'],
        ['já em -x', '{-x}', '{-x}', 'inalterado', '{le prix → les prix}, {le voix → les voix}'],
        ['já em -z', '{-z}', '{-z}', 'inalterado', '{le nez → les nez}'],
        ['estados, meses', '{le temps}, {le mois}', 'iguais', 'inalterado', '{le mois → les mois}'],
      ],
    },
    {
      caption: T('Table 2 — Endings that swap shape'),
      head: [T('Group'), T('Swap'), T('Examples'), T('Limit or exception')],
      rows: [
        [
          '-eau',
          '-eaux',
          '{château → châteaux}, {bateau → bateaux}',
          '{le nouveau → les nouveaux}, {le peau → les peaux}',
        ],
        [
          '-al',
          '-aux',
          '{cheval → chevaux}, {animal → animaux}',
          '{festival → festivals}, {bal → bals}, {hospital → hôpitaux}',
        ],
        ['-ou (lista)', '-oux', '{genou → genoux}, {chou → choux}', '{clou → clous}, {cou → cous}'],
        ['-iel', '-ieux', '{ciel → cieux}', '{le miel → les miels}'],
        [
          '-eau / -eil',
          '-eaux / -eux',
          '{œil → yeux}, {vitrail → vitraux}',
          'plurais irreprodutíveis por regra',
        ],
      ],
    },
  ],
};
