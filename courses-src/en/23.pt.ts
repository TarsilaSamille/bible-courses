import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Preposições: a lista que o aluno vai errar'),
  subtitle: T('depend on, consist of, believe in — o que não se traduz'),
  section: T('Preposições'),
  body: C(`## Duplas que não se traduzem

A primeira dupla é {to}, {into} e {onto}. {To} marca apenas a direção ({go to school}); {into} marca a passagem para dentro ({go into the room}); {onto} marca a chegada a uma superfície ({jump onto the table}). O português diz "ir para" nas três, e é por isso que {into} e {onto} somam à lista de erros.

A segunda dupla é {from}, {of} e {off}. {From} marca origem e também fim ({from Monday to Friday}, {ten miles from here}); {of} é a preposição de relação, a que liga um substantivo ao que o qualifica ({the word of God}); {off} marca separação ({take the book off the table}, {fall off the horse}).

A terceira, que só aparece em {into} e {out of}, é a mais sutil: {out of} significa origem ({out of the room}) e também proporção ({three out of ten}).

## Verbo mais preposição

A parte mais cara do inglês para quem traduz do português é o grupo em que **o verbo vem acompanhado de uma preposição que não se traduz**. {Depend on}, {consist of}, {believe in}, {listen to}, {wait for}, {agree with}, {apologize for}, {object to}, {insist on}.

João 11:26 na KJV traz {he that believeth in me, though he were dead, shall live}. O {in} depois de {believeth} não traduz o português: o verbo {believe} é o mesmo nos dois idiomas, e a preposição é acréscimo do inglês.

A lista não é deduzível, e é por isso que vale como vocabulário e não como regra. O que dá para fazer é aprender o **verbo inteiro**: {insist on}, {insiste em}; {object to}, {objeta a}. Aprendendo o par, a preposição vem junto sem custo.

A mesma partícula pode mudar de sentido conforme o verbo: {look at} é olhar, {look for} é procurar e {look after} é cuidar. É o caso raro em que o mesmo verbo muda de sentido com a preposição em vez de ganhar um sentido novo.

## Três verbos que o português aproxima

{Borrow} é pegar emprestado, {lend} é emprestar e {rent} é alugar por período. O português usa um verbo só para as duas primeiras direções, e a distinção é exatamente a que o aluno precisa: quem recebe emprestado {borrows}, quem dá {lends}. Com {rent} não há conversa: alugar por período é {rent} e alugar por uma noite de hotel é {rent} também, o que muda é o objeto.

{Bring} é trazer algo que está vindo junto comigo, {take} é levar algo que eu mesmo vou buscar, e {carry} é carregar, com o peso da coisa em primeiro plano. {Bring me the book} traz o livro que está aqui; {take me the book} vai buscar o livro e traz; {carry the box} diz o que a mão faz.

A KJV usa {gave} sem preposição em Mateus 25:35, com {I was hungry, and ye gave me meat}. Quem {borrows} e quem {lends} aparecem em prosa, não no texto bíblico, e por isso é a parte do vocabulário que o aluno precisa montar sozinho.

## Onde a preposição fica

A preposição pode ir para o fim da oração, e essa é a prática mais comum depois de um pronome relativo: {the man I spoke to}, {the book she looked at}. O aluno hesita e costuma recolocar tudo no meio, produzindo {the man to who I spoke}, que é possível e mais formal.

Com verbo no {ing}, a preposição fica antes: {by looking at}, {for waiting for}, {thank you for coming}. Com verbo no infinitivo, a preposição vai para dentro do {to}: {I agree to it}, {I insist on it}, {he objects to it}.`),
  vocab: [
    V('depend on', 'depend', 'depender de'),
    V('consist of', 'consist', 'consistir em'),
    V('believe in', 'believe', 'crer em'),
    V('listen to', 'listen', 'ouvir, escutar'),
    V('wait for', 'wait', 'esperar por'),
    V('agree with', 'agree', 'concordar com'),
    V('apologize for', 'apologize', 'pedir desculpas por'),
    V('object to', 'object', 'opor-se a'),
    V('insist on', 'insist', 'insistir em'),
    V('look at', 'look', 'olhar para'),
    V('look for', 'look', 'procurar'),
    V('look after', 'look', 'cuidar de'),
    V('borrow', 'borrow', 'pegar emprestado'),
    V('lend', 'lend', 'emprestar'),
    V('rent', 'rent', 'alugar'),
    V('carry', 'carry', 'carregar'),
    V('bring', 'bring', 'trazer'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'To marca direção; into marca entrada em um espaço; onto marca chegada a uma superfície.',
      ),
    },
    {
      n: '2',
      text: T(
        'From marca origem e fim; of liga o substantivo ao que o qualifica; off marca separação.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbo mais preposição se aprende como unidade: depend on, consist of, believe in, listen to.',
      ),
    },
    { n: '4', text: T('Borrow é pegar emprestado, lend é emprestar e rent é alugar por período.') },
    {
      n: '5',
      text: T('Depois de pronome relativo, a preposição vai para o fim: the man I spoke to.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 11:26 traz believeth in me, com preposição que não corresponde a nada em português. Mateus 25:35 traz gave me meat, com verbo sem preposição nenhuma. Os dois casos são o mesmo fenômeno visto dos dois lados.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve "I depend of" ou "she listens him", o problema é que traduziu o verbo sozinho. A preposição do inglês não traduz nada: ela é parte do verbo.',
      ),
    },
  ],
  examples: [
    { text: '{he that believeth in me}', gloss: T('aquele que crê em mim') },
    { text: '{It all depends on the weather}', gloss: T('tudo depende do tempo') },
    {
      text: '{The team consists of twelve players}',
      gloss: T('o time é formado por doze jogadores'),
    },
    { text: '{go into the room}', gloss: T('entrar na sala') },
    { text: '{jump onto the table}', gloss: T('pular sobre a mesa') },
    { text: '{take the book off the table}', gloss: T('tirar o livro da mesa') },
    { text: '{three out of ten}', gloss: T('três em dez') },
    { text: '{the man I spoke to}', gloss: T('o homem com quem falei') },
    { text: '{Can I borrow your pen}', gloss: T('Posso pegar sua caneta emprestada?') },
    { text: '{Can you lend me your pen}', gloss: T('Você pode me emprestar sua caneta?') },
    { text: '{Bring me the book}', gloss: T('traga-me o livro') },
  ],
  tables: [
    {
      caption: T('Duplas que não se traduzem'),
      head: [T('Par'), T('Diferença'), T('Exemplo')],
      rows: [
        ['{to}', T('direção, sem chegada interna'), '{go to school}'],
        ['{into}', T('movimento para dentro'), '{go into the room}'],
        ['{onto}', T('movimento para uma superfície'), '{jump onto the table}'],
        ['{from}', T('origem e fim'), '{from nine to five}'],
        ['{of}', T('relação, possessão'), '{the word of God}'],
        ['{off}', T('separação'), '{take it off the table}'],
      ],
    },
    {
      caption: T('Verbo mais preposição'),
      head: [T('Verbo'), T('Preposição'), T('Frase')],
      rows: [
        ['{depend}', '{on}', '{It depends on you}'],
        ['{consist}', '{of}', '{It consists of four parts}'],
        ['{believe}', '{in}', '{believe in him}'],
        ['{listen}', '{to}', '{listen to me}'],
        ['{wait}', '{for}', '{wait for the answer}'],
        ['{agree}', '{with}', '{agree with you}'],
      ],
    },
    {
      caption: T('Os verbos que o português aproxima'),
      head: [T('Inglês'), T('Português'), T('Direção')],
      rows: [
        ['{borrow}', T('pegar emprestado'), T('eu recebo emprestado')],
        ['{lend}', T('emprestar'), T('eu dou emprestado')],
        ['{rent}', T('alugar por período'), T('eu pago e uso')],
        ['{bring}', T('trazer'), T('vem junto comigo')],
        ['{take}', T('levar'), T('vou buscar e levo')],
        ['{carry}', T('carregar'), T('com o peso em primeiro plano')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('It depends of the weather'),
      T('It depends on the weather'),
      T('It depends in the weather'),
      T('It depends at the weather'),
    ],
    answer: 1,
    hint: T('Depend leva sempre on.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'The team consists ___ twelve players.'"), answer: 'of' },
    {
      kind: 'fill',
      prompt: T("Complete: '___ I borrow your pen?' (pedir emprestado)"),
      answer: 'Can',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à preposição.'),
      pairs: [
        { a: 'depend', b: 'on' },
        { a: 'consist', b: 'of' },
        { a: 'believe', b: 'in' },
        { a: 'listen', b: 'to' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('She listens him'),
        T('She listens to him'),
        T('She listens for him'),
        T('She listens him to'),
      ],
      answer: 1,
    },
  ],
};
