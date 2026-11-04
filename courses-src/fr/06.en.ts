import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('The gender of nouns'),
  subtitle: T('why {le livre} is masculine and {la table} is feminine — the five clues'),
  section: T('Nouns'),
  body: C(`## Gender is arbitrary; the clues are not

The gender of French nouns has no reason. It does not come from the meaning, from the Latin etymology, or from the shape. {le livre} is masculine because Latin *liber* was masculine; {la table} is feminine because Latin *tabula* was feminine. You cannot deduce it, you only have to know it.

The good news is that there are **five clues** which, between them, get the great majority of cases right.

## The five clues

**1 · Animated and sexed things are masculine.** {le père}, {le roi}, {le chat}, {l’homme}, {le garçon}, {le frère}, {le cheval}, {l’oiseau}. The natural gender of the referent was simply carried over to the noun. {La personne} is the main exception: {personne} is feminine, but {le personne} is a masculine insult meaning «an outstanding person».

**2 · Long and sharp objects are masculine.** {leGate}, {le couteau}, {le crayon}, {le marteau}, {le tableau}, {le livre}, {le papier}, {le pain}, {le fromage}, {le vin}. Things you grip firmly tend to be masculine.

**3 · Plants, fruit and living things are feminine.** {la fleur}, {la rose}, {la pomme}, {la terre}, {la forêt}, {la nature}, {la vie}, {la paix}, {la mort}, {la chance}, {la liberté}. Aesthetically, whatever grows or whatever is alive is feminine.

**4 · Strong endings.** This is the most reliable guide, and it covers tens of thousands of nouns:

| Ending | Gender | Examples |
|---|---|---|
| *-age, -ment, -ement, -issement* | masculine | {le courage}, {le}… |
| *-eau* | masculine | {le tableau}, {le}… |
| *-ou* | masculine | {le}… |
| *-teur, -trice* | both | {le}… / {la}… |
| *-ette, -euse, -rice, -ie, -ude* | feminine | {la}… |
| *-tion, -sion, -té* | feminine | {la}… |
| *-eur* (without final {r}) | feminine | {la}… |

**5 · The dictionary.** When the first four clues fail, the dictionary is the judge. Every French dictionary gives the gender **before** the definition: {le} m., {la} f., {m.} neuter. And learners have no choice: French is spoken by people who keep a dictionary at hand.

## The exceptions you will meet

The clues fail more often than you would think, and it is better to know which ones than to find out on the street. The district {le}… is masculine; the city {la}… is feminine. And the most annoying of all: {le}….

The *-eur* endings are especially treacherous: {l’erreur} «error» is feminine, {le moteur} «engine» is masculine, {le hauteur} «height» is feminine, and {la couleur} «colour» is feminine. So {la couleur} is right and {le couleur} is wrong.

And there are nouns whose ending lies: {le}… does not exist. But {le}…: {le}….

An honest list of the commonest betrayals: {le genre} (m., «gender») against {la genre} (f., «kind»); {le livre} (m., «book») against {la livre} (f., «free thing»); {le tour} (m., «turn») against {la tour} (f., «tower»); {le}… no; but {le}…: {le}….

## Applied reading

The **Louis Segond** text of {John 1:1} puts two genders in one line, and that line is the best gender test there is: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}.

{le commencement} — masculine, ending in *-ment*, like all of {le changement}, {le mouvement}, {le sentiment}. {la Parole} — feminine, and the noun is capitalised because it is a title: it is the Word, not just any word. {Dieu} — masculine, capital {d} and no article, like all proper names, which in French are almost always masculine or, if feminine, take {l’} ({l’Âme}, {l’Église}).

In {John 1:5}, the pair {la lumière} / {les ténèbres} is feminine in both cases: {lumière} and {ténèbres} are both abstract nouns. But right after comes {la vie} (f.) and {le monde} (m.). In {John 1:14}, {la parole} (f.), {la chair} (f.), {la gloire} (f.), {le Père} (m.), {le Fils} (m.), {l’unique} (m. or f., here a substantivised adjective in the feminine).

The pattern that emerges is the most useful of all: **abstract nouns in {-tion, -sion, -té} are feminine, and names of God and of the self are masculine or take {l’}**. In a French text that gives you a correct prediction in almost every case.

## The takeaway

Gender is arbitrary but not random: five clues — animated, hard, organic, ending, dictionary — reach almost everything. And when everything fails, accept it: you will look up {la couleur} in a dictionary for the rest of your life, and that is normal.`),
  vocab: [
    V('le livre', 'livre', 'the book (m.); from the masculine Latin *liber*'),
    V('la table', 'table', 'the table (f.); from the feminine Latin *tabula*'),
    V('le couteau', 'couteau', 'the knife (m.); a sharp object, and *-eau* is masculine'),
    V('le tableau', 'tableau', 'the painting, the blackboard (m.); *-eau* is always masculine'),
    V('la pomme', 'pomme', 'the apple (f.); a fruit, so feminine class'),
    V('la forêt', 'forêt', 'the forest (f.); a plant, so feminine class'),
    V('le courage', 'courage', 'courage (m.); ends in *-age*'),
    V('le sentiment', 'sentiment', 'the feeling (m.); ends in *-ment*'),
    V('la liberté', 'liberté', 'freedom (f.); ends in *-té*'),
    V('l’erreur', 'erreur', 'the error (f.); *-eur* without final {r} is feminine'),
    V('le moteur', 'moteur', 'the engine (m.); *-eur* with final {r} can be masculine'),
    V('la hauteur', 'hauteur', 'the height (f.); *-eur*, against the rule'),
    V('la couleur', 'couleur', 'the colour (f.); *-eur* from the colour root, {ll} = [j]'),
    V('la vendeuse', 'vendeuse', 'the saleswoman (f.); ends in *-euse*'),
    V('la chair', 'chair', 'the flesh (f.); {ch} = [ʃ], {ai} = [ɛ]'),
    V('l’Église', 'église', 'the Church (f.); {É} = [e] and {ll} = [j]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why is {la table} feminine, even though it is a wooden object?'),
    options: [
      T('Because the gender comes from Latin {tabula}, feminine, not from the present meaning'),
      T('Because the word ends in mute {e}, and every final {e} is feminine'),
      T('Because tables, chairs and furniture are always feminine in French'),
      T('Because the noun has five syllables and the syllable count decides gender'),
    ],
    answer: 0,
    hint: T('Rule §1: gender is a historical inheritance, not a consequence of meaning.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the right article: ___ commencement (the beginning)'),
      answer: 'le',
      hint: T('Rule §4: *-ment* is virtually always masculine.'),
    },
    {
      kind: 'choose',
      prompt: T('Which noun goes against the *-eur* ending clue?'),
      options: [
        T('{le moteur} — masculine, although {l’erreur} is feminine'),
        T('{l’erreur} — feminine, and {-eur} decides'),
        T('{la couleur} — feminine, and {-eur} decides'),
        T('{la hauteur} — feminine, and {-eur} decides'),
      ],
      answer: 0,
      hint: T('Rule §4: *-eur* without final {r} is feminine; with final {r}, the word decides.'),
    },
    {
      kind: 'match',
      prompt: T('Match each noun to its French gender'),
      pairs: [
        { a: T('{le couteau}'), b: T('masculine from final *-eau*') },
        { a: T('{la pomme}'), b: T('feminine as a fruit') },
        { a: T('{le roi}'), b: T('masculine as an animated, sexed being') },
        { a: T('{la liberté}'), b: T('feminine from {-té}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('In {la Parole était avec Dieu}, how many feminine nouns appear?'),
      answer: 'um',
      hint: T('Count only the nouns: {Parole} is f., {Dieu} is m. The verb does not count.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'French gender is inherited from Latin, not deduced from sense: {le livre} comes from *liber*, {la table} from *tabula*.',
      ),
    },
    {
      n: '2',
      text: T(
        'Animated, sexed and hard things go masculine: {le père}, {le chat}, {le couteau}, {le livre}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Plants, fruit and life go feminine: {la pomme}, {la forêt}, {la vie}, {la mort}, {la liberté}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Endings are the strongest guide: *-age, -ment, -eau, -ou* masc.; *-ette, -euse, -rice, -té, -tion* fem.',
      ),
    },
    {
      n: '5',
      text: T(
        'When in doubt the dictionary decides: every entry gives the gender before the definition, and the learner looks it up for life.',
      ),
    },
  ],
  notes: [
    {
      label: T('The word beau has two genders and two senses'),
      text: T(
        'Cognates are the worst traps: {beau} is masculine, but {bel} (the form before {e}) stays masculine, and the feminine is {belle}, without {e}. The same holds for {nouveau → nouvelle}, {vieux → vieille}, {fou → folle}, {blanc → blanche}, {long → longue}, {mort → morte}. None of them changed gender for any reason: the feminine is a new suffix, and the {x} turns [k] or [s] as in {riche}, {fille}. You have to learn each pair.',
      ),
    },
    {
      label: T('Why this is not a serious problem'),
      text: T(
        'Nobody in France gets gender wrong all the time. They simply **do not think** about it: gender is part of the word, like the vowel. A native speaker does not «know» that {la table} is feminine; they know *table* and the feminine comes along, just as Portuguese *table* carries its {a} along. Learning {la table} as one unit, rather than {table} plus «feminine», is what fixes it.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('in the beginning was the Word (Jn 1:1) — {le} and {la} side by side'),
    },
    {
      text: 'la Parole était avec Dieu',
      gloss: T('the Word was with God — {Dieu} m. with no article'),
    },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('the light shines in the darkness — two feminine abstracts'),
    },
    { text: 'la vie et la mort', gloss: T('life and death — both feminine for being alive') },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('his glory as the Father’s only glory — {le Père} m. against {la gloire} f.'),
    },
    { text: 'l’Église', gloss: T('the Church — feminine with obligatory {l’}') },
    {
      text: 'le château et la tour',
      gloss: T('the castle and the tower — *-eau* masc., *-our* fem.'),
    },
    { text: 'la liberté, la vérité', gloss: T('freedom, truth — {-té} and {-ité} feminine') },
  ],
  tables: [
    {
      caption: T('Table 1 — The five gender clues, summarised'),
      head: [T('Clue'), T('Category'), T('Typical gender'), T('Example')],
      rows: [
        ['1', 'animados e sexuados', 'masculino', '{le père}'],
        ['2', 'objetos duros e cortantes', 'masculino', '{le couteau}'],
        ['3', 'plantas e seres vivos', 'feminino', '{la pomme}'],
        ['4', 'terminação *-age, -ment*', 'masculino', '{le courage}'],
        ['4', 'terminação *-té, -tion*', 'feminino', '{la liberté}'],
        ['5', 'dicionário', 'qualquer', '{le}… / {la}…'],
      ],
    },
    {
      caption: T('Table 2 — Double-gender pairs in the same text'),
      head: [T('Masculine'), T('Feminine'), T('Masculine gloss'), T('Feminine gloss')],
      rows: [
        ['{le commencement}', '{la}…', 'o começo', 'a origem'],
        ['{le livre}', '{la livre}', 'o livro', 'a coisa livre'],
        ['{le tour}', '{la tour}', 'o giro', 'a torre'],
        ['{le genre}', '{la}…', 'o gênero', 'a espécie'],
        ['{le}…', '{la couleur}', 'a cor (raro)', 'a cor (comum)'],
      ],
    },
  ],
};
