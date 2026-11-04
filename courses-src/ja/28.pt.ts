import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Partícula'),
  title: T('{de}, {to}, {mo}, {kara}, {made} e {yori}: onde acontece, com quem, e de onde a onde'),
  subtitle: T(
    'Seis partículas que nunca aparecem sozinhas: todas entram depois de um nome ou no fim de uma oração, e a de {kara} muda de sentido conforme o lugar que ocupa na frase',
  ),
  body: C(`
## {de}: onde acontece, e com que se faz

O {de} vai depois do nome e diz onde. *Kare wa {koya} de baputema o ukutta*, "ele batizou no deserto", é o exemplo mais limpo: o nome depois do {de} é o lugar **onde a ação acontece**, e o nome de antes é o lugar de onde. O mesmo {de} resiste a uma pergunta que o português faz e o japonês não: *tomodachi ni {au}*, "encontro um amigo", leva {ni} e não {de}, porque um encontro não tem lugar fixo. Onde a ação acontece há {de}; para quem, ou com quem, há outra partícula.

O {de} também diz com que. *Kin, gin, {hōseki}, ki, {kusa}, wara nado de tateru nara*, "se alguém construir com ouro, prata, pedra, madeira, erva e palha", em 1 Coríntios 3:12, tem seis materiais e um único {de} no fim: é o que fecha a lista, o mesmo trabalho que a partícula faz com a lista de nomes no verbo de existir. E há um terceiro uso, que é estado: *genki de iru*, "estar com saúde". No texto bíblico, com sentido de causa, o {de} aparece pouco, porque esse trabalho vai para {tame} e para a partícula que fecha a oração.

## {to} e {mo}: com quem, e também

O {to} depois de duas pessoas significa "com", companhia. *Mose to Eriya ga arawarete*, "Moisés e Elias apareceram", em Mateus 17:3, é a frase inteira: dois nomes, uma partícula no meio, e o verbo no fim.

A mesma sílaba faz dois outros trabalhos no japonês, e é a armadilha mais cara do curso. Em *haru ni naru to, hana ga saku*, o {to} é "quando"; em *「watashi wa iku」 to iutta*, é a partícula que abre e fecha a citação. Nos três casos a posição é a mesma, e o que muda é o verbo que vem antes. Com companhia, o {to} vem logo depois do segundo nome; por isso, num trecho com dois nomes seguidos, quem está lendo precisa decidir depressa se o que vem depois é um verbo de dizer, um verbo no tempo genérico ou mais gente.

O {mo} é "**também**", e ele entra depois de nome em nome. 1 Coríntios 12:13 é a frase mais densa do Novo Testamento nesse ponto: *Yudaya mo Girisha mo, doreki mo jiyū mo*, "judeu, grego, escravo, livre". São quatro {mo} e quatro nomes, e o que eles fazem é dizer que ninguém fica fora da lista. O mesmo {mo} com o negativo vira "nem", e em 1 Coríntios 12:21 os olhos dizem *watashi wa anata o hitsuyō to shinai*, "não tenho necessidade de você"; o corpo inteiro acrescenta em seguida que os membros mais fracos são os mais necessários, e é a negação que produz a inversão.

## {kara} e {made}: a linha do tempo

O {kara} diz de onde a linha começa. *Ten no kihaj kara, ima made*, "desde o princípio da criação até agora", em Marcos 13:19, tem as duas partículas coladas num substantivo só: {kara} abre o intervalo, {made} fecha, e nenhuma das duas repete o substantivo. É a construção mais econômica do japonês escrito, e a mais comum em Marcos e em Mateus.

O {made} sozinho é o limite, e ele traduz o "até" do português. *{Mizu} no naka made {fukumaru}*, "afundou até dentro d'água": o {made} diz onde o verbo chegou, e o nome pode ser lugar, tempo ou medida, como em *yon-jikan made*, "até as quatro horas". Não existe palavra separada para "até" em japonês, e a partícula é o que faz esse trabalho em qualquer uma das três coisas.

O par é o que produz a leitura: onde começa {kara} e onde acaba {made}, tudo o que está entre as duas é aquilo que a frase está descrevendo, seja um intervalo de datas, um caminho percorrido por quem {iku}, ou o fim de um tempo de espera. Num Salmo ou num Apocalipse o texto inteiro é muitas vezes um intervalo, e quem reconhece as duas pontas lê o meio sem traduzir palavra por palavra.

## {yori}: a comparação, e as três leituras de {kara}

O {yori} é o "do que" da comparação. *Abelu wa Kain yori subureta ikeze o {sasageru}*, "Abel ofereceu uma oferta melhor do que Caim", em Hebreus 11:4: o nome vem primeiro, {yori} depois, e o que está depois de {yori} é aquilo com que se compara. Com o {sugiru} a comparação fica mais direta ainda, *kain yori mo yowai*, "mais velho do que Caim". É a partícula mais fácil das treze: se há {yori} depois de dois nomes, o primeiro é o termo de comparação e o segundo é a referência contra a qual ele está medido.

A exceção é o {kara}, e ela é o que mais trava leitura bíblica. O {kara} tem **três leituras**, e a posição decide qual é. **Colado a um nome**, é origem: *kami kara yobausareta*, "enviado por Deus", que é como João 1:6 abre o seu relato, e que o português traduz com um "por" que em japonês não existe. Colado a um nome de tempo, é começo de intervalo: *ten no kihaj kara*, "desde a criação". No fim da oração, depois do verbo, é causa: *shikashi ware-tachi wa mada wakaranai kara da*, "porque nós ainda não entendemos". As duas últimas se escrevem exatamente igual, e é a posição que diz se o texto está marcando de onde algo vem ou por que algo acontece.

E há um quarto caso, o mais fácil de todos e o mais útil na leitura: {kara} no sentido de origem material, "do que". *Ariamaru naka kara* é "do que sobrou", e é a palavra que Marcos 12:44 usa duas vezes no mesmo versículo, uma para o que era demais e outra para o que era pouco. Num texto que fala de dinheiro e de offerings, {kara} é a palavra que mais aparece, e nas duas vezes o sentido é o mesmo.
`),
  vocab: [
    V(
      'de',
      'で',
      'lugar onde a ação acontece, meio, matéria e estado: responde "onde" e "com que" (de)',
    ),
    V(
      'to',
      'と',
      'companhia: "com", depois do nome de duas pessoas; a mesma sílaba é "quando" e é a partícula da citação (to)',
    ),
    V('mo', 'も', '"também": entra depois do nome, e com o negativo vira "nem" (mo)'),
    V('kara', 'から', 'origem e começo de intervalo; no fim da oração, "porque" (kara)'),
    V('made', 'まで', 'limite: "até", com substantivo de lugar, de tempo ou de medida (made)'),
    V('yori', 'より', 'comparação: "do que", depois do nome do termo de comparação (yori)'),
    V('koya', '荒野', 'deserto, lugar ermo e vazio (koya)'),
    V('hōseki', '宝石', 'pedra preciosa (hōseki)'),
    V('kusa', '草', 'erva, capim (kusa)'),
    V('Mizu', '水', 'água (mizu)'),
    V('sasageru', 'ささげる', 'oferecer, apresentar ao outro; o verbo de Hebreus 11:4 (sasageru)'),
    V('iku', '行く', 'ir; com {kara} e {made} forma o intervalo (iku)'),
    V('fukumaru', '沈む', 'afundar, submergir; o verbo do exemplo de {made} (fukumaru)'),
    V('au', '会う', 'encontrar-se com; o verbo da pergunta de 1 João 4:17 (au)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{de} diz onde a ação acontece e com que ela é feita. No texto bíblico o sentido de causa é raro: esse trabalho vai para {tame} e para a partícula que fecha a oração.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} entre dois nomes é companhia. A mesma sílaba é "quando" no tempo genérico e é a partícula que abre e fecha a citação, e o que separa os três é o verbo que vem antes.',
      ),
    },
    {
      n: '3',
      text: T(
        '{mo} significa "também" e entra depois de cada nome da lista. Com o negativo, {mo} significa "nem": *mō … nai*.',
      ),
    },
    {
      n: '4',
      text: T(
        '{kara} {made} é um intervalo fechado, e nenhuma das duas partículas repete o substantivo: *ten no kihaj kara, ima made*.',
      ),
    },
    {
      n: '5',
      text: T(
        '{kara} no fim da oração, depois do verbo, é causa: *ware-tachi ga mada wakaranai kara da*. Na mesma posição o texto bíblico escreve o "porque" da frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('A partícula que fecha a lista'),
      text: T(
        'Três construções do curso usam a mesma economia, e vale ver as três juntas: {hon to notebook ga arimasu} põe um {ga} no fim de uma lista de nomes; *kin, gin, hōseki, ki, kusa, wara nado de tateru nara* põe um {de} no fim de uma lista de materiais; e *Yudaya mo Girisha mo, doreki mo jiyū mo* põe um {mo} em cada nome da lista. O japonês não repete a marca em cada elemento quando a lista é longa, e o que marca a lista como lista é a partícula do fim.',
      ),
    },
    {
      label: T('Como o grego deixou marca no {kara}'),
      text: T(
        'A partícula de causa no fim da oração é um hábito grego que o tradutor japonês conservou: em grego, "porque" é uma palavra que abre a oração, e em japonês virou uma partícula que a fecha. O resultado é uma frase em que a causa chega por último, e é a segunda leitura do {kara} que mais confunde quem vem do português. O teste é simples: se a oração já tem verbo e flexão, e depois dela vem o {kara} sozinho, é causa.',
      ),
    },
  ],
  examples: [
    {
      text: 'バプテスマのヨハネが荒野に現われて',
      gloss: T(
        'baputema no Yohane ga koya de arawarete — João batista apareceu no deserto (Marcos 1:4): o {de} é o lugar onde a ação acontece',
      ),
    },
    {
      text: 'もし、だれかがこの土台の上に、金、銀、宝石、木、草、わらなどで建てるなら',
      gloss: T(
        'moshi, dare ka ga kono dote no ue ni, kin, gin, hōseki, ki, kusa, wara nado de tateru nara — se alguém construir sobre este fundamento com ouro, prata, pedra, madeira, erva e palha (1 Coríntios 3:12): seis materiais, um {de}',
      ),
    },
    {
      text: 'しかも、モーセとエリヤが現われてイエスと話し合っているではないか。',
      gloss: T(
        'shikamo, Mōse to Eriya ga arawarete Yesu to hanashatte iru ja nai ka — não são Moisés e Elias aparecendo e falando com Jesus (Mateus 17:3): dois {to} no mesmo trecho, com valores diferentes',
      ),
    },
    {
      text: 'なぜなら、私たちはみな、ユダヤ人もギリシヤ人も、奴隷も自由人も、一つのからだとなるように',
      gloss: T(
        'narawēru to wa, ware-tachi wa mina, Yudaya mo Girisha mo, doreki mo jiyū mo, hitotsu no karada to naru yō ni — pois todos nós, judeu, grego, escravo, livre (1 Coríntios 12:13): quatro {mo}, e nenhum fica fora da lista',
      ),
    },
    {
      text: 'その日は、神が天地を創造された初めから、今に至るまで、いまだかつてなかったような',
      gloss: T(
        'sono hi wa, kami ga ten to chi o zōse sareta kihaj kara, ima made, imada kattette nai yō na — aquele dia, desde a princípio da criação até agora, como nunca houve (Marcos 13:19): {kara} e {made} no mesmo substantivo',
      ),
    },
    {
      text: '信仰によって、アベルはカインよりもすぐれたいけにえを神にささげた',
      gloss: T(
        'shinkō yotte, Abel wa Kain yori subureta ikeze o kami ni sasageta — pela fé, Abel ofereceu a Deus uma oferta melhor que a de Caim (Hebreus 11:4): o {yori} separa o termo de comparação da referência',
      ),
    },
    {
      text: '私たちは愛しています。神がまず私たちを愛してくださったからです。',
      gloss: T(
        'ware-tachi wa aishiteimasu. kami ga mazu ware-tachi o aishite kudasatta kara desu — nós amamos, porque Deus nos amou primeiro (1 João 4:19): o {kara} no fim da oração é causa',
      ),
    },
    {
      text: 'みなは、あり余る中から投げ入れたのに、この女は、乏しい中から、あるだけを全部',
      gloss: T(
        'mina wa, ariamaru naka kara nage ireta no ni, kono onna wa, toshi naka kara, aru dake o zenzen — todos lançaram do que sobrou, mas esta mulher lançou do que faltava, tudo o que tinha (Marcos 12:44): {kara} é origem material',
      ),
    },
  ],
  tables: [
    {
      caption: T('O {de} e o nome que vem depois dele'),
      head: [T('O que o nome é'), T('A frase'), T('O que o português faz com ela')],
      rows: [
        [
          T('lugar onde a ação acontece'),
          T('*koya de baputema o ukutta*'),
          T('"batizou no deserto": a preposição de lugar vai no verbo em português'),
        ],
        [
          T('meio, instrumento ou matéria'),
          T('*kin, gin, hōseki nado de tateru*'),
          T('"construir com ouro e prata": o {de} fecha a lista de materiais'),
        ],
        [
          T('estado'),
          T('*genki de iru*'),
          T('"estar com saúde": o {de} liga o substantivo ao verbo de estar'),
        ],
        [
          T('quem age, sem passiva'),
          T('*kami kara yobausareta*'),
          T('"enviado por Deus": a origem de onde veio a ação'),
        ],
        [
          T('causa'),
          T('*byōin de yasumu*'),
          T('"faltar por causa da doença": uso da fala, raro na tradução bíblica'),
        ],
      ],
    },
    {
      caption: T('A mesma sílaba {to} em três lugares, decidida pelo verbo'),
      head: [T('O {to} é'), T('A frase'), T('O que vem antes dele')],
      rows: [
        [
          T('companhia'),
          T('*Mose to Eriya ga arawarete*'),
          T('dois nomes, um substantivo e outro: o primeiro nome'),
        ],
        [
          T('"quando", no tempo genérico'),
          T('*haru ni naru to, hana ga saku*'),
          T('um verbo qualquer: o tempo genérico fecha nele'),
        ],
        [
          T('citação'),
          T('*「watashi wa iku」 to iutta*'),
          T('o que já foi dito: o nome e o pronome dentro da fala'),
        ],
      ],
    },
    {
      caption: T(
        '{kara}, {made} e {yori}: as três respostas para onde, até onde e em comparação com quem',
      ),
      head: [T('O que se pergunta'), T('A partícula'), T('A frase'), T('Onde aparece')],
      rows: [
        [
          T('de onde'),
          T('{kara}'),
          T('*ten no kihaj kara*'),
          T('Marcos 13:19: começo de intervalo'),
        ],
        [T('até onde'), T('{made}'), T('*ima made*'), T('Marcos 13:19: fim do mesmo intervalo')],
        [
          T('de onde, causa'),
          T('{kara}'),
          T('*mada wakaranai kara da*'),
          T('no fim da oração, depois do verbo'),
        ],
        [
          T('de onde, matéria'),
          T('{kara}'),
          T('*ariamaru naka kara*'),
          T('Marcos 12:44: "do que sobrou"'),
        ],
        [
          T('em comparação com o quê'),
          T('{yori}'),
          T('*Kain yori subureta*'),
          T('Hebreus 11:4: "melhor do que Caim"'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {私たちは愛しています。神がまず私たちを愛してくださったからです。}, o que o {kara} está fazendo?',
    ),
    options: [
      T('marcando causa: ele está no fim da oração, depois do verbo, e vale "porque"'),
      T('marcando origem: a linha do que amou começa na pessoa que amou primeiro'),
      T('marcando comparação: "amamos mais do que Deus amou"'),
      T('marcando limite: a frase termina onde o amor de Deus termina'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete o intervalo de Marcos 13:19: 神が天地を創造された初め____、今____ (desde a criação até agora)',
      ),
      answer: 'から、まで',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela marca'),
      pairs: [
        { a: T('{de}'), b: T('o lugar onde a ação acontece, e o meio com que ela é feita') },
        { a: T('{mo}'), b: T('"também", e "nem" quando o verbo está no negativo') },
        { a: T('{kara}'), b: T('origem, começo de intervalo e, no fim da oração, causa') },
        { a: T('{yori}'), b: T('comparação: o nome depois dele é a referência da medida') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Você lê *"Mose to Eriya ga arawarete"* e depois *"haru ni naru to, hana ga saku"*. O que faz o primeiro {to} ser companhia e o segundo ser "quando"?',
      ),
      options: [
        T('o que vem antes: no primeiro há dois nomes e no segundo há um verbo no tempo genérico'),
        T('a posição na frase: o primeiro está no meio e o segundo está no fim'),
        T(
          'o substantivo que vem depois: no primeiro é um nome de pessoa e no segundo é um substantivo comum',
        ),
        T('a tradução: a cópia japonesa marca um deles com kana e o outro com ideograma'),
      ],
      answer: 0,
    },
  ],
};
