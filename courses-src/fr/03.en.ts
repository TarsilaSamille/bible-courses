import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Definite articles'),
  subtitle: T(
    '{le, la, les} — the article that identifies, and the ten contractions that do the rest',
  ),
  section: T('Articles'),
  body: C(`## The definite article is a promise that you already know what is meant

Portuguese says {o livro} when it means *one among many*. French says {le livre} and means **that** book, the only one that matters in the conversation. That is why it appears so much: nearly every French sentence has an article, and it is through the article that the listener knows what you are talking about.

There are three forms, and they do not vary by anything else — only by the **gender and number of the noun**:

| | Singular | Plural |
|---|---|---|
| Masculine | {le} {livre} | {les} {livres} |
| Feminine | {la} {lettre} | {les} {lettres} |
| Before a vowel | {l’} {homme} | {les} {amis} |

Note one detail: before a vowel or a mute {h}, masculine becomes {l’} and feminine becomes {l’} as well. {l’homme}, {l’école}, {l’ami}, {l’astre}. There is no {la homme} and no {le ami}.

The plural {les} is identical in both genders, as in Portuguese. And {les} almost never means only «the ones at my house»: outside a context that has already fixed the set, {les} is a general plural, a totality. {J’aime les espagnols} «I like Spaniards» is a claim about all of them, not about some.

## What the article does to a person

Here French parts company with you. {Pierre est un étudiant} «Pierre is a student» — {un} is generic and covers the category. But {le Père est Dieu} «the Father is God», {la longueur est fixe} «length is fixed»: before a proper name or an abstract noun, the definite article says that **that one** is the subject, not just any specimen. This is what grammars call the definite article with a Unique value.

The result is that the same noun changes meaning with the article. {le château} «the castle» (a specific one), {un château} «a castle» (any castle, one you might build), {du château} «castle» (the material — and there {d’} + {le} = {du}, a rule that comes next).

## Elision and contraction: two different operations

Two different rules produce the same-looking effect, and confusing them is the commonest mistake learners make.

**Elision** happens when an article *ending in a vowel* meets a word starting with a vowel: one of the two loses its vowel. It applies to defined articles {le, la} and indefinite ones {un, une}, never to {les}, {de}, {du} or {des}.

**Contraction** happens when two **non-article** elements fuse into one word: {de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}, {de + la = de la}, {à + la = à la}. No vowel disappears; the two words simply join.

The full chart:

| Preposition | + le | + la | + les |
|---|---|---|---|
| {de} | {du} | {de la} | {des} |
| {à} | {au} | {à la} | {aux} |
| {en} | — | — | — |

Note that {de le} never appears on its own: it either becomes {du}, or the noun is plural and becomes {des}, or the noun starts with a vowel and the {de} stays alone: {de l’homme}. There is no {de le} and no {de les}.

## The partitive plural, which bites earlier

One use of {des} deserves attention right away: {des} is very common with nouns that take no article in Portuguese, and it means «some», «a bit of». {du pain} «bread», {des fruits} «fruit», {du vin} «wine», {de l’eau} «water», {du riz} «rice». Portuguese would say {o pão}, {os frutas} — the shift is constant, and the name «partitive» comes precisely from it. The next lesson is devoted to it.

## Applied reading

Read {John 1:1} in **Louis Segond** again with the articles isolated: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Four contractions of {de + le}: {avec Dieu} (Dieu is masculine), {parole} with {la} twice, {était} twice. Each {la Parole} points to **the same** Word, and that identity — exactly what a definite article does — is what the whole passage defends.

In {John 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. {La lumière} with {l’} before a vowel; {les ténèbres} twice, the same noun; {l’ont} is {ne … l’ + ont} with the pronoun {la} elided. In {John 1:14}: {Et la parole est devenu chair} — the parallel between {la parole} and {la chair} shows the same construction with {la} both times, once more than the {le}.

On the other side, {John 1:6}: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}. Here {un homme} is indefinite, {de Dieu} marks origin, and {le nom} is defined again. The alternation of {un} and {le} in one sentence is the article’s most important job: {un} introduces, {le} identifies.

## The takeaway

The definite article is what gives identity. It agrees in gender and number, becomes {l’} before a vowel, and disappears inside {du}, {aux}, {des} — but those fusions are with {de} and {à}, never with the article alone. Always distinguish **elision** (a vowel is lost) from **contraction** (two words merge).`),
  vocab: [
    V('le', 'le', 'the (definite masculine singular); becomes {l’} before a vowel'),
    V('la', 'la', 'the (definite feminine singular); becomes {l’} before a vowel'),
    V('les', 'les', 'the (plural, both genders); never elided'),
    V('l’homme', 'homme', 'the man; mute {h} but the article is still visible'),
    V('l’école', 'école', 'the school; elision {la} + {école}'),
    V('le livre', 'livre', 'the book; definite = that book, already known'),
    V('la lumière', 'lumière', 'the light; open {è} and mute final {i}'),
    V('les ténèbres', 'ténèbres', 'the darkness; open {é} and mute final {s}'),
    V('le Père', 'père', 'the Father; definite with an abstract name, unique value'),
    V('du château', 'château', 'castle (the material); {de + le} contracted'),
    V('aux Vineyard', 'vigne', 'the vineyards; {à + les} contracted into {aux}'),
    V('de l’homme', 'homme', 'of the man; {de} stays alone because the noun starts with a vowel'),
    V('de la vie', 'vie', 'of the life; {de + la} does not contract'),
    V('la parole', 'parole', 'the word; mute final {e} and open {o} [ɔ]'),
    V('la chair', 'chair', 'the flesh; {ch} = [ʃ] and final uvular {r}'),
    V('l’', 'le', 'elided form of the definite article before a vowel or mute {h}'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {la Parole était avec Dieu}, what does the {la} indicate?'),
    options: [
      T('That it is the same Word as before, not just any word'),
      T('That the Word is a common noun, like {lettre}'),
      T('That the sentence is a rhetorical question about words'),
      T('That the article was chosen only for phonetic symmetry'),
    ],
    answer: 0,
    hint: T('Rule §1: a definite article means identity, not category.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Definite masculine article before {école}: l___ école'),
      hint: T('The word already begins with {l’}. Nothing goes in the blank.'),
      answer: '’',
    },
    {
      kind: 'choose',
      prompt: T('Which sentence contains a contraction rather than an elision?'),
      options: [
        T('{Il va au temple}'),
        T('{Il va à l’école}'),
        T('{Il va à la maison}'),
        T('{Il va de l’école}'),
      ],
      answer: 0,
      hint: T(
        'Rule §3: contraction merges {à} with {les}; elision only involves {le}, {la}, {un}, {une}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its correct context'),
      pairs: [
        { a: T('{l’}'), b: T('elision of {le} or {la} before a vowel') },
        { a: T('{du}'), b: T('contraction of {de} with {le}') },
        { a: T('{aux}'), b: T('contraction of {à} with {les}') },
        { a: T('{de la}'), b: T('no contraction possible between {de} and {la}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('How often does {la Parole} appear in the first verse of John 1?'),
      answer: 'trois',
      hint: T('Once at the end of the clause, and twice in the next clause.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The definite article marks identity, not category: {le Père est Dieu} is «the (one) Father is God», not «a father».',
      ),
    },
    {
      n: '2',
      text: T(
        'Before a vowel or mute {h}, {le} and {la} become {l’}; the plural {les} is never elided.',
      ),
    },
    {
      n: '3',
      text: T(
        'Elision loses a vowel; contraction is pure joining. {l’ami} = elision, {du} and {aux} = contraction, {de la} = neither.',
      ),
    },
    {
      n: '4',
      text: T(
        '{de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}; {de + la} and {à + la} stay separate.',
      ),
    },
    {
      n: '5',
      text: T(
        '{de le} and {de les} never appear on their own: they become {du}/{des}, or the noun starts with a vowel and you get {de l…}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The article gives you information for free in Portuguese'),
      text: T(
        'In Portuguese, telling {o} from {um} does shift the sense, but context does a lot of the work. French is stricter: before a proper name {un} is wrong; before an abstract and unique noun {le} is required. Word-for-word translation gives you {un Dieu} where French wants {Dieu}, or drops {la} where French wants it.',
      ),
    },
    {
      label: T('{les} is total, not enumerative'),
      text: T(
        'In Portuguese {os fulfils} reads distributively; in French {les} before a proper noun reads as a claim about **all** the members of that group. {J’aime les pommes} is an opinion about fruit as a category. For the Portuguese distributive reading you need {les … un peu}, {le … un}, or repetition of the noun.',
      ),
    },
  ],
  examples: [
    { text: 'la Parole', gloss: T('the Word — definite = that same Word') },
    { text: 'l’Éternel', gloss: T('the Lord (Ps 23:1) — {l’} + vowel-initial {Éternel}') },
    { text: 'le Père', gloss: T('the Father — unique value, as in {le Père est Dieu}') },
    {
      text: 'les ténèbres ne l’ont point reçue',
      gloss: T('the darkness did not receive it — {l’} = elided pronoun {la}'),
    },
    {
      text: 'un homme envoyé de Dieu',
      gloss: T('a man sent by God — {un} indefinite, {de} uncontracted'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('whose name was John — {le} back to definite after the indefinite'),
    },
    { text: 'au commencement', gloss: T('in the beginning — {à + le} contracted into {au}') },
    { text: 'avec Dieu', gloss: T('with God — a masculine proper name takes no article') },
    {
      text: 'la vie est la lumière',
      gloss: T('the life is the light (Jn 8:12) — {la} + mute {e} twice'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The definite article by gender and number'),
      head: [T('Gender'), T('Singular'), T('Plural'), T('Before a vowel')],
      rows: [
        ['Masculino', 'le', 'les', "l'ami"],
        ['Feminino', 'la', 'les', "l'école"],
        ['Exemplo', '{le livre}', '{les livres}', '{l’homme}'],
      ],
    },
    {
      caption: T('Table 2 — Elision and contraction side by side'),
      head: [T('Operation'), T('Input'), T('Output'), T('Vowel lost')],
      rows: [
        ['Elisão', '{le} + {ami}', "{l'ami}", 'sim'],
        ['Elisão', '{la} + {école}', "{l'école}", 'sim'],
        ['Contratação', '{de} + {le}', '{du}', 'não'],
        ['Contratação', '{à} + {les}', '{aux}', 'não'],
        ['Sem fusão', '{de} + {la}', '{de la}', 'não'],
        ['Sem fusão', '{de} + {l’homme}', '{de l’homme}', 'não'],
      ],
    },
  ],
};
