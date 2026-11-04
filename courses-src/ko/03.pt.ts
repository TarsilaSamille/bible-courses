import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Escrita'),
  title: T('A anatomia do bloco: a vogal obrigatória e a superbilhete final'),
  subtitle: T(
    'O coreano é fácil de escrever depois da fórmula: inicial opcional, vogal obrigatória, final opcional — um sistema finito e minúsculo que cabe na cabeça',
  ),
  body: C(`## A fórmula: inicial, vogal obrigatória, final opcional

O bloco de hangul se escreve sempre na mesma ordem: inicial, opcional; vogal, obrigatória; final, opcional. Nenhum quadrado tem uma quarta posição e nenhum quadrado dispensa a segunda. Escrever coreano é aplicar a fórmula tantas vezes quanto sílabas a frase tiver.

O inventário inteiro cabe numa página. São 19 consoantes iniciais, das quais 10 são simples e 11 se escrevem com duas consoantes encostadas uma na outra. São 7 vogais. São 7 consoantes finais. A multiplicação dessas peças dá um número grande, mais de dez mil formas de bloco, e é exatamente esse o assunto: o número é grande, a regra é minúscula. Quem aprende coreano não decora milhares de sílabas, decora uma fórmula e a aplica peça por peça. Quem aprende mandarim decora milhares de pares, porque lá cada sílaba é um item da lista. A diferença não é de talento: é de projeto. O coreano foi desenhado para que a contabilidade do alfabeto fosse feita uma vez, na aula de DESenho, e o resto fosse repetição.

E o detalhe que não tem exceção é o do meio: não existe sílaba coreana sem vogal no meio. Nunca. Uma sílaba é consoante inicial, vogal e, às vezes, consoante final; a vogal é o que fica, o que não pode faltar em nenhuma hipótese, e a única parte do bloco que carrega a pronúncia.

O contraste com o mandarim é o que torna isso visível. No mandarim existem sílabas terminadas só em consoante: ba, bei, um som que se corta de repente, sem vogal nenhuma para segurá-lo. No coreano isso é impossível, e a impossibilidade é o que torna a escrita regular. Uma sílaba sem vogal teria duas consoantes coladas e nenhuma indicação de onde está a fronteira da sílaba; em coreano a vogal é sempre o ponto de corte, sempre o centro do bloco, e por isso qualquer leitor encontra a fronteira sem esforço. Um texto coreano se segmenta sozinho: é a vogal que diz onde cada sílaba acaba.

## Simples e compostas

As vogais do coreano se dividem em dois grupos, e a divisão é sobre o número de sons que cabem num só símbolo. As simples têm um som só: a, eo, ya, yeo, o, yo, u. As compostas contraem dois sons numa vogal única, e é por isso que uma sílaba coreana pode ter duas vogais no mesmo quadrado sem deixar de ter uma vogal só.

As compostas mais comuns são {ye}, {wa}, {we}, {wi}, {wo} e {yu}, e o que o aluno tem de reter não é a lista, é o mecanismo: {ye} se escreve com o sinal do y seguido do sinal do e, e funciona como uma vogal, não como duas. Um exemplo basta para fixar: em {yeong} o {ye} do começo é a vogal do bloco, e o bloco inteiro vale uma sílaba. Quem leu o símbolo como duas vogais leu duas sílabas, e a palavra saiu com o dobro do tamanho. O erro comum do iniciante não é errar o som, é contar a sílaba errada.

## A final muda o som da vogal

A superbilhete embaixo é a parte que assusta e é a mais informativa. São sete consoantes finais, k, l, m, p, t, n, ng, e ela não é um eco da inicial nem um ruído: ela entra depois da vogal e muda o que a vogal soa. Compare {ga} e {gak}: é o mesmo g, é a mesma vogal a, e mesmo assim soa "ga" e "gak". A diferença é uma letra embaixo.

O exemplo mais instrutivo é {i} contra {in}. Sozinho, o bloco {i} soa "i". Com a final n embaixo, o mesmo bloco vira {in} e soa "in". A vogal não é mais a mesma: quem ouve "in" não está ouvindo um i com letra extra, está ouvindo outra sílaba. O mesmo vale com {u}: {u} soa "u" e {un} soa "un". E vale em geral: final é a posição que muda a pronúncia da vogal.

E aqui está o princípio que amarra o coreano ao japonês: a consoante que fica DENTRO do bloco, a inicial, não altera o som da vogal; a que fica embaixo, a final, altera. Por isso o coreano distingue "in" de "i" como dois sons diferentes, e o japonês, cuja sílaba não tem posição nenhuma depois da vogal, não distingue nada depois dela. Numa palavra como {guk} as três posições estão ocupadas: inicial, vogal, final, três sons. Numa palavra como {ga} só há duas posições ocupadas e a terceira está em branco. A posição em branco é permitida; a vogal nunca.

## O nome do sistema, e o texto que ele pôs na rua

O nome coreano do sistema já entrega o sistema inteiro. {hangul} é literalmente "letra coreana": o primeiro bloco significa coreano e o segundo significa letra, e letra em coreano é o caractere escrito, não o som. Daí a tradução padrão de "escrito em coreano" ser justamente {hangul}, o substantivo coreano para coreano escrito. O nome da LÍNGUA segue a mesma conta: {hangugeo} é "língua do país coreano", com {guk}, o país, no meio, o mesmo {guk} que significa Estado e que hoje é metade do nome do país. {hanja} é "caractere coreano", o mesmo esquema com o caractere chinês no lugar da letra.

E a escolha de escrita vira fato histórico. A tradução coreana da Bíblia, a de 1917, foi impressa em hanja, com pronúncia coreana: legível para quem lê caracteres chineses e inútil para quem não lê. Os missionários que a prepararam precisaram decidir se o texto, do começo ao fim, seria escrito em hanja ou em hangul, e escolheram hangul. A escolha não foi estética: foi de acesso. Um texto bíblico escrito num alfabeto puro é lido por quem fala coreano, sem anos de caracteres chineses na frente, e isso foi a primeira vez que um texto bíblico foi impresso num sistema alfabético numa língua da Ásia. O mundo de hoje mostra onde a decisão deu certo: o hanja sobrevive em nomes próprios e em palavras savantes, e o texto bíblico coreano é hangul, com o hanja só onde ele é preciso.

A segmentação do mandarim é justamente o problema que o coreano não tem. Lá a fronteira da sílaba precisa ser procurada; aqui ela é dada pela vogal.
`),
  vocab: [
    V('guk', '국', 'país; Estado (guk) — é também a vogal u com final k'),
    V('ga', '가', 'inicial + vogal a, sem final: "ga"'),
    V('gak', '각', 'o mesmo g e a mesma a com consoante final: "gak"'),
    V('i', '이', 'a vogal i sozinha: "i"'),
    V('in', '인', 'a mesma vogal i com final n: soa "in", não "i"'),
    V('u', '우', 'a vogal u sozinha: "u"'),
    V('un', '운', 'a mesma vogal u com final n: soa "un"'),
    V('bang', '방', 'final ng: a consoante final soa "ng" (bang)'),
    V('yeong', '영', 'vogal composta ye com final ng: "yeong"'),
    V('hangul', '한글', 'o alfabeto coreano; literalmente "letra coreana" (hangul)'),
    V(
      'hanja',
      '한자',
      'coreano escrito com caracteres chineses; literalmente "caractere coreano" (hanja)',
    ),
    V('hangugeo', '한국어', 'coreano; literalmente "língua do país coreano" (hangugeo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo bloco se escreve na mesma ordem: inicial opcional, vogal obrigatória, final opcional. Não há quarta posição.',
      ),
    },
    {
      n: '2',
      text: T(
        'Não existe sílaba coreana sem vogal. No mandarim existe — e é por isso que o mandarim precisa de regras de segmentação e o coreano não.',
      ),
    },
    {
      n: '3',
      text: T(
        'As vogais compostas, {ye} {wa} {we} {wi} {wo} {yu} — {예} {와} {왜} {위} {워} {유} — contraem dois sons numa vogal só: contam como uma posição do bloco, não como duas.',
      ),
    },
    {
      n: '4',
      text: T(
        'A consoante final muda o som da vogal: {in} {인} não é {i} {이} com uma letra a mais, é outra sílaba.',
      ),
    },
    {
      n: '5',
      text: T(
        'A inicial não altera o som da vogal; a final altera. Por isso o coreano distingue "in" de "i" e o japonês não distingue nada depois da vogal.',
      ),
    },
  ],
  notes: [
    {
      label: T('O nome do sistema é o sistema'),
      text: T(
        '{hangul} é literalmente "letra coreana" e {hanja} é "caractere coreano"; o nome da língua, {hangugeo}, é "língua do país coreano", com {guk}, o país, no meio. A nomenclatura entrega o desenho: letra, caractere, país.',
      ),
    },
    {
      label: T('O texto bíblico foi escolhido em hangul'),
      text: T(
        'A tradução coreana de 1917 saiu em hanja com pronúncia coreana, legível só para quem lê caracteres chineses. Os missionários decidiram escrever em hangul por acesso, não por estética: foi a primeira vez que um texto bíblico foi impresso num sistema alfabético numa língua da Ásia. Hoje o hanja aparece quase só em nomes próprios e palavras savantes.',
      ),
    },
  ],
  examples: [
    { text: '국', gloss: T('guk — "país": inicial, vogal e final, três posições ocupadas') },
    { text: '가', gloss: T('ga — inicial e vogal: a posição de baixo está vazia') },
    { text: '각', gloss: T('gak — o mesmo g e a mesma vogal de ga, com consoante final embaixo') },
    { text: '인', gloss: T('in — a vogal i de {i} com final n: soa "in", não "i"') },
    { text: '한글', gloss: T('han-gul — literalmente "letra coreana", o nome do alfabeto') },
  ],
  tables: [
    {
      caption: T('A anatomia do bloco, lida de cima para baixo'),
      head: [
        T('Posição no quadrado'),
        T('Elemento'),
        T('Obrigatório'),
        T('Quantas'),
        T('Sons típicos'),
        T('Símbolos'),
      ],
      rows: [
        [
          T('topo, à esquerda'),
          T('consoante inicial'),
          T('não'),
          T('19 (10 simples, 11 compostas)'),
          T('g, k, n, s, j'),
          T(
            '{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ} {ㅊ} {ㅋ} {ㅌ} {ㅍ} {ㅎ} {ㄲ} {ㄸ} {ㅃ} {ㅆ} {ㅉ}',
          ),
        ],
        [
          T('centro e à direita'),
          T('vogal'),
          T('sim, sempre'),
          T('7'),
          T('a, eo, ya, yeo, o, yo, u'),
          T('{ㅏ} {ㅑ} {ㅓ} {ㅕ} {ㅗ} {ㅛ} {ㅜ} {ㅠ} {ㅡ} {ㅣ}'),
        ],
        [
          T('embaixo'),
          T('consoante final'),
          T('não'),
          T('7'),
          T('k, l, m, p, t, n, ng'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅇ}'),
        ],
        [
          T('o quadrado inteiro'),
          T('uma sílaba'),
          T('é a unidade de leitura'),
          T('mais de 10 mil combinações'),
          T('nunca duas sílabas'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('A mesma vogal, com e sem consoante final'),
      head: [T('Vogal'), T('Sem final'), T('Com final'), T('O que muda')],
      rows: [
        [T('a'), T('{ga} — "ga"'), T('{gak} — "gak"'), T('a vogal passa a soar "ak"')],
        [T('i'), T('{i} — "i"'), T('{in} — "in"'), T('a vogal passa a soar "in"')],
        [T('u'), T('{u} — "u"'), T('{un} — "un"'), T('a vogal passa a soar "un"')],
        [
          T('a, final ng'),
          T('{ga} — "ga"'),
          T('{bang} — "bang"'),
          T('a final ng fecha o som com "ng"'),
        ],
      ],
    },
    {
      caption: T('Vogais simples e vogais compostas'),
      head: [T('Grupo'), T('Quantas'), T('Sons por símbolo'), T('Exemplos')],
      rows: [
        [T('simples'), T('7'), T('um'), T('a, eo, ya, yeo, o, yo, u')],
        [
          T('compostas'),
          T('várias, nomeadas uma a uma'),
          T('dois contraídos numa vogal só'),
          T('ye, wa, we, wi, wo, yu'),
        ],
        [
          T('consequência'),
          T('—'),
          T('uma vogal composta continua sendo uma posição do bloco'),
          T('{yeong} vale uma sílaba, não duas'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'A palavra {ga} soa "ga" e {gak} soa "gak". O que exatamente mudou de uma para a outra?',
    ),
    options: [
      T('a consoante final embaixo mudou o som da vogal'),
      T('a consoante inicial mudou de g para outra coisa'),
      T('a vogal desapareceu e sobrou só a final'),
      T('a palavra passou a ter duas sílabas'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva o bloco coreano que é a vogal i com a consoante final n: ____'),
      answer: '인',
    },
    {
      kind: 'match',
      prompt: T('Ligue o bloco ao som'),
      pairs: [
        { a: T('{ga}'), b: T('"ga": inicial e vogal, sem final') },
        { a: T('{gak}'), b: T('"gak": o mesmo g com consoante final') },
        { a: T('{i}'), b: T('"i": a vogal sozinha') },
        { a: T('{in}'), b: T('"in": a vogal i com final n') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas afirmações sobre o bloco coreano é verdadeira?'),
      options: [
        T('a vogal é a única posição que nunca pode faltar'),
        T('existe sílaba terminada só em consoante'),
        T('a consoante final não altera o som da vogal'),
        T('um quadrado pode conter duas sílabas'),
      ],
      answer: 0,
    },
  ],
};
