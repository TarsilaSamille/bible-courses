import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Fonemas e harakat'),
  subtitle: T('فَتْحَة، ضَمَّة، كَسْرَة: as três vogais breves'),
  section: T('Alfabeto e escrita'),
  body: C(`## Três marcas para três vogais

O árabe não escreve as vogais, ele as marca. São três marcas e três vogais: {فَتْحَة} vale {a}, {ضَمَّة} vale {u}, {كَسْرَة} vale {i}. Cada uma é um traço, não uma letra, e o lugar importa: fatha e damma ficam em cima da consoante, kasra embaixo, e a damma tem a forma de um {و} em miniatura. Uma quarta marca, {سُكُون}, avisa que a consoante não tem vogal nenhuma.

**Uma consoante sem marca se lê com fatha.** Quem vem do grego espera ver a vogal; quem vem do latim espera ver a letra longa. No árabe, o que não está escrito é {a}, e essa regra resolve metade das dúvidas de quem começa a ler um texto antigo.

## As três vogais longas

As longas têm letra própria: {ا} para {ā}, {و} para {ū}, {ي} para {ī}. Não recebem marca, porque a letra já é a vogal. Comparar {بَا} com {بَ} é comparar a mesma qualidade com duas durações, e a diferença é de tempo, não de som.

Isso cria um problema de leitura que não existe em português. O texto bíblico antigo escreve com frequência {اسم} onde a tradição vocalizada escreve {اسْم}, e {كتب} onde se lê {كَتَبَ}. As vogais longas quase nunca estão escritas e sobrevivem apenas na pronúncia: quem lê o manuscrito está lendo um texto com as vogais cortadas.

## Vinte e oito consoantes

São vinte e oito, e o critério de contagem não é o que se espera: {أ} conta como consoante, e {ء} conta como outra. O agrupamento que importa é o lugar da articulação, lábio, língua, garganta, porque é ele que explica por que letras quase idênticas no alfabeto latino produzem sons diferentes: {ت} e {ط} têm a mesma forma escrita na memória de um leitor ocidental e a língua em posições opostas.

## Critério de leitura

Leia a marca antes da letra, sempre. Em {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ}, o {بَ} é {a} breve, o {بِ} de {فِي} é {i} breve, e o {بْ} de {بَدْءِ} não tem vogal. Quem traduz sem ler as marcas escreve a mesma palavra para quatro coisas diferentes, e o texto perde o que ele afirmava.`),
  vocab: [
    V('فَتْحَة', 'فَتْحَة', 'vogal breve a; traço em cima da consoante'),
    V('ضَمَّة', 'ضَمَّة', 'vogal breve u; traço em forma de waw pequena'),
    V('كَسْرَة', 'كَسْرَة', 'vogal breve i; traço embaixo da consoante'),
    V('سُكُون', 'سُكُون', 'marca de consoante sem vogal'),
    V('بَ', 'بَ', 'ba, com vogal breve'),
    V('بِ', 'بِ', 'bi, com vogal breve'),
    V('بَا', 'بَا', 'ba longo'),
    V('بِي', 'بِي', 'bi longo'),
    V('أ', 'أ', 'alif com hamza em cima; a na posição inicial'),
    V('إ', 'إ', 'alif com hamza abaixo'),
    V('ء', 'ء', 'hamza; a consoante mais curta do alfabeto'),
    V('ه', 'ه', 'ha; soa como h nas línguas europeias modernas'),
    V('ط', 'ط', 't enfática; a língua sobe até a raiz da boca'),
    V('ض', 'ض', 'd enfática; língua e palato'),
    V('شَدَّة', 'شدة', 'shadda; marca de consoante duplicada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Que vogal tem a consoante {قْ} em {قَلْبٌ}?'),
    options: [T('a breve'), T('u breve'), T('nenhuma'), T('i breve')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O nome do sinal que avisa “consoante sem vogal” é ___.'),
      answer: 'سُكُون',
      hint: T('É a quarta marca, ao lado de fatha, damma e kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Associe sinal e vogal.'),
      pairs: [
        { a: T('فَتْحَة'), b: T('a breve') },
        { a: T('ضَمَّة'), b: T('u breve') },
        { a: T('كَسْرَة'), b: T('i breve') },
        { a: T('سُكُون'), b: T('sem vogal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Quantas consoantes tem o alfabeto árabe?'),
      options: [T('26'), T('27'), T('28'), T('29')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe letra e lugar da articulação.'),
      pairs: [
        { a: T('ط'), b: T('língua na raiz da boca') },
        { a: T('ب'), b: T('os dois lábios') },
        { a: T('ق'), b: T('fundo da garganta') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('As vogais breves são três marcas: {فَتْحَة} = {a}, {ضَمَّة} = {u}, {كَسْرَة} = {i}.'),
    },
    { n: '2', text: T('**Uma consoante sem harakat se lê com fatha.**') },
    {
      n: '3',
      text: T('A vogal longa tem letra própria, {ا}, {و} e {ي}, e por isso não recebe marca.'),
    },
    {
      n: '4',
      text: T(
        '{أ} e {إ} são consoantes e contam entre as 28; a vogal longa {ا} sem hamza é outra letra.',
      ),
    },
    {
      n: '5',
      text: T(
        'No texto bíblico antigo as vogais longas raramente estão escritas; elas ficam só na pronúncia.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cinco palavras, uma letra'),
      text: T(
        'Em {كَلِمَةٌ}, {كَلِمَتَانِ}, {كَلِمَتَيْنِ}, {كَلِمَةٍ} e {كَلِمَاتٍ} há cinco coisas distintas e uma única raiz escrita. A marca faz tudo o trabalho.',
      ),
    },
    {
      label: T('Por que ler as marcas'),
      text: T(
        'Traduzir sem as marcas é como traduzir português sem acentos: {pára} e {para} viram a mesma palavra, e o sentido do versículo muda.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبَ', gloss: T('kataba, ele escreveu; a breve nas duas vogais') },
    { text: 'كُتُبٌ', gloss: T('kutub, livros; u breve') },
    { text: 'بِسْمِ', gloss: T('bis-mi, em nome de; i breve') },
    { text: 'قَلْبٌ', gloss: T('qalb, coração; a consoante não tem vogal') },
    { text: 'كِتَابٌ', gloss: T('kitāb, livro; a vogal longa depois de i breve') },
    { text: 'نُورٌ', gloss: T('nūr, luz; a longa escrita com waw') },
    { text: 'سَمَاءٌ', gloss: T('samāʾ, céu; hamza no fim') },
    { text: 'أَحَدٌ', gloss: T('aḥad, um; hamza no começo') },
    { text: 'هَذَا', gloss: T('hādhā, este; o ha inicial') },
  ],
  tables: [
    {
      caption: T('As quatro marcas'),
      head: [T('Sinal'), T('Nome'), T('Posição'), T('Exemplo')],
      rows: [
        ['فَتْحَة', T('fatha'), T('em cima'), 'بَ = baT('],
        [')ضَمَّة', 'dammaT(', T(')em cima'), 'قُ = quT('],
        [')كَسْرَة', 'kasraT(', T(')embaixo'), 'بِ = biT('],
        [')سُكُون', 'sukunT(', T(')em cima, ovalT('), T(')قْ = q sem vogal')],
      ],
    },
    {
      caption: T('Breve e longa'),
      head: [T('Vogal'), T('Breve'), T('Longa'), T('Fonema')],
      rows: [
        [T('a'), 'بَ', 'بَا', T('a / aː')],
        [T('i'), 'بِ', 'بِي', T('i / iː')],
        [T('u'), 'قُرْ', 'نُور', T('u / uː')],
      ],
    },
    {
      caption: T('Onde cada consoante é formada'),
      head: [T('Grupo'), T('Letras'), T('Onde se forma')],
      rows: [
        [T('láBIOS'), 'ب م و فT(', T(')o lábio superior contra o inferiorT(')],
        [T(')dentes'), 'ث ذT(', T(')a ponta sai entre os dentesT(')],
        [T(')língua média'), 'ت د س ز رT(', T(')a ponta toca o dorso da línguaT(')],
        [T(')língua alta'), 'ط صT(', T(')a língua sobe até a raiz da bocaT(')],
        [T(')palato'), 'ش ضT(', T(')a língua encosta no palatoT(')],
        [T(')céu da boca'), 'لT(', T(')a ponta toca o céu da bocaT(')],
        [T(')garganta'), 'أ هT(', T(')a boca abre e o som sai livreT(')],
        [T(')fundo da garganta'), 'ح خ ع غ ق كT(', T(')o som vem do fundo')],
      ],
    },
  ],
};
