import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verbo'),
  title: T('Verbos em série'),
  subtitle: T(
    'Verbos encadeados sem conjunção, e a ordem que diz qual veio antes e qual é o propósito',
  ),
  body: C(`
## A conjunção que não existe

O português precisa de uma palavra para ligar dois verbos: "eu como e vou dormir". O Mandarin liga os dois por justaposição: {wǒ chī fàn shuìjiào} quer dizer exatamente isso, sem "e", sem vírgula e sem qualquer marca entre os verbos. A ausência de conjunção não é uma economia estilística; é a marca da língua.

A consequência prática é a segmentação. Sem espaços, nada na escrita diz onde um verbo termina e o outro começa. {shuìjiào} é uma palavra só: dormir. Mas na frase escrita é lido como {shuì} + {jiào} tanto quanto {chī fàn} é lido como {chī} + {fàn}, e a fronteira está no ouvido de quem lê, não na página. É o mesmo problema das palavras sem espaço, com uma consequência nova: quando dois verbos se seguem, você não pode saber onde começa o segundo sem entender a frase.

## A ordem dos verbos é o tempo

Em Mandarin a ordem dos verbos não é estilo: é semântica. A posição que cada verbo ocupa diz em que momento ele acontece. {chī fàn shuìjiào} é "comer, e depois dormir", e a sequência está escrita na ordem das palavras. Inverta, e o sentido muda: {shuìjiào chī fàn} é "dormir, e depois comer".

Não é uma frase que apenas soa estranha; é uma frase que ninguém diz. É o mesmo argumento aplicado ao verbo: a ordem do Mandarin não é livre. Em português eu posso dizer "comer e dormir" ou "dormir e comer" sem que ninguém estranhe, porque a informação está no verbo. Em Mandarin a informação está na ordem, e por isso a ordem não se negocia.

## Quando a ordem vira propósito

Há um caso em que a segunda leitura não é absurda, e é a coisa mais útil desta seção: quando o segundo verbo é mais leve que o primeiro. {qù mǎi shū} pode ser lido como sequência, "vou, e depois compro um livro", mas a leitura natural é outra: ir **com o propósito de** comprar o livro, exatamente como "ir comprar o livro" em português. O segundo verbo está a serviço do primeiro.

O contexto é o que desambigua, e sempre há uma pista. {wǒ qù xuéxiào, mǎi shū} põe um lugar no meio: vou à escola, depois compro o livro, e as duas coisas são passos distintos. {wǒ qù mǎi shū} não tem lugar nem duração: ir é apenas o meio, e comprar é o que interessa.

O verbo de ir e vir é o caso mais comum dessa construção, e o mais fácil de ler mal: {wǒ qù kàn yīshēng} é "eu vou ver o médico", um movimento só, com o médico como destino do movimento. Não é "eu vou, e depois vejo o médico". Compare {kàn le yīshēng, zài kàn}: aqui a partícula de aspecto {le} fecha o primeiro verbo como um evento completo, e {zài}, "de novo", abre o segundo, e só este arranjo é obrigatoriamente sequência.

E vale a regra da partícula {le}: quando os verbos formam uma cadeia com um único sentido, o fechamento não aparece. {wǒ qù kàn yīshēng} não leva {le}; {wǒ kàn le yīshēng} leva.

## A direção de {lái} e {qù} é a do falante

Este é o ponto que contraria toda a intuição de quem fala português. {lái} e {qù} não descrevem o movimento em relação a um lugar fixo, mas em relação a quem fala e a quem ouve.

{wǒ qù kàn nǐ} é "eu vou te ver": eu me afasto de você, ou de qualquer lugar, para chegar onde você está. {wǒ lái kàn nǐ} é "eu vim te ver": eu me aproximo de você. Se você é o hospedeiro e eu estou na porta, {lái} é o verbo correto mesmo que eu tenha cruzado a cidade inteira; se eu já estou na mesma sala, {qù} é o verbo da partida. O que muda não é o caminho andado, é quem é o ponto de referência.

Por isso os dois verbos encaixam tão bem na série, e a direção se resolve no segundo verbo: {qù} {kàn} e {lái} {kàn} significam "ir ver" e "vir ver", nunca "ir e ver" nem "vir e ver".

Na Bíblia essa construção aparece onde o grego aparece como convite. João 1:46, na {和合本}, tem {lái kàn}, literalmente "venham ver", os dois verbos em série e sem conjunção. {lái} traz o interlocutor até Jesus; {kàn} é a única coisa que se pede dele. O mesmo gesto aparece em Mateus 9:29, {guòlái}, "venham aqui", e em João 4:34, {dào zhèlǐ lái}, "venha aqui".`),
  vocab: [
    V('chī', '吃', 'comer (chī)'),
    V('shuìjiào', '睡覺', 'dormir (shuìjiào)'),
    V('mǎi', '買', 'comprar (mǎi)'),
    V('shū', '書', 'livro (shū)'),
    V('kàn', '看', 'ver, olhar (kàn)'),
    V('yīshēng', '醫生', 'médico (yīshēng)'),
    V('lái', '来', 'vir (lái) — direção a partir do falante'),
    V('qù', '去', 'ir (qù) — direção a partir do falante'),
    V('le', '了', 'partícula de passado ou de ocorrência (le)'),
    V('zài', '在', 'de novo, outra vez (zài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dois verbos seguidos formam uma frase só: {wǒ chī fàn shuìjiào} não tem conjunção nem vírgula.',
      ),
    },
    {
      n: '2',
      text: T(
        'A ordem dos verbos é fixa e semântica: o primeiro vem antes no tempo. {shuìjiào chī fàn} não é {chī fàn shuìjiào}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Segundo verbo mais leve indica propósito: {qù mǎi shū} é "ir comprar", não "ir e depois comprar".',
      ),
    },
    {
      n: '4',
      text: T(
        '{lái} e {qù} indicam a direção do falante em relação a quem ouve, não em relação a um lugar fixo.',
      ),
    },
    {
      n: '5',
      text: T('{le} fecha um verbo completo e distinto; verbos encadeados numa série não o pedem.'),
    },
  ],
  notes: [
    {
      label: T('Onde está a fronteira das palavras'),
      text: T(
        'Sem espaços, {shuìjiào} é uma palavra só, mas {chī fàn} também é: {chī} e {fàn} não aparecem sozinhos. Com verbos encadeados o problema fica maior, porque cada verbo da série pode ser lido em pedaços. A segmentação é da lição 4 e continua valendo: o que separa as palavras é o sentido, não o espaço.',
      ),
    },
    {
      label: T('Sequência completa pede {le}, série não'),
      text: T(
        'Se os verbos forem eventos separados e completos, cada um recebe {le}: {wǒ chī le fàn, shuìjiào le}. Se forem uma cadeia com um sentido só — ir ver, vir ver, ir comprar — a série fica sem {le}, e é a ausência da partícula que diz que não houve quebra entre eles.',
      ),
    },
  ],
  examples: [
    { text: '我吃飯睡覺', gloss: T('wǒ chī fàn shuìjiào — eu como e vou dormir') },
    { text: '睡覺吃飯', gloss: T('shuìjiào chī fàn — dormir, e depois comer (ordem invertida)') },
    { text: '去買書', gloss: T('qù mǎi shū — ir comprar um livro (com o propósito de)') },
    { text: '我來看你', gloss: T('wǒ lái kàn nǐ — eu vim te ver') },
  ],
  tables: [
    {
      caption: T('A mesma ordem, lida de dois modos'),
      head: [T('Ordem dos verbos'), T('Leitura de sequência'), T('Leitura de propósito')],
      rows: [
        [
          T('{chī fàn} {shuìjiào}'),
          T('como, depois durmo'),
          T('como, e o segundo verbo é o que interessa'),
        ],
        [T('{shuìjiào} {chī fàn}'), T('durmo, depois como'), T('—')],
        [T('{qù mǎi shū}'), T('vou, e depois compro um livro'), T('vou comprar um livro')],
        [
          T('{qù xuéxiào mǎi shū}'),
          T('vou à escola, depois compro o livro'),
          T('vou à escola comprar o livro'),
        ],
      ],
    },
    {
      caption: T('A direção de {lái} e {qù} é a do falante'),
      head: [T('Onde está o falante'), T('{lái}'), T('{qù}')],
      rows: [
        [
          T('longe de quem ouve, indo ao seu encontro'),
          T('{wǒ lái kàn nǐ} — eu vim te ver'),
          T('{wǒ qù kàn nǐ} — eu vou te ver'),
        ],
        [
          T('na mesma casa de quem ouve'),
          T('{wǒ lái kàn nǐ} — eu venho ver você antes de sair'),
          T('{wǒ qù kàn nǐ} — eu vou ver você, da saída'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {wǒ qù mǎi shū}, o que a série {qù mǎi shū} indica?'),
    options: [
      T('que vou, e depois compro o livro'),
      T('que vou com o propósito de comprar o livro'),
      T('que vou comprar o livro e depois volto'),
      T('que vou, mas não compro nada'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete "eu vou ver o médico": 我____看醫生'), answer: '去' },
    {
      kind: 'match',
      prompt: T('Ligue a série de verbos ao que ela significa'),
      pairs: [
        { a: T('{wǒ chī fàn shuìjiào}'), b: T('como, e em seguida durmo') },
        { a: T('{qù mǎi shū}'), b: T('ir comprar, com o propósito de comprar') },
        { a: T('{wǒ lái kàn nǐ}'), b: T('eu vim te ver') },
        { a: T('{wǒ qù kàn yīshēng}'), b: T('eu vou ver o médico') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em Mandarin, onde está o "e" de "eu como e durmo"?'),
      options: [
        T('não existe: os verbos simplesmente se seguem um ao outro'),
        T('aparece antes do segundo verbo'),
        T('aparece depois do primeiro verbo'),
        T('aparece uma vez só, no fim da frase'),
      ],
      answer: 0,
    },
  ],
};
