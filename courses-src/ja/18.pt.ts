import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Números'),
  title: T('Tempo, datas e o que muda com o calendário'),
  subtitle: T(
    'A data sai em ano-mês-dia, a semana não é numerada e sim nomeada pelos cinco elementos, e a hora esconde o minuto — três sistemas que se misturam na mesma frase',
  ),
  body: C(`
## A data: ano, mês, dia, com a era por baixo

Os algarismos e os contadores já estão dados; falta o encontro dos dois, e o encontro tem nome: data. A primeira coisa a saber é a ordem, porque ela contradiz o mandarim. Em japonês a data é **ano-mês-dia**, como no coreano, e ao contrário do mandarim, que diz dia-mês-ano. "1 de abril de 2024" é {2024nen 4gatsu 1nichi}: {nen} é ano, {tsuki} é mês, {nichi} é dia. O numeral do mês é sino, ichigatsu, nigatsu, sangatsu, yongatsu, e é o mesmo do coreano e do mandarim, porque as três línguas vêm do chinês. O dia também leva numeral sino, com uma exceção que é só dele: o primeiro dia do mês tem uma palavra própria, tsuitachi, que o japonês prefere a "1 nichi".

O mesmo {nichi} muda de leitura conforme o que ele está contando. Numa data, lido "nichi": {1nichi} é "o dia 1". Num contador de duração, lido "ka": {2nikan} é "dois dias", dito futsukan. O numeral não muda, o que muda é o que vem depois dele, e é esse detalhe que impede o leitor de escrever "2 dias" num documento e "dois dias" noutro, e chamar os dois de errado.

O calendário, porém, tem duas camadas. A oficial é o gregoriano, e ele só entrou em 1873: antes disso o Japão media o ano pela lua e numerava pelos anos do imperador. A segunda camada continua viva na mesma frase, a data em **era**. Um documento de 2019 pode trazer {平成三十一年}, "o ano 31 de Heisei", e é o mesmo 2019. Isso não é relíquia de arquivo: 1987 é {Shōwa 62nen}, Showa ano 62, e é assim que a página de assinaturas de uma tradução recente se data. Ler um documento japonês com data exige saber a era; não é erudição, é requisito.

A Bíblia entra aqui, com um detalhe histórico e verificável. A primeira Bíblia completa em japonês moderno apareceu em 1873, o mesmo ano da adoção do calendário gregoriano e do decreto que acabou com a escrita vertical. O livro japonês nasceu no instante em que o idioma mudou de eixo na página. Por isso os prefácios trazem a data nas duas formas ao mesmo tempo: {2019nen 4gatsu 1nichi}, em algarismos, e {平成三十一年}, em kanji e em era. Quem lê um prefácio de tradução está lendo as duas, mesmo que só perceba uma.

## A semana não é numerada: ela é nomeada

O dia da semana abandona a lógica da data. Não existe "dia 2 da semana": existe {kayōbi}, terça-feira, e o nome não vem do número, vem do **elemento**. Os cinco elementos da tradição chinesa, fogo, terra, água, madeira e metal, nomeiam cinco dos sete dias; o sol e a lua nomeiam os dois restantes, domingo e segunda-feira. Por isso o nome do dia não indica a posição dele: {suiyōbi} não significa "dia 3", significa "dia da água", e quarta-feira é quarta-feira porque é o quarto a contar de segunda.

Um dia da semana japonês é uma imagem antes de ser um endereço. {kin'yōbi} é sexta-feira e, ao mesmo tempo, o dia do metal; {mokuyōbi} é quinta-feira e o dia da madeira, e a palavra da madeira é literalmente "bosque". Um convite em japonês escolhe elemento: "quinta às três" é {mokuyōbi 3ji}, e quem ouve sabe o dia pela imagem antes de processar o número. Quem traduz apenas "quinta-feira" perdeu a imagem; quem traduz "dia do bosque" perdeu a ordem da semana. As duas metades precisam sobreviver à tradução, e é por isso que a tradução bíblica mantém o par inteiro.

## A hora: {ji}, {fun} e o minuto que desaparece

Duas palavras resolvem a hora do dia. {ji} é hora, {fun} é minuto, e {fun} tem duas pronúncias, "pun" e "fun", sem diferença de sentido, só de registro. {3ji 15fun} é três e quinze.

E aqui está o detalhe que só aparece falando. Na hora, o minuto é **opcional**. Em japonês comum ninguém diz "três e quinze minutos": diz {3ji 15}, e a partícula {fun} fica de fora depois do número, exatamente como em português, onde o "minutos" também é opcional depois do número. A forma escrita guarda o minuto; a fala dispensa. Meia hora tem palavra própria, e essa palavra é {han}, "metade": {3ji han} são três e meia, e {han} conta horas e horas, só meias horas.

A manhã e a tarde têm nome e vêm antes do número. {gozen} é manhã, {gogo} é tarde: {gozen 9ji} são nove da manhã, {gogo 3ji} são três da tarde. Num texto escrito a ambiguidade desaparece; numa conversa, não. E quem escreve uma hora sem {gozen} num bilhete vai descobrir tarde demais que nove da noite é uma informação muito diferente de nove da manhã.

## Antes, depois e duração: o mesmo {ni} três vezes

{mae} e {ato} são substantivos, como o grau mostrou, e por isso não funcionam como palavras soltas: recebem partícula como qualquer substantivo. "Antes de ir" é {mae ni iku}, literalmente "na frente + ir"; "depois de ir" é {ato ni iku}. E "até" é {made}, que fecha um intervalo: {kara made} é a moldura de qualquer duração, "de... até", e aparece em toda parte.

O mesmo movimento serve para o passado, e o português se perde aqui: não existe "há". O japonês não tem "há". O que faz o trabalho do "há" é o substantivo {mae} mais o contador de anos: "há três anos" é {3nen mae}, e "daqui a três anos" é {3nen ato}. Traduzir {3nen mae} como "três anos antes" perde o "de agora", porque o {mae} é relativo a um ponto de fala, e esse ponto é sempre o presente. O que o japonês faz é datar: ele dá o número e diz de que lado da referência ele está.

E a duração é o terceiro trabalho do {ni}, o mesmo que a primeira lição já registrava como destino e direção. "Durante dois dias" é {2ni watatte}, com {watatte} significando "ao longo de", ou o substantivo compacto {2nikan}, que embrulha os dois dias numa palavra só. O mesmo {ni} faz três serviços: diz para onde, diz quando, diz por quanto tempo. O que muda não é a partícula, é o substantivo com o seu contador, que vem sempre antes dela. Uma data em japonês se lê sem esforço por causa disso.
`),
  vocab: [
    V('nen', '年', 'ano; contador de anos (nen)'),
    V('tsuki', '月', 'mês; lua (tsuki)'),
    V('nichi', '日', 'dia; contador de dias (nichi ou ka)'),
    V('yōbi', '曜日', 'dia da semana (yōbi)'),
    V('ji', '時', 'hora; contador de horas (ji)'),
    V('fun', '分', 'minuto; contador de minutos (fun ou pun)'),
    V('han', '半', 'metade; meia hora (han)'),
    V('gozen', '午前', 'manhã (gozen)'),
    V('gogo', '午後', 'tarde (gogo)'),
    V('ni', 'に', 'em; para; destino, tempo e duração (ni)'),
    V('mae', '前', 'antes; antes de; há, com contador (mae)'),
    V('ato', '後', 'depois; atrás (ato)'),
    V('made', 'まで', 'até; limite (made)'),
    V('kara', 'から', 'desde; de (kara)'),
    V('watatte', '渡る', 'ao longo de; durante (watatte)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A data é ano-mês-dia: o oposto do mandarim e o mesmo que o coreano. O numeral do mês é sino.',
      ),
    },
    {
      n: '2',
      text: T(
        'O dia da semana não usa numeral nenhum: é nomeado pelos cinco elementos e pelo sol e pela lua, e o nome não indica a posição na semana.',
      ),
    },
    {
      n: '3',
      text: T(
        'Em hora, o minuto é opcional depois do número: a escrita guarda {fun} e a fala dispensa. Meia hora é {han}, e manhã e tarde vêm antes, como {gozen} e {gogo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mae} e {ato} são substantivos e por isso levam partícula: "antes de ir" é {mae ni iku}. Não existe "há" em japonês — "há três anos" é {3nen mae}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O mesmo {ni} marca destino, quando e por quanto tempo. O que muda é o substantivo com o seu contador, que vem sempre antes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Uma data em japonês tem duas leituras'),
      text: T(
        'A mesma folha de calendário aparece em algarismos e em era: {2019nen 4gatsu 1nichi} e {平成三十一年} são o mesmo dia. O mesmo vale na hora, onde o que está escrito e o que é falado não coincidem. Quem para no número e ignora o resto está lendo metade do texto.',
      ),
    },
    {
      label: T('1873: o calendário, a escrita e a Bíblia'),
      text: T(
        'Três coisas acontecem no mesmo ano: a entrada do calendário gregoriano, o decreto da escrita horizontal e a primeira Bíblia completa em japonês moderno. É a única data desta lição que vale guardar de cor.',
      ),
    },
  ],
  examples: [
    {
      text: '2024年4月1日',
      gloss: T('2024nen 4gatsu 1nichi — 1 de abril de 2024, na ordem do japonês'),
    },
    { text: '水曜日', gloss: T('suiyōbi — quarta-feira, literalmente "dia da água"') },
    { text: '3時15分', gloss: T('sanji jūgo fun — três e quinze; falado, sem o minuto') },
    { text: '午前9時半', gloss: T('gozen kuji han — nove e meia da manhã') },
    { text: '2日にわたって', gloss: T('futsuka ni watatte — durante dois dias') },
  ],
  tables: [
    {
      caption: T('A semana inteira: nenhum dia é numerado'),
      head: [T('Nome'), T('Elemento'), T('Em português')],
      rows: [
        [T('{getsuyōbi 月曜日}'), T('lua'), T('segunda-feira')],
        [T('{kayōbi 火曜日}'), T('fogo'), T('terça-feira')],
        [T('{suiyōbi 水曜日}'), T('água'), T('quarta-feira')],
        [T('{mokuyōbi 木曜日}'), T('madeira'), T('quinta-feira')],
        [T("{kin'yōbi 金曜日}"), T('metal'), T('sexta-feira')],
        [T('{doyōbi 土曜日}'), T('terra'), T('sábado')],
        [T('{nichiyōbi 日曜日}'), T('sol'), T('domingo')],
      ],
    },
    {
      caption: T('As eras: como o mesmo ano se escreve em duas maneiras'),
      head: [T('Era'), T('Anos'), T('Como se escreve')],
      rows: [
        [T('{Meiji 明治}'), T('1868 a 1912'), T('{Meiji 6nen} = 1873')],
        [T('{Taishō 大正}'), T('1912 a 1926'), T('{Taishō 3nen} = 1914')],
        [T('{Shōwa 昭和}'), T('1926 a 1989'), T('{Shōwa 62nen} = 1987')],
        [T('{Heisei 平成}'), T('1989 a 2019'), T('{Heisei 31nen} = 2019')],
        [T('{Reiwa 令和}'), T('2019 em diante'), T('{Reiwa 1nen} = 2019')],
      ],
    },
    {
      caption: T('O mesmo {ni}, três trabalhos'),
      head: [T('Trabalho'), T('Exemplo'), T('O que diz')],
      rows: [
        [T('destino'), T('{kyō made}'), T('até amanhã')],
        [T('quando'), T('{mokuyōbi 3ji ni}'), T('na quinta, às três')],
        [T('duração'), T('{2ni watatte}'), T('durante dois dias')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {2024nen 4gatsu 1nichi}, qual é a ordem dos três termos?'),
    options: [T('ano, mês, dia'), T('dia, mês, ano'), T('mês, dia, ano'), T('dia, ano, mês')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O que {suiyōbi} quer dizer, literalmente?'),
      options: [T('dia da água'), T('dia 3'), T('dia do fogo'), T('quarta-feira, sem imagem')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete o nome de quarta-feira: 水曜____'),
      answer: '日',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à função'),
      pairs: [
        { a: T('{mae}'), b: T('antes de; e "há", com contador') },
        { a: T('{ato}'), b: T('depois de') },
        { a: T('{made}'), b: T('até') },
        { a: T('{kara}'), b: T('desde') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
