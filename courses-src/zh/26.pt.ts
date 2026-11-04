import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Sintaxe'),
  title: T('Coordenação pesada: {而}, {雖}…{也} e os conectivos de uma sílaba'),
  subtitle: T(
    'O Mandarin liga orações inteiras com meia dúzia de palavras, e quase todas precisam de uma segunda metade',
  ),
  body: C(`
## O que a conjunção de fato liga

O português tem uma palavra para cada relação entre orações: e, mas, porque, portanto, embora. O Mandarin tem meia dúzia no texto escrito e nenhuma na fala. E a que tem não liga orações: liga verbos. {ér} é o operador da coordenação pesada, e o que ele coordena é o predicado.

Em {tā ér wǒ}, "ele e eu", o {ér} está entre dois sintagmas nominais e não há verbo nenhum na frase. É a prova de que a coordenação em Mandarin não passa pela oração. Em {tā lái ér wǒ qù}, "ele vem e eu vou", o mesmo {ér} liga dois verbos, e o sujeito aparece uma vez só, no começo. Quem traduz do português escreve "ele vem, e eu vou", com o sujeito repetido, e produz a fala de uma criança.

A restrição vem da lição dos verbos em série: quando os verbos formam uma cadeia com um sentido só, o {ér} não entra. {wǒ lái kàn nǐ} não leva {ér}, porque a ordem já diz que a segunda ação está a serviço da primeira. O {ér} entra quando a ordem não basta.

**O {ér} entra depois do primeiro verbo, ou depois do advérbio, e antes do segundo.**

## O mesmo caractere, três leituras

O {ér} é um só e quem o interpreta é o que vem depois. {zǒu ér hūr} é "sai e grita"; {zǒu ér bù hūr} é "sai, e não grita"; {zǒu ér hūr de gèng lóng} é "sai e grita ainda mais". São três frases, uma palavra, e o Mandarin não põe nada entre o {ér} e o verbo para avisar qual das três é a que está lendo. Quem traduz do português procura uma conjunção diferente para cada frase e encontra sempre a mesma.

O que muda em cada par é o resto da oração. Contraste vem acompanhado de {bù}, de {què} ou de um adjetivo oposto. Sucessão vem de outro verbo sem negação. Progressão vem de {gèng}, "ainda mais", ou de um adjetivo mais forte. Um par ajuda a decidir: {ér} com {què} é sempre contraste, {ér} com {yě} é sempre sucessão.

O caso que trava quem está começando é o {ér} que não tem segundo verbo nenhum. {gānxīn ér tīng}, {zǐxì ér kàn}, {bēi ér xíng}: nos três há um advérbio, o {ér}, e um verbo só. O Mandarin usa o mesmo {ér} para ligar advérbio a verbo, e quem procura uma segunda oração depois dele não encontra, e conclui que leu errado. Não leu: {bēi ér xíng} escrito {步行} é uma palavra só, e o {ér} está ali porque a forma escrita da palavra antiga guarda a marca.

## A concessiva e a metade que falta

A concessão admite um fato para negar a conclusão que esse fato traria. O Mandarin faz isso com um par, e o texto antigo tem dois membros para a mesma ideia: {suī} sozinho, que espera {què} do outro lado, e {suīrán}, que carrega o par inteiro dentro de si e sai com {yě} ou com {què} no fecho.

A diferença entre os dois não é de grau, é de estrutura — um traz a segunda metade junto, o outro deixa a segunda metade ao contexto. Quem lê vai encontrar os dois na mesma página, e a escolha diz o registro do texto, não o sentido. {suīrán} é a forma das traduções modernas e das epístolas; {suī} sozinho é a do Mandarin escrito, e é a que aparece nos livros poéticos.

**{suī} nunca vem sozinho: {què} ou {yě} espera do outro lado.**

O par também tem forma fixa, e o fecho muda o sentido sem mudar a concessão. {suīrán … {yě}} admite o fato e mantém a conclusão, "embora, ainda assim"; {suīrán … {què}} admite o fato e corta a conclusão, "embora, mas não". Entre os dois o que muda é a força, não a estrutura.

## Conectivos de uma sílaba, e a segunda metade

Os que sobram são poucos, e quase todos aparecem com um fechamento que é o que carrega o sentido.

- {qiě}: "e", "e também": acrescenta, e nunca introduz contraste. O par esperado é {érqiě}, "e ainda mais", que já virou uma palavra só.
- {nǎi}: "então", "logo". Depois de uma negativa como {fēi}, o sentido muda e vira "não senão".
- {gù}: "portanto": Mandarin escrito, irmão de {suǒyǐ}, que é a forma falada do mesmo par.
- {ruò}: "se", e traz o fecho {zé}: {ruò} {bù} {zhǔ} {shíhou} {zé} {shàng}, "se a ceia não estiver pronta, então".
- {fán}: "todo", e fecha com {jiē}: {fán} {yǒu} {xuèqì de rén} {jiē} {shò}, "toda pessoa de carne e sangue".
- {qǐ}: "como", só em pergunta retórica, e nunca pede resposta.

**Depois de uma negativa, {nǎi} significa "não senão", e não "então".**

O gancho é o Novo Testamento, e ele usa o par de duas maneiras. João 11:25 traz a versão completa: {suīrán sǐ le, yě bì fùhuó}, "embora tenha morrido, ainda ressuscitará". João 6:38 traz o outro par: {bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi}, "não para fazer a minha vontade, mas a do que me enviou". E a coordenação mais dura do mesmo livro não tem marca nenhuma: João 1:5, {guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng}, escreve "a luz brilha nas trevas, e as trevas não a receberam" sem uma partícula, uma conjunção ou uma vírgula que não esteja em português. O contraste está inteiro na segunda metade da frase, e quem procura {ér} depois de {lǐ} não encontra.`),
  vocab: [
    V('ér', '而', 'e, mas; o operador da coordenação pesada (ér)'),
    V('suī', '虽', 'embora; abre par e espera què (suī)'),
    V('suīrán', '虽然', 'embora; o par inteiro numa só palavra (suīrán)'),
    V('què', '却', 'mas; fecho da adversativa (què)'),
    V('yě', '也', 'também; fecho da concessiva e da sucessão (yě)'),
    V('qiě', '且', 'e, e também; nunca introduz contraste (qiě)'),
    V('nǎi', '乃', 'então; não senão, depois de negativa (nǎi)'),
    V('gù', '故', 'portanto; Mandarin escrito, irmão de suǒyǐ (gù)'),
    V('ruò', '若', 'se; traz o fecho zé (ruò)'),
    V('zé', '则', 'então; fecho de 若 e da Adversativa (zé)'),
    V('fán', '凡', 'todo, todo que; abre par com jiē (fán)'),
    V('jiē', '皆', 'todos; fecha o par com fán (jiē)'),
    V('gèng', '更', 'ainda mais; grau progressivo (gèng)'),
    V('érqiě', '而且', 'e ainda mais: o par de ér fundido numa palavra (érqiě)'),
    V('qǐ', '岂', 'como; só em pergunta retórica (qǐ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} liga verbos entre si, ou advérbios a verbos, e fica depois do primeiro membro: {tā lái ér wǒ qù}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O sentido de {ér} vem do que vem depois: contraste, sucessão ou progressão. A forma é a mesma nos três.',
      ),
    },
    { n: '3', text: T('{suī} nunca aparece sozinho: {què} ou {yě} espera do outro lado.') },
    {
      n: '4',
      text: T('{ér} não entra em série de verbos com um sentido só: {wǒ lái kàn nǐ} fica sem ele.'),
    },
    {
      n: '5',
      text: T('Depois de uma negativa, {nǎi} significa "não senão": {bú shì …, nǎi shì …}.'),
    },
  ],
  notes: [
    {
      label: T('O {而} que não coordena orações'),
      text: T(
        '{bēi ér xíng} tem advérbio, {ér} e um verbo, e nenhuma segunda oração. A mesma peça liga o advérbio ao verbo e o verbo ao verbo. Quem procura uma oração depois do {ér} em toda parte não entende nem a coordinative nem esta, e conclui que errou a leitura quando o texto estava certo.',
      ),
    },
    {
      label: T('Concessiva admite, não nega'),
      text: T(
        '{suīrán} … {yě} diz que o fato é verdadeiro e a conclusão também. O que o Mandarin não faz é negar o fato: a negatif de quem é objeto da concessão é uma negativa comum, {bù} ou {méi}, dentro da segunda metade. Um leitor que traduz "embora não fosse verdadeiro" meteu o não no lugar errado e apagou o fato admitido.',
      ),
    },
  ],
  examples: [
    {
      text: '雖然死了，也必復活',
      gloss: T('suīrán sǐ le, yě bì fùhuó — embora tenha morrido, ainda ressuscitará (João 11:25)'),
    },
    {
      text: '不是要照自己的意思行，乃是要遵行差我來者的意思',
      gloss: T(
        'bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi — não para fazer a minha vontade, mas a do que me enviou (João 6:38)',
      ),
    },
    {
      text: '光照在黑暗裏，黑暗就不領受光',
      gloss: T(
        'guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng — a luz brilha nas trevas, e as trevas não a receberam (João 1:5)',
      ),
    },
    {
      text: '學而不思則罔，思而不學則殆',
      gloss: T(
        'xué ér bù sī zé wǎng, sī ér bù xué zé dài — não aprender e não pensar é estar sem direção (Anal. 2:15)',
      ),
    },
    {
      text: '專心而聽',
      gloss: T('gānxīn ér tīng — ouvir com atenção: advérbio, {ér} e um verbo só'),
    },
    { text: '步行', gloss: T('bùxíng — ir a pé; {bēi ér xíng} escrito {步行} é uma palavra só') },
    {
      text: '人不知而不慍',
      gloss: T('rén bù zhī ér bù yùn — não se irrita com quem não o entende (Anal. 2:2)'),
    },
  ],
  tables: [
    {
      caption: T('O mesmo {而}, três leituras'),
      head: [T('Leitura'), T('O que vem depois'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('sucessão'), T('verbo, sem negação'), T('{zǒu ér hūr}'), T('sai e grita')],
        [T('contraste'), T('verbo com {bù} ou {què}'), T('{zǒu ér bù hūr}'), T('sai, e não grita')],
        [
          T('progressão'),
          T('adjetivo mais forte, ou {gèng}'),
          T('{zǒu ér hūr gèng lóng}'),
          T('sai e grita ainda mais'),
        ],
        [
          T('advérbio'),
          T('advérbio e verbo, sem segundo verbo'),
          T('{gānxīn ér tīng}'),
          T('ouve com atenção'),
        ],
      ],
    },
    {
      caption: T('Pares fixos: a abertura nunca vem sozinha'),
      head: [T('Abertura'), T('Fecho'), T('Sentido'), T('Exemplo')],
      rows: [
        [T('{suīrán}'), T('{yě}'), T('embora, ainda assim'), T('{suīrán sǐ le, yě bì fùhuó}')],
        [T('{suīrán}'), T('{què}'), T('embora, mas não'), T('{suīrán shì zhī shì, què bù zhēn}')],
        [T('{suī}'), T('{què}'), T('embora, mas'), T('{suī shì zhī shì, què bù rú suǒ yù}')],
        [T('{ruò}'), T('{zé}'), T('se, então'), T('{ruò bù zhǔ shíhou, zé shàng}')],
        [T('{fán}'), T('{jiē}'), T('todo, todo'), T('{fán yǒu xuèqì de rén}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {信我的人，雖然死了，也必復活}, o que está fazendo o {也}?'),
    options: [
      T('fecha o par que {suīrán} abriu: o fato é admitido e a conclusão fica'),
      T('marca contraste contra o que vem antes'),
      T('indica que o falante não sabia o que ia acontecer'),
      T('nega o verbo {fùhuó}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a frase de João 11:25: 信我的人，____死了，也必復活'),
      answer: '雖然',
    },
    {
      kind: 'match',
      prompt: T('Ligue a abertura ao que o par inteiro significa'),
      pairs: [
        { a: T('{suīrán … yě}'), b: T('embora, ainda assim') },
        { a: T('{suīrán … què}'), b: T('embora, mas não') },
        { a: T('{ruò … zé}'), b: T('se, então') },
        { a: T('{fán … jiē}'), b: T('todo, todo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {專心而聽}, quantos verbos há?'),
      options: [
        T('dois: um em {ér} e outro depois'),
        T('um só: o {ér} liga o advérbio ao verbo'),
        T('três: advérbio, {ér} e verbo contam como verbos'),
        T('nenhum: {gānxīn} é o verbo'),
      ],
      answer: 1,
    },
  ],
};
