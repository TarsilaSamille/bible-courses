import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('The adverb: how it is formed'),
  subtitle: T('lentamente, bene, sempre'),
  section: T('The adverb'),
  body: C(`## {-mente} glues itself to the feminine adjective

The rule fits in one line. The adverb of manner is made by gluing the suffix **-mente** to the adjective in the feminine singular: {lenta} + {-mente} = {lentamente}, {veloce} → {velocemente}, {costante} → {costantemente}. You do not need to know how to inflect anything; you need to know that the suffix already carries gender inside it.

When the adjective is a first-class one, it ends in {-o} or {-a} and the account is literal. {Dolce} → {dolcemente}, {forte} → {fortemente}, {felice} → {felicemente}, {breve} → {brevemente}, {facile} → {facilmente}.

## The vowel that drops, and the ones that do not

The delicate point comes with adjectives in {-e}, which in Italian have no gender: {facile}, {veloce}, {difficile}, {breve}, {debole}. In them the final {-e} is **deleted** before {-mente}. Hence {facilmente}, {velocemente}, {difficilmente}, {debolmente}, and not {facilmente} with two final {-e}.

Then there is the group that follows no rule at all, because it comes from an adjective nobody can see: {bene} from {buono}, {male} from {cattivo}, {meglio} and {peggio}. Four words to learn.

## The ones that come from no adjective at all

The third family is the largest and the one you simply memorise. There is no adjective behind {sempre}, or behind {mai}, or behind {già}: {oggi}, {ieri}, {domani}, {adesso}, {allora}, {quando}, {spesso}, {raramente}, {mai}, {sempre}, {già}, {ancora}, {quasi}, {giusto}, {appena}, {forse}. The list is long, and knowing it comes only from using it.

What separates the two families is inflection, and here it is simple: an adverb in {-mente} never inflects, not for gender, not for number. {Maria parla lentamente} and {i ragazzi parlano lentamente} use the same word.

## In the Bible

Psalm 1:3 compares the righteous to a tree: "Sarà come un albero piantato lungo i corsi d’acqua". The {come} is an adverb of comparison and {lungo} is an adverb of place; both are invariable and both come before the noun they modify. The Greek parallel, {ὡς}, is a single word that means both "like" and "how", and Italian had to ask for two adverbs to say the same thing.

## Reading criterion

When you meet an adverb ending in {-mente}, look for the adjective it came from and delete the adjective’s final {-e} before gluing the suffix. When you meet {bene} or {male}, do not look for an adjective: they stand alone, and anyone who puts {più} in front of them is on the wrong path.`),
  vocab: [
    V('lentamente', 'lentamente', 'slowly'),
    V('velocemente', 'velocemente', 'quickly'),
    V('facilmente', 'facilmente', 'easily'),
    V('brevemente', 'brevemente', 'briefly'),
    V('fortemente', 'fortemente', 'strongly'),
    V('felicemente', 'felicemente', 'happily'),
    V('dolcemente', 'dolcemente', 'sweetly'),
    V('costantemente', 'costantemente', 'constantly'),
    V('bene', 'bene', 'well'),
    V('male', 'male', 'badly'),
    V('meglio', 'meglio', 'better'),
    V('peggio', 'peggio', 'worse'),
    V('sempre', 'sempre', 'always'),
    V('mai', 'mai', 'never'),
    V('già', 'già', 'already'),
    V('ancora', 'ancora', 'still'),
    V('oggi', 'oggi', 'today'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Form the adverb from facile: ___'),
    answer: 'facilmente',
    hint: T('Delete the adjective’s -e before -mente.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which adverb comes from cattivo?'),
      options: [T('cattivamente'), T('male'), T('malmente'), T('peggiormente')],
      answer: 1,
      hint: T('This group follows no rule.'),
    },
    {
      kind: 'fill',
      prompt: T('Form the adverb from dolce: ___'),
      answer: 'dolcemente',
      hint: T('Adjective in -e: drop the -e.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Maria parla lentamente.'),
        T('Maria parla lenta.'),
        T('Maria parlano lentamente.'),
        T('Maria parla lentamentes.'),
      ],
      answer: 0,
      hint: T('An adverb in -mente does not inflect.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb of manner is made by gluing -mente to the adjective in the feminine singular.',
      ),
    },
    {
      n: '2',
      text: T('If the adjective ends in -e, delete the -e before -mente: facile → facilmente.'),
    },
    { n: '3', text: T('Bene, male, meglio and peggio follow no rule and have to be learned.') },
    {
      n: '4',
      text: T('An adverb in -mente does not inflect: not gender, not number, not person.'),
    },
    { n: '5', text: T('Most adverbs of time and quantity come from no adjective at all.') },
  ],
  notes: [
    {
      label: T('The two-e mistake'),
      text: T(
        'The commonest doubt is keeping the adjective’s {-e} and adding {-mente} whole, which produces {facilmente} with two final {-e}. Delete first, glue afterwards: {facile} becomes {facil}, and {facil} plus {-mente} gives {facilmente}.',
      ),
    },
    {
      label: T('Better, and not more well'),
      text: T(
        'The comparative of {bene} is {meglio}, which is why {Meglio è …} shows up so often in the gospels. Portuguese expects {più bene}, which in Italian sounds literary and is rarely written.',
      ),
    },
  ],
  examples: [
    { text: 'Parla lentamente.', gloss: T('He speaks slowly.') },
    { text: 'Legge facilmente.', gloss: T('He reads easily.') },
    { text: 'Dorme bene.', gloss: T('He sleeps well.') },
    { text: 'Ha dormito peggio.', gloss: T('He slept worse.') },
    { text: 'Oggi è già tardi.', gloss: T('Today it is already late.') },
    { text: 'Non parla mai.', gloss: T('He never speaks.') },
    { text: 'Sara come un albero.', gloss: T('He will be like a tree.') },
    { text: 'Camminano lentamente lungo la strada.', gloss: T('They walk slowly along the road.') },
  ],
  tables: [
    {
      caption: T('Adjective and adverb'),
      head: ['Aggettivo', 'Femminile', 'Avverbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['facile', '(invariabile)', 'facilmente'],
        ['veloce', '(invariabile)', 'velocemente'],
        ['breve', '(invariabile)', 'brevemente'],
        ['dolce', '(invariabile)', 'dolcemente'],
        ['forte', 'forte', 'fortemente'],
        ['felice', 'felice', 'felicemente'],
        ['costante', 'costante', 'costantemente'],
      ],
    },
    {
      caption: T('Irregolari e senza origine'),
      head: ['Avverbio', 'Glossa', 'Viene da'],
      rows: [
        ['bene', 'bene', 'buono'],
        ['male', 'male', 'cattivo'],
        ['meglio', 'meglio', 'bene'],
        ['peggio', 'peggio', 'bene'],
        ['sempre', 'siempre', '—'],
        ['mai', 'nunca', '—'],
        ['già', 'ya', '—'],
        ['ancora', 'todavía', '—'],
        ['oggi', 'hoy', '—'],
        ['domani', 'mañana', '—'],
        ['adesso', 'ahora', '—'],
        ['allora', 'entonces', '—'],
      ],
    },
  ],
};
