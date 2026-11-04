import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('The adverb: it does not inflect'),
  subtitle: T('{bene} is the same in the first and the tenth person — the steadiest word in Latin'),
  section: T('Adverb'),
  body: C(`## A word with no case

The Latin adverb is the only part of the clause that does not inflect. {bene} is the same in {ego bene cantō}, in {cantās bene} and in {cantāmus bene}: it has no gender, no number, no person. The noun would change case in each of those three sentences and the verb would change person; the adverb crosses all three without changing a letter.

Anyone coming from Portuguese misses something here. A single {bene} covers {puella bene canit} and {puellae bene canunt}, and that economy is what lets the Vulgate write with two words what Portuguese writes with four. A Latin adverb can also modify the whole clause instead of a single word: in {bene omnia fecit}, the {bene} clings to no verb in particular, it qualifies what was done.

## Three ways of forming it

The practical rule is one, with two exceptions. A first- or second-declension adjective becomes an adverb by swapping the ending for {ē}: {doctus} gives {doctē}, {pulcher} gives {pulchrē}, {firmus} gives {firmē}, {miser} gives {misē}. A third-declension adjective uses {iter}: {celer} gives {celeriter}, {fortis} gives {fortiter}, {fidēlis} gives {fidēliter}. And the most frequent pair in Latin follows neither: {bonus} gives {bene} and {malus} gives {male}.

| Adjective | Adverb | Gloss |
|---|---|---|
| {doctus} | {doctē} | learnedly |
| {pulcher} | {pulchrē} | beautifully |
| {firmus} | {firmē} | firmly |
| {miser} | {misē} | miserably |
| {bonus} | {bene} | well |
| {malus} | {male} | badly |
| {celer} | {celeriter} | quickly |
| {fortis} | {fortiter} | bravely |

Comparative and superlative are regular and enter the same account: {fortiter}, {fortius}, {fortissimē}. Latin does this without any marker, unlike Portuguese, which needs "more" and "most".

| Base | Comparative | Superlative |
|---|---|---|
| {bene} | {melius} | {optime} |
| {male} | {peius} | {pessime} |
| {fortiter} | {fortius} | {fortissimē} |
| {facile} | {facilius} | {facillimē} |
| {amplē} | {amplius} | {amplissimē} |
| {graviter} | {gravius} | {gravissimē} |

Look at {facilius} and {facillimē}: the Latin superlative has {illim}, and in {facillimē} and {difficillimē} that {il} turns up next to the comparative in {ius}. A literal translation writes "more easy" and "the most easiest", and it is wrong twice.

## Where the adverb stands

The position of the adverb is the one thing in Latin that students treat as free and it is not. An adverb of manner usually stands glued to the verb it qualifies, {cantāre pulchrē}, or right before it, {pulchrē cantāre}. An adverb of quantity usually follows the verb. And the negation {nōn} stands immediately before what it negates: {nōn bene} is "not well", {bene nōn} is not current usage.

Adverbs are classified by the question they answer, and the question is the surest way of knowing which word you are looking at:

| Class | Question | Adverbs |
|---|---|---|
| manner | how? | {ita}, {sīc}, {aliter}, {fere} |
| quantity | how much? | {satis}, {nimis}, {valde}, {parum}, {tantum} |
| place | where? | {hic}, {ibi}, {istinc}, {illinc} |
| time | when? | {hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper} |
| negation | not? | {nōn}, {haud}, {nē} |
| number | how often? | {semel}, {bis}, {ter} |

{satis bene} means "well enough", and {nimis} means "too much": the two measure rather than qualify. An adverb of quantity is the commonest way Latin says "a little", and Portuguese almost always needs an adjective for that.

## Semper gaudete

In 1 Thessalonians 5:16-18 the Vulgate gives three instructions in three verses, and each one rests on an adverb: {semper gaudete}, {sine intermissione orate}, {in omnibus gratias agite}. Three adverbs in three sentences, and all three sentences are simple.

{semper} does not inflect: "always", with the whole weight of an adverb and no mark of person. {sine intermissione} shows the other road, the one Latin prefers when the adverb does not exist as a word: a noun in the ablative after {sine}, {cum}, {contra}, {propter}. {in omnibus} answers where, in all things.

The verb of each verse is imperative, and the negation of an imperative is an adverb in itself: {nōn timete} is literally "do not fear", with {timete} in the second person and {nōn} planted right in front of it.`),
  vocab: [
    V('bene', 'bene', 'well (invar. adv., from {bonus})'),
    V('male', 'male', 'badly (invar. adv., from {malus})'),
    V('doctē', 'doctē', 'learnedly (adv. from {doctus}, 2nd decl.)'),
    V('pulchrē', 'pulchrē', 'beautifully (adv. from {pulcher})'),
    V('celeriter', 'celeriter', 'quickly (adv. in {iter}, from {celer})'),
    V('fortiter', 'fortiter', 'bravely (adv. from {fortis})'),
    V('satis', 'satis', 'enough (adv. of quantity)'),
    V('nimis', 'nimis', 'too much (adv. of quantity)'),
    V('valde', 'valde', 'very (adv. of quantity)'),
    V('parum', 'parum', 'a little (adv. of quantity)'),
    V('semper', 'semper', 'always (adv. of time)'),
    V('numquam', 'numquam', 'never (adv. of time, negation inside)'),
    V('hodie', 'hodie', 'today (adv. of time)'),
    V('cras', 'cras', 'tomorrow (adv. of time)'),
    V('mox', 'mox', 'soon (adv. of time)'),
    V('statim', 'statim', 'at once (adv. of time)'),
    V('ita', 'ita', 'thus (adv. of manner and of result)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {puellae bene canunt}, how many forms does the adverb {bene} have?'),
    options: [
      T('One: {bene} does not inflect, while the subject and the verb do'),
      T('Two: one for the singular and one for the plural'),
      T('Three: one per person of the subject'),
      T('Four: because {puellae} requires the oblique form of the adverb'),
    ],
    answer: 0,
    hint: T('Rule §1: the Latin adverb has no case, number or person.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which pair escapes the regular rules of adverb formation?'),
      options: [
        T('{bonus} → {bene} and {malus} → {male}, the two exceptions'),
        T('{doctus} → {doctē} and {pulcher} → {pulchrē}, which follow the {ē} rule'),
        T('{celer} → {celeriter}, which follows the third-declension rule'),
        T('{fortis} → {fortiter}, which follows the {iter} rule'),
      ],
      answer: 0,
      hint: T(
        'Rule §2: {ē} for the first and second declension, {iter} for the third; {bene} and {male} stay out.',
      ),
    },
    {
      kind: 'fill',
      prompt: T('Complete the superlative of {fortiter}: "most bravely" is ___'),
      answer: 'fortissimē',
      hint: T('The superlative of an adverb in {iter} takes {issimē}.'),
    },
    {
      kind: 'fill',
      prompt: T('In {facilius} and {facillimē}, what is added to reach the superlative? ___'),
      answer: 'il',
      hint: T('The Latin superlative has {illim}: {il} followed by {lim}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to the class it marks'),
      pairs: [
        { a: T('{hodie}'), b: T('time') },
        { a: T('{valde}'), b: T('quantity') },
        { a: T('{ita}'), b: T('manner') },
        { a: T('{mox}'), b: T('time: "soon"') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rule §3: the class of an adverb is the question it answers.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Latin adverb is invariable: no person, no number, no case, and so one form covers the whole subject.',
      ),
    },
    {
      n: '2',
      text: T(
        'First- and second-declension adjectives form adverbs in {ē} ({doctē}, {pulchrē}); third-declension ones in {iter} ({celeriter}, {fortiter}). {bene} and {male} are the two exceptions the Vulgate uses most.',
      ),
    },
    {
      n: '3',
      text: T(
        'Comparative and superlative of the adverb are regular and markerless: {melius}, {optime}, {facillimē}. Portuguese needs "more" and "most"; Latin does not.',
      ),
    },
    {
      n: '4',
      text: T(
        'An adverb answers a question of class: how ({ita}), how much ({nimis}), where ({ibi}), when ({mox}), how often ({bis}). And {nōn} stands immediately before what it negates.',
      ),
    },
    {
      n: '5',
      text: T(
        'When the adverb does not exist as a word, Latin uses an ablative: {sine intermissione orate} "pray without interruption", the same road as {sine mora} and {sine fine}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the Vulgate has more adverbs than Portuguese'),
      text: T(
        'Portuguese inherited the invariance of the adverb from Latin but multiplied the synonyms: "quickly", "in a hurry", "hastily" all cover {celeriter}. Latin economises and spends that economy on adverbs of negation and degree, which is where biblical text really needs emphasis: {nōn}, {quidem}, {nēquīquam}, {frūstrā}. Anyone hunting in a translation for the word that repeats is almost always hunting an adverb.',
      ),
    },
    {
      label: T('{bene} and {male}, the two commonest'),
      text: T(
        'They come from {bonus} and {malus}, but not by the rule: {benē} and {malē} are the normal forms in Plautus and Cicero, and {bene} and {male} survived because they are shorter and stronger. The grammar lesson is that a pair of adverbs exists without a rule. The reading lesson is that the pair {male ... bene} frames an opposition that runs through the whole Vulgate.',
      ),
    },
  ],
  examples: [
    { text: 'puella bene canit', gloss: T('the girl sings well (one adverb form only)') },
    { text: 'puellae bene canunt', gloss: T('the girls sing well (the same adverb form)') },
    { text: 'doctē', gloss: T('learnedly (from {doctus}, the {ē} rule)') },
    { text: 'celeriter', gloss: T('quickly (from {celer}, the {iter} rule)') },
    { text: 'fortius', gloss: T('more bravely (comparative, with no "more" written)') },
    { text: 'numquam', gloss: T('never (adverb with negation inside: {numquam} = {nōn} umquam)') },
    { text: 'facillimē', gloss: T('most easily (superlative with {illim})') },
    { text: 'satis bene', gloss: T('well enough (quantity + manner)') },
    { text: 'semper gaudete', gloss: T('rejoice always (1 Thess 5:16)') },
    { text: 'nōn timete', gloss: T('do not fear (negative imperative: {nōn} + {timete})') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Adjetivo e advérbio: duas regras e uma exceção'),
      head: [T('Adjetivo'), T('Advérbio'), T('Regra'), T('Glosa')],
      rows: [
        ['{doctus}', '{doctē}', '1.ª e 2.ª declinação → {ē}', 'sabiamente'],
        ['{pulcher}', '{pulchrē}', '1.ª e 2.ª declinação → {ē}', 'belamente'],
        ['{miser}', '{misē}', '1.ª e 2.ª declinação → {ē}', 'miseramente'],
        ['{celer}', '{celeriter}', '3.ª declinação → {iter}', 'depressa'],
        ['{fortis}', '{fortiter}', '3.ª declinação → {iter}', 'com força'],
        ['{fidēlis}', '{fidēliter}', '3.ª declinação → {iter}', 'com fidelidade'],
        ['{bonus}', '{bene}', 'irregular', 'bem'],
        ['{malus}', '{male}', 'irregular', 'mal'],
      ],
    },
    {
      caption: T('Tabela 2 — Comparativo e superlativo de advérbio'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo'), T('Português')],
      rows: [
        ['{bene}', '{melius}', '{optime}', 'bem / melhor / o melhor'],
        ['{male}', '{peius}', '{pessime}', 'mal / pior / o pior'],
        ['{fortiter}', '{fortius}', '{fortissimē}', 'com força / mais forte / o mais forte'],
        ['{facile}', '{facilius}', '{facillimē}', 'facilmente / mais fácil / o mais fácil'],
        ['{amplē}', '{amplius}', '{amplissimē}', 'amplamente / mais amplo / o mais amplo'],
        ['{graviter}', '{gravius}', '{gravissimē}', 'pesadamente / mais grave / o mais grave'],
      ],
    },
    {
      caption: T('Tabela 3 — Advérbios por classe, com a pergunta que os define'),
      head: [T('Classe'), T('Pergunta'), T('Formas da Vulgata')],
      rows: [
        [T('modo'), T('como?'), T('{ita}, {sīc}, {aliter}, {fere}')],
        [T('quantidade'), T('quanto?'), T('{satis}, {nimis}, {valde}, {parum}, {tantum}')],
        [T('lugar'), T('onde?'), T('{hic}, {ibi}, {istinc}, {illinc}')],
        [T('tempo'), T('quando?'), T('{hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper}')],
        [T('negação'), T('não?'), T('{nōn}, {haud}, {nē}')],
        [T('número'), T('quantas vezes?'), T('{semel}, {bis}, {ter}')],
      ],
    },
  ],
};
