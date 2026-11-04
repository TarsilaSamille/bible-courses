import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Sintaxe'),
  title: T('Adjetivos, numerais e onde cada peça fica na pilha'),
  subtitle: T(
    'O modificador vem depois do substantivo que modifica, a partícula {ui} fica no meio da pilha, e entre dois possessivos ela se repete',
  ),
  body: C(`## A pilha do sintagma nominal

A ordem básica da frase é objeto, verbo, sujeito. Essa ordem resolve o problema da frase. Mas o sintagma nominal coreano tem um segundo problema por cima do primeiro, e o segundo é um problema de lugar: um grupo de palavras em torno de um substantivo é uma PILHA, e cada camada dessa pilha tem o seu lugar fixo. A pilha tem esta forma: numeral, contador, substantivo, {ui} (eui, "de"), substantivo.

O detalhe que trava o iniciante está no meio dessa fórmula, e não no fim. O modificador vem DEPOIS do substantivo que ele modifica, e a partícula {ui} não fica nem no começo nem no fim da pilha: fica entre o substantivo e o modificador. Por isso "meu livro vermelho grande" não é uma fila de três palavras, é livro, {ui}, vermelho, {ui}, grande, lido do substantivo para fora. São dois {ui} na mesma frase, e nenhum deles na posição onde o português os teria posto.

Repare também que o substantivo é o centro, e não o fim. Quem traduz do português para o coreano palavra por palavra escreve o substantivo por último, porque em português ele é a última palavra de um sintagma simples; no coreano ele é a peça de onde as outras pendem, e as outras se empilham à direita dele. Um sintagma nominal coreano não é uma fila, é uma árvore deitada de lado com o tronco no meio.

## O adjetivo vem depois do substantivo

O adjetivo coreano é a peça que se gruda no substantivo por trás. E a posição dele é o ponto que amarra este curso aos outros dois, porque as três línguas deste projeto põem o adjetivo em três lugares e a comparação fixa a posição de uma vez. Em português o adjetivo vem antes, em "livro vermelho". Em japonês ele vem antes também, e lá o adjetivo é na verdade um substantivo que simplesmente se coloca antes do outro substantivo. Em mandarim ele vem antes mais uma vez, e a partícula {de} é quem fecha o grupo depois dele.

No coreano o adjetivo vem depois. Não é escolha de gosto: é a posição. E o teste é rápido. "Livro vermelho pequeno" traduzido com os adjetivos na frente vira, em coreano, uma lista de substantivos soltos, sem a peça que os liga, que é justamente o {ui} ou a forma que faz o papel dele.

## O numeral e o contador abrem a pilha

Numeral e contador são a única camada que fica antes de tudo, e é por isso que eles abrem a pilha: quando existem, são a primeira camada e o substantivo vem logo atrás deles. A frase completa, de uma vez: "três livros vermelhos meus" em coreano é {se gwon-ui ppalkan chaek}, lido como numeral, contador, {ui}, adjetivo, substantivo. O substantivo é o CENTRO da pilha, com o numeral de um lado e o modificador do outro, e a tabela central é exatamente esse diagrama. Quem procura o numeral no fim da frase, como em português, nunca o acha.

Um aviso honesto sobre essa frase: quando dois substantivos ficam vizinhos sem verbo entre eles, o coreano os liga pelo {ui}, e a leitura literal de {se gwon-ui ppalkan chaek} é "três volumes de livro vermelho". A pilha é a mesma pilha, e quem decide entre "três livros vermelhos meus" e "três volumes de livro vermelho" é o contexto, não a ordem, e a ordem já está dada.

E o que NÃO muda, dentro da pilha, é a ordem entre os modificadores. Se há dois descritores, como em "livro vermelho pequeno", o mais PRÓXIMO do substantivo é o que distingue mais: {jageun ppalkan chaek} é um livro vermelho pequeno, e não um livro pequeno vermelho. É a única coisa da pilha que o português faz igual.

## O duplo {ui} e o gancho bíblico

Quando dois possessivos vêm seguidos, o {ui} é repetido: "meu de teu de livro" é {naui-ui neui-ui chaek}, e a repetição é obrigatória, não estilística. A alternativa é substantivar o primeiro possessivo, {naui} sozinho pode funcionar como pronome possessivo, sem {ui} e sem substantivo atrás, mas o {ui} não tem substituto elíptico: ou ele se repete, ou a frase ganha uma palavra. Um {ui} repetido é uma das coisas mais brutais do coreano escrito: a mesma sílaba duas vezes seguidas, e o leitor tem de saber que aquilo é duas ligações e não um erro de digitação.

O gancho biblical não pode ser João 6:9, porque aquele versículo já foi gasto no numeral e no contador, e repetir o exemplo apagaria a camada nova. Aqui o versículo volta uma camada mais fundo, em 1 Cor 13:4-8. Em "o amor é paciente", o substantivo {sarang} ocupa o centro e a partícula de tópico gruda nele imediatamente, porque é o substantivo que governa a partícula e o modificador que vem atrás dela: {sarang-eun orae injneun}, "o amor é paciente", com o advérbio {orae} entre o grupo do substantivo e o verbo. E em 1 Cor 13:8 a estrutura se repete intacta, com o substantivo abrindo a oração e o verbo no fim. O mesmo versículo, nas duas camadas, mostra a pilha de fora e de dentro.
`),
  vocab: [
    V('ui', '의', 'partícula genitiva, "de", que liga um grupo ao outro; soa como eui (ui)'),
    V('chaek', '책', 'livro; o substantivo que fica no centro da pilha (chaek)'),
    V('ppalkan', '빨간', 'vermelho, na forma que modifica o substantivo seguinte (ppalkan)'),
    V('jageun', '작은', 'pequeno, na forma que modifica o substantivo seguinte (jageun)'),
    V('keun', '큰', 'grande, na forma que modifica o substantivo seguinte (keun)'),
    V('naui', '나의', 'meu; possessivo que também funciona sozinho (naui)'),
    V('neui', '네', 'teu, teu; possessivo de segunda pessoa (neui)'),
    V('se', '세', 'três; numeral coreano, antes de tudo na pilha (se)'),
    V('gwon', '권', 'contador de livros e de pergaminhos (gwon)'),
    V('sarang', '사랑', 'amor; o substantivo que abre 1 Cor 13 (sarang)'),
    V('orae', '오래', 'por muito tempo; advérbio de duração (orae)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A pilha do sintagma nominal tem esta ordem: numeral, contador, substantivo, {ui}, substantivo. O substantivo fica no centro.',
      ),
    },
    {
      n: '2',
      text: T(
        'O modificador vem sempre DEPOIS do substantivo que modifica, e a partícula {ui} fica no meio da pilha, entre o substantivo e o modificador.',
      ),
    },
    {
      n: '3',
      text: T(
        'O adjetivo nunca vai antes do substantivo, ao contrário do português, do japonês e do mandarim.',
      ),
    },
    {
      n: '4',
      text: T(
        'Numeral e contador são a única camada antes de tudo; sem eles, o substantivo abre a pilha.',
      ),
    },
    {
      n: '5',
      text: T(
        'Entre dois modificadores, o que está mais perto do substantivo é o que distingue mais — como na lição 9 do curso ja.',
      ),
    },
  ],
  notes: [
    {
      label: T('O duplo {ui} e a sua punição'),
      text: T(
        'Dois possessivos seguidos repetem o {ui}: {naui-ui neui-ui chaek}, "meu de teu de livro". A repetição é obrigatória, porque o {ui} é uma partícula sem forma elíptica. É uma das coisas mais brutais do coreano escrito: duas sílabas iguais, lado a lado, com significado diferente.',
      ),
    },
    {
      label: T('O substantivo é o que governa a partícula'),
      text: T(
        'Em {sarang-eun orae injneun} (1 Cor 13:4) o {eun} gruda no substantivo, e o advérvio {orae} vem depois do grupo, não antes dele. Quem traduz palavra por palavra põe o advérbio na frente e quebra a pilha sem perceber, porque o erro não é de palavra, é de lugar.',
      ),
    },
  ],
  examples: [
    {
      text: '빨간 책',
      gloss: T('ppalkan chaek — livro vermelho: o adjetivo vem depois do substantivo'),
    },
    {
      text: '작은 빨간 책',
      gloss: T(
        'jageun ppalkan chaek — livro vermelho pequeno: o mais próximo do substantivo distingue mais',
      ),
    },
    {
      text: '세 권의 책',
      gloss: T('se gwon-ui chaek — três livros: numeral, contador, {ui}, substantivo'),
    },
    {
      text: '나의 빨간 책',
      gloss: T('naui ppalkan chaek — meu livro vermelho: {ui} antes do adjetivo'),
    },
    {
      text: '사랑은 오래 참고',
      gloss: T(
        'sarang-eun orae injneun — o amor é paciente (1 Cor 13:4): substantivo, partícula, advérbio, verbo',
      ),
    },
  ],
  tables: [
    {
      caption: T('A pilha do sintagma nominal, camada por camada'),
      head: [T('Camada'), T('Peça'), T('Onde fica na pilha'), T('Exemplo (romanização)')],
      rows: [
        [T('1'), T('numeral'), T('antes de tudo: abre a pilha'), T('se — três')],
        [T('2'), T('contador'), T('logo depois do numeral'), T('gwon — contador de livros')],
        [T('3'), T('substantivo'), T('o centro: é daqui que tudo pendura'), T('chaek — livro')],
        [
          T('4'),
          T('{ui} (eui)'),
          T('depois do substantivo, e não no fim da pilha'),
          T('gwon-ui — de livros'),
        ],
        [
          T('5'),
          T('modificador do segundo substantivo'),
          T('entre o {ui} e o substantivo que ele modifica'),
          T('ppalkan — vermelho'),
        ],
      ],
    },
    {
      caption: T('Onde o adjetivo cai em cada uma das três línguas'),
      head: [
        T('Língua'),
        T('Onde o adjetivo fica'),
        T('Como fica escrito'),
        T('Onde está a lição'),
      ],
      rows: [
        [
          T('português'),
          T('antes do substantivo'),
          T('livro vermelho'),
          T('a lição 8 deste curso'),
        ],
        [
          T('japonês'),
          T('antes, e é um substantivo'),
          T('akai hon — livro vermelho'),
          T('a lição 10 do curso ja'),
        ],
        [
          T('mandarim'),
          T('antes, fechado pela partícula {de}'),
          T('a partícula {de} vem depois do adjetivo'),
          T('a lição 13 do curso zh'),
        ],
        [
          T('coreano'),
          T('depois do substantivo'),
          T('ppalkan chaek — livro vermelho'),
          T('esta lição'),
        ],
      ],
    },
    {
      caption: T('Um possessive ou dois: o que acontece com o {ui}'),
      head: [T('Situação'), T('Como fica'), T('Leitura')],
      rows: [
        [T('um possessivo'), T('{naui} + {ui} + substantivo'), T('naui-ui chaek — meu livro')],
        [
          T('dois possessivos seguidos'),
          T('o {ui} se repete, sem exceção'),
          T('naui-ui neui-ui chaek — meu de teu de livro'),
        ],
        [
          T('o primeiro substantivado'),
          T('{naui} sozinho, sem {ui} nem substantivo atrás'),
          T('naui chaek — meu livro'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em coreano, onde fica o adjetivo em relação ao substantivo que ele modifica?'),
    options: [
      T('antes do substantivo, como em português'),
      T('depois do substantivo'),
      T('antes do numeral e do contador'),
      T('dentro da partícula {ui}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O adjetivo vem depois do substantivo: "vermelho" + "livro" = 빨간____'),
      answer: '책',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada peça da pilha ao lugar que ela ocupa'),
      pairs: [
        { a: T('{se}'), b: T('numeral: abre a pilha, antes de tudo') },
        { a: T('{gwon}'), b: T('contador: logo depois do numeral') },
        { a: T('{ui}'), b: T('partícula genitiva: depois do substantivo') },
        { a: T('{ppalkan}'), b: T('adjetivo: depois do substantivo, no meio da pilha') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Como se escreve "meu de teu de livro" em coreano?'),
      options: [
        T('naui chaek neui chaek'),
        T('naui-ui neui-ui chaek'),
        T('neui-ui naui-ui chaek'),
        T('chaek-ui naui neui'),
      ],
      answer: 1,
    },
  ],
};
