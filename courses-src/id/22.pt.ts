import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Verbo'),
  title: T('O verbo: o sistema de aspecto'),
  subtitle: T('menulis e menuliskan: o par que mais muda o sentido'),
  body: C(`## A base e os quatro prefixos

O verbo indonésio tem uma base e nunca a perde. {tulis} é a base, e tudo o que o verbo faz em português, o indonésio faz colando um prefixo nela. Não há terminação de pessoa, não há mudança de vogal, não há tempo: o que muda é o afixo.

{meN-} marca ação ativo, com o objeto em foco: {menulis}, {membaca}, {melihat}.
{di-} marca passivo, com o agente em foco ou apagado: {ditulis}, {dibaca}, {dilihat}.
{ber-} marca ação intransitiva ou estado: {berjalan}, {berbicara}, {bertumbuh}.
{ter-} marca estado resultante: {tertulis}, {terbuka}, {terlihat}.

Qual dos quatro aparece depende do que a frase quer dizer, não do tempo nem da pessoa. {Surat itu ditulis} «a carta é escrita» e {Surat itu tertulis} «a carta diz, está escrita» têm a mesma base e bases de comparação diferentes.

## -kan: o verbo que ganha um segundo objeto

O sufixo {-kan} é o mais importante do verbo indonésio depois do {meN-}, e é o que a tradutora esquece com mais frequência.

{menulis} é escrever. {menuliskan} é fazer escrever, mandar escrever, escrever para alguém. {Dia menulis surat} «ele escreve uma carta». {Dia menuliskan surat} «ele manda escrever uma carta», ou «ele escreve a carta para alguém».

A leitura prática: **com {-kan}, o verbo tem dois objetos.** O primeiro é o que se escreve, o segundo é quem escreve ou quem recebe. O padrão completo é {menuliskan + carta + untuk/untuk orang}, e é exatamente o padrão grego que o Novo Testamento usa quando traduz um participio grego como «fazer escribir» ou «escrito para».

O irmão de {-kan} é {-i}, que faz quase a mesma coisa com o outro objeto: {mengisi} «encher» (com {wadah}), {memenuhi} «cumprir» (com {permintaan}), {menutupi} «cobrir» (com {permukaan}). A diferença é que {-i} aponta para o objeto que **cobre** a ação, como o recipiente cobre o que se põe dentro dele.

Quando os dois competem no mesmo verbo, o falante escolhe, e a escolha é de conteúdo e não de gramática: {menutup} «fechar» e {menutupi} «tapar por cima» são dois verbos, não o mesmo verbo de duas maneiras.

## Ler o prefixo sem dicionário

O {meN-} muda de forma conforme a primeira letra da base, e é por isso que nenhum verb indonésio se parece com outro. A regra se aprende inteira em uma linha: **antes de consoante surda, o {n} aparece; antes das outras, desaparece.**

{k}, {p}, {t}, {s}, {c} → {meng-} e {men-}: {menulis}, {membaca}, {memakai}.
{b, d, j, l, r, v} → {mem-} ou {me-}: {melihat}, {membawa}, {menari}, {membeli}.
{vogais} → {me-}: {makan}, {masuk}, {menang}.
{m}, {n}, {g}, {h}, {k} → {meng-}: {mengajar}, {menggambar}, {menggunakan}.

O mesmo vale para {di-}, {peN-} e {teN-}: {dibaca}, {digambar}, {dipakai}, {digunakan}; {penulis} «escritor», {pelajar} «estudante», {pengajar} «professor».

E há os verbos que **não** absorvem o {n}: {ber-} entra direto, {ke-} e {pe-} também. {berjalan}, {bernyanyi}, {ketawa}, {penanggalan} «data».

Duas coisas que valem antes de errar: os verbos emprestados, como {telepon}, {parkir} e {scan}, que não têm prefixo nenhum, e o {n} que às vezes aparece por costume ({mengajarkan}) e às vezes não ({mengajar}).

## O aspecto mora fora do verbo

Como o verbo não flexiona, o aspecto não está nele. Ele vem de três advérbios que já appeared: {sedang} mais verbo dá o progressivo, {sudah} mais verbo dá o passado, {akan} mais verbo dá o futuro.

{menulis} sozinho pode ser «está escrevendo», «escreve», ou «escreveu», conforme o que vem antes. Com {sedang} não há dúvida: {sedang menulis} «está escrevendo». Sem nada, o verbo fica no neutro, e quem traduz tem de escolher.

O par {-kan} faz o trabalho que o grego faz com o aoristo e o imperfeito. {Dia menulis surat} e {Dia menuliskan surat} não são o mesmo verbo em dois tempos: no primeiro o objeto é o que ele mesmo escreve; no segundo há alguém de fora, e a ação vem de fora. Um tradutor que não conhece o sufixo escreve as duas com o mesmo verbo e perde o agente.

Em {Yohanes 4:34} o texto usa {akan} mais verbo para o futuro de forma quase automática. O grego tinha o tempo, o indonésio tem a palavra {akan}, e quem lê procurando flexão não encontra nada que variação.`),
  vocab: [
    V('tulis', 'tulis', 'escrever'),
    V('menulis', 'tulis', 'escrever'),
    V('menuliskan', 'tulis', 'fazer escrever'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('tertulis', 'tulis', 'estar escrito'),
    V('penulis', 'tulis', 'escritor'),
    V('baca', 'baca', 'ler'),
    V('membaca', 'baca', 'ler'),
    V('lihat', 'lihat', 'ver'),
    V('melihat', 'lihat', 'ver'),
    V('isi', 'isi', 'encher'),
    V('mengisi', 'isi', 'encher'),
    V('memenuhi', 'penuhi', 'cumprir'),
    V('tutup', 'tutup', 'fechar'),
    V('menutupi', 'tutup', 'tapar'),
    V('berjalan', 'jalan', 'caminhar'),
    V('sedang', 'sedang', 'estar a'),
    V('sudah', 'sudah', 'já'),
    V('akan', 'akan', 'vai'),
  ],
  rules: [
    { n: '1', text: T('O verbo não flexiona: a base é sempre a mesma e o que muda é o prefixo.') },
    {
      n: '2',
      text: T(
        '{meN-} é ativo, {di-} é passivo, {ber-} é intransitivo ou de estado, {ter-} é estado resultante.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com {-kan} o verbo ganha um segundo objeto: {menuliskan surat untuk orang} «fazer escrever uma carta para alguém».',
      ),
    },
    {
      n: '4',
      text: T(
        'Com {-i} o segundo objeto é o que cobre a ação: {memenuhi permintaan} «cumprir um pedido».',
      ),
    },
    {
      n: '5',
      text: T('O {n} do {meN-} aparece antes de {k}, {p}, {t}, {s} e {c}: {menulis}, {membaca}.'),
    },
  ],
  notes: [
    {
      label: T('Onde a forma não é transparente'),
      text: T(
        'Há verbos lexicalizados em que o prefixo já não se lê: {terjadi} «acontecer» não é «ficarjadi», e {berbicara} não é «ter + bicara» no sentido de alguém fala. O sistema funciona como regra de formação, e uma lista de verbos stubborn continua necessária.',
      ),
    },
    {
      label: T('Préstimos e prefixos'),
      text: T(
        'Verbos emprestados são usados sem prefixo e sem assimilação: {telepon}, {parkir}, {scan}. Quando aparece {meng-}, é porque o verbo foi integrado: {mengDX} e {memotret} já são rotina.',
      ),
    },
  ],
  examples: [
    { text: 'Dia menulis surat.', gloss: T('Ele escreve uma carta.') },
    {
      text: 'Dia menuliskan surat untuk temannya.',
      gloss: T('Ele manda escrever uma carta para o amigo.'),
    },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('A carta é escrita por Pedro.') },
    { text: 'Surat itu tertulis di atas salib.', gloss: T('A carta está escrita acima da cruz.') },
    { text: 'Dia sedang menulis.', gloss: T('Ele está escrevendo.') },
    { text: 'Dia sudah menulis surat.', gloss: T('Ele já escreveu a carta.') },
    { text: 'Dia akan menulis surat.', gloss: T('Ele vai escrever a carta.') },
    { text: 'Dia memenuhi permintaan itu.', gloss: T('Ele cumpre aquele pedido.') },
    { text: 'Hujan mengisi jalan.', gloss: T('A chuva enche a rua.') },
    { text: 'Murid itu menulis.', gloss: T('Aquele aluno escreve.') },
  ],
  tables: [
    {
      caption: T('Os quatro prefixos'),
      head: ['Prefixo', 'Valor', 'Exemplo', 'Leia como'],
      rows: [
        ['meN-', 'ação ativa', 'menulis', 'escreve'],
        ['di-', 'ação passiva', 'ditulis', 'é escrito'],
        ['ber-', 'intransitivo ou estado', 'berjalan', 'caminha'],
        ['ter-', 'estado resultante', 'tertulis', 'está escrito'],
        ['peN-', 'agente ou instrumento', 'penulis', 'escritor'],
        ['ke-', 'ser algo por natureza', 'ketawa', 'ri-se'],
        ['peN-an', 'ação nominalizada', 'pekerjaan', 'trabalho'],
      ],
    },
    {
      caption: T('A assimilação do prefixo meN-'),
      head: ['Primeira letra da base', 'Prefixo', 'Exemplo', 'Leia como'],
      rows: [
        ['k, p, t, s, c', 'men-', 'menulis', 'escrever'],
        ['k, p, t, s, c', 'mem-', 'membaca', 'ler'],
        ['m, n, w, y', 'men-', 'menari', 'dançar'],
        ['g, h, k', 'meng-', 'mengajar', 'ensinar'],
        ['vogal', 'me-', 'masuk', 'entrar'],
        ['b, d, j, l', 'mem-', 'membawa', 'levar'],
        ['r, l, w, y, vowel', 'me-', 'melihat', 'ver'],
      ],
    },
    {
      caption: T('O sufixo que cria um segundo objeto'),
      head: ['Sufixo', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['-kan', 'quem faz ou quem recebe', 'menuliskan surat', 'fazer escrever uma carta'],
        ['-i', 'o que cobre a ação', 'memenuhi permintaan', 'cumprir um pedido'],
        ['-kan', 'o que recebe', 'mengirimkan surat', 'enviar uma carta'],
        ['-i', 'o recipiente', 'mengisi wadah', 'encher o recipiente'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que distingue {menulis} de {menuliskan}?'),
    options: [
      T('o segundo tem {-kan}: «fazer escrever»'),
      T('o segundo é o passado'),
      T('o segundo é o plural'),
      T('o segundo é a passiva'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o prefixo: «ele escreve» = ___ tulis.'),
      answer: 'Me',
      hint: T('Prefixo do verbo ativo, sem {n} antes de {t}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma passiva de {membaca}?'),
      options: [T('dibaca'), T('terbaca'), T('berbaca'), T('kebaca')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o prefixo ao valor'),
      pairs: [
        { a: T('{meN-}'), b: T('ativo') },
        { a: T('{di-}'), b: T('passivo') },
        { a: T('{ber-}'), b: T('intransitivo') },
        { a: T('{ter-}'), b: T('estado resultante') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
