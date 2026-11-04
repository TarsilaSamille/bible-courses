import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('O verbo: aspecto e a negação que se divide'),
  subtitle: T("didn't go, have been × have gone — o par que muda o sentido"),
  section: T('O verbo'),
  body: C(`## A negação cria um auxiliar

O aluno de português escreve {I didn't went} e {She doesn't likes}. As duas frases estão erradas pela mesma razão: depois de um auxiliar o verbo principal vai na **base**, e não na forma que ele teria sozinho.

É {do} que faz o serviço. No presente, {do not} + base: {I do not go}, {she does not like}. No passado, {did not} + base: {I did not go}, {they did not come}. O {did} é a forma de passado do {do}, e é ele que carrega o tempo.

A regra cabe numa linha: **a negação não é o tempo, é o auxiliar que é**. Por isso {did not} nunca aparece com o passado, {went}, {saw} ou {came}. Uma frase como {I did not went} tem tempo dobrado.

## Have been e have gone

O par que o aluno de português nunca viu é {have been} e {have gone}, e a diferença não é de tempo: é de **resultado**. {I have gone to Rome} quer dizer que a viagem aconteceu e acabou; {I have been to Rome} quer dizer que a viagem também aconteceu e o que importa é que você esteve lá.

O mesmo vale com {have left} e {have been away}: {He has left} diz que ele não está aqui; {He has been away} diz que ele esteve fora e voltou. Uma frase diz o estado atual, a outra conta a experiência.

A KJV usa construções que deixam a mesma distinção visível. João 11:17 traz {when he had heard that he was dead, he met him}: o {had heard} vem antes do outro passado, e o encontro é o que fecha a frase.

## Três construções, três aspectos

O inglês resolve com três construções o que o português resolve com o tempo verbal. {Be} mais {ing} dá o que está acontecendo: {He is working}. {Have} mais particípio dá o que tem resultado: {He has finished}. {Have been} mais {ing} dá o que vem fazendo há tempo: {He has been working since eight}.

A terceira é a que mais confunde, porque em português a única forma de dizê-la é a perífrase "estar + a + infinitivo", e o aluno não sabe que aquilo tem nome próprio em inglês.

1 João 4:18 junta as três numa frase: {There is no fear in love: for perfect love casteth out fear}. O {there is} é construção existencial, o {casteth out} é verbo mais partícula, e o presente {casteth} diz que o amor perfeito continua tirando o medo.

## O par que o português resolve sozinho

O português tem um tempo só para duas funções e o inglês tem duas para uma. "Eu já fui à Europa" pode ser {I have already been to Europe} (experiência) ou {I have already gone to Europe} (resultado), e a escolha em português é feita pelo contexto sem que o falante decida conscientemente.

O aluno que traduz Sentence a Sentence acaba herdando a ambiguia e escreve a forma mais comum. O caminho curto é fixar os dois pares {have been} e {have gone}, {have left} e {have been away}, e passar a ouvir a diferença.`),
  vocab: [
    V('did not go', 'go', 'não foi'),
    V('does not like', 'like', 'não gosta'),
    V('do not go', 'go', 'não vou'),
    V('have gone', 'go', 'ter ido'),
    V('have been', 'be', 'ter estado'),
    V('have been to', 'be', 'ter estado em'),
    V('have left', 'leave', 'ter saído'),
    V('have been away', 'be', 'ter estado fora'),
    V('had heard', 'hear', 'tinha ouvido'),
    V('is working', 'work', 'está trabalhando'),
    V('has finished', 'finish', 'terminou'),
    V('has been working', 'work', 'está trabalhando há'),
    V('there is no fear', 'fear', 'não há medo'),
    V('casteth out', 'cast', 'tira, expulsa'),
    V('already', 'already', 'já'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois de um auxiliar, o verbo principal vai na base: did not go, does not like, will not go.',
      ),
    },
    {
      n: '2',
      text: T('A negação é o auxiliar, não o tempo: did not nunca aparece com um pasado.'),
    },
    {
      n: '3',
      text: T(
        'Have been e have gone não se distinguem por tempo e sim por resultado: um diz o estado atual, o outro conta a experiência.',
      ),
    },
    {
      n: '4',
      text: T(
        'Be mais -ing dá o que está acontecendo; have mais particípio dá o que tem resultado; have been mais -ing dá o que vem fazendo.',
      ),
    },
    { n: '5', text: T('There is é construção existencial e não recebe o plural nem o tempo.') },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 11:17 traz had heard antes de outro passado, e 1 João 4:18 traz casteth out, que junta construção existencial e verbo mais partícula.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve did not went, o problema não é o passado e sim a regra do auxiliar: a negação carrega o tempo, e o verbo fica na base.',
      ),
    },
  ],
  examples: [
    { text: '{I did not go}', gloss: T('eu não fui') },
    { text: "{I didn't went}", gloss: T('errado: tempo dobrado') },
    { text: '{She does not like it}', gloss: T('ela não gosta disso') },
    { text: '{I have gone to Rome}', gloss: T('eu fui a Roma — a viagem acabou') },
    { text: '{I have been to Rome}', gloss: T('eu estive em Roma — experiência') },
    { text: '{He has left}', gloss: T('ele saiu — não está aqui') },
    { text: '{He has been away}', gloss: T('ele esteve fora e voltou') },
    { text: '{He has been working since eight}', gloss: T('ele está trabalhando desde as oito') },
    {
      text: '{when he had heard that he was dead}',
      gloss: T('quando ele soube que ele estava morto'),
    },
    { text: '{There is no fear in love}', gloss: T('não há medo no amor') },
    { text: '{perfect love casteth out fear}', gloss: T('o amor perfeito tira o medo') },
  ],
  tables: [
    {
      caption: T('A negação em cada tempo'),
      head: [T('Tempo'), T('Afirmativa'), T('Negativa')],
      rows: [
        [T('presente'), '{I go}', '{I do not go}'],
        [T('passado'), '{I went}', '{I did not go}'],
        [T('perfeito presente'), '{I have gone}', '{I have not gone}'],
        [T('futuro'), '{I will go}', '{I will not go}'],
        [T('modal'), '{I can go}', '{I cannot go}'],
      ],
    },
    {
      caption: T('O par que muda o sentido'),
      head: [T('Frase'), T('O que diz')],
      rows: [
        ['{I have gone to Rome}', T('a viagem está feita e acabou')],
        ['{I have been to Rome}', T('a viagem conta, e você esteve lá')],
        ['{He has left}', T('ele não está aqui')],
        ['{He has been away}', T('ele esteve fora e voltou')],
      ],
    },
    {
      caption: T('Três construções de aspecto'),
      head: [T('Construção'), T('Exemplo'), T('Aspecto')],
      rows: [
        ['{be + -ing}', '{He is working}', T('em curso')],
        [T('{have + particípio}'), '{He has finished}', T('com resultado')],
        ['{have been + -ing}', '{He has been working}', T('duração até agora')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [T("I didn't went"), T('I did not go'), T('I not went'), T('I did not went to')],
    answer: 1,
    hint: T('Depois de did not o verbo vai na base.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete a negação no passado: 'He ___ not come.'"), answer: 'did' },
    {
      kind: 'fill',
      prompt: T("Complete: 'I have ___ to Paris twice.' (experiência)"),
      answer: 'been',
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao aspecto.'),
      pairs: [
        { a: 'is working', b: T('em curso') },
        { a: 'has finished', b: T('com resultado') },
        { a: 'has been working', b: T('duração até agora') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase diz que ele esteve fora e voltou?'),
      options: [
        T('He has gone away'),
        T('He has been away'),
        T('He has away been'),
        T('He has been gone'),
      ],
      answer: 1,
    },
  ],
};
