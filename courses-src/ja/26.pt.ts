import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Partícula'),
  title: T('{wa} e {ga}: o que é assunto e o que é sujeito'),
  subtitle: T(
    'As duas vão depois do substantivo, na mesma posição, e nenhuma delas flexiona; o que as separa é o que o leitor já sabe no momento em que a frase começa',
  ),
  body: C(`
## Duas partículas, o mesmo lugar

O português trata do mesmo jeito o assunto e o sujeito. Em "Pedro viu o gato" não há nada que diga se Pedro é o assunto da conversa ou quem executou o verbo, e o contexto resolve sem deixar rastro. No japonês a distinção existe, mora numa partícula e não sobrevive à tradução palavra a palavra. {wa} vai depois do substantivo e marca assunto, o que a frase vem tratar. {ga} vai depois do substantivo e marca sujeito, quem faz a ação daquela oração.

As duas ocupam exatamente a mesma posição, e é por isso que a posição não diz qual é qual. *kare wa iku* e *kare ga iku* têm as mesmas palavras na mesma ordem e produzem frases diferentes. Nenhuma das duas é artigo, e nenhuma das duas flexiona: são as duas marcas que um nome pode receber, e um nome recebe uma delas por vez.

## O que o {wa} faz: assunto, contraste, referência

**Assunto** é o que o leitor já sabe. Em "ele vai", quem fala já estabeleceu de quem se trata, e o que a frase entrega é o verbo; o {wa} marca a parte que já estava ganha, e por isso ele quase desaparece na tradução, porque o português também não tem palavra para "isto de que estou tratando".

O {wa} faz três coisas além disso, e as três aparecem o tempo todo num Evangelho. A primeira é contraste: a mesma partícula nos dois lados de duas orações produz "não A, mas B". João 1:5 é o exemplo mais limpo, *hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta.*: o {wa} da segunda oração não repete um assunto, ele opõe um assunto ao outro, e é a segunda oração que ganha o peso.

A segunda é referência. Quando o nome já apareceu e a frase volta a ele, o {wa} é o que chama o leitor de volta, e a tradução que escreve "quanto a isso" está inventando uma frase que o japonês não tem. A terceira é a partícula do "isto é", do "ou seja": *kore wa ii koto da to iu koto da*, "isto é que é uma coisa boa", em que o {wa} marca o assunto de uma oração que vai explicar o assunto da anterior.

## O que o {ga} faz: o sujeito que é informação nova

O {ga} marca o **sujeito** de uma oração, e o que ele marca costuma ser justamente a informação que o leitor não tinha: aquilo que a frase entrega. Em *fuku ga furu*, "chove", o português não precisa de sujeito porque em português chover não tem quem chove; em japonês a chuva é um nome, e um nome precisa de partícula como qualquer outro.

A regra prática cabe numa frase: se o nome é aquilo de que a conversa já trata, ele leva {wa}; se o nome é aquilo que a oração está assertando agora, ele leva {ga}. Os dois casos aparecem no mesmo parágrafo, e quem os separa é o que foi dito antes, não a frase que está na página. Em João 3:19, *hikari ga yo ni kite iru no ni*, o {ga} está em quem faz a ação justamente porque a luz é o assunto novo da frase, e a segunda oração da mesma linha já passa a falar das pessoas com o {wa}.

## Quando as duas entram na mesma oração

Uma oração pode ter assunto e sujeito ao mesmo tempo, e nesse caso são duas partículas em duas posições. *Mado wa soto ga kakoyō*, "a janela está barulhenta lá fora": o {wa} marca a janela, que é o assunto, e o {ga} marca o que está barulhento, que é a informação. * sono hon wa dare ga yomimashita ka*, "quem leu aquele livro" faz o mesmo com um interrogativo no {ga}.

A segunda situação inverte o par e é a mais útil num texto bíblico: na voz passiva, **quem sofre a ação vira assunto com {wa} e quem faz vira sujeito com {ga}**. *Kami ga hito o yobutta* é "Deus enviou o homem"; *hito wa kami ga yoborareta* é a mesma frase com os papéis trocados, e o nome que era sujeito virou assunto. João 1:6 usa a segunda forma: *kami yobarusareta Yohane to iu hito ga arawareta*, e quem traduz precisa decidir, sem poder escapar, qual dos dois nomes da versão japonesa é o assunto da frase.

A terceira é o verbo de existir, {aru} e {iru}, que é o caso em que o {wa} está simplesmente errado. "Eu tenho um amigo" é *tomodachi ga imasu*, e o {ga} não marca um sujeito da conversa: marca a coisa que existe. O mesmo vale para *kuruma ga arimasu*, o carro está aqui. **Com verbo de existir, quem existe leva {ga}**, e escrever {wa} produz uma frase que o leitor nativo lê como errado, mesmo que o sentido esteja inteiro.

E há um quarto caso, o mais curto de todos: o verbo de ser. *Shu wa kami desu*, "o Senhor é Deus", leva {wa} e não leva {ga}, porque o que a oração afirma é a identidade do próprio assunto. São quatro situações, e as quatro dão o mesmo conselho: a partícula do nome não se escolhe pelo sentido da frase, escolhe-se pelo que aquela oração faz com aquele nome.
`),
  vocab: [
    V(
      'wa',
      'は',
      'assunto: o que o leitor já sabe e de que a frase trata; no plural de orações, contraste (wa)',
    ),
    V('ga', 'が', 'sujeito: quem faz a ação da oração, e a informação que a frase entrega (ga)'),
    V('fuku', '降る', 'cair; a chuva, substantivo: *fuku ga furu* (fuku)'),
    V('yami', '闇', 'escuridão, trevas (yami)'),
    V('hikari', '光', 'luz (hikari)'),
    V('kotoba', 'ことば', 'palavra; o substantivo de João 1:1 (kotoba)'),
    V('kami', '神', 'Deus; e, em compounds, a raiz de tudo que é de Deus (kami)'),
    V('sono', 'その', 'esse; o demonstrativo que aponta para o que já foi mencionado (sono)'),
    V('dare', '誰', 'quem; interrogativo que entra em {ga} (dare)'),
    V('mado', '窓', 'janela (mado)'),
    V('soto', '外', 'fora; o lado de fora, e "fora de" (soto)'),
    V('yobaru', '現われる', 'aparecer, estar presente; o verbo de João 1:6 (yobaru)'),
    V('okuru', '送る', 'enviar; o verbo da construção passiva do exemplo (okuru)'),
    V('tomodachi', '友', 'amigo, companheiro (tomodachi)'),
    V('aru', 'ある', 'haver, existir: o verbo que nunca aceita {wa} no nome (aru)'),
    V('iru', 'いる', 'estar, ocupar um lugar; e existir, quando o que existe é gente (iru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{wa} e {ga} vão depois do substantivo, na mesma posição, e nenhuma das duas é artigo nem flexiona. Um nome recebe uma delas por vez.',
      ),
    },
    {
      n: '2',
      text: T(
        '{wa} marca o assunto, que é o que o leitor já sabe; {ga} marca o sujeito, que é a informação nova da oração. O que decide é o que foi dito antes, não a frase à vista.',
      ),
    },
    {
      n: '3',
      text: T(
        '{wa} em duas orações faz contraste, e é assim que João 1:5 põe luz e trevas lado a lado.',
      ),
    },
    {
      n: '4',
      text: T(
        'Na voz passiva o paciente leva {wa} e o agente leva {ga}: *sono hito wa kami ga okutta*. É a inversão que o português não tem.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com {aru} e {iru} quem existe leva {ga}: *tomodachi ga imasu*, *kuruma ga arimasen*. Com o verbo de ser, o sujeito leva {wa}: *shu wa kami desu*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o iniciante escreve {ga} em tudo'),
      text: T(
        'Quem traduz do português procura o sujeito da oração e encontra {ga}, e a frase sai correta nas três quartas das vezes, porque em português quase todo verbo tem sujeito explícito. O que denuncia o excesso é a palavra seguinte: se o nome já apareceu na oração anterior, quase sempre o que ele recebe é {wa}, porque o assunto de que se trata é o mesmo. Regra de leitura: se a linha japonesa repete um substantivo que a linha anterior já tinha, a partícula é {wa}; se traz um substantivo que o leitor não esperava, é {ga}.',
      ),
    },
    {
      label: T('Um nome só recebe uma partícula por oração'),
      text: T(
        'Em *hon to notebook ga arimasu*, "tenho um livro e um caderno", os dois nomes estão lá e há um único {ga}, no fim. A partícula fecha a lista de nomes, e quem escreve *hon ga, notebook ga* está fazendo duas orações que o japonês não tinha. É a mesma economia da partícula {no}, que liga sem repetir: o que se repete no japonês é a estrutura, não a marca.',
      ),
    },
  ],
  examples: [
    {
      text: '光はやみの中に輝いている。やみはこれに打ち勝たなかった。',
      gloss: T(
        'hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta. — a luz brilha na escuridão, e a escuridão não a venceu (João 1:5): os dois {wa} marcam assuntos que se opõem',
      ),
    },
    {
      text: '初めに、ことばがあった。ことばは神とともにあった。',
      gloss: T(
        'hazime ni, kotoba ga atta. kotoba wa kami to tomoni atta. — no princípio havia a palavra; a palavra estava com Deus (João 1:1-2): o mesmo nome, duas partículas',
      ),
    },
    {
      text: '神から遣わされたヨハネという人が現われた',
      gloss: T(
        'kami yobarusareta Yohane to iu hito ga arawareta — apareceu um homem chamado João, enviado por Deus (João 1:6): {kami} é quem envia, {hito} é quem aparece',
      ),
    },
    {
      text: 'その本は誰が読みましたか。',
      gloss: T(
        'sono hon wa dare ga yomimashita ka — quem leu aquele livro (o livro é assunto, e o interrogativo é sujeito)',
      ),
    },
    {
      text: '窓は外が騒がしい',
      gloss: T(
        'mado wa soto ga kakoyō — a janela está barulhenta lá fora (assunto e sujeito na mesma oração)',
      ),
    },
    {
      text: '友達がいます。',
      gloss: T('tomodachi ga imasu — tenho um amigo (com o verbo de existir, o {wa} está errado)'),
    },
    {
      text: '主は神です。',
      gloss: T(
        'shu wa kami desu — o Senhor é Deus (o verbo de ser toma o assunto, e não o sujeito)',
      ),
    },
    {
      text: 'その人は神が遣わした。',
      gloss: T(
        'sono hito wa kami ga okutta — aquela pessoa foi enviada por Deus (voz passiva: {wa} no paciente, {ga} no agente)',
      ),
    },
  ],
  tables: [
    {
      caption: T('O mesmo nome com {wa} e com {ga}: o que muda é o que o leitor já sabe'),
      head: [T('O que você quer dizer'), T('O que se escreve'), T('O que o leitor sabe')],
      rows: [
        [T('quanto a ele, ele vai'), T('{kare wa iku}'), T('de quem se trata: já era assunto')],
        [T('ele foi'), T('{kare ga iku}'), T('quem fez: é a informação da frase')],
        [
          T('não o pai, mas o filho'),
          T('{chichi wa …, musuko wa …}'),
          T('dois assuntos opostos, e a segunda oração vence'),
        ],
        [
          T('ele tem um livro'),
          T('{kare ni hon ga aru}'),
          T('quem tem é o que se afirma: {ga} por {aru}'),
        ],
        [
          T('quando chegou quem?'),
          T('{dare ga kita ka}'),
          T('o nome é novo, e por isso vem em {ga}'),
        ],
      ],
    },
    {
      caption: T('As quatro situações em que as duas entram na mesma oração'),
      head: [T('A frase'), T('O que leva {wa}'), T('O que leva {ga}'), T('Por quê')],
      rows: [
        [
          T('{mado wa soto ga kakoyō}'),
          T('a janela'),
          T('o que está barulhento'),
          T('assunto e a informação nova'),
        ],
        [
          T('{sono hon wa dare ga yomimashita ka}'),
          T('o livro'),
          T('quem, interrogativo'),
          T('o foco da pergunta é o {ga}'),
        ],
        [
          T('{shu wa kami desu}'),
          T('o Senhor'),
          T('nada'),
          T('o verbo de ser não tem sujeito próprio'),
        ],
        [
          T('{sono hito wa kami ga okutta}'),
          T('aquela pessoa, que sofre'),
          T('Deus, que faz'),
          T('a passiva inverte os dois papéis'),
        ],
        [
          T('{tomodachi ga imasu}'),
          T('nada'),
          T('o amigo'),
          T('com {iru}, quem existe é sujeito e não assunto'),
        ],
      ],
    },
    {
      caption: T('A mesma informação, as duas partículas, e o que muda no português'),
      head: [T('Português'), T('Japonês'), T('Se o nome é o mesmo, muda')],
      rows: [
        [
          T('Pedro foi à igreja'),
          T('{kare wa kyōkai e iki}, quando já se sabe de quem se trata'),
          T('a partícula some: o português não marca assunto'),
        ],
        [
          T('Pedro foi à igreja'),
          T('{kare ga kyōkai e iki}, quando é informação nova'),
          T('o nome recebe {ga} e passa a ser sujeito'),
        ],
        [
          T('Pedro chegou tarde'),
          T('{kare wa osoi} ou {kare ga osoi}'),
          T('as duas são possíveis; quem decide é a frase anterior'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {友達がいます}, por que o nome recebe {ga} e não {wa}?'),
    options: [
      T('porque {iru} é o verbo de existir, e o que existe entra como sujeito, não como assunto'),
      T('porque o nome está no fim da frase e {wa} nunca aparece no fim'),
      T('porque {ga} é a partícula do objeto e {wa} é a do lugar'),
      T('porque o português diz "eu tenho um amigo" e a tradução obriga a mudar o nome'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete com a partícula do sujeito do verbo de existir: 友達____います (tenho um amigo)',
      ),
      answer: 'が',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela marca'),
      pairs: [
        { a: T('{wa}'), b: T('o assunto: o que o leitor já sabe e de que a frase trata') },
        { a: T('{ga}'), b: T('o sujeito: quem faz a ação e o que a frase asserta') },
        {
          a: T('{sono hito wa kami ga okutta}'),
          b: T('a voz passiva: o paciente em {wa}, o agente em {ga}'),
        },
        { a: T('{tomodachi ga imasu}'), b: T('o verbo de existir: o que existe entra em {ga}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Você lê duas linhas seguidas e o mesmo nome aparece nas duas. Na segunda linha, qual partícula é a mais provável?',
      ),
      options: [
        T('{wa}, porque o nome já era assunto da conversa e a linha nova volta a ele'),
        T('{ga}, porque a segunda linha começa uma oração nova e traz informação nova'),
        T('nenhuma das duas, porque o nome não pode levar partícula duas vezes'),
        T('{ga}, porque a tradução portuguesa põe o sujeito de novo a cada oração'),
      ],
      answer: 0,
    },
  ],
};
