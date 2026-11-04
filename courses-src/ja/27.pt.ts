import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partícula'),
  title: T('{ni} e {e}: o destino e a direção são duas partículas'),
  subtitle: T(
    'O {ni} entra depois de quase tudo e não precisa de verbo de movimento; o {e} só aparece com verbos de ir e vir, e por isso é mais raro no texto corrido do que nos livros de gramática',
  ),
  body: C(`
## {ni}: o destino, que não exige verbo nenhum

O {ni} vai depois do substantivo e diz para onde. *Kare wa kyōkai ni iku*, "ele vai para a escola", é a frase mais simples que existe, e ela já traz a lição: o {ni} **não significa movimento**, significa destino. Quem se move é o verbo, e o {ni} só aponta.

O que torna o {ni} útil é que ele não precisa de verbo de movimento para trabalhar. Em *hon o ie ni {ireru}*, "coloco o livro dentro de casa", o substantivo depois do {ni} é um lugar onde algo **entra**, e o verbo é o de colocar. Em *tomodachi ni tegami o kakimashita*, "escrevo uma carta ao meu amigo", o que vem depois do {ni} não é lugar nenhum: é uma pessoa que recebe. O mesmo {ni} faz os dois trabalhos, e o que muda é o que o nome que vem depois dele é.

## {e}: a direção, e os verbos que a pedem

O japonês escreve a direção numa partícula separada. *Kyōkai e iku* é a mesma frase de antes, com {e} no lugar do {ni}, e a única diferença é que o {e} diz direção, não destino. São duas palavras quase iguais em português, e são duas partículas diferentes em japonês.

O {e} quase só aparece **com verbos de ir e vir**: {iku} ir, {kuru} vir, {kaeru} voltar, e mais *hōkō suru* partir, *mukau* dirigir-se a, *wataru* atravessar. Com qualquer outro verbo, o lugar é marcado pelo {ni}, e essa é a regra: *eki ni {noru}*, "pego o trem na estação", *machi ni {sumu}*, "moramos na cidade", *ie ni hairu*, "entro em casa". Escrever *eki e noru* não é japonês.

## O mesmo nome com as duas partículas

A pergunta que surge logo é se {iku} aceita as duas. Aceita. *Tōkyō ni iku* e *Tōkyō e iku* são frases que qualquer japonês entende, e a diferença é de registro: o {e} é mais cuidado, mais escrito, e o {ni} é o que aparece na fala e no texto corrente. O que não existe é {e} com verbo que não é de ir e vir, e é aí que o iniciante erra.

Mateo 2 mostra isso melhor do que qualquer gramática. Em 2:1, *hiseki-tachi wa erusaremu ni yatte kite*, "os magos de oriente vieram a Jerusalém", o verbo é vir, o nome é o lugar, e a partícula é o {ni}. Em 2:8, *kare wa sono-tachi o Betsurēmu ni {okutta}*, "enviou-os a Belém", a partícula continua sendo {ni}, e agora o substantivo depois dela é o lugar de destino de uma terceira pessoa, não de quem envia. Em João 1:43, *Yesu wa Gariraya ni {iku} to shitameta*, o texto escreve {ni} com o verbo {iku}, que é justamente o verbo que mais aceita o {e}. Um tradutor japonês pode escrever {e} nesses três lugares sem nenhum erro; o texto eligió o {ni}, e a escolha não diz nada sobre o sentido.

## Os outros cinco trabalhos do {ni}

A dificuldade do {ni} não é que ele signifique destino. É que destino é **só um dos seis lugares** onde ele aparece.

O primeiro é o tempo. *San-ji ni*, "às três horas"; *yoru ni*, "à noite". O {ni} depois de um substantivo de tempo marca quando, e a forma é a mesma: nome mais partícula.

O segundo é a pessoa, e ele vem antes do objeto direto, o que produz a inversão que a lição de sintaxe já mediu: *tomodachi ni tegami o kakimashita*. O {ni} do destinatário é o mesmo que o do destino, e quem traduz do português escreve *tegami o tomodachi ni*, que é uma frase que existe, com outro sentido.

O terceiro é quem sofre a ação, e é o mais amplo dos três. *Onna ni nagureareta*, "foi batida por uma mulher", tem o agente na partícula; mas o mesmo trabalho aparece sem passiva nenhuma, em Mateus 26:50, *Yesu ni te o kakete*, "puseram as mãos sobre Jesus": o {ni} aponta para quem recebeu a ação, e a frase continua ativa. Quem traduz de uma língua onde a preposição é obrigatória procura o instrumento e não acha; o que está ali é a pessoa.

O quarto é a finalidade. *kami ni kansha shite*, "depois de agradecer a Deus", ou *mizu o nomu ni nonde iku*, "vou beber água para beber", põem um motivo antes do verbo, e a forma é nome mais {ni} mais verbo.

O quinto é o lugar onde o evento acontece dentro de um grupo: *Kazoku ni otoko no ko ga umareta*, "nasceu um menino naquela família". O nome vem antes, a partícula diz a que grupo o fato se refere, e a tradução costuma resolver isso com um genitivo que o português não tem.

E o {e} tem os seus próprios lugares, que são frase feita e não regra de verbo: *daiichi ni*, "primeiro", *tsugi ni*, "depois", *michi no ue e*, "ao longo do caminho". São locuções, e é por isso que {e} não existe sozinho: sem o substantivo, o {e} desaparece.
`),
  vocab: [
    V(
      'ni',
      'に',
      'destino, pessoa, tempo, finalidade: a partícula que entra depois de quase tudo (ni)',
    ),
    V('e', 'へ', 'direção: entra com verbos de ir e vir, e em locuções feitas (e)'),
    V('iku', '行く', 'ir; o verbo que mais aceita o {e} (iku)'),
    V('kuru', '来る', 'vir (kuru)'),
    V('kaeru', '帰る', 'voltar, voltar para casa (kaeru)'),
    V('tsuku', '着く', 'chegar; o lugar de chegada leva {ni}, nunca {e} (tsuku)'),
    V('sumu', '住む', 'morar; morar é {ni}, e nunca {e} (sumu)'),
    V(
      'ireru',
      '入れる',
      'pôr dentro, fazer entrar; o destino do {ni} é um lugar onde algo entra (ireru)',
    ),
    V('noru', '乗る', 'pegar, subir: em veículo, em trem, em cavalo (noru)'),
    V('oriru', '降りる', 'descer, sair de um veículo (oriru)'),
    V(
      'hanareru',
      '離れる',
      'deixar, afastar-se de; o lugar que se deixa também leva {ni} (hanareru)',
    ),
    V('motsu', '持つ', 'levar consigo; o {ni} é o lugar onde a coisa fica guardada (motsu)'),
    V(
      'okuru',
      '送る',
      'enviar; o destino de quem é enviado é o {ni} que vem antes do nome (okuru)',
    ),
    V(
      'erusaremu',
      'エルサレム',
      'Jerusalém; o nome de destino de Mateo 2:1 e de Marcos 12:2 (erusaremu)',
    ),
    V('jikan', '時間', 'tempo, hora; com {ni}, o tempo vira ponto da frase (jikan)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ni} vai depois do substantivo e marca destino, e destino não exige verbo de movimento: o nome depois dele pode ser um lugar, uma pessoa ou um tempo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} marca direção e vive praticamente só com verbos de ir e vir. Com {noru}, {sumu} e {ireru} o lugar é marcado com {ni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com {iku} as duas são corretas, e a escolha é de registro: {e} é mais cuidado e mais escrito, {ni} é o do texto corrente.',
      ),
    },
    {
      n: '4',
      text: T(
        'O {ni} da pessoa vem antes do objeto direto: *tomodachi ni tegami o kakimashita*. Com verbo transitivo, ele aponta para quem recebe a ação, e o lugar é o de quem foi enviado.',
      ),
    },
    {
      n: '5',
      text: T(
        'Na passiva o agente leva {ni}: *onna ni nagureareta*. O mesmo trabalho aparece sem passiva, em Mateus 26:50, *Yesu ni te o kakete*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o {e} quase não aparece na Bíblia'),
      text: T(
        'A direção é a única coisa que o grego bíblico expressa com preposição dedicada, e o japonês a resolve com {ni} sem dificuldade: destino e direção podem ser a mesma palavra, porque o {ni} não é preposição e não carrega a diferença que o grego carrega. O {e} sobrevive, mas como registro: aparece em texto cuidado, em nome de instituição e nas saudações de carta, onde o destino não é movimento. Marcos 12:2 é um exemplo vivo disso, *shimo-be o nōfu-tachi no tokoro e yobisareta*, "enviou o servo à casa dos lavradores": a partícula é o {e}, e o que vem depois dela é um grupo inteiro de pessoas. Quem espera ver {e} em cada "para" da tradução vai ler a página inteira sem encontrar uma vez sequer.',
      ),
    },
    {
      label: T('O {ni} do tempo não precisa do nome da pessoa'),
      text: T(
        'Em *san-ji ni oki mashita*, "cheguei às três", a pessoa some da frase: o numeral já disse tudo, e o {ni} fica colado no número. Com *yoru ni*, "à noite", quem também some é o substantivo, porque a palavra já é o tempo. É o mesmo movimento das outras partículas: o nome do que está em jogo pode ser omitido, e o que fica é a marca e o verbo. Quem traduz do português escreve "eu cheguei às três horas" e perde a economia sem perceber por quê.',
      ),
    },
  ],
  examples: [
    {
      text: '博士たちがエルサレムにやって来て',
      gloss: T(
        'hiseki-tachi wa erusaremu ni yatte kite — os magos de oriente vieram a Jerusalém (Mateus 2:1): verbo de vir com {ni}, e o texto não usa {e}',
      ),
    },
    {
      text: 'そして、こう言って彼らをベツレヘムに送った。',
      gloss: T(
        'soshite, kō itte kare o Betsurēmu ni okutta — e assim os enviou a Belém (Mateus 2:8): o {ni} é o destino de quem é enviado, não de quem envia',
      ),
    },
    {
      text: 'その翌日、イエスはガリラヤに行こうとされた。',
      gloss: T(
        'sono jitsuyō ni, Yesu wa Gariraya ni iku to shitameta — no dia seguinte Jesus resolved ir para a Galileia (João 1:43): {ni} com o verbo {iku}',
      ),
    },
    {
      text: '今どこにお泊まりですか。',
      gloss: T(
        'ima doko ni tomari masu ka — onde está hospedado agora (João 1:38): o interrogativo é um substantivo, e o {ni} é o de lugar',
      ),
    },
    {
      text: '駅に乗り、町に住み、家に入ります',
      gloss: T(
        'eki ni noru, machi ni sumu, ie ni hairu — pego o trem, moro na cidade, entro em casa: três verbos que não aceitam {e}',
      ),
    },
    {
      text: '友達に手紙を書きました。',
      gloss: T(
        'tomodachi ni tegami o kakimashita — escrevi uma carta ao meu amigo (o {ni} do destinatário vem antes do objeto)',
      ),
    },
    {
      text: '群衆が来て、イエスに手をかけて捕えた。',
      gloss: T(
        'shūshū ga kite, Yesu ni te o kakete tsuketa — a multidão veio e pôs as mãos em Jesus (Mateus 26:50): {ni} aponta para quem recebeu a ação, e a frase continua ativa',
      ),
    },
    {
      text: 'しもべを農夫たちのところへ遣わした',
      gloss: T(
        'shimo-be o nōfu-tachi no tokoro e yobisareta — enviou o servo à casa dos lavradores (Marcos 12:2): o {e} da direção, com o destino sendo um grupo de pessoas',
      ),
    },
  ],
  tables: [
    {
      caption: T('{e} ou {ni}: decide o verbo, não o sentido do lugar'),
      head: [T('O verbo'), T('Como se escreve'), T('A partícula'), T('Por quê')],
      rows: [
        [T('{iku} ir'), T('*kyōkai e iku*'), T('{e}'), T('direção, com verbo de movimento')],
        [T('{kuru} vir'), T('*erusaremu e kite*'), T('{e}'), T('direção, com verbo de movimento')],
        [
          T('{kaeru} voltar'),
          T('*ie e kaeru*'),
          T('{e}'),
          T('o destino de volta é direção como a de ida'),
        ],
        [
          T('{tsuku} chegar'),
          T('*erusaremu ni tsuku*'),
          T('{ni}'),
          T('o lugar de chegada não é direção'),
        ],
        [T('{sumu} morar'), T('*machi ni sunu*'), T('{ni}'), T('morar não é ir a lugar nenhum')],
        [
          T('{noru} pegar'),
          T('*eki ni noru*'),
          T('{ni}'),
          T('a coisa entra em um lugar, e {e} não cabe'),
        ],
        [
          T('{ireru} pôr dentro'),
          T('*ie ni ireru*'),
          T('{ni}'),
          T('é o destino do objeto, não o de quem vai'),
        ],
      ],
    },
    {
      caption: T('Os cinco trabalhos do {ni}, com o mesmo nome atrás'),
      head: [T('O que o {ni} aponta'), T('A frase'), T('O que o português faz com ela')],
      rows: [
        [
          T('destino'),
          T('*kyōkai ni iku*'),
          T('"vai para a escola": a partícula do lugar de quem vai'),
        ],
        [
          T('destinatário'),
          T('*tomodachi ni tegami o kakimashita*'),
          T('"escrevo ao amigo": a mesma partícula, antes do objeto'),
        ],
        [
          T('tempo'),
          T('*yoru ni, san-ji ni*'),
          T('"à noite, às três": o nome do tempo entra na mesma forma'),
        ],
        [
          T('quem recebe a ação'),
          T('*Yesu ni te o kakete*'),
          T('"puseram as mãos em Jesus": o {ni} sem passiva nenhuma'),
        ],
        [
          T('agente da passiva'),
          T('*onna ni nagureareta*'),
          T('"batido por uma mulher": quem faz vem antes'),
        ],
        [
          T('finalidade'),
          T('*kami ni kansha shite*'),
          T('"depois de agradecer": o {ni} liga a ação a um motivo'),
        ],
      ],
    },
    {
      caption: T('O mesmo destino, três traduções possíveis'),
      head: [T('O que se quer dizer'), T('Com {ni}'), T('Com {e}'), T('Onde aparece')],
      rows: [
        [
          T('os magos vieram a Jerusalém'),
          T('*erusaremu ni yatte kite*'),
          T('*erusaremu e yatte kite*'),
          T('Mateus 2:1 escreve {ni}'),
        ],
        [
          T('os enviou a Belém'),
          T('*Betsurēmu ni okutta*'),
          T('*Betsurēmu e okutta*'),
          T('Mateus 2:8: o destino é de quem é enviado'),
        ],
        [
          T('Jesus foi para a Galileia'),
          T('*Gariraya ni itte*'),
          T('*Gariraya e itte*'),
          T('João 1:43 escreve {ni}'),
        ],
        [
          T('enviou o servo aos lavradores'),
          T('*nōfu-tachi no tokoro ni*'),
          T('*nōfu-tachi no tokoro e*'),
          T('Marcos 12:2 escreve {e}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {駅に乗って、町に住んで、家に入ります}, por que as três frases usam {ni} e não {e}?',
    ),
    options: [
      T('porque nenhum dos três verbos é de ir ou vir, e o {e} só aparece com verbos de movimento'),
      T('porque {ni} é a partícula do lugar e {e} é a partícula do tempo'),
      T('porque as três frases são traduções, e o {e} não aparece em texto traduzido'),
      T('porque {e} foi substituído por {ni} na tradução moderna do Evangelho'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete com a partícula do destino, e não a da direção: 家に____入ります (entro em casa)',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase ao trabalho que o {ni} está fazendo'),
      pairs: [
        {
          a: T('{erusaremu ni okutta}'),
          b: T('destino de quem é enviado: a partícula aponta para o objeto'),
        },
        { a: T('{yoru ni}'), b: T('tempo: o nome do tempo entra na mesma forma') },
        { a: T('{onna ni nagureareta}'), b: T('agente da passiva: quem fez a ação') },
        {
          a: T('{tomodachi ni tegami o kakimashita}'),
          b: T('destinatário, que vem antes do objeto direto'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Por que uma tradução japonesa pode escrever {ni} onde um gramático escreveria {e} sem nenhum dos dois estar errado?',
      ),
      options: [
        T(
          'porque {ni} cobre destino e direção ao mesmo tempo, e {e} é a marca mais cuidada do mesmo trabalho',
        ),
        T('porque {e} só existe em texto antigo e o japonês corrente a perdeu'),
        T('porque {ni} é obrigatório com verbo transitivo e {e} com verbo intransitivo'),
        T('porque a partícula de direção muda de sentido conforme o tempo do verbo'),
      ],
      answer: 0,
    },
  ],
};
