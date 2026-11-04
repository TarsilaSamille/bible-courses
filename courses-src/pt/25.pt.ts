import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('O verbo: forma e tempo'),
  title: T('O verbo: o dar e o poder'),
  subtitle: T('dou, dá, dê, de, e o dar que significa fazer'),
  body: C(`## As formas que só estes dois têm

A maioria dos verbos faz a conjugação por regra, e {amar} serve de modelo para todos. {Dar} e {poder} são as duas exceções que todo o português decorou sem querer, e elas não seguem regra nenhuma: {dou}, {dá}, {dê}, {demos}, {dei}, {de}, {dão}. Ao lado, {posso}, {podes}, {pode}, {podemos}, {podeis}, {podem}, e no subjuntivo {possa}, {possas}, {possa}, {possamos}, {podais}, {possam}.

O que há de verdade é uma regra antiga que sobrou: em {dar}, a primeira pessoa do presente recebe um {-o} que o resto do verbo não tem, e a de {poder} recebe {-ss-} no lugar do {-d-} que o latim tinha. Os dois verbos são da mesma família no latim, e a forma portuguesa é a que ficou sem aquele som.

Quem traduz do grego esbarra aqui: o grego também distingue {dar} de {poder}, em {δίδωμι} e {δύναμαι}, e em português as flexões são tão irregulares que a mão trava antes da cabeça.

## O dar que significa fazer

O verbo {dar} tem, em português, um uso que o grego não tem: forma perífrase com outro verbo e significa {fazer}. {Dar de comer} é alimentar, {dar um jeito} é arrumar, {dar a volta} é contornar, {dar com os olhos em} é encontrar, {dar-se bem} é sair bem. Nesse uso, {dar} não entrega nada: ele faz a ação do outro verbo.

É por isso que o Novo Testamento traduzido em português tem verbos que o grego não tem como verbo principal. Onde o grego diz {πεῖναι}, o português diz {dar de comer}; onde o grego diz {ποιῆσαι}, o português diz {dar}, e a perífrase traduz o sentido sem distorcer.

## O dar no Novo Testamento

Lucas 15.22 narra uma roupa em quatro verbos: o pai {trouxe} a melhor túnica, {vestiu-o}, {meteu-lhe} um anel na mão e sandálias nos pés. São quatro verbos diferentes para quatro ações de vestir, e o grego faz o mesmo com quatro verbos diferentes, o que é raro: a narrativa quer dizer que o pai fez tudo por sua mão.

No mesmo capítulo, o filho mais novo pede os bens da herança, e o pai diz que {dar} dinheiro a quem não sabe gastar é {dar} para jogar fora. A perífrase {dar com} aparece ali com o sentido de {jogar}, e é o único sentido de {dar} que o grego não tem.

## O que ler

Em qualquer forma de {dar} ou {poder}, pergunte: qual é a pessoa, e a forma está na série principal ou no pretérito? E o {dar} está sozinho ou é perífrase?

Em Lucas 15.22 o texto vem com os verbos juntos, e é aí que a perífrase aparece: o pai não {deu} um anel, ele {meteu} um anel. Quem traduz mantendo todo verbo com verbo conserva a enumeração do original; quem traduz por {deu} em tudo apaga os quatro verbos e perde a mão do pai que está contando.`),
  vocab: [
    V('dou', 'dar', 'dou'),
    V('dá', 'dar', 'dá'),
    V('dê', 'dar', 'dê'),
    V('dei', 'dar', 'dei'),
    V('dão', 'dar', 'dão'),
    V('posso', 'poder', 'posso'),
    V('pode', 'poder', 'pode'),
    V('podemos', 'poder', 'podemos'),
    V('puder', 'poder', 'puder'),
    V('dar de comer', 'dar', 'dar de comer'),
    V('dar um jeito', 'dar', 'dar um jeito'),
    V('dar a volta', 'dar', 'dar a volta'),
    V('vestiu-o', 'vestir', 'vestiu-o'),
    V('meteu-lhe', 'meter', 'meteu-lhe'),
    V('trouxe', 'trazer', 'trouxe'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Dar} e {poder} são irregulares em todas as pessoas: {dou}, {dá}, {dê}, {dei}, {dão}, {posso}, {pode}, {podemos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Dar} forma perífrase com outro verbo e significa {fazer}: {dar de comer}, {dar um jeito}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Quando o texto enumera ações, o verbo {dar} fica por {meteu} e {vestiu}, porque cada ação tem verbo próprio.',
      ),
    },
    {
      n: '§4',
      text: T('O grego distingue {δίδωμι} e {δύναμαι}; o português distingue {dar} e {poder}.'),
    },
    {
      n: '§5',
      text: T('Em narrativa, o verbo {dar} sozinho é raro: o texto prefere o verbo exato da ação.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'As formas {dei}, {deu} e {dão} são as que aparecem na Bíblia com frequência, e as formas do subjuntivo {dê}, {dêmos} aparecem nos textos litúrgicos.',
      ),
    },
    {
      label: T('Por que a perífrase complica'),
      text: T(
        'A locução {dar} mais verbo ocupa no português o lugar de um verbo grego simples. Ao traduzir, é preciso decidir se vale a pena produzir a locução ou usar o verbo grego mais próximo.',
      ),
    },
  ],
  examples: [
    { text: 'Dou a minha palavra.', gloss: T('Primeira pessoa do presente, forma irregular.') },
    { text: 'Que o Senhor te dê paz.', gloss: T('Imperativo do verbo {dar}, terceira pessoa.') },
    { text: 'Não posso ir hoje.', gloss: T('{posso} é a primeira pessoa de {poder}.') },
    { text: 'Puder vir, virei.', gloss: T('{puder} é o pretérito perfeito de {poder}.') },
    { text: 'Deu de comer aos famintos.', gloss: T('Perífrase: {dar de} mais infinitivo.') },
    { text: 'Deu um jeito na casa.', gloss: T('{dar um jeito} significa arrumar.') },
    { text: 'Meteu-lhe um anel na mão.', gloss: T('O verbo exato, e não {deu}.') },
    { text: 'Vestiu-o com a túnica.', gloss: T('Outra ação, outro verbo.') },
  ],
  tables: [
    {
      caption: T('O verbo dar'),
      head: ['Pessoa', 'Presente', 'Pretérito'],
      rows: [
        ['eu', 'dou', 'dei'],
        ['tu', 'dás', 'deste'],
        ['ele/ela', 'dá', 'deu'],
        ['nós', 'damos', 'demos'],
        ['vós', 'dais', 'destes'],
        ['eles/elas', 'dão', 'deram'],
      ],
    },
    {
      caption: T('O verbo poder'),
      head: ['Pessoa', 'Presente', 'Subjuntivo'],
      rows: [
        ['eu', 'posso', 'possa'],
        ['tu', 'podes', 'possas'],
        ['ele/ela', 'pode', 'possa'],
        ['nós', 'podemos', 'possamos'],
        ['vós', 'podeis', 'podais'],
        ['eles/elas', 'podem', 'possam'],
      ],
    },
    {
      caption: T('Dar como perífrase'),
      head: ['Locução', 'O que significa'],
      rows: [
        ['dar de comer', 'alimentar'],
        ['dar de beber', 'dar para beber'],
        ['dar um jeito', 'arrumar'],
        ['dar a volta', 'contornar'],
        ['dar-se bem', 'sair bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a primeira pessoa do presente de {dar}?'),
    options: [T('dou'), T('dão'), T('dei'), T('dê')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{dar de comer} é uma ______, e significa alimentar.'),
      answer: 'perífrase',
      hint: T('O {dar} não entrega nada aqui.'),
    },
    {
      kind: 'choose',
      prompt: T('Em Lucas 15.22, o pai põe o anel na mão do filho com:'),
      options: [T('meteu-lhe'), T('deu-lhe'), T('lhe deu para'), T('entregou o anel a ele na mão')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a locução ao sentido.'),
      pairs: [
        { a: T('dar de comer'), b: T('alimentar') },
        { a: T('dar um jeito'), b: T('arrumar') },
        { a: T('dar a volta'), b: T('contornar') },
        { a: T('dar-se bem'), b: T('sair bem') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
