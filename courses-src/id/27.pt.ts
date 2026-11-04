import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Preposições'),
  title: T('Partículas e preposições'),
  subtitle: T('di, ke, dari, pada, untuk, dengan, oleh, dalam, antara'),
  body: C(`## Nove preposições e o que cada uma faz

O português tem dezenas de preposições e nenhuma delas serve para outra coisa. O indonésio tem nove que fazem todo o serviço, e a função de cada uma é previsível.

{di} é lugar e tempo parado: {di rumah}, {di sekolah}, {di hari Minggu}, {di bulan Januari}. {ke} é direção: {ke rumah}, {ke sekolah}, {ke Betlehem}. {dari} é origem: {dari rumah}, {dari Betlehem}, {dari mana} «de onde».

{untuk} é finalidade e destinatário: {untuk Anda}, {untuk semua}, {untuk lahir}. {dengan} é companhia e instrumento: {dengan saya}, {dengan tangan}. {oleh} é agente de passiva: {ditulis oleh Petrus}.

{dalam} é interior e abstrato: {dalam rumah}, {dalam hati}, {dalam perjalanan}. {antara} é relação entre dois: {antara kamu dan saya}, {antara dua jalan}. E {tentang} é assunto: {kitab tentang Yohanes}.

Com nome próprio, {di} e {ke} se comportam de maneira previsível e útil: {di} mais nome próprio é onde o lugar está, {ke} mais nome próprio é para onde se vai. {Di Betlehem} «em Belém» é onde os magos estavam; {ke Betlehem} «para Belém» é o movimento. A mesma cidade, as duas preposições.

## di e ke: o par que o português não tem

O português não opõe lugar e direção da mesma maneira. Ele diz {em casa} e {para casa}, {na cidade} e {para a cidade}, e o leitor precisa decorar qual preposição vai com qual substantivo. O indonésio faz a opposition ser uma regra, e a regra vale para todos os substantivos sem exceção.

**{di} é onde a coisa está; {ke} é para onde ela vai.** {Buku itu di meja} «o livro está na mesa». {Buku itu ke mana?} «o livro vai para onde?». {Saya ke sekolah} «vou para a escola». {Saya di sekolah} «estou na escola».

A confusão entre as duas produz o erro mais visível de leitura, e o sintoma é fácil de reconhecer: quem entende mal escreve {ke} onde o texto tinha {di} e produz uma frase que descreve movimento onde o original descreve estado. É o tipo de erro que não muda o sentido das palavras e muda o sentido da frase.

As duas também se combinam com o clítico, e a forma é a mesma nos dois casos: {dirumahnya} «na casa dele», {kerumahnya} «para a casa dele». A diferença está na preposição, não no resto.

E há um grupo de palavras que as duas preposições produzem, que é o {-an} nominal: {ke-an} dá {taman} «o ir para o jardim» e também «o jardim». São substantivos que nasceram de uma preposição e que hoje valem para lugar e para direção ao mesmo tempo. O sintoma é o mesmo substantivo depois das duas: {ke jalan} e {di jalan}, e o contexto é o único que sabe qual é qual.

## oleh, dengan, pada: as três que se confundem

Três preposições com funções diferentes e um erro comum entre elas.

{oleh} só trabalha como agente. {Surat itu ditulis oleh Petrus} «a carta é escrita por Pedro», {Yang rusak itu diperbaiki oleh perusahaan} «aquilo que quebrou foi consertado pela empresa». Fora da passiva, {oleh} significa «marca»: {tanda oleh Petrus} «a marca de Pedro». O tradutor que traduz {oleh} por «por» em qualquer contexto produz «a marca por Pedro», que é uma frase diferente.

{dengan} tem duas faces e elas não se misturam. Com ser humano, é companhia: {dengan saya}, {dengan Petrus}. Com instrumento, é meio: {dengan tangan}, {dengan pisau}, {dengan tali}. E com abstrato, é relação: {dengan kasih sayang} «com amor». A diferença é que companhia exige uma pessoa e instrumento exige uma coisa, e o que está depois de {dengan} diz qual das duas é.

{pada} é a preposição literária e a clítica. Em texto escrito, {pada} marca lugar e tempo com um tom de formalidade: {pada hari pertama}, {pada masa itu}. Com pronome, vira clítico: {kepadamu} «a ti», {padanya} «a ele», {beri padanya} «dar-lhe». E {pada} tem um uso que nenhuma outra tem: {pada anggap dia guru} «considerado mestre», {pada anggap dia terbaik} «considerado o melhor». Aqui {pada} marca a função de um termo, não o lugar dele.

A regra para não confundir: **pergunte se o termo é um lugar, uma pessoa, uma coisa ou uma função.** Lugar parado é {di} ou {dalam}; lugar de destino é {ke}; pessoa ou coisa que acompanha é {dengan}; objeto da passiva é {oleh}; função é {pada}.

## Ke Betlehem, di Betlehem

{A história dos magos}, em {Matius 2:11}, tem as duas preposições na mesma frase, e é por isso que ela é o melhor exemplo de {di} e {ke} que existe.

O texto diz que eles foram {ke Betlehem} e que entraram {di rumah}. A primeira preposição marca o movimento da cidade para a cidade, a segunda marca a posição dentro da casa. O português faz a mesma coisa com {para Belém} e {na casa}, mas quem traduz por correspondência palavra a palavra escreve {ke rumah} para o segundo termo e produz «para a casa», que é um movimento e não um lugar.

O mesmo versículo traz {di dalam rumah}, que junta as duas: {dalam} diz interior e {di} diz lugar. É uma marca de que a preposição composta {di dalam} é mais informativa do que {di} sozinho, e o leitor de texto bíblico vai encontrá-la em toda parte.

E o versículo termina com {sembah} mais objeto direto, o que mostra outra coisa. O mesmo vale para a preposição: a preposição mostra a relação, e a relação se lê no verbo que está em volta dela.`),
  vocab: [
    V('di', 'di', 'em, no (lugar, tempo)'),
    V('ke', 'ke', 'a, para (direção)'),
    V('dari', 'dari', 'de, desde (origem)'),
    V('daripada', 'dari', 'do que (comparação)'),
    V('pada', 'pada', 'em (formal), como função'),
    V('untuk', 'untuk', 'para'),
    V('dengan', 'dengan', 'com'),
    V('oleh', 'oleh', 'por (agente)'),
    V('dalam', 'dalam', 'dentro, em (interior, abstrato)'),
    V('antara', 'antara', 'entre'),
    V('tentang', 'tentang', 'sobre, a respeito de'),
    V('rumah', 'rumah', 'casa'),
    V('meja', 'meja', 'mesa'),
    V('sekolah', 'sekolah', 'escola'),
    V('tangan', 'tangan', 'mão'),
    V('di dalam', 'dalam', 'dentro de'),
    V('Betlehem', 'Betlehem', 'Belém'),
    V('sembah', 'sembah', 'adorar, oferecer'),
  ],
  rules: [
    { n: '1', text: T('{di} é lugar e tempo parado; {ke} é direção; {dari} é origem.') },
    {
      n: '2',
      text: T('Com nome próprio, {di} é onde e {ke} é para onde: {di Betlehem}, {ke Betlehem}.'),
    },
    { n: '3', text: T('{oleh} só é agente de passiva; fora dela significa «marca».') },
    {
      n: '4',
      text: T(
        '{dengan} com pessoa é companhia e com coisa é instrumento: {dengan Petrus}, {dengan tangan}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{pada} com pronome vira clítico: {kepadamu}, {padanya}; com nome marca função: {pada anggap dia guru}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O clítico na preposição'),
      text: T(
        'As preposições absorvem o clítico da mesma forma que {di} e {ke} antes do substantivo: {dirumahnya}, {kerumahnya}, {kepadamu}. A preposição não muda; o que muda é o que vem antes dela.',
      ),
    },
    {
      label: T('Onde dari vira comparação'),
      text: T(
        '{Daripada} é {dari} mais {-an} e significa «do que», para comparar: {Rumahnya lebih besar daripada rumahku}. O mesmo {-an} que faz lugar em {taman} faz comparação em {daripada}.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu di meja.', gloss: T('The book is on the table.') },
    { text: 'Saya ke sekolah sekarang.', gloss: T('I am going to school now.') },
    { text: 'Saya di sekolah sekarang.', gloss: T('I am at school now.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    { text: 'Tanda itu oleh Petrus.', gloss: T('That mark is Peter’s.') },
    { text: 'Dia datang dengan Petrus.', gloss: T('He came with Peter.') },
    { text: 'Dia memotong dengan pisau.', gloss: T('He cuts with a knife.') },
    { text: 'Ini untuk kamu.', gloss: T('This is for you.') },
    {
      text: 'Rumah ini lebih besar daripada rumahku.',
      gloss: T('This house is bigger than my house.'),
    },
    { text: 'Di dalam rumah itu ada orang.', gloss: T('Inside that house there are people.') },
  ],
  tables: [
    {
      caption: T('As nove preposições'),
      head: ['Preposição', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['di', 'lugar e tempo parado', 'di rumah', 'em casa'],
        ['ke', 'direção', 'ke rumah', 'para casa'],
        ['dari', 'origem', 'dari rumah', 'de casa'],
        ['pada', 'lugar formal, função', 'pada hari pertama', 'no primeiro dia'],
        ['untuk', 'finalidade, destinatário', 'untukmu', 'para você'],
        ['dengan', 'companhia, instrumento', 'dengan tangan', 'com a mão'],
        ['oleh', 'agente da passiva', 'ditulis oleh Petrus', 'escrito por Pedro'],
        ['dalam', 'interior, abstrato', 'dalam hati', 'no coração'],
        ['antara', 'entre dois', 'antara kamu dan saya', 'entre você e eu'],
      ],
    },
    {
      caption: T('O par que o português resolve com o substantivo'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['onde está?', 'di', 'Buku itu di meja.', 'o livro está na mesa'],
        ['para onde vai?', 'ke', 'Buku itu ke mana?', 'o livro vai para onde?'],
        ['de onde veio?', 'dari', 'Buku itu dari mana?', 'de onde veio o livro?'],
        ['com quem?', 'dengan', 'Datang dengan Petrus.', 'veio com Pedro'],
        ['com o quê?', 'dengan', 'Potong dengan pisau.', 'corta com a faca'],
        ['para quem?', 'untuk', 'Ini untuk kamu.', 'isto é para você'],
        ['feito por quem?', 'oleh', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['dentro de onde?', 'di dalam', 'di dalam rumah', 'dentro da casa'],
        ['entre o quê?', 'antara', 'antara dua jalan', 'entre duas ruas'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Saya di sekolah}, a preposição indica?'),
    options: [
      T('posição: estou na escola'),
      T('direção: vou para a escola'),
      T('origem: vim da escola'),
      T('destinatário: é para a escola'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com direção: «vou para casa» = saya ___ rumah.'),
      answer: 'ke',
      hint: T('A preposição de destino.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {Surat itu ditulis ___ Petrus}, qual preposição completa a frase?'),
      options: [T('oleh'), T('dengan'), T('untuk'), T('dalam')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a preposição à função'),
      pairs: [
        { a: T('{di}'), b: T('lugar parado') },
        { a: T('{ke}'), b: T('direção') },
        { a: T('{dari}'), b: T('origem') },
        { a: T('{oleh}'), b: T('agente') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
