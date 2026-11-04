import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('The noun'),
  subtitle: T('what gives things their name — and the two mirrors that French keeps'),
  section: T('Nouns'),
  body: C(`## A noun names; the rest of the sentence does the rest

In French the noun is the piece that gives identity to a referent, and it is the piece that agrees with the article, the adjective and sometimes the verb. {livre}, {maison}, {vérité}, {lumière} — each names something, and each combines with a fixed set of words.

That combination is **agreement**, and it is measured in two things: **gender** (masculine or feminine) and **number** (singular or plural). Nothing else. A French noun has no case: it does not inflect to show who does what to whom. {le livre} is the same {le livre} whether it is subject, object or complement — the article, the pronoun or the position in the sentence marks the function.

Compare with Portuguese, which still declines: {o livro, do livro, ao livro}. The French noun lost that information for a practical reason: without cases there are not two words for one thing, and the noun can grow without the language creaking.

## The two mirrors of the noun

What makes a learner’s life hard is not agreement, it is guessing gender before knowing the plural. A French noun can be:

- **masculine**: {le livre}, {le soleil}, {le travail}, {le problème}, {le roi}, {le chat}
- **feminine**: {la table}, {la lune}, {la ville}, {la question}, {la reine}, {la chatte}

A single noun can be **both**: {le livre} «the book» and {la livre} «the free thing» (a substantivised adjective). And there are nouns whose gender changes with the sense: {le tour} «the turn, the walk» and {la tour} «the tower» — same word, two genders, two meanings.

A pocket guide, without being exhaustive: nouns ending in *-age, -ment, -ement, -issement* are almost always masculine ({le courage}, {le mouvement}, {le savoir}); those ending in *-ette, -euse, -rice, -ie, -ude, -té* are almost always feminine ({la fillette}, {la vendeuse}, {la matrice}, {la sortie}, {la méd}, {la bonté}). And names of countries, cities and rivers are always feminine: {la France}, {l’Italie}, {la Seine}, {la Loire}. The famous exceptions are {le Canada}, {le Portugal}, {le Japon} — those ending in a weak [ə] sound.

## The plural: three paths and one general rule

The French plural is formed by **adding a mute {s}**. That is all, in the overwhelming majority of cases: {le livre → les livres}, {la maison → les maisons}, {le travail → les travaux}.

The final {s} is mute, as we saw in the first lesson. But in two situations it is **audible**, and that is where the two special rules come from.

**Sibilant rule**: when the noun ends in {s, x, z}, the plural {s} becomes [z], like the intervocalic {s} of lesson 1. {un prix} [pʁi] → {des prix} [pʁi], with a [z] sound. {le choix} [ʃwa] → {les choix} [ʃwaz], with [z]. {le nez} [ne] → {les nez} [nez], with [z]!

**Group rule**: when the noun ends in *-eau* or *-ou*, the plural {s} replaces the final *-eau*/*-ou*. {le journal} → {les journaux}, {le cadeau} → {les cadeaux}, and {un blocus} is a word with no plural at all.

And there is a handful of irregulars to learn one by one: {le travail → les travaux}, {le délice → les délices}, {le ceil} no. The most useful in daily life are {œil → yeux} «eyes», {ciel → cieux} «skies», {aïeul → aïeux} «grandparents».

## Applied reading

The **Louis Segond** text of {John 1:14} uses nouns of both genders in one sentence, and each picks the right article: {Et la parole est devenue chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}.

{la parole} — feminine, «the Word». {la chair} — feminine, «the flesh». {la gloire} — feminine, «the glory», repeated. {le Père} — masculine, «the Father», and note: the noun is masculine, but the **verb** is {est devenue}, third person singular, because in French a verb does not vary with gender, only with number. {le Fils} — masculine. {l’unique} — a substantivised adjective with an article.

In {John 1:1}, the cleanest contrast is the pair {le commencement} / {la Parole}: {Au commencement était la Parole}. That is {le} and {la} in the same stretch, and a student applying Portuguese gender gets one of the two wrong. Note also {la lumière} (f.) against {le jour} (m.) in {John 1:5}: {La lumière brille dans les ténèbres}.

From the same passage, {ténèbres} shows the plural applied to a noun that is already plural in Portuguese: {les ténèbres} «the darkness». And {les œuvres} «the works» (John 1:17) follows the group rule: {œuvre} → {œuvres}, with a mute {s}.

## The takeaway

The French noun agrees only in gender and number, and it has no case. Gender is guessed from the ending, from semantic type and from origin — and the plural is almost always a mute {s}, with [z] after {s, x, z} and an {s} that swallows the ending after *-eau* and *-ou*.`),
  vocab: [
    V('livre', 'livre', 'book (m.); mute final {s}'),
    V('table', 'table', 'table (f.); ends in mute {e} yet is feminine'),
    V('maison', 'maison', 'house (f.); singular with no {s}'),
    V('soleil', 'soleil', 'sun (m.); {oi} = [wa] and {ll} = [j]'),
    V('travail', 'travail', 'work (m.); plural {travaux} by vowel loss'),
    V('problème', 'problème', 'problem (m.); {è} = [ɛ]'),
    V('vérité', 'vérité', 'truth (f.); the *-ité* ending is feminine'),
    V('sortie', 'sortie', 'exit (f.); the *-ie* ending is feminine'),
    V('courage', 'courage', 'courage (m.); the *-age* ending is masculine'),
    V('movement', 'mouvement', 'movement (m.); the *-ment* ending is masculine'),
    V('prix', 'prix', 'price (m.); final {x} turns [z] in the plural'),
    V('choix', 'choix', 'choice (m.); {oi} = [wa] and [z] in the plural'),
    V('nez', 'nez', 'nose (m.); plural {nez} with [z] after final {e}'),
    V('journal', 'journal', 'newspaper (m.); *-al* gives {journaux}'),
    V('œil', 'œil', 'eye (m.); plural {yeux}, irregular'),
    V('œuvre', 'œuvre', 'work (f.); {œu} = [ø]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {le travail → les travaux}, what happened when the plural formed?'),
    options: [
      T('The stressed {ai} lost its sound, and mute {l} merged with the {s}'),
      T('The noun became feminine, as in {la travail}'),
      T('The plural {s} was doubled to {travauxs}'),
      T('The Latin ending *-ail* was restored just as it was'),
    ],
    answer: 0,
    hint: T('Rule §2: the {ai} of {travail} is a glide vowel and disappears before the {s}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural of {le prix}: les pri___ (with a [z] sound)'),
      answer: 'x',
      hint: T('Final {x} is mute in the singular, but the plural {s} turns the {x} into [z].'),
    },
    {
      kind: 'choose',
      prompt: T('Which noun is feminine by its ending?'),
      options: [T('{la liberté}'), T('{le savoir}'), T('{le development}'), T('{le mélange}')],
      answer: 0,
      hint: T(
        'Rule §1: *-age, -ment, -ement* are virtually always masculine; *-té* virtually always feminine.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match each noun to its gender'),
      pairs: [
        { a: T('{le soleil}'), b: T('masculine') },
        { a: T('{la lune}'), b: T('feminine') },
        { a: T('{le savoir}'), b: T('masculine (ends in *-oir*)') },
        { a: T('{la bonté}'), b: T('feminine (ends in *-té*)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete the double-gender pair: ___ tour = the tower; ___ tour = the turn'),
      answer: 'la',
      hint: T(
        'The tower is {la tour}; the turn is {le tour}. Same word, gender shifts with meaning.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The French noun agrees only in gender and number, and has no case: {le livre} is the same in any function.',
      ),
    },
    {
      n: '2',
      text: T(
        'The general plural adds a mute {s}: {le livre → les livres}, {la maison → les maisons}.',
      ),
    },
    {
      n: '3',
      text: T(
        'After {s, x, z} the plural {s} sounds [z]: {le nez} [ne] → {les nez} [nez], {le choix} [ʃwa] → {les choix} [ʃwaz].',
      ),
    },
    {
      n: '4',
      text: T(
        'In *-eau* and *-ou* the plural {s} replaces the ending: {le journal → les journaux}, {le cadeau → les cadeaux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'One noun can have two genders according to sense: {le tour} "the turn" and {la tour} "the tower", {le livre} "the book" and {la livre} "what is free".',
      ),
    },
  ],
  notes: [
    {
      label: T('How the caseless noun set French free'),
      text: T(
        'Latin had six cases; Old Portuguese had four and modern Portuguese three, but the noun still inflects. French went further: it abolished the case and made the article and adjective carry that information instead. The pay-off is a small one: {le livre rouge} does not change when the noun moves, and the noun is a single thing. French is more verbose, and easier to speak without planning.',
      ),
    },
    {
      label: T('The plural that reveals gender'),
      text: T(
        'Some nouns exist only in the plural, and that existence already settles the question: the plural is often the older form. The same holds for {ciel → cieux}: the plural is the older form. When in doubt, go and find the plural — it is the best gender teacher in existence.',
      ),
    },
  ],
  examples: [
    {
      text: 'la parole est devenue chair',
      gloss: T('the Word became flesh (Jn 1:14) — two feminine nouns'),
    },
    {
      text: 'comme celle du Père unique',
      gloss: T('as that of the only Father — {du} = «de + le» marks possession'),
    },
    {
      text: 'Au commencement était la Parole',
      gloss: T('in the beginning was the Word — {le} and {la} in one stretch'),
    },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('the light shines in the darkness (Jn 1:5) — {la} f. and {le} implicit in darkness'),
    },
    { text: 'les œuvres', gloss: T('the works (Jn 1:17) — {œu} = [ø] and mute {s}') },
    {
      text: 'le travail et les travaux',
      gloss: T('the work and the works — {ai} loses its sound in the plural'),
    },
    {
      text: 'l’œil et les yeux',
      gloss: T('the eye and the eyes — irregular, the plural is the older form'),
    },
    {
      text: 'le prix et les prix',
      gloss: T('the price and the prices — [pʁi] against [pʁi], with a muted [z]'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Gender clues by ending'),
      head: [T('Ending'), T('Gender'), T('Example'), T('Gloss')],
      rows: [
        ['-age', 'masculino', '{le courage}', 'coragem'],
        ['-ment', 'masculino', '{le mouvement}', 'movimento'],
        ['-issement', 'masculino', '{le savant}', 'erudito'],
        ['-ette', 'feminino', '{la cassette}', 'fita'],
        ['-euse', 'feminino', '{la vendeuse}', 'vendedora'],
        ['-rice', 'feminino', '{la matrice}', 'matriz'],
        ['-té', 'feminino', '{la bonté}', 'bondade'],
        ['país, cidade, rio', 'feminino', '{la Seine}', 'o rio Sena'],
      ],
    },
    {
      caption: T('Table 2 — The three plural rules'),
      head: [T('Rule'), T('Ends in'), T('Makes'), T('Example')],
      rows: [
        ['geral', 'qualquer outra coisa', '{s} mudo', '{le livre → les livres}'],
        ['sibilante', '{s, x, z}', '[z] audível', '{le choix → les choix}'],
        ['grupo', '*-eau, *-ou', '{s} absorve a terminação', '{le cadeau → les cadeaux}'],
        ['irregular', 'caso especial', 'troca de vogal', '{le travail → les travaux}'],
        ['irregular', '{œil}', 'forma própria', '{l’œil → les yeux}'],
      ],
    },
  ],
};
