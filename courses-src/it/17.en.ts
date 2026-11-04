import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('The noun: gender and number'),
  subtitle: T('il libro, la casa; -o, -a, -e'),
  section: T('Syntax and the noun'),
  body: C(`## Gender is not deducible: learn the pair

Italian has no rule for gender. It is not the ending, not the sound, not the meaning: {la mano} and {il libro} have the same shape and opposite gender. What you do instead is learn the noun **always glued to its article**, because the pair is what shows up in the text, and the article is the only clue Italian offers.

There is a partial test for nouns in {-e}: swap in {il} and then {la} and see which one sounds right. {Il nome} is masculine and {la nome} does not exist. {La mente} is feminine, and {il mente} is the participle of {mentire}, a different word entirely. {Il sale} is salt; {la sale} is the invoice that arrived.

## The plural: {-o} and {-a} shift, {-e} says nothing

The grid is short. Masculine in **-o** becomes **-i**: {libro} → {libri}. Feminine in **-a** becomes **-e**: {casa} → {case}. And everything ending in **-e** becomes **-i**, with no regard for gender: {il re} → {i re}, {la mano} → {le mani}, {il paese} → {i paesi}.

The detail that trips people up is this: **the Italian plural does not reveal gender**. The form {i} is the same for both sexes, and whoever needs to know which one it is reads the article or the adjective that comes with it: {gli studenti} alti, {le studenti} alte. That is why the adjective still inflects in the plural even when the noun no longer does.

## In the Bible

Gen 1:1 is a lesson in the article in two lines: {In principio Dio creò il cielo e la terra}. Note the pair {il cielo} / {la terra}, one masculine and one feminine, two articles, two endings. Add {Dio}, which is masculine even though it made everything that is.

Gen 1:27 adds what Italian grammar does best: {Dio creò l’uomo a sua immagine, a immagine di Dio lo creò: maschio e femmina li creò}. {Maschio} and {femmina} are two nouns of opposite gender in the singular, two opposite articles, and {li} closes the sentence: it is the indirect pronoun {loro} without the {loro}. A translation that writes {l’uomo e la donna} is not misremembering; it is modernising.

## Reading criterion

When you meet an Italian noun, ask two questions before you translate: which article goes with it, and what ending it takes in the plural. If the plural ends in {-e}, gender comes from the plural article or from the adjective that accompanies it.`),
  vocab: [
    V('libro', 'libro', 'book'),
    V('casa', 'casa', 'house'),
    V('mano', 'mano', 'hand'),
    V('nome', 'nome', 'name'),
    V('mente', 'mente', 'mind'),
    V('sale', 'sale', 'salt / invoice'),
    V('re', 're', 'king'),
    V('paese', 'paese', 'country, village'),
    V('parte', 'parte', 'part'),
    V('cielo', 'cielo', 'sky'),
    V('terra', 'terra', 'earth'),
    V('Dio', 'Dio', 'God'),
    V('uomo', 'uomo', 'man'),
    V('maschio', 'maschio', 'male'),
    V('femmina', 'femmina', 'female'),
    V('libri', 'libro', 'books'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of il paese?'),
    options: [T('i paes'), T('i paesi'), T('i paese'), T('le paesi')],
    answer: 1,
    hint: T('A masculine noun in -e: the plural goes to -i.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the pair: la casa → ___ case'),
      answer: 'le',
      hint: T('Feminine in -a becomes -e.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the plural of la mano?'),
      options: [T('i mani'), T('le mani'), T('le mane'), T('gli mani')],
      answer: 1,
      hint: T('It ends in -a and it is feminine.'),
    },
    {
      kind: 'fill',
      prompt: T('Which article reveals the gender of {nome}? ___ nome'),
      answer: 'il',
      hint: T('The test is il or la.'),
    },
  ],
  rules: [
    { n: '1', text: T('The gender of an Italian noun is arbitrary: only the article reveals it.') },
    {
      n: '2',
      text: T(
        'Masculine -o becomes -i; feminine -a becomes -e; -e becomes -i with no gender shown.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the plural the ending does not show sex: the article and the adjective carry it.',
      ),
    },
    {
      n: '4',
      text: T('Before s + consonant, z, gn or ps the masculine uses lo; before a vowel, l’.'),
    },
    { n: '5', text: T('Nouns in -e can be any gender: il nome, la parte, il re.') },
  ],
  notes: [
    {
      label: T('The il/la test'),
      text: T(
        '{il nome} is masculine and {la nome} does not exist; {la mente} is feminine and {il mente} is a different word, the participle of {mentire}. If the noun accepts both articles, you have not found a hard gender: you have found a pair of homonyms.',
      ),
    },
    {
      label: T('Why the article matters when you read'),
      text: T(
        'In a biblical text the article is not decoration: it is what says whether {il Figlio} names someone or something. Where the Italian translation writes {la sapienza}, the translator did not choose on sound, he chose on theology.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('The book is the Word of God.') },
    { text: 'I libri sono qui, le case no.', gloss: T('The books are here, the houses are not.') },
    { text: 'Gli studenti sono alti.', gloss: T('The students are tall (masculine).') },
    { text: 'Le studenti sono alte.', gloss: T('The students are tall (feminine).') },
    { text: 'Dio creò l’uomo a sua immagine.', gloss: T('God created man in his own image.') },
    { text: 'Maschio e femmina li creò.', gloss: T('Male and female he made them.') },
    { text: 'I re e le regine.', gloss: T('The kings and the queens.') },
    { text: 'Le mani di Maria.', gloss: T('The hands of Mary.') },
    { text: 'Il sale è sulla tavola.', gloss: T('The salt is on the table.') },
  ],
  tables: [
    {
      caption: T('Terminação e plural'),
      head: ['Singolare', 'Plurale', 'Genere'],
      rows: [
        ['il libro', 'i libri', 'masculino'],
        ['la casa', 'le case', 'femminile'],
        ['il re', 'i re', 'masculino'],
        ['la mano', 'le mani', 'femminile'],
        ['il paese', 'i paesi', 'masculino'],
        ['la parte', 'le parti', 'femminile'],
        ['il nome', 'i nomi', 'masculino'],
        ['la mente', 'le menti', 'femminile'],
      ],
    },
    {
      caption: T('O artigo como pista'),
      head: ['Articolo', 'Singolare', 'Plurale'],
      rows: [
        ['il', 'il libro', 'i libri'],
        ['lo', 'lo studente', 'gli studenti'],
        ['la', 'la casa', 'le case'],
        ['l’', 'l’albero', 'gli alberi'],
      ],
    },
  ],
};
