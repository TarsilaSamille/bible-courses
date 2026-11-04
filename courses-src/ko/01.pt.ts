import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escrita'),
  title: T('Blocos de sílaba: hangul, hanja e as partículas que tornam o texto legível'),
  subtitle: T(
    'Cada quadrado é uma sílaba com anatomia fixa, a vogal nunca falta, e as partículas mudam com a última consoante',
  ),
  body: C(`## Um quadrado, uma sílaba

O coreano é aglutinante: uma palavra é uma pilha de pedaços, e cada pedaço é uma partícula colada na anterior. E é escrito em blocos de sílaba. Cada bloco é um quadrado que representa exatamente uma sílaba, nem menos nem mais. Um leitor de português abre uma página de coreano e vê uma parede de quadrados; o que ele ainda não sabe é que todo quadrado tem a mesma anatomia, sempre a mesma, e que a anatomia se lê antes da palavra.

O bloco tem três posições, e a leitura é sempre nesta ordem. No topo e à esquerda, opcionalmente, uma consoante inicial (g, k, n, s). No centro e à direita, a vogal (a, eo, u, i), obrigatória e sem exceção. Embaixo, opcionalmente, uma consoante final (k, l, m, p). A consoante inicial soa antes da vogal e a final soa depois dela, e por isso se lê o bloco de cima para baixo e da esquerda para a direita. Um bloco com inicial, vogal e final é guk, "país": três posições ocupadas, três sons. Um bloco só com vogal é "a": uma posição, um som. E não existe terceira possibilidade.

## Um alfabeto, não um ideograma

O hangul foi inventado em 1443, sob o rei Sejong e com acadêmicos da corte, e isso decide tudo o que vem depois. Não é um ideograma: é um alfabetograma. Cada letra representa um som, exatamente como no latim, e não um significado. Um ideograma representa coisas; uma letra representa sons. Um leitor de português chega ao coreano com o hábito de que o sinal escrito é a palavra, e o hangul desfaz esse hábito no primeiro dia de leitura.

A comparação que amarra as três línguas deste projeto: o japonês precisa de dois sistemas, kana e kanji, e nenhum dos dois sozinho escreve o japonês inteiro. O coreano também precisa de dois, hangul e hanja, mas o hangul sozinho já escreve tudo o que se fala. O hanja é o coreano escrito com caracteres chineses, usado ainda em nomes próprios e em palavras savantes; o hangul é o coreano coloquial. Assim como o katakana é registro no japonês, o hanja é registro no coreano. A tradução coreana de 1917, a primeira em coreano, é quase toda hanja; a atual é hangul, com hanja só onde precisa.

## A vogal não é opcional

Este é o detalhe que amarra coreano, mandarim e japonês, e o ponto em que quase todo iniciante tropeça. No mandarim existem sílabas terminadas só em consoante: ba, bei, um som que acaba de repente, sem vogal nenhuma. No coreano isso não existe. Nenhuma sílaba coreana termina em consoante sem vogal. A consoante final mora embaixo no bloco, mas sempre depois de uma vogal. É lote, não som final.

A consequência prática: quem vem do mandarim procura o "som final" e não acha, porque o que ele tem é um som que em japonês se perderia dentro de um kanji. E quem escreve coreano nunca precisa escolher entre duas formas para dizer a mesma sílaba, porque nunca existe sílaba sem vogal para colidir com outra.

## As partículas e a ordem

O gancho central do coreano são as partículas, e sem elas o texto coreano é uma sequência de quadrados sem relação entre si. {eun} e {neun} marcam o tópico, o assunto de que a frase trata, que não é necessariamente o sujeito. {i} e {gwa} marcam o sujeito: {sarang} com {i} ou {gwa} é a pessoa funcionando como sujeito. {eul} e {reul} marcam o objeto direto. {e} é destino, lugar ou tempo; {eseo} é origem, "a partir de".

A escolha entre os dois membros de cada par é mecânica e não admite gosto: conta a última consoante da palavra. Palavra com consoante final recebe a forma dura, {eun}, {i}, {eul}. Palavra terminada em vogal recebe a forma macia, {neun}, {gwa}, {reul}. guk termina em k e por isso leva {eun}; nara termina em a e por isso leva {neun}. Errar aqui é o erro mais comum do iniciante e o mais visível, porque o ouvinte espera a outra pronúncia e não entende o que você quis dizer.

E a ordem é objeto, verbo, sujeito: {naneun yeohaeneul sseumnida}, "eu leio um livro", com o objeto antes do verbo e o sujeito antes do objeto. Quem traduz palavra por palavra do português monta sujeito, verbo, objeto e produz uma frase que soa a tradução. São as partículas que salvam: elas declaram a função de cada peça mesmo quando a posição mente.

A tradução coreana de 1917 é toda hanja, e a atual é hangul. Em João 1:1, "no princípio era o Verbo", o Verbo aparece como substantivo, e em coreano moderno todo substantivo que é sujeito recebe {i} ou {gwa}. O português não tem essa partícula: em "o Verbo" e em "eu leio" o substantivo é tratado do mesmo jeito. Uma tradução coreana de João 1 tem uma marca que a portuguesa não tem, e essa marca está dizendo o que a frase fez com a palavra.
`),
  vocab: [
    V('eun', '은', 'tópico depois de palavra com consoante final (eun)'),
    V('neun', '는', 'tópico depois de palavra terminada em vogal (neun)'),
    V('i', '이', 'sujeito depois de palavra com consoante final (i)'),
    V('gwa', '가', 'sujeito depois de palavra terminada em vogal (gwa)'),
    V('eul', '을', 'objeto direto depois de palavra com consoante final (eul)'),
    V('reul', '를', 'objeto direto depois de palavra terminada em vogal (reul)'),
    V('e', '에', 'destino, lugar ou tempo (e)'),
    V('eseo', '에서', 'origem; a partir de (eseo)'),
    V('sarang', '사람', 'pessoa; ser humano (sarang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo bloco é uma sílaba: consoante inicial opcional, vogal obrigatória, consoante final opcional.',
      ),
    },
    {
      n: '2',
      text: T(
        'Não existe sílaba coreana sem vogal. No mandarim existe — e é por isso que o aluno que vem de lá procura um som que não está lá.',
      ),
    },
    {
      n: '3',
      text: T(
        '{eun} {neun} é tópico, {i} {gwa} é sujeito e {eul} {reul} é objeto: a forma dura ou macia depende só da última consoante da palavra.',
      ),
    },
    {
      n: '4',
      text: T(
        '{e} é destino, lugar ou tempo; {eseo} é origem. A troca entre os dois é o erro mais comum do iniciante.',
      ),
    },
    {
      n: '5',
      text: T(
        'A ordem é objeto – verbo – sujeito, o inverso do português. As partículas declaram a função, por isso a posição pode mentir.',
      ),
    },
  ],
  notes: [
    {
      label: T('Alfabeto de um lado, ideograma do outro'),
      text: T(
        'O hangul foi inventado em 1443 e cada letra sua representa um som; o kanji representa uma coisa. O coreano precisa dos dois, hangul e hanja, como o japonês precisa de kana e kanji — mas o hangul sozinho já escreve tudo o que se fala.',
      ),
    },
    {
      label: T('O substantivo coreano leva partícula'),
      text: T(
        'Em coreano moderno o substantivo recebe {i} ou {gwa} quando é sujeito. Em João 1:1 o Verbo aparece como substantivo e por isso recebe partícula; em português não há marca alguma. Um tradutor que não conhece o sistema apaga a informação ao transpor.',
      ),
    },
  ],
  examples: [
    { text: '한국어', gloss: T('han-gu-geo — coreano; três blocos, três sílabas') },
    { text: '사람이', gloss: T('sarang-i — a pessoa (sujeito depois de consoante: i)') },
    { text: '학교에', gloss: T('hak-gyo-e — à escola (destino: e)') },
    { text: '집에서', gloss: T('jib-e-seo — de casa (origem: eseo)') },
  ],
  tables: [
    {
      caption: T('A anatomia do bloco, lida de cima para baixo'),
      head: [
        T('Posição no quadrado'),
        T('Elemento'),
        T('Obrigatório'),
        T('Sons típicos'),
        T('Símbolos'),
      ],
      rows: [
        [
          T('topo, à esquerda'),
          T('consoante inicial'),
          T('não'),
          T('g, k, n, s, j'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ}'),
        ],
        [
          T('centro e à direita'),
          T('vogal'),
          T('sim, sempre'),
          T('a, eo, u, i, o'),
          T('{ㅏ} {ㅓ} {ㅜ} {ㅣ} {ㅗ}'),
        ],
        [
          T('embaixo'),
          T('consoante final'),
          T('não'),
          T('k, l, m, p, t'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ}'),
        ],
        [
          T('o quadrado inteiro'),
          T('uma sílaba'),
          T('é a unidade de leitura'),
          T('nunca duas sílabas'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('A partícula muda com a última consoante da palavra'),
      head: [
        T('Palavra (romaji)'),
        T('Última letra'),
        T('Tem consoante final'),
        T('Tópico'),
        T('Sujeito'),
        T('Objeto'),
      ],
      rows: [
        [T('guk'), T('k'), T('sim'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('bang'), T('ng'), T('sim'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('mul'), T('l'), T('sim'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('sarang'), T('ng'), T('sim'), T('{eun}'), T('{i}'), T('{eul}')],
        [T('nara'), T('a'), T('não'), T('{neun}'), T('{gwa}'), T('{reul}')],
        [T('cha'), T('a'), T('não'), T('{neun}'), T('{gwa}'), T('{reul}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('A palavra guk termina em consoante. Qual partícula de sujeito ela recebe?'),
    options: [T('{i}'), T('{gwa}'), T('{eun}'), T('{reul}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "a pessoa" como sujeito, depois de uma consoante: 사람____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à função'),
      pairs: [
        { a: T('{eun}'), b: T('tópico depois de consoante final') },
        { a: T('{neun}'), b: T('tópico depois de vogal') },
        { a: T('{e}'), b: T('destino, lugar ou tempo') },
        { a: T('{eseo}'), b: T('origem; a partir de') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas afirmações sobre o bloco coreano é verdadeira?'),
      options: [
        T('toda sílaba coreana tem vogal'),
        T('existe sílaba terminada só em consoante'),
        T('o hangul é um ideograma'),
        T('hanja é o coreano coloquial'),
      ],
      answer: 0,
    },
  ],
};
