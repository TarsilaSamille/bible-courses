import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('As conjunções'),
  subtitle: T('ma, perché, benché, nonostante, così…che'),
  section: T('Numerais, conjunções e gerúndio'),
  body: C(`## Coordenação: {e}, {ma}, {eppure}

As coordenadas juntam duas orações do mesmo peso e não mudam o modo do verbo. {E} soma: «sono {andato} a Roma {e} ho visto {Marco}». {Ma}, {però} e {eppure} opõem: {sono andato a Roma, ma non ho visto Marco}; {però} é a versão falada de {ma}, e {eppure} é {ma} com um fio de surpresa a mais. {Ossia} substitui por uma explicação: «{Marco}, ossia {il} mio {fratello}». E {né…né} exclui: «{né} questo {né} quello».

O verbo fica no indicativo em todas elas. Quem escreve {sono andato, ma non abbia visto} errou duas vezes.

## Causa, finalidade e consequência

A causa e a finalidade usam a mesma palavra em italiano: **{perché}**. O que as separa é o modo do verbo. Com o indicativo, {perché} é causa: «non uscì, {perché} pioveva». Com o congiuntivo, é finalidade: «esci presto, {perché} non ti bagni». Causa tem ainda {poiché}, {dato che}, {siccome}, {giacché}; finalidade tem ainda {affinché}.

A consequência é simétrica e não aceita atalho: precisa dos dois lados. **{così}… {che}**, {tanto}… {che}, {così tanto}… {che}: «{così} forte {che} {non} si muove», «{tanto} amò {che} {diede} la {vita}». Um lado só não é consequência: é uma frase sem subordinada.

## Concessão e condição, e {nonostante} virando substantivo

A concessão admite três construções e uma delas é o oposto do português. **{Biché}** e {sebbene} pedem verbo no congiuntivo e vêm **depois** do que limitam: «{benché} {piova}, {usciamo}», «{sebbene} {fosse} {tardi}, {venne}». **{Nonostante}**, ao contrário, precede o **substantivo**, com artigo: «{nonostante la pioggia}», «{nonostante il pericolo}». Onde o português diz «apesar da chuva», o italiano diz literalmente «não-obstante a chuva». Quem escreve «nonostante piove» errou: {nonostante} nunca governa verbo.

A condição segue o português: **{se}**, {qualora}, {purché}, {se anche}, {qualora se}, {nel caso in cui} — todos com verbo no congiuntivo, menos quando a condição é real, em que o italiano aceita o indicativo.

## Na Bíblia

Gv 3:16 contém quatro relações numa frase: «Dio ha {tanto} amato il mondo {che} ha dato il suo Figlio unigenito, {perché} chiunque crede in lui non perisca, {ma} abbia la vita eterna». {Tanto…che} é a consecutiva; {perché} com {abbia} no congiuntivo é a finalidade; {ma} coordena; e {chiunque} é o indefinido que faz de sujeito.

Repare no que a tradução para português costuma fazer: {ma} vira «mas», e a frase continua com uma exigência. Em italiano a força é a mesma, e {ma abbia} é uma subordinativa no congiuntivo.

## O que vem depois

Classifique cada palavra pelo que vem depois dela: se vem substantivo com artigo, é {nonostante}; se vem verbo no congiuntivo, é subordinação; se vem verbo no indicativo e sentido de soma ou oposição, é coordenação. O que vem depois é o que diz o que a palavra é.`),
  vocab: [
    V('e', 'e', 'e'),
    V('ma', 'ma', 'mas'),
    V('però', 'però', 'porém'),
    V('eppure', 'eppure', 'e ainda assim'),
    V('ossia', 'ossia', 'ou seja'),
    V('perché', 'perché', 'porque / para que'),
    V('poiché', 'poiché', 'já que'),
    V('affinché', 'affinché', 'para que'),
    V('così', 'così', 'tão'),
    V('tanto', 'tanto', 'tanto'),
    V('benché', 'benché', 'embora'),
    V('sebbene', 'sebbene', 'embora'),
    V('nonostante', 'nonostante', 'apesar de'),
    V('se', 'se', 'se'),
    V('qualora', 'qualora', 'caso se'),
    V('purché', 'purché', 'desde que'),
    V('pioggia', 'pioggia', 'chuva'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual construção está correta?'),
    options: [
      T('Nonostante piove, usciamo.'),
      T('Nonostante la pioggia, usciamo.'),
      T('Nonostante dalla pioggia, usciamo.'),
      T('Nonostante che piove, usciamo.'),
    ],
    answer: 1,
    hint: T('Nonostante precede o substantivo com artigo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual frase usa perché como finalidade?'),
      options: [
        T('Non uscì perché pioveva.'),
        T('Esci perché non ti bagni.'),
        T('Poiché pioveva, restammo.'),
        T('È tardi, quindi partiamo.'),
      ],
      answer: 1,
      hint: T('No congiuntivo, perché é finalidade.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a consecutiva: così forte ___ non si muove (que)'),
      answer: 'che',
      hint: T('A consecutiva precisa dos dois lados.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa benché corretamente?'),
      options: [
        T('Benché la pioggia, usciamo.'),
        T('Benché piova, usciamo.'),
        T('Benché piove, usciamo.'),
        T('Benché di pioggia, usciamo.'),
      ],
      answer: 1,
      hint: T('Biché vai com verbo no congiuntivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('E coordena e o verbo fica no indicativo: sono andato a Roma e ho visto Marco.'),
    },
    {
      n: '2',
      text: T(
        'Perché é causa no indicativo e finalidade no congiuntivo: perché pioveva / perché non ti bagni.',
      ),
    },
    {
      n: '3',
      text: T(
        'Nonostante precede o substantivo com artigo e nunca o verbo: nonostante la pioggia.',
      ),
    },
    {
      n: '4',
      text: T('La consecutiva precisa dos dois lados: così…che, tanto…che, così tanto…che.'),
    },
    {
      n: '5',
      text: T('Condição e finalidade com verbo próprio exigem o congiuntivo no italiano.'),
    },
  ],
  notes: [
    {
      label: T('A mesma palavra, dois sentidos'),
      text: T(
        '{Perché} é causa e finalidade ao mesmo tempo, e o que separa as duas é o modo do verbo. O português resolve o problema com palavras distintas ({porque}, {para que}); o italiano resolveu com o congiuntivo, que o leitor de português só ativa quando a oração é negativa ou dubitativa.',
      ),
    },
    {
      label: T('Quando a subordinada vem primeiro'),
      text: T(
        'Em «{benché piovesse}, {andammo}», a subordinada ocupa o lugar do sujeito e o verbo principal fica no plural, concordando com o sujeito que vem depois. Quem escreve «benché piovesse, {andò}» traduziu do português palavra a palavra e produziu uma frase que o italiano não tem.',
      ),
    },
  ],
  examples: [
    { text: 'Sono andato a Roma e ho visto Marco.', gloss: T('Fui a Roma e vi Marcos.') },
    {
      text: 'Sono andato a Roma, ma non ho visto Marco.',
      gloss: T('Fui a Roma, mas não vi Marcos.'),
    },
    { text: 'Non uscì, perché pioveva.', gloss: T('Não saiu, porque chovia.') },
    { text: 'Esci presto, perché non ti bagni.', gloss: T('Sai logo, para não te molhares.') },
    { text: 'Così forte che non si muove.', gloss: T('Tão forte que não se move.') },
    { text: 'Benché piova, usciamo.', gloss: T('Embora chova, saímos.') },
    { text: 'Nonostante la pioggia, usciamo.', gloss: T('Apesar da chuva, saímos.') },
    { text: 'Se vieni, avvisami.', gloss: T('Se vieres, avisa-me.') },
    {
      text: 'Dio ha tanto amato il mondo che ha dato il suo Figlio.',
      gloss: T('Deus amou tanto o mundo que deu o seu Filho.'),
    },
  ],
  tables: [
    {
      caption: T('Coordenação'),
      head: ['Congiunzione', 'Glossa', 'Esempio'],
      rows: [
        ['e', 'e', 'uno e uno'],
        ['ma', 'ma', 'ma non'],
        ['però', 'però', 'però non'],
        ['eppure', 'eppure', 'eppure non'],
        ['ossia', 'ossia', 'Marco, ossia mio fratello'],
        ['né…né', 'né…né', 'né questo né quello'],
      ],
    },
    {
      caption: T('Subordinação'),
      head: ['Relazione', 'Congiunzioni', 'Modo del verbo'],
      rows: [
        ['causa', 'perché, poiché, dato che, siccome', 'indicativo'],
        ['finalità', 'affinché, perché', 'congiuntivo'],
        ['conseguenza', 'così…che, tanto…che', 'indicativo'],
        ['concessione', 'benché, sebbene, anche se', 'congiuntivo'],
        ['condizione', 'se, qualora, purché, se anche', 'congiuntivo'],
      ],
    },
    {
      caption: T('O que vem depois da conjunção'),
      head: ['Parola', 'Cosa viene dopo', 'Esempio'],
      rows: [
        ['nonostante', 'sostantivo con articolo', 'nonostante la pioggia'],
        ['benché', 'verbo al congiuntivo', 'benché piova'],
        ['sebbene', 'verbo al congiuntivo', 'sebbene fosse tardi'],
        ['se', 'verbo al congiuntivo', 'se vieni'],
        ['affinché', 'verbo al congiuntivo', 'affinché sappia'],
      ],
    },
  ],
};
