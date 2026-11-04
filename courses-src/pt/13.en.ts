import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('The noun'),
  title: T('The noun: gender and formation'),
  subtitle: T('o problema, a mão, and why the ending does not decide'),
  body: C(`## Gender is not in the ending

Portuguese noun gender is **lexical**: every noun has a sex the dictionary records, and the ending only agrees with it. {o problema} is masculine despite the {-a}, {a mão} is feminine despite the {-ão}, {o dia} and {o mapa} are masculine with no signal at all, and {a foto} is feminine on a weak signal.

The {-o} and {-a} rule covers most cases, which is why it works in ordinary reading. It fails exactly where the text lives: {o Verbo} is masculine, {o livro} is masculine, {o pão} is masculine, and none of them hands you the gender through its ending.

## The three devices that mark gender

The text says the gender three times, and none of the three needs a dictionary. The **article** is the first, and it holds at the first mention: {o} or {a}. The **suffix** is the second, when there is one, because {-ção} and {-dade} arrive with gender built in. **Agreement** is the third, and the strongest of the three, because it comes from far away: an adjective, a participle or a finite verb agreeing with the noun proves the gender even when the sentence is ten words downstream.

In Mt 7.25, {a casa não caiu} and {aquela casa não caiu} repeat verb and noun: the gender is in the verb, and anyone who read the article {a} needed nothing else.

## The pairs no signal resolves

Some pairs give you nothing to work with. {o coma} and {a coma} are the same set of letters: one is the state a person is in, the other is a unit of mass, and gender is the only signal left. {o homem} and {a mulher} are the best known pair, and neither ending nor number resolves them: gender is what separates the two nouns. The same happens in {o animal} and {a fêmea}, and in {o irmão} and {a irmã}.

Suffixes lie too: {-ário} is masculine in {o cardápio} and {o vocabulário}, and feminine in {a enciclopédia} and {a livraria}. And {-ão} says nothing about gender, since {o coração}, {o órgão}, {a mão} and {a multidão} all sit on the same page.

When no signal helps, meaning decides: nobody hesitates over {o dia} or {a noite}, because the sense already carries the gender.

## Reading criterion

With any noun, ask: does the article give the gender? Does the suffix, when there is one, promise the same? And does an adjective, participle or verb further on confirm it? Three matching answers close the gender without a dictionary, and that is how a whole chapter gets read without stopping at every name.

In John 1.1, {o Verbo} is masculine because λόγος is masculine in Greek; {a Palavra} is a translator's choice, a legitimate one, which swaps the gender of the original for the gender of the word used. It is a choice that has to be seen, not let pass.`),
  vocab: [
    V('o problema', 'problema', 'o problema (masculine, despite -a)'),
    V('a mão', 'mão', 'a mão (feminine, despite -ão)'),
    V('o dia', 'dia', 'o dia'),
    V('o mapa', 'mapa', 'o mapa'),
    V('a foto', 'foto', 'a foto'),
    V('o substantivo', 'substantivo', 'the noun'),
    V('o gênero', 'gênero', 'gender'),
    V('a terminação', 'terminação', 'the ending'),
    V('o artigo', 'artigo', 'the article'),
    V('o sufixo', 'sufixo', 'the suffix'),
    V('a concordância', 'concordância', 'agreement'),
    V('o adjetivo', 'adjetivo', 'the adjective'),
    V('o Verbo', 'Verbo', 'the Word'),
    V('a palavra', 'palavra', 'the word'),
  ],
  rules: [
    { n: '§1', text: T('Noun gender is lexical: the suffix suggests, but it does not decide.') },
    {
      n: '§2',
      text: T(
        '{-dade}, {-ção}, {-mento}, {-ura} and {-ência} form feminine nouns almost without exception, and are good for deducing the gender of a new word.',
      ),
    },
    {
      n: '§3',
      text: T('{-or}, {-eiro}, {-ista} and {-ante} form masculine nouns almost without exception.'),
    },
    {
      n: '§4',
      text: T(
        'The article and agreement with an adjective, participle or verb prove the gender inside the text itself.',
      ),
    },
    {
      n: '§5',
      text: T(
        'In translation gender follows the original: λόγος is masculine, and so one writes {o Verbo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'John 1.1 has {o Verbo} in the masculine, which is closest to the Greek. {a Palavra} is not an error: it is a choice that trades the gender of the original for the gender of the chosen word.',
      ),
    },
    {
      label: T('Lexical × morphological'),
      text: T(
        'Latin inflects the adjective in three endings for a single gender ({bonus}, {bona}, {bonum}). Portuguese inflects in two ({bom}, {boa}), and the noun keeps its gender in the dictionary.',
      ),
    },
  ],
  examples: [
    {
      text: 'O Verbo se fez carne.',
      gloss: T('John 1.14: masculine by agreement and by inheritance from the Greek.'),
    },
    {
      text: 'Deus amou o mundo.',
      gloss: T('{o mundo} is masculine with no signal in the ending.'),
    },
    { text: 'A mão tremia.', gloss: T('Feminine, which the {-ão} does not announce.') },
    {
      text: 'O mapa estava dobrado.',
      gloss: T('Masculine, confirmed by agreement with {dobrado}.'),
    },
    {
      text: 'A casa não caiu.',
      gloss: T('Mt 7.25: the gender sits in the verb, far from the noun.'),
    },
    {
      text: 'A palavra permaneceu.',
      gloss: T('Lexical feminine; the matching Greek is masculine.'),
    },
    {
      text: 'Os problemas crescem.',
      gloss: T('The article {os} settles the gender of the plural.'),
    },
    {
      text: 'Uma fotografia nova.',
      gloss: T('The {-a} matches the gender; if it did not, everything else would rule.'),
    },
  ],
  tables: [
    {
      caption: T('Suffixes that promise feminine'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-dade', 'liberdade, bondade, verdade'],
        ['-ção', 'salvação, criação, tradição'],
        ['-mento', 'movimento, casamento, fundamento'],
      ],
    },
    {
      caption: T('Suffixes that promise masculine'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-or', 'cantor, tradutor, Senhor'],
        ['-eiro', 'primeiro, brasileiro, padeiro'],
        ['-ista', 'cristiano, batista, romancista'],
      ],
    },
    {
      caption: T('The three devices'),
      head: ['Recurso', 'Exemplo', 'Força'],
      rows: [
        ['artigo', 'o problema', 'forte'],
        ['sufixo', 'a salvação', 'média'],
        ['concordância', 'caiu com a casa', 'decisiva'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these nouns is feminine?'),
    options: [T('a mão'), T('o problema'), T('o mapa'), T('o dia')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The suffix {-ção} forms ______ nouns.'),
      answer: 'femininos',
      hint: T('Compare {salvação} with {tradutor}.'),
    },
    {
      kind: 'choose',
      prompt: T('Why does John 1.1 render λόγος as {o Verbo} and not as {a Palavra}?'),
      options: [
        T('λόγος is masculine in Greek'),
        T('Old Portuguese had no gender'),
        T('Greek does not mark gender'),
        T('Almeida translates word for word'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the suffix to the gender it suggests.'),
      pairs: [
        { a: T('-dade'), b: T('feminine') },
        { a: T('-or'), b: T('masculine') },
        { a: T('-mento'), b: T('feminine') },
        { a: T('-ista'), b: T('masculine') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
