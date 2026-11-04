import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Verbo'),
  title: T('Três "se", e nenhum deles flexiona o verbo'),
  subtitle: T(
    'A construção com {ba}, {to} e {nara} faz o que o português faz conjugando — e é por isso que o iniciante flexiona o verbo errado',
  ),
  body: C(`
## Três construções, três valores

O condicional já apareceu como partícula, e isso era verdade e era incompleto: o que existe não é um "se" japonês, são **três construções** com três valores diferentes, e escolher a errada muda o que a frase está afirmando.

A construção mais comum e a mais neutra é {ba}: ela diz "se" e nada além disso, sem carga de hipótese nem de causa. Ao lado dela, {to} no tempo genérico diz "quando" e "à medida que", sempre com um sabor de causa embutida. E {nara} é a mais causal das três, "se for o caso de, e por causa disso", e é a que mais aparece na fala, ainda sendo rara na escrita bíblica.

O que as três têm em comum importa mais do que o que as separa.

## A construção com {ba}: a mais comum, e a flexão que não existe

A construção completa é o verbo do "se", mais {ba}, mais o resultado: *ame ga fureba, iku*, "se chover, eu vou".

O detalhe que quebra o iniciante é justamente o verbo do "se". Ele **não recebe forma condicional própria**. O que ele faz é entrar na forma que liga, e é nessa forma que o {ba} se cola: o verbo da chuva sai de *furu* e vira *furi*, e *furi* mais {ba} dá *fureba*. Não existe em japonês nenhuma forma do verbo que signifique "no caso de", e não há um "tiver" japonês. Quem procura essa forma procura algo que a língua não construiu.

Quem flexiona está aplicando uma regra que trouxe de outra língua. O português diz "se eu tiver tempo", e "tiver" é uma forma separada, aprendida na lista de conjugação do "ter". O japonês resolve o mesmo problema sem tocar no verbo: uma partícula antes dele.

O versículo que prova isso melhor está em João 12:24: 「um grão de trigo, posto no chão e se não morre, continua sendo um só grão; mas se morre, dá muito fruto.」 O mesmo verbo aparece duas vezes, uma vez negado e outra não, e o que muda é apenas a partícula. O verbo não mudou de forma em nenhum dos dois casos, não porque flexione para o condicional, mas porque nunca flexiona para nada disso.

## {to}, {nara} e o "se" que é data

A construção com {to} no tempo genérico é esta: *haru ni naru to, hana ga saku*, "quando a primavera chega, as flores abrem". O {to} ocupa o lugar de um "se", e o verbo fica na forma base. O que o diferencia de {ba} é o que ele carrega junto: tempo e causa ao mesmo tempo, sem pedir ao leitor que imagine uma hipótese.

{nara} é a mais causal: *jikan ga aru nara, iku*, "se houver tempo, eu vou". O {nara} pressupõe um estado do mundo e deriva dele uma conclusão, e é por isso que é a construção preferida de quem fala.

E há um quarto caminho, o {toki}. Em *ie ni tsuite toki, taberu*, "quando chego em casa, como", o {toki} também se lê como um "se", mas é uma condição **temporal**, não hipotética. O que separa uma família da outra é o verbo: antes do {toki}, o verbo vem na forma que não flexiona, e é isso que diz que aquilo é data e não hipótese.

## A dúvida e o "não"

A partícula de dúvida {kashira} diz "se é que". A construção é {toki} mais {wa}, mais o verbo, mais {kashira}: *shinjitai nara toki wa, shokai ga aru kashira*, "se é que o mercado vai estar aberto". Com {nara} a mesma ideia sai mais direta, sem a camada de dúvida.

E o "não" do condicional é o ponto em que a construção mais muda. Ele não é o {nai} de sempre. Aquele nega um estado: *gakusei* mais *aru* é "ser estudante", e o negativo é *arunai*, "não ser estudante". No condicional não se nega um estado, nega-se a própria cláusula do "se", e para isso a construção se reescreve por inteiro.

São duas portas. A primeira é o próprio negativo mais {ba}: *toki ga nakereba iku*, "se não houver tempo, eu vou". A segunda nomeia a cláusula com {toki} mais {wa} e põe o negativo antes dela: *toki ga nai nara ikenai*, "se não houver tempo, eu não vou". As duas aceitam a mesma cláusula inteira com o verbo na forma que liga, e é por isso que o {toki} aparece: ele dá um nome à cláusula, e é no nome que o negativo se apoia.

O efeito colateral é o mais bonito daqui. Em *jikan ga aru nara ikimasu*, a flexão *ikimasu* está no verbo do **resultado**, e o {nara} é uma partícula de futuração. O japonês diz "eu vou, no caso de haver tempo" como quem coloca a hipótese no "se" e a flexão no resto. A flexão que o português põe dentro do verbo transferiu-se para fora dele, e é isso que a lição do tempo já apontava: o tempo é feito de partículas, e o condicional é só mais uma.
`),
  vocab: [
    V('ba', 'ば', 'o "se" mais comum e mais neutro: hipótese sem carga de causa (ba)'),
    V('nara', 'なら', 'o "se" mais causal: "se for o caso de, e por isso" (nara)'),
    V('to', 'と', 'tempo genérico: "quando", "à medida que", com causa embutida (to)'),
    V('toki', '時', 'tempo; com verbo na forma que não flexiona, é clause temporal (toki)'),
    V(
      'toki wa',
      '時',
      'abre a clause do "se", dando nome a ela para que o negativo se ligue (toki wa)',
    ),
    V('wa', 'は', 'tópico; aqui marca a clause do "se" antes do verbo (wa)'),
    V('kashira', 'かしら', 'partícula de dúvida: "se é que", "por acaso" (kashira)'),
    V('nakereba', 'なければ', '"se não": o negativo na forma que liga, mais {ba} (nakereba)'),
    V('nai', 'ない', 'negativo na forma base; no condicional, nega a clause e não um estado (nai)'),
    V('ga', 'が', 'partícula de sujeito, e aqui o ponto de apoio do negativo (ga)'),
    V('aru', 'ある', 'ser, estar: o verbo cujo negativo da lição 7 é *arunai* (aru)'),
    V('tsunagaru', 'つながる', 'estar ligado, permanecer ligado (tsunagaru)'),
    V('shinuru', '死ぬ', 'morrer: o verbo que João 12:24 repete nas duas condições (shinuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Não há forma condicional do verbo: o "se" é uma partícula que vem antes dele, e o verbo do "se" não flexiona para nada.',
      ),
    },
    {
      n: '2',
      text: T(
        'São três construções com três valores: {ba} é a mais neutra, {to} no tempo genérico é tempo e causa ao mesmo tempo, {nara} é a mais causal e a mais falada.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com {ba}, o verbo do "se" entra na forma que liga e a partícula se cola a ela: *furi* mais {ba} dá *fureba*.',
      ),
    },
    {
      n: '4',
      text: T(
        'O "não" do condicional não é o {nai} que nega estado da lição 7: ele nega a clause inteira, e a construção se reescreve — negativo mais {ba}, ou {toki} mais {wa} mais o negativo.',
      ),
    },
    {
      n: '5',
      text: T(
        'O que separa a condição temporal do "se" hipotético é o verbo: antes de {toki} ele vem na forma que não flexiona, como na lição 16.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o iniciante flexiona'),
      text: T(
        'O português diz "se eu **tiver** tempo", e "tiver" é uma forma separada, aprendida na lista de conjugação do verbo "ter". O japonês não tem essa forma nem nenhuma outra com esse valor. O sinal de que a regra não se aplica é que o verbo da cláusula seguinte está livre: ele pode ficar na forma base ou subir para a polida, e o "se" continua igual.',
      ),
    },
    {
      label: T('A cláusula ganha nome antes de ser negada'),
      text: T(
        'No condicional negativo o {toki} não está marcando tempo: ele é o que dá um nome à cláusula do "se", e é nesse nome que o negativo se apoia. É a mesma economia da lição 16, com uma partícula fazendo o trabalho de um sintagma inteiro. Por isso "não haver tempo" sai de duas maneiras — *toki ga nakereba* ou *toki ga nai nara* — e as duas colocam o mesmo nome no mesmo lugar.',
      ),
    },
  ],
  examples: [
    {
      text: '一粒の麦は、地に落ちて死ななければ、一粒のままである。だが、死ねば、多くの実を結ぶ。',
      gloss: T(
        'hitotsubu no mugi wa, chi ni ochite shinakereba, hitotsubu no mama de aru. daga, shinereba, ōku no minori o musubu — a semente, se não morrer, continua uma só; mas, se morrer, dá muito fruto (João 12:24)',
      ),
    },
    {
      text: 'ぶどうの枝が、木につながっていなければ、自分では実を結ぶことができない',
      gloss: T(
        'budō no eda ga, ki ni tsunagatte inakereba, jibun de wa minori o musubu koto ga dekinai — se o ramo não estiver ligado à vide, não pode dar fruto por si mesmo (João 15:4)',
      ),
    },
    {
      text: '自分に罪がないと言うなら、自らを欺いており、真理はわたしたちの内にありません。',
      gloss: T(
        'jibun ni tsumi ga nai to iu nara, jibun o azayuite ori, shinri wa watashitachi no uchi ni arimasen — se dizermos que não temos pecado, enganamos a nós mesmos (1 João 1:8)',
      ),
    },
    {
      text: '天から与えられなければ、人は何も受けることができない。',
      gloss: T(
        'ten kara aware rareba, hito wa nanimo ukeru koto ga dekinai — se não é dado do céu, o homem não recebe nada (João 3:27)',
      ),
    },
    {
      text: '春になると、花が咲く',
      gloss: T('haru ni naru to, hana ga saku — quando a primavera chega, as flores abrem'),
    },
  ],
  tables: [
    {
      caption: T('As três construções do "se", lado a lado'),
      head: [
        T('Construção'),
        T('O que o verbo do "se" faz'),
        T('O valor que ela carrega'),
        T('Exemplo'),
      ],
      rows: [
        [
          T('{ba}'),
          T('entra na forma que liga, e {ba} se cola a ela'),
          T('hipótese neutra, sem causa: a mais comum'),
          T('{雨が降れば} — "se chover"'),
        ],
        [
          T('{to}'),
          T('fica na forma base'),
          T('tempo genérico: "quando", com causa embutida'),
          T('{春になると} — "quando a primavera chega"'),
        ],
        [
          T('{nara}'),
          T('fica na forma base'),
          T('a mais causal: "se for o caso, e por isso"'),
          T('{時間があるなら} — "se houver tempo"'),
        ],
      ],
    },
    {
      caption: T('Negar o condicional: o "não" reescreve a construção'),
      head: [T('O que você quer dizer'), T('O que se escreve'), T('Onde o "não" está')],
      rows: [
        [
          T('se não houver tempo'),
          T('{toki} {ga} {nakereba}'),
          T('no negativo da forma que liga, mais {ba}'),
        ],
        [
          T('se não houver tempo, não vou'),
          T('{toki} {ga} {nai} {nara}'),
          T('no negativo da forma base, e {nara} abre a condição'),
        ],
        [
          T('se é que o mercado estiver aberto'),
          T('{toki} {wa}, verbo, {kashira}'),
          T('a dúvida vem depois, e não nega nada'),
        ],
      ],
    },
    {
      caption: T('Condição temporal ou hipótese? Decide o verbo que vem antes do {toki}'),
      head: [T('O que vem antes do {toki}'), T('Como se lê'), T('Exemplo')],
      rows: [
        [
          T('verbo na forma que não flexiona'),
          T('clause temporal: "quando"'),
          T('{家に着いた時} — quando cheguei em casa'),
        ],
        [
          T('verbo flexionado'),
          T('descritivo: "no momento em que estava"'),
          T('{着いていた時} — no momento em que eu chegava'),
        ],
        [
          T('partícula de posse no lugar do verbo'),
          T('substantivo: só "tempo"'),
          T('{時の流れ} — o curso do tempo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {天から与えられなければ} (João 3:27), o que marca o condicional?'),
    options: [
      T('uma partícula colada à forma que liga do verbo'),
      T('uma forma condicional do verbo, como o "tiver" do português'),
      T('o verbo flexionado para o passado'),
      T('a partícula interrogativa que fecha a frase, do tipo *ka*'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o "se" da construção neutra: 雨が降____、行く'),
      answer: 'れば',
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao valor que ela carrega'),
      pairs: [
        { a: T('{ba}'), b: T('hipótese neutra: a mais comum das três') },
        { a: T('{to}'), b: T('tempo genérico: "quando", com causa embutida') },
        { a: T('{nara}'), b: T('a mais causal, e a mais comum na fala') },
        { a: T('{kashira}'), b: T('a dúvida: "se é que"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'O português diz "se eu tiver tempo". Por que o iniciante flexiona o verbo em japonês?',
      ),
      options: [
        T(
          'porque procura uma forma condicional do verbo que o japonês não tem: aqui o "se" é uma partícula',
        ),
        T(
          'porque no japonês o verbo do "se" flexiona para uma forma própria, diferente do resultado',
        ),
        T('porque a partícula {ba} vem depois do verbo e obriga a flexioná-lo'),
        T('porque o verbo do "se" é sempre igual ao verbo do resultado'),
      ],
      answer: 0,
    },
  ],
};
