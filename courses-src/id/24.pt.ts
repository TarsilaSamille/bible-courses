import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Verbo'),
  title: T('O verbo: tempo'),
  subtitle: T('sudah, akan, sedang, belum, e o -lah que está desaparecendo'),
  body: C(`## O verbo não muda

O verbo indonésio não flexiona pessoa e não flexiona tempo. A mesma forma serve para {saya}, {kamu}, {dia} e {mereka}: {datang} «vem», {datang} «vêm», {datang} «veio», {datang} «virá». Tudo o que o português resolves na terminação, o indonésio resolve em volta do verbo.

A matriz completa cabe numa página. Antes do verbo entram os advérbios de aspecto; depois do verbo entram os advérbios de modo; e em volta, o que se quiser dizer.

{nada} {sedang datang} «está vindo», {sudah datang} «já chegou», {akan datang} «virá».
{nada} {tidak datang} «não vem», {tidak sudah datang} «ainda não chegou», {belum datang} «ainda não chegou».
{nada} {sudah + negativo} {salah datang} «veio errado», {sedang/+negativo} {sedang tidak datang} «está não vindo», {akan + negativo} {akan tidak datang} «não virá».

O detalhe que produz erro é o negativo: {tidak} e {sedang} combinam, {belum} e {tidak} não. {tidak belum datang} é errado; o que existe é {belum datang} ou {tidak sudah datang}. O mesmo vale para {akan}: {tidak akan datang} é correto, {akan tidak datang} é coloquial.

## Quatro maneiras de dizer o passado

O passado é o que tem mais caminhos, e é por isso que o tradutor precisa escolher em vez de procurar uma flexão que não existe.

{sudah} mais verbo é o passado ordinary e de fala. {Dia sudah datang} «ele já chegou», {saya sudah baca} «já li». É a forma que aparece em noventa por cento das Traduções do Novo Testamento, e ela não é uma escolha do tradutor: é a única na fala.

{telah} mais verbo é o mesmo passado em registro escrito e solene. {Telah datang} «havia chegado», {telah wafat} «havia falecido». Quem escreve em letra alta acha mais natural, e quem escreve para o correio também.

{-lah} colado ao verbo é o passado remoto, e é o único que carrega no verbo uma informação que os outros carregam fora dele. {Pergilah} «partiu», {Datanglah}, {mendengarlah} «escute com atenção». O {-lah} vem da antiga partícula {lah}, hoje ausente da fala, e ele sobrevive em três lugares: na literatura, na língua eclesiástica e em expressões cristalizadas como {mendengarlah} e {sudahlah}, «já chega».

E há o passado resultado, que não é tempo mas estado: {Lantainya sudah lapuk} «o chão já desmoronou», {Pintu sudah tertutup} «a porta está fechada». O {sudah} aqui marca a consequência, não o momento, e o português traduz por um pretérito perfeito que sugere tempo.

## Três partículas que se colam no fim

O que sobrou da flexão foi um punhado de partículas que se colam no fim do verbo ou da oração. São poucas, três são úteis, e uma está morrendo.

{-lah}, com o sentido de resultado e de instância: {Tolong datanglah!} «por favor, venha!», {Cepatlah!} «depressa!», {Dengarkanlah!} «escute!». Na fala corrente é ênfase e suplica; na escrita antiga é tempo. Quem aprende a ler um texto antigo precisa saber que {Datanglah} pode ser «veio» e não «venha».

{-pun} marca ênfase pelo contraste, e é mais externo do que temporal: {Dia pun pelayan} «ele também é servo», {Kita pun ikut suffer} «nós também sofremos». A forma mais comum é {pun} depois do pronome ou do advérbio: {Aku pun tidak tahu} «eu também não sei», {Dia pun datang} «ele também veio».

{-kah} é partícula de pergunta, e é literária: {Datangkah kamu?} «vens?». A forma comum de perguntar é {Apakah kamu datang?}, com {apakah} à frente. {Datangkah} aparece em oração litúrgica e em texto antigo, e o leitor que não a conhece lê {Datangkah} como {datang +kah} e se perde. O mesmo vale para {-tah}, que afirma em vez de perguntar e só vive em frase feita: {Sudahkah?} «se já aconteceu?».

A soma delas é o que o grego fazia com a terminação. Uma oração grega chega ao fim do verbo com o tempo, a pessoa e o modo impressos na terminação; uma oração indonésia chega ao fim do verbo com o advérbio já colado na frente e talvez uma partícula {-lah} no fim. A informação não se perdeu: mudou de endereço.

## Tiga perguntas e a mesma frase

{Yohanes 21:15-17} é o melhor exemplo do que acontece quando uma língua não flexiona. Jesus pergunta três vezes a Simão se o o ama, e o texto repete a pergunta com poucas mudanças.

O grego faz a pergunta com três verbos diferentes, e a diferença é um jogo de palavras que o tradutor grego aproveita. O indonésio repete {Apakah kamu cintaku?} três vezes, e a diferença se perde. Não porque o tradutor tenha perdido algo, mas porque a língua não tem onde pôr a diferença: o verbo de pergunta é {cinta}, com {meN-} ou sem {meN-}, e não há três verbos para três perguntas.

Quem traduz {Simona, apakah kamu mencintaimu?}{?} três vezes com três verbos portugueses diferentes está acrescentando do grego, não traduzindo do indonésio. E quem traduz a resposta {Ya, Rabbiku, dan Engkau tahu bahwa aku mencintaimu?} três vezes com a mesma estrutura descobre que o paralelismo grego, feito de variação, virou um paralelismo indonésio, feito de repetição. O efeito no leitor é o mesmo, e a gramática que o produziu não é a mesma.`),
  vocab: [
    V('datang', 'datang', 'vir'),
    V('datanglah', 'datang', 'venha! (ênfase)'),
    V('pergi', 'pergi', 'ir'),
    V('pergilah', 'pergi', 'partiu'),
    V('tidur', 'tidur', 'dormir'),
    V('bekerja', 'kerja', 'trabalhar'),
    V('makan', 'makan', 'comer'),
    V('sudah', 'sudah', 'já'),
    V('telah', 'telah', 'já (escrito)'),
    V('akan', 'akan', 'vai'),
    V('sedang', 'sedang', 'estar a'),
    V('belum', 'belum', 'ainda não'),
    V('tidak', 'tidak', 'não'),
    V('-lah', 'lah', '(ênfase; tempo distante, escrito)'),
    V('-pun', 'pun', 'também, até'),
    V('-kah', 'kah', '(partícula de pergunta, literária)'),
    V('apakah', 'apakah', 'se (pergunta)'),
    V('cinta', 'cinta', 'amar, amor'),
    V('mencintai', 'cinta', 'amar'),
    V('Rabbiku', 'Rabbiku', 'meu Mestre'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo não flexiona pessoa nem tempo: {datang} serve para todas as pessoas e todos os tempos.',
      ),
    },
    { n: '2', text: T('O aspecto vem antes do verbo: {sedang}, {sudah}, {akan}, {belum}.') },
    {
      n: '3',
      text: T(
        '{tidak} combina com {sedang} e {akan}, mas não com {belum}: {tidak sudah datang}, nunca {tidak belum datang}.',
      ),
    },
    {
      n: '4',
      text: T('{-lah} no fim do verbo é ênfase na fala e tempo distante na escrita antiga.'),
    },
    {
      n: '5',
      text: T('{-pun} marca contraste pelo «também» e {-kah} é partícula de pergunta literária.'),
    },
  ],
  notes: [
    {
      label: T('O passado resultado'),
      text: T(
        'Em {Lantainya sudah lapuk} o {sudah} não marca um momento mas uma consequência. O português traduz por um pretérito perfeito que sugere tempo, e o leitor precisa notar que a frase diz «o resultado está presente», não «aconteceu».',
      ),
    },
    {
      label: T('Onde o -lah ainda vive'),
      text: T(
        'O {-lah} de tempo remoto aparece em expressões fixas do tipo {mendengarlah}, «escute com atenção», e em orações litúrgicas antigas. Quem encontra {Datanglah} num texto e lê «veio» em vez de «venha» errou o tempo, não a língua.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang.', gloss: T('Ele vem. / Ele veio. / Ele virá.') },
    { text: 'Dia sedang datang.', gloss: T('Ele está vindo.') },
    { text: 'Dia sudah datang.', gloss: T('Ele já chegou.') },
    { text: 'Dia belum datang.', gloss: T('Ele ainda não chegou.') },
    { text: 'Dia tidak sudah datang.', gloss: T('Ele ainda não chegou.') },
    { text: 'Telah datang.', gloss: T('Havia chegado.') },
    { text: 'Pergilah!', gloss: T('Partiu!') },
    { text: 'Tolong datanglah!', gloss: T('Por favor, venha!') },
    { text: 'Aku pun tidak tahu.', gloss: T('Eu também não sei.') },
    { text: 'Datangkah kamu?', gloss: T('Você vem?') },
  ],
  tables: [
    {
      caption: T('A matriz do tempo'),
      head: ['Tempo', 'Marca', 'Exemplo', 'Leia como'],
      rows: [
        ['presente', '(nada)', 'Dia datang.', 'ele vem'],
        ['progressivo', 'sedang + V', 'Dia sedang datang.', 'ele está vindo'],
        ['passado', 'sudah + V', 'Dia sudah datang.', 'ele já chegou'],
        ['passado escrito', 'telah + V', 'Telah datang.', 'havia chegado'],
        ['futuro', 'akan + V', 'Dia akan datang.', 'ele virá'],
        ['ainda não', 'belum + V', 'Dia belum datang.', 'ele ainda não chegou'],
        ['passado remoto', 'V-lah', 'Pergilah.', 'partiu'],
        ['negativo', 'tidak + V', 'Dia tidak datang.', 'ele não vem'],
      ],
    },
    {
      caption: T('Partículas do fim do verbo'),
      head: ['Partícula', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['-lah', 'ênfase na fala, tempo na escrita', 'Tolong datanglah!', 'por favor, venha!'],
        ['-pun', 'contraste pelo «também»', 'Aku pun tidak tahu.', 'eu também não sei'],
        ['-kah', 'pergunta, literário', 'Datangkah kamu?', 'você vem?'],
        ['-tah', 'afirmação, frase feita', 'Sudahkah?', 'será que já?'],
        ['-nya', 'retoma o substantivo', 'datangnya', 'a vinda dele'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta de «ele ainda não chegou»?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak belum datang'),
      T('Dia sedang tidak datang'),
      T('Dia tidak akan datang'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o futuro: «ele virá» = Dia ___ datang.'),
      answer: 'akan',
      hint: T('O advérbio que vem antes do verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('O que significa {Aku pun tidak tahu}?'),
      options: [
        T('eu também não sei'),
        T('eu só não sei'),
        T('eu ainda não sei'),
        T('eu não quero saber'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à sua função'),
      pairs: [
        { a: T('{-lah}'), b: T('ênfase') },
        { a: T('{-pun}'), b: T('também') },
        { a: T('{-kah}'), b: T('pergunta') },
        { a: T('{-nya}'), b: T('retoma o nome') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
