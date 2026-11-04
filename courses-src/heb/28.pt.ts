import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('O numeral: cardinal e ordinal'),
  subtitle: T('אֶחָד שְׁנַיִם · רִאשׁוֹן שֵׁנִי — duas séries que não se misturam'),
  section: T('Numeral'),
  body: C(`## Duas séries construídas ao contrário

O hebraico tem dois sistemas de número, e eles são feitos de maneiras opostas. O cardinal responde «quantos?» e o ordinal responde «qual?»:

{אֶחָד} «um» · {שְׁנַיִם} «dois» · {שִׁבְעָה} «sete» · {מֵאָה} «cem»

{רִאשׁוֹן} «primeiro» · {שֵׁנִי} «segundo» · {שְׁלִישִׁי} «terceiro» · {עֲשִׂירִי} «décimo»

Cardinais são substantivos: contam. Ordinais são adjetivos: caracterizam. Por isso o ordinal precisa de um substantivo ao qual se ligar, e o substantivo vem **depois**: {הַשְּׁבִיעִי} «o sétimo» é {הַ} + {שְׁבִיעִי}, que só significa alguma coisa junto de {יוֹם}, {לֵילָה} ou {מוֹעֵד}.

A terminação é o atalho. Todo ordinal acima de dez termina em {ִי} no masculino e em {ִית} no feminino, e essa regularidade é tão apertada que o sufixo basta para identificar a série. Nenhum cardinal tem essa terminação.

## O cardinal quando não está contando

O nome da série sugere que {שִׁבְעָה} «sete» só serve para sete coisas. Não é assim: o cardinal tem três usos que não são contagem, e eles aparecem mais do que a contagem pura.

Primeiro, ele vira **adjetivo de unicidade**. {אֶחָד} «um» aplicado a um substantivo significa «único, só»: {אֶחָד מִכֹּל} «único entre todos». E {אֶחָד} sozinho, sem substantivo, já significa «só, sozinho». Quem traduz ao pé da letra escreve «um» e o sentido se perde.

Segundo, ele **substitui o nome**. Quando o número indica um grupo inteiro, o substantivo pode ficar de fora e o numeral diz o grupo: {הָאֶחָד} «o único» nomeia um povo sem repetir o nome dele. O número faz o trabalho que em grego faz o artigo definido.

Terceiro, ele marca **posição numa série**, e não quantidade. {יוֹם אֶחָד} «dia um», em Gn 1.5, significa «o primeiro dia»: o cardinal está dizendo em que lugar da fila o dia está, e a contagem literal «um dia só» seria uma leitura errada do mesmo texto.

## {שְׁנַיִם} não é o dual

Este é o ponto que mais engana quem chega do latim, e vale ir devagar, porque a forma é enganosa.

O dual hebraico tem uma marca própria, o sufixo {־יִם}: {רַגְלַיִם} «os dois pés», {יָדַיִם} «as duas mãos», {מַיִם} «águas». O {ים} do dual é o fim da palavra, e quase nunca vem sozinho.

{שְׁנַיִם} «dois» também termina em {ים}. É essa coincidência de forma que produz o engano. Mas {שְׁנַיִם} é numeral, e o substantivo que o segue está no **plural próprio da coisa contada**: {שְׁתֵּי נָשִׁים} «duas mulheres» tem {נָשִׁים} no plural porque duas mulheres é plural. A pergunta é: o substantivo que vem depois está no plural que teria de qualquer modo? Em {שְׁתֵּי נָשִׁים} está, e o numeral é o que é. Em {רַגְלַיִם} {לְךָ} o substantivo {רֶגֶל} está no singular, e o {ים} é o dual.

Repare que {אֶחָד} e {שְׁנַיִם} seguem o substantivo em número: {יוֹם אֶחָד} «um dia» e {שְׁתֵּי נָשִׁים} «duas mulheres». De {שְׁלֹשָׁה} em diante o numeral tem forma própria, como mostra {שֶׁלֹשׁ} {נָשִׁים} «três mulheres».

## Onde as duas séries se encontram

O encontro mais bonito do sistema é o ordinal como substantivo. {רִאשׁוֹן} e {שֵׁנִי} deixam de ser adjetivos e passam a nomear a posição sozinhos: {הַשֵּׁנִי} «o segundo», {הָרִאשׁוֹן} «o primeiro». O hebraico faz isso sem esforço, porque o {הַ} já faz o trabalho do artigo definido e o substantivo é o mesmo que o cardinal.

E há o caso inverso, em que a forma é do ordinal mas o sentido é cardinal. {בִּשְׁלֹשִׁי} significa literalmente «no terceiro», e o contexto pode obrigar a ler «nos três dias». Nenhum dos dois se resolve sem o substantivo à vista.

Um detalhe de ordem que resolve metade dos erros de tradução: o numeral vem **antes** do substantivo, e o substantivo mantém o número que tem. {שְׁנֵי־הַלְוִיִּם} «os dois levitas» não é «os levitas dois» nem «os dois levita»: o plural de {לְוִיִּם} é {לְוִיִּם}, e ele não muda por causa do numeral que vem antes.

O Sl 33 em {שִׁבְעָה} e {עֲשִׂירִי} mostra as duas séries na mesma frase: o salmista conta o que Deus faz e depois nomeia a ordem, e o texto passa de uma série para a outra sem avisar. Quem acompanha a série, e não o sentido aparente de cada palavra, entende o verso sem esforço.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'um; único'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'dois (numeral, m.)'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'duas (numeral, f.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'sete (cardinal m.)'),
    V('מֵאָה', 'מֵאָה', 'cem'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'primeiro (ordinal m.)'),
    V('שֵׁנִי', 'שֵׁנִי', 'segundo (ordinal m.)'),
    V('שְׁלִישִׁי', 'שְׁלִישִׁי', 'terceiro (ordinal m.)'),
    V('עֲשִׂירִי', 'עֲשִׂירִי', 'décimo (ordinal m.)'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'o sétimo'),
    V('הָעֲשִׂירִי', 'עֲשִׂירִי', 'o décimo'),
    V('אֶחָד מִכֹּל', 'אֶחָד', 'único entre todos'),
    V('הָאֶחָד', 'אֶחָד', 'o único (grupo)'),
    V('יוֹם אֶחָד', 'אֶחָד', 'dia um (= o primeiro dia)'),
    V('שְׁנֵי־הַלְוִיִּם', 'שְׁנַיִם', 'os dois levitas'),
    V('שְׁתֵּי נָשִׁים', 'שְׁתֵּי', 'duas mulheres'),
    V('רַגְלַיִם', 'רֶגֶל', 'os dois pés (dual)'),
    V('יָדַיִם', 'יָד', 'as duas mãos (dual)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {שְׁתֵּי נָשִׁים} «duas mulheres», o que confirma que {שְׁתֵּי} é numeral e não substantivo?',
    ),
    options: [
      T('O substantivo {נָשִׁים} está no plural que tem de qualquer modo'),
      T('A palavra termina em {ים}'),
      T('Não há artigo'),
      T('O substantivo vem antes do número'),
    ],
    answer: 0,
    hint: T('Regra §3: o numeral não muda o número do substantivo. Duas mulheres já é plural.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue o número à série a que pertence.'),
      pairs: [
        { a: '{שִׁבְעָה}', b: T('cardinal') },
        { a: '{רִאשׁוֹן}', b: T('ordinal') },
        { a: '{מֵאָה}', b: T('cardinal') },
        { a: '{שְׁלִישִׁי}', b: T('ordinal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escreva o ordinal «setimo» com artigo.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('{שְׁבִיעִי} com o artigo {הַ} e dagesh forte no {ש}.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {שְׁנַיִם} «dois» não é um dual?'),
      options: [
        T('Porque o {יִם} do dual vem em {רַגְלַיִם} e {יָדַיִם}, e não em {שְׁנַיִם}'),
        T('Porque {שְׁנַיִם} tem dez letras'),
        T('Porque o hebraico não tem dual'),
        T('Porque {שְׁנַיִם} é um plural'),
      ],
      answer: 0,
      hint: T(
        'Regra §3: numeral e dual terminam igual, mas o substantivo seguinte denuncia qual é.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('Em Gn 1.5, o que {יוֹם אֶחָד} significa?'),
      options: [
        T('«o primeiro dia» — o cardinal marca posição numa série'),
        T('«um só dia» — o cardinal significa «único»'),
        T('«o dia inteiro»'),
        T('«o dia de um homem»'),
      ],
      answer: 0,
      hint: T('Regra §2: o cardinal {אֶחָד} também indica posição.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cardinal ({אֶחָד}, {שִׁבְעָה}, {מֵאָה}) conta; ordinal ({רִאשׁוֹן}, {שְׁלִישִׁי}, {עֲשִׂירִי}) caracteriza e exige um substantivo depois.',
      ),
    },
    {
      n: '2',
      text: T(
        'O cardinal não é só contagem: vale «único» ({אֶחָד מִכֹּל}) e pode marcar posição numa série: {יוֹם אֶחָד} «dia um» = «o primeiro dia».',
      ),
    },
    {
      n: '3',
      text: T(
        '{שְׁנַיִם} e {שְׁתֵּי} são numerais: o substantivo que os segue conserva o próprio número. O dual tem {־יִם} próprio ({רַגְלַיִם}, {יָדַיִם}, {מַיִם}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Todo ordinal acima de dez termina em {ִי} (masc.) ou {ִית} (fem.): é o atalho para reconhecer a série.',
      ),
    },
    {
      n: '5',
      text: T(
        'O numeral vem antes do substantivo e não altera o número dele: {שְׁנֵי־הַלְוִיִּם} «os dois levitas».',
      ),
    },
  ],
  notes: [
    {
      label: T('Armadilha:'),
      text: T(
        'O {ים} de {שְׁנַיִם} é a origem de quase toda confusão. Um leitor que chega do latim conhece os dois: {bini} «dois» e {manus} «mão» com o mesmo final, e o mesmo acontece em português com «dois» e «mãos». Quem reconhece que o final é o mesmo nos dois casos lê o substantivo seguinte e sabe na hora qual dos dois encontrou.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Os dois cardinais irregulares, {אֶחָד} e {שְׁנַיִם}, são os únicos que também funcionam como pronomes pessoais. «Um» e «dois» em hebraico são pronomes de terceira pessoa, como o latim {singuli} não é, e é por isso que {אֶחָד} consegue nomear um grupo inteiro sozinho. As línguas românicas fizeram o caminho contrário: guardaram o numeral e perderam o pronome.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('um; também «único» e «só»') },
    { text: '{שְׁנַיִם}', gloss: T('dois (masc.) — numeral, não dual') },
    { text: '{שְׁתֵּי}', gloss: T('duas (fem.) — numeral') },
    { text: '{שִׁבְעָה}', gloss: T('sete (cardinal masc.)') },
    { text: '{מֵאָה}', gloss: T('cem (cardinal)') },
    { text: '{רִאשׁוֹן}', gloss: T('primeiro (ordinal masc.)') },
    { text: '{שְׁלִישִׁי}', gloss: T('terceiro (ordinal masc.)') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('o sétimo — o dia de descanso') },
    { text: '{אֶחָד מִכֹּל}', gloss: T('único entre todos') },
    { text: '{הָאֶחָד}', gloss: T('o único — o numeral nomeia o grupo') },
    { text: '{יוֹם אֶחָד}', gloss: T('dia um = o primeiro dia (Gn 1.5)') },
    { text: '{שְׁנֵי־הַלְוִיִּם}', gloss: T('os dois levitas — numeral + plural') },
    { text: '{שְׁתֵּי נָשִׁים}', gloss: T('duas mulheres — o plural é do substantivo') },
    { text: '{רַגְלַיִם}', gloss: T('os dois pés — aqui sim, dual com {־יִם}') },
    { text: '{בַּיּוֹם הַשְּׁבִיעִי}', gloss: T('no sétimo dia — ordinal com {יוֹם}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As duas séries'),
      head: [
        T('Valor'),
        T('Cardinal masc.'),
        T('Cardinal fem.'),
        T('Ordinal masc.'),
        T('Ordinal fem.'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שֵׁנִי}', '{שְׁנִית}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שְׁבִיעִי}', '{שְׁבִיעִית}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשִׂירִי}', '{עֲשִׂירִית}'],
      ],
    },
    {
      caption: T('Tabela 2 — Final {ים}: numeral ou dual?'),
      head: [T('Palavra'), T('Categoria'), T('O que vem depois'), T('Como decidir')],
      rows: [
        ['{שְׁנַיִם}', T('numeral'), T('{נָשִׁים} — plural'), T('o substantivo já é plural: numeral')],
        ['{שְׁתֵּי}', T('numeral'), T('{נָשִׁים} — plural'), T('idem')],
        ['{רַגְלַיִם}', T('dual'), T('{לְךָ} — sufixo'), T('{ים} + sufixo pronominal: dual')],
        ['{יָדַיִם}', T('dual'), T('{לִי} — sufixo'), T('idem')],
        ['{מַיִם}', T('dual'), T('preposição'), T('{ים} sem sufixo depois')],
      ],
    },
  ],
};
