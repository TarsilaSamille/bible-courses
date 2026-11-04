import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('O verbo: o presente e o aspecto'),
  title: T('O aspecto: a pergunta que o tempo não faz'),
  subtitle: T('писать e написать: mesmo presente, mesmo passado,Meaning different'),
  body: C(`
## Duas perguntas, e só uma tem verbo em português

Uma frase em português faz duas perguntas ao verbo: quando e como. Em russo há uma terceira, e ela não tem nada a ver com o tempo: **o que aconteceu com a ação, ficou inteiro ou ficou em curso.**

Essa resposta é o aspecto. E ela é gramatical, quer dizer que está na forma do verbo, e não na escolha de um tempo ou de um advérbio. Он писал письмо e Он написал письмо têm o mesmo tempo, o mesmo sujeito e o mesmo objeto. O que muda é o que o verbo fez com a carta.

O imperfectivo apresenta a ação como processo: ela está acontecendo, ou aconteceu, ou vai acontecer, e o resultado não faz parte do que está sendo dito. O perfectivo apresenta a ação como evento delimitado: aconteceu uma vez, chegou a um fim, e o resultado faz parte do que está sendo dito.

Em português, escrever e escrever por completo são o mesmo verbo com ou sem complemento. Em russo são dois verbos, e nenhum dos dois é mais correto que o outro: eles dizem coisas diferentes.

## Não é tempo, e é por isso que a confusão é tão comum

Um perfectivo tem forma de presente. Я напишу письмо é um presente perfectivo: eu escrevo a carta inteira, e isso vai acontecer uma vez. Um imperfectivo tem forma de futuro. Я буду писать письмо é futuro imperfectivo: eu vou estar escrevendo, e o resultado não está à vista.

Os dois aparecem em todos os tempos:

- presente: Я пишу e Я напишу
- passado: Я писал e Я написал
- futuro: Я буду писать e Я напишу

A distinção que costuma ser feita, e que é falsa, é que o imperfectivo é passado e o perfectivo é futuro. Os dois verbos aparecem em todos os tempos, e o que os separa é o que se faz com a ação.

O presente imperfectivo tem ainda um uso próprio: o hábito. Он ходит в церковь não é passé, é o que ele faz sempre. Он ходил в церковь é o passado da série inteira. E Он пришёл é uma ida só, com hora de chegada.

## O par é lexical, e se aprende como palavra

O par de aspecto não se deriva por regra. Писать faz par com написать por prefixo, e делать faz par com сделать, e читать com прочитать. Mas брать faz par com взять, e os dois temas não têm nada um com o outro. Дать faz par com давать, e o imperfectivo é mais longo que o perfectivo.

Consequência prática: **o par se aprende como uma palavra só.** Não há regra que permita adivinhar, e um dicionário que só traduz e não traz o par deixa a coisa pela metade. Quem lee precisa do par inteiro, não do verbo solto.

E há um terceiro caminho, além do prefixo e da sufixação: a supletividade. Взять e брать não são derivações um do outro, e лечь e лежать também não. São pares que existem por convenção da língua, e que se aprendem como se fossem um único verbo com dois modos.

## O gancho: um versículo com os dois

**И свет во тьме светит, и тьма не объяла его.** Os dois verbos do versículo são do mesmo campo semântico, e nenhum dos dois é perfectivo.

Светит é imperfectivo, e é a palavra que a narrativa esperaria: a luz brilha, continua a brilhar, e o brilho é o estado em que a luz está enquanto dura. Não há contagem de vezes nem fronteira. O mesmo verbo no passado, светил, seria a luz ter brilhado durante um tempo, e o perfectivo светил com prefixo seria uma luz que acendeu.

Объяла é perfectivo, com prefixo. Ele descreve um ato que teve um fim: a treva tentou e não conseguiu. A frase inteira é uma oposição entre duas ações vistas de pontos de vista diferentes: uma é o que dura, e a outra é o que chegou ao fim.

Esse é o resumo do que o aspecto faz: **ele escolhe o que da ação é o assunto da frase.** Em светит, o assunto é a luz brilhando. Em объяла, o assunto é o resultado da treva. A mesma cena, dois verbos, e a escolha é do tradutor tanto quanto do original.
`),
  vocab: [
    V('писать', 'писать', 'escrever; imperfectivo'),
    V('написать', 'написать', 'escrever por inteiro; perfectivo'),
    V('делать', 'делать', 'fazer; imperfectivo'),
    V('сделать', 'сделать', 'fazer e terminar; perfectivo'),
    V('читать', 'читать', 'ler; imperfectivo'),
    V('прочитать', 'прочитать', 'ler até o fim; perfectivo'),
    V('брать', 'брать', 'pegar; imperfectivo'),
    V('взять', 'взять', 'pegar; perfectivo, supletivo'),
    V('светит', 'светить', 'brilha; imperfectivo presente'),
    V('объяла', 'объясть', 'tomou, englobou; perfectivo passado'),
    V('ходить', 'ходить', 'ir habitualmente; imperfectivo'),
    V('пришёл', 'прийти', 'veio; perfectivo'),
    V('аспект', 'аспект', 'aspecto, ou o substantivo que o nomeia'),
    V('имперфект', 'имперфект', 'imperfective'),
    V('перфект', 'перфект', 'perfectivo, o substantivo que o nomeia'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Он написал письмо, o que o perfectivo indica?'),
    options: [
      T('Que a escrita está em curso'),
      T('Que a carta ficou escrita'),
      T('Que ele escreve sempre'),
    ],
    answer: 1,
    hint: T(
      'O perfectivo mostra a ação como evento delimitado, com resultado em vista. O imperfectivo mostraria o processo.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o par perfectivo de писать'), answer: 'написать' },
    {
      kind: 'choose',
      prompt: T('Em Он ходит в церковь, o presente imperfectivo indica...'),
      options: [T('uma ida só'), T('o hábito'), T('o futuro')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete o imperfectivo de взять'), answer: 'брать' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O imperfectivo apresenta a ação como processo, e o perfectivo como evento delimitado com resultado.',
      ),
    },
    {
      n: '2',
      text: T('O aspecto não é tempo: os dois aparecem no presente, no passado e no futuro.'),
    },
    {
      n: '3',
      text: T(
        'O perfectivo tem forma de presente ({напишу}) e o imperfectivo tem forma de futuro ({буду писать}).',
      ),
    },
    {
      n: '4',
      text: T('O presente imperfectivo também exprime hábito: {ходит} é o que se faz sempre.'),
    },
    {
      n: '5',
      text: T(
        'O par de aspecto se aprende como palavra única, porque nem sempre há derivação: {брать} e {взять}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que os dois verbos aparecem em todos os tempos'),
      text: T(
        'Tempo diz quando a ação acontece: antes, agora, depois. Aspecto diz o que se fez com a ação: deixou rastro ou ficou em curso. São duas perguntas independentes, e por isso cada verbo tem um par para cada tempo. Я писал e Я написал são ambos passado; a diferença entre eles não é temporal, é de aspecto.',
      ),
    },
    {
      label: T('Quando a tradução perde o resultado'),
      text: T(
        'Писать письмо pode ser traduzido como escrever uma carta, e nada se perde quando o contexto é o de uma carta qualquer. Mas em uma frase como Он писал письмо весь день, o que está em jogo é a duração. Ao traduzir para uma língua que não tem aspecto, é preciso escolher: ou se marca o processo, ou se marca o resultado, e as duas escolhas dão traduções diferentes do mesmo verso.',
      ),
    },
  ],
  examples: [
    { text: 'Я пишу письмо', gloss: T('estou escrevendo uma carta; presente imperfectivo') },
    { text: 'Я напишу письмо', gloss: T('escrevo a carta inteira; presente perfectivo') },
    { text: 'Я писал письмо', gloss: T('eu estava escrevendo uma carta; passado imperfectivo') },
    { text: 'Я написал письмо', gloss: T('escrevi a carta; passado perfectivo') },
    {
      text: 'Я буду писать письмо',
      gloss: T('vou estar escrevendo uma carta; futuro imperfectivo'),
    },
    { text: 'Он ходит в церковь', gloss: T('ele vai à igreja; hábito no presente') },
    { text: 'Он ходил в церковь', gloss: T('ele ia à igreja; série no passado') },
    { text: 'Он пришёл', gloss: T('ele veio; uma ida só, perfectivo') },
    {
      text: 'беру деньги, а он взял книгу',
      gloss: T('pego dinheiro e ele pegou um livro; o mesmo campo, dois aspectos'),
    },
    {
      text: 'И свет во тьме светит, и тьма не объяла его',
      gloss: T('e a luz brilha nas trevas, e as trevas não a venceram (Jo 1:5)'),
    },
  ],
  tables: [
    {
      caption: T('Os dois membros do par nos três tempos'),
      head: [T('Tempo'), T('Imperfectivo'), T('Perfectivo'), T('O que muda')],
      rows: [
        [T('presente'), T('Я пишу'), T('Я напишу'), T('processo ou uma vez')],
        [T('passado'), T('Я писал'), T('Я написал'), T('duração ou resultado')],
        [T('futuro'), T('Я буду писать'), T('Я напишу'), T('vou fazer ou vou fazer uma vez')],
      ],
    },
    {
      caption: T('Pares de aspecto, com o caminho de formação'),
      head: [T('Imperfectivo'), T('Perfectivo'), T('Como se formou'), T('Ideia')],
      rows: [
        [T('писать'), T('написать'), T('prefixo'), T('terminar de escrever')],
        [T('делать'), T('сделать'), T('prefixo'), T('fazer até o fim')],
        [T('читать'), T('прочитать'), T('prefixo'), T('ler até o fim')],
        [T('говорить'), T('сказать'), T('supletivo'), T('dizer uma vez')],
        [T('брать'), T('взять'), T('supletivo'), T('pegar, com temas soltos')],
        [T('давать'), T('дать'), T('supletivo'), T('dar, com temas soltos')],
      ],
    },
    {
      caption: T('O perfectivo e o imperfectivo no mesmo campo'),
      head: [T('Campo'), T('Imperfectivo'), T('Perfectivo'), T('A pergunta que respondem')],
      rows: [
        [T('escrever'), T('пишет, писал'), T('напишет, написал'), T('ainda está ou já ficou')],
        [T('brilhar'), T('светит, светил'), T('засветит, засиял'), T('dura, ou acendeu')],
        [T('ir'), T('ходит, ходил'), T('придёт, пришёл'), T('varias vezes ou uma vez')],
        [T('pegar'), T('берёт, брал'), T('возьмёт, взял'), T('por costume, ou de uma vez')],
        [T('dizer'), T('говорит, говорил'), T('скажет, сказал'), T('conversa ou diz uma vez')],
      ],
    },
  ],
};
