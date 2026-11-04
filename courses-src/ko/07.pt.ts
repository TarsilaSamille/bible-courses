import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verbo'),
  title: T('O verbo e a terminação que já é o pronome'),
  subtitle: T(
    'O verbo coreano flexiona por estilo e por pessoa, nunca por gênero, e carrega colada a informação que em português viria num pronome separado',
  ),
  body: C(`## A terminação é o pronome

O verbo coreano flexiona por **estilo**, falado ou escrito, e por **pessoa**. Ele nunca flexiona por gênero: o gênero do sujeito não chega ao verbo, e o plural também não, porque quem vai em plural recebe a marca no substantivo e não no verbo. E o verbo é **aglutinante**, que é o detalhe que importa mais: ele carrega grudada a informação que em português viria num pronome separado. O pronome pode sumir porque a terminação já está no verbo, e agora dá para ver a terminação funcionando.

Veja o verbo ir. Falado e plano, "eu vou", "você vai" e "ele vai" são a mesma forma: {ga}. A terminação -a é o "eu", mas faz o mesmo trabalho para "você" e para "ele", e quem desambigua é o contexto. Falado e polido, os três viram {gayo}, com a terminação -yo; escrito e polido, os três viram {gamnida}, com -bnida. Repare no que a polidez fez: ela somou **registro**, não pessoa. O coreano marca o tom na terminação e deixa a pessoa para o contexto; quando a pessoa precisa ser dita mesmo, o pronome aparece, e é por **contraste**, em "eu vou, você não vai", nunca por regra.

Por isso a frase mais curta da língua é "vou", duas sílabas e nada mais: {ga} é ao mesmo tempo o verbo e o pronome. Quem traduz palavra por palavra do português escreve "eu vou"; o coreano escreve "vou". Nada se perdeu no caminho, porque a terminação fazia o trabalho dos dois.

## Conjugar ou não conjugar: a lista curta e a lista longa

Em coreano há duas espécies de verbo, e a diferença não é de estilo nem de sentido: é de flexão. Os verbos cuja **raiz termina em vogal ou em -l** conjugam, ou seja, mudam de forma conforme a pessoa e o registro: é o caso de ita (ir), hada (fazer), oda (vir), boda (ver), sseuda (escrever). Os verbos cuja raiz termina em **outra consoante** nunca mudam: meokda (comer), deolda (ouvir), geolda (andar), gonhada (terminar), chada (sentar) são exatamente a mesma palavra em qualquer frase.

A lista curta é curta mesmo: são poucos verbos, e meia dúzia deles responde por quase tudo o que se fala em coreano. Todo o resto do idioma é lista longa. E o iniciante trava aqui, porque um verbo da lista longa parece errado dentro de uma frase: ele nunca muda, e o aluno espera que mude.

Combine com a partícula de tópico e a frase fecha. {neun} com {meokneumnida} é "eu como", na polida escrita: {neun} diz de quem é a frase, {meokneumnida} diz o que a frase faz. O mesmo {neun} com um verbo da lista longa dá uma entrada de dicionário, não uma frase. O que está em curso, o estado e não o ato, se faz com o mesmo {ida}: meokgo itda, "estou comendo".

## Negar: duas posições, e por que importa

Em coreano a negação pertence ao **verbo**, nunca ao substantivo: não existe um "não" colado ao sujeito. Duas posições resolvem quase tudo. A curta é {an}, sempre **antes** do verbo: an {gayo}, "eu não vou"; an meokseumnida, "eu não como". É a mais usada na fala e a que o ouvido espera. A longa é o final -ji anida, que vem grudado no fim do verbo, gaji anida, "não vou", e é a forma da escrita formal, onde {an} já não aparece. E há uma terceira, que não é negação e sim impossibilidade: {mot} depois do verbo, mot gala, "não consigo ir".

A escolha é de registro: {an} com fala e com tom plano, porque soa curto; a forma longa com texto escrito, com tom polido e quando a frase é longa demais para uma partícula só. Cuidado com uma assimetria que pega o iniciante: {eopda}, a negação de {ida}, vem **depois** do que nega, e é o verbo mais frequente da língua escrita. Quem aplica {an} ao verbo do ser constrói uma frase que o ouvinte entende de outro jeito.

## O registro decide, e o verbo que vem depois do tópico

Três verbos que em português se confundem num só "falar": {malhada} é o neutro, o que serve para tudo; {iyagihada} é o da conversa, contar, tratar de uma coisa; {hwahada} é o formal, o que aparece em discurso e em oração. Três nuances que o português resolve com preposição e o coreano resolve com verbo.

O registro, porém, é a escolha que interessa ao tradutor. O padrão do coreano é o **plano**; a polidez é **opcional** no texto, e é marcada na terminação, não no léxico. Por isso um tradutor coreano não "enfeita" a frase: ele escolhe uma terminação, e essa escolha já diz ao leitor quanto respeito o texto merece. A tradução bíblica coreana tem um registro próprio e reconhecível, e é nele que o verbo {ida} entra sempre **depois** da partícula de tópico, a mesma posição que o {aru} do japonês e o {zai} do mandarim ocupam nas suas frases. As três línguas deste projeto se apoi num verbo de existir ou exibir para dizer que algo é ou está ali.

E o texto bíblico diz algo. Em João 1:1, "era o Verbo", o substantivo recebe a partícula de sujeito e o verbo vem na forma polida: {ireot}, o passado de {ida}. Em João 3:30, "ele precisa crescer, mas eu preciso diminuir", os dois verbos aparecem na mesma forma, a mais direta, e a obrigação é a mesma peça colada nos dois. Compare as duas frases e o registro fica visível: um texto que abre o Evangelho fala em registro alto, e um texto de exigência do mesmo mundo fala em registro direto. O mesmo tradutor, a mesma língua, duas decisões diferentes, e a terminação do verbo é onde elas aparecem.
`),
  vocab: [
    V('ita', '가다', 'ir: verbo conjugado, o modelo desta lição'),
    V('ga', '가', 'eu vou: forma plana falada, a terminação -a é o pronome eu'),
    V('gayo', '가요', 'vou, vai: forma polida falada, terminação -yo'),
    V('gamnida', '갑니다', 'vou, vai: forma polida escrita, terminação -bnida'),
    V('ida', '이다', 'ser, estar: o verbo que vem sempre logo depois da partícula de tópico'),
    V('ireot', '이렀다', 'era: o passado de {ida} na forma polida'),
    V('meokda', '먹다', 'comer: verbo da lista longa, nunca muda de forma'),
    V('meokneumnida', '먹습니다', 'como: comer na forma polida escrita'),
    V('hada', '하다', 'fazer: verbo conjugado da lista curta'),
    V('an', '안', 'não: negador curto, sempre antes do verbo'),
    V('anida', '않다', 'não fazer: o final -ji anida, que nega depois do verbo'),
    V('eopda', '없다', 'não haver, não estar: a negação de {ida}'),
    V('mot', '못하다', 'não conseguir: também depois do verbo'),
    V('malhada', '말하다', 'dizer: o verbo neutro de falar'),
    V('iyagihada', '이야기하다', 'falar, contar, tratar de: o da conversa'),
    V('hwahada', '화하다', 'falar: o formal, o do discurso e da oração'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo flexiona por estilo e por pessoa, nunca por gênero, e é aglutinante: a terminação carrega o que em português viria num pronome separado.',
      ),
    },
    {
      n: '2',
      text: T(
        'O pronome só aparece por contraste. Em "eu vou" falado e plano há uma palavra só, e ela é verbo e pronome ao mesmo tempo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Conjugam os verbos de raiz em vogal ou em -l, como {ita} e {hada}; os de raiz em outra consoante, como {meokda}, nunca mudam de forma.',
      ),
    },
    {
      n: '4',
      text: T(
        'A negação é do verbo, não do substantivo: {an} antes, o final -ji anida depois, e {mot} para o que não se consegue fazer.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ida} vem sempre depois da partícula de tópico, e a escolha entre plano, falado polido e escrito polido é uma decisão de registro, não de léxico.',
      ),
    },
  ],
  notes: [
    {
      label: T('A polidez troca de eixo'),
      text: T(
        'Nas formas polidas os três verbos de ir ficam iguais: {gayo} e {gamnida} dizem "eu", "você" e "ele" ao mesmo tempo. Não é perda de informação, é troca de eixo: o coreano marca o tom e deixa a pessoa ao contexto.',
      ),
    },
    {
      label: T('O verbo do existir é o mesmo nas três línguas'),
      text: T(
        '{ida} ocupa, depois da partícula de tópico, a mesma função que o {aru} do japonês e o {zai} do mandarim: os três idiomas deste projeto se apoi num verbo de existir ou exibir para dizer que algo é ou está ali.',
      ),
    },
  ],
  examples: [
    {
      text: '제가 가요',
      gloss: T(
        'je-ga ga-yo — eu vou: o "eu" mora na terminação, e o pronome só aparece por contexto',
      ),
    },
    { text: '갑니다', gloss: T('gam-ni-da — eu vou: a mesma informação em forma escrita') },
    {
      text: '먹습니다',
      gloss: T('meok-seum-ni-da — eu como: verbo da lista longa com a polida escrita -seum-ni-da'),
    },
    { text: '안 가요', gloss: T('an ga-yo — eu não vou: negação curta, antes do verbo') },
    {
      text: '말씀이 계시니라',
      gloss: T(
        'mal-sseu-mi gye-si-ni-ra — "era o Verbo": substantivo com partícula e verbo na polida',
      ),
    },
  ],
  tables: [
    {
      caption: T('A terminação faz o trabalho do pronome'),
      head: [
        T('Pessoa'),
        T('O que o português escreve'),
        T('Falado, plano'),
        T('Falado, polido'),
        T('Escrito, polido'),
      ],
      rows: [
        [T('eu'), T('eu vou'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('você'), T('você vai'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('ele, ela'), T('ele vai'), T('{ga}'), T('{gayo}'), T('{gamnida}')],
        [T('você, com respeito'), T('o senhor vai'), T('gasini'), T('gasini'), T('gasipnida')],
        [
          T('você e ele, no plural'),
          T('vocês vão'),
          T('gayo-deul'),
          T('gayo-deul'),
          T('gam-ni-da-deul'),
        ],
      ],
    },
    {
      caption: T('Conjugar ou não conjugar: a lista curta é curta mesmo'),
      head: [T('Verbo (romanização)'), T('Glosa'), T('Termina em'), T('Conjuga?')],
      rows: [
        [T('ita'), T('ir'), T('vogal (a)'), T('sim, muda de forma')],
        [T('hada'), T('fazer'), T('vogal (a)'), T('sim, muda de forma')],
        [T('oda'), T('vir'), T('vogal (a)'), T('sim, muda de forma')],
        [T('boda'), T('ver'), T('vogal (o)'), T('sim, muda de forma')],
        [T('meokda'), T('comer'), T('consoante final (da)'), T('não, é sempre igual')],
        [T('deolda'), T('ouvir'), T('consoante final (da)'), T('não, é sempre igual')],
        [T('gonhada'), T('terminar'), T('consoante final (da)'), T('não, é sempre igual')],
      ],
    },
    {
      caption: T('O mesmo verbo em três registros'),
      head: [
        T('Onde aparece'),
        T('Forma (romanização)'),
        T('Terminação'),
        T('O que diz ao leitor'),
      ],
      rows: [
        [T('conversa entre amigos'), T('{ga}'), T('-a'), T('tom plano, e a pessoa ao contexto')],
        [T('fala educada'), T('{gayo}'), T('-yo'), T('tom polido, e a pessoa ao contexto')],
        [
          T('escrito, carta, reunião'),
          T('{gamnida}'),
          T('-bnida'),
          T('tom polido em forma escrita'),
        ],
        [
          T('discurso ou oração'),
          T('mal-sseum-han-dan-mal'),
          T('-da'),
          T('texto solene, registro mais elevado'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em coreano falado e plano, "eu vou" é uma palavra só. Onde está o pronome eu?'),
    options: [
      T('na terminação do verbo'),
      T('em uma partícula separada, antes do verbo'),
      T('na partícula de tópico'),
      T('no fim da frase, depois do verbo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a forma polida falada de "eu vou": ____ 가요'),
      answer: '가',
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra à sua função'),
      pairs: [
        { a: T('{ita}'), b: T('verbo que conjuga') },
        { a: T('{meokda}'), b: T('verbo que nunca muda de forma') },
        { a: T('{an}'), b: T('negação curta, antes do verbo') },
        { a: T('{eopda}'), b: T('negação de {ida}, depois do verbo') },
        { a: T('{ida}'), b: T('ser, estar: sempre depois da partícula de tópico') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em João 1:1 o verbo "era" aparece na forma polida. O que essa escolha está dizendo?',
      ),
      options: [
        T('que o tradutor escolheu um registro elevado para o texto'),
        T('que o verbo muda conforme o substantivo que vem antes'),
        T('que o texto de origem estava escrito em coreano'),
        T('que "era" é um verbo conjugado e os outros não são'),
      ],
      answer: 0,
    },
  ],
};
