import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Articles and nouns'),
  subtitle: T('o, a, os, as — gender, number and reference'),
  section: T('The article and number'),
  body: C(`## The article translates definiteness, not grammar

Portuguese has two articles: the definite ({o, a, os, as}) introduces an identifiable reference — the reader already knows what is meant; the indefinite ({um, uma, uns, umas}) presents something as one example of a class. {Vi um homem} brings someone new; {vi o homem} brings someone already known.

In biblical Portuguese this gets trickier, because Greek does not always have an article where Portuguese has one. In John 1:1, {no princípio} renders ἐν ἀρχῇ with its article; but in the same verse, {Deus} renders θεός without an article in the Greek, and whether to keep the article is the translator's decision. So the rule is not "follow the Portuguese": it is **render the Greek sense**.

The Greek case that matters most is in the next verse: {o Verbo} (ὁ λόγος) does have the article, and that article marks a determined subject rather than "a word". Dropping it and writing {a palavra} changes the theological sense of the verse.

## Gender: the ending is the rule, with exceptions

In {-o}, {-e} and many derivatives the noun is usually masculine: {livro}, {lugar}, {caminho}, {sistema}. In {-a}, {-ção}, {-dade}, {-ura} it is usually feminine: {casa}, {canção}, {liberdade}, {escritura}. The rule is strong but not law: there is {o mapa} (m), {a mão} (f), {o dia} (m), {a dieta} (f), {o problema} (m), {a mano} (f).

And gender is not decoration in Portuguese: it marks the sex of persons ({o homem}, {a mulher}), so the translator needs to know what is being translated. {Mestre} can be a man or a woman, and context does not always settle it.

## Plural: three endings for one -ão

The regular plural swaps the ending: {livro → livros}, {casa → casas}. But {-ão} is the special case, and it does not follow a single rule: {coração → corações}, {pão → pães}, {mão → mãos}, {irmão → irmãos}, {cidadão → cidadãos}. Five different endings for the same {-ão}, and pronunciation changes with them ({pães} and {mãos} sound different, and so do {corações} and {irmãos}).

Where there is no rule there is the **irregular plural**, built without changing the form: {o rei → os reis}, {a água → as águas}, {o pai → os pais}. It is the oldest plural and the one most present in the Bible, which is why several archaic forms still sound natural.

## Reading criterion

With any noun, ask: is the article there in the Greek? Does gender show in the ending? And is the plural regular, {-ão} shifted, or **irregular**? The third answer is the one that usually decides, because Greek does not distinguish {livros} from {livros} — but it does distinguish τὰ βιβλία from τὸ βιβλίον by number and case, and that is where the translation needs an {-s} Greek does not have.`),
  vocab: [
    V('o', 'o', 'masculine definite article'),
    V('a', 'o', 'feminine definite article'),
    V('um', 'um', 'masculine indefinite article'),
    V('palavra', 'palavra', 'word'),
    V('verbo', 'verbo', 'word; verb'),
    V('luz', 'luz', 'light'),
    V('mundo', 'mundo', 'world'),
    V('carne', 'carne', 'flesh'),
    V('céu', 'céu', 'heaven'),
    V('verdade', 'verdade', 'truth'),
    V('os', 'o', 'masculine plural definite article'),
    V('as', 'o', 'feminine plural definite article'),
    V('uma', 'um', 'feminine indefinite article'),
    V('mão', 'mão', 'hand'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of “o mão”?'),
    options: [T('the hands'), T('the hand'), T('the mans'), T('the handes')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ Word” (John 1:1).'),
      answer: 'O',
      hint: T('Masculine definite article.'),
    },
    {
      kind: 'choose',
      prompt: T('Why is the noun feminine in “a mão”?'),
      options: [
        T('Because it ends in -ão.'),
        T('Simply because it is a noun.'),
        T('Because it has the article a.'),
        T('Because it means body.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match form and function.'),
      pairs: [
        { a: T('the book'), b: T('definite') },
        { a: T('a book'), b: T('indefinite') },
        { a: T('light'), b: T('feminine') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The definite article {o, a, os, as} introduces an identifiable reference and the indefinite {um, uma} brings one example of a class: {vi um homem} presents someone new, {vi o homem} brings someone already known.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The ending suggests gender without deciding it: {-ção}, {-dade} and {-ura} almost always form feminines, {-o} and {-eiro} almost always form masculines, and {o problema}, {o mapa} and {o coração} prove the exception.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{-ão} makes three plurals, and Greek decides which: {-ãos} in {mão/mãos}, {-ães} in {pão/pães}, {-ões} in {irmão/irmãos}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Where Greek has the article, Portuguese has one: {ὁ λόγος} becomes {o Verbo}. Where Greek omits it, as in {θεός}, Portuguese omits it and writes {Deus}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The irregular plural {o rei → os reis} and {o pai → os pais} comes from older Portuguese, and it is what the biblical text preserves.',
      ),
    },
  ],
  notes: [
    {
      label: T('Capitalization'),
      text: T(
        'Capital {Verbo} and {Deus} are not style: they are the convention that renders the Greek title {Logos} and keeps the noun from reading as a common name.',
      ),
    },
    {
      label: T('Where Greek helps'),
      text: T(
        'Greek distinguishes {τὰ βιβλία} from {τὸ βιβλίον} by number and case; Portuguese needs the {-s} Greek does not have, and that is where the translation decides.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{o Verbo} is masculine because λόγος is masculine in Greek.'),
    },
    {
      text: 'E o Verbo era Deus.',
      gloss: T('Greek has θεός without an article, and Portuguese omits its own.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('{brilha} in the present: what keeps happening.'),
    },
    {
      text: 'Vi um homem junto ao Jordão.',
      gloss: T('{um} presents someone new to the listener.'),
    },
    {
      text: 'Vi o homem que vos apresentara.',
      gloss: T('{o} brings someone the listener already knows.'),
    },
    {
      text: 'Deus amou o mundo.',
      gloss: T('{o mundo} is masculine, and the {-o} ending gives no warning.'),
    },
    { text: 'A mão tocou o mártir.', gloss: T('Feminine, and {-ão} announces nothing.') },
    {
      text: 'A palavra permaneceu entre nós.',
      gloss: T('Lexical feminine; the Greek is masculine.'),
    },
    {
      text: 'Os céus declaram a glória de Deus.',
      gloss: T('{os céus} is plural, and so it is in Hebrew and Greek.'),
    },
  ],
  tables: [
    {
      caption: T('What each article says'),
      head: ['Artigo', 'Uso', 'Exemplo'],
      rows: [
        ['o, a, os, as', 'definido', 'o Verbo, a luz'],
        ['um, uma, uns, umas', 'indefinido', 'um homem, uma palavra'],
        ['sem artigo', 'zero', 'Deus em Jo 1.1'],
      ],
    },
    {
      caption: T('Gender the ending does not deliver'),
      head: ['Terminação', 'Sugere', 'Exceção'],
      rows: [
        ['-o, -eiro', 'masculino', 'o problema (m)'],
        ['-a, -ão', 'feminino', 'o coração (m)'],
        ['-ção, -dade', 'feminino', 'o órgão (m)'],
      ],
    },
    {
      caption: T('The three {-ão} plurals'),
      head: ['Terminação', 'Exemplos'],
      rows: [
        ['-ãos', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
  ],
};
