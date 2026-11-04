import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Verbo'),
  title: T('Negação e pró-hibição'),
  subtitle: T('tidak, bukan, jangan, belum: três negativas e uma estrutura'),
  body: C(`## Três negativas, três alvos

O português tem uma negação só e a coloca em três posições: {não vem}, {não é bom}, {não venha}. O indonésio tem três palavras, e cada uma tem um alvo. Errar aqui é o erro mais visível que um falante de português comete, porque a frase continua parecendo correta.

{tidak} nega verbo e predicado. Vai imediatamente antes do verbo, e é o que se usa em quase toda negação: {Dia tidak datang}, {Ini tidak sulit}, {Dia tidak bekerja keras}.

{bukan} nega cópula e nome. Vai antes do nome ou do sintagma que nega, e nunca depois do verbo: {Ini bukan buku}, {Dia bukan guru}, {bukan saya yang menulis}. E é a única resposta possível a um {adalah} negativo: {Ini bukan buku}, nunca {Ini tidak buku}.

{jangan} nega a ordem. Não é uma negação comum: é o proibitivo, e muda o que a frase está fazendo. {Jangan datang} «não venha», {Jangan mencuri} «não roube», {Jangan lupa membawa buku} «não esqueça de trazer o livro».

A regra prática é uma pergunta: **o que está sendo negado?** Se é uma ação ou um predicado, {tidak}. Se é uma identidade ou uma coisa, {bukan}. Se é uma ordem, {jangan}.

E há um caso em que {tidak} precede o que parece um substantivo, e não é {bukan}: {tidak banyak}, {tidak sulit}, {tidak lama}, {tidak jauh}. São adjetivos usados como advérbio, e a negação os alcança como alcança o verbo. {Tidak banyak orang datang} «não veio muita gente». Quem escreve {bukan banyak} produz uma frase que existe, com outro sentido.

## belum e sudah: uma estrutura

{belum} não é uma negação como {tidak}. Ele marca um estado que vai até um ponto no tempo e ainda não o ultrapassou, e por isso vem acompanhado de {sudah} como resposta.

{belum datang} «ainda não chegou». A resposta é {sudah datang} «já chegou», e a pergunta que faz par é {sudah?}, que espera uma das duas.

O que torna {belum} uma estrutura e não uma palavra é a série de três. {belum} é a ação não feita até agora; {sudah} é a ação feita; e {akan} é a ação que ainda vai acontecer. As três se combinam em frases que têm o tempo inteiro numa palavra: {Dia belum datang} «ainda não chegou», {Dia sudah datang} «já chegou», {Dia akan datang} «virá».

Com {masih} a coisa aperta: {dia masih belum datang} «ele ainda não chegou», que é o sentido mais comum no relato bíblico, porque o texto está descrevendo uma espera. E {sudah belum} também existe, com sentido de «já... e ainda não», quando a segunda oração vem depois: {Sudah aku selesai membaca, belum semua selesai}.

E há {juga} e {pun}, que reforçam: {belum juga} «ainda não mesmo», {belum pun} «nem ainda». {Dia belum juga datang} «ele ainda não chegou, e continua sem chegar», que é mais enfático do que {belum} sozinho.

O ponto que trava leitura é que {tidak} e {belum} **não** se combinam. {Dia tidak belum datang} é errado, e a correção não é {tidak belum} nem {belum tidak}: é escolher um dos dois. Para «ainda não», escreva {belum}; para «não chego», escreva {tidak}. E para «ainda não chegou», as duas formas são {belum datang} e {tidak sudah datang}, e a segunda é a mais corrente em narração.

## As formas que não existem

Há quatro combinações que um falante de português produz sem querer, e vale saber de antemão que são impossíveis.

{tidak belum} não existe. Use {belum} ou {tidak sudah}.
{bukan tidak} não existe. O é {tidak bukan}, que é o contrário: «é mesmo».
{tidak bukan} significa «com certeza é». {Ini tidak bukan benar} «isto é mesmo verdadeiro».
{jangan tidak} é redundante. {Jangan tidak datang} tem sentido de «não deixe de vir», e quase nunca é o que se quer; para proibir vir, escreva {jangan datang}.

E há o que se pode dizer em vez disso. Para uma proibição que pede atenção em vez de negar uma ação, a forma é {jangan lupa}: {Jangan lupa menggosok gigi} «não esqueça de lavar os dentes», que é proibição de uma ação e não negação dela.

Uma negativa interrogativa, «não é verdade que ele veio?», se faz com {bukan} e não ao contrário do que o português faz. {Bukannya dia yang datang?} «não foi ele que veio?», e a resposta esperada é {benar} «é verdade» ou {bukan} «não». «Não é mesmo que...?» em português vira aqui {Bukannya...}, com {bukan} na frente.

## Janganlah kamu cemas tentang hari esok

{Matius 6:34} é a passagem onde a proibição aparece em estado puro: {Janganlah kamu cemas tentang hari esok}. O {janganlah} é o proibitivo com {lah} de ênfase, e o {cemas} é um verbo de estado sem {ada}, e funciona como um adjetivo que descreve um estado de quem fala.

Repare no que o versículo não faz: ele não diz {tidak cemas}, que seria uma negated statement, e sim {janganlah kamu cemas}, que é uma ordem sobre o comportamento de quem ouve. O grego original usa o imperativo negativo, e o indonésio também, porque é a única coisa que faz sentido numa recomendação.

O resto do versículo usa {akan} mais verbo. A TB resolve a parte final com {akan lebih baik}, e é por isso que o tradutor precisa saber que {akan} não é futuro e sim uma expectativa sobre o que vai acontecer.

E a frase imediatamente anterior, {Janganlah kamu cemas tentang hidup}, tem a mesma construção. Duas proibições, dois {janganlah}, e nenhuma negação comum pelo caminho. Quem sabe o sistema lê as duas frases sem esforço; quem não sabe procura a palavra «não» e não a encontra.`),
  vocab: [
    V('tidak', 'tidak', 'não (verbo)'),
    V('bukan', 'bukan', 'não (cópula, nome)'),
    V('jangan', 'jangan', 'não (proibição)'),
    V('belum', 'belum', 'ainda não'),
    V('sudah', 'sudah', 'já'),
    V('akan', 'akan', 'vai'),
    V('masih', 'masih', 'ainda'),
    V('juga', 'juga', 'também'),
    V('pun', 'pun', 'nem'),
    V('cemas', 'cemas', 'preocupar-se'),
    V('hari esok', 'hari esok', 'o dia seguinte, amanhã'),
    V('hidup', 'hidup', 'vida, viver'),
    V('lupa', 'lupa', 'esquecer'),
    V('banyak', 'banyak', 'muitos'),
    V('sulit', 'sulit', 'difícil'),
    V('benar', 'benar', 'verdade'),
    V('bukan', 'bukan', 'não (na pergunta)'),
    V('datang', 'datang', 'vir'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tidak} nega verbo e predicado e vai antes dele; {bukan} nega nome e cópula; {jangan} nega a ordem.',
      ),
    },
    {
      n: '2',
      text: T(
        '{tidak} também nega adjetivo adverbializado: {tidak banyak}, {tidak sulit}, {tidak lama}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{belum} responde a {sudah} e nunca se combina com {tidak}: {tidak belum datang} é errado.',
      ),
    },
    {
      n: '4',
      text: T(
        'A resposta a {belum datang} é {sudah datang}; a pergunta correspondente é {sudah?}.',
      ),
    },
    { n: '5', text: T('A negativa interrogativa usa {bukannya} e espera {benar} ou {bukan}.') },
  ],
  notes: [
    {
      label: T('Por que o não não basta'),
      text: T(
        'A negação indonésia é dividida porque o português põe o «não» em três posições e o indonésio tem de escolher. Quem traduz do português diz {tidak buku} onde o texto tem {bukan buku}, e a diferença não é de estilo: uma nega a existência, a outra nega a identidade.',
      ),
    },
    {
      label: T('A força de juga e pun'),
      text: T(
        '{juga} acrescenta «ainda» à negação, e {pun} acrescenta «nem». {Belum juga} e {belum pun} são mais fortes que {belum}, e a diferença aparece sobretudo no texto bíblico, onde o relato de uma espera repetida depende dela.',
      ),
    },
  ],
  examples: [
    { text: 'Dia tidak datang.', gloss: T('Ele não vem.') },
    { text: 'Ini bukan buku.', gloss: T('Isto não é um livro.') },
    { text: 'Jangan datang.', gloss: T('Não venha.') },
    { text: 'Tidak banyak orang datang.', gloss: T('Não veio muita gente.') },
    { text: 'Ini tidak sulit.', gloss: T('Isto não é difícil.') },
    { text: 'Dia belum datang.', gloss: T('Ele ainda não chegou.') },
    { text: 'Sudah?', gloss: T('Já?') },
    { text: 'Dia masih belum datang.', gloss: T('Ele ainda não chegou.') },
    { text: 'Dia belum juga datang.', gloss: T('Ele ainda não chegou mesmo.') },
    { text: 'Bukannya dia yang datang?', gloss: T('Não foi ele que veio?') },
  ],
  tables: [
    {
      caption: T('As três negativas e o que negam'),
      head: ['Palavra', 'Alvo', 'Exemplo', 'Leia como'],
      rows: [
        ['tidak', 'verbo, predicado', 'Dia tidak datang.', 'ele não vem'],
        ['tidak', 'adjetivo adverbial', 'Tidak sulit.', 'não é difícil'],
        ['bukan', 'cópula, nome', 'Ini bukan buku.', 'isto não é um livro'],
        ['bukan', 'sujeito', 'Bukan saya yang tulis.', 'não fui eu que escrevi'],
        ['jangan', 'ordem', 'Jangan datang.', 'não venha'],
        ['jangan', 'hábito', 'Jangan mencuri.', 'não roube'],
        ['belum', 'ação até agora', 'Dia belum datang.', 'ainda não chegou'],
      ],
    },
    {
      caption: T('A série de três'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['belum', 'já aconteceu?', 'Dia belum datang.', 'ainda não chegou'],
        ['sudah', 'já aconteceu?', 'Dia sudah datang.', 'já chegou'],
        ['akan', 'vai acontecer?', 'Dia akan datang.', 'virá'],
        ['masih belum', 'ainda por quê?', 'Dia masih belum datang.', 'ainda não chegou'],
        ['sudah?', 'qual das duas?', 'Sudah?', 'já?'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a negação correta de «isto não é um livro»?'),
    options: [T('Ini bukan buku'), T('Ini tidak buku'), T('Ini jangan buku'), T('Ini belum buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «ele ainda não chegou» = Dia ___ datang.'),
      answer: 'belum',
      hint: T('A palavra que responde a {sudah}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual destas frases está correta?'),
      options: [
        T('Dia tidak belum datang'),
        T('Dia belum datang'),
        T('Dia belum tidak datang'),
        T('Dia bukan belum datang'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue a negativa ao alvo'),
      pairs: [
        { a: T('{tidak}'), b: T('verbo') },
        { a: T('{bukan}'), b: T('nome') },
        { a: T('{jangan}'), b: T('ordem') },
        { a: T('{belum}'), b: T('até agora') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
