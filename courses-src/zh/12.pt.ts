import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Sintaxe'),
  title: T('Lugar e localização: {在} (zài)'),
  subtitle: T(
    'Uma palavra que vem antes do lugar, e o Mandarin separa o que o português junta num verbo só',
  ),
  body: C(`
## A preposição que abre a frase

{bù} e {méi} ficam antes do verbo; {le} fica depois dele e fecha a frase. {zài} entra antes do lugar, e é da mesma família das duas: uma palavra que se cola ao que vem logo em seguida e abre a sua própria expressão. Preposição uma, partícula a outra; o nome é o que muda.

{zài} é a preposição de lugar, e a regra dela é uma só: **vem antes da palavra que localiza**. {wǒ zài Jiěsù}, "eu estou em Jerusalém". Sujeito, preposição, lugar. A ordem é a mesma do português. A má notícia é que em Mandarin {zài} nunca aparece no fim: {wǒ zài le Jiěsù} está errado, porque {le} fecha a oração e não abre uma expressão de lugar. E {wǒ Jiěsù zài} não é uma frase em Mandarin em lugar nenhum. Não existe "Jerusalém está", nem como pergunta nem como resposta.

O {le} era um **sufixo**: entrava pela porta de trás e ficava no fim. {zài} é um **prefixo** que abre a expressão de lugar logo depois do sujeito. Duas posições opostas, dois papéis diferentes.

## Estar num lugar é afirmar que aquilo existe ali

{zài} seguido de uma palavra de lugar diz que algo está localizado ali e, ao dizer isso, afirma que aquilo existe. Não é um advérbio neutro como o "aqui" do português; é uma afirmação com conteúdo.

{Táng zài nàlǐ, shì wǒ de jiā}, "o salão está ali, é a minha casa". O {shì} da segunda metade não substitui o {zài}: os dois estão ali, cada um respondendo a uma pergunta diferente, e a frase só faz sentido porque o salão está e porque ele é meu. Troque um pelo outro e ela deixa de funcionar: {Táng shì wǒ de jiā} é "o salão é a minha casa", e {Táng zài wǒ de jiā} não quer dizer nada.

Por isso a negação também não se troca. {Táng bù zài nàlǐ} é "o salão não está ali": nega que ele esteja lá, nega a existência dele naquele lugar. Nega a identidade é com outra palavra: {Táng bù shì wǒ de jiā}, "o salão não é a minha casa". A {和合本} usa as duas, e nunca confunde uma pela outra.

O {zài} pode ser **omitido** quando o lugar é óbvio ou já foi dito. {wǒ zài Jiěsù}, depois {wǒ zài}, depois {wǒ}: cada passo tira o {zài} e não move mais nada. O que não pode é omitir quando o lugar é justamente a informação que se quer dar; ali o {zài} é a frase.

Para perguntar, Mandarin usa uma palavra só: {哪里} {nǎlǐ}, "onde", e a forma falada {哪儿} {nǎr}, com o mesmo sentido. {nǐ zài nǎlǐ?}, "você está onde?", e a pergunta não bagunça a ordem: {zài} continua antes do {nǎlǐ}. Assim como {bù} e {méi}, aqui Mandarin tem uma palavra e o português tem duas, "onde" e "em que lugar", e a escolha é de registro, não de sentido.

## O mesmo {zài}, agora antes do verbo

A segunda função de {zài} é a mais cotidiana, e usa a mesma palavra na mesma posição: antes daquilo que governa. O que muda é o que está depois.

{zài} + palavra de lugar = localização. {zài} + verbo = ação em curso: {wǒ zài chī fàn}, "eu estou comendo". Uma palavra, dois empregos, posição idêntica nos dois casos: {zài} abre, e o que vem depois é o conteúdo.

O contraste com o {le} vale. {wǒ chī fàn le} é "eu comi", um evento fechado. {wǒ zài chī fàn} é o mesmo verbo sem o {le}, com o {zài} na frente: a mesma ação, agora aberta e em andamento. E {wǒ zài chī fàn le} junta os dois, "eu estive comendo", com o {le} finalmente dizendo que aquilo acabou. Sem o {zài}, Mandarin não tem como dizer "estou comendo" na forma simples: ou você diz {wǒ chī fàn}, "eu como", hábito ou futuro, ou acrescenta o {zài}.

## Ser uma coisa e estar num lugar

Aqui está o gancho, e ele nasce de uma tradução. Em português, "ele é professor" e "ele está em casa" usam o mesmo verbo, com uma preposição de diferença: *ser* e *estar*. Quem fala português não sente que são duas perguntas diferentes; é a mesma pergunta, respondida de dois jeitos.

O Mandarin sente, e por isso separa. São duas palavras, e escolher entre elas é o trabalho:

- **{shì}** responde *o que ele é?*: identidade, categoria, papel. {tā shì lǎoshī}, "ele é professor".
- **{zài}** responde *onde ele está?*: localização. {tā zài jiā}, "ele está em casa".

A regra de bolso: se a pergunta é "o quê", é {shì}; se é "onde", é {zài}; e se o substantivo é um lugar, é {zài} sem hesitar. O erro do falante de português é inverter as duas, {tā shì nǎlǐ?} e {tā zài lǎoshī}, frases que ninguém diz e que parecem corretas justamente porque em português a palavra "estar" aparece das duas formas.

O mesmo contraste aparece no par de perguntas fixas: {nǐ shì shénme rén?}, "o que você é?", e {nǐ zài shénme dìfang?}, "em que lugar você está?". Mesma palavra {shénme}, e a diferença inteira está no {shì} e no {zài}.

A {和合本} mostra a mão nos dois versículos. No Salmo 139:2, {nǐ zhīdào wǒ zuò zài nǎlǐ}, "sabes onde eu me sento": o verbo {zuò} vem primeiro, e o {zài} entra imediatamente antes da palavra de lugar, {nǎlǐ}. Em Gênesis 1:2, {dì zài shuǐmiàn shàng}, "a terra estava sobre as águas": o mesmo {zài}, desta vez sustentando "sobre as águas", uma expressão de lugar que nem é nome próprio. Duas traduções, a mesma preposição, a mesma casa.`),
  vocab: [
    V('zài', '在', 'estar em; estar a fazer (zài)'),
    V('shì', '是', 'ser (shì)'),
    V('nǎlǐ', '哪里', 'onde (nǎlǐ)'),
    V('nǎr', '哪儿', 'onde (nǎr) — forma falada'),
    V('dìfang', '地方', 'lugar (dìfang)'),
    V('jiā', '家', 'casa (jiā)'),
    V('zhīdào', '知道', 'saber (zhīdào)'),
    V('zuò', '坐', 'sentar-se (zuò)'),
    V('chī', '吃', 'comer (chī)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{zài} vem ANTES da palavra de lugar: {wǒ zài Jiěsù}. No fim da frase nunca.'),
    },
    {
      n: '2',
      text: T(
        '{zài} + lugar afirma que aquilo existe ali — por isso se nega com {bù}: {Táng bù zài nàlǐ}.',
      ),
    },
    { n: '3', text: T('{zài} + verbo marca ação em curso: {wǒ zài chī fàn}, "eu estou comendo".') },
    {
      n: '4',
      text: T(
        'Pergunta "o que ele é?" pede {shì}; pergunta "onde ele está?" pede {zài}. Nunca trocadas.',
      ),
    },
    {
      n: '5',
      text: T(
        'O {zài} pode faltar quando o lugar é óbvio ou já foi dito; o resto da frase não se move.',
      ),
    },
  ],
  notes: [
    {
      label: T('O Mandarin não tem o seu verbo só'),
      text: T(
        'O português resolve "ser" e "estar" com um verbo e uma preposição de diferença. O Mandarin tem duas palavras, e {shì} nunca aceita palavra de lugar: {tā shì jiā} não existe. Se a frase pergunta onde, {在} não é opcional.',
      ),
    },
    {
      label: T('Onde fica o {zài} quando ele some'),
      text: T(
        '{zài} é a única preposição de lugar da língua, e por isso é a palavra mais omitida do Mandarin. A omissão nunca muda a construção: some só o {zài}, o lugar continua no mesmo lugar da frase. E {zài} + verbo quase nunca é omitido — "estou comendo" sem o {zài} não existe.',
      ),
    },
  ],
  examples: [
    { text: '我在耶路撒冷', gloss: T('wǒ zài Yēlùsālěng — eu estou em Jerusalém') },
    { text: '他在家', gloss: T('tā zài jiā — ele está em casa') },
    { text: '我在吃饭', gloss: T('wǒ zài chī fàn — eu estou comendo') },
    {
      text: '你知道我坐在哪里',
      gloss: T('nǐ zhīdào wǒ zuò zài nǎlǐ — você sabe onde eu me sento'),
    },
  ],
  tables: [
    {
      caption: T('Três perguntas, três construções'),
      head: [T('Pergunta'), T('Construção'), T('Exemplo')],
      rows: [
        [T('O que ele é?'), T('{shì}'), T('{tā shì lǎoshī} — ele é professor')],
        [T('Onde ele está?'), T('{zài} + lugar'), T('{tā zài jiā} — ele está em casa')],
        [
          T('O que ele está fazendo?'),
          T('{zài} + verbo'),
          T('{tā zài chī fàn} — ele está comendo'),
        ],
        [T('Onde eu estou?'), T('{zài} + {nǎlǐ}'), T('{wǒ zài nǎlǐ} — onde eu estou')],
      ],
    },
    {
      caption: T('Onde o {zài} pode ser omitido'),
      head: [T('Frase'), T('O que ficou de fora')],
      rows: [
        [T('{wǒ zài Jiěsù}'), T('nada: o lugar é a informação')],
        [T('{wǒ zài}'), T('a palavra de lugar, já dita antes')],
        [T('{wǒ}'), T('também o {zài}, se o lugar for óbvio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {你知道我坐在哪里}, o que a construção {在哪里} faz?'),
    options: [
      T('indica o lugar, imediatamente antes da palavra de lugar'),
      T('identifica o que o eu é'),
      T('marca o tempo passado'),
      T('liga a posse a mim'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "eu estou em Jerusalém" — a preposição vem antes do lugar: 我____耶路撒冷',
      ),
      answer: '在',
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase à pergunta que ela responde'),
      pairs: [
        { a: T('{tā shì lǎoshī}'), b: T('O que ele é?') },
        { a: T('{tā zài jiā}'), b: T('Onde ele está?') },
        { a: T('{tā zài chī fàn}'), b: T('O que ele está fazendo?') },
        { a: T('{tā bù shì lǎoshī}'), b: T('O que ele não é?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual das frases diz "ele está em casa"?'),
      options: [T('{tā shì jiā}'), T('{tā zài jiā}'), T('{tā zài shì jiā}'), T('{tā zài nǎlǐ}')],
      answer: 1,
    },
  ],
};
