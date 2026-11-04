import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('O substantivo: plural e contagem'),
  subtitle: T('man/men, child/children, foot/feet — os plurais que não são -s'),
  section: T('Nome'),
  body: C(`## O que a regra do -s resolve

Quase todo plural inglês se faz acrescentando {s}: {book → books}, {city → cities}, {sin → sins}. A regra tem três desdobramentos e cabe numa frase: {ch}, {sh}, {s}, {x} e {o} terminais recebem {es}; consoante mais {y} vira {ies}; {f} e {fe} finais às vezes viram {ves}.

**O som manda na forma.** {church} não pode receber só {s} e continuar soando como {church}; por isso recebe {es}. Quem decorar o {-es} por lista vai errar justamente os casos em que ele não se aplica.

O que sobra depois dessas três regras é um conjunto fechado. Nenhuma regra os gera, e nenhum aluno de português os adivinha, porque em português todos são regulares: {children} é a palavra que não existe em português.

## Os irregulares que toda leitura devia ter

{Man → men} e {woman → women} mudam a vogal e a consoante final. {Child → children} e {goose → geese} mudam o núcleo da palavra. {Foot → feet} e {tooth → teeth} perdem o {o}. {Mouse → mice} troca o final por {ice}. {Person → people} e {ox → oxen} são os dois casos em que o plural não tem nenhuma relação com o singular.

A KJV usa os dois lados da regra no mesmo versículo. Salmo 8:6 fala em {Thou hast put all things under his feet}, e o versículo continua com {all sheep and oxen}: {feet} é irregular, {sheep} não muda e {oxen} não tem relação com {ox}. Três plurais, três caminhos.

## Os que não mudam, e os que vieram do grego

"Sheep", {deer}, {fish}, {series} e {species} têm a mesma forma no singular e no plural: um {sheep} e cem {sheep}. **Quem prova o plural é o verbo**, que é singular: {the sheep are feeding}, {this species is rare}.

Do grego vêm {data}, {criteria} e {phenomena}, que em inglês contemporâneo são plural e concordam no plural: {the data are convincing}. O uso técnico os trata como substantivo singular, e a forma {datas} aparece quando se quer contar conjuntos distintos de dados.

## Duas palavras, dois plurais e o número que não pluraliza

{Compass} é um dos poucos casos em que o mesmo plural serve para dois sentidos: {two compasses} pode ser dois instrumentos de navegação ou duas circunferências. A palavra no singular já não distingue, e o contexto é quem resolve.

{Chalk} funciona como massa ({the chalk is white}) e como contável ({three chalks} são três pedaços). Com substantivos que oscilem entre os dois regimes, o plural não é uma regra fixa: é uma decisão sobre o que se está contando.

Número é substantivo: {two thousand people}, não {two thousands people}. "Um milhão de pessoas" em inglês é {a million people}, e a concordância é com {people}, que é plural. O mesmo vale para {a thousand}, {a dozen}.

Nas perguntas, {How many} conta com {How many books} e {How much} pesa com {How much money}, e o substantivo segue a resposta: {How many pieces of advice do you need}?`),
  vocab: [
    V('child', 'child', 'criança'),
    V('children', 'child', 'crianças'),
    V('foot', 'foot', 'pé'),
    V('feet', 'foot', 'pés'),
    V('man', 'man', 'homem'),
    V('men', 'man', 'homens'),

    V('tooth', 'tooth', 'dente'),
    V('teeth', 'tooth', 'dentes'),
    V('mouse', 'mouse', 'rato'),
    V('mice', 'mouse', 'ratos'),
    V('person', 'person', 'pessoa'),
    V('people', 'person', 'pessoas'),
    V('sheep', 'sheep', 'ovelha/ovelhas'),

    V('goose', 'goose', 'ganso'),
    V('geese', 'goose', 'gansos'),
    V('data', 'data', 'dados'),

    V('compass', 'compass', 'bússola/circunferência'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O plural regular é -s, com três correções sonoras: -es depois de ch, sh, s, x e o finais; -ies depois de consoante + y; -ves depois de alguns -f e -fe.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os irregulares não têm regra nem relação com o singular. São lista fechada e precisam ser decorados: children, feet, teeth, mice, geese, oxen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Sheep, deer, fish, series e species têm a mesma forma nos dois números, e quem prova o plural é o verbo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Depois de número, o substantivo fica no singular: two thousand people, a million dollars.',
      ),
    },
    {
      n: '5',
      text: T(
        'Substantivos gregos como data e criteria são plural em inglês e concordam no plural, ainda que muitos técnicos os tratem como singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Salmo 8:6 traz feet (irregular), sheep (inalterado) e oxen (sem relação com ox) no mesmo versículo. Três plurais, três caminhos, nenhuma regra comum.',
      ),
    },
    {
      label: T('Pronúncia:'),
      text: T(
        'As correções do -s são regulares: quem escreve churchs em vez de churches acerta a forma escrita e erra o som da palavra.',
      ),
    },
  ],
  examples: [
    { text: '{two thousand people}', gloss: T('duas mil pessoas — o número não pluraliza') },
    { text: '{the sheep are feeding}', gloss: T('as ovelhas estão pastando — verbo no plural') },
    { text: '{the data are convincing}', gloss: T('os dados são convincentes') },
    { text: '{two compasses}', gloss: T('duas bússolas ou duas circunferências') },
    { text: '{three chalks}', gloss: T('três pedaços de giz') },
    { text: '{all sheep and oxen}', gloss: T('todas as ovelhas e bois') },
    { text: '{How many pieces of advice do you need}', gloss: T('Quantos conselhos você precisa') },
    { text: '{the city and its churches}', gloss: T('a cidade e suas igrejas') },
    { text: '{five loaves and two fish}', gloss: T('cinco pães e dois peixes — fish não muda') },
    { text: '{a series of events}', gloss: T('uma série de eventos — série, não serials') },
  ],
  tables: [
    {
      caption: T('Plurais regulares'),
      head: [T('Terminação do singular'), T('Plural'), T('Exemplo')],
      rows: [
        ['-', '{+s}', '{book → books}'],
        ['ch / sh / s / x / o', '{+es}', '{church → churches}'],
        [T('consoante + y'), '{y → ies}', '{city → cities}'],
        [T('vogal + y'), '{+s}', '{day → days}'],
        [T('-f / -fe (alguns)'), '{f/fe → ves}', '{leaf → leaves}'],
      ],
    },
    {
      caption: T('Plurais irregulares'),
      head: [T('Singular'), T('Plural'), T('O que muda')],
      rows: [
        ['{man}', '{men}', T('vogal e consoante final')],
        ['{woman}', '{women}', T('vogal e consoante final')],
        ['{child}', '{children}', T('núcleo da palavra')],
        ['{foot}', '{feet}', T('perde o -oo-')],
        ['{tooth}', '{teeth}', T('perde o -oo-')],
        ['{goose}', '{geese}', T('núcleo da palavra')],
        ['{mouse}', '{mice}', T('final trocado')],
        ['{person}', '{people}', T('sem relação com o singular')],
        ['{ox}', '{oxen}', T('sem relação com o singular')],
      ],
    },
    {
      caption: T('Plurais que não mudam'),
      head: [T('Palavra'), T('Plural'), T('Como se reconhece')],
      rows: [
        ['{sheep}', '{sheep}', T('pelo verbo: the sheep are')],
        ['{deer}', '{deer}', T('pelo verbo: the deer is')],
        ['{fish}', '{fish}', T('pelo verbo: two fish are')],
        ['{data}', '{data}', T('grego: plural em inglês')],
        ['{criteria}', '{criteria}', T('grego: plural em inglês')],
        ['{chalk}', '{chalks}', T('a massa vira contável no plural')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual plural está correto?'),
    options: [T('two childs'), T('two children'), T('two childrens'), T('two childes')],
    answer: 1,
    hint: T('Child é irregular: children.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete o irregular: 'I have two ___. ' (dentes)"),
      answer: 'teeth',
    },
    {
      kind: 'fill',
      prompt: T("Corrija: 'two thousands people' → 'two thousand ___'"),
      answer: 'people',
    },
    {
      kind: 'match',
      prompt: T('Ligue singular e plural.'),
      pairs: [
        { a: 'goose', b: 'geese' },
        { a: 'foot', b: 'feet' },
        { a: 'person', b: 'people' },
        { a: 'ox', b: 'oxen' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('The sheep is feeding'),
        T('The sheep are feeding'),
        T('The sheeps is feeding'),
        T('The sheep are feeds'),
      ],
      answer: 1,
    },
  ],
};
