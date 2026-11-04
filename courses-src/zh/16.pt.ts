import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verbo'),
  title: T('Dizer: {說} e as aspas do discurso direto'),
  subtitle: T(
    'O verbo genérico, o substantivo da palavra, e a pontuação que a {和}{合}{本} adoptou do Ocidente no século XIX',
  ),
  body: C(`
## Um verbo, um substantivo, dois caracteres

O Mandarin tem dois caracteres para o que o português resolve com uma raiz só, *dizer*. **{shuō}** é o verbo: "dizer", "falar", o verbo genérico que serve para tudo. {Tā shuō} é "ele diz"; {wǒ shuō} é "eu digo"; e {shuō} sozinho, com o sujeito implícito, já significa "falar" no sentido de conversar. **{huà}** é o substantivo: "palavra", "fala", a **coisa** que foi dita, não o ato de dizê-la.

São caracteres diferentes, com sons diferentes, e por isso mesmo vale a pena parar neles. Você não decodifica {huà} quando encontra {shuō}: dois sinais, duas pronúncias, duas palavras. O ideograma é a palavra, e o som viaja junto com ele; não há como saber um e não saber o outro.

Os dois juntos formam palavra: **{shuōhuà}**, {shuō} + {huà}, "falar", no sentido simples e cotidiano de conversar. {Wǒ shuōhuà} é "eu falo"; {tā gēn wǒ shuōhuà} é "ele fala comigo".

E há um terceiro, mais elevado e mais antigo: **{yán}**, "palavra, discurso". Ele quase não aparece sozinho na fala do dia a dia, mas vive dentro de palavras como {yǔyán}, {yǔ} + {yán}, "linguagem", e {yányǔ}, {yán} + {yǔ}, "palavras, discurso", o objeto de estudo da linguística. {Yán} é o campo semântico: da mesma raiz vêm a palavra e a ideia de mensagem. {Shuō} é o ato; {yán} é a coisa e o assunto.

## O discurso direto e a pontuação que ele exige

Discurso direto em Mandarin tem uma forma muito próxima da sua: {shuō}, ou {duì} … {shuō}, entra, dois-pontos, e a fala vem inteira entre aspas.

{tā shuō: "…"}, "ele disse: …".

Aqui a {和合本} se afasta do que o seu olho treinado espera. As aspas chinesas são {「 」}, canto reto, moldura de quadrado aberto, e, quando o texto traz discurso dentro de discurso, alterna com {« »}. A convenção é: primeiro nível {「 」}, segundo nível {« »}, e as aspas ocidentais {""} simplesmente não têm lugar num texto em chinês tradicional. Nada disso é enfeite tipográfico: são caracteres com nome e função, como o resto.

E há um detalhe histórico que explica por que um texto chinês do século XIX tem dois-pontos e aspas: a pontuação da {和合本} não existia na tradição. Ela foi desenhada pelo missionário americano Dwight Whitney, em 1870, para a tradução que ele preparava. Antes disso o texto bíblico chinês era escrito sem pontuação nenhuma, e as pausas ficavam a cargo do leitor.

O contraste com o português vale, porque o português também usa dois-pontos e aspas, e a coincidência é real e não é herança: cada tradição resolveu o mesmo problema do mesmo jeito, porque discurso direto é discurso direto. A diferença é só de convenção: quais caracteres abrem a citação, e como se marca o nível dentro.

## Dizer A a B: {對} e {告}{訴}

O detalhe fino: o Mandarin resolve com duas construções o que o português resolve com uma.

**{duì}** significa "em direção a", "para", no sentido de um alvo: {duì} {wǒ} é "para mim", {duì} {shén} é "a Deus". Com {shuō} dá o "dizer a alguém": {tā} {duì} {wǒ} {shuō}, "ele me disse", literalmente "ele, em direção a mim, disse". {Wǒ} {duì} {tā} {shuō} é "eu lhe disse". O {duì} marca o destinatário, e nada mais.

**{gàosu}** é mais forte: "contar, unrelatar". Não é {shuō} com um objeto a mais; é um verbo diferente, que traz a ideia de **transmitir**: {wǒ} {gàosu} {nǐ}, "eu te digo", com o peso de "eu te conto", "eu te aviso", "eu te informo". A diferença é fina, e é essa sutileza que separa os dois verbos: {shuō} é neutro e não pressupõe nada, enquanto {gàosu} pressupõe que o outro ainda não sabe e que você está levando a notícia até ele.

O par pergunta/resposta fecha o conjunto. {wèn} é "perguntar", e {回}{答}, {huí} + {dá}, é "responder", literalmente "devolver": o {huí} significa "de volta", e o verbo quer dizer "devolver a resposta". Sozinho, {dá} é uma forma antiga ou coloquial de "responder", comum em {fǎn} {dá}, "responder", e não sobrevive bem em texto corrente.

## O Salmo 12:6 e o substantivo que amarra

O Salmo 12:6 na {和合本} diz: {Yēhéhuá} {de} {huàyǔ}, "as palavras do Senhor", e repete a mesma palavra na mesma frase: "palavras puras".

Repare na construção: a {de} liga o substantivo de posse ao nome de quem possui. O que interessa aqui é o substantivo, não o verbo. O versículo não diz "o Senhor *disse*", isso seria {shuō}; diz "as palavras do Senhor", {huàyǔ}, {huà} + {yán}. A tradução grega e a portuguesa também usam o substantivo, e as três línguas concordam por um motivo que não é coincidência: o que o salmista afirma não é que Deus falou, é que o que saiu de Deus é palavra, e palavra tem o peso que a fala do dia a dia não tem.

O par {shuō} e {huà} está em jogo na Bíblia o tempo todo, e quase sempre dos dois lados da mesma frase. Marcos 1:14 traz o {shuō} puro: {Yēsū} {jìn le} {huìtáng}, "e entrou na sinagoga", e a pregação que vem a seguir é o {shuō}. Verbo onde é verbo, substantivo onde é substantivo: a {和合本} mantém a distinção mesmo onde o grego a desfaz.`),
  vocab: [
    V('shuō', '说', 'dizer, falar (verbo genérico)'),
    V('huà', '话', 'palavra, fala (substantivo)'),
    V('shuōhuà', '说话', 'falar (conversar)'),
    V('duì', '对', 'em direção a; com {shuō}, "dizer a alguém"'),
    V('gàosu', '告诉', 'contar a alguém, informar'),
    V('wèn', '问', 'perguntar'),
    V('huídá', '回答', 'responder ({huí} + {dá})'),
    V('yán', '言', 'palavra, discurso (campo semântico)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{shuō} é o verbo "dizer"; {huà} é o substantivo "palavra". São caracteres e sons distintos.',
      ),
    },
    {
      n: '2',
      text: T(
        'Discurso direto: {shuō}, dois-pontos, e a fala entre aspas — {「 」} no primeiro nível, {« »} no segundo.',
      ),
    },
    { n: '3', text: T('{duì … shuō} marca o destinatário: {tā duì wǒ shuō}, "ele me disse".') },
    {
      n: '4',
      text: T('{gàosu} pressupõe transmitir algo novo; {shuō} é neutro e não pressupõe nada.'),
    },
    {
      n: '5',
      text: T(
        '{回答} é "devolver a resposta" ({huí} = "de volta"); {dá} sozinho é forma antiga ou coloquial.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que Whitney fez, e por que importa'),
      text: T(
        'A pontuação da {和合本} foi desenhada por Dwight Whitney em 1870. Antes dela o texto bíblico chinês não tinha pontuação alguma. Dois-pontos e aspas chinesas são importação deliberada, não tradição.',
      ),
    },
    {
      label: T('{yán} vive dentro de palavras'),
      text: T(
        '{yán} quase não aparece sozinho. Ele está em {yǔyán} "linguagem" e {yányǔ} "discurso". Quem aprende {shuō} aprende o ato; quem aprende {yán} aprende o campo.',
      ),
    },
  ],
  examples: [
    {
      text: '他說：「耶穌是彌賽亞。」',
      gloss: T('tā shuō: "Yēsū shì Mísàiyà" — ele disse: "Jesus é o Messias."'),
    },
    { text: '他對我說', gloss: T('tā duì wǒ shuō — ele me disse') },
    { text: '我告訴你', gloss: T('wǒ gàosu nǐ — eu te digo, eu te conto') },
    { text: '耶和華的話語', gloss: T('Yēhéhuá de huàyǔ — as palavras do Senhor') },
  ],
  tables: [
    {
      caption: T('O campo de "dizer" em seis verbos'),
      head: [T('Palavra'), T('Classe'), T('O que acrescenta')],
      rows: [
        [T('{shuō}'), T('verbo'), T('nada — é o genérico')],
        [T('{huà}'), T('substantivo'), T('a coisa dita, não o ato')],
        [T('{duì … shuō}'), T('verbo + preposição'), T('o destinatário: "dizer A a B"')],
        [T('{gàosu}'), T('verbo'), T('transmitir algo que o outro não sabe')],
        [T('{wèn}'), T('verbo'), T('perguntar')],
        [T('{huídá}'), T('verbo'), T('devolver a resposta')],
      ],
    },
    {
      caption: T('Discurso direto: o que se parece e o que não'),
      head: [T('Elemento'), T('Português'), T('Mandarin / {和合本}')],
      rows: [
        [T('verbo'), T('disse'), T('{shuō}')],
        [T('separador'), T('dois-pontos'), T('dois-pontos — igual')],
        [T('aspas nível 1'), T('""'), T('{「 」}')],
        [T('aspas nível 2'), T("''"), T('{« »}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {他對我說}, o que o {對} marca?'),
    options: [
      T('o conteúdo da fala'),
      T('o destinatário'),
      T('o tempo do verbo'),
      T('o modo da frase'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ele me disse" com a preposição de destinatário: 他____我說'),
      answer: '對',
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao que ela acrescenta'),
      pairs: [
        { a: T('{shuō}'), b: T('verbo genérico "dizer", sem nada') },
        { a: T('{huà}'), b: T('substantivo "palavra", a coisa dita') },
        { a: T('{gàosu}'), b: T('contar a alguém: transmitir algo novo') },
        { a: T('{回答}'), b: T('"devolver" a resposta ({huí} = "de volta")') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para dizer "as palavras do Senhor" (Salmo 12:6), qual forma?'),
      options: [T('{耶和華的話語}'), T('{耶和華說}'), T('{告訴耶和華}'), T('{問耶和華}')],
      answer: 0,
    },
  ],
};
