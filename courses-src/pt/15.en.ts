import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('The article and number'),
  title: T('Countable, uncountable and the particle de'),
  subtitle: T('uma porção de paciência, and the congress that changes sense'),
  body: C(`## What is counted and what is weighed

A countable noun is one you can number one by one: {um livro}, {dois livros}, {três filhos}. An uncountable noun is one you weigh, measure or take by measure: {o pão}, {a água}, {o ouro}, {a paciência}, {a fé}, {o amor}. There is no {dois pães} in the sense of counting, only {dois pães} as a measure of what was bought.

The uncountable noun is what forces the preposition into the game. It cannot go straight into the noun that follows it; it needs a word that counts on its behalf: {uma porção de paciência}, {um pouco de fé}, {um copo de água}, {uma caixa de sabonete}, {uma multidão de gente}.

## The particle de as counter

The particle {de} is what turns the mass into a quantity. {Água} is what exists; {uma garrafa de água} is a unit of water; {três garrafas de água} are three units. Same noun, same {-ção}, two senses, and the whole difference sits in the preposition.

With material, food and substances the construction is close to obligatory: {uma colher de sal}, {uma fatia de pão}, {uma vara de madeira}, {uma pocção de óleo}. Biblical Portuguese does the same as any other Portuguese, and a translator coming from Greek has to produce it even where Greek drops the genitive.

## The singular that changes sense

Some nouns say different things in the singular and in the plural. {Um tratado} is a signed document; {um tratado} is a course of medicine. {A igreja} is the building; {a igreja} is the assembly of the faithful. {O povo} is the crowd; {o povo} is the nation.

In those cases the verb is what gives them away. {A igreja estava vazia} speaks of the building; {a igreja estava em oração} speaks of the assembly. {O congresso sediou-se} speaks of one conference; {o congresso decorreu durante três dias} speaks of the whole session.

## Reading criterion

Ask of every noun: is it counted or not? If it is not counted, is there a word in front of it that counts? And is there a verb that tells you which sense is meant?

Psalm 8:4 asks the second question exactly: “What is {o homem} that you should remember him, or the {filho do homem} that you should care for him?” The singular {o homem} is not counting people: it speaks of humankind as one single thing, and it is the Hebrew behind that choice that produces the question.`),
  vocab: [
    V('o pão', 'pão', 'o pão (uncountable)'),
    V('a água', 'água', 'a água (uncountable)'),
    V('o livro', 'livro', 'o livro (countable)'),
    V('a fé', 'fé', 'a fé (uncountable)'),
    V('o amor', 'amor', 'o amor (uncountable)'),
    V('uma porção de', 'porção', 'uma porção de'),
    V('um pouco de', 'pouco', 'um pouco de'),
    V('um copo de', 'copo', 'um copo de'),
    V('uma caixa de', 'caixa', 'uma caixa de'),
    V('a multidão de', 'multidão', 'uma multidão de'),
    V('o tratado', 'tratado', 'o tratado (document)'),
    V('a igreja', 'igreja', 'a igreja (building or congregation)'),
    V('o povo', 'povo', 'o povo (crowd or nation)'),
    V('contável', 'contável', 'countable'),
    V('não contável', 'não contável', 'uncountable'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A noun is countable if it can be numbered one by one; it is uncountable if it is weighed, measured or taken by measure.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The uncountable noun needs a word that counts for it: {uma porção de paciência}, {um copo de água}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The particle {de} is what separates the mass from the unit: {água} and {uma garrafa de água}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Some nouns change sense according to number and according to the verb that follows them.',
      ),
    },
    {
      n: '§5',
      text: T(
        'When the sense is in doubt the verb decides: {a igreja estava vazia} and {a igreja estava em oração}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Hebrew and Greek use the genitive for the same thing, and the Hebrew measure construction has a direct match in {uma porção de}.',
      ),
    },
    {
      label: T('The other side'),
      text: T(
        'Some words exist only in the count and still take {de} by analogy with the mass: {uma dúzia de ovos}, {um monte de gente}, {um par de meias}.',
      ),
    },
  ],
  examples: [
    {
      text: 'Havia pão para todos.',
      gloss: T('Uncountable: what exists is the mass, not the unit.'),
    },
    { text: 'Uma porção de paciência.', gloss: T('The word counts what cannot be counted.') },
    { text: 'Três garrafas de água.', gloss: T('The same {-ção} counted three times.') },
    { text: 'Uma colher de sal.', gloss: T('Measured material: the particle is required.') },
    { text: 'O tratado foi assinado.', gloss: T('The sense of a document, not of a course.') },
    { text: 'O tratado cura a doença.', gloss: T('The same noun, another sense, another verb.') },
    { text: 'A igreja estava vazia.', gloss: T('The singular of the building.') },
    {
      text: 'A igreja orava em silêncio.',
      gloss: T('The singular of the congregation, revealed by the verb.'),
    },
  ],
  tables: [
    {
      caption: T('Countable and uncountable'),
      head: ['Tipo', 'Exemplos', 'Como entra'],
      rows: [
        ['contável', 'livro, filho, cidade', 'direto: um livro, dois filhos'],
        ['massa', 'pão, água, ouro', 'com nome que conta: um pouco de pão'],
        ['abstrato', 'fé, amor, paciência', 'com nome que conta: muita paciência'],
      ],
    },
    {
      caption: T('The particle de as counter'),
      head: ['Massa', 'Unidade', 'Contagem'],
      rows: [
        ['água', 'uma garrafa de água', 'três garrafas de água'],
        ['sal', 'uma colher de sal', 'duas colheres de sal'],
        ['madeira', 'uma vara de madeira', 'cinco varas de madeira'],
      ],
    },
    {
      caption: T('One word, two senses'),
      head: ['Nome', 'Sentido A', 'Sentido B'],
      rows: [
        ['o tratado', 'documento assinado', 'curso de medicina'],
        ['a igreja', 'o edifício', 'a assembleia dos fiéis'],
        ['o congresso', 'uma conferência', 'a sessão inteira'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which construction is correct?'),
    options: [
      T('uma porção de paciência'),
      T('uma porção paciência'),
      T('um pouco paciência'),
      T('uma porção da paciência'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The noun {pão} is ______ countable.'),
      answer: 'não',
      hint: T('What is weighed cannot be numbered.'),
    },
    {
      kind: 'choose',
      prompt: T('In “a igreja estava vazia”, {a igreja} means:'),
      options: [
        T('the building'),
        T('the congregation of the faithful'),
        T('the priests'),
        T('the city'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the mass to its counter.'),
      pairs: [
        { a: T('água'), b: T('um copo de água') },
        { a: T('sal'), b: T('uma colher de sal') },
        { a: T('paciência'), b: T('uma porção de paciência') },
        { a: T('madeira'), b: T('uma vara de madeira') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
