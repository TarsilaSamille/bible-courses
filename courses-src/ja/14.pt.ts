import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Verbo'),
  title: T('Com ou sem objeto: a mesma flexão, duas frases'),
  subtitle: T(
    'O verbo japonês não flexiona por ter ou não ter objeto: o que diz se há objeto é a partícula {wo}, e só ela',
  ),
  body: C(`
## A mesma flexão dos dois lados

Verbo **transitivo** é o que recebe objeto; verbo **intransitivo** é o que não recebe. Em português isso aparece na forma: "eu chego" e "eu chego ele" flexionam diferente, e é por isso que o iniciante diz "ele chegou-o" sem perceber que está comendo uma frase impossível. O japonês não tem essa distinção na forma. **A flexão é a mesma nos dois casos.**

Compare {taberu} "comer" e {nemuru} "dormir": os dois são verbos da primeira conjugação, os dois tiram o mesmo ru. {hon o taberu} é "como um livro", {nemuru} é "dorme". A terminação do verbo é idêntica; o que muda é se há nome depois do {wo}. Se você traduziu "ele dorme" como "ele dorme-o", não foi a flexão que falhou, foi a partícula que você inventou.

Isso vale para a segunda conjugação também: {shinu} "morrer" e a raiz de "ouvir" tiram o mesmo i. Não existe forma japonesa de "morri-o".

## O teste: ponha o {wo} depois

O teste prático cabe numa frase: ponha o {wo} depois do verbo. Se couber e fizer sentido, o verbo é transitivo; se não couber, é intransitivo. {hon o taberu} funciona, "um livro, como". {nemuru} não funciona, ninguém dorme um livro.

E o resultado do teste é imediato para as listas mais usadas do dia a dia. Do lado do objeto: {taberu}, {nomu}, {hon o yomu}, {hon o kaku}, {hon o miru}, {mimi o kiku}, {hon o hiraku}, {hon o tojiru}. Do lado sem objeto: {iku}, {kuru}, {nemuru}, {okiru}, {shinu}, {warau}, {naku}. Uma dúzia de verbos e você já resolve metade das frases.

A consequência é a parte que os iniciantes esquecem: **o verbo não te diz se há objeto.** A flexão é uma só, e por isso ela não pode carregar essa informação. O que te diz é a partícula, e se o {wo} não está lá, ou a frase está incompleta, ou o verbo é intransitivo e não queria objeto nenhum. O trabalho de decidir cabe ao {wo}, não ao verbo. Por isso o {wo} é a informação da frase, e o verbo é só o resto.

## {hairu}: o par que o contexto resolve

Há um verbo que é as duas coisas ao mesmo tempo, e é o melhor teste de que a partícula é quem decide. O verbo {hairu} aceita objeto ou não, e a flexão é a mesma nos dois casos.

{ie ni hairu} é "entro em casa": {hairu} aqui é intransitivo, e {ie ni} diz para onde. {hon o ie ni hairu} é "o livro cabe em casa": {hairu} aqui é transitivo, "fazer caber", e o {wo} está lá marcando o livro como aquilo que entra. Duas frases, um verbo, a mesma terminação, e o único sinal é a presença do {wo} depois do nome.

É o que impede o erro simétrico: "ele entrou-o" não é uma frase que o japonês possa formar, mas também "ele entrou" não é a única forma. O que muda é o que o verbo está olhando. Sem {wo}, ele olha para o lugar; com {wo}, ele olha para a coisa que entra no lugar. O contexto, quem está em volta e o que foi dito antes, escolhe entre as duas leituras, e o leitor que conhece as duas não erra em nenhuma.

Um passo além, só para saber que existe: a mesma raiz reaparece em {reru}, a terminação do passivo, e a raiz "ouvir" vira {saseru}, "fazer ouvir", a terminação do causativo. São os mesmos verbos dos dois lados de tudo o que veio antes, com uma camada a mais, e é por isso que a mesma raiz aparece em tantas formas. Os verbos "ser feito" e "fazer alguém fazer" não são verbos novos.

## {aru} não tem objeto, e João 1:1 tem dois verbos sem objeto

O verbo de existência, {aru} "haver, existir", é intransitivo, e isso é uma armadilha clássica de iniciante. "Há um livro" em japonês é {hon ga aru}: o nome vem marcado com a partícula de sujeito, o "ga", e o verbo é {aru}, que não recebe nada depois dele. Escrever {hon o aru} é o erro, porque o {wo} não tem o que marcar.

Quem traduz do português traduz "há" por um verbo e enxerga nele um objeto, e daí nasce o {wo} que não deveria existir. Em japonês "há" não é um verbo que pega coisa nenhuma: é um verbo que diz que a coisa está lá. A diferença entre {hon ga aru} e {hon o aru} não é de estilo; a segunda frase simplesmente não é bem formada.

O gancho bíblico que amarra a lição é João 1:1, "no princípio era a Palavra". É {aru}, intransitivo, e é o verbo mais importante do capítulo inteiro. Na mesma frase, "a Palavra estava com Deus" usa o verbo de estar junto, algo como {sou} "estar junto com, acompanhar", que também é intransitivo: ele não recebe a Palavra como objeto, a Palavra vem como nome que acompanha, marcado como tal.

Ou seja: **João 1:1 tem dois verbos intransitivos numa frase só.** Não há um único {wo} em "no princípio era a Palavra e a Palavra estava com Deus", e é exatamente isso que faz o versículo parecer estranho ao leitor português, acostumado a que todo verbo tenha algo que bater nela. Quem entende que o japonês não precisa disso entende o versículo, e entende por que a tradução japonesa usa kana justamente nesses verbos.
`),
  vocab: [
    V('wo', 'を', 'objeto direto; a partícula que diz que há objeto (wo)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('nomu', '飲む', 'beber (nomu)'),
    V('nemuru', '寝る', 'dormir (nemuru)'),
    V('hairu', '入る', 'entrar; fazer caber; receber (hairu)'),
    V('iku', '行く', 'ir (iku)'),
    V('kuru', '来る', 'vir (kuru)'),
    V('okiru', '起きる', 'acordar; levantar (okiru)'),
    V('shinu', '死ぬ', 'morrer (shinu)'),
    V('warau', '笑う', 'rir (warau)'),
    V('naku', '泣く', 'chorar (naku)'),
    V('aru', 'ある', 'haver; existir (aru)'),
    V('sou', '添う', 'estar junto com; acompanhar (sou)'),
    V('yomu', '読む', 'ler (yomu)'),
    V('reru', 'れる', 'passivo; também "possível" (reru)'),
    V('saseru', 'させる', 'causativo; "fazer alguém fazer" (saseru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Verbo transitivo e verbo intransitivo têm a mesma flexão: {taberu} e {nemuru} tiram o mesmo ru.',
      ),
    },
    {
      n: '2',
      text: T(
        'O teste é um: ponha o {wo} depois do verbo. Se couber e fizer sentido, é transitivo; se não couber, é intransitivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'O verbo não diz se há objeto — a partícula diz. Sem {wo} depois do nome, ou a frase está incompleta, ou o verbo é intransitivo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hairu} pode ser "entrar" (intransitivo) ou "fazer caber" (transitivo): a mesma flexão, e o {wo} é o que separa as duas frases.',
      ),
    },
    {
      n: '5',
      text: T('{aru} da lição 7 é intransitivo: "há um livro" é {hon ga aru}, nunca {hon o aru}.'),
    },
  ],
  notes: [
    {
      label: T('O verbo é o resto, a partícula é a informação'),
      text: T(
        'Enquanto a flexão do verbo não varia, o {wo} aparece ou não aparece. Por isso a flexão não pode ser a pista: em japonês, a informação fica na partícula. Um iniciante que traduz do português procura no verbo algo que ele não diz, e escreve "ele chegou-o" — mas o erro não é de flexão, é de partícula inventada.',
      ),
    },
    {
      label: T('Dois verbos intransitivos em João 1:1'),
      text: T(
        'No princípio **era** a Palavra — {aru}, intransitivo. E a Palavra **estava com** Deus — {sou}, intransitivo, com a Palavra como nome que acompanha. Nenhum {wo} na frase, e mesmo assim o versículo está completo. Quem espera um objeto em todo verbo trava aqui.',
      ),
    },
  ],
  examples: [
    { text: 'パンを食べる', gloss: T('pan o taberu — como pão') },
    { text: 'ベッドで寝る', gloss: T('beddo de nemuru — durmo na cama') },
    { text: '家に入る', gloss: T('ie ni hairu — entro em casa') },
    { text: '本を家に入れる', gloss: T('hon o ie ni hairu — o livro cabe em casa') },
    {
      text: '初めはことばがあった',
      gloss: T('hazime wa kotoba ga atta — no princípio havia a Palavra (João 1:1)'),
    },
  ],
  tables: [
    {
      caption: T('Os verbos mais usados de cada lado'),
      head: [T('Com objeto'), T('Sem objeto')],
      rows: [
        [T('{taberu} — comer'), T('{nemuru} — dormir')],
        [T('{nomu} — beber'), T('{iku} — ir')],
        [T('{hon o yomu} — ler'), T('{kuru} — vir')],
        [T('{hon o kaku} — escrever'), T('{okiru} — acordar')],
        [T('{hon o miru} — ver'), T('{shinu} — morrer')],
        [T('{mimi o kiku} — ouvir'), T('{warau} — rir')],
        [T('{hon o hiraku} — abrir'), T('{naku} — chorar')],
      ],
    },
    {
      caption: T('O teste do {wo} em três verbos'),
      head: [T('{wo} depois?'), T('Verbo'), T('Glosa')],
      rows: [
        [T('sim'), T('{taberu}'), T('comer, e há algo para comer')],
        [T('sim'), T('{yomu}'), T('ler, e há algo para ler')],
        [T('não'), T('{nemuru}'), T('dormir, e ninguém dorme alguma coisa')],
        [T('não'), T('{shinu}'), T('morrer, e ninguém morre alguma coisa')],
      ],
    },
    {
      caption: T('O mesmo verbo, as duas frases'),
      head: [T('Frase'), T('Há objeto?'), T('Glosa')],
      rows: [
        [T('{ie ni hairu}'), T('não'), T('entra em casa')],
        [T('{hon o ie ni hairu}'), T('sim'), T('o livro cabe em casa')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {hon ga aru}, por que não há {wo} depois do nome?'),
    options: [
      T('porque {aru} é intransitivo'),
      T('porque a partícula de sujeito já faz esse trabalho'),
      T('porque substantivo nunca recebe partícula no japonês'),
      T('porque o {wo} é opcional em japonês'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "como pão" com a partícula de objeto: パン____食べる'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao lado em que ele fica'),
      pairs: [
        { a: T('{taberu}'), b: T('com objeto') },
        { a: T('{yomu}'), b: T('com objeto') },
        { a: T('{nemuru}'), b: T('sem objeto') },
        { a: T('{aru}'), b: T('sem objeto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual das frases está bem formada?'),
      options: [T('{hon o aru}'), T('{hon ga aru}'), T('{hon ni hairu}'), T('{hon o nomu o aru}')],
      answer: 1,
    },
  ],
};
