import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Escrita'),
  title: T('As quatro mudanças que o escritor faz e o falante não vê'),
  subtitle: T(
    'O coreano se escreve com regras de som que só se desdobram na fala: quem não as aprendeu lê letra por letra, pronuncia errado, e nem a página o avisa',
  ),
  body: C(`## Um sistema, não uma transcrição

O coreano se escreve com regras de mudança de som, e essas regras valem na escrita mesmo quando ninguém está falando. Isso contraria a expectativa de quem chega de um alfabeto latino: uma letra deveria registrar um som, não uma regra. Um coreano lê e pronuncia corretamente porque aprendeu as regras; alguém que não é coreano lê letra por letra, diz cada letra como soa sozinha e erra. A ortografia coreana é um sistema, não uma transcrição: ela registra a palavra, não o som. E a consequência prática é dura: quem não conhece as regras não consegue deduzir a pronúncia a partir da página. No português a letra entrega o som quase sempre; no coreano a letra entrega a palavra, e o som é um passo atrás.

Quatro regras fazem quase todo o trabalho: {yeoneumhwa}, {bieumeumhwa}, {gyeongeumhwa} e a neutralização do fim de sílaba. Três delas mudam o que se ouve sem mudar o que está escrito, e é por isso que elas são invisíveis para quem está lendo. Saber que elas existem é o que separa ler coreano de decifrar coreano.

## {yeoneumhwa}: a palavra escrita que mente sobre a fala

{yeoneumhwa} é a associação consonântica, e é a regra mais visível das quatro. Quando um bloco termina em ng e o próximo começa em vogal, o ng solta o g e vai morar no bloco seguinte, na posição de consoante final. A palavra {song} seguida do bloco e está escrita como dois blocos, song e, e se fala sone: o ng de song desce para o e e vira a final do novo bloco. O mesmo numa palavra só: um bloco {um} seguido de um bloco começado em ing dá umin escrito e un falado.

Duas coisas importam aqui. A primeira é que o contexto não participa: quem você ama, quando você ama, com que intenção, nada disso muda o som. A regra é cega para o sentido, o que a torna determinística, e é por isso que a pronúncia coreana se aprende como se aprende aritmética. A segunda é que {sarang}, o amor, não se mexe: o ng final fica onde está, porque o bloco seguinte não começa em vogal. Nem toda palavra com ng se associa, e a condição é o que vem depois, não a letra.

E há um segundo tipo de associação, mais curto: um h inicial logo depois de um i inicial some, e o h soa sozinho. A pronúncia se comprime, a escrita não muda, e o detalhe reaparece mais adiante com o fim da sílaba.

## {bieumeumhwa} e {gyeongeumhwa}: o que o ouvido faz e o papel não mostra

{bieumeumhwa} é a nasalização. Quando k, d ou b encontra m ou n na sílaba seguinte, o som muda para a versão nasal: ng, n, m. {gukmul} está escrito guk-mul e se fala gun-mul, porque o k final vira n antes do m. Eopda está escrito eop-da e se fala eop-tta: o p final virou m antes do d, e o d endureceu, as duas regras no mesmo par de sílabas. Quem lê a página em voz alta traduz letra por letra e produz um som que nenhum coreano produz.

{gyeongeumhwa} é a tensificação: depois de um som surdo, a consoante seguinte fica tensa. {hakgyo}, a escola, está escrito hak-gyo e se fala hak-kkyo, com o segundo k tenso. E aqui está o ponto central da lição. Às vezes a escrita acompanha: o bloco do k tenso é um símbolo diferente do k frouxo, e o leitor sabe que leu aquele. Às vezes a escrita não acompanha nada. O coreano para "bom" e o coreano para "igual" têm as mesmas letras e pronúncias diferentes, jot-tta e gat-tta, e a diferença só existe na boca. O papel mostra as duas palavras como a mesma coisa; a boca não. É o caso em que ler o hangul e falar o coreano são dois conhecimentos separados, e o segundo precisa de regra.

## O fim da sílaba, e os nomes que o tradutor deixou

A quarta regra não muda som nenhum: ela decide o que pode ficar embaixo do bloco. Uma sílaba coreana fecha com sete consoantes, e nenhuma delas é tensa ou aspirada. {bap}, o arroz cozido, está escrito bap e se fala bak: o b tenso não se sustenta no fim de uma sílaba, então ele neutraliza para a versão frouxa, que é a mesma do p. E a regra do ss: s seguido de i no fim da sílaba vira ss, o que faz a palavra para "melhor" soar nat-tta em vez do que a escrita sugere.

Detalhe ao lado, e que só aparece quando se fala: o i inicial do coreano não tem a oclusão na garganta que o mandarim dá à mesma vogal, de modo que o mesmo i que o coreano faz soar com glote fechado em mandarim aqui soa liso.

E aqui a lição paga o que prometeu desde a primeira. Os nomes próprios bíblicos em coreano são escritos em hangul e falados em chinês, e a razão é histórica, não ortográfica: quem traduzia a Bíblia para o coreano era missionário chinês, e lia o nome bíblico em chinês antes de escrevê-lo em coreano. Assim, {yesu}, o nome coreano de Jesus, traz o s de sírio, o s chinês, e não o sh que o hangul entregaria a um falante nativo. O mesmo vale para {moise}, cujo som vem da leitura chinesa de Moisés, e para {paulo}, falado com o r rolado do chinês. Até {sin}, o termo que o coreano usa para Deus, vem da leitura chinesa da palavra. O nome coreano de Jesus não é o nome de Jesus em coreano: é o nome que o tradutor ouviu na própria língua e escreveu na língua dele.

É por isso que saber as regras fonéticas não é detalhe de pronúncia. Quando alguém prega em coreano e pronuncia um nome bíblico com o som do chinês, não é erro de sotaque: é a pronúncia que a palavra guardou do dia em que foi traduzida. O nome é um documento histórico, e as quatro regras deste capítulo são o que permite ler esse documento sem confundir a pronúncia antiga com o som que a letra sugere.
`),
  vocab: [
    V(
      'yeoneumhwa',
      '연음화',
      'associação consonântica: o ng final migra para o bloco seguinte quando este começa em vogal (yeoneumhwa)',
    ),
    V(
      'bieumeumhwa',
      '비음화',
      'nasalização: k, d e b viram ng, n e m antes de m ou n (bieumeumhwa)',
    ),
    V(
      'gyeongeumhwa',
      '경음화',
      'tensificação: depois de um som surdo a consoante seguinte fica tensa (gyeongeumhwa)',
    ),
    V('song', '송', 'bloco com final ng; antes de vogal o ng migra e o som muda (song)'),
    V('um', '음', 'vogal u com final m: o m migra e o som passa a un (um)'),
    V('sarang', '사랑', 'amor; o ng final fica, e a palavra não muda (sarang)'),
    V('gukmul', '국물', 'sopa: escrito guk-mul e falado gun-mul (gukmul)'),
    V('hakgyo', '학교', 'escola: escrito hak-gyo e falado hak-kkyo (hakgyo)'),
    V('bap', '밥', 'arroz cozido: o b tenso não fecha a sílaba e soa bak (bap)'),
    V('yesu', '예수', 'Jesus em coreano: escrito em hangul, falado como no chinês (yesu)'),
    V('sin', '신', 'Deus; o termo coreano vem da leitura chinesa da palavra (sin)'),
    V('moise', '모세', 'Moisés em coreano, falado com o som que o chinês lhe deu (moise)'),
    V('paulo', '바오로', 'Paulo em coreano, falado com o r rolado do chinês (paulo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yeoneumhwa}: quando um bloco termina em ng e o seguinte começa em vogal, o ng desce para a consoante final do seguinte. {song} mais e se escreve song-e e se fala sone.',
      ),
    },
    {
      n: '2',
      text: T(
        'O contexto não participa da pronúncia: quem você ama e quando você ama não alteram nenhum som. A regra é cega para o sentido, e por isso é determinística.',
      ),
    },
    {
      n: '3',
      text: T(
        '{bieumeumhwa}: k, d e b viram ng, n e m antes de m ou n. {gukmul} é escrito guk-mul e falado gun-mul.',
      ),
    },
    {
      n: '4',
      text: T(
        '{gyeongeumhwa}: depois de som surdo a consoante seguinte fica tensa, como em {hakgyo}. Às vezes a escrita mostra, às vezes não mostra — e quando não mostra, só a regra decide.',
      ),
    },
    {
      n: '5',
      text: T(
        'Uma sílaba só fecha com consoante frouxa: {bap} se fala bak. E os nomes próprios bíblicos são falados em chinês, mesmo escritos em hangul, como {yesu} e {moise}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Quando a escrita não muda nada'),
      text: T(
        'O caso mais duro da lição é a {gyeongeumhwa} sem marca visual: o coreano para "bom" e o coreano para "igual" têm as mesmas letras e pronúncias diferentes, jot-tta e gat-tta. Um leitor que decifra letra por letra chega à pronúncia errada sem nenhum sinal na página de que errou.',
      ),
    },
    {
      label: T('O nome bíblico é um documento histórico'),
      text: T(
        'Os tradutores coreanos da primeira geração eram missionários chineses e liam o nome bíblico em chinês antes de escrevê-lo em coreano. Por isso {yesu} soa com o s de sírio, {paulo} com o r rolado chinês e {sin} com a leitura chinesa do termo. A pronúncia do nome em coreano é a voz do tradutor, gravada na palavra.',
      ),
    },
  ],
  examples: [
    {
      text: '손에',
      gloss: T(
        'son-e — na mão: escrito song-e, falado sone, porque o ng desce para o bloco seguinte',
      ),
    },
    { text: '국물', gloss: T('gun-mul — sopa: o k final se nasaliza em n antes do m') },
    {
      text: '없다',
      gloss: T(
        'eop-tta — não haver: o p vira m antes do d e o d endurece, duas regras no mesmo par',
      ),
    },
    { text: '학교', gloss: T('hak-kkyo — escola: depois do som surdo k, o g final vira k tenso') },
    {
      text: '예수',
      gloss: T(
        'ye-su — Jesus: o s é o s chinês, de sírio, e não o som que o hangul entregaria a um falante nativo',
      ),
    },
  ],
  tables: [
    {
      caption: T('As quatro mudanças, lado a lado'),
      head: [T('Regra'), T('O que muda'), T('Quando acontece'), T('Na escrita'), T('Na fala')],
      rows: [
        [
          T('{yeoneumhwa}'),
          T('o ng final solta o g e vira consoante final do bloco seguinte'),
          T('o bloco seguinte começa em vogal'),
          T('song mais e'),
          T('sone'),
        ],
        [
          T('{bieumeumhwa}'),
          T('k, d e b viram ng, n e m'),
          T('antes de m ou n'),
          T('guk-mul'),
          T('gun-mul'),
        ],
        [
          T('{gyeongeumhwa}'),
          T('a consoante que vem depois fica tensa'),
          T('depois de um som surdo'),
          T('hak-gyo'),
          T('hak-kkyo'),
        ],
        [
          T('fim de sílaba'),
          T('o final tenso neutraliza para o frouxo'),
          T('no fim do bloco'),
          T('bap'),
          T('bak'),
        ],
      ],
    },
    {
      caption: T('A mesma palavra na escrita e na fala'),
      head: [T('Palavra'), T('Blocos escritos'), T('Como se fala'), T('Regra')],
      rows: [
        [T('{sarang}'), T('sa-rang'), T('sarang'), T('nenhuma: o ng fica onde está')],
        [T('{song}'), T('song mais e'), T('sone'), T('{yeoneumhwa}')],
        [T('{gukmul}'), T('guk-mul'), T('gun-mul'), T('{bieumeumhwa}')],
        [T('{hakgyo}'), T('hak-gyo'), T('hak-kkyo'), T('{gyeongeumhwa}')],
        [T('{bap}'), T('bap'), T('bak'), T('o final tenso não se sustenta')],
        [T('{yesu}'), T('ye-su'), T('yesu, com o s de sírio'), T('o nome é falado em chinês')],
      ],
    },
    {
      caption: T('Nomes próprios: hangul escrito, chinês falado'),
      head: [T('Nome'), T('Escrito em coreano'), T('Falado em coreano'), T('De onde vem o som')],
      rows: [
        [T('Jesus'), T('{yesu}'), T('ye-su'), T('do chinês, com o s de sírio')],
        [T('Deus'), T('{sin}'), T('sin'), T('da leitura chinesa do termo para Deus')],
        [T('Moisés'), T('{moise}'), T('mo-se'), T('da leitura chinesa de Moisés')],
        [T('Paulo'), T('{paulo}'), T('pa-o-ro'), T('do chinês, com o r rolado')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '{gukmul} está escrita em dois blocos, mas ninguém em coreano fala "guk-mul". O que aconteceu?',
    ),
    options: [
      T('{bieumeumhwa}: o k final virou n porque o bloco seguinte começa em m'),
      T('{yeoneumhwa}: o l final subiu para o bloco seguinte'),
      T('o bloco seguinte tem vogal inicial, então o k subiu'),
      T('o coreano pronuncia o k final de toda palavra suja antes de consoante'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Escreva em hangul o nome coreano de Jesus, com a pronúncia que o missionário chinês deixou: ____',
      ),
      answer: '예수',
    },
    {
      kind: 'match',
      prompt: T('Ligue a regra ao que ela faz'),
      pairs: [
        {
          a: T('{yeoneumhwa}'),
          b: T('o ng final migra para o bloco seguinte quando ele começa em vogal'),
        },
        { a: T('{bieumeumhwa}'), b: T('k, d e b viram ng, n e m antes de m ou n') },
        { a: T('{gyeongeumhwa}'), b: T('depois de som surdo, a consoante seguinte fica tensa') },
        { a: T('{sarang}'), b: T('o ng final fica: nenhuma das três regras se aplica') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'A palavra coreana para "bom" e a palavra para "igual" se escrevem com as mesmas letras e se falam diferente. Por quê?',
      ),
      options: [
        T('a {gyeongeumhwa} endurece a consoante depois de som surdo, e a escrita não mostra isso'),
        T('as duas palavras têm duas vogais compostas com sons diferentes'),
        T('o coreano distingue as palavras pela posição da consoante final'),
        T('uma das duas palavras é um pronome e a outra é um substantivo'),
      ],
      answer: 0,
    },
  ],
};
