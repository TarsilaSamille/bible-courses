import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Como o árabe cria palavras novas'),
  subtitle: T('فَاعِل، مَفْعُول، مُفَعَّل، تَفَاعُل، اسْتَفْعَل'),
  section: T('O verbo'),
  body: C(`## Classe aberta e classe fechada

Uma classe de palavras é **aberta** quando a língua pode acrescentar membros nela para sempre, e **fechada** quando o conjunto é fixo e cabe numa lista. O critério não é o sentido, é a contabilidade.

No árabe, substantivo, verbo, adjetivo e advérbio são classes abertas. Article, pronoun, preposition, particle e numeral são fechadas. E a causa é uma só, e está na lição seguinte: **o árabe tem moldes para gerar palavras novas, e o molde é o que torna a classe aberta.** Um substantivo novo não é uma palavra escolhida de uma lista, é uma raiz encaixada num molde: {حِكْمَة} de {حَكَمَ}, {رِحْلَة} de {رَاحَ}, {عَجَبَة} de {عَجِبَ}. Três palavras que nenhuma outra língua aprovaria e que o árabe produz sem esforço.

Uma classe fechada é o oposto, e é por isso que ela se ensina como lista. O artigo é um só. Os pronomes são vinte e seis. As preposições são cerca de cinquenta, contando as abreviadas. Os numerais são uma tabela de três a mil.

## Os quinze moldes do verbo

Os quinze moldes do verbo são o motor da língua, e eles não são decorativos: são a razão de de o verbo ser uma classe aberta. Cada molde é um esqueleto de três ou quatro vogais e consoantes com a raiz encaixada, e cada um acrescenta um sentido próprio.

A primeira forma é {فَعَلَ}. A segunda, {فَعَّلَ}, é intensidade. A terceira, {فَاعَلَ}, é Bidirectional: {عَالَمَ} significa "trabalhar com" e "conhecer", e a mesma palavra faz os dois. A quarta, {أُفْعِلَ}, é destinatário. A quinta, {تَفَعَّلَ}, é ação aos poucos. A sexta, {تَفَاعَلَ}, é ação reciproca. A sétima, {اِفْتَعَلَ}, é effort. A oitava, {اِفْتَعَلَ}, é receive. A nona, {اِفْعَلَ}, tem um valor reflexivo. A décima, {اِسْتَفْعَلَ}, é pedir. E as cinco últimas têm prefixos que marcam a voz.

E a consequência para a leitura é direta: **quinco moldes explicam quase todos os verbos de qualquer página.** Quando um verbo tem prefixo {تَ} ou {نَ}, o leitor já sabe que é forma V ou X, e só precisa da raiz.

## As fechadas, e onde elas estão

A lista das classes fechadas é curta, e é a parte do curso que se decora inteira em uma tarde.

Artigo: um. Pronome: vinte e seis isolados, mais catorze formas anexas que são as mesmas com caso regido. Preposição: cerca de cinquenta, se contarmos as três abreviadas. Partícula: cerca de quarenta, contando os conectores, os negadores e as de Deus. Numeral: nove para os números de três a dez, e as regras fecham o resto.

E há uma quarta coisa que fecha a lista, e que é o mais árabe de tudo: o **tanwīn** {ـًا}, {ـٌا}, {ـًا}. Ele não é uma palavra, é uma terminação, e é com ele que o adjetivo vira advérbio em duas letras: {جَدِيد} mais {ـًا} dá {جَدِيدًا}, "recentemente". A classe do advérbio é aberta e a gramática do advérbio tem uma regra só.

## Critério de leitura

Em {وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ} há três coisas que este curso inteiro_instances. O substantivo {خُلُقٍ} está no genitivo por causa de {لِـ}, e o plural é quebrado, do molde {فُعْل}, que ninguém produz por regra. O adjetivo {عَظِيمٍ} está no mesmo caso, e por isso termina igual: {ـٍ}. E o advérbio {لَعَلَى} é uma partícula, uma classe fechada que se decora uma vez.

O que a frase mostra é que uma única linha pode trazer ao mesmo tempo um molde de substantivo, um molde de plural, uma partícula fechada e concordância de caso. Não é uma frase difícil: é uma frase comum, e o leitor que reconhece os quatro anda muito mais depressa.`),
  vocab: [
    V('حِكْمَة', 'حكمة', 'sabedoria'),
    V('رِحْلَة', 'رحلة', 'viagem'),
    V('عَجَبَة', 'عجب', 'maravilha'),
    V('نَجَّمَ', 'نجم', 'sucedeu'),
    V('تَحَالَفَ', 'حلف', 'aliou-se'),
    V('اسْتَقْلَلَ', 'قفل', 'foi trancado'),
    V('جَدِيدًا', 'جديد', 'recentemente'),
    V('مَهْمًا', 'مهم', 'importantemente'),
    V('خُلُقٍ', 'خلق', 'caráter; plural quebrado no genitivo'),
    V('عَظِيمٌ', 'عظيم', 'grande'),
    V('الـ', 'ال', 'o artigo definido'),
    V('هُوَ', 'هو', 'pronome'),
    V('مِنْ', 'من', 'preposição'),
    V('مِئَة', 'مئة', 'cem'),
    V('تَفَاعَلَ', 'فعل', 'o molde da sexta forma'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destas classes é fechada?'),
    options: [T('Substantivo'), T('Verbo'), T('Adjetivo'), T('Numeral')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o molde da sexta forma: {ت ___ اَعَلَ}.'),
      answer: 'فَ',
      hint: T('É o molde {تَفَاعَلَ}, de ação reciproca.'),
    },
    {
      kind: 'match',
      prompt: T('Associe molde e exemplo.'),
      pairs: [
        { a: T('فَعَّلَ'), b: T('نَجَّمَ') },
        { a: T('تَفَعَّلَ'), b: T('تَدَرَّبَ') },
        { a: T('تَفَاعَلَ'), b: T('تَحَالَفَ') },
        { a: T('اِسْتَفْعَلَ'), b: T('اسْتَقْلَلَ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Como se forma {جَدِيدًا} a partir de {جَدِيد}?'),
      options: [
        T('Por um prefixo'),
        T('Por {ـًا} no fim'),
        T('Por {الـ}'),
        T('Por um molde de verbo'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Quantas preposições tem o árabe, contando as abreviadas?'),
      options: [
        T('Cerca de cinco'),
        T('Cerca de cinquenta'),
        T('Cerca de quinhentos'),
        T('Exatamente sete'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**Uma classe é aberta quando a língua acrescenta membros nela sem parar, e fechada quando o conjunto é fixo e contável.**',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivo, verbo, adjetivo e advérbio são abertos no árabe porque há molde para cada palavra nova.',
      ),
    },
    {
      n: '3',
      text: T(
        'Artigo, pronome, preposição, partícula e numeral são fechados, e é por isso que se ensinam como lista.',
      ),
    },
    {
      n: '4',
      text: T('Os quinze moldes do verbo explicam quase todos os verbos de qualquer página.'),
    },
    {
      n: '5',
      text: T('Advérbio é a classe mais barata: quase todo advérbio é um adjetivo mais {tanwīn}.'),
    },
  ],
  notes: [
    {
      label: T('A contabilidade que ninguém faz'),
      text: T(
        'O português tem trinta e poucos advérbios formados com -mente, e essa é a prova de que a classe é produtiva. O árabe faz o mesmo com uma terminação: {جَدِيد} mais {ـًا} dá {جَدِيدًا}. O sufixo é menor e a regra é mais simples.',
      ),
    },
    {
      label: T('O molde não obriga'),
      text: T(
        'Ter um molde não obriga a usar a palavra. O padrão {فَعَّال} gera {غَفَّار}, "perdoador", e {عَلَّام}, "sábio", mas geraria também palavras que ninguém diz. A morfologia abre a porta; o hábito decide quem passa.',
      ),
    },
  ],
  examples: [
    { text: 'حِكْمَةٌ', gloss: T('sabedoria; nome novo de um molde antigo') },
    { text: 'رِحْلَةٌ', gloss: T('viagem; padrão {فِعْلَة}') },
    { text: 'عَجَبَةٌ', gloss: T('maravilha; padrão {فِعْلَة}') },
    { text: 'نَجَّمَ', gloss: T('sucedeu; segunda forma') },
    { text: 'تَحَالَفَ', gloss: T('aliou-se; sexta forma, ação reciproca') },
    { text: 'اسْتَقْلَلَ', gloss: T('foi trancado; décima forma') },
    { text: 'جَدِيدًا', gloss: T('recentemente; advérbio feito de um adjetivo') },
    { text: 'خُلُقٍ', gloss: T('caráter; plural quebrado no genitivo') },
    { text: 'مِئَةٌ', gloss: T('cem; numeral de classe fechada') },
  ],
  tables: [
    {
      caption: T('As quinze formas do verbo'),
      head: [T('N'), T('Padrão'), T('Valor'), T('Exemplo')],
      rows: [
        ['I', 'فَعَلَ', T('ação simples'), 'كَتَبَ'],
        ['II', 'فَعَّلَ', T('intensidade'), 'نَجَّمَ'],
        ['III', 'فَاعَلَ', T('ação nos dois sentidos'), 'عَالَمَ'],
        ['IV', 'أُفْعِلَ', T('dar destinatário'), 'أَخْبَرَ'],
        ['V', 'تَفَعَّلَ', T('aos poucos'), 'تَدَرَّبَ'],
        ['VI', 'تَفَاعَلَ', T('reciprocidade'), 'تَحَالَفَ'],
        ['VII', 'اِفْتَعَلَ', T('esforço'), 'اِجْتَهَدَ'],
        ['VIII', 'اِفْتَعَلَ', T('receber'), 'اِتَّخَذَ'],
        ['IX', 'اِفْعَلَ', T('reflexivo'), 'انْكَشَفَ'],
        ['X', 'اِسْتَفْعَلَ', T('pedir'), 'اسْتَقْلَلَ'],
        ['XI', 'فَاعِلَ', T('com sufixo de pessoa'), 'سَافَرْتُ'],
        ['XII', 'فَعِلَ', T('com prefixo de pessoa'), 'فَعِلْنَا'],
        ['XIII', 'فَعُولُ', T('com prefixo de pessoa'), 'فَعُولْنَا'],
        ['XIV', 'مَفْعُولُ', T('participativo'), 'مَقْتُولٌ'],
        ['XV', 'مَفْعِلُ', T('com prefixo de pessoa'), 'مَفْعِلْنَا'],
      ],
    },
    {
      caption: T('Classe aberta ou fechada'),
      head: [
        T('Classe'),
        T('Aberta ou fechada'),
        T('Por quê'),
        T('Exemplo'),
        T('Classe'),
        T('Aberta ou fechada'),
        T('Por quê'),
        T('Exemplo'),
      ],
      rows: [
        [
          T('substantivo'),
          T('aberta'),
          T('padrões geram nomes'),
          'حِكْمَة',
          T('artigo'),
          T('fechada'),
          T('um só morfema'),
          'الـ',
        ],
        [
          T('verbo'),
          T('aberta'),
          T('quinze moldes'),
          'تَحَالَفَ',
          T('pronome'),
          T('fechada'),
          T('26 formas fixas'),
          'هُوَ',
        ],
        [
          T('adjetivo'),
          T('aberta'),
          T('segue o nome novo'),
          'جَدِيدٌ',
          T('preposição'),
          T('fechada'),
          T('cerca de 50'),
          'مِنْ',
        ],
        [
          T('advérbio'),
          T('aberta'),
          T('adjetivo mais tanwīn'),
          'جَدِيدًا',
          T('numeral'),
          T('fechada'),
          T('tabela de 3 a mil'),
          'مِئَة',
        ],
      ],
    },
    {
      caption: T('Contagem das classes fechadas'),
      head: [T('Classe'), T('Quantidade'), T('Observação')],
      rows: [
        [T('artigos'), '1', T('mais a iḍāafa sem artigo')],
        [T('pronomes'), '26', T('mais 14 formas anexas')],
        [T('preposições'), '50', T('as longas e as três abreviadas')],
        [T('partículas'), '40', T('conectores, negadores e as de Deus')],
        [T('numerais de 3 a 10'), '8', T('tabela própria')],
        [T('numerais de 11 a 99'), '90', T('por regra, não por lista')],
      ],
    },
  ],
};
