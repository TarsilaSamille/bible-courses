import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Conjunções: porque, embora, enquanto'),
  subtitle: T('because × so, although × though — os pares que o aluno vira'),
  section: T('Conectivo'),
  body: C(`## As coordenadas e o que cada uma faz

As conjunções coordenadas do inglês são sete e a maioria dos livros de gramática as decora pela sigla FANBOYS: {and}, {but}, {or}, {nor}, {for}, {yet}, {so}.

Duas delas precisam de aviso. {For} significa "porque" e não "para": {I stayed home, for I was ill}. E {Yet} significa "no entanto", nunca "ainda": {He is old, yet he works hard}.

{I saw him, but he did not see me} é a estrutura mais comum do inglês para contraste, e a posição do {but} é sempre a mesma: entre as duas metades da frase, sem vírgula no meio dele.

## Os dois pares que o aluno vira

O primeiro par é {because} e {so}. {Because} traz **causa** e {so} traz **consequência**: {I stayed home because I was ill} e {I was ill, so I stayed home}. O aluno troca os dois com muita frequência, e o efeito é inverter a lógica da frase.

O segundo par é {although} e {because}. {Although} é concessiva e {because} é causal: {Although it rained, we went out} e {We went out because it did not rain}. Ambos vêm no começo da oração, e é por isso que a confusão passa despercebida.

A KJV usa {though} e {yet} na mesma oração em João 12:37: {Though he had done so many miracles before them, yet they believed not in him}. São as duas coordenadas trabalhando juntas: {though} admite e {yet} contrapõe.

2 Coríntios 5:17 liga o par da causa com {therefore}: {Therefore if any man be in Christ, he is a new creature}. O {therefore} do inglês é o {so} de consequência, e a frase inteira é {because} mais {so} escrito por extenso.

## While não é embora

O erro que mais aparece em tradução é {while} traduzido por "embora". {While} significa **ao mesmo tempo que**: {While I was at home, she called}. Para concessiva, o inglês usa {while} no sentido de "embora" apenas em archaico e em biblical English, e mesmo assim o leitor contemporâneo lê como temporal.

O teste é o tempo da segunda oração. Se ela é simultânea, {while} é temporal. Se é concessiva, é {although}.

## As quatro formas de dizer a mesma condição

A condição condicional tem quatro pares, e o aluno só conhece um. {If} e {unless} são o mesmo par visto dos dois lados: {If you come, I will stay} e {Unless you come, I will stay}. {Though} e {even though} diferem em ênfase: {even though} insiste no contraste. {So that} e {in order that} introduzem finalidade, e {as long as} e {provided that} introduzem condição prolongada.

O que muda o sentido é sempre o mesmo elemento: um {not} dentro do {if}, um {even} antes do {though}, um {long} dentro do {as long as}. A base da oração é idêntica.`),
  vocab: [
    V('and', 'and', 'e'),
    V('but', 'but', 'mas'),
    V('or', 'or', 'ou'),
    V('nor', 'nor', 'nem'),
    V('for', 'for', 'porque (arcaico)'),
    V('yet', 'yet', 'no entanto'),
    V('so', 'so', 'portanto'),
    V('because', 'because', 'porque'),
    V('although', 'although', 'embora'),
    V('though', 'though', 'embora'),
    V('while', 'while', 'enquanto'),
    V('unless', 'unless', 'a menos que'),
    V('even though', 'even', 'ainda que'),
    V('so that', 'so', 'para que'),
    V('as long as', 'as long as', 'desde que, enquanto'),
    V('therefore', 'therefore', 'portanto'),
  ],
  rules: [
    { n: '1', text: T('For significa porque e não para; yet significa no entanto e nunca ainda.') },
    {
      n: '2',
      text: T(
        'Because traz causa e so traz consequência; trocar os dois inverte a lógica da frase.',
      ),
    },
    {
      n: '3',
      text: T('Although é concessiva e because é causal, e as duas podem abrir a oração.'),
    },
    {
      n: '4',
      text: T('While significa ao mesmo tempo que; para concessiva, use although ou though.'),
    },
    {
      n: '5',
      text: T(
        'If e unless, though e even though, so that e in order that, as long as e provided that são pares que diferem por um único elemento.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 12:37 traz Though e yet na mesma oração, e 2 Coríntios 5:17 traz therefore, que é o par because e so escrito por extenso.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve "Although I was ill, I stayed home", ele trocou although por because. O teste é perguntar qual das duas orações explica a outra.',
      ),
    },
  ],
  examples: [
    { text: '{I stayed home, for I was ill}', gloss: T('fiquei em casa, porque estava doente') },
    { text: '{He is old, yet he works hard}', gloss: T('é velho, no entanto trabalha duro') },
    { text: '{I stayed home because I was ill}', gloss: T('fiquei em casa porque estava doente') },
    { text: '{I was ill, so I stayed home}', gloss: T('estava doente, então fiquei em casa') },
    { text: '{Although it rained, we went out}', gloss: T('embora chovesse, saímos') },
    {
      text: '{While I was at home, she called}',
      gloss: T('enquanto eu estava em casa, ela ligou'),
    },
    {
      text: '{Though he had done so many miracles, yet they believed not}',
      gloss: T('embora tivesse feito tantos milagres, ainda assim não creram'),
    },
    {
      text: '{Therefore if any man be in Christ, he is a new creature}',
      gloss: T('portanto, se alguém está em Cristo, é nova criatura'),
    },
    { text: '{Unless you come, I will stay}', gloss: T('a menos que você venha, eu fico') },
    { text: '{even though he is tired}', gloss: T('ainda que ele esteja cansado') },
  ],
  tables: [
    {
      caption: T('As coordenadas'),
      head: [T('Conjunção'), T('Função'), T('Exemplo')],
      rows: [
        ['{and}', T('soma'), '{He read and she wrote}'],
        ['{but}', T('contraste'), '{He read but she wrote}'],
        ['{or}', T('alternativa'), '{Do you read or write}'],
        ['{nor}', T('negação acumulativa'), '{neither read nor write}'],
        ['{for}', T('causa, arcaico'), '{I stayed, for I was ill}'],
        ['{yet}', T('contraste enfático'), '{He is old, yet he works}'],
        ['{so}', T('consequência'), '{I was ill, so I stayed}'],
      ],
    },
    {
      caption: T('Os pares que o aluno vira'),
      head: [T('Par'), T('Primeiro sentido'), T('Segundo sentido')],
      rows: [
        ['{because} / {so}', T('causa'), T('consequência')],
        ['{although} / {because}', T('concessiva'), T('causal')],
        ['{if} / {unless}', T('hipótese'), T('hipótese negada')],
        ['{though} / {even though}', T('concessiva'), T('concessiva enfática')],
        ['{so that} / {in order that}', T('finalidade'), T('finalidade explícita')],
      ],
    },
    {
      caption: T('Quando a conjunção abre a oração'),
      head: [T('Conjunção'), T('Pode vir no início?'), T('Exemplo')],
      rows: [
        ['{because}', T('sim'), '{Because it rained, we stayed}'],
        ['{so}', T('sim, com vírgula'), '{It rained, so we stayed}'],
        ['{although}', T('sim'), '{Although it rained, we went}'],
        ['{though}', T('sim'), '{Though he asked, I refused}'],
        ['{while}', T('sim, mas temporal'), '{While we waited, he called}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('Because it rained, we stayed home'),
      T('Although it rained, we stayed home'),
      T('So it rained, we stayed home'),
      T('While it rained, we stayed home'),
    ],
    answer: 1,
    hint: T('A chuva é o obstáculo, não a causa: use although.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete a causa: 'I stayed home ___ I was ill.'"),
      answer: 'because',
    },
    {
      kind: 'fill',
      prompt: T("Complete a consequência: 'I was ill, ___ I stayed home.'"),
      answer: 'so',
    },
    {
      kind: 'match',
      prompt: T('Ligue a conjunção à sua função.'),
      pairs: [
        { a: 'although', b: T('concessiva') },
        { a: 'because', b: T('causal') },
        { a: 'unless', b: T('hipótese negada') },
        { a: 'so that', b: T('finalidade') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa while corretamente?'),
      options: [
        T('While he was poor, he was happy'),
        T('While I read, he slept'),
        T('While he was poor, he became rich'),
        T('While the rain, we went out'),
      ],
      answer: 1,
    },
  ],
};
