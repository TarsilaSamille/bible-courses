import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Advérbio'),
  title: T('{mada} e {mou}: "ainda" e "já", e o que muda quando a frase vira negativa'),
  subtitle: T(
    'Os dois advérbios que mais travam quem lê são os que o português resolve com uma palavra só; no japonês são dois, e é a negação que diz qual dos dois está na frase',
  ),
  body: C(`
## O advérbio vai depois do verbo, e não flexiona

Um advérbio japonês não flexiona, não tem forma negativa própria e não pede nada depois dele. *Hayaku sugimasu*, "é rápido demais"; *mizu ga takusan atsui*, "a água está muito quente". Em nenhum dos dois há marca nenhuma depois do advérbio, e é **essa falta de marca** que deixa o japonês empilhar dois ou três advérbios sem ambiguidade.

A posição é o que ele cobra. O advérbio vem **depois** da forma verbal e nunca antes, o que é o inverso do mandarim, onde a frequência abre o verbo. Em *ashita wa mainichi izakaya e ikimasu*, "amanhã vou ao bar todo dia", o advérbio de frequência está entre a forma verbal e a partícula final. Quem vem do português escreve "amanhã eu vou todo dia ao bar", que é uma frase que qualquer japonês entende e ninguém escreve como se escreve no japonês.

## {mada} e {mou}: os dois que o português não distingue

{mada} é "ainda" e {mou} é "**já**". Os dois vêm depois do verbo, os dois são uma sílaba, e nenhum dos dois flexiona. Em *ima made mada mikanai*, "ainda não vi até agora", o {mada} diz que o estado continua; em *ima {mou} kita*, "já vim agora", o {mou} diz que o estado chegou.

O {mou} tem ainda um terceiro trabalho, e é o que mais engana: dentro de *mou ichido*, "outra vez", a segunda metade da expressão significa "uma vez" e não "já". Em João 3:4, *mou ichido, haru no uta ni hairu koto ga dekimasu ka*, "dá para nascer outra vez?", a mesma sílaba aparece com o sentido de repetição. Quem traduz "outra vez" por "já" produz uma frase que não significa nada.

E há um quarto: o {mou} na escrita vira outra palavra. Em Hebreus 11:5, *Sara mo, {sudeni} sono nen o sugita mi no han'i de aru noni*, "Sara também, já tendo passado essa idade", o advérbio está escrito {sudeni}, e o leitor que só conhece {mou} não o reconhece. Com *totemo* acontece o mesmo, e a forma escrita é *makoto*, que Mateus 24:33 usa em "certamente, eu vos digo". O japonês escrito tem uma forma longa para os dois advérbios mais comuns do idioma, e ela não se parece com a forma que aparece na fala.

## Quando a frase vira negativa

Aqui está o ponto que mais confunde, e ele cabe em duas linhas. Em frase positiva, {mada} é "ainda" e {mou} é "já". Em frase negativa, os dois dizem a mesma coisa invertida: {mada} mais negativo é "ainda não", {mou} mais negativo é "já não".

*Ware-tachi wa mada shinjiteimasen*, "não conseguimos ainda acreditar", é {mada} com um verbo negativo ({shinjiru}, acreditar, na forma que nega), e a tradução mais fiel não é "ainda não acreditamos": o {mada} cobre o verbo inteiro, e é por isso que o negativo vem antes dele em vez de colado na ponta. A mesma frase com {mou}, *mou shinjiteimasen*, quer dizer outra coisa: "já não acreditamos", e o estado mudou, alguém que acreditava parou de acreditar. As duas frases usam a mesma construção negativa e dizem o contrário uma da outra.

O outro caso é o mais comum e o mais fácil de errar. *Sensei ni wa mada hanashiteimasen*, "ainda não falei com o professor", põe o {mada} antes de um verbo na forma {teimasen}: o advérbio vem antes de toda a negação. *Mada mitemasen*, "ainda não vi", põe o {mada} antes de um {nai}: o advérbio vem antes de um adjetivo negativo. São duas construções distintas, e o português tem uma palavra para cada uma; **o japonês decide pela posição**, e quem traduz do português entrega ao leitor uma das duas sem perceber que existe a outra.

E há um terceiro advérbio, que só aparece com negativo e é o mais enfático dos três. *Sensei wa mada madara kaettekoi*, "o professor com certeza não volta": o {mada} aqui já não marca tempo, marca certeza, e a negação que vem com ele é *mai*, que não existe como palavra; o verbo {kaeru} volta ali em forma negativa. Quem traduz "ainda não volta" por essa frase acrescenta uma certeza que o japonês está afirmando e a tradução brasileira não.

## Os advérbios de quantidade, e a forma que a escrita prefere

{totemo} é "muito", {sukoshi} é "um pouco", {takusan} é "muito, muitos", {sugu} é "logo", {yoku} é "bem, com frequência". Nenhum flexiona, e todos se comportam como advérbio: depois da forma verbal. O que cada um faz é modificar, e o {takusan} é o único que também pode ficar diante de um substantivo, como em *takusan no hito*, "muitas pessoas", por causa de {subete}, "tudo", que é a palavra de quantidade por trás dele.

O {sugu} e o {yoku} mostram a outra cara: os dois só admitem verbo, e é o verbo que diz se o advérbio é tempo ou hábito. *Sugu kuru*, "vir logo", e *yoku yobu*, "chamar com frequência", têm a mesma forma e nenhum nada em comum, e quem traduz sem ver o verbo entrega ao leitor um "logo" no lugar de um "com frequência".

O texto bíblico usa {takusan} do lado do verbo, e é aí que ele compara: em Marcos 12:43, *kono katsu {yobime} wa, sono dare yori mo {takusan} ireta*, "esta pobre viúva depositou mais do que qualquer um dos outros", o advérbio está colado ao verbo e é ele que faz a comparação com o {yori} que vem logo antes. Um advérbio de quantidade que modifica verbo mede; o mesmo advérbio diante de um substantivo conta. São dois trabalhos, e o que os separa é a posição.
`),
  vocab: [
    V('mada', 'まだ', '"ainda": o estado continua; com o negativo, "ainda não" (mada)'),
    V(
      'mou',
      'もう',
      '"já": o estado chegou; com o negativo, "já não", e em *mou ichido*, "outra vez" (mou)',
    ),
    V('sudeni', 'すでに', 'já; a forma escrita de {mou} (sudeni)'),
    V('totemo', 'とても', 'muito; advérbio neutro, depois da forma verbal (totemo)'),
    V('takusan', 'たくさん', 'muito, muitos; quantifica nome e verbo (takusan)'),
    V('sukoshi', '少し', 'um pouco; com o negativo, "não chega a ser" (sukoshi)'),
    V('sugu', 'すぐ', 'logo, imediatamente (sugu)'),
    V('yoku', 'よく', 'bem, com frequência; e "querer demais" quando vira verbo (yoku)'),
    V('subete', 'すべて', 'tudo, todo; a palavra de quantidade por trás de {takusan} (subete)'),
    V('kaeru', '帰る', 'voltar, voltar para casa; o verbo de Mateus 24:48 (kaeru)'),
    V(
      'shinjiru',
      '信じる',
      'acreditar, crer; o verbo dos dois exemplos de {mada} e {mou} (shinjiru)',
    ),
    V('yobime', 'やもめ', 'viúva; o sujeito de Marcos 12:43 (yobime)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um advérbio japonês não flexiona, não tem negativo próprio e vai depois da forma verbal, nunca antes.',
      ),
    },
    {
      n: '2',
      text: T(
        '{mada} é "ainda" e {mou} é "já"; a mesma sílaba de {mou} dentro de *mou ichido* significa "outra vez", e na escrita {mou} vira {sudeni}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com a frase negativa os dois invertem: {mada} mais negativo é "ainda não", {mou} mais negativo é "já não", e a construção é a mesma nos dois casos.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mada} antes de verbo negativo põe o advérbio antes de toda a negação (*mada shinjiteimasen*); {mada} antes de {nai} põe-no antes de um adjetivo negativo (*mada mitemasen*). São duas frases diferentes.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com *mada madara* mais a negação *mai*, o {mada} deixa de marcar tempo e passa a marcar certeza: o texto japonês está afirmando mais do que a tradução costuma dizer.',
      ),
    },
  ],
  notes: [
    {
      label: T('O mesmo advérbio em duas sílabas'),
      text: T(
        'A escrita japonesa escolhe, para quase todo advérbio, uma forma que não é a da fala: {mou} vira {sudeni}, *totemo* vira *makoto*, e as duas formas convivem na mesma página de Mateus. A razão é histórica, e não de estilo: a forma escrita vem do chinês, onde "já" e "certamente" eram palavras de sílaba dupla, e o japonês as guardou ao lado da forma curta que usa na fala. O efeito para quem lê é que a mesma ideia aparece duas vezes no mesmo capítulo, escrita de dois jeitos, e quem conhece só a forma falada não reconhece a escrita.',
      ),
    },
    {
      label: T('Por que "não conseguimos ainda" e "ainda não" não são a mesma frase'),
      text: T(
        'O português resolve a diferença com uma palavra a mais: "ainda não acreditamos" diz que o ato não aconteceu; "não conseguimos ainda acreditar" diz que o ato está bloqueado. O japonês resolve a mesma diferença com posição, e é a posição do {mada} que decide: antes do verbo negativo, ele cobre a negação inteira; antes de {nai}, ele é só um advérbio. Num texto bíblico os dois aparecem, e o que os separa é a forma que o verbo assume.',
      ),
    },
  ],
  examples: [
    {
      text: 'わたしはまだ父のもとに上っていないからです。',
      gloss: T(
        'wareta wa mada chichi no moto ni agarite orai kara desu — é porque eu ainda não subi ao Pai (João 20:17): {mada} mais forma negativa no fim da frase',
      ),
    },
    {
      text: 'それでも、彼らは、うれしさのあまりまだ信じられず、不思議がっているので',
      gloss: T(
        'soredemo, kare wa, ureshisa no amari mada shinji rarezu, fushigi ni omotte iru no de — e ainda não conseguiam acreditar, e estavam maravilhados (Lucas 24:25): {mada} antes do verbo negativo',
      ),
    },
    {
      text: '私が渇くことがなく、もうここまでくみに来なくてもよいように',
      gloss: T(
        'watashi ga kawaku koto ga naku, mou koko made kumi ni kitakute mo ii yō ni — para que eu não tenha mais de vir aqui buscar (João 4:4): {mou} mais negativo, "já não precisa"',
      ),
    },
    {
      text: 'ところが、それが悪いしもべで、『主人はまだまだ帰るまい。』と心の中で思い、',
      gloss: T(
        'tokoro ga, sore ga warui shimo-be de, 「shujin wa mada madara kaette koi」 to kokoro no naka de omoi — «o senhor não volta mesmo», e pensou assim no seu coração (Mateus 24:48): o par {mada} {madara} com a negação *mai*',
      ),
    },
    {
      text: 'サラも、すでにその年を過ぎた身であるのに',
      gloss: T(
        "Sara mo, sudeni sono nen o sugita mi no han'i de aru noni — Sara também, já tendo passado essa idade (Hebreus 11:5): {mou} na forma escrita {sudeni}",
      ),
    },
    {
      text: 'この貧しいやもめは、献金箱に投げ入れていたどの人よりもたくさん投げ入れました。',
      gloss: T(
        'kono katsu yobime wa, kensōbako ni nage irete ita dare yori mo takusan ireta — esta pobre viúva depositou mais do que qualquer um (Marcos 12:43): {takusan} depois do verbo',
      ),
    },
    {
      text: 'とても遠い',
      gloss: T(
        'totemo tōi — muito longe (advérbio neutro, sem forma negativa própria, e o {tōi} vem depois dele)',
      ),
    },
    {
      text: 'すでにその年を過ぎた',
      gloss: T(
        'sudeni sono nen o sugita — já tendo passado aquela idade: o advérbio vai depois do substantivo e antes do verbo',
      ),
    },
  ],
  tables: [
    {
      caption: T('A mesma construção, dois advérbios, dois sentidos opostos'),
      head: [
        T('A frase'),
        T('O advérbio'),
        T('A tradução mais fiel'),
        T('O que está sendo afirmado'),
      ],
      rows: [
        [
          T('*mada shinjiteimasen*'),
          T('{mada}'),
          T('não conseguimos ainda acreditar'),
          T('o estado continua; a negação é a do verbo'),
        ],
        [
          T('*mou shinjiteimasen*'),
          T('{mou}'),
          T('já não acreditamos'),
          T('o estado mudou: quem acreditava parou'),
        ],
        [
          T('*mada mitemasen*'),
          T('{mada} mais {nai}'),
          T('ainda não vi'),
          T('o ato não aconteceu; o negativo é o do verbo'),
        ],
        [
          T('*mou mitemasen*'),
          T('{mou} mais {nai}'),
          T('já não vi'),
          T('o ato aconteceu antes e agora não acontece'),
        ],
        [
          T('*mada madara kaettekoi*'),
          T('{mada} mais {madara}'),
          T('com certeza não volta'),
          T('o advérbio virou certeza, e o negativo é *mai*'),
        ],
      ],
    },
    {
      caption: T('Os advérbios de quantidade e o que cada um modifica'),
      head: [T('Advérbio'), T('Significa'), T('O que modifica'), T('Exemplo')],
      rows: [
        [
          T('{totemo}'),
          T('muito'),
          T('adjetivo ou verbo'),
          T('*totemo utsukushii* — muito bonito'),
        ],
        [
          T('{sukoshi}'),
          T('um pouco'),
          T('verbo, e no negativo "não chega a"'),
          T('*sukoshi shimatta* — acabou, pouco a pouco'),
        ],
        [
          T('{takusan}'),
          T('muito, muitos'),
          T('substantivo e verbo'),
          T('*takusan no hito* — muitas pessoas'),
        ],
        [T('{sugu}'), T('logo'), T('verbo de movimento'), T('*sugu kuru* — vir logo')],
        [
          T('{yoku}'),
          T('bem, com frequência'),
          T('verbo'),
          T('*yoku yobu* — chamar com frequência'),
        ],
      ],
    },
    {
      caption: T('A mesma palavra em duas sílabas: a forma da fala e a da escrita'),
      head: [T('Forma falada'), T('Forma escrita'), T('Significa'), T('Onde aparece escrita')],
      rows: [
        [
          T('{mou}'),
          T('{sudeni}'),
          T('já'),
          T('Hebreus 11:5: *Sara mo, sudeni sono nen o sugita*'),
        ],
        [
          T('*totemo*'),
          T('*makoto*'),
          T('certamente'),
          T('Mateus 24:33: *makoto ni, ware-tachi ni koshō shimasu*'),
        ],
        [
          T('{mou} com *ichido*'),
          T('*mou ichido*'),
          T('outra vez, e não "já"'),
          T('João 3:4, na pergunta de Nicodemos'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {サラも、すでにその年を過ぎた身であるのに}, o que está no lugar de {mou}?'),
    options: [
      T(
        '{sudeni}: é a forma escrita de "já", e o contexto pede "já" porque Sara já tinha passado essa idade',
      ),
      T('{mada}: está dizendo que Sara ainda não passou dessa idade'),
      T('{mata}: está dizendo que Sara teve essa idade outra vez'),
      T(
        'nada: a frase é inválida, porque o japonês escrito não usa advérbio depois do substantivo',
      ),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete com o advérbio de "ainda": わたしはまだ父のもとに____ (eu ainda não subi)',
      ),
      answer: '上っていない',
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao que ele faz na frase'),
      pairs: [
        { a: T('{mada}'), b: T('com o negativo, "ainda não": o estado ainda não chegou') },
        { a: T('{mou}'), b: T('com o negativo, "já não": o estado mudou e o antigo acabou') },
        { a: T('{takusan}'), b: T('quantifica: entra depois do verbo ou diante do substantivo') },
        { a: T('{mada} mais {madara}'), b: T('marca certeza, e vem sempre com a negação *mai*') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Você lê {まだ信じられず} e depois {もう信じているのではありません}. O que muda entre as duas frases?',
      ),
      options: [
        T(
          'a primeira diz que a crença ainda não chegou; a segunda diz que ela já chegou, e o que se nega é a certeza',
        ),
        T('a primeira é negativa por advérbio e a segunda é negativa por substantivo'),
        T('a primeira põe o advérbio antes do verbo e a segunda o põe depois'),
        T('não há diferença: as duas significam "não acredito"'),
      ],
      answer: 0,
    },
  ],
};
