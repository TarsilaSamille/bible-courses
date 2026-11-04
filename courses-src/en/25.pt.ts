import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('O verbo: as doze combinações com have e do'),
  subtitle: T('have gone × went — a distinção de aspecto'),
  section: T('O verbo'),
  body: C(`## Um auxiliar, doze combinações

O tempo verbal do inglês não está no verbo principal: está no **auxiliar**. O auxiliar flexiona por pessoa e o verbo principal fica na forma que aquele auxiliar exige, e são doze combinações que cobrem quase tudo.

Com {be} são duas: {am working}, {is working}, {are working}, {was working}, {were working}. Com {have} são três: {have worked}, {has worked}, {had worked}. Com {do} são três: {do work}, {does work}, {did work}. Com {will} e {shall} são duas: {will go}, {shall go}. Com os modais são duas: {can go}, {must go}.

O verbo principal segue sempre a mesma lógica: {be} pede {ing}, {have} pede particípio, {do}, {will}, {shall} e os modais pedem a base. Uma vez entendida essa coluna, o resto é decorar o auxiliar.

## O erro que o português provoca

O erro mais caro do aluno de português aqui é {I have went}. A frase é errada porque {went} é passado e não particípio: o particípio de {go} é {gone}.

A razão do erro é que o português tem um tempo só para as duas funções. "Eu fui" e "eu tenho ido" são frases diferentes em português, mas o aluno formou a ideia de que as duas cabiam num verbo só. Não cabem: {I went} diz que o fato é passado e está fechado; {I have gone} diz que o fato tem um resultado que vale agora.

John 9:25 na KJV traz o par exato: {whereas I was blind, now I see}. O {was} olha para trás e o {see} olha para agora, e o mesmo sujeito aparece nas duas metades. Um português traduzindo por alto escreve "era cego e vejo"; o inglês faz a distinção dentro da frase.

## Os três jeitos de dizer que você fez

Para o mesmo evento o inglês oferece três ou quatro construções, e a escolha é de aspecto, não de tempo do relógio. {I went} é o passado simples: o fato aconteceu e acabou. {I have gone} é o presente perfeito: o fato importa agora, pelo resultado. {I had gone} é o perfeito passado: o fato vem antes de outro passado. {I am going} é o contínuo: a ação está em curso.

A pergunta que decide é **o que o ouvinte precisa saber**: se precisa de um marco no tempo, use o passado; se precisa do resultado, use o perfeito. O português quase sempre prefere o marco, e é por isso que {I have gone} soa estranho ao aluno e {I went} soa natural mesmo quando o resultado é o que importa.

## will, shall e os modais

O futuro tem mais de uma forma porque o inglês distingue três intenções. {Will} é decisão, previsão ou oferta: {I will call you}. {Shall} aparece na pergunta e na oferta: {Shall we go?} E {going to} é intenção anterior ao momento da fala: {I am going to call you}.

Os modais não têm particípio nem passado. {Can go} é presente, {could go} é passado e {will be able to go} é futuro. Essa é a única família em que o passado é uma forma separada sem o {ed}, e ela resolve a maior parte do que o aluno chamaria de irregularidade.`),
  vocab: [
    V('have worked', 'work', 'ter trabalhado'),
    V('has worked', 'work', 'ter trabalhado'),
    V('had worked', 'work', 'ter trabalhado'),
    V('am going', 'go', 'estar indo'),
    V('have gone', 'go', 'ter ido'),
    V('had gone', 'go', 'ter ido'),
    V('will go', 'go', 'vai ir'),
    V('shall go', 'go', 'vamos ir?'),
    V('can go', 'go', 'pode ir'),
    V('must go', 'go', 'tem que ir'),
    V('do work', 'work', 'trabalho'),
    V('did work', 'work', 'trabalhei'),
    V('I went', 'go', 'eu fui'),
    V('were blind', 'be', 'era cego'),
    V('now I see', 'see', 'agora eu vejo'),
  ],
  rules: [
    { n: '1', text: T('O tempo verbal está no auxiliar, não no verbo principal.') },
    {
      n: '2',
      text: T(
        'Be pede -ing, have pede particípio, e do, will, shall e os modais pedem a base do verbo.',
      ),
    },
    { n: '3', text: T('I have went é errado: o particípio de go é gone.') },
    {
      n: '4',
      text: T(
        'I went marca o passado como fechado; I have gone marca o passado pelo resultado que vale agora.',
      ),
    },
    {
      n: '5',
      text: T(
        'Will é decisão ou previsão, shall é oferta ou pergunta, e going to é intenção anterior à fala.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 9:25 traz whereas I was blind, now I see: o passado olha para trás e o presente olha para agora, na mesma frase e com o mesmo sujeito.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve I have went, o problema é de particípio e não de tempo. A forma went é passado; o participo é gone, e é o participo que o auxiliar exige.',
      ),
    },
  ],
  examples: [
    { text: '{I went}', gloss: T('eu fui — passado fechado') },
    { text: '{I have gone}', gloss: T('eu tenho ido — o resultado vale agora') },
    { text: '{I had gone}', gloss: T('eu tinha ido — antes de outro passado') },
    { text: '{I am going}', gloss: T('eu estou indo — em curso') },
    { text: '{whereas I was blind, now I see}', gloss: T('era cego, agora vejo') },
    { text: '{He has worked here for ten years}', gloss: T('ele trabalha aqui há dez anos') },
    { text: '{They had already left}', gloss: T('eles já tinham saído') },
    { text: '{Shall we go}', gloss: T('vamos?') },
    { text: '{I will call you}', gloss: T('eu te ligo') },
    { text: '{I must go now}', gloss: T('eu tenho que ir agora') },
  ],
  tables: [
    {
      caption: T('As doze combinações'),
      head: [T('Auxiliar'), T('Verbo principal'), T('Combinações')],
      rows: [
        ['{am / is / are}', '{+ing}', '{am working, is working, are working}'],
        ['{was / were}', '{+ing}', '{was working, were working}'],
        ['{have / has}', T('{+particípio}'), '{have worked, has worked}'],
        ['{had}', T('{+particípio}'), '{had worked}'],
        ['{do / does}', T('base'), '{do work, does work}'],
        ['{did}', T('base'), '{did work}'],
        ['{will / shall}', T('base'), '{will go, shall go}'],
        ['{can / could}', T('base'), '{can go, could go}'],
        ['{must}', T('base'), '{must go}'],
      ],
    },
    {
      caption: T('Quatro jeitos de falar do mesmo evento'),
      head: [T('Forma'), T('O que diz'), T('Pergunta que responde')],
      rows: [
        ['{I went}', T('passado simples'), T('quando aconteceu?')],
        ['{I have gone}', T('presente perfeito'), T('e agora, qual o resultado?')],
        ['{I had gone}', T('perfeito passado'), T('o que tinha acontecido antes?')],
        ['{I am going}', T('contínuo'), T('o que está acontecendo agora?')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [T('I have went'), T('I have gone'), T('I have go'), T('I am went')],
    answer: 1,
    hint: T('Depois de have entra o particípio, que em go é gone.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'She ___ working.' (agora)"), answer: 'is' },
    { kind: 'fill', prompt: T("Complete: 'They ___ already left.'"), answer: 'have' },
    {
      kind: 'match',
      prompt: T('Ligue o auxiliar à forma que ele exige.'),
      pairs: [
        { a: '{have worked}', b: T('particípio') },
        { a: '{is working}', b: T('-ing') },
        { a: '{will go}', b: T('base') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase diz que ele ainda não chegou?'),
      options: [T('He did not come'), T('He has not come'), T('He is not come'), T('He not came')],
      answer: 1,
    },
  ],
};
