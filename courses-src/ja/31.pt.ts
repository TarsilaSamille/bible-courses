import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Leitura'),
  title: T('A primeira linha de uma carta: três partículas que fazem o trabalho do cabeçalho'),
  subtitle: T(
    'Quem escreve, para quem e o desejo que abre o livro são as três frases mais curtas do estilo epistolar, e as três são feitas de nome seguido de partícula',
  ),
  body: C(`
## A primeira linha tem três nomes e três partículas

Uma carta grega começa por três coisas: quem escreve, para quem, e um desejo. A linha mais antiga do estilo está em 1 Tessalonicenses 1:1, *Pauro, Shiruwano to Temote {yori}, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai {e}*. **São três nomes no remetente**, e a partícula que os junta é {yori}, "de": quem escreve, e o nome dele é {pauro}.

Depois vem {e} antes do nome da {kyōkai}. **É a partícula do destinatário**, e ela está no lugar onde o português esperaria um "para". O nome da igreja vem com {no} de posse, *Tesarunikē no kyōkai*, "a igreja dos tessalonicenses", e a partícula {e} fica colada depois do substantivo inteiro. No grego, esse nome vinha no caso que significa "a"; o japonês não tem caso, e resolveu com a partícula de direção, que é o único lugar do idioma em que {e} é obrigatória sem que haja movimento nenhum.

O {ni} vem em seguida, em *{chichi} naru {kami} … ni aru*: "no Pai, que é Deus". O nome próprio de Deus não é assunto; quem é assunto é a igreja, e Deus é o lugar onde a igreja está. Uma frase que em português diria "de", "para" e "em" vira {yori}, {e} e {ni}, e quem já reconhece as três reconhece a linha inteira.

## O desejo é uma oração sem sujeito humano

A frase seguinte é *megumi to heian {ga} anata no ue ni arimasu yō ni*, "que a graça e a paz estejam sobre vocês". Não há verbo de dizer, não há nome de quem fala, e **o sujeito é o desejo**: {ga} em *{megumi} to {heian} ga*. O que está sobre os tessalonicenses não é o afeto de Paulo, é a graça; e a partícula {ga} diz isso sem precisar de uma oração para explicitar quem a deseja.

O resto da frase é *anata no {ue} ni*, "sobre vocês", e é a única parte dela que o português resolve de um jeito diferente. Com pessoa, a preposição "sobre" é rara em português e comum em japonês: {ni} já estava na lista, e ela é a mesma que marca destino, lugar e a direção. E o *{arimasu} yō ni* do fim é a fórmula que transforma um desejo em oração: "que haja", sem sujeito, sem pessoa, sem tempo verbal.

Um leitor de português procura ali um sujeito gramatical e não acha nenhum, e o que está faltando é o nome de quem deseja. O sujeito está na primeira metade da frase, e é uma coisa: graça, paz. O nome do remetente está na linha de cima, e não é sujeito de nada.

## O fecho repete a construção

As cartas do Novo Testamento quase todas fecham com duas frases: uma sobre quem escreve, e um desejo. 1 Coríntios 16:24 é o fecho mais curto: *watashi no ai wa, {kirisuto} Yesu ni arite, anata subete no mono {tomo-ni} {arimasu}*. A primeira parte declara onde está o amor de quem escreve, e a construção é a mesma da primeira linha da carta: {wa} para o assunto, {ni} para o lugar.

Em *watashi no ai wa*, o amor é o assunto e quem escreve é o possessivo. O português traduz "o meu amor está em Cristo Jesus", e é a mesma informação, mas a partícula {ni} depois do nome de Cristo é que faz o trabalho: não é uma preposição solta, é a mesma {ni} que marca destino em Mateus 2:1, e é por isso que o tradutor tem de saber qual das duas está lendo.

O *tomo-ni* do fecho é a partícula de companhia com o nome inteiro em volta, *anata subete no mono*, "todos vocês". E o *āmen* do fim é uma palavra grega transliterada, que o japonês nunca traduziu porque não há o que traduzir.

**Repare que nenhuma das duas frases tem sujeito humano.** O amor está em Cristo; a graça está sobre os destinatários. O estilo epistolar faz o que a partícula {ga} permite: quando o que se quer dizer é uma entidade, essa entidade é o sujeito, e o nome das pessoas vira {ni} de lugar. É o inverso de uma carta comum, em que quem escreve é sujeito de tudo.

## O que a carta faz que um Evangelho não faz

Uma carta não começa sendo narrada, e é por isso que a primeira linha tem três nomes. Um dos três nomes é o remetente escondido, que dá autoridade, e outro é o destinatário inteiro, que dá unidade: uma carta a uma igreja é uma carta a uma multidão que não se vê, e a partícula {e} antes do nome dessa multidão é a marca exata do que o tradutor não precisa enumerar.

Depois da segunda linha, a carta faz uma coisa que um Evangelho não faz: fala de si mesma. 1 Tessalonicenses 1:5 diz *ware-tachi no {fukuin} ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu*, "o nosso evangelho nãovos chegou só pela palavra, mas pela força, pelo Espírito Santo e pela convicção firme". Tudo isso sai de verbos de escrita, de envio e de lembrança, e a partícula que liga cada coisa ao seu nome é {no}.

E é o {toki}, o substantivo do {inori} por trás do tempo, que aparece quando a carta olha para trás. A última frase de 2 Tessalonicenses 1:10 começa com *sono hi ni*, "naquele dia", e o tempo que governa o valor da afirmação é um substantivo abstrato, não um advérbio: o verbo vem no fim, com a sua flexão, e a condição em que ele vale é nomeada como lugar.

A carta faz três coisas na mesma ordem em todas as páginas: quem escreve, para quem, e o tempo em que o que ela afirma vale. Quem reconhece as três linhas lê qualquer carta do Novo Testamento pela primeira linha.
`),
  vocab: [
    V('yori', 'より', 'origem: "de", e é a partícula que junta os nomes de quem envia (yori)'),
    V('e', 'へ', 'destinatário: antes do nome de quem recebe a carta (e)'),
    V('ni', 'に', 'lugar, e também "onde está" uma coisa abstrata: amor, graça, paz (ni)'),
    V('ga', 'が', 'o desejo que abre a carta é o sujeito: a graça e a paz (ga)'),
    V('no', 'の', 'posse: liga o nome da cidade ao da igreja e o do povo ao do amor (no)'),
    V('pauro', 'パウロ', 'Paulo, o nome que abre e fecha as cartas (pauro)'),
    V('kyōkai', '教会', 'igreja; o nome que vem logo depois da partícula {e} (kyōkai)'),
    V('chichi', '父', 'pai; "Pai, que é Deus", o nome próprio do começo (chichi)'),
    V('kami', '神', 'Deus; o lugar onde a igreja está, segundo a primeira linha (kami)'),
    V('megumi', '恵み', 'graça, favor, misericórdia (megumi)'),
    V('heian', '平安', 'paz; o segundo nome do primeiro desejo da carta (heian)'),
    V('ue', '上', 'cima, superfície; com {ni}, "sobre" (ue)'),
    V(
      'arimasu',
      'あります',
      'estar, haver; o verbo que fecha o desejo, sem sujeito nem pessoa (arimasu)',
    ),
    V(
      'tomo-ni',
      '共に',
      'junto com; o "com" do fecho da carta, escrito com o nome inteiro (tomo-ni)',
    ),
    V('kirisuto', 'キリスト', 'Cristo; o nome que fica em {ni} no fecho da carta (kirisuto)'),
    V('fukuin', '福音', 'evangelho; o que a carta diz ter enviado (fukuin)'),
    V('inori', '祈り', 'oração; o que a carta pede, e o que o nome {toki} nomeia (inori)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A primeira linha de uma carta traz os três nomes com três partículas: {yori} junta quem escreve, {e} marca o destinatário e {ni} marca o lugar onde Deus está.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} antes do nome de uma igreja não é direção: é o caso grego que o português traduz por "a", e é o único lugar do idioma em que {e} aparece sem movimento.',
      ),
    },
    {
      n: '3',
      text: T(
        'No desejo, o sujeito é a coisa desejada: {ga} em *megumi to heian ga*. As pessoas não são sujeito; são o lugar, com {ni}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O fecho repete a construção da abertura: {wa} para o assunto, {ni} para o lugar onde está a coisa, e nenhum sujeito humano nas duas frases.',
      ),
    },
    {
      n: '5',
      text: T(
        'Quando a carta fala de si mesma, é {no} que liga cada ação ao nome que a fez, e {toki} que dá nome ao momento que ela evoca.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o {e} é obrigatório na linha de abertura'),
      text: T(
        'Uma carta grega abria com três casos: origem para quem escreve, destino para a igreja, e um caso de contexto para Deus. O japonês resolveu os dois primeiros com {yori} e {e}, e a escolha de {e} não é de direção: é o que existe para dizer "a igreja de Tessalonica". Romanos 1:1 faz o mesmo com a mesma partícula, *kami no fukuin no tame ni erabitareru, shito to meshattareta Kirisuto Yesu no shimo-be Pauro*, e a construção é tão rara que é difícil achar em japonês corrente uma frase em que {e} seja obrigatório por outra razão.',
      ),
    },
    {
      label: T('O gênero epistolar treina partícula melhor que o Evangelho'),
      text: T(
        'Uma narrativa põe a informação em verbos, e o leitor acompanha pelo conteúdo. Uma carta põe a informação em nomes, e o leitor acompanha pelas partículas. A primeira linha e o fecho não têm nada a traduzir: são quatro nomes e quatro partículas, e quem reconhece a sequência yori, e, ni já leu a estrutura de qualquer carta do Novo Testamento antes de entender uma palavra do conteúdo. É o exercício mais barato que existe para quem está aprendendo a ler o japonês bíblico.',
      ),
    },
  ],
  examples: [
    {
      text: 'パウロ、シルワノ、テモテから、父なる神および主イエス・キリストにあるテサロニケ人の教会へ。',
      gloss: T(
        'Pauro, Shiruwano to Temote yori, chichi naru Kami narabi Shu Yesu Kirisuto ni aru Tesarunikē no kyōkai e — Paulo, Silvano e Timóteo, à igreja dos tessalonicenses que está em Deus Pai e no Senhor Jesus Cristo (1 Tessalonicenses 1:1): {yori} no remetente, {e} no destinatário, {ni} em Deus',
      ),
    },
    {
      text: '恵みと平安があなたがたの上にありますように。',
      gloss: T(
        'megumi to heian ga anata no ue ni arimasu yō ni — que a graça e a paz estejam sobre vocês (1 Tessalonicenses 1:1): o desejo é o sujeito, e as pessoas são o lugar',
      ),
    },
    {
      text: '私の愛は、キリスト・イエスにあって、あなたがたすべての者とともにあります。アーメン。',
      gloss: T(
        'watashi no ai wa, Kirisuto Yesu ni arite, anata subete no mono to tomoni arimasu. Āmen. — o meu amor está em Cristo Jesus e com todos vocês (1 Coríntios 16:24): o amor é o que está em {ni}, e ninguém é o sujeito',
      ),
    },
    {
      text: 'なぜなら、私たちの福音があなたがたに伝えられたのは、ことばだけによったのではなく、力と聖霊と強い確信とによったからです。',
      gloss: T(
        'narawēru to wa, ware-tachi no fukuin ga anata ni tsutareta no wa, kotoba dake ni yotte naku, chikara to Sei-rei to tsuyoi kakushin to ni yotte shimashita kara desu — o nosso evangelho não vos chegou só pela palavra, mas pela força, pelo Espírito Santo e pela convicção firme (1 Tessalonicenses 1:5): a carta fala do próprio ato, e {kara} fecha como causa',
      ),
    },
    {
      text: '主イエスの恵みが、あなたがたとともにありますように。',
      gloss: T(
        'Shu Yesu no megumi ga, anata to tomoni arimasu yō ni — a graça do Senhor Jesus esteja convosco (1 Coríntios 16:23): a graça é o sujeito, e o nome do Senhor é o possessivo',
      ),
    },
    {
      text: '教会へ',
      gloss: T('kyōkai e — à igreja: o {e} do destinatário, sem nenhum movimento no texto'),
    },
    {
      text: 'あなたがたの上にある',
      gloss: T(
        'anata no ue ni aru — está sobre vocês: {ni} de lugar com pessoa, e {no} de posse entre o nome e o substantivo',
      ),
    },
  ],
  tables: [
    {
      caption: T('A primeira linha de uma carta, com as três partículas em ordem'),
      head: [T('A parte da linha'), T('A forma'), T('A partícula'), T('O que a partícula faz')],
      rows: [
        [
          T('quem escreve'),
          T('*Pauro, Shiruwano to Temote yori*'),
          T('{yori}'),
          T('origem: "de", juntando os nomes de quem envia'),
        ],
        [
          T('para quem'),
          T('*Tesarunikē no kyōkai e*'),
          T('{e}'),
          T('destinatário: o caso grego que o português traduz por "a"'),
        ],
        [
          T('onde está Deus'),
          T('*chichi naru Kami … ni aru*'),
          T('{ni}'),
          T('lugar: "em Deus Pai" e "no Senhor Jesus Cristo"'),
        ],
        [
          T('o desejo'),
          T('*megumi to heian ga*'),
          T('{ga}'),
          T('o sujeito: o que o remetente deseja, e não quem deseja'),
        ],
        [
          T('sobre quem'),
          T('*anata no ue ni*'),
          T('{ni}'),
          T('o lugar do desejo: as pessoas são o lugar, não o sujeito'),
        ],
      ],
    },
    {
      caption: T('Abertura e fecho: a mesma construção, uma frase de cada lado'),
      head: [T('A parte'), T('A frase de abertura'), T('A frase de fecho'), T('O que mudou')],
      rows: [
        [
          T('remetente'),
          T('*Pauro … yori*'),
          T('*watashi no ai wa …*'),
          T('o nome do remetente passa de origem a possessivo'),
        ],
        [
          T('de quem é a carta'),
          T('*Tesarunikē no kyōkai e*'),
          T('*anata subete no mono to tomoni*'),
          T('a mesma partícula de companhia, com o nome inteiro em volta'),
        ],
        [
          T('o que é desejado'),
          T('*megumi to heian ga …*'),
          T('*watashi no ai wa …*'),
          T('a coisa desejada é o sujeito nos dois casos'),
        ],
        [
          T('o lugar da coisa'),
          T('*anata no ue ni*'),
          T('*Kirisuto Yesu ni arite*'),
          T('{ni}: "sobre vocês" e "em Cristo"'),
        ],
        [
          T('fecho da frase'),
          T('*arimasu yō ni*'),
          T('*arimasu*'),
          T('o mesmo verbo de estar, com e sem a fórmula do desejo'),
        ],
      ],
    },
    {
      caption: T('A carta falando de si mesma, e a partícula que liga o ato ao seu nome'),
      head: [
        T('O que a carta diz de si mesma'),
        T('A partícula'),
        T('O que ela liga'),
        T('Onde aparece'),
      ],
      rows: [
        [
          T('o que foi enviado'),
          T('{no}'),
          T('o nome do evangelho ao nome de quem o enviou'),
          T('1 Tessalonicenses 1:5'),
        ],
        [
          T('a palavra enviada'),
          T('{ni}'),
          T('o nome de quem recebeu a palavra'),
          T('1 Tessalonicenses 1:5: *anata ni tsutareta*'),
        ],
        [
          T('o motivo da firmeza'),
          T('{kara}'),
          T('a causa no fim da oração, depois do verbo'),
          T('1 Tessalonicenses 1:5: *kara desu*'),
        ],
        [
          T('o tempo que vale'),
          T('{toki}'),
          T('o substantivo do tempo a um verbo flexionado'),
          T('2 Tessalonicenses 1:10, que começa por *sono hi ni*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {テサロニケ人の教会へ}, o que a partícula {e} está fazendo?'),
    options: [
      T(
        'marca o destinatário da carta: o nome da igreja vem depois dela, e não há movimento nenhum',
      ),
      T('marca direção: a carta está indo para Tessalonica enquanto você lê'),
      T('marca o lugar onde está Deus, como na frase seguinte'),
      T('marca a razão da carta, que é o mesmo que {yori} na primeira linha'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a partícula do remetente na abertura de uma carta: パウロ、シルワノ、テモテ____ (Paulo, Silvano e Timóteo)',
      ),
      answer: 'から',
    },
    {
      kind: 'match',
      prompt: T('Ligue a parte da carta à partícula que a faz'),
      pairs: [
        { a: T('{yori}'), b: T('junta os nomes de quem escreve, no começo da linha') },
        { a: T('{e}'), b: T('marca o destinatário, e vem antes do nome da igreja') },
        { a: T('{ga}'), b: T('torna o desejo o sujeito da primeira oração de desejo') },
        { a: T('{ni}'), b: T('diz onde está a coisa desejada: em Cristo, sobre vocês') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Por que a primeira linha de uma carta serve bem como treino de partículas?'),
      options: [
        T(
          'porque tem quatro nomes e quatro partículas, e o que o leitor precisa é reconhecer a sequência delas',
        ),
        T('porque tem um grego difícil que só pode ser resolvido com partículas'),
        T('porque as cartas antigas usam partículas que já não existem no japonês de hoje'),
        T('porque a abertura é sempre escrita em ideogramas, e as partículas aparecem inteiras'),
      ],
      answer: 0,
    },
  ],
};
