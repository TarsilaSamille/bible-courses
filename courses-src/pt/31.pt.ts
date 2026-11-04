import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Leitura'),
  title: T('Capstone de leitura: Marcos 4, 35-41'),
  subtitle: T('passemos, adormeceu, cala-te, e a leitura do verbo, da conjunção e do advérbio'),
  body: C(`## O texto

O trecho vai do anoitecer até ao silêncio depois da tempestade, e cabe em sete versículos. A parte que interessa aqui está nestas frases: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado. E ele mesmo passou primeiro para o outro lado}. Depois, o barco já estava quase cheio: {de modo que já estava se enchendo de água}. E então, {ele, no meio da tempestade, adormeceu; e acordou, e repreendeu aos demônios, e disse-lhe: Cala-te, e saí!}. No fim, a única pergunta: {Por que tendes por foro? Não haveis fé ainda?}

São sete orações, trinta e tantos verbos e uma única pergunta. Quem leu tudo isso já tem Pronomes, advérbios, conjunções e verbos suficientes para ler qualquer capítulo do Novo Testamento.

## Onde está o verbo e em que modo

O que chama atenção é a distribuição. O **pretérito perfeito** domina a narrativa: {disse}, {passou}, {levantou-se}, {adormeceu}, {acordou}, {repreendeu}, {saiu}, {cessou}, {disse}. São nove ações contadas uma a uma, e cada uma tem seu verbo em um momento.

O **imperfeito** faz o trabalho de fundo: ele descreve o estado do barco e o da tempestade enquanto as ações contadas acontecem. Nenhuma das ações descritas aconteceu como evento; são as condições que estavam em curso enquanto as outras nove Aconteciam, e é por isso que a tradução literal traz o imperfeito para o fundo da cena. E há um **subjuntivo** na primeira frase, {passemos}, que é o imperativo disfarçado: o grego original diz "vamos passar", e o português escreve no subjuntivo.

O **imperativo** verdadeiro está em {Cala-te, e saí}, e é a única frase do texto em que Jesus fala com poder sobre algo, e não com pergunta.

## As conjunções e os advérbios

As conjunções do trecho são poucas, e cada uma cumpre uma função: {e} soma seis ações, {mas} opõe o sono de Jesus ao estado do barco, {de modo que} explica a causa da inundação. Nada mais.

Os advérbios é que fazem o trabalho fino. {primeiro} marca a ordem no mar; {já} marca o aspecto, e diz que o enchimento estava em curso antes de Jesus acordar; {meio} marca o lugar dentro da tempestade; {não} nega o que eles têm; {ainda} insiste depois de já negado.

## O que ler

Em qualquer texto bíblico, pergunte: onde está o verbo, e é perfeito, imperfeito, subjuntivo ou imperativo? Onde está a conjunção, e o que ela liga? Onde está o advérbio, e ele marca tempo, modo ou aspecto?

Marcos 4.35 a 41 é o exemplo mais limpo de leitura feita com três perguntas. A pergunta final, {Por que tendes por foro?}, põe o texto inteiro contra o ouvinte: o verbo está no presente ({tendes}), a negação vem depois ({não haveis}), e o advérbio {ainda} diz que a falta de fé continuava.`),
  vocab: [
    V('o temporal', 'temporal', 'o temporal'),
    V('as ondas', 'onda', 'as ondas'),
    V('o barco', 'barco', 'o barco'),
    V('adormeceu', 'adormecer', 'adormeceu'),
    V('acordou', 'acordar', 'acordou'),
    V('repreendeu', 'repreender', 'repreendeu'),
    V('cessou', 'cessar', 'cessou'),
    V('passou', 'passar', 'passou'),
    V('levantou-se', 'levantar-se', 'levantou-se'),
    V('disse', 'dizer', 'disse'),
    V('calma-te', 'calar', 'calma-te'),
    V('passemos', 'passar', 'passemos'),
    V('batiam', 'bater', 'batiam'),
    V('o foro', 'foro', 'o foro'),
    V('a tempestade', 'tempestade', 'a tempestade'),
    V('tendes', 'ter', 'tendes'),
    V('haveis', 'haver', 'haveis'),
  ],
  rules: [
    { n: '§1', text: T('O perfeito conta a ação uma a uma: {disse}, {passou}, {adormeceu}.') },
    { n: '§2', text: T('O imperfeito faz o fundo: {as ondas batiam}, {era}.') },
    { n: '§3', text: T('O subjuntivo {passemos} é o imperativo disfarçado: «vamos passar».') },
    { n: '§4', text: T('O advérbio {já} marca aspecto: a ação já estava em curso.') },
    {
      n: '§5',
      text: T(
        'A negação em português vem antes do verbo: {não haveis}, e {ainda} nega depois de já negado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O português não tem o presente histórico que o inglês usa em narrativa. Por isso Marcos 4 aparece quase todo no perfeito, e o leitor precisa saber que a ação inteira está no passado narrado.',
      ),
    },
    {
      label: T('O advérbio que é aspecto'),
      text: T(
        '{Já} não marca tempo: marca que a ação já estava em curso antes de outro evento. É o mesmo valor do grego {ἤδη}, e é o que traduz a ideia de distribuição do verbo.',
      ),
    },
  ],
  examples: [
    { text: 'Passemos para o outro lado.', gloss: T('Subjuntivo presente: «vamos passar».') },
    { text: 'Ele mesmo passou primeiro.', gloss: T('Pretérito perfeito e advérbio de ordem.') },
    { text: 'As ondas batiam contra o barco.', gloss: T('Imperfeito: o fundo da cena.') },
    { text: 'Já estava se enchendo de água.', gloss: T('Imperfeito com {já}: aspecto em curso.') },
    {
      text: 'Adormeceu no meio da tempestade.',
      gloss: T('Pretérito perfeito com advérbio de lugar.'),
    },
    { text: 'Cala-te, e saí!', gloss: T('Imperativo com clítico: a única frase de poder.') },
    { text: 'Por que tendes por foro?', gloss: T('Presente do indicativo numa pergunta.') },
    { text: 'Não haveis fé ainda?', gloss: T('Negação antes do verbo, {ainda} depois.') },
  ],
  tables: [
    {
      caption: T('Os verbos do trecho'),
      head: ['Modo', 'Verbos', 'O que faz'],
      rows: [
        ['perfeito', 'disse, passou, levantou-se, adormeceu, acordou', 'conta a ação uma a uma'],
        ['imperfeito', 'batiam, era', 'faz o fundo da cena'],
        ['subjuntivo', 'passemos', 'imperativo disfarçado'],
        ['imperativo', 'cala-te, saí', 'a única ordem do trecho'],
        ['presente', 'tendes, haveis', 'a pergunta final'],
      ],
    },
    {
      caption: T('Os advérbios'),
      head: ['Advérbio', 'O que marca', 'Trecho'],
      rows: [
        ['primeiro', 'ordem', 'passou primeiro'],
        ['já', 'aspecto', 'já estava se enchendo'],
        ['meio', 'lugar', 'no meio da tempestade'],
        ['não', 'negação', 'não haveis'],
        ['ainda', 'negação posterior', 'ainda'],
      ],
    },
    {
      caption: T('As conjunções'),
      head: ['Conjunção', 'Quantas vezes', 'O que liga'],
      rows: [
        ['e', 'seis', 'ações seguidas'],
        ['mas', 'uma', 'o sono contra o estado do barco'],
        ['de modo que', 'uma', 'a causa da inundação'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “as ondas batiam contra o barco”, o verbo está no:'),
    options: [T('imperfeito'), T('perfeito'), T('futuro'), T('subjuntivo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Em “{cala-te, e saí}”, o verbo está no ______.'),
      answer: 'imperativo',
      hint: T('É a única ordem de Jesus no trecho.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “já estava se enchendo de água”, o advérbio {já} marca:'),
      options: [T('aspecto'), T('lugar'), T('ordem'), T('negação')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao modo.'),
      pairs: [
        { a: T('passou'), b: T('perfeito') },
        { a: T('batiam'), b: T('imperfeito') },
        { a: T('passemos'), b: T('subjuntivo') },
        { a: T('calma-te'), b: T('imperativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
