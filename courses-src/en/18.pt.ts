import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Pronomes: o sistema inteiro'),
  subtitle: T('me, my, myself, this, whom, some — todas as séries'),
  section: T('Pronomes'),
  body: C(`## Pessoais: uma forma para o sujeito, outra para o objeto

O português tem uma forma só. O inglês tem duas, e a escolha é puramente posicional: o pronome que **substitui o sujeito** fica antes do verbo, e o que **recebe a ação** vai depois.

{I write} e {they wrote me} mostram o mecanismo: {I} e {they} são sujeito, {me} é objeto. {Him} e {her} têm a mesma forma nas duas posições, o que é a origem de boa parte da confusão.

{Her} é ambíguo entre {her} como objeto e {her} como possessivo, e o contexto decide: {I saw her} recebeu a ação; {her book is mine} é posse.

A KJV usa o outro jogo, o arcaico: {thou} e {thee} no lugar de {you}, {thy} no lugar de {your}. João 17:21 traz {as thou art with me, and I with thee}, a mesma frase que o português diz "como tu estás comigo, e eu contigo". Quem lê KJV precisa saber que a segunda pessoa foi trocada.

## Os possessivos e a palavra sem apóstrofo

Os possessivos têm duas séries: o **adjetivo** vem antes do nome ({my book}) e o **pronome sozinho** substitui o nome ({the book is mine}). A única que muda de forma nos dois papéis é {her}: {her book} e {the book is hers}. Todas as outras repetem a mesma base.

{Its} é a única forma possessiva sem apóstrofo, porque não é uma forma contraída. {It's} é {it is}, {it has} ou {it was}: {it's a good book} ao lado de {the dog wagged its tail}. Quem escreve {it's} no lugar de {its} produz uma frase que não quer dizer nada, e o erro é frequente porque as duas se pronunciam igual.

Fora {its}, {her} e {their}, não há truque: {his} significa dele e também é dele. O único que obriga a pensar é {her}.

## Reflexivos e demonstrativos

O reflexivo volta ao sujeito: {I saw myself}, {she hurt herself}, {they can only count on themselves}. {Themselves} é a única forma com {s} no plural.

Os demonstrativos são {this}, {that}, {these}, {those}, e o singular e o plural não derivam um do outro por regra que o aluno possa deduzir: {this} não tem plural próprio, e {these} não tem singular.

A assimetria que mais custa é a da distância: {these days} é "nestes dias", {in those days} é "naqueles dias", e {that} serve para {that book} e para {that}, conforme o que vem depois.

## Interrogativos, relativos e indefinidos

{Who} pergunta por pessoa e {which} por coisa; {what} pergunta por coisa em frase sem antecedente. {Whom} é a forma de objeto de {who}, e {Whose} pergunta por posse: {To whom did you write}?

Os indefinidos giram em torno da negação. {Some} aparece em afirmação e em oferta, {any} em negação e em pergunta, {no} funciona como {not a}, {every} exige singular e tem a ideia de todos, e {each} exige singular e tem a ideia de um a um. A consequência prática é a que mais aparece em teste: {I have some} responde a uma oferta, e {I don't have any} responde a uma pergunta.`),
  vocab: [
    V('I', 'I', 'eu (sujeito)'),
    V('me', 'me', 'me (objeto)'),
    V('myself', 'myself', 'a mim mesmo'),
    V('your', 'your', 'seu, tua'),
    V('yours', 'yours', 'o seu'),
    V('his', 'his', 'dele, seu'),
    V('hers', 'hers', 'dela (pronome)'),
    V('its', 'its', 'dele, dela (neutro)'),
    V("it's", 'be', 'é, está (contraído)'),
    V('themselves', 'themselves', 'a si mesmos'),
    V('this', 'this', 'este'),
    V('that', 'that', 'esse, aquele'),
    V('these', 'these', 'estes'),
    V('those', 'those', 'esses, aqueles'),
    V('whom', 'whom', 'quem (objeto)'),
    V('whose', 'whose', 'de quem'),
    V('some', 'some', 'algum'),
    V('any', 'any', 'algum (negação/pergunta)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A forma do pronome pessoal é decidida pela posição: sujeito antes do verbo, objeto depois.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os possessivos têm duas séries: a forma de adjetivo antes do nome e a forma de pronome sozinha.',
      ),
    },
    {
      n: '3',
      text: T(
        'Its é a única forma possessiva sem apóstrofo; its contraído é it is, it has ou it was.',
      ),
    },
    {
      n: '4',
      text: T(
        'O reflexivo concorda com o sujeito e aparece como objeto do verbo ou depois da preposição.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some vai em afirmação e oferta, any em negação e pergunta, e every e each exigem sempre singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 17:21 usa thou e thee, e o Pai-Nosso em Mateus 6:9 usa thy. São formas de segunda pessoa arcaicas, não erro de leitura: quem traduz precisa decidir o que fazer com elas.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Os três erros mais comuns são its no lugar de it is, her no lugar de hers e these no lugar de this. Os três são culpa do paralelismo das formas, não da falta de estudo.',
      ),
    },
  ],
  examples: [
    { text: '{they wrote me}', gloss: T('eles me escreveram') },
    { text: '{I saw her}', gloss: T('eu a vi') },
    { text: '{her book is mine}', gloss: T('o livro dela é meu') },
    { text: '{the dog wagged its tail}', gloss: T('o cachorro abanou o rabo dele') },
    { text: '{it is a good book}', gloss: T('é um bom livro — forma contraída') },
    {
      text: '{they can only count on themselves}',
      gloss: T('eles só podem contar consigo mesmos'),
    },
    { text: '{in those days}', gloss: T('naqueles dias') },
    { text: '{To whom did you write}', gloss: T('A quem você escreveu?') },
    { text: '{Every good gift is from above}', gloss: T('toda boa dádiva é de cima') },
    { text: "{I don't have any bread}", gloss: T('não tenho pão algum') },
    {
      text: '{as thou art with me, and I with thee}',
      gloss: T('como tu estás comigo, e eu contigo — KJV'),
    },
  ],
  tables: [
    {
      caption: T('Pessoais e reflexivos'),
      head: [T('Pessoa'), T('Sujeito'), T('Objeto'), T('Reflexivo')],
      rows: [
        [T('1ª'), '{I}', '{me}', '{myself}'],
        [T('2ª'), '{you}', '{you}', '{yourself} / {yourselves}'],
        [T('3ª masc.'), '{he}', '{him}', '{himself}'],
        [T('3ª fem.'), '{she}', '{her}', '{herself}'],
        [T('neutro'), '{it}', '{it}', '{itself}'],
        [T('1ª plural'), '{we}', '{us}', '{ourselves}'],
        [T('3ª plural'), '{they}', '{them}', '{themselves}'],
      ],
    },
    {
      caption: T('Possessivos'),
      head: [T('Pronome'), T('Adjetivo'), T('Pronome sozinho'), T('Ponto de atenção')],
      rows: [
        ['{I}', '{my}', '{mine}', T('—')],
        ['{you}', '{your}', '{yours}', T('—')],
        ['{he}', '{his}', '{his}', T('o mesmo nas duas séries')],
        ['{she}', '{her}', '{hers}', T('a única que muda')],
        ['{it}', '{its}', '{its}', T('sem apóstrofo')],
        ['{we}', '{our}', '{ours}', T('—')],
        ['{they}', '{their}', '{theirs}', T('—')],
      ],
    },
    {
      caption: T('Indefinidos'),
      head: [T('Palavra'), T('Onde entra'), T('Número'), T('Exemplo')],
      rows: [
        ['{some}', T('afirmação, oferta'), T('plural'), '{I have some bread}'],
        ['{any}', T('negação, pergunta'), T('plural'), "{I don't have any bread}"],
        ['{no}', T('negação direta'), T('plural'), '{No man is perfect}'],
        ['{every}', T('todos, conjunto'), T('singular'), '{Every man dies}'],
        ['{each}', T('um a um'), T('singular'), '{Each man dies}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('The dog wagged it is tail'),
      T('The dog wagged its tail'),
      T("The dog wagged it's tail"),
      T('The dog wagged his tail'),
    ],
    answer: 1,
    hint: T('Its é possessivo e não tem apóstrofo; it is é que se contrai.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete o possessivo: 'The book is ___. ' (dela)"),
      answer: 'hers',
    },
    { kind: 'fill', prompt: T("Complete com pronome objeto: 'They called ___.'"), answer: 'me' },
    {
      kind: 'match',
      prompt: T('Ligue a série ao exemplo.'),
      pairs: [
        { a: T('demonstrativo plural próximo'), b: '{these}' },
        { a: T('demonstrativo plural distante'), b: '{those}' },
        { a: T('relativo de posse'), b: '{whose}' },
        { a: T('relativo de objeto'), b: '{whom}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Every students are ready'),
        T('Every student is ready'),
        T('Each students is ready'),
        T('Every students is ready'),
      ],
      answer: 1,
    },
  ],
};
