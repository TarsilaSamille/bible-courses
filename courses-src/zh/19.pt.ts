import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verbo'),
  title: T('Futuro, obrigação e possibilidade'),
  subtitle: T(
    'O Mandarin não flexiona o verbo: o tempo vem de partículas que você escolhe antes dele',
  ),
  body: C(`
## O Mandarin não flexiona o verbo

Em português o futuro mora no verbo. "Eu vou comer" é "vou" mais "comer": uma forma distinta da do presente e da do passado, e o mesmo acontece com toda a conjugação. Quem aprende português aprende primeiro a flexão, e é por isso que o futuro parece fácil antes de ser difícil.

No Mandarin não existe flexão. {wǒ chī}, {wǒ chī le} e o que em português seria "eu vou comer" têm **o mesmo verbo**, {chī}, idêntico nas três frases. O que muda não é o verbo: é o que está antes dele.

{Le} ({了}) é aspecto: diz que a ação está concluída, não quando. O futuro é outra coisa. Não tem partícula única nem tempo verbal; tem um conjunto de palavras que você põe antes do verbo, cada uma com um grau de compromisso diferente. Uma delas é previsão, outra é plano, outra é obrigação, outra é possibilidade. Escolher entre elas é a tarefa, e escolher errado não produz gramática quebrada: produz uma nuance errada. Em Mandarin o tempo é uma decisão de estilo tomada frase a frase, não um fato da forma do verbo.

## {會} e {要}: o que eu sei e o que eu planejo

**{huì} ({會})** antes do verbo tem dois sentidos, e eles são indistinguíveis na forma:

- {wǒ huì chī} — "eu sei comer", isto é, tenho a capacidade.
- {wǒ huì chī} — "eu vou comer", isto é, é a previsão que faço.

A ambiguidade é real e útil: nos dois casos a estrutura é a mesma, e o contexto, o que vem antes, quem está falando, sobre o que, decide. Em Mandarin colloquial essa sobreposição é explorada de propósito, e num texto bíblico ela aparece onde o grego também tem ambiguidade.

**{yào} ({要})** antes do verbo é plano ou desejo: {wǒ yào qù} é "eu vou ir / eu quero ir", com a diferença de que o "vou" aqui é decisão minha, não previsão. Compare os dois: {wǒ huì qù} é "eu vou lá", previsão; {wǒ yào qù} é "eu vou lá", plano. São a mesma frase em português e duas frases distintas em Mandarin.

{jiāng yào} ({將}{要}) é o futuro mais formal e mais escrito. Nas frases faladas ninguém diz {jiāng}; na {和合本} e na literatura ele aparece o tempo todo, e é a forma que o tradutor escolhe quando o original tem peso literário, narração, profecia, relato solene. Ele não acrescenta sentido novo: acrescenta registro.

E há ainda a negação do futuro: {bù} antes do verbo nega presente e futuro, e {wǒ bù qù} é "eu não vou". O {bù} nega o que {huì} ou {yào} afirmariam.

## {必}{須} e {de}: três verbos com um caractere só

A obrigação se diz de duas maneiras. **{bìxū} ({必}{須})** é um verbo modal completo, "é necessário, é preciso": {wǒ bìxū qù}, "eu preciso ir", com a mesma posição de {huì} e {yào}, antes do verbo. Em texto escrito ele é mais forte e mais formal que {děi}.

**{děi} ({得})** na mesma posição diz a mesma coisa de maneira mais curta e falada: {wǒ děi qù}, "eu preciso ir".

O caractere {得} é três verbos em Mandarin, que só o tom distingue:

- {děi}, 3º tom, "precisar, ter de": {wǒ děi qù}, eu preciso ir.
- {de}, tom neutro, "modo": {nǐ màn màn de chī}, coma devagar.
- {dé}, 2º tom, "obter, receber": {wǒ dé dào yī fēn}, eu ganhei um ponto.

Um caractere, três verbos, três tons. Nenhum deles se parece com os outros, e nenhum contexto gramatical obriga o tom: é o significado que traz o tom junto. Por isso um dicionário Mandarin é organizado por pronúncia e não por caractere, e por isso {wǒ děi qù} e {wǒ dé dào yī fēn} podem ser uma linha só no papel e duas frases sem relação nenhuma na fala.

## {可}{能} e a escala da certeza

**{kěnéng} ({可}{能})** significa "pode, é possível". Ele vai antes do verbo como {huì} e {yào}, e também antes de um adjetivo: {tā kěnéng lèi}, "ele pode estar cansado", {zhè kěnéng shì hǎo de}, "isto pode ser bom".

As cinco palavras se organizam numa escala de compromisso do falante com a verdade da frase, e a ordem importa mais que a tradução:

**{yídìng} ({一}{定})** > {bìxū} ({必}{須}) > {yào} ({要}) > {huì} ({會}) > {kěnéng} ({可}{能})

O mais forte é o que nega possibilidade; o mais fraco é a possibilidade. {tā yídìng lái} é "ele virá com certeza" e, por implicação, "não pode ser que não venha". No meio, {tā yào lái} é o que ele pretende, {tā huì lái} é o que se espera, {tā kěnéng lái} é o que se admite. Traduzir todos por "vai" apaga exatamente a informação que a frase carregava.

É aqui que a leitura bíblica fica rica. Em João 3:16 a {和合本} diz {shàngdì ài shìrén, shènzhì jiāng tā de dúshēnzǐ cìgěi tāmen}, "Deus amou o mundo, a ponto de entregar seu Filho único". O {jiāng} ({將}) é a partícula formal de futuro, e ela está junto de {cì} ({賜}), "dar, conceder". Os dois juntos dizem algo que a tradução para português costuma apagar: o verbo da entrega está no **potencial**, não no passado consumado. Não é "entregou"; é "a ponto de entregar", um futuro que se abre pela decisão de alguém.

É a diferença entre uma frase que afirma e uma que se compromete. E o Mandarin não tem futuro flexionado para esconder essa escolha: ela está escrita na partícula, à vista de quem lê.`),
  vocab: [
    V('huì', '会', 'ir (futuro previsto) / saber, poder'),
    V('yào', '要', 'ir (plano, intenção); querer'),
    V('jiāng', '将', 'ir (futuro formal e escrito; parte de 將要)'),
    V('děi', '得', 'ter de, precisar (3º tom)'),
    V('bìxū', '必须', 'ser necessário, ser preciso'),
    V('kěnéng', '可能', 'poder, ser possível'),
    V('yídìng', '一定', 'com certeza, certamente'),
    V('cì', '赐', 'dar, conceder (concessão divina)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nenhuma partícula de futuro flexiona o verbo: em {wǒ yào chī} e {wǒ chī} o verbo é o mesmo {chī}.',
      ),
    },
    { n: '2', text: T('{huì} antes do verbo é previsão **ou** capacidade; o contexto decide.') },
    {
      n: '3',
      text: T(
        '{yào} antes do verbo é plano ou desejo; {jiāng yào} é a forma formal e escrita da mesma ideia.',
      ),
    },
    {
      n: '4',
      text: T('Obrigação é {bìxū} (verbo) ou {děi} (3º tom) — nunca {dé}, que significa obter.'),
    },
    {
      n: '5',
      text: T(
        '{kěnéng} precede verbo ou adjetivo, e a escala é {yídìng} > {bìxū} > {yào} > {huì} > {kěnéng}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Um caractere, três verbos'),
      text: T(
        '{děi} (3º tom) "precisar", {de} (tom neutro) "modo" e {dé} (2º tom) "obter" são o mesmo caractere {得}. O tom não é escolhido pela gramática: vem do sentido. Um dicionário Mandarin é{索}{引}ado por pronúncia, não por caractere.',
      ),
    },
    {
      label: T('Onde o tradutor escolhe {将}'),
      text: T(
        '{jiāng} não aparece na fala — é registro escrito e solene. Ver uma {将} na {和合本} é ver uma decisão de estilo do tradutor, não um dado do grego: nem toda passagem solene recebe {将}, e nenhuma recebe se o contexto é coloquial.',
      ),
    },
  ],
  examples: [
    { text: '我会说话', gloss: T('wǒ huì shuōhuà — eu sei falar (e também: eu vou falar)') },
    { text: '我要去', gloss: T('wǒ yào qù — eu vou ir (é o meu plano)') },
    { text: '我得走了', gloss: T('wǒ děi zǒu le — eu preciso ir (é necessário)') },
    { text: '他可能会来', gloss: T('tā kěnéng huì lái — ele talvez venha') },
  ],
  tables: [
    {
      caption: T('A escala do compromisso do falante'),
      head: [T('Palavra'), T('Força'), T('{wǒ} + {qù} lê-se como')],
      rows: [
        [T('{wǒ} {yídìng} {qù}'), T('certeza'), T('eu vou mesmo')],
        [T('{wǒ} {bìxū} {qù}'), T('obrigação'), T('eu preciso ir')],
        [T('{wǒ} {yào} {qù}'), T('plano'), T('eu vou ir (pretendo)')],
        [T('{wǒ} {huì} {qù}'), T('previsão'), T('eu vou ir (prevejo)')],
        [T('{wǒ} {kěnéng} {qù}'), T('possibilidade'), T('é possível que eu vá')],
      ],
    },
    {
      caption: T('O caractere 得: três verbos, três tons'),
      head: [T('Pronúncia'), T('Sentido'), T('Exemplo')],
      rows: [
        [T('{děi} (3º tom)'), T('precisar, ter de'), T('{wǒ} {děi} {qù} — eu preciso ir')],
        [T('{de} (tom neutro)'), T('modo, maneira'), T('{màn màn} {de} {chī} — coma devagar')],
        [T('{dé} (2º tom)'), T('obter, receber'), T('{wǒ} {dé} {dào} yī fēn — ganhei um ponto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我得走了}, qual é a leitura de {得}?'),
    options: [T('precisar'), T('modo'), T('obter'), T('dar')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "eu preciso ir" com a partícula de obrigação: 我____走了'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao seu valor'),
      pairs: [
        { a: T('{會}'), b: T('previsão ou capacidade') },
        { a: T('{要}'), b: T('plano ou desejo') },
        { a: T('{必須}'), b: T('obrigação') },
        { a: T('{可能}'), b: T('possibilidade') },
        { a: T('{一定}'), b: T('certeza') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Em {他可能会来}, qual palavra carrega a possibilidade?'),
      options: [T('{會}'), T('{可能}'), T('{將}'), T('{一定}')],
      answer: 1,
    },
  ],
};
