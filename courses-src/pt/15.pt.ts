import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('O artigo e o número'),
  title: T('Contável, não contável e a partícula de'),
  subtitle: T('uma porção de paciência, e o congresso que muda de sentido'),
  body: C(`## O que se conta e o que se pesa

Substantivo contável é o que se pode numerar um a um: {um livro}, {dois livros}, {três filhos}. Substantivo não contável é o que se pesa, se mede ou se toma sem contagem: {o pão}, {a água}, {o ouro}, {a paciência}, {a fé}, {o amor}. Não existe {dois pães} no sentido de contagem, e sim {dois pães} como medida do que foi comprado.

O não contável é o que obriga a preposição a entrar em jogo. Ele não pode ir direto para o substantivo que vem depois dele; precisa de um nome que conte por ele: {uma porção de paciência}, {um pouco de fé}, {um copo de água}, {uma caixa de sabonete}, {uma multidão de gente}.

## A partícula de como contador

A partícula {de} é o que transforma a massa em quantidade. {água} é o que existe; {uma garrafa de água} é uma unidade de água; {três garrafas de água} são três unidades. O mesmo substantivo, a mesma {-ção}, dois sentidos, e a diferença inteira está na preposição.

Com material, comida e substâncias, a construção é quase obrigatória: {uma colher de sal}, {uma fatia de pão}, {uma vara de madeira}, {uma pocção de óleo}. Em português biblical é a mesma coisa que em qualquer outro português, e quem traduz do grego precisa produzi-la mesmo quando o grego dispensa o genitivo.

## O singular que muda de sentido

Há substantivos que, Wearing, o plural, ou os dois, dizem coisas diferentes. {Um tratado} é um documento assinado; {um tratado} é um curso de medicina. {A igreja} é o prédio; {a igreja} é a assembleia dos fiéis. {O povo} é a multidão; {o povo} é a nação.

Nesses casos quem descobre é o verbo. {A igreja estava vazia} fala do prédio; {a igreja estava em oração} fala da assembleia. {O congresso sediou-se} fala de uma conferência; {o congresso decorreu durante três dias} fala da sessão inteira.

## O que ler

Pergunte de cada substantivo: ele se conta ou não se conta? Se não se conta, há nome antes dele para contar? E há verbo que diga de que sentido se trata?

O Salmo 8.4 faz exatamente a segunda pergunta: «Que é {o homem} para que te lembres dele? ou {o filho do homem}, para que te cuides dele?» O singular {o homem} não está contando pessoas: está falando da humanidade como uma só coisa, e é o hebraico dessa ambiguidade que produz a pergunta.`),
  vocab: [
    V('o pão', 'pão', 'o pão (não contável)'),
    V('a água', 'água', 'a água (não contável)'),
    V('o livro', 'livro', 'o livro (contável)'),
    V('a fé', 'fé', 'a fé (não contável)'),
    V('o amor', 'amor', 'o amor (não contável)'),
    V('uma porção de', 'porção', 'uma porção de'),
    V('um pouco de', 'pouco', 'um pouco de'),
    V('um copo de', 'copo', 'um copo de'),
    V('uma caixa de', 'caixa', 'uma caixa de'),
    V('a multidão de', 'multidão', 'uma multidão de'),
    V('o tratado', 'tratado', 'o tratado (documento)'),
    V('a igreja', 'igreja', 'a igreja (edifício ou assembleia)'),
    V('o povo', 'povo', 'o povo (multidão ou nação)'),
    V('contável', 'contável', 'contável'),
    V('não contável', 'não contável', 'não contável'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Substantivo contável se numerar um a um; não contável se pesar, medir ou tomar por medida.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O não contável exige um nome que o conte: {uma porção de paciência}, {um copo de água}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A partícula {de} é o que separa a massa da unidade: {água} e {uma garrafa de água}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Alguns substantivos mudam de sentido conforme o número ou conforme o verbo que vêm depois.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Quando há dúvida sobre o sentido, o verbo decide: {a igreja estava vazia} e {a igreja estava em oração}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O hebraico e o grego também usam o genitivo para a mesma coisa: a construção hebraica de medida encontra correspondência direta em {uma porção de}.',
      ),
    },
    {
      label: T('Do outro lado'),
      text: T(
        'Há nomes que só existem na contagem e trazem {de} por analogia com a massa: {uma dúzia de ovos}, {um monte de gente}, {um par de meias}.',
      ),
    },
  ],
  examples: [
    {
      text: 'Havia pão para todos.',
      gloss: T('Não contável: o que existe é a massa, não a unidade.'),
    },
    { text: 'Uma porção de paciência.', gloss: T('O nome conta o que não se conta.') },
    { text: 'Três garrafas de água.', gloss: T('A mesma {-ção} contada três vezes.') },
    { text: 'Uma colher de sal.', gloss: T('Material medido: a partícula é obrigatória.') },
    { text: 'O tratado foi assinado.', gloss: T('Sentido de documento, não de curso.') },
    {
      text: 'O tratado cura a doença.',
      gloss: T('O mesmo substantivo, outro sentido, outro verbo.'),
    },
    { text: 'A igreja estava vazia.', gloss: T('Singularia do edifício.') },
    {
      text: 'A igreja orava em silêncio.',
      gloss: T('Singularia da assembleia, revelada pelo verbo.'),
    },
  ],
  tables: [
    {
      caption: T('Contável e não contável'),
      head: ['Tipo', 'Exemplos', 'Como entra'],
      rows: [
        ['contável', 'livro, filho, cidade', 'direto: um livro, dois filhos'],
        ['massa', 'pão, água, ouro', 'com nome que conta: um pouco de pão'],
        ['abstrato', 'fé, amor, paciência', 'com nome que conta: muita paciência'],
      ],
    },
    {
      caption: T('A partícula de como contador'),
      head: ['Massa', 'Unidade', 'Contagem'],
      rows: [
        ['água', 'uma garrafa de água', 'três garrafas de água'],
        ['sal', 'uma colher de sal', 'duas colheres de sal'],
        ['madeira', 'uma vara de madeira', 'cinco varas de madeira'],
      ],
    },
    {
      caption: T('O mesmo nome, dois sentidos'),
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
    prompt: T('Qual construção está correta?'),
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
      prompt: T('O substantivo {pão} é ______ contável.'),
      answer: 'não',
      hint: T('O que se pesa não se numera.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “a igreja estava vazia”, {a igreja} significa:'),
      options: [T('o edifício'), T('a assembleia dos fiéis'), T('os padres'), T('a cidade')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a massa ao seu contador.'),
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
