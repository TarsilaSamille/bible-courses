import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partículas'),
  title: T('Partículas do Mandarin escrito: {之}, {者}, {其}, {所}'),
  subtitle: T(
    'O que o grego resolve com uma oração de relativo, o Mandarin escrito resolve com quatro partículas e nenhum verbo',
  ),
  body: C(`
## Duas famílias na mesma classe

A partícula que já se conhece é peça da gramática e não palavra: {ma}, {le}, {ba}, {de} marcam a postura do falante ou a relação entre dois nomes, e nenhuma delas diz o que a frase contém. Ao lado delas mora uma segunda família, mais velha e muito mais escrita: {zhī}, {zhě}, {qí}, {suǒ}. Essas não marcam postura: elas **tomam o lugar de uma palavra do português**. Onde o português escreve "o livro que li", o Mandarin escrito escreve três caracteres e nenhum verbo.

A consequência para a leitura é imediata, e chega antes da gramática: um versículo que termina em {yě} escrito, ou em {yǐ}, não veio do grego. O registro fala antes da frase. E o {yě} do Mandarin falado, o "também", é a mesma sílaba e o mesmo caractere da partícula de fim de frase do Mandarin escrito. Quem separa os dois pela pronúncia perde a informação de registro e decide pelo som, que é justamente o que não pode decidir.

## {zhě} transforma verbo em substantivo

A regra cabe numa linha, e é a mais produtiva das quatro.

**{zhě} vem depois do verbo ou do adjetivo, e o que fica é um substantivo.**

{láizhě} é "o que vem" e {zhùzhě} é "o que mora"; {zhīzhě} é "o que sabe". O verbo continua ali dentro, e o {zhě} diz que aquela ação virou uma coisa. Quem traduz palavra por palavra escreve "vindo aquele" e lê como se o Mandarin tivesse um particípio de presente.

O que o {zhě} faz é exatamente o que a {de} faz com um adjetivo, só que na direção contrária. {hóngsè de huā} é adjetivo mais substantivo, dois nomes; {zhī zhě} é verbo mais partícula, e o verbo virou nome. São as duas maneiras de o Mandarin montar um sintagma nominal novo, e nenhuma delas precisa de palavra nova.

O segundo uso é mais raro e mais antigo: {zhě} como marca de tópico. {gǔjīn zhī rén} é "quanto aos antigos"; a partícula {zhě} fecha o assunto e o resto da frase comenta. É a construção que o português resolve com "quanto a", e que a {和合本} usa pouco.

## {zhī} e {qí}, os possessivos que não usam {de}

A {de} de posse da lição do possessivo vai depois do possuidor: {wǒ de shū}, {tā de shū}. O Mandarin escrito faz a mesma coisa com {qí}, e vai antes.

**{qí} vai antes do substantivo e {de} vai depois. Os dois dizem posse, e o Mandarin escrito usa o primeiro.**

{qí mǔ} é "a mãe dele" e {wǒ de mǔ} é "a minha mãe", e a diferença de posição é a pista de qual registro se está lendo. Um livro inteiro pode alternar os dois sem que o leitor perceba, porque a informação é a mesma e só a posição a denuncia.

O {zhī} tem três vidas. No lugar do pronome: {zhī shì zhī wèi zhī}, "aquilo é o conhecimento dele". No lugar do possessivo, colado ao nome como a {de} de posse: {zhī dào} é "a chegada dele". E dentro de uma locução, preso ao substantivo que vem depois — ali o {zhī} é a preposição e o {guó} volta a ser o nome: {zhī dào zhōng guó} é "ao longo do caminho".

## {suǒ} e os três finais de frase

O {suǒ} marca a palavra que vai ser o sujeito do verbo que vem depois, e é a alternativa do Mandarin escrito à oração de relativo. {suǒ} {wǒ} {chī} {de} {shí}, "aquilo que eu como": o sujeito está marcado duas vezes, uma pelo {suǒ} e outra pela {de}. Sem a {de}, o {suǒ} sozinho já governa o verbo, e é esse o caso que assusta quem traduz, porque o Mandarin escrito admite que o pronome que faz de sujeito simplesmente não apareça.

Os três finais fecham a frase e dizem o que fazer com ela. {yǐ} diz que a fala acabou e o ouvinte deve fechar; {hū} transforma a frase em pergunta que não quer resposta; {yān} acrescenta a ideia de lugar. Os três vivem nos textos mais antigos, e a {和合本} os traz quase todos dos Salmos e de Provérbios.

O gancho está num único versículo, e ele é a prova de que o registro diz a língua de origem. Primeira Coríntios 13 começa com {ài shì} e repete a mesma construção em toda a carta: {ài shì} {héng jiǔ rěn nài}, "o amor é longa paciência". Onze linhas depois o mesmo livro escreve {ài shì} {yǒng bù zhǐ xī de}, e nunca põe {yě}, nunca põe {zhě}. Primeira João 4:8 encerra a carta na forma mais curta possível: {shén jiù shì ài}, "Deus é amor", três palavras, o verbo {shì}, nenhum pronome e nenhuma partícula. A mesma {和合本}, o mesmo tradutor bilíngue, a mesma mesa de trabalho. O que mudou entre {ài shì héng jiǔ rěn nài} e {yǒu rén lái jiàn Yēsū} foi o livro de origem, e não a edição.

Em Provérbios 4:23 o Mandarin escrito aparece com a melhor testemunha possível, porque o versículo é curto: {yī qiè} é "tudo", {yī shēng} é "toda a vida", e {yóu xīn fā chū} é "sai do coração", sem preposição e sem cópula, um verbo e o substantivo que o nomeia. O original diz a mesma coisa, e quem reconhece a construção reconhece o hebraico traduzido.`),
  vocab: [
    V('zhī', '之', 'isso, ele, o que; pronome e partícula do Mandarin escrito (zhī)'),
    V('zhě', '者', 'o que, aquele que; transforma verbo em substantivo (zhě)'),
    V('yě (final)', '也', 'partícula de fim de frase do Mandarin escrito, e não "também" (yě)'),
    V('qí', '其', 'o dele, o seu; possessivo do Mandarin escrito (qí)'),
    V('suǒ', '所', 'aquilo que; marca o sujeito do verbo que vem depois (suǒ)'),
    V('yǐ', '矣', 'final de frase: a fala acabou, o ouvinte deve fechar (yǐ)'),
    V('hū', '乎', 'final de frase que vira pergunta retórica (hū)'),
    V('yān', '焉', 'aqui, onde; e final de frase (yān)'),
    V('cǐ', '此', 'este; pronome demonstrativo do Mandarin escrito (cǐ)'),
    V('fú', '弗', 'não; o negador do Mandarin escrito (fú)'),
    V('ěr', '尔', 'você; pronome do Mandarin escrito (ěr)'),
    V('rǔ', '汝', 'você; pronome do Mandarin escrito (rǔ)'),
    V('wèi', '为', 'por, para; o primeiro tom de 為 (wèi)'),
    V('wéi', '为', 'ser, tornar-se; o outro tom de 為 (wéi)'),
    V('yīqiè', '一切', 'tudo, todas as coisas (yīqiè)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{zhě} vem depois do verbo ou do adjetivo e o resultado é um substantivo: {láizhě}, "o que vem".',
      ),
    },
    {
      n: '2',
      text: T(
        '{qí} vai ANTES do substantivo e {de} DEPOIS: os dois dizem posse, e a posição diz qual deles se está lendo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{suǒ} marca a palavra que será o sujeito do verbo seguinte, e o Mandarin escrito dispensa o pronome que faz de sujeito.',
      ),
    },
    {
      n: '4',
      text: T(
        '{yǐ}, {hū} e {yān} fecham a frase e dizem o que fazer com ela; o {yě} escrito não é o {yě} do "também".',
      ),
    },
    {
      n: '5',
      text: T('{wèi} é "por, para" e {wéi} é "ser, tornar-se". O mesmo caractere, o tom decide.'),
    },
  ],
  notes: [
    {
      label: T('O {也} que não é o "também"'),
      text: T(
        'O {yě} que fecha a frase no Mandarin escrito é a mesma sílaba e o mesmo caractere do {yě} que significa "também". Em {shàng} {Xiānsheng} {yě} {lái le} o {yě} é advérbio, e nada marca que a frase acabou. A diferença é de registro e não de som, e é por isso que o som não pode decidir.',
      ),
    },
    {
      label: T('Um versículo de quatro palavras'),
      text: T(
        'A {和合本} escreve {shén jiù shì ài} para a frase que o grego escreve em quatro palavras e o hebraico em três. Não falta nada: {shén} é o sujeito, {shì} o verbo, {ài} o predicado. Um leitor que procura uma partícula onde não há não vai encontrar, e a conclusão certa é que aquela frase não tinha partícula nenhuma.',
      ),
    },
  ],
  examples: [
    {
      text: '愛是恆久忍耐，又有恩慈',
      gloss: T(
        'ài shì héng jiǔ rěn nài, yòu yǒu ēncí — o amor é longa paciência e tem bondade (1 Cor 13:4): {shì} e nada mais',
      ),
    },
    {
      text: '神就是愛',
      gloss: T('shén jiù shì ài — Deus é amor (1 João 4:8): três palavras, nenhuma partícula'),
    },
    {
      text: '我為此而生，也為此而來，為要給真理作見證',
      gloss: T(
        'wǒ wèi cǐ ér shēng, yě wèi cǐ ér lái — por isso vim, por isso estou aqui (João 18:37): {cǐ} no lugar do demonstrativo',
      ),
    },
    {
      text: '你要保守你心，勝過保守一切，因為一生的果效，是由心發出',
      gloss: T(
        'nǐ yào bǎoshǒu nǐ xīn, shèngguò bǎoshǒu yī qiè — guarda o teu coração acima de tudo (Prov 4:23): {yī qiè} e {yī shēng}',
      ),
    },
    {
      text: '知之為知之，不知為不知，是知也',
      gloss: T(
        'zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhī yě — saber que se sabe é o próprio saber (Anal. 2:17): dois usos de {zhī}',
      ),
    },
    {
      text: '學而時習之，不亦說乎',
      gloss: T(
        'xué ér shí xí zhī, bù yì yuè hū — não é um prazer aprender e rever o que aprendeu? (Anal. 1:1): {hū} no fim',
      ),
    },
    { text: '來者', gloss: T('láizhě — o que vem: um verbo que virou substantivo') },
    {
      text: '所愛的',
      gloss: T('suǒ ài de — aquilo que é amado: {suǒ} marca o sujeito do verbo que vem depois'),
    },
  ],
  tables: [
    {
      caption: T('Três famílias de partícula, três funções'),
      head: [T('Família'), T('O que faz'), T('Exemplos'), T('Registro')],
      rows: [
        [
          T('de atitude'),
          T('marca a postura do falante'),
          T('{ma}, {le}, {ba}, {ne}'),
          T('falado e escrito'),
        ],
        [
          T('de gramática'),
          T('ocupa o lugar de uma palavra do português'),
          T('{de}, {zhī}, {qí}'),
          T('os dois, em registros diferentes'),
        ],
        [
          T('de frase'),
          T('fica no fim e diz como fechar a fala'),
          T('{yě}, {yǐ}, {hū}, {yān}'),
          T('escrito antigo'),
        ],
      ],
    },
    {
      caption: T('Os pronomes do Mandarin escrito'),
      head: [T('Palavra'), T('Equivalente em português'), T('Onde entra'), T('Exemplo')],
      rows: [
        [T('{zhī}'), T('ele, isso, o que'), T('no lugar do pronome'), T('{zhī shì zhī wèi zhī}')],
        [T('{qí}'), T('o dele, o seu'), T('antes do substantivo'), T('{qí mǔ} a mãe dele')],
        [T('{cǐ}'), T('este'), T('no lugar do demonstrativo'), T('{wèi cǐ} por isso')],
        [T('{ěr}, {rǔ}'), T('você'), T('no lugar de {nǐ}'), T('{ěr wú shí}, {rǔ wú shí}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {知之為知之，不知為不知，是知也}, o que o primeiro {zhī} está fazendo?'),
    options: [
      T('ocupa o lugar do pronome: "aquilo" é o que se sabe'),
      T('transforma o verbo em substantivo'),
      T('marca o sujeito do verbo seguinte'),
      T('nega o verbo {zhī}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete o possessivo do Mandarin escrito, que vai ANTES do substantivo: ____ 母, a mãe dele',
      ),
      answer: '其',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela faz'),
      pairs: [
        { a: T('{zhě}'), b: T('transforma verbo em substantivo') },
        { a: T('{qí}'), b: T('possessivo que vem antes do substantivo') },
        { a: T('{suǒ}'), b: T('marca o sujeito do verbo seguinte') },
        { a: T('{yǐ}'), b: T('diz que a fala acabou') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas frases é do Mandarin escrito, e não da fala?'),
      options: [
        T('{shén jiù shì ài}'),
        T('{wǒ yě ài nǐ}'),
        T('{nǐ shì wǒ de péngyou}'),
        T('{wǒ hěn gāoxìng}'),
      ],
      answer: 0,
    },
  ],
};
