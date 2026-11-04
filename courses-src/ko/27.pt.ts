import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partículas'),
  title: T(
    '{e}, {eseo}, {ege} e {hante}: quatro relações na mesma vogal, e o verbo que decide qual delas é',
  ),
  subtitle: T(
    '{e} não tem sentido próprio: ela aponta para o nome e pergunta o que o verbo faz com ele. A resposta está no verbo, e é por isso que a mesma partícula serve para três relações',
  ),
  body: C(`## {e} não quer dizer nada sozinha

{e} não significa "para", nem "em", nem "a". Ela aponta para o nome que vem colada e espera que o verbo diga o que está acontecendo com ele. Um verbo de movimento transforma {e} em destino; um verbo de permanência transforma {e} em lugar; um nome de tempo com {e} marca o momento. Três relações, uma partícula, e o critério é o verbo.

Em coreano, {jib-e ga-da} é ir para casa, {jib-e itda} é estar em casa, e {i-re} é no domingo. As três frases têm a mesma partícula e nenhuma delas a traduz: a preposição que o português usa em cada uma está nas três, e o coreano não escreve nenhuma. Quem traduz do português chega com a preposição pronta e perde a informação, porque em coreano a relação não está na partícula e sim no par verbo e nome.

E o mesmo vale para {eseo}, que parece a operação inversa e não é. {eseo} aponta para um ponto de partida de caminho, {jib-e-seo na-nanda} é sair de casa, e para uma transformação, {hwan-eu-ro} é com dinheiro, o meio de uma troca. Nos dois casos o nome é o ponto em que algo deixa de estar como estava. {e} e {eseo} não são "destino e origem" em geral: são duas respostas a uma pergunta que a partícula faz e que só o verbo responde.

## O mesmo lugar, dois verbos, duas partículas

O par {e} e {eseo} na mesma coisa é o que confunde o leitor de português, e ele não se resolve decorando regra: resolve-se olhando o verbo.

Em coreano, estar na escola é {hakgyo-e itda} e estudar na escola é {hakgyo-e-seo gongbu-ham-ni-da}. A escola é a mesma, o nome é o mesmo, e a partícula mudou. O que mudou é que no primeiro caso não acontece nada: alguém está num lugar e permanece. No segundo caso acontece uma coisa ali dentro, e a ação é o que a frase está contando. A partícula segue o verbo, e o verbo diz se há evento.

O critério é verificável em qualquer frase: pergunte o que o verbo faz. Verbos de estado, de posição e de existência pedem {e}: está, fica, mora, existe, cabe. Verbos de evento pedem {eseo}: estudia, trabalha, come, reza, escreve. E a lista não é uma regra fechada, e a exceção aparece justamente nos verbos que cabem nos dois lados.

A exceção são os verbos que cabem nos dois lados. {Ja-da} é dormir, e tanto {jib-e ja-da} quanto {jib-e-seo ja-da} são corretos, em coreano falado e escrito. A razão é que dormir é ao mesmo tempo um estado, o que dura a noite inteira, e um evento, o que acontece enquanto se dorme. {Meok-da}, comer, se comporta do mesmo jeito em alguns contextos e não em outros, e é por isso que a partícula de lugar em coreano não é um sistema fechado: é uma consequência do verbo, e o verbo às vezes deixa a escolha em aberto. Um manual que apresenta {e} como "em" e {eseo} como "de" está errado; a leitura bíblica depende inteiramente dessa distinção.

## Duas palavras para o destinatário

O destinatário tem duas palavras, e elas não são sinônimos. **{Hante} é o destinatário de uma relação entre pessoas, e soa íntima ou de baixo para cima:** {chin-gu-han-te}, a um amigo, {eomeoni-han-te}, à mãe. {Ege} é a forma formal, e é a que a Bíblia usa com Deus. Nas Escrituras quase não aparece {hante} referido a Deus: o que aparece é {yehova-ege}, a ele, e é essa forma que o tradutor teve de escolher.

A distinção se nota no verbo que acompanha cada uma. {Hante} entra diretamente no verbo da entrega e da fala: {hante ju-da}, dar a alguém, {hante mal-ha-da}, falar a alguém. {Ege} aceita o mesmo verbo e ainda o verbo polido {deu-ri-da}, dar, que é a forma que se usa com quem está acima. Um leitor que traduz {hante} e {ege} pela mesma preposição "a" perde a informação de registro, e é a informação de registro que diz quem está em posição de superior.

E há uma terceira forma, que não é uma partícula diferente e sim a mesma depois de vogal. Depois de uma sílaba terminada em vogal, {ege} aparece como {kke}: {ju-kke}, ao Senhor, {abeo-ji-kke}, ao pai. É a mesma relação com a partícula adaptada ao som do nome, e o detalhe que o leitor biblical vai encontrar em cada linha é que {ju-kke} humilha quem fala. Um homem escreve {ju-kke} a Deus; dois homens na rua não.

## Duas partículas, o mesmo som, Salmo 23 e Provérbios 3

O texto bíblico oferece o exemplo mais limpo em duas linhas. Em Provérbios 3:6 o verbo é {mar-ha-da}, entregar, e o nome é Deus: {geu-ege}, a ele. A relação é de destinatário de uma ação, e a partícula é {ege}. Em Salmo 23:6 o verbo é {ge-hal-da}, morar, e o nome é uma casa: {yehova-ui jib-e}, na casa do Senhor. A relação é de lugar de permanência, e a partícula é {e}.

**A mesma vogal, o mesmo som, duas relações opostas**, e o que as separa é o verbo: entregar pede {ege}, morar pede {e}. Um leitor de português traduz as duas com a preposição "a" e não vê diferença nenhuma, porque em português a preposição não muda. Em coreano a mudança existe, está escrita, e é o que impede que a linha de Provérbios e a linha do Salmo signifiquem a mesma coisa.

O mesmo vale para a palavra que fecha a frase de Provérbios: {geul-eul mar-ha-da}, confiá-lo a ele. O substantivo caminho tem partícula de objeto, o verbo é o da entrega, e o destinatário é Deus. Três posições, três peças, e a frase inteira se sustenta sem uma palavra que não esteja lá.
`),
  vocab: [
    V('e', '에', 'a partícula que aponta para o nome e espera que o verbo diga a relação'),
    V(
      'eseo',
      '에서',
      'de onde, a partir de: ponto de partida de um caminho ou de uma transformação',
    ),
    V('ege', '에게', 'a alguém, no registro formal: o destinatário que a Bíblia usa com Deus'),
    V('hante', '한테', 'a alguém, no registro íntimo ou de baixo para cima'),
    V('kke', '께', 'a alguém: a forma de {ege} depois de uma sílaba terminada em vogal'),
    V('ju', '주', 'o Senhor: a raiz de {ju-kke}'),
    V('ju-kke', '주께', 'ao Senhor: {ege} depois de vogal, e a forma que humilha quem escreve'),
    V(
      'yehova-ege',
      '여호와에게',
      'ao Senhor: o destinatário de uma ação, no registro da Escritura',
    ),
    V('geul', '길', 'caminho'),
    V('marhada', '맡기라', 'entregar, confiar: o verbo de Provérbios 3:6'),
    V('jib', '집', 'casa'),
    V('nanaga', '나가', 'sair; o verbo que faz de {eseo} um ponto de partida'),
    V('hakgyo', '학교', 'escola'),
    V('gongbu', '공부', 'estudar; o verbo que faz de {eseo} o lugar de uma ação'),
    V('itda', '있다', 'estar, permanecer: o verbo que faz de {e} um lugar de permanência'),
    V('geori', '거리', 'rua, bairro: o substantivo que aceita {e} e {eseo} com verbos diferentes'),
    V('ja', '자다', 'dormir: o verbo que aceita as duas partículas, e a exceção da regra'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{e} não tem sentido próprio. Com verbo de movimento é destino, com verbo de permanência é lugar, com nome de tempo é momento. É o verbo que diz qual das três é.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eseo} aponta o ponto em que algo deixa de estar como estava: a saída de um caminho ou o meio de uma transformação. Por isso {e} e {eseo} não são "destino e origem" em geral.',
      ),
    },
    {
      n: '3',
      text: T(
        'O mesmo lugar recebe {e} ou {eseo} conforme o verbo: estado e permanência pedem {e}, evento e ação pedem {eseo}. A regra tem exceção, e a exceção são os verbos que cabem nos dois lados.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hante} é o destinatário de uma relação entre pessoas; {ege} é a forma formal, e é a que a Escritura usa com Deus. A escolha entre as duas é uma informação de registro.',
      ),
    },
    {
      n: '5',
      text: T(
        'Depois de uma sílaba terminada em vogal, {ege} aparece como {kke}: {ju} + {kke}, {ju-kke}. É a mesma relação, com a partícula adaptada ao som do nome.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que o português resolve com uma preposição'),
      text: T(
        'O português tem uma preposição "a" para destino, uma "em" para lugar e uma "de" para origem, e o contexto diz qual é qual. O coreano tem cinco partículas para isso e nenhuma delas é a preposição portuguesa traduzida. A partícula coreana não nomeia a relação: ela obriga o verbo a declarar a relação, e é por isso que a mesma palavra aparece em duas frases que o português escreve de forma diferente.',
      ),
    },
    {
      label: T('Por que a Escritura não usa {hante} com Deus'),
      text: T(
        '{hante} é a forma de uma relação entre pessoas, e a Escritura escreve para Deus em registro formal. Por isso o que aparece nas páginas é {yehova-ege} e, depois de vogal, {ju-kke}. Um leitor que traduz as duas por "para" perde o registro, e o registro é justamente o que diz quem está em posição de superior.',
      ),
    },
  ],
  examples: [
    { text: '학교에', gloss: T('hak-gyo-e — à escola: {e} sobre um verbo de movimento') },
    {
      text: '학교에 있다',
      gloss: T(
        'hak-gyo-e it-da — estou na escola: a mesma partícula, agora sobre um verbo de permanência',
      ),
    },
    {
      text: '학교에서 공부한다',
      gloss: T(
        'hak-gyo-e-seo gong-bu-ham-ni-da — estudo na escola: o mesmo nome com {eseo}, porque agora há uma ação acontecendo ali',
      ),
    },
    {
      text: '집에서 나간다',
      gloss: T('jib-e-seo na-nan-da — saio de casa: {eseo} como ponto de partida de um caminho'),
    },
    {
      text: '친구한테',
      gloss: T('chin-gu-han-te — a um amigo: {hante}, o destinatário de uma relação entre pessoas'),
    },
    {
      text: '그에게',
      gloss: T(
        'geu-ege — a ele (Pv 3:6): {ege}, o destinatário formal, e aqui o destinatário é Deus',
      ),
    },
    {
      text: '주께',
      gloss: T('ju-kke — ao Senhor: {ege} depois de vogal, na forma que humilha quem escreve'),
    },
    {
      text: '여호와의 집에',
      gloss: T(
        'yeho-va-ui jib-e — na casa do Senhor (Sl 23:6): {e} sobre o verbo morar, que é um lugar de permanência',
      ),
    },
    {
      text: '길을 맡기라',
      gloss: T(
        'geul-eul mar-ha-da — confiá-lo: o substantivo com partícula de objeto e o verbo da entrega',
      ),
    },
    {
      text: '삼 시에',
      gloss: T(
        'sam si-e — às três horas: {e} sobre um nome de tempo, o terceiro uso da mesma partícula',
      ),
    },
  ],
  tables: [
    {
      caption: T('A mesma partícula com três verbos, e três relações'),
      head: [T('Nome'), T('Verbo'), T('O que o verbo faz'), T('Partícula'), T('Leitura')],
      rows: [
        [T('{jib}'), T('{ga-da}'), T('move-se para'), T('{e}'), T('para casa')],
        [T('{jib}'), T('{it-da}'), T('fica em'), T('{e}'), T('em casa')],
        [T('{i-re}'), T('nenhum'), T('marca o momento'), T('{e}'), T('no domingo')],
        [T('{jib}'), T('{na-ga-da}'), T('sai de'), T('{eseo}'), T('de casa')],
        [T('{hwan}'), T('{sa-gi-da}'), T('troca-se por'), T('{eseo}'), T('com dinheiro')],
      ],
    },
    {
      caption: T('O mesmo lugar com dois verbos, e a partícula que muda'),
      head: [T('Frase'), T('O que está acontecendo'), T('Partícula'), T('Por quê')],
      rows: [
        [T('hakgyo-e itda'), T('ninguém está fazendo nada'), T('{e}'), T('estado, e não evento')],
        [
          T('hakgyo-e-seo gongbu-ham-ni-da'),
          T('uma ação está acontecendo ali dentro'),
          T('{eseo}'),
          T('evento, e não estado'),
        ],
        [
          T('jib-e ja-da'),
          T('dormir, que é estado e evento ao mesmo tempo'),
          T('{e} e {eseo}'),
          T('a exceção: o verbo deixa a escolha aberta'),
        ],
      ],
    },
    {
      caption: T('Três formas de destinatário, e o registro de cada uma'),
      head: [T('Partícula'), T('Registro'), T('Verbo que costuma acompanhar'), T('Como aparece')],
      rows: [
        [
          T('{hante}'),
          T('íntimo, ou de baixo para cima'),
          T('주다, 말하다'),
          T('a um amigo, à mãe'),
        ],
        [
          T('{ege}'),
          T('formal, e o padrão da Escritura'),
          T('주다, 드리다'),
          T('{yehova-ege}, a ele'),
        ],
        [T('{kke}'), T('o mesmo {ege}, depois de vogal'), T('—'), T('{ju-kke}, ao Senhor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em coreano, estar na escola é {hakgyo-e itda} e estudar na escola é {hakgyo-e-seo gongbu-ham-ni-da}. O que muda entre as duas frases?',
    ),
    options: [
      T('o verbo: com um verbo de estado a escola leva {e}, e com um verbo de ação leva {eseo}'),
      T('o substantivo: "escola" é polissêmico e por isso aceita as duas partículas'),
      T('o registro: a primeira é formal e a segunda é coloquial'),
      T('nada: as duas partículas são sinônimos neste uso'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete o destinatário do "Senhor" (주, sílaba terminada em vogal) na forma que aparece depois de vogal: 주____ (ao Senhor, com humildade)',
      ),
      answer: '께',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada partícula à relação que ela aponta'),
      pairs: [
        { a: T('{eseo}'), b: T('o ponto em que algo deixa de estar como estava') },
        { a: T('{e}'), b: T('o lugar de permanência, quando o verbo é de estado') },
        { a: T('{hante}'), b: T('o destinatário de uma relação entre pessoas') },
        { a: T('{ege}'), b: T('o destinatário formal, e a forma que a Escritura usa com Deus') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em Provérbios 3:6, "entrega todos os teus caminhos a ele", o que a partícula {ege} está fazendo?',
      ),
      options: [
        T('marca o destinatário da ação de entregar, e o destinatário é Deus'),
        T('marca o lugar onde a entrega acontece'),
        T('marca o ponto de partida dos caminhos'),
        T('substitui a partícula de posse do pronome'),
      ],
      answer: 0,
    },
  ],
};
