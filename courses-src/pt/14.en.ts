import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('The noun'),
  title: T('The plural: two rules and the exceptions'),
  subtitle: T('irmãos, mãos, pães, and the réu that becomes réus'),
  body: C(`## The general rule

The plural swaps the ending: {-o} becomes {-os}, {-a} becomes {-as}, {-ão} becomes {-ões}, {-l} becomes {-is}. It works on almost everything: {livro/livros}, {casa/casas}, {irmão/irmãos}, {animal/animais}, {país/países}.

A second rule is short: nouns in {-r} and {-z} lose that letter in the plural. {homem/homens}, {rapaz/rapazes}, {luz/luzes}.

## The three {-ão} groups

{-ão} is the one case where the general rule is not enough. It splits into three groups, and you have to know which group a noun belongs to. The first gives {-ãos}: {mão/mãos}, {órgão/órgãos}, {coração/corações}, {órfão/órfãos}, {bênção/bênçãos}. The second gives {-ães}: {pão/pães}, {cã/cães}, {alemão/alemães}, {capitão/capitães}, {sacristão/sacristães}. The third gives {-ões}: {irmão/irmãos}, {avião/aviões}, {limão/limões}, {tijolo/tijolos}, {algodão/algodões}.

What separates the first two from the third is not the ending but what the noun names. {-ãos} and {-ães} name things and parts of the body in general. {-ões} name people and agents in general: {irmão}, {cristão}, {comandante}. When you do not know a noun's group, ask whether the thing is a person or an object, and most cases settle themselves.

## The plural that swaps nothing

There is a group in which the plural adds no letter at all. The best known is {o réu}, whose plural is {os réus}: no {s}, the {u} untouched, exactly as in the singular. {O rei} gives {os reis} and {o pai} gives {os pais}, where the plural swaps the singular {-i} for {-eis}.

Another group swaps the vowel and not the ending: {o homem} gives {os homens}, and {o boi} gives {os bois}.

What this costs in reading is little and what it yields is a lot. The {bênçãos} of a psalm, the {irmãos} of a community and the {homens} of a people are three plurals of the same {-ão} or nearly, and Greek decides which one to use, because each corresponds to a different Greek form.

## Reading criterion

With any noun already seen in the singular, ask: if it ends in {-ão}, which group is it? And if it does not, does the plural swap the ending, swap the vowel, or swap nothing? With the answer, the plural is closed, and the text can be read without going back to check the noun.`),
  vocab: [
    V('o irmão', 'irmão', 'o irmão'),
    V('os irmãos', 'irmão', 'os irmãos'),
    V('a mão', 'mão', 'a mão'),
    V('as mãos', 'mão', 'as mãos'),
    V('o pão', 'pão', 'o pão'),
    V('os pães', 'pão', 'os pães'),
    V('o órgão', 'órgão', 'o órgão'),
    V('a bênção', 'bênção', 'a bênção'),
    V('as bênçãos', 'bênção', 'as bênçãos'),
    V('o homem', 'homem', 'o homem'),
    V('os homens', 'homem', 'os homens'),
    V('o réu', 'réu', 'o réu'),
    V('os réus', 'réu', 'os réus'),
    V('o plural', 'plural', 'o plural'),
    V('a terminação', 'terminação', 'a terminação'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The regular plural swaps the ending: {-o} into {-os}, {-a} into {-as}, {-ão} into {-ões}, {-l} into {-is}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Nouns in {-r} and {-z} lose that letter in the plural: {homem/homens}, {luz/luzes}.',
      ),
    },
    {
      n: '§3',
      text: T('{-ão} splits into three groups, and the plural comes out {-ãos}, {-ães} or {-ões}.'),
    },
    {
      n: '§4',
      text: T(
        '{-ãos} and {-ães} name things in general and parts of the body; {-ões} names people and agents in general.',
      ),
    },
    { n: '§5', text: T('Some plurals add nothing at all: {réu/reus}, {rei/reis}, {mês/meses}.') },
  ],
  notes: [
    {
      label: T('Greek × Portuguese'),
      text: T(
        'Greek also marks the plural, but in the ending: {παῖς} and {παῖδες}. Portuguese usually adds {-s}, which is why a literal translation does not always carry the Greek plural into Portuguese form.',
      ),
    },
    {
      label: T('Register'),
      text: T(
        'The three {-ão} groups are the same in Portugal and in Brazil; what varies is the use of rare words, and there the dictionary of the edition decides.',
      ),
    },
  ],
  examples: [
    { text: 'Viver em união como irmãos.', gloss: T('{-ão} of the third group: {irmãos}.') },
    { text: 'As mãos estavam limpas.', gloss: T('{-ão} of the first group: {mãos}.') },
    { text: 'Partiu o pão em dois.', gloss: T('{-ão} of the second group: {pães}.') },
    { text: 'O corpo e seus órgãos.', gloss: T('{-ãos}, and the plural warns of nothing.') },
    {
      text: 'Recebeu as bênçãos do Senhor.',
      gloss: T('Plural of {bênção}, frequent in the psalms.'),
    },
    { text: 'Os homens foram chamados.', gloss: T('The vowel changes, not the ending.') },
    { text: 'Os réus esperavam o julgamento.', gloss: T('Plural with no {s}: {réus}.') },
    { text: 'Percorreu todos os países.', gloss: T('{-l} becomes {-is}: {países}.') },
  ],
  tables: [
    {
      caption: T('The three {-ão} groups'),
      head: ['Grupo', 'Plural', 'Exemplos'],
      rows: [
        ['-ãos', 'coisas e partes do corpo', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'coisas e gentílicos', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'pessoas e agentes', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
    {
      caption: T('Plurals that do not swap the ending'),
      head: ['Singular', 'Plural', 'O que acontece'],
      rows: [
        ['o réu', 'os réus', 'nada muda'],
        ['o rei', 'os reis', 'o -i vira -eis'],
        ['o mês', 'os meses', 'cai o -s'],
      ],
    },
    {
      caption: T('Endings that change in the plural'),
      head: ['Terminação', 'Plural', 'Exemplos'],
      rows: [
        ['-l', '-is', 'país/países, animal/animais'],
        ['-r', 'sem r', 'homem/homens, flor/flores'],
        ['-z', 'sem z', 'luz/luzes, rapaz/rapazes'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of {o irmão}?'),
    options: [T('os irmãos'), T('os irmãos'), T('os irmãos com s'), T('os mãos')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The plural of {o pão} is os ______.'),
      answer: 'pães',
      hint: T('Second {-ão} group.'),
    },
    {
      kind: 'choose',
      prompt: T('Which of these plurals does not swap the ending?'),
      options: [T('os réus'), T('os reis'), T('os meses'), T('os homens')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match singular to plural.'),
      pairs: [
        { a: T('o irmão'), b: T('os irmãos') },
        { a: T('a mão'), b: T('as mãos') },
        { a: T('o pão'), b: T('os pães') },
        { a: T('o réu'), b: T('os réus') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
