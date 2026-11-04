import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('O plural e seus padrões'),
  subtitle: T('كُتُب، رِجَال، مُعَلِّمُون، مُعَلِّمَات'),
  section: T('Alfabeto e escrita'),
  body: C(`## O plural que é só um sufixo

O plural regular acrescenta um sufixo e não mexe no resto da palavra. O masculino ganha {ـون} no nominativo e {ـين} nos outros casos: {مُعَلِّمُونَ} e {مُعَلِّمِينَ}. O feminino ganha {ـات} em todos: {مُعَلِّمَاتٌ} e {مُعَلِّمَاتٍ}.

O que decide é o gênero, não o sentido. {مُعَلِّم} é masculino, e por isso o plural regular é {مُعَلِّمُونَ}; {مُعَلِّمَة} é feminino, e o plural regular é {مُعَلِّمَاتٌ}. Um substantivo que nada tem a ver com pessoas segue a mesma conta: {كِتَاب} é masculino e tem {كُتُب}, mas {شَجَرَة} é feminino e tem {أَشْجَار}.

Depois há uma restrição que costuma ser a primeira surpresa: **o plural regular masculino é reservado ao masculino humano** e a poucos casos. {رَجُل} não vira {رَجُول} nem {رَجُلان} como plural normal, e sim {رِجَال}. Por isso {أَقْوَال} é o plural de {قَوْل}, e não de {قَائِل}.

## Os padrões são a parte que serve

Quando o plural não é regular, o árabe o forma por um padrão. Um padrão é um molde de três ou quatro vogais e consoantes, com a raiz encaixada dentro, e é por isso que ele se repete. {كِتَاب} entra no molde {فُعُول} e sai {كُتُب}; {غُرْفَة} entra em {فُعَالَة} e sai {غُرَف}; {جَمِيل} entra em {مَفَاعِل} e sai {جَمَال}.

A conta é mecânica e é por isso que funciona: troque as vogais do molde, mantenha as consoantes da raiz na ordem, e você tem o plural. Não é poético nem decorativo. É o mesmo princípio que faz {كِتَاب} virar {كِتَابَة} por {مَفْعَالَة}, e quem reconhece o molde lê o plural sem nunca o ter visto.

## Os plurais que ninguém produz

Os padrões não cobrem tudo, e é a exceção que ocupa o resto da lição.

Os plurais humanos fogem: {رِجَال}, {نِسَاء}, {بَشَر}, {وَالِدَانِ}, {أَبَوَانِ}. Não há molde que os produza, e o plural de {رَجُل} não se parece com o de nenhuma outra palavra. O mesmo vale para os plurais coletivos, em que um nome de animal nomeia o rebanho inteiro: {بَقَر} não significa duas vacas, significa gado.

E há as palavras contadas, que seguem uma tabela própria: {أَلْفَة} para três a dez, {مِئَة} para cem, {أَلْف} para mil. Um nome próprio absorvido pelo substantivo é outro caso: {كَيْفَا} e {إِسْرَائِيل} podem ser plural de {كَيْف}, {إِسْرَائِيل} e {مِصْر} e {دُبَيْر} — e o contexto decide qual.

## Critério de leitura

O versículo do Pai-Nosso tem dois plurais irregulares na mesma frase: {رَبَّنَا آتِنَا لَوْجَنَا الْيَوْمَ وَاغْفِرْ لَنَا ذُيُوبَنَا}. Em {لَوْجَنَا} o singular {لَوْز} não aparece, e mesmo assim a terminação {ـنَا} mostra o primeiro plural; em {ذُيُوبَنَا} o mesmo. Um leitor que procura o singular para entender o plural não encontra nada em {لَوْجَنَا} e conclui que leu errado. O plural estava inteiro na palavra, e a forma do molde {أَفْعَال} é o que autoriza a leitura: {لَوْز} mais o molde daria {لَوَازَ}, que ninguém diz. O que faz {لَوْجَنَا} é {لَوْج} mais a terminação, e o {ج} do singular virou {ـنَ}.`),
  vocab: [
    V('كُتُب', 'كتب', 'livros; plural de {كِتَاب}'),
    V('رِجَال', 'رجل', 'homens; plural irregular'),
    V('نِسَاء', 'نساء', 'mulheres; plural irregular'),
    V('أَشْجَار', 'شجرة', 'árvores'),
    V('أَقْوَال', 'قول', 'ditos; o plural regular masculino alcança o abstrato'),
    V('جَمَال', 'جمال', 'belezas'),
    V('مُعَلِّمُونَ', 'معلم', 'mestres'),
    V('مُعَلِّمَاتٌ', 'معلم', 'mestras'),
    V('مَلِكُوت', 'ملكوت', 'reino; alguns aceitam o plural regular'),
    V('لَوْجَنَا', 'لوز', 'o plural de amêndoa na oração do Pai-Nosso'),
    V('ذُيُوبَنَا', 'ذنب', 'os pecados de nós'),
    V('بَشَر', 'بشر', 'seres humanos; plural irregular'),
    V('أَلْفَة', 'ألف', 'o substantivo dos números de três a dez'),
    V('مِئَة', 'مئة', 'cem'),
    V('وَالِدَانِ', 'والد', 'os dois pais'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural regular de {مُعَلِّمَة}?'),
    options: [T('مُعَلِّمُونَ'), T('مُعَلِّمَاتٌ'), T('مُعَلِّمِينَ'), T('مَلَامِح')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o plural de {كِتَاب}: ___تُب'),
      answer: 'كُ',
      hint: T('É o padrão فُعُول, com a raiz ك ت ب dentro.'),
    },
    {
      kind: 'match',
      prompt: T('Associe padrão e plural.'),
      pairs: [
        { a: T('فُعُول'), b: T('كُتُب') },
        { a: T('فُعَالَة'), b: T('رِجَال') },
        { a: T('مَفَاعِل'), b: T('جَمَال') },
        { a: T('أَفْعَال'), b: T('أَقْوَال') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destes plurais não segue nenhum padrão?'),
      options: [T('أَشْجَار'), T('رِجَال'), T('أَقْلَام'), T('جَمَال')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Em {لَوْجَنَا}, quantas pistas de plural a palavra traz?'),
      options: [T('Nenhuma'), T('A terminação {ـنَا}'), T('A shadda'), T('O artigo')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O plural regular masculino é {ـون} no nominativo e {ـين} nos demais casos; o feminino é {ـات}.',
      ),
    },
    { n: '2', text: T('**O que decide é o gênero: {مُعَلِّم} dá {مُعَلِّمُونَ} e {مُعَلِّمَة} dá {مُعَلِّمَاتٌ}.**') },
    {
      n: '3',
      text: T(
        'O plural regular masculino é reservado ao masculino humano e a poucos abstratos; {رَجُل} dá {رِجَال}.',
      ),
    },
    {
      n: '4',
      text: T(
        'No {جمع تكسير} o molde manda: troque as vogais do padrão e mantenha as consoantes da raiz.',
      ),
    },
    {
      n: '5',
      text: T('Plurais humanos, plurais coletivos e numerais contados não seguem nenhum padrão.'),
    },
  ],
  notes: [
    {
      label: T('Por que o molde funciona'),
      text: T(
        '{كِتَاب} segue {فُعُول} e dá {كُتُب}, {غُرْفَة} segue {فُعَالَة} e dá {غُرَف}. O princípio é o mesmo em toda a língua: a raiz ocupa as consoantes, o padrão ocupa as vogais.',
      ),
    },
    {
      label: T('Onde o plural engana'),
      text: T(
        'Em {بَقَر} e {إِبِل} o plural não conta animais, nomeia o rebanho inteiro. Traduzir como "as vacas" ou "os camelos" inverte o número: o texto diz o grupo, e o leitor precisa manter essa leitura.',
      ),
    },
  ],
  examples: [
    { text: 'كُتُبٌ', gloss: T('livros; padrão فُعُول') },
    { text: 'رِجَالٌ', gloss: T('homens; plural humano sem padrão') },
    { text: 'أَشْجَارٌ', gloss: T('árvores; plural regular feminino') },
    { text: 'أَقْوَالٌ', gloss: T('ditos; o regular masculino alcança o abstrato') },
    { text: 'جَمَالٌ', gloss: T('belezas; padrão مَفَاعِل') },
    { text: 'مُعَلِّمُونَ', gloss: T('mestres; nominativo com {ـون}') },
    { text: 'مُعَلِّمِينَ', gloss: T('mestres; acusativo ou genitivo com {ـين}') },
    { text: 'مُعَلِّمَاتٌ', gloss: T('mestras; {ـات} com damma final') },
    { text: 'لَوْجَنَا', gloss: T('amêndoas; plural irregular, sem singular na frase') },
  ],
  tables: [
    {
      caption: T('Os dois plurais regulares'),
      head: [T('Tipo'), T('Sufixo'), T('Nominativo'), T('Outros casos'), T('Exemplo')],
      rows: [
        [T('masculino regular'), 'ـون / ـين', 'ـُونَ', 'ـِينَ', 'مُعَلِّمُونَT('],
        [T(')feminino regular'), 'ـات', 'ـَاتٌ', 'ـَاتٍ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('Os padrões do جمع تكسير'),
      head: [
        T('Padrão'),
        T('Singular'),
        T('Plural'),
        T('Glosa'),
        T('Padrão'),
        T('Singular'),
        T('Plural'),
        T('Glosa'),
      ],
      rows: [
        ['فُعُول', 'كِتَاب', 'كُتُب', T('livros'), 'فُعَالَة', 'غُرْفَة', 'غُرَف', T('salas')],
        ['أَفْعَال', 'حِمَار', 'أَحْمِر', T('burros'), 'مَفَاعِل', 'جَمِيل', 'جَمَال', T('belezas')],
        ['فَعِيل', 'شَدِيد', 'شُدَاد', T('fortes'), 'فُعَل', 'قَوْل', 'أَقْوَال', T('ditos')],
      ],
    },
    {
      caption: T('Plurais que não seguem padrão'),
      head: [T('Tipo'), T('Exemplo'), T('O que acontece')],
      rows: [
        [T('humano masculino'), 'رِجَال', T('nenhum molde o produz')],
        [T('humano feminino'), 'نِسَاء', T('o singular é {نَسْوَة}')],
        [T('coletivo'), 'بَقَر', T('nomeia o rebanho, não os animais')],
        [T('numerais contados'), 'أَلْفَة، مِئَة، أَلْف', T('tabela própria, de três a mil')],
        [T('nome próprio'), 'إِسْرَائِيل', T('o nome absorve o substantivo do país')],
      ],
    },
  ],
};
