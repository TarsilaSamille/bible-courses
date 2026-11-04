import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Comparative and superlative'),
  subtitle: T('{plus}, {moins}, {aussi} and the irregulars {meilleur} and {pire}'),
  section: T('Adjectives and adverbs'),
  body: C(`## Three words are enough

The French comparative is one of the most economical constructions in the language: **plus** for superiority, **moins** for inferiority, **aussi** for equality. Each one comes with the adjective, and comparison with people requires {que}:

- {plus grand que moi} — bigger than me
- {moins clair que lui} — less clear than he
- {aussi belle qu'elle} — as beautiful as she

With people the {que} is obligatory. With things and qualities it can very often be dropped: {plus grand}, {plus intelligent}. With nouns, comparison changes clothes: instead of the adjective, you use {plus de}, {moins de}, {autant de} — {plus de livres} «more books», {moins de temps} «less time», {autant d'amis} «as many friends».

## The comparative of equality, two ways

{aussi … que} is the common form. But when the {que} opens the clause, everything inverts and {pour … que} appears: {aussi belle qu'elle pour les yeux} «as beautiful as she in the eyes». The sense is the same; only the position changes.

There is a third path, with {tel … que}, which expresses proportion: {Il est tel qu'on le voit}, or the very practical {un homme si grand qu'on ne peut le contourner}.

## The three irregulars that matter

The comparative and superlative of three adjectives escape the pattern:

| Adjective | Comparative | Superlative |
|---|---|---|
| {bon} | {meilleur} | {le meilleur} |
| {mauvais} | {pire} | {le pire} |
| {petit} | {moindre} | {le moindre} |

The word {pire} deserves care: it is only numeral and verb. As a numeral, {deux} keeps its silent *-x*; as a verb, {il pitié} is wrong — the correct form is {il a pitié}. That is phonetic contrast, not decoration.

As for {moindre}, it speaks of **degree or amount**, not physical size: {un moindre effort}, {à moindre mesure}. For height and dimension use {plus petit}: {un peu plus petit}. Confusing the two is the commonest mistake in this lesson.

The adverbs follow suit: {bien → mieux}, {mal → pire}, {beaucoup → plus}, {peu → moins}. So {il travaille mieux} is the comparative of {bien}.

## The relative superlative

The **relative superlative** compares inside a known group. It takes an article, and the {plus} agrees like an ordinary adjective — in both places:

- {le plus grand} — the largest
- {la plus belle} — the most beautiful
- {les plus beaux} — the most beautiful ones

Note the double agreement: in {la plus belle}, both the article {la} and the {plus} are feminine. Writing {la plus beau} is the classic error.

With {de}, the superlative points at a whole group: {le meilleur des élèves} «the best of the pupils», {la plus belle des villes} «the most beautiful of the cities».

## The absolute superlative

When there is no comparison, only degree: {très grand} «very large», {bien meilleur} «much better», {vraiment terrible} «really terrible». Here {très} intensifies the adjective and {bien} intensifies the adverb.

## Reading — Louis Segond

{Il est plus riche et plus puissant que tous les princes de la terre} (Gen. 13:2) — the same {plus} governing noun and adjective in a single construction. {Vous êtes le sel de la terre; mais si le sel devient fade, à quoi sert-il?} (Matt. 5:13) uses the substantivised superlative {le sel} and the modal comparison {à quoi sert-il}. In the French of Luke 14:30, {Le plus grand parmi vous devienne le plus petit} sets the two forms side by side, which makes this lesson visible. {Le Seigneur est ma force et mon salut} (Ps. 42:2) uses {ma}, a possessive construction handled in its own chapter.

## What to take away

{plus} compares with what is greater, {moins} with what is lesser, {aussi} with what is equal. The relative superlative requires an article and double agreement; the absolute one compares with nobody and therefore needs no article.`),
  vocab: [
    V('plus grand', 'grand', 'bigger; regular comparative'),
    V('moins clair', 'clair', 'less clear; comparative with moins'),
    V('aussi belle que', 'beau', 'as beautiful as; equality'),
    V('meilleur', 'bon', 'better; irregular comparative of {bon}'),
    V('le pire', 'mauvais', 'the worst; irregular {pire}'),
    V('le moindre', 'petit', 'the least; degree, not size'),
    V('mieux', 'bien', 'better (adv.); of {bien}'),
    V('le plus petit', 'petit', 'the smallest in size; for dimensions'),
    V('plus de livres', 'livre', 'more books; noun comparison'),
    V('autant de', 'autant', 'as much, as many; with que'),
    V('très grand', 'grand', 'very large; absolute superlative'),
    V('le meilleur des élèves', 'élève', 'the best of the pupils; de + group'),
    V('tel que', 'tel', 'such that; comparison of proportion'),
    V('si grand qu', 'grand', 'so large that; si … que'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say «as beautiful as she» in French?'),
    options: [
      T("{aussi belle qu'elle}"),
      T("{plus belle qu'elle}"),
      T("{si belle qu'elle}"),
      T("{aussi plus belle qu'elle}"),
    ],
    answer: 0,
    hint: T('Equality takes {aussi}; {plus} is superiority and {si} is intensity.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Feminine singular superlative of {beau}: la ___ belle (the other one)'),
      answer: 'plus',
      hint: T('The relative superlative doubles the article, and the {plus} agrees too.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct and the most natural?'),
      options: [
        T('{Un moindre effort} — an effort of less degree'),
        T('{Un moindre homme} — a man of less height'),
        T('{Un plus petit homme} — the shorter man'),
        T('{Le moins homme du monde} — correct relative superlative'),
      ],
      answer: 2,
      hint: T('Rule §4: {moindre} measures degree; {plus petit} measures size.'),
    },
    {
      kind: 'match',
      prompt: T('Match each comparative to its meaning'),
      pairs: [
        { a: T('plus grand que'), b: T('superiority') },
        { a: T('moins clair que'), b: T('inferiority') },
        { a: T('aussi belle que'), b: T('equality') },
        { a: T('autant de'), b: T('comparison of quantity') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In «{la plus belle des villes}», how many elements perform the comparison?'),
      options: [T('None'), T('One'), T('Two'), T('Three')],
      answer: 1,
      hint: T(
        'The superlative is one: «the most beautiful». What changes is the reference group, {des villes}.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The regular comparative uses plus or moins + adjective (or adverb) and ends in que: {plus grand que moi}, {moins vite que lui}. With people que is obligatory; with things it may often be missing.',
      ),
    },
    {
      n: '2',
      text: T(
        "Equality is built with aussi … que: {aussi belle qu'elle} «as beautiful as she». With an opening que it becomes pour … que: {aussi belle qu'elle pour les yeux}. For proportion use si … que or tel … que.",
      ),
    },
    {
      n: '3',
      text: T(
        'Nouns are compared with de, never with the adjective: {plus de livres} «more books», {moins de temps} «less time», {autant de livres} «as many books».',
      ),
    },
    {
      n: '4',
      text: T(
        'The irregulars are meilleur (of bon), pire (of mauvais) and moindre (of petit). Moindre measures degree or amount ({un moindre effort}); for size and height use plus petit. In adverbs: mieux, pire, moins.',
      ),
    },
    {
      n: '5',
      text: T(
        'The relative superlative requires an article and double agreement: {le plus grand}, {la plus belle}, {les plus beaux}. With de it points at the group ({le meilleur des élèves}). The absolute one needs no article: {très grand}, {bien meilleur}, {vraiment terrible}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The double-agreement trap'),
      text: T(
        'In le plus, la plus and les plus, the plus behaves like an ordinary adjective and therefore agrees: {la plus belle}, {les plus beaux}. {la plus beau} and {les plus belle} are the errors of anyone treating the superlative as a single fixed formula.',
      ),
    },
    {
      label: T('Why {pire} is different'),
      text: T(
        '{pire} has three lives: it works as a noun ({le pire} «the worst»), as a numeral ({deux} «two») and as a verb ({il a pitié} «he has pity»). In other languages the cognate {pietà} sits right beside it; in French the word is short and alone, and it has to be stored as a noun and a verb, never as a catch-all.',
      ),
    },
  ],
  examples: [
    { text: 'plus grand que moi', gloss: T('bigger than me — superiority') },
    { text: 'moins clair que lui', gloss: T('less clear than he — inferiority') },
    { text: "aussi belle qu'elle", gloss: T('as beautiful as she — equality') },
    {
      text: "aussi belle qu'elle pour les yeux",
      gloss: T('as beautiful as she in the eyes — pour … que'),
    },
    { text: 'plus de livres', gloss: T('more books — de instead of the adjective') },
    { text: 'le plus grand', gloss: T('the largest — relative superlative') },
    { text: 'la plus belle', gloss: T('the most beautiful — double agreement') },
    { text: 'les plus beaux', gloss: T('the most beautiful — agreed plural') },
    { text: 'le meilleur des élèves', gloss: T('the best of the pupils — de marks the group') },
    { text: 'il travaille mieux', gloss: T('he works better — mieux, of bien') },
  ],
  tables: [
    {
      caption: T('Table 1 — Comparatives and superlatives'),
      head: [
        T('Type'),
        T('Positive'),
        T('Comparative'),
        T('Relative superlative'),
        T('Absolute superlative'),
      ],
      rows: [
        ['superioridade', '{grand}', '{plus grand}', '{le plus grand}', '{très grand}'],
        ['inferioridade', '{clair}', '{moins clair}', '{le moins clair}', '{très clair}'],
        ['igualdade', '{beau}', '{aussi beau que}', '{le plus beau}', '{très beau}'],
        ['irregular (bom)', '{bon}', '{meilleur}', '{le meilleur}', '{bien meilleur}'],
        ['irregular (mau)', '{mauvais}', '{pire}', '{le pire}', '{vraiment mauvais}'],
        ['irregular (pequeno)', '{petit}', '{moindre}', '{le moindre}', '{vraiment petit}'],
        ['adverbial', '{bien}', '{mieux}', '{le mieux}', '{très bien}'],
        ['quantidade', '{beaucoup}', '{plus}', '{le plus}', '{beaucoup}'],
      ],
    },
    {
      caption: T('Table 2 — Which construction to use'),
      head: [T('Comparison'), T('Structure'), T('Example'), T('Gloss')],
      rows: [
        [
          'com pessoas',
          '{plus / moins + adj + que + pessoa}',
          '{plus grand que moi}',
          'maior que eu',
        ],
        ['com coisas', '{plus / moins + adj}', '{plus grand}', 'maior'],
        ['igualdade', '{aussi + adj + que}', "{aussi belle qu'elle}", 'tão bonita quanto ela'],
        ['igualdade (invertida)', '{pour … que}', '{pour les yeux}', 'aos olhos'],
        ['proporção', '{si + adj + que}', "{si grand qu'il tient}", 'tão grande que coube'],
        [
          'substantivos',
          '{plus / moins / autant + de + subst.}',
          '{plus de livres}',
          'mais livros',
        ],
        [
          'grupo inteiro',
          '{le meilleur + des + subst.}',
          '{le meilleur des élèves}',
          'o melhor dos alunos',
        ],
      ],
    },
  ],
};
