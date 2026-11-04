import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('Leitura: o Pai-Nosso'),
  subtitle: T('Versículo a versículo, com a gramática comentada'),
  section: T('Leitura'),
  body: C(`## O texto (Mariepillar)

> **Notre Père qui êtes aux cieux,**
> **que votre nom soit sanctifié,**
> **que votre règne vienne,**
> **que votre volonté soit faite sur la terre comme au ciel.**
> **Donnez-nous aujourd'hui notre pain.**
> **Pardonne-nous nos offenses, comme nous les pardonnons aussi à ceux qui nous offensent.**
> **Et ne nous induisez pas en tentation, mais délivrez-nous du mal.**
> **Car c'est à vous qu'appartiennent le règne, la puissance et la gloire, maintenant et pour toujours. Amen.**

## A forma do texto

São sete pedidos, e a gramática French distribui-se entre eles: três **subjuntivos** (v. 2-4), um **imperativo** (v. 5-7), uma **atribuição** (v. 8) e uma frase de **glória** (v. 9). Ler esta oração é rever todos os capítulos de verbos de uma vez.

## {Notre Père qui êtes aux cieux}

Duas coisas num só sintagma. **{Notre}** é um possessivo que age como artigo: não traduz «nosso pai» mas **«o pai que é nosso»**, «o Pai nosso». E **{qui êtes aux cieux}** é uma **oração relativa: o antecedente é {Père} (masculino singular), o relativo {qui} é sujeito de {êtes}, e o verbo sobe para 2.ª pessoa do plural, com o {vous} de Paris — é o único lugar do texto em que a forma de cortesia se cruza com o singular. O efeito é bonito: «Pai que é o nosso, lá em cima».

{aux cieux} usa {à} + substantivo sem artigo: {à Rome}, {à la maison}, {aux enfants}. A ausência de artigo é obrigatória depois de {à} nas preposições de lugar estático.

## {Que votre nom soit sanctifié}

Primeiro **subjuntivo**: {soit}, presente de {être} na 3.ª pessoa. O verbo French que segue {que} de finalidade é sempre subjuntivo — {Je veux que tu viennes}, {Il faut qu'elle parte}. E repare que {que} aqui é **pronome relativo**: {votre nom} é o objeto direto de {sanctifié}, então o relativo {que} substitui esse objeto. Não há preposição.

O mesmo mecanismo reaparece em {que votre règne vienne} (v. 3) e em {que votre volonté soit faite} (v. 4).

## {Que votre volonté soit faite sur la terre comme au ciel}

Aqui a construção é mais sutil. {soit faite} é um **passivo** — auxiliar {être} + participio, exatamente o sistema do capítulo 21. O sujeito de {votre volonté} vem **depois** do verbo, algo impossível em português, mas natural em francês, onde o objeto indireto antecede o verbo conjugado: {Je donne ce livre **à mon frère**}.

**{comme}** introduz uma comparação de igualdade: «do mesmo modo que», «como». E a assimetria é deliberada: na terra «como» no céu — o céu é a medida, a terra é a tentativa.

## {Donnez-nous aujourd'hui notre pain}

Aqui o verbo é **imperativo**, 2.ª pessoa do plural: {donnez}, o mesmo que {parlez}, {regardez}. A negação com {ne… pas} é obrigatória no imperativo — {ne… induisez pas} (v. 7) —, porque o sujeito {vous} é a segunda pessoa.

Os dois pronomes indiretos à esquerda do verbo: **{nous}** (a quem) e **{notre}** (de quem) — {notre} é a forma possessiva, exigida pelo artigo definido. {aujourd'hui} sem artigo é advérbio de tempo: «hoje», com a ideia de «o pão de hoje», o {manna} do deserto.

## {Pardonne-nous nos offenses}

Perceba a Trinidad da frase: {Pardonne} (imperativo) + **{nous}** (a quem perdoar) + **{nos}** (o que perdoar: nossas ofensas) + **{offenses}** (complemento do nome). {nos} é o **pronombre partitivo positivo**, o mesmo de {j'ai deslivres} — aqui partitivo no sentido de «o que nos ofendeu».

A segunda metade traz a comparação mais longa do texto: **{comme nous les pardonnons aussi à ceux qui nous offensent}**. Três coisas: {les} = pronome indireto que retoma {nos offenses}; {ceux qui} = pronome demonstrativo {ceux} + relativo {qui}, com valor de «aqueles que»; {aussi} acrescenta «também» com ênfase.

## {Et ne nous induisez pas en tentation}

Verbo {induire} com a preposição **{en}**: {induire en tentation}, «levar a tentação», «pôr à prova». O {Et} inicial liga as duas metades do verso. Em tradução literal, a preposição desaparece: {Ne nos induisez pas en tentation} = «Não nos leveis à tentação».

{ mais délivrez-nous du mal} — a segunda metade é uma **proposição alternativa**, com o verbo de novo no imperativo. {délivrez} vem de {délivrer}, com a preposição {de}.

## {Car c'est à vous qu'appartiennent le règne, la puissance et la gloire}

O último verso é uma frase de **glória**, e traz três construções que você já viu:

**{c'est à vous que…}** — o **correto quebrado**: {c'est} abre a oração, e {que} levanta o resto. Traduz-se «é a vós que pertence». Note o pronome {vous} forte — o mesmo do imperativo.

**{appartiennent}** é 3.ª pessoa do plural: o sujeito é {le règne, la puissance et la gloire}, que vem **depois**. Em português diríamos «pertence a vós o reino»; o francês prefere adiar o sujeito quando é longo.

**{maintenant et pour toujours}** é uma locução adverbial: {maintenant} («agora») e {pour toujours} («para sempre»), com a preposição {pour} + infinitivo substantivo. Uma locução do mesmo tipo é {de nos jours}, «dos nossos dias».

## O essencial

Você leu um texto solene inteiro e encontrou: relativo ({qui êtes}), subjuntivo ({soit sanctifié}), passivo ({soit faite}), imperativo ({Donnez}), pronome indireto duplo ({nous… notre}), partitivo ({nos offenses}), demonstrativo + relativo ({ceux qui}), correto quebrado ({c'est à vous que}), e sujeito posposto ({appartiennent le règne}). Nada disso é gramática decorativa: é o aparelho exato do texto bíblico, e o {Père Notre-Dame} é, linguisticamente, uma das páginas mais densas da língua francesa.`),
  vocab: [
    V('Notre Père', 'père', 'o Pai nosso (o nosso Pai)'),
    V('qui êtes', 'être', 'que éis (relativo + 2.ª pl.)'),
    V('aux cieux', 'ciel', 'nos céus (à + os)'),
    V('sanctifié', 'sanctifier', 'santificado (part. passado)'),
    V('soit', 'être', 'seja (subj. presente 3.ª sg.)'),
    V('veuillez', 'vouloir', 'seja (forma de cortesia do presente)'),
    V('régne', 'règne', 'reino, domínio (também o verbo)'),
    V('volonté', 'volonté', 'vontade (feminino)'),
    V('terre', 'terre', 'terra'),
    V('comme', 'comme', 'como, do mesmo modo que'),
    V('Donnez', 'donner', 'dai (imperativo 2.ª pl.)'),
    V("aujourd'hui", "aujourd'hui", 'hoje (advérbio sem artigo)'),
    V('Pardonne', 'pardonner', 'perdoa (imperativo 2.ª sg. e 2.ª pl.)'),
    V('offenses', 'offense', 'ofensas (complemento de nome)'),
    V('ceux qui', 'ceux', 'aqueles que (demostrativo + relativo)'),
    V('délivrez', 'délivrer', 'liberta,Livrai (imperativo de délivrer)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Notre Père qui êtes aux cieux}, o que {qui} faz?'),
    options: [
      T('É sujeito do verbo {êtes}, que é a segunda pessoa do plural'),
      T('É objeto direto de {Père}'),
      T('Substitui o substantivo {Père}'),
      T('Marca o vocativo, ou seja, um pedido de atenção'),
    ],
    answer: 0,
    hint: T('Regra §1: relativo {qui} = sujeito; relativo {que} = objeto direto.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a oração: {que votre nom ___ sanctifié} — o verbo vai no subjuntivo.'),
      answer: 'soit',
      hint: T('{être} no subjuntivo presente, 3.ª pessoa: {soit}, {soient}, {soyons}.'),
    },
    {
      kind: 'choose',
      prompt: T("Em {Car c'est à vous qu'appartiennent le règne}, onde está o sujeito do verbo?"),
      options: [
        T('Depois do verbo: {le règne, la puissance et la gloire}'),
        T('Antes do verbo, em {à vous}'),
        T("Em {c'est}, o pronome-sujeito elíptico"),
        T('Em {maintenant}'),
      ],
      answer: 0,
      hint: T('Um sujeito longo em francês pode ser adiado: {Le reste du troupeau a primé}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verso à construção que ele treina'),
      pairs: [
        {
          a: T("Donnez-nous aujourd'hui notre pain"),
          b: T('imperativo + dois pronomes indiretos'),
        },
        {
          a: T('que votre volonté soit faite'),
          b: T('subjuntivo em passiva, com sujeito atrasado'),
        },
        { a: T('ceux qui nous offensent'), b: T('demonstrativo + relativo = «aqueles que»') },
        {
          a: T('ne nous induisez pas en tentation'),
          b: T('imperativo negativo com ne… pas e verbo com preposição'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'Quantas vezes o verbo {être} aparece no texto do Pai-Nosso (formas {êtes}, {soit}, {soit})? Responda com um número: ___',
      ),
      answer: '3',
      hint: T('Uma em cada oração: v. 1, v. 2 e v. 4.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O relativo {qui} é sujeito e o {que} é objeto direto: {le Père qui êtes}, {le nom que sanctifiez}. Se o objeto exige preposição, o relativo vira {dont} (de), {à qui}, {pour qui}, {où}.',
      ),
    },
    {
      n: '2',
      text: T(
        "O {que} de finalidade exige subjuntivo: {Je veux que tu viennes}, {il faut qu'elle parte}, {que votre nom soit sanctifié}. Com {parce que} (causa), o verbo fica no indicativo.",
      ),
    },
    {
      n: '3',
      text: T(
        'No imperativo, a negação é sempre {ne… pas}, nunca só {pas}: {ne donnez pas}, {ne inducisons pas}.',
      ),
    },
    {
      n: '4',
      text: T(
        "O correto quebrado {c'est… que} destaca um elemento: {c'est à vous qu'appartient le trône}. Sem {que}, seria {c'est à vous appartient}, que é errado.",
      ),
    },
    {
      n: '5',
      text: T(
        'O sujeito French pode vir **depois** do verbo quando é longo: {appartiennent le règne, la puissance et la gloire}. Com sujeito curto, o normal é anteposição: {Dieu aime les hommes}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Uma nota de estilo francês: {ainsi soit-il}'),
      text: T(`A versão litúrgica francesa acrescenta ao fim do v. 4: **«ainsi soit-il»** — «assim seja». É a marca de que o {que} finalista pode terminar a oração: o verbo {soit} volta a aparecer, agora sem objeto. Em latim era **«sic fiat»**, exatamente a mesma ideia: a fórmula final é uma oração de desejo declarada.

A segunda curiosidade é a ausência de artigo antes de {Père}: em português diríamos «pai nosso» sem artigo, e o francês faz o mesmo — mas note que o {Notre} faz o trabalho do artigo. Em francês não existe o «du» implícito do português.`),
    },
    {
      label: T('Por que {à vous} e não {pour vous}'),
      text: T(`O verso final é uma **atribuição**: o reino «pertence» a Deus, e a preposição French que expressa pertencimento é {à}. Daí *{c'est à vous qu'appartiennent}*. Com {pour}, o sentido mudaria para «a fim de», e o texto diria que o reino existe *para* Deus, o que é teologia diferente.

Esse mesmo {à} aparece dezenas de vezes no texto com valor de destinatário: {à ceux qui nous offensent}, {Donnez-nous}, {Pardonne-nous}. É a marca mais constante da oração: quase todo verbo transitive traz um {à} escondido.`),
    },
  ],
  examples: [
    {
      text: 'Notre Père qui êtes aux cieux',
      gloss: T('Pai nosso, que estáis nos céus (relativo {qui} = sujeito)'),
    },
    {
      text: 'que votre nom soit sanctifié',
      gloss: T('que o vosso nome seja santificado (subjuntivo)'),
    },
    { text: 'que votre règne vienne', gloss: T('que o vosso reino venha') },
    {
      text: 'soit faite sur la terre comme au ciel',
      gloss: T('seja feito na terra como no céu (passiva + comparativo)'),
    },
    {
      text: 'Donnez-nous aujourd’hui notre pain',
      gloss: T('dai-nos hoje o nosso pão (imperativo + dois indiretos)'),
    },
    {
      text: 'Pardonne-nous nos offenses',
      gloss: T('perdoa-nos as nossas ofensas (partitivo {nos})'),
    },
    {
      text: 'comme nous les pardonnons',
      gloss: T('como nós também os perdoamos (comparativo + prônome indireto {les})'),
    },
    {
      text: 'ceux qui nous offensent',
      gloss: T('aqueles que nos ofendem (demostrativo + relativo)'),
    },
    {
      text: 'ne nous induisez pas en tentation',
      gloss: T('não nos leveis à tentação (imperativo negativo)'),
    },
    {
      text: 'c’est à vous qu’appartiennent le règne',
      gloss: T('é a vós que pertence o reino (correto quebrado, sujeito atrasado)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os sete pedidos e sua gramática'),
      head: [T('Verso'), T('Frase francesa'), T('Construção')],
      rows: [
        [
          T('1'),
          T('Notre Père qui êtes aux cieux'),
          T('relativo {qui} + possessivo com valor de artigo'),
        ],
        [T('2'), T('que votre nom soit sanctifié'), T('subjuntivo + relativo {que} = objeto')],
        [T('3'), T('que votre règne vienne'), T('subjuntivo de movimento ({venir})')],
        [
          T('4'),
          T('que votre volonté soit faite sur la terre'),
          T('passiva + {comme} comparativo'),
        ],
        [
          T('5'),
          T("Donnez-nous aujourd'hui notre pain"),
          T('imperativo + indiretos {nous} e {notre}'),
        ],
        [T('6'), T('Pardonne-nous nos offenses'), T('partitivo {nos} + {ceux qui}')],
        [
          T('7'),
          T('Et ne nous induisez pas… mais délivrez-nous'),
          T('imperativo negativo + coordenação com {mais}'),
        ],
        [
          T('9'),
          T("Car c'est à vous qu'appartiennent le règne"),
          T("{c'est… que} + sujeito posposto"),
        ],
      ],
    },
    {
      caption: T('Tabela 2 — O mesmo verbo em quatro funções'),
      head: [T('Ocorrência'), T('Forma'), T('Tempo e modo'), T('Português')],
      rows: [
        [T('v. 1, relativo'), T('êtes'), T('presente do indicativo, 2.ª pl.'), T('são / que são')],
        [T('v. 2, {ç}e de finalidade'), T('soit'), T('subjuntivo presente, 3.ª sg.'), T('seja')],
        [T('v. 4, {ç}e de finalidade'), T('soit'), T('subjuntivo presente, 3.ª sg.'), T('seja')],
        [
          T('v. 4, {ç}e de finalidade'),
          T('faite'),
          T('particípio passado, com {être}'),
          T('feita'),
        ],
      ],
    },
  ],
};
